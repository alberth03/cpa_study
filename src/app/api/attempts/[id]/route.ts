import { requireGeneration, requireUser } from '@/server/auth';
import { endpoint, jsonBody, limit, response, verifyOrigin } from '@/server/http';
import { attemptActionSchema, loadAttempt, mutateAttempt, publicAttempt } from '@/server/attempts';
export const runtime = 'nodejs';
type Context = { params: Promise<{ id: string }> };
export async function GET(request: Request, { params }: Context) {
  const { id } = await params;
  return endpoint(() => {
    const user = requireUser(request);
    limit(`items:${user.id}`, 1500, 60000);
    return response({ attempt: publicAttempt(loadAttempt(user.id, id)) });
  });
}
export async function PATCH(request: Request, { params }: Context) {
  const { id } = await params;
  return endpoint(async () => {
    verifyOrigin(request);
    const input = await jsonBody(request, attemptActionSchema);
    const user = requireUser(request);
    requireGeneration(request, user);
    limit(`items:${user.id}`, 1500, 60000);
    return response({ attempt: publicAttempt(mutateAttempt(user.id, id, input)) });
  });
}
