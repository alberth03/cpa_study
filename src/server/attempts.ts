import 'server-only';
import { randomUUID } from 'node:crypto';
import { z } from 'zod';
import { all, one, run, transaction } from './db';
import { ApiError } from './http';
import { resolvePracticeScope } from './practice';
import {
  getAssessment,
  getCatalog,
  getTopics,
  getJournal,
  getLesson,
  getSimulation,
  questionBank,
  simulationBank,
} from './content';
import {
  chooseMockQuestions,
  chooseMockSimulations,
  choosePractice,
  validForEdition,
  type History,
} from './selection';
import { sectionById } from '@/lib/blueprints';
import { analyzeTopics } from '@/lib/analytics';
import { selectQuestions, shuffle } from '@/lib/question-selection';
import { gradeJournal, gradeQuestion, gradeSimulation, parseAmount, percent } from '@/lib/grading';
import { clockExpired, MOCK_SECONDS, resumeClock, startBreak } from '@/lib/exam-clock';
import type {
  AttemptItem,
  AttemptReport,
  AttemptSummary,
  BankQuestion,
  BankSimulation,
  CourseId,
  PrivateAttempt,
  PublicAttempt,
  PublicItem,
  SectionId,
  StartAttempt,
  StudyResult,
} from '@/types/platform';
import type { UserRow } from './auth';

export const questionItem = (q: BankQuestion): AttemptItem => {
  const mappings = new Map(q.choices.map((c) => [c.id, randomUUID()]));
  return {
    kind: 'mcq',
    id: q.id,
    question: {
      ...q,
      choices: shuffle(q.choices).map((c) => ({
        id: mappings.get(c.id)!,
        sourceId: c.id,
        text: c.text,
      })),
      correctChoiceId: mappings.get(q.correctChoiceId)!,
      choiceExplanations: q.choiceExplanations
        ? Object.fromEntries(
            Object.entries(q.choiceExplanations).map(([id, text]) => [mappings.get(id)!, text]),
          )
        : undefined,
    },
  };
};
const simulationItem = (s: BankSimulation): AttemptItem => ({
  kind: 'simulation',
  id: s.id,
  simulation: s,
});
export const historyFor = (userId: string) =>
  all<History>('SELECT * FROM question_history WHERE user_id=?', userId);
