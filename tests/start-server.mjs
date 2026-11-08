import fs from 'node:fs';
import path from 'node:path';
import net from 'node:net';
import { spawn } from 'node:child_process';
import { randomUUID } from 'node:crypto';

const database = path.resolve('data/e2e.sqlite'),
  mailDir = path.resolve('data/e2e-mail');
fs.mkdirSync(path.dirname(database), { recursive: true });
for (const suffix of ['', '-wal', '-shm']) fs.rmSync(database + suffix, { force: true });
fs.rmSync(mailDir, { recursive: true, force: true });
fs.mkdirSync(mailDir, { recursive: true, mode: 0o700 });
// Local SMTP sink exercises real Nodemailer delivery without contacting people.
const smtp = net.createServer((socket) => {
  socket.setEncoding('utf8');
  socket.write('220 local-test ESMTP\r\n');
  let buffer = '',
    dataMode = false;
  socket.on('data', (chunk) => {
    buffer += chunk;
    while (true) {
      if (dataMode) {
        const end = buffer.indexOf('\r\n.\r\n');
        if (end < 0) return;
        fs.writeFileSync(path.join(mailDir, `${randomUUID()}.eml`), buffer.slice(0, end), {
          mode: 0o600,
        });
        buffer = buffer.slice(end + 5);
        dataMode = false;
        socket.write('250 queued\r\n');
        continue;
      }
      const end = buffer.indexOf('\r\n');
      if (end < 0) return;
      const line = buffer.slice(0, end);
      buffer = buffer.slice(end + 2);
      if (/^EHLO|^HELO/i.test(line)) socket.write('250-local-test\r\n250 SIZE 1048576\r\n');
      else if (/^DATA/i.test(line)) {
        dataMode = true;
        socket.write('354 send data\r\n');
      } else if (/^QUIT/i.test(line)) {
        socket.end('221 bye\r\n');
        return;
      } else socket.write('250 ok\r\n');
    }
  });
});
smtp.listen(3101, '127.0.0.1', () => {
  const child = spawn(
    process.execPath,
    ['.next/standalone/server.js'],
    {
      stdio: 'inherit',
      env: {
        ...process.env,
        NODE_ENV: 'production',
        PORT: '3100',
        HOSTNAME: '127.0.0.1',
        APP_URL: 'http://127.0.0.1:3100',
        DATABASE_PATH: database,
        SMTP_HOST: '127.0.0.1',
        SMTP_PORT: '3101',
        SMTP_SECURE: 'false',
        SMTP_USER: '',
        SMTP_PASSWORD: '',
        MAIL_FROM: 'CPA Study <noreply@cpa.test>',
        MAIL_DELIVERY: 'smtp',
      },
    },
  );
  const stop = () => {
    child.kill('SIGTERM');
    smtp.close();
  };
  process.on('SIGTERM', stop);
  process.on('SIGINT', stop);
  child.on('exit', (code) => {
    smtp.close();
    process.exitCode = code || 0;
  });
});
