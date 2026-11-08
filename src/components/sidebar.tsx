'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useProgress } from './progress-provider';
import { api, navigateAfterAuth } from '@/lib/api';

const links = [
  ['/', 'Dashboard'],
  ['/learn', 'Learn'],
  ['/practice', 'Practice'],
  ['/mock-exams', 'Mock Exams'],
  ['/review', 'Review'],
  ['/progress', 'Progress & backups'],
  ['/account', 'Account settings'],
];
export function Sidebar() {
  const pathname = usePathname();
  const { user } = useProgress();
  return (
    <aside className="sidebar">
      <Link href="/" className="logo">
        CPA Study
      </Link>
      <nav aria-label="Main navigation">
        {links.map(([href, label]) => {
          const active =
            href === '/'
              ? pathname === '/'
              : pathname.startsWith(href) ||
                (href === '/review' && pathname.startsWith('/results'));
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? 'page' : undefined}
              className={`nav-item${active ? ' active' : ''}`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
      {user ? (
        <div className="sidebar-account">
          <span>{user.name}</span>
          {user.role === 'admin' && <Link href="/admin">Content administration</Link>}
          <button
            className="nav-item"
            onClick={async () => {
              try {
                await api('/api/auth/sign-out', { method: 'POST' });
              } finally {
                navigateAfterAuth('/sign-in');
              }
            }}
          >
            Sign out
          </button>
        </div>
      ) : (
        <div className="sidebar-account">
          <Link href="/sign-in">Sign in</Link>
          <Link href="/register">Create account</Link>
        </div>
      )}
      <p className="sidebar-note">A little progress, every day.</p>
    </aside>
  );
}
