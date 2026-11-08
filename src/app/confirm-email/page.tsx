import { AuthForm } from '@/features/auth/auth-form';
export const metadata = { title: 'Confirm email change' };
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  return <AuthForm mode="confirm-email" token={(await searchParams).token} />;
}
