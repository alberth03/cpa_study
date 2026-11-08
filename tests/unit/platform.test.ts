import { beforeAll, afterAll, describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { database, one, run } from '@/server/db';
import {
  createAttempt,
  loadAttempt,
  mutateAttempt,
  publicAttempt,
  report,
} from '@/server/attempts';
import { questionBank, simulationBank } from '@/server/content';
import {
  chooseMockQuestions,
  chooseMockSimulations,
  quotas,
  validForEdition,
} from '@/server/selection';
import { examSections } from '@/lib/blueprints';
import { clockExpired, remainingSeconds, resumeClock, startBreak } from '@/lib/exam-clock';
import { hashPassword, verifyPassword } from '@/server/passwords';
import { calculate, evaluateCell } from '@/lib/worksheet';
import { resetProgress } from '@/server/progress';
import { resolvePracticeScope } from '@/server/practice';
import type { PrivateAttempt } from '@/types/platform';
import type { UserRow } from '@/server/auth';

let directory: string;
let user: UserRow;
beforeAll(() => {
  directory = fs.mkdtempSync('/tmp/opencode/cpa-unit-');
  process.env.DATABASE_PATH = path.join(directory, 'test.sqlite');
  database();
  const now = new Date().toISOString();
  run(
    'INSERT INTO users(id,email,name,password_hash,email_verified_at,created_at,updated_at) VALUES(?,?,?,?,?,?,?)',
    'unit-user',
    'unit@cpa.test',
    'Unit User',
    'unused',
    now,
    now,
    now,
  );
  user = one<UserRow>('SELECT * FROM users WHERE id=?', 'unit-user')!;
});
afterAll(() => {
  database().close();
  fs.rmSync(directory, { recursive: true, force: true });
});
const assertNoKey = (value: unknown) => {
  if (value && typeof value === 'object') {
    for (const [key, item] of Object.entries(value)) {
      expect([
        'correctChoiceId',
        'correctEntries',
        'correct',
        'explanation',
        'choiceExplanations',
        'sourceId',
      ]).not.toContain(key);
      assertNoKey(item);
    }
  }
};
describe('server-backed assessments', () => {
  it('resolves learning practice to the last read topic and requires explicit topic/module scopes', () => {
    const config = {
      section: 'aud' as const,
      type: 'mcq' as const,
      count: 3,
      difficulty: 'mixed' as const,
      mode: 'tutor' as const,
      focus: 'learning' as const,
      minutes: null,
      blueprintYear: 2026,
    };
    expect(() => resolvePracticeScope(user.id, config)).toThrow('Open a lesson');
    run(
      'INSERT INTO lesson_progress(user_id,lesson_id,read_at) VALUES(?,?,?)',
      user.id,
      'aud-m2-l1',
      new Date().toISOString(),
    );
    expect(resolvePracticeScope(user.id, config).topicId).toBe('aud-audit-risk-planning');
    expect(() => resolvePracticeScope(user.id, { ...config, focus: 'topic' })).toThrow(
      'Choose a topic',
    );
    expect(() => resolvePracticeScope(user.id, { ...config, focus: 'module' })).toThrow(
      'Choose a module',
    );
  });
  it('builds every official five-testlet format and omits keys from active DTOs', () => {
    for (const section of examSections) {
      const a = createAttempt(user, {
        source: 'mock',
        section: section.id,
        short: false,
        blueprintYear: 2026,
      });
      expect(a.testlets.map((t) => t.itemIds.length)).toEqual(section.testlets);
      expect(a.timeLimitSeconds).toBe(14400);
      expect(new Set(a.items.map((i) => i.id)).size).toBe(a.items.length);
      expect(publicAttempt(a).feedback).toEqual([]);
      assertNoKey(publicAttempt(a));
    }
  });
  it('keeps full-mock MCQ allocations correct across independent randomized sets', () => {
    for (const section of examSections) {
      const bank = questionBank(section.id).filter((q) => validForEdition(q, 2026));
      for (let n = 0; n < 10; n++) {
        const simulations = chooseMockSimulations(
          simulationBank(section.id).filter((q) => validForEdition(q, 2026)),
          section.id,
          section.testlets.slice(2).reduce((a, b) => a + b, 0),
          [],
        );
        const qs = chooseMockQuestions(
          bank,
          section.id,
          section.testlets[0] + section.testlets[1],
          [],
          new Set(simulations.map((s) => s.id)),
        );
        expect(
          section.areas.map((a) => qs.filter((q) => q.metadata.areaId === a.id).length),
        ).toEqual(
          quotas(
            qs.length,
            section.areas.map((a) => a.target),
          ),
        );
        expect(qs.some((q) => simulations.some((s) => s.id === q.familyId))).toBe(false);
      }
    }
  });
  it('enforces testlet locks, scheduled breaks, and expiry on the server', () => {
    let a = createAttempt(user, {
      source: 'mock',
      section: 'far',
      short: false,
      blueprintYear: 2026,
    });
    expect(() =>
      mutateAttempt(user.id, a.id, { action: 'navigate', index: 30, version: a.version }),
    ).toThrow('current testlet');
    for (let i = 0; i < 3; i++)
      a = mutateAttempt(user.id, a.id, {
        action: 'advance',
        version: a.version,
        confirmIncomplete: true,
        takeBreak: i === 2,
      });
    expect(a.breakState?.kind).toBe('scheduled');
    expect(publicAttempt(a).current).toBeNull();
    expect(() =>
      mutateAttempt(user.id, a.id, {
        action: 'answer',
        version: a.version,
        itemId: a.items[a.currentIndex].id,
        answers: {},
      }),
    ).toThrow('Resume');
    a = mutateAttempt(user.id, a.id, { action: 'resume', version: a.version });
    expect(() =>
      mutateAttempt(user.id, a.id, { action: 'navigate', index: 0, version: a.version }),
    ).toThrow('current testlet');
    a.deadline = Date.now() - 1;
    run('UPDATE attempts SET data_json=? WHERE id=?', JSON.stringify(a), a.id);
    const expired = loadAttempt(user.id, a.id);
    expect(expired.status).toBe('submitted');
    expect(report(expired).score).toBe(0);
  });
  it('rejects stale updates and grades exactly once', () => {
    let a = createAttempt(user, {
      source: 'practice',
      config: {
        section: 'far',
        type: 'mcq',
        count: 1,
        difficulty: 'mixed',
        mode: 'tutor',
        focus: 'random',
        minutes: null,
        blueprintYear: 2026,
      },
    });
    const q = a.items[0];
    if (q.kind !== 'mcq') throw new Error();
    const originalVersion = a.version;
    a = mutateAttempt(user.id, a.id, {
      action: 'answer',
      version: a.version,
      itemId: q.id,
      answers: { choice: q.question.correctChoiceId },
    });
    expect(() =>
      mutateAttempt(user.id, a.id, { action: 'flag', itemId: q.id, version: originalVersion }),
    ).toThrow('Another device');
    a = mutateAttempt(user.id, a.id, { action: 'check', version: a.version });
    expect(a.results).toHaveLength(1);
    expect(a.results[0].correct).toBe(true);
    a = mutateAttempt(user.id, a.id, {
      action: 'submit',
      version: a.version,
      confirmIncomplete: false,
    });
    const again = mutateAttempt(user.id, a.id, {
      action: 'submit',
      version: a.version,
      confirmIncomplete: false,
    });
    expect(again.results).toHaveLength(1);
    expect(again.version).toBe(a.version);
  });
  it('resets progress transactionally without deleting credentials', () => {
    const previous = user.progress_generation;
    const fresh = resetProgress(user);
    expect(fresh.progress_generation).toBe(previous + 1);
    expect(one('SELECT id FROM users WHERE id=?', user.id)).toBeTruthy();
    expect(one('SELECT id FROM attempts WHERE user_id=?', user.id)).toBeUndefined();
    expect(() =>
      createAttempt(user, { source: 'activity', activityId: 'fundamentals-final' }),
    ).toThrow('Progress changed');
    user = fresh;
  });
  it('evaluates scheduled-break time without granting unused pause time', () => {
    const a = {
      deadline: 14400000,
      currentTestlet: 3,
      breakUsed: false,
      kind: 'mock',
      lastActiveAt: 0,
    } as PrivateAttempt;
    startBreak(a, true, 100000);
    expect(remainingSeconds(a, 100000)).toBe(14300);
    resumeClock(a, 220000);
    expect(a.deadline).toBe(14520000);
    expect(clockExpired(a, 14520000)).toBe(true);
  });
  it('uses salted password hashes and a safe worksheet parser', async () => {
    const first = await hashPassword('Strong test passphrase 123!'),
      second = await hashPassword('Strong test passphrase 123!');
    expect(first).not.toBe(second);
    expect(await verifyPassword('Strong test passphrase 123!', first)).toBe(true);
    expect(await verifyPassword('wrong', first)).toBe(false);
    expect(calculate('(100 + 20) / 3')).toBe(40);
    expect(evaluateCell('B1', { A1: '10', A2: '20', B1: '=SUM(A1:A2)*2' })).toBe(60);
    expect(() => evaluateCell('A1', { A1: '=B1', B1: '=A1' })).toThrow('Circular');
    expect(() => calculate('process.exit()')).toThrow();
  });
});
