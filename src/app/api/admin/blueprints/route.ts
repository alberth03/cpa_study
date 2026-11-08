import { z } from 'zod';
import { requireAdmin } from '@/server/auth';
import { blueprintQueue, coverageAudit } from '@/server/admin';
import { endpoint, jsonBody, response, verifyOrigin } from '@/server/http';
import { audit, run } from '@/server/db';
export const runtime = 'nodejs';
export function GET(request: Request) {
  return endpoint(() => {
    requireAdmin(request);
    return response({ queue: blueprintQueue(), coverage: coverageAudit() });
  });
}
export function PATCH(request: Request) {
  return endpoint(async () => {
    verifyOrigin(request);
    const user = requireAdmin(request);
    const data = await jsonBody(
      request,
      z.object({
        id: z.string().max(100),
        status: z.enum(['needs-review', 'reviewed']),
        notes: z.string().min(10).max(3000),
      }),
    );
    run(
      'UPDATE blueprint_changes SET status=?,notes=?,reviewed_by=?,reviewed_at=? WHERE id=?',
      data.status,
      data.notes,
      user.id,
      new Date().toISOString(),
      data.id,
    );
    audit(user.id, 'blueprint.review', data.id, data.notes);
    return response({ ok: true });
  });
}
