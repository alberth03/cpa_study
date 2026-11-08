import { z } from 'zod';

export const questionSchema = z
  .object({
    id: z.string(),
    courseId: z.string(),
    moduleId: z.number(),
    lessonId: z.string().optional(),
    topic: z.string(),
    prompt: z.string(),
    choices: z.array(z.object({ id: z.string(), text: z.string() })).min(2),
    correctChoiceId: z.string(),
    explanation: z.string(),
    difficulty: z.enum(['foundation', 'application', 'advanced']),
  })
  .refine((q) => q.choices.some((c) => c.id === q.correctChoiceId), 'Invalid correct choice');
export type Question = z.infer<typeof questionSchema>;
export interface LessonMeta {
  id: string;
  courseId: string;
  moduleId: number;
  number: number;
  title: string;
  description: string;
  url: string;
}
export interface Lesson extends LessonMeta {
  html: string;
  quiz: Question;
}
export interface Course {
  id: string;
  title: string;
  description: string;
  modules: { id: number; title: string; description: string }[];
}
export interface Assessment {
  id: string;
  title: string;
  courseId: string;
  moduleId: number;
  selection: 'all' | 'per-lesson' | 'far-final' | 'balanced';
  feedback: 'immediate' | 'deferred';
  passPercent: number | null;
  questions: Question[];
}
export interface Simulation {
  id: string;
  moduleId: number;
  number: number;
  title: string;
  html: string;
  explanation: string;
  fields: {
    id: string;
    label: string;
    type: 'number' | 'select';
    options: { value: string; label: string }[];
    correct: string | number;
    legacyKey?: string;
  }[];
}
const journalEntrySchema = z.object({ account: z.string(), debit: z.number(), credit: z.number() });
export const journalQuestionSchema = z.object({
  id: z.string(),
  topic: z.string(),
  question: z.string(),
  availableAccounts: z.array(z.string()),
  correctEntries: z.array(journalEntrySchema),
  explanation: z.string(),
});
export type JournalQuestion = z.infer<typeof journalQuestionSchema>;
export type JournalEntry = z.infer<typeof journalEntrySchema>;
export const resultSchema = z.object({
  id: z.string(),
  label: z.string(),
  group: z.string(),
  correct: z.boolean(),
  answer: z.string(),
  expected: z.string(),
  explanation: z.string(),
  lessonId: z.string().optional(),
});
export type Result = z.infer<typeof resultSchema>;
export const attemptSchema = z
  .object({
    id: z.string(),
    activityId: z.string(),
    title: z.string(),
    url: z.string().regex(/^\/(?!\/)/),
    kind: z.enum(['mcq', 'simulation', 'journal']),
    feedback: z.enum(['immediate', 'deferred']),
    status: z.enum(['active', 'submitted']),
    startedAt: z.string(),
    submittedAt: z.string().optional(),
    index: z.number().int().nonnegative(),
    review: z.boolean().default(false),
    answers: z.record(z.string(), z.string()),
    locked: z.record(z.string(), z.boolean()),
    flags: z.array(z.string()),
    results: z.array(resultSchema),
    questions: z.array(questionSchema).optional(),
    journalQuestions: z.array(journalQuestionSchema).optional(),
    simulationIds: z.array(z.string()).optional(),
    passPercent: z.number().min(0).max(100).nullable().default(null),
  })
  .superRefine((a, ctx) => {
    const items =
      a.kind === 'mcq' ? a.questions : a.kind === 'journal' ? a.journalQuestions : a.simulationIds;
    if (!items?.length || a.index >= items.length)
      ctx.addIssue({ code: 'custom', message: 'Attempt has no valid current question' });
    if (a.questions && new Set(a.questions.map((q) => q.id)).size !== a.questions.length)
      ctx.addIssue({ code: 'custom', message: 'Duplicate question IDs' });
  });
export type Attempt = z.infer<typeof attemptSchema>;
export const progressSchema = z.object({
  version: z.literal(1),
  completedLessons: z.record(z.string(), z.string()),
  bestScores: z.record(z.string(), z.number().min(0).max(100)),
  lastScores: z.record(z.string(), z.number().min(0).max(100)),
  mastered: z.array(z.string()),
  attempts: z.record(z.string(), attemptSchema),
  activityDays: z.record(z.string(), z.number().nonnegative()),
  lastLesson: z.string().optional(),
  legacyImported: z.boolean(),
});
export type Progress = z.infer<typeof progressSchema>;
