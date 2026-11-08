import fs from 'node:fs';
import path from 'node:path';
const destination = path.resolve('.next/standalone');
if (!fs.existsSync(path.join(destination, 'server.js')))
  throw new Error('Run next build before packaging standalone assets.');
for (const [source, target] of [
  ['.next/static', '.next/static'],
  ['public', 'public'],
  ['src/server/db.ts', 'src/server/db.ts'],
  ['src/server/mail.ts', 'src/server/mail.ts'],
  ['src/server/environment.ts', 'src/server/environment.ts'],
  ...['env.ts', 'grant-admin.ts', 'migrate-db.ts', 'flush-mail.ts'].map((file) => [
    `scripts/${file}`,
    `scripts/${file}`,
  ]),
]) {
  const output = path.join(destination, target);
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.cpSync(source, output, { recursive: true });
}
console.log('Standalone server, static assets, and private operational tools packaged.');
