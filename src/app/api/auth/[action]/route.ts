import { authAction, publicUser, requireUser, sessionList, tokenFromRequest } from '@/server/auth';
import { endpoint, response, ApiError } from '@/server/http';

export const runtime = 'nodejs';
type Context = { params: Promise<{ action: string }> };
export async function POST(request: Request, { params }: Context) {
  const { action } = await params;
  return endpoint(() => authAction(request, action));
}
export async function GET(request: Request, { params }: Context) {
  const { action } = await params;
  return endpoint(() => {
    const user = requireUser(request, false);
    if (action === 'session') return response({ user: publicUser(user) });
    if (action === 'sessions')
      return response({ sessions: sessionList(user, tokenFromRequest(request)!) });
    throw new ApiError(404, 'Unknown account endpoint.');
  });
}
