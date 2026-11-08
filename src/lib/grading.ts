import type { JournalEntry, Question, Result, Simulation } from '@/types/study';

export function parseAmount(value: string): number | null {
  const input = value
    .trim()
    .replace(/[$,]/g, '')
    .replace(/^\((.*)\)$/, '-$1');
  if (!input || !/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(input)) return null;
  const amount = Number(input);
  return Number.isFinite(amount) ? amount : null;
}
export { percent } from './math';
export function gradeQuestion(question: Question, answer?: string): Result {
  return {
    id: question.id,
    label: question.prompt,
    group: question.topic,
    correct: answer === question.correctChoiceId,
    answer: question.choices.find((c) => c.id === answer)?.text ?? 'Unanswered',
    expected: question.choices.find((c) => c.id === question.correctChoiceId)!.text,
    explanation: question.explanation,
    lessonId: question.lessonId,
  };
}
export function gradeSimulation(
  simulation: Omit<Simulation, 'fields'> & {
    fields: (Simulation['fields'][number] & { tolerance?: number })[];
  },
  answers: Record<string, string>,
): Result[] {
  return simulation.fields.map((f) => ({
    id: f.id,
    label: f.label,
    group: simulation.title,
    correct:
      typeof f.correct === 'number'
        ? parseAmount(answers[f.id] ?? '') !== null &&
          Math.abs(parseAmount(answers[f.id] ?? '')! - f.correct) <= (f.tolerance ?? 0)
        : answers[f.id] === f.correct,
    answer: answers[f.id] || 'Unanswered',
    expected: String(f.correct),
    explanation: '',
  }));
}
export function gradeJournal(entries: JournalEntry[], expected: JournalEntry[]): boolean {
  if (entries.length !== expected.length) return false;
  const remaining = [...entries];
  return expected.every((correct) => {
    const index = remaining.findIndex(
      (e) =>
        e.account === correct.account &&
        Math.abs(e.debit - correct.debit) < 0.01 &&
        Math.abs(e.credit - correct.credit) < 0.01,
    );
    if (index < 0) return false;
    remaining.splice(index, 1);
    return true;
  });
}
