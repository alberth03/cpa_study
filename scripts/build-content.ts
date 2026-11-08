import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { curricula } from './curriculum/index.ts';
import { canonicalTopics } from '../src/lib/topics.ts';
import { examSections, BLUEPRINT_PDF } from '../src/lib/blueprints.ts';
import type {
  BankQuestion,
  BankSimulation,
  ContentMetadata,
  CourseId,
} from '../src/types/platform.ts';
import type { Lesson, Assessment } from '../src/types/study.ts';
import type { CaseQuestion } from './curriculum/types.ts';

const base = path.resolve('src/content');
const read = <T>(kind: string, id: string): T =>
  JSON.parse(fs.readFileSync(path.join(base, kind, `${id}.json`), 'utf8'));
const write = (kind: string, id: string, value: unknown) => {
  fs.mkdirSync(path.join(base, kind), { recursive: true });
  fs.writeFileSync(path.join(base, kind, `${id}.json`), JSON.stringify(value, null, 2) + '\n');
};
const catalog = JSON.parse(fs.readFileSync(path.join(base, 'catalog.json'), 'utf8')) as {
  courses: {
    id: string;
    title: string;
    description: string;
    modules: { id: number; title: string; description: string }[];
  }[];
  lessons: {
    id: string;
    courseId: string;
    moduleId: number;
    number: number;
    title: string;
    description: string;
    url: string;
    metadata?: ContentMetadata;
  }[];
  assessments: { id: string; title: string; courseId: string; moduleId: number; count: number }[];
  simulations: { id: string; moduleId: number; number: number; title: string; courseId?: string }[];
};
const escape = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!,
  );
