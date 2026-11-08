import type { CourseId, Preferences, SectionId, StudyResult } from '@/types/platform';
import { examSections } from './blueprints';

export interface Evidence {
  attemptId: string;
  kind: string;
  result: StudyResult;
}
export interface TopicDefinition {
  id: string;
  section: string;
  areaId: string;
  title: string;
  lessonId: string;
  supplementary: boolean;
}
export interface TopicMetric {
  id: string;
  section: string;
  areaId: string;
  title: string;
  lessonId: string;
  responses: number;
  uniqueItems: number;
  attempts: number;
  accuracy: number;
  mastery: number;
  confidence: 'limited' | 'developing' | 'strong';
  interval: [number, number];
  weak: boolean;
  trend: number | null;
  retention: number | null;
  averageSeconds: number | null;
  firstSeenAccuracy: number | null;
  familiarAccuracy: number | null;
  repeatedErrors: number;
  lastPracticed: string;
  recommendation: string;
}
export interface SectionMetric {
  id: SectionId;
  title: string;
  responses: number;
  mcqAccuracy: number | null;
  tbsAccuracy: number | null;
  coverage: number;
  readiness: number | null;
  ready: boolean;
  uniqueItems: number;
  simulations: number;
  recentMock: number | null;
  consistency: number | null;
  gaps: string[];
}
const mean = (values: number[]) =>
  values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
const accuracy = (events: Evidence[]) =>
  events.length
    ? Math.round((events.filter((e) => e.result.correct).length / events.length) * 100)
    : null;
