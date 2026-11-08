import { requireUser } from '@/server/auth';
import { analytics } from '@/server/analytics';
import { endpoint, response } from '@/server/http';
export const runtime = 'nodejs';
export function GET(request: Request) {
  return endpoint(() => response(analytics(requireUser(request))));
}
