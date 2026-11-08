import { DatabaseSync, type SQLInputValue } from 'node:sqlite';
import { mkdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

const databases = globalThis as typeof globalThis & {
  __cpaDb?: DatabaseSync;
  __cpaDbPath?: string;
};
export function database() {
  const file = process.env.DATABASE_PATH || path.join(process.cwd(), 'data', 'cpa-study.sqlite');
  if (databases.__cpaDb && databases.__cpaDbPath === file) return databases.__cpaDb;
  if (file !== ':memory:')
    mkdirSync(path.dirname(path.resolve(/* turbopackIgnore: true */ file)), { recursive: true, mode: 0o700 });
  const db = new DatabaseSync(file);
  db.exec('PRAGMA foreign_keys = ON; PRAGMA busy_timeout = 5000; PRAGMA journal_mode = WAL;');
  db.exec(readFileSync(path.join(process.cwd(), 'src/server/migrations/001-platform.sql'), 'utf8'));
  db.prepare('INSERT OR IGNORE INTO schema_migrations(version,applied_at) VALUES(1,?)').run(
    new Date().toISOString(),
  );
  if(!db.prepare('SELECT version FROM schema_migrations WHERE version=2').get()) {
    db.exec('BEGIN IMMEDIATE');
    try {
      db.exec(readFileSync(path.join(process.cwd(),'src/server/migrations/002-mail-ownership.sql'),'utf8'));
      db.prepare('INSERT INTO schema_migrations(version,applied_at) VALUES(2,?)').run(new Date().toISOString());
      db.exec('COMMIT');
    } catch(error){db.exec('ROLLBACK');throw error;}
  }
  databases.__cpaDb = db;
  databases.__cpaDbPath = file;
  return db;
}
export function one<T>(sql: string, ...params: SQLInputValue[]) {
  return database()
    .prepare(sql)
    .get(...params) as T | undefined;
}
export function all<T>(sql: string, ...params: SQLInputValue[]) {
  return database()
    .prepare(sql)
    .all(...params) as T[];
}
export function run(sql: string, ...params: SQLInputValue[]) {
  return database()
    .prepare(sql)
    .run(...params);
}
export function transaction<T>(fn: () => T): T {
  const db = database();
  db.exec('BEGIN IMMEDIATE');
  try {
    const value = fn();
    db.exec('COMMIT');
    return value;
  } catch (error) {
    db.exec('ROLLBACK');
    throw error;
  }
}
export function audit(actor: string | null, action: string, target: string | null, details = '') {
  run(
    'INSERT INTO audit_events(id,actor_id,action,target_id,details,created_at) VALUES(?,?,?,?,?,?)',
    crypto.randomUUID(),
    actor,
    action,
    target,
    details,
    new Date().toISOString(),
  );
}
