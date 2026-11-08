import { progressSchema, type Attempt, type Progress } from '@/types/study';
import { percent } from './grading';

// Version-1 browser format, retained for importing pre-account study history.
// Live account persistence is implemented in src/server/progress.ts and db.ts.

export const STORAGE_KEY = 'cpa-study:v1';
export const emptyProgress = (): Progress => ({
  version: 1,
  completedLessons: {},
  bestScores: {},
  lastScores: {},
  mastered: [],
  attempts: {},
  activityDays: {},
  legacyImported: false,
});
export function decodeProgress(text: string): Progress {
  return progressSchema.parse(JSON.parse(text));
}
export function dayKey(date = new Date()): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}
export function saveAttempt(progress: Progress, attempt: Attempt, date = new Date()): Progress {
  const previous = progress.attempts[attempt.id];
  // A submitted attempt is immutable and counts toward statistics exactly once.
  if (previous?.status === 'submitted') return progress;
  const next = { ...progress, attempts: { ...progress.attempts, [attempt.id]: attempt } };
  if (attempt.status === 'submitted') {
    const score = percent(attempt.results);
    next.bestScores = {
      ...progress.bestScores,
      [attempt.activityId]: Math.max(progress.bestScores[attempt.activityId] ?? 0, score),
    };
    next.lastScores = { ...progress.lastScores, [attempt.activityId]: score };
    if (attempt.passPercent !== null && score >= attempt.passPercent)
      next.mastered = [...new Set([...progress.mastered, attempt.activityId])];
  }
  const newlyGraded = attempt.results.filter(
    (r) => !previous?.results.some((old) => old.id === r.id),
  ).length;
  if (newlyGraded)
    next.activityDays = {
      ...progress.activityDays,
      [dayKey(date)]: (progress.activityDays[dayKey(date)] ?? 0) + newlyGraded,
    };
  return next;
}
export function mergeProgress(current: Progress, imported: Progress): Progress {
  const attempts = { ...current.attempts };
  for (const [id, a] of Object.entries(imported.attempts)) {
    if (!attempts[id] || (attempts[id].status === 'active' && a.status === 'submitted'))
      attempts[id] = a;
  }
  const bestScores = { ...current.bestScores };
  for (const [id, score] of Object.entries(imported.bestScores))
    bestScores[id] = Math.max(bestScores[id] ?? 0, score);
  const activityDays = { ...current.activityDays };
  for (const [date, count] of Object.entries(imported.activityDays))
    activityDays[date] = Math.max(activityDays[date] ?? 0, count);
  return {
    ...current,
    completedLessons: { ...imported.completedLessons, ...current.completedLessons },
    bestScores,
    lastScores: { ...imported.lastScores, ...current.lastScores },
    mastered: [...new Set([...current.mastered, ...imported.mastered])],
    attempts,
    activityDays,
    lastLesson: current.lastLesson ?? imported.lastLesson,
    legacyImported: current.legacyImported || imported.legacyImported,
  };
}
