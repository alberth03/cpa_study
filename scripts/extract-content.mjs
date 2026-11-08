// Reproducible, build-time migration. Legacy JavaScript never runs in the app.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import { parse } from 'acorn';
import { simple } from 'acorn-walk';

const root = path.resolve('legacy');
const output = path.resolve('src/content');
const document = new JSDOM('<main id="main-content"></main>').window.document;
const storage = new Map();
const ctx = vm.createContext({
  document,
  window: {},
  console,
  alert() {},
  confirm: () => true,
  localStorage: {
    getItem: (k) => storage.get(k) ?? null,
    setItem: (k, v) => storage.set(k, String(v)),
    removeItem: (k) => storage.delete(k),
  },
  percentage: 100, // Some legacy graders reference an undeclared score variable.
});
const evaluate = (code) => vm.runInContext(code, ctx, { timeout: 3000 });
const scripts = [
  ...fs.readFileSync(path.join(root, 'index.html'), 'utf8').matchAll(/<script src="([^"]+)"/g),
].map((m) => m[1]);
for (const file of scripts)
  evaluate(
    fs.readFileSync(path.join(root, file), 'utf8').replace(/restoreCurrentPage\(\);\s*$/, ''),
  );
const main = document.getElementById('main-content');
const cleanText = (s) => (s ?? '').replace(/\s+/g, ' ').trim();
function cleanHTML(html, interactive = false) {
  const body = new JSDOM(html).window.document.body;
  body.querySelectorAll('script,button,header,.lesson-actions').forEach((n) => n.remove());
  for (const n of body.querySelectorAll('*'))
    for (const a of [...n.attributes]) {
      if (
        /^on/i.test(a.name) ||
        (['href', 'src'].includes(a.name) && /^javascript:/i.test(a.value))
      )
        n.removeAttribute(a.name);
    }
  if (!interactive) body.querySelectorAll('input,select,textarea').forEach((n) => n.remove());
  return body.innerHTML.replace(/\s+/g, ' ').trim();
}
const write = (folder, id, data) => {
  const dir = path.join(output, folder);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, `${id}.json`), JSON.stringify(data, null, 2) + '\n');
};
const courses = [
  {
    id: 'fundamentals',
    title: 'Accounting Fundamentals',
    description: 'Build the foundation for your CPA journey.',
    modules: [],
  },
  {
    id: 'intermediate',
    title: 'Intermediate Accounting',
    description: 'Develop deeper financial accounting knowledge.',
    modules: evaluate('intermediateModules'),
  },
  {
    id: 'far',
    title: 'Financial Accounting & Reporting',
    description: 'Prepare with CPA-level lessons, practice, and simulations.',
    modules: evaluate('farModules'),
  },
];
const lessons = [],
  assessments = [],
  simulations = [];
