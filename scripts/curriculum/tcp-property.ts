import { q, type CurriculumModule } from './types.ts';
export const tcpProperty: CurriculumModule = {
  title: 'Advanced Property Transactions',
  area: 4,
  lessons: [
    {
      topic: 'property-like-kind',
      title: 'Like-Kind Exchanges, Boot & Replacement Basis',
      group: 'A',
      objectives: [
        'Identify the scope and conditions of real-property exchange deferral.',
        'Compute realized and recognized gain with cash boot.',
        'Track deferred gain through replacement basis.',
      ],
      teaching: [
        'Section 1031 generally applies to qualifying real property held for business or investment, subject to its requirements and exclusions. Personal-use property and ordinary inventory do not qualify merely because they are exchanged. Deferred exchanges require attention to identification and completion timing, intermediary arrangements, receipt of proceeds, and other legal conditions.',
        'Compute realized gain before applying nonrecognition. Cash or other nonqualifying consideration can cause recognition subject to the applicable rules. Liabilities assumed or relieved and exchange expenses require careful analysis when present. The numerical cases state when those complications are absent so the gain and basis mechanism is clear.',
        'Replacement-property basis preserves deferred gain. In a simple qualifying exchange with only cash boot received, basis can be computed as old basis plus recognized gain minus cash received, or replacement fair value less deferred gain. A low basis is the reason deferred gain can become taxable later; nonrecognition is not necessarily permanent exclusion.',
      ],
      workedExample: {
        title: 'Exchange with boot',
        facts:
          'Old basis is $100,000. The owner receives qualifying replacement property worth $160,000 plus $20,000 cash. All exchange requirements are met; no liabilities or costs apply.',
        steps: [
          'Realized gain is $180,000 − $100,000 = $80,000.',
          'Recognized gain is $20,000; deferred gain is $60,000.',
          'Replacement basis is $160,000 − $60,000 = $100,000.',
        ],
      },
      pitfalls: [
        'An exchange label does not prove Section 1031 qualification.',
        'Liability boot requires its own analysis.',
        'Deferred gain is preserved through basis.',
      ],
      questions: [
        q(
          'Which property can potentially qualify under the general modern Section 1031 scope, if all requirements are met?',
          'Real property held for business or investment.',
          [
            'Every personal automobile.',
            'Inventory held for sale in every case.',
            'Any publicly traded stock.',
          ],
          'The provision generally concerns qualifying real property under the applicable rules.',
          'remembering',
        ),
        q(
          'Old basis is $80,000; replacement property value $130,000; cash boot $10,000. No other items apply. What is realized gain?',
          '$60,000.',
          ['$50,000.', '$10,000.', '$140,000.'],
          'Total amount realized $140,000 less $80,000 basis.',
          'application',
        ),
        q(
          'The qualifying exchange has $60,000 realized gain and $10,000 cash boot. What is recognized gain under the stated simple rules?',
          '$10,000.',
          ['$60,000.', '$50,000.', 'Zero regardless of boot.'],
          'Cash boot triggers recognition up to realized gain.',
          'application',
        ),
        q(
          'Replacement value is $130,000 and deferred gain $50,000. What is replacement basis?',
          '$80,000.',
          ['$130,000.', '$180,000.', '$50,000.'],
          'Replacement value less deferred gain preserves the unrecognized gain.',
          'application',
        ),
        q(
          'Why must deferred-exchange dates and receipt-of-proceeds facts be examined?',
          'Qualification depends on specific legal requirements, not merely an intent to reinvest.',
          [
            'Dates never matter.',
            'Any reinvestment at any time is tax-free.',
            'Only the asset’s name matters.',
          ],
          'The exchange must satisfy statutory and regulatory conditions.',
          'analysis',
        ),
        q(
          'What happens to deferred gain economically through a lower replacement basis?',
          'It can be recognized in a later taxable disposition.',
          [
            'It automatically becomes a refundable credit.',
            'It always disappears permanently.',
            'It is immediately deducted as an expense.',
          ],
          'Deferral changes timing and is preserved in basis.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'Qualifying exchange workpaper',
        scenario:
          'Compute the gain and basis consequences of an exchange that satisfies all stated Section 1031 requirements.',
        exhibits: [
          { title: 'Property transferred', body: 'Adjusted basis $150,000; fair value $240,000.' },
          {
            title: 'Consideration',
            body: 'Qualifying replacement real property worth $210,000 plus cash boot $30,000. No liabilities, expenses, or other complications.',
          },
        ],
        tasks: [
          {
            label: 'Realized gain',
            correct: 90000,
            distractors: [60000, 30000, 240000],
            explanation: '$240,000 total value received less $150,000 basis.',
          },
          {
            label: 'Recognized gain',
            correct: 30000,
            distractors: [90000, 60000, 0],
            explanation: 'Recognize the $30,000 cash boot, limited by realized gain.',
          },
          {
            label: 'Deferred gain',
            correct: 60000,
            distractors: [90000, 30000, 150000],
            explanation: '$90,000 − $30,000 = $60,000.',
          },
          {
            label: 'Replacement-property basis',
            correct: 150000,
            distractors: [210000, 180000, 120000],
            explanation: '$210,000 replacement value less $60,000 deferred gain.',
          },
        ],
      },
    },
    {
      topic: 'property-installment-conversion',
      title: 'Installment Sales & Involuntary Conversions',
      group: 'A',
      objectives: [
        'Compute gross-profit percentage and eligible installment gain.',
        'Recognize that recapture and debt can change installment treatment.',
        'Compute deferral and basis in a qualifying involuntary conversion.',
      ],
      teaching: [
        'An eligible installment sale generally recognizes a proportion of qualifying principal payments as gain using the gross-profit percentage. Interest is analyzed separately. Selling price, adjusted basis, selling costs, debt assumptions, and recapture can affect the computation. Depreciation recapture can require current recognition rather than being deferred with all cash collections.',
        'For a simple debt-free sale of eligible nondepreciable investment land, gross profit equals selling price less adjusted basis and qualifying selling costs; contract price equals the stipulated selling price. Apply the percentage to principal collected. A cash payment including interest must be separated before multiplying.',
        'A qualifying involuntary conversion can defer gain when replacement and timing requirements are satisfied. Recognized gain may depend on the proceeds not reinvested in qualifying replacement property under the applicable rule. Replacement basis reflects its cost less deferred gain. The occurrence of a casualty alone does not prove every replacement qualifies or every gain is excluded.',
      ],
      workedExample: {
        title: 'Installment land sale',
        facts:
          'Eligible land sells for $300,000, basis $180,000, and selling costs $20,000. There is no debt or recapture. Principal collected this year is $90,000.',
        steps: [
          'Gross profit is $100,000 and the ratio is one third.',
          'Recognized installment gain is $30,000.',
          'Interest, if any, would be separate from the principal-based gain calculation.',
        ],
      },
      pitfalls: [
        'Do not multiply the gross-profit ratio by interest receipts.',
        'Recapture and debt assumptions can alter the simple model.',
        'Involuntary-conversion deferral requires qualifying replacement facts.',
      ],
      questions: [
        q(
          'Eligible debt-free land sells for $400,000 with basis $240,000 and selling costs $20,000. What is gross profit?',
          '$140,000.',
          ['$160,000.', '$400,000.', '$260,000.'],
          '$400,000 − $240,000 − $20,000 = $140,000.',
          'application',
        ),
        q(
          'Gross profit is $140,000 and contract price $400,000. What is the gross-profit percentage?',
          '35%.',
          ['65%.', '40%.', '14%.'],
          '$140,000 ÷ $400,000 = 35%.',
          'application',
        ),
        q(
          'Eligible principal collections are $100,000 and the gross-profit percentage is 35%. What is installment gain?',
          '$35,000.',
          ['$100,000.', '$65,000.', '$140,000.'],
          'Apply the ratio to qualifying principal collected.',
          'application',
        ),
        q(
          'How is stated interest received on an installment obligation generally treated in the simple model?',
          'Separately from principal used in the installment-gain calculation.',
          [
            'Always multiplied by the gross-profit percentage as principal.',
            'Always tax-free.',
            'Always a reduction of basis only.',
          ],
          'Interest and principal have distinct tax treatment.',
          'remembering',
        ),
        q(
          'A qualifying involuntary conversion produces $200,000 proceeds, basis $120,000, and $180,000 qualifying replacement cost. Under the stated reinvestment rule, what gain is recognized?',
          '$20,000.',
          ['$80,000.', '$60,000.', 'Zero regardless of reinvestment.'],
          'The $20,000 unreinvested amount limits current recognition under the supplied assumptions.',
          'analysis',
        ),
        q(
          'If replacement cost is $180,000 and deferred gain $60,000, what is replacement basis?',
          '$120,000.',
          ['$180,000.', '$240,000.', '$60,000.'],
          'Cost less deferred gain equals $120,000.',
          'application',
        ),
      ],
      simulation: {
        title: 'Installment sale schedule',
        scenario: 'Compute an eligible installment sale of nondepreciable investment land.',
        exhibits: [
          {
            title: 'Sale terms',
            body: 'Selling price and contract price $500,000. Adjusted basis $300,000. Qualifying selling costs $25,000. No assumed debt or recapture.',
          },
          {
            title: 'Collections',
            body: 'Current-year principal collections $200,000. Interest is separately stated and excluded from the requested computations.',
          },
        ],
        tasks: [
          {
            label: 'Gross profit',
            correct: 175000,
            distractors: [200000, 500000, 325000],
            explanation: '$500,000 − $300,000 − $25,000 = $175,000.',
          },
          {
            label: 'Gross-profit percentage',
            correct: 35,
            distractors: [40, 65, 17.5],
            explanation: '$175,000 ÷ $500,000 = 35%.',
          },
          {
            label: 'Current installment gain',
            correct: 70000,
            distractors: [200000, 175000, 130000],
            explanation: '$200,000 principal × 35% = $70,000.',
          },
          {
            label: 'Basis recovery included in current principal',
            correct: 130000,
            distractors: [70000, 300000, 200000],
            explanation: '$200,000 collected less $70,000 gain = $130,000 basis recovery.',
          },
        ],
      },
    },
    {
      topic: 'property-character-planning',
      title: 'Wash Sales, Gain Character & Disposition Planning',
      group: 'A',
      objectives: [
        'Apply supplied wash-sale basis adjustments.',
        'Distinguish depreciation recapture and Section 1231 netting/lookback.',
        'Compare taxable dispositions and exclusions using complete facts.',
      ],
      teaching: [
        'A loss on stock or securities can be disallowed under wash-sale rules when substantially identical property is acquired within the relevant window, generally 30 days before or after the sale. In the ordinary replacement-stock case, the disallowed loss adjusts replacement basis under the applicable rules. It is not automatically a permanent loss of basis or a deduction against unrelated wages.',
        'Disposition character requires sequencing recapture, netting, and lookback rules. Section 1245 or other recapture can produce ordinary income; remaining qualifying business-property gains may enter Section 1231 netting, with prior nonrecaptured losses affecting treatment. A long holding period alone does not determine the final character.',
        'Personal residence exclusions and other provisions have specific ownership, use, frequency, and factual requirements. Planning should compare legal eligibility, basis, recognized gain, character, timing, and non-tax consequences. Do not assume every home sale is excluded or every asset sold at a loss produces a deduction.',
      ],
      workedExample: {
        title: 'Wash-sale basis',
        facts:
          'Stock with basis $15,000 is sold for $10,000 at a loss. Substantially identical replacement stock costing $12,000 is bought within the applicable window. Assume the ordinary basis-adjustment rule applies.',
        steps: [
          'The $5,000 loss is disallowed currently.',
          'Add that loss to the $12,000 replacement cost.',
          'Replacement basis is $17,000 under the supplied assumptions.',
        ],
      },
      pitfalls: [
        'Consider purchases both before and after the sale in the wash-sale window.',
        'Recapture can precede Section 1231 netting.',
        'Residence-sale eligibility requires actual facts, not merely a property label.',
      ],
      questions: [
        q(
          'Stock basis is $20,000 and sale proceeds $14,000. The loss is disallowed by a qualifying wash sale. Replacement cost is $16,000. What is replacement basis under the ordinary rule?',
          '$22,000.',
          ['$16,000.', '$10,000.', '$36,000.'],
          'Add the $6,000 disallowed loss to $16,000 replacement cost.',
          'application',
        ),
        q(
          'What purchase window is generally relevant to a wash-sale analysis?',
          'The relevant 30-day periods before and after the loss sale.',
          [
            'Only the day after the sale.',
            'Only the next calendar year.',
            'Only the holding period of the original shares.',
          ],
          'Both pre-sale and post-sale acquisitions can matter.',
          'remembering',
        ),
        q(
          'A supplied Section 1231 analysis has $60,000 net gain and $25,000 subject to ordinary treatment under the lookback rule. What remains for the stated long-term capital treatment?',
          '$35,000.',
          ['$60,000.', '$25,000.', '$85,000.'],
          '$60,000 − $25,000 = $35,000.',
          'application',
        ),
        q(
          'Why evaluate depreciation recapture before concluding that business-property gain is capital?',
          'Recapture can require ordinary-income treatment for part of the gain.',
          [
            'All long-held business assets always produce capital gain.',
            'Depreciation never affects gain character.',
            'Only sale proceeds matter.',
          ],
          'Character rules apply in a sequence and can override a simple holding-period conclusion.',
          'analysis',
        ),
        q(
          'A qualifying home sale has $300,000 gain and a supplied applicable exclusion of $250,000. No other adjustment applies. What gain remains recognized?',
          '$50,000.',
          ['$300,000.', '$250,000.', 'Zero regardless of the exclusion limit.'],
          '$300,000 − $250,000 = $50,000.',
          'application',
        ),
        q(
          'What must be established before applying a principal-residence gain exclusion?',
          'The applicable ownership, use, timing, and other eligibility requirements.',
          [
            'Only that the seller calls the property a home.',
            'Only the mortgage balance.',
            'Only the buyer’s intended use.',
          ],
          'Exclusion eligibility depends on substantive statutory conditions.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'Disposition character and basis review',
        scenario: 'Complete three independent disposition calculations under the supplied rules.',
        exhibits: [
          {
            title: 'Wash sale',
            body: 'Stock basis $30,000; loss-sale proceeds $22,000; qualifying substantially identical replacement cost $25,000. The full loss is disallowed and added to replacement basis.',
          },
          {
            title: 'Other dispositions',
            body: 'A Section 1231 schedule shows $90,000 net gain, of which $35,000 receives ordinary treatment under the supplied lookback analysis. A qualifying residence sale has $320,000 gain and an applicable $250,000 exclusion.',
          },
        ],
        tasks: [
          {
            label: 'Disallowed stock loss',
            correct: 8000,
            distractors: [22000, 30000, 5000],
            explanation: '$30,000 − $22,000 = $8,000.',
          },
          {
            label: 'Replacement stock basis',
            correct: 33000,
            distractors: [25000, 17000, 38000],
            explanation: '$25,000 replacement cost + $8,000 disallowed loss.',
          },
          {
            label: 'Section 1231 gain remaining for the stated capital treatment',
            correct: 55000,
            distractors: [90000, 35000, 125000],
            explanation: '$90,000 − $35,000 = $55,000.',
          },
          {
            label: 'Recognized residence gain after the supplied exclusion',
            correct: 70000,
            distractors: [320000, 250000, 0],
            explanation: '$320,000 − $250,000 = $70,000.',
          },
        ],
      },
    },
  ],
};
