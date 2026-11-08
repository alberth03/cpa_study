'use client';
import { useState } from 'react';
import Link from 'next/link';
import { api, errorMessage } from '@/lib/api';

type Mode =
  'sign-in' | 'register' | 'forgot-password' | 'reset-password' | 'verify-email' | 'confirm-email';
export function AuthForm({
  mode,
  token,
  next = '/',
  email = '',
  localSignup = false,
}: {
  mode: Mode;
  token?: string;
  next?: string;
  email?: string;
  localSignup?: boolean;
}) {
  const [message, setMessage] = useState(''),
    [error, setError] = useState(''),
    [busy, setBusy] = useState(false),
    [done, setDone] = useState(false);
  const headings: Record<Mode, string> = {
    'sign-in': 'Welcome back',
    register: 'Create your study account',
    'forgot-password': 'Reset your password',
    'reset-password': 'Choose a new password',
    'verify-email': token ? 'Verify your email' : 'Check your email',
    'confirm-email': 'Confirm your new email',
  };
  const isVerify = mode === 'verify-email' || mode === 'confirm-email';
  return (
    <div className="auth-shell">
      <section className="auth-card">
        <span className="exam-badge">CPA STUDY</span>
        <h1>{headings[mode]}</h1>
        {localSignup && (
          <p className="content-edition">
            Development mode: email delivery and verification are disabled. Create your account,
            then sign in immediately.
          </p>
        )}
        <p>
          {mode === 'register'
            ? 'One account for your courses, practice, mocks, and study history.'
            : mode === 'sign-in'
              ? 'Continue your CPA preparation on any device.'
              : isVerify
                ? 'Use the verification link sent to your email address.'
                : 'We will help you securely regain access to your study history.'}
        </p>
        {done ? (
          <div role="status" className="key-points">
            <p>{message}</p>
            <Link className="primary-button" href="/sign-in">
              Continue to sign in
            </Link>
          </div>
        ) : (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setBusy(true);
              setError('');
              setMessage('');
              const form = new FormData(e.currentTarget);
              try {
                const password = String(form.get('password') || '');
                if (
                  (mode === 'register' || mode === 'reset-password') &&
                  password !== form.get('confirm')
                )
                  throw new Error('Passwords do not match.');
                const action = isVerify && !token ? 'resend-verification' : mode;
                const body =
                  mode === 'register'
                    ? { name: form.get('name'), email: form.get('email'), password }
                    : mode === 'sign-in'
                      ? { email: form.get('email'), password }
                      : mode === 'reset-password'
                        ? { token, password }
                        : isVerify && token
                          ? { token }
                          : { email: form.get('email') };
                const result = await api<{ message?: string }>(`/api/auth/${action}`, {
                  method: 'POST',
                  body,
                });
                if (mode === 'sign-in') {
                  window.location.assign(
                    next.startsWith('/') && !next.startsWith('//') && !next.includes('\\')
                      ? next
                      : '/',
                  );
                  return;
                }
                setMessage(result.message || 'Request completed.');
                if (action !== 'resend-verification') setDone(true);
              } catch (error) {
                setError(errorMessage(error));
              } finally {
                setBusy(false);
              }
            }}
          >
            {mode === 'register' && (
              <label>
                Your name
                <input name="name" autoComplete="name" maxLength={100} required />
              </label>
            )}
            {['sign-in', 'register', 'forgot-password'].includes(mode) || (isVerify && !token) ? (
              <label>
                Email address
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  defaultValue={email}
                  maxLength={254}
                  required
                />
              </label>
            ) : null}
            {['sign-in', 'register', 'reset-password'].includes(mode) && (
              <label>
                {mode === 'sign-in' ? 'Password' : 'New password'}
                <input
                  name="password"
                  type="password"
                  autoComplete={mode === 'sign-in' ? 'current-password' : 'new-password'}
                  minLength={mode === 'sign-in' ? 1 : 12}
                  maxLength={128}
                  required
                />
              </label>
            )}
            {['register', 'reset-password'].includes(mode) && (
              <>
                <p className="small-label">
                  Use 12–128 characters. A long, unique passphrase works well.
                </p>
                <label>
                  Confirm password
                  <input
                    name="confirm"
                    type="password"
                    autoComplete="new-password"
                    minLength={12}
                    maxLength={128}
                    required
                  />
                </label>
              </>
            )}
            {error && (
              <p className="result-wrong" role="alert">
                {error}
              </p>
            )}
            {message && (
              <p className="key-points" role="status">
                {message}
              </p>
            )}
            <button className="primary-button" disabled={busy}>
              {busy
                ? 'Please wait…'
                : mode === 'sign-in'
                  ? 'Sign in'
                  : mode === 'register'
                    ? 'Create account'
                    : mode === 'forgot-password'
                      ? 'Send reset email'
                      : mode === 'reset-password'
                        ? 'Change password'
                        : token
                          ? 'Verify email'
                          : 'Resend verification email'}
            </button>
          </form>
        )}
        <div className="auth-links">
          {mode === 'sign-in' ? (
            <>
              <Link href="/register">Create an account</Link>
              <Link href="/forgot-password">Forgot password?</Link>
            </>
          ) : (
            <Link href="/sign-in">Back to sign in</Link>
          )}
          <Link href="/privacy">Privacy & data</Link>
        </div>
      </section>
      <aside className="auth-aside">
        <h2>Learn. Practice. Improve.</h2>
        <p>
          Build your foundation, develop professional judgment, and use real performance evidence to
          guide your next step.
        </p>
        <ul>
          <li>All three Core and three Discipline sections</li>
          <li>Personalized practice and five-testlet mocks</li>
          <li>Private progress that follows your account</li>
        </ul>
      </aside>
    </div>
  );
}
