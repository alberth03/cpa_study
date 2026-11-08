import { all, audit, one, run, transaction } from './db';
import { preferencesSchema, type Preferences, type ProgressState } from '@/types/platform';
import { publicUser, type UserRow } from './auth';
import { privateAttempts, scores, summary } from './attempts';
import { ApiError } from './http';
import { getCatalog, getLesson } from './content';

export function preferences(user: UserRow): Preferences {
  const parsed = preferencesSchema.safeParse(JSON.parse(user.preferences_json || '{}'));
  return parsed.success ? parsed.data : preferencesSchema.parse({});
}
export function progressState(user: UserRow): ProgressState {
  const lessons = all<{
    lesson_id: string;
    read_at: string;
    completed_at: string | null;
    mastered_at: string | null;
  }>('SELECT * FROM lesson_progress WHERE user_id=? ORDER BY read_at', user.id);
  const attempts = privateAttempts(user.id),
    bestScores: Record<string, number> = {},
    lastScores: Record<string, number> = {},
    mastered = new Set<string>();
  for (const imported of all<{
    activity_id: string;
    best: number | null;
    last: number | null;
    mastered: number;
  }>('SELECT * FROM imported_scores WHERE user_id=?', user.id)) {
    if (imported.best !== null) bestScores[imported.activity_id] = imported.best;
    if (imported.last !== null) lastScores[imported.activity_id] = imported.last;
    if (imported.mastered) mastered.add(imported.activity_id);
  }
  const prefs = preferences(user),
    activityDays: Record<string, number> = {};
  for (const a of attempts) {
    if (a.status === 'submitted') {
      const score = scores(a).score;
      bestScores[a.activityId] = Math.max(bestScores[a.activityId] || 0, score);
      lastScores[a.activityId] = score;
      if (a.passPercent !== null && score >= a.passPercent) mastered.add(a.activityId);
    }
    if (!a.imported)
      for (const r of a.results) {
        const date = new Intl.DateTimeFormat('en-CA', {
          timeZone: prefs.timezone,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }).format(new Date(r.answeredAt));
        activityDays[date] = (activityDays[date] || 0) + 1;
      }
  }
  return {
    user: publicUser(user),
    preferences: prefs,
    generation: user.progress_generation,
    completedLessons: Object.fromEntries(
      lessons.filter((l) => l.completed_at).map((l) => [l.lesson_id, l.completed_at!]),
    ),
    readLessons: Object.fromEntries(lessons.map((l) => [l.lesson_id, l.read_at])),
    masteredLessons: lessons.filter((l) => l.mastered_at).map((l) => l.lesson_id),
    bestScores,
    lastScores,
    mastered: [...mastered],
    attempts: Object.fromEntries(attempts.map((a) => [a.id, summary(a)])),
    activityDays,
    lastLesson: lessons.at(-1)?.lesson_id,
    legacyImported: !!user.legacy_imported,
  };
}
export function markLesson(user: UserRow, id: string, completed = false) {
  getLesson(id);
  const now = new Date().toISOString();
  run(
    'INSERT INTO lesson_progress(user_id,lesson_id,read_at,completed_at) VALUES(?,?,?,?) ON CONFLICT(user_id,lesson_id) DO UPDATE SET read_at=excluded.read_at,completed_at=COALESCE(excluded.completed_at,lesson_progress.completed_at)',
    user.id,
    id,
    now,
    completed ? now : null,
  );
}
export function updatePreferences(user: UserRow, value: Preferences) {
  try {
    new Intl.DateTimeFormat('en-US', { timeZone: value.timezone }).format(new Date());
  } catch {
    throw new ApiError(400, 'Choose a valid time zone.');
  }
  if (value.examDate && Number.isNaN(new Date(`${value.examDate}T12:00:00Z`).getTime()))
    throw new ApiError(400, 'Choose a valid exam date.');
  run(
    'UPDATE users SET preferences_json=?,updated_at=? WHERE id=?',
    JSON.stringify(value),
    new Date().toISOString(),
    user.id,
  );
}
export function resetProgress(user: UserRow) {
  return transaction(() => {
    for (const table of [
      'lesson_progress',
      'attempts',
      'question_history',
      'imported_scores',
      'study_assignments',
    ])
      run(`DELETE FROM ${table} WHERE user_id=?`, user.id);
    const prefs = { ...preferences(user), selectedDiscipline: null, interests: [] };
    run(
      'UPDATE users SET progress_generation=progress_generation+1,legacy_imported=1,preferences_json=?,updated_at=? WHERE id=?',
      JSON.stringify(prefs),
      new Date().toISOString(),
      user.id,
    );
    audit(user.id, 'progress.reset', user.id);
    return one<UserRow>('SELECT * FROM users WHERE id=?', user.id)!;
  });
}
export function deleteAccount(user: UserRow) {
  transaction(() => {
    run('DELETE FROM email_outbox WHERE recipient=?', user.email);
    run('DELETE FROM audit_events WHERE actor_id=? OR target_id=?', user.id, user.id);
    run('DELETE FROM users WHERE id=?', user.id);
  });
}
export function assignTopic(user: UserRow, topicId: string, title: string, lessonId?: string) {
  if (lessonId && !getCatalog().lessons.some((l) => l.id === lessonId))
    throw new ApiError(400, 'Unknown lesson.');
  run(
    "INSERT INTO study_assignments(id,user_id,topic_id,title,lesson_id,created_at) VALUES(?,?,?,?,?,?) ON CONFLICT(user_id,topic_id) DO UPDATE SET status='open',completed_at=NULL",
    crypto.randomUUID(),
    user.id,
    topicId,
    title,
    lessonId || null,
    new Date().toISOString(),
  );
}
