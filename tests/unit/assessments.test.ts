import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import type { Assessment, Simulation } from '@/types/study';
import { FAR_ALLOCATION, selectQuestions } from '@/lib/question-selection';
import { gradeJournal, gradeQuestion, gradeSimulation, parseAmount, percent } from '@/lib/grading';
import { emptyProgress, saveAttempt } from '@/lib/storage';
import { newAttempt } from '@/lib/attempts';

const read = <T>(folder: string, id: string): T =>
  JSON.parse(fs.readFileSync(`src/content/${folder}/${id}.json`, 'utf8'));
function random(seed: number) {
  return () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}
describe('assessment behavior', () => {
  it('selects unique FAR finals with the required module allocation and intact answers', () => {
    const bank = read<Assessment>('assessments', 'far-final-mcq');
    for (let seed = 0; seed < 40; seed++) {
      const selected = selectQuestions(bank, random(seed));
      expect(selected).toHaveLength(50);
      expect(new Set(selected.map((q) => q.prompt.toLowerCase())).size).toBe(50);
      expect(
        FAR_ALLOCATION.map((_, i) => selected.filter((q) => q.moduleId === i + 1).length),
      ).toEqual(FAR_ALLOCATION);
      expect(selected.every((q) => gradeQuestion(q, q.correctChoiceId).correct)).toBe(true);
      selected.forEach((q) =>
        expect(q.choices.find((c) => c.id === q.correctChoiceId)?.text).toBe(
          bank.questions
            .find((original) => original.id === q.id)
            ?.choices.find((c) => c.id === q.correctChoiceId)?.text,
        ),
      );
    }
  });
  it('selects one question per lesson for each FAR module', () => {
    for (let m = 1; m <= 6; m++) {
      const q = selectQuestions(read<Assessment>('assessments', `far-m${m}-practice`), random(m));
      expect(q).toHaveLength(10);
      expect(new Set(q.map((x) => x.lessonId)).size).toBe(10);
    }
  });
  it('distinguishes blank, invalid, zero, signed amounts, and currency formatting', () => {
    expect(parseAmount('')).toBeNull();
    expect(parseAmount('abc')).toBeNull();
    expect(parseAmount('Infinity')).toBeNull();
    expect(parseAmount('0')).toBe(0);
    expect(parseAmount('($34,000)')).toBe(-34000);
    expect(parseAmount('1,000.25')).toBe(1000.25);
    const sim = read<Simulation>('simulations', 'far-m2-tbs2');
    expect(gradeSimulation(sim, { 'far-m2-tbs2-writeoff': '0' }).at(-1)?.correct).toBe(true);
    expect(gradeSimulation(sim, {}).at(-1)?.correct).toBe(false);
  });
  it('matches journal rows independent of order, with cent tolerance and no double-use', () => {
    const expected = [
      { account: 'Cash', debit: 100, credit: 0 },
      { account: 'Revenue', debit: 0, credit: 100 },
    ];
    expect(gradeJournal([...expected].reverse(), expected)).toBe(true);
    expect(gradeJournal([{ ...expected[0], debit: 100.001 }, expected[1]], expected)).toBe(true);
    expect(gradeJournal([{ ...expected[0], debit: 100.02 }, expected[1]], expected)).toBe(false);
    expect(gradeJournal([expected[0], expected[0]], expected)).toBe(false);
  });
  it('records grading and submission once across retries and preserves best scores', () => {
    const q = read<Assessment>('assessments', 'fundamentals-final').questions[0];
    let a = newAttempt('fundamentals-final', 'Final', '/learn/fundamentals/final', 'mcq', {
      questions: [q],
      results: [gradeQuestion(q, q.correctChoiceId)],
    });
    let p = saveAttempt(emptyProgress(), a, new Date(2026, 10, 8));
    expect(p.activityDays['2026-11-08']).toBe(1);
    a = { ...a, status: 'submitted' };
    p = saveAttempt(p, a, new Date(2026, 10, 8));
    expect(p.bestScores[a.activityId]).toBe(100);
    expect(p.activityDays['2026-11-08']).toBe(1);
    expect(saveAttempt(p, { ...a, results: [] }, new Date(2026, 10, 8))).toBe(p);
    const worse = newAttempt(a.activityId, 'Final', a.url, 'mcq', {
      questions: [q],
      status: 'submitted',
      results: [gradeQuestion(q, 'wrong')],
    });
    p = saveAttempt(p, worse);
    expect(p.bestScores[a.activityId]).toBe(100);
    expect(p.lastScores[a.activityId]).toBe(0);
    expect(percent([])).toBe(0);
  });
});
