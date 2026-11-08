import { q, type CurriculumModule } from './types.ts';
export const regEntities: CurriculumModule = {
  title: 'Federal Taxation of Entities',
  area: 5,
  lessons: [
    {
      topic: 'entity-corporations',
      title: 'C Corporations: Taxable Income, Formation & Distributions',
      group: 'A-B',
      objectives: [
        'Reconcile book income to taxable income using stated tax adjustments.',
        'Identify basic Section 351 formation requirements.',
        'Distinguish dividends, basis recovery, and capital gain.',
      ],
      teaching: [
        'A C corporation is generally a separate federal income-tax taxpayer. Reconcile financial-statement income to taxable income by identifying permanent differences and timing differences. Tax-exempt income, nondeductible expenditures, and differing cost-recovery rules can create adjustments. Deductions subject to limits must be analyzed under the applicable year’s law; use stated allowed amounts when a case says limitations have already been applied.',
        'Section 351 can defer gain on qualifying transfers of property for stock when the statutory control and other requirements are met. Services are not property for this purpose. Cash or other boot, liabilities, and special circumstances require additional analysis. A transaction does not become tax-free merely because the parties call it a contribution.',
        'Corporate distributions are generally dividends to the extent of applicable current and accumulated earnings and profits, then reduce shareholder stock basis, with excess potentially treated as gain. Earnings and profits are a tax measure and are not automatically equal to retained earnings. Apply the specific ordering and allocation rules when several distributions or deficits are involved.',
      ],
      workedExample: {
        title: 'Cash distribution ordering',
        facts:
          'A corporation distributes $100,000 cash. Applicable earnings and profits are $70,000 and shareholder stock basis is $25,000. Assume a single distribution and no special rule.',
        steps: [
          '$70,000 is dividend income.',
          'The next $25,000 recovers stock basis.',
          'The remaining $5,000 is gain under the stated assumptions.',
        ],
      },
      pitfalls: [
        'Retained earnings and earnings and profits are not interchangeable.',
        'Services do not automatically qualify as Section 351 property.',
        'Do not use book depreciation automatically on the tax return.',
      ],
      questions: [
        q(
          'Book income is $200,000 and includes $10,000 tax-exempt income and $6,000 nondeductible expense. No other differences exist. What is taxable income?',
          '$196,000.',
          ['$184,000.', '$216,000.', '$200,000.'],
          'Subtract exempt income and add back the nondeductible expense: 200,000 − 10,000 + 6,000.',
          'application',
        ),
        q(
          'Taxable income is $300,000 and the supplied corporate tax rate is 21%. What is tax before credits?',
          '$63,000.',
          ['$21,000.', '$93,000.', '$237,000.'],
          '$300,000 × 21% = $63,000.',
          'application',
        ),
        q(
          'Which transfer does not constitute property solely for Section 351 purposes?',
          'Services performed for stock.',
          ['Cash.', 'Equipment.', 'Land.'],
          'Services are treated separately from property in evaluating Section 351 requirements.',
          'remembering',
        ),
        q(
          'A cash distribution is $50,000, applicable earnings and profits are $30,000, and stock basis is $15,000. What is gain after dividend and basis recovery?',
          '$5,000.',
          ['$20,000.', '$15,000.', '$50,000.'],
          '$30,000 dividend and $15,000 basis recovery leave $5,000 gain.',
          'application',
        ),
        q(
          'Which statement about earnings and profits is correct?',
          'It is a tax measure that can differ from book retained earnings.',
          [
            'It always equals cash.',
            'It always equals taxable income.',
            'It always equals retained earnings.',
          ],
          'Earnings and profits require tax adjustments and are not identical to these other measures.',
          'remembering',
        ),
        q(
          'A transferor receives stock and cash in a purported corporate formation. What should be evaluated?',
          'Section 351 qualification and any boot-related gain.',
          [
            'Automatic nonrecognition for every receipt.',
            'Only the corporate logo.',
            'Automatic ordinary loss on all transferred property.',
          ],
          'Qualification and the consequences of boot are separate required analyses.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'Corporate return and distribution schedule',
        scenario:
          'Reconcile taxable income and a shareholder distribution under the supplied simplified assumptions.',
        exhibits: [
          {
            title: 'Corporate income',
            body: 'Book income $500,000 includes $20,000 tax-exempt interest and $15,000 nondeductible expenses. Additional allowed tax depreciation exceeds book depreciation by $25,000. No other differences apply. Use a 21% tax rate.',
          },
          {
            title: 'Distribution',
            body: 'A single cash distribution is $80,000. Applicable earnings and profits are $50,000; stock basis is $20,000. No special distribution rule applies.',
          },
        ],
        tasks: [
          {
            label: 'Corporate taxable income',
            correct: 470000,
            distractors: [500000, 520000, 440000],
            explanation: '$500,000 − $20,000 + $15,000 − $25,000 = $470,000.',
          },
          {
            label: 'Tax before credits',
            correct: 98700,
            distractors: [105000, 94000, 117500],
            explanation: '$470,000 × 21% = $98,700.',
          },
          {
            label: 'Dividend portion of the distribution',
            correct: 50000,
            distractors: [80000, 20000, 10000],
            explanation:
              'The distribution is a dividend to the extent of the stated earnings and profits.',
          },
          {
            label: 'Gain after dividend and basis recovery',
            correct: 10000,
            distractors: [30000, 20000, 0],
            explanation: '$80,000 − $50,000 − $20,000 = $10,000.',
          },
        ],
      },
    },
    {
      topic: 'entity-partnerships',
      title: 'Partnership Income, Outside Basis & Distributions',
      group: 'D',
      objectives: [
        'Distinguish partnership ordinary income and separately stated items.',
        'Compute outside basis using contributions, allocations, debt, and distributions.',
        'Apply basic cash-distribution and loss-basis limitations.',
      ],
      teaching: [
        'A partnership generally reports income and allocates tax items to partners rather than paying federal income tax as a C corporation. Items whose treatment can differ among partners are separately stated, such as certain interest, charitable contributions, and capital gains. Ordinary business income is not the same as a partner’s cash distribution.',
        'Outside basis is the partner’s basis in the partnership interest; inside basis is the partnership’s basis in its assets. Outside basis generally changes for contributions, allocated income or loss, distributions, and the partner’s share of liabilities under applicable rules. Debt allocation depends on recourse, nonrecourse, and other provisions and cannot be assumed equal in every partnership.',
        'A cash distribution generally causes gain to the extent cash exceeds outside basis immediately before the distribution, subject to applicable rules. A basis limitation restricts deductible losses, with at-risk and passive-activity rules evaluated separately. Liability relief can be treated as a deemed cash distribution. Keep the order and assumptions explicit, especially when contributions, debt changes, losses, and distributions occur together.',
      ],
      workedExample: {
        title: 'Outside-basis rollforward',
        facts:
          'Beginning outside basis is $20,000. The partner contributes $10,000, receives $8,000 of allocated income, has a $5,000 increase in liability share, and receives $12,000 cash.',
        steps: [
          'Add contribution, income, and liability increase to reach $43,000.',
          'Subtract the cash distribution.',
          'Ending basis is $31,000, before any other limitations or adjustments.',
        ],
      },
      pitfalls: [
        'Distributions are not automatically deductible expenses or taxable income.',
        'Outside and inside basis differ.',
        'Basis, at-risk, and passive-loss limitations are separate.',
      ],
      questions: [
        q(
          'Beginning outside basis is $15,000; contribution $5,000; allocated income $9,000; cash distribution $7,000. No other changes apply. What is ending basis?',
          '$22,000.',
          ['$36,000.', '$8,000.', '$15,000.'],
          '$15,000 + $5,000 + $9,000 − $7,000 = $22,000.',
          'application',
        ),
        q(
          'Which term refers to a partner’s basis in the partnership interest?',
          'Outside basis.',
          ['Inside basis in every asset.', 'Book retained earnings.', 'Gross receipts.'],
          'Outside basis belongs to the partner’s interest, distinct from the entity’s asset basis.',
          'remembering',
        ),
        q(
          'A partner receives $30,000 cash when outside basis is $24,000. Assume no special rules. What gain arises?',
          '$6,000.',
          ['$30,000.', '$24,000.', 'Zero.'],
          'Cash in excess of outside basis generally produces gain under these assumptions.',
          'application',
        ),
        q(
          'Why are certain partnership items separately stated?',
          'Their tax treatment may depend on partner-level circumstances.',
          [
            'They are never taxable.',
            'They are always cash distributions.',
            'They are excluded from every return.',
          ],
          'Separate reporting preserves each item’s character and partner-level treatment.',
          'remembering',
        ),
        q(
          'A partner’s allocated loss exceeds available outside basis. What must be evaluated first among partner-level loss limits?',
          'The basis limitation.',
          [
            'Only the cash in the partner’s personal bank account.',
            'Only the partnership’s revenue.',
            'An automatic deduction of every allocated loss.',
          ],
          'Loss deductions are limited by basis before other applicable at-risk and passive-activity constraints.',
          'analysis',
        ),
        q(
          'A decrease in a partner’s share of partnership liabilities can have what effect?',
          'It can be treated as a deemed cash distribution.',
          [
            'It always increases outside basis.',
            'It is always tax-exempt salary.',
            'It has no possible basis effect.',
          ],
          'Liability relief can reduce basis and affect distribution gain under the applicable rules.',
          'application',
        ),
      ],
      simulation: {
        title: 'Partnership outside-basis schedule',
        scenario:
          'Prepare a partner’s basis and distribution analysis using the stated allocation facts.',
        exhibits: [
          {
            title: 'Basis changes',
            body: 'Beginning outside basis $40,000; cash contribution $10,000; allocated ordinary income $12,000; increase in allocated liability share $8,000.',
          },
          {
            title: 'Distribution',
            body: 'The partner then receives $75,000 cash. No other changes or special rules apply. Evaluate distribution gain after the preceding basis increases.',
          },
        ],
        tasks: [
          {
            label: 'Basis before liability increase and distribution',
            correct: 62000,
            distractors: [40000, 50000, 52000],
            explanation: '$40,000 + $10,000 + $12,000 = $62,000.',
          },
          {
            label: 'Basis immediately before distribution',
            correct: 70000,
            distractors: [62000, 54000, 83000],
            explanation: 'Add the $8,000 liability-share increase.',
          },
          {
            label: 'Gain on the cash distribution',
            correct: 5000,
            distractors: [75000, 70000, 13000],
            explanation: '$75,000 cash exceeds $70,000 outside basis by $5,000.',
          },
          {
            label: 'Remaining outside basis',
            correct: 0,
            distractors: [5000, 70000, -5000],
            explanation:
              'The distribution reduces basis to zero; the excess is gain rather than negative basis.',
          },
        ],
      },
    },
    {
      topic: 'entity-s-corporations',
      title: 'S Corporations: Eligibility, Basis & Pass-Through Items',
      group: 'C',
      objectives: [
        'Recognize core S-election eligibility requirements.',
        'Distinguish stock basis, direct debt basis, and guarantees.',
        'Apply basic distribution and loss-basis rules.',
      ],
      teaching: [
        'An S corporation generally passes income and separately stated items through to eligible shareholders. Eligibility includes requirements concerning domestic status, number and type of shareholders, and one class of stock under the tax rules. Certain individuals, estates, and trusts can qualify; partnerships and nonresident alien individuals generally cannot be shareholders. Apply exceptions and definitions carefully rather than treating every trust identically.',
        'Income is generally allocated per share per day, subject to applicable elections and special rules. Shareholder stock basis changes for income, contributions, distributions, and losses in the required order. Bona fide indebtedness running directly from the corporation to the shareholder can provide debt basis for specified purposes. A guarantee of corporate debt generally does not create basis merely because it is signed.',
        'Loss deductions require basis and may also be restricted by at-risk and passive-activity rules. Stock and debt basis should be tracked separately. A distribution generally uses stock basis, not debt basis, for determining the described nondividend distribution consequences. Accumulated C-corporation earnings and profits and other special facts can change distribution ordering.',
        'For simple examples, assume no accumulated C-corporation earnings and profits unless stated. Do not extend that simplification to every real S corporation. Record suspended losses and basis restoration accurately so later repayments or distributions are not treated as automatically tax-free.',
      ],
      workedExample: {
        title: 'Stock basis and a distribution',
        facts:
          'Beginning stock basis is $18,000 and allocated income is $7,000. A $30,000 cash distribution occurs. Assume no C-corporation earnings and profits, no other adjustments, and ordinary nondividend distribution rules.',
        steps: [
          'Basis before distribution is $25,000.',
          'The first $25,000 recovers stock basis.',
          'The excess $5,000 is gain and stock basis becomes zero.',
        ],
      },
      pitfalls: [
        'A guarantee is not automatically direct debt basis.',
        'Debt basis does not automatically shelter distributions.',
        'Eligibility and basis limits require separate analysis.',
      ],
      questions: [
        q(
          'Which proposed shareholder generally makes an S election ineligible absent a special exception?',
          'A partnership.',
          ['An eligible U.S. individual.', 'An eligible estate.', 'A qualifying trust.'],
          'Partnership shareholders generally do not satisfy S-corporation shareholder eligibility.',
          'remembering',
        ),
        q(
          'A shareholder merely guarantees an S corporation’s bank debt and makes no payment. What is the general basis implication?',
          'The guarantee alone generally does not create debt basis.',
          [
            'It always creates basis equal to the full loan.',
            'It creates additional corporate stock automatically.',
            'It always produces dividend income.',
          ],
          'A guarantee is not the same as qualifying direct indebtedness or an actual economic outlay.',
          'analysis',
        ),
        q(
          'Beginning stock basis is $20,000; allocated income $8,000; cash distribution $10,000. No other changes apply. What is basis before losses?',
          '$18,000.',
          ['$38,000.', '$12,000.', '$20,000.'],
          '$20,000 + $8,000 − $10,000 = $18,000.',
          'application',
        ),
        q(
          'With no accumulated C-corporation earnings and profits, a $40,000 distribution exceeds $32,000 stock basis. What gain is indicated under the stated simple rules?',
          '$8,000.',
          ['$40,000.', '$32,000.', 'Zero because the shareholder has an unrelated bank loan.'],
          'The excess over stock basis produces gain under the stated assumptions.',
          'application',
        ),
        q(
          'What is the general default allocation method for S corporation income?',
          'Per share per day, subject to applicable exceptions or elections.',
          [
            'Any allocation chosen solely to minimize one shareholder’s tax.',
            'Only by cash distributed.',
            'Always equally regardless of ownership.',
          ],
          'The default rule follows stock ownership over time rather than partnership-style special allocations.',
          'remembering',
        ),
        q(
          'An S shareholder has sufficient stock basis for a loss. Does that guarantee a current deduction?',
          'No; other applicable limitations, including at-risk and passive-activity rules, still matter.',
          [
            'Yes, basis is the only possible limit.',
            'Yes, all S losses are refundable credits.',
            'No S loss can ever be deducted.',
          ],
          'Basis is one stage of the loss-limitation analysis.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'S corporation shareholder schedule',
        scenario:
          'Analyze stock basis and a cash distribution under simplified stated assumptions.',
        exhibits: [
          {
            title: 'Shareholder information',
            body: 'Beginning stock basis $35,000; capital contribution $5,000; allocated income $10,000. The shareholder also guarantees a $60,000 bank loan but makes no payment.',
          },
          {
            title: 'Distribution assumptions',
            body: 'The corporation distributes $55,000 cash. There are no accumulated C-corporation earnings and profits or other adjustments. The guarantee alone provides no basis in this case.',
          },
        ],
        tasks: [
          {
            label: 'Stock basis before distribution',
            correct: 50000,
            distractors: [35000, 110000, 45000],
            explanation: '$35,000 + $5,000 + $10,000 = $50,000.',
          },
          {
            label: 'Basis created solely by the guarantee',
            correct: 0,
            distractors: [60000, 50000, 55000],
            explanation: 'The guarantee alone does not create basis under the supplied facts.',
          },
          {
            label: 'Gain on distribution',
            correct: 5000,
            distractors: [55000, 50000, 0],
            explanation: '$55,000 exceeds $50,000 stock basis by $5,000.',
          },
          {
            label: 'Ending stock basis',
            correct: 0,
            distractors: [5000, -5000, 60000],
            explanation: 'The distribution reduces basis to zero; the excess is recognized gain.',
          },
        ],
      },
    },
  ],
};
