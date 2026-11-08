import './env.ts';
import { flushMail } from '../src/server/mail.ts';
console.log(`Processed ${await flushMail()} queued messages.`);
