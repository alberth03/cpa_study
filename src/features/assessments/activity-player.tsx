'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useServerAttempt } from './use-server-attempt';
import { ItemForm } from './item-form';
import { Workspace } from './workspace';
import { LoadingProgress } from '@/components/ui';
import { Dialog } from '@/components/dialog';
import type { StartAttempt } from '@/types/platform';

const displayTime = (ms: number) => {
  const seconds = Math.max(0, Math.ceil(ms / 1000));
  return `${Math.floor(seconds / 3600)
    .toString()
    .padStart(2, '0')}:${Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;
};
export function ActivityPlayer({
  activityId,
  title,
  url,
  startRequest,
  compact = false,
}: {
  activityId?: string;
  title: string;
  url: string;
  startRequest?: StartAttempt;
  compact?: boolean;
}) {
  const study = useServerAttempt(activityId, url, compact),
    a = study.attempt;
  const [review, setReview] = useState(false),
    [confirmation, setConfirmation] = useState<'submit' | 'advance' | null>(null),
    [takeBreak, setTakeBreak] = useState(false),
    [confirmIncomplete, setConfirmIncomplete] = useState(false),
    [now, setNow] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const effectiveNow = now ? now + study.clockOffset : a?.serverNow || 0;
  const paused =
    a?.breakState?.kind === 'scheduled'
      ? Math.max(0, (a.breakState.endsAt || 0) - effectiveNow)
      : 0;
  const remaining =
    a?.deadline === null || !a ? null : Math.max(0, a.deadline - effectiveNow - paused);
  useEffect(() => {
    if (a?.status === 'active' && remaining === 0 && !paused && !study.pending)
      void study.act({ action: 'heartbeat' }).catch(() => undefined);
  }, [remaining, paused, a?.status, study]);
  if (study.loading) return <LoadingProgress />;
  if (!a)
    return (
      <section className="quiz-card">
        <h2>{title}</h2>
        <p>
          Responses are saved to your account. Correct answers are released according to the
          activity’s tutor or exam mode.
        </p>
        {study.error && (
          <p role="alert" className="result-wrong">
            {study.error}
          </p>
        )}
        {startRequest ? (
          <button
            disabled={study.pending}
            className="primary-button"
            onClick={() => void study.start(startRequest)}
          >
            Start {compact ? 'knowledge check' : 'assessment'}
          </button>
        ) : (
          <Link className="primary-button" href="/practice">
            Create a practice session
          </Link>
        )}
      </section>
    );
  if (a.status === 'submitted' && !compact)
    return (
      <section className="quiz-card">
        <h2>Assessment submitted</h2>
        <Link className="primary-button" href={`/results?attempt=${a.id}`}>
          View results
        </Link>
        {startRequest && (
          <button
            disabled={study.pending}
            className="back-button"
            onClick={() => void study.start(startRequest)}
          >
            Start a new attempt
          </button>
        )}
      </section>
    );
  const accessible = a.navigation.filter((n) => n.accessible),
    first = accessible[0]?.number - 1,
    last = accessible.at(-1)!.number - 1;
  const run = async (action: Parameters<typeof study.act>[0]) => {
    try {
      await study.act(action);
      return true;
    } catch {
      return false;
    }
  };
  return (
    <section className={`assessment-player${compact ? ' compact' : ''}`}>
      <div className="exam-status">
        <span>
          {a.kind === 'mock' ? `Testlet ${a.currentTestlet + 1} of ${a.testlets.length} · ` : ''}
          Item {a.currentIndex + 1} of {a.total}
        </span>
        <span role="status">{study.pending || study.dirty ? 'Saving…' : 'Saved to account'}</span>
        {remaining !== null && (
          <strong
            className={remaining < 15 * 60000 ? 'timer low' : 'timer'}
            aria-label="Time remaining"
          >
            {displayTime(remaining)}
          </strong>
        )}
      </div>
      {a.kind === 'mock' && (
        <ol className="testlet-strip">
          {a.testlets.map((t, i) => (
            <li key={t.id} className={i === a.currentTestlet ? 'current' : ''}>
              {t.submitted ? '✓ ' : ''}
              {t.id}: {t.count} {t.kind === 'mcq' ? 'MCQs' : 'TBSs'}
            </li>
          ))}
        </ol>
      )}
      {study.error && (
        <div className="result-wrong" role="alert">
          {study.error}
          <button className="back-button" onClick={() => void study.load()}>
            Load saved version
          </button>
        </div>
      )}
      {study.conflictDraft && (
        <div className="storage-notice">
          This browser has an unsent draft based on an older attempt version.{' '}
          <button className="back-button" onClick={() => void study.restoreDraft()}>
            Use my local draft for this item
          </button>
        </div>
      )}
      {a.breakState ? (
        <div className="quiz-card">
          <h2>{a.breakState.kind === 'scheduled' ? 'Scheduled break' : 'Optional break'}</h2>
          <p>
            {a.breakState.kind === 'scheduled'
              ? `The exam clock is paused for up to 15 minutes. Break remaining: ${displayTime(paused)}.`
              : 'The exam clock continues running during this break.'}
          </p>
          <button
            disabled={study.pending}
            className="primary-button"
            onClick={() => void run({ action: 'resume' })}
          >
            Resume exam
          </button>
        </div>
      ) : (
        <>
          {review ? (
            <section className="quiz-card">
              <h2>Review {a.kind === 'mock' ? 'current testlet' : 'assessment'}</h2>
              <p>
                {accessible.filter((n) => n.answered).length} of {accessible.length} items answered
                in this {a.kind === 'mock' ? 'testlet' : 'assessment'}.
              </p>
              <div className="question-grid">
                {accessible.map((n) => (
                  <button
                    key={n.id}
                    className={`back-button${n.answered ? '' : ' unanswered'}`}
                    disabled={study.pending}
                    onClick={async () => {
                      await run({ action: 'navigate', index: n.number - 1 });
                      setReview(false);
                    }}
                  >
                    {n.number}. {n.answered ? 'Answered' : 'Incomplete'}
                    {n.flagged ? ' ★' : ''}
                  </button>
                ))}
              </div>
              <button className="back-button" onClick={() => setReview(false)}>
                Return to item
              </button>
            </section>
          ) : (
            <section className="quiz-card">
              <ItemForm
                key={a.current?.id}
                attempt={a}
                onChange={study.change}
                busy={study.pending}
              />
              {a.feedback.length > 0 && (
                <div className="feedback" role="status">
                  {a.feedback.map((r) => (
                    <div key={r.id} className={r.correct ? 'result-correct' : 'result-wrong'}>
                      <strong>{r.correct ? '✓ Correct' : 'Review this response'}</strong>
                      <p>{r.label}</p>
                      <p>Correct answer: {r.expected}</p>
                      <p>{r.explanation}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}
          {!compact && (
            <Workspace
              key={a.id}
              initial={a.scratchpad}
              disabled={study.pending}
              onSave={(text) => study.act({ action: 'scratchpad', text })}
            />
          )}
          {a.status === 'active' && (
            <div className="lesson-actions">
              <button
                className="back-button"
                aria-pressed={a.flags.includes(a.current?.id||'')}
                disabled={study.pending}
                onClick={() => {if(a.current)void run({ action: 'flag', itemId: a.current.id });}}
              >
                {a.flags.includes(a.current?.id||'') ? '★ Flagged' : '☆ Flag for review'}
              </button>
              {a.currentIndex > first && (
                <button
                  className="back-button"
                  disabled={study.pending}
                  onClick={() => void run({ action: 'navigate', index: a.currentIndex - 1 })}
                >
                  Previous
                </button>
              )}
              {a.mode === 'tutor' && !a.checked && (
                <button
                  className="primary-button"
                  disabled={study.pending}
                  onClick={() => void run({ action: 'check' })}
                >
                  Check answer
                </button>
              )}
              {a.currentIndex < last && (
                <button
                  className="primary-button"
                  disabled={study.pending}
                  onClick={() => void run({ action: 'navigate', index: a.currentIndex + 1 })}
                >
                  Next item →
                </button>
              )}
              <button
                className="back-button"
                disabled={study.pending}
                onClick={() => setReview((v) => !v)}
              >
                Review {a.kind === 'mock' ? 'testlet' : 'assessment'}
              </button>
              <button
                className="primary-button"
                disabled={study.pending}
                onClick={() => {
                  setConfirmation(
                    a.kind === 'mock' && a.currentTestlet < a.testlets.length - 1
                      ? 'advance'
                      : 'submit',
                  );
                  setConfirmIncomplete(false);
                  setTakeBreak(false);
                }}
              >
                {a.kind === 'mock' && a.currentTestlet < a.testlets.length - 1
                  ? 'Submit testlet'
                  : 'Finish assessment'}
              </button>
            </div>
          )}
          {compact && a.status === 'submitted' && startRequest && (
            <button className="back-button" onClick={() => void study.start(startRequest)}>
              Try another attempt
            </button>
          )}
        </>
      )}
      {confirmation && (
        <Dialog
          title={confirmation === 'advance' ? 'Submit this testlet?' : 'Submit this assessment?'}
          onClose={() => setConfirmation(null)}
        >
          <p>
            {confirmation === 'advance'
              ? 'You cannot return to a submitted testlet. Review your responses and flags before continuing.'
              : 'Your responses will be graded and the attempt will be locked.'}
          </p>
          {study.error && (
            <p role="alert" className="result-wrong">
              {study.error}
            </p>
          )}
          <p>
            {accessible.filter((n) => !n.answered).length} incomplete items in the current{' '}
            {a.kind === 'mock' ? 'testlet' : 'assessment'}.
          </p>
          {(confirmIncomplete || accessible.some((n) => !n.answered)) && (
            <label className="check-label">
              <input
                type="checkbox"
                checked={confirmIncomplete}
                onChange={(e) => setConfirmIncomplete(e.target.checked)}
              />{' '}
              Count incomplete responses as incorrect
            </label>
          )}
          {confirmation === 'advance' && (
            <label className="check-label">
              <input
                type="checkbox"
                checked={takeBreak}
                onChange={(e) => setTakeBreak(e.target.checked)}
              />
              {a.currentTestlet === 2
                ? 'Take the 15-minute scheduled break (clock pauses)'
                : 'Take an optional break (clock keeps running)'}
            </label>
          )}
          <div className="lesson-actions">
            <button className="back-button" onClick={() => setConfirmation(null)}>
              Keep reviewing
            </button>
            <button
              className="primary-button"
              disabled={
                study.pending || (accessible.some((n) => !n.answered) && !confirmIncomplete)
              }
              onClick={async () => {
                const succeeded = await run(
                  confirmation === 'advance'
                    ? { action: 'advance', confirmIncomplete, takeBreak }
                    : { action: 'submit', confirmIncomplete },
                );
                if (succeeded) {
                  setConfirmation(null);
                  setReview(false);
                }
              }}
            >
              Confirm submission
            </button>
          </div>
        </Dialog>
      )}
    </section>
  );
}
