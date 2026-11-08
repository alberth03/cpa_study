import fs from 'node:fs';
import { q, type CurriculumLesson, type CurriculumModule } from './types.ts';
import type { Assessment, Lesson, Simulation } from '../../src/types/study.ts';

const read = <T>(folder: string, id: string): T =>
  JSON.parse(fs.readFileSync(`src/content/${folder}/${id}.json`, 'utf8'));
const bank = read<Assessment>('assessments', 'far-m4-practice').questions;
const groups = [
  {
    title: 'Governmental Foundations & Fund Classification',
    topic: 'government-funds',
    numbers: [1, 2],
    sim: 2,
  },
  {
    title: 'Modified Accrual & Governmental Fund Statements',
    topic: 'government-modified-accrual',
    numbers: [3, 4],
    sim: 1,
  },
  {
    title: 'Proprietary and Fiduciary Funds',
    topic: 'government-proprietary-fiduciary',
    numbers: [5, 6],
    sim: 5,
  },
  {
    title: 'Government-Wide Reporting & Reconciliation',
    topic: 'government-reconciliation',
    numbers: [7, 8],
    sim: 3,
  },
  {
    title: 'Budgets, Encumbrances & Integrated Reporting',
    topic: 'government-budgets',
    numbers: [9, 10],
    sim: 4,
  },
];
const lessons: CurriculumLesson[] = groups.map((g, index) => {
  const existing = g.numbers.map((n) => read<Lesson>('lessons', `far-m4-l${n}`));
  const sim = read<Simulation>('simulations', `far-m4-tbs${g.sim}`),
    simId = `bar-m3-tbs${index + 1}`;
  let html = sim.html.replace(/FAR/g, 'BAR');
  sim.fields.forEach((f, i) => {
    html = html.replaceAll(f.id, `${simId}-f${i + 1}`);
  });
  const questions = bank
    .filter((q) => g.numbers.some((n) => q.lessonId === `far-m4-l${n}`))
    .map((item) =>
      q(
        item.prompt,
        item.choices.find((c) => c.id === item.correctChoiceId)!.text,
        item.choices.filter((c) => c.id !== item.correctChoiceId).map((c) => c.text) as [
          string,
          string,
          string,
        ],
        item.explanation,
        item.difficulty === 'foundation'
          ? 'remembering'
          : item.difficulty === 'advanced'
            ? 'analysis'
            : 'application',
      ),
    );
  return {
    topic: g.topic,
    title: g.title,
    group: 'A-B-C',
    objectives: [
      `Explain ${g.title.toLowerCase()}.`,
      'Apply measurement-focus and basis-of-accounting differences.',
      'Prepare and reconcile appropriate governmental reporting amounts.',
    ],
    teaching: [
      'Use the integrated lessons below to connect fund-level and government-wide accounting.',
    ],
    html: existing.map((l) => `<h2>${l.title}</h2>${l.html}`).join(''),
    workedExample: {
      title: sim.title,
      facts: 'Apply the accompanying governmental workpaper.',
      steps: [
        'Identify the fund and reporting level.',
        'Apply the appropriate recognition and measurement rules.',
        'Reconcile the statements and explain differences.',
      ],
    },
    pitfalls: [
      'Governmental fund expenditure accounting differs from government-wide expense accounting.',
      'Fiduciary activities are not included in government-wide statements.',
    ],
    questions,
    simulation: {
      title: sim.title.replace('FAR', 'BAR'),
      scenario: 'Complete the governmental reporting workpaper using the facts shown below.',
      html,
      solutionHtml: sim.explanation,
      exhibits: [],
      tasks: sim.fields.map((f) => ({
        label: f.label,
        correct:
          f.type === 'select'
            ? f.options.find((o) => o.value === String(f.correct))!.label
            : f.correct,
        options: f.type === 'select' ? f.options.map((o) => o.label) : undefined,
        explanation: `The correct response is ${f.correct}. The worked solution explains the associated governmental accounting treatment.`,
      })),
    },
  };
});
lessons.push({
  topic: 'government-liabilities',
  title: 'Governmental Capital Assets, Pensions & OPEB',
  group: 'C',
  objectives: [
    'Distinguish fund-level expenditures from government-wide capital assets.',
    'Compute a net pension or OPEB liability from supplied measurements.',
    'Evaluate recognition and disclosure for governmental long-term obligations.',
  ],
  teaching: [
    'Government-wide statements use the economic-resources measurement focus and accrual basis. Capital assets and long-term obligations are reported under the applicable standards, while governmental funds use current financial resources and modified accrual. A capital outlay can therefore be an expenditure at the fund level and an asset at the government-wide level. Depreciation then affects government-wide expense rather than duplicating the full fund expenditure.',
    'Pension and other postemployment-benefit accounting requires the applicable GASB measurements, assumptions, and reporting model. For a plan administered through a qualifying trust under the stated model, a net liability can reflect total pension or OPEB liability less the plan’s fiduciary net position. Plans without a qualifying trust can require a different liability measure; do not subtract nonexistent qualifying plan assets. Deferred outflows and inflows and expense measurement require separate analysis.',
    'Evaluate leases, subscriptions, debt, and other obligations under the applicable governmental guidance. Presentation and timing depend on fund type and reporting level. Supplied actuarial or present-value measurements should be used consistently, with required assumptions and disclosures. A government’s current cash contribution is not automatically its pension expense or total liability.',
  ],
  workedExample: {
    title: 'A supplied pension measurement',
    facts:
      'The case supplies total pension liability of $10 million and qualifying plan fiduciary net position of $7 million. Ignore deferred items for this computation.',
    steps: [
      'Net pension liability is $3 million.',
      'The amount is not simply the government’s annual cash contribution.',
      'Evaluate expense and deferred-item accounting separately under the applicable standard.',
    ],
  },
  pitfalls: [
    'Do not subtract assets of a trust that does not qualify under the applicable model.',
    'Fund-level and government-wide statements can report different effects.',
    'Cash contributions and pension expense are not automatically equal.',
  ],
  questions: [
    q(
      'Total pension liability is $12 million and qualifying plan fiduciary net position is $9 million. What is net pension liability under the stated model?',
      '$3 million.',
      ['$12 million.', '$9 million.', '$21 million.'],
      'Subtract qualifying plan fiduciary net position from total liability.',
      'application',
    ),
    q(
      'A governmental fund buys equipment. How can government-wide reporting differ from fund reporting?',
      'The government-wide statements can capitalize the asset rather than report the full outlay as current expense.',
      [
        'Both levels always expense the full outlay identically.',
        'The asset can never be depreciated.',
        'The fund must always report a sales profit.',
      ],
      'Different measurement focuses and bases create reconciliation adjustments.',
      'analysis',
    ),
    q(
      'Does an annual cash pension contribution necessarily equal pension expense?',
      'No.',
      [
        'Yes, always.',
        'Only if the contribution is paid electronically.',
        'The contribution is always revenue.',
      ],
      'Expense measurement can include actuarial and deferred-item effects beyond cash paid.',
      'remembering',
    ),
    q(
      'An OPEB plan has no qualifying trust assets under the applicable model. What must be avoided?',
      'Subtracting nonexistent qualifying fiduciary net position as though the funded-plan model applied.',
      [
        'Evaluating the applicable liability rules.',
        'Reviewing actuarial information.',
        'Considering required disclosures.',
      ],
      'Trust status affects the relevant measurement; do not assume all arrangements are identical.',
      'analysis',
    ),
    q(
      'Government-wide equipment cost is $500,000 and annual depreciation is $25,000. No other changes apply. What is carrying amount after one year?',
      '$475,000.',
      ['$500,000.', '$25,000.', '$525,000.'],
      'Cost less accumulated depreciation equals $475,000.',
      'application',
    ),
    q(
      'Why must a governmental liability problem identify the reporting level?',
      'Recognition and presentation can differ between governmental funds and government-wide statements.',
      [
        'The reporting level never changes accounting.',
        'Only the report cover changes.',
        'All government liabilities are current expenditures immediately.',
      ],
      'The measurement focus and basis of accounting affect the treatment.',
      'remembering',
    ),
  ],
  simulation: {
    title: 'Government-wide asset and benefit obligation schedule',
    scenario:
      'Prepare the specified government-wide measurements and identify a fund-level difference.',
    exhibits: [
      {
        title: 'Capital assets',
        body: 'Equipment cost $800,000; current accumulated depreciation $120,000. No impairment or disposal applies.',
      },
      {
        title: 'Benefit plan',
        body: 'Total pension liability $15,000,000; qualifying plan fiduciary net position $11,000,000. Ignore deferred items in computing the requested net liability. The governmental fund also records a current capital outlay.',
      },
    ],
    tasks: [
      {
        label: 'Equipment carrying amount',
        correct: 680000,
        distractors: [800000, 920000, 120000],
        explanation: '$800,000 − $120,000 = $680,000.',
      },
      {
        label: 'Net pension liability',
        correct: 4000000,
        distractors: [15000000, 11000000, 26000000],
        explanation: '$15,000,000 − $11,000,000 = $4,000,000.',
      },
      {
        label: 'Relationship of annual contribution to expense',
        correct: 'They are not necessarily equal',
        options: [
          'They are not necessarily equal',
          'They are always identical',
          'Contributions are always revenue',
          'Expense is never recognized',
        ],
        explanation: 'Pension expense can differ from cash contributions.',
      },
      {
        label: 'Government-wide treatment of qualifying capital outlay',
        correct: 'Capitalize and apply subsequent asset accounting',
        options: [
          'Capitalize and apply subsequent asset accounting',
          'Always expense the entire outlay again',
          'Ignore the asset',
          'Record all outlays as pension expense',
        ],
        explanation: 'Government-wide accrual accounting recognizes qualifying capital assets.',
      },
    ],
  },
});
export const barGovernment: CurriculumModule = {
  title: 'State & Local Government Reporting',
  area: 3,
  lessons,
};
