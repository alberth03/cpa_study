import 'server-only';
import fs from 'node:fs';
import path from 'node:path';
import { all } from './db';
import { ApiError } from './http';
import type { Assessment, Course, Lesson, LessonMeta } from '@/types/study';
import type { BankQuestion, BankSimulation, BankJournal, ContentMetadata } from '@/types/platform';

export type PlatformLesson = Lesson & {
  metadata: ContentMetadata;
  objectives?: string[];
  relatedSimulation?: string;
  quiz: BankQuestion;
};
export interface Topic {
  id: string;
  section: string;
  areaId: string;
  groupId: string;
  title: string;
  lessonId: string;
  lessonIds: string[];
  groupIds: string[];
  taskIds: string[];
  objectives: string[];
  supplementary: boolean;
}
export interface Catalog {
  courses: Course[];
  lessons: (LessonMeta & { metadata: ContentMetadata })[];
  assessments: { id: string; title: string; courseId: string; moduleId: number; count: number }[];
  simulations: { id: string; courseId: string; moduleId: number; number: number; title: string }[];
}
type ItemMap = { lesson: PlatformLesson; question: BankQuestion; simulation: BankSimulation };
let baseCache:
  | {
      catalog: Catalog;
      topics: Topic[];
      lessons: Map<string, PlatformLesson>;
      questions: Map<string, BankQuestion>;
      simulations: Map<string, BankSimulation>;
      assessments: Map<string, Assessment>;
      journal: BankJournal[];
    }
  | undefined;
let contentStamp = '';
const root = path.join(process.cwd(), 'src/content');
const read = <T>(folder: string, id: string): T =>
  JSON.parse(fs.readFileSync(path.join(root, folder, `${id}.json`), 'utf8'));
function base() {
  const stamp =
    process.env.NODE_ENV === 'development'
      ? `${fs.statSync(path.join(root, 'catalog.json')).mtimeMs}:${fs.statSync(path.join(root, 'topics.json')).mtimeMs}`
      : '';
  if (baseCache && contentStamp === stamp) return baseCache;
  contentStamp = stamp;
  const catalog = read<Catalog>('', 'catalog'),
    topics = read<Topic[]>('', 'topics');
  const lessons = new Map(
    catalog.lessons.map((m) => [m.id, read<PlatformLesson>('lessons', m.id)]),
  );
  const assessments = new Map(
    catalog.assessments.map((m) => [m.id, read<Assessment>('assessments', m.id)]),
  );
  const questions = new Map<string, BankQuestion>();
  for (const a of assessments.values())
    for (const q of a.questions) questions.set(q.id, q as BankQuestion);
  for (const l of lessons.values()) questions.set(l.quiz.id, l.quiz);
  const simulations = new Map(
    catalog.simulations.map((m) => [m.id, read<BankSimulation>('simulations', m.id)]),
  );
  baseCache = {
    catalog,
    topics,
    lessons,
    assessments,
    questions,
    simulations,
    journal: read<BankJournal[]>('journal', 'far-journal'),
  };
  return baseCache;
}
export const getCatalog = (): Catalog => ({
  ...base().catalog,
  lessons: [...collection('lesson').values()].map((l) => ({
    id: l.id,
    courseId: l.courseId,
    moduleId: l.moduleId,
    number: l.number,
    title: l.title,
    description: l.description,
    url: l.url,
    metadata: l.metadata,
  })),
  simulations: [...collection('simulation').values()].map((s) => ({
    id: s.id,
    courseId: s.courseId,
    moduleId: s.moduleId,
    number: s.number,
    title: s.title,
  })),
});
export const getTopics = () => base().topics;
function revisions<T>(kind: string) {
  return all<{ content_id: string; data_json: string; status: string }>(
    "SELECT r.content_id,r.data_json,r.status FROM content_revisions r JOIN (SELECT content_id,MAX(revision) revision FROM content_revisions WHERE kind=? AND status IN ('published','archived') GROUP BY content_id) latest ON r.content_id=latest.content_id AND r.revision=latest.revision WHERE r.kind=?",
    kind,
    kind,
  ).map((r) => ({
    id: r.content_id,
    data: JSON.parse(r.data_json) as T,
    archived: r.status === 'archived',
  }));
}
export function collection<K extends keyof ItemMap>(kind: K): Map<string, ItemMap[K]> {
  const original =
    kind === 'lesson'
      ? base().lessons
      : kind === 'question'
        ? base().questions
        : base().simulations;
  const result = new Map(original as Map<string, ItemMap[K]>);
  for (const r of revisions<ItemMap[K]>(kind)) {
    if (r.archived) result.delete(r.id);
    else result.set(r.id, r.data);
  }
  return result;
}
export function contentItem<K extends keyof ItemMap>(kind: K, id: string): ItemMap[K] {
  const value = collection(kind).get(id);
  if (!value) throw new ApiError(404, 'This study item is unavailable.');
  return value;
}
export const getLesson = (id: string) => contentItem('lesson', id);
export const getQuestion = (id: string) => contentItem('question', id);
export const getSimulation = (id: string) => contentItem('simulation', id);
export const getJournal = () => base().journal;
export function getAssessment(id: string) {
  const found = base().assessments.get(id);
  if (!found) throw new ApiError(404, 'Assessment not found.');
  const pool = collection('question');
  const extras = [...pool.values()].filter(
    (q) =>
      !base().questions.has(q.id) &&
      q.courseId === found.courseId &&
      (!found.moduleId || q.moduleId === found.moduleId),
  );
  return {
    ...found,
    questions: [
      ...found.questions.map((q) => pool.get(q.id)).filter((q): q is BankQuestion => !!q),
      ...extras,
    ],
  };
}
export function questionBank(section: string, includeChecks = false) {
  const checkIds = new Set([...base().lessons.values()].map((l) => l.quiz.id));
  // Original migrated lesson checks use separate IDs; authored checks also live
  // in module banks and remain eligible for normal study practice.
  return [...collection('question').values()].filter(
    (q) =>
      q.courseId === section && (includeChecks || !checkIds.has(q.id) || !q.id.endsWith('-check')),
  );
}
export const simulationBank = (section: string) =>
  [...collection('simulation').values()].filter((s) => s.courseId === section && s.moduleId > 0);
export function clearContentCache() {
  baseCache = undefined;
}
