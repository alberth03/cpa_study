import { CardLink, PageHeader } from '@/components/ui';
import catalog from '@/content/catalog.json';
import { activityUrl } from '@/lib/routes';
import { PracticeBuilder } from '@/features/practice/practice-builder';
import { requirePageUser } from '@/server/auth';
export const metadata = { title: 'Practice' };
export default async function Page() {
  await requirePageUser('/practice');
  return (
    <>
      <PageHeader
        title="Practice"
        subtitle="Build confidence with targeted quizzes and simulations."
      />
      <PracticeBuilder />
      <h2 className="section-title">Multiple-choice practice</h2>
      <div className="learning-grid">
        {catalog.assessments
          .filter((a) => a.moduleId > 0)
          .map((a) => (
            <CardLink key={a.id} href={activityUrl(a.id)} title={a.title}>
              <p>{a.count} questions · Immediate feedback</p>
            </CardLink>
          ))}
      </div>
      <h2 className="section-title section-spacer">Task-based simulations</h2>
      <div className="learning-grid">
        {catalog.courses
          .find((c) => c.id === 'far')!
          .modules.map((m) => (
            <CardLink key={m.id} href={`/learn/far/modules/${m.id}/simulations`} title={m.title}>
              <p>5 simulations</p>
            </CardLink>
          ))}
        <CardLink href="/learn/far/journal" title="Journal entry practice">
          <p>10 randomized questions per session</p>
        </CardLink>
      </div>
    </>
  );
}
