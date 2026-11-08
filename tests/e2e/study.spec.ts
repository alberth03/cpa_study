import { test, expect, type Page } from '@playwright/test';
import fs from 'node:fs';
import catalog from '../../src/content/catalog.json' with { type: 'json' };
import {
  createUser,
  headers,
  PASSWORD,
  ORIGIN,
  start,
  act,
  correctAnswers,
  privateAttempt,
  assertProtected,
  executeSql,
  mailLink,
} from './helpers';
import type { PublicAttempt } from '../../src/types/platform';

const errors = new WeakMap<Page, string[]>();
test.beforeEach(({ page }) => {
  errors.set(page, []);
  page.on('pageerror', (e) => errors.get(page)!.push(e.message));
  page.on('console', (m) => {
    if (
      m.type() === 'error' &&
      /Content Security Policy|hydration|same key|unique.*key/i.test(m.text())
    )
      errors.get(page)!.push(m.text());
  });
});
test.afterEach(({ page }) => expect(errors.get(page)).toEqual([]));
async function current(page: Page): Promise<PublicAttempt> {
  await page.waitForURL(/attempt=/);
  const id = new URL(page.url()).searchParams.get('attempt');
  return (await (await page.request.get(`/api/attempts/${id}/`)).json()).attempt;
}
async function chooseCorrect(page: Page) {
  const a = await current(page);
  if (a.current?.kind !== 'mcq') throw new Error('Not an MCQ');
  const choice = correctAnswers(a).choice;
  const index = a.current.question.choices.findIndex((c) => c.id === choice);
  await page.locator('.answer-button').nth(index).click();
  await expect(page.locator('.exam-status [role=status]')).toHaveText('Saved to account');
}