export function privateAttempts(userId: string) {
  return all<{ data_json: string }>(
    'SELECT data_json FROM attempts WHERE user_id=? ORDER BY started_at',
    userId,
  ).map((row) => JSON.parse(row.data_json) as PrivateAttempt);
}
export function findAttempt(userId: string, id: string) {
  const row = one<{ data_json: string }>(
    'SELECT data_json FROM attempts WHERE id=? AND user_id=?',
    id,
    userId,
  );
  if (!row) throw new ApiError(404, 'Attempt not found.');
  return JSON.parse(row.data_json) as PrivateAttempt;
}
export function weakTopics(userId: string) {
  const evidence = privateAttempts(userId)
    .filter((a) => !a.imported)
    .flatMap((a) => a.results.map((result) => ({ attemptId: a.id, kind: a.kind, result })));
  return new Set(
    analyzeTopics(evidence, getTopics())
      .filter((t) => t.weak)
      .map((t) => t.id),
  );
}
export function createAttempt(user: UserRow, input: StartAttempt, now = Date.now()) {
  let items: AttemptItem[] = [],
    section: CourseId = 'far',
    activityId = '',
    title = '',
    url = '',
    kind: PrivateAttempt['kind'] = 'assessment',
    mode: PrivateAttempt['mode'] = 'tutor',
    timeLimitSeconds: number | null = null,
    passPercent: number | null = null,
    blueprintYear = 2026;
  const history = historyFor(user.id);
  if (input.source === 'lesson') {
    const lesson = getLesson(input.lessonId);
    items = [questionItem(lesson.quiz)];
    section = lesson.courseId as CourseId;
    activityId = `${lesson.id}-check`;
    title = `${lesson.title} — Knowledge check`;
    url = lesson.url;
    kind = 'lesson';
    passPercent = 100;
  } else if (input.source === 'activity') {
    activityId = input.activityId;
    const catalog = getCatalog(),
      activity = catalog.assessments.find((a) => a.id === activityId),
      simulation = catalog.simulations.find((s) => s.id === activityId);
    if (activity) {
      const data = getAssessment(activityId);
      section = data.courseId as CourseId;
      title = data.title;
      mode = data.feedback === 'immediate' ? 'tutor' : 'exam';
      passPercent = data.passPercent;
      const selected =
        data.selection === 'balanced'
          ? chooseMockQuestions(
              data.questions,
              section as SectionId,
              Math.min(50, data.questions.length),
              history,
            )
          : (selectQuestions(data) as BankQuestion[]);
      items = selected.map(questionItem);
      url = `/learn/${section}${data.moduleId ? `/modules/${data.moduleId}/${section === 'intermediate' ? 'quiz' : 'practice'}` : sectionById(section) ? '/final/mcq' : '/final'}`;
    } else if (simulation) {
      const data = getSimulation(activityId);
      section = data.courseId;
      items = [simulationItem(data)];
      title = data.title;
      kind = 'simulation';
      url = `/learn/${section}/modules/${data.moduleId}/simulations/${data.number}`;
    } else if (activityId.endsWith('-final-tbs')) {
      section = activityId.split('-')[0] as SectionId;
      if (!sectionById(section)) throw new ApiError(404, 'Assessment not found.');
      const selected =
        section === 'far'
          ? Array.from({ length: 7 }, (_, i) => getSimulation(`far-final-tbs${i + 1}`))
          : chooseMockSimulations(
              simulationBank(section),
              section,
              sectionById(section)!
                .testlets.slice(2)
                .reduce((a, b) => a + b, 0),
              history,
            );
      items = selected.map(simulationItem);
      title = `${section.toUpperCase()} Final TBS Assessment`;
      kind = 'simulation';
      mode = 'exam';
      url = `/learn/${section}/final/tbs`;
    } else if (activityId === 'far-journal') {
      const seen = new Map(history.map((h) => [h.item_id, h.seen_count]));
      items = shuffle(getJournal())
        .sort((a, b) => (seen.get(a.id) || 0) - (seen.get(b.id) || 0))
        .slice(0, 10)
        .map((journal) => ({ kind: 'journal', id: journal.id, journal }));
      kind = 'journal';
      title = 'FAR Journal Entry Practice';
      url = '/learn/far/journal';
    } else throw new ApiError(404, 'Activity not found.');
  } else if (input.source === 'practice') {
    const config = resolvePracticeScope(user.id, input.config);
    section = config.section;
    blueprintYear = config.blueprintYear;
    mode = config.mode === 'tutor' ? 'tutor' : 'exam';
    kind = 'practice';
    activityId = `custom-${section}`;
    title = `${section.toUpperCase()} ${config.focus} practice`;
    url = '/practice/session';
    timeLimitSeconds = config.minutes === null ? null : config.minutes * 60;
    const weak = weakTopics(user.id),
      mcqs = choosePractice(questionBank(section), config, history, weak),
      sims = choosePractice(simulationBank(section), config, history, weak);
    const simCount =
      config.type === 'simulation'
        ? config.count
        : config.type === 'mixed' && config.count >= 2
          ? Math.max(1, Math.round(config.count * 0.2))
          : 0;
    if (simCount > 20)
      throw new ApiError(400, 'Choose at most 20 simulations in one practice session.');
    const qCount = config.count - simCount;
    if (mcqs.length < qCount || sims.length < simCount)
      throw new ApiError(
        422,
        `This selection has ${mcqs.length} eligible MCQs and ${sims.length} eligible simulations. Reduce the count or broaden the filters.`,
        'insufficient_questions',
      );
    const selectedSims = sims.slice(0, simCount),
      exclude = new Set(selectedSims.map((s) => s.id));
    const filtered = mcqs.filter((q) => !exclude.has(q.familyId || ''));
    if (filtered.length < qCount)
      throw new ApiError(
        422,
        'There are not enough distinct cases for this mixed session. Broaden the filters.',
      );
    items = [...filtered.slice(0, qCount).map(questionItem), ...selectedSims.map(simulationItem)];
  } else {
    section = input.section;
    blueprintYear = input.source === 'mock' ? input.blueprintYear : 2026;
    kind = input.source;
    mode = 'exam';
    const definition = sectionById(section)!;
    const isMock = input.source === 'mock';
    const short = isMock && input.short;
    const tbsCount = isMock
      ? short
        ? 3
        : definition.testlets.slice(2).reduce((a, b) => a + b, 0)
      : 2;
    const qCount = isMock ? (short ? 20 : definition.testlets[0] + definition.testlets[1]) : 18;
    const sims = chooseMockSimulations(
      simulationBank(section).filter((s) => validForEdition(s, blueprintYear)),
      section,
      tbsCount,
      history,
    );
    const mcqs = chooseMockQuestions(
      questionBank(section).filter((q) => validForEdition(q, blueprintYear)),
      section,
      qCount,
      history,
      new Set(sims.map((s) => s.id)),
    );
    items = [...mcqs.map(questionItem), ...sims.map(simulationItem)];
    timeLimitSeconds = isMock ? (short ? 3600 : MOCK_SECONDS) : null;
    activityId = `${section}-${isMock ? (short ? 'short-mock' : 'mock') : 'diagnostic'}`;
    title = `${section.toUpperCase()} ${isMock ? (short ? 'Readiness Check' : 'Full-Length Mock Exam') : 'Discipline Diagnostic'}`;
    url = isMock ? `/mock-exams/${section}` : `/learn/disciplines/diagnostic?section=${section}`;
  }
  if (!items.length)
    throw new ApiError(422, 'There are no eligible study items for this activity.');
  if (blueprintYear !== 2026)
    throw new ApiError(
      422,
      'This edition is awaiting content review. Choose the published 2026 course or review the blueprint update queue.',
      'edition_unavailable',
    );
  const id = randomUUID();
  const attempt: PrivateAttempt = {
    id,
    userId: user.id,
    activityId,
    title,
    url,
    section,
    kind,
    mode,
    status: 'active',
    startedAt: new Date(now).toISOString(),
    items,
    currentIndex: 0,
    answers: {},
    flags: [],
    checked: [],
    results: [],
    version: 0,
    testlets: [],
    currentTestlet: 0,
    breakUsed: false,
    deadline: timeLimitSeconds === null ? null : now + timeLimitSeconds * 1000,
    timeLimitSeconds,
    itemTimes: {},
    lastActiveAt: now,
    firstExposures: [],
    visited: [],
    passPercent,
    blueprintYear,
    imported: false,
    scratchpad: '',
  };
  if (kind === 'mock') {
    const counts =
      timeLimitSeconds === MOCK_SECONDS ? sectionById(section)!.testlets : [10, 10, 1, 1, 1];
    let offset = 0;
    attempt.testlets = counts.map((count, i) => {
      const testlet = {
        id: i + 1,
        kind: i < 2 ? ('mcq' as const) : ('simulation' as const),
        itemIds: items.slice(offset, offset + count).map((i) => i.id),
      };
      offset += count;
      return testlet;
    });
  } else attempt.testlets = [{ id: 1, kind: 'mixed', itemIds: items.map((i) => i.id) }];
  transaction(() => {
    const freshUser = one<{ progress_generation: number }>(
      'SELECT progress_generation FROM users WHERE id=?',
      user.id,
    );
    if (!freshUser || freshUser.progress_generation !== user.progress_generation)
      throw new ApiError(
        409,
        'Progress changed before the attempt could be created. Reload and try again.',
        'progress_reset',
      );
    recordExposure(attempt, now);
    run(
      'INSERT INTO attempts(id,user_id,activity_id,section,status,kind,started_at,version,data_json,imported) VALUES(?,?,?,?,?,?,?,?,?,0)',
      id,
      user.id,
      activityId,
      section,
      'active',
      kind,
      attempt.startedAt,
      0,
      JSON.stringify(attempt),
    );
  });
  return attempt;
}
function recordExposure(a: PrivateAttempt, now: number) {
  if (a.breakState || a.status !== 'active') return;
  const item = a.items[a.currentIndex];
  if (a.visited.includes(item.id)) return;
  const prior = one<{ seen_count: number }>(
    'SELECT seen_count FROM question_history WHERE user_id=? AND item_id=?',
    a.userId,
    item.id,
  );
  if (!prior?.seen_count) a.firstExposures.push(item.id);
  a.visited.push(item.id);
  run(
    'INSERT INTO question_history(user_id,item_id,seen_count,last_seen_at) VALUES(?,?,1,?) ON CONFLICT(user_id,item_id) DO UPDATE SET seen_count=seen_count+1,last_seen_at=excluded.last_seen_at',
    a.userId,
    item.id,
    new Date(now).toISOString(),
  );
}
export function itemComplete(item: AttemptItem, answers: Record<string, string> = {}) {
  if (item.kind === 'mcq') return item.question.choices.some((c) => c.id === answers.choice);
  if (item.kind === 'simulation')
    return item.simulation.fields.every((f) =>
      f.type === 'select'
        ? f.options.some((o) => o.value === answers[f.id])
        : parseAmount(answers[f.id] || '') !== null,
    );
  return parseJournal(item, answers) !== null;
}
function parseJournal(
  item: Extract<AttemptItem, { kind: 'journal' }>,
  answers: Record<string, string>,
) {
  const entries = [];
  for (let i = 0; i < 4; i++) {
    const account = answers[`r${i}-account`] || '',
      dr = answers[`r${i}-debit`] || '',
      cr = answers[`r${i}-credit`] || '';
    if (!account && !dr && !cr) continue;
    const debit = dr.trim() ? parseAmount(dr) : 0,
      credit = cr.trim() ? parseAmount(cr) : 0;
    if (
      !item.journal.availableAccounts.includes(account) ||
      debit === null ||
      credit === null ||
      debit < 0 ||
      credit < 0 ||
      (debit > 0 && credit > 0) ||
      (debit === 0 && credit === 0)
    )
      return null;
    entries.push({ account, debit, credit });
  }
  return entries.length ? entries : null;
}
export function gradeItem(a: PrivateAttempt, item: AttemptItem, now: number): StudyResult[] {
  const answers = a.answers[item.id] || {},
    metadata =
      item.kind === 'mcq'
        ? item.question.metadata
        : item.kind === 'simulation'
          ? item.simulation.metadata
          : item.journal.metadata;
  const base = {
    itemId: item.id,
    section: a.section,
    areaId: metadata.areaId,
    topicId: metadata.topicId,
    skill: metadata.skill,
    kind: item.kind,
    elapsedMs: a.itemTimes[item.id] || 0,
    firstExposure: a.firstExposures.includes(item.id),
    answeredAt: new Date(now).toISOString(),
  };
  if (item.kind === 'mcq')
    return [
      {
        ...gradeQuestion(item.question, answers.choice),
        ...base,
        answered: itemComplete(item, answers),
        difficulty: item.question.difficulty,
        choiceExplanations: item.question.choiceExplanations,
      },
    ];
  if (item.kind === 'simulation')
    return gradeSimulation(item.simulation, answers).map((r, i) => ({
      ...r,
      ...base,
      answered: !!answers[item.simulation.fields[i].id]?.trim(),
      difficulty: item.simulation.difficulty,
      explanation: item.simulation.fields[i].explanation || '',
      elapsedMs: Math.round(base.elapsedMs / item.simulation.fields.length),
    }));
  const entries = parseJournal(item, answers);
  const format = (rows: { account: string; debit: number; credit: number }[]) =>
    rows
      .map(
        (e) =>
          `${e.account}: debit ${e.debit.toLocaleString('en-US')}, credit ${e.credit.toLocaleString('en-US')}`,
      )
      .join('; ');
  return [
    {
      ...base,
      id: item.id,
      label: item.journal.question,
      group: item.journal.topic,
      correct: !!entries && gradeJournal(entries, item.journal.correctEntries),
      answered: !!entries,
      answer: entries ? format(entries) : 'Unanswered or incomplete',
      expected: format(item.journal.correctEntries),
      explanation: item.journal.explanation,
      difficulty: 'advanced',
    },
  ];
}
function recordGrades(a: PrivateAttempt, results: StudyResult[]) {
  const groups = [...new Set(results.map((r) => r.itemId))];
  for (const id of groups) {
    if (a.results.some((r) => r.itemId === id)) continue;
    const own = results.filter((r) => r.itemId === id),
      correct = own.every((r) => r.correct),
      answered = own.some((r) => r.answered);
    if (answered)
      run(
        'INSERT INTO question_history(user_id,item_id,seen_count,graded_count,correct_count,last_correct,last_seen_at) VALUES(?,?,0,1,?,?,?) ON CONFLICT(user_id,item_id) DO UPDATE SET graded_count=graded_count+1,correct_count=correct_count+excluded.correct_count,last_correct=excluded.last_correct',
        a.userId,
        id,
        Number(correct),
        Number(correct),
        new Date().toISOString(),
      );
  }
  a.results.push(...results);
}
function finishPrivate(a: PrivateAttempt, now: number) {
  if (a.status === 'submitted') return;
  const fresh = a.items
    .filter((item) => !a.results.some((r) => r.itemId === item.id))
    .flatMap((item) => gradeItem(a, item, now));
  recordGrades(a, fresh);
  a.status = 'submitted';
  a.submittedAt = new Date(now).toISOString();
  a.breakState = undefined;
  for (const testlet of a.testlets) testlet.submittedAt ??= a.submittedAt;
  if (a.kind === 'lesson' && a.results.every((r) => r.correct)) {
    const lessonId = getCatalog().lessons.find((l) => `${l.id}-check` === a.activityId)?.id;
    if (lessonId)
      run(
        'INSERT INTO lesson_progress(user_id,lesson_id,read_at,mastered_at) VALUES(?,?,?,?) ON CONFLICT(user_id,lesson_id) DO UPDATE SET mastered_at=excluded.mastered_at',
        a.userId,
        lessonId,
        a.submittedAt,
        a.submittedAt,
      );
  }
}
function savePrivate(a: PrivateAttempt, previousVersion: number) {
  a.version = previousVersion + 1;
  const result = run(
    'UPDATE attempts SET data_json=?,status=?,submitted_at=?,version=? WHERE id=? AND user_id=? AND version=?',
    JSON.stringify(a),
    a.status,
    a.submittedAt || null,
    a.version,
    a.id,
    a.userId,
    previousVersion,
  );
  if (!result.changes)
    throw new ApiError(
      409,
      'This attempt changed on another device. Reload the latest saved version.',
      'conflict',
    );
}
function applyClock(a: PrivateAttempt, now: number) {
  if (a.status === 'submitted') return;
  if (a.breakState?.kind === 'scheduled' && now >= (a.breakState.endsAt || now))
    resumeClock(a, now);
  if (clockExpired(a, now)) finishPrivate(a, now);
}
export function loadAttempt(userId: string, id: string, now = Date.now()) {
  return transaction(() => {
    const a = findAttempt(userId, id),
      version = a.version,
      oldStatus = a.status,
      oldBreak = a.breakState;
    applyClock(a, now);
    if (a.status !== oldStatus || a.breakState !== oldBreak) savePrivate(a, version);
    return a;
  });
}
export const attemptActionSchema = z.discriminatedUnion('action', [
  z.object({
    action: z.literal('answer'),
    version: z.number().int(),
    itemId: z.string(),
    answers: z.record(z.string().max(150), z.string().max(2000)),
  }),
  z.object({
    action: z.literal('navigate'),
    version: z.number().int(),
    index: z.number().int().nonnegative(),
  }),
  z.object({ action: z.literal('flag'), version: z.number().int(), itemId: z.string() }),
  z.object({ action: z.literal('check'), version: z.number().int() }),
  z.object({
    action: z.literal('submit'),
    version: z.number().int(),
    confirmIncomplete: z.boolean().default(false),
  }),
  z.object({
    action: z.literal('advance'),
    version: z.number().int(),
    confirmIncomplete: z.boolean().default(false),
    takeBreak: z.boolean().default(false),
  }),
  z.object({ action: z.literal('resume'), version: z.number().int() }),
  z.object({ action: z.literal('heartbeat'), version: z.number().int() }),
  z.object({
    action: z.literal('scratchpad'),
    version: z.number().int(),
    text: z.string().max(20000),
  }),
]);
export type AttemptAction = z.infer<typeof attemptActionSchema>;
export function mutateAttempt(userId: string, id: string, action: AttemptAction, now = Date.now()) {
  return transaction(() => {
    const a = findAttempt(userId, id),
      version = a.version,
      wasActive = a.status === 'active';
    applyClock(a, now);
    if (a.status === 'submitted') {
      if (wasActive) savePrivate(a, version);
      return a;
    }
    if (action.version !== version)
      throw new ApiError(
        409,
        'Another device updated this attempt. Load the latest version.',
        'conflict',
      );
    const item = a.items[a.currentIndex],
      testlet = a.testlets[a.currentTestlet];
    if (!a.breakState)
      a.itemTimes[item.id] =
        (a.itemTimes[item.id] || 0) + Math.max(0, Math.min(60000, now - a.lastActiveAt));
    a.lastActiveAt = now;
    if (a.breakState && action.action !== 'resume' && action.action !== 'heartbeat')
      throw new ApiError(409, 'Resume the exam before answering.');
    switch (action.action) {
      case 'answer': {
        if (action.itemId !== item.id || a.checked.includes(item.id))
          throw new ApiError(409, 'This response is locked or is not the current question.');
        const keys =
          item.kind === 'mcq'
            ? ['choice']
            : item.kind === 'simulation'
              ? item.simulation.fields.map((f) => f.id)
              : Array.from({ length: 4 }, (_, i) => [
                  `r${i}-account`,
                  `r${i}-debit`,
                  `r${i}-credit`,
                ]).flat();
        if (Object.keys(action.answers).some((key) => !keys.includes(key)))
          throw new ApiError(400, 'Unknown response field.');
        if (
          item.kind === 'mcq' &&
          action.answers.choice &&
          !item.question.choices.some((c) => c.id === action.answers.choice)
        )
          throw new ApiError(400, 'Invalid answer choice.');
        a.answers[item.id] = { ...a.answers[item.id], ...action.answers };
        break;
      }
      case 'navigate': {
        const next = a.items[action.index];
        if (!next || !testlet.itemIds.includes(next.id))
          throw new ApiError(403, 'You can navigate only within the current testlet.');
        a.currentIndex = action.index;
        recordExposure(a, now);
        break;
      }
      case 'flag':
        if (!testlet.itemIds.includes(action.itemId))
          throw new ApiError(403, 'This testlet is locked.');
        else
          a.flags = a.flags.includes(action.itemId)
            ? a.flags.filter((x) => x !== action.itemId)
            : [...a.flags, action.itemId];
        break;
      case 'check': {
        if (a.mode !== 'tutor')
          throw new ApiError(403, 'Answers remain protected until this assessment is submitted.');
        if (a.checked.includes(item.id)) break;
        if (!itemComplete(item, a.answers[item.id]))
          throw new ApiError(400, 'Complete each response with a valid answer before checking.');
        recordGrades(a, gradeItem(a, item, now));
        a.checked.push(item.id);
        if (a.kind === 'lesson') finishPrivate(a, now);
        break;
      }
      case 'submit': {
        if (a.kind === 'mock' && a.currentTestlet !== a.testlets.length - 1)
          throw new ApiError(403, 'Submit the current testlet before proceeding through the exam.');
        const missing = a.items.filter((i) => !itemComplete(i, a.answers[i.id])).length;
        if (missing && !action.confirmIncomplete)
          throw new ApiError(
            409,
            `${missing} unanswered or incomplete items remain. Confirm submission to count them as incorrect.`,
            'incomplete',
          );
        finishPrivate(a, now);
        break;
      }
      case 'advance': {
        if (a.kind !== 'mock' || a.currentTestlet >= a.testlets.length - 1)
          throw new ApiError(400, 'There is no next testlet.');
        const missing = a.items.filter(
          (i) => testlet.itemIds.includes(i.id) && !itemComplete(i, a.answers[i.id]),
        ).length;
        if (missing && !action.confirmIncomplete)
          throw new ApiError(
            409,
            `${missing} items are incomplete. Confirm to seal this testlet permanently.`,
            'incomplete',
          );
        testlet.submittedAt = new Date(now).toISOString();
        a.currentTestlet++;
        a.currentIndex = a.items.findIndex((i) => i.id === a.testlets[a.currentTestlet].itemIds[0]);
        if (action.takeBreak) startBreak(a, a.currentTestlet === 3 && !a.breakUsed, now);
        recordExposure(a, now);
        break;
      }
      case 'resume':
        resumeClock(a, now);
        recordExposure(a, now);
        break;
      case 'heartbeat':
        break;
      case 'scratchpad':
        a.scratchpad = action.text;
        break;
    }
    savePrivate(a, version);
    return a;
  });
}
export function scores(a: PrivateAttempt) {
  const mcq = a.results.filter((r) => r.kind === 'mcq'),
    tbs = a.results.filter((r) => r.kind !== 'mcq');
  const mcqScore = mcq.length ? percent(mcq) : null;
  const groups = [...new Set(tbs.map((r) => r.itemId))];
  const tbsScore = groups.length
    ? Math.round(
        groups.reduce((total, id) => total + percent(tbs.filter((r) => r.itemId === id)), 0) /
          groups.length,
      )
    : null;
  const weighted = a.kind === 'mock' && mcqScore !== null && tbsScore !== null;
  const score = weighted
    ? Math.round(
        mcqScore! * sectionById(a.section)!.mcqWeight +
          tbsScore! * (1 - sectionById(a.section)!.mcqWeight),
      )
    : percent(a.results);
  return { score, mcqScore, tbsScore, weighted };
}
export function summary(a: PrivateAttempt): AttemptSummary {
  return {
    id: a.id,
    activityId: a.activityId,
    title: a.title,
    url: a.url,
    section: a.section,
    kind: a.kind,
    status: a.status,
    startedAt: a.startedAt,
    submittedAt: a.submittedAt,
    score: a.status === 'submitted' ? scores(a).score : null,
    answered: a.items.filter((i) => itemComplete(i, a.answers[i.id])).length,
    total: a.items.length,
    imported: a.imported,
    blueprintYear: a.blueprintYear,
  };
}
export function publicItem(item: AttemptItem): PublicItem {
  if (item.kind === 'mcq') {
    const q = item.question;
    return {
      kind: 'mcq',
      id: item.id,
      question: {
        id: q.id,
        courseId: q.courseId,
        moduleId: q.moduleId,
        lessonId: q.lessonId,
        topic: q.topic,
        prompt: q.prompt,
        choices: q.choices.map((c) => ({ id: c.id, text: c.text })),
        difficulty: q.difficulty,
        metadata: q.metadata,
        exhibits: q.exhibits,
      },
    };
  }
  if (item.kind === 'simulation') {
    const { explanation, fields, ...simulation } = item.simulation;
    void explanation;
    return {
      kind: 'simulation',
      id: item.id,
      simulation: {
        ...simulation,
        fields: fields.map(({ correct, explanation, ...field }) => {
          void correct;
          void explanation;
          return field;
        }),
      },
    };
  }
  const { correctEntries, explanation, ...journal } = item.journal;
  void correctEntries;
  void explanation;
  return { kind: 'journal', id: item.id, journal };
}
export function publicAttempt(a: PrivateAttempt, now = Date.now()): PublicAttempt {
  const item = a.items[a.currentIndex];
  return {
    ...summary(a),
    current: a.breakState ? null : publicItem(item),
    currentIndex: a.currentIndex,
    answers: a.breakState ? {} : a.answers[item.id] || {},
    flags: a.flags,
    checked: a.checked.includes(item.id),
    version: a.version,
    navigation: a.items.map((i, index) => ({
      id: i.id,
      number: index + 1,
      kind: i.kind,
      answered: itemComplete(i, a.answers[i.id]),
      flagged: a.flags.includes(i.id),
      accessible: a.testlets[a.currentTestlet].itemIds.includes(i.id),
    })),
    testlets: a.testlets.map((t) => ({
      id: t.id,
      kind: t.kind,
      count: t.itemIds.length,
      submitted: !!t.submittedAt,
    })),
    currentTestlet: a.currentTestlet,
    breakState: a.breakState,
    breakUsed: a.breakUsed,
    deadline: a.deadline,
    serverNow: now,
    mode: a.mode,
    feedback:
      a.mode === 'tutor' && a.checked.includes(item.id)
        ? a.results.filter((r) => r.itemId === item.id)
        : [],
    passPercent: a.passPercent,
    scratchpad: a.scratchpad,
  };
}
export function report(a: PrivateAttempt): AttemptReport {
  if (a.status !== 'submitted')
    throw new ApiError(403, 'Submit this assessment to view its results.');
  return {
    attempt: summary(a),
    results: a.results,
    ...scores(a),
    passPercent: a.passPercent,
    solutions: a.items
      .filter((i) => i.kind === 'simulation')
      .map((i) => ({ title: i.simulation.title, html: i.simulation.explanation })),
    testlets: a.testlets.map((t) => {
      const results = a.results.filter((r) => t.itemIds.includes(r.itemId));
      return {
        id: t.id,
        kind: t.kind,
        correct: results.filter((r) => r.correct).length,
        total: results.length,
      };
    }),
    timeSeconds: Math.round(Object.values(a.itemTimes).reduce((a, b) => a + b, 0) / 1000),
  };
}
