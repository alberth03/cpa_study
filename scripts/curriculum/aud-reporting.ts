import { q, type CurriculumModule } from './types.ts';
export const audReporting: CurriculumModule = {
  title: 'Conclusions, Reporting & Other Engagements',
  area: 4,
  lessons: [
    {
      topic: 'audit-opinions',
      title: 'Unmodified, Qualified, Adverse & Disclaimer Opinions',
      group: 'A',
      objectives: [
        'Distinguish known misstatement from insufficient evidence.',
        'Evaluate materiality and pervasiveness in opinion decisions.',
        'Explain why an emphasis paragraph cannot cure a modified-opinion issue.',
      ],
      teaching: [
        'A reporting decision begins with two questions: has sufficient appropriate evidence been obtained, and are the financial statements materially misstated? A known departure from the reporting framework differs from uncertainty caused by unavailable evidence. The distinction determines which forms of opinion are appropriate.',
        'A material but not pervasive misstatement ordinarily leads to a qualified opinion. A material and pervasive misstatement ordinarily leads to an adverse opinion. If sufficient evidence cannot be obtained, a qualified opinion addresses possible effects that are material but not pervasive; a disclaimer addresses possible effects that are both material and pervasive. Consider the applicable standard and whether withdrawal is permitted or required.',
        'Pervasive effects are not confined to specific elements, could represent a substantial proportion of the statements, or are fundamental to users’ understanding of disclosures. Pervasiveness is not a mechanical percentage test. Explain the affected balances, relationships, and disclosure implications.',
        'An emphasis-of-matter paragraph draws attention to an appropriately presented or disclosed matter of fundamental importance; it does not replace a required modified opinion. Likewise, a critical audit matter or key audit matter is not a separate opinion and does not cure a known accounting departure.',
      ],
      workedExample: {
        title: 'The same balance, different reporting causes',
        facts:
          'In Case A, sufficient evidence shows a material but not pervasive inventory valuation departure. In Case B, no evidence can be obtained for a pervasive portion of assets and related earnings.',
        steps: [
          'Case A is a known misstatement: a qualified opinion is ordinarily appropriate.',
          'Case B is an evidence limitation with potentially material and pervasive effects: consider a disclaimer.',
          'Do not use an emphasis paragraph as a substitute for either reporting consequence.',
        ],
      },
      pitfalls: [
        'Adverse and disclaimer opinions address different problems.',
        'Materiality and pervasiveness are distinct judgments.',
        'An extra explanatory paragraph cannot fix misstated financial statements.',
      ],
      questions: [
        q(
          'Sufficient evidence establishes a material, pervasive departure from the reporting framework. Which opinion is ordinarily appropriate?',
          'Adverse.',
          [
            'Disclaimer solely because the error is known.',
            'Unmodified with no discussion.',
            'A compilation report.',
          ],
          'An adverse opinion addresses a known material and pervasive misstatement.',
          'application',
        ),
        q(
          'The auditor cannot obtain evidence, and possible effects are material but not pervasive. Which opinion is ordinarily appropriate?',
          'Qualified.',
          [
            'Adverse automatically.',
            'Unmodified automatically.',
            'No report because every scope limitation prohibits reporting.',
          ],
          'A material but nonpervasive evidence limitation ordinarily results in a qualified opinion.',
          'application',
        ),
        q(
          'Insufficient evidence could have material and pervasive effects. Which opinion is ordinarily considered?',
          'Disclaimer.',
          [
            'Adverse solely because evidence is absent.',
            'Unmodified with an audit-fee note.',
            'A guaranteed clean opinion.',
          ],
          'A disclaimer addresses inability to obtain evidence with potentially pervasive material effects.',
          'application',
        ),
        q(
          'Can an emphasis-of-matter paragraph replace a required adverse opinion?',
          'No.',
          [
            'Yes, if the client agrees.',
            'Yes, if the paragraph is long enough.',
            'Only if the issue affects inventory.',
          ],
          'Emphasis draws attention to appropriately presented matters; it does not cure a material departure.',
          'remembering',
        ),
        q(
          'Which description best reflects pervasiveness?',
          'Effects are fundamental or extend beyond a confined, limited aspect of the statements.',
          [
            'Any error larger than $1,000.',
            'Any error found by sampling.',
            'Any disagreement with a staff accountant.',
          ],
          'Pervasiveness is a judgment about the reach and significance of effects, not a fixed dollar threshold.',
          'analysis',
        ),
        q(
          'A client refuses to correct a material but nonpervasive depreciation error supported by sufficient evidence. Which opinion is ordinarily appropriate?',
          'Qualified for a reporting-framework departure.',
          [
            'Disclaimer for lack of evidence.',
            'Adverse in every case.',
            'Unmodified because the error is confined.',
          ],
          'The issue is a known misstatement, not an evidence limitation; material but nonpervasive effects ordinarily support qualification.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'Opinion decision matrix',
        scenario: 'Determine the ordinarily appropriate opinion for each independent scenario.',
        exhibits: [
          {
            title: 'Four findings',
            body: 'A: Evidence supports fair presentation with no material misstatement. B: A known departure is material but not pervasive. C: A known departure is material and pervasive. D: Evidence is unavailable and possible effects are material and pervasive.',
          },
          {
            title: 'Assumptions',
            body: 'The auditor is independent. No law requires a different outcome. Consider ordinary financial-statement opinion consequences under the applicable auditing standard.',
          },
        ],
        tasks: [
          {
            label: 'Opinion for A',
            correct: 'Unmodified',
            options: ['Unmodified', 'Qualified', 'Adverse', 'Disclaimer'],
            explanation: 'Sufficient evidence supports fair presentation.',
          },
          {
            label: 'Opinion for B',
            correct: 'Qualified',
            options: ['Unmodified', 'Qualified', 'Adverse', 'Disclaimer'],
            explanation: 'The known departure is material but not pervasive.',
          },
          {
            label: 'Opinion for C',
            correct: 'Adverse',
            options: ['Unmodified', 'Qualified', 'Adverse', 'Disclaimer'],
            explanation: 'The known departure is material and pervasive.',
          },
          {
            label: 'Opinion for D',
            correct: 'Disclaimer',
            options: ['Unmodified', 'Qualified', 'Adverse', 'Disclaimer'],
            explanation: 'The evidence limitation has potentially material and pervasive effects.',
          },
        ],
      },
    },
    {
      topic: 'audit-completion',
      title: 'Subsequent Events, Going Concern & Written Representations',
      group: 'A-E',
      objectives: [
        'Evaluate evidence arising after the reporting date.',
        'Assess going-concern disclosures and management plans.',
        'Understand the role and timing of written representations.',
      ],
      teaching: [
        'Subsequent-event procedures seek evidence about events between the financial-statement date and the auditor’s report date. Events providing additional evidence about conditions existing at the statement date may require adjustment. Events arising from new conditions ordinarily do not adjust that date’s amounts but may require disclosure. The reporting framework and the facts determine the accounting.',
        'Evaluate management’s going-concern assessment and plans using the applicable framework and auditing standard. Consider recurring losses, negative cash flows, financing difficulties, covenant breaches, and other conditions. Assess whether mitigating plans are feasible and supported. Do not treat a management intention to refinance as an executed financing agreement. Assessment periods and reporting terminology can differ for issuers and nonissuers.',
        'If substantial doubt remains and disclosure is adequate, an unmodified opinion with the appropriate separate going-concern reporting may be possible under the applicable standard. Inadequate disclosure is a reporting-framework departure and can require a modified opinion. Going-concern reporting is not a guarantee of survival or failure.',
        'Written representations ordinarily cover all periods referred to in the report and are dated as of the auditor’s report date. They supplement other evidence rather than replace it. Refusal to provide fundamental representations can create a serious limitation. When a later event is reflected through dual dating, the auditor limits the extension of subsequent-event responsibility to the identified event rather than automatically extending responsibility for every event.',
      ],
      workedExample: {
        title: 'Evidence about an existing receivable',
        facts:
          'A customer with severe financial distress at December 31 files bankruptcy in January before the report date. Separately, a February fire destroys a previously sound facility.',
        steps: [
          'The bankruptcy may provide evidence about year-end receivable valuation.',
          'The fire is a new condition and may require disclosure rather than adjusting December asset values.',
          'Evaluate materiality, the framework, and the information available before concluding.',
        ],
      },
      pitfalls: [
        'Not every later event changes year-end amounts.',
        'Management plans require evidence of feasibility.',
        'Representations should not be used as substitutes for available external evidence.',
      ],
      questions: [
        q(
          'A post-year-end bankruptcy confirms severe customer financial distress existing at year-end. What accounting implication should the auditor evaluate?',
          'Adjustment of the year-end receivable valuation.',
          [
            'Automatic recognition only in the following year.',
            'No consideration before report issuance.',
            'An automatic adverse opinion in every case.',
          ],
          'The later event may provide evidence about a condition already existing at the reporting date.',
          'analysis',
        ),
        q(
          'A material fire after year-end destroys assets that were sound at year-end. What is ordinarily considered?',
          'Disclosure of a nonrecognized subsequent event.',
          [
            'Automatic adjustment of year-end depreciation for the entire loss.',
            'Automatic omission from all notes.',
            'A change to the prior-year tax return in every case.',
          ],
          'The fire is a new condition; material effects may require disclosure rather than year-end adjustment.',
          'application',
        ),
        q(
          'Management proposes refinancing to mitigate going-concern uncertainty, but no lender commitment exists. What should the auditor do?',
          'Evaluate supporting evidence and feasibility of the plan.',
          [
            'Assume intent equals successful execution.',
            'Ignore all adverse conditions.',
            'Guarantee the company will fail.',
          ],
          'Mitigation depends on evidence and feasibility, not management intent alone.',
          'evaluation',
        ),
        q(
          'Written management representations are ordinarily dated as of which date?',
          'The auditor’s report date.',
          [
            'Only the first day of fieldwork.',
            'Only the entity’s formation date.',
            'A date chosen solely to precede all known problems.',
          ],
          'Representations should be appropriate through the report date and cover the relevant periods.',
          'remembering',
        ),
        q(
          'What is the purpose of dual dating for a specifically identified subsequent event?',
          'To limit the extension of the auditor’s subsequent-event responsibility to that event.',
          [
            'To eliminate all subsequent-event responsibilities.',
            'To guarantee that all later events are immaterial.',
            'To change the financial-statement year-end.',
          ],
          'Dual dating limits the later responsibility to the specified event rather than extending the entire report date.',
          'application',
        ),
        q(
          'Substantial doubt about going concern remains, but disclosure is adequate. Which statement is most appropriate?',
          'The applicable standard may permit an unmodified opinion with separate going-concern reporting.',
          [
            'An adverse opinion is automatic in every case.',
            'No reporting is ever needed.',
            'The auditor must guarantee refinancing.',
          ],
          'Adequate disclosure and the applicable standard govern the reporting; uncertainty alone does not automatically mean a departure.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'Completion-event review',
        scenario: 'Evaluate four findings before issuing a nonissuer audit report.',
        exhibits: [
          {
            title: 'Events and representations',
            body: 'A: A January bankruptcy corroborates a debtor’s year-end distress. B: A February storm causes a new material loss. C: Management’s only refinancing plan has no lender support. D: Management offers a representation instead of available bank evidence.',
          },
          {
            title: 'Scope',
            body: 'Assume the reporting framework requires recognition for evidence of existing conditions and disclosure of material new conditions. Evaluate the evidence and accounting implications before selecting an opinion.',
          },
        ],
        tasks: [
          {
            label: 'Evaluate event A as evidence of',
            correct: 'A condition existing at year-end',
            options: [
              'A condition existing at year-end',
              'Only a new February condition',
              'No relevant audit fact',
              'An automatic tax election',
            ],
            explanation: 'The bankruptcy corroborates prior distress.',
          },
          {
            label: 'Ordinary treatment considered for event B',
            correct: 'Disclosure of a material new condition',
            options: [
              'Disclosure of a material new condition',
              'Automatic year-end adjustment in every case',
              'No disclosure under any circumstances',
              'A prior-year payroll expense',
            ],
            explanation: 'A new condition can be a material nonrecognized subsequent event.',
          },
          {
            label: 'Required work for C',
            correct: 'Evaluate feasibility and corroborating evidence',
            options: [
              'Evaluate feasibility and corroborating evidence',
              'Accept intent as sufficient',
              'Guarantee success',
              'Ignore financing uncertainty',
            ],
            explanation: 'Plans must be supported and feasible.',
          },
          {
            label: 'Response to D',
            correct: 'Obtain the necessary bank evidence',
            options: [
              'Obtain the necessary bank evidence',
              'Replace all evidence with representations',
              'Assume written words eliminate audit risk',
              'Exclude cash from the opinion',
            ],
            explanation: 'Representations supplement rather than replace necessary evidence.',
          },
        ],
      },
    },
    {
      topic: 'audit-report-elements',
      title: 'Report Elements, CAMs, KAMs & Comparative Information',
      group: 'A-B',
      objectives: [
        'Recognize the function of opinion, basis, responsibility, and other report sections.',
        'Distinguish critical/key audit matters from modifications.',
        'Evaluate comparative reporting and special-purpose frameworks.',
      ],
      teaching: [
        'A report identifies the statements and periods audited, the opinion, its basis, and the respective responsibilities of management and the auditor. Wording and required sections depend on the engagement standard. An issuer report under PCAOB standards is not interchangeable with a nonissuer report under AICPA GAAS. Establish the framework and engagement type before selecting report language.',
        'Critical audit matters in applicable issuer audits relate to matters communicated or required to be communicated to the audit committee, material accounts or disclosures, and especially challenging, subjective, or complex auditor judgment. A CAM is not a separate opinion on the matter and does not replace a modified opinion. Key audit matters under applicable nonissuer reporting requirements are likewise distinct from opinion modifications; they are not automatically required for every private-company audit.',
        'An emphasis-of-matter paragraph highlights an appropriately presented matter fundamental to understanding the statements. An other-matter paragraph concerns a matter outside the statements relevant to understanding the audit, responsibilities, or report. Neither substitutes for a required qualification, adverse opinion, or disclaimer.',
        'Comparative reporting requires identifying the periods and responsibility for each. When a predecessor audited a prior period, applicable standards govern reference to that report and reissuance. Special-purpose statements use a specified framework, such as a tax basis, rather than silently claiming U.S. GAAP. Evaluate adequate description, appropriate reporting language, and any use restrictions required by the circumstances.',
      ],
      workedExample: {
        title: 'A challenging estimate and a known departure',
        facts:
          'An issuer’s complex impairment estimate required substantial auditor judgment. Separately, management refuses to correct a material accounting departure.',
        steps: [
          'Evaluate the estimate against the CAM criteria.',
          'Evaluate the known departure separately for its opinion consequence.',
          'Do not treat CAM disclosure as a substitute for a required modified opinion.',
        ],
      },
      pitfalls: [
        'A CAM is not a separate opinion on an account.',
        'Special-purpose financial statements should identify their framework.',
        'Report wording depends on issuer/nonissuer and engagement requirements.',
      ],
      questions: [
        q(
          'Which matter can qualify as a CAM in an applicable issuer audit?',
          'A material estimate discussed with the audit committee that involved especially challenging auditor judgment.',
          [
            'Every routine cash confirmation automatically.',
            'Any immaterial clerical matter.',
            'Only a matter that causes an adverse opinion.',
          ],
          'CAM criteria concern audit-committee communication, material accounts/disclosures, and especially challenging, subjective, or complex judgment.',
          'analysis',
        ),
        q(
          'Does communicating a CAM provide a separate opinion on that matter?',
          'No.',
          [
            'Yes, it replaces the overall opinion.',
            'Yes, it certifies the estimate’s exact future outcome.',
            'Only when management asks for it.',
          ],
          'A CAM communication does not create a separate opinion or guarantee.',
          'remembering',
        ),
        q(
          'An auditor reports on tax-basis statements. What must the report appropriately identify?',
          'The applicable special-purpose framework.',
          [
            'U.S. GAAP regardless of the basis used.',
            'Only the client’s tax rate.',
            'Only the firm’s billing method.',
          ],
          'Readers need to understand the basis of preparation and the applicable reporting context.',
          'application',
        ),
        q(
          'An appropriately disclosed matter is fundamental to understanding the financial statements. Which paragraph may be appropriate under applicable GAAS?',
          'Emphasis of matter.',
          [
            'An automatic adverse opinion.',
            'A disclaimer solely because disclosure is important.',
            'A paragraph stating disclosure cures every error.',
          ],
          'An emphasis paragraph highlights a matter properly presented or disclosed without replacing opinion analysis.',
          'application',
        ),
        q(
          'Which statement about KAMs in nonissuer audits is accurate?',
          'Their use depends on the applicable reporting requirements or engagement terms.',
          [
            'They are automatically required in every private-company audit.',
            'They eliminate the opinion section.',
            'They must always equal the number of accounts.',
          ],
          'Do not import a universal KAM requirement into every nonissuer engagement.',
          'remembering',
        ),
        q(
          'Prior-period statements were audited by a predecessor. What should the successor evaluate?',
          'Applicable comparative-reporting and predecessor-reference requirements.',
          [
            'Automatically claim responsibility for the predecessor’s work.',
            'Ignore the prior period in all circumstances.',
            'Use an issuer template regardless of standards.',
          ],
          'Responsibility for comparative periods and references follows the governing reporting standard.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'Report drafting review',
        scenario: 'Identify the correct reporting concept for each drafting note.',
        exhibits: [
          {
            title: 'Drafting notes',
            body: 'A: A material issuer estimate required especially challenging judgment and was communicated to the audit committee. B: The report highlights an appropriately disclosed matter fundamental to understanding the statements. C: Financial statements are prepared on a tax basis. D: The draft suggests a CAM can replace a qualification for a known departure.',
          },
          {
            title: 'Instructions',
            body: 'Assume the relevant engagement standard permits or requires the report sections described. Focus on their function rather than copying a report template.',
          },
        ],
        tasks: [
          {
            label: 'Reporting concept for A',
            correct: 'Potential critical audit matter',
            options: [
              'Potential critical audit matter',
              'A separate guaranteed valuation opinion',
              'A tax return certification',
              'Automatic disclaimer',
            ],
            explanation: 'The facts fit the CAM evaluation criteria.',
          },
          {
            label: 'Reporting concept for B',
            correct: 'Emphasis of matter',
            options: [
              'Emphasis of matter',
              'Automatic adverse opinion',
              'An omitted basis section',
              'A management representation',
            ],
            explanation:
              'The paragraph draws attention to an appropriately disclosed fundamental matter.',
          },
          {
            label: 'Framework for C',
            correct: 'Special-purpose tax basis',
            options: [
              'Special-purpose tax basis',
              'U.S. GAAP automatically',
              'A sampling framework',
              'No financial-reporting framework',
            ],
            explanation: 'Tax-basis statements use a special-purpose framework.',
          },
          {
            label: 'Correction required for D',
            correct: 'Evaluate the opinion modification separately',
            options: [
              'Evaluate the opinion modification separately',
              'Use the CAM to cure the departure',
              'Delete the opinion section',
              'Let management choose the audit opinion',
            ],
            explanation: 'CAM communication does not replace required opinion modification.',
          },
        ],
      },
    },
    {
      topic: 'reporting-engagements',
      title: 'Reviews, Compilations, Attestation & Compliance Reporting',
      group: 'C-D-E-F-G',
      objectives: [
        'Compare assurance and reporting across service types.',
        'Respond to evidence of misstatement during a review.',
        'Understand appropriate scope and use of attestation and compliance reports.',
      ],
      teaching: [
        'A financial-statement review provides limited assurance, primarily through inquiry and analytical procedures, with additional procedures when information suggests material misstatement. A compilation provides no assurance and does not require the practitioner to verify all management information; nevertheless, the practitioner must respond appropriately to information that is materially misstated or otherwise misleading. Preparation under SSARS provides no assurance and ordinarily no accountant’s report.',
        'Independence is required for audits and reviews. In a compilation, a lack of independence can be disclosed as required rather than treating the service as an independent audit. Always determine the applicable standard and engagement facts; independence rules for one service do not automatically govern another.',
        'An attestation examination provides reasonable assurance about subject matter or an assertion evaluated against suitable criteria. An attestation review provides limited assurance. Agreed-upon procedures report the procedures and findings, leaving users to draw conclusions. Suitable criteria must be available and appropriate for the intended evaluation. A report cannot imply broader assurance than the work supports.',
        'Compliance and governmental reports can address additional objectives, requirements, and intended users. Read scope and reporting requirements rather than assuming a financial-statement opinion covers every law or program. Communicate significant findings as required, observe any applicable restrictions on use, and avoid converting a procedures-and-findings report into an unsupported opinion.',
      ],
      workedExample: {
        title: 'An unexpected review finding',
        facts:
          'During a review, analytics reveal a large unexplained gross-margin change and inquiry suggests year-end sales may be misstated.',
        steps: [
          'A review does not require ignoring information that suggests material misstatement.',
          'Perform appropriate additional procedures to determine whether a material modification is needed.',
          'Evaluate the resulting reporting consequence under the review standard rather than issuing an audit opinion.',
        ],
      },
      pitfalls: [
        'Limited assurance does not mean no follow-up of suspicious information.',
        'A compilation is not an audit with a smaller sample.',
        'Agreed-upon procedures do not express an opinion or conclusion of assurance.',
      ],
      questions: [
        q(
          'During a review, the accountant becomes aware of information suggesting a material misstatement. What is appropriate?',
          'Perform additional procedures needed to determine whether a material modification is necessary.',
          [
            'Ignore it because reviews use only inquiry.',
            'Automatically issue an audit opinion.',
            'Guarantee no fraud exists.',
          ],
          'A review requires appropriate follow-up when information suggests material misstatement.',
          'analysis',
        ),
        q(
          'Which service provides no assurance and is not an audit with reduced sample sizes?',
          'Compilation.',
          ['Audit.', 'Attestation examination.', 'Financial-statement review.'],
          'A compilation assists with presentation without providing assurance; its objective differs fundamentally from an audit.',
          'remembering',
        ),
        q(
          'Which engagement requires suitable criteria for evaluating subject matter and may provide reasonable assurance?',
          'Attestation examination.',
          [
            'A payroll processing contract alone.',
            'Preparation of statements alone.',
            'Every agreed-upon procedures report as an opinion.',
          ],
          'An examination evaluates subject matter or an assertion against suitable criteria and provides reasonable assurance.',
          'application',
        ),
        q(
          'What is reported in an agreed-upon procedures engagement?',
          'The procedures performed and the findings.',
          [
            'A guarantee of overall compliance.',
            'An audit opinion on every financial statement.',
            'A prediction of the company’s future profits.',
          ],
          'Users evaluate the reported findings; the practitioner does not express the broader assurance suggested by the distractors.',
          'remembering',
        ),
        q(
          'A practitioner lacks independence in a compilation engagement. What should be evaluated?',
          'The applicable disclosure and reporting requirements for the lack of independence.',
          [
            'A rule that every compilation must become an audit.',
            'A guarantee that the statements are correct.',
            'A prohibition on all accounting services regardless of standard.',
          ],
          'Compilation standards can permit the engagement with the required disclosure of lack of independence.',
          'application',
        ),
        q(
          'A financial-statement audit opinion is unmodified. Does that alone establish compliance with every federal award requirement?',
          'No; compliance objectives and required procedures must be evaluated separately.',
          [
            'Yes, every unmodified opinion guarantees legal compliance.',
            'Yes, unless audit fees exceed a threshold.',
            'Only if the statements include a cash account.',
          ],
          'Financial-statement and program-compliance objectives are not interchangeable.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'Choose the appropriate assurance description',
        scenario: 'Review four proposed report descriptions before they are sent to clients.',
        exhibits: [
          {
            title: 'Engagement descriptions',
            body: 'A: A historical financial-statement review. B: A compilation with the required independence disclosure. C: An examination of subject matter against suitable criteria. D: Agreed-upon procedures on specified grant expenditures.',
          },
          {
            title: 'Reporting objective',
            body: 'Select the assurance or reporting description supported by each service. Do not expand the scope beyond the engagement performed.',
          },
        ],
        tasks: [
          {
            label: 'Description for A',
            correct: 'Limited assurance',
            options: [
              'Limited assurance',
              'Absolute assurance',
              'No possible follow-up procedures',
              'A guarantee of future solvency',
            ],
            explanation: 'A review provides limited assurance.',
          },
          {
            label: 'Description for B',
            correct: 'No assurance',
            options: [
              'No assurance',
              'Reasonable assurance',
              'Absolute assurance',
              'An audit opinion',
            ],
            explanation: 'A compilation provides no assurance.',
          },
          {
            label: 'Description for C',
            correct: 'Reasonable assurance',
            options: [
              'Reasonable assurance',
              'A guarantee of every outcome',
              'No assurance in every examination',
              'Only a list of findings with no conclusion',
            ],
            explanation: 'An examination provides reasonable assurance against suitable criteria.',
          },
          {
            label: 'Description for D',
            correct: 'Procedures performed and findings',
            options: [
              'Procedures performed and findings',
              'An opinion on all federal compliance',
              'A guarantee of grant renewal',
              'A full financial-statement audit opinion',
            ],
            explanation:
              'Agreed-upon procedures report procedures and findings, not broader assurance.',
          },
        ],
      },
    },
  ],
};
