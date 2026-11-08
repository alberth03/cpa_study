'use client';
import { useState } from 'react';
import { calculate, evaluateCell } from '@/lib/worksheet';
export function Workspace({
  initial,
  onSave,
  disabled,
}: {
  initial: string;
  onSave: (text: string) => Promise<unknown>;
  disabled: boolean;
}) {
  let parsed: { notes?: string; cells?: Record<string, string> } = {};
  try {
    parsed = JSON.parse(initial || '{}');
  } catch {
    parsed = { notes: initial };
  }
  const [notes, setNotes] = useState(parsed.notes || ''),
    [cells, setCells] = useState<Record<string, string>>(parsed.cells || {}),
    [formula, setFormula] = useState(''),
    [result, setResult] = useState(''),
    [saved, setSaved] = useState('');
  return (
    <details className="workspace">
      <summary>Calculator, worksheet & notes</summary>
      <div className="calculator">
        <label>
          Calculation
          <input
            value={formula}
            onChange={(e) => setFormula(e.target.value)}
            placeholder="(120000 + 25000) / 5"
          />
        </label>
        <button
          className="back-button"
          onClick={() => {
            try {
              setResult(String(calculate(formula)));
            } catch {
              setResult('Check the expression. Use numbers, +, −, ×, / and parentheses.');
            }
          }}
        >
          Calculate
        </button>
        <output aria-live="polite">{result}</output>
      </div>
      <p className="small-label">
        Worksheet: use numbers, cell references, arithmetic, or =SUM(A1:A4). This is a study
        worksheet, not a full spreadsheet application.
      </p>
      <div className="table-scroll">
        <table className="worksheet-table">
          <thead>
            <tr>
              <th>Row</th>
              {['A', 'B', 'C', 'D'].map((c) => (
                <th key={c}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }, (_, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                {['A', 'B', 'C', 'D'].map((c) => {
                  const id = `${c}${i + 1}`;
                  let value = '';
                  try {
                    value = String(evaluateCell(id, cells));
                  } catch {
                    value = '#ERROR';
                  }
                  return (
                    <td key={id}>
                      <input
                        aria-label={`Cell ${id}`}
                        value={cells[id] || ''}
                        maxLength={200}
                        onChange={(e) => {
                          setCells({ ...cells, [id]: e.target.value });
                          setSaved('');
                        }}
                      />
                      {cells[id]?.startsWith('=') && <output>{value}</output>}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <label>
        Scratch notes
        <textarea
          value={notes}
          maxLength={10000}
          rows={5}
          onChange={(e) => {
            setNotes(e.target.value);
            setSaved('');
          }}
        />
      </label>
      <button
        disabled={disabled}
        className="back-button"
        onClick={async () => {
          await onSave(JSON.stringify({ notes, cells }));
          setSaved('Workspace saved.');
        }}
      >
        Save workspace
      </button>
      <span role="status">{saved}</span>
    </details>
  );
}
