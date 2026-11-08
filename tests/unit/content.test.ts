import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import { JSDOM } from 'jsdom';
import catalog from '@/content/catalog.json';
import {
  questionSchema,
  journalQuestionSchema,
  type Assessment,
  type Lesson,
  type Simulation,
} from '@/types/study';
import { studyRoutes } from '@/lib/routes';
import { gradeSimulation } from '@/lib/grading';
import topics from '@/content/topics.json';

const read = <T>(folder: string, id: string): T =>
  JSON.parse(fs.readFileSync(`src/content/${folder}/${id}.json`, 'utf8'));
describe('migrated content coverage', () => {
  it('uses one topic identity with every related lesson preserved', () => {
    expect(new Set(topics.map((t) => t.id)).size).toBe(topics.length);
    for (const l of catalog.lessons) {
      const matches = topics.filter((t) => t.id === l.metadata.topicId);
      expect(matches).toHaveLength(1);
      expect(matches[0].lessonIds).toContain(l.id);
    }
    expect(topics.find((t) => t.id === 'far-contingencies-commitments')?.lessonIds).toEqual([
      'far-m2-l8',
      'far-m3-l2',
    ]);
    expect(topics.find((t) => t.id === 'far-subsequent-events')?.lessonIds).toEqual([
      'far-m1-l9',
      'far-m3-l7',
    ]);
  });
  it('includes every lesson, assessment, journal question, and simulation', () => {
    expect(catalog.lessons).toHaveLength(202);
    expect(catalog.simulations).toHaveLength(119);
    expect(catalog.courses.map((c) => c.id)).toEqual(
      expect.arrayContaining(['far', 'aud', 'reg', 'bar', 'isc', 'tcp']),
    );
    const journals = read<unknown[]>('journal', 'far-journal');
    expect(journals).toHaveLength(40);
    journals.forEach((q) => journalQuestionSchema.parse(q));
    const questions = catalog.lessons.map((l) => read<Lesson>('lessons', l.id).quiz);
    catalog.assessments
      .filter((a) => a.id !== 'far-final-mcq')
      .forEach((a) => questions.push(...read<Assessment>('assessments', a.id).questions));
    expect(new Set(questions.map((q) => q.id)).size).toBe(1480);
    expect(
      catalog.lessons.filter((l) => ['fundamentals', 'intermediate', 'far'].includes(l.courseId)),
    ).toHaveLength(120);
    questions.forEach((q) => {
      questionSchema.parse(q);
      if (q.lessonId) expect(catalog.lessons.some((l) => l.id === q.lessonId)).toBe(true);
    });
  });
  it('provides a unique prerendered route for every lesson and activity', () => {
    expect(new Set(studyRoutes.map((r) => r.path)).size).toBe(studyRoutes.length);
    for (const l of catalog.lessons)
      expect(studyRoutes.some((r) => r.path === l.url && r.id === l.id)).toBe(true);
    for (const a of catalog.assessments) expect(studyRoutes.some((r) => r.id === a.id)).toBe(true);
  });
  it('contains inert lesson markup and associated simulation controls with valid answer keys', () => {
    for (const l of catalog.lessons) {
      const lesson = read<Lesson>('lessons', l.id);
      expect(lesson.html.length).toBeGreaterThan(100);
      expect(lesson.html).not.toMatch(/<script|\son\w+=/i);
    }
    for (const s of catalog.simulations) {
      const sim = read<Simulation>('simulations', s.id),
        doc = new JSDOM(sim.html).window.document;
      expect(doc.querySelectorAll('input,select').length).toBe(sim.fields.length);
      expect(sim.html).not.toMatch(/<script|\son\w+=/i);
      sim.fields.forEach((f) => {
        expect(f.label).not.toBe('');
        expect(doc.getElementById(f.id)).not.toBeNull();
        if (f.type === 'select')
          expect(f.options.some((o) => o.value === String(f.correct))).toBe(true);
      });
      const correct = Object.fromEntries(sim.fields.map((f) => [f.id, String(f.correct)]));
      expect(gradeSimulation(sim, correct).every((r) => r.correct)).toBe(true);
      expect(gradeSimulation(sim, {}).some((r) => r.correct)).toBe(false);
      expect(sim.explanation.length).toBeGreaterThan(100);
    }
  });
});
