import { q, type CurriculumModule } from './types.ts';
export const audRisk: CurriculumModule = {
  title: 'Risk Assessment & Audit Planning',
  area: 2,
  lessons: [
    {
      topic: 'audit-risk-planning',
      title: 'Understand the Entity & Design the Audit Strategy',
      group: 'A-B-E',
      objectives: [
        'Connect business conditions to assertion-level risks.',
        'Distinguish inherent, control, detection, and audit risk.',
        'Adjust the nature, timing, and extent of audit work.',
      ],
      teaching: [
        'Planning begins with the entity, its industry, ownership, financing, reporting framework, objectives, and business model. External changes such as a recession, interest-rate increases, supply shortages, or new regulation can change the risk of misstatement. Internal changes such as a new ERP, acquisitions, bonus arrangements, or an inexperienced finance team can affect several assertions at once. Translate a business observation into a possible financial-statement error before selecting procedures.',
        'Inherent risk is susceptibility to material misstatement before considering controls. Control risk is the risk that relevant controls will not prevent, or detect and correct, a misstatement timely. Detection risk concerns the auditor’s procedures failing to detect a material misstatement. The audit-risk model is a planning relationship: acceptable audit risk is related to inherent risk × control risk × detection risk. A higher assessed risk of material misstatement requires lower acceptable detection risk and more persuasive audit evidence.',
        'The overall strategy establishes scope, timing, direction, and resources. The detailed plan translates that strategy into risk-assessment procedures, tests of controls when appropriate, and substantive procedures. Nature is the kind of procedure, timing is when it is performed, and extent is the amount of work. Lowering detection risk may require more reliable external evidence, more year-end work, or more extensive testing, not merely a larger random sample of an irrelevant population.',
        'Risk assessment is iterative. Information learned during testing can contradict initial expectations. Revise the assessment and plan rather than forcing later evidence into the original budget. Economic indicators are useful context, but general economic improvement does not establish that a specific revenue balance exists or that a specific receivable is collectible.',
      ],
      workedExample: {
        title: 'Planning for a pressured year-end',
        facts:
          'A manufacturer faces covenant pressure and falling demand. Inventory turnover has declined, but the client has not increased its obsolescence reserve. Illustratively, acceptable audit risk is 5%, inherent risk is 80%, and control risk is 50%.',
        steps: [
          'Link declining demand to inventory valuation and covenant pressure to bias.',
          'Illustrative detection risk is 5% ÷ (80% × 50%) = 12.5%.',
          'Obtain persuasive evidence about subsequent sales, aging, and disposal plans; revise the plan if new facts increase risk.',
        ],
      },
      pitfalls: [
        'Business risk is not itself a financial-statement assertion.',
        'Higher assessed risk calls for lower acceptable detection risk.',
        'Increasing the extent of an irrelevant procedure does not improve its relevance.',
      ],
      questions: [
        q(
          'Assessed risk of material misstatement increases while acceptable audit risk stays constant. What happens to acceptable detection risk?',
          'It decreases.',
          ['It increases.', 'It becomes irrelevant.', 'It must equal control risk.'],
          'More risky assertions require audit procedures that leave a lower risk of failing to detect a material misstatement.',
          'remembering',
        ),
        q(
          'A retailer introduces a complex new revenue contract before considering any controls. Which risk is primarily illustrated by the contract’s complexity?',
          'Inherent risk.',
          [
            'Detection risk.',
            'Sampling risk alone.',
            'The risk that an audit report is mailed late.',
          ],
          'Inherent risk concerns susceptibility to misstatement before control effects. Complexity may increase that susceptibility.',
          'application',
        ),
        q(
          'A company experiences falling demand and slow-moving inventory. Which assertion most directly requires additional attention?',
          'Inventory valuation.',
          [
            'Cash existence only.',
            'Debt completeness only.',
            'Ownership of the auditor’s workpapers.',
          ],
          'Slow movement and declining demand can indicate inventory is not recoverable at recorded amounts.',
          'analysis',
        ),
        q(
          'Illustratively, acceptable audit risk is 4%, inherent risk is 80%, and control risk is 50%. What is planned detection risk?',
          '10%.',
          ['1.6%.', '20%.', '40%.'],
          'Detection risk = .04 ÷ (.80 × .50) = .10. Multiplying all three known inputs does not solve for detection risk.',
          'application',
        ),
        q(
          'Which planning change primarily changes the nature of evidence?',
          'Replacing internal explanations with independent external confirmations.',
          [
            'Increasing a sample from 20 to 40 items.',
            'Moving the same procedure from November to December.',
            'Allowing an extra hour to type the memo.',
          ],
          'Nature concerns the kind of procedure and evidence; sample size is extent and moving the date is timing.',
          'application',
        ),
        q(
          'Substantive testing reveals a previously unknown side agreement affecting revenue. What should the auditor do?',
          'Reassess risk and revise planned procedures as necessary.',
          [
            'Retain the original assessment to meet the budget.',
            'Assume the agreement cannot affect other transactions.',
            'Treat an unmodified prior-year opinion as sufficient evidence.',
          ],
          'Risk assessment is iterative. New evidence may change the audit response and extend testing to similar arrangements.',
          'evaluation',
        ),
      ],
      simulation: {
        title: 'Risk-to-response planning matrix',
        scenario:
          'A distributor is entering a new market and implementing a new ERP. Match each issue to the appropriate audit concept or response.',
        exhibits: [
          {
            title: 'Planning observations',
            body: 'Complex warranty estimates require substantial judgment. The new ERP has not implemented approval controls. A lender covenant increases pressure to overstate earnings. The team initially planned interim testing before the ERP conversion.',
          },
          {
            title: 'Illustrative risk inputs',
            body: 'For one assertion, acceptable audit risk is 3%, inherent risk is 60%, and control risk is 50%. These percentages are a teaching illustration, not a prescribed audit formula for every engagement.',
          },
        ],
        tasks: [
          {
            label: 'Risk associated with estimate susceptibility before controls',
            correct: 'Inherent risk',
            options: ['Inherent risk', 'Detection risk', 'Engagement fee risk', 'No audit risk'],
            explanation: 'Estimate complexity affects inherent susceptibility.',
          },
          {
            label: 'Risk associated with ineffective approval controls',
            correct: 'Control risk',
            options: [
              'Control risk',
              'Detection risk',
              'Only sampling risk',
              'No financial-reporting implication',
            ],
            explanation: 'Relevant controls may fail to prevent or detect errors.',
          },
          {
            label: 'Illustrative detection risk, as a percentage',
            correct: 10,
            distractors: [0.9, 20, 30],
            explanation: '3% ÷ (60% × 50%) = 10%.',
          },
          {
            label: 'Response to post-conversion risks',
            correct: 'Reassess timing and add appropriate post-conversion procedures',
            options: [
              'Reassess timing and add appropriate post-conversion procedures',
              'Rely entirely on pre-conversion work',
              'Assume the ERP improves every control',
              'Reduce evidence because management is busy',
            ],
            explanation: 'Evidence from the old system may not address risks in the new system.',
          },
        ],
      },
    },
    {
      topic: 'internal-controls',
      title: 'Internal Controls, Walkthroughs & Service Organizations',
      group: 'C',
      objectives: [
        'Apply COSO components and control design concepts.',
        'Distinguish design, implementation, and operating effectiveness.',
        'Use SOC reports and identify complementary user-entity controls.',
      ],
      teaching: [
        'Internal control is a process designed to provide reasonable assurance regarding operations, reporting, and compliance objectives. COSO’s five components are the control environment, risk assessment, control activities, information and communication, and monitoring. A policy document alone does not demonstrate that a control is implemented, and a single walkthrough does not establish that it operated effectively throughout a period.',
        'Follow a transaction from initiation through authorization, recording, processing, and reporting. A walkthrough combines inquiry with inspection, observation, or reperformance to understand the process and determine whether relevant controls are designed and implemented. Assess operating effectiveness over the period when planning to rely on controls or when substantive procedures alone cannot provide sufficient appropriate evidence.',
        'Segregate authorization, custody, recording, and reconciliation where practicable. Small entities may use effective owner review as a compensating control, but the review must be sufficiently precise and performed by an appropriate person. Automated controls can operate consistently, but their reliability depends on relevant IT general controls over access, change management, and operations.',
        'Outsourcing does not outsource management’s reporting responsibility. A SOC 1 report addresses controls relevant to user entities’ financial reporting. Type 1 addresses design at a date; Type 2 also includes operating effectiveness over a period. Read the scope, opinion, tests, exceptions, subservice organization treatment, and complementary user-entity controls. A SOC 2 security report is not automatically a substitute for financial-reporting evidence.',
      ],
      workedExample: {
        title: 'Payroll processing outsourced',
        facts:
          'An entity uses a payroll provider with a SOC 1 Type 2 report. The report assumes customers approve employee additions and reconcile payroll totals. The entity does neither.',
        steps: [
          'The report’s existence is not sufficient by itself.',
          'The complementary user controls are missing, so evaluate the resulting payroll risks.',
          'Test appropriate entity controls or expand substantive procedures and assess communication requirements.',
        ],
      },
      pitfalls: [
        'Inquiry alone is generally insufficient to establish operating effectiveness.',
        'A Type 1 report does not cover operating effectiveness throughout the year.',
        'Collusion and management override limit even well-designed controls.',
      ],
      questions: [
        q(
          'Which COSO component includes the tone at the top and commitment to integrity?',
          'Control environment.',
          ['Control activities only.', 'Detection risk.', 'Substantive procedures.'],
          'The control environment provides the foundation for the other internal-control components.',
          'remembering',
        ),
        q(
          'An auditor follows one transaction through a process and inspects evidence of approval. What does this most directly support?',
          'Understanding design and implementation.',
          [
            'A conclusion that every approval operated throughout the year.',
            'A guarantee that fraud is impossible.',
            'A direct opinion on every IT system.',
          ],
          'A walkthrough helps understand the process and implementation. Period-long operating effectiveness requires appropriate additional evidence.',
          'analysis',
        ),
        q(
          'Which combination creates the clearest segregation-of-duties concern?',
          'One employee maintains vendor records, approves payments, and reconciles the bank.',
          [
            'One employee enters invoices and another approves payments.',
            'A custodian is separate from the ledger accountant.',
            'An independent reviewer investigates bank reconciling items.',
          ],
          'Combining authorization, record control, and reconciliation enables errors or fraud to be initiated and concealed.',
          'analysis',
        ),
        q(
          'Which service-auditor report is generally most relevant to operating effectiveness of outsourced payroll controls affecting financial reporting?',
          'SOC 1 Type 2.',
          [
            'SOC 1 Type 1 alone.',
            'A general marketing brochure.',
            'An unrelated SOC 2 confidentiality report alone.',
          ],
          'SOC 1 addresses financial-reporting controls, and Type 2 adds operating-effectiveness testing over a period.',
          'application',
        ),
        q(
          'A SOC report identifies user controls that the client has not implemented. What should the auditor do?',
          'Evaluate the missing controls and adjust the audit response.',
          [
            'Ignore them because the provider has an unmodified report.',
            'Assume the service auditor tested the client’s controls.',
            'Remove payroll from the audit scope.',
          ],
          'Complementary user-entity controls are part of the assumed control system and may require testing or a changed substantive response.',
          'evaluation',
        ),
        q(
          'Why are change-management controls relevant to an automated three-way matching control?',
          'Unauthorized program changes could alter how the matching control operates.',
          [
            'Automated controls never depend on IT general controls.',
            'Change controls establish ownership of inventory.',
            'They replace all invoice evidence.',
          ],
          'Relevant IT general controls support continued reliable operation of automated application controls.',
          'application',
        ),
      ],
      simulation: {
        title: 'Revenue-cycle control walkthrough',
        scenario: 'Evaluate the design and evidence of controls in an order-to-cash cycle.',
        exhibits: [
          {
            title: 'Process narrative',
            body: 'Sales staff can create customers and approve their own credit limits. Shipments are entered through a system with a documented matching control. Developers can alter that control directly in production. The outsourced billing provider supplied only a SOC 1 Type 1 report.',
          },
          {
            title: 'Audit objective',
            body: 'The team wants to rely on relevant controls throughout the year. A single observed transaction matched successfully. No testing over the period has been performed.',
          },
        ],
        tasks: [
          {
            label: 'Concern in customer and credit approval',
            correct: 'Incompatible authorization responsibilities',
            options: [
              'Incompatible authorization responsibilities',
              'A complete independent credit review',
              'Only a presentation issue',
              'No control risk',
            ],
            explanation: 'Self-approval weakens independent authorization.',
          },
          {
            label: 'Concern in production program access',
            correct: 'Unauthorized change risk',
            options: [
              'Unauthorized change risk',
              'Guaranteed operating effectiveness',
              'A physical inventory issue only',
              'A sufficient compensating control',
            ],
            explanation: 'Developers could bypass authorized and tested changes.',
          },
          {
            label: 'What the Type 1 report does not establish',
            correct: 'Operating effectiveness over the period',
            options: [
              'Operating effectiveness over the period',
              'The report’s date',
              'The report’s stated scope',
              'The system description included',
            ],
            explanation: 'Type 1 is an at-a-date design report.',
          },
          {
            label: 'Additional evidence for planned reliance',
            correct: 'Appropriate tests of operating effectiveness',
            options: [
              'Appropriate tests of operating effectiveness',
              'Only the original inquiry',
              'A client waiver',
              'No work after one successful match',
            ],
            explanation: 'Planned reliance requires evidence across the relevant period.',
          },
        ],
      },
    },
    {
      topic: 'materiality-fraud-response',
      title: 'Materiality, Fraud & Planned Responses',
      group: 'D-E',
      objectives: [
        'Calculate materiality using specified benchmarks and evaluate qualitative factors.',
        'Distinguish overall materiality, performance materiality, and clearly trivial thresholds.',
        'Design responses to fraud risks and aggregated misstatements.',
      ],
      teaching: [
        'Materiality concerns whether a misstatement could reasonably influence users’ decisions. The assessment includes both magnitude and nature. A small intentional adjustment that turns a loss into a profit or meets a covenant may be important even when it is below a numerical benchmark. Benchmark percentages are tools for judgment, not universal rules imposed by auditing standards.',
        'Overall materiality applies to the financial statements as a whole. A lower materiality level may apply to particular classes, balances, or disclosures. Performance materiality is set below overall materiality to reduce the probability that aggregate uncorrected and undetected misstatements exceed materiality. A clearly trivial threshold governs accumulation of inconsequential items; it is not simply another word for immaterial.',
        'Fraud involves intentional misstatement or misappropriation. Consider incentives or pressures, opportunities, and rationalizations, then link identified risks to assertions and procedures. The auditor ordinarily presumes a fraud risk in revenue recognition unless a supported, documented conclusion rebuts it in the circumstances. Management override requires attention irrespective of other risk assessments.',
        'Accumulate identified misstatements except those clearly trivial, communicate them, request correction, and evaluate uncorrected items individually and in aggregate. Revisit materiality when actual results differ significantly from the benchmark used in planning. A corrected error can still reveal a broader control or fraud problem; correction alone does not erase its audit implications.',
      ],
      workedExample: {
        title: 'Materiality and aggregation',
        facts:
          'A training case specifies overall materiality of 5% of $2,000,000 pretax income and performance materiality of 70% of that amount. Three uncorrected expenses are understated by $35,000, $30,000, and $45,000.',
        steps: [
          'Overall materiality is $100,000; performance materiality is $70,000.',
          'Aggregate understatement is $110,000, above overall materiality.',
          'Evaluate the combined effect and qualitative circumstances rather than dismissing each item individually.',
        ],
      },
      pitfalls: [
        'No universal benchmark percentage applies to every audit.',
        'A clearly trivial threshold is not the opinion materiality threshold.',
        'A corrected fraud-related adjustment may still require risk reassessment.',
      ],
      questions: [
        q(
          'A case specifies overall materiality as 4% of $3,000,000 pretax income and performance materiality as 75% of overall materiality. What is performance materiality?',
          '$90,000.',
          ['$120,000.', '$30,000.', '$2,250,000.'],
          'Overall materiality is $120,000; 75% is $90,000. The case supplies the percentages rather than prescribing universal audit rules.',
          'application',
        ),
        q(
          'A $10,000 deliberate misstatement causes an entity to meet a loan covenant. It is below the audit’s numerical materiality benchmark. What is appropriate?',
          'Consider its qualitative significance and intentional nature.',
          [
            'Automatically disregard it.',
            'Treat it as clearly trivial without evaluation.',
            'Conclude all covenants are irrelevant to financial reporting.',
          ],
          'Nature and circumstances can make a quantitatively small item material to users.',
          'evaluation',
        ),
        q(
          'Why is performance materiality ordinarily lower than overall materiality?',
          'To address the risk of aggregate undetected and uncorrected misstatements.',
          [
            'To guarantee all errors are found.',
            'To eliminate sampling risk.',
            'To set the maximum client fee.',
          ],
          'A margin below overall materiality reduces aggregation risk; it does not guarantee detection.',
          'remembering',
        ),
        q(
          'Three uncorrected misstatements affect income in the same direction by $40,000, $35,000, and $30,000. Overall materiality is $100,000. What is their aggregate effect?',
          '$105,000, requiring aggregate evaluation.',
          [
            'Only $40,000 because it is the largest.',
            '$5,000 because only the excess is a misstatement.',
            'Zero because every individual item is below materiality.',
          ],
          'All three items are accumulated: 40,000 + 35,000 + 30,000 = 105,000.',
          'application',
        ),
        q(
          'Management corrects a fraudulent top-side entry identified by the auditor. What remains necessary?',
          'Evaluate implications for other misstatements, control reliability, and management integrity.',
          [
            'Ignore it because the balance is now correct.',
            'Automatically issue an unmodified opinion without other work.',
            'Delete the evidence of the original entry.',
          ],
          'Correction resolves the identified amount but not the broader implications of intentional misstatement.',
          'analysis',
        ),
        q(
          'Which audit risk requires attention even when normal transaction controls seem strong?',
          'Management override.',
          [
            'Only the risk of an invoice being printed late.',
            'Only the risk of an audit fee being unpaid.',
            'No risk remains after controls are documented.',
          ],
          'Management can bypass controls that otherwise operate effectively, requiring targeted responses.',
          'remembering',
        ),
      ],
      simulation: {
        title: 'Materiality and proposed adjustments',
        scenario:
          'Prepare a materiality worksheet and evaluate an uncorrected-adjustment schedule.',
        exhibits: [
          {
            title: 'Planning policy for this case',
            body: 'Pretax income: $4,000,000. Overall materiality: 5% of pretax income. Performance materiality: 65% of overall materiality. The policy is supplied for this exercise.',
          },
          {
            title: 'Uncorrected expense understatements',
            body: 'Accrual A: $90,000. Accrual B: $70,000. Accrual C: $55,000. An additional deliberate $8,000 adjustment changes a covenant outcome.',
          },
        ],
        tasks: [
          {
            label: 'Overall materiality',
            correct: 200000,
            distractors: [130000, 80000, 260000],
            explanation: '$4,000,000 × 5% = $200,000.',
          },
          {
            label: 'Performance materiality',
            correct: 130000,
            distractors: [200000, 70000, 2600000],
            explanation: '$200,000 × 65% = $130,000.',
          },
          {
            label: 'Aggregate understatement from A, B, and C',
            correct: 215000,
            distractors: [90000, 125000, 15000],
            explanation: '$90,000 + $70,000 + $55,000 = $215,000.',
          },
          {
            label: 'Treatment of the covenant adjustment',
            correct: 'Evaluate qualitative significance despite its size',
            options: [
              'Evaluate qualitative significance despite its size',
              'Ignore it solely because it is small',
              'Automatically exclude deliberate entries',
              'Treat it as an audit fee',
            ],
            explanation: 'Intent and covenant effects can be qualitatively material.',
          },
        ],
      },
    },
    {
      topic: 'special-audit-risks',
      title: 'Specialists, Related Parties & Specialized Engagement Risks',
      group: 'F-G',
      objectives: [
        'Evaluate specialists and internal auditors without transferring responsibility.',
        'Respond to related parties, estimates, and noncompliance risks.',
        'Identify additional considerations in single audits and employee-benefit-plan audits.',
      ],
      teaching: [
        'Using a specialist does not transfer the auditor’s responsibility for the opinion. Evaluate the specialist’s competence, capabilities, and objectivity, obtain an understanding of the work, and assess its relevance and reasonableness. The degree of auditor involvement depends on the significance and risk of the matter. The source of the specialist—management or auditor—affects the procedures but does not justify blind reliance.',
        'When considering internal audit work, evaluate objectivity, competence, and a systematic, disciplined approach. Greater judgment and risk reduce the extent to which the external auditor can rely on others. Group-audit work likewise requires the applicable planning, direction, communication, and evaluation; an organizational boundary does not remove responsibility for obtaining sufficient appropriate group evidence.',
        'Related-party transactions can be legitimate but carry risks involving completeness, unusual terms, business purpose, and disclosure. Read minutes and relevant contracts, inquire beyond management when necessary, and inspect significant unusual transactions. A transaction labeled arm’s length requires support; its label is not evidence.',
        'Laws with a direct effect on material financial-statement amounts require evidence about compliance relevant to those amounts. Other laws may be fundamental to operations and create serious consequences without directly determining an amount. Recognize signs of noncompliance, understand the circumstances, and evaluate reporting and communication obligations. Do not promise a legal determination outside the auditor’s competence.',
        'Single audits add federal-award and major-program compliance considerations under applicable Uniform Guidance. Employee-benefit-plan audits require attention to plan documents, participant data, contributions, benefit payments, and applicable ERISA/DOL requirements. Identify the governing engagement requirements before applying a generic commercial-audit program. The fact pattern must state applicable thresholds or the current reference period when a threshold affects the answer.',
      ],
      workedExample: {
        title: 'The valuation report and the undisclosed lender',
        facts:
          'Management’s valuation specialist owns an interest in the client. Board minutes also mention a material loan from an entity controlled by the CEO, but related-party disclosures omit it.',
        steps: [
          'Evaluate the specialist’s objectivity and the evidence underlying the valuation.',
          'Investigate the lender relationship, loan terms, business purpose, and required disclosure.',
          'Plan additional work and governance communications rather than accepting the valuation report and management’s arm’s-length label.',
        ],
      },
      pitfalls: [
        'A credential alone does not establish specialist objectivity.',
        'A related-party transaction is not automatically fraudulent.',
        'Specialized audits may impose additional requirements beyond ordinary financial-statement GAAS.',
      ],
      questions: [
        q(
          'Management provides a valuation prepared by an expert who has a material financial interest in the client. What should the auditor evaluate?',
          'The expert’s objectivity and the relevance and reliability of the work.',
          [
            'Only whether the expert’s report has a professional logo.',
            'Only the number of pages in the report.',
            'Nothing because expertise transfers audit responsibility.',
          ],
          'A financial interest can affect objectivity. The auditor retains responsibility and must evaluate the evidence.',
          'analysis',
        ),
        q(
          'A related-party transaction is labeled arm’s length in a management memo. What is required?',
          'Evidence supporting the transaction’s terms, purpose, and appropriate reporting.',
          [
            'Automatic acceptance of the label.',
            'Automatic classification as illegal.',
            'Exclusion from the audit because it is internal.',
          ],
          'Labels do not establish substance. Related-party transactions require appropriate evidence and disclosure evaluation.',
          'evaluation',
        ),
        q(
          'Which consideration is relevant before using work of the internal audit function?',
          'Objectivity, competence, and a systematic and disciplined approach.',
          [
            'Whether internal audit can sign the external opinion instead.',
            'Whether the client pays internal audit more than external audit.',
            'Whether every internal auditor is a shareholder.',
          ],
          'Evaluate the function and the proposed work; the external auditor’s responsibility remains.',
          'remembering',
        ),
        q(
          'What additional focus is central to a single audit of an entity receiving federal awards?',
          'Applicable federal-program compliance and major-program requirements.',
          [
            'Only the entity’s stock price.',
            'Only its income-tax return.',
            'A guarantee that all grants will be renewed.',
          ],
          'Single audits include requirements related to federal awards and compliance under the applicable Uniform Guidance.',
          'application',
        ),
        q(
          'An audit of an ERISA employee benefit plan should include attention to which evidence?',
          'Plan provisions and participant data relevant to contributions and benefits.',
          [
            'Only the sponsor’s marketing brochure.',
            'Only the sponsor’s projected sales.',
            'Only the auditor’s retirement preference.',
          ],
          'Plan documents and participant information drive important obligations and transactions.',
          'application',
        ),
        q(
          'A law directly determines a material liability in the financial statements. Which response is appropriate?',
          'Obtain evidence about compliance relevant to the material amount.',
          [
            'Ignore the law because the auditor is not a lawyer.',
            'Assume every law has exactly the same financial-statement effect.',
            'Replace the liability test with an independence letter.',
          ],
          'The auditor’s responsibilities differ by the law’s effect; direct effects on material amounts require appropriate evidence.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'Specialized audit planning file',
        scenario: 'Identify an appropriate planning response to each engagement fact.',
        exhibits: [
          {
            title: 'Engagement observations',
            body: 'A valuation is prepared by a financially interested management specialist. A CEO-controlled company supplies a material loan. A public charity expends federal awards subject to a single audit. A pension plan’s participant eligibility records are incomplete.',
          },
          {
            title: 'Planning limits',
            body: 'The exercise asks for audit responses, not a legal conclusion or an official program threshold. Assume the described specialized engagement requirements apply.',
          },
        ],
        tasks: [
          {
            label: 'Response to the specialist interest',
            correct: 'Evaluate objectivity and corroborate the valuation evidence',
            options: [
              'Evaluate objectivity and corroborate the valuation evidence',
              'Accept credentials as sufficient',
              'Transfer the audit opinion to the specialist',
              'Ignore material estimates',
            ],
            explanation: 'Objectivity and evidential quality need assessment.',
          },
          {
            label: 'Response to the CEO-controlled lender',
            correct: 'Investigate related-party terms and disclosure',
            options: [
              'Investigate related-party terms and disclosure',
              'Assume arm’s length',
              'Ignore the loan',
              'Automatically conclude the loan is illegal',
            ],
            explanation: 'Establish substance and appropriate disclosure.',
          },
          {
            label: 'Additional focus for the charity',
            correct: 'Federal-award compliance and major-program work',
            options: [
              'Federal-award compliance and major-program work',
              'Only common-stock valuation',
              'Only product warranties',
              'No additional requirements',
            ],
            explanation: 'Single audits add compliance and program requirements.',
          },
          {
            label: 'Response to missing plan eligibility data',
            correct: 'Obtain reliable support for affected participant and benefit information',
            options: [
              'Obtain reliable support for affected participant and benefit information',
              'Replace records with sponsor advertising',
              'Ignore plan provisions',
              'Assume all participants are eligible',
            ],
            explanation: 'Participant data is important evidence in the plan audit.',
          },
        ],
      },
    },
  ],
};
