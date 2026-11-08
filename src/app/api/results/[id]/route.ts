import { requireUser } from '@/server/auth';
import { loadAttempt, report } from '@/server/attempts';
import { endpoint, response } from '@/server/http';
export const runtime = 'nodejs';
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return endpoint(() => {
    const user = requireUser(request);
    return response(report(loadAttempt(user.id, id)));
  });
}
