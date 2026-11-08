'use client';
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="quiz-card">
      <h1>Unable to open this page</h1>
      <p>Please try again. Saved progress remains in your browser.</p>
      <button className="primary-button" onClick={reset}>
        Try again
      </button>
    </section>
  );
}
