'use client';
import { useProgress } from '@/components/progress-provider';
import { LoadingProgress } from '@/components/ui';

export function CourseProgress({ lessonIds }: { lessonIds: string[] }) {
  const { progress } = useProgress();
  if (!progress) return <LoadingProgress />;
  const completed = lessonIds.filter((id) => progress.completedLessons[id]).length;
  return (
    <div className="course-progress-card">
      <h3>Course progress</h3>
      <p>
        {completed} of {lessonIds.length} lessons completed
      </p>
      <p className="small-label">
        {lessonIds.filter((id) => progress.readLessons[id]).length} opened ·{' '}
        {lessonIds.filter((id) => progress.masteredLessons.includes(id)).length} knowledge checks
        mastered
      </p>
      <progress aria-label="Lessons completed" value={completed} max={lessonIds.length || 1} />
    </div>
  );
}
export function LessonStatus({ id }: { id: string }) {
  const { progress } = useProgress();
  return (
    <span className="lesson-status">
      {progress?.completedLessons[id]
        ? '✓ Completed'
        : progress?.readLessons[id]
          ? 'Opened · Continue →'
          : 'Start →'}
      {progress?.masteredLessons.includes(id) ? ' · Knowledge check mastered' : ''}
    </span>
  );
}

export function ActivityStatus({ id }: { id: string }) {
  const { progress } = useProgress();
  const best = progress?.bestScores[id];
  if (best === undefined && !progress?.mastered.includes(id)) return null;
  return (
    <span className="lesson-status">
      {progress?.mastered.includes(id) ? '✓ Practice target achieved' : 'Previous practice'}
      {best !== undefined ? ` · Best ${best}%` : ''}
    </span>
  );
}
