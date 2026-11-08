import { ActivityPlayer } from '@/features/assessments/activity-player';
export function JournalPlayer() {
  return (
    <ActivityPlayer
      activityId="far-journal"
      title="FAR Journal Entry Practice"
      url="/learn/far/journal"
      startRequest={{ source: 'activity', activityId: 'far-journal' }}
    />
  );
}
