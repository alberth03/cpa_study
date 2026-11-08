import './env.ts';
import { audit, one, run } from '../src/server/db.ts';
import { localAccountsWithoutEmail } from '../src/server/environment.ts';
const email = process.argv[2]?.trim().toLowerCase();
if (!email) throw new Error('Usage: npm run admin:grant -- your-verified-email@example.com');
const user = one<{ id: string; email_verified_at: string | null }>(
  'SELECT id,email_verified_at FROM users WHERE email=?',
  email,
);
if (!user || (!user.email_verified_at && !localAccountsWithoutEmail()))
  throw new Error('Register and verify this account before granting administrator access.');
run('UPDATE users SET role=? WHERE id=?', 'admin', user.id);
audit(user.id, 'admin.granted', user.id, 'Granted by local administrator CLI');
console.log(`Administrator access granted to ${email}.`);
