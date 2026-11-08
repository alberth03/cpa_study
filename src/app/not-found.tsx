import Link from 'next/link';
export default function NotFound() {
  return (
    <section className="quiz-card">
      <h1>Page not found</h1>
      <p>This lesson or activity does not exist.</p>
      <Link className="primary-button" href="/learn">
        Return to Learn
      </Link>
    </section>
  );
}