const list = (items: string[]) => `<ul>${items.map((x) => `<li>${escape(x)}</li>`).join('')}</ul>`;
const paragraphs = (items: string[]) => items.map((x) => `<p>${escape(x)}</p>`).join('');
const topics: {
  id: string;
  section: string;
  areaId: string;
  groupId: string;
  title: string;
  lessonId: string;
  taskIds: string[];
  objectives: string[];
  supplementary: boolean;
}[] = [];
const referenceUrls: Record<string, { title: string; url: string }[]> = {
  aud: [
    {
      title: 'AICPA auditing standards',
      url: 'https://www.aicpa-cima.com/resources/landing/auditing-standards',
    },
    { title: 'PCAOB standards', url: 'https://pcaobus.org/oversight/standards' },
  ],
  reg: [
    {
      title: 'Internal Revenue Code',
      url: 'https://uscode.house.gov/browse/prelim@title26&edition=prelim',
    },
    { title: 'IRS tax publications', url: 'https://www.irs.gov/publications' },
    {
      title: 'Circular 230',
      url: 'https://www.irs.gov/tax-professionals/circular-230-tax-professionals',
    },
  ],
  bar: [
    { title: 'FASB accounting standards', url: 'https://asc.fasb.org/' },
    { title: 'GASB standards', url: 'https://www.gasb.org/standards-and-implementation' },
  ],
  isc: [
    { title: 'NIST Cybersecurity Framework', url: 'https://www.nist.gov/cyberframework' },
    {
      title: 'AICPA SOC resources',
      url: 'https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services',
    },
  ],
  tcp: [
    { title: 'IRS tax publications', url: 'https://www.irs.gov/publications' },
    {
      title: 'Internal Revenue Code',
      url: 'https://uscode.house.gov/browse/prelim@title26&edition=prelim',
    },
  ],
};
function metadata(
  section: CourseId,
  area: number,
  topic: string,
  group: string,
  objectives: string[],
  supplementary = false,
): ContentMetadata {
  const topicId = `${section}-${topic}`;
  return {
    section,
    blueprintYear: 2026,
    areaId: `${section}-${['I', 'II', 'III', 'IV', 'V'][area - 1] || 'foundation'}`,
    groupId: group,
    topicId,
    taskIds: objectives.map((_, i) => `${topicId}.task-${i + 1}`),
    skill: 'application',
    validFrom: ['reg', 'tcp'].includes(section) ? '2026-07-01' : '2026-01-01',
    taxLawPeriod: ['reg', 'tcp'].includes(section)
      ? '2026; exercise-specific rates and limits are stated in each case'
      : undefined,
    supplementary,
    revision: 1,
    sources: [
      { title: 'AICPA 2026 CPA Exam Blueprints', url: BLUEPRINT_PDF },
      ...(referenceUrls[section] || []),
    ],
  };
}
function farArea(m: number, l: number) {
  if (m === 1) return [7, 8, 9].includes(l) ? 3 : 1;
  if (m === 2) return l === 8 ? 3 : l === 10 ? 1 : 2;
  if (m === 3) return 3;
  if (m === 4 || m === 5) return 1;
  return [1, 2, 4, 6, 7, 8, 9, 10].includes(l) ? (l === 4 || l === 6 ? 3 : 1) : 2;
}
// Preserve every migrated lesson and stable ID while adding explicit metadata.
for (const entry of catalog.lessons.filter((l) =>
  ['far', 'fundamentals', 'intermediate'].includes(l.courseId),
)) {
  const lesson = read<Lesson>('lessons', entry.id);
  const titleSlug = entry.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-$/, '');
  const objectives = [
    `Explain ${entry.title.toLowerCase()} and its underlying principles.`,
    `Apply the topic to a financial-reporting scenario.`,
    `Evaluate common errors and their financial-statement effects.`,
  ];
  const meta = metadata(
    entry.courseId as CourseId,
    entry.courseId === 'far' ? farArea(entry.moduleId, entry.number) : 1,
    titleSlug,
    `module-${entry.moduleId}`,
    objectives,
    entry.courseId === 'far' && entry.moduleId === 4 && entry.number > 1,
  );
  entry.metadata = meta;
  write('lessons', entry.id, {
    ...lesson,
    metadata: meta,
    objectives,
    quiz: {
      ...lesson.quiz,
      metadata: { ...meta, skill: 'application' },
      choiceExplanations: undefined,
    },
  });
  topics.push({
    id: meta.topicId,
    section: meta.section,
    areaId: meta.areaId,
    groupId: meta.groupId,
    title: entry.title,
    lessonId: entry.id,
    taskIds: meta.taskIds,
    objectives,
    supplementary: !!meta.supplementary,
  });
}
for (const entry of catalog.assessments.filter((a) =>
  ['far', 'fundamentals', 'intermediate'].includes(a.courseId),
)) {
  const data = read<Assessment>('assessments', entry.id);
  const questions = data.questions.map((q, i) => {
    const lesson = catalog.lessons.find((l) => l.id === q.lessonId);
    const meta =
      lesson?.metadata ||
      metadata(
        data.courseId as CourseId,
        data.courseId === 'far' ? farArea(q.moduleId, 1) : 1,
        `${data.courseId}-general`,
        String(q.moduleId),
        ['Apply the relevant concepts.'],
      );
    return {
      ...q,
      topic: lesson?.title || q.topic,
      metadata: {
        ...meta,
        taskIds: [meta.taskIds[i % meta.taskIds.length]],
        skill:
          q.difficulty === 'foundation'
            ? 'remembering'
            : q.difficulty === 'advanced'
              ? 'analysis'
              : 'application',
      },
    };
  });
  write('assessments', entry.id, { ...data, questions });
}
for (const entry of catalog.simulations.filter((s) => s.id.startsWith('far-'))) {
  const data = read<BankSimulation>('simulations', entry.id),
    m = entry.moduleId || 6;
  const lesson = catalog.lessons.find(
    (l) =>
      l.courseId === 'far' && l.moduleId === m && l.number === Math.min(entry.number * 2 - 1, 10),
  )!;
  const meta = lesson.metadata!;
  entry.courseId = 'far';
  write('simulations', entry.id, {
    ...data,
    courseId: 'far',
    difficulty: 'advanced',
    metadata: { ...meta, skill: 'analysis', supplementary: m === 4 },
  });
}
const journal = read<BankQuestion[]>('journal', 'far-journal').map((q, i) => ({
  ...q,
  metadata: metadata('far', 3, 'journal-entries', 'transaction-entries', [
    'Prepare and evaluate a balanced journal entry.',
  ]),
  revision: 1,
  sequence: i + 1,
}));
write('journal', 'far-journal', journal);

