import { q, type CurriculumLesson } from './types.ts';

export const giftPlanning: CurriculumLesson = {
  topic: 'gift-estate-planning',
  title: 'Gift Exclusions, Gift Splitting & Basis Tradeoffs',
  group: 'C-D',
  objectives: [
    'Apply annual exclusions to qualifying present-interest gifts.',
    'Distinguish direct tuition payments from other transfers.',
    'Evaluate gift splitting and income-tax basis tradeoffs.',
  ],
  teaching: [
    'The gift-tax annual exclusion applies to qualifying transfers on a per-donor, per-donee basis for the applicable year. Present-interest requirements matter; do not assume every future-interest transfer qualifies. Taxable gifts before unified credit are not the same as an immediate tax payment.',
    'A qualifying direct tuition payment to an educational institution can receive separate exclusion treatment. Room, board, or payments made to the student instead require separate analysis. Gift splitting between eligible spouses requires consent and satisfaction of the applicable rules; it is not automatic merely because the donors are married.',
    'Income-tax basis can make lifetime giving different from a transfer at death. Appreciated property received by gift generally carries the donor’s basis for gain, while inherited basis can use the applicable date-of-death or alternate valuation. Consider transfer taxes, future appreciation, control, liquidity, and non-tax objectives together. A strategy reducing future estate value may shift capital gain to the recipient.',
  ],
  workedExample: {
    title: 'Per-donee exclusions',
    facts:
      'A donor makes qualifying $50,000 cash gifts to each of three recipients. Use a $19,000 annual exclusion per recipient and no other exclusion.',
    steps: [
      'Each taxable gift before credit is $31,000.',
      'The total is $93,000.',
      'Available credit and reporting requirements are evaluated separately.',
    ],
  },
  pitfalls: [
    'Apply exclusions per qualifying donor and donee.',
    'Direct tuition and room-and-board payments have different rules.',
    'Compare transfer-tax benefits with income-tax basis consequences.',
  ],
  questions: [
    q(
      'Qualifying $45,000 gifts are made to each of two recipients. The supplied annual exclusion is $19,000 per recipient. What are total taxable gifts before credit?',
      '$52,000.',
      ['$90,000.', '$71,000.', '$26,000.'],
      'Each gift leaves $26,000 after exclusion; two total $52,000.',
      'application',
    ),
    q(
      'A donor pays qualifying tuition directly to the institution. What separate rule should be evaluated?',
      'The direct tuition-payment exclusion.',
      [
        'Automatic wage treatment.',
        'An exclusion for every living expense.',
        'Only the donor’s stock basis.',
      ],
      'Qualifying direct tuition payments can receive separate exclusion treatment.',
      'remembering',
    ),
    q(
      'Does the direct tuition exclusion automatically cover room and board?',
      'No.',
      [
        'Yes, every education-related payment qualifies.',
        'Only if paid in cash.',
        'Only if the donor has no taxable income.',
      ],
      'The tuition rule does not automatically extend to room and board.',
      'analysis',
    ),
    q(
      'Eligible spouses elect gift splitting for a $100,000 qualifying gift. Use $19,000 annual exclusion per donor. What is combined taxable gift before credit?',
      '$62,000.',
      ['$81,000.', '$100,000.', '$31,000.'],
      'Each spouse has $50,000 less $19,000 exclusion; combined taxable gifts are $62,000.',
      'application',
    ),
    q(
      'Why can a lifetime gift of appreciated property differ from a transfer at death for income-tax purposes?',
      'Gift and inherited basis rules can differ.',
      [
        'Every gift receives fair-value basis.',
        'Every inheritance retains original cost.',
        'Basis never affects gain.',
      ],
      'The recipient’s eventual gain depends on the applicable basis rules.',
      'analysis',
    ),
    q(
      'A future-interest gift does not qualify for the annual exclusion under the stated facts. What is appropriate?',
      'Do not apply the exclusion merely because the gift is small.',
      [
        'Apply it to every gift automatically.',
        'Treat the gift as a corporate dividend.',
        'Ignore all reporting rules.',
      ],
      'Eligibility conditions apply independently of amount.',
      'application',
    ),
  ],
  simulation: {
    title: 'Gift-planning schedule',
    scenario: 'Compute taxable gifts under the supplied exclusions and elections.',
    exhibits: [
      {
        title: 'Cash gifts',
        body: 'A donor gives $60,000 to each of two recipients as qualifying present interests. Use $19,000 exclusion per donee.',
      },
      {
        title: 'Other transfers',
        body: 'Eligible spouses elect gift splitting for a $90,000 present-interest gift to a third recipient. Use $19,000 exclusion per spouse. A separate $25,000 tuition payment directly to a college satisfies the direct-payment exclusion.',
      },
    ],
    tasks: [
      {
        label: 'Taxable gift per first two recipients before credit',
        correct: 41000,
        distractors: [60000, 19000, 22000],
        explanation: '$60,000 − $19,000 = $41,000 per recipient.',
      },
      {
        label: 'Combined taxable gifts to the first two recipients',
        correct: 82000,
        distractors: [120000, 101000, 41000],
        explanation: 'Two × $41,000 = $82,000.',
      },
      {
        label: 'Combined taxable gift after splitting $90,000',
        correct: 52000,
        distractors: [71000, 90000, 26000],
        explanation: 'Each spouse has $45,000 − $19,000 = $26,000; combined $52,000.',
      },
      {
        label: 'Taxable gift from the qualifying direct tuition payment',
        correct: 0,
        distractors: [25000, 6000, 19000],
        explanation: 'The case expressly meets the separate tuition-payment exclusion.',
      },
    ],
  },
};

