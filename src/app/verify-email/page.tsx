import { AuthForm } from '@/features/auth/auth-form';
import { currentUser } from '@/server/auth';
export const metadata = { title: 'Verify email' };
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  return (
    <AuthForm
      mode="verify-email"
      token={(await searchParams).token}
      email={(await currentUser())?.email}
    />
  );
}