const clamp = (x: number) => Math.max(0, Math.min(100, x));
export function successConsistency(values: number[]) {
  if (values.length < 2) return null;
  const average = mean(values),
    deviation = Math.sqrt(mean(values.map((v) => (v - average) ** 2)));
  return Math.round(average * Math.max(0, 1 - deviation / 50));
}
export function confidenceInterval(correct: number, n: number): [number, number] {
  if (!n) return [0, 100];
  const z = 1.96,
    p = correct / n,
    denominator = 1 + (z * z) / n,
    center = (p + (z * z) / (2 * n)) / denominator,
    margin = (z * Math.sqrt((p * (1 - p)) / n + (z * z) / (4 * n * n))) / denominator;
  return [
    Math.max(0, Math.round((center - margin) * 100)),
    Math.min(100, Math.round((center + margin) * 100)),
  ];
}
export function analyzeTopics(
  events: Evidence[],
  definitions: TopicDefinition[],
  now = Date.now(),
): TopicMetric[] {
  return definitions.map((topic) => {
    const samples = events
      .filter((e) => e.result.topicId === topic.id && e.result.answered)
      .sort((a, b) => a.result.answeredAt.localeCompare(b.result.answeredAt));
    const n = samples.length,
      correct = samples.filter((e) => e.result.correct).length;
    let weightedTotal = 0,
      weightedCorrect = 0;
    samples.forEach((e) => {
      const r = e.result,
        days = Math.max(0, (now - new Date(r.answeredAt).getTime()) / 86400000);
      const weight =
        { foundation: 0.8, application: 1, advanced: 1.25 }[r.difficulty] *
        (r.firstExposure ? 1 : 0.6) *
        Math.pow(0.5, days / 45);
      weightedTotal += weight;
      weightedCorrect += weight * Number(r.correct);
    });
    const mastery = Math.round(((weightedCorrect + 2) / (weightedTotal + 4)) * 100),
      uniqueItems = new Set(samples.map((e) => e.result.itemId)).size,
      attempts = new Set(samples.map((e) => e.attemptId)).size;
    const half = Math.floor(n / 2),
      trend =
        n >= 6
          ? (accuracy(samples.slice(half)) || 0) - (accuracy(samples.slice(0, half)) || 0)
          : null;
    const firstTime = samples[0] ? new Date(samples[0].result.answeredAt).getTime() : now;
    const retained = samples.filter(
      (e) => new Date(e.result.answeredAt).getTime() - firstTime >= 7 * 86400000,
    );
    const recent = samples.slice(-12);
    const mistakes = new Map<string, number>();
    samples
      .filter((e) => !e.result.correct)
      .forEach((e) => mistakes.set(e.result.itemId, (mistakes.get(e.result.itemId) || 0) + 1));
    const repeatedErrors = [...mistakes.values()].filter((v) => v >= 2).length;
    const weak =
      n >= 5 &&
      uniqueItems >= 3 &&
      attempts >= 2 &&
      mastery < 65 &&
      recent.filter((e) => !e.result.correct).length >= 2;
    const timing = samples
      .filter((e) => e.result.elapsedMs > 0)
      .map((e) => e.result.elapsedMs / 1000);
    const confidence =
      n >= 20 && uniqueItems >= 10 && attempts >= 3
        ? 'strong'
        : n >= 8 && uniqueItems >= 5 && attempts >= 2
          ? 'developing'
          : 'limited';
    return {
      id: topic.id,
      section: topic.section,
      areaId: topic.areaId,
      title: topic.title,
      lessonId: topic.lessonId,
      responses: n,
      uniqueItems,
      attempts,
      accuracy: n ? Math.round((correct / n) * 100) : 0,
      mastery,
      confidence,
      interval: confidenceInterval(correct, n),
      weak,
      trend,
      retention: retained.length >= 3 ? accuracy(retained) : null,
      averageSeconds: timing.length ? Math.round(mean(timing)) : null,
      firstSeenAccuracy: accuracy(samples.filter((e) => e.result.firstExposure)),
      familiarAccuracy: accuracy(samples.filter((e) => !e.result.firstExposure)),
      repeatedErrors,
      lastPracticed: samples.at(-1)?.result.answeredAt || '',
      recommendation: weak
        ? `Review ${topic.title}, work through its example, then complete a fresh targeted set. ${repeatedErrors ? 'Repeated errors suggest explaining the rule before trying another familiar question.' : 'Retest after a delay to check retention.'}`
        : n < 5
          ? `Build evidence with a short ${topic.title} practice session.`
          : trend !== null && trend < -10
            ? `Recent ${topic.title} accuracy has declined; revisit the underlying assumptions and try unseen questions.`
            : `Continue mixed practice and revisit ${topic.title} after a delay.`,
    };
  });
}
export function analyzeSections(
  events: Evidence[],
  topics: TopicMetric[],
  definitions: TopicDefinition[],
  mocks: { section: string; score: number; date: string }[],
): SectionMetric[] {
  return examSections.map((section) => {
    const own = events.filter((e) => e.result.section === section.id && e.result.answered),
      relevant = topics.filter(
        (t) => t.section === section.id && !definitions.find((d) => d.id === t.id)?.supplementary,
      );
    const tested = relevant.filter((t) => t.responses >= 3 && t.uniqueItems >= 2);
    const coverage = relevant.length ? Math.round((tested.length / relevant.length) * 100) : 0;
    const mcqAccuracy = accuracy(own.filter((e) => e.result.kind === 'mcq')),
      tbsAccuracy = accuracy(own.filter((e) => e.result.kind !== 'mcq'));
    const recent = mocks
        .filter((m) => m.section === section.id)
        .sort((a, b) => b.date.localeCompare(a.date))
        .slice(0, 3),
      recentMock = recent.length ? Math.round(mean(recent.map((m) => m.score))) : null;
    const attemptGroups = [...new Set(own.map((e) => e.attemptId))].map((id) =>
      accuracy(own.filter((e) => e.attemptId === id))!,
    );
    const consistency = successConsistency(attemptGroups.slice(-5));
    const uniqueItems = new Set(own.map((e) => e.result.itemId)).size,
      simulations = new Set(own.filter((e) => e.result.kind !== 'mcq').map((e) => e.result.itemId))
        .size;
    const components = [
      {
        value: relevant.filter((t) => t.responses).length
          ? mean(relevant.filter((t) => t.responses).map((t) => t.mastery))
          : null,
        weight: 0.3,
      },
      { value: coverage, weight: 0.2 },
      { value: tbsAccuracy, weight: 0.2 },
      { value: consistency, weight: 0.15 },
      { value: recentMock, weight: 0.15 },
    ].filter((c) => c.value !== null);
    const readiness = own.length
      ? Math.round(
          components.reduce((a, c) => a + c.value! * c.weight, 0) /
            components.reduce((a, c) => a + c.weight, 0),
        )
      : null;
    const gaps = [];
    if (coverage < 70) gaps.push('Practice more blueprint topics.');
    if (uniqueItems < 30) gaps.push('Build evidence on at least 30 distinct items.');
    if (simulations < 3) gaps.push('Complete at least three different simulations.');
    if (recentMock === null) gaps.push('Take a full-length mock exam.');
    else if (recentMock < 80)
      gaps.push('Strengthen recent mock performance toward the 80% study target.');
    if (relevant.some((t) => t.weak)) gaps.push('Address recurring topic weaknesses.');
    const ready = gaps.length === 0 && (readiness || 0) >= 75;
    return {
      id: section.id,
      title: section.title,
      responses: own.length,
      mcqAccuracy,
      tbsAccuracy,
      coverage,
      readiness,
      ready,
      uniqueItems,
      simulations,
      recentMock,
      consistency,
      gaps,
    };
  });
}
// These explicit mappings are product-development hypotheses, not AICPA rules.
export const disciplineTopicMap = {
  bar: {
    sources: ['far'],
    patterns: [
      'financial-statement',
      'financial-reporting',
      'balance-sheet',
      'income-statement',
      'cash-flow',
      'equity',
      'inventory',
      'property-plant',
      'long-lived',
      'intangible',
      'investment',
      'fair-value',
      'revenue',
      'lease',
      'government',
    ],
    interests: ['reporting', 'analysis'],
  },
  isc: {
    sources: ['aud'],
    patterns: [
      'internal-controls',
      'audit-risk',
      'audit-data',
      'audit-evidence',
      'audit-sampling',
      'service-organization',
      'reporting-engagement',
    ],
    interests: ['audit', 'technology'],
  },
  tcp: {
    sources: ['reg'],
    patterns: [
      'tax-basis',
      'property-',
      'individual-',
      'entity-',
      'corporation',
      'partnership',
      's-corporation',
      'capital-gain',
    ],
    interests: ['tax', 'planning'],
  },
} as const;
export interface DisciplineRecommendation {
  section: 'bar' | 'isc' | 'tcp';
  score: number | null;
  confidence: 'insufficient' | 'provisional' | 'supported';
  stage: 'core' | 'refined';
  components: { name: string; weight: number; value: number | null }[];
  strengths: string[];
  weaknesses: string[];
  uncertainty: string[];
  relevantItems: number;
  diagnosticAccuracy: number | null;
}
export function recommendDisciplines(
  events: Evidence[],
  topics: TopicMetric[],
  preferences: Preferences,
): DisciplineRecommendation[] {
  return (['bar', 'isc', 'tcp'] as const).map((section) => {
    const mapping = disciplineTopicMap[section];
    const matches = (e: Evidence) =>
      mapping.sources.some((s) => s === e.result.section) &&
      mapping.patterns.some((p) => e.result.topicId.includes(p));
    const core = events.filter((e) => e.result.answered && matches(e)),
      direct = events.filter(
        (e) => e.kind === 'diagnostic' && e.result.section === section && e.result.answered,
      );
    const ownTopics = topics.filter(
      (t) => core.some((e) => e.result.topicId === t.id) && t.responses > 0,
    );
    const relevantItems = new Set(core.map((e) => e.result.itemId)).size;
    const mastery = ownTopics.length ? mean(ownTopics.map((t) => t.mastery)) : null,
      sim = accuracy(core.filter((e) => e.result.kind !== 'mcq'));
    const ids = [...new Set(core.map((e) => e.attemptId))],
      consistency = successConsistency(
        ids.map((id) => accuracy(core.filter((e) => e.attemptId === id))!),
      );
    const learning = ownTopics.flatMap((t) => [
      ...(t.trend === null ? [] : [clamp(50 + t.trend * 2)]),
      ...(t.retention === null ? [] : [t.retention]),
    ]);
    const interest = preferences.interests.length
      ? Math.round(
          (mapping.interests.filter((i) => preferences.interests.includes(i)).length /
            mapping.interests.length) *
            100,
        )
      : null;
    const components = [
      {
        name: 'Relevant topic mastery',
        weight: 35,
        value: mastery === null ? null : Math.round(mastery),
      },
      { name: 'Relevant simulations', weight: 25, value: sim },
      { name: 'Consistent success', weight: 15, value: consistency },
      {
        name: 'Improvement and retention',
        weight: 15,
        value: learning.length ? Math.round(mean(learning)) : null,
      },
      { name: 'Optional career interests', weight: 10, value: interest },
    ];
    const sufficient = relevantItems >= 8 || direct.length >= 10;
    const present = components.filter(
      (c) => c.value !== null && c.name !== 'Optional career interests',
    );
    let coreScore = present.length
      ? components
          .filter((c) => c.value !== null)
          .reduce((sum, c) => sum + c.value! * c.weight, 0) /
        components.filter((c) => c.value !== null).reduce((sum, c) => sum + c.weight, 0)
      : null;
    const diagnosticAccuracy = accuracy(direct);
    if (diagnosticAccuracy !== null)
      coreScore =
        coreScore === null ? diagnosticAccuracy : coreScore * 0.7 + diagnosticAccuracy * 0.3;
    const uncertainty = [];
    if (relevantItems < 15) uncertainty.push('Core-topic evidence is limited.');
    if (sim === null) uncertainty.push('Relevant Core simulation evidence is missing.');
    if (!direct.length)
      uncertainty.push(`Take the ${section.toUpperCase()} diagnostic for direct evidence.`);
    if (!learning.length)
      uncertainty.push('Improvement and delayed retention are not yet established.');
    const confidence = !sufficient
      ? 'insufficient'
      : relevantItems >= 20 && ids.length >= 3 && direct.length >= 10 && sim !== null
        ? 'supported'
        : 'provisional';
    return {
      section,
      score: sufficient && coreScore !== null ? Math.round(clamp(coreScore)) : null,
      confidence,
      stage: direct.length ? 'refined' : 'core',
      components,
      strengths: ownTopics
        .filter((t) => t.mastery >= 70 && t.responses >= 5)
        .sort((a, b) => b.mastery - a.mastery)
        .slice(0, 3)
        .map((t) => t.title),
      weaknesses: ownTopics
        .filter((t) => t.weak)
        .slice(0, 3)
        .map((t) => t.title),
      uncertainty,
      relevantItems,
      diagnosticAccuracy,
    };
  });
}
export function trendSeries(events: Evidence[]) {
  const days = new Map<
    string,
    {
      mcqCorrect: number;
      mcqTotal: number;
      tbsCorrect: number;
      tbsTotal: number;
      milliseconds: number;
      timed: number;
    }
  >();
  for (const { result: r } of events.filter((e) => e.result.answered)) {
    const date = r.answeredAt.slice(0, 10),
      entry = days.get(date) || {
        mcqCorrect: 0,
        mcqTotal: 0,
        tbsCorrect: 0,
        tbsTotal: 0,
        milliseconds: 0,
        timed: 0,
      };
    if (r.kind === 'mcq') {
      entry.mcqTotal++;
      entry.mcqCorrect += Number(r.correct);
    } else {
      entry.tbsTotal++;
      entry.tbsCorrect += Number(r.correct);
    }
    if (r.elapsedMs > 0) {
      entry.milliseconds += r.elapsedMs;
      entry.timed++;
    }
    days.set(date, entry);
  }
  return [...days]
    .sort(([a], [b]) => a.localeCompare(b))
    .slice(-30)
    .map(([date, d]) => ({
      date,
      mcq: d.mcqTotal ? Math.round((d.mcqCorrect / d.mcqTotal) * 100) : null,
      tbs: d.tbsTotal ? Math.round((d.tbsCorrect / d.tbsTotal) * 100) : null,
      responses: d.mcqTotal + d.tbsTotal,
      averageSeconds: d.timed ? Math.round(d.milliseconds / d.timed / 1000) : null,
    }));
}
export type AnalyticsSection = CourseId;
