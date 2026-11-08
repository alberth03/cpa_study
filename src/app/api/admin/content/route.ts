import { z } from 'zod';
import { requireAdmin } from '@/server/auth';
import { contentKind, contentList, saveRevision } from '@/server/admin';
import { endpoint, jsonBody, response, verifyOrigin } from '@/server/http';
export const runtime = 'nodejs';
export function GET(request: Request) {
  return endpoint(() => {
    requireAdmin(request);
    return response(
      contentList(contentKind.parse(new URL(request.url).searchParams.get('kind') || 'question')),
    );
  });
}
export function POST(request: Request) {
  return endpoint(async () => {
    verifyOrigin(request);
    const user = requireAdmin(request);
    const data = await jsonBody(
      request,
      z.object({
        kind: contentKind,
        id: z.string().regex(/^[a-z0-9-]+$/),
        content: z.unknown(),
        note: z.string().trim().min(5).max(1000),
      }),
      500000,
    );
    return response(
      { revision: saveRevision(user, data.kind, data.id, data.content, data.note) },
      201,
    );
  });
}
