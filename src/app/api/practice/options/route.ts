import { requireUser } from '@/server/auth';
import { getCatalog, getTopics, questionBank, simulationBank } from '@/server/content';
import { endpoint, response } from '@/server/http';
export const runtime = 'nodejs';
export function GET(request: Request) {
  return endpoint(() => {
    requireUser(request);
    return response({
      courses: getCatalog().courses,
      topics: getTopics(),
      counts: getCatalog().courses.map((c) => ({
        section: c.id,
        mcqs: questionBank(c.id).length,
        simulations: simulationBank(c.id).length,
      })),
    });
  });
}
