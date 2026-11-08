'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import catalog from '@/content/catalog.json';
import topics from '@/content/topics.json';
import { examSections } from '@/lib/blueprints';
import { api, errorMessage } from '@/lib/api';
import { useProgress } from '@/components/progress-provider';
import type { PracticeConfig, PublicAttempt } from '@/types/platform';

export function PracticeBuilder() {
  const { progress, refresh } = useProgress(),
    router = useRouter(),
    params = useSearchParams();
  const initialSection = catalog.courses.some((c) => c.id === params.get('section'))
    ? params.get('section')!
    : 'far';
  const [config, setConfig] = useState<PracticeConfig>({
    section: initialSection as PracticeConfig['section'],
    topicId: params.get('topic') || undefined,
    type: 'mcq',
    count: 10,
    difficulty: 'mixed',
    mode: 'tutor',
    focus:
      params.get('focus') === 'incorrect'
        ? 'incorrect'
        : params.get('focus') === 'weakness'
          ? 'weakness'
          : 'random',
    minutes: null,
    blueprintYear: 2026,
  });
  const [available, setAvailable] = useState<{ mcqs: number; simulations: number } | null>(null),
    [error, setError] = useState(''),
    [busy, setBusy] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const timer = setTimeout(() => {
      void api<{ mcqs: number; simulations: number }>('/api/practice/preview', {
        method: 'POST',
        body: config,
        signal: controller.signal,
      })
        .then((value) => {
          if (!controller.signal.aborted) setAvailable(value);
        })
        .catch((e) => {
          if (!controller.signal.aborted) setError(errorMessage(e));
        });
    }, 200);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [config]);
  const course = catalog.courses.find((c) => c.id === config.section)!,
    section = examSections.find((s) => s.id === config.section);
  const availableTopics = topics.filter(
    (t) =>
      t.section === config.section &&
      (!config.areaId || t.areaId === config.areaId) &&
      (!config.moduleId ||
        t.lessonIds.some(
          (id) => catalog.lessons.find((l) => l.id === id)?.moduleId === config.moduleId,
        )),
  );
  const update = (patch: Partial<PracticeConfig>) => {
    setConfig({ ...config, ...patch });
    setAvailable(null);
    setError('');
  };
  const simsNeeded =
    config.type === 'simulation'
      ? config.count
      : config.type === 'mixed' && config.count >= 2
        ? Math.max(1, Math.round(config.count * 0.2))
        : 0;
  const enough =
    !!available &&
    available.mcqs >= config.count - simsNeeded &&
    available.simulations >= simsNeeded;
  return (
    <section className="quiz-card">
      <h2>Build your practice session</h2>
      <p>
        Choose the material and feedback you need. Random sessions prioritize lower-exposure
        questions; weakness practice uses repeated performance evidence.
      </p>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (!progress) return;
          setBusy(true);
          try {
            const { attempt } = await api<{ attempt: PublicAttempt }>('/api/attempts', {
              method: 'POST',
              generation: progress.generation,
              body: { source: 'practice', config },
            });
            await refresh();
            router.push(`/practice/session?attempt=${attempt.id}`);
          } catch (e) {
            setError(errorMessage(e));
          } finally {
            setBusy(false);
          }
        }}
      >
        <div className="form-grid">
          <label>
            Course
            <select
              value={config.section}
              onChange={(e) =>
                update({
                  section: e.target.value as PracticeConfig['section'],
                  moduleId: undefined,
                  areaId: undefined,
                  topicId: undefined,
                })
              }
            >
              {catalog.courses.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>
          </label>
          <label>
            Module
            <select
              value={config.moduleId || ''}
              onChange={(e) =>
                update({
                  moduleId: e.target.value ? Number(e.target.value) : undefined,
                  topicId: undefined,
                  ...(config.focus === 'cumulative' && e.target.value
                    ? { focus: 'module' as const }
                    : {}),
                })
              }
            >
              <option value="">All modules</option>
              {course.modules.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.id}. {m.title}
                </option>
              ))}
            </select>
          </label>
          <label>
            Blueprint area
            <select
              value={config.areaId || ''}
              onChange={(e) => update({ areaId: e.target.value || undefined, topicId: undefined })}
            >
              <option value="">All areas</option>
              {section?.areas.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.title}
                </option>
              ))}
            </select>
          </label>
          <label>
            Topic
            <select
              value={config.topicId || ''}
              onChange={(e) => update({ topicId: e.target.value || undefined })}
            >
              <option value="">All topics</option>
              {availableTopics.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.title}
                </option>
              ))}
            </select>
          </label>
          <label>
            Question type
            <select
              value={config.type}
              onChange={(e) => update({ type: e.target.value as PracticeConfig['type'] })}
            >
              <option value="mcq">Multiple-choice questions</option>
              <option value="simulation">Task-based simulations</option>
              <option value="mixed">MCQs + simulations</option>
            </select>
          </label>
          <label>
            Number of items
            <input
              type="number"
              min={1}
              max={config.type === 'simulation' ? 20 : 100}
              value={config.count}
              onChange={(e) => update({ count: Number(e.target.value) })}
            />
          </label>
          <label>
            Difficulty
            <select
              value={config.difficulty}
              onChange={(e) =>
                update({ difficulty: e.target.value as PracticeConfig['difficulty'] })
              }
            >
              {['mixed', 'foundation', 'application', 'advanced'].map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </label>
          <label>
            Selection focus
            <select
              value={config.focus}
              onChange={(e) =>
                update({
                  focus: e.target.value as PracticeConfig['focus'],
                  ...(e.target.value === 'cumulative'
                    ? { moduleId: undefined, topicId: undefined }
                    : {}),
                })
              }
            >
              {[
                ['random', 'Random · prefer unseen'],
                ['unseen', 'Unseen questions only'],
                ['incorrect', 'Previously incorrect'],
                ['weakness', 'Weak topics'],
                ['cumulative', 'Cumulative review'],
                ['learning', 'Learning reinforcement'],
                ['topic', 'Topic practice'],
                ['module', 'Module practice'],
              ].map(([v, l]) => (
                <option value={v} key={v}>
                  {l}
                </option>
              ))}
            </select>
          </label>
          <label>
            Feedback mode
            <select
              value={config.mode}
              onChange={(e) => update({ mode: e.target.value as PracticeConfig['mode'] })}
            >
              <option value="tutor">Tutor · feedback after checking</option>
              <option value="exam">Exam · results after submission</option>
            </select>
          </label>
          <label>
            Time limit in minutes
            <input
              type="number"
              min={1}
              max={240}
              placeholder="Untimed"
              value={config.minutes ?? ''}
              onChange={(e) => update({ minutes: e.target.value ? Number(e.target.value) : null })}
            />
          </label>
        </div>
        {config.focus === 'learning' && !config.topicId && (
          <p className="small-label">
            Learning reinforcement uses your most recently opened lesson within the selected course
            and filters.
          </p>
        )}
        <div className="key-points" role="status">
          {available
            ? `${available.mcqs} MCQs and ${available.simulations} simulations match your selection.`
            : 'Checking the available bank…'}
          {available && !enough && (
            <p>
              Reduce the item count or broaden your filters. Unseen, incorrect, and weak-topic pools
              reflect your own history.
            </p>
          )}
        </div>
        {error && (
          <p className="result-wrong" role="alert">
            {error}
          </p>
        )}
        <button className="primary-button" disabled={!progress || busy || !enough}>
          {busy ? 'Creating session…' : 'Start custom practice'}
        </button>
        <p className="small-label">
          Course edition: 2026. Your responses and progress are stored in your account.
        </p>
      </form>
    </section>
  );
}
