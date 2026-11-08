import { afterEach, describe, expect, it, vi } from 'vitest';
import { localAccountsWithoutEmail, mailDisabled } from '@/server/environment';
import { sendMail, flushMail } from '@/server/mail';
afterEach(() => vi.unstubAllEnvs());
describe('local account policy', () => {
  it('allows verification-free accounts only in development with disabled mail', () => {
    vi.stubEnv('NODE_ENV', 'development');
    vi.stubEnv('MAIL_DELIVERY', 'disabled');
    expect(localAccountsWithoutEmail()).toBe(true);
    vi.stubEnv('MAIL_DELIVERY', 'preview');
    expect(localAccountsWithoutEmail()).toBe(false);
    vi.stubEnv('MAIL_DELIVERY', 'smtp');
    expect(localAccountsWithoutEmail()).toBe(false);
  });
  it('never bypasses production or test verification', () => {
    vi.stubEnv('MAIL_DELIVERY', 'disabled');
    for (const mode of ['production', 'test'] as const) {
      vi.stubEnv('NODE_ENV', mode);
      expect(mailDisabled()).toBe(true);
      expect(localAccountsWithoutEmail()).toBe(false);
    }
  });
  it('does not enqueue or deliver messages when disabled', async () => {
    vi.stubEnv('MAIL_DELIVERY', 'disabled');
    vi.stubEnv('DATABASE_PATH', '/invalid/no-access/database.sqlite');
    await expect(
      sendMail('test@example.invalid', 'Unused', 'Unused', 'unused'),
    ).resolves.toBeUndefined();
    await expect(flushMail()).resolves.toBe(0);
  });
});
