import './env.ts';
import { database } from '../src/server/db.ts';
database();
console.log('CPA Study database migrations applied.');
