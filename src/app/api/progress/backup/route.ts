import { z } from 'zod';
import { requireGeneration, requireUser } from '@/server/auth';
import { exportAccount, importBackup } from '@/server/backups';
import { endpoint, jsonBody, limit, response, verifyOrigin } from '@/server/http';
export const runtime = 'nodejs';
export function GET(request: Request) {
  return endpoint(() => {
    const user = requireUser(request);
    limit(`export:${user.id}`, 10, 3600000);
    const result = response(exportAccount(user));
    result.headers.set('Content-Disposition', 'attachment; filename="cpa-study-account.json"');
    return result;
  });
}
export function POST(request: Request) {
  return endpoint(async () => {
    verifyOrigin(request);
    const data = await jsonBody(request, z.unknown(), 8 * 1024 * 1024);
    const user = requireUser(request);
    requireGeneration(request, user);
    limit(`import:${user.id}`, 8, 3600000);
    return response(await importBackup(user, data));
  });
}
