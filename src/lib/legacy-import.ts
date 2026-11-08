import catalog from '@/content/catalog.json';
import type {
  Assessment,
  Attempt,
  JournalQuestion,
  Progress,
  Question,
  Simulation,
} from '@/types/study';
import { emptyProgress } from './storage';
import { gradeQuestion } from './grading';

type LegacyQuestion = {
  question: string;
  answers: string[];
  correctAnswer: number;
  finalExamModuleId?: number;
};
interface LegacyState {
  questions?: LegacyQuestion[];
  index?: number;
  moduleId?: number;
  answers?: unknown[];
  flags?: boolean[];
  results?: { selectedAnswer?: number; correct?: boolean }[];
}
export interface LegacyStorage {
  getItem(key: string): string | null;
}
export type ContentLoader = <T>(kind: string, id: string) => Promise<T>;
export function legacyAttempt(
  activityId: string,
  title: string,
  url: string,
  kind: Attempt['kind'],
  index = 0,
): Attempt {
  return {
    id: `legacy-${activityId}`,
    activityId,
    title,
    url,
    kind,
    index: Math.max(0, index),
    feedback: 'immediate',
    status: 'active',
    startedAt: new Date(0).toISOString(),
    answers: {},
    locked: {},
    flags: [],
    results: [],
    review: false,
    passPercent: null,
  };
}
const normalize = (s: string) =>
  s
    .replace(/^[A-D]\.\s*/, '')
    .replace(/\s+/g, ' ')
    .trim();
