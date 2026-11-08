import Link from 'next/link';
import { PageHeader, CardLink, Html } from './ui';
import { ActivityStatus, CourseProgress, LessonStatus } from '@/features/progress/course-progress';
import { LessonCheck } from '@/features/learning/lesson-check';
import { AssessmentPlayer } from '@/features/assessments/assessment-player';
import { SimulationPlayer } from '@/features/simulations/simulation-player';
import { JournalPlayer } from '@/features/journal-entries/journal-player';
import { DisciplineExplorer } from '@/features/disciplines/discipline-explorer';
import { getCatalog, getLesson } from '@/server/content';
import { requirePageUser } from '@/server/auth';
import { examSections, sectionById } from '@/lib/blueprints';
import type { StudyRoute } from '@/lib/routes';

export function LearningPath() {
  const catalog = getCatalog();
  return (
    <>
      <PageHeader
        title="Learn"
        subtitle="A continuous path from accounting foundations to all six CPA sections."
      />
      <h2 className="section-title">Build your foundation</h2>
      <div className="learning-grid">
        {catalog.courses
          .filter((c) => ['fundamentals', 'intermediate'].includes(c.id))
          .map((c, i) => (
            <Link className="learning-card" key={c.id} href={`/learn/${c.id}`}>
              <span className="level-number">{i + 1}</span>
              <h2>{c.title}</h2>
              <p>{c.description}</p>
              <span className="primary-button">Start learning →</span>
            </Link>
          ))}
      </div>
      <h2 className="section-title section-spacer">CPA Core</h2>
      <div className="learning-grid">
        {examSections
          .filter((s) => s.type === 'core')
          .map((s) => (
            <CardLink
              key={s.id}
              href={`/learn/${s.id}`}
              title={`${s.id.toUpperCase()} · ${s.title}`}
            >
              <p>{s.description}</p>
            </CardLink>
          ))}
      </div>
      <h2 className="section-title section-spacer">Explore every Discipline</h2>
      <div className="learning-grid">
        {examSections
          .filter((s) => s.type === 'discipline')
          .map((s) => (
            <CardLink
              key={s.id}
              href={`/learn/${s.id}`}
              title={`${s.id.toUpperCase()} · ${s.title}`}
            >
              <p>{s.description}</p>
            </CardLink>
          ))}
      </div>
      <Link className="primary-button" href="/learn/disciplines">
        Compare Disciplines & see your recommendation →
      </Link>
    </>
  );
}
export async function StudyPage({ route }: { route: StudyRoute }) {
  await requirePageUser(route.path);
  const catalog = getCatalog();
  let back = route.path.slice(0, route.path.lastIndexOf('/')) || '/learn';
  if (route.kind === 'lesson') {
    const l = getLesson(route.id!);
    back = l.moduleId ? `/learn/${l.courseId}/modules/${l.moduleId}` : `/learn/${l.courseId}`;
    const siblings = catalog.lessons
        .filter((s) => s.courseId === l.courseId && s.moduleId === l.moduleId)
        .sort((a, b) => a.number - b.number),
      next = siblings[siblings.findIndex((s) => s.id === l.id) + 1];
    return (
      <>
        <PageHeader
          title={l.title}
          subtitle={`${l.courseId.toUpperCase()} · Lesson ${l.number}`}
          back={{ href: back, label: 'Lessons' }}
        />
        <article className="lesson-page">
          <p className="content-edition">
            {l.metadata.blueprintYear} edition · {l.metadata.areaId}
            {l.metadata.supplementary ? ' · Supplemental extension' : ''}
            {l.metadata.taxLawPeriod ? ` · ${l.metadata.taxLawPeriod}` : ''}
          </p>
          <Html className="lesson-content-card" html={l.html} />
          <details className="source-references">
            <summary>Sources and reference period</summary>
            <ul>
              {l.metadata.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noreferrer">
                    {s.title} ↗
                  </a>
                  {s.reference ? ` — ${s.reference}` : ''}
                </li>
              ))}
            </ul>
            <p>
              Content revision {l.metadata.revision}; effective study reference{' '}
              {l.metadata.validFrom}. Task mappings use internal learning-objective identifiers.
            </p>
          </details>
          <LessonCheck
            key={l.id}
            lessonId={l.id}
            title={l.title}
            url={l.url}
            next={next?.url}
            back={back}
          />
        </article>
      </>
    );
  }
  if (route.kind === 'course' || route.kind === 'module') {
    const c = catalog.courses.find((c) => c.id === route.courseId)!,
      m = c.modules.find((m) => m.id === route.moduleId),
      cpa = !!sectionById(c.id),
      lessons = catalog.lessons.filter((l) => l.courseId === c.id && (!m || l.moduleId === m.id));
    back = m ? `/learn/${c.id}` : '/learn';
    return (
      <>
        <PageHeader
          title={route.title}
          subtitle={m?.description || c.description}
          back={{ href: back, label: m ? c.title : 'Learn' }}
        />
        <CourseProgress lessonIds={lessons.map((l) => l.id)} />
        <p className="content-edition">
          2026 curriculum · {lessons.length} lessons · Read, complete, practice, and demonstrate
          mastery.
        </p>
        <div className="module-list">
          {c.modules.length && !m
            ? c.modules.map((m) => (
                <CardLink
                  key={m.id}
                  href={`/learn/${c.id}/modules/${m.id}`}
                  title={`Module ${m.id} · ${m.title}`}
                >
                  <p>{m.description}</p>
                  <ActivityStatus id={`${c.id}-m${m.id}-${cpa ? 'practice' : 'quiz'}`} />
                </CardLink>
              ))
            : lessons
                .sort((a, b) => a.number - b.number)
                .map((l) => (
                  <CardLink key={l.id} href={l.url} title={`${l.number}. ${l.title}`}>
                    <p>{l.description}</p>
                    <LessonStatus id={l.id} />
                  </CardLink>
                ))}
        </div>
        {m ? (
          <div className="learning-grid">
            <CardLink
              href={`${route.path}/${cpa ? 'practice' : 'quiz'}`}
              title={cpa ? 'Module MCQ practice' : 'Module quiz'}
            >
              <p>Apply the concepts and review feedback.</p>
              <ActivityStatus id={`${c.id}-m${m.id}-${cpa ? 'practice' : 'quiz'}`} />
            </CardLink>
            {cpa && (
              <CardLink href={`${route.path}/simulations`} title="Task-based simulations">
                <p>Work with supporting information and structured responses.</p>
              </CardLink>
            )}
            {c.id === 'far' && m.id === 6 && (
              <CardLink href="/learn/far/journal" title="Journal entry practice" />
            )}
          </div>
        ) : (
          <div className="learning-grid">
            <CardLink href={`${route.path}/final`} title="Cumulative assessments" />
            {cpa && <CardLink href={`/mock-exams/${c.id}`} title="Full-length mock exam" />}
          </div>
        )}
      </>
    );
  }
  if (route.kind === 'assessment')
    return (
      <>
        <PageHeader title={route.title} back={{ href: back, label: 'Back' }} />
        <div className="lesson-page">
          <AssessmentPlayer activityId={route.id!} title={route.title} url={route.path} />
        </div>
      </>
    );
  if (route.kind === 'simulation')
    return (
      <>
        <PageHeader title={route.title} back={{ href: back, label: 'Back' }} />
        <div className="lesson-page">
          <SimulationPlayer id={route.id!} title={route.title} url={route.path} />
        </div>
      </>
    );
  if (route.kind === 'simulation-list')
    return (
      <>
        <PageHeader title={route.title} back={{ href: back, label: 'Module' }} />
        <div className="module-list">
          {catalog.simulations
            .filter((s) => s.courseId === route.courseId && s.moduleId === route.moduleId)
            .sort((a, b) => a.number - b.number)
            .map((s) => (
              <CardLink
                key={s.id}
                href={`${route.path}/${s.number}`}
                title={`${s.number}. ${s.title}`}
              >
                <ActivityStatus id={s.id} />
              </CardLink>
            ))}
        </div>
      </>
    );
  if (route.kind === 'journal')
    return (
      <>
        <PageHeader
          title={route.title}
          back={{ href: '/learn/far/modules/6', label: 'FAR review' }}
        />
        <div className="lesson-page">
          <JournalPlayer />
        </div>
      </>
    );
  if (route.kind === 'core')
    return (
      <>
        <PageHeader
          title="CPA Core"
          subtitle="Prepare for all three required Core sections."
          back={{ href: '/learn', label: 'Learn' }}
        />
        <div className="learning-grid">
          {examSections
            .filter((s) => s.type === 'core')
            .map((s) => (
              <CardLink
                key={s.id}
                href={`/learn/${s.id}`}
                title={`${s.id.toUpperCase()} · ${s.title}`}
              >
                <p>{s.description}</p>
              </CardLink>
            ))}
        </div>
      </>
    );
  if (route.kind === 'final')
    return (
      <>
        <PageHeader
          title={route.title}
          back={{ href: `/learn/${route.courseId}`, label: 'Course' }}
        />
        <div className="learning-grid">
          <CardLink href={`${route.path}/mcq`} title="Cumulative MCQ assessment">
            <p>Deferred feedback and saved results.</p>
            <ActivityStatus
              id={route.courseId === 'far' ? 'far-final-mcq' : `${route.courseId}-final`}
            />
          </CardLink>
          <CardLink href={`${route.path}/tbs`} title="Cumulative TBS assessment">
            <p>Integrated cases and structured responses.</p>
            <ActivityStatus id={`${route.courseId}-final-tbs`} />
          </CardLink>
          <CardLink href={`/mock-exams/${route.courseId}`} title="Full-length timed mock">
            <p>Five testlets and the official item-count format.</p>
          </CardLink>
        </div>
      </>
    );
  return (
    <>
      <PageHeader
        title="Choose your Discipline"
        subtitle="Explore all three paths. Your recommendation informs your choice; it never restricts it."
        back={{ href: '/learn', label: 'Learn' }}
      />
      <DisciplineExplorer />
    </>
  );
}
