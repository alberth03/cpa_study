import { PageHeader } from '@/components/ui';
import { Backups } from '@/features/progress/backups';
import { requirePageUser } from '@/server/auth';
export const metadata = { title: 'Progress & backups' };
export default async function Page() {
  await requirePageUser('/progress');
  return (
    <>
      <PageHeader title="Progress & backups" />
      <Backups />
    </>
  );
}
