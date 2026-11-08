import { analyzeSections, analyzeTopics, recommendDisciplines, trendSeries } from '@/lib/analytics';
import { getTopics } from './content';
import { privateAttempts, scores } from './attempts';
import { preferences } from './progress';
import { all } from './db';
import type { UserRow } from './auth';
import { examSections } from '@/lib/blueprints';

export function analytics(user: UserRow) {
  const attempts = privateAttempts(user.id),
    verified = attempts.filter((a) => !a.imported);
  const evidence = verified.flatMap((a) =>
    a.results.map((result) => ({ attemptId: a.id, kind: a.kind, result })),
  );
  const definitions = getTopics(),
    topics = analyzeTopics(evidence, definitions);
  const mocks = verified
    .filter((a) => a.kind === 'mock' && a.status === 'submitted' && a.timeLimitSeconds === 14400)
    .map((a) => ({ section: a.section, score: scores(a).score, date: a.submittedAt! }));
  const sections = analyzeSections(evidence, topics, definitions, mocks);
  const recommendations = recommendDisciplines(evidence, topics, preferences(user));
  const assignments = all<{
    id: string;
    topic_id: string;
    title: string;
    lesson_id: string | null;
    status: string;
    created_at: string;
  }>('SELECT * FROM study_assignments WHERE user_id=? ORDER BY created_at DESC', user.id);
  const latest = new Map<string, (typeof evidence)[number]>();
  for (const event of evidence) latest.set(event.result.id, event);
  const answered = evidence.filter((e) => e.result.answered);
  return {
    topics,
    sections,
    recommendations,
    trends: trendSeries(evidence),
    trendsBySection: Object.fromEntries(
      examSections.map((s) => [
        s.id,
        trendSeries(evidence.filter((e) => e.result.section === s.id)),
      ]),
    ),
    missed: [...latest.values()]
      .filter((e) => e.result.answered && !e.result.correct)
      .map((e) => ({ ...e.result, attemptId: e.attemptId })),
    overview: {
      responses: answered.length,
      accuracy: answered.length
        ? Math.round((answered.filter((e) => e.result.correct).length / answered.length) * 100)
        : null,
      simulations: new Set(
        answered
          .filter((e) => e.result.kind !== 'mcq')
          .map((e) => `${e.attemptId}:${e.result.itemId}`),
      ).size,
    },
    assignments,
    importedAttempts: attempts.filter((a) => a.imported).length,
    unanswered: verified.flatMap((a) => a.results).filter((r) => !r.answered).length,
    scoringNote:
      'Readiness and suitability are internal study indicators, not predictions of official CPA scaled scores. Imported history is displayed separately and is excluded from evidence-based recommendations.',
    methodology: {
      weakness:
        'At least 5 responses, 3 distinct items, and 2 attempts; recent mistakes and smoothed mastery below 65%.',
      readiness:
        'Topic mastery, coverage, simulations, consistent success, and recent full mocks; readiness also requires minimum evidence.',
      time: 'Active-time estimates are capped between server interactions and interpreted as pacing context, not ability.',
      recommendations:
        'Core-topic mapping with 35/25/15/15/10 component weights; available components are normalized. Direct diagnostics refine the result at 30%.',
    },
  };
}
