export const attemptUrl = (url: string, id: string) =>
  `${url}${url.includes('?') ? '&' : '?'}attempt=${encodeURIComponent(id)}`;
