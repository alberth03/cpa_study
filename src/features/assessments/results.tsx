'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import catalog from '@/content/catalog.json';
import { useProgress } from '@/components/progress-provider';
import { Html, LoadingProgress } from '@/components/ui';
import { useResource } from '@/features/use-resource';
import { attemptUrl } from '@/lib/urls';
import { percent } from '@/lib/math';
import type { AttemptReport } from '@/types/platform';

export function Results() {
  const params = useSearchParams(),
    id = params.get('attempt'),
    { data: report, error, loading } = useResource<AttemptReport>(id ? `/api/results/${id}` : null),
    [missedOnly, setMissedOnly] = useState(false),
    [groupBy, setGroupBy] = useState<'topicId' | 'areaId'>('areaId');
  if (!id)
    return (
      <div className="quiz-card">
        <h2>Select an attempt to review</h2>
        <Link className="primary-button" href="/review">
          Open Review
        </Link>
      </div>
    );
  if (error)
    return (
      <div className="result-wrong" role="alert">
        {error}
        <Link className="back-button" href="/review">
          Back to Review
        </Link>
      </div>
    );
  if (loading || !report) return <LoadingProgress />;
  const a = report.attempt,
    visible = report.results.filter((r) => !missedOnly || !r.correct),
    groups = [...new Set(report.results.map((r) => r[groupBy]))];
  return (
    <div className="exam-results-page">
      <section className="score-card">
        <div className="score-circle">{report.score}%</div>
        <h2>{a.title}</h2>
        <p>
          {report.results.filter((r) => r.correct).length} of {report.results.length} responses
          correct
        </p>
        <p className="small-label">
          {report.weighted ? 'Weighted mock performance' : 'Practice performance'} ·{' '}
          {a.blueprintYear} edition · Not an official scaled CPA score
        </p>
        {a.imported && (
          <p className="storage-notice">
            Imported study history is displayed here and excluded from readiness and Discipline
            evidence.
          </p>
        )}
        <div className="metrics-grid">
          <div>
            <strong>{report.mcqScore === null ? '—' : `${report.mcqScore}%`}</strong>
            <span>MCQ accuracy</span>
          </div>
          <div>
            <strong>{report.tbsScore === null ? '—' : `${report.tbsScore}%`}</strong>
            <span>Average TBS accuracy</span>
          </div>
          <div>
            <strong>{Math.round(report.timeSeconds / 60)} min</strong>
            <span>Estimated active time</span>
          </div>
        </div>
        {report.passPercent !== null && (
          <p>
            {report.score >= report.passPercent ? 'Practice target achieved' : 'Keep practicing'} ·
            Target {report.passPercent}%
          </p>
        )}
        <div className="results-actions">
          <Link className="primary-button" href={`/practice?section=${a.section}`}>
            Practice again
          </Link>
          <Link className="back-button" href="/review">
            All attempts
          </Link>
        </div>
      </section>
      <section className="results-card">
        <div className="filter-row">
          <h2>Performance breakdown</h2>
          <label>
            Group by
            <select value={groupBy} onChange={(e) => setGroupBy(e.target.value as typeof groupBy)}>
              <option value="areaId">Blueprint area</option>
              <option value="topicId">Topic</option>
            </select>
          </label>
        </div>
        {groups.map((group) => {
          const items = report.results.filter((r) => r[groupBy] === group);
          return (
            <div className="topic-result-row" key={group}>
              <span>{groupBy === 'topicId' ? items[0].group : group}</span>
              <strong>
                {percent(items)}% · {items.filter((r) => r.correct).length}/{items.length}
              </strong>
            </div>
          );
        })}
        {report.testlets.length > 1 && (
          <details>
            <summary>Testlet breakdown</summary>
            {report.testlets.map((t) => (
              <p key={t.id}>
                Testlet {t.id}: {t.correct}/{t.total} responses correct
              </p>
            ))}
          </details>
        )}
      </section>
      <div className="filter-row">
        <h2>Answer review</h2>
        <label className="check-label">
          <input
            type="checkbox"
            checked={missedOnly}
            onChange={(e) => setMissedOnly(e.target.checked)}
          />{' '}
          Missed responses only
        </label>
      </div>
      {!visible.length && <p className="key-points">No missed responses.</p>}
      {visible.map((r, i) => (
        <section key={`${r.id}-${i}`} className="results-card">
          <span className={r.correct ? 'result-tag-correct' : 'result-tag-wrong'}>
            {r.correct ? '✓ Correct' : r.answered ? 'Review' : 'Unanswered'}
          </span>
          <p className="small-label">
            {r.group} · {r.difficulty} ·{' '}
            {r.firstExposure ? 'First exposure' : 'Previously seen or unviewed'}
          </p>
          <h3>{r.label}</h3>
          <p>
            <strong>Your response:</strong> {r.answer}
          </p>
          <p>
            <strong>Correct response:</strong> {r.expected}
          </p>
          {r.explanation && <div className="key-points">{r.explanation}</div>}
          {r.choiceExplanations && (
            <details>
              <summary>Option explanations</summary>
              <ul>
                {Object.values(r.choiceExplanations).map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </details>
          )}
          <div className="lesson-actions">
            {r.lessonId && catalog.lessons.find((l) => l.id === r.lessonId) && (
              <Link
                className="back-button"
                href={catalog.lessons.find((l) => l.id === r.lessonId)!.url}
              >
                Review lesson →
              </Link>
            )}
            <Link
              className="back-button"
              href={`/practice?section=${r.section}&topic=${encodeURIComponent(r.topicId)}`}
            >
              Practice this topic
            </Link>
          </div>
        </section>
      ))}
      {report.solutions.map((s, i) => (
        <section className="results-card" key={i}>
          <h2>{s.title} — Worked solution</h2>
          <Html html={s.html} />
        </section>
      ))}
    </div>
  );
}
export function AttemptHistory() {
  const { progress } = useProgress(),
    [section, setSection] = useState('all');
  if (!progress) return <LoadingProgress />;
  const attempts = Object.values(progress.attempts)
    .filter((a) => section === 'all' || a.section === section)
    .reverse();
  return (
    <>
      <div className="filter-row">
        <h2>Attempt history</h2>
        <label>
          Section
          <select value={section} onChange={(e) => setSection(e.target.value)}>
            <option value="all">All courses</option>
            {catalog.courses.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="module-list">
        {attempts.length ? (
          attempts.map((a) => (
            <Link
              className="module-card"
              key={a.id}
              href={a.status === 'submitted' ? `/results?attempt=${a.id}` : attemptUrl(a.url, a.id)}
            >
              <div className="module-content">
                <h2>{a.title}</h2>
                <p>
                  {a.status === 'submitted'
                    ? `${a.score}% · ${a.imported ? 'Imported history' : 'Results saved to account'}`
                    : `In progress · ${a.answered}/${a.total} items answered`}
                </p>
                <p className="small-label">
                  {new Date(a.startedAt).toLocaleDateString()} · {a.kind}
                </p>
              </div>
              <span className="module-arrow">→</span>
            </Link>
          ))
        ) : (
          <div className="quiz-card">
            <h3>Your study history starts here</h3>
            <p>Create a practice session or open a course assessment.</p>
            <Link className="primary-button" href="/practice">
              Start practicing
            </Link>
          </div>
        )}
      </div>
      {Object.keys(progress.bestScores).length > 0 && (
        <details className="results-card">
          <summary>Best saved activity scores</summary>
          {Object.entries(progress.bestScores).map(([id, score]) => (
            <div className="performance-row" key={id}>
              <span>
                {catalog.assessments.find((a) => a.id === id)?.title ||
                  catalog.simulations.find((s) => s.id === id)?.title ||
                  id}
              </span>
              <strong>{score}%</strong>
            </div>
          ))}
        </details>
      )}
    </>
  );
}
