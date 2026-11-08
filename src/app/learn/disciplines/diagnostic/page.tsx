import { PageHeader } from '@/components/ui';
import { ActivityPlayer } from '@/features/assessments/activity-player';
import { requirePageUser } from '@/server/auth';
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ section?: string }>;
}) {
  await requirePageUser('/learn/disciplines');
  const value = (await searchParams).section;
  const section = value === 'isc' || value === 'tcp' ? value : 'bar';
  return (
    <>
      <PageHeader
        title={`${section.toUpperCase()} Diagnostic`}
        subtitle="18 MCQs and 2 simulations to add direct evidence to your Discipline comparison."
        back={{ href: '/learn/disciplines', label: 'Compare Disciplines' }}
      />
      <div className="lesson-page">
        <ActivityPlayer
          activityId={`${section}-diagnostic`}
          title={`${section.toUpperCase()} Diagnostic`}
          url={`/learn/disciplines/diagnostic?section=${section}`}
          startRequest={{ source: 'diagnostic', section }}
        />
      </div>
    </>
  );
}
