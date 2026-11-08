export function evaluateCell(
  address: string,
  cells: Record<string, string>,
  visiting = new Set<string>(),
): number {
  const key = address.toUpperCase();
  if (!/^[A-D][1-8]$/.test(key)) throw new Error('Invalid cell');
  if (visiting.has(key)) throw new Error('Circular reference');
  const text = (cells[key] || '').trim();
  if (!text) return 0;
  if (!text.startsWith('=')) {
    const n = Number(text.replace(/[$,]/g, ''));
    if (!Number.isFinite(n)) throw new Error('Not a number');
    return n;
  }
  const next = new Set(visiting);
  next.add(key);
  return calculate(text.slice(1), (id) => evaluateCell(id, cells, next));
}
export function calculate(
  expression: string,
  cell: (id: string) => number = () => {
    throw new Error('Cell reference unavailable');
  },
): number {
  const expanded = expression
    .toUpperCase()
    .replace(/SUM\(([A-D])([1-8]):([A-D])([1-8])\)/g, (_, a, r, b, s) => {
      const values = [];
      for (let c = a.charCodeAt(0); c <= b.charCodeAt(0); c++)
        for (let row = Number(r); row <= Number(s); row++)
          values.push(cell(`${String.fromCharCode(c)}${row}`));
      if (!values.length) throw new Error('Invalid range');
      return `(${values.reduce((x, y) => x + y, 0)})`;
    });
  const matches = [...expanded.matchAll(/\s*(\d+(?:\.\d*)?|\.\d+|[A-D][1-8]|[()+\-*/])/g)];
  if (
    matches
      .map((m) => m[0])
      .join('')
      .replace(/\s/g, '') !== expanded.replace(/\s/g, '')
  )
    throw new Error('Unsupported expression');
  const tokens = matches.map((m) => m[1]);
  let i = 0;
  const factor = (): number => {
    const t = tokens[i++];
    if (t === '+') return factor();
    if (t === '-') return -factor();
    if (t === '(') {
      const n = expressionValue();
      if (tokens[i++] !== ')') throw new Error('Missing parenthesis');
      return n;
    }
    if (t && /^[A-D][1-8]$/.test(t)) return cell(t);
    if (t && /^(\d|\.)/.test(t)) return Number(t);
    throw new Error('Invalid expression');
  };
  const term = (): number => {
    let n = factor();
    while (tokens[i] === '*' || tokens[i] === '/') {
      const op = tokens[i++],
        v = factor();
      n = op === '*' ? n * v : n / v;
    }
    return n;
  };
  const expressionValue = (): number => {
    let n = term();
    while (tokens[i] === '+' || tokens[i] === '-') {
      const op = tokens[i++],
        v = term();
      n = op === '+' ? n + v : n - v;
    }
    return n;
  };
  const value = expressionValue();
  if (i !== tokens.length || !Number.isFinite(value))
    throw new Error('Invalid or non-finite result');
  return value;
}
