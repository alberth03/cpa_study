'use client';
export class ClientError extends Error {
  constructor(
    message: string,
    public status: number,
    public code: string,
  ) {
    super(message);
  }
}
export async function api<T>(
  url: string,
  options: {
    method?: string;
    body?: unknown;
    generation?: number;
    signal?: AbortSignal;
    keepalive?: boolean;
  } = {},
): Promise<T> {
  const headers: Record<string, string> = {};
  if (options.body !== undefined) headers['Content-Type'] = 'application/json';
  if (options.generation !== undefined)
    headers['X-Progress-Generation'] = String(options.generation);
  const res = await fetch(url, {
    method: options.method || 'GET',
    body: options.body === undefined ? undefined : JSON.stringify(options.body),
    headers,
    credentials: 'same-origin',
    cache: 'no-store',
    signal: options.signal,
    keepalive: options.keepalive,
  });
  const data = await res
    .json()
    .catch(() => ({ error: 'The server returned an unexpected response.' }));
  if (!res.ok)
    throw new ClientError(
      data.error || 'Request failed.',
      res.status,
      data.code || 'request_error',
    );
  return data;
}
export const errorMessage = (error: unknown) =>
  error instanceof Error ? error.message : 'Something went wrong. Please try again.';
// Identity changes intentionally replace the document to clear all user-scoped
// React state and navigation caches, including the previous account's drafts.
export function navigateAfterAuth(path: string) {
  window.location.assign(path);
}
