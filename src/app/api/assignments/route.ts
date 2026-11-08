import { z } from 'zod';
import { requireGeneration, requireUser } from '@/server/auth';
import { assignTopic } from '@/server/progress';
import { getTopics } from '@/server/content';
import { ApiError, endpoint, jsonBody, response, verifyOrigin } from '@/server/http';
import { run } from '@/server/db';
export const runtime = 'nodejs';
export function POST(request: Request) {
  return endpoint(async () => {
    verifyOrigin(request);
    const data = await jsonBody(request, z.object({ topicId: z.string().max(150) }));
    const user = requireUser(request);
    requireGeneration(request, user);
    const topic = getTopics().find((t) => t.id === data.topicId);
    if (!topic) throw new ApiError(404, 'Topic not found.');
    assignTopic(user, topic.id, `Review and retest ${topic.title}`, topic.lessonId);
    return response({ ok: true });
  });
}
export function PATCH(request: Request) {
  return endpoint(async () => {
    verifyOrigin(request);
    const data = await jsonBody(
      request,
      z.object({ id: z.string().uuid(), completed: z.boolean() }),
    );
    const user = requireUser(request);
    requireGeneration(request, user);
    run(
      'UPDATE study_assignments SET status=?,completed_at=? WHERE id=? AND user_id=?',
      data.completed ? 'completed' : 'open',
      data.completed ? new Date().toISOString() : null,
      data.id,
      user.id,
    );
    return response({ ok: true });
  });
}
