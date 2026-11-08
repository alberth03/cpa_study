CREATE TABLE IF NOT EXISTS schema_migrations (version INTEGER PRIMARY KEY, applied_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS users (
 id TEXT PRIMARY KEY, email TEXT NOT NULL UNIQUE COLLATE NOCASE, name TEXT NOT NULL,
 password_hash TEXT NOT NULL, email_verified_at TEXT, role TEXT NOT NULL DEFAULT 'student' CHECK(role IN ('student','admin')),
 created_at TEXT NOT NULL, updated_at TEXT NOT NULL, progress_generation INTEGER NOT NULL DEFAULT 0,
 preferences_json TEXT NOT NULL DEFAULT '{}', legacy_imported INTEGER NOT NULL DEFAULT 0
);
CREATE TABLE IF NOT EXISTS sessions (
 token_hash TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
 created_at TEXT NOT NULL, expires_at INTEGER NOT NULL, last_seen_at INTEGER NOT NULL, user_agent TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS sessions_user ON sessions(user_id);
CREATE INDEX IF NOT EXISTS sessions_expiry ON sessions(expires_at);
CREATE TABLE IF NOT EXISTS auth_tokens (
 token_hash TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
 purpose TEXT NOT NULL CHECK(purpose IN ('verify','reset','email-change')), value TEXT,
 expires_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS auth_tokens_user ON auth_tokens(user_id,purpose);
CREATE TABLE IF NOT EXISTS lesson_progress (
 user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE, lesson_id TEXT NOT NULL,
 read_at TEXT NOT NULL, completed_at TEXT, mastered_at TEXT,
 PRIMARY KEY(user_id,lesson_id)
);
CREATE TABLE IF NOT EXISTS attempts (
 id TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE, activity_id TEXT NOT NULL,
 section TEXT NOT NULL, status TEXT NOT NULL, kind TEXT NOT NULL, started_at TEXT NOT NULL, submitted_at TEXT,
 version INTEGER NOT NULL, data_json TEXT NOT NULL, imported INTEGER NOT NULL DEFAULT 0,
 import_legacy_id TEXT, UNIQUE(user_id, import_legacy_id)
);
CREATE INDEX IF NOT EXISTS attempts_user_time ON attempts(user_id,started_at DESC);
CREATE INDEX IF NOT EXISTS attempts_user_section ON attempts(user_id,section,status);
CREATE TABLE IF NOT EXISTS question_history (
 user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE, item_id TEXT NOT NULL,
 seen_count INTEGER NOT NULL DEFAULT 0, correct_count INTEGER NOT NULL DEFAULT 0, graded_count INTEGER NOT NULL DEFAULT 0,
 last_correct INTEGER, last_seen_at TEXT NOT NULL, PRIMARY KEY(user_id,item_id)
);
CREATE TABLE IF NOT EXISTS imported_scores (
 user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE, activity_id TEXT NOT NULL,
 best REAL, last REAL, mastered INTEGER NOT NULL DEFAULT 0, PRIMARY KEY(user_id,activity_id)
);
CREATE TABLE IF NOT EXISTS study_assignments (
 id TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
 topic_id TEXT NOT NULL, title TEXT NOT NULL, lesson_id TEXT, status TEXT NOT NULL DEFAULT 'open',
 created_at TEXT NOT NULL, completed_at TEXT, UNIQUE(user_id,topic_id)
);
CREATE TABLE IF NOT EXISTS rate_limits (key TEXT PRIMARY KEY, hits INTEGER NOT NULL, window_end INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS email_outbox (
 id TEXT PRIMARY KEY, recipient TEXT NOT NULL, subject TEXT NOT NULL, text_body TEXT NOT NULL,
 created_at TEXT NOT NULL, sent_at TEXT, attempts INTEGER NOT NULL DEFAULT 0, last_error TEXT
);
CREATE TABLE IF NOT EXISTS content_revisions (
 id TEXT PRIMARY KEY, content_id TEXT NOT NULL, kind TEXT NOT NULL, revision INTEGER NOT NULL,
 data_json TEXT NOT NULL, status TEXT NOT NULL CHECK(status IN ('draft','published','archived')),
 author_id TEXT REFERENCES users(id) ON DELETE SET NULL, created_at TEXT NOT NULL, note TEXT NOT NULL,
 UNIQUE(content_id,kind,revision)
);
CREATE INDEX IF NOT EXISTS content_published ON content_revisions(content_id,kind,status,revision DESC);
CREATE TABLE IF NOT EXISTS blueprint_changes (
 id TEXT PRIMARY KEY, edition INTEGER NOT NULL, section TEXT NOT NULL, topic_ids_json TEXT NOT NULL,
 description TEXT NOT NULL, source_url TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'needs-review',
 reviewed_by TEXT REFERENCES users(id) ON DELETE SET NULL, reviewed_at TEXT, notes TEXT NOT NULL DEFAULT ''
);
CREATE TABLE IF NOT EXISTS audit_events (
 id TEXT PRIMARY KEY, actor_id TEXT REFERENCES users(id) ON DELETE SET NULL, action TEXT NOT NULL,
 target_id TEXT, details TEXT NOT NULL DEFAULT '', created_at TEXT NOT NULL
);
