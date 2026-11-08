import type { PrivateAttempt } from '@/types/platform';

export const MOCK_SECONDS = 4 * 60 * 60;
export const STANDARD_BREAK_MS = 15 * 60 * 1000;
export function startBreak(attempt: PrivateAttempt, scheduled: boolean, now: number) {
  if (scheduled) {
    if (attempt.kind !== 'mock' || attempt.currentTestlet !== 3 || attempt.breakUsed)
      throw new Error('The scheduled break is available only after testlet 3.');
    attempt.breakUsed = true;
    attempt.breakState = { kind: 'scheduled', startedAt: now, endsAt: now + STANDARD_BREAK_MS };
    if (attempt.deadline !== null) attempt.deadline += STANDARD_BREAK_MS;
  } else attempt.breakState = { kind: 'unscheduled', startedAt: now };
}
export function resumeClock(attempt: PrivateAttempt, now: number) {
  if (attempt.breakState?.kind === 'scheduled' && attempt.deadline !== null)
    attempt.deadline -= Math.max(0, (attempt.breakState.endsAt || now) - now);
  attempt.breakState = undefined;
  attempt.lastActiveAt = now;
}
export function remainingSeconds(attempt: PrivateAttempt, now: number) {
  if (attempt.deadline === null) return null;
  const pending =
    attempt.breakState?.kind === 'scheduled'
      ? Math.max(0, (attempt.breakState.endsAt || now) - now)
      : 0;
  return Math.max(0, Math.ceil((attempt.deadline - now - pending) / 1000));
}
export function clockExpired(attempt: PrivateAttempt, now: number) {
  return attempt.deadline !== null && now >= attempt.deadline;
}