export const entityDistributions: CurriculumLesson = {
  topic: 'entity-property-distributions',
  title: 'Property Distributions & Liquidation Basis Schedules',
  group: 'A-B-C',
  objectives: [
    'Analyze corporate gain on appreciated-property distributions.',
    'Apply supplied partnership property-basis rules.',
    'Distinguish liquidating and nonliquidating transactions.',
  ],
  teaching: [
    'Property distributions require analysis at entity and owner levels. A C corporation generally recognizes gain on a nonliquidating distribution of appreciated property under the applicable rule; loss on depreciated property is not automatically recognized. Shareholder treatment depends on value, liabilities, earnings and profits, and basis rules.',
    'Partnership distributions can preserve built-in gain through basis, subject to important exceptions. In a simple nonliquidating distribution, cash reduces outside basis before determining basis available for property. Property basis can be limited to the remaining outside basis. Marketable securities, hot assets, liabilities, and other special rules require separate analysis.',
    'In a simple complete liquidation involving cash and one capital asset, remaining outside basis after cash can determine that asset’s basis under the applicable allocation rules. This differs from the nonliquidating carryover-and-limitation model. Establish whether the interest is liquidated and identify property types and exceptions before calculating.',
  ],
  workedExample: {
    title: 'Nonliquidating distribution',
    facts:
      'Outside basis is $20,000. The partner receives $5,000 cash and property with partnership basis $30,000. Assume no special exceptions.',
    steps: [
      'Cash leaves $15,000 outside basis.',
      'The property basis is limited to that $15,000.',
      'Outside basis reaches zero rather than becoming negative.',
    ],
  },
  pitfalls: [
    'Entity and owner consequences differ.',
    'Liquidating and nonliquidating basis rules differ.',
    'Apply cash, property, and liability rules in order.',
  ],
  questions: [
    q(
      'A C corporation distributes property with basis $40,000 and value $70,000. Assume ordinary gain recognition and no liabilities. What corporate gain arises?',
      '$30,000.',
      ['$70,000.', '$40,000.', 'Zero in every distribution.'],
      'Value exceeds basis by $30,000 under the stated corporate rule.',
      'application',
    ),
    q(
      'A C corporation makes a nonliquidating distribution of property with a built-in loss. Is the loss automatically deductible?',
      'No.',
      [
        'Yes, every distribution recognizes all losses.',
        'Only shareholder age matters.',
        'The loss is always a refundable credit.',
      ],
      'The ordinary nonliquidating rules do not automatically recognize corporate loss.',
      'remembering',
    ),
    q(
      'A partner has $25,000 outside basis and receives $8,000 cash before property. What basis remains for the next step?',
      '$17,000.',
      ['$25,000.', '$33,000.', '$8,000.'],
      'Cash reduces outside basis by $8,000.',
      'application',
    ),
    q(
      'Nonliquidating property carryover basis is $30,000, but $17,000 outside basis remains. What property basis applies under the stated limitation?',
      '$17,000.',
      ['$30,000.', '$47,000.', '$13,000.'],
      'The property basis is limited to the available outside basis.',
      'analysis',
    ),
    q(
      'A simple complete liquidation gives $10,000 cash and one capital asset to a partner with $50,000 outside basis. No exception applies. What basis is assigned to the asset?',
      '$40,000.',
      ['$50,000.', '$10,000.', 'Zero automatically.'],
      'Remaining outside basis after cash is $40,000.',
      'application',
    ),
    q(
      'Why identify whether a distribution liquidates the interest?',
      'Property-basis and recognition rules can differ.',
      [
        'Only formatting changes.',
        'Every distribution has identical consequences.',
        'Only the mailing date matters.',
      ],
      'The transaction’s substance determines the applicable rules.',
      'analysis',
    ),
  ],
  simulation: {
    title: 'Independent distribution computations',
    scenario: 'Calculate entity gain and owner basis under the stated simplified rules.',
    exhibits: [
      {
        title: 'Corporate distribution',
        body: 'Property basis $60,000; value $100,000; no liabilities. The ordinary corporate gain-recognition rule applies.',
      },
      {
        title: 'Partnership cases',
        body: 'Nonliquidating: outside basis $35,000; cash $10,000; property carryover basis $40,000 limited to remaining outside basis. Separate complete liquidation: outside basis $80,000; cash $20,000; one capital asset receives the remaining outside basis. No special exceptions apply.',
      },
    ],
    tasks: [
      {
        label: 'Corporate gain',
        correct: 40000,
        distractors: [100000, 60000, 0],
        explanation: '$100,000 value − $60,000 basis = $40,000.',
      },
      {
        label: 'Outside basis after cash in the nonliquidating case',
        correct: 25000,
        distractors: [35000, 45000, 10000],
        explanation: '$35,000 − $10,000 = $25,000.',
      },
      {
        label: 'Property basis in the nonliquidating case',
        correct: 25000,
        distractors: [40000, 15000, 65000],
        explanation: 'Carryover basis is limited to $25,000 available outside basis.',
      },
      {
        label: 'Asset basis in the liquidation case',
        correct: 60000,
        distractors: [80000, 20000, 100000],
        explanation: '$80,000 outside basis − $20,000 cash = $60,000.',
      },
    ],
  },
};
