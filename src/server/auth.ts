import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { all, audit, one, run, transaction } from './db';
import { ApiError, appOrigin, clientKey, jsonBody, limit, response, verifyOrigin } from './http';
import { hashPassword, opaqueToken, tokenHash, verifyPassword } from './passwords';
import { sendMail } from './mail';
import { localAccountsWithoutEmail, mailDisabled } from './environment';
import type { User } from '@/types/platform';

export interface UserRow {
  id: string;
  email: string;
  name: string;
  password_hash: string;
  email_verified_at: string | null;
  role: 'student' | 'admin';
  created_at: string;
  preferences_json: string;
  progress_generation: number;
  legacy_imported: number;
}
export const cookieName = () =>
  new URL(appOrigin()).protocol === 'https:' ? '__Host-cpa_session' : 'cpa_session';
const sessionDays = 14;
export const publicUser = (row: UserRow): User => ({
  id: row.id,
  email: row.email,
  name: row.name,
  verified: !!row.email_verified_at || localAccountsWithoutEmail(),
  role: row.role,
  createdAt: row.created_at,
});
export function tokenFromRequest(request: Request) {
  return request.headers
    .get('cookie')
    ?.split(';')
    .map((v) => v.trim())
    .find((v) => v.startsWith(`${cookieName()}=`))
    ?.slice(cookieName().length + 1);
}
export function sessionUser(token?: string) {
  if (!token || token.length > 100) return undefined;
  const user = one<UserRow>(
    'SELECT u.* FROM users u JOIN sessions s ON s.user_id=u.id WHERE s.token_hash=? AND s.expires_at>?',
    tokenHash(token),
    Date.now(),
  );
  if (user)
    run(
      'UPDATE sessions SET last_seen_at=? WHERE token_hash=? AND last_seen_at<?',
      Date.now(),
      tokenHash(token),
      Date.now() - 60000,
    );
  return user;
}
export async function currentUser() {
  return sessionUser((await cookies()).get(cookieName())?.value);
}
export async function requirePageUser(next = '/') {
  const user = await currentUser();
  if (!user) redirect(`/sign-in?next=${encodeURIComponent(next)}`);
  if (!user.email_verified_at && !localAccountsWithoutEmail()) redirect('/verify-email');
  return user;
}
export function requireUser(request: Request, verified = true) {
  const user = sessionUser(tokenFromRequest(request));
  if (!user) throw new ApiError(401, 'Sign in to continue.', 'unauthenticated');
  if (verified && !user.email_verified_at && !localAccountsWithoutEmail())
    throw new ApiError(403, 'Verify your email address to start studying.', 'email_unverified');
  return user;
}
export function requireAdmin(request: Request) {
  const user = requireUser(request);
  if (user.role !== 'admin') throw new ApiError(403, 'Administrator access is required.');
  return user;
}
export function requireGeneration(request: Request, user: UserRow) {
  if (
    Number(request.headers.get('x-progress-generation')) !== user.progress_generation ||
    request.headers.get('x-progress-generation') === null
  )
    throw new ApiError(
      409,
      'Your progress changed on another device. Reload before saving.',
      'progress_reset',
    );
}
function setSessionCookie(
  result: ReturnType<typeof response>,
  token: string,
  maxAge = sessionDays * 86400,
) {
  result.cookies.set(cookieName(), token, {
    httpOnly: true,
    secure: new URL(appOrigin()).protocol === 'https:',
    sameSite: 'lax',
    path: '/',
    maxAge,
  });
  return result;
}
export function clearSessionCookie(result: ReturnType<typeof response>) {
  return setSessionCookie(result, '', 0);
}
async function issueSession(user: UserRow, request: Request) {
  const token = opaqueToken(),
    now = Date.now();
  run(
    'INSERT INTO sessions(token_hash,user_id,created_at,expires_at,last_seen_at,user_agent) VALUES(?,?,?,?,?,?)',
    tokenHash(token),
    user.id,
    new Date(now).toISOString(),
    now + sessionDays * 86400000,
    now,
    (request.headers.get('user-agent') || 'Unknown device').slice(0, 300),
  );
  run('DELETE FROM sessions WHERE expires_at<?', now);
  audit(user.id, 'auth.sign-in', user.id);
  return setSessionCookie(response({ user: publicUser(user) }), token);
}
async function issueEmail(
  user: UserRow,
  purpose: 'verify' | 'reset' | 'email-change',
  value?: string,
) {
  if (mailDisabled())
    throw new ApiError(
      503,
      'Email delivery is disabled in this environment. Enable preview or SMTP delivery to use email-based account actions.',
      'mail_disabled',
    );
  const token = opaqueToken(),
    duration = purpose === 'reset' ? 3600000 : 86400000;
  transaction(() => {
    run('DELETE FROM auth_tokens WHERE user_id=? AND purpose=?', user.id, purpose);
    run(
      'INSERT INTO auth_tokens(token_hash,user_id,purpose,value,expires_at) VALUES(?,?,?,?,?)',
      tokenHash(token),
      user.id,
      purpose,
      value ?? null,
      Date.now() + duration,
    );
  });
  const route =
    purpose === 'reset'
      ? 'reset-password'
      : purpose === 'email-change'
        ? 'confirm-email'
        : 'verify-email';
  await sendMail(
    value || user.email,
    purpose === 'reset' ? 'Reset your CPA Study password' : 'Verify your CPA Study email',
    `Hello ${user.name},\n\n${purpose === 'reset' ? 'Choose a new password' : 'Confirm your email address'} using this single-use link:\n${appOrigin()}/${route}?token=${encodeURIComponent(token)}\n\nThis link expires in ${purpose === 'reset' ? 'one hour' : '24 hours'}. If you did not request it, you can ignore this message.\n\nCPA Study`,
    user.id,
  );
}
const emailSchema = z
  .email()
  .max(254)
  .transform((v) => v.trim().toLowerCase());