export function restoreQuestion(q: LegacyQuestion, bank: Question[]): Question {
  const canonical = bank.find(
    (item) =>
      normalize(item.prompt) === normalize(q.question) &&
      (!q.finalExamModuleId || q.finalExamModuleId === item.moduleId),
  );
  if (!canonical || !Array.isArray(q.answers))
    throw new Error('Saved question no longer matches the course content.');
  const choices = q.answers.map((text) =>
    canonical.choices.find((c) => normalize(c.text) === normalize(text)),
  );
  if (
    choices.some((c) => !c) ||
    new Set(choices.map((c) => c!.id)).size !== canonical.choices.length
  )
    throw new Error('Saved choices do not match.');
  return { ...canonical, choices: choices as Question['choices'] };
}
export async function importLegacy(
  source: LegacyStorage,
  load: ContentLoader,
): Promise<{ progress: Progress; issues: string[] }> {
  const progress = emptyProgress(),
    issues: string[] = [];
  for (const l of catalog.lessons) {
    const key =
      l.courseId === 'fundamentals'
        ? `fundamentalsLesson${l.number}`
        : `${l.courseId}Module${l.moduleId}Lesson${l.number}`;
    if (
      source.getItem(key) === 'true' ||
      (l.id === 'fundamentals-l1' && source.getItem('lesson1Completed') === 'true')
    )
      progress.completedLessons[l.id] = 'imported';
  }
  const score = (legacy: string, target: string, best = true) => {
    const value = source.getItem(legacy);
    if (
      value !== null &&
      value.trim() &&
      Number.isFinite(Number(value)) &&
      Number(value) >= 0 &&
      Number(value) <= 100
    )
      (best ? progress.bestScores : progress.lastScores)[target] = Number(value);
  };
  for (const [old, id] of [
    ['fundamentalsExam', 'fundamentals-final'],
    ['intermediateFinal', 'intermediate-final'],
    ['farFinalExam', 'far-final-mcq'],
    ['farFinalTBS', 'far-final-tbs'],
  ]) {
    const suffix = old.startsWith('far') ? 'Score' : '';
    score(`${old}Best${suffix}`, id);
    score(`${old}Last${suffix}`, id, false);
  }
  for (let m = 1; m <= 10; m++) {
    const id = `intermediate-m${m}-quiz`;
    score(`intermediateModule${m}QuizBest`, id);
    score(`intermediateModule${m}QuizLast`, id, false);
    if (source.getItem(`intermediateModule${m}Mastered`) === 'true') progress.mastered.push(id);
  }
  if (source.getItem('intermediateFinalPassed') === 'true')
    progress.mastered.push('intermediate-final');
  for (let m = 1; m <= 6; m++) {
    score(`farModule${m}PracticeBest`, `far-m${m}-practice`);
    if (source.getItem(`farModule${m}Mastered`) === 'true')
      progress.mastered.push(`far-m${m}-practice`);
    for (let s = 1; s <= 5; s++) score(`farModule${m}TBS${s}Score`, `far-m${m}-tbs${s}`);
  }
  score('farJournalPracticeBest', 'far-journal');
  const restore = async (key: string, fn: (state: LegacyState) => Promise<void>) => {
    const raw = source.getItem(key);
    if (!raw) return;
    try {
      const state = JSON.parse(raw);
      if (!state || typeof state !== 'object') throw new Error();
      await fn(state);
    } catch {
      issues.push(`Could not import ${key}. Its original saved data has been retained.`);
    }
  };
  for (const key of ['farPracticeActiveState', 'farFinalExamActiveState'])
    await restore(key, async (s) => {
      const final = key.startsWith('farFinal'),
        m = s.moduleId ?? 1;
      const id = final ? 'far-final-mcq' : `far-m${m}-practice`;
      const data = await load<Assessment>('assessments', id);
      if (!s.questions?.length || (final && s.questions.length !== 50)) throw new Error();
      const a = legacyAttempt(
        id,
        data.title,
        final ? '/learn/far/final/mcq' : `/learn/far/modules/${m}/practice`,
        'mcq',
        Math.min(s.index ?? 0, s.questions.length - 1),
      );
      a.questions = s.questions.map((q) => restoreQuestion(q, data.questions));
      a.feedback = data.feedback;
      a.passPercent = data.passPercent;
      a.questions.forEach((q, i) => {
        const index = final ? s.answers?.[i] : s.results?.[i]?.selectedAnswer;
        if (typeof index === 'number' && q.choices[index]) a.answers[q.id] = q.choices[index].id;
        if (s.flags?.[i]) a.flags.push(q.id);
        if (!final && a.answers[q.id]) {
          a.locked[q.id] = true;
          a.results.push(gradeQuestion(q, a.answers[q.id]));
        }
      });
      progress.attempts[a.id] = a;
    });
  await restore('farFinalTBSActiveState', async (s) => {
    if (!Array.isArray(s.answers) || s.answers.length !== 7) throw new Error();
    const a = legacyAttempt(
      'far-final-tbs',
      'FAR Final TBS Assessment',
      '/learn/far/final/tbs',
      'simulation',
      Math.min(s.index ?? 0, 6),
    );
    a.feedback = 'deferred';
    a.simulationIds = [];
    for (let i = 0; i < 7; i++) {
      const sim = await load<Simulation>('simulations', `far-final-tbs${i + 1}`);
      a.simulationIds.push(sim.id);
      const answers = s.answers[i] as Record<string, unknown> | null;
      for (const f of sim.fields) {
        const val = answers?.[f.legacyKey!];
        if (typeof val === 'number' && Number.isFinite(val)) a.answers[f.id] = String(val);
      }
    }
    progress.attempts[a.id] = a;
  });
  await restore('farJournalActiveState', async (s) => {
    const bank = await load<JournalQuestion[]>('journal', 'far-journal');
    const questions = (s.questions as unknown as { id: number }[])?.map((q) =>
      bank.find((b) => b.id === `far-journal-${q.id}`),
    );
    if (!questions?.length || questions.some((q) => !q)) throw new Error();
    const a = legacyAttempt(
      'far-journal',
      'FAR Journal Entry Practice',
      '/learn/far/journal',
      'journal',
      Math.min(s.index ?? 0, questions.length - 1),
    );
    a.journalQuestions = questions as JournalQuestion[];
    s.results?.forEach((r, i) => {
      const q = a.journalQuestions![i];
      if (q) {
        a.locked[q.id] = true;
        a.results.push({
          id: q.id,
          label: q.question,
          group: q.topic,
          correct: !!r.correct,
          answer: 'Imported graded response',
          expected: JSON.stringify(q.correctEntries),
          explanation: q.explanation,
        });
      }
    });
    progress.attempts[a.id] = a;
  });
  const page = source.getItem('cpaCurrentPage');
  try {
    const p = JSON.parse(page ?? 'null');
    const lesson = catalog.lessons.find(
      (l) =>
        l.courseId ===
          (p?.page === 'fundamentalsLesson'
            ? 'fundamentals'
            : p?.page === 'intermediateLesson'
              ? 'intermediate'
              : p?.page === 'farLesson'
                ? 'far'
                : null) &&
        l.number === p.lessonId &&
        (l.moduleId === 0 || l.moduleId === p.moduleId),
    );
    if (lesson) progress.lastLesson = lesson.id;
  } catch {
    /* An invalid location does not invalidate progress. */
  }
  progress.legacyImported = true;
  return { progress, issues };
}
