'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useProgress } from '@/components/progress-provider';
import { useResource } from '@/features/use-resource';
import { examSections } from '@/lib/blueprints';
import { api, errorMessage } from '@/lib/api';
import type { AnalyticsResponse } from '@/types/api';

export function DisciplineExplorer() {
  const { progress, user, refresh } = useProgress(),
    { data, error } = useResource<AnalyticsResponse>(progress ? '/api/analytics' : null),
    [message, setMessage] = useState(''),
    [busy, setBusy] = useState(false);
  const ranked =
    data?.recommendations.filter((r) => r.score !== null).sort((a, b) => b.score! - a.score!) || [];
  return (
    <>
      {error && <p role="alert">{error}</p>}
      <section className="course-intro-card">
        <h2>
          {ranked.length
            ? `${ranked[0].section.toUpperCase()} currently has your strongest evidence alignment`
            : 'Build evidence for a personalized recommendation'}
        </h2>
        <p>
          {ranked.length
            ? 'This is a study-fit indicator based on relevant topics, simulations, consistency, improvement, and optional interests.'
            : 'Complete Core practice and try the short Discipline diagnostics. Missing evidence is shown as uncertainty, not a low score.'}
        </p>
        {ranked.length > 1 && ranked[0].score! - ranked[1].score! < 5 && (
          <p>
            The leading indicators are close. Compare the underlying evidence and your preferences.
          </p>
        )}
      </section>
      <div className="discipline-grid">
        {examSections
          .filter((s) => s.type === 'discipline')
          .map((s) => {
            const r = data?.recommendations.find((r) => r.section === s.id),
              selected = progress?.preferences.selectedDiscipline === s.id;
            return (
              <section
                className={`learning-card ${selected ? 'selected-discipline' : ''}`}
                key={s.id}
              >
                <span className="exam-badge">{s.id.toUpperCase()}</span>
                <h2>{s.title}</h2>
                <p>{s.description}</p>
                <div className="suitability">
                  {r?.score === null || r?.score === undefined ? '—' : `${r.score}/100`}
                </div>
                <p>
                  {r?.confidence || 'Gathering evidence'} ·{' '}
                  {r?.stage === 'refined'
                    ? 'Includes direct diagnostic evidence'
                    : 'Core-topic evidence'}
                </p>
                {r && (
                  <>
                    <p>
                      {r.relevantItems} relevant Core items · Diagnostic{' '}
                      {r.diagnosticAccuracy === null ? 'not completed' : `${r.diagnosticAccuracy}%`}
                    </p>
                    {r.strengths.length > 0 && (
                      <div className="key-points">
                        <strong>Supporting strengths</strong>
                        <ul>
                          {r.strengths.map((t) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {r.weaknesses.length > 0 && (
                      <div className="key-points">
                        <strong>Areas to strengthen</strong>
                        <ul>
                          {r.weaknesses.map((t) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <details>
                      <summary>Evidence and uncertainty</summary>
                      <ul>
                        {r.components.map((c) => (
                          <li key={c.name}>
                            {c.name} ({c.weight}% model weight):{' '}
                            {c.value === null ? 'insufficient evidence' : `${c.value}%`}
                          </li>
                        ))}
                      </ul>
                      <ul>
                        {r.uncertainty.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>
                    </details>
                  </>
                )}
                <div className="lesson-actions">
                  <Link className="back-button" href={`/learn/${s.id}`}>
                    Explore course
                  </Link>
                  <Link
                    className="back-button"
                    href={`/learn/disciplines/diagnostic?section=${s.id}`}
                  >
                    Take diagnostic
                  </Link>
                  <button
                    className="primary-button"
                    disabled={!progress || busy || selected}
                    onClick={async () => {
                      if (!progress || !user) return;
                      setBusy(true);
                      try {
                        await api('/api/account', {
                          method: 'PATCH',
                          generation: progress.generation,
                          body: {
                            name: user.name,
                            preferences: { ...progress.preferences, selectedDiscipline: s.id },
                          },
                        });
                        await refresh();
                        setMessage(
                          `${s.id.toUpperCase()} selected. You can change this at any time.`,
                        );
                      } catch (e) {
                        setMessage(errorMessage(e));
                      } finally {
                        setBusy(false);
                      }
                    }}
                  >
                    {selected ? '✓ Selected' : `Choose ${s.id.toUpperCase()}`}
                  </button>
                </div>
              </section>
            );
          })}
      </div>
      {message && (
        <p role="status" className="key-points">
          {message}
        </p>
      )}
      <p className="small-label">
        The model’s 35/25/15/15/10 weights are transparent product assumptions, not AICPA rules.
        Missing components are normalized; timing is context, not an ability judgment.{' '}
        <Link href="/account">Set optional career interests</Link>.
      </p>
    </>
  );
}
