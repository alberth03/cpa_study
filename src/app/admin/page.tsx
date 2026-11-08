import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/ui';
import { AdminConsole } from '@/features/admin/admin-console';
import { requirePageUser } from '@/server/auth';
export const metadata = { title: 'Content administration' };
export default async function Page() {
  const user = await requirePageUser('/admin');
  if (user.role !== 'admin') notFound();
  return (
    <>
      <PageHeader
        title="Content administration"
        subtitle="Review, version, publish, and maintain the curriculum."
      />
      <AdminConsole />
    </>
  );
}
