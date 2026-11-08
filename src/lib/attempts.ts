import type { Attempt } from '@/types/study';

export function newAttempt(
  activityId: string,
  title: string,
  url: string,
  kind: Attempt['kind'],
  extra: Partial<Attempt> = {},
): Attempt {
  return {
    id: crypto.randomUUID(),
    activityId,
    title,
    url,
    kind,
    feedback: 'immediate',
    status: 'active',
    startedAt: new Date().toISOString(),
    index: 0,
    review: false,
    answers: {},
    locked: {},
    flags: [],
    results: [],
    passPercent: null,
    ...extra,
  };
}