function question(q, id, courseId, moduleId, index = 0) {
  const lesson = q.lessonId ?? q.lesson;
  assert(q.answers?.length > q.correctAnswer && q.correctAnswer >= 0, `Invalid answer: ${id}`);
  return {
    id,
    courseId,
    moduleId,
    lessonId: lesson ? `${courseId}-m${moduleId}-l${lesson}` : undefined,
    topic: q.topic ?? (lesson ? `Lesson ${lesson}` : 'General review'),
    prompt: cleanText(q.question),
    choices: q.answers.map((text, i) => ({
      id: `${id}-a${i}`,
      text: cleanText(text).replace(/^[A-D]\.\s*/, ''),
    })),
    correctChoiceId: `${id}-a${q.correctAnswer}`,
    explanation: cleanText(q.explanation),
    difficulty: index < 20 ? 'foundation' : index < 40 ? 'application' : 'advanced',
  };
}
for (const course of courses) {
  const groups =
    course.id === 'fundamentals'
      ? { 0: evaluate('fundamentalsLessons') }
      : evaluate(course.id === 'far' ? 'farModuleLessons' : 'intermediateModuleLessons');
  ctx.capture = (...args) => {
    ctx.captured = args;
  };
  const renderer =
    course.id === 'fundamentals'
      ? 'showLessonPage'
      : course.id === 'far'
        ? 'showFARLessonPage'
        : 'showIntermediateLessonPage';
  evaluate(`${renderer} = capture`);
  for (const [module, list] of Object.entries(groups))
    for (const meta of list) {
      ctx.captured = null;
      const call =
        course.id === 'fundamentals'
          ? `showFundamentalsLesson(${meta.id})`
          : `show${course.id === 'far' ? 'FAR' : 'Intermediate'}Lesson(${module},${meta.id})`;
      evaluate(call);
      assert(ctx.captured, `Missing lesson ${call}`);
      const args = ctx.captured;
      const [title, html, quiz] = args.slice(course.id === 'fundamentals' ? 1 : 2);
      const id =
        course.id === 'fundamentals'
          ? `fundamentals-l${meta.id}`
          : `${course.id}-m${module}-l${meta.id}`;
      const url = `/learn/${course.id}${+module ? `/modules/${module}` : ''}/lessons/${meta.id}`;
      const entry = {
        id,
        courseId: course.id,
        moduleId: +module,
        number: meta.id,
        title,
        description: meta.description,
        url,
      };
      lessons.push(entry);
      write('lessons', id, {
        ...entry,
        html: cleanHTML(html),
        quiz: { ...question(quiz, `${id}-check`, course.id, +module), lessonId: id },
      });
    }
}
function assessment(
  id,
  title,
  courseId,
  moduleId,
  bank,
  selection = 'all',
  feedback = 'immediate',
) {
  const questions = bank.map((q, i) =>
    question(
      q,
      `${courseId}-m${moduleId}-q${i + 1}${id.endsWith('final') ? '-final' : ''}`,
      courseId,
      moduleId,
      i,
    ),
  );
  const data = {
    id,
    title,
    courseId,
    moduleId,
    selection,
    feedback,
    passPercent: courseId === 'far' || courseId === 'intermediate' ? 80 : null,
    questions,
  };
  assessments.push({
    id,
    title,
    courseId,
    moduleId,
    count: selection === 'per-lesson' ? 10 : questions.length,
  });
  write('assessments', id, data);
  return questions;
}
assessment(
  'fundamentals-final',
  'Fundamentals Final Exam',
  'fundamentals',
  0,
  evaluate('fundamentalsExamQuestions'),
);
for (let m = 1; m <= 10; m++)
  assessment(
    `intermediate-m${m}-quiz`,
    `Intermediate Module ${m} Quiz`,
    'intermediate',
    m,
    evaluate(`intermediateModuleQuizzes[${m}]`),
  );
assessment(
  'intermediate-final',
  'Intermediate Final Exam',
  'intermediate',
  0,
  evaluate('intermediateFinalExamQuestions'),
);
const farBank = [];
for (let m = 1; m <= 6; m++)
  farBank.push(
    ...assessment(
      `far-m${m}-practice`,
      `FAR Module ${m} Practice`,
      'far',
      m,
      evaluate(`farModule${m}Questions`),
      'per-lesson',
    ),
  );
write('assessments', 'far-final-mcq', {
  id: 'far-final-mcq',
  title: 'FAR Final MCQ Exam',
  courseId: 'far',
  moduleId: 0,
  selection: 'far-final',
  feedback: 'deferred',
  passPercent: null,
  questions: farBank,
});
assessments.push({
  id: 'far-final-mcq',
  title: 'FAR Final MCQ Exam',
  courseId: 'far',
  moduleId: 0,
  count: 50,
});
write(
  'journal',
  'far-journal',
  evaluate('farJournalEntryQuestions').map((q) => ({ ...q, id: `far-journal-${q.id}` })),
);

