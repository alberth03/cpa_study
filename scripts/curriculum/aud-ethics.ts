import { q, type CurriculumModule } from './types.ts';

export const audEthics: CurriculumModule = {
  title: 'Ethics, Responsibilities & Engagement Foundations',
  area: 1,
  lessons: [
    {
      topic: 'auditor-independence',
      title: 'Ethics, Independence & Professional Conduct',
      group: 'A',
      objectives: [
        'Distinguish independence of mind and appearance from objectivity.',
        'Apply the appropriate AICPA, SEC/PCAOB, GAO, or DOL independence requirements.',
        'Respond to financial-interest, management-participation, and confidentiality threats.',
      ],
      teaching: [
        'An audit opinion is useful only when the auditor can exercise judgment without a client’s financial or managerial influence. Independence of mind concerns the auditor’s actual judgment; independence in appearance asks what a reasonable, informed third party would conclude. Integrity and objectivity apply more broadly to professional services, including work that does not require an independent audit opinion.',
        'Start by identifying the engagement, the client, the covered person, and the relationship. A covered member’s direct financial interest in an attest client impairs independence even when the investment is small. Material indirect interests also matter. Immediate family is generally subject to the covered member’s independence restrictions; other family and employment situations require the applicable rule rather than an automatic assumption that every relative creates a prohibition.',
        'A conceptual framework identifies threats, evaluates their significance, and applies safeguards when permitted. It cannot override an express prohibition. Examples of threats include self-interest from investments, self-review from preparing work that will be audited, advocacy, familiarity, and undue influence. Document the facts and safeguards; if an unacceptable threat cannot be reduced, decline or discontinue the service.',
        'For a nonissuer, some nonattest assistance can coexist with an audit when management designates a competent individual, makes all decisions, evaluates the work, and accepts responsibility. The CPA must not authorize transactions or assume management responsibility. Issuer restrictions under SEC/PCAOB rules can prohibit services that might otherwise be permitted for a nonissuer. GAO and DOL requirements require their own analysis for governmental and employee-benefit-plan engagements.',
        'Confidential client information remains confidential when using cloud tools or AI. Obtain appropriate authorization and evaluate the recipient’s confidentiality protections before transferring identifiable information. An efficient technology does not eliminate professional responsibilities. When rules conflict, determine every applicable requirement and satisfy the most restrictive applicable obligation rather than selecting the easiest framework.',
      ],
      workedExample: {
        title: 'A small investment and a large independence problem',
        facts:
          'An audit manager owns $800 of stock directly in the nonissuer audit client. The client also asks the firm to recommend depreciation methods while its controller makes and documents the final accounting decisions.',
        steps: [
          'The direct interest is prohibited for the covered member; its small dollar value does not cure the impairment.',
          'Depreciation advice is evaluated separately. A recommendation is different from assuming management responsibility.',
          'Resolve the prohibited interest and evaluate the nonattest-service safeguards before continuing the audit; document both conclusions.',
        ],
      },
      pitfalls: [
        'Do not use materiality to excuse a prohibited direct interest.',
        'Client consent does not cure every independence impairment.',
        'Do not apply nonissuer service permissions automatically to an issuer.',
      ],
      questions: [
        q(
          'A covered audit team member directly owns $300 of the client’s common stock. What is the most appropriate independence conclusion?',
          'Independence is impaired despite the small amount.',
          [
            'Independence is preserved because the investment is immaterial.',
            'Only disclosure to the audit committee is necessary.',
            'Independence is impaired only if dividends are received.',
          ],
          'A covered member’s direct financial interest is prohibited. Neither a small balance, disclosure, nor the absence of dividends removes the interest.',
          'analysis',
        ),
        q(
          'A nonissuer asks its auditor to approve all vendor payments during a controller vacancy. Which response is appropriate?',
          'Decline to authorize transactions because that is a management responsibility.',
          [
            'Accept if the audit partner later reviews the payments.',
            'Accept because the vacancy is temporary.',
            'Accept if the client signs a waiver.',
          ],
          'Authorizing transactions is management participation. A subsequent review, temporary arrangement, or waiver does not make the auditor independent.',
          'analysis',
        ),
        q(
          'Which statement best describes independence in appearance?',
          'A reasonable, informed third party would view the auditor as able to act objectively.',
          [
            'The auditor personally believes no bias exists.',
            'The audit firm has never received a client complaint.',
            'Every team member uses identical professional judgments.',
          ],
          'Appearance evaluates the informed third party’s perspective. Personal confidence is independence of mind and is not sufficient by itself.',
          'remembering',
        ),
        q(
          'An audit senior proposes uploading identifiable client payroll to an unapproved public AI service. The client engagement letter is silent. What should happen first?',
          'Evaluate confidentiality and authorization requirements before sending the data.',
          [
            'Upload because the tool promises an accurate answer.',
            'Upload after replacing only the company’s name.',
            'Upload because all professional tools are covered by the audit opinion.',
          ],
          'Professional confidentiality applies to automated third-party tools. Accuracy, superficial anonymization, and the existence of an engagement do not establish authorization or adequate protection.',
          'analysis',
        ),
        q(
          'A situation is expressly prohibited by an applicable independence rule. Can the conceptual framework authorize it after safeguards are documented?',
          'No; a framework cannot override an express prohibition.',
          [
            'Yes, if two partners approve the safeguards.',
            'Yes, if the client is privately held.',
            'Only if the prohibited service is inexpensive.',
          ],
          'The framework addresses threats when the rules permit an evaluation. It is not an exception to a direct prohibition.',
          'remembering',
        ),
        q(
          'A firm audits an issuer and proposes a service permitted under an AICPA nonissuer interpretation. What additional evaluation is required?',
          'Apply the relevant SEC and PCAOB restrictions and audit-committee requirements.',
          [
            'No evaluation because AICPA permissions control every audit.',
            'Only evaluate whether fees exceed audit fees.',
            'Only confirm that the engagement partner is a CPA.',
          ],
          'Issuer engagements can be subject to additional or more restrictive independence requirements; nonissuer permissions are not portable without analysis.',
          'application',
        ),
      ],
      simulation: {
        title: 'Independence acceptance memorandum',
        scenario:
          'You are the ethics reviewer for a firm considering four proposed arrangements for a nonissuer financial-statement audit. Determine the appropriate conclusion for each fact pattern.',
        exhibits: [
          {
            title: 'Proposed arrangements',
            body: 'A: The engagement partner directly owns 20 client shares. B: The firm will prepare a proposed depreciation schedule; a competent controller chooses methods and accepts responsibility. C: An auditor will sign purchase orders for the client. D: Confidential customer data will be sent to a public tool without authorization.',
          },
          {
            title: 'Evaluation instructions',
            body: 'Assume all individuals described are covered members. No exception applies to direct interests or management responsibilities. For permitted nonattest assistance, management must oversee, evaluate, and accept the results.',
          },
        ],
        tasks: [
          {
            label: 'Arrangement A: appropriate conclusion',
            correct: 'Prohibited direct financial interest',
            options: [
              'Prohibited direct financial interest',
              'Permitted because shares are immaterial',
              'Permitted with client consent',
              'Management responsibility',
            ],
            explanation: 'A covered partner’s direct interest impairs independence.',
          },
          {
            label: 'Arrangement B: appropriate conclusion',
            correct: 'Evaluate and document nonattest safeguards',
            options: [
              'Evaluate and document nonattest safeguards',
              'Automatically prohibited for every nonissuer',
              'No professional responsibilities apply',
              'Client waiver substitutes for oversight',
            ],
            explanation:
              'Management retains responsibility, so evaluate the service and applicable safeguards.',
          },
          {
            label: 'Arrangement C: primary issue',
            correct: 'Assuming management responsibility',
            options: [
              'Assuming management responsibility',
              'Only an immaterial financial interest',
              'No independence issue',
              'A required audit procedure',
            ],
            explanation: 'Signing purchase orders authorizes client transactions.',
          },
          {
            label: 'Arrangement D: required first action',
            correct: 'Resolve authorization and confidentiality protections',
            options: [
              'Resolve authorization and confidentiality protections',
              'Upload because the data is useful',
              'Obtain only the tool’s accuracy score',
              'Delay documentation until after upload',
            ],
            explanation:
              'Confidentiality duties apply before sharing client data with a third party.',
          },
        ],
      },
    },
    {
      topic: 'professional-skepticism',
      title: 'Skepticism, Judgment & Audit Responsibilities',
      group: 'B',
      objectives: [
        'Evaluate contradictory evidence without assuming dishonesty or unquestioning trust.',
        'Distinguish management’s responsibilities from the auditor’s reasonable-assurance objective.',
        'Recognize fraud incentives, judgment biases, and appropriate escalation.',
      ],
      teaching: [
        'Professional skepticism is a questioning mind, alertness to possible misstatement, and a critical assessment of evidence. It is neither automatic suspicion nor unquestioning reliance on past experience. An honest management team can make errors, and a familiar explanation can conflict with current evidence. Document how inconsistencies were resolved rather than recording only the evidence that supports the preferred answer.',
        'Management is responsible for preparing financial statements under the applicable framework, designing and maintaining relevant internal control, and providing access to records and people. The auditor obtains reasonable assurance that the statements as a whole are free from material misstatement due to fraud or error and expresses an opinion. Reasonable assurance is high but not absolute because evidence is often persuasive rather than conclusive and fraud may involve concealment or collusion.',
        'Audit risk is not the risk that the business will fail. A financially distressed company may receive an unmodified opinion if its financial statements and disclosures are appropriate and sufficient evidence is obtained. Conversely, a profitable company may have materially misstated statements. Professional judgment connects the facts, the reporting framework, and the auditing standard rather than using profitability as a shortcut.',
        'Biases can distort judgment. Confirmation bias favors information that supports an initial belief. Anchoring overweights an initial number; availability bias overweights memorable events. Challenge assumptions by identifying plausible alternatives, obtaining contradictory evidence, and having an appropriately experienced person review significant judgments. Time pressure is a reason to adjust resources, not to lower evidence requirements.',
        'A fraud discussion considers incentives or pressures, opportunities, and attitudes or rationalizations. Management override remains relevant even when ordinary controls appear effective. Responses may include journal-entry testing, retrospective review of estimates, and evaluation of unusual significant transactions. Communicate identified issues at the appropriate level; involvement of senior management can require direct communication with those charged with governance.',
      ],
      workedExample: {
        title: 'The explanation that does not fit the evidence',
        facts:
          'Management says a December sales spike reflects normal demand. Shipping records show several large orders left the warehouse in January, and management bonuses depend on December revenue.',
        steps: [
          'Treat the bonus target as an incentive, not proof of fraud.',
          'Compare revenue recognition with contract terms and shipping evidence.',
          'Extend cutoff procedures, discuss contradictory evidence, and assess the effect on fraud risk and communications.',
        ],
      },
      pitfalls: [
        'Reasonable assurance is not a guarantee that every fraud is found.',
        'A representation does not replace evidence that should be available.',
        'Do not let a prior clean audit resolve a current contradiction.',
      ],
      questions: [
        q(
          'An auditor accepts management’s explanation despite contradictory shipping documents because the CFO has always been honest. Which concern is most direct?',
          'Insufficient professional skepticism.',
          [
            'Excessive substantive testing.',
            'A prohibited audit opinion on a profitable client.',
            'A need to assume all management statements are fraudulent.',
          ],
          'Past honesty does not resolve current inconsistent evidence. Skepticism requires follow-up without automatically assuming dishonesty.',
          'evaluation',
        ),
        q(
          'Who is responsible for preparing the financial statements and maintaining relevant internal control?',
          'Management.',
          [
            'The external auditor alone.',
            'The auditor’s specialist.',
            'The external confirmation respondent.',
          ],
          'Management owns financial reporting and control responsibilities. The external auditor evaluates and reports rather than assuming those duties.',
          'remembering',
        ),
        q(
          'Which description of a financial-statement audit is most accurate?',
          'It provides reasonable assurance about material misstatement of the statements as a whole.',
          [
            'It guarantees that all fraud has been detected.',
            'It guarantees that the entity will remain solvent.',
            'It certifies that every transaction is correct.',
          ],
          'An audit provides high, not absolute, assurance and focuses on material misstatement, not a guarantee of transaction accuracy or business success.',
          'remembering',
        ),
        q(
          'A team searches only for evidence supporting its initial conclusion that a reserve is adequate. Which bias is most apparent?',
          'Confirmation bias.',
          [
            'An unavoidable legal prohibition.',
            'Random sampling risk.',
            'A required use of management representations.',
          ],
          'Selective support for an initial conclusion is confirmation bias. Consider alternative assumptions and contradictory evidence.',
          'application',
        ),
        q(
          'A company has strong approval controls, but its CEO can post unrestricted top-side entries. What is the appropriate response?',
          'Assess and respond to management-override risk.',
          [
            'Conclude fraud risk is eliminated by the approvals.',
            'Ignore entries if the company is profitable.',
            'Replace all substantive procedures with the CEO’s written representation.',
          ],
          'Management may bypass ordinary controls. The auditor must address override, including relevant entries and unusual transactions.',
          'analysis',
        ),
        q(
          'An auditor identifies evidence that the CEO may have intentionally misstated revenue. Whom should the auditor consider communicating with directly?',
          'Those charged with governance at an appropriate level.',
          [
            'Only the employee who entered the transaction.',
            'Only customers who bought the product.',
            'No one until the auditor can guarantee fraud occurred.',
          ],
          'The level of implicated management affects escalation. Appropriate governance communication is not conditioned on proving every element of a legal fraud claim.',
          'evaluation',
        ),
      ],
      simulation: {
        title: 'Evaluate the audit team’s judgments',
        scenario:
          'Review four statements from the engagement file and identify the best corrective action.',
        exhibits: [
          {
            title: 'File excerpts',
            body: '1. The CFO was reliable last year, so contrary evidence was disregarded. 2. The team has promised investors that the company will never fail. 3. A senior selected only documents supporting the original reserve. 4. The CEO can override normal journal approval.',
          },
          {
            title: 'Required approach',
            body: 'Base the audit on sufficient appropriate evidence, maintain a questioning mind, distinguish audit assurance from investment guarantees, and address management override.',
          },
        ],
        tasks: [
          {
            label: 'Correct the treatment of contrary evidence',
            correct: 'Investigate and resolve the inconsistency',
            options: [
              'Investigate and resolve the inconsistency',
              'Rely on past honesty',
              'Ignore nonfinancial records',
              'Assume fraud without further work',
            ],
            explanation: 'Skepticism requires investigating the inconsistent evidence.',
          },
          {
            label: 'Correct the assurance promise',
            correct: 'Explain reasonable assurance about material misstatement',
            options: [
              'Explain reasonable assurance about material misstatement',
              'Guarantee solvency',
              'Guarantee every transaction',
              'Withdraw all audit objectives',
            ],
            explanation: 'The audit does not guarantee business success.',
          },
          {
            label: 'Identify the bias in the reserve testing',
            correct: 'Confirmation bias',
            options: [
              'Confirmation bias',
              'Sampling precision',
              'A financial statement assertion',
              'An independence safeguard',
            ],
            explanation: 'The senior sought only evidence consistent with the initial belief.',
          },
          {
            label: 'Respond to the CEO’s unrestricted entries',
            correct: 'Perform procedures addressing management override',
            options: [
              'Perform procedures addressing management override',
              'Eliminate substantive testing',
              'Rely only on ordinary approvals',
              'Accept an oral assurance',
            ],
            explanation: 'Ordinary controls do not eliminate management-override risk.',
          },
        ],
      },
    },
    {
      topic: 'engagement-acceptance',
      title: 'Engagement Scope, Acceptance & Written Terms',
      group: 'C-D',
      objectives: [
        'Match assurance levels to audits, reviews, compilations, preparations, and agreed-upon procedures.',
        'Evaluate engagement preconditions and predecessor communications.',
        'Document responsibilities and evaluate requests to change engagement type.',
      ],
      teaching: [
        'Begin with the service requested. An audit seeks reasonable assurance and an opinion. A review of historical financial statements generally provides limited assurance through inquiry and analytical procedures, with additional procedures when needed. A compilation provides no assurance, and preparation under SSARS does not provide an accountant’s report. Agreed-upon procedures report procedures and findings rather than an opinion or assurance conclusion.',
        'An engagement requires an acceptable financial reporting framework and management’s acknowledgment of responsibility for the financial statements, relevant internal control, and unrestricted access to information and people. A limitation imposed before acceptance that would lead to a disclaimer ordinarily makes acceptance inappropriate unless law or regulation requires the engagement. Access to evidence is an engagement precondition, not a convenience to be negotiated away after the opinion is promised.',
        'Before accepting a successor audit, obtain the prospective client’s permission to communicate with the predecessor. Inquire about integrity, disagreements with management, fraud and noncompliance matters, and reasons for the change, as relevant under the applicable standard. A refusal to authorize communication is a fact to evaluate, not proof that the predecessor did poor work. Document the implications for acceptance.',
        'A written engagement letter records the objective and scope, auditor and management responsibilities, applicable reporting framework, and expected reporting form, including the possibility that circumstances may change it. Reassess terms when circumstances change. A legitimate change in client needs may justify a different service; reducing assurance merely to avoid an unfavorable audit result does not provide reasonable justification.',
        'Use the correct standards for the engagement. Issuer audits are subject to PCAOB standards and relevant SEC rules. Nonissuer audits generally use AICPA GAAS. Governmental audits may add Government Auditing Standards, and federal-award audits can add Uniform Guidance. Attestation and SSARS engagements have different objectives; the word review alone is not enough to identify the governing standard without knowing the subject matter and client.',
      ],
      workedExample: {
        title: 'A requested downgrade after missing records',
        facts:
          'The auditor cannot obtain support for a material inventory balance. Management requests that the engagement be changed to a review specifically to avoid a modified audit opinion.',
        steps: [
          'Identify the reason for the change rather than simply comparing fees or procedures.',
          'The request is motivated by an evidence problem, not a genuine change in service needs.',
          'Do not agree to a downgrade that circumvents the audit’s reporting responsibilities; evaluate the original engagement and permitted withdrawal.',
        ],
      },
      pitfalls: [
        'No assurance does not mean no professional obligations.',
        'A client’s restriction can prevent acceptable engagement preconditions.',
        'Do not confuse a financial-statement review with an attestation review.',
      ],
      questions: [
        q(
          'Which engagement reports specified procedures and factual findings without an opinion or assurance conclusion?',
          'Agreed-upon procedures.',
          [
            'Financial-statement audit.',
            'Financial-statement review.',
            'An examination of an assertion.',
          ],
          'Agreed-upon procedures reports what was done and found. An audit or examination expresses reasonable assurance; a review expresses limited assurance.',
          'remembering',
        ),
        q(
          'Management will not acknowledge responsibility for preparing the financial statements. What does this affect?',
          'An essential precondition for accepting the audit.',
          [
            'Only the auditor’s choice of sample size.',
            'Only the wording of an invoice.',
            'Nothing if the company has a controller.',
          ],
          'Management’s acknowledgment of its responsibilities is an engagement precondition and cannot be replaced by auditor preparation of the statements.',
          'analysis',
        ),
        q(
          'Before contacting a predecessor auditor about a prospective audit client, the successor should ordinarily obtain what?',
          'The prospective client’s permission to communicate.',
          [
            'The stock exchange’s approval.',
            'A signed unmodified opinion.',
            'A guarantee that no disagreements occurred.',
          ],
          'Client authorization permits relevant predecessor communications. The successor uses the resulting information to assess acceptance.',
          'application',
        ),
        q(
          'A client asks to change an audit to a review solely because missing records would cause a modified opinion. Which response is best?',
          'Do not accept the change as a way to avoid the audit reporting consequence.',
          [
            'Accept because a review requires less evidence.',
            'Accept if the fee is unchanged.',
            'Issue the audit opinion without mentioning the missing evidence.',
          ],
          'A change intended to bypass an audit limitation is not a reasonable justification for downgrading assurance.',
          'evaluation',
        ),
        q(
          'Which service ordinarily provides limited assurance on historical financial statements through inquiry and analytical procedures?',
          'A financial-statement review.',
          [
            'A compilation.',
            'A financial-statement preparation engagement.',
            'An agreed-upon procedures engagement.',
          ],
          'A review provides limited assurance. Preparation, compilation, and agreed-upon procedures do not provide this assurance conclusion.',
          'remembering',
        ),
        q(
          'Which item belongs in a financial-statement audit engagement letter?',
          'Management and auditor responsibilities and the applicable reporting framework.',
          [
            'A promise that all fraud will be detected.',
            'A guarantee of an unmodified opinion.',
            'A waiver of access to material supporting records.',
          ],
          'Written terms clarify responsibilities and scope without guaranteeing an outcome or waiving required evidence.',
          'application',
        ),
      ],
      simulation: {
        title: 'Engagement acceptance decisions',
        scenario:
          'Classify the requested services and decide whether proposed acceptance terms are appropriate.',
        exhibits: [
          {
            title: 'Service requests',
            body: 'Client A wants an opinion with reasonable assurance on annual statements. Client B wants limited assurance on historical statements. Client C wants only findings from inventory-count procedures agreed by the parties. Client D will refuse all access to material debt agreements.',
          },
          {
            title: 'Acceptance criteria',
            body: 'Assume no law requires accepting Client D. Management must acknowledge its financial-reporting responsibility and provide information and access necessary for the engagement.',
          },
        ],
        tasks: [
          {
            label: 'Appropriate service for Client A',
            correct: 'Audit',
            options: ['Audit', 'Compilation', 'Preparation', 'Agreed-upon procedures'],
            explanation: 'An audit provides reasonable assurance and an opinion.',
          },
          {
            label: 'Appropriate service for Client B',
            correct: 'Review',
            options: ['Review', 'Compilation', 'Preparation', 'Agreed-upon procedures'],
            explanation: 'A review provides limited assurance on historical statements.',
          },
          {
            label: 'Appropriate service for Client C',
            correct: 'Agreed-upon procedures',
            options: ['Agreed-upon procedures', 'Audit', 'Review', 'Compilation'],
            explanation: 'The practitioner reports the specified procedures and findings.',
          },
          {
            label: 'Best response to Client D’s restriction',
            correct: 'Resolve the restriction before accepting',
            options: [
              'Resolve the restriction before accepting',
              'Promise an unmodified opinion',
              'Accept without documenting it',
              'Replace debt evidence with the fee agreement',
            ],
            explanation:
              'A material pre-acceptance scope restriction undermines the engagement preconditions.',
          },
        ],
      },
    },
    {
      topic: 'audit-documentation-quality',
      title: 'Documentation, Governance Communication & Quality',
      group: 'E-F-G',
      objectives: [
        'Prepare documentation understandable to an experienced auditor with no prior engagement connection.',
        'Distinguish significant deficiencies from material weaknesses and appropriate communication.',
        'Apply engagement quality responsibilities, consultation, and supervision.',
      ],
      teaching: [
        'Audit documentation supports the basis for the report and demonstrates that work was planned and performed under applicable standards. It should enable an experienced auditor with no previous connection to understand the nature, timing, extent, and results of procedures, significant findings, conclusions, and important judgments. Record the source, preparer, reviewer, and relevant dates so the work can be reconstructed rather than relying on oral memory.',
        'Document contradictory evidence and how it was resolved. A checklist marked complete is not sufficient when a significant estimate required judgment that is nowhere explained. After assembling the final file, document subsequent additions or changes, the reasons, and who made and reviewed them. Retention and assembly periods depend on the governing standard; do not erase inconvenient evidence after the report.',
        'Management is responsible for controls, but auditors communicate specified deficiencies. A material weakness is a deficiency or combination creating a reasonable possibility that a material misstatement will not be prevented, or detected and corrected, on a timely basis. A significant deficiency is less severe but important enough to merit governance attention. Neither classification requires an actual material misstatement to have occurred.',
        'Communicate planned scope and timing, significant findings, and required control matters with management and those charged with governance under the applicable standard. Timely communication matters because governance decisions may be needed before report issuance. An oral discussion may be useful, but it does not substitute for a required written communication.',
        'The engagement partner takes responsibility for managing and achieving engagement quality, including appropriate direction, supervision, review, resources, and consultation. An engagement quality review, when required, evaluates significant judgments and conclusions; it does not transfer the engagement partner’s responsibility to the reviewer. Resolve differences of opinion and complete required reviews before issuing the report.',
      ],
      workedExample: {
        title: 'An undocumented estimate and a weak review control',
        facts:
          'A senior concludes that a material warranty estimate is reasonable but stores no calculations. The client’s review control cannot detect a potentially material error, although no misstatement has yet been found.',
        steps: [
          'Add appropriate procedures and documentation explaining the estimate’s assumptions, supporting evidence, and conclusion.',
          'Evaluate the potential magnitude and likelihood of control failure; an actual loss is not required for a material weakness.',
          'Communicate as required and complete engagement review before report issuance.',
        ],
      },
      pitfalls: [
        'A completed checklist does not replace the reasoning behind a significant judgment.',
        'No observed error does not prove a control deficiency is insignificant.',
        'An engagement quality reviewer does not become the engagement partner.',
      ],
      questions: [
        q(
          'Audit documentation should be understandable to which person?',
          'An experienced auditor with no previous connection to the engagement.',
          [
            'Only the original preparer.',
            'Only the client’s CFO.',
            'Only a securities lawyer who designed the audit plan.',
          ],
          'Documentation must permit an experienced auditor unfamiliar with the engagement to understand the work and conclusions.',
          'remembering',
        ),
        q(
          'A control deficiency creates a reasonable possibility that a material misstatement will not be detected and corrected timely. No actual misstatement has been found. How is it evaluated?',
          'It can be a material weakness despite the absence of an observed misstatement.',
          [
            'It cannot exceed a trivial deficiency.',
            'It is automatically a qualified opinion on the financial statements.',
            'It is irrelevant until fraud occurs.',
          ],
          'The classification considers potential magnitude and likelihood. It does not require an actual misstatement and does not automatically determine the financial-statement opinion.',
          'analysis',
        ),
        q(
          'A required engagement quality review identifies an unresolved significant judgment before the report date. What should the partner do?',
          'Resolve the matter and complete the required review before report issuance.',
          [
            'Issue the report and resolve it next year.',
            'Transfer all engagement responsibility to the reviewer.',
            'Delete the reviewer’s comment.',
          ],
          'Required review procedures and differences of opinion must be addressed before issuance; responsibility is not transferred or avoided.',
          'evaluation',
        ),
        q(
          'Which statement best distinguishes a significant deficiency from a material weakness?',
          'A significant deficiency is less severe but important enough for governance attention.',
          [
            'A significant deficiency always requires a larger dollar error.',
            'A material weakness exists only after fraud is proven.',
            'The two labels have identical meanings.',
          ],
          'The distinction is based on severity and potential misstatement. Governance attention can be warranted below material-weakness severity.',
          'remembering',
        ),
        q(
          'A team has contradictory evidence about an accounting estimate. What should the file document?',
          'The inconsistency, follow-up work, and basis for the conclusion.',
          [
            'Only the evidence supporting management.',
            'Only an oral assurance from the partner.',
            'A statement that contrary evidence was unnecessary.',
          ],
          'A defensible file shows how contradictory evidence was resolved and why the conclusion is supported.',
          'analysis',
        ),
        q(
          'An auditor orally discusses a material weakness with the CFO. A written communication is required by the applicable standard. What remains necessary?',
          'Prepare and deliver the required written communication to the appropriate recipients.',
          [
            'Nothing, because oral communication always suffices.',
            'Publish client details on a public website.',
            'Wait until the weakness causes a loss.',
          ],
          'Required written communication remains necessary despite useful oral discussions. Confidentiality and timeliness still apply.',
          'application',
        ),
      ],
      simulation: {
        title: 'Quality review findings',
        scenario: 'Complete a reviewer’s action matrix for a nonissuer audit.',
        exhibits: [
          {
            title: 'Review findings',
            body: 'A: A material estimate conclusion has no documented reasoning. B: A control failure could permit a material misstatement with a reasonable possibility. C: A required written governance communication was only discussed orally. D: A required quality review remains unfinished on the planned issuance date.',
          },
          {
            title: 'Scope',
            body: 'Assume the applicable standards require the written communication and engagement quality review described. Evaluate required actions rather than legal liability or a future damages claim.',
          },
        ],
        tasks: [
          {
            label: 'Action for finding A',
            correct: 'Document procedures, evidence, and the significant judgment',
            options: [
              'Document procedures, evidence, and the significant judgment',
              'Rely only on memory',
              'Delete the estimate from the file',
              'Treat the checklist as conclusive',
            ],
            explanation: 'The file must support significant judgments and conclusions.',
          },
          {
            label: 'Classification considered for finding B',
            correct: 'Material weakness',
            options: [
              'Material weakness',
              'Automatically trivial',
              'Only a sampling error',
              'No deficiency without an actual error',
            ],
            explanation:
              'A reasonable possibility of an undetected material misstatement meets the material-weakness concept.',
          },
          {
            label: 'Action for finding C',
            correct: 'Complete the required written communication',
            options: [
              'Complete the required written communication',
              'Treat all oral discussion as sufficient',
              'Communicate only next year',
              'Disclose publicly instead',
            ],
            explanation: 'Oral discussion does not replace a required written communication.',
          },
          {
            label: 'Action for finding D',
            correct: 'Finish required review and resolve issues before issuance',
            options: [
              'Finish required review and resolve issues before issuance',
              'Issue now and review later',
              'Assign the opinion to the client',
              'Omit the review from documentation',
            ],
            explanation: 'Required quality procedures must precede issuance.',
          },
        ],
      },
    },
  ],
};
