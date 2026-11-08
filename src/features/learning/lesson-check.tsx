'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useProgress } from '@/components/progress-provider';
import { ActivityPlayer } from '@/features/assessments/activity-player';
import { errorMessage } from '@/lib/api';

export function LessonCheck({
  lessonId,
  title,
  url,
  next,
  back,
}: {
  lessonId: string;
  title: string;
  url: string;
  next?: string;
  back: string;
}) {
  const { progress, markLesson } = useProgress();
  const marked = useRef(false);
  const [error, setError] = useState(''),
    [busy, setBusy] = useState(false);
  useEffect(() => {
    if (progress && !marked.current) {
      marked.current = true;
      void markLesson(lessonId).catch((e) => setError(errorMessage(e)));
    }
  }, [progress, markLesson, lessonId]);
  return (
    <>
      <ActivityPlayer
        compact
        activityId={`${lessonId}-check`}
        title="Knowledge check"
        url={url}
        startRequest={{ source: 'lesson', lessonId }}
      />
      <div className="lesson-actions">
        <Link className="back-button" href={back}>
          Back to lessons
        </Link>
        <button
          className="complete-button"
          disabled={!progress || busy || !!progress.completedLessons[lessonId]}
          onClick={async () => {
            setBusy(true);
            try {
              await markLesson(lessonId, true);
              setError('');
            } catch (e) {
              setError(errorMessage(e));
            } finally {
              setBusy(false);
            }
          }}
        >
          {progress?.completedLessons[lessonId]
            ? '✓ Lesson completed'
            : busy
              ? 'Saving…'
              : 'Complete lesson'}
        </button>
        {next && (
          <Link className="primary-button" href={next}>
            Next lesson →
          </Link>
        )}
      </div>
      {error && (
        <p role="alert" className="result-wrong">
          {error}
        </p>
      )}
      <p className="small-label">
        Reading or completing {title} is recorded separately from demonstrating mastery in its
        knowledge check.
      </p>
    </>
  );
}
