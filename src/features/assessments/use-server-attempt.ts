'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useProgress } from '@/components/progress-provider';
import { api, ClientError, errorMessage } from '@/lib/api';
import { attemptUrl } from '@/lib/urls';
import type { PublicAttempt, StartAttempt } from '@/types/platform';
import type { AttemptAction } from '@/server/attempts';

type Action = AttemptAction extends infer A
  ? A extends { version: number }
    ? Omit<A, 'version'>
    : never
  : never;
interface Draft {
  generation: number;
  version: number;
  itemId: string;
  answers: Record<string, string>;
}
export function useServerAttempt(activityId: string | undefined, url: string, compact = false) {
  const { progress, user, refresh } = useProgress(),
    router = useRouter(),
    params = useSearchParams();
  const existing = Object.values(progress?.attempts || {})
    .filter((a) => a.activityId === activityId && a.status === 'active')
    .at(-1);
  const id = params.get('attempt') || existing?.id;
  const [attempt, setAttempt] = useState<PublicAttempt | null>(null),
    [error, setError] = useState(''),
    [loadedId, setLoadedId] = useState<string>(),
    [loadedGeneration, setLoadedGeneration] = useState<number>(),
    [clockOffset, setClockOffset] = useState(0),
    [pending, setPending] = useState(0),
    [dirty, setDirty] = useState(false),
    [conflictDraft, setConflictDraft] = useState<Draft | null>(null);
  const current = useRef<PublicAttempt | null>(null),
    queue = useRef<Promise<unknown>>(Promise.resolve()),
    edit = useRef(0),
    isDirty = useRef(false),
    timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const generation = progress?.generation;
  const draftKey = useCallback(
    (attemptId: string) => `cpa-draft:${user?.id}:${attemptId}`,
    [user?.id],
  );
  const install = useCallback((value: PublicAttempt, fromServer = true) => {
    current.current = value;
    setAttempt(value);
    if (fromServer) setClockOffset(value.serverNow - Date.now());
  }, []);
  const fetchSaved = useCallback(
    async (signal?: AbortSignal) => {
      if (!id || generation === undefined) {
        return;
      }
      let { attempt: a } = await api<{ attempt: PublicAttempt }>(`/api/attempts/${id}`, {
        signal,
      });
      let draft: Draft | null = null;
      try {
        draft = JSON.parse(localStorage.getItem(draftKey(id)) || 'null');
      } catch {
        /* Browser persistence is optional. */
      }
      let conflict: Draft | null = null;
      if (
        draft &&
        draft.generation === generation &&
        draft.itemId === a.current?.id &&
        a.status === 'active'
      ) {
        if (draft.version === a.version) {
          ({ attempt: a } = await api<{ attempt: PublicAttempt }>(`/api/attempts/${id}`, {
            method: 'PATCH',
            generation,
            body: {
              action: 'answer',
              version: a.version,
              itemId: draft.itemId,
              answers: draft.answers,
            },
          }));
          try {
            localStorage.removeItem(draftKey(id));
          } catch {
            /* Saved on server. */
          }
        } else conflict = draft;
      }
      return { attempt: a, conflict };
    },
    [id, generation, draftKey],
  );
  const acceptSaved = useCallback(
    (saved: Awaited<ReturnType<typeof fetchSaved>>) => {
      if (!saved) return;
      install(saved.attempt);
      setConflictDraft(saved.conflict);
      setError('');
      setLoadedId(id);
      setLoadedGeneration(generation);
    },
    [id, generation, install],
  );
  const failSaved = useCallback(
    (error: unknown) => {
      setError(errorMessage(error));
      if (error instanceof ClientError && error.status === 404) {
        current.current = null;
        setAttempt(null);
      }
      setLoadedId(id);
      setLoadedGeneration(generation);
    },
    [id, generation],
  );
  const load = useCallback(
    () => fetchSaved().then(acceptSaved).catch(failSaved),
    [fetchSaved, acceptSaved, failSaved],
  );
  useEffect(() => {
    if (id === loadedId && generation === loadedGeneration) return;
    const controller = new AbortController();
    void fetchSaved(controller.signal)
      .then((saved) => {
        if (!controller.signal.aborted) acceptSaved(saved);
      })
      .catch((error) => {
        if (!controller.signal.aborted) failSaved(error);
      });
    return () => controller.abort();
  }, [fetchSaved, acceptSaved, failSaved, id, generation, loadedId, loadedGeneration]);
  const send = useCallback(
    (action: Action) => {
      setPending((n) => n + 1);
      const revision = edit.current;
      const result = queue.current
        .catch(() => undefined)
        .then(async () => {
          const a = current.current;
          if (!a || generation === undefined) throw new Error('Load your saved attempt first.');
          try {
            const { attempt: next } = await api<{ attempt: PublicAttempt }>(
              `/api/attempts/${a.id}`,
              {
                method: 'PATCH',
                generation,
                body: { ...action, version: a.version },
                keepalive: true,
              },
            );
            if (action.action === 'answer') {
              if (revision === edit.current) {
                isDirty.current = false;
                setDirty(false);
                try {
                  localStorage.removeItem(draftKey(a.id));
                } catch {
                  /* Server save succeeded. */
                }
              }
            }
            if (
              revision !== edit.current &&
              next.current &&
              next.current.id === current.current?.current?.id
            ) {
              next.answers = current.current.answers;
              try {
                localStorage.setItem(
                  draftKey(a.id),
                  JSON.stringify({
                    generation,
                    version: next.version,
                    itemId: next.current.id,
                    answers: next.answers,
                  }),
                );
              } catch {
                /* Server autosave remains available. */
              }
            }
            install(next);
            setError('');
            if (next.status === 'submitted') {
              await refresh();
              if (!compact) router.push(`/results?attempt=${next.id}`);
            }
            return next;
          } catch (e) {
            setError(errorMessage(e));
            if (e instanceof ClientError && e.code === 'progress_reset') await refresh();
            throw e;
          }
        })
        .finally(() => setPending((n) => Math.max(0, n - 1)));
      queue.current = result;
      return result;
    },
    [generation, draftKey, install, refresh, compact, router],
  );
  const flush = useCallback(async () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    if (isDirty.current && current.current?.current) {
      const a = current.current;
      await send({ action: 'answer', itemId: a.current!.id, answers: a.answers });
    } else await queue.current.catch(() => undefined);
  }, [send]);
  const change = useCallback(
    (field: string, value: string) => {
      const a = current.current;
      if (!a?.current) return;
      const next = { ...a, answers: { ...a.answers, [field]: value } };
      edit.current++;
      isDirty.current = true;
      setDirty(true);
      install(next, false);
      try {
        localStorage.setItem(
          draftKey(a.id),
          JSON.stringify({
            generation,
            version: a.version,
            itemId: a.current.id,
            answers: next.answers,
          }),
        );
      } catch {
        /* Online autosave still works. */
      }
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        void flush().catch(() => undefined);
      }, 350);
    },
    [install, draftKey, generation, flush],
  );
  const act = useCallback(
    async (action: Action) => {
      await flush();
      return send(action);
    },
    [flush, send],
  );
  useEffect(() => {
    if (!attempt?.id || attempt.status !== 'active') return;
    const interval = setInterval(() => {
      if (document.visibilityState === 'visible')
        void flush()
          .then(() => send({ action: 'heartbeat' }))
          .catch(() => undefined);
    }, 30000);
    const visibility = () => {
      if (document.visibilityState === 'hidden') void flush().catch(() => undefined);
    };
    document.addEventListener('visibilitychange', visibility);
    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', visibility);
    };
  }, [attempt?.id, attempt?.status, flush, send]);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  async function start(source: StartAttempt) {
    if (generation === undefined) return;
    setPending((n) => n + 1);
    setError('');
    try {
      const { attempt: a } = await api<{ attempt: PublicAttempt }>('/api/attempts', {
        method: 'POST',
        generation,
        body: source,
      });
      install(a);
      setLoadedId(a.id);
      setLoadedGeneration(generation);
      await refresh();
      router.replace(attemptUrl(url, a.id));
    } catch (e) {
      setError(errorMessage(e));
    } finally {
      setPending((n) => Math.max(0, n - 1));
    }
  }
  async function restoreDraft() {
    if (!conflictDraft) return;
    const a = current.current;
    if (!a?.current) return;
    const restored = await send({
      action: 'answer',
      itemId: a.current.id,
      answers: conflictDraft.answers,
    });
    install(restored);
    setConflictDraft(null);
    try {
      localStorage.removeItem(draftKey(a.id));
    } catch {
      /* Server save succeeded. */
    }
  }
  return {
    attempt,
    loading: (!!id && (loadedId !== id || loadedGeneration !== generation)) || !progress,
    clockOffset,
    pending: pending > 0,
    dirty,
    error,
    load,
    start,
    act,
    change,
    conflictDraft,
    restoreDraft,
  };
}
