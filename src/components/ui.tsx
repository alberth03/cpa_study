import Link from 'next/link';
import type { ReactNode } from 'react';

export function PageHeader({
  title,
  subtitle,
  back,
}: {
  title: string;
  subtitle?: string;
  back?: { href: string; label: string };
}) {
  return (
    <header className="topbar">
      <div>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {back && (
        <Link className="back-button" href={back.href}>
          ← {back.label}
        </Link>
      )}
    </header>
  );
}
export function Html({ html, className = '' }: { html: string; className?: string }) {
  // Only repository-owned, migration-cleaned content is accepted here.
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
export function CardLink({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <Link href={href} className="module-card">
      <div className="module-content">
        <h2>{title}</h2>
        {children && <div>{children}</div>}
      </div>
      <span aria-hidden="true" className="module-arrow">
        →
      </span>
    </Link>
  );
}
export function LoadingProgress() {
  return (
    <p className="key-points" role="status">
      Loading saved progress…
    </p>
  );
}
