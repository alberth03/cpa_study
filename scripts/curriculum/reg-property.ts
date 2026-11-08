import { q, type CurriculumModule } from './types.ts';
export const regProperty: CurriculumModule = {
  title: 'Property Basis, Cost Recovery & Dispositions',
  area: 3,
  lessons: [
    {
      topic: 'tax-basis',
      title: 'Tax Basis: Purchases, Gifts, Inheritances & Conversion',
      group: 'A',
      objectives: [
        'Compute acquisition and adjusted basis.',
        'Apply the different gain/loss basis rules for gifts.',
        'Distinguish inherited basis and conversion depreciation basis.',
      ],
      teaching: [
        'Tax basis measures investment for tax purposes; it is not automatically current fair value or the financial-statement carrying amount. Purchased property generally begins with cost, including capitalizable acquisition and preparation costs. Adjusted basis increases for capital improvements and decreases for depreciation allowed or allowable and other required adjustments.',
        'Gift property generally carries the donor’s adjusted basis for gain, subject to applicable gift-tax adjustments. When fair value at the gift date is below the donor’s basis, a different loss basis can apply. A sale between the gain and loss bases can produce neither gain nor loss. Inherited property generally uses date-of-death fair value or an applicable alternative valuation, rather than the decedent’s original purchase price.',
        'For personal property converted to business or income-producing use, the depreciation basis generally is the lower of adjusted basis or fair value at conversion. Basis used for a later disposition requires its own gain/loss analysis. Keep tax basis, depreciation basis, and book value separate and document the applicable dates and assumptions.',
      ],
      workedExample: {
        title: 'A gift with two bases',
        facts:
          'A donor’s adjusted basis is $30,000 and gift-date fair value is $22,000. No gift-tax basis adjustment applies. The recipient later sells for $26,000.',
        steps: [
          'The gain basis is $30,000 and the loss basis is $22,000.',
          'The selling price is below the gain basis but above the loss basis.',
          'No gain or loss is recognized under these dual-basis facts.',
        ],
      },
      pitfalls: [
        'A gift does not generally reset gain basis to fair value.',
        'Depreciation allowed or allowable reduces basis.',
        'Book carrying amount and tax basis may differ.',
      ],
      questions: [
        q(
          'Equipment costs $80,000 plus $5,000 capitalizable delivery and installation. What is its initial tax basis?',
          '$85,000.',
          ['$80,000.', '$75,000.', '$5,000.'],
          'Capitalizable acquisition and preparation costs are included in basis.',
          'application',
        ),
        q(
          'An asset has original basis $100,000, capital improvements $15,000, and depreciation allowed or allowable $40,000. What is adjusted basis?',
          '$75,000.',
          ['$115,000.', '$60,000.', '$155,000.'],
          '$100,000 + $15,000 − $40,000 = $75,000.',
          'application',
        ),
        q(
          'Gift property has donor basis $40,000 and gift-date value $28,000. No gift-tax adjustment applies. It is sold for $34,000. What is the result?',
          'Neither gain nor loss.',
          ['$6,000 deductible loss.', '$6,000 gain.', '$12,000 gain.'],
          'The proceeds lie between the loss basis and gain basis.',
          'analysis',
        ),
        q(
          'Inherited property has date-of-death value $90,000 and decedent cost $20,000. No alternative valuation applies. What is the heir’s general basis?',
          '$90,000.',
          ['$20,000.', '$70,000.', '$110,000.'],
          'The general inherited-basis rule uses date-of-death fair value under the stated assumptions.',
          'application',
        ),
        q(
          'Personal equipment with adjusted basis $50,000 and conversion-date value $35,000 is placed in business use. What is the general depreciation basis?',
          '$35,000.',
          ['$50,000.', '$85,000.', '$15,000.'],
          'For conversion to business use, depreciation basis generally uses the lower amount.',
          'application',
        ),
        q(
          'Which item ordinarily increases adjusted basis?',
          'A capital improvement.',
          [
            'Depreciation allowed or allowable.',
            'A deduction of the entire acquisition cost after basis recovery.',
            'A nontaxable reduction of investment in every case.',
          ],
          'Capital improvements generally add to basis; cost recovery ordinarily reduces it.',
          'remembering',
        ),
      ],
      simulation: {
        title: 'Property basis workpaper',
        scenario: 'Compute the relevant basis or gain for three independent assets.',
        exhibits: [
          {
            title: 'Purchased machine',
            body: 'Cost $120,000; capitalizable installation $8,000; subsequent capital improvement $12,000; depreciation allowed or allowable $45,000.',
          },
          {
            title: 'Other assets',
            body: 'Inherited land has date-of-death value $70,000; no alternative valuation. Personal equipment converted to business use has adjusted basis $40,000 and fair value $25,000.',
          },
        ],
        tasks: [
          {
            label: 'Initial machine basis',
            correct: 128000,
            distractors: [120000, 132000, 8000],
            explanation: '$120,000 + $8,000 installation = $128,000.',
          },
          {
            label: 'Machine adjusted basis after improvement and depreciation',
            correct: 95000,
            distractors: [83000, 140000, 185000],
            explanation: '$128,000 + $12,000 − $45,000 = $95,000.',
          },
          {
            label: 'Inherited land basis',
            correct: 70000,
            distractors: [0, 25000, 40000],
            explanation: 'Use the stated date-of-death value.',
          },
          {
            label: 'Converted equipment depreciation basis',
            correct: 25000,
            distractors: [40000, 65000, 15000],
            explanation: 'Use the lower of adjusted basis and conversion-date fair value.',
          },
        ],
      },
    },
    {
      topic: 'property-depreciation',
      title: 'Depreciation, Expensing & Capitalization',
      group: 'B',
      objectives: [
        'Apply cost-recovery assumptions in the proper order.',
        'Distinguish capital improvements from current expenditures.',
        'Track tax-law periods, conventions, and limits.',
      ],
      teaching: [
        'Tax cost recovery requires identifying qualifying property, basis, placed-in-service date, recovery period, method, and convention. Tax depreciation may differ from book depreciation. A property purchase near year-end does not necessarily receive a full year of ordinary MACRS depreciation; apply the relevant convention and any supplied table.',
        'Section 179, additional first-year depreciation, and ordinary depreciation interact with eligibility rules, dollar limits, phase-outs, business-income limits, and elections. Apply the law for the stated reference period. The 2025 federal legislation changed several cost-recovery provisions; acquisition and placed-in-service dates and AICPA testing eligibility matter. This course states rates and limits within numerical exercises to avoid silently importing another year’s values.',
        'In an exercise where expensing and bonus are allowed, apply the specified Section 179 deduction, then the applicable bonus to the remaining eligible basis, then ordinary depreciation to the residual basis using the stated rate. Do not depreciate the same basis twice. Costs that improve, restore, or adapt property may require capitalization, while qualifying ordinary repairs can be current deductions under applicable rules.',
      ],
      workedExample: {
        title: 'Specified cost-recovery sequence',
        facts:
          'Eligible equipment basis is $100,000. The case allows a $20,000 Section 179 deduction, a 50% bonus rate on the remaining basis, and a 20% first-year rate on the residual. No other limits apply. These are supplied exercise rates, not a claim about a universal 2026 bonus rate.',
        steps: [
          'Section 179 leaves $80,000.',
          'Bonus is $40,000, leaving $40,000.',
          'Ordinary depreciation is $8,000; total deduction is $68,000 and remaining basis is $32,000.',
        ],
      },
      pitfalls: [
        'Do not treat supplied training rates as law for every year.',
        'A placed-in-service date is not necessarily the purchase date.',
        'The same cost cannot be both fully expensed and depreciated again.',
      ],
      questions: [
        q(
          'A case permits a $15,000 Section 179 deduction on $75,000 basis, then 100% bonus on the remaining eligible basis. No limits apply. What is total cost recovery?',
          '$75,000.',
          ['$90,000.', '$60,000.', '$15,000.'],
          'Recover $15,000 under Section 179 and the remaining $60,000 under the supplied bonus assumption; do not deduct basis twice.',
          'application',
        ),
        q(
          'An asset’s remaining depreciable basis is $40,000 and the supplied first-year table rate is 20%. What is depreciation?',
          '$8,000.',
          ['$20,000.', '$40,000.', '$2,000.'],
          '$40,000 × 20% = $8,000.',
          'application',
        ),
        q(
          'Why must a cost-recovery question identify the applicable tax-law period?',
          'Eligibility, rates, limits, and elections can change over time.',
          [
            'Tax law never changes.',
            'Only the company name determines depreciation.',
            'The financial-statement font determines the tax rate.',
          ],
          'Versioned assumptions prevent outdated provisions from being silently reused.',
          'remembering',
        ),
        q(
          'A major expenditure materially restores an asset and must be capitalized under the applicable rules. What is the ordinary effect?',
          'Increase basis and recover cost under the applicable tax rules.',
          [
            'Always deduct it twice.',
            'Ignore it because cash was paid.',
            'Reduce basis by the expenditure in every case.',
          ],
          'Capitalized restoration costs generally increase the investment subject to applicable recovery.',
          'application',
        ),
        q(
          'A machine is purchased in December but is not ready and available for its intended business use until February. Which date is relevant to beginning tax depreciation?',
          'The applicable placed-in-service date.',
          [
            'Always the invoice date regardless of readiness.',
            'Always the payment date regardless of use.',
            'The date the auditor visits.',
          ],
          'Depreciation eligibility depends on placement in service under the governing rules.',
          'analysis',
        ),
        q(
          'The supplied facts say a Section 179 business-income limitation restricts the deduction. What should the preparer do?',
          'Apply the limitation and evaluate any permitted carryforward.',
          [
            'Ignore the limit because property is eligible.',
            'Treat the disallowed amount as depreciation twice.',
            'Assume every limitation is permanent.',
          ],
          'Eligibility and limits are separate; carryforward treatment depends on the applicable provision.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'Cost recovery using supplied assumptions',
        scenario:
          'Prepare a deduction schedule using only the rates and limits explicitly provided for this training case.',
        exhibits: [
          {
            title: 'Asset and elected deduction',
            body: 'Eligible equipment basis is $160,000. The permitted Section 179 deduction is $40,000. No taxable-income or other limitation changes that amount.',
          },
          {
            title: 'Supplied training rates',
            body: 'For this exercise, bonus depreciation is 50% of basis remaining after Section 179. Ordinary first-year depreciation is 20% of the remaining basis after bonus. These supplied rates are not a universal statement of current bonus law.',
          },
        ],
        tasks: [
          {
            label: 'Basis after Section 179',
            correct: 120000,
            distractors: [160000, 40000, 200000],
            explanation: '$160,000 − $40,000 = $120,000.',
          },
          {
            label: 'Bonus deduction under the supplied rate',
            correct: 60000,
            distractors: [80000, 24000, 120000],
            explanation: '50% × $120,000 = $60,000.',
          },
          {
            label: 'Ordinary first-year depreciation',
            correct: 12000,
            distractors: [24000, 32000, 60000],
            explanation: '20% × ($120,000 − $60,000) = $12,000.',
          },
          {
            label: 'Adjusted basis after all stated deductions',
            correct: 48000,
            distractors: [60000, 112000, 28000],
            explanation: '$160,000 − $40,000 − $60,000 − $12,000 = $48,000.',
          },
        ],
      },
    },
    {
      topic: 'property-dispositions',
      title: 'Realized Gain, Recognized Gain & Character',
      group: 'A-B',
      objectives: [
        'Compute amount realized and adjusted-basis gain or loss.',
        'Distinguish capital assets and business property.',
        'Evaluate depreciation recapture using stated facts.',
      ],
      teaching: [
        'Realized gain or loss generally compares amount realized with adjusted basis. Amount realized can include cash, property received, and liabilities relieved, reduced by qualifying selling costs. Recognition is a separate question: a specific nonrecognition or deferral provision may alter current taxation. Do not assume every economic gain is recognized immediately or every exchange is tax-free.',
        'Character depends on the property, use, holding period, and applicable rules. Inventory and property held primarily for sale to customers are not ordinary capital assets. Depreciable business property can fall under Section 1231 when requirements are met, with recapture rules and netting or lookback provisions affecting character. Personal-use losses are generally not deductible merely because proceeds are below original cost.',
        'For Section 1245 property, gain is generally ordinary to the extent of depreciation recapture, limited by recognized gain under the applicable rule. Remaining gain may receive Section 1231 treatment when its requirements are satisfied. Keep the computation sequence clear: adjusted basis, amount realized, gain, recapture, and any remaining character analysis. TCP develops more complex nonrecognition and planning applications.',
      ],
      workedExample: {
        title: 'Equipment disposition',
        facts:
          'Business equipment cost $100,000, accumulated tax depreciation is $70,000, and net sale proceeds are $90,000. Assume Section 1245 applies and no nonrecognition provision.',
        steps: [
          'Adjusted basis is $30,000.',
          'Gain is $90,000 − $30,000 = $60,000.',
          'The $60,000 gain is within the $70,000 depreciation amount and is ordinary recapture under the stated assumptions.',
        ],
      },
      pitfalls: [
        'Realization and recognition are distinct.',
        'Long holding periods do not make inventory a capital asset.',
        'Compute adjusted basis before characterizing gain.',
      ],
      questions: [
        q(
          'Property with adjusted basis $45,000 is sold for $80,000 cash with $5,000 qualifying selling costs. What is realized gain?',
          '$30,000.',
          ['$35,000.', '$40,000.', '$75,000.'],
          'Net amount realized is $75,000; subtract $45,000 basis.',
          'application',
        ),
        q(
          'Equipment cost $90,000 and depreciation allowed or allowable is $50,000. It sells for $65,000 with no selling costs. What is gain?',
          '$25,000.',
          ['$65,000.', '$40,000.', '$15,000.'],
          'Adjusted basis is $40,000; gain is $65,000 − $40,000.',
          'application',
        ),
        q(
          'Under stated Section 1245 assumptions, recognized gain is $25,000 and prior depreciation is $50,000. What is ordinary recapture?',
          '$25,000.',
          ['$50,000.', 'Zero.', '$75,000.'],
          'Recapture is limited to the recognized gain in these facts.',
          'application',
        ),
        q(
          'Which property is generally excluded from the ordinary definition of a capital asset?',
          'Inventory held for sale to customers.',
          [
            'An individual’s investment stock.',
            'Investment land in ordinary circumstances.',
            'A personal investment bond in ordinary circumstances.',
          ],
          'Inventory held for sale is generally ordinary-income property rather than a capital asset.',
          'remembering',
        ),
        q(
          'Does every realized gain have to be recognized currently?',
          'No; a specific applicable nonrecognition or deferral provision may change current recognition.',
          [
            'Yes, without exception.',
            'No gain is ever recognized on a sale.',
            'Only the book gain matters.',
          ],
          'Realization and tax recognition are separate analytical steps.',
          'analysis',
        ),
        q(
          'An individual sells personal-use furniture at a loss. What is the general federal income-tax result?',
          'The personal-use loss is generally nondeductible.',
          [
            'The loss is automatically a business deduction.',
            'The loss always offsets wages without limitation.',
            'The proceeds are entirely tax-free basis in every possible case.',
          ],
          'Personal-use losses are generally not deductible; the rule differs from qualifying business or investment property losses.',
          'application',
        ),
      ],
      simulation: {
        title: 'Equipment sale computation',
        scenario:
          'Calculate gain and recapture for a business equipment sale under the stated rules.',
        exhibits: [
          {
            title: 'Asset record',
            body: 'Original cost $140,000; tax depreciation allowed or allowable $90,000. The equipment is Section 1245 property.',
          },
          {
            title: 'Sale terms',
            body: 'Cash proceeds $120,000; qualifying selling costs $10,000. No nonrecognition provision applies. Recapture is limited to recognized gain and prior depreciation.',
          },
        ],
        tasks: [
          {
            label: 'Adjusted basis',
            correct: 50000,
            distractors: [140000, 90000, 230000],
            explanation: '$140,000 − $90,000 = $50,000.',
          },
          {
            label: 'Net amount realized',
            correct: 110000,
            distractors: [120000, 130000, 10000],
            explanation: '$120,000 − $10,000 = $110,000.',
          },
          {
            label: 'Recognized gain',
            correct: 60000,
            distractors: [70000, 110000, 50000],
            explanation: '$110,000 − $50,000 = $60,000.',
          },
          {
            label: 'Ordinary Section 1245 recapture',
            correct: 60000,
            distractors: [90000, 30000, 0],
            explanation: 'The $60,000 gain is less than prior depreciation of $90,000.',
          },
        ],
      },
    },
  ],
};
