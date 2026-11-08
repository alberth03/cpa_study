import { q, type CurriculumModule } from './types.ts';
export const iscSystems: CurriculumModule = {
  title: 'Information Systems & Data Management',
  area: 1,
  lessons: [
    {
      topic: 'it-infrastructure-cloud',
      title: 'IT Architecture, Cloud Models & Shared Responsibilities',
      group: 'A.1',
      objectives: [
        'Distinguish infrastructure components and cloud service models.',
        'Identify responsibilities retained by the customer.',
        'Evaluate architecture-related risks and evidence.',
      ],
      teaching: [
        'An information system combines applications, operating systems, compute, networks, storage, data, people, and procedures. Understanding architecture means tracing where information originates, how it moves, who can change it, and which dependencies support reporting. A network diagram alone is incomplete if it omits a critical interface or outsourced service.',
        'Infrastructure as a service generally gives the customer more responsibility for operating systems and applications than platform as a service; software as a service delivers a managed application. Responsibilities vary by agreement and service. The customer still needs appropriate identity configuration, data governance, vendor oversight, and controls over its own use of the service.',
        'Public, private, and hybrid deployment models describe where and how services are provided, not a guarantee of security. Evaluate contractual commitments, data location, access, resilience, monitoring, exit options, and assurance reports. Outsourcing changes how controls are performed; it does not remove the user entity’s accountability.',
      ],
      workedExample: {
        title: 'A payroll SaaS responsibility',
        facts:
          'A provider runs the payroll application, but the customer grants user access and approves payroll changes.',
        steps: [
          'Provider infrastructure operation does not include every customer responsibility.',
          'The customer must control access and approve payroll inputs.',
          'Evaluate both parties’ controls and relevant complementary user-entity controls.',
        ],
      },
      pitfalls: [
        'Cloud does not mean the customer has no responsibilities.',
        'A service model is not a security certification.',
        'Architecture documentation must include important interfaces and dependencies.',
      ],
      questions: [
        q(
          'Which cloud model generally supplies a managed business application?',
          'Software as a service.',
          [
            'Infrastructure as a service only.',
            'A local spreadsheet by definition.',
            'A physical tape archive.',
          ],
          'SaaS supplies application functionality as a service.',
          'remembering',
        ),
        q(
          'Which model generally leaves more operating-system responsibility with the customer than PaaS?',
          'Infrastructure as a service.',
          [
            'Software as a service in every case.',
            'A fully managed end-user application.',
            'A read-only report.',
          ],
          'IaaS generally exposes more of the infrastructure software stack to customer administration.',
          'remembering',
        ),
        q(
          'What does a hybrid cloud deployment combine?',
          'Distinct deployment environments connected for the organization’s needs.',
          [
            'Only one unmanaged laptop.',
            'Only paper records.',
            'A guarantee that no vendor is used.',
          ],
          'Hybrid deployment combines environments; it is not itself a control guarantee.',
          'remembering',
        ),
        q(
          'Who remains responsible for appropriate customer user-access configuration in a SaaS arrangement when the contract assigns it to the customer?',
          'The customer.',
          [
            'No one.',
            'Every external investor.',
            'The provider regardless of the stated responsibility.',
          ],
          'Shared responsibility follows the actual service and agreement.',
          'remembering',
        ),
        q(
          'A system diagram omits the interface carrying sales data into the ledger. What is the concern?',
          'Important data-flow and control dependencies may be missed.',
          [
            'Only the diagram’s color scheme.',
            'No concern if the ERP is expensive.',
            'The missing interface proves all data is correct.',
          ],
          'Financial-reporting risks can arise in omitted interfaces.',
          'analysis',
        ),
        q(
          'A company moves to a reputable cloud provider. What is still needed?',
          'Vendor oversight and evaluation of retained and outsourced controls.',
          [
            'Automatic elimination of all control work.',
            'A presumption that every configuration is secure.',
            'No backup or exit planning.',
          ],
          'Provider reputation does not replace governance and controls.',
          'application',
        ),
      ],
      simulation: {
        title: 'Cloud responsibility matrix',
        scenario:
          'Assign control responsibilities and identify a missing dependency in an outsourced payroll system.',
        exhibits: [
          {
            title: 'Contract summary',
            body: 'The SaaS provider operates application infrastructure. The customer approves employee master-file changes, grants user roles, and reconciles payroll totals.',
          },
          {
            title: 'Architecture review',
            body: 'A third-party interface sends payroll journals to the general ledger, but the interface is absent from the documented data-flow diagram.',
          },
        ],
        tasks: [
          {
            label: 'Application service model',
            correct: 'SaaS',
            options: [
              'SaaS',
              'A paper archive',
              'A guaranteed zero-risk system',
              'Only a local operating system',
            ],
            explanation: 'The provider supplies the managed application.',
          },
          {
            label: 'Owner of customer role approvals',
            correct: 'The customer',
            options: [
              'The customer',
              'No responsible party',
              'Only payroll employees',
              'Every external auditor',
            ],
            explanation: 'The contract assigns customer access controls to the customer.',
          },
          {
            label: 'Required response to the omitted interface',
            correct: 'Document the data flow and evaluate its controls',
            options: [
              'Document the data flow and evaluate its controls',
              'Ignore it',
              'Assume it cannot affect reporting',
              'Delete the ledger from scope',
            ],
            explanation: 'The interface is a relevant dependency.',
          },
          {
            label: 'Effect of outsourcing on accountability',
            correct: 'It changes control performance but does not eliminate accountability',
            options: [
              'It changes control performance but does not eliminate accountability',
              'It removes every customer duty',
              'It guarantees accurate payroll',
              'It prevents all security incidents',
            ],
            explanation: 'Governance and retained responsibilities continue.',
          },
        ],
      },
    },
    {
      topic: 'enterprise-systems',
      title: 'ERP, Business Processes, Interfaces & Automation',
      group: 'A.2',
      objectives: [
        'Trace transaction flows through enterprise systems.',
        'Distinguish general IT controls from application controls.',
        'Evaluate automation and emerging-technology dependencies.',
      ],
      teaching: [
        'An ERP integrates data and functions across business processes such as order-to-cash, procure-to-pay, production, payroll, and financial reporting. Shared data can improve consistency but also spreads the effects of unauthorized master-data changes or configuration errors. Map initiation, authorization, processing, posting, and reconciliation rather than examining only the final ledger output.',
        'General IT controls support the environment, such as access administration, change management, and operations. Application controls address processing within a particular system, including edit checks, matching, sequence checks, and reconciliations. Automated controls can be consistently wrong when configured incorrectly; evaluate design, implementation, and dependencies.',
        'Robotic process automation, AI-assisted processes, blockchain interfaces, and electronic data interchange can change risk and evidence. Consider authorization, completeness, accuracy, exception handling, monitoring, and the reliability of inputs and outputs. Blockchain participation does not establish that every off-chain fact entered is true. Maintain a clear trail from source transaction to reported result.',
      ],
      workedExample: {
        title: 'Automated matching with weak master-data control',
        facts:
          'The ERP matches invoices to purchase orders and receipts, but one employee can change vendor bank accounts and approve the change.',
        steps: [
          'The three-way match is an application control.',
          'Vendor access and approval design create a separate risk.',
          'Investigate segregation and monitoring; matching does not prevent every payment diversion.',
        ],
      },
      pitfalls: [
        'Automation can execute a flawed rule consistently.',
        'A general IT control and an application control serve different roles.',
        'Immutable records do not guarantee truthful source data.',
      ],
      questions: [
        q(
          'What is a central purpose of an ERP?',
          'Integrate information and processing across business functions.',
          [
            'Eliminate all authorization requirements.',
            'Guarantee every source transaction is valid.',
            'Replace all employees with auditors.',
          ],
          'ERP integration connects business processes and data.',
          'remembering',
        ),
        q(
          'Which is an application control?',
          'An automated invoice-to-order-and-receipt match.',
          [
            'Firm-wide developer access governance alone.',
            'A building fire alarm alone.',
            'A board meeting calendar.',
          ],
          'The match validates processing within an application.',
          'remembering',
        ),
        q(
          'Which is generally an IT general control?',
          'Controlled promotion of authorized program changes.',
          [
            'Only recalculating one sales invoice.',
            'Only counting a particular inventory item.',
            'Only approving a customer discount.',
          ],
          'Change management supports the reliability of systems and applications.',
          'remembering',
        ),
        q(
          'Does blockchain storage guarantee the truth of information originally entered?',
          'No.',
          [
            'Yes, every off-chain fact is verified automatically.',
            'Only if the chain has many nodes.',
            'Only if transactions are expensive.',
          ],
          'Integrity of stored records does not prove the validity of source facts.',
          'remembering',
        ),
        q(
          'An automated control uses an incorrect tax-rate configuration for every sale. What is the implication?',
          'Consistent automated processing can create systematic error.',
          [
            'Automation makes the error immaterial.',
            'No testing of configuration is needed.',
            'All financial statements must automatically be correct.',
          ],
          'Automation can scale a configuration error across the population.',
          'analysis',
        ),
        q(
          'Before relying on an RPA-generated reconciliation, what should be evaluated?',
          'Input completeness, logic, exception handling, and review.',
          [
            'Only the robot’s name.',
            'Only whether the output is a PDF.',
            'A presumption of independence because it is automated.',
          ],
          'Reliability requires validating the process and its dependencies.',
          'application',
        ),
      ],
      simulation: {
        title: 'Procure-to-pay process review',
        scenario: 'Identify controls and weaknesses in an automated payment workflow.',
        exhibits: [
          {
            title: 'Process flow',
            body: 'The ERP matches invoices with orders and receipts. Vendor bank-account changes can be made and approved by the same user. A robot exports payment totals but drops rejected records from its report.',
          },
          {
            title: 'Control objective',
            body: 'Payments should be authorized, directed to valid recipients, completely recorded, and reconciled. The matching rule alone does not address every objective.',
          },
        ],
        tasks: [
          {
            label: 'Classification of the three-way match',
            correct: 'Application control',
            options: [
              'Application control',
              'Only physical security',
              'An audit opinion',
              'A tax election',
            ],
            explanation: 'The match controls a specific transaction-processing function.',
          },
          {
            label: 'Vendor-change weakness',
            correct: 'Lack of independent authorization or segregation',
            options: [
              'Lack of independent authorization or segregation',
              'Guaranteed security from automation',
              'Only a formatting issue',
              'No possible payment risk',
            ],
            explanation: 'Self-approved master-data changes can redirect payments.',
          },
          {
            label: 'Risk from omitted rejected records',
            correct: 'Incomplete reconciliation information',
            options: [
              'Incomplete reconciliation information',
              'Automatic proof of no exceptions',
              'No effect on completeness',
              'A guaranteed accurate report',
            ],
            explanation: 'Rejected records may need investigation and reconciliation.',
          },
          {
            label: 'Best next step',
            correct: 'Trace inputs, exceptions, approvals, and postings through the full process',
            options: [
              'Trace inputs, exceptions, approvals, and postings through the full process',
              'Review only the final total',
              'Ignore master-data changes',
              'Assume the robot is an independent auditor',
            ],
            explanation: 'End-to-end understanding connects each risk to an appropriate control.',
          },
        ],
      },
    },
    {
      topic: 'data-management-sql',
      title: 'Data Integrity, Databases, SQL & Data Lifecycle',
      group: 'B',
      objectives: [
        'Distinguish storage models and data integrity concepts.',
        'Evaluate joins, filters, and aggregations for completeness.',
        'Apply data-lifecycle governance and retention principles.',
      ],
      teaching: [
        'Data governance assigns ownership, definitions, quality responsibilities, access rules, retention, and disposition. The lifecycle runs from creation or acquisition through use, storage, sharing, and final disposition. A data dictionary helps users interpret fields consistently. Quality includes completeness, accuracy, validity, timeliness, and relevance to the intended purpose.',
        'Relational integrity includes valid keys and relationships. Normalization reduces certain redundancies and update anomalies; analytical models such as star and snowflake schemas organize facts and dimensions for reporting. Warehouses generally organize curated data for analysis, while lakes can retain varied raw or processed data. Storage choice alone does not establish data quality.',
        'SQL query logic affects evidence. Inner joins can omit unmatched records; one-to-many joins can multiply rows; WHERE clauses can exclude periods or categories; aggregation can hide detail. Reconcile counts and control totals before and after extraction, inspect join cardinality, and validate filters. Retain sufficient provenance to reproduce significant analyses.',
      ],
      workedExample: {
        title: 'A duplicated invoice total',
        facts:
          'An invoice table is joined to a customer-address table containing two addresses per customer. An invoice for $500 appears twice.',
        steps: [
          'The join creates two rows, not two economic invoices.',
          'Summing without controlling cardinality overstates that invoice total by $500.',
          'Use appropriate keys and query design and reconcile to source totals.',
        ],
      },
      pitfalls: [
        'A successful query can return the wrong population.',
        'A data lake is not automatically curated reliable data.',
        'Normalization and reporting aggregation serve different purposes.',
      ],
      questions: [
        q(
          'What does a data dictionary primarily describe?',
          'Data fields, meanings, formats, and related definitions.',
          ['Only office locations.', 'Only employee salaries.', 'Only the company logo.'],
          'A dictionary supports consistent interpretation of data.',
          'remembering',
        ),
        q(
          'What can an inner join do to unmatched records?',
          'Exclude them from the result.',
          [
            'Always duplicate every row.',
            'Guarantee completeness of the source.',
            'Encrypt every field automatically.',
          ],
          'Inner joins retain matching rows and can omit relevant unmatched records.',
          'remembering',
        ),
        q(
          'Which analytical schema commonly has a central fact table with related dimension tables?',
          'Star schema.',
          ['A paper filing cabinet.', 'A password policy.', 'A disaster-recovery site.'],
          'A star schema structures facts and dimensions for analytics.',
          'remembering',
        ),
        q(
          'What is a purpose of relational normalization?',
          'Reduce certain redundancy and update anomalies.',
          [
            'Guarantee every input fact is true.',
            'Eliminate all queries.',
            'Replace access control.',
          ],
          'Normalization improves relational structure but is not a complete quality or security control.',
          'remembering',
        ),
        q(
          'A $700 invoice appears twice after a one-to-many join. What is the overstatement if the result is summed without correction?',
          '$700.',
          ['$1,400.', '$350.', 'Zero.'],
          'The single $700 invoice is counted an extra time.',
          'application',
        ),
        q(
          'An extraction excludes December 31 transactions through an incorrect date boundary. What is required?',
          'Correct the filter and validate the population against source controls.',
          [
            'Accept the result because SQL ran successfully.',
            'Ignore the year-end records.',
            'Increase only the chart size.',
          ],
          'Execution success does not establish completeness or relevance.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'Data extraction quality check',
        scenario: 'Evaluate a reporting extract before using it for financial analysis.',
        exhibits: [
          {
            title: 'Source and output',
            body: 'The source has 1,000 invoices totaling $500,000. The extract has 950 unique invoice IDs totaling $475,000 before a join. A customer-address join duplicates one $2,000 invoice.',
          },
          {
            title: 'Query review',
            body: 'An inner join omits customers without an address, and the date filter excludes the last day of the period.',
          },
        ],
        tasks: [
          {
            label: 'Number of source invoices missing before the join',
            correct: 50,
            distractors: [950, 1000, 25],
            explanation: '1,000 − 950 = 50 invoices.',
          },
          {
            label: 'Difference from the source total before the join',
            correct: 25000,
            distractors: [475000, 500000, 2000],
            explanation: '$500,000 − $475,000 = $25,000.',
          },
          {
            label: 'Additional overstatement caused by the duplicate invoice',
            correct: 2000,
            distractors: [4000, 25000, 0],
            explanation: 'One extra occurrence adds $2,000.',
          },
          {
            label: 'Required remediation',
            correct: 'Correct joins and filters and reconcile counts and totals',
            options: [
              'Correct joins and filters and reconcile counts and totals',
              'Accept the chart as reliable',
              'Ignore unmatched records',
              'Assume all differences cancel',
            ],
            explanation: 'Both omitted and duplicated records must be addressed.',
          },
        ],
      },
    },
    {
      topic: 'change-management',
      title: 'SDLC, Change Management, Configuration & Releases',
      group: 'A.4',
      objectives: [
        'Distinguish development, testing, staging, and production environments.',
        'Evaluate change authorization, testing, approval, and rollback.',
        'Identify risks from privileged changes and uncontrolled configuration.',
      ],
      teaching: [
        'Change management controls how software, infrastructure, and configuration move from request to production. Relevant steps include authorization, impact assessment, development, testing, independent review, approval, deployment, monitoring, and rollback preparation. Emergency changes may use an expedited process, but they still need appropriate approval and retrospective review rather than becoming a permanent exception.',
        'Separate environments and access reduce the risk that untested code or test data affects production. Unit, integration, system, and user-acceptance tests address different objectives. A version-control record helps track changes but does not alone prove business authorization or successful testing. Continuous delivery still requires effective controls adapted to automation.',
        'Configuration changes can be as consequential as code changes. Maintain inventories and approved baselines, control access, record changes, and monitor drift. Plan data migration, reconciliation, conversion strategy, and recovery. Direct, parallel, and pilot conversions have different cost and risk profiles; choose based on the system and objectives.',
      ],
      workedExample: {
        title: 'An emergency patch with no review',
        facts:
          'An administrator deploys an emergency payment-system patch, but no ticket, test evidence, approval, or later review is retained.',
        steps: [
          'Urgency may explain an expedited process, not absence of accountability.',
          'Obtain evidence of authorization, testing, deployment, and retrospective review.',
          'Evaluate the risk and whether the change affected transaction processing.',
        ],
      },
      pitfalls: [
        'Version control is not the entire change-control process.',
        'Emergency changes still need controlled handling.',
        'Configuration changes can alter financial processing without new code.',
      ],
      questions: [
        q(
          'Which environment ordinarily hosts the live business system?',
          'Production.',
          [
            'A unit-test sandbox by definition.',
            'A developer’s draft only.',
            'A discarded backup.',
          ],
          'Production supports live processing and requires controlled access and changes.',
          'remembering',
        ),
        q(
          'What is the purpose of a rollback plan?',
          'Restore an appropriate prior state if a deployment fails.',
          [
            'Guarantee no testing is needed.',
            'Delete every audit trail.',
            'Eliminate business ownership.',
          ],
          'Rollback planning supports recovery from unsuccessful changes.',
          'remembering',
        ),
        q(
          'Which test examines whether integrated components work together?',
          'Integration testing.',
          [
            'Only a password length check.',
            'Only a financial-statement audit opinion.',
            'Only a building inspection.',
          ],
          'Integration testing addresses interactions among components.',
          'remembering',
        ),
        q(
          'What does a parallel conversion generally involve?',
          'Operating old and new systems concurrently for a period.',
          [
            'Switching without any comparison.',
            'Never implementing the new system.',
            'Deleting all historical data.',
          ],
          'Parallel operation supports comparison while increasing temporary effort and cost.',
          'remembering',
        ),
        q(
          'A developer can change production payment logic without approval. What is the principal risk?',
          'Unauthorized or untested changes can affect live processing.',
          [
            'Only the developer’s keyboard choice.',
            'No risk if version control exists.',
            'A guaranteed improvement in availability.',
          ],
          'Production access can bypass authorization, testing, and independent review.',
          'analysis',
        ),
        q(
          'An emergency change lacks normal predeployment review. What should a controlled process include?',
          'Appropriate emergency authorization and timely retrospective review.',
          [
            'A permanent waiver of every control.',
            'Deletion of the change history.',
            'No monitoring after release.',
          ],
          'Emergency procedures preserve accountability through adapted controls.',
          'application',
        ),
      ],
      simulation: {
        title: 'Release-control walkthrough',
        scenario: 'Review a release process and identify the most appropriate control improvement.',
        exhibits: [
          {
            title: 'Release evidence',
            body: 'Code is stored in version control, but developers approve their own production deployments. No acceptance-test evidence is retained. Configuration changes are not logged. Emergency changes have no subsequent review.',
          },
          {
            title: 'Objectives',
            body: 'Only authorized, tested, approved changes should reach production, and failures should be recoverable.',
          },
        ],
        tasks: [
          {
            label: 'Improve deployment approval',
            correct: 'Use appropriate independent authorization',
            options: [
              'Use appropriate independent authorization',
              'Rely solely on the developer’s preference',
              'Remove all approvals',
              'Assume version control is approval',
            ],
            explanation: 'Independent authorization helps prevent self-approved changes.',
          },
          {
            label: 'Improve testing evidence',
            correct: 'Retain relevant test results and acceptance approval',
            options: [
              'Retain relevant test results and acceptance approval',
              'Use only a code timestamp',
              'Skip business testing',
              'Delete failed test results',
            ],
            explanation: 'Evidence should support whether acceptance criteria were met.',
          },
          {
            label: 'Improve configuration control',
            correct: 'Authorize, log, and monitor configuration changes',
            options: [
              'Authorize, log, and monitor configuration changes',
              'Ignore changes that are not code',
              'Give every user administrator access',
              'Disable audit logs',
            ],
            explanation: 'Configuration can materially change system behavior.',
          },
          {
            label: 'Improve emergency handling',
            correct: 'Document emergency authorization and retrospective review',
            options: [
              'Document emergency authorization and retrospective review',
              'Allow permanent unreviewed exceptions',
              'Assume emergencies have no risks',
              'Omit recovery planning',
            ],
            explanation: 'Expedited changes still need accountable control.',
          },
        ],
      },
    },
    {
      topic: 'availability-recovery',
      title: 'Availability, Backups, Business Continuity & Disaster Recovery',
      group: 'A.3',
      objectives: [
        'Distinguish RTO and RPO.',
        'Evaluate backup and recovery approaches.',
        'Connect business-impact analysis to tested continuity plans.',
      ],
      teaching: [
        'Availability concerns whether systems and information are accessible when needed. Business-impact analysis identifies critical processes, dependencies, effects of disruption, and recovery priorities. Business continuity addresses sustaining business operations; disaster recovery focuses on restoring technology and data. Plans require roles, communication, resources, and testing.',
        'Recovery time objective is the targeted time to restore an activity or service. Recovery point objective is the targeted tolerable data-loss interval. A system can meet an RTO while failing its RPO if restored data is too old. Replication and mirroring can improve availability but may also propagate corruption or deletion, so they are not substitutes for every backup requirement.',
        'Full backups copy the defined dataset. Incremental backups copy changes since the previous relevant backup, while differential backups copy changes since the last full backup. Restoration requirements differ. Isolated or immutable copies and tested restoration can improve resilience to destructive incidents. A backup job marked successful is not proof that the organization can restore within its objectives.',
      ],
      workedExample: {
        title: 'RTO versus RPO',
        facts:
          'A service must be restored within four hours and lose no more than one hour of data. Restoration takes three hours, but the most recent usable backup is six hours old.',
        steps: [
          'The three-hour restoration meets the four-hour RTO.',
          'The six-hour data gap exceeds the one-hour RPO.',
          'Evaluate backup frequency, recovery design, and actual restore tests separately.',
        ],
      },
      pitfalls: [
        'Replication can copy corruption.',
        'A successful backup does not prove a successful restore.',
        'RTO and RPO describe different tolerances.',
      ],
      questions: [
        q(
          'What does RTO describe?',
          'The targeted recovery time for restoring service.',
          [
            'The maximum intended data-loss interval.',
            'The number of passwords in a file.',
            'The cost of every server.',
          ],
          'Recovery time objective concerns restoration time.',
          'remembering',
        ),
        q(
          'What does RPO describe?',
          'The targeted tolerable data-loss interval.',
          [
            'Only the time required to restart a server.',
            'Only the backup vendor’s name.',
            'Only network bandwidth.',
          ],
          'Recovery point objective concerns how far back data recovery may go.',
          'remembering',
        ),
        q(
          'A differential backup generally captures changes since which event?',
          'The last full backup.',
          [
            'Only the immediately preceding incremental backup in every system.',
            'The entity’s formation.',
            'The last audit opinion.',
          ],
          'Differential backups accumulate changes since the full backup.',
          'remembering',
        ),
        q(
          'Why is replication not a complete substitute for protected backups?',
          'It can replicate corruption or destructive changes.',
          [
            'It cannot ever improve availability.',
            'It always eliminates recovery time.',
            'It guarantees every file is valid.',
          ],
          'Replication may faithfully propagate unwanted changes.',
          'remembering',
        ),
        q(
          'A four-hour RTO and one-hour RPO apply. Recovery takes two hours but uses data five hours old. What is the result?',
          'RTO is met; RPO is not.',
          ['Both are met.', 'RPO is met; RTO is not.', 'Neither concept applies to data.'],
          'Restoration time and data freshness must be evaluated separately.',
          'analysis',
        ),
        q(
          'What provides stronger evidence of recoverability than a backup success notification alone?',
          'A tested restoration with measured results.',
          ['Only a vendor brochure.', 'Only the backup file’s name.', 'Only a verbal assurance.'],
          'Restore tests demonstrate whether usable data and services can be recovered within objectives.',
          'application',
        ),
      ],
      simulation: {
        title: 'Recovery-objective assessment',
        scenario: 'Compare recovery test results with business requirements.',
        exhibits: [
          {
            title: 'Requirements',
            body: 'RTO: 4 hours. RPO: 30 minutes. Agreed monthly service time: 40,000 minutes.',
          },
          {
            title: 'Test and service results',
            body: 'Recovery took 3 hours. The restored dataset was 90 minutes old. Unplanned downtime during the month was 200 minutes.',
          },
        ],
        tasks: [
          {
            label: 'Was the RTO met?',
            correct: 'Yes',
            options: ['Yes', 'No', 'Only if all data is current', 'RTO does not concern time'],
            explanation: 'Three hours is within the four-hour target.',
          },
          {
            label: 'Was the RPO met?',
            correct: 'No',
            options: ['Yes', 'No', 'RPO measures only recovery labor', 'Data age is irrelevant'],
            explanation: 'Ninety minutes exceeds the thirty-minute data-loss target.',
          },
          {
            label: 'Data-loss interval exceeding RPO, in minutes',
            correct: 60,
            distractors: [30, 90, 120],
            explanation: '90 − 30 = 60 minutes beyond the target.',
          },
          {
            label: 'Availability percentage for the stated month',
            correct: 99.5,
            distractors: [0.5, 95, 99],
            explanation: '(40,000 − 200) ÷ 40,000 × 100 = 99.5%.',
            tolerance: 0.001,
          },
        ],
      },
    },
  ],
};
