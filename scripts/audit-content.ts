import fs from 'node:fs';
import assert from 'node:assert/strict';
const catalog = JSON.parse(fs.readFileSync('src/content/catalog.json', 'utf8'));
const report = [];
for (const course of catalog.courses) {
  const lessons = catalog.lessons.filter((l: { courseId: string }) => l.courseId === course.id),
    sims = catalog.simulations.filter((s: { courseId: string }) => s.courseId === course.id);
  const questions = new Map();
  for (const a of catalog.assessments.filter(
    (a: { courseId: string }) => a.courseId === course.id,
  )) {
    const data = JSON.parse(fs.readFileSync(`src/content/assessments/${a.id}.json`, 'utf8'));
    for (const q of data.questions) {
      assert(q.metadata?.topicId, `Missing metadata: ${q.id}`);
      assert(
        q.choices.some((c: { id: string }) => c.id === q.correctChoiceId),
        `Invalid key: ${q.id}`,
      );
      assert.equal(
        new Set(q.choices.map((c: { text: string }) => c.text)).size,
        q.choices.length,
        `Duplicate choices: ${q.id}`,
      );
      questions.set(q.id, q);
    }
  }
  report.push({
    course: course.id,
    lessons: lessons.length,
    questions: questions.size,
    simulations: sims.length,
  });
}
assert(!fs.existsSync('public/study-data'), 'Private banks must not be publicly served.');
console.table(report);