test('registration, verification, sign-in and protected routes work through the UI', async ({
  page,
}) => {
  await page.goto('/');
  await expect(page).toHaveURL(/sign-in/);
  const email = `ui-${crypto.randomUUID()}@cpa.test`;
  await page.getByRole('link', { name: 'Create an account', exact: true }).click();
  await page.getByLabel('Your name', { exact: true }).fill('New Learner');
  await page.getByLabel('Email address', { exact: true }).fill(email);
  await page.getByLabel('New password', { exact: true }).fill(PASSWORD);
  await page.getByLabel('Confirm password', { exact: true }).fill(PASSWORD);
  await page.getByRole('button', { name: 'Create account', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('verification email');
  await page.goto(mailLink(email, 'verify-email'));
  await page.getByRole('button', { name: 'Verify email', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('Email verified');
  await page.goto('/sign-in');
  await page.getByLabel('Email address', { exact: true }).fill(email);
  await page.getByLabel('Password', { exact: true }).fill(PASSWORD);
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard', exact: true })).toBeVisible();
});

test('all curriculum lessons are protected, available, and free of serialized answer keys', async ({
  page,
}) => {
  await createUser(page.request, 'curriculum');
  for (const lesson of catalog.lessons) {
    const res = await page.request.get(lesson.url);
    expect(res.status()).toBe(200);
    const text = await res.text();
    expect(text).toContain('lesson-content-card');
    expect(text).not.toContain('correctChoiceId');
  }
  for (const path of [
    '/study-data/assessments/far-final-mcq.json',
    '/study-data/simulations/far-final-tbs1.json',
    '/legacy/app.js',
  ])
    expect((await page.request.get(path)).status()).toBe(404);
  await page.goto('/learn/aud/modules/1/lessons/1');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Independence');
  await page.getByRole('button', { name: 'Complete lesson', exact: true }).click();
  await expect(
    page.getByRole('button', { name: '✓ Lesson completed', exact: true }),
  ).toBeDisabled();
  await page.reload();
  await expect(
    page.getByRole('button', { name: '✓ Lesson completed', exact: true }),
  ).toBeDisabled();
});

test('tutor feedback, question order, flags and saved responses survive refresh', async ({
  page,
}) => {
  await createUser(page.request, 'practice');
  await page.goto('/learn/far/modules/2/practice');
  await page.getByRole('button', { name: 'Start assessment', exact: true }).click();
  await expect(page.locator('.exam-status')).toContainText('Item 1');
  assertProtected(await current(page));
  await chooseCorrect(page);
  await page.getByRole('button', { name: '☆ Flag for review', exact: true }).click();
  await page.getByRole('button', { name: 'Check answer', exact: true }).click();
  await expect(page.locator('.feedback')).toContainText('Correct');
  const before = await current(page);
  await page.reload();
  await expect(page.locator('.answer-button').first()).toBeDisabled();
  expect((await current(page)).current).toEqual(before.current);
  await expect(page.getByRole('button', { name: '★ Flagged', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Next item →', exact: true }).click();
  await expect(page.locator('.exam-status')).toContainText('Item 2');
});

test('custom practice supports mixed, incorrect, and learning-reinforcement sessions', async ({
  page,
}) => {
  await createUser(page.request, 'builder');
  await page.goto('/practice');
  await page.getByRole('combobox', { name: 'Course', exact: true }).selectOption('isc');
  await page.getByRole('combobox', { name: 'Question type', exact: true }).selectOption('mixed');
  await page.getByLabel('Number of items', { exact: true }).fill('3');
  await page.getByRole('button', { name: 'Start custom practice', exact: true }).click();
  await expect(page).toHaveURL(/practice\/session.*attempt=/);
  const a = await current(page);
  expect(a.total).toBe(3);
  expect(a.navigation.filter((i) => i.kind === 'simulation')).toHaveLength(1);
  assertProtected(a);
  if (a.current?.kind !== 'mcq') throw new Error('Expected an initial MCQ');
  const wrong = a.current.question.choices.find((c) => c.id !== correctAnswers(a).choice)!;
  const marked = await act(page.request, a, {
    action: 'answer',
    itemId: a.current.id,
    answers: { choice: wrong.id },
  });
  await act(page.request, marked, { action: 'check' });
  const retry = await start(page.request, {
    source: 'practice',
    config: {
      section: 'isc',
      type: 'mcq',
      count: 1,
      difficulty: 'mixed',
      mode: 'tutor',
      focus: 'incorrect',
      minutes: null,
      blueprintYear: 2026,
    },
  });
  expect(retry.current?.id).toBe(a.current.id);
  await page.request.post('/api/progress/', {
    headers: headers(),
    data: { lessonId: 'isc-m1-l1', completed: false },
  });
  await page.goto('/practice');
  await page.getByRole('combobox', { name: 'Course', exact: true }).selectOption('isc');
  await page
    .getByRole('combobox', { name: 'Selection focus', exact: true })
    .selectOption('learning');
  await page.getByLabel('Number of items', { exact: true }).fill('3');
  await page.getByRole('button', { name: 'Start custom practice', exact: true }).click();
  const learned = privateAttempt((await current(page)).id);
  expect(
    learned.items.every(
      (item) =>
        item.kind === 'mcq' && item.question.metadata.topicId === 'isc-it-infrastructure-cloud',
    ),
  ).toBe(true);
});

test('full mock enforces five testlets, hides paused questions, and resumes across devices', async ({
  page,
  browser,
}) => {
  const user = await createUser(page.request, 'mock');
  let a = await start(page.request, {
    source: 'mock',
    section: 'far',
    short: false,
    blueprintYear: 2026,
  });
  expect(a.testlets.map((t) => t.count)).toEqual([25, 25, 2, 3, 2]);
  assertProtected(a);
  const early = await page.request.get(`/api/results/${a.id}/`);
  expect(early.status()).toBe(403);
  for (let i = 0; i < 2; i++)
    a = await act(page.request, a, {
      action: 'advance',
      confirmIncomplete: true,
      takeBreak: false,
    });
  await page.goto(`/mock-exams/far?attempt=${a.id}`);
  await expect(page.locator('.exam-status')).toContainText('Testlet 3');
  await page.getByRole('button', { name: 'Submit testlet', exact: true }).click();
  await page.getByLabel('Count incomplete responses as incorrect').check();
  await page.getByLabel('Take the 15-minute scheduled break (clock pauses)').check();
  await page.getByRole('button', { name: 'Confirm submission', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Scheduled break', exact: true })).toBeVisible();
  a = await current(page);
  expect(a.current).toBeNull();
  const other = await browser.newContext({ baseURL: ORIGIN });
  await other.request.post('/api/auth/sign-in/', {
    headers: headers(),
    data: { email: user.email, password: PASSWORD },
  });
  let restored = (await (await other.request.get(`/api/attempts/${a.id}/`)).json())
    .attempt as PublicAttempt;
  expect(restored.breakState?.kind).toBe('scheduled');
  restored = await act(other.request, restored, { action: 'resume' });
  expect(restored.current).not.toBeNull();
  const locked = await other.request.patch(`/api/attempts/${a.id}/`, {
    headers: headers(),
    data: { action: 'navigate', version: restored.version, index: 0 },
  });
  expect(locked.status()).toBe(403);
  await other.close();
});

test('every simulation grades on the server and releases solutions only after submission', async ({
  page,
}) => {
  test.setTimeout(120000);
  for (const section of ['far', 'aud', 'reg', 'bar', 'isc', 'tcp']) {
    await createUser(page.request, `sim-${section}`);
    for (const sim of catalog.simulations.filter((s) => s.courseId === section && s.moduleId > 0)) {
      let a = await start(page.request, { source: 'activity', activityId: sim.id });
      assertProtected(a);
      a = await act(page.request, a, {
        action: 'answer',
        itemId: a.current!.id,
        answers: correctAnswers(a),
      });
      a = await act(page.request, a, { action: 'submit', confirmIncomplete: false });
      expect(a.score).toBe(100);
      const report = await (await page.request.get(`/api/results/${a.id}/`)).json();
      expect(report.solutions.length).toBe(1);
    }
  }
});

test('simulation exhibits, numeric inputs and persisted results work in the browser', async ({
  page,
}) => {
  await createUser(page.request, 'tbs-ui');
  await page.goto('/learn/reg/modules/3/simulations/1');
  await page.getByRole('button', { name: 'Start assessment', exact: true }).click();
  await expect(page.getByRole('tablist', { name: 'Exhibits' })).toBeVisible();
  const a = await current(page),
    answers = correctAnswers(a);
  for (const [id, value] of Object.entries(answers)) await page.locator(`[id="${id}"]`).fill(value);
  await expect(page.locator('.exam-status [role=status]')).toHaveText('Saved to account');
  await page.reload();
  for (const [id, value] of Object.entries(answers))
    await expect(page.locator(`[id="${id}"]`)).toHaveValue(value);
  await page.getByRole('button', { name: 'Finish assessment', exact: true }).click();
  await page.getByRole('button', { name: 'Confirm submission', exact: true }).click();
  await expect(page.locator('.score-circle')).toHaveText('100%');
  await page.reload();
  await expect(page.getByRole('heading', { name: /Worked solution/ })).toBeVisible();
});

test('journal entries and the worksheet operate with protected grading', async ({ page }) => {
  await createUser(page.request, 'journal');
  await page.goto('/learn/far/journal');
  await page.getByRole('button', { name: 'Start assessment', exact: true }).click();
  const a = await current(page),
    item = privateAttempt(a.id).items[0];
  if (item.kind !== 'journal') throw new Error();
  for (const [i, row] of item.journal.correctEntries.entries()) {
    await page.getByLabel(`Row ${i + 1} account`, { exact: true }).selectOption(row.account);
    if (row.debit)
      await page.getByLabel(`Row ${i + 1} debit`, { exact: true }).fill(String(row.debit));
    if (row.credit)
      await page.getByLabel(`Row ${i + 1} credit`, { exact: true }).fill(String(row.credit));
  }
  await expect(page.locator('.exam-status [role=status]')).toHaveText('Saved to account');
  await page.getByRole('button', { name: 'Check answer', exact: true }).click();
  await expect(page.locator('.feedback')).toContainText('Correct');
  await page.getByText('Calculator, worksheet & notes', { exact: true }).click();
  await page.getByLabel('Cell A1', { exact: true }).fill('10');
  await page.getByLabel('Cell A2', { exact: true }).fill('20');
  await page.getByLabel('Cell B1', { exact: true }).fill('=SUM(A1:A2)*2');
  await expect(page.locator('.worksheet-table output')).toHaveText('60');
  await page.getByRole('button', { name: 'Save workspace', exact: true }).click();
  await page.reload();
  await page.getByText('Calculator, worksheet & notes', { exact: true }).click();
  await expect(page.getByLabel('Cell B1', { exact: true })).toHaveValue('=SUM(A1:A2)*2');
});

test('account isolation, origin checks, stale versions, and reset generation prevent unwanted writes', async ({
  page,
  browser,
}) => {
  const user = await createUser(page.request, 'owner');
  let a = await start(page.request, { source: 'activity', activityId: 'fundamentals-final' });
  const other = await browser.newContext({ baseURL: ORIGIN });
  await createUser(other.request, 'other');
  expect((await other.request.get(`/api/attempts/${a.id}/`)).status()).toBe(404);
  expect((await other.request.get('/api/admin/content/')).status()).toBe(403);
  const cross = await page.request.post('/api/progress/', {
    headers: { ...headers(), Origin: 'https://other.invalid' },
    data: { lessonId: 'fundamentals-l1', completed: true },
  });
  expect(cross.status()).toBe(403);
  const old = a.version;
  a = await act(page.request, a, { action: 'flag', itemId: a.current!.id });
  expect(
    (
      await page.request.patch(`/api/attempts/${a.id}/`, {
        headers: headers(),
        data: { action: 'flag', itemId: a.current!.id, version: old },
      })
    ).status(),
  ).toBe(409);
  const rejected = await page.request.post('/api/account/', {
    headers: headers(),
    data: { action: 'reset-progress', confirmation: 'reset', password: PASSWORD },
  });
  expect(rejected.status()).toBe(400);
  const reset = await page.request.post('/api/account/', {
    headers: headers(),
    data: { action: 'reset-progress', confirmation: 'RESET ALL PROGRESS', password: PASSWORD },
  });
  const clean = await reset.json();
  expect(clean.user.id).toBe(user.id);
  expect(clean.attempts).toEqual({});
  expect(clean.generation).toBe(1);
  expect(
    (
      await page.request.post('/api/progress/', {
        headers: headers(0),
        data: { lessonId: 'fundamentals-l1', completed: true },
      })
    ).status(),
  ).toBe(409);
  expect((await page.request.get(`/api/attempts/${a.id}/`)).status()).toBe(404);
  expect((await other.request.get('/api/progress/')).ok()).toBe(true);
  await other.close();
});

test('legacy progress imports, portable exports, and deliberate UI reset work', async ({
  page,
}) => {
  await createUser(page.request, 'backup');
  await page.goto('/progress');
  await page.evaluate(() => localStorage.setItem('fundamentalsLesson1', 'true'));
  await page.getByRole('button', { name: 'Import my local progress', exact: true }).click();
  await expect(
    page.getByRole('status').filter({ hasText: 'Progress imported into your account' }),
  ).toBeVisible();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export account data', exact: true }).click();
  const downloaded = await downloadPromise;
  const backup = JSON.parse(fs.readFileSync((await downloaded.path())!, 'utf8'));
  expect(backup.completedLessons['fundamentals-l1']).toBeTruthy();
  expect(JSON.stringify(backup)).not.toMatch(/correctChoiceId|password_hash|token_hash/);
  await page.goto('/account');
  await page.getByRole('button', { name: 'Reset all progress', exact: true }).click();
  const dialog = page.getByRole('dialog');
  await dialog.getByLabel('Type RESET ALL PROGRESS', { exact: true }).fill('RESET ALL PROGRESS');
  await dialog.getByLabel('Current password', { exact: true }).fill(PASSWORD);
  await dialog.getByRole('button', { name: 'Confirm permanent reset', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard', exact: true })).toBeVisible();
  await expect(page.getByText(/0 of 202 lessons completed/)).toBeVisible();
});

test('verification and recovery tokens are single-use and password recovery revokes sessions', async ({
  page,
  browser,
}) => {
  const user = await createUser(page.request, 'recovery');
  const usedToken = new URL(mailLink(user.email, 'verify-email')).searchParams.get('token');
  expect(
    (
      await page.request.post('/api/auth/verify-email/', {
        headers: headers(),
        data: { token: usedToken },
      })
    ).status(),
  ).toBe(400);
  const second = await browser.newContext({ baseURL: ORIGIN });
  await second.request.post('/api/auth/sign-in/', {
    headers: headers(),
    data: { email: user.email, password: PASSWORD },
  });
  await page.request.post('/api/auth/forgot-password/', {
    headers: headers(),
    data: { email: user.email },
  });
  const token = new URL(mailLink(user.email, 'reset-password')).searchParams.get('token');
  const password = PASSWORD + 'New';
  expect(
    (
      await page.request.post('/api/auth/reset-password/', {
        headers: headers(),
        data: { token, password },
      })
    ).status(),
  ).toBe(200);
  expect((await second.request.get('/api/auth/session/')).status()).toBe(401);
  expect(
    (
      await page.request.post('/api/auth/reset-password/', {
        headers: headers(),
        data: { token, password },
      })
    ).status(),
  ).toBe(400);
  expect(
    (
      await page.request.post('/api/auth/sign-in/', {
        headers: headers(),
        data: { email: user.email, password },
      })
    ).status(),
  ).toBe(200);
  expect(
    (
      await page.request.post('/api/account/', {
        headers: headers(),
        data: { action: 'delete-account', confirmation: 'DELETE MY ACCOUNT', password },
      })
    ).status(),
  ).toBe(200);
  expect((await page.request.get('/api/auth/session/')).status()).toBe(401);
  await second.close();
});

test('Discipline choice remains free, diagnostics and analytics are available', async ({
  page,
}) => {
  await createUser(page.request, 'discipline');
  await page.goto('/learn/disciplines');
  await expect(
    page.getByText('Build evidence for a personalized recommendation', { exact: true }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Choose TCP', exact: true }).click();
  await expect(page.getByRole('button', { name: '✓ Selected', exact: true })).toBeDisabled();
  await page.getByRole('link', { name: 'Take diagnostic', exact: true }).nth(1).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('ISC Diagnostic');
  await page.getByRole('button', { name: 'Start assessment', exact: true }).click();
  await expect(page).toHaveURL(/section=isc.*attempt=/);
  expect((await current(page)).total).toBe(20);
  await page.goto('/review');
  await expect(
    page.getByRole('heading', { name: 'Topic evidence & next steps', exact: true }),
  ).toBeVisible();
});

test('administrator revisions are isolated until published and role-protected', async ({
  page,
}) => {
  const user = await createUser(page.request, 'admin');
  expect((await page.request.get('/api/admin/blueprints/')).status()).toBe(403);
  executeSql('UPDATE users SET role=? WHERE id=?', 'admin', user.id);
  const response = await page.request.get('/api/admin/content/question/fundamentals-m0-q1-final/');
  expect(response.ok(), await response.text()).toBe(true);
  const data = await response.json();
  data.content.explanation += ' Additional reviewed clarification.';
  const draft = await page.request.post('/api/admin/content/', {
    headers: headers(),
    data: {
      kind: 'question',
      id: data.content.id,
      content: data.content,
      note: 'Reviewed test clarification',
    },
  });
  expect(draft.status()).toBe(201);
  const revision = (await draft.json()).revision;
  expect(
    (
      await page.request.patch(`/api/admin/content/question/${data.content.id}/`, {
        headers: headers(),
        data: { revision, status: 'published' },
      })
    ).ok(),
  ).toBe(true);
  await page.goto('/admin');
  await expect(
    page.getByRole('heading', { name: 'Versioned curriculum editor', exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Curriculum coverage audit', exact: true }),
  ).toBeVisible();
});

test('mobile layout, navigation and account-backed dashboard fit the viewport', async ({
  page,
}) => {
  await createUser(page.request, 'mobile');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Continue learning →', exact: true })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(
    true,
  );
  await page.screenshot({ path: '/tmp/opencode/cpa-platform-mobile.png', fullPage: true });
  await page.getByRole('navigation').getByRole('link', { name: 'Learn', exact: true }).click();
  await expect(
    page.getByRole('heading', { name: 'Explore every Discipline', exact: true }),
  ).toBeVisible();
});

test('email and password changes invalidate obsolete recovery and change tokens', async ({
  page,
}) => {
  const user = await createUser(page.request, 'identity-change');
  await page.request.post('/api/auth/forgot-password/', {
    headers: headers(),
    data: { email: user.email },
  });
  const oldReset = new URL(mailLink(user.email, 'reset-password')).searchParams.get('token');
  const newEmail = `changed-${crypto.randomUUID()}@cpa.test`;
  expect(
    (
      await page.request.post('/api/auth/change-email/', {
        headers: headers(),
        data: { email: newEmail, password: PASSWORD },
      })
    ).status(),
  ).toBe(200);
  const confirmation = new URL(mailLink(newEmail, 'confirm-email')).searchParams.get('token');
  expect(
    (
      await page.request.post('/api/auth/confirm-email/', {
        headers: headers(),
        data: { token: confirmation },
      })
    ).status(),
  ).toBe(200);
  expect((await page.request.get('/api/auth/session/')).status()).toBe(401);
  expect(
    (
      await page.request.post('/api/auth/reset-password/', {
        headers: headers(),
        data: { token: oldReset, password: PASSWORD + 'obsolete' },
      })
    ).status(),
  ).toBe(400);
  expect(
    (
      await page.request.post('/api/auth/sign-in/', {
        headers: headers(),
        data: { email: newEmail, password: PASSWORD },
      })
    ).status(),
  ).toBe(200);
  const pendingEmail = `pending-${crypto.randomUUID()}@cpa.test`;
  await page.request.post('/api/auth/change-email/', {
    headers: headers(),
    data: { email: pendingEmail, password: PASSWORD },
  });
  const pending = new URL(mailLink(pendingEmail, 'confirm-email')).searchParams.get('token');
  expect(
    (
      await page.request.post('/api/auth/change-password/', {
        headers: headers(),
        data: { currentPassword: PASSWORD, password: PASSWORD + 'updated' },
      })
    ).status(),
  ).toBe(200);
  expect(
    (
      await page.request.post('/api/auth/confirm-email/', {
        headers: headers(),
        data: { token: pending },
      })
    ).status(),
  ).toBe(400);
});
