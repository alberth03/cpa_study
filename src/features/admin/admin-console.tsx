'use client';
import { useState } from 'react';
import { useResource } from '@/features/use-resource';
import { api, errorMessage } from '@/lib/api';
import type { CoverageAudit, BlueprintQueue } from '@/types/api';

interface ContentList {
  items: { id: string; title: string; section: string; topicId: string; blueprintYear: number }[];
  revisions: { content_id: string; revision: number; status: string }[];
}
export function AdminConsole() {
  const [kind, setKind] = useState('question'),
    [search, setSearch] = useState(''),
    [id, setId] = useState(''),
    [json, setJson] = useState(''),
    [note, setNote] = useState(''),
    [message, setMessage] = useState(''),
    [revision, setRevision] = useState<number | null>(null),
    [busy, setBusy] = useState(false);
  const list = useResource<ContentList>(`/api/admin/content?kind=${kind}`),
    blueprints = useResource<{ queue: BlueprintQueue; coverage: CoverageAudit }>(
      '/api/admin/blueprints',
    );
  const [reviewNotes, setReviewNotes] = useState<Record<string, string>>({});
  return (
    <>
      <section className="quiz-card">
        <h2>Versioned curriculum editor</h2>
        <p>
          Draft changes are isolated until published. Existing attempts retain their original
          grading snapshots. Review factual accuracy, assumptions, references, metadata, and answer
          keys before publishing.
        </p>
        <div className="form-grid">
          <label>
            Content type
            <select
              value={kind}
              onChange={(e) => {
                setKind(e.target.value);
                setId('');
                setJson('');
                setRevision(null);
              }}
            >
              <option value="question">MCQ</option>
              <option value="lesson">Lesson</option>
              <option value="simulation">Simulation</option>
            </select>
          </label>
          <label>
            Search
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Section, topic, ID, or title"
            />
          </label>
        </div>
        <div className="admin-content-list">
          {list.data?.items
            .filter((i) =>
              `${i.id} ${i.title} ${i.topicId}`.toLowerCase().includes(search.toLowerCase()),
            )
            .slice(0, 100)
            .map((item) => (
              <button
                className={`admin-item${item.id === id ? ' active' : ''}`}
                key={item.id}
                onClick={async () => {
                  try {
                    const data = await api<{ content: unknown; history: { revision: number }[] }>(
                      `/api/admin/content/${kind}/${item.id}`,
                    );
                    setId(item.id);
                    setJson(JSON.stringify(data.content, null, 2));
                    setRevision(data.history[0]?.revision || null);
                    setMessage('');
                  } catch (e) {
                    setMessage(errorMessage(e));
                  }
                }}
              >
                <strong>{item.id}</strong>
                <span>{item.title.slice(0, 180)}</span>
              </button>
            ))}
        </div>
        {json && (
          <>
            <h3>{id}</h3>
            <label>
              Content JSON
              <textarea
                className="code-editor"
                rows={24}
                value={json}
                onChange={(e) => setJson(e.target.value)}
                spellCheck={false}
              />
            </label>
            <label>
              Revision note
              <input
                value={note}
                onChange={(e) => setNote(e.target.value)}
                minLength={5}
                maxLength={1000}
              />
            </label>
            <div className="lesson-actions">
              <button
                className="primary-button"
                disabled={busy || note.trim().length < 5}
                onClick={async () => {
                  setBusy(true);
                  try {
                    const result = await api<{ revision: number }>('/api/admin/content', {
                      method: 'POST',
                      body: { kind, id, content: JSON.parse(json), note },
                    });
                    setRevision(result.revision);
                    setMessage(`Draft revision ${result.revision} saved.`);
                    await list.refresh();
                  } catch (e) {
                    setMessage(errorMessage(e));
                  } finally {
                    setBusy(false);
                  }
                }}
              >
                Save new draft
              </button>
              <button
                className="back-button"
                disabled={busy || revision === null}
                onClick={async () => {
                  setBusy(true);
                  try {
                    await api(`/api/admin/content/${kind}/${id}`, {
                      method: 'PATCH',
                      body: { revision, status: 'published' },
                    });
                    setMessage(`Revision ${revision} published.`);
                    await list.refresh();
                    await blueprints.refresh();
                  } catch (e) {
                    setMessage(errorMessage(e));
                  } finally {
                    setBusy(false);
                  }
                }}
              >
                Publish saved revision
              </button>
              <button
                className="back-button"
                disabled={busy || revision === null}
                onClick={async () => {
                  setBusy(true);
                  try {
                    await api(`/api/admin/content/${kind}/${id}`, {
                      method: 'PATCH',
                      body: { revision, status: 'archived' },
                    });
                    setMessage(
                      'Item archived from new activity selection. Existing attempts retain their snapshots.',
                    );
                    await list.refresh();
                  } catch (e) {
                    setMessage(errorMessage(e));
                  } finally {
                    setBusy(false);
                  }
                }}
              >
                Archive saved revision
              </button>
            </div>
            <details>
              <summary>Revision history</summary>
              {list.data?.revisions
                .filter((r) => r.content_id === id)
                .map((r) => (
                  <button
                    key={r.revision}
                    className="back-button"
                    onClick={async () => {
                      const result = await api<{ content: unknown }>(
                        `/api/admin/content/${kind}/${id}?revision=${r.revision}`,
                      );
                      setJson(JSON.stringify(result.content, null, 2));
                      setRevision(r.revision);
                    }}
                  >
                    Revision {r.revision} · {r.status}
                  </button>
                ))}
            </details>
          </>
        )}
        {message && (
          <p className="key-points" role="status">
            {message}
          </p>
        )}
        {list.error && <p role="alert">{list.error}</p>}
      </section>
      <section className="results-card">
        <h2>Blueprint update queue</h2>
        {blueprints.data?.queue.map((change) => (
          <article className="key-points" key={change.id}>
            <h3>
              {change.edition} · {change.section.toUpperCase()} · {change.status}
            </h3>
            <p>{change.description}</p>
            <a className="text-link" href={change.source_url} target="_blank" rel="noreferrer">
              Official change summary ↗
            </a>
            <label>
              Review notes
              <textarea
                value={reviewNotes[change.id] ?? change.notes}
                onChange={(e) => setReviewNotes({ ...reviewNotes, [change.id]: e.target.value })}
                minLength={10}
                maxLength={3000}
              />
            </label>
            <button
              className="back-button"
              disabled={(reviewNotes[change.id] ?? change.notes).length < 10}
              onClick={async () => {
                try {
                  await api('/api/admin/blueprints', {
                    method: 'PATCH',
                    body: {
                      id: change.id,
                      status: change.status === 'reviewed' ? 'needs-review' : 'reviewed',
                      notes: reviewNotes[change.id] ?? change.notes,
                    },
                  });
                  await blueprints.refresh();
                  setMessage(
                    'Review status saved. Publish any required content revisions separately.',
                  );
                } catch (e) {
                  setMessage(errorMessage(e));
                }
              }}
            >
              {change.status === 'reviewed' ? 'Reopen review' : 'Record completed review'}
            </button>
          </article>
        ))}
      </section>
      {blueprints.data && (
        <section className="results-card">
          <h2>Curriculum coverage audit</h2>
          <p>
            {blueprints.data.coverage.totals.lessons} lessons ·{' '}
            {blueprints.data.coverage.totals.questions} questions ·{' '}
            {blueprints.data.coverage.totals.simulations} simulations
          </p>
          {blueprints.data.coverage.sections.map((s) => (
            <details key={s.id}>
              <summary>
                {s.id.toUpperCase()} · {s.title}
              </summary>
              <div className="table-scroll">
                <table>
                  <thead>
                    <tr>
                      <th>Official area</th>
                      <th>Weight range</th>
                      <th>MCQs</th>
                      <th>TBSs</th>
                      <th>Mapped topics</th>
                    </tr>
                  </thead>
                  <tbody>
                    {s.areas.map((a) => (
                      <tr key={a.id}>
                        <td>{a.title}</td>
                        <td>{a.range.join('–')}%</td>
                        <td>{a.questions}</td>
                        <td>{a.simulations}</td>
                        <td>{a.topics}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </details>
          ))}
          <details>
            <summary>Topic and objective gaps</summary>
            {blueprints.data.coverage.topics
              .filter(
                (t) =>
                  !t.lessonPresent ||
                  !t.mcqs ||
                  !t.simulations ||
                  t.tasks.some((task) => !task.questions),
              )
              .map((t) => (
                <p key={t.id}>
                  {t.title}: {t.mcqs} MCQs, {t.simulations} directly mapped TBSs,{' '}
                  {t.tasks.filter((task) => !task.questions).length} untested objective mappings
                  {t.supplementary ? ' · supplemental' : ''}.
                </p>
              ))}
          </details>
          <details>
            <summary>
              Potential duplicate prompts ({blueprints.data.coverage.duplicates.length})
            </summary>
            {blueprints.data.coverage.duplicates.map((d, i) => (
              <p key={i}>
                {d.first} ↔ {d.second}
              </p>
            ))}
          </details>
          <ul>
            {blueprints.data.coverage.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </section>
      )}
      {blueprints.error && <p role="alert">{blueprints.error}</p>}
    </>
  );
}
