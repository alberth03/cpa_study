import type { analytics } from '@/server/analytics';
import type { coverageAudit, blueprintQueue } from '@/server/admin';
export type AnalyticsResponse = ReturnType<typeof analytics>;
export type CoverageAudit = ReturnType<typeof coverageAudit>;
export type BlueprintQueue = ReturnType<typeof blueprintQueue>;
