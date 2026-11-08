import { z } from 'zod';
import { requireAdmin } from '@/server/auth';
import { adminItem, contentKind, setRevisionStatus } from '@/server/admin';
import { endpoint, jsonBody, response, verifyOrigin } from '@/server/http';
export const runtime = 'nodejs';
type Context = { params: Promise<{ kind: string; id: string }> };
export async function GET(request: Request, { params }: Context) {
  const { kind, id } = await params;
  return endpoint(() => {
    requireAdmin(request);
    const revision = new URL(request.url).searchParams.get('revision');
    return response(
      adminItem(contentKind.parse(kind), id, revision ? Number(revision) : undefined),
    );
  });
}
export async function PATCH(request: Request, { params }: Context) {
  const { kind, id } = await params;
  return endpoint(async () => {
    verifyOrigin(request);
    const user = requireAdmin(request);
    const data = await jsonBody(
      request,
      z.object({
        revision: z.number().int().positive(),
        status: z.enum(['published', 'archived']),
      }),
    );
    setRevisionStatus(user, contentKind.parse(kind), id, data.revision, data.status);
    return response({ ok: true });
  });
}
