import { expect, type APIRequestContext } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import { DatabaseSync, type SQLInputValue } from 'node:sqlite';
import type { PrivateAttempt, PublicAttempt, StartAttempt } from '../../src/types/platform';

export const ORIGIN = 'http://127.0.0.1:3100';
export const PASSWORD = 'Study-Platform-Test-Passphrase-42!';
export const headers = (generation = 0) => ({
  Origin: ORIGIN,
  'X-Progress-Generation': String(generation),
});
export function sql<T>(query: string, ...params: SQLInputValue[]): T[] {
  const db = new DatabaseSync(path.resolve('data/e2e.sqlite'));
  try {
    return db.prepare(query).all(...params) as T[];
  } finally {
    db.close();
  }
}
export function executeSql(query: string, ...params: SQLInputValue[]) {
  const db = new DatabaseSync(path.resolve('data/e2e.sqlite'));
  try {
    return db.prepare(query).run(...params);
  } finally {
    db.close();
  }
}
export function mailLink(email: string, route: string) {
  const files = fs
    .readdirSync('data/e2e-mail')
    .map((name) => path.join('data/e2e-mail', name))
    .sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs);
  for (const file of files) {
    const text = fs
      .readFileSync(file, 'utf8')
      .replace(/=\r?\n/g, '')
      .replace(/=([0-9A-F]{2})/g, (_, code) => String.fromCharCode(parseInt(code, 16)));
    if (text.includes(email)) {
      const match = text.match(
        new RegExp(`http://127\\.0\\.0\\.1:3100/${route}\\?token=([^\\s<>]+)`),
      );
      if (match) return `${ORIGIN}/${route}?token=${match[1]}`;
    }
  }
  throw new Error(`No ${route} message for ${email}`);
}
export async function createUser(api: APIRequestContext, prefix = 'student') {
  const email = `${prefix}-${crypto.randomUUID()}@cpa.test`;
  let response = await api.post('/api/auth/register/', {
    headers: headers(),
    data: { name: 'Study User', email, password: PASSWORD },
  });
  expect(response.status(), await response.text()).toBe(202);
  const token = new URL(mailLink(email, 'verify-email')).searchParams.get('token');
  response = await api.post('/api/auth/verify-email/', { headers: headers(), data: { token } });
  expect(response.ok(), await response.text()).toBeTruthy();
  response = await api.post('/api/auth/sign-in/', {
    headers: headers(),
    data: { email, password: PASSWORD },
  });
  expect(response.ok(), await response.text()).toBeTruthy();
  return { email, id: (await response.json()).user.id as string };
}
export async function start(
  api: APIRequestContext,
  input: StartAttempt,
  generation = 0,
): Promise<PublicAttempt> {
  const response = await api.post('/api/attempts/', { headers: headers(generation), data: input });
  expect(response.status(), await response.text()).toBe(201);
  return (await response.json()).attempt;
}
export async function act(
  api: APIRequestContext,
  a: PublicAttempt,
  action: Record<string, unknown>,
  generation = 0,
): Promise<PublicAttempt> {
  const response = await api.patch(`/api/attempts/${a.id}/`, {
    headers: headers(generation),
    data: { ...action, version: a.version },
  });
  expect(response.ok(), await response.text()).toBeTruthy();
  return (await response.json()).attempt;
}
export function privateAttempt(id: string): PrivateAttempt {
  return JSON.parse(
    sql<{ data_json: string }>('SELECT data_json FROM attempts WHERE id=?', id)[0].data_json,
  );
}
export function correctAnswers(a: PublicAttempt) {
  const item = privateAttempt(a.id).items[a.currentIndex];
  if (item.kind === 'mcq') return { choice: item.question.correctChoiceId };
  if (item.kind === 'simulation')
    return Object.fromEntries(item.simulation.fields.map((f) => [f.id, String(f.correct)]));
  const result: Record<string, string> = {};
  item.journal.correctEntries.forEach((entry, i) => {
    result[`r${i}-account`] = entry.account;
    result[`r${i}-debit`] = String(entry.debit);
    result[`r${i}-credit`] = String(entry.credit);
  });
  return result;
}
export function assertProtected(value: unknown) {
  if (value && typeof value === 'object')
    for (const [key, item] of Object.entries(value)) {
      expect([
        'correctChoiceId',
        'correctEntries',
        'correct',
        'explanation',
        'choiceExplanations',
        'sourceId',
      ]).not.toContain(key);
      assertProtected(item);
    }
}
