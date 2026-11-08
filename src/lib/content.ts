import 'server-only';
// Compatibility entry point: the versioned repository is the single source of truth.
export { getLesson, getAssessment, getSimulation, getJournal } from '@/server/content';
