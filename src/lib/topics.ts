interface TopicEntry {
  id: string;
  section: string;
  areaId: string;
  groupId: string;
  lessonId: string;
  title: string;
  taskIds: string[];
  objectives: string[];
  supplementary: boolean;
}

/** A concept can belong to several lessons; its identity must remain stable. */
export function canonicalTopics<T extends TopicEntry>(entries: T[]) {
  const grouped = new Map<string, T & { lessonIds: string[]; groupIds: string[] }>();
  for (const entry of entries) {
    const previous = grouped.get(entry.id);
    if (!previous) {
      grouped.set(entry.id, { ...entry, lessonIds: [entry.lessonId], groupIds: [entry.groupId] });
      continue;
    }
    if (
      previous.section !== entry.section ||
      previous.areaId !== entry.areaId ||
      previous.title.trim().toLowerCase() !== entry.title.trim().toLowerCase()
    )
      throw new Error(`Conflicting topic mapping: ${entry.id}`);
    previous.lessonIds = [...new Set([...previous.lessonIds, entry.lessonId])];
    previous.groupIds = [...new Set([...previous.groupIds, entry.groupId])];
    previous.taskIds = [...new Set([...previous.taskIds, ...entry.taskIds])];
    previous.objectives = [...new Set([...previous.objectives, ...entry.objectives])];
    previous.supplementary = previous.supplementary && entry.supplementary;
  }
  return [...grouped.values()];
}
