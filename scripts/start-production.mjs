import fs from 'node:fs';
import path from 'node:path';
for (const file of ['.env.local', '.env']) if (fs.existsSync(file)) process.loadEnvFile(file);
process.env.DATABASE_PATH = path.resolve(process.env.DATABASE_PATH || 'data/cpa-study.sqlite');
process.env.HOSTNAME = process.env.APP_HOST || '0.0.0.0';
await import('../.next/standalone/server.js');
