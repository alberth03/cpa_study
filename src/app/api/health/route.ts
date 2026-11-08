import { response } from '@/server/http';
import { one } from '@/server/db';
export const runtime = 'nodejs';
export function GET() {
  try {
    one('SELECT 1');
    return response({ status: 'ok' });
  } catch {
    return response({ status: 'unavailable' }, 503);
  }
}
