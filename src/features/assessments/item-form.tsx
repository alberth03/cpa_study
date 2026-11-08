'use client';
import { useState } from 'react';
import parse, { Element } from 'html-react-parser';
import { Html } from '@/components/ui';
import type { PublicAttempt, Exhibit } from '@/types/platform';

function Exhibits({ exhibits }: { exhibits: Exhibit[] }) {
  const [selected, setSelected] = useState(0);
  return (
    <section className="exhibits">
      <h3>Supporting exhibits</h3>
      <div role="tablist" aria-label="Exhibits">
        {exhibits.map((e, i) => (
          <button
            key={e.id}
            id={`${e.id}-tab`}
            role="tab"
            aria-selected={selected === i}
            aria-controls={e.id}
            className={selected === i ? 'tab active' : 'tab'}
            onClick={() => setSelected(i)}
          >
            {e.title}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        tabIndex={0}
        id={exhibits[selected].id}
        aria-labelledby={`${exhibits[selected].id}-tab`}
      >
        <Html html={exhibits[selected].html} />
      </div>
    </section>
  );
}
export function ItemForm({
  attempt,
  onChange,
  busy = false,
}: {
  attempt: PublicAttempt;
  onChange: (id: string, value: string) => void;
  busy?: boolean;
}) {
  const current = attempt.current,
    answers = attempt.answers,
    disabled = busy || attempt.checked || attempt.status === 'submitted';
  if (!current) return null;
  if (current.kind === 'mcq') {
    const q = current.question;
    return (
      <>
        <p className="question-topic">{q.topic}</p>
        <h2 className="quiz-question">{q.prompt}</h2>
        {q.exhibits?.length ? <Exhibits key={q.id} exhibits={q.exhibits} /> : null}
        <div role="radiogroup" aria-label="Answer choices">
          {q.choices.map((c, i) => (
            <button
              key={c.id}
              role="radio"
              aria-checked={answers.choice === c.id}
              disabled={disabled}
              className={`answer-button${answers.choice === c.id ? ' selected-answer' : ''}${disabled && attempt.feedback[0]?.expected === c.text ? ' correct-answer' : ''}`}
              onClick={() => onChange('choice', c.id)}
            >
              <span className="answer-letter">{String.fromCharCode(65 + i)}</span>
              {c.text}
            </button>
          ))}
        </div>
      </>
    );
  }
  if (current.kind === 'simulation') {
    const sim = current.simulation;
    return (
      <>
        {sim.exhibits?.length ? <Exhibits key={sim.id} exhibits={sim.exhibits} /> : null}
        <div className="simulation-content">
          {parse(sim.html, {
            replace(node) {
              if (!(node instanceof Element) || !['input', 'select'].includes(node.name)) return;
              const field = sim.fields.find((f) => f.id === node.attribs.id);
              if (!field) return <></>;
              return field.type === 'select' ? (
                <select
                  id={field.id}
                  aria-label={field.label}
                  className="tbs-input"
                  disabled={disabled}
                  value={answers[field.id] || ''}
                  onChange={(e) => onChange(field.id, e.target.value)}
                >
                  <option value="">Select an answer</option>
                  {field.options.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={field.id}
                  aria-label={field.label}
                  className="tbs-input"
                  disabled={disabled}
                  inputMode="decimal"
                  autoComplete="off"
                  value={answers[field.id] || ''}
                  onChange={(e) => onChange(field.id, e.target.value)}
                  placeholder="Enter amount"
                />
              );
            },
          })}
        </div>
      </>
    );
  }
  const q = current.journal;
  return (
    <>
      <h2>{q.topic}</h2>
      <p className="quiz-question">{q.question}</p>
      <p>
        Use up to four rows. Leave unused rows empty; use only a debit or a credit on each used row.
      </p>
      <div className="journal-form">
        <div className="journal-form-row journal-header">
          <span>Account</span>
          <span>Debit</span>
          <span>Credit</span>
        </div>
        {Array.from({ length: 4 }, (_, i) => (
          <div className="journal-form-row" key={i}>
            <select
              aria-label={`Row ${i + 1} account`}
              disabled={disabled}
              value={answers[`r${i}-account`] || ''}
              onChange={(e) => onChange(`r${i}-account`, e.target.value)}
            >
              <option value="">Select account</option>
              {q.availableAccounts.map((a) => (
                <option key={a}>{a}</option>
              ))}
            </select>
            {['debit', 'credit'].map((name) => (
              <input
                key={name}
                aria-label={`Row ${i + 1} ${name}`}
                disabled={disabled}
                inputMode="decimal"
                value={answers[`r${i}-${name}`] || ''}
                placeholder="0"
                onChange={(e) => onChange(`r${i}-${name}`, e.target.value)}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
