import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import { decodeProgress, emptyProgress, mergeProgress } from '@/lib/storage';
import { importLegacy, type ContentLoader } from '@/lib/legacy-import';
import { selectQuestions } from '@/lib/question-selection';
import type { Assessment } from '@/types/study';

const load: ContentLoader = async <T>(kind: string, id: string): Promise<T> =>
  JSON.parse(fs.readFileSync(`src/content/${kind}/${id}.json`, 'utf8'));
const source = (data: Record<string, string>) => ({ getItem: (key: string) => data[key] ?? null });
describe('progress migration', () => {
  it('imports completions, zero scores, mastery and last lesson idempotently', async () => {
    const old = {
      fundamentalsLesson1: 'true',
      intermediateModule2Lesson3: 'true',
      farModule6Lesson10: 'true',
      fundamentalsExamBest: '90',
      farFinalExamLastScore: '0',
      farModule3Mastered: 'true',
      cpaCurrentPage: JSON.stringify({ page: 'farLesson', moduleId: 6, lessonId: 10 }),
    };
    const { progress: p, issues } = await importLegacy(source(old), load);
    expect(issues).toEqual([]);
    expect(Object.keys(p.completedLessons)).toHaveLength(3);
    expect(p.bestScores['fundamentals-final']).toBe(90);
    expect(p.lastScores['far-final-mcq']).toBe(0);
    expect(p.mastered).toContain('far-m3-practice');
    expect(p.lastLesson).toBe('far-m6-l10');
    expect(mergeProgress(p, p)).toEqual(p);
    expect(decodeProgress(JSON.stringify(p))).toEqual(p);
  });
  it('restores an in-flight FAR exam without changing question or choice order', async () => {
    const exam = await load<Assessment>('assessments', 'far-final-mcq'),
      questions = selectQuestions(exam, () => 0.42);
    const legacy = questions.map((q) => ({
      question: q.prompt,
      answers: q.choices.map((c) => c.text),
      correctAnswer: q.choices.findIndex((c) => c.id === q.correctChoiceId),
      finalExamModuleId: q.moduleId,
    }));
    const { progress: p, issues } = await importLegacy(
      source({
        farFinalExamActiveState: JSON.stringify({
          questions: legacy,
          index: 12,
          answers: questions.map(() => 1),
          flags: questions.map((_, i) => i === 4),
        }),
      }),
      load,
    );
    expect(issues).toEqual([]);
    const a = p.attempts['legacy-far-final-mcq'];
    expect(a.index).toBe(12);
    expect(a.questions).toEqual(questions);
    expect(a.flags).toEqual([questions[4].id]);
    expect(a.answers[questions[0].id]).toBe(questions[0].choices[1].id);
    decodeProgress(JSON.stringify(p));
  });
  it('retains valid progress when one old attempt is corrupt', async () => {
    const { progress, issues } = await importLegacy(
      source({ fundamentalsLesson2: 'true', farPracticeActiveState: '{bad json' }),
      load,
    );
    expect(progress.completedLessons['fundamentals-l2']).toBe('imported');
    expect(issues).toHaveLength(1);
  });
  it('rejects malformed or unsupported snapshots and attempts', () => {
    expect(() => decodeProgress('bad')).toThrow();
    expect(() => decodeProgress(JSON.stringify({ ...emptyProgress(), version: 2 }))).toThrow();
    expect(() =>
      decodeProgress(JSON.stringify({ ...emptyProgress(), attempts: { bad: { id: 'bad' } } })),
    ).toThrow();
  });
});
