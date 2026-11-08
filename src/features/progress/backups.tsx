'use client';
import { useRef, useState } from 'react';
import { clearLocalStudyData, LEGACY_KEY, useProgress } from '@/components/progress-provider';
import { api, errorMessage } from '@/lib/api';
import { LoadingProgress } from '@/components/ui';
import type { ProgressState } from '@/types/platform';

export function Backups() {
  const { progress, replaceProgress } = useProgress(),
    input = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState(''),
    [busy, setBusy] = useState(false);
  if (!progress) return <LoadingProgress />;
  async function importData(body: unknown) {
    const result = await api<{ state: ProgressState; issues: string[] }>('/api/progress/backup', {
      method: 'POST',
      generation: progress!.generation,
      body,
    });
    replaceProgress(result.state);
    if (!result.issues.length) clearLocalStudyData(progress!.user?.id);
    setMessage(`Progress imported into your account. ${result.issues.join(' ')}`);
  }
  return (
    <section className="quiz-card">
      <h2>Account data & portable study backups</h2>
      <p>
        Your study history is stored on the server and follows your account across devices. A
        portable backup contains study records and answer references, never your password, session
        tokens, or full answer banks.
      </p>
      <div className="lesson-actions">
        <button
          className="primary-button"
          disabled={busy}
          onClick={async () => {
            setBusy(true);
            try {
              const data = await api('/api/progress/backup');
              const url = URL.createObjectURL(
                new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }),
              );
              const link = document.createElement('a');
              link.href = url;
              link.download = `cpa-study-${new Date().toISOString().slice(0, 10)}.json`;
              link.click();
              URL.revokeObjectURL(url);
              setMessage('Account study backup exported.');
            } catch (e) {
              setMessage(errorMessage(e));
            } finally {
              setBusy(false);
            }
          }}
        >
          Export account data
        </button>
        <button className="back-button" disabled={busy} onClick={() => input.current?.click()}>
          Import backup
        </button>
        <input
          ref={input}
          className="visually-hidden"
          type="file"
          accept="application/json,.json"
          aria-label="Progress backup"
          onChange={async (e) => {
            const file = e.target.files?.[0];
            if (!file) return;
            setBusy(true);
            try {
              if (file.size > 8 * 1024 * 1024)
                throw new Error('Choose a backup smaller than 8 MB.');
              await importData(JSON.parse(await file.text()));
            } catch (e) {
              setMessage(`Import failed: ${errorMessage(e)} Your existing records were kept.`);
            } finally {
              setBusy(false);
              e.target.value = '';
            }
          }}
        />
      </div>
      <h3>Import this browser’s earlier progress</h3>
      <p>
        Only use this option if the local progress belongs to you. The import attaches it to your
        signed-in account. Successful imports clear the old browser copy; unrecognized attempts are
        reported for review.
      </p>
      <button
        className="back-button"
        disabled={busy}
        onClick={async () => {
          setBusy(true);
          try {
            const saved = localStorage.getItem('cpa-study:v1');
            if (saved)
              await importData({ format: 'cpa-study-progress', progress: JSON.parse(saved) });
            else {
              const storage = Object.fromEntries(
                Object.keys(localStorage)
                  .filter((k) => LEGACY_KEY.test(k))
                  .map((k) => [k, localStorage.getItem(k)]),
              );
              if (!Object.keys(storage).length)
                throw new Error('No legacy progress was found in this browser.');
              await importData({ format: 'cpa-study-legacy', storage });
            }
          } catch (e) {
            setMessage(errorMessage(e));
          } finally {
            setBusy(false);
          }
        }}
      >
        Import my local progress
      </button>
      <p className="small-label">
        Use ordinary account sign-in to continue a timed exam on another device. Imported active
        mocks become untimed review assessments; imported history is excluded from readiness and
        Discipline evidence. Original in-memory-only results cannot be recovered.
      </p>
      {message && (
        <p className="key-points" role="status">
          {message}
        </p>
      )}
    </section>
  );
}
