import { chromium, expect } from '@playwright/test';
import { DatabaseSync } from 'node:sqlite';
import fs from 'node:fs';
import path from 'node:path';

if (fs.existsSync('.env.local')) process.loadEnvFile('.env.local');
const base = process.env.APP_URL || 'http://localhost:3000';
if (!['localhost', '127.0.0.1', '[::1]'].includes(new URL(base).hostname))
  throw new Error('This check is for a local development server.');
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => {
  if (
    m.type() === 'error' &&
    /same key|unique.*key|hydration|Content Security Policy/i.test(m.text())
  )
    errors.push(m.text());
});
const email = `local-qa-${crypto.randomUUID()}@cpa.test`,
  password = 'Local-QA-Passphrase-42!';
let signedIn = false;
try {
  await page.goto(`${base}/register`);
  await expect(
    page.getByText(/Development mode: email delivery and verification are disabled/),
  ).toBeVisible();
  await page.getByLabel('Your name', { exact: true }).fill('Local QA');
  await page.getByLabel('Email address', { exact: true }).fill(email);
  await page.getByLabel('New password', { exact: true }).fill(password);
  await page.getByLabel('Confirm password', { exact: true }).fill(password);
  await page.getByRole('button', { name: 'Create account', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('Email verification is disabled');
  await page.getByRole('link', { name: 'Continue to sign in', exact: true }).click();
  await page.getByLabel('Email address', { exact: true }).fill(email);
  await page.getByLabel('Password', { exact: true }).fill(password);
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard', exact: true })).toBeVisible();
  signedIn = true;
  const db = new DatabaseSync(path.resolve(process.env.DATABASE_PATH || 'data/cpa-study.sqlite'), {
    readOnly: true,
  });
  const user = db.prepare('SELECT id,email_verified_at FROM users WHERE email=?').get(email);
  expect(user.email_verified_at).toBeNull();
  expect(
    db.prepare('SELECT COUNT(*) total FROM email_outbox WHERE user_id=?').get(user.id).total,
  ).toBe(0);
  expect(
    db.prepare('SELECT COUNT(*) total FROM auth_tokens WHERE user_id=?').get(user.id).total,
  ).toBe(0);
  db.close();
  await page.goto(`${base}/practice`);
  const course = page.getByRole('combobox', { name: 'Course', exact: true }),
    topic = page.getByRole('combobox', { name: 'Topic', exact: true });
  for (const section of [
    'fundamentals',
    'intermediate',
    'far',
    'aud',
    'reg',
    'bar',
    'isc',
    'tcp',
  ]) {
    await course.selectOption(section);
    const ids = await topic.locator('option').evaluateAll((options) => options.map((o) => o.value));
    expect(new Set(ids).size).toBe(ids.length);
  }
  await course.selectOption('far');
  for (const moduleId of ['2', '3']) {
    await page.getByRole('combobox', { name: 'Module', exact: true }).selectOption(moduleId);
    await expect(topic.locator('option[value="far-contingencies-commitments"]')).toHaveCount(1);
  }
  await topic.selectOption('far-contingencies-commitments');
  await page.getByLabel('Number of items', { exact: true }).fill('2');
  await page.getByRole('button', { name: 'Start custom practice', exact: true }).click();
  await page.waitForURL(/attempt=/);
  for (let i = 0; i < 2; i++) {
    await expect(page.locator('.exam-status')).toContainText(`Item ${i + 1} of 2`);
    await page.locator('.answer-button').first().click();
    await expect(page.locator('.exam-status [role=status]')).toHaveText('Saved to account');
    await page.getByRole('button', { name: 'Check answer', exact: true }).click();
    if (i === 0) await page.getByRole('button', { name: 'Next item →', exact: true }).click();
  }
  await page.getByRole('button', { name: 'Finish assessment', exact: true }).click();
  await page.getByRole('button', { name: 'Confirm submission', exact: true }).click();
  await expect(page.locator('.score-circle')).toBeVisible();
  for (const route of [
    '/review',
    '/learn',
    '/learn/disciplines',
    '/mock-exams',
    '/progress',
    '/account',
  ]) {
    await page.goto(base + route);
    await expect(page.locator('main h1')).toBeVisible();
    if (route === '/review')
      await page
        .getByRole('heading', { name: 'Topic evidence & next steps', exact: true })
        .waitFor();
    if (route === '/learn/disciplines')
      await page
        .getByText(/relevant Core items/)
        .first()
        .waitFor();
    if (route === '/progress')
      await expect(
        page.getByRole('button', { name: 'Import my local progress', exact: true }),
      ).toBeEnabled();
    if (route === '/account')
      await expect(
        page.getByRole('button', { name: 'Save preferences', exact: true }),
      ).toBeEnabled();
  }
  const analytics = await (await page.request.get(`${base}/api/analytics/`)).json();
  expect(new Set(analytics.topics.map((t) => t.id)).size).toBe(analytics.topics.length);
  await page.goto(`${base}/practice`);
  await page.getByRole('combobox', { name: 'Topic', exact: true }).waitFor();
  await page.getByRole('status').filter({ hasText: 'match your selection' }).waitFor();
  await page.screenshot({
    path: '/tmp/opencode/cpa-development-practice.png',
    fullPage: true,
    caret: 'initial',
  });
  expect(errors).toEqual([]);
  console.log(
    'PASS: local registration/sign-in without email; unique topics across all courses and both FAR modules; practice, grading, review, account and main navigation; no React key/hydration errors.',
  );
} finally {
  if (signedIn)
    await page.request.post(`${base}/api/account/`, {
      headers: { Origin: base },
      data: { action: 'delete-account', confirmation: 'DELETE MY ACCOUNT', password },
    });
  await browser.close();
}
