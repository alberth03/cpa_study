import 'server-only';
import { z } from 'zod';
import sanitizeHtml from 'sanitize-html';
import { blueprintChangeList, BLUEPRINT_CHANGES, examSections } from '@/lib/blueprints';
import { questionSchema } from '@/types/study';
import { all, audit, one, run, transaction } from './db';
import { collection, getCatalog, getTopics } from './content';
import { ApiError } from './http';
import type { UserRow } from './auth';

export const contentKind = z.enum(['question', 'lesson', 'simulation']);
const metadataSchema = z.object({
  section: z.enum(['far', 'aud', 'reg', 'bar', 'isc', 'tcp', 'fundamentals', 'intermediate']),
  blueprintYear: z.number().int().min(2026).max(2100),
  areaId: z.string().min(1),
  groupId: z.string().min(1),
  topicId: z.string().min(1),
  taskIds: z.array(z.string()).min(1),
  skill: z.enum(['remembering', 'application', 'analysis', 'evaluation']),
  taxLawPeriod: z.string().optional(),
  validFrom: z.string(),
  validThrough: z.string().optional(),
  supplementary: z.boolean().optional(),
  revision: z.number().int().positive(),
  sources: z
    .array(
      z.object({
        title: z.string(),
        url: z.url().refine((u) => /^https?:\/\//.test(u)),
        reference: z.string().optional(),
      }),
    )
    .min(1),
});
const bankSchema = questionSchema.and(
  z.object({
    metadata: metadataSchema,
    choiceExplanations: z.record(z.string(), z.string()).optional(),
    familyId: z.string().optional(),
    exhibits: z.array(z.object({ id: z.string(), title: z.string(), html: z.string() })).optional(),
  }),
);
const lessonSchema = z.object({
  id: z.string(),
  courseId: z.string(),
  moduleId: z.number().int(),
  number: z.number().int().positive(),
  title: z.string().min(3),
  description: z.string(),
  url: z.string().regex(/^\/learn\//),
  html: z.string().min(100),
  metadata: metadataSchema,
  objectives: z.array(z.string()).optional(),
  quiz: bankSchema,
});
const simulationSchema = z.object({
  id: z.string(),
  courseId: z.string(),
  moduleId: z.number().int(),
  number: z.number().int().positive(),
  title: z.string(),
  html: z.string(),
  explanation: z.string(),
  metadata: metadataSchema,
  difficulty: z.enum(['foundation', 'application', 'advanced']),
  fields: z
    .array(
      z.object({
        id: z.string(),
        label: z.string(),
        type: z.enum(['number', 'select']),
        options: z.array(z.object({ value: z.string(), label: z.string() })),
        correct: z.union([z.string(), z.number()]),
        legacyKey: z.string().optional(),
        tolerance: z.number().min(0).optional(),
        explanation: z.string().optional(),
        topicId: z.string().optional(),
      }),
    )
    .min(1),
  exhibits: z.array(z.object({ id: z.string(), title: z.string(), html: z.string() })).optional(),
});
function clean(html: string) {
  return sanitizeHtml(html, {
    allowedTags: [...sanitizeHtml.defaults.allowedTags, 'input', 'select', 'option', 'label'],
    allowedAttributes: {
      '*': ['class', 'id'],
      a: ['href', 'title'],
      input: ['id', 'type', 'placeholder'],
      select: ['id'],
      option: ['value'],
      label: ['for'],
      td: ['colspan', 'rowspan'],
      th: ['colspan', 'rowspan', 'scope'],
    },
    allowedSchemes: ['http', 'https', 'mailto'],
  });
}
export function validateContent(kind: z.infer<typeof contentKind>, value: unknown) {
  const parsed =
    kind === 'question'
      ? bankSchema.parse(value)
      : kind === 'lesson'
        ? lessonSchema.parse(value)
        : simulationSchema.parse(value);
  const known = getCatalog().courses.find((c) => c.id === parsed.metadata.section);
  if (!known) throw new ApiError(400, 'Unknown course.');
  if (['reg', 'tcp'].includes(parsed.metadata.section) && !parsed.metadata.taxLawPeriod)
    throw new ApiError(400, 'Tax content needs a documented tax-law period.');
  const area = examSections.find((s) => s.id === parsed.metadata.section)?.areas;
  if (area && !area.some((a) => a.id === parsed.metadata.areaId))
    throw new ApiError(400, 'The blueprint area does not belong to this section.');
  if ('html' in parsed) parsed.html = clean(parsed.html);
  if ('explanation' in parsed && kind === 'simulation')
    parsed.explanation = clean(parsed.explanation);
  if ('exhibits' in parsed && parsed.exhibits)
    parsed.exhibits = parsed.exhibits.map((e) => ({ ...e, html: clean(e.html) }));
  if ('fields' in parsed)
    for (const f of parsed.fields)
      if (f.type === 'select' && !f.options.some((o) => o.value === String(f.correct)))
        throw new ApiError(400, `Correct answer for ${f.label} must be an available option.`);
  return parsed;
}
export function contentList(kind: z.infer<typeof contentKind>) {
  const items = [...collection(kind).values()].map((item) => ({
    id: item.id,
    title: 'prompt' in item ? item.prompt : item.title,
    section: item.metadata.section,
    topicId: item.metadata.topicId,
    blueprintYear: item.metadata.blueprintYear,
  }));
  const revisions = all<{
    content_id: string;
    revision: number;
    status: string;
    created_at: string;
    note: string;
  }>(
    'SELECT content_id,revision,status,created_at,note FROM content_revisions WHERE kind=? ORDER BY revision DESC',
    kind,
  );
  return { items, revisions };
}
export function adminItem(kind: z.infer<typeof contentKind>, id: string, revision?: number) {
  const history = all<{ revision: number; status: string; created_at: string; note: string }>(
    'SELECT revision,status,created_at,note FROM content_revisions WHERE kind=? AND content_id=? ORDER BY revision DESC',
    kind,
    id,
  );
  const row = revision
    ? one<{ data_json: string }>(
        'SELECT data_json FROM content_revisions WHERE kind=? AND content_id=? AND revision=?',
        kind,
        id,
        revision,
      )
    : one<{ data_json: string }>(
        'SELECT data_json FROM content_revisions WHERE kind=? AND content_id=? ORDER BY revision DESC LIMIT 1',
        kind,
        id,
      );
  const content = row ? JSON.parse(row.data_json) : collection(kind).get(id);
  if (!content) throw new ApiError(404, 'Content not found.');
  return { content, history };
}
export function saveRevision(
  user: UserRow,
  kind: z.infer<typeof contentKind>,
  id: string,
  value: unknown,
  note: string,
) {
  const content = validateContent(kind, value);
  if (content.id !== id) throw new ApiError(400, 'Content ID must match the selected item.');
  return transaction(() => {
    const revision =
      (one<{ revision: number }>(
        'SELECT MAX(revision) revision FROM content_revisions WHERE kind=? AND content_id=?',
        kind,
        id,
      )?.revision || 0) + 1;
    content.metadata.revision = revision + 1;
    run(
      "INSERT INTO content_revisions(id,content_id,kind,revision,data_json,status,author_id,created_at,note) VALUES(?,?,?,?,?,'draft',?,?,?)",
      crypto.randomUUID(),
      id,
      kind,
      revision,
      JSON.stringify(content),
      user.id,
      new Date().toISOString(),
      note,
    );
    audit(user.id, 'content.draft', id, `${kind} revision ${revision}`);
    return revision;
  });
}
export function setRevisionStatus(
  user: UserRow,
  kind: string,
  id: string,
  revision: number,
  status: 'published' | 'archived',
) {
  const row = one<{ data_json: string; status: string }>(
    'SELECT data_json,status FROM content_revisions WHERE kind=? AND content_id=? AND revision=?',
    kind,
    id,
    revision,
  );
  if (!row) throw new ApiError(404, 'Revision not found.');
  if (status === 'published') validateContent(contentKind.parse(kind), JSON.parse(row.data_json));
  run(
    'UPDATE content_revisions SET status=? WHERE kind=? AND content_id=? AND revision=?',
    status,
    kind,
    id,
    revision,
  );
  audit(user.id, `content.${status}`, id, `${kind} revision ${revision}`);
}
export function blueprintQueue() {
  for (const change of blueprintChangeList)
    run(
      'INSERT OR IGNORE INTO blueprint_changes(id,edition,section,topic_ids_json,description,source_url) VALUES(?,?,?,?,?,?)',
      change.id,
      change.edition,
      change.section,
      JSON.stringify(change.topics),
      change.description,
      BLUEPRINT_CHANGES,
    );
  return all<{
    id: string;
    edition: number;
    section: string;
    topic_ids_json: string;
    description: string;
    source_url: string;
    status: string;
    notes: string;
    reviewed_at: string | null;
  }>('SELECT * FROM blueprint_changes ORDER BY edition,section');
}
export function coverageAudit() {
  const questions = [...collection('question').values()],
    simulations = [...collection('simulation').values()],
    lessons = collection('lesson');
  const topicRows = getTopics().map((t) => ({
    ...t,
    lessonPresent: lessons.has(t.lessonId),
    mcqs: questions.filter((q) => q.metadata.topicId === t.id).length,
    simulations: simulations.filter((s) => s.metadata.topicId === t.id).length,
    tasks: t.taskIds.map((id) => ({
      id,
      questions: questions.filter((q) => q.metadata.taskIds.includes(id)).length,
    })),
  }));
  const seen = new Map<string, string>();
  const duplicates: { first: string; second: string }[] = [];
  for (const q of questions) {
    const key = `${q.courseId}:${q.prompt.toLowerCase().replace(/\s+/g, ' ').trim()}`;
    if (seen.has(key)) duplicates.push({ first: seen.get(key)!, second: q.id });
    else seen.set(key, q.id);
  }
  const sections = examSections.map((s) => ({
    id: s.id,
    title: s.title,
    areas: s.areas.map((a) => ({
      ...a,
      questions: questions.filter((q) => q.metadata.areaId === a.id && !q.metadata.supplementary)
        .length,
      simulations: simulations.filter(
        (t) => t.metadata.areaId === a.id && !t.metadata.supplementary,
      ).length,
      topics: topicRows.filter((t) => t.areaId === a.id).length,
    })),
    skills: Object.fromEntries(
      ['remembering', 'application', 'analysis', 'evaluation'].map((skill) => [
        skill,
        questions.filter((q) => q.courseId === s.id && q.metadata.skill === skill).length,
      ]),
    ),
  }));
  return {
    sections,
    topics: topicRows,
    duplicates,
    totals: { lessons: lessons.size, questions: questions.length, simulations: simulations.length },
    notes: [
      'Task identifiers are the platform’s explicit learning-objective mapping register, not official AICPA task numbering.',
      'Coverage counts show available material and gaps; they are not a certification of pedagogical sufficiency.',
      'Existing FAR governmental extensions are marked supplementary and excluded from blueprint-weighted mocks where appropriate.',
    ],
  };
}
