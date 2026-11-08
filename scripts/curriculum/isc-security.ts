import { q, type CurriculumModule } from './types.ts';
export const iscSecurity: CurriculumModule = {
  title: 'Security, Confidentiality & Privacy',
  area: 2,
  lessons: [
    {
      topic: 'identity-access',
      title: 'Identity, Authentication, Authorization & Access Reviews',
      group: 'B-C',
      objectives: [
        'Distinguish identification, authentication, and authorization.',
        'Apply least privilege and joiner/mover/leaver controls.',
        'Evaluate MFA, privileged access, and access-review evidence.',
      ],
      teaching: [
        'Identification claims an identity; authentication establishes confidence in that claim; authorization determines permitted actions. Strong authentication does not make every permission appropriate. Least privilege and need to know limit access to what a role requires. Segregation of duties addresses incompatible capabilities rather than simply counting user accounts.',
        'Multifactor authentication combines independent factor categories, such as something known and something possessed. Two passwords are not two distinct factors. Protect enrollment, recovery, sessions, and privileged credentials as well as the login form. Shared accounts weaken accountability because actions cannot readily be attributed to individuals.',
        'Access administration should cover onboarding, role changes, termination, and periodic review. Reconcile access to authoritative personnel and role information. A signed access-review checklist is weak evidence if reviewers did not receive complete entitlements or investigate inappropriate privileges. Timely removal of terminated users and independent approval of privileged access are important controls.',
      ],
      workedExample: {
        title: 'A transferred employee',
        facts:
          'An employee moves from purchasing to accounts payable but retains vendor creation and payment approval privileges.',
        steps: [
          'Evaluate the combined privileges, not just the new role.',
          'Remove unnecessary old access and address incompatible duties.',
          'Document authorization, implementation, and review of the changed access.',
        ],
      },
      pitfalls: [
        'Authentication is not authorization.',
        'Two knowledge factors are not necessarily MFA.',
        'A review signature does not prove the reviewed population was complete.',
      ],
      questions: [
        q(
          'Which function determines what an authenticated user may do?',
          'Authorization.',
          ['Identification alone.', 'Only encryption.', 'Only backup scheduling.'],
          'Authorization governs permitted actions.',
          'remembering',
        ),
        q(
          'Which combination represents distinct authentication-factor categories?',
          'A password and a possession-based security token.',
          ['Two passwords.', 'A password and a second memorized phrase only.', 'Two usernames.'],
          'Knowledge and possession are separate factor categories.',
          'remembering',
        ),
        q(
          'What does least privilege mean?',
          'Grant only the access needed for authorized responsibilities.',
          [
            'Give every employee administrator access.',
            'Never review access again.',
            'Use one shared account for all staff.',
          ],
          'Least privilege limits unnecessary permissions.',
          'remembering',
        ),
        q(
          'Why are shared privileged accounts a concern?',
          'They weaken individual accountability and access control.',
          [
            'They guarantee stronger audit trails.',
            'They eliminate authorization requirements.',
            'They prevent misuse automatically.',
          ],
          'Shared credentials make actions harder to attribute and govern.',
          'remembering',
        ),
        q(
          'An employee changes roles but retains incompatible old privileges. What should occur?',
          'Reevaluate and remove unnecessary or conflicting access.',
          [
            'Keep all privileges permanently.',
            'Assume a new job title changes system permissions automatically.',
            'Disable logging to reduce complexity.',
          ],
          'Mover controls must update actual entitlements.',
          'analysis',
        ),
        q(
          'A quarterly review excludes administrator accounts. What is the control concern?',
          'The reviewed access population is incomplete.',
          [
            'Administrator access never needs review.',
            'Only the report title matters.',
            'The review is complete because most users were included.',
          ],
          'Privileged accounts are important to a complete access review.',
          'application',
        ),
      ],
      simulation: {
        title: 'Access recertification review',
        scenario: 'Evaluate four findings from a user-access review.',
        exhibits: [
          {
            title: 'User listing',
            body: 'A terminated user remains active. A transferred employee retains vendor creation and payment approval. All administrators share one account. The review listing excludes service accounts.',
          },
          {
            title: 'Objective',
            body: 'Access should be authorized, appropriate to current duties, attributable, and periodically reviewed using a complete population.',
          },
        ],
        tasks: [
          {
            label: 'Control needed for the terminated user',
            correct: 'Timely deprovisioning',
            options: [
              'Timely deprovisioning',
              'Permanent retention of login rights',
              'A new shared password',
              'No action',
            ],
            explanation: 'Leaver controls should remove unnecessary access promptly.',
          },
          {
            label: 'Concern with the transferred employee',
            correct: 'Incompatible retained privileges',
            options: [
              'Incompatible retained privileges',
              'Guaranteed segregation of duties',
              'Only a job-title formatting issue',
              'No authorization risk',
            ],
            explanation: 'Role changes must address actual combined entitlements.',
          },
          {
            label: 'Concern with the shared administrator account',
            correct: 'Weak individual accountability',
            options: [
              'Weak individual accountability',
              'Automatic least privilege',
              'Perfect attribution',
              'No need for logs',
            ],
            explanation: 'Shared credentials obscure who performed an action.',
          },
          {
            label: 'Concern with omitted service accounts',
            correct: 'Incomplete review population',
            options: [
              'Incomplete review population',
              'All nonhuman accounts are risk-free',
              'A guaranteed effective review',
              'Only backup timing',
            ],
            explanation: 'Relevant service identities also require governance.',
          },
        ],
      },
    },
    {
      topic: 'security-threats-response',
      title: 'Threats, Vulnerabilities, Monitoring & Incident Response',
      group: 'B-C',
      objectives: [
        'Distinguish threats, vulnerabilities, risks, and incidents.',
        'Evaluate preventive, detective, and corrective controls.',
        'Apply a controlled incident-response process.',
      ],
      teaching: [
        'A threat is a potential adverse actor or event; a vulnerability is a weakness; risk considers possible harm in context; an incident is an event requiring response under the organization’s criteria. Prioritize remediation using exposure, likelihood, impact, exploitability, and criticality rather than counting findings alone.',
        'Preventive controls reduce the chance of an unwanted event, detective controls identify events, and corrective controls support response and recovery. Phishing-resistant authentication, least privilege, patching, monitoring, and tested recovery can provide complementary layers. No single control guarantees security. Logs need appropriate collection, protection, review, time synchronization, and escalation.',
        'Incident response requires preparation, detection and analysis, containment, eradication, recovery, and lessons learned under the organization’s chosen framework. Preserve relevant evidence, coordinate business and technical stakeholders, and evaluate notification duties. A hurried recovery that destroys evidence or restores the same weakness may create additional problems.',
      ],
      workedExample: {
        title: 'Suspicious access detected',
        facts:
          'Monitoring identifies unusual privileged access and unexpected data transfers from a critical system.',
        steps: [
          'Validate and triage the alert while preserving relevant evidence.',
          'Contain the incident using the approved process and assess affected systems and data.',
          'Remediate causes, recover safely, evaluate notification, and improve controls based on lessons learned.',
        ],
      },
      pitfalls: [
        'A vulnerability finding is not proof that exploitation occurred.',
        'A log file without review and escalation is not a complete monitoring control.',
        'Recovery should address causes rather than simply restoring vulnerable configurations.',
      ],
      questions: [
        q(
          'What is a vulnerability?',
          'A weakness that could be exploited or contribute to an adverse event.',
          [
            'Every confirmed security incident.',
            'A guarantee of loss.',
            'Only an authorized business process.',
          ],
          'A vulnerability is a weakness, not necessarily an incident or realized loss.',
          'remembering',
        ),
        q(
          'Which is primarily a detective control?',
          'Monitoring and investigating anomalous access.',
          [
            'Only prohibiting access in advance.',
            'Only restoring backups after failure.',
            'Only assigning a job title.',
          ],
          'Detection identifies potentially adverse events for investigation.',
          'remembering',
        ),
        q(
          'Which activity belongs in incident response?',
          'Containment and analysis while preserving relevant evidence.',
          [
            'Automatically deleting all logs.',
            'Ignoring business stakeholders.',
            'Restoring every system without checking the cause.',
          ],
          'Response combines analysis, containment, recovery, and evidence considerations.',
          'remembering',
        ),
        q(
          'What is a key purpose of lessons learned after an incident?',
          'Improve controls and response processes.',
          [
            'Prove every future incident is impossible.',
            'Eliminate documentation.',
            'Avoid all remediation.',
          ],
          'Post-incident review turns findings into improvements.',
          'remembering',
        ),
        q(
          'A critical internet-facing vulnerability and a low-impact isolated finding are discovered. What should guide priority?',
          'Risk, exposure, impact, and relevant remediation factors.',
          [
            'Only the alphabetical order of system names.',
            'Only the number of screenshots.',
            'Always fix the easiest issue first regardless of risk.',
          ],
          'Risk-based prioritization considers the actual exposure and consequences.',
          'analysis',
        ),
        q(
          'A system produces extensive logs but no one reviews or investigates alerts. What is the concern?',
          'Detection and escalation may be ineffective despite data collection.',
          [
            'Logging volume alone proves control effectiveness.',
            'No monitoring is needed if logs exist.',
            'The records automatically prevent incidents.',
          ],
          'Collection alone is not a complete detective control.',
          'application',
        ),
      ],
      simulation: {
        title: 'Incident-response decision log',
        scenario: 'Select appropriate actions during a suspected security incident.',
        exhibits: [
          {
            title: 'Observed event',
            body: 'A monitoring alert shows unusual privileged access to confidential records. The team has not confirmed the scope. A technician proposes deleting logs and immediately rebuilding every affected system.',
          },
          {
            title: 'Response objectives',
            body: 'Protect the business, preserve useful evidence, determine scope, contain the event, remediate causes, and recover through the approved process.',
          },
        ],
        tasks: [
          {
            label: 'First response to the alert',
            correct: 'Validate and triage while preserving relevant evidence',
            options: [
              'Validate and triage while preserving relevant evidence',
              'Assume the alert is always false',
              'Publish confidential records',
              'Ignore the alert until month-end',
            ],
            explanation:
              'Initial analysis establishes the incident’s nature and supports an appropriate response.',
          },
          {
            label: 'Response to proposed log deletion',
            correct: 'Preserve relevant evidence under the response plan',
            options: [
              'Preserve relevant evidence under the response plan',
              'Delete all records immediately',
              'Disable all accountability',
              'Treat logs as always irrelevant',
            ],
            explanation: 'Uncontrolled deletion can impede investigation and legal obligations.',
          },
          {
            label: 'Objective of containment',
            correct: 'Limit further harm while coordinating the response',
            options: [
              'Limit further harm while coordinating the response',
              'Guarantee no prior data was affected',
              'Replace all analysis',
              'Eliminate recovery planning',
            ],
            explanation: 'Containment limits ongoing impact without replacing investigation.',
          },
          {
            label: 'Post-recovery action',
            correct: 'Review causes and improve controls and procedures',
            options: [
              'Review causes and improve controls and procedures',
              'Assume rebuilding prevents every recurrence',
              'Discard the incident record',
              'Stop monitoring permanently',
            ],
            explanation: 'Lessons learned support sustained improvement.',
          },
        ],
      },
    },
    {
      topic: 'confidentiality-encryption',
      title: 'Confidentiality, Encryption, Classification & Key Management',
      group: 'B-C',
      objectives: [
        'Distinguish encryption, hashing, and access control.',
        'Connect data classification to protection requirements.',
        'Evaluate key management and data-disposal controls.',
      ],
      teaching: [
        'Confidentiality protects information designated as confidential against unauthorized access or disclosure. Classification identifies sensitivity and required handling. Access restrictions, encryption, monitoring, contractual controls, and secure disposal can work together. Encryption alone does not prevent an authorized but overprivileged user from extracting plaintext.',
        'Encryption is reversible with appropriate key material; hashing produces a one-way digest used for purposes such as integrity checks and password verification. Passwords should use an appropriate salted, computationally expensive password-hashing scheme rather than ordinary reversible storage. Hashing is not a substitute for encryption when the application must recover confidential information.',
        'Key management covers generation, storage, access, rotation, backup, revocation, and destruction. Storing encryption keys beside encrypted data with identical access can undermine protection. Protect data in transit and at rest as needed, and consider how backups and third parties handle both data and keys. Disposal should follow retention requirements and make the data appropriately unrecoverable.',
      ],
      workedExample: {
        title: 'Encrypted files with exposed keys',
        facts:
          'Sensitive exports are encrypted, but every user who can download the files can also download the decryption key.',
        steps: [
          'The encryption does not provide meaningful separation from those users.',
          'Restrict and monitor key access and evaluate the actual authorization model.',
          'Apply appropriate handling, retention, and disposal to exports and backups as well.',
        ],
      },
      pitfalls: [
        'Encryption is not the same as hashing.',
        'Key access can undermine otherwise sound encryption.',
        'Confidentiality classification should influence the entire data lifecycle.',
      ],
      questions: [
        q(
          'Which transformation is designed to be reversible with a key?',
          'Encryption.',
          ['A one-way cryptographic hash.', 'A file name.', 'A checksum label without a process.'],
          'Encryption protects recoverable information using keys.',
          'remembering',
        ),
        q(
          'Which approach is appropriate for password verification storage?',
          'A suitable salted password-hashing scheme.',
          [
            'Plaintext passwords.',
            'A shared reversible key stored with every password.',
            'Only the user’s name.',
          ],
          'Password hashing is designed for verification without storing recoverable plaintext passwords.',
          'remembering',
        ),
        q(
          'What is a purpose of data classification?',
          'Determine handling and protection requirements based on sensitivity.',
          [
            'Guarantee no employee can ever misuse data.',
            'Replace every access control.',
            'Decide only the font size.',
          ],
          'Classification guides protection and lifecycle controls.',
          'remembering',
        ),
        q(
          'Which activity belongs to key management?',
          'Controlled key generation, access, rotation, and revocation.',
          [
            'Only naming encrypted files.',
            'Only changing folder colors.',
            'Only printing passwords.',
          ],
          'Keys need lifecycle governance and protection.',
          'remembering',
        ),
        q(
          'Encrypted confidential data and its decryption key are available to the same unauthorized users. What is the concern?',
          'Key exposure undermines the intended confidentiality protection.',
          [
            'Encryption guarantees protection regardless of key access.',
            'The key is irrelevant.',
            'Hashing the file name solves every issue.',
          ],
          'Users with the key can recover plaintext.',
          'analysis',
        ),
        q(
          'A confidential backup reaches the end of its required retention period. What should be evaluated?',
          'Authorized secure disposal consistent with policy and obligations.',
          [
            'Permanent retention of every copy without review.',
            'Public posting before deletion.',
            'Ignoring all backup copies.',
          ],
          'Retention and secure disposal should cover backups as well as active data.',
          'application',
        ),
      ],
      simulation: {
        title: 'Confidential-data protection review',
        scenario: 'Evaluate design weaknesses in a data-export service.',
        exhibits: [
          {
            title: 'Service design',
            body: 'Confidential records are encrypted at rest. All support users can retrieve both ciphertext and keys. Passwords are stored in plaintext. Backup copies are never included in retention reviews.',
          },
          {
            title: 'Protection goals',
            body: 'Only authorized users should recover confidential data, credentials should be protected appropriately, and retention/disposal should cover all relevant copies.',
          },
        ],
        tasks: [
          {
            label: 'Main key-management improvement',
            correct: 'Restrict and monitor key access separately as appropriate',
            options: [
              'Restrict and monitor key access separately as appropriate',
              'Give every user all keys',
              'Publish the keys',
              'Ignore recovery permissions',
            ],
            explanation: 'Control over key material is essential to encryption effectiveness.',
          },
          {
            label: 'Password-storage improvement',
            correct: 'Use a suitable salted password-hashing scheme',
            options: [
              'Use a suitable salted password-hashing scheme',
              'Keep plaintext for convenience',
              'Email all passwords to support',
              'Use the username as the password',
            ],
            explanation: 'Password verification should not require plaintext storage.',
          },
          {
            label: 'Retention improvement',
            correct: 'Include backups in authorized retention and disposal controls',
            options: [
              'Include backups in authorized retention and disposal controls',
              'Ignore all copies after export',
              'Retain everything forever automatically',
              'Delete without checking obligations',
            ],
            explanation: 'Lifecycle controls need to cover relevant copies and obligations.',
          },
          {
            label: 'Effect of broad plaintext export privileges',
            correct: 'Access control still matters even when storage is encrypted',
            options: [
              'Access control still matters even when storage is encrypted',
              'Encryption eliminates authorization needs',
              'All support users are automatically entitled',
              'No monitoring is relevant',
            ],
            explanation:
              'Authorized decryption pathways can expose data if permissions are excessive.',
          },
        ],
      },
    },
    {
      topic: 'privacy-regulation',
      title: 'Privacy, HIPAA, GDPR & Payment-Card Requirements',
      group: 'A',
      objectives: [
        'Distinguish confidentiality and privacy.',
        'Identify the scope of major privacy and payment-data frameworks.',
        'Evaluate purpose, minimization, retention, and third-party processing.',
      ],
      teaching: [
        'Privacy concerns how personal information is collected, used, retained, disclosed, and disposed of in accordance with commitments and applicable requirements. Confidentiality can apply to many forms of sensitive information, including nonpersonal business information. Personal data can raise privacy obligations even when it is not treated as a trade secret.',
        'HIPAA applies to covered entities and relevant business associates under its rules; it is not a universal law governing every piece of health-related information held by every organization. GDPR has its own territorial and material scope and concepts such as lawful basis, controller and processor responsibilities, data-subject rights, and accountability. Determine which requirements actually apply rather than selecting a familiar acronym.',
        'PCI DSS is an industry security standard for covered payment-card data environments and activities, not a universal privacy statute. Contracts, laws, and standards can impose overlapping obligations. Map the data, purpose, recipients, geography, retention, and processing relationships, then evaluate appropriate controls. Collecting more personal information than needed can increase risk without supporting the stated purpose.',
      ],
      workedExample: {
        title: 'Data collected without a defined need',
        facts:
          'A service collects customers’ birth dates and identification documents even though its stated function does not require them, and it sends the data to a processor with no documented terms.',
        steps: [
          'Assess applicable privacy requirements and the purpose for collection.',
          'Evaluate data minimization, notice, lawful basis where relevant, and processor obligations.',
          'Set appropriate access, retention, and deletion controls.',
        ],
      },
      pitfalls: [
        'Not every health-related record is automatically governed by HIPAA in every context.',
        'PCI DSS and privacy laws are not interchangeable.',
        'A vendor contract should reflect actual processing responsibilities.',
      ],
      questions: [
        q(
          'Which concept focuses on the collection, use, retention, and disclosure of personal information?',
          'Privacy.',
          [
            'Only physical inventory valuation.',
            'Only common-stock ownership.',
            'Only audit sampling.',
          ],
          'Privacy addresses the personal-information lifecycle and applicable commitments.',
          'remembering',
        ),
        q(
          'HIPAA scope generally requires evaluating which relationship?',
          'Covered-entity or business-associate status and applicable activities.',
          [
            'Whether any employee once visited a doctor.',
            'Whether the company uses a spreadsheet.',
            'Whether a website contains a health word.',
          ],
          'HIPAA has defined scope and does not automatically cover every health-related fact everywhere.',
          'remembering',
        ),
        q(
          'What is PCI DSS?',
          'A payment-card data security standard with a defined scope.',
          [
            'A universal substitute for every privacy law.',
            'A guarantee of no breaches.',
            'A financial-statement reporting framework.',
          ],
          'PCI DSS addresses payment-card data security; other obligations can also apply.',
          'remembering',
        ),
        q(
          'Which privacy principle limits collection to information needed for the stated purpose under applicable requirements?',
          'Data minimization.',
          [
            'Unlimited accumulation.',
            'Automatic public disclosure.',
            'Unrestricted secondary use.',
          ],
          'Minimization reduces unnecessary personal-data processing.',
          'remembering',
        ),
        q(
          'A company sends personal data to a processor without defining responsibilities or safeguards. What is appropriate?',
          'Evaluate applicable processor obligations and establish suitable terms and controls.',
          [
            'Assume outsourcing removes all duties.',
            'Ignore where data is processed.',
            'Treat a vendor logo as sufficient evidence.',
          ],
          'Third-party processing requires governance under applicable obligations.',
          'analysis',
        ),
        q(
          'Why map personal-data flows before assessing privacy controls?',
          'To understand collection, uses, recipients, locations, and retention.',
          [
            'To avoid identifying obligations.',
            'To guarantee legal compliance automatically.',
            'To replace every user notice.',
          ],
          'A data map supports scope and control evaluation.',
          'application',
        ),
      ],
      simulation: {
        title: 'Privacy-control scoping',
        scenario:
          'Identify the appropriate scope and control considerations for a new customer platform.',
        exhibits: [
          {
            title: 'Platform facts',
            body: 'The company collects personal information beyond the stated service need, uses an external processor, stores payment-card data, and assumes HIPAA applies solely because a form has a health-related field.',
          },
          {
            title: 'Assessment objective',
            body: 'Determine applicable requirements from actual activities and relationships, and evaluate data handling across its lifecycle.',
          },
        ],
        tasks: [
          {
            label: 'Control concern with unnecessary collection',
            correct: 'Data minimization and purpose limitation',
            options: [
              'Data minimization and purpose limitation',
              'Automatic audit assurance',
              'Only server purchase cost',
              'No privacy concern',
            ],
            explanation:
              'Unnecessary collection may exceed the legitimate purpose and increase risk.',
          },
          {
            label: 'Scope to evaluate for payment-card data',
            correct: 'Applicable PCI DSS requirements and other obligations',
            options: [
              'Applicable PCI DSS requirements and other obligations',
              'Only a stock-exchange rule',
              'No standards can apply',
              'PCI automatically replaces all privacy law',
            ],
            explanation:
              'Card-data security has defined requirements that can coexist with other duties.',
          },
          {
            label: 'HIPAA scoping approach',
            correct: 'Evaluate covered-entity, business-associate, and activity facts',
            options: [
              'Evaluate covered-entity, business-associate, and activity facts',
              'Assume any health word establishes scope',
              'Assume HIPAA never applies',
              'Use only the server location',
            ],
            explanation: 'Scope depends on the legal relationships and activities.',
          },
          {
            label: 'Third-party processing response',
            correct: 'Document responsibilities, safeguards, and oversight',
            options: [
              'Document responsibilities, safeguards, and oversight',
              'Assume the vendor assumes all liability',
              'Ignore contracts',
              'Permit every secondary use automatically',
            ],
            explanation: 'Processor governance is part of the privacy-control system.',
          },
        ],
      },
    },
    {
      topic: 'security-frameworks-controls',
      title: 'Security Frameworks, Risk Assessment & Control Evaluation',
      group: 'A-B-C',
      objectives: [
        'Recognize framework purposes and components.',
        'Evaluate whether controls address identified risks.',
        'Distinguish design suitability from operating effectiveness.',
      ],
      teaching: [
        'Frameworks organize objectives, outcomes, and risk-management practices. NIST CSF 2.0 uses Govern, Identify, Protect, Detect, Respond, and Recover functions. Its Core, Tiers, and Organizational Profiles serve different purposes. Framework alignment helps structure a program but is not proof that every control operates effectively.',
        'A risk assessment considers assets, threats, vulnerabilities, likelihood, impact, existing controls, and residual risk. A control should address the specific risk and operate with appropriate precision, frequency, responsibility, and evidence. Physical safeguards, environmental protection, logical controls, vendor controls, and monitoring may complement one another.',
        'Design suitability asks whether a control, if performed as described, can address the objective. Implementation asks whether it exists in practice. Operating effectiveness asks whether it worked as intended over the relevant period. Inspect evidence, select a relevant population, investigate exceptions, and evaluate compensating controls rather than equating a written policy with operation.',
      ],
      workedExample: {
        title: 'A policy without operating evidence',
        facts:
          'A policy requires monthly review of privileged access, but the reviewer receives only ordinary-user accounts and no records of follow-up exist.',
        steps: [
          'The population does not support the intended privileged-access objective.',
          'The policy’s existence does not establish operating effectiveness.',
          'Redesign the population and evidence requirements and test actual reviews.',
        ],
      },
      pitfalls: [
        'Framework mapping is not a certificate of effective operation.',
        'A control must address the actual risk, not a loosely related topic.',
        'A signed policy is not evidence of performance throughout a period.',
      ],
      questions: [
        q(
          'Which function is explicitly part of NIST CSF 2.0?',
          'Govern.',
          ['Only Invoice.', 'Only Depreciate.', 'Only Consolidate.'],
          'Govern is one of the six CSF 2.0 functions.',
          'remembering',
        ),
        q(
          'What is residual risk?',
          'Risk remaining after considering the relevant controls or responses.',
          [
            'Risk before every control in all cases.',
            'A guarantee of no loss.',
            'Only the number of open tickets.',
          ],
          'Residual risk reflects the effect of risk responses and controls.',
          'remembering',
        ),
        q(
          'What does operating effectiveness address?',
          'Whether a control worked as intended over the relevant period.',
          [
            'Only whether a policy was written.',
            'Only whether a control name sounds suitable.',
            'Only the cost of implementation.',
          ],
          'Operation requires evidence of actual performance.',
          'remembering',
        ),
        q(
          'What does design suitability ask?',
          'Whether the described control can address its intended objective.',
          [
            'Whether every future incident is impossible.',
            'Whether the entity is profitable.',
            'Whether the policy has a signature alone.',
          ],
          'Design links control activities to objectives and risks.',
          'remembering',
        ),
        q(
          'An access-review control omits the very privileged accounts it is meant to review. What is the issue?',
          'The control population does not support the objective.',
          [
            'The review is effective because it is monthly.',
            'Only document retention matters.',
            'All omitted accounts are automatically low risk.',
          ],
          'Frequency cannot cure a population that misses the relevant risk.',
          'analysis',
        ),
        q(
          'What should an evaluator do with a control exception?',
          'Investigate its cause, extent, significance, and any relevant compensating controls.',
          [
            'Ignore it if most samples passed.',
            'Automatically assume every system failed.',
            'Delete it from the sample.',
          ],
          'Exceptions require contextual evaluation rather than automatic dismissal or overgeneralization.',
          'application',
        ),
      ],
      simulation: {
        title: 'Control design and effectiveness review',
        scenario: 'Evaluate an organization’s security-control claims.',
        exhibits: [
          {
            title: 'Claims',
            body: 'Management maps policies to a framework and calls that proof of effectiveness. A monthly privileged-access review excludes administrators. A detective alert has no assigned responder. A sample exception is deleted because most items passed.',
          },
          {
            title: 'Evaluation approach',
            body: 'Connect control design and actual operation to specific risks, objectives, evidence, and exception follow-up.',
          },
        ],
        tasks: [
          {
            label: 'Framework-mapping conclusion',
            correct: 'Mapping alone does not prove operating effectiveness',
            options: [
              'Mapping alone does not prove operating effectiveness',
              'Mapping guarantees effective operation',
              'Policies eliminate all incidents',
              'No testing is ever needed',
            ],
            explanation: 'Framework alignment is an organizing step, not operating evidence.',
          },
          {
            label: 'Access-review design concern',
            correct: 'Incomplete relevant population',
            options: [
              'Incomplete relevant population',
              'Excessively complete review',
              'Automatic least privilege',
              'No issue if done monthly',
            ],
            explanation: 'Administrators are central to the privileged-access objective.',
          },
          {
            label: 'Alert-response weakness',
            correct: 'No defined investigation and escalation responsibility',
            options: [
              'No defined investigation and escalation responsibility',
              'Guaranteed timely response',
              'Only a storage-capacity issue',
              'No risk because an alert exists',
            ],
            explanation: 'Detection needs an actionable response process.',
          },
          {
            label: 'Appropriate exception treatment',
            correct: 'Investigate and evaluate the exception',
            options: [
              'Investigate and evaluate the exception',
              'Delete it',
              'Assume majority success resolves every concern',
              'Hide it from reviewers',
            ],
            explanation: 'Exceptions must remain part of the evidence evaluation.',
          },
        ],
      },
    },
  ],
};
