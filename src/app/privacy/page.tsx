import { PageHeader } from '@/components/ui';
export const metadata = { title: 'Privacy & data' };
export default function Page() {
  return (
    <>
      <PageHeader title="Privacy & data" />
      <article className="quiz-card">
        <h2>Your study data</h2>
        <p>
          Your account stores your email, name, password hash, sessions, preferences, completed
          lessons, answers, and study results. Performance data is used to provide progress, review,
          and Discipline recommendations within your account.
        </p>
        <h2>Controls</h2>
        <p>
          Account settings provide a personal data export, session revocation, progress reset, and
          permanent account deletion. Resetting progress retains your login; deleting the account
          removes the account and its study records.
        </p>
        <h2>Browser storage</h2>
        <p>
          A secure session cookie identifies your account. Legacy browser progress is imported only
          when you choose to attach it to your account. The application does not use third-party
          advertising trackers.
        </p>
        <h2>Email and hosting</h2>
        <p>
          The configured email service delivers verification, account-change, and password-recovery
          messages. The operator of a deployed instance is responsible for its hosting,
          email-provider contracts, backup retention, and applicable privacy obligations. Configure
          an operator contact and retention policy before opening a public deployment.
        </p>
      </article>
    </>
  );
}
