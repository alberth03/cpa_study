import { z } from 'zod';
import { requireGeneration, requireUser } from '@/server/auth';
import { progressState, markLesson } from '@/server/progress';
import { endpoint, jsonBody, response, verifyOrigin } from '@/server/http';
export const runtime = 'nodejs';
export function GET(request: Request) {
  return endpoint(() => response(progressState(requireUser(request))));
}
export function POST(request: Request) {
  return endpoint(async () => {
    verifyOrigin(request);
    const data = await jsonBody(
      request,
      z.object({
        lessonId: z.string().regex(/^[a-z0-9-]+$/),
        completed: z.boolean().default(false),
      }),
    );
    const user = requireUser(request);
    requireGeneration(request, user);
    markLesson(user, data.lessonId, data.completed);
    return response(progressState(user));
  });
}
