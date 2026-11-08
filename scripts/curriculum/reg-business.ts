import { q, type CurriculumModule } from './types.ts';
export const regBusiness: CurriculumModule = {
  title: 'Business Law & Legal Responsibilities',
  area: 2,
  lessons: [
    {
      topic: 'contracts-agency',
      title: 'Contracts, Agency, Performance & Remedies',
      group: 'A-B',
      objectives: [
        'Identify contract formation and enforceability issues.',
        'Distinguish actual authority, apparent authority, and ratification.',
        'Apply breach, discharge, and remedy principles.',
      ],
      teaching: [
        'A contract generally requires an offer, acceptance, consideration, and parties with capacity, with a lawful purpose. The governing law matters: common law and the UCC rules for sales of goods differ in important respects. A writing may be required by the applicable statute of frauds, subject to exceptions. For UCC questions, identify whether the parties are merchants and apply the jurisdictional assumptions supplied.',
        'Actual authority comes from the principal’s manifestations to the agent. Apparent authority arises from the principal’s manifestations to a third party that reasonably lead it to believe the agent is authorized. An agent’s unsupported claim cannot create apparent authority alone. Ratification can bind the principal to a previously unauthorized act when its requirements, including appropriate knowledge and acceptance, are satisfied.',
        'Performance can discharge obligations, as can agreement or operation of law in appropriate circumstances. A material breach may excuse the other party’s remaining performance. Remedies aim to protect the legally recognized interest, often expectation damages, subject to causation, foreseeability, reasonable certainty, and mitigation. Specific performance is more likely when money is inadequate, such as unique property; it is not the routine remedy for every service contract.',
        'An agent owes duties such as loyalty and reasonable care to the principal. Contract liability depends on authority and whether the principal is disclosed; tort liability depends on facts such as the actor, employment relationship, and scope of employment. Do not assume that using the word contractor resolves every legal classification.',
      ],
      workedExample: {
        title: 'A purchasing agent and a principal’s conduct',
        facts:
          'A company repeatedly tells suppliers that its purchasing manager may order ordinary inventory. It privately limits the manager to $10,000, but never informs a supplier that reasonably relies on the company’s prior manifestations.',
        steps: [
          'Private instructions define actual authority between principal and agent.',
          'The supplier may rely on apparent authority created by the principal’s manifestations.',
          'Evaluate the full facts and applicable law rather than treating an undisclosed internal limit as automatically binding on the supplier.',
        ],
      },
      pitfalls: [
        'An agent cannot create apparent authority solely by claiming it.',
        'Contract formation and enforceability are distinct inquiries.',
        'Mitigation does not require unreasonable efforts or accepting every substitute.',
      ],
      questions: [
        q(
          'Apparent authority primarily arises from whose manifestations to a third party?',
          'The principal’s.',
          [
            'Only the agent’s unsupported claims.',
            'Only the third party’s hopes.',
            'Only a court clerk’s statements.',
          ],
          'The third party’s reasonable belief must be traceable to manifestations of the principal.',
          'remembering',
        ),
        q(
          'A contract for ordinary services is breached. Which remedy ordinarily seeks the benefit of the bargain?',
          'Expectation damages.',
          [
            'Automatic punitive damages for every breach.',
            'Automatic specific performance of personal services.',
            'No remedy if the promise was written.',
          ],
          'Expectation damages generally protect the bargain, subject to limitations such as mitigation and foreseeability.',
          'application',
        ),
        q(
          'A principal knowingly accepts the benefits of a previously unauthorized transaction under facts satisfying ratification requirements. What may result?',
          'The principal may become bound through ratification.',
          [
            'The transaction can never bind the principal.',
            'The agent becomes a judge.',
            'Every third party automatically loses all rights.',
          ],
          'Ratification can adopt an unauthorized act when its legal requirements are satisfied.',
          'application',
        ),
        q(
          'Which fact is most relevant to selecting UCC Article 2 rules instead of ordinary common-law contract rules?',
          'The transaction is a sale of goods.',
          [
            'The parties exchanged emails.',
            'One party is an accountant.',
            'The agreement has a page number.',
          ],
          'Article 2 addresses sales of goods; the subject of the transaction matters.',
          'remembering',
        ),
        q(
          'A nonbreaching party could reasonably avoid part of its loss but takes no action. Which principle may limit recovery?',
          'Mitigation of damages.',
          [
            'Automatic rescission of every contract.',
            'Apparent authority.',
            'A guarantee of punitive damages.',
          ],
          'Reasonable avoidable losses can limit recoverable contract damages.',
          'analysis',
        ),
        q(
          'An agent secretly diverts the principal’s business opportunity for personal benefit. Which duty is most directly implicated?',
          'Loyalty.',
          [
            'The customer’s tax withholding duty.',
            'Only the statute of frauds.',
            'No duty if the agent is paid.',
          ],
          'An agent’s duty of loyalty restricts undisclosed self-dealing and competing personal interests.',
          'application',
        ),
      ],
      simulation: {
        title: 'Contract and agency issue spotting',
        scenario:
          'Classify four independent business-law scenarios under the supplied ordinary legal principles.',
        exhibits: [
          {
            title: 'Scenarios',
            body: 'A: The principal directly instructs an agent to buy supplies. B: The principal publicly represents that an agent can place ordinary orders, and a supplier reasonably relies. C: The principal knowingly accepts an unauthorized agreement under circumstances satisfying ratification. D: A seller’s breach causes a $12,000 loss, but $3,000 could reasonably have been avoided.',
          },
          {
            title: 'Assumptions',
            body: 'Apply ordinary agency and expectation-damage principles. There are no special statutory remedies, exceptions, or additional losses.',
          },
        ],
        tasks: [
          {
            label: 'Authority in A',
            correct: 'Actual authority',
            options: [
              'Actual authority',
              'Only apparent authority from the agent',
              'No authority',
              'Ratification only',
            ],
            explanation: 'The principal directly authorized the agent.',
          },
          {
            label: 'Authority in B',
            correct: 'Apparent authority',
            options: [
              'Apparent authority',
              'An agent’s unilateral invention of authority',
              'No possible authority',
              'Only a tax agency',
            ],
            explanation: 'The principal’s manifestations created reasonable third-party reliance.',
          },
          {
            label: 'Doctrine in C',
            correct: 'Ratification',
            options: [
              'Ratification',
              'Automatic discharge in bankruptcy',
              'Novation in every case',
              'No possible adoption',
            ],
            explanation: 'Knowing adoption can bind the principal when requirements are met.',
          },
          {
            label: 'Recoverable loss after the stated mitigation adjustment',
            correct: 9000,
            distractors: [12000, 3000, 15000],
            explanation: '$12,000 − $3,000 reasonably avoidable loss = $9,000.',
          },
        ],
      },
    },
    {
      topic: 'secured-credit-bankruptcy',
      title: 'Secured Transactions, Creditors & Bankruptcy',
      group: 'C-D',
      objectives: [
        'Distinguish attachment, perfection, and priority.',
        'Apply ordinary debtor, creditor, and guarantor principles.',
        'Recognize the automatic stay and bankruptcy-discharge limitations.',
      ],
      teaching: [
        'A security interest’s attachment generally requires value, the debtor’s rights in collateral, and an appropriate security agreement or other legally sufficient condition. Perfection generally provides notice or the required legal step for protection against relevant third parties. A financing statement may perfect an attached interest but is not itself proof that every attachment requirement is met.',
        'Priority requires identifying the collateral, competing claims, filing and perfection dates, and applicable exceptions. The ordinary first-to-file-or-perfect rule for competing perfected interests has important exceptions, including qualifying purchase-money interests and special collateral rules. Apply the stated assumptions; do not conclude that every later lender necessarily loses.',
        'Bankruptcy involves a collective process, with different chapters and eligibility requirements. The automatic stay generally limits collection activity after a filing, subject to statutory exceptions and relief from the stay. Secured creditors’ collateral interests and unsecured creditors’ claims receive different treatment. Discharge does not eliminate every debt, lien, or obligation in all circumstances.',
        'Transfers before bankruptcy may be avoidable under preference or fraudulent-transfer rules when their elements are met. Timing alone does not establish every element. Guarantors can have contractual obligations and rights such as reimbursement or subrogation after payment, subject to the agreement and applicable law. Always distinguish the principal debtor’s liability from another party’s separate undertaking.',
      ],
      workedExample: {
        title: 'Ordinary priority with no exception',
        facts:
          'Lender A perfects a security interest in equipment on March 1. Lender B perfects a competing interest on April 1. Assume both interests attached, A filed first, and no special priority exception applies.',
        steps: [
          'Attachment makes the interests enforceable against the debtor under the stated facts.',
          'Compare relevant filing/perfection priority dates.',
          'Under the supplied ordinary rule and no-exception assumption, A has priority over B.',
        ],
      },
      pitfalls: [
        'Attachment and perfection serve different functions.',
        'Bankruptcy does not authorize every creditor to seize collateral immediately.',
        'Special priority rules must be considered before applying a general rule.',
      ],
      questions: [
        q(
          'Which concept generally makes a security interest enforceable against the debtor once its requirements are satisfied?',
          'Attachment.',
          ['Public advertising alone.', 'The auditor’s opinion.', 'Bankruptcy discharge.'],
          'Attachment concerns enforceability; perfection and priority address additional third-party consequences.',
          'remembering',
        ),
        q(
          'Why is a financing statement generally filed in a secured transaction?',
          'To satisfy an applicable perfection or notice requirement.',
          [
            'To guarantee the debtor will repay.',
            'To prove every tax return is correct.',
            'To discharge all unsecured debts.',
          ],
          'Filing can perfect a security interest but does not guarantee payment or replace all attachment requirements.',
          'application',
        ),
        q(
          'A bankruptcy petition triggers an applicable automatic stay. What should a creditor do before continuing collection?',
          'Evaluate the stay, exceptions, and any required relief.',
          [
            'Assume collection is always unrestricted.',
            'Destroy its loan agreement.',
            'Automatically seize all debtor assets.',
          ],
          'The stay restricts collection subject to applicable exceptions and court relief.',
          'application',
        ),
        q(
          'Under ordinary first-to-file-or-perfect assumptions with no exception, A files and perfects before B in the same collateral. Which result is expected?',
          'A ordinarily has priority.',
          [
            'B always has priority because it is later.',
            'Both interests are automatically void.',
            'Priority depends only on which lender charges more interest.',
          ],
          'The stipulated ordinary priority rule favors A’s earlier qualifying date.',
          'analysis',
        ),
        q(
          'Does bankruptcy discharge necessarily eliminate every debt and lien?',
          'No; exceptions and secured interests require separate analysis.',
          [
            'Yes, always.',
            'Yes, but only for creditors with written contracts.',
            'Only if the debtor owns inventory.',
          ],
          'Discharge has defined scope and exceptions and is not a universal cancellation of every interest.',
          'remembering',
        ),
        q(
          'A payment occurs shortly before bankruptcy. Is timing alone sufficient to prove an avoidable preference?',
          'No; the statutory elements and defenses must be evaluated.',
          [
            'Yes, every recent payment is automatically void.',
            'Yes, if the recipient is a bank.',
            'No recent payment can ever be avoided.',
          ],
          'Preference analysis involves more than timing, including the nature of the debt and statutory requirements.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'Creditor-rights analysis',
        scenario: 'Evaluate a secured-credit file and a subsequent bankruptcy event.',
        exhibits: [
          {
            title: 'Credit agreements',
            body: 'Both lenders gave value and obtained valid security agreements covering debtor-owned equipment. A filed and perfected on January 5; B filed and perfected on February 10. No priority exception applies.',
          },
          {
            title: 'Bankruptcy event',
            body: 'The debtor later files a petition that triggers an automatic stay. B proposes immediately seizing the equipment without evaluating relief or exceptions. A junior analyst states that discharge always removes every lien.',
          },
        ],
        tasks: [
          {
            label: 'Concept supported by value, debtor rights, and valid agreement',
            correct: 'Attachment',
            options: ['Attachment', 'Automatic discharge', 'Tax exemption', 'Audit assurance'],
            explanation: 'These are core attachment elements under the assumed rules.',
          },
          {
            label: 'Ordinary priority under the given facts',
            correct: 'Lender A',
            options: [
              'Lender A',
              'Lender B',
              'Neither interest can attach',
              'Priority is decided only by loan size',
            ],
            explanation: 'A has the earlier qualifying filing/perfection date.',
          },
          {
            label: 'Response to B’s proposed seizure',
            correct: 'Evaluate the stay and obtain any necessary relief',
            options: [
              'Evaluate the stay and obtain any necessary relief',
              'Seize automatically',
              'Ignore bankruptcy filings',
              'Destroy the financing statement',
            ],
            explanation: 'The stay constrains collection activity.',
          },
          {
            label: 'Correct the analyst’s statement',
            correct: 'Discharge and lien treatment require separate statutory analysis',
            options: [
              'Discharge and lien treatment require separate statutory analysis',
              'Every lien always disappears',
              'No debt can ever be discharged',
              'Only interest rates matter',
            ],
            explanation:
              'Bankruptcy protections and exceptions are not universal cancellation rules.',
          },
        ],
      },
    },
    {
      topic: 'business-organizations-regulation',
      title: 'Business Entities, Owner Duties & Federal Regulation',
      group: 'D-E',
      objectives: [
        'Compare legal liability and management characteristics of common entities.',
        'Evaluate worker classification and employment obligations.',
        'Recognize anti-bribery and other business compliance issues.',
      ],
      teaching: [
        'Legal form and tax classification are related but distinct. Corporations and LLCs generally provide limited liability under applicable law, but an owner may remain liable for personal misconduct, guarantees, or circumstances supporting disregard of the entity. General partners ordinarily face personal liability for partnership obligations. Limited-partner and LLC protections depend on the governing statute and facts.',
        'Entity formation, operation, and termination involve filings, agreements, authority, fiduciary responsibilities, and creditor protection. Directors and managers may owe duties of care and loyalty. A tax election does not necessarily change the entity’s underlying state-law form. Evaluate who can bind the entity and whether a transaction involves a conflict or self-dealing.',
        'Employee versus independent-contractor classification depends on the applicable legal test and facts, including control and the relationship, not simply the contract’s label. Classification affects withholding, employment taxes, and other obligations. Federal laws can also address qualified health plans and employer responsibilities. Apply the law and thresholds relevant to the stated facts and period.',
        'The Foreign Corrupt Practices Act addresses prohibited bribery involving foreign officials and includes accounting-related provisions applicable to covered entities. Improper payments do not become permissible merely because an intermediary makes them. Examine authorization, knowledge, recordkeeping, and the actual purpose of payments; do not treat the existence of a local custom as universal legal permission.',
      ],
      workedExample: {
        title: 'Legal form is not a complete answer',
        facts:
          'An LLC owner personally guarantees a bank loan, calls all workers contractors, and authorizes a consultant to make an improper payment to a foreign official.',
        steps: [
          'Limited liability does not erase the owner’s personal guarantee.',
          'Evaluate worker status using the applicable facts and legal test.',
          'Using an intermediary does not automatically remove anti-bribery exposure.',
        ],
      },
      pitfalls: [
        'A tax classification is not necessarily the state-law entity form.',
        'A contractor label is not conclusive.',
        'Limited liability does not excuse personal wrongdoing or guarantees.',
      ],
      questions: [
        q(
          'An LLC member personally guarantees an LLC loan. What is the ordinary implication?',
          'The guarantee may create a separate personal obligation.',
          [
            'Limited liability automatically nullifies every guarantee.',
            'The lender becomes an LLC member.',
            'The loan becomes tax-free income.',
          ],
          'An owner can voluntarily undertake personal liability despite ordinary entity protection.',
          'application',
        ),
        q(
          'Which fact alone is insufficient to establish independent-contractor status?',
          'The contract labels the worker an independent contractor.',
          [
            'Relevant behavioral-control facts.',
            'Relevant financial-control facts.',
            'The actual working relationship.',
          ],
          'Legal classification depends on the governing test and facts rather than a label alone.',
          'analysis',
        ),
        q(
          'Which entity participant ordinarily faces personal liability for general partnership obligations?',
          'A general partner.',
          [
            'Every shareholder in every corporation automatically.',
            'Every customer of the partnership.',
            'Every external auditor automatically.',
          ],
          'General-partner liability is a core legal characteristic, subject to applicable entity variants and law.',
          'remembering',
        ),
        q(
          'Does an S corporation election necessarily create a new state-law legal form?',
          'No; it is a federal tax election subject to eligibility rules.',
          [
            'Yes, it always converts the entity into a general partnership.',
            'Yes, it eliminates all corporate law.',
            'Only if the corporation has inventory.',
          ],
          'Tax elections and state-law form are distinct concepts.',
          'remembering',
        ),
        q(
          'A company uses an intermediary for a prohibited foreign-official payment. Does that alone eliminate anti-bribery concerns?',
          'No; the actual facts, knowledge, and legal requirements matter.',
          [
            'Yes, indirect payments are always permitted.',
            'Yes, if described as consulting.',
            'Only the intermediary’s invoice font matters.',
          ],
          'An intermediary or label does not automatically avoid applicable anti-bribery prohibitions.',
          'analysis',
        ),
        q(
          'A director diverts an entity opportunity for undisclosed personal gain. Which issue is most direct?',
          'A potential breach of loyalty.',
          [
            'An automatic tax refund.',
            'Only an inventory cutoff issue.',
            'No issue if the director attended meetings.',
          ],
          'Undisclosed self-dealing can violate fiduciary loyalty duties.',
          'application',
        ),
      ],
      simulation: {
        title: 'Business compliance review',
        scenario: 'Identify the legal issue requiring attention in each independent fact pattern.',
        exhibits: [
          {
            title: 'Business facts',
            body: 'A member signs a personal guarantee. A business labels workers contractors while controlling their daily work. A director secretly takes an entity opportunity. A consultant is paid to pass money improperly to a foreign official.',
          },
          {
            title: 'Instructions',
            body: 'Identify the issue rather than assuming a legal label determines the outcome. No special statutory exception is stated.',
          },
        ],
        tasks: [
          {
            label: 'Guarantee issue',
            correct: 'Separate personal contractual liability',
            options: [
              'Separate personal contractual liability',
              'Automatic cancellation by LLC status',
              'No enforceable obligation ever',
              'Only sales-tax liability',
            ],
            explanation: 'The guarantee can bind the owner personally.',
          },
          {
            label: 'Worker issue',
            correct: 'Classification under the applicable facts and legal test',
            options: [
              'Classification under the applicable facts and legal test',
              'The label always controls',
              'No withholding rules can apply',
              'Only the worker’s preference matters',
            ],
            explanation: 'Classification requires substantive analysis.',
          },
          {
            label: 'Director issue',
            correct: 'Potential breach of loyalty',
            options: [
              'Potential breach of loyalty',
              'Automatic approval',
              'Only clerical error',
              'No fiduciary duty can apply',
            ],
            explanation: 'Secret personal diversion creates a loyalty concern.',
          },
          {
            label: 'Payment issue',
            correct: 'Potential indirect prohibited bribery',
            options: [
              'Potential indirect prohibited bribery',
              'Automatic permission through intermediaries',
              'No recordkeeping implications',
              'A required tax election',
            ],
            explanation: 'Intermediary use does not make an improper payment lawful.',
          },
        ],
      },
    },
  ],
};
