import type { PracticeConfig } from '@/types/platform';
import { getCatalog } from './content';
import { all } from './db';
import { ApiError } from './http';

export function resolvePracticeScope(userId: string, config: PracticeConfig): PracticeConfig {
  if (config.focus === 'module' && !config.moduleId)
    throw new ApiError(400, 'Choose a module for module practice.');
  if (config.focus === 'topic' && !config.topicId)
    throw new ApiError(400, 'Choose a topic for topic practice.');
  if (config.focus === 'cumulative' && config.moduleId)
    throw new ApiError(400, 'Cumulative practice spans modules. Clear the module filter.');
  if (config.focus !== 'learning' || config.topicId) return config;
  const lessons = getCatalog().lessons.filter(
    (l) =>
      l.courseId === config.section &&
      (!config.moduleId || l.moduleId === config.moduleId) &&
      (!config.areaId || l.metadata.areaId === config.areaId),
  );
  const history = all<{ lesson_id: string }>(
    'SELECT lesson_id FROM lesson_progress WHERE user_id=? ORDER BY read_at DESC',
    userId,
  );
  const recent = history.map((h) => lessons.find((l) => l.id === h.lesson_id)).find(Boolean);
  if (!recent)
    throw new ApiError(
      422,
      'Open a lesson in this scope first, or choose a topic for learning reinforcement.',
    );
  return { ...config, topicId: recent.metadata.topicId };
}
