'use client';
import { useCallback, useEffect, useState } from 'react';
import { api, errorMessage } from '@/lib/api';
export function useResource<T>(url: string | null) {
  const [result, setResult] = useState<{ url: string; data: T | null; error: string } | null>(null);
  const refresh = useCallback(async () => {
    if (!url) return;
    try {
      const data = await api<T>(url);
      setResult({ url, data, error: '' });
    } catch (error) {
      setResult({ url, data: null, error: errorMessage(error) });
    }
  }, [url]);
  useEffect(() => {
    if (!url) return;
    const controller = new AbortController();
    void api<T>(url, { signal: controller.signal })
      .then((data) => setResult({ url, data, error: '' }))
      .catch((error) => {
        if (!controller.signal.aborted) setResult({ url, data: null, error: errorMessage(error) });
      });
    return () => controller.abort();
  }, [url]);
  return {
    data: result?.url === url ? result.data : null,
    error: result?.url === url ? result.error : '',
    loading: !!url && result?.url !== url,
    refresh,
  };
}
