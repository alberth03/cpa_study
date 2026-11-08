'use client';
import { useState } from 'react';
import { ActivityPlayer } from './activity-player';
import { sectionById, BLUEPRINT_SOURCE } from '@/lib/blueprints';
import type { SectionId } from '@/types/platform';
export function MockStart({ section }: { section: SectionId }) {
  const [short, setShort] = useState(false);
  const definition = sectionById(section)!;
  return (
    <>
      <section className="course-intro-card">
        <span className="exam-badge">2026 BLUEPRINT · ACCOUNT-SAVED EXAM</span>
        <h2>{definition.title}</h2>
        <p>
          Full exam: four hours, {definition.testlets[0] + definition.testlets[1]} MCQs, and{' '}
          {definition.testlets.slice(2).reduce((a, b) => a + b, 0)} simulations.
        </p>
        <ol className="mock-instructions">
          <li>
            You can revisit items within the current testlet. Submitting a testlet locks it
            permanently.
          </li>
          <li>
            After testlet 3, an optional 15-minute break pauses the exam clock. Other breaks keep it
            running.
          </li>
          <li>
            The server keeps time across navigation, sign-out, and devices. Expired attempts are
            submitted automatically.
          </li>
          <li>
            Results are internal study percentages. They do not reproduce the CPA Exam’s scaled
            score.
          </li>
        </ol>
        <p>
          <a href={BLUEPRINT_SOURCE} target="_blank" rel="noreferrer">
            Official format and blueprint reference ↗
          </a>
        </p>
      </section>
      <label className="check-label">
        <input type="checkbox" checked={short} onChange={(e) => setShort(e.target.checked)} /> Use a
        60-minute readiness check with 20 MCQs and 3 simulations
      </label>
      <ActivityPlayer
        activityId={`${section}-${short ? 'short-mock' : 'mock'}`}
        title={`${section.toUpperCase()} ${short ? 'Readiness Check' : 'Full-Length Mock Exam'}`}
        url={`/mock-exams/${section}`}
        startRequest={{ source: 'mock', section, short, blueprintYear: 2026 }}
      />
    </>
  );
}
