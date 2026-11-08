import { q, type CurriculumModule } from './types.ts';
export const barAnalysis: CurriculumModule = {
  title: 'Business Analysis, Planning & Decision-Making',
  area: 1,
  lessons: [
    {
      topic: 'financial-analysis',
      title: 'Financial Ratios, Trends & Data Quality',
      group: 'A',
      objectives: [
        'Compute and interpret liquidity, profitability, and turnover measures.',
        'Distinguish operating changes from accounting or data changes.',
        'Use reliable comparable data for business conclusions.',
      ],
      teaching: [
        'Ratios summarize relationships but do not explain causes by themselves. Liquidity measures address short-term resources and obligations; profitability measures relate earnings to sales or investment; turnover measures examine asset use. Use definitions consistently, distinguish ending from average balances, and consider industry, seasonality, business model, and accounting policy differences.',
        'A rising current ratio can reflect more cash, but it can also reflect slow-moving inventory or overdue receivables. A rising gross margin may reflect pricing, product mix, cost changes, or cutoff errors. Compare financial and nonfinancial information, reconcile source totals, and investigate alternative explanations before making a recommendation.',
        'Common-size statements express components relative to a consistent base, while trend analysis compares periods. Ensure that acquisitions, reclassifications, restatements, and changes in data definitions are understood. Non-GAAP measures require a transparent definition and reconciliation rather than selective exclusion of unfavorable items.',
      ],
      workedExample: {
        title: 'Liquidity is not automatically quality',
        facts:
          'Current assets are $400,000, current liabilities $200,000, and inventory $160,000. Assume quick assets equal current assets less inventory.',
        steps: [
          'Current ratio is 2.0.',
          'Quick ratio is ($400,000 − $160,000) ÷ $200,000 = 1.2.',
          'Investigate receivable aging and inventory quality before concluding liquidity is strong.',
        ],
      },
      pitfalls: [
        'A favorable ratio does not prove healthy underlying assets.',
        'Use average balances when the measure calls for them.',
        'Do not compare differently defined non-GAAP metrics without reconciliation.',
      ],
      questions: [
        q(
          'Current assets are $600,000 and current liabilities $300,000. What is the current ratio?',
          '2.0.',
          ['0.5.', '3.0.', '1.0.'],
          '$600,000 ÷ $300,000 = 2.0.',
          'application',
        ),
        q(
          'Sales are $1,000,000 and cost of sales is $650,000. What is gross margin as a percentage of sales?',
          '35%.',
          ['65%.', '53.8%.', '15%.'],
          'Gross profit is $350,000, or 35% of sales.',
          'application',
        ),
        q(
          'A current ratio rises because inventory has become obsolete and unsold. What is the appropriate interpretation?',
          'The ratio alone may overstate the improvement in liquidity.',
          [
            'Liquidity is guaranteed to have improved.',
            'Inventory quality never affects analysis.',
            'The ratio proves cash increased.',
          ],
          'The composition and realizability of current assets matter.',
          'analysis',
        ),
        q(
          'Revenue is $900,000 and average receivables are $150,000. Assume all sales are credit sales. What is receivables turnover?',
          '6.0 times.',
          ['0.167 times.', '9.0 times.', '15.0 times.'],
          '$900,000 ÷ $150,000 = 6.0.',
          'application',
        ),
        q(
          'Two companies define adjusted EBITDA differently. What is required before comparing them?',
          'Understand and reconcile the definitions and exclusions.',
          [
            'Assume the labels imply identical measures.',
            'Compare only the largest number.',
            'Exclude every expense from both companies.',
          ],
          'Non-GAAP labels can conceal different definitions and selective exclusions.',
          'analysis',
        ),
        q(
          'Which base is commonly used for a common-size income statement?',
          'Sales or revenue.',
          ['Only the audit fee.', 'Only the number of shareholders.', 'Only current liabilities.'],
          'Income-statement components are commonly expressed as a percentage of revenue.',
          'remembering',
        ),
      ],
      simulation: {
        title: 'Ratio-analysis briefing',
        scenario: 'Prepare ratios and evaluate a liquidity concern using the stated definitions.',
        exhibits: [
          {
            title: 'Financial data',
            body: 'Current assets $500,000; inventory $200,000; current liabilities $250,000; annual sales $1,200,000; cost of sales $840,000. Quick assets equal current assets less inventory.',
          },
          {
            title: 'Operational note',
            body: 'Inventory aging has worsened substantially despite the apparent increase in current assets.',
          },
        ],
        tasks: [
          {
            label: 'Current ratio',
            correct: 2,
            distractors: [0.5, 1.2, 2.5],
            explanation: '$500,000 ÷ $250,000 = 2.0.',
          },
          {
            label: 'Quick ratio',
            correct: 1.2,
            distractors: [2, 0.8, 1.5],
            explanation: '($500,000 − $200,000) ÷ $250,000 = 1.2.',
            tolerance: 0.001,
          },
          {
            label: 'Gross margin percentage',
            correct: 30,
            distractors: [70, 42.86, 20],
            explanation: '($1,200,000 − $840,000) ÷ $1,200,000 = 30%.',
          },
          {
            label: 'Interpretation of aging inventory',
            correct: 'Evaluate realizability before concluding liquidity improved',
            options: [
              'Evaluate realizability before concluding liquidity improved',
              'Assume the ratio proves strong liquidity',
              'Ignore operating information',
              'Treat all inventory as cash',
            ],
            explanation: 'Asset quality matters alongside the ratio.',
          },
        ],
      },
    },
    {
      topic: 'budgeting-forecasting',
      title: 'Budgets, Forecasts, Cash Planning & Working Capital',
      group: 'B',
      objectives: [
        'Build operating and cash budgets from linked assumptions.',
        'Distinguish forecasts from hypothetical projections.',
        'Evaluate the cash consequences of collection and payment timing.',
      ],
      teaching: [
        'A coordinated budget links sales, production or purchases, expenses, capital investment, and financing. Sales are not the same as cash collections, and production costs are not necessarily current cash payments. State beginning balances, timing assumptions, and desired ending inventories so the schedules reconcile.',
        'A forecast reflects expected conditions and management’s expected course of action; a projection uses hypothetical assumptions. Both require transparent assumptions and appropriate use. Sensitivity analysis changes one assumption or a defined scenario to show how results respond; it does not make uncertain forecasts certain.',
        'Working capital is affected by collection periods, inventory investment, and payment terms. A growing profitable business may still need financing if receivables and inventory absorb cash before customers pay. Distinguish a flexible budget at actual activity from a static budget at planned activity when evaluating performance.',
      ],
      workedExample: {
        title: 'Cash collections lag revenue',
        facts:
          'Sales are $200,000 in January and $300,000 in February. Customers pay 60% in the month of sale and 40% the next month. Assume no other collections.',
        steps: [
          'February collects $180,000 from February sales.',
          'It also collects $80,000 from January sales.',
          'February cash collections are $260,000, not February revenue of $300,000.',
        ],
      },
      pitfalls: [
        'Revenue and cash collections differ.',
        'A projection’s hypothetical assumptions are not a forecast of expected results.',
        'Use an activity-adjusted budget for an appropriate cost comparison.',
      ],
      questions: [
        q(
          'March sales are $400,000 and February sales $250,000. Collections are 70% in the current month and 30% next month. What are March collections?',
          '$355,000.',
          ['$400,000.', '$280,000.', '$475,000.'],
          '70% of March sales plus 30% of February sales: $280,000 + $75,000.',
          'application',
        ),
        q(
          'Which prospective information uses hypothetical assumptions rather than necessarily expected conditions?',
          'A financial projection.',
          ['Every financial forecast.', 'An audited historical statement.', 'A bank confirmation.'],
          'A projection presents results under stated hypothetical assumptions.',
          'remembering',
        ),
        q(
          'Planned sales are 10,000 units, desired ending finished goods 2,000, and beginning goods 1,500. What production is needed?',
          '10,500 units.',
          ['9,500 units.', '13,500 units.', '10,000 units.'],
          'Sales + desired ending inventory − beginning inventory = 10,500.',
          'application',
        ),
        q(
          'A profitable company grows rapidly while customers pay slowly. What may result?',
          'A financing need despite accounting profit.',
          [
            'Guaranteed excess cash.',
            'No working-capital impact.',
            'Automatic elimination of receivables.',
          ],
          'Growth can absorb cash in receivables and inventory before collection.',
          'analysis',
        ),
        q(
          'Which budget adjusts expected costs to actual activity?',
          'Flexible budget.',
          [
            'Static budget only.',
            'A hypothetical audit opinion.',
            'A retained-earnings rollforward.',
          ],
          'A flexible budget permits an activity-consistent comparison.',
          'remembering',
        ),
        q(
          'Why should a forecast identify key assumptions?',
          'Users need to understand dependencies and uncertainty.',
          [
            'Assumptions guarantee the forecast.',
            'Disclosure eliminates all risk.',
            'Only the final profit figure matters.',
          ],
          'Transparent assumptions enable meaningful interpretation and sensitivity analysis.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'Operating cash budget',
        scenario: 'Build a monthly cash budget from the collection and payment assumptions.',
        exhibits: [
          {
            title: 'Collections',
            body: 'Prior-month sales $200,000; current-month sales $300,000. Collect 60% in the month of sale and 40% the next month.',
          },
          {
            title: 'Other cash data',
            body: 'Beginning cash $50,000; current cash payments $280,000; required minimum ending cash $40,000. Ignore interest and other flows.',
          },
        ],
        tasks: [
          {
            label: 'Current-month cash collections',
            correct: 260000,
            distractors: [300000, 180000, 200000],
            explanation: '$300,000 × 60% + $200,000 × 40% = $260,000.',
          },
          {
            label: 'Cash available before payments',
            correct: 310000,
            distractors: [260000, 350000, 50000],
            explanation: '$50,000 beginning cash + $260,000 collections.',
          },
          {
            label: 'Ending cash before financing',
            correct: 30000,
            distractors: [40000, 80000, -20000],
            explanation: '$310,000 − $280,000 = $30,000.',
          },
          {
            label: 'Borrowing needed to meet minimum cash',
            correct: 10000,
            distractors: [40000, 30000, 0],
            explanation: '$40,000 required less $30,000 available = $10,000.',
          },
        ],
      },
    },
    {
      topic: 'cost-volume-profit',
      title: 'Cost Behavior, CVP & Relevant Decisions',
      group: 'A-B',
      objectives: [
        'Compute contribution margin and break-even output.',
        'Distinguish relevant, sunk, and opportunity costs.',
        'Evaluate constrained-resource and make-or-buy choices.',
      ],
      teaching: [
        'Contribution margin equals revenue less variable costs and contributes to fixed costs and profit. Within the relevant range, fixed total costs are assumed constant while variable total costs move with activity. Break-even units equal fixed costs divided by unit contribution margin. State assumptions about price, cost behavior, product mix, and capacity before extending the model.',
        'Relevant costs and revenues differ between alternatives and relate to the future. A sunk cost does not become relevant because it is large. An opportunity cost can be relevant even though no accounting entry records it. Allocated fixed overhead that continues regardless of the decision is not an avoidable saving.',
        'For a constrained resource, compare contribution per unit of the scarce resource, not merely per product unit. Make-or-buy and special-order decisions also require qualitative factors such as quality, supplier reliability, capacity, and effects on regular customers. A positive short-run contribution does not by itself prove a sound long-run strategy.',
      ],
      workedExample: {
        title: 'Break-even and a scarce machine hour',
        facts:
          'Price is $80, variable cost $50, and fixed cost $120,000. A second product has a higher unit contribution but requires many more machine hours.',
        steps: [
          'Unit contribution margin is $30.',
          'Break-even is $120,000 ÷ $30 = 4,000 units.',
          'When hours are constrained, compare contribution per machine hour before choosing a product mix.',
        ],
      },
      pitfalls: [
        'Continuing allocated overhead is not necessarily avoidable.',
        'Opportunity costs may be relevant without an accounting entry.',
        'Unit margin alone is insufficient when a resource is constrained.',
      ],
      questions: [
        q(
          'Price is $100 and variable cost is $60 per unit. What is unit contribution margin?',
          '$40.',
          ['$60.', '$100.', '$160.'],
          'Revenue less variable cost is the amount available for fixed costs and profit.',
          'application',
        ),
        q(
          'Fixed costs are $200,000 and unit contribution margin is $40. What is break-even volume?',
          '5,000 units.',
          ['8,000 units.', '2,000 units.', '500 units.'],
          '$200,000 ÷ $40 = 5,000.',
          'application',
        ),
        q(
          'Which cost is ordinarily irrelevant to choosing between future alternatives?',
          'A sunk cost that cannot be changed.',
          [
            'An avoidable future cost.',
            'A relevant opportunity cost.',
            'Incremental future revenue.',
          ],
          'A sunk cost does not differ between future choices.',
          'remembering',
        ),
        q(
          'Product A contributes $30 using 2 scarce hours; B contributes $24 using 1 hour. Which yields more contribution per scarce hour?',
          'Product B.',
          [
            'Product A because $30 exceeds $24.',
            'They are equal.',
            'No capacity information is needed.',
          ],
          'A earns $15 per hour; B earns $24 per hour.',
          'analysis',
        ),
        q(
          'Allocated overhead continues whether a component is made or bought. How should it be treated in incremental analysis?',
          'Exclude the unavoidable amount from the differential comparison.',
          [
            'Treat all allocation as a cash saving from buying.',
            'Deduct it twice.',
            'Treat it as new sales revenue.',
          ],
          'Only amounts that change between alternatives are relevant to the differential computation.',
          'analysis',
        ),
        q(
          'A special order offers positive incremental contribution using idle capacity. What else should management consider?',
          'Qualitative effects such as customer relationships, quality, and future pricing.',
          [
            'Nothing; positive contribution guarantees long-run success.',
            'Only historical sunk costs.',
            'Only the presentation of the invoice.',
          ],
          'Short-run arithmetic is one input to the broader decision.',
          'application',
        ),
      ],
      simulation: {
        title: 'Contribution and constrained capacity',
        scenario:
          'Analyze a single-product break-even model and an independent constrained-resource choice.',
        exhibits: [
          {
            title: 'Break-even model',
            body: 'Selling price $75 per unit; variable cost $45; annual fixed cost $150,000. Assume the relevant range and a constant sales mix.',
          },
          {
            title: 'Machine-hour constraint',
            body: 'Product X contributes $36 and requires 3 hours. Product Y contributes $28 and requires 2 hours. Demand exists for either product.',
          },
        ],
        tasks: [
          {
            label: 'Unit contribution margin',
            correct: 30,
            distractors: [45, 75, 120],
            explanation: '$75 − $45 = $30.',
          },
          {
            label: 'Break-even units',
            correct: 5000,
            distractors: [2000, 3333, 7500],
            explanation: '$150,000 ÷ $30 = 5,000.',
          },
          {
            label: 'Product X contribution per machine hour',
            correct: 12,
            distractors: [36, 108, 18],
            explanation: '$36 ÷ 3 = $12 per hour.',
          },
          {
            label: 'Preferred product on contribution per scarce hour alone',
            correct: 'Product Y',
            options: [
              'Product Y',
              'Product X',
              'Equal contribution per hour',
              'Cannot compare despite supplied hours',
            ],
            explanation: 'Y earns $14 per hour versus X’s $12.',
          },
        ],
      },
    },
    {
      topic: 'variance-analysis',
      title: 'Standard Costs, Variances & Performance Interpretation',
      group: 'A',
      objectives: [
        'Compute price/rate and quantity/efficiency variances.',
        'Separate activity effects from spending or efficiency effects.',
        'Investigate causes and avoid evaluating managers from one variance alone.',
      ],
      teaching: [
        'A standard-cost variance compares actual results with an appropriate benchmark. Material price variance commonly uses actual quantity multiplied by the difference between actual and standard price. Material quantity variance commonly uses standard price multiplied by actual quantity used less standard quantity allowed for actual output. State whether quantity refers to purchases or usage.',
        'Labor rate variance compares actual and standard rates for actual hours. Labor efficiency variance compares actual hours with standard hours allowed for actual output at the standard rate. Label favorable and unfavorable effects consistently. A negative calculated cost variance under an actual-minus-standard convention is favorable.',
        'A favorable price variance may accompany poor quality and an unfavorable usage variance. A faster production process may increase defects or later warranty costs. Investigate interactions, controllability, timing, and data definitions. A flexible budget separates activity differences from performance differences so that higher output does not automatically look like overspending.',
      ],
      workedExample: {
        title: 'Material price and usage',
        facts:
          'Actual usage is 1,100 units at $4.80 each. Standard price is $5.00 and standard quantity allowed is 1,000 units. Use actual usage for both variances.',
        steps: [
          'Price variance is 1,100 × ($4.80 − $5.00) = $220 favorable.',
          'Quantity variance is $5 × (1,100 − 1,000) = $500 unfavorable.',
          'Net cost variance is $280 unfavorable, suggesting the cheaper material may not have reduced total cost.',
        ],
      },
      pitfalls: [
        'Use standard quantity allowed for actual output.',
        'State the sign convention and favorable/unfavorable label.',
        'One favorable variance may conceal offsetting problems.',
      ],
      questions: [
        q(
          'Actual quantity is 2,000 units, actual price $3.80, and standard price $4.00. What is the price variance?',
          '$400 favorable.',
          ['$400 unfavorable.', '$7,600 unfavorable.', '$8,000 favorable.'],
          '2,000 × ($3.80 − $4.00) = −$400 under actual-minus-standard.',
          'application',
        ),
        q(
          'Actual usage is 2,200 units; standard quantity allowed is 2,000; standard price is $4. What is the quantity variance?',
          '$800 unfavorable.',
          ['$800 favorable.', '$200 unfavorable.', '$8,800 favorable.'],
          '$4 × (2,200 − 2,000) = $800 unfavorable.',
          'application',
        ),
        q(
          'Actual labor is 900 hours at $22; standard rate is $20. What is the labor rate variance?',
          '$1,800 unfavorable.',
          ['$1,800 favorable.', '$2,000 unfavorable.', '$18,000 unfavorable.'],
          '900 × ($22 − $20) = $1,800 unfavorable.',
          'application',
        ),
        q(
          'A favorable material price variance accompanies severe unfavorable usage and defects. What is appropriate?',
          'Evaluate the combined cost and quality effects.',
          [
            'Reward purchasing solely on price.',
            'Ignore production evidence.',
            'Assume cheaper input always raises profit.',
          ],
          'Related variances and nonfinancial outcomes must be interpreted together.',
          'analysis',
        ),
        q(
          'The standard hours used in an efficiency variance should ordinarily reflect what?',
          'Actual output at the standard allowed hours per unit.',
          [
            'Only the original planned output regardless of activity.',
            'Actual hours with no benchmark.',
            'The manager’s preferred profit figure.',
          ],
          'Efficiency compares actual input with the amount allowed for actual output.',
          'remembering',
        ),
        q(
          'Why can a flexible budget improve a cost-performance comparison?',
          'It adjusts expected costs for actual activity.',
          [
            'It guarantees every variance is favorable.',
            'It removes all fixed costs.',
            'It replaces operational evidence with labels.',
          ],
          'Adjusting activity prevents output-volume changes from being confused with spending or efficiency effects.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'Material variance investigation',
        scenario:
          'Calculate signed variances using the actual-minus-standard convention; enter favorable variances as negative.',
        exhibits: [
          {
            title: 'Standards',
            body: 'Standard material price $6 per unit. Standard quantity allowed for actual output is 3,000 units.',
          },
          {
            title: 'Actual results',
            body: 'Actual usage is 3,200 units at $5.75 per unit. Use actual usage for the price variance. Quality complaints increased.',
          },
        ],
        tasks: [
          {
            label: 'Signed material price variance',
            correct: -800,
            distractors: [800, -750, 1200],
            explanation: '3,200 × ($5.75 − $6.00) = −$800, favorable.',
          },
          {
            label: 'Signed material quantity variance',
            correct: 1200,
            distractors: [-1200, 200, 1150],
            explanation: '$6 × (3,200 − 3,000) = $1,200, unfavorable.',
          },
          {
            label: 'Net material cost variance',
            correct: 400,
            distractors: [2000, -400, 800],
            explanation: '−$800 + $1,200 = $400 unfavorable.',
          },
          {
            label: 'Recommended interpretation',
            correct: 'Investigate quality and total cost, not price alone',
            options: [
              'Investigate quality and total cost, not price alone',
              'Conclude the purchase was successful solely from price',
              'Ignore complaints',
              'Assume all variances are uncontrollable',
            ],
            explanation: 'The favorable price is offset by usage and potentially quality costs.',
          },
        ],
      },
    },
    {
      topic: 'capital-budgeting',
      title: 'Capital Structure, Cost of Capital & Investment Decisions',
      group: 'B',
      objectives: [
        'Compute weighted cost of capital from specified assumptions.',
        'Evaluate discounted cash flows and opportunity costs.',
        'Distinguish NPV, payback, and accounting return measures.',
      ],
      teaching: [
        'Capital structure determines the mix of debt and equity financing and affects risk, flexibility, covenants, and required returns. A weighted average cost of capital can combine market-value weights and component costs, including the specified tax effect on debt. Do not apply a corporate tax shield to every entity or every financing item without relevant assumptions.',
        'Net present value compares the present value of relevant incremental cash flows with the investment. Include opportunity costs and changes in working capital when relevant; exclude sunk costs. Use a discount rate appropriate to the project’s risk and cash-flow definition. Nominal and real assumptions and after-tax and pretax measures should be consistent.',
        'Payback emphasizes recovery time but ordinarily ignores later cash flows and, in its basic form, the time value of money. Accounting return uses accounting income rather than identical cash-flow measures. NPV and IRR can conflict for mutually exclusive projects with different scale or timing; evaluate value creation and the assumptions rather than choosing the largest percentage automatically.',
      ],
      workedExample: {
        title: 'NPV using a supplied annuity factor',
        facts:
          'A project costs $100,000 and generates $30,000 annually for five years. The supplied present-value annuity factor is 3.791; no terminal cash flow applies.',
        steps: [
          'PV of inflows is $30,000 × 3.791 = $113,730.',
          'NPV is $13,730.',
          'Under the stated assumptions, positive NPV indicates value above the required return, subject to qualitative and risk evaluation.',
        ],
      },
      pitfalls: [
        'Use cash flows rather than automatically substituting accounting profit.',
        'Sunk costs are not incremental project cash flows.',
        'A higher IRR does not always identify the best mutually exclusive project.',
      ],
      questions: [
        q(
          'An investment costs $80,000 and has present value of future inflows $95,000. What is NPV?',
          '$15,000.',
          ['$80,000.', '$95,000.', '$175,000.'],
          'NPV is discounted inflows less the investment.',
          'application',
        ),
        q(
          'Weights are 40% debt and 60% equity. Pretax debt cost is 5%, equity cost 10%, and the supplied debt tax effect is 20%. What is WACC?',
          '7.6%.',
          ['8.0%.', '6.0%.', '9.0%.'],
          '0.4 × 5% × (1 − 20%) + 0.6 × 10% = 7.6%.',
          'application',
        ),
        q(
          'Which item is relevant to a project using an asset that could otherwise be sold?',
          'The foregone sale proceeds as an opportunity cost.',
          [
            'Only historical purchase cost regardless of alternatives.',
            'Only prior depreciation expense.',
            'No cost because the asset is already owned.',
          ],
          'Using an existing asset can sacrifice a current alternative benefit.',
          'analysis',
        ),
        q(
          'What is a limitation of the basic payback method?',
          'It ordinarily ignores cash flows after the payback point and the time value of money.',
          [
            'It always computes NPV exactly.',
            'It always uses market-value WACC.',
            'It guarantees the most profitable project.',
          ],
          'Payback is a limited liquidity measure, not a complete value-creation measure.',
          'remembering',
        ),
        q(
          'A completed feasibility study cost cannot be recovered and will not change under any alternative. How is it treated in incremental project analysis?',
          'As a sunk cost.',
          [
            'As new incremental revenue.',
            'As an opportunity cost equal to future sales.',
            'As a mandatory addition to every future cash flow.',
          ],
          'An irreversible past cost does not differ among future choices.',
          'application',
        ),
        q(
          'Two mutually exclusive projects rank differently under NPV and IRR. What should management evaluate?',
          'Scale, timing, reinvestment assumptions, and value creation.',
          [
            'Always choose the highest IRR without further analysis.',
            'Ignore all discounting.',
            'Choose the project with the longest name.',
          ],
          'Different scale and timing can produce ranking conflicts that require substantive evaluation.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'Investment proposal evaluation',
        scenario: 'Evaluate a proposed project and its financing assumptions.',
        exhibits: [
          {
            title: 'Project cash flows',
            body: 'Initial investment $200,000. Annual net cash inflow $60,000 for five years. Supplied annuity present-value factor 3.791. No terminal flow or other investment applies.',
          },
          {
            title: 'Financing',
            body: 'Market-value weights: 40% debt, 60% equity. Debt cost 5%; equity cost 10%; supplied tax rate for the debt adjustment 20%.',
          },
        ],
        tasks: [
          {
            label: 'Present value of project inflows',
            correct: 227460,
            distractors: [300000, 200000, 113730],
            explanation: '$60,000 × 3.791 = $227,460.',
          },
          {
            label: 'Project NPV',
            correct: 27460,
            distractors: [100000, -27460, 227460],
            explanation: '$227,460 − $200,000 = $27,460.',
          },
          {
            label: 'WACC as a percentage',
            correct: 7.6,
            distractors: [8, 6, 9],
            explanation: '40% × 5% × 80% + 60% × 10% = 7.6%.',
            tolerance: 0.001,
          },
          {
            label: 'NPV interpretation under the assumptions',
            correct: 'Positive value above the required return',
            options: [
              'Positive value above the required return',
              'A guarantee that no project risk exists',
              'A negative-value investment',
              'Proof of the official CPA passing score',
            ],
            explanation:
              'Positive NPV indicates value creation under the modeled assumptions, not certainty.',
          },
        ],
      },
    },
    {
      topic: 'performance-risk-valuation',
      title: 'Performance Measures, Enterprise Risk & Valuation',
      group: 'A-B',
      objectives: [
        'Combine financial and nonfinancial performance evidence.',
        'Connect enterprise risk to strategy and objectives.',
        'Apply supplied valuation multiples and economic relationships.',
      ],
      teaching: [
        'A balanced scorecard considers financial outcomes alongside customer, internal-process, and learning or development perspectives. Measures should connect to strategy, be defined consistently, and discourage gaming. A sales target that ignores returns, quality, or customer retention may reward behavior that harms long-term value.',
        'Enterprise risk management integrates risk with strategy and performance. Identify objectives, assess relevant risks and opportunities, evaluate responses, and monitor change. Environmental, social, governance, technology, and supply-chain risks can affect cash flows and capital needs; they should be analyzed through their business implications rather than treated as separate slogans.',
        'Valuation methods require consistent measures and assumptions. An enterprise-value multiple applied to EBITDA produces an enterprise measure, not automatically equity value; net debt and other claims may require adjustment. Comparable-company methods require attention to growth, risk, accounting, and metric definitions. Economic changes in interest rates, inflation, exchange rates, and demand can affect both forecast cash flows and discount rates.',
      ],
      workedExample: {
        title: 'Enterprise value to equity value',
        facts:
          'A case applies a 6× enterprise-value/EBITDA multiple to $2,000,000 EBITDA. Debt is $4,000,000 and excess cash is $1,000,000; ignore other claims.',
        steps: [
          'Enterprise value is $12,000,000.',
          'Net debt is $3,000,000.',
          'Equity value is $9,000,000 under the stated bridge.',
        ],
      },
      pitfalls: [
        'Do not confuse enterprise value with equity value.',
        'A performance metric can create incentives to game results.',
        'Comparability and risk assumptions drive valuation quality.',
      ],
      questions: [
        q(
          'EBITDA is $3,000,000 and the supplied enterprise-value multiple is 5×. What is enterprise value?',
          '$15,000,000.',
          ['$3,000,000.', '$600,000.', '$8,000,000.'],
          'Multiply the consistent EBITDA measure by the specified multiple.',
          'application',
        ),
        q(
          'Enterprise value is $15 million, debt $6 million, and excess cash $2 million. Ignore other claims. What is equity value?',
          '$11 million.',
          ['$15 million.', '$19 million.', '$7 million.'],
          'Equity value = enterprise value − debt + excess cash.',
          'application',
        ),
        q(
          'A sales bonus ignores returns and customer retention. What concern arises?',
          'The measure may encourage behavior inconsistent with long-term strategy.',
          [
            'The metric guarantees sustainable profit.',
            'No nonfinancial measure can help.',
            'Only the bonus payment date matters.',
          ],
          'Narrow targets can create dysfunctional incentives.',
          'analysis',
        ),
        q(
          'Which perspective is commonly included in a balanced scorecard?',
          'Customer performance.',
          [
            'Only the audit fee.',
            'Only shareholder birthdays.',
            'Only the tax return filing method.',
          ],
          'Balanced scorecards integrate financial and nonfinancial perspectives.',
          'remembering',
        ),
        q(
          'How should a material supply-chain risk be considered in enterprise risk management?',
          'Connect it to objectives, strategy, potential effects, responses, and monitoring.',
          [
            'Ignore it because it is nonfinancial at first.',
            'Treat the risk label as a complete response.',
            'Assume every risk should be accepted without analysis.',
          ],
          'ERM links risks to strategy and performance rather than merely listing them.',
          'analysis',
        ),
        q(
          'Why might an increase in interest rates affect a valuation?',
          'It can change financing costs, discount rates, and forecast cash flows.',
          [
            'It changes only document formatting.',
            'It guarantees equity value rises.',
            'It eliminates the need for forecasts.',
          ],
          'Economic conditions affect multiple valuation assumptions and cash-flow drivers.',
          'application',
        ),
      ],
      simulation: {
        title: 'Strategic performance and valuation memo',
        scenario:
          'Prepare an enterprise-to-equity bridge and identify performance-management implications.',
        exhibits: [
          {
            title: 'Valuation inputs',
            body: 'EBITDA $4,000,000; supplied EV/EBITDA multiple 5×; debt $7,000,000; excess cash $2,000,000. Ignore other claims.',
          },
          {
            title: 'Strategy observations',
            body: 'Management rewards shipment volume but ignores returns and service quality. A key supplier faces a material disruption risk.',
          },
        ],
        tasks: [
          {
            label: 'Enterprise value',
            correct: 20000000,
            distractors: [4000000, 13000000, 22000000],
            explanation: '$4,000,000 × 5 = $20,000,000.',
          },
          {
            label: 'Equity value',
            correct: 15000000,
            distractors: [20000000, 25000000, 11000000],
            explanation: '$20,000,000 − $7,000,000 + $2,000,000 = $15,000,000.',
          },
          {
            label: 'Improve the shipment incentive',
            correct: 'Include quality and customer-outcome measures aligned with strategy',
            options: [
              'Include quality and customer-outcome measures aligned with strategy',
              'Ignore returns',
              'Reward volume regardless of consequences',
              'Remove all performance monitoring',
            ],
            explanation: 'Balanced measures reduce incentives to sacrifice long-term outcomes.',
          },
          {
            label: 'Response to supplier risk',
            correct: 'Assess business effects, response options, and monitoring',
            options: [
              'Assess business effects, response options, and monitoring',
              'Ignore all nonfinancial risk',
              'Assume risk identification is the entire process',
              'Increase the valuation multiple automatically',
            ],
            explanation: 'ERM connects the risk to strategy and practical responses.',
          },
        ],
      },
    },
  ],
};
