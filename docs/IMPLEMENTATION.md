# Platform implementation record

Source specification: `docs/CPA Exam Preparation Platform.docx`.

The previous refactor is retained: App Router routes, feature folders, shared components, pure domain functions, and structured course content. The specification's account and intellectual-property requirements require a Node.js server rather than a public static export.

## Requirements tracked

- Six CPA sections plus the existing foundational courses: curriculum, checks, module practice, simulations, cumulative finals.
- Protected question delivery and server-only grading; explanations are released according to tutor/exam mode.
- Email/password registration, verification, recovery, password/email changes, session listing/revocation, sign-out, and isolated database-backed accounts.
- Custom practice by section, module, area, topic, question type, difficulty, count, familiarity, weaknesses, tutor/exam mode, and optional timer.
- Full-length five-testlet mocks with server-enforced four-hour limits, irreversible submitted testlets, and the scheduled 15-minute break after testlet 3.
- Persistent results, blueprint/topic analytics, trends, repeated errors, unseen-vs-familiar performance, retention, readiness evidence, and actionable study assignments.
- BAR/ISC/TCP comparison, evidence-based suitability, uncertainty, direct diagnostics, optional career interests, and free Discipline selection.
- Account settings, data export/import, deliberately confirmed progress reset, and separate account deletion.
- Restricted content revisions, publish/archive controls, blueprint coverage audits, change-review queues, and source/tax-period version metadata.
- Responsive and keyboard-accessible learning and assessment interfaces with saved drafts and conflict handling.

## Reference decisions

- Official 2026 blueprint and testlet counts were checked against AICPA sources on 2026-11-08.
- ISC uses 60% MCQ / 40% TBS weighting; the other five use 50% / 50%. These are internal practice percentages, not official scaled CPA scores.
- 2027 blueprint changes are recorded as a review queue. Content is not silently relabeled as a later tax-law/blueprint edition.
- The existing FAR course final retains its 11/12/11/4/4/8 module selection. The document's 10/10/10/7/6/7 figure is historical and does not describe the supplied source.
- Full mocks use the three official FAR content areas. The existing advanced governmental lessons remain available as supplemental FAR study and support BAR; internal modules are not presented as official blueprint areas.
- Production uses a persistent SQLite database with transaction-backed updates. SMTP is configurable; local development uses private email-preview files. No public verification-token bypass or default administrator is created.

## Development follow-up

- The running local environment uses `NODE_ENV=development` and `MAIL_DELIVERY=disabled`. Signup and existing local accounts work without email verification. Production still requires verification, and the local bypass does not populate `email_verified_at`.
- Disabled mail does not send, write previews, enqueue messages, or issue verification tokens. Set `MAIL_DELIVERY=preview` or `smtp` to test email-dependent account actions.
- Shared FAR concepts now have one canonical topic entry with multiple `lessonIds` and `groupIds`. Existing topic IDs and saved history are retained; dropdowns and analytics no longer duplicate those concepts.
- `npm run test:dev` exercises the real running development site with a temporary account, including signup, all course topic selectors, both overlapping FAR modules, practice, grading, review, and account navigation. It checks React key/hydration errors and deletes its own account afterward.
- Follow-up checks: TypeScript and lint pass; 28 unit tests pass; the live development browser check passes.

## Delivered inventory

- Eight courses: the six CPA sections plus Fundamentals and Intermediate.
- 202 lessons, 1,480 distinct MCQs including lesson checks, 119 simulations, and 40 journal cases.
- All original 120 lessons remain in the curriculum. The original application remains in `legacy/`.
- Topic/module/learning/cumulative practice have explicit scope behavior; weakness practice shares Review's evidence model.
- Account storage uses SQLite migrations and optimistic attempt versions. Reset generations block stale browser/device writes.
- Production artifacts use Next standalone output, with private content tracing and no public answer-bank JSON files.

## Verification results

- Production build and TypeScript validation: passed.
- ESLint with zero warnings: passed.
- Unit tests: 24 passed.
- Production browser/API regression tests: 15 passed, using a real local SMTP transport and an isolated test database.
- Production dependency audit: zero reported vulnerabilities at the verification checkpoint.
- Tests cover all 202 lesson routes, all module simulations, official mock structures, break redaction, clocks, ownership, source-key protection, recovery token revocation, imports, reset/deletion, admin authorization, and mobile layout.

## Editorial and release boundaries

The software feature set and automated checks do not establish that every AICPA representative task has received expert instructional review. The task IDs are an explicit internal learning-objective register. Admin coverage reports expose topics without direct simulation mappings and possible duplicates, including legacy material. The 2027 changes remain a review queue rather than being silently applied to 2026 tax content.

Before a public production launch, configure actual SMTP delivery, a persistent writable database volume, HTTPS, and the operator's contact/retention policies. Deployment instructions and operational commands are in `README.md`. No external hosting account has been provisioned or public deployment performed by this implementation.
