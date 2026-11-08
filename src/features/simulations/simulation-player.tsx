import { ActivityPlayer } from '@/features/assessments/activity-player';
export function SimulationPlayer({ id, title, url }: { id: string; title: string; url: string }) {
  return (
    <ActivityPlayer
      activityId={id}
      title={title}
      url={url}
      startRequest={{ source: 'activity', activityId: id }}
    />
  );
}
