import { PageHeader } from '@/components/ui';
import { ActivityPlayer } from '@/features/assessments/activity-player';
import { requirePageUser } from '@/server/auth';
export const metadata = { title: 'Practice session' };
export default async function Page() {
  await requirePageUser('/practice/session');
  return (
    <>
      <PageHeader
        title="Practice session"
        back={{ href: '/practice', label: 'Practice builder' }}
      />
      <div className="lesson-page">
        <ActivityPlayer title="Custom practice" url="/practice/session" />
      </div>
    </>
  );
}