const passwordSchema = z
  .string()
  .min(12, 'Use at least 12 characters.')
  .max(128, 'Use at most 128 characters.');
const tokenSchema = z.string().min(30).max(100);
export async function authAction(request: Request, action: string) {
  verifyOrigin(request);
  const key = clientKey(request);
  limit(`auth-ip:${key}`, 150, 3600000);
  if (action === 'register') {
    if (mailDisabled() && !localAccountsWithoutEmail())
      throw new ApiError(
        503,
        'Email delivery must be configured before account registration.',
        'mail_disabled',
      );
    const data = await jsonBody(
      request,
      z.object({
        name: z.string().trim().min(1).max(100),
        email: emailSchema,
        password: passwordSchema,
      }),
    );
    limit(`register:${tokenHash(data.email)}`, 4, 3600000);
    const existing = one<UserRow>('SELECT * FROM users WHERE email=?', data.email);
    const hash = await hashPassword(data.password);
    if (!existing) {
      const id = crypto.randomUUID(),
        now = new Date().toISOString();
      const inserted = run(
        'INSERT OR IGNORE INTO users(id,email,name,password_hash,created_at,updated_at) VALUES(?,?,?,?,?,?)',
        id,
        data.email,
        data.name,
        hash,
        now,
        now,
      );
      if (inserted.changes && !localAccountsWithoutEmail())
        await issueEmail(one<UserRow>('SELECT * FROM users WHERE id=?', id)!, 'verify');
    }
    return response(
      {
        message: localAccountsWithoutEmail()
          ? 'You can sign in with your email and password. Email verification is disabled for local development. If this email already had an account, use its existing password.'
          : 'If this address can be registered, a verification email has been sent. Already registered? Sign in or reset your password.',
      },
      202,
    );
  }
  if (action === 'sign-in') {
    const data = await jsonBody(
      request,
      z.object({ email: emailSchema, password: z.string().min(1).max(128) }),
    );
    limit(`login:${tokenHash(data.email)}`, 15, 15 * 60000);
    const user = one<UserRow>('SELECT * FROM users WHERE email=?', data.email);
    const valid = await verifyPassword(
      data.password,
      user?.password_hash || `scrypt-v1$${'0'.repeat(32)}$${'0'.repeat(128)}`,
    );
    if (!user || !valid)
      throw new ApiError(401, 'Email or password is incorrect.', 'invalid_credentials');
    return issueSession(user, request);
  }
  if (action === 'forgot-password' || action === 'resend-verification') {
    if (mailDisabled())
      throw new ApiError(
        503,
        localAccountsWithoutEmail()
          ? 'Email is disabled locally. You can sign in without verification. Enable preview or SMTP delivery if you need password recovery.'
          : 'Email delivery is disabled.',
        'mail_disabled',
      );
    const data = await jsonBody(request, z.object({ email: emailSchema }));
    limit(`email:${tokenHash(data.email)}`, 4, 3600000);
    const user = one<UserRow>('SELECT * FROM users WHERE email=?', data.email);
    if (user && (action === 'forgot-password' || !user.email_verified_at))
      await issueEmail(user, action === 'forgot-password' ? 'reset' : 'verify');
    return response({
      message: 'If an eligible account exists, an email with next steps has been sent.',
    });
  }
  if (action === 'verify-email' || action === 'confirm-email') {
    const { token } = await jsonBody(request, z.object({ token: tokenSchema }));
    const purpose = action === 'verify-email' ? 'verify' : 'email-change';
    transaction(() => {
      const saved = one<{ user_id: string; value: string | null }>(
        'SELECT user_id,value FROM auth_tokens WHERE token_hash=? AND purpose=? AND expires_at>?',
        tokenHash(token),
        purpose,
        Date.now(),
      );
      if (!saved)
        throw new ApiError(
          400,
          'This verification link is invalid or expired. Request a new email.',
        );
      if (purpose === 'email-change') {
        if (one('SELECT id FROM users WHERE email=? AND id<>?', saved.value!, saved.user_id))
          throw new ApiError(409, 'This email address cannot be used.');
        run(
          'UPDATE users SET email=?,email_verified_at=?,updated_at=? WHERE id=?',
          saved.value!,
          new Date().toISOString(),
          new Date().toISOString(),
          saved.user_id,
        );
        run('DELETE FROM sessions WHERE user_id=?', saved.user_id);
        run('DELETE FROM auth_tokens WHERE user_id=?', saved.user_id);
      } else
        run(
          'UPDATE users SET email_verified_at=?,updated_at=? WHERE id=?',
          new Date().toISOString(),
          new Date().toISOString(),
          saved.user_id,
        );
      run('DELETE FROM auth_tokens WHERE token_hash=?', tokenHash(token));
      audit(saved.user_id, `auth.${action}`, saved.user_id);
    });
    return response({ message: 'Email verified. You can now sign in.' });
  }
  if (action === 'reset-password') {
    const data = await jsonBody(
      request,
      z.object({ token: tokenSchema, password: passwordSchema }),
    );
    const hash = await hashPassword(data.password);
    transaction(() => {
      const saved = one<{ user_id: string }>(
        'SELECT user_id FROM auth_tokens WHERE token_hash=? AND purpose=? AND expires_at>?',
        tokenHash(data.token),
        'reset',
        Date.now(),
      );
      if (!saved)
        throw new ApiError(400, 'This reset link is invalid or expired. Request another.');
      run(
        'UPDATE users SET password_hash=?,updated_at=? WHERE id=?',
        hash,
        new Date().toISOString(),
        saved.user_id,
      );
      run('DELETE FROM sessions WHERE user_id=?', saved.user_id);
      run(
        "DELETE FROM auth_tokens WHERE user_id=? AND purpose IN ('reset','email-change')",
        saved.user_id,
      );
      audit(saved.user_id, 'auth.password-reset', saved.user_id);
    });
    return clearSessionCookie(
      response({ message: 'Password changed. Sign in with your new password.' }),
    );
  }
  const user = requireUser(request, false);
  if (action === 'sign-out') {
    run('DELETE FROM sessions WHERE token_hash=?', tokenHash(tokenFromRequest(request)!));
    return clearSessionCookie(response({ ok: true }));
  }
  if (action === 'revoke-session') {
    const { id } = await jsonBody(request, z.object({ id: z.string().min(1).max(100) }));
    run('DELETE FROM sessions WHERE token_hash=? AND user_id=?', id, user.id);
    const current = id === tokenHash(tokenFromRequest(request)!);
    return current ? clearSessionCookie(response({ signedOut: true })) : response({ ok: true });
  }
  if (action === 'change-password') {
    const data = await jsonBody(
      request,
      z.object({ currentPassword: z.string().max(128), password: passwordSchema }),
    );
    limit(`sensitive:${user.id}`, 10, 15 * 60000);
    if (!(await verifyPassword(data.currentPassword, user.password_hash)))
      throw new ApiError(403, 'Current password is incorrect.');
    const hash = await hashPassword(data.password);
    transaction(() => {
      run(
        'UPDATE users SET password_hash=?,updated_at=? WHERE id=?',
        hash,
        new Date().toISOString(),
        user.id,
      );
      run(
        'DELETE FROM sessions WHERE user_id=? AND token_hash<>?',
        user.id,
        tokenHash(tokenFromRequest(request)!),
      );
      run(
        "DELETE FROM auth_tokens WHERE user_id=? AND purpose IN ('reset','email-change')",
        user.id,
      );
      audit(user.id, 'auth.password-changed', user.id);
    });
    return response({ message: 'Password updated. Other sessions were signed out.' });
  }
  if (action === 'change-email') {
    const data = await jsonBody(
      request,
      z.object({ password: z.string().max(128), email: emailSchema }),
    );
    limit(`sensitive:${user.id}`, 10, 15 * 60000);
    if (!(await verifyPassword(data.password, user.password_hash)))
      throw new ApiError(403, 'Password is incorrect.');
    if (data.email === user.email || one('SELECT id FROM users WHERE email=?', data.email))
      throw new ApiError(409, 'This email address cannot be used.');
    await issueEmail(user, 'email-change', data.email);
    return response({
      message:
        'Verify the new address using the email we sent. Your current address remains active until then.',
    });
  }
  throw new ApiError(404, 'Unknown account action.');
}
export function sessionList(user: UserRow, currentToken: string) {
  return all<{
    token_hash: string;
    created_at: string;
    expires_at: number;
    last_seen_at: number;
    user_agent: string;
  }>(
    'SELECT token_hash,created_at,expires_at,last_seen_at,user_agent FROM sessions WHERE user_id=? AND expires_at>? ORDER BY last_seen_at DESC',
    user.id,
    Date.now(),
  ).map((s) => ({
    id: s.token_hash,
    current: s.token_hash === tokenHash(currentToken),
    createdAt: s.created_at,
    expiresAt: s.expires_at,
    lastSeenAt: s.last_seen_at,
    device: s.user_agent,
  }));
}
