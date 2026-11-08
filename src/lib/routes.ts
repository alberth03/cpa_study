import catalog from '@/content/catalog.json';
import { sectionById } from './blueprints';
import type { Course, LessonMeta } from '@/types/study';
export type StudyRoute = {
  path: string;
  title: string;
  kind:
    | 'course'
    | 'module'
    | 'lesson'
    | 'assessment'
    | 'simulation'
    | 'simulation-list'
    | 'journal'
    | 'core'
    | 'final'
    | 'disciplines';
  courseId?: string;
  moduleId?: number;
  id?: string;
};
interface RouteCatalog {
  courses: Course[];
  lessons: LessonMeta[];
  simulations: { id: string; courseId: string; moduleId: number; number: number; title: string }[];
}
export function buildStudyRoutes(data: RouteCatalog): StudyRoute[] {
  const routes: StudyRoute[] = [
    { path: '/learn/cpa-core', title: 'CPA Core', kind: 'core' },
    { path: '/learn/disciplines', title: 'Choose your Discipline', kind: 'disciplines' },
  ];
  for (const course of data.courses) {
    const cpa = !!sectionById(course.id);
    routes.push({
      path: `/learn/${course.id}`,
      title: course.title,
      kind: 'course',
      courseId: course.id,
    });
    for (const m of course.modules) {
      const path = `/learn/${course.id}/modules/${m.id}`;
      routes.push({ path, title: m.title, kind: 'module', courseId: course.id, moduleId: m.id });
      routes.push({
        path: `${path}/${cpa ? 'practice' : 'quiz'}`,
        title: `${m.title} Practice`,
        kind: 'assessment',
        id: `${course.id}-m${m.id}-${cpa ? 'practice' : 'quiz'}`,
      });
      if (cpa) {
        routes.push({
          path: `${path}/simulations`,
          title: `${course.id.toUpperCase()} Module ${m.id} Simulations`,
          kind: 'simulation-list',
          courseId: course.id,
          moduleId: m.id,
        });
        for (const s of data.simulations.filter(
          (s) => s.courseId === course.id && s.moduleId === m.id,
        ))
          routes.push({
            path: `${path}/simulations/${s.number}`,
            title: s.title,
            kind: 'simulation',
            courseId: course.id,
            id: s.id,
          });
      }
    }
    if (cpa)
      routes.push(
        {
          path: `/learn/${course.id}/final`,
          title: `${course.id.toUpperCase()} Cumulative Assessments`,
          kind: 'final',
          courseId: course.id,
        },
        {
          path: `/learn/${course.id}/final/mcq`,
          title: `${course.id.toUpperCase()} Final MCQ Assessment`,
          kind: 'assessment',
          id: course.id === 'far' ? 'far-final-mcq' : `${course.id}-final`,
        },
        {
          path: `/learn/${course.id}/final/tbs`,
          title: `${course.id.toUpperCase()} Final TBS Assessment`,
          kind: 'simulation',
          id: `${course.id}-final-tbs`,
          courseId: course.id,
        },
      );
    else
      routes.push({
        path: `/learn/${course.id}/final`,
        title: `${course.title} Final Exam`,
        kind: 'assessment',
        id: `${course.id}-final`,
      });
  }
  routes.push(
    ...data.lessons.map((l) => ({
      path: l.url,
      title: l.title,
      kind: 'lesson' as const,
      id: l.id,
      courseId: l.courseId,
    })),
    { path: '/learn/far/journal', title: 'FAR Journal Entry Practice', kind: 'journal' },
  );
  return routes;
}
export const studyRoutes = buildStudyRoutes(catalog as RouteCatalog);
export function activityUrl(id: string) {
  return (
    studyRoutes.find((r) => r.id === id)?.path ||
    (id === 'far-journal' ? '/learn/far/journal' : '/learn')
  );
}
