import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createHash } from 'node:crypto';
import { one, run, transaction } from './db';

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public code = 'request_error',
  ) {
    super(message);
  }
}
export function appOrigin() {
  const configured = process.env.APP_URL;
  if (process.env.NODE_ENV === 'production' && !configured)
    throw new Error('APP_URL is required in production');
  const url = new URL(configured || 'http://localhost:3000');
  if (
    process.env.NODE_ENV === 'production' &&
    url.protocol !== 'https:' &&
    !['localhost', '127.0.0.1', '[::1]'].includes(url.hostname)
  )
    throw new Error('Production APP_URL must use HTTPS.');
  return url.origin;
}
export function verifyOrigin(request: Request) {
  const origin = request.headers.get('origin');
  if (!origin || origin !== appOrigin())
    throw new ApiError(403, 'This request did not come from this application.', 'invalid_origin');
  if (request.headers.get('sec-fetch-site') === 'cross-site')
    throw new ApiError(403, 'Cross-site request rejected.');
}
export function clientKey(request: Request) {
  const raw =
    process.env.TRUST_PROXY === 'true'
      ? request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
      : 'direct';
  return createHash('sha256').update(raw).digest('hex').slice(0, 32);
}
export function limit(key: string, max: number, windowMs: number, now = Date.now()) {
  transaction(() => {
    const entry = one<{ hits: number; window_end: number }>(
      'SELECT hits,window_end FROM rate_limits WHERE key=?',
      key,
    );
    if (entry && entry.window_end > now && entry.hits >= max)
      throw new ApiError(429, 'Too many requests. Please wait and try again.', 'rate_limited');
    if (!entry || entry.window_end <= now)
      run(
        'INSERT INTO rate_limits(key,hits,window_end) VALUES(?,1,?) ON CONFLICT(key) DO UPDATE SET hits=1,window_end=excluded.window_end',
        key,
        now + windowMs,
      );
    else run('UPDATE rate_limits SET hits=hits+1 WHERE key=?', key);
    run('DELETE FROM rate_limits WHERE window_end<?', now - windowMs);
  });
}
export async function jsonBody<T extends z.ZodType>(
  request: Request,
  schema: T,
  maxBytes = 256_000,
): Promise<z.output<T>> {
  if (!request.headers.get('content-type')?.includes('application/json'))
    throw new ApiError(415, 'Send an application/json request.');
  if (Number(request.headers.get('content-length') || 0) > maxBytes)
    throw new ApiError(413, 'Request is too large.');
  const reader = request.body?.getReader();
  if (!reader) throw new ApiError(400, 'Request body is required.');
  const parts: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > maxBytes) {
      await reader.cancel();
      throw new ApiError(413, 'Request is too large.');
    }
    parts.push(value);
  }
  try {
    return schema.parse(JSON.parse(Buffer.concat(parts).toString('utf8')));
  } catch (error) {
    if (error instanceof z.ZodError)
      throw new ApiError(400, error.issues[0]?.message || 'Invalid input.', 'validation');
    throw new ApiError(400, 'Invalid JSON.');
  }
}
export function response(data: unknown, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: { 'Cache-Control': 'private, no-store, max-age=0', Vary: 'Cookie' },
  });
}
export function endpoint(fn: () => Promise<Response> | Response) {
  return Promise.resolve()
    .then(fn)
    .catch((error) => {
      if (error instanceof ApiError)
        return response({ error: error.message, code: error.code }, error.status);
      if (error instanceof z.ZodError)
        return response(
          { error: error.issues[0]?.message || 'Invalid input.', code: 'validation' },
          400,
        );
      console.error('Request failed:', error instanceof Error ? error.message : 'Unknown error');
      return response(
        { error: 'The request could not be completed. Please try again.', code: 'server_error' },
        500,
      );
    });
}
