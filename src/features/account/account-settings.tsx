'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { clearLocalStudyData, useProgress } from '@/components/progress-provider';
import { Dialog } from '@/components/dialog';
import { LoadingProgress } from '@/components/ui';
import { useResource } from '@/features/use-resource';
import { api, errorMessage, navigateAfterAuth } from '@/lib/api';
import type { Preferences, ProgressState } from '@/types/platform';

function PreferencesForm({ initial }: { initial: Preferences }) {
  const { user, progress, refresh } = useProgress(),
    [prefs, setPrefs] = useState(initial),
    [name, setName] = useState(user?.name || ''),
    [message, setMessage] = useState(''),
    [busy, setBusy] = useState(false);
  return (
    <form
      className="quiz-card"
      onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true);
        try {
          await api('/api/account', {
            method: 'PATCH',
            generation: progress!.generation,
            body: { name, preferences: prefs },
          });
          await refresh();
          setMessage('Profile and study preferences saved.');
        } catch (e) {
          setMessage(errorMessage(e));
        } finally {
          setBusy(false);
        }
      }}
    >
      <h2>Profile & study preferences</h2>
      <div className="form-grid">
        <label>
          Name
          <input value={name} maxLength={100} required onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Daily response goal
          <input
            type="number"
            min={1}
            max={200}
            value={prefs.dailyGoal}
            onChange={(e) => setPrefs({ ...prefs, dailyGoal: Number(e.target.value) })}
          />
        </label>
        <label>
          Target exam date
          <input
            type="date"
            value={prefs.examDate || ''}
            onChange={(e) => setPrefs({ ...prefs, examDate: e.target.value || null })}
          />
        </label>
        <label>
          Time zone
          <input
            value={prefs.timezone}
            required
            onChange={(e) => setPrefs({ ...prefs, timezone: e.target.value })}
            placeholder="America/New_York"
          />
          <button
            type="button"
            className="text-button"
            onClick={() =>
              setPrefs({ ...prefs, timezone: Intl.DateTimeFormat().resolvedOptions().timeZone })
            }
          >
            Use this device’s time zone
          </button>
        </label>
        <label>
          Selected Discipline
          <select
            value={prefs.selectedDiscipline || ''}
            onChange={(e) =>
              setPrefs({
                ...prefs,
                selectedDiscipline: (e.target.value as Preferences['selectedDiscipline']) || null,
              })
            }
          >
            <option value="">Choose later</option>
            <option value="bar">BAR</option>
            <option value="isc">ISC</option>
            <option value="tcp">TCP</option>
          </select>
        </label>
        <label>
          Curriculum edition
          <select
            value={prefs.blueprintYear}
            onChange={(e) => setPrefs({ ...prefs, blueprintYear: Number(e.target.value) })}
          >
            <option value={2026}>2026 · published curriculum</option>
            <option value={2027} disabled>
              2027 · update review in progress
            </option>
          </select>
        </label>
      </div>
      <fieldset className="interest-options">
        <legend>Optional career interests</legend>
        {(['reporting', 'analysis', 'audit', 'technology', 'tax', 'planning'] as const).map(
          (interest) => (
            <label className="check-label" key={interest}>
              <input
                type="checkbox"
                checked={prefs.interests.includes(interest)}
                onChange={(e) =>
                  setPrefs({
                    ...prefs,
                    interests: e.target.checked
                      ? [...prefs.interests, interest]
                      : prefs.interests.filter((v) => v !== interest),
                  })
                }
              />
              {interest}
            </label>
          ),
        )}
      </fieldset>
      <p className="small-label">
        Interests inform a small part of your Discipline recommendation and never restrict your
        choice. Tax content shows its reference period; later editions require review before use.
      </p>
      <button className="primary-button" disabled={busy}>
        Save preferences
      </button>
      {message && <p role="status">{message}</p>}
    </form>
  );
}
export function AccountSettings() {
  const { user, progress, refresh, replaceProgress } = useProgress(),
    router = useRouter(),
    sessions = useResource<{
      sessions: {
        id: string;
        current: boolean;
        device: string;
        lastSeenAt: number;
        createdAt: string;
      }[];
    }>(user ? '/api/auth/sessions' : null);
  const [message, setMessage] = useState(''),
    [busy, setBusy] = useState(false),
    [danger, setDanger] = useState<'reset-progress' | 'delete-account' | null>(null);
  if (!user) return <LoadingProgress />;
  const perform = async (action: string, body: unknown) => {
    setBusy(true);
    try {
      const result = await api<{ message?: string }>(`/api/auth/${action}`, {
        method: 'POST',
        body,
      });
      setMessage(result.message || 'Account updated.');
      await sessions.refresh();
    } catch (e) {
      setMessage(errorMessage(e));
    } finally {
      setBusy(false);
    }
  };
  return (
    <>
      {progress ? (
        <PreferencesForm initial={progress.preferences} />
      ) : (
        <div className="storage-notice">
          Verify your email to begin studying.{' '}
          <Link href="/verify-email">Verification options</Link>
        </div>
      )}
      <div className="learning-grid">
        <form
          className="quiz-card"
          onSubmit={async (e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            if (f.get('password') !== f.get('confirm')) {
              setMessage('New passwords do not match.');
              return;
            }
            await perform('change-password', {
              currentPassword: f.get('currentPassword'),
              password: f.get('password'),
            });
          }}
        >
          <h2>Change password</h2>
          <label>
            Current password
            <input
              name="currentPassword"
              type="password"
              autoComplete="current-password"
              required
              maxLength={128}
            />
          </label>
          <label>
            New password
            <input
              name="password"
              type="password"
              autoComplete="new-password"
              minLength={12}
              maxLength={128}
              required
            />
          </label>
          <label>
            Confirm new password
            <input
              name="confirm"
              type="password"
              autoComplete="new-password"
              minLength={12}
              maxLength={128}
              required
            />
          </label>
          <button className="primary-button" disabled={busy}>
            Update password
          </button>
        </form>
        <form
          className="quiz-card"
          onSubmit={async (e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            await perform('change-email', { email: f.get('email'), password: f.get('password') });
          }}
        >
          <h2>Change email</h2>
          <p>Current address: {user.email}</p>
          <label>
            New email address
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Confirm current password
            <input
              name="password"
              type="password"
              autoComplete="current-password"
              maxLength={128}
              required
            />
          </label>
          <button className="primary-button" disabled={busy}>
            Send confirmation email
          </button>
          <p className="small-label">
            The new address must be verified before it replaces the current address. Existing
            sessions are revoked after confirmation.
          </p>
        </form>
      </div>
      <section className="results-card">
        <h2>Signed-in sessions</h2>
        {sessions.data?.sessions.map((s) => (
          <div className="session-row" key={s.id}>
            <div>
              <strong>{s.current ? 'This session' : 'Other session'}</strong>
              <p className="small-label">{s.device}</p>
              <p>Last active {new Date(s.lastSeenAt).toLocaleString()}</p>
            </div>
            <button
              className="back-button"
              disabled={busy}
              onClick={async () => {
                setBusy(true);
                try {
                  const result = await api<{ signedOut?: boolean }>('/api/auth/revoke-session', {
                    method: 'POST',
                    body: { id: s.id },
                  });
                  if (result.signedOut) navigateAfterAuth('/sign-in');
                  else await sessions.refresh();
                } catch (e) {
                  setMessage(errorMessage(e));
                } finally {
                  setBusy(false);
                }
              }}
            >
              {s.current ? 'Sign out' : 'Revoke session'}
            </button>
          </div>
        ))}
        {sessions.error && <p>{sessions.error}</p>}
      </section>
      <section className="danger-zone">
        <h2>Progress reset & account deletion</h2>
        <p>
          Resetting progress removes completed lessons, knowledge-check mastery, MCQ/TBS results,
          practice and mock history, scores, analytics evidence, study assignments, and Discipline
          preferences. Your login remains intact.
        </p>
        <p>
          Deleting your account also removes your login and active sessions. These actions are
          irreversible within this application.
        </p>
        <div className="lesson-actions">
          <button
            className="danger-button"
            onClick={() => {
              setMessage('');
              setDanger('reset-progress');
            }}
          >
            Reset all progress
          </button>
          <button
            className="back-button"
            onClick={() => {
              setMessage('');
              setDanger('delete-account');
            }}
          >
            Delete account
          </button>
          <Link className="back-button" href="/progress">
            Export a backup
          </Link>
        </div>
      </section>
      {message && (
        <p className="key-points" role="status">
          {message}
        </p>
      )}
      {danger && (
        <Dialog
          title={
            danger === 'reset-progress'
              ? 'Permanently reset all progress?'
              : 'Permanently delete your account?'
          }
          onClose={() => setDanger(null)}
        >
          <p>
            {danger === 'reset-progress'
              ? 'All learning progress, responses, results, scores, study plans, and recommendation evidence will be erased. Your email and password will remain active.'
              : 'Your account, sessions, and all study records will be deleted.'}
          </p>
          <p>
            The account’s server records and relevant local study data will be cleared. This cannot
            be undone without a previously exported study backup.
          </p>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setBusy(true);
              const f = new FormData(e.currentTarget);
              try {
                const result = await api<ProgressState & { deleted?: boolean }>('/api/account', {
                  method: 'POST',
                  body: {
                    action: danger,
                    confirmation: f.get('confirmation'),
                    password: f.get('password'),
                  },
                });
                clearLocalStudyData(user.id);
                if (result.deleted) {
                  navigateAfterAuth('/register');
                  return;
                }
                replaceProgress(result);
                setDanger(null);
                await refresh();
                router.replace('/');
                router.refresh();
              } catch (e) {
                setMessage(errorMessage(e));
              } finally {
                setBusy(false);
              }
            }}
          >
            <label>
              Type {danger === 'reset-progress' ? 'RESET ALL PROGRESS' : 'DELETE MY ACCOUNT'}
              <input name="confirmation" autoComplete="off" required />
            </label>
            <label>
              Current password
              <input
                name="password"
                type="password"
                autoComplete="current-password"
                maxLength={128}
                required
              />
            </label>
            {message && (
              <p role="alert" className="result-wrong">
                {message}
              </p>
            )}
            <div className="lesson-actions">
              <button type="button" className="back-button" onClick={() => setDanger(null)}>
                Cancel
              </button>
              <button className="danger-button" disabled={busy}>
                {busy
                  ? 'Processing…'
                  : danger === 'reset-progress'
                    ? 'Confirm permanent reset'
                    : 'Confirm account deletion'}
              </button>
            </div>
          </form>
        </Dialog>
      )}
    </>
  );
}
