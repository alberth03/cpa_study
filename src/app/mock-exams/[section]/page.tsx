import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/ui';
import { MockStart } from '@/features/assessments/mock-start';
import { sectionById } from '@/lib/blueprints';
import { requirePageUser } from '@/server/auth';
export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const definition = sectionById(section);
  if (!definition) notFound();
  await requirePageUser(`/mock-exams/${section}`);
  return (
    <>
      <PageHeader
        title={`${section.toUpperCase()} Mock Exam`}
        back={{ href: '/mock-exams', label: 'Mock exams' }}
      />
      <div className="lesson-page">
        <MockStart section={definition.id} />
      </div>
    </>
  );
}
