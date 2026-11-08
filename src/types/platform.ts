import { z } from 'zod';
import type { Question, Simulation, JournalQuestion, Result } from './study';

export const sectionSchema = z.enum(['far', 'aud', 'reg', 'bar', 'isc', 'tcp']);
export type SectionId = z.infer<typeof sectionSchema>;
export type CourseId = SectionId | 'fundamentals' | 'intermediate';
export const skills = ['remembering', 'application', 'analysis', 'evaluation'] as const;
export type Skill = (typeof skills)[number];
export interface ContentMetadata {
  section: CourseId;
  blueprintYear: number;
  areaId: string;
  groupId: string;
  topicId: string;
  taskIds: string[];
  skill: Skill;
  taxLawPeriod?: string;
  validFrom: string;
  validThrough?: string;
  supplementary?: boolean;
  revision: number;
  sources: { title: string; url: string; reference?: string }[];
}
export interface Exhibit {
  id: string;
  title: string;
  html: string;
}
export type BankQuestion = Omit<Question, 'choices'> & {
  choices: (Question['choices'][number] & { sourceId?: string })[];
  metadata: ContentMetadata;
  choiceExplanations?: Record<string, string>;
  exhibits?: Exhibit[];
  familyId?: string;
};
export type BankSimulation = Omit<Simulation, 'fields'> & {
  courseId: CourseId;
  metadata: ContentMetadata;
  difficulty: 'foundation' | 'application' | 'advanced';
  exhibits?: Exhibit[];
  fields: (Simulation['fields'][number] & {
    tolerance?: number;
    explanation?: string;
    topicId?: string;
  })[];
};
export type BankJournal = JournalQuestion & { metadata: ContentMetadata };
export interface User {
  id: string;
  email: string;
  name: string;
  verified: boolean;
  role: 'student' | 'admin';
  createdAt: string;
}
export const preferencesSchema = z.object({
  selectedDiscipline: z.enum(['bar', 'isc', 'tcp']).nullable().default(null),
  interests: z
    .array(z.enum(['reporting', 'analysis', 'audit', 'technology', 'tax', 'planning']))
    .max(6)
    .default([]),
  examDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .nullable()
    .default(null),
  blueprintYear: z.number().int().min(2026).max(2100).default(2026),
  dailyGoal: z.number().int().min(1).max(200).default(20),
  timezone: z.string().max(80).default('UTC'),
});
export type Preferences = z.infer<typeof preferencesSchema>;
export const practiceConfigSchema = z.object({
  section: z.enum(['far', 'aud', 'reg', 'bar', 'isc', 'tcp', 'fundamentals', 'intermediate']),
  moduleId: z.number().int().positive().optional(),
  areaId: z.string().max(80).optional(),
  topicId: z.string().max(120).optional(),
  type: z.enum(['mcq', 'simulation', 'mixed']).default('mcq'),
  count: z.number().int().min(1).max(100).default(10),
  difficulty: z.enum(['mixed', 'foundation', 'application', 'advanced']).default('mixed'),
  mode: z.enum(['tutor', 'exam']).default('tutor'),
  focus: z
    .enum([
      'random',
      'unseen',
      'incorrect',
      'weakness',
      'cumulative',
      'learning',
      'topic',
      'module',
    ])
    .default('random'),
  minutes: z.number().int().min(1).max(240).nullable().default(null),
  blueprintYear: z.number().int().min(2026).max(2100).default(2026),
});
export type PracticeConfig = z.infer<typeof practiceConfigSchema>;
export const startAttemptSchema = z.discriminatedUnion('source', [
  z.object({
    source: z.literal('activity'),
    activityId: z
      .string()
      .regex(/^[a-z0-9-]+$/)
      .max(150),
  }),
  z.object({ source: z.literal('practice'), config: practiceConfigSchema }),
  z.object({
    source: z.literal('mock'),
    section: sectionSchema,
    short: z.boolean().default(false),
    blueprintYear: z.number().int().default(2026),
  }),
  z.object({ source: z.literal('diagnostic'), section: z.enum(['bar', 'isc', 'tcp']) }),
  z.object({
    source: z.literal('lesson'),
    lessonId: z
      .string()
      .regex(/^[a-z0-9-]+$/)
      .max(150),
  }),
]);
export type StartAttempt = z.infer<typeof startAttemptSchema>;
export type AttemptItem =
  | { kind: 'mcq'; id: string; question: BankQuestion }
  | { kind: 'simulation'; id: string; simulation: BankSimulation }
  | { kind: 'journal'; id: string; journal: BankJournal };
