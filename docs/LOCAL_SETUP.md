# CPA Study — Run Locally from Scratch

## 1. Install Node.js

Install a current **LTS version of Node.js** from https://nodejs.org/en/download. Node.js includes npm. This project requires **Node.js 22.18 or newer**.

After installation, open a new terminal and check:

```bash
node --version
npm --version
```

You need an internet connection for the initial installation.

## 2. Extract the project

Extract the ZIP into a normal folder. Open a terminal **inside the folder containing `package.json`**.

The project must include `package-lock.json`, `.env.example`, `src/content/`, and the other source/configuration files.

Install dependencies:

```bash
npm ci
```

## 3. Create your local configuration

For the first setup, copy `.env.example` to `.env.local`.

**Windows PowerShell:**

```powershell
Copy-Item .env.example .env.local
```

**macOS / Linux:**

```bash
cp .env.example .env.local
```

These settings are already in the example:

```env
APP_URL=http://localhost:3000
NODE_ENV=development
DATABASE_PATH=./data/cpa-study.sqlite
MAIL_DELIVERY=disabled
```

SQLite creates the local database automatically. Email delivery and verification are disabled for local development.

## 4. Initialize and start

```bash
npm run db:migrate
npm run dev -- --port 3000
```

**Keep this terminal open while using the website.**

Open **http://localhost:3000/register**, create an account, and then sign in. You can use the account immediately without receiving an email.

## 5. Administrator access — optional

After creating your account, open a **second terminal in the project folder**:

```bash
npm run admin:grant -- "your-registered-email@example.com"
```

Replace the email with the address you registered. Refresh the website and visit **http://localhost:3000/admin**.

## Starting again later

From the project folder, run:

```bash
npm run dev -- --port 3000
```

Stop the server with **Ctrl+C**. Accounts and progress survive restarts in `data/cpa-study.sqlite`. Use **Progress & backups** in the website to export a study backup.

## Common issues

- **Port 3000 is occupied:** change `APP_URL` in `.env.local` to `http://localhost:3001`, then run `npm run dev -- --port 3001` and open http://localhost:3001.
- **“This request did not come from this application”:** the browser URL must match `APP_URL`, including hostname and port. Use `localhost` if that is what the file specifies. Restart the server after changing settings.
- **Node or SQLite errors:** check `node --version`; upgrade to a supported LTS release and rerun `npm ci`.
- **PowerShell blocks `npm.ps1`:** use `npm.cmd` instead of `npm` in the commands above.

For this local workflow, use **`npm run dev`**. Production startup uses different email-verification requirements; deployment instructions are in the main `README.md`.