function instrument(fn) {
  const source = evaluate(`${fn}.toString()`);
  const ast = parse(source, { ecmaVersion: 'latest' });
  const changes = [];
  simple(ast, {
    BinaryExpression(node) {
      if (node.operator === '===')
        changes.push({
          start: node.start,
          end: node.end,
          text: `__compare(${source.slice(node.left.start, node.left.end)},${source.slice(node.right.start, node.right.end)})`,
        });
    },
  });
  let modified = source;
  for (const c of changes.sort((a, b) => b.start - a.start))
    modified = modified.slice(0, c.start) + c.text + modified.slice(c.end);
  return modified;
}
function form() {
  const body = new JSDOM(main.innerHTML).window.document.body;
  const title = cleanText(body.querySelector('.course-intro-card h2, h2, h1')?.textContent);
  const fields = [...body.querySelectorAll('input,select')].map((n, i) => {
    const label = n.closest('.tbs-question')?.querySelector('label') ?? n.previousElementSibling;
    if (label?.tagName === 'LABEL') label.setAttribute('for', n.id);
    return {
      id: n.id,
      label: cleanText(label?.textContent) || `Response ${i + 1}`,
      type: n.tagName === 'SELECT' ? 'select' : 'number',
      options: [...n.querySelectorAll('option')]
        .filter((o) => o.value)
        .map((o) => ({ value: o.value, label: cleanText(o.textContent) })),
    };
  });
  assert(fields.length, `No fields: ${title}`);
  return { title, fields, html: cleanHTML(body.innerHTML, true) };
}
for (let m = 1; m <= 6; m++)
  for (let s = 1; s <= 5; s++) {
    const show = m === 1 ? `startFARTBS${s}` : `showFARModule${m}TBS${s}`;
    const grade = m === 1 ? `submitFARTBS${s}` : `gradeFARModule${m}TBS${s}`;
    evaluate(`${show}()`);
    const data = form();
    const known = new Map();
    for (const [i, f] of data.fields.entries()) {
      const el = document.getElementById(f.id);
      if (el.tagName === 'SELECT')
        el.add(new document.defaultView.Option('sentinel', String(900000001 + i)));
      el.value = String(900000001 + i);
      known.set(String(900000001 + i), f);
    }
    ctx.__compare = (left, right) => {
      const f = known.get(String(left));
      const g = known.get(String(right));
      if (f && !g) f.correct = right;
      if (g && !f) g.correct = left;
      return left === right;
    };
    evaluate(`(${instrument(grade)})()`);
    for (const field of data.fields)
      assert(field.correct !== undefined, `No answer: ${show} ${field.id}`);
    evaluate(`${show}()`);
    for (const f of data.fields) document.getElementById(f.id).value = String(f.correct);
    evaluate(`${grade}()`);
    const result = [...main.querySelectorAll('[id]')].find(
      (n) => /result/i.test(n.id) && n.innerHTML.trim(),
    );
    assert(result, `No explanation: ${show}`);
    const explanation = new JSDOM(result.innerHTML).window.document.body;
    // Scores are rendered by React; keep the original worked solutions only.
    explanation.querySelectorAll('h2,h3,p,span').forEach((n) => {
      if (
        /^(Score:|\d+%$|\d+ of \d+ responses correct|SIMULATION RESULTS)/i.test(
          cleanText(n.textContent),
        )
      )
        n.remove();
    });
    const id = `far-m${m}-tbs${s}`;
    write('simulations', id, {
      id,
      moduleId: m,
      number: s,
      ...data,
      explanation: cleanHTML(explanation.innerHTML),
    });
    simulations.push({ id, moduleId: m, number: s, title: data.title });
  }
function constant(fn, name) {
  const source = evaluate(`${fn}.toString()`);
  let value;
  simple(parse(source, { ecmaVersion: 'latest' }), {
    VariableDeclarator(n) {
      if (n.id.name === name) value = evaluate(`(${source.slice(n.init.start, n.init.end)})`);
    },
  });
  return value;
}
const keys = constant('submitFARFinalTBSAssessment', 'answerKeys');
const reviews = constant('showFARFinalTBSAnswerReview', 'reviewData');
for (let s = 1; s <= 7; s++) {
  evaluate(`showFARFinalTBS${s}()`);
  const data = form();
  // Trace each form field through the original save function, rather than
  // assuming that object-property order matches visual field order.
  assert.equal(data.fields.length, Object.keys(keys[s - 1]).length);
  data.fields.forEach((f, i) => {
    document.getElementById(f.id).value = String(800000001 + i);
  });
  evaluate(`saveFARFinalTBS${s}()`);
  const saved = evaluate(`farFinalTBSAnswers[${s - 1}]`);
  data.fields.forEach((f, i) => {
    f.legacyKey = Object.keys(saved).find((key) => saved[key] === 800000001 + i);
    assert(f.legacyKey, `Unmapped final TBS field: ${f.id}`);
    f.correct = keys[s - 1][f.legacyKey];
    assert(f.correct !== undefined, `Missing final TBS answer: ${f.id}`);
  });
  const id = `far-final-tbs${s}`;
  write('simulations', id, {
    id,
    moduleId: 0,
    number: s,
    ...data,
    explanation: reviews[s - 1].map((r) => `<h3>${r.label}</h3><p>${r.explanation}</p>`).join(''),
  });
  simulations.push({ id, moduleId: 0, number: s, title: data.title });
}
assert.equal(lessons.length, 120);
assert.equal(simulations.length, 37);
write('', 'catalog', { courses, lessons, assessments, simulations });
fs.mkdirSync('src/styles', { recursive: true });
fs.copyFileSync('legacy/style.css', 'src/styles/legacy.css');
console.log(
  `Extracted ${lessons.length} lessons, ${assessments.length} MCQ assessments, 40 journal questions, ${simulations.length} simulations.`,
);
