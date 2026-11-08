import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  workers: 1,
  timeout: 60000,
  use: { baseURL: 'http://127.0.0.1:3100', trace: 'retain-on-failure' },
  webServer: {
    command: 'node tests/start-server.mjs',
    url: 'http://127.0.0.1:3100/api/health',
    reuseExistingServer: false,
    timeout: 120000,
  },
});
