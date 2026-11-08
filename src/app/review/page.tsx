import { PageHeader } from '@/components/ui';
import { AttemptHistory } from '@/features/assessments/results';
import { ReviewAnalytics } from '@/features/progress/review-analytics';
import { requirePageUser } from '@/server/auth';
export const metadata = { title: 'Review' };
export default async function Page() {
  await requirePageUser('/review');
  return (
    <>
      <PageHeader title="Review" subtitle="Resume your work and learn from previous attempts." />
      <ReviewAnalytics />
      <AttemptHistory />
    </>
  );
}
