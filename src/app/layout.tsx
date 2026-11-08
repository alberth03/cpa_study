import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Sidebar } from '@/components/sidebar';
import { ProgressNotices, ProgressProvider } from '@/components/progress-provider';
import '@/styles/legacy.css';
import '@/styles/app.css';
import '@/styles/platform.css';
import { currentUser, publicUser } from '@/server/auth';

export const metadata: Metadata = {
  title: { default: 'CPA Study', template: '%s | CPA Study' },
  description:
    'Build your accounting knowledge with lessons, practice questions, and task-based simulations.',
};
export const dynamic = 'force-dynamic';
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await currentUser();
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <ProgressProvider key={user?.id || 'guest'} initialUser={user ? publicUser(user) : null}>
          <Sidebar />
          <main className="main-content" id="main-content">
            <ProgressNotices />
            <Suspense fallback={<p role="status">Loading study tools…</p>}>{children}</Suspense>
          </main>
        </ProgressProvider>
      </body>
    </html>
  );
}
