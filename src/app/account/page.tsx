import { redirect } from 'next/navigation';
import { PageHeader } from '@/components/ui';
import { AccountSettings } from '@/features/account/account-settings';
import { currentUser } from '@/server/auth';
export const metadata = { title: 'Account settings' };
export default async function Page() {
  if (!(await currentUser())) redirect('/sign-in?next=/account');
  return (
    <>
      <PageHeader
        title="Account settings"
        subtitle="Manage your profile, sessions, privacy, and study preferences."
      />
      <AccountSettings />
    </>
  );
}
