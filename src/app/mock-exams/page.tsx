import { CardLink, PageHeader } from '@/components/ui';
import { examSections } from '@/lib/blueprints';
import { requirePageUser } from '@/server/auth';
export const metadata = { title: 'Mock Exams' };
export default async function Page() {
  await requirePageUser('/mock-exams');
  return (
    <>
      <PageHeader
        title="Mock Exams"
        subtitle="Practice the five-testlet format with server-enforced timing and saved results."
      />
      <div className="learning-grid">
        {examSections.map((s) => (
          <CardLink
            key={s.id}
            href={`/mock-exams/${s.id}`}
            title={`${s.id.toUpperCase()} · ${s.title}`}
          >
            <p>
              4 hours · {s.testlets[0] + s.testlets[1]} MCQs ·{' '}
              {s.testlets.slice(2).reduce((a, b) => a + b, 0)} TBSs
            </p>
            <p>
              {s.mcqWeight * 100}% MCQ / {(1 - s.mcqWeight) * 100}% TBS practice weighting
            </p>
          </CardLink>
        ))}
      </div>
      <h2 className="section-title section-spacer">Course assessments</h2>
      <div className="learning-grid">
        <CardLink href="/learn/fundamentals/final" title="Fundamentals final" />
        <CardLink href="/learn/intermediate/final" title="Intermediate final" />
        {examSections.map((s) => (
          <CardLink
            key={s.id}
            href={`/learn/${s.id}/final`}
            title={`${s.id.toUpperCase()} cumulative assessment`}
          />
        ))}
      </div>
    </>
  );
}
