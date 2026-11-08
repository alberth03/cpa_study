import { q, type CurriculumModule } from './types.ts';
export const barTechnical: CurriculumModule = {
  title: 'Technical Accounting & Advanced Reporting',
  area: 2,
  lessons: [
    {
      topic: 'advanced-revenue',
      title: 'Revenue Contracts, Modifications & Principal–Agent Analysis',
      group: 'C',
      objectives: [
        'Allocate transaction price to distinct performance obligations.',
        'Evaluate modification and variable-consideration facts.',
        'Distinguish principal and agent presentation.',
      ],
      teaching: [
        'Apply the revenue model to the contract’s substance: identify the contract and performance obligations, determine transaction price, allocate it, and recognize revenue when or as obligations are satisfied. A promised good or service must be capable of being distinct and separately identifiable in the contract to be a distinct obligation. Payment timing does not by itself establish performance.',
        'Allocate the price using relative standalone selling prices unless a specific allocation exception applies. Include variable consideration only to the extent the applicable constraint is met. A change in estimate can alter recognized revenue, while a contract modification can be a separate contract, a prospective change, or a cumulative catch-up depending on the goods, pricing, and remaining obligations.',
        'Principal–agent analysis asks whether the entity controls the specified good or service before transfer. Indicators can inform that assessment, but collecting cash or setting an invoice amount is not conclusive. A principal generally reports gross revenue; an agent generally reports its fee or commission. Evaluate the actual promises and control rather than using the contract’s label alone.',
      ],
      workedExample: {
        title: 'Equipment and support bundle',
        facts:
          'A $120,000 contract includes distinct equipment with standalone price $100,000 and support with standalone price $50,000. No allocation exception applies. Equipment transfers immediately; support is provided evenly over 12 months.',
        steps: [
          'Allocate two thirds, $80,000, to equipment and one third, $40,000, to support.',
          'Recognize equipment revenue when control transfers.',
          'Recognize support as performed; three months produces $10,000 support revenue.',
        ],
      },
      pitfalls: [
        'Billing and revenue recognition are not the same event.',
        'A modification does not always create a separate contract.',
        'Gross versus net presentation follows control of the specified service or good.',
      ],
      questions: [
        q(
          'A $90,000 bundle has distinct items with standalone prices $60,000 and $40,000. What is allocated to the first item?',
          '$54,000.',
          ['$60,000.', '$45,000.', '$36,000.'],
          'Allocate $90,000 × 60% = $54,000.',
          'application',
        ),
        q(
          'A modification adds distinct goods at their standalone selling price and meets the applicable requirements. How is it generally treated?',
          'As a separate contract.',
          [
            'Always a cumulative catch-up.',
            'Always as no revenue.',
            'As a cancellation of all prior revenue.',
          ],
          'Distinct additional goods priced at standalone selling prices can qualify for separate-contract treatment.',
          'analysis',
        ),
        q(
          'An intermediary does not control the specified service before transfer and earns a commission. What presentation is generally appropriate?',
          'Net commission revenue.',
          [
            'Gross customer billings automatically.',
            'No revenue ever.',
            'The supplier’s entire profit.',
          ],
          'An agent generally recognizes its fee rather than gross principal revenue.',
          'analysis',
        ),
        q(
          'Why is variable consideration constrained?',
          'To limit recognition of amounts subject to a significant future reversal under the applicable criterion.',
          [
            'To prohibit every estimate.',
            'To match revenue to invoicing only.',
            'To guarantee the customer pays immediately.',
          ],
          'The constraint addresses reversal risk, not a ban on estimation.',
          'remembering',
        ),
        q(
          'Support revenue allocated at $48,000 is earned evenly over 12 months. What revenue is earned after four months?',
          '$16,000.',
          ['$48,000.', '$12,000.', '$4,000.'],
          '$48,000 × 4/12 = $16,000.',
          'application',
        ),
        q(
          'What is the central principal–agent question?',
          'Whether the entity controls the specified good or service before transfer.',
          [
            'Only who sends the invoice.',
            'Only who receives cash first.',
            'Only which party has the longer name.',
          ],
          'Control, informed by relevant indicators, determines the role.',
          'remembering',
        ),
      ],
      simulation: {
        title: 'Bundle revenue workpaper',
        scenario: 'Allocate a contract price and determine revenue recognized to date.',
        exhibits: [
          {
            title: 'Contract',
            body: 'Transaction price $180,000. Distinct equipment standalone price $150,000; distinct support standalone price $75,000. No allocation exception applies.',
          },
          {
            title: 'Performance',
            body: 'Equipment control transfers at inception. Support is provided evenly over 12 months. Three months have elapsed; collectibility and contract criteria are satisfied.',
          },
        ],
        tasks: [
          {
            label: 'Price allocated to equipment',
            correct: 120000,
            distractors: [150000, 90000, 60000],
            explanation: '$180,000 × $150,000/$225,000 = $120,000.',
          },
          {
            label: 'Price allocated to support',
            correct: 60000,
            distractors: [75000, 120000, 45000],
            explanation: 'The remaining one third is $60,000.',
          },
          {
            label: 'Support revenue after three months',
            correct: 15000,
            distractors: [60000, 5000, 45000],
            explanation: '$60,000 × 3/12 = $15,000.',
          },
          {
            label: 'Total recognized revenue',
            correct: 135000,
            distractors: [180000, 120000, 15000],
            explanation: '$120,000 equipment plus $15,000 support.',
          },
        ],
      },
    },
    {
      topic: 'advanced-leases',
      title: 'Lessor Accounting & Lessee Measurement Review',
      group: 'G',
      objectives: [
        'Apply lease classification and present-value measurement facts.',
        'Compute a lessor’s investment and interest under supplied assumptions.',
        'Review a lessee’s liability and right-of-use asset.',
      ],
      teaching: [
        'Lease classification reflects the economic rights and obligations in the contract. Transfer of ownership, a reasonably certain purchase option, the lease term relative to economic life, present value relative to fair value, and specialized nature can matter. Avoid treating familiar 75% and 90% figures as universal statutory bright lines under ASC 842.',
        'For a sales-type lease under the supplied assumptions, the lessor can recognize a net investment and applicable selling profit. Direct-financing and operating leases follow different recognition patterns. Residual values, collectibility, initial direct costs, and other terms affect measurement; do not assume one formula covers all lessor arrangements.',
        'A lessee’s initial lease liability generally measures the present value of unpaid lease payments included under the standard. The right-of-use asset adjusts that amount for relevant prepayments, incentives, initial direct costs, and other required items. Subsequent accounting depends on classification. For a liability rollforward, interest increases the liability and cash payments reduce it; distinguish the total payment from principal reduction.',
      ],
      workedExample: {
        title: 'Lease-liability rollforward',
        facts:
          'Beginning liability is $200,000, annual discount rate 6%, and a $50,000 payment occurs at year-end. No modification applies.',
        steps: [
          'Interest is $12,000.',
          'Principal reduction is $50,000 − $12,000 = $38,000.',
          'Ending liability is $162,000.',
        ],
      },
      pitfalls: [
        'Cash payment is not identical to principal reduction.',
        'Lessor classifications have different profit patterns.',
        'ROU asset and lease liability need not be identical at commencement.',
      ],
      questions: [
        q(
          'A lease liability is $150,000 at the start of the year, interest rate 8%, and year-end payment $40,000. What is ending liability?',
          '$122,000.',
          ['$110,000.', '$150,000.', '$162,000.'],
          '$150,000 + $12,000 interest − $40,000 payment = $122,000.',
          'application',
        ),
        q(
          'Initial lease liability is $180,000, prepayments $10,000, qualifying initial direct costs $5,000, and incentives $3,000. What is initial ROU asset under these facts?',
          '$192,000.',
          ['$180,000.', '$198,000.', '$168,000.'],
          '$180,000 + $10,000 + $5,000 − $3,000 = $192,000.',
          'application',
        ),
        q(
          'Why should lease classification not rely blindly on remembered 75% and 90% thresholds?',
          'Classification requires applying the current standard and the specific economic facts.',
          [
            'Present value is never relevant.',
            'All leases are operating leases.',
            'Only payment frequency matters.',
          ],
          'Relevant criteria are not replaced by a universal bright-line shortcut.',
          'analysis',
        ),
        q(
          'A sales-type lease has net investment $100,000 and asset carrying amount $80,000. Assume selling-profit recognition criteria are met and no other costs. What is selling profit?',
          '$20,000.',
          ['$100,000.', '$80,000.', 'Zero in every sales-type lease.'],
          'Under the stated assumptions, selling profit is $100,000 − $80,000.',
          'application',
        ),
        q(
          'Which item can explain why the initial ROU asset exceeds the lease liability?',
          'A qualifying lease prepayment.',
          [
            'Only future unperformed repairs.',
            'The auditor’s fee in every case.',
            'An unrelated tax refund.',
          ],
          'The ROU asset includes relevant prepayments not remaining in the unpaid-payment liability.',
          'remembering',
        ),
        q(
          'A payment is $45,000 and interest for the period is $9,000. What is principal reduction?',
          '$36,000.',
          ['$45,000.', '$54,000.', '$9,000.'],
          'The payment first covers $9,000 interest, leaving $36,000 principal reduction.',
          'application',
        ),
      ],
      simulation: {
        title: 'Lease measurement review',
        scenario: 'Review the lessee’s commencement amounts and first-year liability schedule.',
        exhibits: [
          {
            title: 'Commencement',
            body: 'Present value of unpaid included payments $240,000. Prepayment $12,000; qualifying initial direct costs $4,000; lease incentive $6,000.',
          },
          {
            title: 'First year',
            body: 'Interest rate 5%; year-end cash payment $60,000. No modification or remeasurement applies.',
          },
        ],
        tasks: [
          {
            label: 'Initial ROU asset',
            correct: 250000,
            distractors: [240000, 262000, 230000],
            explanation: '$240,000 + $12,000 + $4,000 − $6,000 = $250,000.',
          },
          {
            label: 'First-year interest',
            correct: 12000,
            distractors: [12500, 60000, 48000],
            explanation: '$240,000 × 5% = $12,000.',
          },
          {
            label: 'Principal reduction',
            correct: 48000,
            distractors: [60000, 12000, 72000],
            explanation: '$60,000 payment − $12,000 interest = $48,000.',
          },
          {
            label: 'Ending lease liability',
            correct: 192000,
            distractors: [180000, 240000, 202000],
            explanation: '$240,000 − $48,000 = $192,000.',
          },
        ],
      },
    },
    {
      topic: 'business-combinations',
      title: 'Business Combinations, Goodwill & Noncontrolling Interests',
      group: 'E',
      objectives: [
        'Apply the acquisition method to specified fair values.',
        'Compute goodwill or identify a bargain-purchase situation.',
        'Distinguish acquisition costs from consideration and financing costs.',
      ],
      teaching: [
        'A business combination accounted for under the acquisition method identifies the acquirer and acquisition date and recognizes identifiable acquired assets and assumed liabilities at the required measurements, generally acquisition-date fair value. Evaluate whether the acquired set is a business or an asset acquisition because the accounting can differ.',
        'Goodwill generally reflects consideration transferred, fair value of noncontrolling interests, and any previously held interest, less recognized net identifiable assets. A negative residual requires reassessment before recognizing a bargain-purchase gain. Do not use the acquiree’s historical book equity as a substitute for required acquisition-date measurement.',
        'Acquisition-related advisory costs are generally expensed, while debt and equity issuance costs follow their respective guidance. Contingent consideration and subsequent changes require classification-specific analysis. Noncontrolling interests represent equity interests not attributable to the parent in consolidated statements; they are not automatically a conventional liability.',
      ],
      workedExample: {
        title: 'Goodwill with a noncontrolling interest',
        facts:
          'Consideration is $900,000, fair value of NCI $200,000, and fair value of identifiable net assets $950,000. No previously held interest applies.',
        steps: [
          'Aggregate consideration and NCI is $1,100,000.',
          'Subtract $950,000 net identifiable assets.',
          'Goodwill is $150,000.',
        ],
      },
      pitfalls: [
        'Use required fair values rather than book equity alone.',
        'Not every transaction cost is part of consideration.',
        'Reassess measurements before recognizing a bargain-purchase gain.',
      ],
      questions: [
        q(
          'Consideration is $800,000, NCI fair value $150,000, and net identifiable assets $850,000. What is goodwill?',
          '$100,000.',
          ['$50,000.', '$950,000.', '$150,000.'],
          '$800,000 + $150,000 − $850,000 = $100,000.',
          'application',
        ),
        q(
          'Which cost is generally expensed in an acquisition-method business combination?',
          'Acquisition-related advisory fees.',
          [
            'Every equity issuance cost in the same way.',
            'Every acquired asset’s fair value.',
            'The entire consideration transferred.',
          ],
          'Advisory costs are generally expensed; financing costs follow separate guidance.',
          'remembering',
        ),
        q(
          'A preliminary acquisition calculation produces a negative goodwill residual. What should occur before recognizing a gain?',
          'Reassess identification and measurement of the relevant amounts.',
          [
            'Automatically record a negative asset indefinitely.',
            'Ignore the acquired liabilities.',
            'Use the seller’s desired profit instead.',
          ],
          'A bargain-purchase conclusion requires reassessment of the acquisition measurements.',
          'analysis',
        ),
        q(
          'In consolidated statements, a qualifying noncontrolling interest is generally presented where?',
          'Within equity, separately from the parent’s equity.',
          ['As revenue.', 'As every type of trade payable.', 'As depreciation expense.'],
          'NCI is an equity interest in the consolidated subsidiary not attributable to the parent.',
          'remembering',
        ),
        q(
          'Why determine whether an acquired set is a business or an asset acquisition?',
          'The applicable recognition and measurement rules can differ.',
          [
            'The legal name always determines identical accounting.',
            'Only the audit fee changes.',
            'No accounting distinction exists.',
          ],
          'Scope classification affects accounting, including certain cost and goodwill consequences.',
          'analysis',
        ),
        q(
          'An acquisition has $600,000 consideration and no NCI or prior interest. Identifiable assets are $900,000 and liabilities $400,000. What is goodwill?',
          '$100,000.',
          ['$300,000.', '$500,000.', '$600,000.'],
          'Net identifiable assets are $500,000; consideration exceeds them by $100,000.',
          'application',
        ),
      ],
      simulation: {
        title: 'Acquisition-date worksheet',
        scenario: 'Compute acquisition-date net assets and goodwill under the acquisition method.',
        exhibits: [
          {
            title: 'Fair values',
            body: 'Identifiable assets $1,800,000; assumed liabilities $600,000. Consideration transferred $1,100,000; fair value of NCI $250,000. No previously held interest.',
          },
          {
            title: 'Transaction costs',
            body: 'Advisory fees are $40,000. Assume they are acquisition-related costs required to be expensed; ignore financing costs and tax effects.',
          },
        ],
        tasks: [
          {
            label: 'Fair value of net identifiable assets',
            correct: 1200000,
            distractors: [1800000, 2400000, 600000],
            explanation: '$1,800,000 − $600,000 = $1,200,000.',
          },
          {
            label: 'Consideration plus NCI',
            correct: 1350000,
            distractors: [1100000, 1390000, 850000],
            explanation: '$1,100,000 + $250,000 = $1,350,000.',
          },
          {
            label: 'Goodwill',
            correct: 150000,
            distractors: [190000, 100000, 250000],
            explanation: '$1,350,000 − $1,200,000 = $150,000.',
          },
          {
            label: 'Advisory cost expense',
            correct: 40000,
            distractors: [0, 150000, 190000],
            explanation: 'The stated acquisition-related advisory costs are expensed.',
          },
        ],
      },
    },
    {
      topic: 'consolidation-currency',
      title: 'Consolidation, Intercompany Profit & Foreign Currency',
      group: 'F',
      objectives: [
        'Eliminate intercompany balances and unrealized profit.',
        'Recognize the role of control and variable-interest analysis.',
        'Distinguish translation from remeasurement using functional-currency facts.',
      ],
      teaching: [
        'Consolidated financial statements present a controlled group as an economic unit. Eliminate reciprocal intercompany balances, internal transactions, and profit not yet realized with outside parties. Ownership percentage alone does not answer every consolidation question; variable-interest-entity rules can require evaluating power and exposure to significant benefits or losses.',
        'For an intercompany inventory sale, eliminate profit remaining in ending inventory. Profit realized through subsequent external sales can affect later periods. Distinguish upstream and downstream transactions and NCI allocation where relevant. An elimination is a consolidation adjustment, not necessarily an entry in the separate legal entities’ books.',
        'Foreign operations require determining functional currency from the economic environment. Translation from a foreign functional currency into the reporting currency generally uses current rates for assets and liabilities and appropriate rates for income and equity, with a translation adjustment in OCI. Remeasurement into functional currency uses the applicable temporal approach, and resulting gains or losses generally affect earnings. Do not classify every exchange difference as OCI.',
      ],
      workedExample: {
        title: 'Unrealized inventory profit',
        facts:
          'A parent sells inventory costing $60,000 to a subsidiary for $80,000. At year-end, 25% remains in the group’s inventory.',
        steps: [
          'Intercompany profit is $20,000.',
          'Unrealized profit is $20,000 × 25% = $5,000.',
          'Eliminate the $5,000 from consolidated ending inventory and the related income effect.',
        ],
      },
      pitfalls: [
        'Consolidation eliminates internal activity, not external sales.',
        'Functional currency determines the translation/remeasurement path.',
        'VIE analysis is not a simple majority-vote shortcut.',
      ],
      questions: [
        q(
          'Intercompany inventory profit is $30,000 and 40% of the inventory remains within the group. What profit is unrealized?',
          '$12,000.',
          ['$30,000.', '$18,000.', '$75,000.'],
          '$30,000 × 40% = $12,000.',
          'application',
        ),
        q(
          'What ordinarily happens to reciprocal intercompany receivables and payables on consolidation?',
          'They are eliminated.',
          [
            'They are doubled.',
            'They become external revenue.',
            'They are ignored only when material.',
          ],
          'A consolidated group does not report a receivable from and payable to itself.',
          'remembering',
        ),
        q(
          'A foreign operation’s local currency is its functional currency. Its statements are translated into the parent’s reporting currency. Where does the translation adjustment generally go?',
          'Other comprehensive income.',
          ['Always sales revenue.', 'Always income-tax expense.', 'Always cash from operations.'],
          'The translation adjustment generally is included in OCI under the stated functional-currency facts.',
          'application',
        ),
        q(
          'Where are ordinary remeasurement gains and losses generally recognized when converting records into functional currency?',
          'Earnings.',
          ['Always OCI.', 'Always contributed capital.', 'Never recognized.'],
          'Remeasurement and translation have different accounting consequences.',
          'application',
        ),
        q(
          'Why might a majority voting-interest test be insufficient for consolidation?',
          'Variable-interest-entity guidance can require additional control and economics analysis.',
          [
            'All entities must always be consolidated.',
            'Only physical asset location matters.',
            'The subsidiary’s preferred logo determines control.',
          ],
          'VIE guidance evaluates power and economic interests beyond a simple voting percentage.',
          'analysis',
        ),
        q(
          'Is a consolidation elimination necessarily posted to each separate legal entity’s ledger?',
          'No; it can be a consolidated reporting adjustment.',
          [
            'Yes, every elimination must change both separate tax returns.',
            'Yes, every internal sale must be legally canceled.',
            'No elimination is ever recorded anywhere.',
          ],
          'Consolidation adjustments can exist at the reporting level without undoing legal-entity books.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'Consolidated inventory and currency review',
        scenario: 'Prepare elimination amounts and identify the currency-accounting approach.',
        exhibits: [
          {
            title: 'Internal sale',
            body: 'Inventory cost to the selling group member $100,000; intercompany selling price $140,000; 30% remains unsold to outsiders. Intercompany receivable and payable each equal $50,000.',
          },
          {
            title: 'Foreign operation',
            body: 'The local currency is the foreign operation’s functional currency. Its statements are translated into the parent’s reporting currency.',
          },
        ],
        tasks: [
          {
            label: 'Intercompany profit on the sale',
            correct: 40000,
            distractors: [100000, 140000, 30000],
            explanation: '$140,000 − $100,000 = $40,000.',
          },
          {
            label: 'Unrealized profit in ending inventory',
            correct: 12000,
            distractors: [40000, 28000, 42000],
            explanation: '30% × $40,000 = $12,000.',
          },
          {
            label: 'Reciprocal receivable amount eliminated',
            correct: 50000,
            distractors: [100000, 0, 140000],
            explanation: 'Eliminate the $50,000 intercompany receivable and matching payable.',
          },
          {
            label: 'General location of the translation adjustment',
            correct: 'Other comprehensive income',
            options: [
              'Other comprehensive income',
              'Sales revenue',
              'Operating cash receipts',
              'Taxable wages',
            ],
            explanation:
              'The stated foreign-functional-currency translation generally creates an OCI adjustment.',
          },
        ],
      },
    },
    {
      topic: 'derivatives-hedges',
      title: 'Derivatives, Hedge Accounting & Foreign-Currency Transactions',
      group: 'D',
      objectives: [
        'Recognize derivatives at fair value.',
        'Distinguish fair-value and cash-flow hedge accounting.',
        'Evaluate recognition of transaction exchange gains and losses.',
      ],
      teaching: [
        'Derivatives generally are recognized on the balance sheet at fair value. Hedge accounting is a special model with designation, documentation, and qualification requirements; a management statement that an instrument is a hedge is not sufficient. Without qualifying hedge accounting, fair-value changes generally affect earnings under the applicable guidance.',
        'A fair-value hedge addresses exposure to changes in fair value of a recognized item or qualifying firm commitment. Relevant changes in the derivative and hedged item attributable to the hedged risk generally affect earnings, with an adjustment to the hedged item. A cash-flow hedge addresses variability in qualifying cash flows; qualifying amounts may be recorded in OCI and reclassified when the hedged transaction affects earnings under U.S. GAAP.',
        'Foreign-currency-denominated receivables and payables can create transaction gains or losses as rates change. Distinguish those earnings effects from translating a foreign operation. Direction matters: if more reporting-currency units are needed to settle a foreign-currency payable, its reporting-currency liability increases and a loss may result.',
      ],
      workedExample: {
        title: 'Foreign-currency payable',
        facts:
          'A company owes 10,000 foreign-currency units. The payable was recorded when each unit cost $1.10 and is remeasured at year-end at $1.20.',
        steps: [
          'Initial liability is $11,000.',
          'Year-end liability is $12,000.',
          'The $1,000 increase is a transaction loss under the stated facts.',
        ],
      },
      pitfalls: [
        'A derivative is not automatically off balance sheet.',
        'Hedge designation requires more than management intent.',
        'Translation adjustments and transaction gains are different.',
      ],
      questions: [
        q(
          'A derivative does not qualify for hedge accounting and increases in fair value by $8,000. Where is the gain generally recognized?',
          'Earnings.',
          [
            'Always deferred without recognition.',
            'Always as revenue from customers.',
            'Never on the balance sheet.',
          ],
          'Derivatives generally are at fair value, with changes in earnings absent qualifying special accounting.',
          'application',
        ),
        q(
          'Which hedge addresses variability in qualifying future cash flows?',
          'Cash-flow hedge.',
          [
            'Every fair-value hedge by definition.',
            'A compilation engagement.',
            'A consolidation elimination.',
          ],
          'A cash-flow hedge targets variability in cash flows under the required criteria.',
          'remembering',
        ),
        q(
          'What is required to apply hedge accounting?',
          'Applicable designation, documentation, and qualification requirements.',
          [
            'Only management’s verbal intention.',
            'Only a profitable derivative.',
            'Only a long contract term.',
          ],
          'Special hedge accounting depends on satisfying the standard’s requirements.',
          'analysis',
        ),
        q(
          'A payable of 20,000 foreign units rises from $1.00 to $1.05 per unit in reporting currency. What is the liability increase?',
          '$1,000.',
          ['$20,000.', '$21,000.', '$500.'],
          '20,000 × $0.05 = $1,000 increase, ordinarily a transaction loss.',
          'application',
        ),
        q(
          'In a qualifying fair-value hedge, what generally happens to relevant fair-value changes in the derivative and hedged item?',
          'They affect earnings under the applicable hedge model.',
          [
            'They are always ignored.',
            'They both become customer cash receipts.',
            'The hedged item can never be adjusted.',
          ],
          'The model generally recognizes offsetting earnings effects and adjusts the hedged item for the hedged risk.',
          'analysis',
        ),
        q(
          'A foreign-currency transaction loss is automatically the same as a foreign-operation translation adjustment. Is that correct?',
          'No; they arise from different measurements and can be reported differently.',
          [
            'Yes, both always bypass earnings.',
            'Yes, both always create revenue.',
            'Only if the entity has inventory.',
          ],
          'Distinguish transaction remeasurement from financial-statement translation.',
          'remembering',
        ),
      ],
      simulation: {
        title: 'Currency and hedge accounting analysis',
        scenario:
          'Calculate a currency payable and identify the correct accounting model under stated assumptions.',
        exhibits: [
          {
            title: 'Payable',
            body: 'The entity owes 30,000 foreign units. Initial rate $1.20 per unit; year-end rate $1.25. No settlement has occurred.',
          },
          {
            title: 'Hedge facts',
            body: 'Instrument A is an undesignated derivative. Instrument B meets all requirements for a cash-flow hedge of forecast cash flows. Apply U.S. GAAP and assume the described qualifying portion of B is eligible for OCI.',
          },
        ],
        tasks: [
          {
            label: 'Initial payable',
            correct: 36000,
            distractors: [30000, 37500, 25000],
            explanation: '30,000 × $1.20 = $36,000.',
          },
          {
            label: 'Year-end payable',
            correct: 37500,
            distractors: [36000, 30000, 1500],
            explanation: '30,000 × $1.25 = $37,500.',
          },
          {
            label: 'Transaction loss',
            correct: 1500,
            distractors: [37500, 36000, 0],
            explanation: 'The liability increases by $1,500.',
          },
          {
            label: 'Initial location of B’s stated qualifying hedge amount',
            correct: 'Other comprehensive income',
            options: [
              'Other comprehensive income',
              'Never recognized anywhere',
              'Customer revenue automatically',
              'A reduction of share count',
            ],
            explanation:
              'The supplied qualifying cash-flow hedge amount is eligible for OCI, with later treatment under the hedge model.',
          },
        ],
      },
    },
    {
      topic: 'share-based-compensation',
      title: 'Share-Based Compensation & Service Conditions',
      group: 'C',
      objectives: [
        'Compute compensation cost from grant-date fair value under stated equity-award assumptions.',
        'Allocate cost over the requisite service period.',
        'Distinguish service, performance, and market-condition considerations.',
      ],
      teaching: [
        'For qualifying equity-classified awards, compensation measurement generally uses grant-date fair value under the applicable model. Recognize compensation as employees provide requisite service. A later change in the stock price does not by itself remeasure every equity award. Liability-classified awards and modifications can require different treatment.',
        'Service, performance, and market conditions affect accounting in different ways. Performance-condition probability can affect whether cost is recognized; market conditions are reflected in grant-date valuation under the applicable model. Apply the entity’s permitted forfeiture policy and the facts. Do not use an option’s exercise price as a substitute for its grant-date fair value.',
        'A simple straight-line example assumes a single service-only award and no graded-vesting complications. More complex arrangements require identifying the requisite service period, vesting terms, modifications, and classification. Financial-statement tax effects are separate from the basic compensation calculation unless included in the problem.',
      ],
      workedExample: {
        title: 'Service-only equity award',
        facts:
          '10,000 options have grant-date fair value $6 each and vest after three years of service. Assume all vest and straight-line recognition is appropriate.',
        steps: [
          'Total compensation cost is $60,000.',
          'Recognize $20,000 per year over the service period.',
          'Do not replace grant-date fair value with the option exercise price or later stock price.',
        ],
      },
      pitfalls: [
        'Exercise price is not option fair value.',
        'Equity and liability awards can have different remeasurement rules.',
        'Forfeiture and vesting assumptions must be stated.',
      ],
      questions: [
        q(
          '8,000 service-only equity awards have grant-date fair value $5 and a four-year service period. Assume straight-line recognition and no forfeitures. What is annual cost?',
          '$10,000.',
          ['$40,000.', '$8,000.', '$5,000.'],
          'Total cost $40,000 divided by four years.',
          'application',
        ),
        q(
          'Which amount generally measures a qualifying equity award in the stated grant-date model?',
          'Grant-date fair value.',
          [
            'Exercise price alone.',
            'Employee salary alone.',
            'The highest later stock price automatically.',
          ],
          'The equity-award model generally uses grant-date fair value under the applicable rules.',
          'remembering',
        ),
        q(
          'A grant’s total compensation cost is $90,000 over three years. One year has elapsed and straight-line recognition applies. What is cumulative cost?',
          '$30,000.',
          ['$90,000.', '$60,000.', 'Zero until exercise in every case.'],
          'Recognize cost as requisite service is provided.',
          'application',
        ),
        q(
          'Does every later stock-price increase remeasure a qualifying equity-classified award?',
          'No.',
          [
            'Yes, all awards are marked to market identically.',
            'Yes, only if employees remain employed.',
            'Only the payroll date matters.',
          ],
          'Equity-classified and liability-classified award models differ.',
          'analysis',
        ),
        q(
          'A problem’s compensation calculation excludes tax effects. What should the student do?',
          'Compute the stated compensation cost without inventing additional tax assumptions.',
          [
            'Add an arbitrary deferred tax amount.',
            'Ignore all service periods.',
            'Use exercise price as tax expense.',
          ],
          'Apply the scope and assumptions given.',
          'application',
        ),
        q(
          'Why distinguish performance conditions from market conditions?',
          'Their effects on measurement and recognition differ under the award guidance.',
          [
            'They are always identical.',
            'Neither can affect accounting.',
            'Only award labels determine expense.',
          ],
          'Conditions have different accounting consequences and must be analyzed.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'Equity-award cost schedule',
        scenario: 'Prepare a straight-line compensation schedule for a single service-only award.',
        exhibits: [
          {
            title: 'Award terms',
            body: '12,000 equity-classified options; grant-date fair value $8 each; four-year requisite service period. Assume all awards vest and straight-line recognition is appropriate.',
          },
          {
            title: 'Review date',
            body: 'Two years of service have been provided. Ignore income-tax effects, modifications, and graded-vesting issues.',
          },
        ],
        tasks: [
          {
            label: 'Total grant-date compensation cost',
            correct: 96000,
            distractors: [12000, 24000, 48000],
            explanation: '12,000 × $8 = $96,000.',
          },
          {
            label: 'Annual compensation cost',
            correct: 24000,
            distractors: [96000, 48000, 12000],
            explanation: '$96,000 ÷ 4 years = $24,000.',
          },
          {
            label: 'Cumulative recognized cost after two years',
            correct: 48000,
            distractors: [24000, 96000, 72000],
            explanation: 'Two years × $24,000 = $48,000.',
          },
          {
            label: 'Unrecognized remaining cost',
            correct: 48000,
            distractors: [96000, 24000, 0],
            explanation: '$96,000 total less $48,000 recognized.',
          },
        ],
      },
    },
    {
      topic: 'intangibles-software-research',
      title: 'Goodwill, Indefinite-Lived Assets, Software & R&D',
      group: 'A-B-C',
      objectives: [
        'Evaluate goodwill impairment under supplied reporting-unit measurements.',
        'Distinguish indefinite-lived from finite-lived asset treatment.',
        'Apply the stated capitalization model to software and research costs.',
      ],
      teaching: [
        'Indefinite-lived intangible assets are not amortized merely because time passes; they are tested for impairment under applicable guidance and reassessed for useful life. Goodwill impairment is evaluated at the reporting-unit level under the applicable model. The impairment amount is subject to the relevant cap and measurement rules, not a general instruction to write off all goodwill whenever profit falls.',
        'Research and development costs are generally expensed under U.S. GAAP, with specified exceptions. Equipment or other assets with alternative future use may be capitalized and depreciated as appropriate. Distinguish acquisition of technology, internal development, and software intended for sale from internal-use software.',
        'Software capitalization depends on the applicable model, stage or recognition threshold, and adoption of relevant updates. The course’s cases state their accounting policy and thresholds rather than silently combining different models or effective dates. Identify qualifying costs, exclude training and maintenance where required, and recognize amortization when the software is ready for its intended use under the specified guidance.',
      ],
      workedExample: {
        title: 'Goodwill impairment cap',
        facts:
          'A reporting unit’s carrying amount including $200,000 goodwill is $1,000,000. Its fair value is $850,000. Assume the simplified measurement in the case applies.',
        steps: [
          'The carrying amount exceeds fair value by $150,000.',
          'That amount is below the $200,000 goodwill balance.',
          'Recognize $150,000 impairment under the stated model and reduce goodwill to $50,000.',
        ],
      },
      pitfalls: [
        'Not every intangible asset is amortized.',
        'Different software models have different recognition thresholds.',
        'A research label does not automatically determine treatment of every acquired asset.',
      ],
      questions: [
        q(
          'A reporting unit carrying amount exceeds fair value by $120,000 and goodwill is $200,000. Assume the applicable model measures impairment as that excess capped at goodwill. What is impairment?',
          '$120,000.',
          ['$200,000.', '$80,000.', 'Zero.'],
          'The $120,000 excess is below the goodwill cap.',
          'application',
        ),
        q(
          'The same model produces a $300,000 excess but goodwill is $180,000. What is goodwill impairment under the stated cap?',
          '$180,000.',
          ['$300,000.', '$120,000.', '$480,000.'],
          'The impairment cannot exceed the goodwill balance under the stated rule.',
          'application',
        ),
        q(
          'Which statement about an indefinite-lived intangible is generally correct?',
          'It is not amortized while indefinite-lived but requires applicable impairment evaluation.',
          [
            'It is never tested for impairment.',
            'It is always expensed immediately.',
            'It must always be amortized over one year.',
          ],
          'Indefinite life changes amortization treatment but does not eliminate impairment assessment.',
          'remembering',
        ),
        q(
          'Equipment acquired for research has an alternative future use under the applicable facts. What should be evaluated?',
          'Capitalization and subsequent depreciation rather than automatic immediate expensing of the entire asset.',
          [
            'Automatic capitalization of every research expense.',
            'No accounting recognition.',
            'A guarantee of future revenue.',
          ],
          'Assets with alternative future use can receive different treatment from ordinary current R&D costs.',
          'analysis',
        ),
        q(
          'A software case states that $70,000 development costs qualify for capitalization and $15,000 training must be expensed. What amount is capitalized?',
          '$70,000.',
          ['$85,000.', '$15,000.', 'Zero despite the supplied qualification.'],
          'Use the specified recognition policy and distinguish qualifying development from training.',
          'application',
        ),
        q(
          'Why must a software-cost analysis identify the applicable model and adoption facts?',
          'Internal-use and external-sale models and effective-date updates can differ.',
          [
            'All software costs are always expensed identically.',
            'Only the programming language matters.',
            'All updates apply retroactively to every case.',
          ],
          'Scope, thresholds, and effective dates determine the correct accounting.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'Intangible and software review',
        scenario: 'Apply the accounting models expressly supplied in the case.',
        exhibits: [
          {
            title: 'Goodwill',
            body: 'Reporting-unit carrying amount $1,500,000 includes goodwill $300,000. Fair value is $1,280,000. For this exercise impairment equals the excess capped at goodwill.',
          },
          {
            title: 'Software policy',
            body: 'Under the applicable policy, development costs of $90,000 qualify for capitalization. Training $12,000 and maintenance $8,000 are expensed. Ignore amortization for this period.',
          },
        ],
        tasks: [
          {
            label: 'Goodwill impairment',
            correct: 220000,
            distractors: [300000, 80000, 1280000],
            explanation: '$1,500,000 − $1,280,000 = $220,000, below goodwill of $300,000.',
          },
          {
            label: 'Remaining goodwill',
            correct: 80000,
            distractors: [220000, 300000, 0],
            explanation: '$300,000 − $220,000 = $80,000.',
          },
          {
            label: 'Capitalized software cost',
            correct: 90000,
            distractors: [110000, 102000, 20000],
            explanation: 'Only the $90,000 qualifying development cost is capitalized.',
          },
          {
            label: 'Current training and maintenance expense',
            correct: 20000,
            distractors: [90000, 110000, 12000],
            explanation: '$12,000 + $8,000 = $20,000.',
          },
        ],
      },
    },
    {
      topic: 'segments-benefit-plans',
      title: 'Public-Company Disclosures, Segments & Benefit Plans',
      group: 'H-I',
      objectives: [
        'Apply supplied reportable-segment thresholds and coverage tests.',
        'Distinguish financial-statement requirements from other public-company disclosures.',
        'Prepare basic employee-benefit-plan net-asset changes.',
      ],
      teaching: [
        'Segment reporting follows the management approach to identifying operating segments and applies relevant aggregation and reportability requirements. Quantitative tests can concern revenue, profit or loss, and assets, with an external-revenue coverage requirement. The profit/loss threshold uses the appropriate comparison base rather than simply total consolidated net income.',
        'SEC Regulation S-X addresses financial-statement form and content, while Regulation S-K includes broader disclosure requirements. Public-company reporting can therefore require information beyond basic financial statements. Apply the particular rule and registrant facts rather than assuming that a GAAP statement package satisfies every filing requirement.',
        'Employee-benefit-plan financial statements focus on net assets available for benefits and changes in those net assets under the applicable plan guidance. Contributions, investment returns, benefit payments, and administrative expenses are relevant. Plan assets are not automatically the sponsor’s unrestricted corporate assets. Understand plan terms, valuation, and required disclosures separately from the sponsor’s pension accounting.',
      ],
      workedExample: {
        title: 'Plan net-asset rollforward',
        facts:
          'Beginning net assets are $1,000,000. Contributions are $150,000, investment return $80,000, benefits $120,000, and administration $10,000.',
        steps: [
          'Add contributions and investment return to reach $1,230,000.',
          'Subtract benefits and administration of $130,000.',
          'Ending net assets available for benefits are $1,100,000.',
        ],
      },
      pitfalls: [
        'The segment profit/loss base is not always consolidated net income.',
        'An SEC filing may require more than basic GAAP statements.',
        'Plan financial statements and sponsor accounting are distinct.',
      ],
      questions: [
        q(
          'A supplied segment revenue test uses 10% of total segment revenue of $500 million. What is the threshold?',
          '$50 million.',
          ['$5 million.', '$75 million.', '$500 million.'],
          '10% × $500 million = $50 million.',
          'application',
        ),
        q(
          'Reportable segments cover $600 million of $1 billion external revenue. The supplied coverage requirement is 75%. What is the minimum additional external revenue coverage needed?',
          '$150 million.',
          ['$400 million.', '$750 million.', '$100 million.'],
          'Required coverage is $750 million; subtract $600 million already covered.',
          'analysis',
        ),
        q(
          'Which regulation primarily addresses financial-statement form and content in SEC filings?',
          'Regulation S-X.',
          [
            'Only Regulation S-K for every financial-statement requirement.',
            'Only the Internal Revenue Code.',
            'Only a private bank agreement.',
          ],
          'Regulation S-X addresses financial-statement requirements; S-K addresses broader disclosures.',
          'remembering',
        ),
        q(
          'Beginning plan net assets are $500,000; contributions $80,000; investment return $30,000; benefits $50,000; administration $10,000. What is ending net assets?',
          '$550,000.',
          ['$610,000.', '$490,000.', '$570,000.'],
          '$500,000 + $80,000 + $30,000 − $50,000 − $10,000 = $550,000.',
          'application',
        ),
        q(
          'What is central to identifying operating segments under the management approach?',
          'How the business is organized and reviewed by the chief operating decision maker under the applicable criteria.',
          [
            'Only the number of legal subsidiaries.',
            'Only the number of tax returns.',
            'Only geographic distance between offices.',
          ],
          'The management approach focuses on internal operating information and decision-making criteria.',
          'analysis',
        ),
        q(
          'Are employee-benefit-plan assets automatically the sponsor’s unrestricted corporate assets?',
          'No.',
          [
            'Yes, always.',
            'Yes, if contributions were expensed.',
            'Only if the plan invests in bonds.',
          ],
          'Plan reporting and sponsor accounting have different entities and rights.',
          'remembering',
        ),
      ],
      simulation: {
        title: 'Segment coverage and plan reporting',
        scenario: 'Complete a segment coverage check and an independent plan net-asset schedule.',
        exhibits: [
          {
            title: 'Segment information',
            body: 'Total external revenue $800 million; current reportable segments cover $520 million. Apply a supplied 75% external-revenue coverage requirement.',
          },
          {
            title: 'Benefit plan',
            body: 'Beginning net assets $2,000,000; contributions $300,000; investment return $100,000; benefits $250,000; administration $20,000.',
          },
        ],
        tasks: [
          {
            label: 'Required external revenue coverage, in millions',
            correct: 600,
            distractors: [520, 800, 280],
            explanation: '75% × $800 million = $600 million.',
          },
          {
            label: 'Additional required coverage, in millions',
            correct: 80,
            distractors: [280, 200, 600],
            explanation: '$600 million − $520 million = $80 million.',
          },
          {
            label: 'Plan additions from contributions and return',
            correct: 400000,
            distractors: [300000, 100000, 650000],
            explanation: '$300,000 + $100,000 = $400,000.',
          },
          {
            label: 'Ending plan net assets',
            correct: 2130000,
            distractors: [2400000, 2150000, 1870000],
            explanation: '$2,000,000 + $400,000 − $250,000 − $20,000 = $2,130,000.',
          },
        ],
      },
    },
  ],
};
