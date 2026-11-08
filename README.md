# CPA Study

Next.js App Router + TypeScript CPA preparation platform with protected server-side grading, individual accounts, a persistent SQLite database, and a versioned curriculum.

## Start locally

Use **Node.js 22.18 or newer** (the server uses Node's SQLite API).

```sh
npm ci
cp .env.example .env.local
npm run db:migrate
npm run dev
```

Open the URL configured by `APP_URL`. With the local defaults (`NODE_ENV=development`, `MAIL_DELIVERY=disabled`), register and sign in immediately. No verification email, preview file, or queued message is created. Existing unverified local accounts can also sign in; the app does not mark their email addresses as genuinely verified in the database.

For testing email workflows, set `MAIL_DELIVERY=preview` and use links from private files under `data/mail-preview/`. Use `MAIL_DELIVERY=smtp` with SMTP credentials for real delivery. Production always requires verification, regardless of the local mail setting. Email-based recovery and email changes require enabling delivery.

If port 3000 is occupied, set `APP_URL=http://localhost:3001` and run `npm run dev -- --port 3001`. The configured origin and browser URL must match.

The database is initialized and migrated automatically on first use. `db:migrate` makes that step explicit. Original source is retained in `legacy/`.

## Included features

- Email/password registration, verification, password recovery, email/password changes, session management, sign-out, and administrator roles.
- Server-owned attempts and grading. Active responses contain only the current item and permitted feedback; answer keys and entire banks are not served publicly.
- All six CPA sections, plus Fundamentals and Intermediate Accounting.
- Custom MCQ/TBS/mixed practice with course, module, blueprint area, topic, difficulty, count, unseen/incorrect/weakness focus, tutor/exam feedback, and optional timing.
- Five-testlet full mocks, four-hour server timing, irreversible submitted testlets, scheduled and unscheduled breaks, flags, resume, and persistent results.
- Supporting exhibits, numeric/classification responses, journal entries, calculator, worksheet, and saved scratch notes.
- Topic and blueprint analytics, uncertainty, trends, recurring mistakes, first-exposure versus familiar performance, readiness evidence, and study assignments.
- Explainable BAR/ISC/TCP comparisons, direct diagnostics, optional career interests, and unrestricted Discipline selection.
- Account data export/import, legacy migration, deliberately confirmed progress reset, and separate account deletion.
- Restricted content drafts, revision history, publish/archive controls, coverage audits, and a blueprint-change review queue.

### Content inventory

| Course | Lessons | Bank MCQs | Simulations |
| --- | ---: | ---: | ---: |
| Fundamentals | 10 | 20 | — |
| Intermediate | 50 | 150 | — |
| FAR | 60 | 360 | 37 |
| AUD | 18 | 180 | 18 |
| REG | 15 | 150 | 15 |
| BAR | 20 | 210 | 20 |
| ISC | 15 | 150 | 15 |
| TCP | 14 | 140 | 14 |

Total: **202 lessons, 1,480 distinct MCQs including lesson checks, 119 simulations, and 40 journal-entry cases**. Newly authored lesson checks reuse their module-bank questions. The original 120 separate lesson checks account for the difference from the bank-MCQ column.

New material is independently authored with explanations, worked cases, and source/period metadata. Several BAR governmental lessons reuse and extend the project's original governmental material. The admin audit exposes direct topic/TBS mapping gaps and possible duplicates. Internal objective mappings and software tests are **not certification of complete AICPA representative-task coverage or expert editorial validation**; the review process is provided for that ongoing work.

## Blueprint and scoring policy

The published study edition is **2026**. Official format references were checked against AICPA sources on 2026-11-08. The 2027 change summary is recorded as a review queue; the app does not silently relabel tax content as a later edition.

| Section | Testlet 1 | Testlet 2 | Testlets 3 / 4 / 5 |
| --- | ---: | ---: | --- |
| FAR | 25 MCQs | 25 MCQs | 2 / 3 / 2 TBSs |
| AUD | 39 MCQs | 39 MCQs | 2 / 3 / 2 TBSs |
| REG | 36 MCQs | 36 MCQs | 2 / 3 / 3 TBSs |
| BAR | 25 MCQs | 25 MCQs | 2 / 3 / 2 TBSs |
| ISC | 41 MCQs | 41 MCQs | 1 / 3 / 2 TBSs |
| TCP | 34 MCQs | 34 MCQs | 2 / 3 / 2 TBSs |

Full mocks use blueprint-area allocations and exclude a simulation's mirrored MCQ cases. Lower-exposure items are prioritized. ISC's mock weighting is 60% MCQ / 40% TBS; other sections use 50% / 50%. TBSs are averaged by simulation before weighting. These are transparent **practice percentages**, not official scaled CPA scores or pass predictions.

Learning-reinforcement practice uses the most recently opened lesson in the selected scope when no topic is specified. Topic and module modes require their respective filters; cumulative mode balances across modules. Weakness practice uses the same evidence criteria as Review.

The scheduled break after testlet 3 pauses time for up to 15 minutes. Returning early grants only the time actually used. Other breaks keep time running. Server deadlines remain authoritative when the browser closes, goes offline, or changes its clock. Active-time analytics are estimates capped between interactions, separate from exam time.

The existing FAR course final retains its original 11/12/11/4/4/8 module selection. Full mocks use the three official FAR blueprint areas. Advanced governmental extensions remain available, with supplemental material excluded where appropriate from FAR mock sampling.

## Accounts and progress

Each record is scoped to its authenticated owner. Passwords use salted scrypt hashes. Session and verification/recovery tokens are random and stored as hashes. Sessions use HttpOnly, SameSite cookies and Secure cookies on HTTPS. Mutations enforce origin checks, input validation, rate limits, and server-side authorization. Timed breaks do not deliver the next question's content.

Attempts use optimistic versions to reject stale writes. A progress-generation counter prevents an old tab or device from recreating records after a reset. Successful resets clear study records and Discipline preferences, while login credentials remain. Account deletion also revokes sessions and deletes account-owned email records.

The browser retains only scoped unsent response drafts as a recovery measure. It does not retain answer keys. A conflicting draft requires an explicit choice; ordinary cross-device continuation uses the server state.

### Backups and migration

Use **Progress & backups** to export a portable study record or import a prior backup. Export excludes passwords, sessions, complete question text, and answer keys. Import regrades recognized item references, avoids duplicate attempt imports, and reports identifiers it cannot map.

For original browser progress, use **Import my local progress** while signed into the account that owns it. On an origin change, serve `legacy/` on the original origin and open `/export.html`, then import its downloaded JSON into the new app.

Imported history is marked separately and excluded from readiness and Discipline evidence because its original provenance cannot be verified. Imported active mocks become untimed review assessments. For exact timed continuation, sign into the same account rather than exporting/importing. In-memory-only historical results cannot be recovered.

## Production deployment

This version requires a **Node.js server and persistent storage**. It no longer produces a public static export.

```sh
npm run build
npm start
```

Set `APP_URL` to the external HTTPS origin. Localhost HTTP is allowed for local testing. Configure `DATABASE_PATH` on a persistent volume, `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, credentials when required, and `MAIL_FROM`. Put the server behind HTTPS. Set `TRUST_PROXY=true` only when the trusted proxy replaces client-supplied forwarded IP headers.

`npm run build` packages static assets and operational tools into `.next/standalone/`. `npm start` loads local environment files, resolves the database path against the project directory, and starts that standalone server. Use `PORT` and `APP_HOST` to override its listen address when running through `npm start`.

The supplied `Dockerfile` packages Next's standalone output. Mount a writable persistent volume at `/app/data` and supply the environment variables at runtime. Use a single application deployment with its SQLite volume; independent replicas with separate files will not share accounts. Back up a live SQLite database using a SQLite-aware backup procedure that accounts for WAL, and test restoration.

Email delivery is attempted immediately and retained in a database outbox on temporary failure. Schedule the retry command as appropriate:

```sh
npm run mail:flush
```

In the standalone container the equivalent is `node --experimental-strip-types scripts/flush-mail.ts`. Configure the deployment's sender identity, operator contact, retention policy, and mail delivery before opening registration publicly.

### Administrator access

Create an ordinary account, then grant access from a trusted server shell. Production requires a verified email; development with disabled mail permits the local account directly:

```sh
npm run admin:grant -- your-email@example.com
```

In the standalone container, run `node --experimental-strip-types scripts/grant-admin.ts your-email@example.com`. There is no default admin or public role-escalation endpoint. Content tools are available at `/admin` and are authorized on every API request.

## Refactored structure

```text
src/app/           App Router pages, protected route handlers, and shared layout
src/components/    Shared UI, account-aware progress provider, dialogs
src/features/      Learning, practice, assessments, analytics, account, admin
src/server/        Authentication, database, content repository, grading orchestration
src/lib/           Pure selection, grading, clock, analytics, and worksheet logic
src/types/         Domain types, public/private DTOs, runtime validation
src/content/       Private versioned curriculum assets and metadata
scripts/curriculum Original course authoring sources by section/area
scripts/           Content builds/audits and operational commands
legacy/            Original application and progress exporter
tests/             Unit, API, browser, account-isolation, and content checks
docs/              User specification and implementation record
```

Server Components deliver lesson bodies without lesson answer keys. Interactive players use the same server-owned engine across all sections and item types. The route registry and feature folders preserve the earlier refactor. Administrator revisions override base content for new attempts; existing attempts keep their original grading snapshots.

## Content maintenance

```sh
npm run content:build
npm run content:audit
```

The first command combines the existing curriculum with `scripts/curriculum/`, adds explicit metadata, and writes private assets. It also removes any obsolete `public/study-data` output. Generated assets are committed so production does not need to generate material on startup.

`npm run extract` rebuilds the original material from `legacy/` and then runs the full content build automatically. It overwrites generated assets; keep deliberate edits in authoring sources or database revisions. Preserve stable IDs and review mappings when changing content. Tax exercises state their applicable reference period and supplied assumptions.

## Verification

```sh
npm run typecheck
npm run lint
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

With the development server already running and local mail disabled, run `npm run test:dev` to exercise real browser registration, sign-in, topic filtering, practice, grading, and navigation. This creates and deletes its own temporary QA account. It fails on duplicate-key and hydration warnings as well as browser errors.

Browser tests start a production Next server and a local SMTP sink on ports 3100/3101. They use **only** `data/e2e.sqlite` and `data/e2e-mail`, recreating these test-specific paths. They never reset the normal database. Tests inspect private fixtures locally to verify grading; no answer-key test endpoint exists in the app.

The suites cover content preservation, full-mock distributions, grading, clocks/breaks, stale updates, accounts, recovery tokens, authorization, server-only answer keys, legacy imports, reset/deletion, admin controls, worksheet calculations, and responsive navigation.
