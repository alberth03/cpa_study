import { describe, expect, it } from 'vitest';
import {
  analyzeTopics,
  recommendDisciplines,
  successConsistency,
  type Evidence,
} from '@/lib/analytics';
import { preferencesSchema, type StudyResult } from '@/types/platform';
const definition = {
  id: 'far-financial-reporting',
  section: 'far',
  areaId: 'far-I',
  title: 'Financial reporting',
  lessonId: 'far-m1-l1',
  supplementary: false,
};
const event = (
  index: number,
  correct: boolean,
  overrides: Partial<StudyResult> = {},
): Evidence => ({
  attemptId: `attempt-${Math.floor(index / 3)}`,
  kind: 'practice',
  result: {
    id: `q${index}`,
    itemId: `q${index}`,
    label: 'Case',
    group: 'Financial reporting',
    correct,
    answered: true,
    answer: 'response',
    expected: 'expected',
    explanation: 'reason',
    section: 'far',
    areaId: 'far-I',
    topicId: definition.id,
    difficulty: 'application',
    skill: 'application',
    kind: 'mcq',
    elapsedMs: 30000,
    firstExposure: true,
    answeredAt: new Date(Date.UTC(2026, 10, 1 + Math.floor(index / 3))).toISOString(),
    ...overrides,
  },
});
describe('evidence-based analytics', () => {
  it('does not label one error as a persistent weakness', () => {
    const topic = analyzeTopics([event(0, false), event(1, true)], [definition])[0];
    expect(topic.weak).toBe(false);
    expect(topic.confidence).toBe('limited');
    expect(topic.interval[1] - topic.interval[0]).toBeGreaterThan(50);
  });
  it('identifies repeated low performance only with multiple items and attempts', () => {
    const topic = analyzeTopics(
      Array.from({ length: 12 }, (_, i) => event(i, i === 2)),
      [definition],
      Date.UTC(2026, 10, 8),
    )[0];
    expect(topic.weak).toBe(true);
    expect(topic.attempts).toBe(4);
    expect(topic.recommendation).toContain('Review Financial reporting');
  });
  it('keeps missing Discipline evidence uncertain and does not infer TCP from business law', () => {
    const events = Array.from({ length: 12 }, (_, i) =>
      event(i, true, { section: 'reg', topicId: 'reg-contracts-agency' }),
    );
    const choices = recommendDisciplines(
      events,
      [],
      preferencesSchema.parse({ interests: ['tax'] }),
    );
    expect(choices.find((c) => c.section === 'tcp')?.score).toBeNull();
    expect(choices.every((c) => c.confidence === 'insufficient')).toBe(true);
  });
  it('uses relevant evidence, direct diagnostics, and consistent success transparently', () => {
    const events = Array.from({ length: 24 }, (_, i) => event(i, true));
    const topics = analyzeTopics(events, [definition], Date.UTC(2026, 10, 8));
    const diagnostic = Array.from({ length: 12 }, (_, i) => ({
      ...event(i, true, { section: 'bar' }),
      kind: 'diagnostic',
    }));
    const choice = recommendDisciplines(
      [...events, ...diagnostic],
      topics,
      preferencesSchema.parse({ interests: ['reporting', 'analysis'] }),
    ).find((c) => c.section === 'bar')!;
    expect(choice.score).toBeGreaterThan(60);
    expect(choice.stage).toBe('refined');
    expect(choice.diagnosticAccuracy).toBe(100);
    expect(successConsistency([0, 0, 0])).toBe(0);
  });
});
