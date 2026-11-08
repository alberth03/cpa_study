import nodemailer from 'nodemailer';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { all, one, run } from './db.ts';
import { mailDisabled } from './environment.ts';

interface Mail {
  id: string;
  recipient: string;
  subject: string;
  text_body: string;
  attempts: number;
}
export async function deliver(id: string) {
  if (mailDisabled()) return;
  const mail = one<Mail>('SELECT * FROM email_outbox WHERE id=? AND sent_at IS NULL', id);
  if (!mail) return;
  try {
    if (
      process.env.NODE_ENV !== 'production' &&
      (process.env.MAIL_DELIVERY || 'preview') === 'preview'
    ) {
      const directory = path.resolve(process.env.MAIL_PREVIEW_DIR || 'data/mail-preview');
      await mkdir(directory, { recursive: true, mode: 0o700 });
      await writeFile(
        path.join(directory, `${mail.id}.txt`),
        `To: ${mail.recipient}\nSubject: ${mail.subject}\n\n${mail.text_body}`,
        { mode: 0o600 },
      );
    } else {
      if (!process.env.SMTP_HOST || !process.env.MAIL_FROM)
        throw new Error('SMTP_HOST and MAIL_FROM are required for email delivery.');
      const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === 'true',
        requireTLS: process.env.SMTP_HOST !== '127.0.0.1' && process.env.SMTP_SECURE !== 'true',
        auth: process.env.SMTP_USER
          ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD }
          : undefined,
        connectionTimeout: 10000,
        socketTimeout: 10000,
      });
      await transport.sendMail({
        from: process.env.MAIL_FROM,
        to: mail.recipient,
        subject: mail.subject,
        text: mail.text_body,
      });
      transport.close();
    }
    run(
      'UPDATE email_outbox SET sent_at=?,text_body=?,last_error=NULL,attempts=attempts+1 WHERE id=?',
      new Date().toISOString(),
      '[delivered]',
      id,
    );
  } catch (error) {
    run(
      'UPDATE email_outbox SET attempts=attempts+1,last_error=? WHERE id=?',
      error instanceof Error ? error.message : 'Delivery failed',
      id,
    );
    console.error('Email delivery is pending. Check the server mail configuration.');
  }
}
export async function sendMail(recipient: string, subject: string, text: string, userId: string) {
  if (mailDisabled()) return;
  const id = crypto.randomUUID();
  run(
    'INSERT INTO email_outbox(id,recipient,subject,text_body,created_at,user_id) VALUES(?,?,?,?,?,?)',
    id,
    recipient,
    subject,
    text,
    new Date().toISOString(),
    userId,
  );
  await deliver(id);
}
export async function flushMail() {
  if (mailDisabled()) return 0;
  const pending = all<{ id: string }>(
    'SELECT id FROM email_outbox WHERE sent_at IS NULL AND attempts<10 ORDER BY created_at LIMIT 100',
  );
  for (const mail of pending) await deliver(mail.id);
  run(
    'DELETE FROM email_outbox WHERE sent_at IS NOT NULL AND created_at<?',
    new Date(Date.now() - 7 * 86400000).toISOString(),
  );
  return pending.length;
}
