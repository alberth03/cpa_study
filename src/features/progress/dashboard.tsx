'use client';
import Link from 'next/link';
import catalog from '@/content/catalog.json';
import { useProgress } from '@/components/progress-provider';
import { LoadingProgress } from '@/components/ui';
import { useResource } from '@/features/use-resource';
import { examSections } from '@/lib/blueprints';
import { attemptUrl } from '@/lib/urls';
import type { AnalyticsResponse } from '@/types/api';

export function Dashboard() {
  const { progress } = useProgress(),
    resource = useResource<AnalyticsResponse>(progress ? '/api/analytics' : null);
  if (!progress) return <LoadingProgress />;
  const data = resource.data,
    attempts = Object.values(progress.attempts),
    completed = Object.keys(progress.completedLessons).length,
    last = catalog.lessons.find((l) => l.id === progress.lastLesson),
    active = attempts.filter((a) => a.status === 'active').at(-1);
  const ranked =
      data?.recommendations.filter((r) => r.score !== null).sort((a, b) => b.score! - a.score!) ||
      [],
    discipline = progress.preferences.selectedDiscipline || ranked[0]?.section;
  const sections = [
    ...examSections.filter((s) => s.type === 'core'),
    ...(discipline ? examSections.filter((s) => s.id === discipline) : []),
  ];
  const today = new Intl.DateTimeFormat('en-CA', {
    timeZone: progress.preferences.timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date());
  const days = new Set(Object.keys(progress.activityDays));
  let cursor = new Date(`${today}T12:00:00Z`),
    streak = 0;
  if (!days.has(today)) cursor = new Date(cursor.getTime() - 86400000);
  while (days.has(cursor.toISOString().slice(0, 10))) {
    streak++;
    cursor = new Date(cursor.getTime() - 86400000);
  }
  const weak =
    data?.topics
      .filter((t) => t.weak)
      .sort((a, b) => a.mastery - b.mastery)
      .slice(0, 3) || [];
  const latestMock = attempts.filter((a) => a.kind === 'mock' && a.status === 'submitted').at(-1);
  return (
    <>
      <div className="dashboard-summary">
        <span className="streak">🔥 {streak} practice-day streak</span>
        <span>
          {completed} of {catalog.lessons.length} lessons completed ·{' '}
          {progress.masteredLessons.length} knowledge checks mastered
        </span>
      </div>
      <section className="progress-section">
        <h2>Your four-section CPA pathway</h2>
        <div className="exam-grid">
          {sections.map((s) => {
            const lessons = catalog.lessons.filter((l) => l.courseId === s.id),
              done = lessons.filter((l) => progress.completedLessons[l.id]).length,
              metrics = data?.sections.find((m) => m.id === s.id);
            const status = metrics?.ready
              ? 'Study targets met'
              : done >= lessons.length * 0.8 && done > 0
                ? 'Ready for assessment'
                : done || metrics?.responses
                  ? 'Studying'
                  : 'Not started';
            return (
              <Link href={`/learn/${s.id}`} className="exam-card" key={s.id}>
                <h3>{s.id.toUpperCase()}</h3>
                <p>{s.title}</p>
                <progress
                  value={done}
                  max={lessons.length || 1}
                  aria-label={`${s.id.toUpperCase()} lesson progress`}
                />
                <span>
                  {done}/{lessons.length} lessons · {status}
                </span>
                <span className="primary-button">Continue →</span>
              </Link>
            );
          })}
          {!discipline && (
            <Link className="exam-card" href="/learn/disciplines">
              <h3>Discipline</h3>
              <p>BAR · ISC · TCP</p>
              <span className="primary-button">Compare your options →</span>
            </Link>
          )}
        </div>
      </section>
      <section className="bottom-grid">
        <div className="dashboard-card">
          <h2>Continue learning</h2>
          <h3>{active?.title || last?.title || 'Accounting Fundamentals'}</h3>
          <p>
            {active
              ? 'Your account-saved attempt is ready to resume.'
              : 'Build your understanding, then put it into practice.'}
          </p>
          <Link
            className="primary-button"
            href={active ? attemptUrl(active.url, active.id) : last?.url || '/learn/fundamentals'}
          >
            {active ? 'Resume attempt' : 'Continue learning'} →
          </Link>
        </div>
        <div className="dashboard-card">
          <h2>Today’s goal</h2>
          <div className="goal-number">
            {progress.activityDays[today] || 0} / {progress.preferences.dailyGoal}
          </div>
          <p>Responses graded</p>
          <Link className="text-link" href="/account">
            Adjust study preferences
          </Link>
        </div>
        <div className="dashboard-card">
          <h2>Performance</h2>
          <div className="performance-row">
            <span>Responses answered</span>
            <strong>{data?.overview.responses ?? '—'}</strong>
          </div>
          <div className="performance-row">
            <span>Accuracy</span>
            <strong>
              {data?.overview.accuracy === null || !data ? '—' : `${data.overview.accuracy}%`}
            </strong>
          </div>
          <div className="performance-row">
            <span>TBSs practiced</span>
            <strong>{data?.overview.simulations ?? '—'}</strong>
          </div>
        </div>
      </section>
      <div className="learning-grid section-spacer">
        <section className="dashboard-card">
          <h2>Your next study steps</h2>
          {weak.length ? (
            weak.map((t) => (
              <div className="key-points" key={t.id}>
                <h3>{t.title}</h3>
                <p>{t.recommendation}</p>
                <Link
                  className="back-button"
                  href={`/practice?section=${t.section}&topic=${encodeURIComponent(t.id)}`}
                >
                  Targeted practice
                </Link>
              </div>
            ))
          ) : (
            <p>
              Finish an unread lesson, complete its knowledge check, and try a fresh practice set.
              Recommendations become more specific as evidence grows.
            </p>
          )}
          <Link className="primary-button" href="/review">
            Open Review →
          </Link>
        </section>
        <section className="dashboard-card">
          <h2>Recent mock performance</h2>
          {latestMock ? (
            <>
              <h3>{latestMock.title}</h3>
              <div className="goal-number">{latestMock.score}%</div>
              <Link className="back-button" href={`/results?attempt=${latestMock.id}`}>
                Review mock results
              </Link>
            </>
          ) : (
            <p>
              Take a full-length mock when you are ready to practice timing and testlet transitions.
            </p>
          )}
          <Link className="primary-button" href="/mock-exams">
            Choose a mock exam →
          </Link>
        </section>
      </div>
      <section className="results-card section-spacer">
        <h2>Readiness evidence</h2>
        <p className="small-label">
          Internal study indicators, not official score predictions. Coverage, simulation
          experience, consistent success, and recent full mocks all matter.
        </p>
        {data?.sections
          .filter((s) => sections.some((c) => c.id === s.id))
          .map((s) => (
            <details key={s.id} className="readiness-row">
              <summary>
                {s.id.toUpperCase()} ·{' '}
                {s.readiness === null ? 'More evidence needed' : `${s.readiness}/100 indicator`} ·{' '}
                {s.coverage}% topic coverage
              </summary>
              <p>
                {s.uniqueItems} distinct items · {s.simulations} simulations · Recent full mock{' '}
                {s.recentMock === null ? 'not available' : `${s.recentMock}%`}
              </p>
              <ul>
                {s.gaps.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </details>
          ))}
      </section>
    </>
  );
}