for (const curriculum of curricula) {
  const section = examSections.find((s) => s.id === curriculum.id)!;
  catalog.courses = catalog.courses.filter((c) => c.id !== curriculum.id);
  catalog.lessons = catalog.lessons.filter((l) => l.courseId !== curriculum.id);
  catalog.assessments = catalog.assessments.filter((a) => a.courseId !== curriculum.id);
  catalog.simulations = catalog.simulations.filter((s) => !s.id.startsWith(`${curriculum.id}-`));
  const course = {
    id: curriculum.id,
    title: section.title,
    description: section.description,
    modules: [] as { id: number; title: string; description: string }[],
  };
  const courseQuestions: BankQuestion[] = [];
  curriculum.modules.forEach((part, mi) => {
    const moduleId = mi + 1;
    course.modules.push({
      id: moduleId,
      title: part.title,
      description: section.areas[part.area - 1].title,
    });
    const bank: BankQuestion[] = [];
    part.lessons.forEach((source, li) => {
      const number = li + 1,
        id = `${course.id}-m${moduleId}-l${number}`,
        simId = `${course.id}-m${moduleId}-tbs${number}`;
      const meta = metadata(course.id, part.area, source.topic, source.group, source.objectives);
      const url = `/learn/${course.id}/modules/${moduleId}/lessons/${number}`;
      const entry = {
        id,
        courseId: course.id,
        moduleId,
        number,
        title: source.title,
        description: source.objectives[0],
        url,
        metadata: meta,
      };
      const prompts: CaseQuestion[] = [...source.questions];
      source.simulation.tasks.forEach((task) => {
        const options =
          task.options?.filter((x) => x !== String(task.correct)) || task.distractors?.map(String);
        if (options && options.length >= 3)
          prompts.push({
            prompt: `${source.simulation.scenario} ${source.simulation.exhibits.map((e) => `${e.title}: ${e.body}`).join(' ')} Required: ${task.label}.`,
            correct: String(task.correct),
            distractors: options.slice(0, 3) as [string, string, string],
            explanation: task.explanation,
            skill: 'analysis',
            difficulty: 'advanced',
          });
      });
      const questions = prompts.map((q, qi): BankQuestion => {
        const qid = `${id}-q${qi + 1}`,
          correctIndex = (qi + li + mi) % 4;
        const texts = [...q.distractors];
        texts.splice(correctIndex, 0, q.correct);
        assert.equal(
          new Set(texts.map((t) => t.toLowerCase().trim())).size,
          4,
          `Duplicate options in ${qid}`,
        );
        const skill = q.skill || 'application';
        return {
          id: qid,
          courseId: course.id,
          moduleId,
          lessonId: id,
          topic: source.title,
          prompt: q.prompt,
          choices: texts.map((text, i) => ({ id: `${qid}-a${i}`, text })),
          correctChoiceId: `${qid}-a${correctIndex}`,
          explanation: q.explanation,
          difficulty: q.difficulty || 'application',
          metadata: { ...meta, taskIds: [meta.taskIds[qi % meta.taskIds.length]], skill },
          choiceExplanations: q.whyWrong
            ? Object.fromEntries(
                texts.map((text, i) => [
                  `${qid}-a${i}`,
                  text === q.correct ? q.explanation : q.whyWrong![q.distractors.indexOf(text)],
                ]),
              )
            : undefined,
          ...(qi >= source.questions.length ? { familyId: simId } : {}),
        };
      });
      assert(questions.length >= 6, `Insufficient questions for ${id}`);
      const html = `<h2>Learning objectives</h2>${list(source.objectives)}<h2>Understand the concepts</h2>${paragraphs(source.teaching)}<div class="example-box"><h3>${escape(source.workedExample.title)}</h3><p>${escape(source.workedExample.facts)}</p><ol>${source.workedExample.steps.map((s) => `<li>${escape(s)}</li>`).join('')}</ol></div><div class="key-points"><h3>Common mistakes to avoid</h3>${list(source.pitfalls)}</div><h2>Apply and connect</h2><p>After solving the worked case, explain which facts determine the result and how a changed assumption would change your conclusion. Use the module questions to test fresh applications, then complete the related simulation before reviewing its solution.</p>`;
      write('lessons', id, {
        ...entry,
        html: source.html || html,
        objectives: source.objectives,
        quiz: questions[0],
        relatedSimulation: simId,
      });
      catalog.lessons.push(entry);
      const fields = source.simulation.tasks.map((t, ti) => ({
        id: `${simId}-f${ti + 1}`,
        label: t.label,
        type: t.options ? 'select' : 'number',
        options: t.options?.map((value) => ({ value, label: value })) || [],
        correct: t.correct,
        explanation: t.explanation,
        tolerance: t.tolerance,
        topicId: meta.topicId,
      }));
      const simHtml = `<div class="course-intro-card"><h2>${escape(source.simulation.title)}</h2><p>${escape(source.simulation.scenario)}</p></div><section class="quiz-card"><h3>Required responses</h3>${fields.map((f) => `<div class="tbs-question"><label for="${f.id}">${escape(f.label)}</label>${f.type === 'select' ? `<select id="${f.id}">${f.options.map((o) => `<option value="${escape(o.value)}">${escape(o.label)}</option>`).join('')}</select>` : `<input id="${f.id}" type="text">`}</div>`).join('')}</section>`;
      const simulation = {
        id: simId,
        courseId: course.id,
        moduleId,
        number,
        title: source.simulation.title,
        html: source.simulation.html || simHtml,
        metadata: { ...meta, skill: 'analysis' },
        difficulty: 'advanced',
        fields,
        exhibits: source.simulation.exhibits.map((e, i) => ({
          id: `${simId}-ex${i + 1}`,
          title: e.title,
          html: paragraphs(e.body.split('\n')),
        })),
        explanation:
          source.simulation.solutionHtml ||
          source.simulation.tasks
            .map((t) => `<h3>${escape(t.label)}</h3><p>${escape(t.explanation)}</p>`)
            .join(''),
      };
      write('simulations', simId, simulation);
      catalog.simulations.push({
        id: simId,
        courseId: course.id,
        moduleId,
        number,
        title: source.simulation.title,
      });
      topics.push({
        id: meta.topicId,
        section: meta.section,
        areaId: meta.areaId,
        groupId: meta.groupId,
        title: source.title,
        lessonId: id,
        taskIds: meta.taskIds,
        objectives: source.objectives,
        supplementary: false,
      });
      bank.push(...questions);
    });
    const activityId = `${course.id}-m${moduleId}-practice`;
    write('assessments', activityId, {
      id: activityId,
      title: `${part.title} Practice`,
      courseId: course.id,
      moduleId,
      selection: 'per-lesson',
      feedback: 'immediate',
      passPercent: 80,
      questions: bank,
    });
    catalog.assessments.push({
      id: activityId,
      title: `${part.title} Practice`,
      courseId: course.id,
      moduleId,
      count: part.lessons.length,
    });
    courseQuestions.push(...bank);
  });
  const finalId = `${course.id}-final`;
  write('assessments', finalId, {
    id: finalId,
    title: `${course.id.toUpperCase()} Cumulative Assessment`,
    courseId: course.id,
    moduleId: 0,
    selection: 'balanced',
    feedback: 'deferred',
    passPercent: null,
    questions: courseQuestions,
  });
  catalog.assessments.push({
    id: finalId,
    title: `${course.id.toUpperCase()} Cumulative Assessment`,
    courseId: course.id,
    moduleId: 0,
    count: Math.min(50, courseQuestions.length),
  });
  catalog.courses.push(course);
}
write('', 'catalog', catalog);
const topicRegistry = canonicalTopics(topics);
write('', 'topics', topicRegistry);
// These files were generated by the initial static migration. They now belong
// exclusively to the server content repository and must not be publicly served.
fs.rmSync('public/study-data', { recursive: true, force: true });
console.log(
  `Built ${catalog.courses.length} courses, ${catalog.lessons.length} lessons, ${catalog.simulations.length} simulations, and ${topicRegistry.length} unique topics.`,
);
