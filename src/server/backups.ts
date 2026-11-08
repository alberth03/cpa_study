import 'server-only';
import { z } from 'zod';
import { decodeProgress } from '@/lib/storage';
import { importLegacy } from '@/lib/legacy-import';
import { attemptSchema, type Progress } from '@/types/study';
import {
  preferencesSchema,
  type AttemptItem,
  type PrivateAttempt,
  type ProgressState,
} from '@/types/platform';
import { audit, one, run, transaction } from './db';
import { getAssessment, getCatalog, getJournal, getQuestion, getSimulation } from './content';
import { gradeItem, privateAttempts, questionItem } from './attempts';
import { progressState, preferences } from './progress';
import { ApiError } from './http';
import type { UserRow } from './auth';

const manifestSchema = z.object({
  id: z.string().max(200),
  activityId: z.string().max(150),
  title: z.string().max(200),
  section: z.enum(['far', 'aud', 'reg', 'bar', 'isc', 'tcp', 'fundamentals', 'intermediate']),
  kind: z.enum(['practice', 'mock', 'diagnostic', 'lesson', 'assessment', 'journal', 'simulation']),
  mode: z.enum(['tutor', 'exam']),
  status: z.enum(['active', 'submitted']),
  startedAt: z.string(),
  submittedAt: z.string().optional(),
  currentIndex: z.number().int().nonnegative(),
  items: z
    .array(
      z.object({
        kind: z.enum(['mcq', 'simulation', 'journal']),
        id: z.string().max(150),
        choiceOrder: z.array(z.string()).optional(),
      }),
    )
    .min(1)
    .max(120),
  answers: z.record(z.string(), z.record(z.string(), z.string().max(2000))),
  checked: z.array(z.string()).default([]),
  flags: z.array(z.string()).default([]),
  scratchpad: z.string().max(20000).default(''),
  blueprintYear: z.number().int().default(2026),
});
type Manifest = z.infer<typeof manifestSchema>;
const accountBackupSchema = z.object({
  format: z.literal('cpa-study-account'),
  version: z.literal(2),
  preferences: preferencesSchema,
  completedLessons: z.record(z.string(), z.string()),
  readLessons: z.record(z.string(), z.string()).default({}),
  bestScores: z.record(z.string(), z.number().min(0).max(100)),
  lastScores: z.record(z.string(), z.number().min(0).max(100)),
  mastered: z.array(z.string()),
  attempts: z.array(manifestSchema).max(100),
});
export function exportAccount(user: UserRow) {
  const state = progressState(user);
  const attempts = privateAttempts(user.id).map((a): Manifest => ({
    id: a.id,
    activityId: a.activityId,
    title: a.title,
    section: a.section,
    kind: a.kind,
    mode: a.mode,
    status: a.status,
    startedAt: a.startedAt,
    submittedAt: a.submittedAt,
    currentIndex: a.currentIndex,
    items: a.items.map((i) => ({
      kind: i.kind,
      id: i.id,
      choiceOrder: i.kind === 'mcq' ? i.question.choices.map((c) => c.sourceId || c.id) : undefined,
    })),
    answers: Object.fromEntries(
      a.items.map((i) => {
        const saved = { ...a.answers[i.id] };
        if (i.kind === 'mcq' && saved.choice) {
          const choice = i.question.choices.find((c) => c.id === saved.choice);
          saved.choice = choice?.sourceId || choice?.id || '';
        }
        return [i.id, saved];
      }),
    ),
    checked: a.checked,
    flags: a.flags,
    scratchpad: a.scratchpad,
    blueprintYear: a.blueprintYear,
  }));
  return {
    format: 'cpa-study-account',
    version: 2,
    exportedAt: new Date().toISOString(),
    profile: { name: user.name, email: user.email },
    preferences: preferences(user),
    completedLessons: state.completedLessons,
    readLessons: state.readLessons,
    bestScores: state.bestScores,
    lastScores: state.lastScores,
    mastered: state.mastered,
    attempts,
    notice:
      'This portable study backup contains no passwords, sessions, complete question text, or answer keys. Imported attempts are regraded and excluded from recommendation evidence. Active mocks import as untimed review assessments; use normal account sign-in for exact timed cross-device continuation.',
  };
}
function restoreManifest(user: UserRow, m: Manifest) {
  if (
    one(
      'SELECT id FROM attempts WHERE user_id=? AND (id=? OR import_legacy_id=?)',
      user.id,
      m.id,
      m.id,
    )
  )
    return;
  const items: AttemptItem[] = m.items.map((i) => {
    if (i.kind === 'mcq') {
      const q = getQuestion(i.id);
      if (q.courseId !== m.section) throw new Error('Section mismatch');
      const generated = questionItem(q) as Extract<AttemptItem, { kind: 'mcq' }>;
      if (i.choiceOrder) {
        if (
          i.choiceOrder.length !== q.choices.length ||
          new Set(i.choiceOrder).size !== q.choices.length
        )
          throw new Error('Invalid choice order');
        const choices = i.choiceOrder.map((id) =>
          generated.question.choices.find((c) => c.sourceId === id),
        );
        if (choices.some((c) => !c)) throw new Error('Content revision changed');
        generated.question.choices = choices as typeof generated.question.choices;
      }
      return generated;
    }
    if (i.kind === 'simulation') {
      const simulation = getSimulation(i.id);
      if (simulation.courseId !== m.section) throw new Error('Section mismatch');
      return { kind: 'simulation', id: i.id, simulation };
    }
    const journal = getJournal().find((q) => q.id === i.id);
    if (!journal || m.section !== 'far') throw new Error('Unknown journal item');
    return { kind: 'journal', id: i.id, journal };
  });
  if (new Set(items.map((i) => i.id)).size !== items.length) throw new Error('Duplicate items');
  const answers = structuredClone(m.answers);
  for (const item of items)
    if (item.kind === 'mcq' && answers[item.id]?.choice) {
      const selected = item.question.choices.find((c) => c.sourceId === answers[item.id].choice);
      if (!selected) throw new Error('Unknown answer');
      answers[item.id].choice = selected.id;
    }
  const date = Number.isNaN(new Date(m.startedAt).getTime())
    ? new Date().toISOString()
    : m.startedAt;
  const a: PrivateAttempt = {
    id: crypto.randomUUID(),
    userId: user.id,
    activityId: m.activityId,
    title: m.title,
    url: '/practice/session',
    section: m.section,
    kind: m.kind === 'mock' && m.status === 'active' ? 'assessment' : m.kind,
    mode: m.mode,
    status: m.status,
    startedAt: date,
    submittedAt: m.status === 'submitted' ? m.submittedAt || date : undefined,
    items,
    currentIndex: Math.min(m.currentIndex, items.length - 1),
    answers,
    flags: m.flags.filter((id) => items.some((i) => i.id === id)),
    checked: m.checked.filter((id) => items.some((i) => i.id === id)),
    results: [],
    version: 0,
    testlets: [
      {
        id: 1,
        kind: 'mixed',
        itemIds: items.map((i) => i.id),
        submittedAt: m.status === 'submitted' ? m.submittedAt || date : undefined,
      },
    ],
    currentTestlet: 0,
    breakUsed: false,
    deadline: null,
    timeLimitSeconds: null,
    itemTimes: {},
    lastActiveAt: Date.now(),
    firstExposures: [],
    visited: [],
    passPercent: null,
    blueprintYear: m.blueprintYear,
    imported: true,
    scratchpad: m.scratchpad,
    importLegacyId: m.id,
  };
  const graded = a.status === 'submitted' ? items : items.filter((i) => a.checked.includes(i.id));
  a.results = graded.flatMap((i) => gradeItem(a, i, Date.now()));
  run(
    'INSERT INTO attempts(id,user_id,activity_id,section,status,kind,started_at,submitted_at,version,data_json,imported,import_legacy_id) VALUES(?,?,?,?,?,?,?,?,?,?,1,?)',
    a.id,
    user.id,
    a.activityId,
    a.section,
    a.status,
    a.kind,
    a.startedAt,
    a.submittedAt || null,
    0,
    JSON.stringify(a),
    m.id,
  );
}
function legacyManifest(a: Progress['attempts'][string]): Manifest {
  const section = a.questions?.[0]?.courseId || 'far';
  const items: Manifest['items'] =
    a.kind === 'mcq'
      ? (a.questions || []).map((q) => ({
          kind: 'mcq',
          id: q.id,
          choiceOrder: q.choices.map((c) => c.id),
        }))
      : a.kind === 'simulation'
        ? (a.simulationIds || []).map((id) => ({ kind: 'simulation', id }))
        : a.journalQuestions!.map((q) => ({ kind: 'journal', id: q.id }));
  const answers: Manifest['answers'] = {};
  for (const item of items) {
    if (item.kind === 'mcq') answers[item.id] = { choice: a.answers[item.id] || '' };
    else if (item.kind === 'simulation') {
      const sim = getSimulation(item.id);
      answers[item.id] = Object.fromEntries(sim.fields.map((f) => [f.id, a.answers[f.id] || '']));
    } else {
      answers[item.id] = {};
      for (let i = 0; i < 4; i++)
        for (const field of ['account', 'debit', 'credit'])
          answers[item.id][`r${i}-${field}`] = a.answers[`${item.id}:${i}:${field}`] || '';
    }
  }
  return manifestSchema.parse({
    id: a.id,
    activityId: a.activityId,
    title: a.title,
    section,
    kind: a.kind === 'mcq' ? 'assessment' : a.kind,
    mode: a.feedback === 'immediate' ? 'tutor' : 'exam',
    status: a.status,
    startedAt: a.startedAt,
    submittedAt: a.submittedAt,
    currentIndex: a.index,
    items,
    answers,
    checked: Object.keys(a.locked).filter((k) => a.locked[k]),
    flags: a.flags,
    scratchpad: '',
    blueprintYear: 2026,
  });
}
export async function importBackup(
  user: UserRow,
  input: unknown,
): Promise<{ state: ProgressState; issues: string[] }> {
  const wrapper = z.record(z.string(), z.unknown()).parse(input),
    issues: string[] = [];
  let completed: Record<string, string>,
    reads: Record<string, string> = {},
    best: Record<string, number>,
    last: Record<string, number>,
    mastered: string[],
    manifests: Manifest[],
    prefs = preferences(user);
  if (wrapper.format === 'cpa-study-account') {
    const parsed = accountBackupSchema.parse(input);
    completed = parsed.completedLessons;
    reads = parsed.readLessons;
    best = parsed.bestScores;
    last = parsed.lastScores;
    mastered = parsed.mastered;
    manifests = parsed.attempts;
    prefs = parsed.preferences;
  } else {
    let old: Progress;
    if (wrapper.format === 'cpa-study-legacy') {
      const storage = z.record(z.string(), z.string()).parse(wrapper.storage);
      const result = await importLegacy(
        { getItem: (key) => storage[key] || null },
        async <T>(kind: string, id: string): Promise<T> => {
          const value =
            kind === 'assessments'
              ? getAssessment(id)
              : kind === 'simulations'
                ? getSimulation(id)
                : getJournal();
          return value as T;
        },
      );
      old = result.progress;
      issues.push(...result.issues);
    } else old = decodeProgress(JSON.stringify(wrapper.progress || input));
    completed = old.completedLessons;
    best = old.bestScores;
    last = old.lastScores;
    mastered = old.mastered;
    manifests = [];
    for (const oldAttempt of Object.values(old.attempts))
      try {
        manifests.push(legacyManifest(attemptSchema.parse(oldAttempt)));
      } catch {
        issues.push(`Could not map ${oldAttempt.title}; its saved score can still be retained.`);
      }
  }
  if (manifests.length > 100) throw new ApiError(400, 'Import at most 100 attempts in one backup.');
  transaction(() => {
    const current = one<UserRow>('SELECT * FROM users WHERE id=?', user.id);
    if (!current || current.progress_generation !== user.progress_generation)
      throw new ApiError(
        409,
        'Progress changed while this import was being prepared. Reload and try again.',
        'progress_reset',
      );
    for (const l of getCatalog().lessons)
      if (completed[l.id] || reads[l.id])
        run(
          'INSERT INTO lesson_progress(user_id,lesson_id,read_at,completed_at) VALUES(?,?,?,?) ON CONFLICT(user_id,lesson_id) DO UPDATE SET completed_at=COALESCE(lesson_progress.completed_at,excluded.completed_at)',
          user.id,
          l.id,
          new Date().toISOString(),
          completed[l.id] ? new Date().toISOString() : null,
        );
    for (const id of new Set([...Object.keys(best), ...Object.keys(last), ...mastered]))
      run(
        'INSERT INTO imported_scores(user_id,activity_id,best,last,mastered) VALUES(?,?,?,?,?) ON CONFLICT(user_id,activity_id) DO UPDATE SET best=MAX(COALESCE(imported_scores.best,0),COALESCE(excluded.best,0)),last=COALESCE(imported_scores.last,excluded.last),mastered=MAX(imported_scores.mastered,excluded.mastered)',
        user.id,
        id,
        best[id] ?? null,
        last[id] ?? null,
        Number(mastered.includes(id)),
      );
    for (const m of manifests)
      try {
        restoreManifest(user, m);
      } catch {
        issues.push(`Could not restore ${m.title}. Its content identifiers may have changed.`);
      }
    try {
      new Intl.DateTimeFormat('en-US', { timeZone: prefs.timezone });
    } catch {
      prefs.timezone = 'UTC';
    }
    run(
      'UPDATE users SET legacy_imported=1,preferences_json=? WHERE id=?',
      JSON.stringify(prefs),
      user.id,
    );
    audit(user.id, 'progress.import', user.id, `${manifests.length} attempt manifests processed`);
  });
  return { state: progressState(one<UserRow>('SELECT * FROM users WHERE id=?', user.id)!), issues };
}
