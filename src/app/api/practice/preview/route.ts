import { requireUser } from '@/server/auth';
import { historyFor, weakTopics } from '@/server/attempts';
import { questionBank, simulationBank } from '@/server/content';
import { choosePractice } from '@/server/selection';
import { resolvePracticeScope } from '@/server/practice';
import { practiceConfigSchema } from '@/types/platform';
import { endpoint, jsonBody, response, verifyOrigin } from '@/server/http';
export function POST(request: Request) {
  return endpoint(async () => {
    verifyOrigin(request);
    const input = await jsonBody(request, practiceConfigSchema);
    const user = requireUser(request),
      history = historyFor(user.id),
      weak = weakTopics(user.id);
    const config = resolvePracticeScope(user.id, input);
    return response({
      mcqs: choosePractice(questionBank(config.section), config, history, weak).length,
      simulations: choosePractice(simulationBank(config.section), config, history, weak).length,
    });
  });
}
