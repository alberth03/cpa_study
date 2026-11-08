import { ActivityPlayer } from './activity-player';
export function AssessmentPlayer({
  activityId,
  title,
  url,
}: {
  activityId: string;
  title: string;
  url: string;
}) {
  return (
    <ActivityPlayer
      activityId={activityId}
      title={title}
      url={url}
      startRequest={{ source: 'activity', activityId }}
    />
  );
}
