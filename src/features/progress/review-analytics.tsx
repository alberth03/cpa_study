'use client';
import { useState } from 'react';
import Link from 'next/link';
import catalog from '@/content/catalog.json';
import { useProgress } from '@/components/progress-provider';
import { LoadingProgress } from '@/components/ui';
import { useResource } from '@/features/use-resource';
import { api, errorMessage } from '@/lib/api';
import { examSections } from '@/lib/blueprints';
import type { AnalyticsResponse } from '@/types/api';

export function ReviewAnalytics() {
  const { progress } = useProgress(),
    resource = useResource<AnalyticsResponse>(progress ? '/api/analytics' : null),
    [section, setSection] = useState('all'),
    [area, setArea] = useState('all'),
    [weakOnly, setWeakOnly] = useState(false),
    [message, setMessage] = useState('');
  const data = resource.data;
  if (!data) return resource.error ? <p role="alert">{resource.error}</p> : <LoadingProgress />;
  const topics = data.topics
    .filter(
      (t) =>
        t.responses > 0 &&
        (section === 'all' || t.section === section) &&
        (area === 'all' || t.areaId === area) &&
        (!weakOnly || t.weak),
    )
    .sort((a, b) => Number(b.weak) - Number(a.weak) || a.mastery - b.mastery);
  const trends = section === 'all' ? data.trends : data.trendsBySection[section] || [];
  const missed = data.missed.filter((r) => section === 'all' || r.section === section);
  return (
    <>
      <div className="filter-row">
        <label>
          Section
          <select
            value={section}
            onChange={(e) => {
              setSection(e.target.value);
              setArea('all');
            }}
          >
            <option value="all">All sections</option>
            {examSections.map((s) => (
              <option key={s.id} value={s.id}>
                {s.id.toUpperCase()}
              </option>
            ))}
          </select>
        </label>
        <label>
          Blueprint area
          <select value={area} onChange={(e) => setArea(e.target.value)}>
            <option value="all">All areas</option>
            {examSections
              .filter((s) => section === 'all' || s.id === section)
              .flatMap((s) =>
                s.areas.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.id} · {a.title}
                  </option>
                )),
              )}
          </select>
        </label>
        <label className="check-label">
          <input
            type="checkbox"
            checked={weakOnly}
            onChange={(e) => setWeakOnly(e.target.checked)}
          />{' '}
          Persistent weaknesses only
        </label>
      </div>
      <section className="results-card">
        <h2>Topic evidence & next steps</h2>
        <p className="small-label">{data.methodology.weakness}</p>
        {topics.length ? (
          topics.map((t) => (
            <div className="topic-evidence" key={t.id}>
              <div>
                <h3>{t.title}</h3>
                <p>
                  {t.accuracy}% accuracy · {t.responses} responses · {t.uniqueItems} distinct items
                  · {t.attempts} attempts
                </p>
                <p className="small-label">
                  {t.confidence} evidence · 95% response interval {t.interval[0]}–{t.interval[1]}% ·{' '}
                  {t.trend === null
                    ? 'Trend not established'
                    : `${t.trend >= 0 ? '+' : ''}${t.trend} point trend`}
                </p>
                <p className="small-label">
                  First-seen accuracy:{' '}
                  {t.firstSeenAccuracy === null ? '—' : `${t.firstSeenAccuracy}%`} · Familiar
                  accuracy: {t.familiarAccuracy === null ? '—' : `${t.familiarAccuracy}%`} · Delayed
                  retention: {t.retention === null ? 'Not established' : `${t.retention}%`}
                </p>
                <p>{t.recommendation}</p>
              </div>
              <div className="topic-evidence-actions">
                <span className={t.weak ? 'result-tag-wrong' : 'result-tag-correct'}>
                  {t.weak ? 'Focus area' : `${t.mastery}% smoothed mastery`}
                </span>
                <Link
                  className="back-button"
                  href={catalog.lessons.find((l) => l.id === t.lessonId)?.url || '/learn'}
                >
                  Review lesson
                </Link>
                <Link
                  className="back-button"
                  href={`/practice?section=${t.section}&topic=${encodeURIComponent(t.id)}`}
                >
                  Targeted practice
                </Link>
                <button
                  className="back-button"
                  onClick={async () => {
                    try {
                      await api('/api/assignments', {
                        method: 'POST',
                        generation: progress!.generation,
                        body: { topicId: t.id },
                      });
                      setMessage('Added to your study plan.');
                      await resource.refresh();
                    } catch (e) {
                      setMessage(errorMessage(e));
                    }
                  }}
                >
                  Add to study plan
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Complete practice in this scope to build enough evidence for meaningful analysis.</p>
        )}
      </section>
      <section className="results-card">
        <h2>Performance over time</h2>
        {trends.length > 1 && (
          <svg
            className="trend-chart"
            viewBox="0 0 600 150"
            role="img"
            aria-label="MCQ accuracy over recent practice days"
          >
            <line x1="10" y1="130" x2="590" y2="130" stroke="#cbd5e1" />
            <polyline
              fill="none"
              stroke="#2563eb"
              strokeWidth="3"
              points={trends
                .map((t, i) =>
                  t.mcq === null
                    ? ''
                    : `${10 + (i * 580) / (trends.length - 1)},${130 - t.mcq * 1.15}`,
                )
                .filter(Boolean)
                .join(' ')}
            />
          </svg>
        )}
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Practice day</th>
                <th>MCQ</th>
                <th>TBS responses</th>
                <th>Responses</th>
                <th>Avg. active seconds</th>
              </tr>
            </thead>
            <tbody>
              {trends.map((t) => (
                <tr key={t.date}>
                  <td>{t.date}</td>
                  <td>{t.mcq === null ? '—' : `${t.mcq}%`}</td>
                  <td>{t.tbs === null ? '—' : `${t.tbs}%`}</td>
                  <td>{t.responses}</td>
                  <td>{t.averageSeconds ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="small-label">
          {data.methodology.time} {data.unanswered} responses were left incomplete in assessed
          attempts.
        </p>
      </section>
      <section className="results-card">
        <h2>Your study plan</h2>
        {data.assignments.length ? (
          data.assignments.map((a) => (
            <div className="performance-row" key={a.id}>
              <span>
                {a.status === 'completed' ? '✓ ' : ''}
                {a.title}
              </span>
              <button
                className="back-button"
                onClick={async () => {
                  try {
                    await api('/api/assignments', {
                      method: 'PATCH',
                      generation: progress!.generation,
                      body: { id: a.id, completed: a.status !== 'completed' },
                    });
                    await resource.refresh();
                  } catch (e) {
                    setMessage(errorMessage(e));
                  }
                }}
              >
                {a.status === 'completed' ? 'Reopen' : 'Mark done'}
              </button>
            </div>
          ))
        ) : (
          <p>Add a topic above to create an actionable review plan.</p>
        )}
      </section>
      <details className="results-card">
        <summary>Missed-response bank ({missed.length})</summary>
        {missed.slice(0, 100).map((r, i) => (
          <div className="key-points" key={`${r.id}-${i}`}>
            <h3>{r.label}</h3>
            <p>Your response: {r.answer}</p>
            <p>Correct response: {r.expected}</p>
            <p>{r.explanation}</p>
            <Link className="back-button" href={`/practice?section=${r.section}&focus=incorrect`}>
              Practice missed questions
            </Link>
          </div>
        ))}
      </details>
      {message && (
        <p role="status" className="key-points">
          {message}
        </p>
      )}
      <p className="small-label">{data.scoringNote}</p>
    </>
  );
}
