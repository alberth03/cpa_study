export const percent = (results: { correct: boolean }[]) =>
  results.length ? Math.round((results.filter((r) => r.correct).length / results.length) * 100) : 0;
