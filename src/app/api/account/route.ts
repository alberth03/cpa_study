import { z } from 'zod';
import { clearSessionCookie, requireGeneration, requireUser } from '@/server/auth';
import { deleteAccount, progressState, resetProgress, updatePreferences } from '@/server/progress';
import { ApiError, endpoint, jsonBody, limit, response, verifyOrigin } from '@/server/http';
import { preferencesSchema } from '@/types/platform';
import { verifyPassword } from '@/server/passwords';
import { run } from '@/server/db';
export const runtime = 'nodejs';
export function PATCH(request: Request) {
  return endpoint(async () => {
    verifyOrigin(request);
    const data = await jsonBody(
      request,
      z.object({ name: z.string().trim().min(1).max(100), preferences: preferencesSchema }),
    );
    const user = requireUser(request);
    requireGeneration(request, user);
    updatePreferences(user, data.preferences);
    run('UPDATE users SET name=? WHERE id=?', data.name, user.id);
    return response({ ok: true });
  });
}
export function POST(request: Request) {
  return endpoint(async () => {
    verifyOrigin(request);
    const data = await jsonBody(
      request,
      z.object({
        action: z.enum(['reset-progress', 'delete-account']),
        confirmation: z.string(),
        password: z.string().max(128),
      }),
    );
    const user = requireUser(request, false);
    limit(`sensitive:${user.id}`, 10, 15 * 60000);
    if (!(await verifyPassword(data.password, user.password_hash)))
      throw new ApiError(403, 'Password is incorrect.');
    if (data.action === 'reset-progress') {
      if (data.confirmation !== 'RESET ALL PROGRESS')
        throw new ApiError(400, 'Enter RESET ALL PROGRESS exactly to confirm.');
      return response(progressState(resetProgress(user)));
    }
    if (data.confirmation !== 'DELETE MY ACCOUNT')
      throw new ApiError(400, 'Enter DELETE MY ACCOUNT exactly to confirm.');
    deleteAccount(user);
    return clearSessionCookie(response({ deleted: true }));
  });
}
