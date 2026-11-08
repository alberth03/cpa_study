import { q, type CurriculumModule } from './types.ts';
export const tcpIndividuals: CurriculumModule = {
  title: 'Individual Tax Planning & Personal Finance',
  area: 1,
  lessons: [
    {
      topic: 'individual-advanced-planning',
      title: 'Equity Compensation, Estimated Tax & Multiyear Planning',
      group: 'A',
      objectives: [
        'Analyze compensation timing and supplied AMT facts.',
        'Compute estimated-tax requirements under stated safe harbors.',
        'Compare lawful timing alternatives using changing rates.',
      ],
      teaching: [
        'Tax planning begins with legally available alternatives and complete facts. Constructive receipt, economic benefit, accounting method, and special provisions can restrict timing choices. A favorable spreadsheet result does not establish that income can legally be deferred. Compare current and future rates, cash needs, time value, and the risk of changed law.',
        'Equity awards have distinct tax rules. In a simple nonqualified option exercise, the spread between stock value and exercise price can be ordinary compensation, with resulting stock basis. Incentive stock options can have different regular-tax and AMT effects and holding-period requirements. Market value, exercise price, vesting, and disposition dates must not be confused.',
        'Estimated-tax safe harbors compare applicable percentages of current and prior tax and consider withholding and payment timing. Higher-income taxpayers can face a higher prior-year percentage. Other individual issues include foreign earned income, imputed interest, and a child’s unearned income; each has eligibility and calculation rules that must be applied using the relevant period rather than a blanket exclusion.',
      ],
      workedExample: {
        title: 'Nonqualified option exercise',
        facts:
          'An employee exercises 1,000 nonqualified options at $10 when stock is worth $30. Assume the spread is taxable compensation and no other special rule applies.',
        steps: [
          'Compensation is 1,000 × ($30 − $10) = $20,000.',
          'Cash paid is $10,000.',
          'Stock basis is $30,000 under these facts, reflecting cash plus compensation.',
        ],
      },
      pitfalls: [
        'Do not apply ISO and nonqualified-option rules interchangeably.',
        'Tax savings do not prove a timing strategy is legally available.',
        'Estimated-tax requirements include timing as well as annual totals.',
      ],
      questions: [
        q(
          '2,000 nonqualified options are exercised at $15 when stock is worth $25. Under the stated spread-inclusion rule, what is compensation?',
          '$20,000.',
          ['$50,000.', '$30,000.', '$10,000.'],
          '2,000 × ($25 − $15) = $20,000.',
          'application',
        ),
        q(
          'The same exercise requires $30,000 cash and creates $20,000 compensation. What is stock basis under the supplied assumptions?',
          '$50,000.',
          ['$30,000.', '$20,000.', '$10,000.'],
          'Cash plus the included compensation produces $50,000 basis.',
          'application',
        ),
        q(
          'A safe harbor requires the lesser of 90% of $50,000 current tax or 110% of $30,000 prior tax. What is required annual payment?',
          '$33,000.',
          ['$45,000.', '$50,000.', '$30,000.'],
          'Compare $45,000 with $33,000.',
          'application',
        ),
        q(
          'A legally permitted $10,000 deduction can be taken this year at a 32% rate or next year at 24%. Ignore time value and other effects. What is the additional tax saving from taking it this year?',
          '$800.',
          ['$3,200.', '$2,400.', '$5,600.'],
          'The rate difference is 8%; 8% of $10,000 is $800.',
          'analysis',
        ),
        q(
          'Which principle can restrict deferring cash-method income that is already available without substantial restriction?',
          'Constructive receipt.',
          [
            'An arbitrary choice of spreadsheet year.',
            'Only the client’s preference.',
            'The length of an invoice.',
          ],
          'A timing strategy must satisfy the applicable tax doctrines.',
          'remembering',
        ),
        q(
          'Why analyze ISO exercise separately for regular tax and AMT?',
          'The same transaction can have different effects under the two systems.',
          [
            'AMT never applies to equity compensation.',
            'Every option is taxed identically.',
            'Only the employee’s job title matters.',
          ],
          'Incentive-option rules can create distinct regular-tax and alternative-minimum-tax consequences.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'Equity award and tax-payment planning',
        scenario:
          'Prepare compensation, basis, and estimated-payment amounts under the supplied rules.',
        exhibits: [
          {
            title: 'Option exercise',
            body: '1,500 nonqualified options are exercised at $12 when stock value is $32. The spread is ordinary compensation; basis includes exercise cash and compensation.',
          },
          {
            title: 'Estimated tax',
            body: 'Required annual payment is the lesser of 90% of $60,000 projected current tax and 110% of $40,000 prior tax. Qualifying withholding is $30,000. Ignore timing differences among installments.',
          },
        ],
        tasks: [
          {
            label: 'Option compensation income',
            correct: 30000,
            distractors: [48000, 18000, 20000],
            explanation: '1,500 × ($32 − $12) = $30,000.',
          },
          {
            label: 'Stock basis after exercise',
            correct: 48000,
            distractors: [30000, 18000, 66000],
            explanation: '$18,000 exercise cash plus $30,000 compensation = $48,000.',
          },
          {
            label: 'Required annual tax payment',
            correct: 44000,
            distractors: [54000, 60000, 40000],
            explanation: 'The lesser of $54,000 and $44,000 is $44,000.',
          },
          {
            label: 'Additional estimated payments after withholding',
            correct: 14000,
            distractors: [24000, 44000, 30000],
            explanation: '$44,000 required less $30,000 withholding = $14,000.',
          },
        ],
      },
    },
    {
      topic: 'at-risk-passive-losses',
      title: 'Basis, At-Risk & Passive-Activity Loss Limitations',
      group: 'B',
      objectives: [
        'Apply loss limitations in the proper sequence.',
        'Track separately suspended losses.',
        'Evaluate disposition and participation facts.',
      ],
      teaching: [
        'A loss can pass one limitation and fail another. For a pass-through interest, first evaluate the relevant tax-basis limitation, then at-risk limitations, and then passive-activity limitations when applicable. The at-risk amount is not always identical to basis because debt and other arrangements can be treated differently. State which amounts have already been determined.',
        'Passive activity generally depends on the taxpayer’s participation and the statutory rules, with special treatment for rentals and exceptions where requirements are met. Passive losses are generally limited to passive income, with carryforwards and disposition rules. A taxpayer’s salary is not passive income simply because little effort was required to receive it.',
        'Maintain separate schedules for basis-suspended, at-risk-suspended, and passive-suspended amounts. Later changes can release different layers in a prescribed order. A qualifying complete taxable disposition to an unrelated party may permit release of passive losses, but special facts and other remaining limitations still need evaluation. Do not assume any partial sale releases everything.',
      ],
      workedExample: {
        title: 'Three limitation layers',
        facts:
          'A $60,000 loss is subject to available basis of $50,000, at-risk capacity of $30,000, and available passive income of $10,000. Apply the limits in that order and assume no exception.',
        steps: [
          'Basis allows $50,000 and suspends $10,000.',
          'At-risk rules allow $30,000 of that amount and suspend $20,000.',
          'Passive rules allow $10,000 and suspend another $20,000.',
        ],
      },
      pitfalls: [
        'Do not combine every suspended loss into one undifferentiated balance.',
        'Basis and at-risk amounts can differ.',
        'Participation and disposition exceptions require their actual conditions.',
      ],
      questions: [
        q(
          'A $40,000 pass-through loss is limited by $25,000 basis before other rules. What is basis-suspended loss?',
          '$15,000.',
          ['$40,000.', '$25,000.', 'Zero.'],
          'The loss exceeds available basis by $15,000.',
          'application',
        ),
        q(
          'After the basis limit, $25,000 loss remains. At-risk capacity is $18,000. What additional amount is suspended by at-risk rules?',
          '$7,000.',
          ['$18,000.', '$25,000.', '$43,000.'],
          '$25,000 − $18,000 = $7,000.',
          'application',
        ),
        q(
          'A passive loss of $18,000 reaches the passive-activity stage, and passive income is $6,000. No exception applies. What is currently allowed?',
          '$6,000.',
          ['$18,000.', '$12,000.', 'Zero regardless of passive income.'],
          'The supplied passive income supports $6,000 of loss.',
          'application',
        ),
        q(
          'Which sequence generally applies to a pass-through loss subject to all three limits?',
          'Basis, then at risk, then passive activity.',
          [
            'Passive activity before every basis computation.',
            'At risk only; basis never matters.',
            'Any sequence gives the same suspended categories.',
          ],
          'The ordering determines both allowed losses and the separate carryforwards.',
          'remembering',
        ),
        q(
          'Does any partial disposition automatically release all suspended passive losses?',
          'No; the qualifying-disposition rules and facts must be evaluated.',
          [
            'Yes, any sale of one unit releases everything.',
            'Only the sale price matters.',
            'Passive losses can never be released.',
          ],
          'Disposition relief has specific requirements.',
          'analysis',
        ),
        q(
          'Why maintain separate loss-suspension schedules?',
          'Different limitations have different release conditions and ordering.',
          [
            'All suspended losses are identical forever.',
            'Schedules create extra deductions automatically.',
            'Only the file name matters.',
          ],
          'Separate tracking prevents incorrect deductions and carryforwards.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'Layered loss-limitation workpaper',
        scenario: 'Apply the stated loss limitations in sequence.',
        exhibits: [
          {
            title: 'Loss and capacities',
            body: 'Allocated loss $80,000. Available basis $65,000. At-risk capacity for the loss passing basis is $45,000.',
          },
          {
            title: 'Passive limitations',
            body: 'The activity is passive for this taxpayer. Available passive income is $20,000. No exception, disposition release, or other limitation applies.',
          },
        ],
        tasks: [
          {
            label: 'Loss suspended at the basis stage',
            correct: 15000,
            distractors: [65000, 35000, 80000],
            explanation: '$80,000 − $65,000 = $15,000.',
          },
          {
            label: 'Additional loss suspended at the at-risk stage',
            correct: 20000,
            distractors: [45000, 35000, 15000],
            explanation: '$65,000 − $45,000 = $20,000.',
          },
          {
            label: 'Additional loss suspended at the passive stage',
            correct: 25000,
            distractors: [20000, 45000, 60000],
            explanation: '$45,000 − $20,000 = $25,000.',
          },
          {
            label: 'Currently deductible loss',
            correct: 20000,
            distractors: [80000, 65000, 45000],
            explanation: 'Only $20,000 passes all three supplied limitations.',
          },
        ],
      },
    },
    {
      topic: 'personal-financial-planning',
      title: 'Retirement, Education, Gifts & After-Tax Investing',
      group: 'C-D',
      objectives: [
        'Compare after-tax investment returns using consistent assumptions.',
        'Distinguish traditional and Roth-style retirement treatment.',
        'Evaluate gifting, ownership, and education-planning considerations.',
      ],
      teaching: [
        'Personal financial planning integrates taxes with risk, liquidity, investment horizon, retirement needs, insurance, education, and estate objectives. A tax-favored investment is not automatically the best choice if its risk, restrictions, or liquidity do not meet the client’s needs. Compare alternatives on an after-tax and risk-consistent basis.',
        'Traditional retirement arrangements may permit current deductions with later taxable distributions, while qualifying Roth distributions can be tax-free after after-tax contributions. Eligibility, limits, early-distribution rules, and qualification conditions matter. Education plans, scholarships, and credits have distinct rules and coordination limits. Do not assume the same expense supports every tax benefit simultaneously.',
        'Gift and estate planning requires identifying legal ownership, beneficiary designations, basis consequences, annual exclusions, marital and charitable provisions, and the unified transfer-tax system. A taxable gift does not necessarily mean current gift tax is payable after available credit. Gifts of appreciated property can carry basis to the recipient, while inherited-basis rules can differ. Use the applicable year’s amounts and explicit facts.',
        'For taxable versus tax-exempt fixed-income alternatives, compare yields after relevant taxes and consider credit and market risk. A tax-equivalent yield divides a tax-exempt yield by one minus the applicable tax rate under the simplified assumptions. State whether state tax, AMT, or other effects are excluded.',
      ],
      workedExample: {
        title: 'After-tax yield comparison',
        facts:
          'A taxable bond yields 6% and a qualifying tax-exempt bond 4.5%. The supplied marginal rate is 25%; assume equal risk and ignore all other taxes.',
        steps: [
          'Taxable after-tax yield is 6% × 75% = 4.5%.',
          'The two stated after-tax yields are equal.',
          'Real planning must still consider risk, liquidity, and other tax effects.',
        ],
      },
      pitfalls: [
        'A taxable gift is not automatically an immediate tax payment.',
        'A tax benefit does not remove investment risk.',
        'Retirement and education eligibility rules must be checked.',
      ],
      questions: [
        q(
          'A taxable bond yields 8% and the applicable tax rate is 25%. Ignore other effects. What is after-tax yield?',
          '6%.',
          ['8%.', '2%.', '10%.'],
          '8% × (1 − 25%) = 6%.',
          'application',
        ),
        q(
          'A qualifying tax-exempt yield is 4% and the supplied tax rate is 20%. What is tax-equivalent yield?',
          '5%.',
          ['4%.', '3.2%.', '20%.'],
          '4% ÷ (1 − 20%) = 5%.',
          'application',
        ),
        q(
          'Under qualifying Roth treatment, what is a central distinction from a deductible traditional arrangement?',
          'Contributions are after tax and qualified distributions can be tax-free.',
          [
            'Every contribution is deductible and every distribution tax-free without conditions.',
            'No eligibility rules apply.',
            'There are no distribution conditions.',
          ],
          'The tax timing and qualification requirements differ.',
          'remembering',
        ),
        q(
          'A gift is $50,000 and the supplied applicable annual exclusion is $19,000. No other exclusion applies. What is taxable gift before available unified credit?',
          '$31,000.',
          ['$50,000.', '$19,000.', 'Zero automatically.'],
          '$50,000 − $19,000 = $31,000; available credit is considered separately.',
          'application',
        ),
        q(
          'Does a taxable gift necessarily create current gift tax payable?',
          'No; available credits and other applicable rules must be considered.',
          [
            'Yes, taxable gift and tax payable are identical.',
            'Only cash gifts are ever relevant.',
            'Gift tax is always the recipient’s income tax.',
          ],
          'Taxable transfers and the eventual tax payment are different calculations.',
          'analysis',
        ),
        q(
          'Why evaluate beneficiary designations and legal ownership in estate planning?',
          'They affect who receives assets and how transfers operate.',
          [
            'Only current investment yield matters.',
            'A will overrides every possible designation automatically.',
            'Ownership never affects tax or transfer consequences.',
          ],
          'Planning requires the actual legal transfer structure, not tax calculations alone.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'Personal planning comparison',
        scenario: 'Compare two investments and compute a gift under the supplied assumptions.',
        exhibits: [
          {
            title: 'Investments',
            body: 'Taxable bond yield 7%; qualifying tax-exempt bond yield 5%; supplied marginal rate 30%. Assume equal risk and ignore state tax and other effects.',
          },
          {
            title: 'Gift',
            body: 'Cash gift $70,000; supplied annual exclusion $19,000. No gift splitting or other exclusion. Compute taxable gift before available unified credit.',
          },
        ],
        tasks: [
          {
            label: 'Taxable bond after-tax yield, percent',
            correct: 4.9,
            distractors: [7, 2.1, 5],
            explanation: '7% × 70% = 4.9%.',
            tolerance: 0.001,
          },
          {
            label: 'Higher stated after-tax yield',
            correct: 'Tax-exempt bond',
            options: [
              'Tax-exempt bond',
              'Taxable bond',
              'Exactly equal',
              'Cannot compare the supplied equal-risk assumptions',
            ],
            explanation: 'The tax-exempt yield is 5%, above 4.9%.',
          },
          {
            label: 'Taxable gift before unified credit',
            correct: 51000,
            distractors: [70000, 19000, 89000],
            explanation: '$70,000 − $19,000 = $51,000.',
          },
          {
            label: 'Does that taxable gift alone establish current tax payable?',
            correct: 'No; evaluate available credit and other rules',
            options: [
              'No; evaluate available credit and other rules',
              'Yes, the gift amount is the tax',
              'Yes, the recipient owes wage tax',
              'No transfer reporting can ever apply',
            ],
            explanation: 'Taxable gift and tax payable are separate.',
          },
        ],
      },
    },
  ],
};