export interface Testlet {
  id: number;
  kind: 'mcq' | 'simulation' | 'mixed';
  itemIds: string[];
  submittedAt?: string;
}
export interface StudyResult extends Result {
  itemId: string;
  section: CourseId;
  areaId: string;
  topicId: string;
  difficulty: 'foundation' | 'application' | 'advanced';
  skill: Skill;
  kind: 'mcq' | 'simulation' | 'journal';
  elapsedMs: number;
  firstExposure: boolean;
  answered: boolean;
  answeredAt: string;
  choiceExplanations?: Record<string, string>;
}
export interface PrivateAttempt {
  id: string;
  userId: string;
  activityId: string;
  title: string;
  url: string;
  section: CourseId;
  kind: 'practice' | 'mock' | 'diagnostic' | 'lesson' | 'assessment' | 'journal' | 'simulation';
  mode: 'tutor' | 'exam';
  status: 'active' | 'submitted';
  startedAt: string;
  submittedAt?: string;
  items: AttemptItem[];
  currentIndex: number;
  answers: Record<string, Record<string, string>>;
  flags: string[];
  checked: string[];
  results: StudyResult[];
  version: number;
  testlets: Testlet[];
  currentTestlet: number;
  breakState?: { kind: 'scheduled' | 'unscheduled'; startedAt: number; endsAt?: number };
  breakUsed: boolean;
  deadline: number | null;
  timeLimitSeconds: number | null;
  itemTimes: Record<string, number>;
  lastActiveAt: number;
  firstExposures: string[];
  visited: string[];
  passPercent: number | null;
  blueprintYear: number;
  imported: boolean;
  scratchpad: string;
  importLegacyId?: string;
}
export type PublicQuestion = Omit<
  BankQuestion,
  'correctChoiceId' | 'explanation' | 'choiceExplanations' | 'choices'
> & { choices: Question['choices'] };
export type PublicSimulation = Omit<BankSimulation, 'explanation' | 'fields'> & {
  fields: Omit<BankSimulation['fields'][number], 'correct' | 'explanation'>[];
};
export type PublicJournal = Omit<BankJournal, 'correctEntries' | 'explanation'>;
export type PublicItem =
  | { kind: 'mcq'; id: string; question: PublicQuestion }
  | { kind: 'simulation'; id: string; simulation: PublicSimulation }
  | { kind: 'journal'; id: string; journal: PublicJournal };
export interface AttemptSummary {
  id: string;
  activityId: string;
  title: string;
  url: string;
  section: CourseId;
  kind: PrivateAttempt['kind'];
  status: 'active' | 'submitted';
  startedAt: string;
  submittedAt?: string;
  score: number | null;
  answered: number;
  total: number;
  imported: boolean;
  blueprintYear: number;
}
export interface PublicAttempt extends AttemptSummary {
  current: PublicItem | null;
  currentIndex: number;
  answers: Record<string, string>;
  flags: string[];
  checked: boolean;
  version: number;
  navigation: {
    id: string;
    number: number;
    kind: AttemptItem['kind'];
    answered: boolean;
    flagged: boolean;
    accessible: boolean;
  }[];
  testlets: { id: number; kind: Testlet['kind']; count: number; submitted: boolean }[];
  currentTestlet: number;
  breakState: PrivateAttempt['breakState'];
  breakUsed: boolean;
  deadline: number | null;
  serverNow: number;
  mode: 'tutor' | 'exam';
  feedback: StudyResult[];
  passPercent: number | null;
  scratchpad: string;
}
export interface ProgressState {
  user: User | null;
  preferences: Preferences;
  generation: number;
  completedLessons: Record<string, string>;
  readLessons: Record<string, string>;
  masteredLessons: string[];
  bestScores: Record<string, number>;
  lastScores: Record<string, number>;
  mastered: string[];
  attempts: Record<string, AttemptSummary>;
  activityDays: Record<string, number>;
  lastLesson?: string;
  legacyImported: boolean;
}
export interface AttemptReport {
  attempt: AttemptSummary;
  results: StudyResult[];
  score: number;
  mcqScore: number | null;
  tbsScore: number | null;
  weighted: boolean;
  passPercent: number | null;
  solutions: { title: string; html: string }[];
  testlets: { id: number; kind: string; correct: number; total: number }[];
  timeSeconds: number;
}
