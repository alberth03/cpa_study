import { q, type CurriculumModule } from './types.ts';
export const regIndividuals: CurriculumModule = {
  title: 'Individual Federal Taxation',
  area: 4,
  lessons: [
    {
      topic: 'individual-income',
      title: 'Gross Income, Exclusions & Investment Income',
      group: 'A',
      objectives: [
        'Identify taxable receipts and common exclusions.',
        'Compute capital gains using basis and holding-period facts.',
        'Distinguish receipt of an asset from its later disposition.',
      ],
      teaching: [
        'Gross income broadly includes accessions to wealth unless a specific exclusion applies. Wages, taxable interest, business income, rents, and many gains are included. Gifts and inheritances received are generally excluded from the recipient’s gross income, while income subsequently produced by the property is analyzed separately. Qualifying municipal-bond interest may be excluded for regular federal income-tax purposes, with other tax consequences evaluated separately.',
        'Investment dispositions require adjusted basis and holding-period analysis. Net short-term and long-term results under the applicable rules rather than treating every stock sale as ordinary wages. For an individual, the ordinary-income deduction for net capital losses is generally limited, with unused losses carried forward. Filing status and other circumstances can affect the limit.',
        'Digital assets are property for federal income-tax purposes. Receiving digital assets as compensation generally produces income based on fair value when received; that amount generally becomes basis for later gain or loss. A later sale can therefore create an additional gain or loss rather than repeating the entire sales proceeds as compensation. Keep dates, values, and transaction records.',
        'Distinguish an exclusion from a deduction or credit. A provision allowing a deduction for qualifying income does not necessarily make the receipt nontaxable or eliminate payroll-tax treatment. Current-law changes and eligibility periods must be checked before applying provisions involving tips, overtime, or other specialized receipts.',
      ],
      workedExample: {
        title: 'Compensation paid in digital assets',
        facts:
          'An employee receives digital assets worth $5,000 as taxable compensation and later sells them for $6,200. Assume no fees and the sale is a taxable capital transaction.',
        steps: [
          'Include $5,000 of compensation income on receipt.',
          'Use $5,000 as basis for the later sale.',
          'The later gain is $1,200; determine holding-period character from the acquisition and sale dates.',
        ],
      },
      pitfalls: [
        'A gift exclusion does not exempt income later earned by the property.',
        'Gross proceeds are not the same as gain.',
        'A deduction for a qualifying receipt is not necessarily an exclusion.',
      ],
      questions: [
        q(
          'An individual receives a genuine $20,000 cash gift from a parent. What is the general recipient income-tax treatment?',
          'Exclude the gift from gross income.',
          ['Include it as wages.', 'Include it as business sales.', 'Deduct it as a capital loss.'],
          'A genuine gift is generally excluded from the recipient’s gross income; transfer-tax issues are separate.',
          'remembering',
        ),
        q(
          'Taxable compensation is $70,000, taxable interest is $2,000, and qualifying municipal interest is $1,000. Ignoring other items, what is regular federal gross income?',
          '$72,000.',
          ['$73,000.', '$70,000.', '$71,000.'],
          'Include compensation and taxable interest; the stated qualifying municipal interest is excluded for this calculation.',
          'application',
        ),
        q(
          'Digital assets worth $8,000 are received for services and later sold for $9,500. No fees apply. What is the later gain?',
          '$1,500.',
          ['$9,500.', '$8,000.', '$17,500.'],
          'The service value becomes basis under the stated facts; later proceeds minus $8,000 basis equals $1,500.',
          'application',
        ),
        q(
          'Investment stock with adjusted basis $12,000 is sold for $17,000. What is gain before holding-period characterization?',
          '$5,000.',
          ['$17,000.', '$12,000.', '$29,000.'],
          'Gain is proceeds less adjusted basis.',
          'application',
        ),
        q(
          'A single taxpayer has a $9,000 net capital loss and no special rules apply. What is the general maximum current deduction against ordinary income?',
          '$3,000.',
          ['$9,000.', '$6,000.', 'Zero in every case.'],
          'The general annual ordinary-income offset is $3,000 for a single individual, with unused loss carried forward.',
          'application',
        ),
        q(
          'Which statement about a newly enacted deduction for qualifying receipts is sound?',
          'Analyze the deduction separately from inclusion and employment-tax treatment.',
          [
            'The receipt is automatically excluded from every tax.',
            'All reporting records become unnecessary.',
            'The deduction applies identically in every year.',
          ],
          'Inclusion, deductions, and other tax regimes can differ; evaluate the specific provision and period.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'Individual income reconciliation',
        scenario: 'Prepare an income summary using the classifications and assumptions supplied.',
        exhibits: [
          {
            title: 'Receipts',
            body: 'Wages $90,000; taxable bank interest $3,000; qualifying municipal interest $2,000; genuine cash gift $15,000. Digital assets worth $4,000 were received for taxable consulting services.',
          },
          {
            title: 'Later sale',
            body: 'Those digital assets were later sold for $5,500 with no fees. Include the service income and later gain; ignore deductions and special rates.',
          },
        ],
        tasks: [
          {
            label: 'Taxable wages and bank interest',
            correct: 93000,
            distractors: [95000, 108000, 90000],
            explanation: '$90,000 + $3,000 = $93,000.',
          },
          {
            label: 'Consulting income on digital-asset receipt',
            correct: 4000,
            distractors: [5500, 1500, 0],
            explanation: 'Use fair value of the assets when received for services.',
          },
          {
            label: 'Gain on the later digital-asset sale',
            correct: 1500,
            distractors: [5500, 4000, 9500],
            explanation: '$5,500 proceeds less $4,000 basis = $1,500.',
          },
          {
            label: 'Total income included under the supplied assumptions',
            correct: 98500,
            distractors: [100500, 113500, 93000],
            explanation:
              '$93,000 + $4,000 + $1,500 = $98,500; the stated gift and qualifying municipal interest are excluded.',
          },
        ],
      },
    },
    {
      topic: 'individual-deductions',
      title: 'AGI, Itemized Deductions & Taxable Income',
      group: 'B-C',
      objectives: [
        'Distinguish adjustments to income from deductions after AGI.',
        'Compare allowed itemized deductions with the applicable standard deduction.',
        'Apply supplied limitations and compute taxable income.',
      ],
      teaching: [
        'The individual return moves from gross income to adjusted gross income, then through allowable deductions to taxable income. Adjustments for AGI and deductions from AGI have different roles. Eligibility and limits for retirement contributions, student-loan interest, business deductions, and similar items depend on the applicable facts and law; a payment is not deductible merely because it has a familiar label.',
        'Compare allowed itemized deductions with the applicable standard deduction when the taxpayer is eligible to choose. Filing status, age, dependency, and other circumstances can affect the standard deduction. Itemized categories can include qualified taxes, interest, charitable contributions, and medical expenses, each with its own limitations. Apply limitations before comparing totals.',
        'Tax-year and examination-testing dates matter. The 2026 course uses explicit amounts in worked problems, including any permitted qualified-business-income or additional deductions. Do not silently apply a prior-year SALT limit, charitable rule, or standard deduction. Distinguish a tax deduction from a credit: a deduction reduces the tax base, while a credit generally reduces tax itself.',
        'Document taxable income as a reconciliation. If a question supplies already-allowed amounts after statutory limitations, use those amounts without imposing a second unsupported limitation. If the facts require a limitation, show its base, rate, and interaction with other items before calculating the final result.',
      ],
      workedExample: {
        title: 'AGI to taxable income',
        facts:
          'Gross income is $100,000, allowable adjustments for AGI are $8,000, allowable itemized deductions are $18,000, and the applicable standard deduction supplied is $16,100. No other deduction applies.',
        steps: [
          'AGI is $92,000.',
          'Use the larger allowed deduction, $18,000.',
          'Taxable income is $74,000.',
        ],
      },
      pitfalls: [
        'Compare allowed itemized amounts after applicable limitations.',
        'Deductions and credits do not affect tax in the same way.',
        'The example’s stated amounts are tied to its reference period.',
      ],
      questions: [
        q(
          'Gross income is $120,000 and allowable adjustments for AGI total $10,000. What is AGI?',
          '$110,000.',
          ['$120,000.', '$130,000.', '$10,000.'],
          'AGI equals gross income less allowable adjustments.',
          'application',
        ),
        q(
          'A taxpayer may choose between allowed itemized deductions of $14,000 and a supplied standard deduction of $16,100. Which amount ordinarily minimizes taxable income?',
          '$16,100.',
          ['$14,000.', '$30,100.', '$2,100.'],
          'Use the larger permitted alternative, not both.',
          'application',
        ),
        q(
          'AGI is $90,000 and the allowed deduction after AGI is $20,000. No other deductions apply. What is taxable income?',
          '$70,000.',
          ['$90,000.', '$110,000.', '$20,000.'],
          '$90,000 − $20,000 = $70,000.',
          'application',
        ),
        q(
          'Which description distinguishes a deduction from a credit?',
          'A deduction reduces the tax base; a credit generally reduces tax liability.',
          [
            'Both always reduce tax dollar for dollar.',
            'A credit always increases gross income.',
            'A deduction always creates a refund equal to its amount.',
          ],
          'The tax benefit of a deduction depends on tax rates; credits operate against tax under their rules.',
          'remembering',
        ),
        q(
          'A problem states that a charitable deduction is already limited to the allowable amount. What should the student do?',
          'Use the supplied allowed amount unless other stated facts require another adjustment.',
          [
            'Apply every remembered percentage limit again.',
            'Deduct the original contribution and the allowed amount.',
            'Ignore the contribution entirely.',
          ],
          'Respect supplied assumptions and avoid double-limiting or double-counting.',
          'analysis',
        ),
        q(
          'Why must a SALT deduction problem specify the relevant law and facts?',
          'Dollar limits and phase-out rules can change and may depend on taxpayer circumstances.',
          [
            'The limit is identical for all taxpayers forever.',
            'Only state names determine deductibility.',
            'The deduction is always a refundable credit.',
          ],
          'Time-sensitive provisions require versioned assumptions and appropriate taxpayer facts.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'Taxable-income workpaper',
        scenario: 'Compute AGI and taxable income using the expressly allowed amounts.',
        exhibits: [
          {
            title: 'Income and adjustments',
            body: 'Gross income is $150,000. Adjustments allowed for AGI total $12,000.',
          },
          {
            title: 'Deductions',
            body: 'Allowed itemized deductions after all applicable limits total $24,000. The supplied standard deduction alternative is $16,100. An additional separately allowed deduction is $6,000. No other limitations apply.',
          },
        ],
        tasks: [
          {
            label: 'Adjusted gross income',
            correct: 138000,
            distractors: [150000, 162000, 126000],
            explanation: '$150,000 − $12,000 = $138,000.',
          },
          {
            label: 'Selected itemized or standard deduction',
            correct: 24000,
            distractors: [16100, 40100, 7900],
            explanation: 'The allowed itemized deduction is larger.',
          },
          {
            label: 'Total deductions from AGI in this case',
            correct: 30000,
            distractors: [24000, 22100, 46100],
            explanation: '$24,000 plus the separate $6,000 allowed deduction.',
          },
          {
            label: 'Taxable income',
            correct: 108000,
            distractors: [114000, 120000, 138000],
            explanation: '$138,000 − $30,000 = $108,000.',
          },
        ],
      },
    },
    {
      topic: 'individual-filing-credits',
      title: 'Filing Status, Credits, Payments & Return Review',
      group: 'D-E',
      objectives: [
        'Identify filing-status facts and related responsibilities.',
        'Apply refundable and nonrefundable credit mechanics.',
        'Reconcile total tax, withholding, estimates, and refunds.',
      ],
      teaching: [
        'Filing status depends on marital and household facts under the applicable rules. Head-of-household status generally requires an unmarried or considered-unmarried taxpayer, a qualifying person, and payment of more than half the cost of maintaining the home, with specific exceptions and definitions. Do not choose a status solely because its rates are favorable. Joint returns generally create joint and several liability, subject to applicable relief provisions.',
        'A nonrefundable credit generally reduces the relevant tax no lower than zero, while a refundable credit may support a refund beyond that tax. Eligibility, phase-outs, ordering, and limitations depend on the particular credit. Distinguish credits from withholding and estimated payments, which represent tax paid.',
        'Estimated-tax analysis considers the applicable current-year and prior-year safe harbors, withholding, payment timing, and any annualized-income method. The prior-year percentage can be higher for certain taxpayers. A problem should state the relevant facts and assumptions. A refund or balance due then reconciles total tax after credits with refundable credits and payments.',
        'Review the return for consistency across source documents, schedules, basis records, filing status, and information reporting. A correct arithmetic total can still rest on the wrong filing status or credit eligibility. Identify missing facts before asserting an available credit or exclusion.',
      ],
      workedExample: {
        title: 'Credits and payments',
        facts:
          'Tax before credits is $8,000. A permitted nonrefundable credit is $2,500; a permitted refundable credit is $1,000; withholding is $6,000. Ignore other items.',
        steps: [
          'Tax after the nonrefundable credit is $5,500.',
          'Refundable credits and withholding total $7,000.',
          'The refund is $1,500.',
        ],
      },
      pitfalls: [
        'A credit’s label does not establish eligibility.',
        'A nonrefundable credit generally cannot create negative tax by itself.',
        'Withholding is a payment, not a deduction from taxable income.',
      ],
      questions: [
        q(
          'Tax before a permitted nonrefundable credit is $2,000 and the credit is $3,000. Ignore carryforwards and other rules. What is tax after that credit?',
          'Zero.',
          ['Negative $1,000 automatically.', '$1,000.', '$5,000.'],
          'A nonrefundable credit generally reduces the relevant tax only to zero under these assumptions.',
          'application',
        ),
        q(
          'Tax after nonrefundable credits is $7,000. Withholding is $6,000 and a refundable credit is $2,000. What is the refund?',
          '$1,000.',
          ['$7,000.', '$2,000.', 'No refund because all credits are nonrefundable.'],
          'Payments and refundable credits total $8,000 against $7,000 tax.',
          'application',
        ),
        q(
          'Which fact is generally relevant to head-of-household eligibility?',
          'Paying more than half the cost of maintaining a home for a qualifying person, along with other required conditions.',
          [
            'Choosing the lowest rate without household facts.',
            'Being employed full time alone.',
            'Having any roommate.',
          ],
          'The status depends on specified marital, qualifying-person, and household-support rules.',
          'remembering',
        ),
        q(
          'Under supplied safe-harbor assumptions, the annual required payment is the lesser of 90% of $20,000 current tax or 100% of $16,000 prior tax. What is it?',
          '$16,000.',
          ['$18,000.', '$20,000.', '$36,000.'],
          'Compare $18,000 with $16,000 and use the lesser under the stated assumptions.',
          'application',
        ),
        q(
          'If the required annual payment is $16,000 and qualifying withholding is $8,000, what additional annual estimated payments are needed under the supplied assumptions?',
          '$8,000.',
          ['$16,000.', '$24,000.', 'Zero in every case.'],
          '$16,000 required less $8,000 withholding leaves $8,000.',
        ),
        q(
          'Which statement about a joint return is generally accurate?',
          'It can create joint and several liability, subject to applicable relief provisions.',
          [
            'Each spouse is always liable for exactly half.',
            'It eliminates all payment obligations.',
            'It automatically qualifies every credit.',
          ],
          'Joint-return liability and relief rules require separate analysis from filing convenience.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'Return payment reconciliation',
        scenario:
          'Complete a tax-payment summary using credits and payments that are already determined to be allowable.',
        exhibits: [
          {
            title: 'Tax and credits',
            body: 'Tax before credits is $12,000. Allowed nonrefundable credits total $3,000. Allowed refundable credits total $2,000.',
          },
          {
            title: 'Payments',
            body: 'Federal withholding is $6,000 and estimated payments are $4,500. Ignore other taxes, penalties, and offsets.',
          },
        ],
        tasks: [
          {
            label: 'Tax after nonrefundable credits',
            correct: 9000,
            distractors: [12000, 7000, 15000],
            explanation: '$12,000 − $3,000 = $9,000.',
          },
          {
            label: 'Withholding plus estimated payments',
            correct: 10500,
            distractors: [6000, 4500, 12500],
            explanation: '$6,000 + $4,500 = $10,500.',
          },
          {
            label: 'Total payments and refundable credits',
            correct: 12500,
            distractors: [10500, 9000, 14500],
            explanation: '$10,500 + $2,000 = $12,500.',
          },
          {
            label: 'Refund',
            correct: 3500,
            distractors: [1500, 2000, 9000],
            explanation: '$12,500 credits/payments less $9,000 tax = $3,500.',
          },
        ],
      },
    },
  ],
};
