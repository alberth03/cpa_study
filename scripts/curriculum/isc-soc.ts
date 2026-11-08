import { q, type CurriculumModule } from './types.ts';
export const iscSoc: CurriculumModule = {
  title: 'System & Organization Controls Engagements',
  area: 3,
  lessons: [
    {
      topic: 'soc-report-types',
      title: 'SOC 1, SOC 2, SOC 3 & Type 1/Type 2 Reports',
      group: 'A',
      objectives: [
        'Match report types to intended subject matter and use.',
        'Distinguish an at-a-date report from a period-of-time report.',
        'Identify what a report does and does not establish.',
      ],
      teaching: [
        'SOC 1 concerns controls at a service organization relevant to user entities’ internal control over financial reporting. SOC 2 concerns controls relevant to the applicable Trust Services Criteria categories. SOC 3 provides a general-use report with less detailed information than a SOC 2 report. A report label alone does not establish that its scope answers a user’s specific assurance question.',
        'Type 1 and Type 2 are not grades of vendor quality. A Type 1 report addresses the system description and design of controls at a specified date under the applicable engagement. A Type 2 report adds operating-effectiveness coverage over a specified period and includes related tests and results. An old or out-of-scope Type 2 report may still be insufficient for a current purpose.',
        'Read the report’s period, system boundary, applicable criteria or control objectives, opinion, exceptions, subservice organization approach, and complementary user controls. A security-focused SOC 2 report is not automatically evidence for every financial-reporting assertion. Do not treat a report as a universal certification that the provider has no risk.',
      ],
      workedExample: {
        title: 'Choosing report evidence for payroll',
        facts:
          'A user auditor needs evidence about controls affecting payroll financial reporting throughout the year. The provider supplies a security-focused SOC 2 Type 1 report dated midyear.',
        steps: [
          'Identify whether the report addresses the needed financial-reporting objectives.',
          'Recognize that Type 1 does not establish operating effectiveness for the full year.',
          'Obtain appropriate additional evidence or a suitable report and evaluate its details.',
        ],
      },
      pitfalls: [
        'Type 2 does not automatically mean every relevant system is covered.',
        'SOC 1 and SOC 2 address different subject matter.',
        'Report dates and intended use matter.',
      ],
      questions: [
        q(
          'Which SOC report is directed toward controls relevant to user entities’ financial reporting?',
          'SOC 1.',
          [
            'SOC 3 exclusively.',
            'Every SOC 2 report regardless of scope.',
            'A vendor marketing page.',
          ],
          'SOC 1 addresses controls relevant to financial-reporting internal control.',
          'remembering',
        ),
        q(
          'Which report type adds operating-effectiveness coverage over a period?',
          'Type 2.',
          ['Type 1 alone.', 'A sales proposal.', 'An unsigned policy.'],
          'Type 2 adds testing and operating-effectiveness conclusions for the period.',
          'remembering',
        ),
        q(
          'Which SOC report is designed for general use with less detailed information than SOC 2?',
          'SOC 3.',
          ['Every SOC 1 report.', 'Every internal audit memo.', 'A tax return.'],
          'SOC 3 provides general-use Trust Services reporting.',
          'remembering',
        ),
        q(
          'A Type 1 report generally focuses on what time perspective?',
          'A specified date.',
          [
            'Every future period.',
            'All years since the provider formed.',
            'Only the date the user receives the PDF.',
          ],
          'Type 1 is an at-a-date report.',
          'remembering',
        ),
        q(
          'A user receives a current SOC 2 report covering a different application from the one it uses. What should it conclude?',
          'The report may not address the user’s relevant system risks.',
          [
            'The vendor’s name alone makes the scope sufficient.',
            'Every vendor application is automatically covered.',
            'No further evidence can be sought.',
          ],
          'System scope must match the user’s needs.',
          'analysis',
        ),
        q(
          'What should be reviewed before relying on a SOC report?',
          'Scope, period, opinion, exceptions, subservice treatment, and user controls.',
          ['Only the cover logo.', 'Only the file size.', 'Only the provider’s sales claim.'],
          'Report evaluation requires understanding the actual coverage and conditions.',
          'application',
        ),
      ],
      simulation: {
        title: 'SOC report selection',
        scenario: 'Match assurance needs to reports and identify a coverage limitation.',
        exhibits: [
          {
            title: 'Needs',
            body: 'A: Controls relevant to outsourced payroll financial reporting. B: Security and availability controls over a hosted application. C: General-use Trust Services communication.',
          },
          {
            title: 'Available report',
            body: 'A supplied Type 1 report is dated June 30. The user needs evidence of operating effectiveness from January through December.',
          },
        ],
        tasks: [
          {
            label: 'Report family for A',
            correct: 'SOC 1',
            options: ['SOC 1', 'Only SOC 3', 'A tax return', 'A marketing brochure'],
            explanation: 'The need concerns financial-reporting controls.',
          },
          {
            label: 'Report family for B',
            correct: 'SOC 2',
            options: [
              'SOC 2',
              'Only a financial statement compilation',
              'An income-tax opinion',
              'No assurance report can address controls',
            ],
            explanation: 'SOC 2 addresses applicable Trust Services Criteria.',
          },
          {
            label: 'Report family for C',
            correct: 'SOC 3',
            options: [
              'SOC 3',
              'Only a restricted detailed workpaper',
              'A payroll register',
              'A stock certificate',
            ],
            explanation: 'SOC 3 is intended for general use.',
          },
          {
            label: 'Limitation of the supplied Type 1 report',
            correct: 'It does not establish full-year operating effectiveness',
            options: [
              'It does not establish full-year operating effectiveness',
              'It automatically covers every day of the year',
              'It guarantees no exceptions',
              'Its receipt date extends its scope',
            ],
            explanation:
              'At-a-date design coverage differs from period operating-effectiveness evidence.',
          },
        ],
      },
    },
    {
      topic: 'soc-system-criteria',
      title: 'System Descriptions, Boundaries & Trust Services Criteria',
      group: 'A-B',
      objectives: [
        'Identify system-description components and boundaries.',
        'Distinguish Trust Services categories and commitments.',
        'Evaluate whether criteria and descriptions support the engagement.',
      ],
      teaching: [
        'A system description explains the services, components, boundaries, relevant processes, commitments, requirements, and controls under the applicable criteria. Infrastructure, software, people, procedures, and data may all be relevant. A description that omits a critical outsourced process or significant system change can mislead users about what was evaluated.',
        'The Trust Services categories include security, availability, processing integrity, confidentiality, and privacy. Security concerns protection against unauthorized access and related risks. Processing integrity concerns complete, valid, accurate, timely, and authorized processing. Availability concerns accessibility for operation and use. Confidentiality and privacy overlap but have distinct scopes.',
        'Evaluate the organization’s service commitments and system requirements and the applicable criteria. A control should link to a real commitment or objective, not merely a generic checklist. Determine whether the description is fairly presented and whether control design is suitable within that described system and period.',
      ],
      workedExample: {
        title: 'A processing-integrity objective',
        facts:
          'A service promises that all authorized invoices will be processed accurately and completely. Its system description omits a batch-rejection process that discards failed invoices.',
        steps: [
          'The omitted process is relevant to processing integrity.',
          'Evaluate whether the description includes the process and exception handling.',
          'Test controls over completeness, accuracy, authorization, and timely resolution.',
        ],
      },
      pitfalls: [
        'A security control does not automatically address every processing-integrity risk.',
        'System boundaries must include relevant dependencies.',
        'Confidentiality and privacy are not identical categories.',
      ],
      questions: [
        q(
          'Which Trust Services category addresses complete, valid, accurate, timely, and authorized processing?',
          'Processing integrity.',
          ['Only availability.', 'Only financial-statement presentation.', 'Only tax compliance.'],
          'Processing integrity concerns the quality and authorization of system processing.',
          'remembering',
        ),
        q(
          'Which category addresses accessibility for operation and use?',
          'Availability.',
          ['Only confidentiality.', 'Only stock valuation.', 'Only professional licensing.'],
          'Availability focuses on whether services and information can be used as committed.',
          'remembering',
        ),
        q(
          'Which set describes common system components?',
          'Infrastructure, software, people, procedures, and data.',
          [
            'Only computers and nothing else.',
            'Only financial statements.',
            'Only the provider’s logo.',
          ],
          'A system description extends beyond hardware alone.',
          'remembering',
        ),
        q(
          'Are confidentiality and privacy identical concepts?',
          'No; privacy focuses on personal-information handling, while confidentiality can cover broader designated information.',
          [
            'Yes, every requirement is identical.',
            'No personal data can be confidential.',
            'Neither concerns data handling.',
          ],
          'The categories overlap but address different objectives.',
          'remembering',
        ),
        q(
          'A critical exception-handling process is omitted from a system description. What is the concern?',
          'The description may not fairly present the relevant system.',
          [
            'Only the page count is affected.',
            'The omitted process is automatically outside all risk.',
            'A clean logo cures the omission.',
          ],
          'Users need an accurate description of relevant processes and boundaries.',
          'analysis',
        ),
        q(
          'How should controls be related to service commitments?',
          'Evaluate whether their design addresses the commitments and system requirements.',
          [
            'Assume any checklist item is sufficient.',
            'Ignore the actual services promised.',
            'Use only the most convenient control names.',
          ],
          'Controls need a substantive relationship to the objectives being evaluated.',
          'application',
        ),
      ],
      simulation: {
        title: 'System-description review',
        scenario: 'Classify commitments and evaluate a description omission.',
        exhibits: [
          {
            title: 'Commitments',
            body: 'A: Authorized transactions are processed completely and accurately. B: The service is available within agreed operating periods. C: Designated confidential business information is protected. D: Personal data is collected and retained consistently with privacy commitments.',
          },
          {
            title: 'Description issue',
            body: 'A critical batch-rejection process is missing from the description even though it affects completeness.',
          },
        ],
        tasks: [
          {
            label: 'Category for A',
            correct: 'Processing integrity',
            options: [
              'Processing integrity',
              'Only availability',
              'Only confidentiality',
              'Only privacy',
            ],
            explanation: 'The commitment concerns complete and accurate authorized processing.',
          },
          {
            label: 'Category for B',
            correct: 'Availability',
            options: ['Availability', 'Only privacy', 'Only tax reporting', 'Only valuation'],
            explanation: 'The commitment concerns accessible service.',
          },
          {
            label: 'Category most directly associated with D',
            correct: 'Privacy',
            options: [
              'Privacy',
              'Only inventory existence',
              'Only valuation',
              'Only debt classification',
            ],
            explanation: 'The commitment concerns personal-information lifecycle practices.',
          },
          {
            label: 'Response to the missing rejection process',
            correct: 'Evaluate and correct the description and related controls',
            options: [
              'Evaluate and correct the description and related controls',
              'Ignore all omitted processes',
              'Assume rejected transactions do not matter',
              'Delete the completeness commitment',
            ],
            explanation:
              'The process is relevant to the system’s commitments and fair presentation.',
          },
        ],
      },
    },
    {
      topic: 'soc-subservices-user-controls',
      title: 'Subservice Organizations & Complementary User Controls',
      group: 'A-B',
      objectives: [
        'Distinguish carve-out and inclusive methods.',
        'Identify complementary user-entity and subservice controls.',
        'Evaluate coverage gaps in outsourced chains.',
      ],
      teaching: [
        'A service organization may rely on a subservice organization for part of its system. The inclusive method includes relevant subservice controls within the report’s described scope and evaluation. Under the carve-out method, those controls are excluded from the service auditor’s testing and opinion scope as described, although the system description explains relevant relationships and assumptions.',
        'Complementary user-entity controls are controls the service organization assumes users implement for the objectives or criteria to be achieved. They may include access approvals, input authorization, reconciliations, or exception resolution. A favorable service-auditor report does not establish that each user implemented these controls.',
        'Evaluate the chain of responsibilities and coverage periods. Obtain relevant evidence about carved-out services and bridge-period changes where needed. A bridge letter or management statement can provide information but does not automatically constitute the same evidence as a full period of independent testing. Understand what it says and what evidence is still required.',
      ],
      workedExample: {
        title: 'A payroll user ignores required approvals',
        facts:
          'A payroll provider’s report assumes user entities approve employee master-data changes. The customer has no such approval control.',
        steps: [
          'Identify the complementary user control in the report.',
          'Evaluate the customer’s missing control and its effect on reliance.',
          'Perform appropriate additional work rather than assuming the provider’s report covers the omission.',
        ],
      },
      pitfalls: [
        'Carve-out does not mean the outsourced process has no risk.',
        'A user control is not automatically tested by the service auditor.',
        'A bridge letter does not automatically extend independent operating-effectiveness coverage.',
      ],
      questions: [
        q(
          'Under a carve-out method, what happens to specified subservice controls?',
          'They are excluded from the service auditor’s described testing and opinion scope.',
          [
            'They are automatically tested in full.',
            'They cease to exist.',
            'They become user-entity tax deductions.',
          ],
          'The report explains the excluded subservice role and scope implications.',
          'remembering',
        ),
        q(
          'What are complementary user-entity controls?',
          'Controls the service organization assumes user entities implement.',
          [
            'All controls tested at every user by the service auditor.',
            'Only provider marketing activities.',
            'Only auditor independence policies.',
          ],
          'CUECs are retained responsibilities important to the combined control system.',
          'remembering',
        ),
        q(
          'Which method includes relevant subservice controls in the report’s evaluation as described?',
          'Inclusive method.',
          ['Carve-out in every case.', 'No reporting method.', 'Only a tax election.'],
          'The inclusive method brings the described subservice controls within the report scope.',
          'remembering',
        ),
        q(
          'Does an unmodified service report prove that every user has implemented required CUECs?',
          'No.',
          [
            'Yes, automatically.',
            'Only if the report is long.',
            'Only if the provider is well known.',
          ],
          'The user’s implementation requires separate evaluation.',
          'remembering',
        ),
        q(
          'A customer omits a required payroll approval control. What is the appropriate response?',
          'Evaluate the missing control and adjust reliance or procedures.',
          [
            'Ignore it because the provider passed testing.',
            'Assume the provider approved every employee change.',
            'Remove payroll from all reporting.',
          ],
          'The combined control objective may depend on the missing user control.',
          'analysis',
        ),
        q(
          'A report ends before the user’s year-end. What should be considered?',
          'The uncovered period, relevant changes, and additional evidence needed.',
          [
            'Automatic extension to every later date.',
            'Only the report’s file format.',
            'No possibility of changes after the period.',
          ],
          'Coverage periods and subsequent changes affect the evidence available.',
          'application',
        ),
      ],
      simulation: {
        title: 'Outsourced-service coverage map',
        scenario: 'Evaluate dependencies and retained responsibilities in a hosted finance system.',
        exhibits: [
          {
            title: 'Report scope',
            body: 'The provider uses a carved-out hosting organization. Its report assumes user access approvals and monthly input reconciliations. The report period ends three months before the user’s year-end.',
          },
          {
            title: 'User implementation',
            body: 'The user performs access approvals but has no input reconciliation. Only a provider bridge letter is available for the remaining period.',
          },
        ],
        tasks: [
          {
            label: 'Hosting-control scope conclusion',
            correct: 'Relevant hosting controls require separate evidence consideration',
            options: [
              'Relevant hosting controls require separate evidence consideration',
              'All hosting controls were necessarily tested',
              'Hosting risk disappears',
              'The user has no responsibility to evaluate scope',
            ],
            explanation:
              'Carve-out excludes the specified controls from the described service-auditor testing.',
          },
          {
            label: 'Missing complementary user control',
            correct: 'Monthly input reconciliation',
            options: [
              'Monthly input reconciliation',
              'The already performed access approval',
              'The report’s title',
              'The provider’s logo',
            ],
            explanation: 'The report assumes a reconciliation the user has not implemented.',
          },
          {
            label: 'Effect of the coverage gap',
            correct: 'Evaluate changes and evidence for the uncovered period',
            options: [
              'Evaluate changes and evidence for the uncovered period',
              'Automatically extend independent assurance',
              'Assume no transactions occurred',
              'Ignore year-end',
            ],
            explanation: 'The report does not itself cover the additional three months.',
          },
          {
            label: 'Bridge-letter interpretation',
            correct:
              'Evaluate its information without treating it as identical to independent period testing',
            options: [
              'Evaluate its information without treating it as identical to independent period testing',
              'It always replaces all additional evidence',
              'It guarantees every control operated',
              'Its signature creates a new Type 2 audit period',
            ],
            explanation: 'A management bridge communication has limits that must be understood.',
          },
        ],
      },
    },
    {
      topic: 'soc-testing-evidence',
      title: 'SOC Planning, Testing & Evidence Evaluation',
      group: 'B-C',
      objectives: [
        'Design tests consistent with the criteria and control objective.',
        'Evaluate relevant populations, evidence, and exceptions.',
        'Distinguish design and operating-effectiveness conclusions.',
      ],
      teaching: [
        'SOC engagement planning identifies the system, criteria or objectives, period, materiality considerations, risks, and procedures. A test must be relevant to the control described and the conclusion sought. Inquiry can explain a process but ordinarily needs appropriate corroboration for operating-effectiveness conclusions.',
        'Select populations that reflect the control’s frequency and period. Inspect approvals, reperform reconciliations, observe processes, and examine logs as appropriate. A sample of ordinary-user changes does not test administrator changes excluded from that population. The test design should address the precision and timing that matter to the objective.',
        'Evaluate deviations in context, including nature, cause, frequency, affected period, significance, and relevant compensating controls. A single exception is not automatically irrelevant or automatically pervasive. Document how evidence supports the conclusion and how limitations affect reporting. Management assertions and a written policy alone do not establish that controls operated.',
      ],
      workedExample: {
        title: 'Quarterly reviews with a missing quarter',
        facts:
          'A control requires four quarterly access reviews. Evidence exists for only three and no alternative evidence supports the fourth.',
        steps: [
          'The missing quarter is a deviation or evidence issue requiring evaluation.',
          'Investigate cause, scope, and relevant compensating controls.',
          'Do not describe the annual control as fully supported solely because most quarters have signatures.',
        ],
      },
      pitfalls: [
        'The test population must match the control’s actual scope.',
        'Operating conclusions require appropriate evidence for the period.',
        'Exceptions require contextual evaluation.',
      ],
      questions: [
        q(
          'What should a control test be designed to support?',
          'The specific control objective and intended conclusion.',
          [
            'Only a predetermined favorable report.',
            'Only the number of files collected.',
            'Only management’s preferred wording.',
          ],
          'Relevance links the procedure to the objective.',
          'remembering',
        ),
        q(
          'Which evidence is generally more persuasive than inquiry alone for a reconciliation control?',
          'Reperformance with inspection of the underlying records.',
          [
            'Only a statement that the control exists.',
            'Only a policy title.',
            'Only an unverified oral promise.',
          ],
          'Reperformance and inspection can corroborate actual operation.',
          'remembering',
        ),
        q(
          'Why does control frequency matter in testing?',
          'It helps define the population and period of operation to evaluate.',
          [
            'It guarantees no deviation exists.',
            'It replaces the need for evidence.',
            'It is relevant only to tax returns.',
          ],
          'A daily and annual control produce different testing populations.',
          'remembering',
        ),
        q(
          'What should be done with a detected control deviation?',
          'Investigate and evaluate its nature and significance.',
          [
            'Always ignore one deviation.',
            'Always declare every system pervasive failure.',
            'Delete it before review.',
          ],
          'Evidence-based evaluation considers the actual circumstances.',
          'remembering',
        ),
        q(
          'A quarterly control has evidence for three of four quarters. What is appropriate?',
          'Investigate the missing period and evaluate the evidence gap.',
          [
            'Claim every quarter was supported.',
            'Change the control description retroactively to three reviews without analysis.',
            'Assume the missing review was perfect.',
          ],
          'Incomplete evidence requires follow-up and conclusion assessment.',
          'analysis',
        ),
        q(
          'A test of administrator provisioning samples only ordinary employee access. What is wrong?',
          'The population does not match the control objective.',
          [
            'The sample is always sufficient because it is random.',
            'Only sample size matters.',
            'Administrator activity can never be tested.',
          ],
          'A random sample from the wrong population is not relevant evidence.',
          'application',
        ),
      ],
      simulation: {
        title: 'SOC testing workpaper',
        scenario: 'Evaluate the adequacy of four proposed testing conclusions.',
        exhibits: [
          {
            title: 'Testing observations',
            body: 'A: Inquiry alone is used to conclude a monthly reconciliation operated all year. B: Administrator access is tested using only ordinary-user requests. C: One deviation is removed from the results without investigation. D: A quarterly review has support for three quarters only.',
          },
          {
            title: 'Objective',
            body: 'Obtain sufficient appropriate evidence about the described controls over the report period.',
          },
        ],
        tasks: [
          {
            label: 'Improve test A',
            correct: 'Obtain appropriate corroborating operating evidence',
            options: [
              'Obtain appropriate corroborating operating evidence',
              'Rely only on the policy title',
              'Remove the control objective',
              'Assume all monthly controls work',
            ],
            explanation: 'Inquiry alone does not ordinarily establish period-long effectiveness.',
          },
          {
            label: 'Improve test B',
            correct: 'Use the relevant administrator-access population',
            options: [
              'Use the relevant administrator-access population',
              'Increase only the ordinary-user sample',
              'Ignore administrators',
              'Sample unrelated invoices',
            ],
            explanation: 'The population must match the control.',
          },
          {
            label: 'Improve test C',
            correct: 'Retain, investigate, and evaluate the deviation',
            options: [
              'Retain, investigate, and evaluate the deviation',
              'Delete all exceptions',
              'Count only favorable evidence',
              'Assume every deviation is harmless',
            ],
            explanation: 'Deviations form part of the evidence and conclusion.',
          },
          {
            label: 'Improve test D',
            correct: 'Investigate the unsupported quarter and assess significance',
            options: [
              'Investigate the unsupported quarter and assess significance',
              'Claim four supported reviews',
              'Assume signatures are unnecessary in every case',
              'Ignore the report period',
            ],
            explanation: 'The missing quarter needs an evidence-based evaluation.',
          },
        ],
      },
    },
    {
      topic: 'soc-report-conclusions',
      title: 'SOC Findings, Opinions & User Interpretation',
      group: 'C',
      objectives: [
        'Connect description, design, and operation findings to conclusions.',
        'Evaluate report modifications and scope limitations.',
        'Use report findings in a user entity’s risk response.',
      ],
      teaching: [
        'SOC reporting conclusions concern the matters specified in the engagement, such as fair presentation of the description, suitability of control design, and, for Type 2 reports, operating effectiveness. Report wording must reflect the actual scope, period, criteria, and evidence. An unmodified report does not guarantee the absence of all incidents or eliminate user responsibilities.',
        'Material description omissions, unsuitable design, operating deviations, and evidence limitations require evaluation. Their nature, severity, and pervasiveness affect reporting under the applicable attestation standard. A known problem differs from an inability to obtain evidence. Do not substitute a list of findings for the required opinion analysis.',
        'A user should understand exceptions, affected controls and periods, management responses, and compensating measures. Vendor remediation promises do not establish that remediation has been implemented and tested. Combine report information with the user’s own controls, contractual requirements, and risk assessment to decide on follow-up and reliance.',
      ],
      workedExample: {
        title: 'A reported access-control exception',
        facts:
          'A SOC 2 Type 2 report identifies delayed removal of privileged users during part of the period. The vendor promises a new process after the report period.',
        steps: [
          'Determine whether the exception affects the service and data the user relies on.',
          'Evaluate the report’s conclusion and relevant user safeguards.',
          'Seek evidence of the new process rather than treating a future promise as completed remediation.',
        ],
      },
      pitfalls: [
        'An unmodified report is not a guarantee against every incident.',
        'A promise to remediate is not evidence that remediation operated.',
        'Known deficiencies and evidence limitations have different implications.',
      ],
      questions: [
        q(
          'What does an unmodified SOC report not provide?',
          'A guarantee that no incident or control failure can occur.',
          [
            'The stated conclusion within its scope.',
            'Information about the report period.',
            'The identified applicable criteria.',
          ],
          'Assurance has defined scope and limitations and is not a universal guarantee.',
          'remembering',
        ),
        q(
          'Which additional conclusion is central to a Type 2 report compared with Type 1?',
          'Operating effectiveness over the specified period.',
          [
            'A guarantee of future profitability.',
            'A tax opinion on every user.',
            'A guarantee of no future change.',
          ],
          'Type 2 includes period operating-effectiveness coverage.',
          'remembering',
        ),
        q(
          'Does a vendor’s promise to fix a control prove the fix operated effectively?',
          'No.',
          ['Yes, automatically.', 'Only if the email is signed.', 'Only if the vendor is large.'],
          'Implementation and operating evidence are still needed.',
          'remembering',
        ),
        q(
          'What should a user consider when reviewing report exceptions?',
          'Relevance, affected controls and period, severity, and its own safeguards.',
          [
            'Only the number of pages.',
            'Only whether the report has a logo.',
            'Only the vendor’s desired interpretation.',
          ],
          'Report findings should inform the actual user risk response.',
          'remembering',
        ),
        q(
          'A description omits a material process and management refuses to correct it. What must the practitioner evaluate?',
          'The effect of the known description problem on the report conclusion.',
          [
            'Only whether the report can be shortened.',
            'A guarantee that the omission is harmless.',
            'Automatic approval because the process is outsourced.',
          ],
          'Material description problems can affect fair-presentation conclusions.',
          'analysis',
        ),
        q(
          'Evidence needed to test a significant control is unavailable. What is the relevant concern?',
          'A scope or evidence limitation requiring reporting evaluation.',
          [
            'Proof that the control always failed.',
            'Proof that the control always succeeded.',
            'No issue if management is confident.',
          ],
          'Missing evidence differs from a known operating result and needs appropriate evaluation.',
          'application',
        ),
      ],
      simulation: {
        title: 'User response to a SOC report',
        scenario:
          'Evaluate the report and management responses before relying on an outsourced service.',
        exhibits: [
          {
            title: 'Report findings',
            body: 'The report identifies delayed privileged-access removal. A material service process is omitted from the description. Evidence for another control is unavailable.',
          },
          {
            title: 'Provider response',
            body: 'The provider promises a new access process next quarter but provides no implementation or testing evidence.',
          },
        ],
        tasks: [
          {
            label: 'Response to delayed access removal',
            correct: 'Evaluate relevance and adjust the user’s risk response',
            options: [
              'Evaluate relevance and adjust the user’s risk response',
              'Ignore every exception in an issued report',
              'Assume all user controls are tested',
              'Treat the report as a universal guarantee',
            ],
            explanation: 'Exceptions need to be considered in the user’s context.',
          },
          {
            label: 'Nature of the description omission',
            correct: 'A known description issue requiring conclusion evaluation',
            options: [
              'A known description issue requiring conclusion evaluation',
              'Automatic evidence of no risk',
              'Only a cosmetic problem in every case',
              'A guarantee of future controls',
            ],
            explanation: 'A material omission may affect fair presentation.',
          },
          {
            label: 'Nature of unavailable control evidence',
            correct: 'An evidence limitation',
            options: [
              'An evidence limitation',
              'Automatic proof of successful operation',
              'Automatic proof of every possible failure',
              'No reporting consideration',
            ],
            explanation: 'Missing evidence affects the basis for a conclusion.',
          },
          {
            label: 'Treatment of the remediation promise',
            correct: 'Seek evidence of implementation and effectiveness',
            options: [
              'Seek evidence of implementation and effectiveness',
              'Treat the promise as completed remediation',
              'Stop monitoring',
              'Ignore the relevant control thereafter',
            ],
            explanation: 'A future plan is not operating evidence.',
          },
        ],
      },
    },
  ],
};
