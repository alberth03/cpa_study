import { PageHeader } from '@/components/ui';
import { Dashboard } from '@/features/progress/dashboard';
import { requirePageUser } from '@/server/auth';
export default async function Page() {
  await requirePageUser('/');
  return (
    <>
      <PageHeader title="Dashboard" subtitle="Your CPA journey starts here." />
      <Dashboard />
    </>
  );
}
