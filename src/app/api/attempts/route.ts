import { requireGeneration, requireUser } from '@/server/auth';
import { endpoint, jsonBody, limit, response, verifyOrigin } from '@/server/http';
import { createAttempt, privateAttempts, publicAttempt, summary } from '@/server/attempts';
import { startAttemptSchema } from '@/types/platform';

export const runtime = 'nodejs';
export function GET(request: Request) {
  return endpoint(() => {
    const user = requireUser(request);
    return response({ attempts: privateAttempts(user.id).map(summary).reverse() });
  });
}
export function POST(request: Request) {
  return endpoint(async () => {
    verifyOrigin(request);
    const input = await jsonBody(request, startAttemptSchema);
    const user = requireUser(request);
    requireGeneration(request, user);
    limit(`start:${user.id}`, 60, 3600000);
    return response({ attempt: publicAttempt(createAttempt(user, input)) }, 201);
  });
}
