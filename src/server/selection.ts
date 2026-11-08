import type { BankQuestion, BankSimulation, PracticeConfig, SectionId } from '@/types/platform';
import { shuffle } from '@/lib/question-selection';
import { sectionById } from '@/lib/blueprints';
import { ApiError } from './http';

export interface History {
  item_id: string;
  seen_count: number;
  graded_count: number;
  correct_count: number;
  last_correct: number | null;
  last_seen_at: string;
}
export function quotas(count: number, weights: number[]) {
  const total = weights.reduce((a, b) => a + b, 0),
    raw = weights.map((w) => (count * w) / total),
    out = raw.map(Math.floor);
  const order = raw
    .map((value, i) => ({ i, fraction: value - out[i] }))
    .sort((a, b) => b.fraction - a.fraction);
  for (let i = 0, left = count - out.reduce((a, b) => a + b, 0); i < left; i++)
    out[order[i % order.length].i]++;
  return out;
}
export function validForEdition(
  item: { metadata: { blueprintYear: number; validThrough?: string; supplementary?: boolean } },
  edition: number,
  includeSupplementary = false,
) {
  return (
    item.metadata.blueprintYear === edition &&
    (includeSupplementary || !item.metadata.supplementary) &&
    (!item.metadata.validThrough ||
      item.metadata.validThrough >= new Date().toISOString().slice(0, 10))
  );
}
function prioritize<T extends { id: string }>(
  items: T[],
  history: History[],
  random = Math.random,
) {
  const seen = new Map(history.map((h) => [h.item_id, h.seen_count]));
  return shuffle(items, random).sort((a, b) => (seen.get(a.id) || 0) - (seen.get(b.id) || 0));
}
export function choosePractice<T extends BankQuestion | BankSimulation>(
  bank: T[],
  config: PracticeConfig,
  history: History[],
  weakTopics: Set<string>,
  random = Math.random,
) {
  const map = new Map(history.map((h) => [h.item_id, h]));
  const filtered = bank.filter(
    (q) =>
      validForEdition(q, config.blueprintYear, true) &&
      (!config.moduleId || q.moduleId === config.moduleId) &&
      (!config.areaId || q.metadata.areaId === config.areaId) &&
      (!config.topicId || q.metadata.topicId === config.topicId) &&
      (config.difficulty === 'mixed' || q.difficulty === config.difficulty) &&
      (config.focus !== 'incorrect' || map.get(q.id)?.last_correct === 0) &&
      (config.focus !== 'unseen' || !map.has(q.id)) &&
      (config.focus !== 'weakness' || weakTopics.has(q.metadata.topicId)),
  );
  const prioritized = prioritize(filtered, history, random);
  if (config.focus !== 'cumulative') return prioritized;
  const groups = shuffle([...new Set(prioritized.map((q) => q.moduleId))], random).map((id) =>
    prioritized.filter((q) => q.moduleId === id),
  );
  const balanced: T[] = [];
  for (let index = 0; groups.some((g) => index < g.length); index++)
    for (const group of groups) if (group[index]) balanced.push(group[index]);
  return balanced;
}
export function chooseMockQuestions(
  bank: BankQuestion[],
  section: SectionId,
  count: number,
  history: History[],
  excludedFamilies = new Set<string>(),
  random = Math.random,
) {
  const definition = sectionById(section)!;
  const allocations = quotas(
      count,
      definition.areas.map((a) => a.target),
    ),
    selected: BankQuestion[] = [],
    used = new Set<string>();
  const skillTotals = { remembering: 0, application: 0, analysis: 0, evaluation: 0 };
  definition.areas.forEach((area, i) => {
    const pool = prioritize(
      bank.filter((q) => q.metadata.areaId === area.id && !excludedFamilies.has(q.familyId || '')),
      history,
      random,
    );
    for (let n = 0; n < allocations[i]; n++) {
      const candidates = pool.filter(
        (q) => !used.has(q.prompt.toLowerCase().replace(/\s+/g, ' ').trim()),
      );
      if (!candidates.length)
        throw new ApiError(
          422,
          `The ${area.title} bank has insufficient eligible questions for this exam. Review curriculum coverage.`,
          'insufficient_coverage',
        );
      // Prefer low-exposure questions; within that band, address skill deficits.
      const seen = new Map(history.map((h) => [h.item_id, h.seen_count]));
      const minimum = seen.get(candidates[0].id) || 0;
      const band = candidates.filter((q) => (seen.get(q.id) || 0) === minimum);
      band.sort(
        (a, b) =>
          (definition.skills[b.metadata.skill] * (selected.length + 1)) / 100 -
          skillTotals[b.metadata.skill] -
          ((definition.skills[a.metadata.skill] * (selected.length + 1)) / 100 -
            skillTotals[a.metadata.skill]),
      );
      const choice = band[0];
      selected.push(choice);
      used.add(choice.prompt.toLowerCase().replace(/\s+/g, ' ').trim());
      skillTotals[choice.metadata.skill]++;
    }
  });
  return shuffle(selected, random);
}
export function chooseMockSimulations(
  bank: BankSimulation[],
  section: SectionId,
  count: number,
  history: History[],
  random = Math.random,
) {
  const definition = sectionById(section)!,
    allocation = quotas(
      count,
      definition.areas.map((a) => a.target),
    );
  const result: BankSimulation[] = [];
  definition.areas.forEach((area, i) => {
    const pool = prioritize(
      bank.filter((s) => s.metadata.areaId === area.id),
      history,
      random,
    );
    result.push(...pool.slice(0, allocation[i]));
  });
  if (result.length < count)
    result.push(
      ...prioritize(
        bank.filter((s) => !result.some((r) => r.id === s.id)),
        history,
        random,
      ).slice(0, count - result.length),
    );
  if (result.length !== count)
    throw new ApiError(
      422,
      'Not enough eligible simulations for this mock exam.',
      'insufficient_coverage',
    );
  return shuffle(result, random);
}
