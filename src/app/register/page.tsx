import { AuthForm } from '@/features/auth/auth-form';
import { localAccountsWithoutEmail } from '@/server/environment';
export const metadata = { title: 'Create account' };
export default function Page() {
  return <AuthForm mode="register" localSignup={localAccountsWithoutEmail()} />;
}
