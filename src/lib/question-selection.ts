import type { Assessment, Question } from '@/types/study';

export function shuffle<T>(items: T[], random = Math.random): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
export const FAR_ALLOCATION = [11, 12, 11, 4, 4, 8];
export function selectQuestions(assessment: Assessment, random = Math.random): Question[] {
  let selected: Question[] = [];
  if (assessment.selection === 'all') selected = [...assessment.questions];
  if (assessment.selection === 'per-lesson') {
    const groups = new Map<string, Question[]>();
    for (const q of assessment.questions)
      groups.set(q.lessonId!, [...(groups.get(q.lessonId!) ?? []), q]);
    selected = [...groups.values()].map((group) => shuffle(group, random)[0]);
  }
  if (assessment.selection === 'far-final') {
    const used = new Set<string>();
    FAR_ALLOCATION.forEach((needed, index) => {
      const bank = assessment.questions.filter((q) => q.moduleId === index + 1);
      const moduleQuestions: Question[] = [];
      const diversity = new Map<string, number>();
      const take = (pool: Question[], count: number, strict = true) => {
        for (const q of shuffle(pool, random)) {
          if (count <= 0) break;
          const key = q.prompt.toLowerCase().replace(/\s+/g, ' ').trim();
          const topic = q.topic.toLowerCase().trim();
          if (used.has(key) || (strict && (diversity.get(topic) ?? 0) >= 2)) continue;
          moduleQuestions.push(q);
          used.add(key);
          diversity.set(topic, (diversity.get(topic) ?? 0) + 1);
          count--;
        }
      };
      const foundation = Math.max(1, Math.round(needed * 0.2)),
        advanced = Math.round(needed * 0.4);
      take(
        bank.filter((q) => q.difficulty === 'foundation'),
        foundation,
      );
      take(
        bank.filter((q) => q.difficulty === 'application'),
        needed - foundation - advanced,
      );
      take(
        bank.filter((q) => q.difficulty === 'advanced'),
        advanced,
      );
      take(bank, needed - moduleQuestions.length);
      take(bank, needed - moduleQuestions.length, false);
      if (moduleQuestions.length !== needed)
        throw new Error(`Insufficient questions in FAR module ${index + 1}`);
      selected.push(...moduleQuestions);
    });
  }
  return shuffle(selected, random).map((q) => ({ ...q, choices: shuffle(q.choices, random) }));
}
