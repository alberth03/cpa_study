import { PageHeader } from '@/components/ui';
import { Results } from '@/features/assessments/results';
import { requirePageUser } from '@/server/auth';
export const metadata = { title: 'Results' };
export default async function Page() {
  await requirePageUser('/results');
  return (
    <>
      <PageHeader title="Results" back={{ href: '/review', label: 'Review' }} />
      <Results />
    </>
  );
}
