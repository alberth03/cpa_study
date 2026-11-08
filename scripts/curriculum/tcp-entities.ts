import { q, type CurriculumModule } from './types.ts';
export const tcpEntities: CurriculumModule = {
  title: 'Advanced Entity Tax Compliance',
  area: 2,
  lessons: [
    {
      topic: 'corporate-loss-compliance',
      title: 'Corporate Losses, Limitations & Book–Tax Reconciliation',
      group: 'A',
      objectives: [
        'Apply supplied NOL and ownership-change limits.',
        'Distinguish corporate capital-loss and ordinary-loss treatment.',
        'Review schedules without double-counting tax adjustments.',
      ],
      teaching: [
        'Corporate tax compliance requires reconciling book income, taxable income, separate limitations, carryforwards, and tax attributes. Permanent and temporary differences have different implications. Use tax-basis schedules and authoritative support rather than assuming book balances are tax balances.',
        'The use of net operating losses depends on the loss year and applicable law. Post-2017 NOLs generally have an 80%-of-taxable-income limitation under the relevant current rules, with exceptions and special periods. Ownership changes may impose an additional Section 382 limitation. A case supplies the relevant capacities so the interaction can be calculated without silently assuming every loss has the same character or year.',
        'Corporate capital losses generally offset capital gains rather than ordinary income, with applicable carryback and carryforward rules. Keep capital-loss attributes separate from NOLs. Track expiration, ownership changes, ordering, and prior use so a carryforward is not deducted twice. Review return schedules against source data and prior returns.',
      ],
      workedExample: {
        title: 'Two limits on NOL use',
        facts:
          'NOL carryforward is $130,000, taxable income before the NOL is $100,000, the applicable percentage limit is 80%, and a supplied ownership-change limit is $30,000.',
        steps: [
          'The percentage limit permits $80,000.',
          'The additional ownership-change limit permits only $30,000.',
          'Deduct $30,000, leaving $70,000 taxable income and $100,000 carryforward, ignoring other rules.',
        ],
      },
      pitfalls: [
        'The NOL’s year and type matter.',
        'A corporate capital loss is not automatically an ordinary-income deduction.',
        'Apply each relevant limit and track attributes separately.',
      ],
      questions: [
        q(
          'A qualifying NOL is $150,000 and the supplied 80% limit applies to $100,000 taxable income before NOL. No other limits apply. What deduction is allowed?',
          '$80,000.',
          ['$100,000.', '$150,000.', '$20,000.'],
          '80% × $100,000 = $80,000, below the available NOL.',
          'application',
        ),
        q(
          'The same case also has a supplied ownership-change limit of $25,000. What is the allowed NOL deduction?',
          '$25,000.',
          ['$80,000.', '$105,000.', '$150,000.'],
          'The additional lower limitation controls the stated current use.',
          'analysis',
        ),
        q(
          'A corporation has capital losses but no capital gains. What is the general current-year treatment against ordinary income?',
          'The capital losses generally do not offset ordinary income.',
          [
            'They automatically offset all wages and business income.',
            'They are always refundable credits.',
            'They disappear without considering carry rules.',
          ],
          'Corporate capital-loss treatment differs from the individual ordinary-income offset rule.',
          'remembering',
        ),
        q(
          'An NOL carryforward is $90,000 and $35,000 is used. What balance remains, ignoring other changes?',
          '$55,000.',
          ['$90,000.', '$125,000.', '$35,000.'],
          '$90,000 − $35,000 = $55,000.',
          'application',
        ),
        q(
          'Why distinguish permanent and temporary book–tax differences?',
          'They have different future tax and reconciliation implications.',
          [
            'All differences reverse identically.',
            'Neither affects taxable income.',
            'Only permanent differences require source records.',
          ],
          'Temporary differences can reverse; permanent differences do not have the same pattern.',
          'analysis',
        ),
        q(
          'A prior-year return already used part of a carryforward. What should the current return do?',
          'Reconcile to the remaining available attribute.',
          [
            'Deduct the original full amount again.',
            'Ignore prior returns.',
            'Convert the balance automatically into a credit.',
          ],
          'Carryforward schedules must reflect previous use and other changes.',
          'application',
        ),
      ],
      simulation: {
        title: 'Corporate NOL utilization schedule',
        scenario: 'Apply two supplied limitations and compute the remaining loss attribute.',
        exhibits: [
          {
            title: 'Taxable income and NOL',
            body: 'Taxable income before NOL $250,000. Available NOL carryforward $300,000. An 80% income limitation applies.',
          },
          {
            title: 'Additional limits and rate',
            body: 'A supplied ownership-change limit permits only $120,000 this year. Ignore other adjustments. Use a 21% corporate tax rate.',
          },
        ],
        tasks: [
          {
            label: 'Capacity under the 80% income limit',
            correct: 200000,
            distractors: [250000, 300000, 50000],
            explanation: '80% × $250,000 = $200,000.',
          },
          {
            label: 'Allowed NOL deduction after both limits',
            correct: 120000,
            distractors: [200000, 250000, 300000],
            explanation: 'The $120,000 ownership-change limit is the lower applicable capacity.',
          },
          {
            label: 'Remaining NOL carryforward',
            correct: 180000,
            distractors: [100000, 120000, 300000],
            explanation: '$300,000 − $120,000 = $180,000.',
          },
          {
            label: 'Tax before credits after NOL deduction',
            correct: 27300,
            distractors: [52500, 42000, 25200],
            explanation: '($250,000 − $120,000) × 21% = $27,300.',
          },
        ],
      },
    },
    {
      topic: 'partnership-advanced-compliance',
      title: 'Partnership Transactions, Hot Assets & Basis Adjustments',
      group: 'B',
      objectives: [
        'Distinguish guaranteed payments from distributions and allocations.',
        'Compute gain on an interest sale including liability relief.',
        'Evaluate hot-asset character and transferee-specific basis adjustments.',
      ],
      teaching: [
        'Partnership compliance separates ordinary business income, separately stated items, guaranteed payments, contributions, and distributions. A guaranteed payment is determined without regard to partnership income under the applicable rule; the partnership’s deduction or capitalization and the recipient’s income treatment require their own analysis. It is not simply another label for a cash draw.',
        'A sale of a partnership interest generally compares amount realized, including applicable liability relief, with outside basis. Section 751 can recharacterize part of the gain attributable to specified hot assets as ordinary. Do not assume all gain from a long-held partnership interest is capital. Use the supplied hot-asset allocation when the problem has already determined it.',
        'An applicable Section 754 election or mandatory adjustment rule can create an inside-basis adjustment associated with a transferred interest. A Section 743(b) adjustment is generally transferee-specific rather than an increase available to every partner. Keep outside basis, common inside basis, and special adjustments distinct, and evaluate related distribution and allocation rules.',
      ],
      workedExample: {
        title: 'Sale of an interest with liability relief',
        facts:
          'A partner receives $100,000 cash and is relieved of $20,000 partnership liabilities. Outside basis is $70,000. The case attributes $15,000 of gain to Section 751 assets.',
        steps: [
          'Amount realized is $120,000.',
          'Total gain is $50,000.',
          'The supplied $15,000 is ordinary; the remaining $35,000 receives the applicable capital treatment under the stated assumptions.',
        ],
      },
      pitfalls: [
        'Liability relief can be part of amount realized.',
        'Hot-asset rules can change character.',
        'A transferee-specific adjustment is not automatically shared by all partners.',
      ],
      questions: [
        q(
          'A partner receives $80,000 cash and $25,000 liability relief for an interest with $60,000 basis. What is total gain?',
          '$45,000.',
          ['$20,000.', '$105,000.', '$25,000.'],
          'Amount realized is $105,000; subtract $60,000 outside basis.',
          'application',
        ),
        q(
          'Total gain is $45,000 and the supplied Section 751 ordinary amount is $12,000. What gain remains for the stated capital treatment?',
          '$33,000.',
          ['$45,000.', '$12,000.', '$57,000.'],
          '$45,000 − $12,000 = $33,000.',
          'application',
        ),
        q(
          'What can Section 751 affect on sale of a partnership interest?',
          'The character of gain attributable to specified hot assets.',
          [
            'Only the partnership’s mailing address.',
            'Only the number of partners.',
            'Every gain becomes tax-free automatically.',
          ],
          'Hot-asset rules can produce ordinary treatment despite an interest sale.',
          'remembering',
        ),
        q(
          'A guaranteed payment is generally determined how?',
          'Without regard to partnership income under the applicable rule.',
          [
            'Always as a percentage of profit only.',
            'Only after liquidation.',
            'Only by the recipient’s stock price.',
          ],
          'Guaranteed payments differ from ordinary profit allocations and distributions.',
          'application',
        ),
        q(
          'Under an applicable Section 743(b) adjustment, who generally benefits from the transferee-specific adjustment?',
          'The transferee partner for whom the adjustment is determined.',
          [
            'Every partner automatically in equal shares.',
            'Only the selling partner after the sale.',
            'Every unrelated creditor.',
          ],
          'Special basis adjustments must be tracked separately from common inside basis.',
          'analysis',
        ),
        q(
          'Why reconcile guaranteed payments and ordinary partnership income carefully?',
          'To avoid omitting or double-counting income and related entity deductions.',
          [
            'They are always the same line item.',
            'All guaranteed payments are nontaxable gifts.',
            'Partnership cash alone determines all tax items.',
          ],
          'The distinct categories have related but separate tax consequences.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'Partnership interest sale workpaper',
        scenario: 'Compute sale gain, character, and a supplied basis-adjustment difference.',
        exhibits: [
          {
            title: 'Sale facts',
            body: 'Cash received $150,000; liability relief $30,000; outside basis $100,000. Of the gain, $20,000 is attributed to Section 751 assets under the supplied analysis.',
          },
          {
            title: 'Buyer basis facts',
            body: 'For a separate stated Section 743(b) computation, the buyer’s outside basis is $180,000 and allocable common inside basis is $140,000. Assume an applicable election and no other adjustments.',
          },
        ],
        tasks: [
          {
            label: 'Seller amount realized',
            correct: 180000,
            distractors: [150000, 120000, 30000],
            explanation: '$150,000 cash + $30,000 liability relief.',
          },
          {
            label: 'Seller total gain',
            correct: 80000,
            distractors: [50000, 180000, 100000],
            explanation: '$180,000 − $100,000 = $80,000.',
          },
          {
            label: 'Gain remaining after the supplied ordinary portion',
            correct: 60000,
            distractors: [80000, 20000, 100000],
            explanation: '$80,000 − $20,000 = $60,000.',
          },
          {
            label: 'Supplied transferee-specific basis adjustment',
            correct: 40000,
            distractors: [180000, 140000, 320000],
            explanation: '$180,000 outside basis − $140,000 allocable inside basis = $40,000.',
          },
        ],
      },
    },
    {
      topic: 's-corporation-advanced-compliance',
      title: 'S Corporation Debt Basis, Distributions & Built-In Gains',
      group: 'C',
      objectives: [
        'Track stock and direct debt basis separately.',
        'Evaluate repayment of reduced-basis shareholder debt.',
        'Apply supplied built-in-gains and accumulated-E&P facts.',
      ],
      teaching: [
        'S corporation losses can reduce stock basis and then qualifying direct debt basis under the applicable ordering rules. Track each separately. Later income may restore previously reduced debt basis under the required rules. A repayment of debt whose tax basis is below the repayment amount can generate taxable gain; the existence of an original loan does not make every repayment tax-free.',
        'Distributions can become more complex when the corporation has accumulated C-corporation earnings and profits. The accumulated adjustments account, stock basis, elections, and ordering rules matter. State whether special elections apply. Do not use shareholder debt basis automatically to shelter a cash distribution.',
        'An S corporation with former C-corporation attributes can face entity-level built-in-gains tax when applicable recognition-period and other requirements are met. The calculation can be limited by net recognized built-in gain, taxable income, and remaining net unrealized built-in gain under the relevant rules. A question supplies those limitations when testing arithmetic; S status does not universally eliminate every entity-level tax.',
      ],
      workedExample: {
        title: 'Repayment of reduced-basis debt',
        facts:
          'A shareholder loan has face amount $20,000 and remaining tax basis $8,000. The entire loan is repaid. Assume the stated debt rules apply and no restoration occurs first.',
        steps: [
          'Cash received is $20,000.',
          'Recover the $8,000 tax basis.',
          'The $12,000 excess is taxable gain; determine character under the applicable debt facts.',
        ],
      },
      pitfalls: [
        'Keep stock and debt basis separate.',
        'Debt repayment after basis reduction may be taxable.',
        'S status does not eliminate every tax inherited from C-corporation history.',
      ],
      questions: [
        q(
          'A shareholder loan is repaid in full for $30,000 when tax basis is $12,000. No basis restoration occurs. What gain is indicated?',
          '$18,000.',
          ['$30,000.', '$12,000.', 'Zero automatically.'],
          'Repayment exceeds the remaining tax basis by $18,000.',
          'application',
        ),
        q(
          'Stock basis is $10,000, qualifying debt basis $15,000, and allocated loss $30,000. Ignore other limits. What loss is suspended for lack of basis?',
          '$5,000.',
          ['$30,000.', '$15,000.', '$10,000.'],
          'Total basis capacity is $25,000, leaving $5,000.',
          'application',
        ),
        q(
          'Can shareholder debt basis automatically shelter a nondividend cash distribution exceeding stock basis?',
          'No.',
          [
            'Yes, every debt basis amount applies to distributions.',
            'Only the debt’s interest rate matters.',
            'All S distributions are tax-free.',
          ],
          'Stock and debt basis have different functions.',
          'analysis',
        ),
        q(
          'A former C corporation is now an S corporation. Can an entity-level built-in-gains tax still apply?',
          'Yes, when the applicable statutory conditions are met.',
          [
            'No, S status eliminates all entity tax in every case.',
            'Only if it has no assets.',
            'Only if shareholders request it.',
          ],
          'Former C-corporation attributes can create specified entity-level tax exposure.',
          'remembering',
        ),
        q(
          'The supplied taxable built-in-gain base is $40,000 and tax rate 21%. What is entity tax before other adjustments?',
          '$8,400.',
          ['$40,000.', '$21,000.', '$31,600.'],
          '$40,000 × 21% = $8,400.',
          'application',
        ),
        q(
          'Why do accumulated C-corporation earnings and profits matter to S distributions?',
          'They can change ordering and dividend treatment under applicable rules.',
          [
            'They are always identical to stock basis.',
            'They automatically disappear on election.',
            'They make all distributions wages.',
          ],
          'Distribution rules can depend on AAA, E&P, basis, and elections.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'S corporation compliance review',
        scenario: 'Evaluate independent debt-basis, loss, and built-in-gain computations.',
        exhibits: [
          {
            title: 'Shareholder items',
            body: 'A direct loan with face amount $50,000 and tax basis $20,000 is fully repaid. Separately, another shareholder has stock basis $12,000, qualifying debt basis $8,000, and a $27,000 loss; ignore other limits.',
          },
          {
            title: 'Entity tax',
            body: 'The case determines a taxable built-in-gain base of $60,000 after all applicable limitations. Use a 21% tax rate.',
          },
        ],
        tasks: [
          {
            label: 'Gain on the full loan repayment',
            correct: 30000,
            distractors: [50000, 20000, 0],
            explanation: '$50,000 repayment less $20,000 basis = $30,000.',
          },
          {
            label: 'Loss capacity from stock and debt basis',
            correct: 20000,
            distractors: [12000, 8000, 27000],
            explanation: '$12,000 + $8,000 = $20,000.',
          },
          {
            label: 'Loss suspended for lack of basis',
            correct: 7000,
            distractors: [27000, 15000, 19000],
            explanation: '$27,000 − $20,000 = $7,000.',
          },
          {
            label: 'Built-in-gains tax under supplied assumptions',
            correct: 12600,
            distractors: [60000, 21000, 47400],
            explanation: '$60,000 × 21% = $12,600.',
          },
        ],
      },
    },
  ],
};
