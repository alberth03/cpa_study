import { q, type CurriculumModule } from './types.ts';
export const regEthics: CurriculumModule = {
  title: 'Tax Ethics, Responsibilities & Procedures',
  area: 1,
  lessons: [
    {
      topic: 'tax-practice-ethics',
      title: 'Tax Practitioner Duties & Return Positions',
      group: 'A-B',
      objectives: [
        'Apply diligence and competence to tax preparation and advice.',
        'Evaluate support and disclosure for return positions.',
        'Distinguish professional discipline from tax penalties.',
      ],
      teaching: [
        'A tax practitioner must exercise diligence in determining the correctness of representations made to the IRS and clients. Client information can be used in appropriate circumstances, but obvious inconsistencies, omissions, and implausible claims require follow-up. A signed organizer does not authorize knowingly including false information. The practitioner should advise the client about identified errors and relevant consequences rather than silently repeating an error.',
        'Return positions require the level of support and disclosure specified by the applicable authority. The relevant threshold depends on the type of position, whether disclosure is made, and whether special transaction rules apply. Do not assume that disclosure cures a frivolous position or that the likelihood of audit determines legal support. Evaluate authoritative sources and document the analysis.',
        'Circular 230 governs practice before the IRS; the Internal Revenue Code contains preparer and taxpayer penalty provisions; state boards administer CPA licensing and discipline. These systems can operate independently. A practitioner should perform work competently, seek qualified assistance when needed, protect client information, and resolve conflicts of interest under the applicable rules. A contingent fee may be restricted depending on the service and circumstances; a client agreement does not override a prohibition.',
      ],
      workedExample: {
        title: 'The unsupported expense schedule',
        facts:
          'A client reports business expenses far above its gross receipts, supplies no support, and asks the preparer to use the amounts because the return is unlikely to be audited.',
        steps: [
          'Identify the inconsistency and request supporting information.',
          'Evaluate the legal basis for deductions and explain relevant consequences.',
          'Do not prepare a knowingly false return or use audit probability as a substitute for legal support.',
        ],
      },
      pitfalls: [
        'A client signature does not cure information known to be false.',
        'Disclosure does not validate every unsupported tax position.',
        'IRS sanctions and state licensing consequences are different systems.',
      ],
      questions: [
        q(
          'A client’s deduction schedule contains obvious contradictions. What should the preparer do?',
          'Make appropriate inquiries and evaluate support before using the figures.',
          [
            'Rely on the signature regardless of known facts.',
            'Ignore the issue if an audit is unlikely.',
            'Increase deductions to offset the inconsistency.',
          ],
          'Diligence requires follow-up when information appears incorrect, incomplete, or inconsistent.',
          'analysis',
        ),
        q(
          'Which factor does not establish legal support for a return position?',
          'A low probability that the return will be audited.',
          [
            'Relevant statutory language.',
            'Applicable regulations.',
            'Pertinent judicial decisions.',
          ],
          'Audit likelihood is not substantive tax authority.',
          'remembering',
        ),
        q(
          'A practitioner discovers that a client omitted income on a prior return. What is appropriate?',
          'Advise the client of the error and relevant consequences.',
          [
            'Silently repeat the omission.',
            'Assume the omission can never be corrected.',
            'Disclose confidential information publicly without evaluating duties.',
          ],
          'Professional duties include advising the client about the error and consequences while respecting applicable confidentiality rules.',
          'application',
        ),
        q(
          'Which organization generally controls CPA licensing within a jurisdiction?',
          'The state board of accountancy.',
          [
            'Only the IRS appeals office.',
            'Only the client’s bank.',
            'Only a private tax-software company.',
          ],
          'State boards oversee licensing and disciplinary authority under state law.',
          'remembering',
        ),
        q(
          'Does disclosure automatically make a frivolous tax position acceptable?',
          'No.',
          [
            'Yes, if attached to a large return.',
            'Yes, if the client signs it.',
            'Only if the expected refund is small.',
          ],
          'Disclosure does not create authority for a frivolous position; the governing standards still apply.',
          'analysis',
        ),
        q(
          'A preparer lacks competence in a complex transaction. Which response is appropriate?',
          'Obtain the necessary competence or qualified assistance before advising.',
          [
            'Give a confident conclusion without research.',
            'Rely only on a social-media summary.',
            'Assume all unfamiliar transactions are tax-free.',
          ],
          'Competent practice requires appropriate knowledge, preparation, or assistance.',
          'application',
        ),
      ],
      simulation: {
        title: 'Tax practice review memorandum',
        scenario: 'Evaluate a preparer’s response to four engagement issues.',
        exhibits: [
          {
            title: 'Client file',
            body: 'A deduction lacks support and contradicts bank records. A partner wants to rely on the return’s low audit risk. A prior-year income omission is discovered. A complex restructuring exceeds the team’s expertise.',
          },
          {
            title: 'Required approach',
            body: 'Apply diligence, authoritative research, client communication, and competence. Do not assume a disclosure or engagement letter eliminates substantive obligations.',
          },
        ],
        tasks: [
          {
            label: 'Response to the unsupported deduction',
            correct: 'Investigate and obtain appropriate support',
            options: [
              'Investigate and obtain appropriate support',
              'Use it despite known contradictions',
              'Increase it',
              'Treat the organizer as conclusive',
            ],
            explanation: 'Known inconsistencies require reasonable follow-up.',
          },
          {
            label: 'Treatment of low audit probability',
            correct: 'It does not establish legal support',
            options: [
              'It does not establish legal support',
              'It is the highest tax authority',
              'It cures a frivolous position',
              'It replaces professional diligence',
            ],
            explanation: 'Substantive support comes from applicable authority, not audit odds.',
          },
          {
            label: 'Response to the prior omission',
            correct: 'Advise the client of the error and consequences',
            options: [
              'Advise the client of the error and consequences',
              'Repeat it silently',
              'Destroy prior records',
              'Publish the client’s identity',
            ],
            explanation: 'Advise the client while observing applicable duties.',
          },
          {
            label: 'Response to the unfamiliar restructuring',
            correct: 'Obtain competence or qualified assistance',
            options: [
              'Obtain competence or qualified assistance',
              'Guess the tax result',
              'Avoid all documentation',
              'Assume no tax applies',
            ],
            explanation: 'Competence requires adequate preparation or assistance.',
          },
        ],
      },
    },
    {
      topic: 'federal-tax-procedures',
      title: 'IRS Examinations, Appeals, Courts & Penalties',
      group: 'C',
      objectives: [
        'Distinguish administrative review and judicial forums.',
        'Apply specified assessment periods and penalty facts.',
        'Identify documentation needed to support tax treatment.',
      ],
      teaching: [
        'An IRS examination may lead to proposed changes, administrative appeal, and judicial review. Distinguish a statutory notice of deficiency from a bill that has already been paid. The U.S. Tax Court generally permits a deficiency dispute without first paying the disputed deficiency, subject to jurisdictional and timing requirements. Refund litigation in district court or the Court of Federal Claims generally follows payment and a proper refund claim.',
        'The ordinary federal income-tax assessment period is generally three years, but important exceptions apply. A substantial omission of gross income can trigger a six-year period; fraud or failure to file can leave assessment open indefinitely. Extensions and special rules can change the result. Identify the return’s filing facts and the precise exception rather than applying a single period to every case.',
        'Penalties can address failures to file, failures to pay, negligence, substantial understatement, fraud, and preparer conduct. Their bases, rates, overlap rules, caps, and defenses differ. Questions using a rate or cap state the applicable assumptions; calculate the specified penalty only after identifying the conduct and period. Reasonable-cause considerations are fact-specific and are not an automatic waiver.',
        'Maintain records supporting income, basis, deductions, credits, and disclosure. An unsupported estimate is not necessarily acceptable simply because an expense sounds business-related. Follow substantiation requirements for the item involved. Foreign accounts and specified foreign assets can trigger distinct reporting regimes with their own forms, thresholds, and penalties; income-tax filing alone does not automatically satisfy every information-reporting duty.',
      ],
      workedExample: {
        title: 'A supplied penalty computation',
        facts:
          'For this exercise, a late-payment penalty is 0.5% per month of $20,000 unpaid tax. The tax remains unpaid for four full months; ignore other penalties and caps.',
        steps: [
          'Use the specified unpaid-tax base, not gross income.',
          'Compute $20,000 × 0.5% × 4 = $400.',
          'Evaluate other penalties or defenses separately when the facts require them.',
        ],
      },
      pitfalls: [
        'Court choice depends on payment, jurisdiction, and procedural requirements.',
        'Fraud and nonfiling do not necessarily use the ordinary three-year period.',
        'Distinct foreign-account reports should not be conflated.',
      ],
      questions: [
        q(
          'Which forum generally allows a taxpayer to contest an income-tax deficiency before paying it, if procedural requirements are met?',
          'U.S. Tax Court.',
          [
            'A refund suit in district court without payment in every case.',
            'A private arbitration with the tax preparer.',
            'The local sales-tax office.',
          ],
          'Tax Court deficiency jurisdiction generally provides a prepayment forum, subject to applicable requirements.',
          'remembering',
        ),
        q(
          'For a timely filed return with no applicable exception, what is the general federal income-tax assessment period?',
          'Three years.',
          ['One month.', 'Ten years in every case.', 'No time limit in every case.'],
          'The ordinary period is generally three years; exceptions and extensions must be evaluated separately.',
          'remembering',
        ),
        q(
          'Which fact can leave the federal income-tax assessment period open indefinitely?',
          'A fraudulent return with intent to evade tax.',
          [
            'Any arithmetic error.',
            'A return prepared by software.',
            'A small disclosed deduction.',
          ],
          'Fraud is an important exception to the ordinary assessment period.',
          'application',
        ),
        q(
          'Assume a penalty of 0.5% per month on $30,000 unpaid tax for three months, with no other adjustments. What is the penalty?',
          '$450.',
          ['$150.', '$4,500.', '$900.'],
          '$30,000 × .005 × 3 = $450.',
          'application',
        ),
        q(
          'A taxpayer wants to pursue federal refund litigation. Which procedural matter ordinarily needs evaluation?',
          'Payment and a proper administrative refund claim before suit.',
          [
            'Only whether the taxpayer dislikes the auditor.',
            'Only the amount of tax-preparation fees.',
            'Automatic access to every court without prerequisites.',
          ],
          'Refund litigation generally has payment and claim prerequisites that differ from Tax Court deficiency proceedings.',
          'analysis',
        ),
        q(
          'Does filing an income-tax return automatically satisfy all foreign-account information-reporting duties?',
          'No; separate reporting regimes and thresholds may apply.',
          [
            'Yes, in every case.',
            'Yes, if foreign interest is under $100.',
            'Only if the bank account is denominated in dollars.',
          ],
          'Separate federal information-reporting obligations require their own analysis.',
          'application',
        ),
      ],
      simulation: {
        title: 'Tax procedure case file',
        scenario:
          'Prepare a procedural action summary and a penalty calculation using the stated assumptions.',
        exhibits: [
          {
            title: 'Procedural facts',
            body: 'A taxpayer received a notice of deficiency and wants a qualifying prepayment challenge. Another taxpayer filed no return. A third asks whether reporting foreign interest alone meets every foreign-account reporting duty.',
          },
          {
            title: 'Penalty assumptions',
            body: 'Unpaid tax is $40,000 for five full months. For this exercise use 0.5% per month; ignore other penalties and limits.',
          },
        ],
        tasks: [
          {
            label: 'Potential prepayment forum',
            correct: 'U.S. Tax Court',
            options: [
              'U.S. Tax Court',
              'A refund suit without any prerequisites',
              'Only a state small-claims court',
              'Only private mediation',
            ],
            explanation:
              'Tax Court generally provides a deficiency prepayment forum when requirements are met.',
          },
          {
            label: 'Assessment-period implication of nonfiling',
            correct: 'The ordinary three-year period does not automatically close assessment',
            options: [
              'The ordinary three-year period does not automatically close assessment',
              'Assessment always closes after one year',
              'Nonfiling eliminates all tax',
              'No records are relevant',
            ],
            explanation: 'Failure to file is an exception requiring separate analysis.',
          },
          {
            label: 'Specified late-payment penalty',
            correct: 1000,
            distractors: [200, 2000, 10000],
            explanation: '$40,000 × .005 × 5 = $1,000.',
          },
          {
            label: 'Foreign-reporting conclusion',
            correct: 'Evaluate separate applicable information-reporting requirements',
            options: [
              'Evaluate separate applicable information-reporting requirements',
              'Income reporting always satisfies everything',
              'Currency denomination determines all duties',
              'No foreign accounts are reportable',
            ],
            explanation: 'Income and account-information reporting are distinct obligations.',
          },
        ],
      },
    },
    {
      topic: 'tax-authority-confidentiality',
      title: 'Tax Authority, Liability, Confidentiality & Privilege',
      group: 'C-D',
      objectives: [
        'Evaluate authoritative sources and jurisdiction.',
        'Distinguish confidentiality from legal privilege.',
        'Recognize professional duties to clients and third parties.',
      ],
      teaching: [
        'Tax analysis starts with applicable statutes and regulations and considers relevant judicial and administrative authorities. The authority of a decision depends on the court, jurisdiction, facts, and subsequent developments. IRS publications can help explain a rule but do not have the same authority as the Internal Revenue Code. An internet summary should lead to research, not become the final legal basis for a position.',
        'Confidentiality is a professional or statutory duty governing disclosure. Privilege is a legal protection against compelled disclosure in specified proceedings. They are not interchangeable. The limited federally authorized tax-practitioner privilege generally concerns qualifying noncriminal tax advice; it does not automatically cover return preparation, criminal matters, or all communications with a CPA. Evaluate the applicable statute and exceptions.',
        'A preparer can owe duties of competence, care, and appropriate communication to a client. Liability to third parties depends on applicable law and the facts, including the nature of the conduct and reliance. Do not assume that a confidentiality agreement eliminates negligence or that every unfavorable tax result proves professional malpractice. Document scope, assumptions, advice, and client decisions.',
        'Disclosure of return information may require specific taxpayer consent or fit a statutory exception. Evaluate the purpose, recipient, and authorization before sharing information with third-party vendors, lenders, or technology providers. The convenience of a service is not itself permission to disclose protected information.',
      ],
      workedExample: {
        title: 'A request from the client’s lender',
        facts:
          'A lender asks the preparer for a client’s full tax return. The client has not authorized disclosure. Separately, the client assumes that every email sent to a CPA is legally privileged.',
        steps: [
          'Evaluate confidentiality, return-information disclosure rules, and necessary consent before release.',
          'Explain that professional confidentiality does not create blanket evidentiary privilege.',
          'Document the scope and basis of any permitted disclosure.',
        ],
      },
      pitfalls: [
        'Confidentiality and privilege are different protections.',
        'IRS publications are useful guidance but are not the statute.',
        'Client disappointment alone does not establish liability.',
      ],
      questions: [
        q(
          'Which source has greater legal authority than a general IRS explanatory publication when they conflict?',
          'The applicable Internal Revenue Code provision.',
          ['A tax software tooltip.', 'A social-media post.', 'The client’s preferred answer.'],
          'The governing statute controls over informal explanatory material, subject to proper interpretation and other relevant authority.',
          'remembering',
        ),
        q(
          'A client assumes every communication with a CPA is privileged in a criminal tax case. What is the appropriate explanation?',
          'CPA communications do not have a blanket privilege, and the limited tax-practitioner privilege does not generally cover criminal tax matters.',
          [
            'Every CPA email is absolutely privileged.',
            'Confidentiality eliminates all subpoenas automatically.',
            'Privilege depends only on whether the bill was paid.',
          ],
          'Confidentiality is not blanket legal privilege; statutory scope and exceptions matter.',
          'analysis',
        ),
        q(
          'A lender requests a client’s return without authorization. What should the preparer do first?',
          'Evaluate disclosure rules and obtain appropriate consent or identify an applicable exception.',
          [
            'Send the return because the lender seems reputable.',
            'Post the return to a public link.',
            'Assume all client vendors are automatically authorized.',
          ],
          'Tax-return information can be subject to specific consent requirements and professional confidentiality.',
          'application',
        ),
        q(
          'What should be considered when relying on a tax court decision?',
          'Its jurisdiction, facts, authority, and subsequent developments.',
          [
            'Only the year in the file name.',
            'Only whether the result favors the client.',
            'Only the length of the opinion.',
          ],
          'Judicial authority requires contextual analysis rather than outcome-driven selection.',
          'analysis',
        ),
        q(
          'Which statement best distinguishes confidentiality from privilege?',
          'Confidentiality restricts disclosure; privilege can protect against compelled disclosure in specified circumstances.',
          [
            'They always mean the same thing.',
            'Privilege is created by every engagement letter.',
            'Confidentiality applies only to criminal matters.',
          ],
          'The protections arise from different sources and have different scope and exceptions.',
          'remembering',
        ),
        q(
          'A tax result is unfavorable after a competent, appropriately researched engagement. Does that fact alone establish preparer malpractice?',
          'No; applicable duties, conduct, causation, and other legal elements must be evaluated.',
          [
            'Yes, every unfavorable result proves negligence.',
            'Yes, unless the client used software.',
            'Only the size of the refund matters.',
          ],
          'An unfavorable outcome is not by itself proof of a breach of professional duty or liability.',
          'application',
        ),
      ],
      simulation: {
        title: 'Authority and confidentiality review',
        scenario:
          'Identify the appropriate principle for each proposed research or disclosure decision.',
        exhibits: [
          {
            title: 'File notes',
            body: 'A staff member chooses a blog over a controlling statute. A client calls all CPA communications privileged. A lender asks for a return without consent. A manager relies on a court decision without checking jurisdiction or later law.',
          },
          {
            title: 'Required approach',
            body: 'Use applicable authority, distinguish legal protections, and evaluate permitted disclosures.',
          },
        ],
        tasks: [
          {
            label: 'Research response to the blog conflict',
            correct: 'Apply and analyze the controlling authority',
            options: [
              'Apply and analyze the controlling authority',
              'Use the blog if shorter',
              'Let the client choose the law',
              'Treat every source as equal',
            ],
            explanation: 'Informal summaries do not override controlling law.',
          },
          {
            label: 'Privilege explanation',
            correct: 'Protection is limited and depends on the applicable law',
            options: [
              'Protection is limited and depends on the applicable law',
              'Every communication is absolutely privileged',
              'Payment alone creates privilege',
              'No confidentiality duties exist',
            ],
            explanation: 'Privilege and confidentiality have defined, different scopes.',
          },
          {
            label: 'Response to the lender',
            correct: 'Evaluate consent and applicable disclosure rules',
            options: [
              'Evaluate consent and applicable disclosure rules',
              'Send automatically',
              'Publish the return',
              'Assume reputation is authorization',
            ],
            explanation: 'Disclosure must be permitted under the applicable duties and rules.',
          },
          {
            label: 'Court-decision research step',
            correct: 'Check jurisdiction, facts, and subsequent developments',
            options: [
              'Check jurisdiction, facts, and subsequent developments',
              'Use only favorable holdings',
              'Ignore newer law',
              'Count pages as authority',
            ],
            explanation: 'A decision’s relevance and precedential value require context.',
          },
        ],
      },
    },
  ],
};
