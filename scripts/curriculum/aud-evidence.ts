import { q, type CurriculumModule } from './types.ts';
export const audEvidence: CurriculumModule = {
  title: 'Audit Evidence & Further Procedures',
  area: 3,
  lessons: [
    {
      topic: 'assertions-procedures',
      title: 'Assertions & Direction of Testing',
      group: 'B-D',
      objectives: [
        'Translate an assertion into a specific possible misstatement.',
        'Choose the correct population and direction of testing.',
        'Distinguish tests of controls from substantive procedures.',
      ],
      teaching: [
        'Assertions describe claims embedded in financial statements: whether transactions occurred, balances exist, records are complete, amounts are accurate or properly valued, the entity has rights and obligations, and classification, cutoff, and presentation are appropriate. Start with the misstatement that could occur. An assertion label without a relevant population and procedure is not an audit response.',
        'Vouching from recorded items to supporting evidence generally addresses occurrence or existence. Tracing from an independent source population into the records generally addresses completeness. For example, tracing shipping documents to sales records can reveal omitted revenue, while vouching recorded sales to shipment evidence can reveal fictitious sales. A procedure’s direction matters more than the mere presence of an invoice.',
        'A test of controls evaluates whether a control operated effectively. A substantive procedure seeks to detect a misstatement in an assertion and may be a test of details or substantive analytical procedure. A dual-purpose test can serve both objectives only if designed and evaluated for each. A signed approval may support a control conclusion without establishing that the related asset is owned or properly valued.',
      ],
      workedExample: {
        title: 'Two directions, two risks',
        facts:
          'A wholesaler may have both fictitious recorded sales and unrecorded shipments near year-end.',
        steps: [
          'Select recorded sales and vouch to shipment and customer evidence for occurrence.',
          'Select shipping documents independently and trace to accounting records for completeness.',
          'Inspect shipment dates and contract terms for cutoff; do not infer cutoff solely from invoice dates.',
        ],
      },
      pitfalls: [
        'Completeness testing needs a source beyond the potentially incomplete ledger.',
        'Physical observation supports existence but not automatically ownership or valuation.',
        'Approval signatures and transaction amounts answer different audit questions.',
      ],
      questions: [
        q(
          'To search for unrecorded sales, which direction is most appropriate?',
          'Trace independently selected shipping documents to the sales journal.',
          [
            'Vouch only recorded sales to invoices.',
            'Inspect only the largest recorded receivable.',
            'Recalculate the audit fee.',
          ],
          'Start outside the possibly incomplete records and trace inward; selecting only recorded items cannot reliably identify omissions.',
          'analysis',
        ),
        q(
          'Vouching recorded inventory items to the warehouse most directly addresses which assertion?',
          'Existence.',
          [
            'Completeness of all unrecorded inventory.',
            'Legal ownership in every case.',
            'Net realizable value automatically.',
          ],
          'The procedure tests whether recorded items are present. Additional work addresses ownership and valuation.',
          'application',
        ),
        q(
          'Inspecting whether purchase orders contain the required approval is primarily what kind of test?',
          'A test of controls.',
          [
            'A complete test of inventory valuation.',
            'A financial statement opinion.',
            'A confirmation of all vendor balances.',
          ],
          'The purpose is to test the operation of the approval control, not by itself to prove the reported amount.',
          'application',
        ),
        q(
          'A sale shipped in January is recorded in December. Which assertion is most directly affected?',
          'Cutoff.',
          [
            'Only legal ownership of the audit file.',
            'Only disclosure of audit fees.',
            'No assertion because cash was collected later.',
          ],
          'The transaction is recorded in the wrong reporting period. Recognition terms and shipment evidence inform cutoff.',
          'application',
        ),
        q(
          'A company physically holds goods owned by a consignor and includes them in its inventory. Which assertion is misstated?',
          'Rights and obligations.',
          [
            'Existence, because the goods cannot be seen.',
            'Accuracy only because all goods have zero value.',
            'No assertion; physical custody establishes ownership.',
          ],
          'The goods exist but the consignee does not own them. Custody is not ownership.',
          'analysis',
        ),
        q(
          'When is a dual-purpose test appropriate?',
          'When its design and evaluation support both the control and substantive objectives.',
          [
            'Whenever a document has a date.',
            'Only when substantive testing is prohibited.',
            'Whenever control exceptions are ignored.',
          ],
          'Both objectives require appropriate evidence and separate evaluation; a label does not establish either.',
          'remembering',
        ),
      ],
      simulation: {
        title: 'Design an assertion-focused audit program',
        scenario: 'Choose the best procedure for each identified inventory and revenue risk.',
        exhibits: [
          {
            title: 'Risks',
            body: 'A: Recorded inventory may not exist. B: Shipped orders may be omitted from sales. C: Goods held on consignment may be included as owned inventory. D: January shipments may be recorded as December sales.',
          },
          {
            title: 'Available evidence',
            body: 'Warehouse observations, shipping-document populations, contracts identifying ownership, and year-end sales entries are available. Select evidence relevant to the risk rather than the easiest document to obtain.',
          },
        ],
        tasks: [
          {
            label: 'Procedure for A',
            correct: 'Vouch recorded items to physical inventory',
            options: [
              'Vouch recorded items to physical inventory',
              'Trace only unrecorded orders',
              'Inspect only payroll approvals',
              'Confirm the auditor’s bank balance',
            ],
            explanation: 'Vouching recorded quantities to goods addresses existence.',
          },
          {
            label: 'Procedure for B',
            correct: 'Trace shipping documents to sales records',
            options: [
              'Trace shipping documents to sales records',
              'Select only recorded sales',
              'Inspect only the chart of accounts',
              'Review dividend approvals',
            ],
            explanation: 'Tracing an independent source population addresses omitted transactions.',
          },
          {
            label: 'Assertion for C',
            correct: 'Rights and obligations',
            options: [
              'Rights and obligations',
              'Audit fee classification',
              'Only arithmetic accuracy',
              'No assertion',
            ],
            explanation: 'Consigned goods may be physically present but not owned.',
          },
          {
            label: 'Assertion for D',
            correct: 'Cutoff',
            options: [
              'Cutoff',
              'Only existence of the warehouse',
              'Only audit documentation retention',
              'No reporting-period issue',
            ],
            explanation: 'January activity recognized in December misstates the reporting period.',
          },
        ],
      },
    },
    {
      topic: 'audit-sampling',
      title: 'Sampling, Projection & Evaluation of Exceptions',
      group: 'C',
      objectives: [
        'Choose attribute or variables sampling to match the objective.',
        'Distinguish sampling risk from execution errors.',
        'Evaluate deviations and projected misstatements with sampling uncertainty.',
      ],
      teaching: [
        'Sampling applies a procedure to less than the entire relevant population so the auditor can draw a conclusion about that population. Attribute sampling commonly evaluates a control deviation rate; variables sampling or other appropriate methods estimate monetary misstatement. Define the objective, population, sampling unit, selection method, tolerable error, and evaluation criteria before selecting items.',
        'Sampling risk arises because a sample may not represent the population. Nonsampling risk arises from using an inappropriate procedure, misinterpreting evidence, or failing to recognize an exception. Increasing sample size may reduce sampling risk but does not fix a poorly designed procedure. Greater desired assurance, lower tolerable deviation or misstatement, and higher expected error generally require more evidence.',
        'A sample exception is not automatically a population conclusion. Investigate its cause, project monetary misstatements when appropriate, and consider sampling uncertainty. In control testing, compare an appropriately evaluated upper deviation rate with the tolerable rate. In substantive testing, evaluate projected and known misstatements against tolerable misstatement and consider the risk of further undetected errors.',
      ],
      workedExample: {
        title: 'Ratio projection',
        facts:
          'For a homogeneous population, the case specifies ratio projection. Sample recorded value is $40,000, sample audited value is $38,000, and population recorded value is $600,000.',
        steps: [
          'Sample overstatement is $2,000.',
          'The sample misstatement ratio is $2,000 ÷ $40,000 = 5%.',
          'Projected population overstatement is $600,000 × 5% = $30,000, before considering sampling uncertainty.',
        ],
      },
      pitfalls: [
        'The sample error rate is not automatically its upper confidence limit.',
        'Testing the wrong population is a design error, not merely sampling risk.',
        'Do not offset unrelated misstatements without evaluating their effects.',
      ],
      questions: [
        q(
          'Which sampling approach most directly tests the frequency of missing approvals?',
          'Attribute sampling.',
          [
            'A discounted cash flow valuation.',
            'A compilation procedure.',
            'A ratio of audit fees to sales.',
          ],
          'Approval exceptions are control attributes, so the objective is a deviation rate.',
          'remembering',
        ),
        q(
          'An auditor fails to recognize an exception in a document actually examined. Which risk is illustrated?',
          'Nonsampling risk.',
          [
            'Only sampling risk.',
            'Only inherent risk.',
            'A necessary consequence of statistical selection.',
          ],
          'The problem is execution or interpretation, not whether the selected sample represents the population.',
          'analysis',
        ),
        q(
          'A homogeneous sample is overstated by $3,000 on recorded value of $60,000. Population recorded value is $900,000. Under ratio projection, what is projected overstatement?',
          '$45,000.',
          ['$3,000.', '$15,000.', '$900,000.'],
          'The ratio is 5%; 5% of $900,000 is $45,000 before sampling-risk allowances.',
          'application',
        ),
        q(
          'All else equal, decreasing tolerable misstatement generally has what effect on substantive sample size?',
          'It increases the required sample size.',
          [
            'It always reduces sample size.',
            'It eliminates sampling risk.',
            'It makes population definition unnecessary.',
          ],
          'A tighter tolerance generally requires more evidence for a given assurance level.',
          'remembering',
        ),
        q(
          'The evaluated upper deviation rate is 9% and the tolerable rate is 6%. What is the best conclusion?',
          'The sample does not support the planned level of reliance.',
          [
            'The control is supported because most items passed.',
            'All substantive procedures can be omitted.',
            'The difference can be ignored because it is under 10%.',
          ],
          'The evaluated deviation exceeds the tolerable rate; reassess reliance and the audit response.',
          'evaluation',
        ),
        q(
          'A team samples invoices from an incomplete ledger to test completeness of liabilities. What is the primary issue?',
          'The source population is inappropriate for detecting omitted liabilities.',
          [
            'The sample is automatically representative because it is random.',
            'The confidence level cures the population problem.',
            'Only the arithmetic in the projection matters.',
          ],
          'Random selection from incomplete records does not detect items absent from those records.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'Sampling evaluation worksheet',
        scenario:
          'Evaluate a control sample and a separate monetary sample using the specified methods.',
        exhibits: [
          {
            title: 'Control test',
            body: '80 approvals tested; 4 deviations found. The evaluated upper deviation rate is 8%. The tolerable rate is 6%.',
          },
          {
            title: 'Substantive sample',
            body: 'A homogeneous population has recorded value $1,200,000. Sample recorded value is $80,000 and audited value is $76,000. Use ratio projection; sampling uncertainty must be evaluated separately.',
          },
        ],
        tasks: [
          {
            label: 'Observed control deviation rate, as a percentage',
            correct: 5,
            distractors: [4, 6, 8],
            explanation: '4 ÷ 80 = 5%.',
          },
          {
            label: 'Conclusion using the upper deviation rate',
            correct: 'Planned reliance is not supported',
            options: [
              'Planned reliance is not supported',
              'Reliance is guaranteed',
              'Ignore the upper rate',
              'No additional evaluation is needed',
            ],
            explanation: 'The 8% upper rate exceeds the 6% tolerable rate.',
          },
          {
            label: 'Sample monetary overstatement',
            correct: 4000,
            distractors: [80000, 76000, 0],
            explanation: '$80,000 recorded less $76,000 audited = $4,000.',
          },
          {
            label: 'Projected population overstatement',
            correct: 60000,
            distractors: [4000, 120000, 57000],
            explanation: '$4,000 ÷ $80,000 × $1,200,000 = $60,000.',
          },
        ],
      },
    },
    {
      topic: 'audit-data',
      title: 'Data Reliability & Analytical Procedures',
      group: 'A-B',
      objectives: [
        'Validate completeness, accuracy, and relevance of data before analysis.',
        'Build an independent and sufficiently precise expectation.',
        'Investigate significant differences rather than accepting unsupported explanations.',
      ],
      teaching: [
        'Data analytics are only as reliable as their inputs and design. Agree extracted totals and counts to independent source information, inspect query criteria and date boundaries, investigate duplicates or missing records, and validate transformations. An attractive dashboard or an AI-generated analysis does not establish completeness, accuracy, authenticity, or freedom from management bias.',
        'Analytical procedures evaluate plausible relationships among financial and nonfinancial data. Risk-assessment analytics help identify unusual relationships; substantive analytics require a sufficiently reliable and precise expectation; final analytics help assess whether the statements are consistent with the auditor’s understanding. These purposes are related but are not interchangeable.',
        'Develop the expectation independently of the recorded amount. Stable relationships, disaggregated data, reliable operational measures, and predictable transactions can improve precision. Set an acceptable difference before evaluating the recorded balance. Investigate significant differences with corroborated explanations and appropriate further procedures; merely asking management why the number differs is not enough.',
        'SQL joins, filters, and aggregations can change a population. An inner join may omit unmatched records, while a one-to-many join can duplicate amounts. Reconcile both before and after transformations. Where source data is incomplete or biased, a larger analysis does not cure the underlying defect.',
      ],
      workedExample: {
        title: 'Independent rent expectation',
        facts:
          'A building has 40 identical occupied units renting for $1,500 per month for all 12 months. No concessions or vacancies apply. Recorded rental revenue is $660,000.',
        steps: [
          'Expected revenue is 40 × $1,500 × 12 = $720,000.',
          'The $60,000 difference exceeds the exercise’s $10,000 investigation threshold.',
          'Corroborate occupancy, leases, collections, and concessions; investigate the difference rather than forcing the expectation to the ledger.',
        ],
      },
      pitfalls: [
        'Agreeing a report to itself is not an independent completeness check.',
        'A plausible management explanation still needs corroboration.',
        'An analysis can be arithmetically correct but based on the wrong population.',
      ],
      questions: [
        q(
          'A sales extract excludes all credit memos. What must the auditor address before relying on a net-sales analysis?',
          'The completeness and relevance of the extracted population.',
          [
            'Only the dashboard’s colors.',
            'Only whether the file is a spreadsheet.',
            'Nothing if the report totals are large.',
          ],
          'Omitted credit memos can bias net sales. Validate extraction criteria and reconcile to appropriate records.',
          'analysis',
        ),
        q(
          'A building has 30 occupied units at $2,000 monthly for 12 months with no vacancies or concessions. What is expected annual rent?',
          '$720,000.',
          ['$60,000.', '$360,000.', '$750,000.'],
          '30 × $2,000 × 12 = $720,000.',
          'application',
        ),
        q(
          'What distinguishes a substantive analytical procedure from a general planning comparison?',
          'An independently developed expectation with appropriate reliability and precision.',
          [
            'A colorful chart alone.',
            'A management explanation with no corroboration.',
            'Use of the recorded balance as the only expectation.',
          ],
          'Substantive analytics require evidence capable of detecting a material difference at the intended assurance level.',
          'analysis',
        ),
        q(
          'An inner join excludes customer accounts with no matching address. What risk does this introduce to a receivables test?',
          'An incomplete test population.',
          [
            'An automatic overstatement of every remaining balance.',
            'A guarantee of data integrity.',
            'No risk because inner joins are always preferred.',
          ],
          'Unmatched receivables can be silently omitted, so reconcile the joined population to the source.',
          'application',
        ),
        q(
          'Management explains a significant variance as a price change. What should the auditor do?',
          'Corroborate the explanation using relevant evidence.',
          [
            'Accept it because it is mathematically possible.',
            'Delete the analytical procedure.',
            'Change the investigation threshold after seeing the difference.',
          ],
          'A plausible explanation needs supporting evidence, such as approved price changes and sales mix data.',
          'evaluation',
        ),
        q(
          'An AI tool generates an audit schedule. Which statement is correct?',
          'The auditor remains responsible for validating the data and evaluating the output.',
          [
            'AI output is automatically independent external evidence.',
            'AI eliminates professional skepticism.',
            'No documentation is needed if the output looks reasonable.',
          ],
          'Technology does not remove responsibility for reliable inputs, appropriate procedures, and supported conclusions.',
          'remembering',
        ),
      ],
      simulation: {
        title: 'Revenue analytics validation',
        scenario:
          'Evaluate an independently prepared revenue expectation and data-quality exceptions.',
        exhibits: [
          {
            title: 'Operational data',
            body: '50 units were occupied for all 12 months at $1,200 per month. There are no concessions. Recorded revenue is $690,000. The case uses a $15,000 investigation threshold.',
          },
          {
            title: 'Extract review',
            body: 'The analyst’s SQL query omits unmatched customer IDs. A separate join duplicates records when a customer has multiple addresses. Management attributes all differences to seasonality without supporting evidence.',
          },
        ],
        tasks: [
          {
            label: 'Expected annual revenue',
            correct: 720000,
            distractors: [60000, 690000, 600000],
            explanation: '50 × $1,200 × 12 = $720,000.',
          },
          {
            label: 'Absolute difference from recorded revenue',
            correct: 30000,
            distractors: [15000, 60000, 0],
            explanation: '$720,000 − $690,000 = $30,000.',
          },
          {
            label: 'Required response to unmatched and duplicated records',
            correct: 'Reconcile and correct population completeness and accuracy',
            options: [
              'Reconcile and correct population completeness and accuracy',
              'Ignore them if the chart is clear',
              'Increase only the font size',
              'Assume all differences cancel',
            ],
            explanation: 'Omissions and duplicate joins can bias the population and totals.',
          },
          {
            label: 'Response to the seasonality explanation',
            correct: 'Obtain corroborating evidence and investigate the difference',
            options: [
              'Obtain corroborating evidence and investigate the difference',
              'Accept the statement without support',
              'Increase the threshold to $40,000 after the fact',
              'Treat the expectation as a tax return',
            ],
            explanation:
              'The difference exceeds the threshold and requires supported investigation.',
          },
        ],
      },
    },
    {
      topic: 'audit-evidence',
      title: 'Confirmations, Cash, Receivables & Inventory',
      group: 'B-D',
      objectives: [
        'Evaluate evidence relevance and reliability in context.',
        'Maintain control over confirmation requests and responses.',
        'Select appropriate inventory observation and alternative procedures.',
      ],
      teaching: [
        'Evidence quality depends on relevance and reliability, not simply quantity. Evidence from knowledgeable independent sources obtained directly by the auditor is generally more reliable than unsupported internal representations, but circumstances matter. A confirmation can be unreliable if routed through management or if the respondent lacks relevant knowledge. More low-quality evidence does not automatically compensate for a serious quality defect.',
        'The auditor controls confirmation selection, preparation, sending, and receipt. Investigate exceptions and doubtful responses. Nonresponses to positive requests ordinarily require alternative procedures when appropriate, such as examining subsequent cash receipts and underlying shipping documents. A nonresponse is not confirmation that the balance is correct. Negative confirmations are appropriate only when their specific conditions are met, including low assessed risk and a sufficiently reliable population.',
        'For inventory, observing physical counts includes evaluating management’s instructions, observing procedures, inspecting inventory, performing test counts, and reconciling count information to final records. Floor-to-sheet counts address completeness; sheet-to-floor counts address existence. Observation alone does not establish valuation, ownership of consigned goods, or the adequacy of obsolete-stock reserves.',
        'Bank confirmations, cutoff statements, reconciliations, and subsequent activity can jointly support cash and debt assertions. Investigate reconciling items and unusual transfers; a confirmed bank balance does not automatically prove the book reconciliation is correct. Choose procedures that answer the specific assertion and account for timing.',
      ],
      workedExample: {
        title: 'A positive confirmation that never returns',
        facts:
          'A material customer does not reply. Management offers to mark the balance confirmed because the customer is longstanding.',
        steps: [
          'Do not treat the missing reply as affirmative evidence.',
          'Perform suitable alternative procedures, such as verifying subsequent receipt and the related sale.',
          'Evaluate whether sufficient appropriate evidence has been obtained and the implications of any unresolved amount.',
        ],
      },
      pitfalls: [
        'A nonresponse is not a positive confirmation.',
        'Physical inventory observation does not settle valuation.',
        'The auditor must control the confirmation process.',
      ],
      questions: [
        q(
          'A positive receivables confirmation receives no response. What is ordinarily appropriate?',
          'Perform suitable alternative procedures and evaluate the remaining evidence gap.',
          [
            'Treat silence as agreement.',
            'Ask management to sign for the customer.',
            'Delete the receivable from the sample without replacement or evaluation.',
          ],
          'Nonresponses require follow-up or alternatives when appropriate; silence is not affirmative evidence.',
          'analysis',
        ),
        q(
          'Who should control the sending and receipt of audit confirmations?',
          'The auditor.',
          [
            'Client sales personnel alone.',
            'The customer’s salesperson.',
            'An unrelated investor.',
          ],
          'Auditor control supports the integrity of confirmation evidence.',
          'remembering',
        ),
        q(
          'Which inventory test-count direction primarily addresses completeness?',
          'Select goods on the floor and trace them to count records.',
          [
            'Select only recorded items and find them on the floor.',
            'Read only the inventory valuation policy.',
            'Confirm only the cash balance.',
          ],
          'Floor-to-record testing can identify goods omitted from the count records.',
          'application',
        ),
        q(
          'Which matter is not established merely by seeing inventory in a warehouse?',
          'Whether the entity owns the goods.',
          [
            'Whether the observed goods are physically present.',
            'Whether the count takes place at that location.',
            'Whether the goods can be inspected.',
          ],
          'Consigned or third-party goods may be physically present without ownership.',
          'analysis',
        ),
        q(
          'A bank confirms its balance, but an old outstanding check appears on the client’s reconciliation. What should the auditor do?',
          'Investigate the reconciling item rather than assuming the book balance is correct.',
          [
            'Accept the book balance solely because the bank replied.',
            'Ignore all reconciliation items after confirmation.',
            'Treat every old check as a new liability automatically.',
          ],
          'Confirmation and reconciliation address different aspects of the balance and must be evaluated together.',
          'application',
        ),
        q(
          'A confirmation response is forwarded by the client’s controller from an unverified email account. Which action is appropriate?',
          'Authenticate the response and evaluate its reliability.',
          [
            'Treat it as automatically independent evidence.',
            'Assume electronic evidence is always invalid.',
            'Ignore the source if the number matches.',
          ],
          'The source and transmission process affect reliability; investigate rather than blindly accept or categorically reject electronic evidence.',
          'evaluation',
        ),
      ],
      simulation: {
        title: 'Evidence evaluation file',
        scenario: 'Select the appropriate follow-up for four audit-evidence matters.',
        exhibits: [
          {
            title: 'Evidence received',
            body: 'A customer did not respond to a positive request. A response was forwarded through management from an unverified address. Goods counted include a clearly identified consignment from another company. A bank confirmation agrees to the bank statement, but the book reconciliation contains unusual old transfers.',
          },
          {
            title: 'Audit approach',
            body: 'Evaluate each item’s reliability and assertion implications. No alternative procedure has yet been performed, and the balances are material.',
          },
        ],
        tasks: [
          {
            label: 'Follow-up for the nonresponse',
            correct: 'Perform suitable alternative procedures',
            options: [
              'Perform suitable alternative procedures',
              'Treat silence as agreement',
              'Accept a controller signature',
              'Ignore the selected item',
            ],
            explanation: 'A positive request requires appropriate evidence rather than silence.',
          },
          {
            label: 'Follow-up for the forwarded response',
            correct: 'Authenticate source and transmission',
            options: [
              'Authenticate source and transmission',
              'Assume independence',
              'Reject every electronic response',
              'Ignore the source',
            ],
            explanation: 'Reliability must be established in the circumstances.',
          },
          {
            label: 'Assertion implicated by the consignment',
            correct: 'Rights and obligations',
            options: [
              'Rights and obligations',
              'Only audit timing',
              'No assertion',
              'Only depreciation',
            ],
            explanation: 'Physical custody does not establish ownership.',
          },
          {
            label: 'Follow-up for old bank transfers',
            correct: 'Investigate and support the reconciling items',
            options: [
              'Investigate and support the reconciling items',
              'Rely only on the confirmed bank balance',
              'Remove the reconciliation from the file',
              'Assume all transfers are immaterial',
            ],
            explanation: 'Unusual reconciling items can affect the book cash balance and cutoff.',
          },
        ],
      },
    },
    {
      topic: 'audit-liabilities-estimates',
      title: 'Liabilities, Estimates, Litigation & Related Parties',
      group: 'D-E',
      objectives: [
        'Search for unrecorded liabilities using appropriate source evidence.',
        'Evaluate estimation uncertainty and management bias.',
        'Obtain evidence about litigation and significant unusual transactions.',
      ],
      teaching: [
        'Liabilities are often more vulnerable to omission than to fictitious recording. A search for unrecorded liabilities examines subsequent disbursements, unpaid invoices, receiving reports, and other appropriate evidence to determine whether obligations existed at the reporting date. The payment date alone does not determine the liability’s period; inspect when goods or services were received and the applicable contract terms.',
        'Accounting estimates require evaluating methods, significant assumptions, and relevant data. Consider estimation uncertainty, subjectivity, complexity, and indicators of management bias. Possible approaches include testing management’s process, developing an independent expectation or range, and considering relevant subsequent events. Agreement with one assumption does not validate an entire estimate.',
        'For litigation and claims, obtain relevant information from management and legal counsel under the applicable standard. A refusal to permit appropriate inquiry can create an evidence limitation; its reporting effect depends on materiality and pervasiveness. The auditor evaluates accounting and disclosure, not a guarantee about how a court will decide the case.',
        'Inspect related-party and significant unusual transactions for substance and business purpose. The fact that a contract exists does not prove that its stated terms reflect the full arrangement. Corroborate significant side agreements, consider disclosure, and reassess fraud risk where the evidence indicates management may be concealing information.',
      ],
      workedExample: {
        title: 'January payment for December services',
        facts:
          'A $48,000 January cash payment relates to consulting services completed in December. No December payable was recorded. The auditor also finds a reserve based on an unsupported assumption that returns will fall to zero.',
        steps: [
          'The service period supports a $48,000 year-end liability and expense.',
          'Propose the adjustment and assess whether similar omissions exist.',
          'Evaluate the return estimate’s methods and assumptions, using historical and current evidence rather than management optimism.',
        ],
      },
      pitfalls: [
        'Subsequent payment is evidence, not necessarily the recognition date.',
        'An estimate can be biased even when its arithmetic is correct.',
        'A legal letter does not transfer financial-reporting responsibility.',
      ],
      questions: [
        q(
          'A January payment of $35,000 relates entirely to services received in December. No year-end accrual exists. What does it indicate?',
          'A potential $35,000 unrecorded year-end liability and expense.',
          [
            'A January-only expense in every framework.',
            'No liability because payment was after year-end.',
            'An automatic $35,000 asset.',
          ],
          'Recognition depends on the obligation and service period, not merely the cash-payment date.',
          'application',
        ),
        q(
          'Which source is useful in a search for unrecorded liabilities?',
          'Subsequent cash disbursements and supporting invoices.',
          [
            'Only the recorded year-end liability list.',
            'Only the auditor’s engagement letter.',
            'Only the common-stock register.',
          ],
          'A source outside the possibly incomplete liability ledger can reveal omitted obligations.',
          'application',
        ),
        q(
          'Management changes an estimate assumption solely to meet an earnings target. What is a key audit concern?',
          'Management bias in the estimate.',
          [
            'Only the number of decimal places.',
            'A guarantee that the estimate is immaterial.',
            'An automatic permission to stop testing.',
          ],
          'The motive and unsupported assumption can indicate bias and require further evaluation.',
          'analysis',
        ),
        q(
          'Which is an appropriate audit approach to an accounting estimate?',
          'Develop an independent expectation or range using relevant evidence.',
          [
            'Accept management’s point estimate because estimates are uncertain.',
            'Use an unrelated industry number without analysis.',
            'Assume all subsequent events adjust the estimate.',
          ],
          'An independent expectation can provide evidence when its assumptions and data are relevant and reliable.',
          'application',
        ),
        q(
          'Management refuses permission for necessary inquiry of legal counsel about material litigation. What should the auditor evaluate?',
          'The resulting evidence limitation and its reporting implications.',
          [
            'Only whether the law firm is expensive.',
            'Whether the auditor can guarantee the court outcome.',
            'Nothing if management signs a broad representation.',
          ],
          'A representation does not replace necessary evidence; evaluate materiality and pervasiveness of the limitation.',
          'evaluation',
        ),
        q(
          'A large year-end related-party sale has no clear business purpose and includes a side agreement. What is appropriate?',
          'Investigate substance, recognition, disclosure, and fraud implications.',
          [
            'Accept the invoice alone.',
            'Exclude the sale from all testing.',
            'Assume related-party sales are always prohibited.',
          ],
          'The auditor must understand the full arrangement and its financial-reporting implications.',
          'analysis',
        ),
      ],
      simulation: {
        title: 'Year-end liability and estimate review',
        scenario: 'Evaluate a subsequent-disbursement schedule and two judgmental matters.',
        exhibits: [
          {
            title: 'Payments after year-end',
            body: 'Payment A: $22,000 for December services, not accrued. Payment B: $18,000 for January services. Payment C: $31,000 for goods received before year-end, not accrued. All amounts are valid obligations.',
          },
          {
            title: 'Other matters',
            body: 'Management sets an unsupported reserve assumption to meet a profit target and refuses necessary legal-counsel inquiry about material litigation.',
          },
        ],
        tasks: [
          {
            label: 'Total omitted year-end liabilities from A, B, and C',
            correct: 53000,
            distractors: [71000, 22000, 49000],
            explanation:
              'Only December services and goods already received create the described year-end omissions: $22,000 + $31,000.',
          },
          {
            label: 'Amount belonging only to January based on these facts',
            correct: 18000,
            distractors: [31000, 22000, 71000],
            explanation: 'Payment B relates to January services.',
          },
          {
            label: 'Primary reserve concern',
            correct: 'Unsupported management bias',
            options: [
              'Unsupported management bias',
              'Only a documentation font issue',
              'No issue because estimates are subjective',
              'Automatic assurance from the target',
            ],
            explanation: 'The assumption is driven by an earnings target rather than evidence.',
          },
          {
            label: 'Consequence to evaluate from legal-counsel refusal',
            correct: 'An evidence limitation',
            options: [
              'An evidence limitation',
              'A guarantee the lawsuit will be won',
              'Automatic immateriality',
              'Permission to omit disclosure',
            ],
            explanation:
              'Necessary evidence cannot be replaced solely by management representations.',
          },
        ],
      },
    },
    {
      topic: 'audit-investments',
      title: 'Investments, Fair Value & Evidence Conclusions',
      group: 'E-F',
      objectives: [
        'Audit ownership, valuation, and disclosure of investments.',
        'Evaluate contradictory evidence and fair-value inputs.',
        'Determine whether evidence is sufficient and appropriate for a conclusion.',
      ],
      teaching: [
        'An investment balance combines several assertions. Custodian confirmation may support existence and rights; pricing evidence supports valuation; transaction documents support classification and cutoff; financial-statement disclosures require separate evaluation. No single evidence source automatically supports every assertion. Consider restrictions, pledges, side agreements, and the reliability of pricing sources.',
        'Fair-value auditing focuses on the applicable measurement requirements, methods, inputs, and assumptions. Observable market inputs may provide strong evidence when relevant to the actual instrument and measurement date. A price for a similar instrument may require adjustments. Complex or unobservable inputs increase the need to understand the model, test source data, and consider specialist involvement and management bias.',
        'Evaluate findings together. More evidence may be required when sources conflict or exceptions suggest a systemic problem. Sufficiency concerns quantity; appropriateness concerns quality, including relevance and reliability. Written representations supplement other evidence but ordinarily do not replace evidence that the auditor reasonably expects to obtain.',
        'Before concluding, connect the identified misstatement or evidence gap to materiality, the affected assertions, required adjustments or disclosures, and the planned report. Document the chain of reasoning. A clean custodian confirmation cannot resolve an unsupported valuation or an omitted pledge disclosure.',
      ],
      workedExample: {
        title: 'Confirmed securities, disputed values',
        facts:
          'A custodian confirms 1,000 securities. A relevant year-end quoted price is $92, but the client records them at $100 per unit. No adjustment or other fact justifies the difference.',
        steps: [
          'The confirmed quantity supports existence, not the recorded unit price.',
          'Using the supplied price, fair value is $92,000 rather than $100,000.',
          'Evaluate the $8,000 valuation difference and related recognition and disclosure under the applicable framework.',
        ],
      },
      pitfalls: [
        'Quantity confirmation is not complete valuation evidence.',
        'A stale or irrelevant quoted price may need additional work.',
        'Representations supplement, rather than replace, other necessary evidence.',
      ],
      questions: [
        q(
          'A custodian confirms the number of securities held. Which matter generally needs separate evidence?',
          'Whether the year-end recorded fair value is appropriate.',
          [
            'Whether the confirmation has a date.',
            'Whether the securities were described in the response.',
            'Whether the auditor received a response.',
          ],
          'Quantity and custody evidence do not automatically establish fair value.',
          'analysis',
        ),
        q(
          'An entity holds 2,000 units. The relevant year-end fair value is $47 per unit, but it records $100,000. What is the indicated valuation difference?',
          '$6,000 overstatement.',
          ['$6,000 understatement.', '$94,000 overstatement.', 'No difference.'],
          '2,000 × $47 = $94,000; recorded value exceeds it by $6,000.',
          'application',
        ),
        q(
          'Which statement correctly distinguishes sufficiency and appropriateness?',
          'Sufficiency concerns quantity; appropriateness concerns evidence quality.',
          [
            'Sufficiency concerns the fee; appropriateness concerns the report length.',
            'Both refer only to the number of documents.',
            'Both eliminate the need for professional judgment.',
          ],
          'Quality includes relevance and reliability, while sufficiency addresses the amount of evidence.',
          'remembering',
        ),
        q(
          'Two reliable-looking sources provide conflicting prices for a material investment. What is appropriate?',
          'Investigate the difference and obtain evidence supporting the measurement.',
          [
            'Select the price closest to management’s preference.',
            'Average the numbers without evaluating relevance.',
            'Ignore both because they conflict.',
          ],
          'Evaluate source relevance, instrument comparability, date, and pricing assumptions before concluding.',
          'evaluation',
        ),
        q(
          'Management signs a representation that all investments are properly valued, but supporting model data is unavailable. What follows?',
          'The representation does not replace necessary valuation evidence.',
          [
            'The signature resolves every evidence gap.',
            'The model must be correct if its output is material.',
            'No opinion consideration is ever needed.',
          ],
          'Representations are necessary in many audits but are not substitutes for other reasonably expected evidence.',
          'analysis',
        ),
        q(
          'A material investment is pledged as collateral. What audit consideration arises beyond existence?',
          'Appropriate restriction or pledge disclosure.',
          [
            'Only the auditor’s independence from the custodian.',
            'Automatic derecognition of the investment.',
            'No reporting consequence in any case.',
          ],
          'Restrictions and pledges may require disclosure; confirmation alone does not settle presentation.',
          'application',
        ),
      ],
      simulation: {
        title: 'Investment evidence reconciliation',
        scenario:
          'Reconcile confirmed quantities to fair values and evaluate the remaining evidence issues.',
        exhibits: [
          {
            title: 'Investment schedule',
            body: 'Security A: 1,500 units, recorded at $90,000; relevant year-end quoted price $56. Security B: confirmed as held but subject to a material collateral pledge omitted from disclosures.',
          },
          {
            title: 'Audit file',
            body: 'The controller proposes using a written representation instead of obtaining the valuation model inputs for a separate material Level 3 investment.',
          },
        ],
        tasks: [
          {
            label: 'Fair value of Security A',
            correct: 84000,
            distractors: [90000, 56000, 96000],
            explanation: '1,500 × $56 = $84,000.',
          },
          {
            label: 'Overstatement in Security A',
            correct: 6000,
            distractors: [84000, 90000, 0],
            explanation: '$90,000 recorded less $84,000 supported value = $6,000.',
          },
          {
            label: 'Additional issue for Security B',
            correct: 'Omitted pledge disclosure',
            options: [
              'Omitted pledge disclosure',
              'Automatic nonexistence',
              'No possible reporting issue',
              'A payroll completeness error',
            ],
            explanation: 'The pledge affects disclosure even though custody is confirmed.',
          },
          {
            label: 'Response to the representation proposal',
            correct: 'Obtain sufficient appropriate valuation evidence',
            options: [
              'Obtain sufficient appropriate valuation evidence',
              'Accept the representation as a complete substitute',
              'Ignore the model because it is complex',
              'Use an unrelated market price',
            ],
            explanation: 'The auditor needs evidence about relevant model inputs and assumptions.',
          },
        ],
      },
    },
  ],
};
