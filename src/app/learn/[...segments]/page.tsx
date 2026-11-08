import { notFound } from 'next/navigation';
import { StudyPage } from '@/components/study-page';
import { buildStudyRoutes } from '@/lib/routes';
import { getCatalog } from '@/server/content';

type Props = { params: Promise<{ segments: string[] }> };
export async function generateMetadata({ params }: Props) {
  const { segments } = await params;
  return {
    title:
      buildStudyRoutes(getCatalog()).find((r) => r.path === `/learn/${segments.join('/')}`)
        ?.title ?? 'Not found',
  };
}
export default async function Page({ params }: Props) {
  const { segments } = await params;
  const route = buildStudyRoutes(getCatalog()).find(
    (r) => r.path === `/learn/${segments.join('/')}`,
  );
  if (!route) notFound();
  return <StudyPage route={route} />;
}
