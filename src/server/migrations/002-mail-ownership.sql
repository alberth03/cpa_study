ALTER TABLE email_outbox ADD COLUMN user_id TEXT REFERENCES users(id) ON DELETE CASCADE;
CREATE INDEX email_outbox_user ON email_outbox(user_id);
