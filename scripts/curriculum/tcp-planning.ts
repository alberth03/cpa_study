import { q, type CurriculumModule } from './types.ts';
export const tcpPlanning: CurriculumModule = {
  title: 'Entity Tax Planning',
  area: 3,
  lessons: [
    {
      topic: 'entity-selection',
      title: 'Entity Choice & After-Tax Cash Flow',
      group: 'A',
      objectives: [
        'Compare entity and owner tax layers under supplied assumptions.',
        'Distinguish legal form, tax elections, and business constraints.',
        'Evaluate planning beyond a single tax-rate comparison.',
      ],
      teaching: [
        'Entity choice combines tax treatment with liability, financing, ownership eligibility, administrative cost, benefits, succession, and exit plans. A C corporation can have an entity tax layer and a shareholder distribution layer. Pass-through treatment can shift tax to owners even when cash is retained. Neither model is universally best.',
        'Use consistent assumptions when comparing after-tax cash. State whether earnings are distributed or retained, which rates apply, and whether employment taxes, qualified-business-income deductions, state taxes, losses, or special entity taxes are excluded. A simplified numerical comparison illustrates a mechanism, not personalized advice.',
        'Tax elections have eligibility, timing, and future consequences. A desired shareholder type may be incompatible with S status; a later asset sale can have consequences different from a stock sale. Model alternative operating and exit scenarios and explain the business tradeoffs rather than selecting solely from the lowest initial rate.',
      ],
      workedExample: {
        title: 'Two tax layers',
        facts:
          'A C corporation earns $100,000, pays 21% entity tax, and distributes the rest to an owner taxed at 15% on the dividend. Ignore other effects.',
        steps: [
          'Entity tax is $21,000, leaving $79,000.',
          'Dividend tax is $11,850.',
          'After-tax owner cash is $67,150; combined tax is $32,850.',
        ],
      },
      pitfalls: [
        'Apply owner tax to the post-entity-tax distribution, not the original income twice.',
        'Pass-through taxable income and distributed cash can differ.',
        'A simplified model does not establish a universally best legal form.',
      ],
      questions: [
        q(
          'Corporate pretax income is $200,000 and entity tax rate 21%. What remains before shareholder tax?',
          '$158,000.',
          ['$200,000.', '$42,000.', '$180,000.'],
          '$200,000 × 79% = $158,000.',
          'application',
        ),
        q(
          'The corporation distributes that $158,000 and the supplied dividend tax rate is 15%. What is shareholder tax?',
          '$23,700.',
          ['$30,000.', '$42,000.', '$158,000.'],
          '15% × $158,000 = $23,700.',
          'application',
        ),
        q(
          'Under those assumptions, what is combined entity and shareholder tax?',
          '$65,700.',
          ['$42,000.', '$23,700.', '$72,000.'],
          '$42,000 entity tax + $23,700 owner tax.',
          'analysis',
        ),
        q(
          'A pass-through owner is allocated taxable income but receives no distribution. What is a possible consequence?',
          'Tax may be due despite no current cash distribution.',
          [
            'No tax can ever apply without cash.',
            'The allocation is automatically a gift.',
            'The entity always pays every owner’s tax.',
          ],
          'Pass-through income and distributions are different concepts.',
          'remembering',
        ),
        q(
          'Why consider ownership eligibility when selecting S treatment?',
          'Certain shareholders and capital structures may not qualify.',
          [
            'Every possible owner qualifies automatically.',
            'Only the business name matters.',
            'Eligibility is decided solely by the lowest rate.',
          ],
          'Tax elections have statutory conditions and business constraints.',
          'application',
        ),
        q(
          'What should an entity-choice recommendation consider beyond current tax rates?',
          'Financing, liability, ownership, benefits, compliance, and exit consequences.',
          [
            'Only the first-year spreadsheet result.',
            'Only the shortest tax form.',
            'Only a competitor’s legal name.',
          ],
          'Planning is a multivariable business decision.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'After-tax entity comparison',
        scenario:
          'Compare two simplified structures using only the supplied rates and assumptions.',
        exhibits: [
          {
            title: 'C corporation alternative',
            body: 'Income $300,000; entity tax 21%; all after-tax earnings distributed; owner dividend rate 15%.',
          },
          {
            title: 'Pass-through alternative',
            body: 'The same $300,000 is taxed once at the owner’s supplied 30% rate and fully distributed. Ignore state, employment, QBI, and all other effects.',
          },
        ],
        tasks: [
          {
            label: 'C corporation entity tax',
            correct: 63000,
            distractors: [90000, 45000, 237000],
            explanation: '$300,000 × 21% = $63,000.',
          },
          {
            label: 'C corporation shareholder dividend tax',
            correct: 35550,
            distractors: [45000, 63000, 98550],
            explanation: '($300,000 − $63,000) × 15% = $35,550.',
          },
          {
            label: 'After-tax owner cash under the C corporation model',
            correct: 201450,
            distractors: [237000, 210000, 255000],
            explanation: '$300,000 − $63,000 − $35,550 = $201,450.',
          },
          {
            label: 'After-tax owner cash under the pass-through model',
            correct: 210000,
            distractors: [300000, 90000, 201450],
            explanation: '$300,000 × 70% = $210,000 under the simplified assumptions.',
          },
        ],
      },
    },
    {
      topic: 'formation-restructuring',
      title: 'Formation, Asset Versus Stock Transactions & Liquidation',
      group: 'B',
      objectives: [
        'Evaluate formation qualification and boot.',
        'Compare buyer and seller consequences of asset and stock structures.',
        'Identify entity and owner effects in liquidation planning.',
      ],
      teaching: [
        'Formation provisions can defer gain when their requirements are satisfied, but services, boot, liabilities, control, and anti-abuse rules can change the result. In a qualifying Section 351 exchange with boot, recognized gain is generally limited to the appropriate amount of realized gain and boot under the stated facts. Basis rules preserve deferred gain rather than making it disappear.',
        'Asset and stock acquisitions can produce different tax bases, attributes, liabilities, and tax layers. A buyer may value stepped-up asset basis while a seller may prefer a different character or tax layer. Certain elections can alter the analysis when requirements are met. Negotiation should consider both parties and the actual available legal structures.',
        'A C corporation’s taxable asset sale or liquidating distribution can produce entity-level consequences and shareholder-level consequences under applicable rules. Pass-through structures have different interactions with owner basis and special taxes. Do not assume every liquidation is tax-free or every restructuring qualifies as a reorganization solely because management uses that word.',
      ],
      workedExample: {
        title: 'Boot in a qualifying formation',
        facts:
          'Property with basis $60,000 and value $100,000 is transferred for stock worth $90,000 and $10,000 cash. Assume all Section 351 requirements are met and no liabilities or other complications.',
        steps: [
          'Realized gain is $40,000.',
          'Recognized gain is limited to $10,000 boot.',
          'Stock basis is $60,000 − $10,000 cash + $10,000 gain = $60,000.',
        ],
      },
      pitfalls: [
        'A transaction label does not establish statutory qualification.',
        'Buyer and seller preferences can conflict.',
        'Deferred gain is usually preserved through basis rules.',
      ],
      questions: [
        q(
          'A qualifying Section 351 exchange has realized gain $50,000 and cash boot $12,000, with no other complications. What gain is recognized?',
          '$12,000.',
          ['$50,000.', '$38,000.', 'Zero regardless of boot.'],
          'Under the supplied rules, recognized gain is limited to the lesser of realized gain and boot.',
          'application',
        ),
        q(
          'Transferred basis is $70,000, cash boot received $12,000, and recognized gain $12,000. No other adjustments apply. What is stock basis?',
          '$70,000.',
          ['$58,000.', '$82,000.', '$94,000.'],
          '$70,000 − $12,000 + $12,000 = $70,000.',
          'application',
        ),
        q(
          'Why may a buyer prefer a taxable asset acquisition to a stock acquisition?',
          'The available asset-basis consequences may create future deductions or other benefits.',
          [
            'Asset purchases always eliminate every liability.',
            'Stock purchases never have any tax effect.',
            'Only the transaction’s name matters.',
          ],
          'Tax basis and deduction consequences can differ, subject to the actual structure and law.',
          'analysis',
        ),
        q(
          'Does calling a transaction a reorganization establish tax-free treatment?',
          'No; statutory requirements and facts must be satisfied.',
          [
            'Yes, the label controls.',
            'Only if the document is notarized.',
            'Every restructuring is automatically tax-free.',
          ],
          'Qualification depends on substantive legal requirements.',
          'remembering',
        ),
        q(
          'Why evaluate both entity and shareholder consequences in C corporation liquidation planning?',
          'More than one tax layer may apply.',
          [
            'Only the shareholder can ever owe tax.',
            'Only the corporation can ever owe tax.',
            'Liquidation always erases gain.',
          ],
          'Entity and owner provisions can create distinct consequences.',
          'application',
        ),
        q(
          'What should a transaction model do with deferred gain?',
          'Track its preservation through the applicable basis and recognition rules.',
          [
            'Assume it permanently disappears.',
            'Record it as a refundable credit.',
            'Ignore replacement or stock basis.',
          ],
          'Deferral typically changes timing rather than eliminating economic gain.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'Qualifying formation with cash boot',
        scenario:
          'Compute gain and stock basis using the explicitly assumed Section 351 qualification.',
        exhibits: [
          {
            title: 'Transferred property',
            body: 'Adjusted tax basis $90,000; fair value $150,000.',
          },
          {
            title: 'Consideration and assumptions',
            body: 'Stock worth $130,000 and cash $20,000 are received. All required control and property conditions are met. No liabilities, services, or other adjustments apply.',
          },
        ],
        tasks: [
          {
            label: 'Realized gain',
            correct: 60000,
            distractors: [150000, 40000, 20000],
            explanation: '$150,000 amount realized less $90,000 basis.',
          },
          {
            label: 'Recognized gain',
            correct: 20000,
            distractors: [60000, 40000, 0],
            explanation: 'The $20,000 boot is less than realized gain.',
          },
          {
            label: 'Deferred gain',
            correct: 40000,
            distractors: [60000, 20000, 90000],
            explanation: '$60,000 realized less $20,000 recognized.',
          },
          {
            label: 'Basis in stock received',
            correct: 90000,
            distractors: [130000, 70000, 110000],
            explanation: '$90,000 basis − $20,000 cash + $20,000 recognized gain.',
          },
        ],
      },
    },
    {
      topic: 'entity-tax-timing',
      title: 'Distribution Planning, Timing & Tax-Efficient Alternatives',
      group: 'A-B',
      objectives: [
        'Compare legally available timing alternatives.',
        'Evaluate distributions together with basis and tax attributes.',
        'Separate tax savings from business and cash-flow consequences.',
      ],
      teaching: [
        'Planning compares alternatives that are actually permitted by law. Consider when income is recognized, when deductions are allowed, applicable rates, limitations, and the time value of money. Accelerating a deduction can help at a higher current rate, but a limitation may defer the benefit. Deferring income may help when future rates are lower, but constructive receipt or other provisions can restrict the choice.',
        'Distribution planning depends on entity type, owner basis, earnings and profits or other tax accounts, debt, and special rules. A large cash payment can create gain, a dividend, compensation, or another consequence depending on substance. A label such as loan or reimbursement does not establish treatment. Keep owner and entity tax consequences and cash needs in the same model.',
        'Tax-efficient does not mean economically optimal. A strategy may save tax but sacrifice investment return, create liquidity problems, impose compliance costs, or concentrate risk. Compare after-tax present values and explain assumptions. A recommendation should be conditional on the facts and applicable tax period rather than treating one strategy as universally favorable.',
      ],
      workedExample: {
        title: 'Deduction timing comparison',
        facts:
          'A legally deductible $50,000 expenditure can be paid this year at a 30% marginal rate or next year at 20%. Ignore time value and other effects.',
        steps: [
          'Current-year tax saving is $15,000.',
          'Next-year saving is $10,000.',
          'Acceleration provides $5,000 additional nominal tax saving, subject to the assumed legal availability and business effects.',
        ],
      },
      pitfalls: [
        'A favorable model does not override recognition rules.',
        'Distribution labels do not determine substance.',
        'Tax savings should be compared with business and liquidity costs.',
      ],
      questions: [
        q(
          'A legally available $40,000 deduction saves tax at 35% now or 25% next year. Ignore time value. What additional saving comes from taking it now?',
          '$4,000.',
          ['$14,000.', '$10,000.', '$24,000.'],
          '10% rate difference × $40,000 = $4,000.',
          'application',
        ),
        q(
          'A legally deferrable $60,000 income item would be taxed at 30% now or 20% next year. Ignore other effects. What is the nominal tax reduction from deferral?',
          '$6,000.',
          ['$18,000.', '$12,000.', '$30,000.'],
          '$60,000 × (30% − 20%) = $6,000.',
          'application',
        ),
        q(
          'A distribution plan ignores the owner’s stock basis. What is the concern?',
          'It may miss gain or other owner-level tax consequences.',
          [
            'Basis never affects distributions.',
            'Every distribution is tax-free.',
            'Only the corporation’s bank balance matters.',
          ],
          'Basis and entity-specific ordering rules can affect the tax result.',
          'analysis',
        ),
        q(
          'Does labeling a payment a loan by itself establish loan treatment?',
          'No; the substantive facts and applicable rules matter.',
          [
            'Yes, any label is conclusive.',
            'Only the invoice color matters.',
            'All loans are taxable wages.',
          ],
          'Substance, documentation, repayment terms, and applicable law determine treatment.',
          'remembering',
        ),
        q(
          'A tax strategy saves $5,000 but creates $9,000 of unavoidable incremental business cost. Ignoring other effects, what is its net economic effect?',
          '$4,000 unfavorable.',
          ['$5,000 favorable.', '$14,000 favorable.', 'No economic effect.'],
          'The cost exceeds the saving by $4,000.',
          'analysis',
        ),
        q(
          'Why consider present value in multiyear tax planning?',
          'The timing of cash taxes and benefits affects economic value.',
          [
            'All years have identical economic value by definition.',
            'Present value creates legal eligibility.',
            'It replaces every tax limitation.',
          ],
          'Timing is economically relevant but does not change legal requirements.',
          'application',
        ),
      ],
      simulation: {
        title: 'Timing alternative comparison',
        scenario:
          'Compare two legally available deduction dates under the stated simplified assumptions.',
        exhibits: [
          {
            title: 'Tax alternatives',
            body: 'A $100,000 deduction can be taken now at a 32% marginal rate or next year at 24%. Ignore time value, limitations, and other tax effects.',
          },
          {
            title: 'Business effect',
            body: 'Taking the deduction now requires $3,000 of incremental business cost that is not otherwise included in the comparison. Ignore tax effects of that cost.',
          },
        ],
        tasks: [
          {
            label: 'Current-year tax saving',
            correct: 32000,
            distractors: [24000, 8000, 100000],
            explanation: '$100,000 × 32% = $32,000.',
          },
          {
            label: 'Next-year tax saving',
            correct: 24000,
            distractors: [32000, 76000, 8000],
            explanation: '$100,000 × 24% = $24,000.',
          },
          {
            label: 'Additional nominal tax saving from acceleration',
            correct: 8000,
            distractors: [32000, 24000, 56000],
            explanation: '$32,000 − $24,000 = $8,000.',
          },
          {
            label: 'Net benefit after the stated incremental business cost',
            correct: 5000,
            distractors: [8000, 11000, 3000],
            explanation: '$8,000 − $3,000 = $5,000.',
          },
        ],
      },
    },
  ],
};
