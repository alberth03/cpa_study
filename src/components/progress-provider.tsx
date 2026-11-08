'use client';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from 'react';
import Link from 'next/link';
import { api, ClientError, errorMessage } from '@/lib/api';
import type { ProgressState, User } from '@/types/platform';

interface Context {
  user: User | null;
  progress: ProgressState | null;
  ready: boolean;
  error: string;
  refresh: () => Promise<ProgressState | undefined>;
  markLesson: (id: string, completed?: boolean) => Promise<void>;
  replaceProgress: (state: ProgressState) => void;
}
const ProgressContext = createContext<Context | null>(null);
export const LEGACY_KEY =
  /^(cpaCurrentPage|lesson1Completed|fundamentals(Lesson\d+|Exam(Best|Last))|intermediate(Module\d+(Lesson\d+|Quiz(Best|Last)|Mastered)|Final(Best|Last|Passed))|far(Module\d+(Lesson\d+|TBS\d+Score|PracticeBest|Mastered)|Final(Exam|TBS)(ActiveState|BestScore|LastScore)|PracticeActiveState|JournalActiveState|JournalPracticeBest)|cpa-study:v1(:recovery)?)$/;
export function clearLocalStudyData(userId?: string) {
  try {
    for (const key of Object.keys(localStorage))
      if (LEGACY_KEY.test(key) || key.startsWith(userId ? `cpa-draft:${userId}:` : 'cpa-draft:'))
        localStorage.removeItem(key);
    localStorage.setItem('cpa-study:reset-at', String(Date.now()));
    window.dispatchEvent(new Event('cpa-progress-reset'));
  } catch {
    /* Server progress is authoritative when local storage is unavailable. */
  }
}
const legacySubscribe = (listener: () => void) => {
  window.addEventListener('storage', listener);
  window.addEventListener('cpa-progress-reset', listener);
  return () => {
    window.removeEventListener('storage', listener);
    window.removeEventListener('cpa-progress-reset', listener);
  };
};
function hasLegacy() {
  try {
    return Object.keys(localStorage).some((k) => LEGACY_KEY.test(k));
  } catch {
    return false;
  }
}
function LegacyNotice() {
  const exists = useSyncExternalStore(legacySubscribe, hasLegacy, () => false);
  const { progress } = useProgress();
  return exists && progress && !progress.legacyImported ? (
    <div className="storage-notice">
      Local study history was found. <Link href="/progress">Import it into your account</Link> to
      keep it across devices.
    </div>
  ) : null;
}
export function ProgressProvider({
  children,
  initialUser,
}: {
  children: ReactNode;
  initialUser: User | null;
}) {
  const [progress, setProgress] = useState<ProgressState | null>(null),
    [error, setError] = useState(''),
    [ready, setReady] = useState(!initialUser?.verified);
  const refresh = useCallback(async () => {
    if (!initialUser?.verified) return;
    try {
      const value = await api<ProgressState>('/api/progress');
      setProgress(value);
      setError('');
      setReady(true);
      return value;
    } catch (error) {
      setError(errorMessage(error));
      setReady(true);
      if (error instanceof ClientError && error.status === 401) setProgress(null);
    }
  }, [initialUser?.verified]);
  useEffect(() => {
    const controller = new AbortController();
    if (initialUser?.verified)
      void api<ProgressState>('/api/progress', { signal: controller.signal })
        .then((value) => {
          setProgress(value);
          setError('');
          setReady(true);
        })
        .catch((error) => {
          if (!controller.signal.aborted) {
            setError(errorMessage(error));
            setReady(true);
          }
        });
    const onFocus = () => void refresh();
    const onReset = () => void refresh();
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'cpa-study:reset-at') void refresh();
    };
    window.addEventListener('focus', onFocus);
    window.addEventListener('cpa-progress-reset', onReset);
    window.addEventListener('storage', onStorage);
    return () => {
      controller.abort();
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('cpa-progress-reset', onReset);
      window.removeEventListener('storage', onStorage);
    };
  }, [refresh, initialUser?.verified]);
  const markLesson = useCallback(
    async (id: string, completed = false) => {
      if (!progress) return;
      const value = await api<ProgressState>('/api/progress', {
        method: 'POST',
        keepalive: true,
        generation: progress.generation,
        body: { lessonId: id, completed },
      });
      setProgress(value);
    },
    [progress],
  );
  const context = useMemo(
    () => ({
      user: progress?.user || initialUser,
      progress,
      ready,
      error,
      refresh,
      markLesson,
      replaceProgress: setProgress,
    }),
    [progress, initialUser, ready, error, refresh, markLesson],
  );
  return <ProgressContext.Provider value={context}>{children}</ProgressContext.Provider>;
}
export function useProgress() {
  const value = useContext(ProgressContext);
  if (!value) throw new Error('ProgressProvider is required.');
  return value;
}
export function ProgressNotices() {
  const { error, refresh } = useProgress();
  return (
    <>
      {error && (
        <div className="storage-notice" role="status">
          {error}{' '}
          <button className="text-button" onClick={() => void refresh()}>
            Retry
          </button>{' '}
          <Link href="/sign-in">Sign in</Link>
        </div>
      )}
      <LegacyNotice />
    </>
  );
}
