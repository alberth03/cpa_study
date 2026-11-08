function showFARLessonPage(
    moduleId,
    lessonId,
    lessonTitle,
    lessonContent,
    quiz
) {

    let answersHTML = "";


    quiz.answers.forEach(function(answer, index) {

        answersHTML += `

            <button class="answer-button"
                    onclick="checkFARLessonAnswer(
                        this,
                        ${index},
                        ${quiz.correctAnswer}
                    )">

                ${answer}

            </button>

        `;

    });


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    ${lessonTitle}
                </h1>

                <p>
                    FAR · Module ${moduleId} · Lesson ${lessonId}
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule(${moduleId})">

                ← Back to Module

            </button>

        </header>


        <section class="lesson-page">


            <div class="lesson-content-card">

                <span class="exam-badge">
                    CPA LEVEL
                </span>

                ${lessonContent}

            </div>


            <div class="quiz-card">

                <h2>
                    CPA Check
                </h2>

                <p class="quiz-question">
                    ${quiz.question}
                </p>

                ${answersHTML}

                <div id="far-quiz-result"></div>

            </div>


            <div class="lesson-actions">

                <button class="complete-button"
                        onclick="completeFARLesson(
                            ${moduleId},
                            ${lessonId}
                        )">

                    Complete Lesson

                </button>

            </div>


        </section>

    `;


    window.currentFARQuizExplanation =
        quiz.explanation;

}



function showFARLesson(
    moduleId,
    lessonId
) {

    saveCurrentPage({

        page: "farLesson",
        moduleId: moduleId,
        lessonId: lessonId

    });


    setActiveNav("Learn");


    if (
        moduleId === 1 &&
        lessonId === 1
    ) {

        showFARLessonPage(
            1,
            1,
            "Financial Statements & General-Purpose Reporting",
            `

                <h2>
                    The purpose of financial reporting
                </h2>

                <p>
                    General-purpose financial reporting provides
                    financial information that is useful to existing
                    and potential investors, lenders and other
                    creditors when they make decisions about
                    providing resources to an entity.
                </p>

                <p>
                    FAR requires more than memorizing the names
                    of financial statements.
                </p>

                <p>
                    You need to understand what each statement
                    reports, how the statements connect and how
                    transactions flow through them.
                </p>


                <div class="key-points">

                    <h3>CPA mindset</h3>

                    <p>
                        When a transaction occurs, ask:
                    </p>

                    <ol>
                        <li>
                            What accounts changed?
                        </li>

                        <li>
                            Which financial statement is affected?
                        </li>

                        <li>
                            Does the transaction affect income,
                            equity, cash, or more than one statement?
                        </li>

                        <li>
                            Is additional disclosure required?
                        </li>
                    </ol>

                </div>



                <h2>
                    The primary financial statements
                </h2>


                <div class="statement-grid">


                    <div class="statement-card">

                        <h3>
                            Balance Sheet
                        </h3>

                        <p>
                            Reports assets, liabilities and
                            stockholders' equity at a specific date.
                        </p>

                        <div class="formula-box">

                            Assets =
                            Liabilities + Equity

                        </div>

                    </div>


                    <div class="statement-card">

                        <h3>
                            Income Statement
                        </h3>

                        <p>
                            Reports revenues, expenses, gains and
                            losses included in net income for a
                            period of time.
                        </p>

                        <div class="formula-box">

                            Revenues and Gains
                            −
                            Expenses and Losses
                            =
                            Net Income

                        </div>

                    </div>


                    <div class="statement-card">

                        <h3>
                            Statement of Comprehensive Income
                        </h3>

                        <p>
                            Reports comprehensive income,
                            which includes net income plus
                            other comprehensive income.
                        </p>

                        <div class="formula-box">

                            Comprehensive Income =
                            Net Income + OCI

                        </div>

                    </div>


                    <div class="statement-card">

                        <h3>
                            Statement of Cash Flows
                        </h3>

                        <p>
                            Explains changes in cash and cash
                            equivalents through operating,
                            investing and financing activities.
                        </p>

                    </div>


                    <div class="statement-card">

                        <h3>
                            Statement of Changes in Equity
                        </h3>

                        <p>
                            Explains changes in equity accounts
                            during the reporting period.
                        </p>

                    </div>


                    <div class="statement-card">

                        <h3>
                            Notes to Financial Statements
                        </h3>

                        <p>
                            Provide information necessary to
                            understand amounts, policies,
                            uncertainties and other matters
                            presented in the financial statements.
                        </p>

                    </div>


                </div>



                <h2>
                    Point in time vs period of time
                </h2>

                <p>
                    This distinction is very important.
                </p>


                <div class="comparison-grid">

                    <div class="comparison-card">

                        <h3>
                            Point in Time
                        </h3>

                        <p>
                            Balance Sheet
                        </p>

                        <p>
                            Example:
                            December 31, 20X6
                        </p>

                    </div>


                    <div class="comparison-card">

                        <h3>
                            Period of Time
                        </h3>

                        <p>
                            Income Statement
                        </p>

                        <p>
                            Comprehensive Income
                        </p>

                        <p>
                            Cash Flows
                        </p>

                        <p>
                            Changes in Equity
                        </p>

                    </div>

                </div>


                <div class="key-points">

                    <h3>CPA trap</h3>

                    <p>
                        The balance sheet reports a financial
                        position at a particular date.
                    </p>

                    <p>
                        Statements such as the income statement
                        report activity occurring during a period.
                    </p>

                </div>



                <h2>
                    How the statements connect
                </h2>

                <p>
                    The statements are not independent documents.
                    Information flows between them.
                </p>


                <h3>
                    Example
                </h3>

                <p>
                    Assume a corporation earns
                    <strong>$100,000</strong> of net income
                    and declares <strong>$30,000</strong>
                    of dividends during the year.
                </p>


                <div class="formula-box">

                    Increase in Retained Earnings =
                    Net Income − Dividends

                </div>


                <div class="formula-box">

                    $100,000 − $30,000
                    =
                    $70,000 increase

                </div>


                <p>
                    The $100,000 net income comes from the
                    income statement.
                </p>

                <p>
                    That income affects retained earnings,
                    which is an equity account reported on
                    the balance sheet.
                </p>

                <p>
                    Dividends reduce retained earnings but
                    are not expenses on the income statement.
                </p>


                <div class="key-points">

                    <h3>Important CPA distinction</h3>

                    <p>
                        <strong>Dividends ≠ Expense</strong>
                    </p>

                    <p>
                        Dividends are distributions to owners
                        and generally reduce retained earnings.
                    </p>

                </div>



                <h2>
                    Accrual accounting matters
                </h2>

                <p>
                    Financial statements prepared under
                    accrual accounting do not simply report
                    cash receipts and cash payments.
                </p>


                <div class="example-box">

                    <h3>Example</h3>

                    <p>
                        A company performs
                        <strong>$40,000 of services</strong>
                        in December and collects the cash
                        in January.
                    </p>

                    <p>
                        Assuming the applicable revenue
                        recognition requirements have been
                        satisfied in December, December
                        financial reporting recognizes:
                    </p>

                    <div class="journal-entry">

                        <div class="journal-row journal-header">

                            <div>Account</div>
                            <div>Debit</div>
                            <div>Credit</div>

                        </div>


                        <div class="journal-row">

                            <div>
                                Accounts Receivable
                            </div>

                            <div>
                                $40,000
                            </div>

                            <div>
                                —
                            </div>

                        </div>


                        <div class="journal-row credit-row">

                            <div>
                                Revenue
                            </div>

                            <div>
                                —
                            </div>

                            <div>
                                $40,000
                            </div>

                        </div>

                    </div>

                </div>


                <p>
                    The income statement therefore reports
                    the revenue in December even though
                    December cash did not increase.
                </p>

                <p>
                    The balance sheet reports the related
                    Accounts Receivable.
                </p>



                <h2>
                    Financial statement articulation
                </h2>

                <p>
                    The financial statements should tell a
                    connected financial story.
                </p>


                <div class="key-points">

                    <ul>

                        <li>
                            Net income affects retained earnings.
                        </li>

                        <li>
                            OCI affects accumulated other
                            comprehensive income within equity.
                        </li>

                        <li>
                            Ending cash on the statement of
                            cash flows should reconcile to the
                            cash reported on the balance sheet.
                        </li>

                        <li>
                            Equity transactions flow through
                            the statement of changes in equity
                            and ending balance-sheet equity.
                        </li>

                    </ul>

                </div>



                <h2>
                    Notes are part of financial reporting
                </h2>

                <p>
                    A number on the face of a financial statement
                    may not provide enough information by itself.
                </p>

                <p>
                    Notes can explain accounting policies,
                    significant estimates, debt terms,
                    contingencies, commitments and other
                    relevant information.
                </p>

                <p>
                    FAR questions may therefore require you
                    to determine not only the correct amount,
                    but also how an item should be presented
                    or disclosed.
                </p>



                <h2>
                    Worked CPA-style example
                </h2>

                <p>
                    Assume the following during the year:
                </p>


                <div class="financial-example">

                    <div>

                        <span>
                            Beginning Retained Earnings
                        </span>

                        <strong>
                            $250,000
                        </strong>

                    </div>


                    <div>

                        <span>
                            Net Income
                        </span>

                        <strong>
                            $90,000
                        </strong>

                    </div>


                    <div>

                        <span>
                            Dividends
                        </span>

                        <strong>
                            ($20,000)
                        </strong>

                    </div>

                </div>


                <h3>
                    Step 1 — Begin with retained earnings
                </h3>

                <div class="formula-box">

                    $250,000

                </div>


                <h3>
                    Step 2 — Add net income
                </h3>

                <div class="formula-box">

                    $250,000 + $90,000
                    =
                    $340,000

                </div>


                <h3>
                    Step 3 — Subtract dividends
                </h3>

                <div class="formula-box">

                    $340,000 − $20,000
                    =
                    $320,000

                </div>


                <p>
                    Ending retained earnings is
                    <strong>$320,000</strong>.
                </p>


                <div class="key-points">

                    <h3>Why this matters</h3>

                    <p>
                        This question connects the income statement
                        to equity and ultimately to the balance sheet.
                    </p>

                    <p>
                        FAR frequently tests relationships between
                        accounts and statements rather than isolated
                        definitions.
                    </p>

                </div>



                <h2>
                    What you should know after this lesson
                </h2>


                <div class="key-points">

                    <ul>

                        <li>
                            Know what each primary financial
                            statement reports.
                        </li>

                        <li>
                            Distinguish point-in-time reporting
                            from period reporting.
                        </li>

                        <li>
                            Understand that accrual income and
                            cash flow are different measures.
                        </li>

                        <li>
                            Understand how net income,
                            retained earnings and equity connect.
                        </li>

                        <li>
                            Understand that dividends are not
                            income-statement expenses.
                        </li>

                        <li>
                            Understand the role of financial
                            statement notes and disclosures.
                        </li>

                        <li>
                            Think about presentation and
                            disclosure in addition to calculation.
                        </li>

                    </ul>

                </div>

            `,
            {
                question:
                    "A corporation begins the year with $400,000 of retained earnings, reports $120,000 of net income and declares $35,000 of dividends. What is ending retained earnings?",

                answers: [
                    "$245,000",
                    "$365,000",
                    "$485,000",
                    "$555,000"
                ],

                correctAnswer: 2,

                explanation:
                    "Ending retained earnings equals beginning retained earnings plus net income minus dividends: $400,000 + $120,000 − $35,000 = $485,000."
            }
        );

        return;

    }


    if (
    moduleId === 1 &&
    lessonId === 2
) {



    showFARLessonPage(
        1,
        2,
        "Balance Sheet Classification & Presentation",
        `

            <h2>
                Purpose of the balance sheet
            </h2>

            <p>
                The balance sheet presents an entity's
                financial position at a specific date.
            </p>

            <div class="formula-box">

                Assets =
                Liabilities + Stockholders' Equity

            </div>

            <p>
                FAR questions may require you to determine
                not only the correct balance of an account,
                but also where and how that balance should
                appear in the financial statements.
            </p>


            <div class="key-points">

                <h3>CPA mindset</h3>

                <p>
                    Always separate these two questions:
                </p>

                <ol>

                    <li>
                        What is the correct amount?
                    </li>

                    <li>
                        How should that amount be classified
                        and presented?
                    </li>

                </ol>

            </div>



            <h2>
                Classified balance sheet
            </h2>

            <p>
                A classified balance sheet separates assets
                and liabilities into meaningful categories,
                including current and noncurrent classifications.
            </p>


            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>
                        Current Assets
                    </h3>

                    <p>
    Current assets generally include assets expected
    to be realized in cash, sold, or consumed during
    the normal operating cycle or within one year
    from the balance-sheet date, whichever period
    is longer, when applicable.
</p>

                </div>


                <div class="comparison-card">

                    <h3>
                        Noncurrent Assets
                    </h3>

                    <p>
                        Assets not classified as current,
                        such as many long-term investments,
                        property and equipment and intangible assets.
                    </p>

                </div>

            </div>



            <h2>
                Current assets
            </h2>

            <p>
                Common current assets can include:
            </p>

            <div class="key-points">

                <ul>

                    <li>
                        Cash and cash equivalents
                    </li>

                    <li>
                        Short-term receivables
                    </li>

                    <li>
                        Inventory
                    </li>

                    <li>
                        Certain short-term investments
                    </li>

                    <li>
                        Prepaid expenses expected to be
                        consumed in the current period
                    </li>

                </ul>

            </div>


            <h2>
                Operating cycle
            </h2>

            <p>
                The operating cycle is the time between
                acquiring goods or services and ultimately
                converting them into cash through normal operations.
            </p>

            <p>
                This concept matters because some operating
                assets and liabilities can remain current even
                when their realization or settlement extends
                beyond exactly twelve months.
            </p>


            <div class="example-box">

                <h3>Example</h3>

                <p>
                    Assume a business has a normal operating cycle
                    of 15 months.
                </p>

                <p>
                    Inventory expected to be sold and collected
                    within that normal operating cycle may still
                    qualify as current even though the cycle
                    exceeds one year.
                </p>

            </div>


            <div class="key-points">

                <h3>CPA trap</h3>

                <p>
                    Do not automatically use:
                    <strong>"anything over 12 months = noncurrent."</strong>
                </p>

                <p>
                    The operating cycle can matter.
                </p>

            </div>



            <h2>
                Noncurrent assets
            </h2>

            <p>
                Noncurrent assets commonly include:
            </p>

            <div class="key-points">

                <ul>

                    <li>
                        Property, plant and equipment
                    </li>

                    <li>
                        Long-term investments
                    </li>

                    <li>
                        Intangible assets
                    </li>

                    <li>
                        Certain long-term receivables
                    </li>

                    <li>
                        Other assets not meeting
                        current-asset classification
                    </li>

                </ul>

            </div>



            <h2>
                Current liabilities
            </h2>

            <p>
    Current liabilities generally include obligations
    expected to be settled during the normal operating
    cycle or within one year from the balance-sheet date,
    whichever period is longer, when applicable.
</p>


            <div class="key-points">

                <h3>Common examples</h3>

                <ul>

                    <li>
                        Accounts payable
                    </li>

                    <li>
                        Accrued wages payable
                    </li>

                    <li>
                        Certain taxes payable
                    </li>

                    <li>
                        Unearned revenue expected to be
                        earned in the current period
                    </li>

                    <li>
                        Current maturities of long-term debt
                    </li>

                </ul>

            </div>



            <h2>
                Current portion of long-term debt
            </h2>

            <p>
                Long-term debt can contain both a current
                and a noncurrent portion.
            </p>


            <div class="example-box">

                <h3>Example</h3>

                <p>
                    A company reports a
                    <strong>$500,000 long-term note payable</strong>.
                </p>

                <p>
                    Of that amount,
                    <strong>$80,000</strong> is due during
                    the next year.
                </p>

                <p>
                    Ignoring any special classification issues:
                </p>

                <div class="financial-example">

                    <div>

                        <span>
                            Current Liability
                        </span>

                        <strong>
                            $80,000
                        </strong>

                    </div>


                    <div>

                        <span>
                            Noncurrent Liability
                        </span>

                        <strong>
                            $420,000
                        </strong>

                    </div>

                </div>

            </div>


            <div class="formula-box">

                $500,000 − $80,000
                =
                $420,000 noncurrent

            </div>



            <h2>
                Working capital
            </h2>

            <p>
                Working capital measures the excess of
                current assets over current liabilities.
            </p>

            <div class="formula-box">

                Working Capital =
                Current Assets − Current Liabilities

            </div>


            <div class="example-box">

                <h3>Example</h3>

                <p>
                    Current assets = $300,000
                </p>

                <p>
                    Current liabilities = $190,000
                </p>

                <div class="formula-box">

                    $300,000 − $190,000
                    =
                    $110,000 Working Capital

                </div>

            </div>



            <h2>
                Contra accounts
            </h2>

            <p>
                Some accounts reduce the carrying amount
                of another account rather than appearing
                as ordinary liabilities or expenses.
            </p>


            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>
                        Accounts Receivable
                    </h3>

                    <p>
                        $200,000
                    </p>

                </div>


                <div class="comparison-card">

                    <h3>
                        Allowance for Credit Losses
                    </h3>

                    <p>
                        ($12,000)
                    </p>

                </div>

            </div>


            <div class="formula-box">

                Net Accounts Receivable =
                $200,000 − $12,000
                =
                $188,000

            </div>


            <p>
                The allowance is a contra-asset account.
                It reduces the carrying amount of receivables.
            </p>


            <div class="key-points">

                <h3>CPA trap</h3>

                <p>
                    A contra-asset is not automatically
                    classified as a liability simply because
                    it has a credit balance.
                </p>

            </div>



            <h2>
                Accumulated depreciation
            </h2>

            <p>
                Accumulated depreciation is another
                common contra-asset account.
            </p>


            <div class="example-box">

                <p>
                    Equipment cost = $250,000
                </p>

                <p>
                    Accumulated depreciation = $70,000
                </p>

                <div class="formula-box">

                    Net Carrying Amount =
                    $250,000 − $70,000
                    =
                    $180,000

                </div>

            </div>



            <h2>
                Stockholders' equity presentation
            </h2>

            <p>
                Stockholders' equity can include several
                components rather than one single account.
            </p>


            <div class="key-points">

                <ul>

                    <li>
                        Common stock
                    </li>

                    <li>
                        Preferred stock, when applicable
                    </li>

                    <li>
                        Additional paid-in capital
                    </li>

                    <li>
                        Retained earnings
                    </li>

                    <li>
                        Accumulated other comprehensive income or loss
                    </li>

                    <li>
                        Treasury stock as a reduction of equity
                    </li>

                </ul>

            </div>


            <div class="key-points">

                <h3>CPA trap</h3>

                <p>
                    Treasury stock is generally presented
                    as a reduction of stockholders' equity.
                </p>

                <p>
                    It is not presented as an asset merely
                    because the corporation paid cash to
                    reacquire its own shares.
                </p>

            </div>



            <h2>
                Offsetting
            </h2>

            <p>
                Assets and liabilities generally should not
                simply be netted against one another merely
                because doing so makes the balance sheet shorter.
            </p>

            <p>
                Whether amounts may be offset depends on the
                applicable accounting guidance and the facts
                of the arrangement.
            </p>


            <div class="key-points">

                <h3>CPA habit</h3>

                <p>
                    If a problem gives you both an asset and
                    a liability, do not automatically subtract
                    one from the other.
                </p>

            </div>



            <h2>
                Worked CPA-style classification problem
            </h2>

            <p>
                Assume a company reports:
            </p>


            <div class="financial-example">

                <div>
                    <span>Cash</span>
                    <strong>$40,000</strong>
                </div>

                <div>
                    <span>Accounts Receivable, net</span>
                    <strong>$70,000</strong>
                </div>

                <div>
                    <span>Inventory</span>
                    <strong>$90,000</strong>
                </div>

                <div>
                    <span>Prepaid Insurance</span>
                    <strong>$10,000</strong>
                </div>

                <div>
                    <span>Equipment, net</span>
                    <strong>$200,000</strong>
                </div>

                <div>
                    <span>Accounts Payable</span>
                    <strong>$55,000</strong>
                </div>

                <div>
                    <span>Current Portion of Debt</span>
                    <strong>$25,000</strong>
                </div>

            </div>


            <h3>
                Step 1 — Calculate current assets
            </h3>

            <div class="formula-box">

                $40,000
                + $70,000
                + $90,000
                + $10,000
                =
                $210,000

            </div>


            <h3>
                Step 2 — Calculate current liabilities
            </h3>

            <div class="formula-box">

                $55,000 + $25,000
                =
                $80,000

            </div>


            <h3>
                Step 3 — Calculate working capital
            </h3>

            <div class="formula-box">

                $210,000 − $80,000
                =
                $130,000

            </div>


            <p>
                Equipment is excluded from current assets
                because it is a noncurrent asset.
            </p>



            <h2>
                What you should know after this lesson
            </h2>

            <div class="key-points">

                <ul>

                    <li>
                        Distinguish current and noncurrent
                        assets and liabilities.
                    </li>

                    <li>
                        Understand the importance of the
                        operating cycle.
                    </li>

                    <li>
                        Separate current maturities from
                        long-term debt.
                    </li>

                    <li>
                        Calculate working capital.
                    </li>

                    <li>
                        Understand contra-asset presentation.
                    </li>

                    <li>
                        Recognize treasury stock as
                        contra-equity.
                    </li>

                    <li>
                        Do not automatically offset assets
                        and liabilities.
                    </li>

                </ul>

            </div>

        `,
        {
            question:
                "A company has $260,000 of current assets and $175,000 of current liabilities. A $40,000 portion of long-term debt due next year is already included in current liabilities. What is working capital?",

            answers: [
    "$85,000",
    "$45,000",
    "$125,000",
    "$435,000"
],

correctAnswer: 0,

            explanation:
                "Working capital equals current assets minus current liabilities. Because the $40,000 current portion of debt is already included in the $175,000 current-liability total, it must not be subtracted a second time. $260,000 − $175,000 = $85,000."
        }
    );

    return;

}

if (
    moduleId === 1 &&
    lessonId === 3
) {

    showFARLessonPage(
        1,
        3,
        "Income Statement & Comprehensive Income",
        `

            <h2>
                Purpose of the income statement
            </h2>

            <p>
                The income statement reports an entity's
                financial performance over a period of time.
            </p>

            <p>
                At the CPA level, the important question is
                not simply whether an item increased or
                decreased equity.
            </p>

            <p>
                You must determine whether the item belongs
                in net income, other comprehensive income,
                or directly within equity.
            </p>


            <div class="formula-box">

                Revenues and Gains
                −
                Expenses and Losses
                =
                Net Income

            </div>


            <div class="key-points">

                <h3>CPA mindset</h3>

                <p>
                    For every income-related item, ask:
                </p>

                <ol>

                    <li>
                        Is it recognized in the current period?
                    </li>

                    <li>
                        Does it affect continuing operations?
                    </li>

                    <li>
                        Is it part of discontinued operations?
                    </li>

                    <li>
                        Does it belong in OCI instead of net income?
                    </li>

                    <li>
                        Does it require separate presentation
                        or disclosure?
                    </li>

                </ol>

            </div>



            <h2>
                Continuing operations
            </h2>

            <p>
                Most revenues, expenses, gains and losses
                recognized during normal business activity
                ultimately affect income from continuing
                operations.
            </p>


            <div class="key-points">

                <h3>Examples</h3>

                <ul>

                    <li>
                        Sales or service revenue
                    </li>

                    <li>
                        Cost of goods sold
                    </li>

                    <li>
                        Selling expenses
                    </li>

                    <li>
                        General and administrative expenses
                    </li>

                    <li>
                        Depreciation and amortization expense
                    </li>

                    <li>
                        Interest expense
                    </li>

                    <li>
                        Many gains and losses
                    </li>

                </ul>

            </div>



            <h2>
                Unusual or infrequent items
            </h2>

            <p>
                An unusual or infrequent event does not
                automatically get removed from continuing
                operations.
            </p>

            <p>
                Material items may require separate presentation
                or disclosure so users can understand their nature,
                but unusual does not mean "outside net income."
            </p>


            <div class="key-points">

                <h3>CPA trap</h3>

                <p>
                    Under U.S. GAAP, there is no separate
                    extraordinary-items category.
                </p>

                <p>
                    Do not classify an unusual loss as an
                    "extraordinary loss" simply because it
                    rarely occurs.
                </p>

            </div>



            <h2>
                Discontinued operations
            </h2>

            <p>
                Discontinued-operations reporting applies when
                the disposal or classification as held for sale
                of a component represents a strategic shift
                that has, or will have, a major effect on the
                entity's operations and financial results.
            </p>

            <p>
                When the requirements are satisfied,
                discontinued operations are presented separately
                from continuing operations.
            </p>


            <div class="formula-box">

                Income from Continuing Operations

                +

                Discontinued Operations, Net of Tax

                =

                Net Income

            </div>


            <div class="key-points">

                <h3>Important</h3>

                <p>
                    Discontinued operations are generally
                    presented net of applicable income tax effects.
                </p>

            </div>



            <h2>
                Worked discontinued-operations example
            </h2>

            <div class="example-box">

                <p>
                    Income from continuing operations
                    before income tax:
                    <strong>$500,000</strong>
                </p>

                <p>
                    Pretax loss from a qualifying
                    discontinued operation:
                    <strong>$100,000</strong>
                </p>

                <p>
                    Assume a 25% income tax rate for
                    this simplified example.
                </p>


                <h3>
                    Step 1 — Continuing operations
                </h3>

                <div class="formula-box">

                    $500,000 × (1 − 25%)
                    =
                    $375,000

                </div>


                <h3>
                    Step 2 — Discontinued operation
                </h3>

                <div class="formula-box">

                    $100,000 × (1 − 25%)
                    =
                    $75,000 after-tax loss

                </div>


                <h3>
                    Step 3 — Net income
                </h3>

                <div class="formula-box">

                    $375,000 − $75,000
                    =
                    $300,000

                </div>

            </div>



            <h2>
                Comprehensive income
            </h2>

            <p>
                Net income does not capture every recognized
                change in equity arising from nonowner sources.
            </p>

            <p>
                Comprehensive income includes both net income
                and other comprehensive income.
            </p>


            <div class="formula-box">

                Comprehensive Income =
                Net Income + Other Comprehensive Income

            </div>


            <h2>
                Other comprehensive income
            </h2>

            <p>
                Certain items are recognized outside net income
                and instead enter other comprehensive income
                under the applicable accounting guidance.
            </p>


            <div class="key-points">

    <h3>OCI categories</h3>

    <ul>

        <li>
            Certain unrealized gains and losses
            on debt securities classified as
            available-for-sale
        </li>

        <li>
            Certain foreign currency
            translation adjustments
        </li>

        <li>
            Other items specifically required
            by U.S. GAAP to be reported in OCI
            rather than current-period net income
        </li>

    </ul>

</div>


            <div class="key-points">

                <h3>CPA trap</h3>

                <p>
                    Not every unrealized gain or loss belongs
                    in OCI.
                </p>

                <p>
                    Classification depends on the underlying
                    accounting guidance for the specific item.
                </p>

            </div>



            <h2>
                OCI versus AOCI
            </h2>

            <p>
                These terms are related but are not identical.
            </p>


            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>
                        OCI
                    </h3>

                    <p>
                        Other comprehensive income represents
                        qualifying comprehensive-income items
                        recognized during the current period.
                    </p>

                </div>


                <div class="comparison-card">

                    <h3>
                        AOCI
                    </h3>

                    <p>
                        Accumulated other comprehensive income
                        is the cumulative balance of OCI items
                        reported within stockholders' equity.
                    </p>

                </div>

            </div>


            <div class="formula-box">

                Beginning AOCI
                + Current-Period OCI
                ± Applicable Reclassifications
                =
                Ending AOCI

            </div>



            <h2>
                Reclassification adjustments
            </h2>

            <p>
                Some amounts previously recognized in OCI
                may later be reclassified into net income
                when the applicable accounting requirements
                are satisfied.
            </p>

            <p>
                A reclassification adjustment helps prevent
                the same economic effect from being counted
                twice in comprehensive income.
            </p>


            <div class="key-points">

                <h3>CPA mindset</h3>

                <p>
                    When you see an OCI question, track both:
                </p>

                <ul>

                    <li>
                        the current-period OCI effect, and
                    </li>

                    <li>
                        the cumulative AOCI balance in equity.
                    </li>

                </ul>

            </div>



            <h2>
                Presentation of comprehensive income
            </h2>

            <p>
                An entity may present comprehensive income
                in a single continuous statement or in
                two separate but consecutive statements,
                consistent with applicable presentation
                requirements.
            </p>

            <p>
                Regardless of format, net income and the
                components of OCI must remain distinguishable.
            </p>



            <h2>
                Owner transactions are different
            </h2>

            <p>
                Comprehensive income concerns changes in equity
                arising from nonowner sources.
            </p>

            <p>
                Contributions from owners and distributions
                to owners are therefore not components of
                comprehensive income.
            </p>


            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>
                        Included in Comprehensive Income
                    </h3>

                    <p>
                        Net income
                    </p>

                    <p>
                        Other comprehensive income
                    </p>

                </div>


                <div class="comparison-card">

                    <h3>
                        Not Comprehensive Income
                    </h3>

                    <p>
                        Issuing common stock
                    </p>

                    <p>
                        Dividends to shareholders
                    </p>

                    <p>
                        Other owner contributions
                        and distributions
                    </p>

                </div>

            </div>



            <h2>
                Worked comprehensive-income example
            </h2>

            <p>
                Assume a company reports:
            </p>


            <div class="financial-example">

                <div>

                    <span>
                        Net Income
                    </span>

                    <strong>
                        $240,000
                    </strong>

                </div>


                <div>

                    <span>
                        Qualifying OCI Gain
                    </span>

                    <strong>
                        $30,000
                    </strong>

                </div>


                <div>

                    <span>
                        Qualifying OCI Loss
                    </span>

                    <strong>
                        ($12,000)
                    </strong>

                </div>


                <div>

                    <span>
                        Dividends Declared
                    </span>

                    <strong>
                        $20,000
                    </strong>

                </div>

            </div>


            <h3>
                Step 1 — Calculate OCI
            </h3>

            <div class="formula-box">

                $30,000 − $12,000
                =
                $18,000 OCI

            </div>


            <h3>
                Step 2 — Calculate comprehensive income
            </h3>

            <div class="formula-box">

                $240,000 + $18,000
                =
                $258,000

            </div>


            <p>
                The $20,000 dividend is not subtracted when
                calculating comprehensive income because it
                is an owner distribution.
            </p>


            <div class="key-points">

                <h3>CPA trap</h3>

                <p>
                    Dividends reduce retained earnings,
                    but they do not reduce net income or
                    comprehensive income.
                </p>

            </div>



            <h2>
                Income statement relationships
            </h2>

            <div class="key-points">

                <ul>

                    <li>
                        Net income ultimately affects
                        retained earnings.
                    </li>

                    <li>
                        OCI ultimately affects AOCI
                        within equity.
                    </li>

                    <li>
                        Net income + OCI =
                        comprehensive income.
                    </li>

                    <li>
                        Owner contributions and distributions
                        are excluded from comprehensive income.
                    </li>

                </ul>

            </div>



            <h2>
                What you should know after this lesson
            </h2>

            <div class="key-points">

                <ul>

                    <li>
                        Understand the role of
                        continuing operations.
                    </li>

                    <li>
                        Recognize that unusual items do not
                        create an extraordinary-items category.
                    </li>

                    <li>
                        Understand the basic presentation
                        of qualifying discontinued operations.
                    </li>

                    <li>
                        Distinguish net income from
                        comprehensive income.
                    </li>

                    <li>
                        Distinguish OCI from AOCI.
                    </li>

                    <li>
                        Recognize major categories that
                        can produce OCI.
                    </li>

                    <li>
                        Understand the purpose of
                        reclassification adjustments.
                    </li>

                    <li>
                        Exclude owner transactions from
                        comprehensive income.
                    </li>

                </ul>

            </div>

        `,
        {
            question:
                "A company reports net income of $310,000, an $18,000 qualifying gain in other comprehensive income, a $7,000 qualifying loss in other comprehensive income, and $25,000 of dividends declared. What is comprehensive income?",

            answers: [
    "$296,000",
    "$346,000",
    "$328,000",
    "$321,000"
],

correctAnswer: 3,

            explanation:
                "Net OCI is $18,000 − $7,000 = $11,000. Comprehensive income is $310,000 + $11,000 = $321,000. Dividends are owner distributions and are not components of comprehensive income."
        }
    );

    return;

}

if (
    moduleId === 1 &&
    lessonId === 4
) {

    showFARLessonPage(
        1,
        4,
        "Statement of Cash Flows",
        `

            <h2>
                Purpose of the statement of cash flows
            </h2>

            <p>
                The statement of cash flows explains how
                cash and cash equivalents changed during
                the reporting period.
            </p>

            <p>
                Unlike the income statement, which is based
                primarily on accrual accounting, the statement
                of cash flows focuses on actual cash inflows
                and cash outflows.
            </p>


            <div class="formula-box">

                Beginning Cash
                + Net Change in Cash
                =
                Ending Cash

            </div>


            <div class="key-points">

                <h3>CPA mindset</h3>

                <p>
                    For every cash transaction, ask:
                </p>

                <ol>

                    <li>
                        Did cash actually change?
                    </li>

                    <li>
                        If yes, is the cash flow operating,
                        investing or financing?
                    </li>

                    <li>
                        If operating, is the question using
                        the direct or indirect method?
                    </li>

                    <li>
                        Is there a significant noncash
                        investing or financing transaction
                        that must be disclosed separately?
                    </li>

                </ol>

            </div>



            <h2>
                The three classifications
            </h2>


            <div class="statement-grid">


                <div class="statement-card">

                    <h3>
                        Operating Activities
                    </h3>

                    <p>
                        Cash flows associated primarily with
                        transactions and events that enter
                        into the determination of net income,
                        subject to specific classification rules.
                    </p>

                </div>


                <div class="statement-card">

                    <h3>
                        Investing Activities
                    </h3>

                    <p>
                        Cash flows involving many acquisitions
                        and disposals of long-term assets and
                        investments, as well as certain loans.
                    </p>

                </div>


                <div class="statement-card">

                    <h3>
                        Financing Activities
                    </h3>

                    <p>
                        Cash flows involving transactions with
                        owners and creditors that provide or
                        return financing to the entity.
                    </p>

                </div>


            </div>



            <h2>
                Operating activities
            </h2>

            <div class="key-points">

                <h3>Common operating cash flows</h3>

                <ul>

                    <li>
                        Cash collected from customers
                    </li>

                    <li>
                        Cash paid to suppliers
                    </li>

                    <li>
                        Cash paid to employees
                    </li>

                    <li>
                        Cash paid for many operating expenses
                    </li>

                    <li>
                        Interest received under U.S. GAAP
                    </li>

                    <li>
                        Interest paid under U.S. GAAP
                    </li>

                    <li>
                        Dividends received under U.S. GAAP
                    </li>

                    <li>
                        Income taxes paid, generally
                    </li>

                </ul>

            </div>


            <div class="key-points">

                <h3>CPA trap</h3>

                <p>
                    Under U.S. GAAP, interest paid is generally
                    an operating cash flow even though borrowing
                    the principal itself is a financing activity.
                </p>

            </div>



            <h2>
                Investing activities
            </h2>

            <div class="key-points">

                <h3>Common investing cash flows</h3>

                <ul>

                    <li>
                        Purchase of property, plant and equipment
                    </li>

                    <li>
                        Cash received from sale of property,
                        plant and equipment
                    </li>

                    <li>
                        Purchase of many investments
                    </li>

                    <li>
                        Cash received from sale or maturity
                        of many investments
                    </li>

                    <li>
                        Making loans to other entities
                    </li>

                    <li>
                        Collecting principal on those loans
                    </li>

                </ul>

            </div>



            <h2>
                Financing activities
            </h2>

            <div class="key-points">

                <h3>Common financing cash flows</h3>

                <ul>

                    <li>
                        Issuing common or preferred stock
                        for cash
                    </li>

                    <li>
                        Borrowing cash through debt
                    </li>

                    <li>
                        Repaying debt principal
                    </li>

                    <li>
                        Repurchasing the entity's own stock
                    </li>

                    <li>
                        Paying cash dividends to shareholders
                        under U.S. GAAP
                    </li>

                </ul>

            </div>


            <div class="key-points">

                <h3>Memorize this distinction</h3>

                <p>
                    Under U.S. GAAP:
                </p>

                <ul>

                    <li>
                        Interest paid → Operating
                    </li>

                    <li>
                        Dividends paid → Financing
                    </li>

                    <li>
                        Interest received → Operating
                    </li>

                    <li>
                        Dividends received → Operating
                    </li>

                </ul>

            </div>



            <h2>
                Classification example
            </h2>


            <div class="financial-example">

                <div>
                    <span>Cash received from customers</span>
                    <strong>Operating</strong>
                </div>

                <div>
                    <span>Purchase equipment for cash</span>
                    <strong>Investing</strong>
                </div>

                <div>
                    <span>Issue bonds for cash</span>
                    <strong>Financing</strong>
                </div>

                <div>
                    <span>Pay bond principal</span>
                    <strong>Financing</strong>
                </div>

                <div>
                    <span>Pay interest on bonds</span>
                    <strong>Operating</strong>
                </div>

                <div>
                    <span>Pay cash dividend</span>
                    <strong>Financing</strong>
                </div>

            </div>



            <h2>
                Direct versus indirect method
            </h2>

            <p>
                The direct and indirect methods differ in
                how operating cash flows are presented.
            </p>

            <p>
                The investing and financing sections are
                not changed merely because a company uses
                a different operating-section method.
            </p>


            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>
                        Direct Method
                    </h3>

                    <p>
                        Presents major classes of gross
                        operating cash receipts and payments.
                    </p>

                </div>


                <div class="comparison-card">

                    <h3>
                        Indirect Method
                    </h3>

                    <p>
                        Begins with net income and reconciles
                        it to net cash provided by operating
                        activities.
                    </p>

                </div>

            </div>



            <h2>
                Indirect method
            </h2>

            <p>
                This method is heavily calculation-oriented.
            </p>


            <div class="formula-box">

                Net Income

                ± Noncash Items

                ± Gains and Losses

                ± Changes in Operating
                Assets and Liabilities

                =

                Net Cash Provided by
                Operating Activities

            </div>



            <h2>
                Noncash expenses
            </h2>

            <p>
                A noncash expense may reduce net income
                without reducing cash during the period.
            </p>

            <p>
                Under the indirect method, such amounts
                generally need to be reconciled back.
            </p>


            <div class="example-box">

                <h3>Depreciation example</h3>

                <p>
                    Net income includes
                    <strong>$30,000 depreciation expense</strong>.
                </p>

                <p>
                    Depreciation reduced net income but did
                    not itself use $30,000 of current-period cash.
                </p>

                <div class="formula-box">

                    Add back $30,000

                </div>

            </div>



            <h2>
                Gains and losses
            </h2>

            <p>
                A gain or loss included in net income can
                require an adjustment when the related cash
                transaction belongs in another section.
            </p>


            <div class="example-box">

                <h3>Equipment sale</h3>

                <p>
                    Equipment is sold for cash and a
                    <strong>$10,000 gain</strong>
                    is included in net income.
                </p>

                <p>
                    The cash proceeds from selling the
                    equipment are generally reported as
                    an investing cash inflow.
                </p>

                <p>
                    Under the indirect method, the gain
                    included in net income is therefore
                    subtracted in reconciling net income
                    to operating cash flow.
                </p>

                <div class="formula-box">

                    Gain → Subtract

                </div>

            </div>


            <div class="key-points">

                <h3>Useful pattern</h3>

                <p>
                    Under the indirect method:
                </p>

                <ul>

                    <li>
                        Gain included in net income
                        → generally subtract
                    </li>

                    <li>
                        Loss included in net income
                        → generally add back
                    </li>

                </ul>

            </div>



            <h2>
                Changes in operating assets
            </h2>


            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>
                        Operating Asset Increases
                    </h3>

                    <p>
                        Generally subtract.
                    </p>

                </div>


                <div class="comparison-card">

                    <h3>
                        Operating Asset Decreases
                    </h3>

                    <p>
                        Generally add.
                    </p>

                </div>

            </div>


            <div class="example-box">

                <h3>Accounts receivable</h3>

                <p>
                    Accounts Receivable increases by
                    <strong>$20,000</strong>.
                </p>

                <p>
                    This generally indicates that recognized
                    revenue exceeded cash collected from
                    customers by $20,000.
                </p>

                <div class="formula-box">

                    Increase in A/R
                    → Subtract $20,000

                </div>

            </div>



            <h2>
                Changes in operating liabilities
            </h2>


            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>
                        Operating Liability Increases
                    </h3>

                    <p>
                        Generally add.
                    </p>

                </div>


                <div class="comparison-card">

                    <h3>
                        Operating Liability Decreases
                    </h3>

                    <p>
                        Generally subtract.
                    </p>

                </div>

            </div>


            <div class="example-box">

                <h3>Accounts payable</h3>

                <p>
                    Accounts Payable increases by
                    <strong>$15,000</strong>.
                </p>

                <p>
                    This generally means some expenses or
                    purchases recognized during the period
                    have not yet resulted in cash payments.
                </p>

                <div class="formula-box">

                    Increase in A/P
                    → Add $15,000

                </div>

            </div>



            <h2>
                Indirect-method shortcut
            </h2>


            <div class="key-points">

                <ul>

                    <li>
                        Current operating asset ↑
                        → subtract
                    </li>

                    <li>
                        Current operating asset ↓
                        → add
                    </li>

                    <li>
                        Current operating liability ↑
                        → add
                    </li>

                    <li>
                        Current operating liability ↓
                        → subtract
                    </li>

                </ul>

            </div>


            <p>
                Treat this as a reasoning shortcut,
                not a substitute for understanding the
                underlying transaction.
            </p>



            <h2>
                Full indirect-method example
            </h2>

            <p>
                Assume:
            </p>


            <div class="financial-example">

                <div>
                    <span>Net Income</span>
                    <strong>$180,000</strong>
                </div>

                <div>
                    <span>Depreciation Expense</span>
                    <strong>$25,000</strong>
                </div>

                <div>
                    <span>Gain on Sale of Equipment</span>
                    <strong>$8,000</strong>
                </div>

                <div>
                    <span>Increase in Accounts Receivable</span>
                    <strong>$12,000</strong>
                </div>

                <div>
                    <span>Decrease in Inventory</span>
                    <strong>$6,000</strong>
                </div>

                <div>
                    <span>Increase in Accounts Payable</span>
                    <strong>$9,000</strong>
                </div>

            </div>


            <h3>
                Start with net income
            </h3>

            <div class="formula-box">

                $180,000

            </div>


            <h3>
                Add depreciation
            </h3>

            <div class="formula-box">

                $180,000 + $25,000
                =
                $205,000

            </div>


            <h3>
                Subtract gain
            </h3>

            <div class="formula-box">

                $205,000 − $8,000
                =
                $197,000

            </div>


            <h3>
                Subtract increase in A/R
            </h3>

            <div class="formula-box">

                $197,000 − $12,000
                =
                $185,000

            </div>


            <h3>
                Add decrease in inventory
            </h3>

            <div class="formula-box">

                $185,000 + $6,000
                =
                $191,000

            </div>


            <h3>
                Add increase in A/P
            </h3>

            <div class="formula-box">

                $191,000 + $9,000
                =
                $200,000

            </div>


            <p>
                Net cash provided by operating activities:
                <strong>$200,000</strong>.
            </p>



            <h2>
                Direct-method calculations
            </h2>

            <p>
                Under the direct method, you may need to
                convert accrual-basis amounts into actual
                cash receipts and cash payments.
            </p>


            <div class="example-box">

                <h3>Cash collected from customers</h3>

                <p>
                    Sales revenue:
                    <strong>$500,000</strong>
                </p>

                <p>
                    Accounts Receivable increased by:
                    <strong>$30,000</strong>
                </p>

                <p>
                    Because receivables increased,
                    some revenue has not yet been collected.
                </p>

                <div class="formula-box">

                    Cash Collected =
                    $500,000 − $30,000
                    =
                    $470,000

                </div>

            </div>



            <h2>
                Noncash investing and financing activities
            </h2>

            <p>
                Some important transactions affect investing
                or financing accounts without causing an
                immediate cash inflow or outflow.
            </p>


            <div class="key-points">

                <h3>Examples</h3>

                <ul>

                    <li>
                        Issuing stock to acquire equipment
                    </li>

                    <li>
                        Acquiring an asset by assuming debt
                    </li>

                    <li>
                        Certain debt-to-equity conversions
                    </li>

                </ul>

            </div>

            <p>
                Because no cash changed hands, these transactions
                are not reported as ordinary cash inflows and
                outflows in the three main sections.
            </p>

            <p>
                Significant noncash investing and financing
                activities are disclosed separately.
            </p>


            <div class="key-points">

                <h3>CPA trap</h3>

                <p>
                    Purchasing $100,000 of equipment by issuing
                    $100,000 of stock does NOT create a
                    $100,000 investing cash outflow and a
                    $100,000 financing cash inflow.
                </p>

                <p>
                    Cash never changed.
                </p>

            </div>



            <h2>
                Statement reconciliation
            </h2>

            <p>
                Ultimately, the operating, investing and
                financing sections explain the change in cash.
            </p>


            <div class="formula-box">

                Net Operating Cash Flow

                + Net Investing Cash Flow

                + Net Financing Cash Flow

                =

                Net Change in Cash

            </div>


            <div class="example-box">

                <p>
                    Operating cash flow:
                    <strong>$200,000</strong>
                </p>

                <p>
                    Investing cash flow:
                    <strong>($140,000)</strong>
                </p>

                <p>
                    Financing cash flow:
                    <strong>$25,000</strong>
                </p>

                <div class="formula-box">

                    $200,000
                    − $140,000
                    + $25,000
                    =
                    $85,000 increase in cash

                </div>

            </div>



            <h2>
                What you should know after this lesson
            </h2>


            <div class="key-points">

                <ul>

                    <li>
                        Classify cash flows as operating,
                        investing or financing.
                    </li>

                    <li>
                        Know the important U.S. GAAP
                        classifications for interest
                        and dividends.
                    </li>

                    <li>
                        Understand direct versus
                        indirect presentation.
                    </li>

                    <li>
                        Reconcile net income to operating
                        cash flow under the indirect method.
                    </li>

                    <li>
                        Correctly handle changes in operating
                        assets and liabilities.
                    </li>

                    <li>
                        Correctly handle depreciation,
                        gains and losses.
                    </li>

                    <li>
                        Calculate cash collections under
                        the direct method.
                    </li>

                    <li>
                        Identify significant noncash
                        investing and financing activities.
                    </li>

                </ul>

            </div>

        `,
        {
            question:
                "Using the indirect method, a company reports net income of $150,000, depreciation expense of $20,000, a $6,000 gain on sale of equipment, a $14,000 increase in Accounts Receivable, and a $9,000 increase in Accounts Payable. What is net cash provided by operating activities?",

            answers: [
                "$141,000",
                "$159,000",
                "$171,000",
                "$177,000"
            ],

            correctAnswer: 1,

            explanation:
                "Start with $150,000 of net income. Add $20,000 depreciation, subtract the $6,000 gain, subtract the $14,000 increase in Accounts Receivable, and add the $9,000 increase in Accounts Payable: $150,000 + $20,000 − $6,000 − $14,000 + $9,000 = $159,000."
        }
    );

    return;

}

if (
    moduleId === 1 &&
    lessonId === 5
) {

    showFARLessonPage(
        1,
        5,
        "Statement of Changes in Equity",
        `

            <h2>
                Purpose of the statement of changes in equity
            </h2>

            <p>
                The statement of changes in equity explains
                how each major component of stockholders'
                equity changed during the reporting period.
            </p>

            <p>
                At the CPA level, you should be able to connect
                transactions involving owners, net income,
                dividends, OCI and treasury stock to ending equity.
            </p>


            <div class="key-points">

                <h3>Main equity components can include</h3>

                <ul>

                    <li>
                        Common stock
                    </li>

                    <li>
                        Preferred stock
                    </li>

                    <li>
                        Additional paid-in capital
                    </li>

                    <li>
                        Retained earnings
                    </li>

                    <li>
                        Accumulated other comprehensive
                        income or loss
                    </li>

                    <li>
                        Treasury stock
                    </li>

                </ul>

            </div>



            <h2>
                The basic retained earnings roll-forward
            </h2>


            <div class="formula-box">

                Beginning Retained Earnings
                + Net Income
                − Dividends
                ± Applicable Adjustments
                =
                Ending Retained Earnings

            </div>


            <div class="example-box">

                <p>
                    Beginning retained earnings:
                    <strong>$300,000</strong>
                </p>

                <p>
                    Net income:
                    <strong>$90,000</strong>
                </p>

                <p>
                    Dividends:
                    <strong>$25,000</strong>
                </p>

                <div class="formula-box">

                    $300,000
                    + $90,000
                    − $25,000
                    =
                    $365,000

                </div>

            </div>


            <div class="key-points">

                <h3>CPA trap</h3>

                <p>
                    Dividends reduce retained earnings,
                    but they are not expenses and do not
                    reduce net income.
                </p>

            </div>



            <h2>
                Common stock and APIC
            </h2>

            <p>
                When shares are issued for cash,
                stockholders' equity generally increases.
            </p>


            <div class="example-box">

                <p>
                    A corporation issues
                    <strong>10,000 shares</strong>
                    of $2 par common stock for
                    <strong>$15 per share</strong>.
                </p>


                <h3>
                    Cash received
                </h3>

                <div class="formula-box">

                    10,000 × $15
                    =
                    $150,000

                </div>


                <h3>
                    Common stock
                </h3>

                <div class="formula-box">

                    10,000 × $2
                    =
                    $20,000

                </div>


                <h3>
                    Additional paid-in capital
                </h3>

                <div class="formula-box">

                    $150,000 − $20,000
                    =
                    $130,000

                </div>


                <div class="journal-entry">

                    <div class="journal-row journal-header">

                        <div>Account</div>
                        <div>Debit</div>
                        <div>Credit</div>

                    </div>


                    <div class="journal-row">

                        <div>Cash</div>
                        <div>$150,000</div>
                        <div>—</div>

                    </div>


                    <div class="journal-row credit-row">

                        <div>Common Stock</div>
                        <div>—</div>
                        <div>$20,000</div>

                    </div>


                    <div class="journal-row credit-row">

                        <div>Additional Paid-In Capital</div>
                        <div>—</div>
                        <div>$130,000</div>

                    </div>

                </div>

            </div>



            <h2>
                Treasury stock
            </h2>

            <p>
                Treasury stock represents shares issued
                and later reacquired by the corporation.
            </p>

            <p>
                Treasury stock is generally a contra-equity
                account and reduces total stockholders' equity.
            </p>


            <div class="example-box">

                <p>
                    A corporation repurchases 2,000 shares
                    for $18 each.
                </p>

                <div class="formula-box">

                    2,000 × $18
                    =
                    $36,000

                </div>

                <p>
                    Under the cost method, Treasury Stock
                    is debited for $36,000.
                </p>

            </div>


            <div class="key-points">

                <h3>CPA trap</h3>

                <p>
                    Treasury stock is not an asset.
                </p>

                <p>
                    The corporation cannot create an asset
                    simply by purchasing its own shares.
                </p>

            </div>



            <h2>
                AOCI
            </h2>

            <p>
                Accumulated other comprehensive income
                captures the cumulative balance of OCI items
                that have not otherwise been reclassified
                or removed under the applicable guidance.
            </p>


            <div class="formula-box">

                Beginning AOCI
                + Current-Period OCI
                ± Reclassification Adjustments
                =
                Ending AOCI

            </div>



            <h2>
                Owner transactions versus performance
            </h2>

            <p>
                The statement of changes in equity brings together
                both owner transactions and performance-related items.
            </p>


            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>
                        Performance-related
                    </h3>

                    <p>
                        Net income
                    </p>

                    <p>
                        OCI
                    </p>

                </div>


                <div class="comparison-card">

                    <h3>
                        Owner-related
                    </h3>

                    <p>
                        Stock issuances
                    </p>

                    <p>
                        Dividends
                    </p>

                    <p>
                        Treasury stock transactions
                    </p>

                </div>

            </div>



            <h2>
                Full equity roll-forward example
            </h2>

            <p>
                Assume the following beginning balances:
            </p>


            <div class="financial-example">

                <div>
                    <span>Common Stock</span>
                    <strong>$100,000</strong>
                </div>

                <div>
                    <span>APIC</span>
                    <strong>$250,000</strong>
                </div>

                <div>
                    <span>Retained Earnings</span>
                    <strong>$400,000</strong>
                </div>

                <div>
                    <span>AOCI</span>
                    <strong>$20,000</strong>
                </div>

                <div>
                    <span>Treasury Stock</span>
                    <strong>($50,000)</strong>
                </div>

            </div>


            <p>
                During the year:
            </p>

            <div class="key-points">

                <ul>

                    <li>
                        Net income = $120,000
                    </li>

                    <li>
                        Dividends = $30,000
                    </li>

                    <li>
                        Current-period OCI gain = $15,000
                    </li>

                    <li>
                        New shares issued increase
                        Common Stock by $10,000
                    </li>

                    <li>
                        The same issuance increases
                        APIC by $60,000
                    </li>

                    <li>
                        Additional treasury stock is
                        purchased for $25,000
                    </li>

                </ul>

            </div>


            <h3>
                Ending Common Stock
            </h3>

            <div class="formula-box">

                $100,000 + $10,000
                =
                $110,000

            </div>


            <h3>
                Ending APIC
            </h3>

            <div class="formula-box">

                $250,000 + $60,000
                =
                $310,000

            </div>


            <h3>
                Ending Retained Earnings
            </h3>

            <div class="formula-box">

                $400,000
                + $120,000
                − $30,000
                =
                $490,000

            </div>


            <h3>
                Ending AOCI
            </h3>

            <div class="formula-box">

                $20,000 + $15,000
                =
                $35,000

            </div>


            <h3>
                Ending Treasury Stock
            </h3>

            <div class="formula-box">

                ($50,000) − $25,000
                =
                ($75,000)

            </div>


            <h3>
                Ending Total Stockholders' Equity
            </h3>

            <div class="formula-box">

                $110,000
                + $310,000
                + $490,000
                + $35,000
                − $75,000
                =
                $870,000

            </div>



            <h2>
                Relationship to the balance sheet
            </h2>

            <p>
                Ending balances from the statement of
                changes in equity flow into the equity
                section of the ending balance sheet.
            </p>

            <p>
                This is another example of financial
                statement articulation.
            </p>



            <h2>
                What you should know after this lesson
            </h2>

            <div class="key-points">

                <ul>

                    <li>
                        Roll forward retained earnings.
                    </li>

                    <li>
                        Separate par value from APIC
                        when shares are issued.
                    </li>

                    <li>
                        Understand treasury stock
                        as contra-equity.
                    </li>

                    <li>
                        Understand how OCI affects AOCI.
                    </li>

                    <li>
                        Distinguish owner transactions
                        from performance-related changes.
                    </li>

                    <li>
                        Connect ending equity balances
                        to the balance sheet.
                    </li>

                </ul>

            </div>

        `,
        {
            question:
                "A corporation begins the year with $500,000 of retained earnings. During the year it reports $140,000 of net income and declares $45,000 of dividends. What is ending retained earnings?",

            answers: [
                "$315,000",
                "$455,000",
                "$595,000",
                "$685,000"
            ],

            correctAnswer: 2,

            explanation:
                "Ending retained earnings equals beginning retained earnings plus net income minus dividends: $500,000 + $140,000 − $45,000 = $595,000."
        }
    );

    return;

}

if (
    moduleId === 1 &&
    lessonId === 6
) {

    showFARLessonPage(
        1,
        6,
        "Notes to Financial Statements & Disclosures",
        `

            <h2>
                Why financial statement notes matter
            </h2>

            <p>
                The numbers presented on the face of the
                financial statements often do not provide
                enough information by themselves.
            </p>

            <p>
                Notes to the financial statements provide
                additional information needed to understand
                the entity's financial position,
                financial performance and significant risks.
            </p>


            <div class="key-points">

                <h3>CPA mindset</h3>

                <p>
                    A FAR question may ask:
                </p>

                <ol>

                    <li>
                        Should the item be recognized?
                    </li>

                    <li>
                        Where should it be presented?
                    </li>

                    <li>
                        Is additional disclosure required?
                    </li>

                    <li>
                        Is disclosure alone sufficient?
                    </li>

                </ol>

            </div>



            <h2>
                Notes do not replace recognition
            </h2>

            <p>
                If U.S. GAAP requires an amount to be
                recognized in the financial statements,
                a company generally cannot avoid recognition
                merely by describing the item in a footnote.
            </p>


            <div class="key-points">

                <h3>Important principle</h3>

                <p>
                    <strong>
                        Required recognition cannot normally
                        be replaced by disclosure.
                    </strong>
                </p>

            </div>


            <div class="example-box">

                <h3>Example</h3>

                <p>
                    Assume a company has incurred
                    <strong>$50,000 of wages</strong>
                    before year-end that have not yet been paid.
                </p>

                <p>
                    If the wages meet the requirements for
                    recognition, simply mentioning the unpaid
                    wages in a note is not enough.
                </p>

                <div class="journal-entry">

                    <div class="journal-row journal-header">

                        <div>Account</div>
                        <div>Debit</div>
                        <div>Credit</div>

                    </div>


                    <div class="journal-row">

                        <div>Wages Expense</div>
                        <div>$50,000</div>
                        <div>—</div>

                    </div>


                    <div class="journal-row credit-row">

                        <div>Wages Payable</div>
                        <div>—</div>
                        <div>$50,000</div>

                    </div>

                </div>

            </div>



            <h2>
                Significant accounting policies
            </h2>

            <p>
                Financial statement users need to understand
                the important accounting principles and methods
                used in preparing the statements.
            </p>

            <p>
                Significant accounting policy information may
                include matters such as:
            </p>


            <div class="key-points">

                <ul>

                    <li>
                        Revenue recognition policies
                    </li>

                    <li>
                        Inventory accounting methods
                    </li>

                    <li>
                        Depreciation and amortization methods
                    </li>

                    <li>
                        Basis of consolidation
                    </li>

                    <li>
                        Significant measurement policies
                    </li>

                </ul>

            </div>


            <div class="key-points">

                <h3>CPA trap</h3>

                <p>
                    The purpose of an accounting-policy note
                    is not to repeat every accounting rule
                    contained in U.S. GAAP.
                </p>

                <p>
                    The disclosure should help users understand
                    the significant policies relevant to the
                    entity's financial statements.
                </p>

            </div>



            <h2>
                Estimates and uncertainty
            </h2>

            <p>
                Financial reporting frequently requires estimates.
            </p>

            <p>
                Examples include estimates involving:
            </p>


            <div class="key-points">

                <ul>

                    <li>
                        Credit losses
                    </li>

                    <li>
                        Useful lives and residual values
                    </li>

                    <li>
                        Impairment
                    </li>

                    <li>
                        Contingencies
                    </li>

                    <li>
                        Fair value measurements
                    </li>

                    <li>
                        Certain income tax amounts
                    </li>

                </ul>

            </div>


            <p>
                Depending on the facts and applicable guidance,
                disclosures may help users understand significant
                assumptions, uncertainty and exposure to changes
                in estimates.
            </p>



            <h2>
                Debt disclosures
            </h2>

            <p>
                A balance sheet may show a single debt amount,
                but users may also need information concerning
                the nature and terms of the borrowing.
            </p>


            <div class="key-points">

                <h3>Relevant information can include</h3>

                <ul>

                    <li>
                        Interest rates
                    </li>

                    <li>
                        Maturity dates
                    </li>

                    <li>
                        Collateral
                    </li>

                    <li>
                        Restrictive covenants
                    </li>

                    <li>
                        Future maturities
                    </li>

                    <li>
                        Defaults or other significant matters,
                        when applicable
                    </li>

                </ul>

            </div>


            <div class="example-box">

                <p>
                    The balance sheet reports:
                </p>

                <div class="formula-box">

                    Long-Term Debt = $800,000

                </div>

                <p>
                    That amount alone may not explain when
                    the debt matures, what interest rate applies,
                    or whether assets are pledged as collateral.
                </p>

                <p>
                    Appropriate note disclosure supplies
                    additional relevant information.
                </p>

            </div>



            <h2>
                Contingencies
            </h2>

            <p>
                Contingencies are a major example of why
                recognition and disclosure must be considered
                separately.
            </p>

            <p>
                Depending on the probability of loss,
                estimability and applicable guidance,
                a contingency may require:
            </p>


            <div class="key-points">

                <ul>

                    <li>
                        Recognition and disclosure
                    </li>

                    <li>
                        Disclosure without recognition
                    </li>

                    <li>
                        Or, in some circumstances,
                        neither recognition nor disclosure
                    </li>

                </ul>

            </div>


            <div class="key-points">

                <h3>CPA habit</h3>

                <p>
                    Do not memorize:
                    <strong>"lawsuit = disclose."</strong>
                </p>

                <p>
                    Analyze the probability, ability to
                    estimate the loss, and the applicable rule.
                </p>

            </div>



            <h2>
                Related-party disclosures
            </h2>

            <p>
                Transactions with related parties may require
                disclosure because they may not have occurred
                under the same conditions as transactions
                between independent parties.
            </p>


            <div class="key-points">

                <h3>Information may include</h3>

                <ul>

                    <li>
                        Nature of the relationship
                    </li>

                    <li>
                        Description of transactions
                    </li>

                    <li>
                        Dollar amounts of transactions
                    </li>

                    <li>
                        Amounts due to or from related parties
                    </li>

                </ul>

            </div>


            <div class="key-points">

                <h3>CPA trap</h3>

                <p>
                    A transaction with a related party is
                    not automatically fraudulent or invalid.
                </p>

                <p>
                    The issue is that users may need enough
                    information to understand the relationship
                    and transaction.
                </p>

            </div>



            <h2>
                Commitments
            </h2>

            <p>
                Some contractual commitments may not yet
                create recognized assets or liabilities,
                but may still be important to financial
                statement users.
            </p>

            <p>
                Applicable guidance may therefore require
                disclosure of significant commitments.
            </p>


            <div class="example-box">

                <h3>Example</h3>

                <p>
                    A company signs a significant future
                    purchase commitment.
                </p>

                <p>
                    If the agreement does not yet meet the
                    requirements for recognizing an asset
                    or liability, this does not automatically
                    mean the commitment is irrelevant to
                    financial statement users.
                </p>

            </div>



            <h2>
                Subsequent events
            </h2>

            <p>
                Events occurring after the balance-sheet date
                but before the financial statements are issued
                or available to be issued can affect reporting.
            </p>

            <p>
                Depending on the nature of the event, it may
                require adjustment, disclosure, or neither.
            </p>

            <p>
                We will study the detailed rules separately
                in <strong>Lesson 9</strong>.
            </p>



            <h2>
                Concentrations and risks
            </h2>

            <p>
                Certain concentrations and significant risks
                may require disclosure when they create
                important exposure for the entity.
            </p>

            <p>
                Examples can involve dependence on significant:
            </p>


            <div class="key-points">

                <ul>

                    <li>
                        Customers
                    </li>

                    <li>
                        Suppliers
                    </li>

                    <li>
                        Markets
                    </li>

                    <li>
                        Products
                    </li>

                    <li>
                        Geographic areas
                    </li>

                </ul>

            </div>



            <h2>
                Face of statements versus notes
            </h2>


            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>
                        Face of Statements
                    </h3>

                    <p>
                        Presents recognized financial statement
                        amounts and required line items.
                    </p>

                </div>


                <div class="comparison-card">

                    <h3>
                        Notes
                    </h3>

                    <p>
                        Explain, disaggregate and provide
                        additional information needed to
                        understand those statements.
                    </p>

                </div>

            </div>



            <h2>
                CPA-style presentation example
            </h2>

            <p>
                Assume a company has:
            </p>


            <div class="financial-example">

                <div>
                    <span>Notes Payable</span>
                    <strong>$600,000</strong>
                </div>

                <div>
                    <span>Current Portion</span>
                    <strong>$100,000</strong>
                </div>

                <div>
                    <span>Long-Term Portion</span>
                    <strong>$500,000</strong>
                </div>

            </div>


            <p>
                The balance sheet may separately present
                the current and noncurrent portions.
            </p>

            <p>
                The notes can then provide additional information
                about maturity dates, interest rates, collateral
                and other significant terms.
            </p>


            <div class="key-points">

                <h3>Big idea</h3>

                <p>
                    Presentation answers:
                    <strong>"What amount appears where?"</strong>
                </p>

                <p>
                    Disclosure answers:
                    <strong>
                        "What additional information does the
                        user need to understand that amount?"
                    </strong>
                </p>

            </div>



            <h2>
                What you should know after this lesson
            </h2>

            <div class="key-points">

                <ul>

                    <li>
                        Understand the purpose of
                        financial statement notes.
                    </li>

                    <li>
                        Know that disclosure does not normally
                        replace required recognition.
                    </li>

                    <li>
                        Understand significant accounting
                        policy disclosures.
                    </li>

                    <li>
                        Recognize why estimates and uncertainty
                        may require additional information.
                    </li>

                    <li>
                        Understand the purpose of debt,
                        contingency, related-party and
                        commitment disclosures.
                    </li>

                    <li>
                        Distinguish information presented
                        on the face of statements from
                        information explained in the notes.
                    </li>

                </ul>

            </div>

        `,
        {
            question:
                "A company has incurred $70,000 of employee compensation before year-end that meets the requirements for recognition, but the amount will not be paid until next year. Which treatment is most appropriate?",

            answers: [
    "Disclose the obligation only in the notes and record nothing",
    "Wait until cash is paid because financial statements report only cash transactions",
    "Record the amount directly as a reduction of common stock",
    "Recognize the expense and liability; disclosure does not substitute for required recognition"
],

correctAnswer: 3,

            explanation:
                "When an expense and related liability meet the requirements for recognition, the company records them in the financial statements. A note cannot normally be used as a substitute for required recognition."
        }
    );

    return;

}


if (
    moduleId === 1 &&
    lessonId === 7
) {

    showFARLessonPage(
        1,
        7,
        "Accounting Changes",
        `

            <h2>
                Why accounting changes matter
            </h2>

            <p>
                Accounting can change from one reporting
                period to another for several different reasons.
            </p>

            <p>
                The accounting treatment depends on
                <strong>what type of change occurred</strong>.
            </p>


            <div class="key-points">

                <h3>Three major categories</h3>

                <ul>

                    <li>
                        Change in accounting principle
                    </li>

                    <li>
                        Change in accounting estimate
                    </li>

                    <li>
                        Change in reporting entity
                    </li>

                </ul>

            </div>


            <div class="key-points">

                <h3>CPA mindset</h3>

                <p>
                    Solve accounting-change questions
                    in this order:
                </p>

                <ol>

                    <li>
                        Identify what changed.
                    </li>

                    <li>
                        Classify the change.
                    </li>

                    <li>
                        Determine whether the treatment is
                        retrospective or prospective.
                    </li>

                    <li>
                        Determine whether prior-period
                        financial statements or beginning
                        equity must be adjusted.
                    </li>

                </ol>

            </div>



            <h2>
                Change in accounting principle
            </h2>

            <p>
                A change in accounting principle occurs when
                an entity changes from one generally accepted
                accounting principle to another generally
                accepted accounting principle.
            </p>


            <div class="example-box">

                <h3>Example</h3>

                <p>
                    A company changes its inventory-costing
                    method from FIFO to weighted-average.
                </p>

                <p>
                    This generally represents a change
                    in accounting principle.
                </p>

            </div>


            <div class="key-points">

                <h3>General treatment</h3>

                <p>
                    Changes in accounting principle are
                    generally applied
                    <strong>retrospectively</strong>
                    when retrospective application is required
                    and practicable.
                </p>

            </div>



            <h2>
                Retrospective application
            </h2>

            <p>
                Retrospective application generally presents
                prior periods as though the newly adopted
                accounting principle had been used in those
                periods, subject to the applicable guidance.
            </p>

            <p>
                When necessary, the carrying amounts of assets
                and liabilities as of the beginning of the
                earliest period presented are adjusted.
            </p>

            <p>
                An offsetting adjustment may also be required
                to the opening balance of retained earnings
                or another appropriate component of equity.
            </p>


            <div class="example-box">

                <h3>Simplified example</h3>

                <p>
                    Assume retrospective application of a new
                    accounting principle requires beginning
                    retained earnings to increase by
                    <strong>$24,000</strong>.
                </p>

                <p>
                    Beginning retained earnings before
                    adjustment:
                    <strong>$400,000</strong>
                </p>

                <div class="formula-box">

                    $400,000 + $24,000
                    =
                    $424,000 adjusted beginning
                    retained earnings

                </div>

            </div>


            <div class="key-points">

                <h3>CPA trap</h3>

                <p>
                    Retrospective application does not mean
                    putting the entire effect of the change
                    into current-period net income.
                </p>

            </div>



            <h2>
                Change in accounting estimate
            </h2>

            <p>
                Estimates are necessary because some amounts
                cannot be known with certainty when financial
                statements are prepared.
            </p>

            <p>
                New information or new experience may cause
                management to revise an estimate.
            </p>


            <div class="key-points">

                <h3>Examples</h3>

                <ul>

                    <li>
                        Useful life of depreciable equipment
                    </li>

                    <li>
                        Residual value
                    </li>

                    <li>
                        Expected credit losses
                    </li>

                    <li>
                        Certain warranty obligations
                    </li>

                    <li>
                        Other estimates affected by
                        updated information
                    </li>

                </ul>

            </div>


            <div class="key-points">

                <h3>General treatment</h3>

                <p>
                    Changes in accounting estimates are
                    generally accounted for
                    <strong>prospectively</strong>.
                </p>

                <p>
                    Prior-period financial statements are
                    not revised merely because an estimate
                    changed based on new information.
                </p>

            </div>



            <h2>
                Prospective treatment
            </h2>

            <p>
                Prospective treatment affects the current
                period and, when applicable, future periods.
            </p>


            <div class="example-box">

                <h3>Depreciation estimate example</h3>

                <p>
                    Equipment originally cost:
                    <strong>$120,000</strong>
                </p>

                <p>
                    Accumulated depreciation at the date
                    of the estimate change:
                    <strong>$48,000</strong>
                </p>

                <p>
                    Revised residual value:
                    <strong>$12,000</strong>
                </p>

                <p>
                    Revised remaining useful life:
                    <strong>5 years</strong>
                </p>


                <h3>
                    Step 1 — Determine carrying amount
                </h3>

                <div class="formula-box">

                    $120,000 − $48,000
                    =
                    $72,000

                </div>


                <h3>
                    Step 2 — Determine remaining
                    depreciable amount
                </h3>

                <div class="formula-box">

                    $72,000 − $12,000
                    =
                    $60,000

                </div>


                <h3>
                    Step 3 — Calculate revised
                    annual depreciation
                </h3>

                <div class="formula-box">

                    $60,000 ÷ 5
                    =
                    $12,000 per year

                </div>


                <p>
                    Previously recognized depreciation is
                    not rewritten merely because the estimate
                    changed.
                </p>

            </div>



            <h2>
                Change in estimate effected by
                a change in accounting principle
            </h2>

            <p>
                Sometimes separating a change in principle
                from a change in estimate is difficult because
                the new accounting method is adopted as a
                consequence of a change in estimate.
            </p>

            <p>
                Such a change is treated as a
                <strong>change in accounting estimate</strong>
                and therefore generally accounted for
                prospectively.
            </p>


            <div class="key-points">

                <h3>Classic CPA example</h3>

                <p>
                    A change in depreciation method is generally
                    treated as a change in estimate effected
                    by a change in accounting principle.
                </p>

                <p>
                    Therefore, it is generally applied
                    prospectively.
                </p>

            </div>


            <div class="key-points">

                <h3>CPA trap</h3>

                <p>
                    Seeing the word "method" does not
                    automatically mean retrospective treatment.
                </p>

                <p>
                    A change in depreciation method is the
                    major exception you should recognize.
                </p>

            </div>



            <h2>
                Change in reporting entity
            </h2>

            <p>
                A change in reporting entity occurs when
                financial statements are presented for an
                entity that is different from the entity
                represented in previously issued financial
                statements.
            </p>


            <div class="key-points">

                <h3>Examples can include</h3>

                <ul>

                    <li>
                        Changing the subsidiaries included
                        in consolidated financial statements
                        in a manner constituting a change
                        in reporting entity
                    </li>

                    <li>
                        Changing the companies included
                        in combined financial statements
                    </li>

                </ul>

            </div>


            <div class="key-points">

                <h3>General treatment</h3>

                <p>
                    Changes in reporting entity are generally
                    applied <strong>retrospectively</strong>
                    to financial statements of prior periods
                    presented.
                </p>

            </div>



            <h2>
                Principle vs estimate
            </h2>


            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>
                        Accounting Principle
                    </h3>

                    <p>
                        Change from one acceptable accounting
                        principle to another.
                    </p>

                    <p>
                        Generally retrospective.
                    </p>

                </div>


                <div class="comparison-card">

                    <h3>
                        Accounting Estimate
                    </h3>

                    <p>
                        Revision resulting from new information
                        or experience.
                    </p>

                    <p>
                        Generally prospective.
                    </p>

                </div>

            </div>



            <h2>
                Accounting change versus error
            </h2>

            <p>
                An accounting change is not the same thing
                as correcting an accounting error.
            </p>

            <p>
                A legitimate revision of an estimate caused
                by new information is not an error merely
                because the old estimate turned out to be
                different from the final result.
            </p>


            <div class="example-box">

                <h3>Estimate change</h3>

                <p>
                    A machine was originally expected to last
                    ten years, but new information indicates
                    that it will now last only eight years.
                </p>

                <p>
                    Assuming the original estimate was reasonable
                    when made, this is generally a change
                    in estimate rather than an error.
                </p>

            </div>


            <div class="example-box">

                <h3>Error</h3>

                <p>
                    A company discovers that a prior-year
                    mathematical calculation was simply wrong.
                </p>

                <p>
                    That is an error, not a change in estimate.
                </p>

                <p>
                    Error corrections are covered in
                    <strong>Lesson 8</strong>.
                </p>

            </div>



            <h2>
                Quick classification framework
            </h2>


            <div class="financial-example">

                <div>

                    <span>
                        FIFO → Weighted-Average
                    </span>

                    <strong>
                        Principle
                    </strong>

                </div>


                <div>

                    <span>
                        Revised Useful Life
                    </span>

                    <strong>
                        Estimate
                    </strong>

                </div>


                <div>

                    <span>
                        Revised Residual Value
                    </span>

                    <strong>
                        Estimate
                    </strong>

                </div>


                <div>

                    <span>
                        Change in Depreciation Method
                    </span>

                    <strong>
                        Estimate effected by
                        Principle Change
                    </strong>

                </div>


                <div>

                    <span>
                        Change in Reporting Entity
                    </span>

                    <strong>
                        Reporting Entity
                    </strong>

                </div>


                <div>

                    <span>
                        Prior Mathematical Mistake
                    </span>

                    <strong>
                        Error
                    </strong>

                </div>

            </div>



            <h2>
                Worked CPA-style example
            </h2>

            <p>
                On January 1, a company determines that
                equipment's remaining useful life should
                change from six years to four years because
                of newly available information.
            </p>

            <p>
                Carrying amount on January 1:
                <strong>$92,000</strong>
            </p>

            <p>
                Revised residual value:
                <strong>$12,000</strong>
            </p>


            <h3>
                Step 1 — Classify the change
            </h3>

            <p>
                Revised useful life based on new information
                is a <strong>change in estimate</strong>.
            </p>


            <h3>
                Step 2 — Determine treatment
            </h3>

            <p>
                Apply the change
                <strong>prospectively</strong>.
            </p>


            <h3>
                Step 3 — Calculate revised depreciation
            </h3>

            <div class="formula-box">

                ($92,000 − $12,000) ÷ 4
                =
                $20,000 per year

            </div>


            <p>
                Prior-period depreciation is not restated.
            </p>



            <h2>
                What you should know after this lesson
            </h2>

            <div class="key-points">

                <ul>

                    <li>
                        Distinguish a change in principle
                        from a change in estimate.
                    </li>

                    <li>
                        Know that changes in principle are
                        generally retrospective.
                    </li>

                    <li>
                        Know that changes in estimates are
                        generally prospective.
                    </li>

                    <li>
                        Recognize a change in depreciation
                        method as a change in estimate
                        effected by a change in principle.
                    </li>

                    <li>
                        Understand the treatment of a
                        change in reporting entity.
                    </li>

                    <li>
                        Distinguish legitimate accounting
                        changes from errors.
                    </li>

                    <li>
                        Recalculate depreciation correctly
                        after an estimate change.
                    </li>

                </ul>

            </div>

        `,
        {
            question:
                "A company changes the estimated remaining useful life of equipment because new information indicates that the asset will be productive for longer than previously expected. How should the change generally be accounted for?",

            answers: [
    "Prospectively as a change in accounting estimate",
    "Retrospectively by restating all prior financial statements",
    "As a prior-period error correction",
    "Directly through beginning additional paid-in capital"
],

correctAnswer: 0,

            explanation:
                "A revision of useful life based on new information is a change in accounting estimate. Changes in estimates are generally accounted for prospectively in the period of change and future periods when affected."
        }
    );

    return;

}

if (
    moduleId === 1 &&
    lessonId === 8
) {

    showFARLessonPage(
        1,
        8,
        "Error Corrections",
        `

            <h2>
                Accounting error versus accounting change
            </h2>

            <p>
                An accounting error occurs when previously
                issued financial statements contain an
                incorrect amount or treatment because
                available information was incorrectly used
                or accounting requirements were incorrectly
                applied.
            </p>

            <p>
                This is fundamentally different from a
                legitimate change in accounting estimate
                caused by new information.
            </p>


            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>
                        Accounting Error
                    </h3>

                    <p>
                        Something in the prior accounting
                        was incorrect.
                    </p>

                    <p>
                        Example: an expense was accidentally
                        omitted.
                    </p>

                </div>


                <div class="comparison-card">

                    <h3>
                        Change in Estimate
                    </h3>

                    <p>
                        The original estimate was reasonable,
                        but new information changes the
                        expected amount.
                    </p>

                    <p>
                        Example: revised useful life.
                    </p>

                </div>

            </div>


            <div class="key-points">

                <h3>CPA mindset</h3>

                <p>
                    Before calculating anything, determine:
                </p>

                <ol>

                    <li>
                        Is this actually an error?
                    </li>

                    <li>
                        Which prior accounts were misstated?
                    </li>

                    <li>
                        Is the prior period presented
                        comparatively?
                    </li>

                    <li>
                        What is the effect on beginning
                        retained earnings of the earliest
                        period presented?
                    </li>

                    <li>
                        What correcting entry is needed?
                    </li>

                </ol>

            </div>



            <h2>
                Common accounting errors
            </h2>

            <div class="key-points">

                <ul>

                    <li>
                        Mathematical mistakes
                    </li>

                    <li>
                        Failure to accrue an expense
                    </li>

                    <li>
                        Failure to record earned revenue
                    </li>

                    <li>
                        Recording an asset as an expense
                        or an expense as an asset
                    </li>

                    <li>
                        Incorrect inventory counts
                    </li>

                    <li>
                        Incorrect application of an
                        accounting principle
                    </li>

                    <li>
                        Failure to record depreciation
                    </li>

                </ul>

            </div>



            <h2>
                Prior-period errors
            </h2>

            <p>
                When a material error in previously issued
                financial statements is corrected, the
                correction is generally reflected through
                restatement of the prior-period financial
                statements presented.
            </p>

            <p>
                The cumulative effect of the correction
                on periods before those presented is generally
                reflected as an adjustment to the opening
                balance of retained earnings or another
                appropriate component of equity for the
                earliest period presented.
            </p>


            <div class="key-points">

                <h3>CPA trap</h3>

                <p>
                    A prior-period error generally should not
                    simply be run through current-period
                    income as though it were a current-period
                    expense or revenue.
                </p>

            </div>



            <h2>
                Retained earnings effect
            </h2>

            <p>
                Because prior-period revenues and expenses
                eventually close into retained earnings,
                an error affecting prior-period income can
                cause beginning retained earnings to be wrong.
            </p>


            <div class="example-box">

                <h3>Example — omitted expense</h3>

                <p>
                    Last year, a company failed to record
                    <strong>$30,000 of expense</strong>
                    and the related liability.
                </p>

                <p>
                    Ignoring income taxes, last year's
                    net income was overstated by $30,000.
                </p>

                <p>
                    Therefore, beginning retained earnings
                    this year is also overstated by $30,000.
                </p>


                <div class="formula-box">

                    Correct Beginning Retained Earnings =
                    Reported Beginning Retained Earnings
                    − $30,000

                </div>

            </div>



            <h2>
                Correcting an omitted liability
            </h2>

            <p>
                Assume the $30,000 prior-period expense
                remains unpaid when the error is discovered.
            </p>

            <p>
                Ignoring taxes and assuming the correction
                is made through beginning retained earnings,
                the correcting entry would be:
            </p>


            <div class="journal-entry">

                <div class="journal-row journal-header">

                    <div>Account</div>
                    <div>Debit</div>
                    <div>Credit</div>

                </div>


                <div class="journal-row">

                    <div>Retained Earnings</div>
                    <div>$30,000</div>
                    <div>—</div>

                </div>


                <div class="journal-row credit-row">

                    <div>Liability</div>
                    <div>—</div>
                    <div>$30,000</div>

                </div>

            </div>


            <p>
                Retained earnings is debited because prior
                income, and therefore accumulated retained
                earnings, had been overstated.
            </p>



            <h2>
                Capitalizing an amount that should
                have been expensed
            </h2>

            <p>
                Suppose a company incorrectly capitalized
                a <strong>$40,000 expenditure</strong>
                at the end of the prior year even though
                the entire amount should have been expensed.
            </p>

            <p>
                Ignoring depreciation and income taxes:
            </p>


            <div class="key-points">

                <ul>

                    <li>
                        Assets are overstated by $40,000.
                    </li>

                    <li>
                        Prior-period expenses are
                        understated by $40,000.
                    </li>

                    <li>
                        Prior-period net income is
                        overstated by $40,000.
                    </li>

                    <li>
                        Beginning retained earnings is
                        overstated by $40,000.
                    </li>

                </ul>

            </div>


            <div class="journal-entry">

                <div class="journal-row journal-header">

                    <div>Account</div>
                    <div>Debit</div>
                    <div>Credit</div>

                </div>


                <div class="journal-row">

                    <div>Retained Earnings</div>
                    <div>$40,000</div>
                    <div>—</div>

                </div>


                <div class="journal-row credit-row">

                    <div>Asset</div>
                    <div>—</div>
                    <div>$40,000</div>

                </div>

            </div>



            <h2>
                Expensing an amount that should
                have been capitalized
            </h2>

            <p>
                Now reverse the situation.
            </p>

            <p>
                Assume a company incorrectly expensed
                <strong>$50,000</strong> that should have
                been capitalized as an asset at the very
                end of the prior year.
            </p>

            <p>
                Ignoring depreciation and income taxes:
            </p>


            <div class="key-points">

                <ul>

                    <li>
                        Assets are understated by $50,000.
                    </li>

                    <li>
                        Prior-period expenses are
                        overstated by $50,000.
                    </li>

                    <li>
                        Prior-period net income is
                        understated by $50,000.
                    </li>

                    <li>
                        Beginning retained earnings is
                        understated by $50,000.
                    </li>

                </ul>

            </div>


            <div class="journal-entry">

                <div class="journal-row journal-header">

                    <div>Account</div>
                    <div>Debit</div>
                    <div>Credit</div>

                </div>


                <div class="journal-row">

                    <div>Asset</div>
                    <div>$50,000</div>
                    <div>—</div>

                </div>


                <div class="journal-row credit-row">

                    <div>Retained Earnings</div>
                    <div>—</div>
                    <div>$50,000</div>

                </div>

            </div>



            <h2>
                Inventory errors
            </h2>

            <p>
                Inventory errors are especially important
                because ending inventory affects both the
                balance sheet and cost of goods sold.
            </p>


            <div class="formula-box">

                Beginning Inventory
                + Purchases
                − Ending Inventory
                =
                Cost of Goods Sold

            </div>


            <div class="example-box">

                <h3>Ending inventory understated</h3>

                <p>
                    Suppose ending inventory is understated
                    by <strong>$20,000</strong>.
                </p>

                <p>
                    Because ending inventory is subtracted
                    when calculating cost of goods sold,
                    subtracting too little inventory causes
                    cost of goods sold to be too high.
                </p>


                <div class="key-points">

                    <ul>

                        <li>
                            Ending inventory → understated
                        </li>

                        <li>
                            Cost of goods sold → overstated
                        </li>

                        <li>
                            Net income → understated
                        </li>

                        <li>
                            Retained earnings → understated
                        </li>

                    </ul>

                </div>

            </div>


            <div class="key-points">

                <h3>CPA shortcut</h3>

                <p>
                    Ending inventory and net income generally
                    move in the <strong>same direction</strong>.
                </p>

                <p>
                    Ending inventory and cost of goods sold
                    generally move in
                    <strong>opposite directions</strong>.
                </p>

            </div>



            <h2>
                Counterbalancing errors
            </h2>

            <p>
                Some errors reverse or counterbalance
                automatically over two periods if they
                remain uncorrected.
            </p>

            <p>
                Certain inventory errors are classic examples.
            </p>


            <div class="example-box">

                <p>
                    If Year 1 ending inventory is understated,
                    Year 2 beginning inventory is also
                    understated because:
                </p>

                <div class="formula-box">

                    Year 1 Ending Inventory =
                    Year 2 Beginning Inventory

                </div>

                <p>
                    The error that understated Year 1 income
                    can therefore create an opposite effect
                    on Year 2 income.
                </p>

            </div>


            <div class="key-points">

                <h3>Important</h3>

                <p>
                    Counterbalancing does not mean the original
                    financial statements were correct.
                </p>

                <p>
                    You must still analyze which periods
                    and accounts are misstated when the
                    error is discovered.
                </p>

            </div>



            <h2>
                Noncounterbalancing errors
            </h2>

            <p>
                Other errors do not completely reverse
                automatically in the next period.
            </p>

            <p>
                Errors involving depreciation of long-lived
                assets can affect multiple periods and may
                require analysis of:
            </p>


            <div class="key-points">

                <ul>

                    <li>
                        Asset carrying amount
                    </li>

                    <li>
                        Accumulated depreciation
                    </li>

                    <li>
                        Prior depreciation expense
                    </li>

                    <li>
                        Retained earnings
                    </li>

                </ul>

            </div>



            <h2>
                Worked CPA-style error problem
            </h2>

            <p>
                At the end of Year 1, a company failed
                to accrue <strong>$18,000 of utilities expense</strong>.
            </p>

            <p>
                The amount remains unpaid when the error
                is discovered at the beginning of Year 2.
                Ignore income taxes.
            </p>


            <h3>
                Step 1 — Analyze Year 1 expense
            </h3>

            <p>
                Utilities expense was understated by:
            </p>

            <div class="formula-box">

                $18,000

            </div>


            <h3>
                Step 2 — Analyze Year 1 income
            </h3>

            <p>
                Because expense was understated,
                Year 1 net income was:
            </p>

            <div class="formula-box">

                Overstated by $18,000

            </div>


            <h3>
                Step 3 — Analyze Year 2
                beginning retained earnings
            </h3>

            <div class="formula-box">

                Beginning Retained Earnings
                Overstated by $18,000

            </div>


            <h3>
                Step 4 — Analyze liability
            </h3>

            <div class="formula-box">

                Utilities Payable
                Understated by $18,000

            </div>


            <h3>
                Step 5 — Correct the balances
            </h3>


            <div class="journal-entry">

                <div class="journal-row journal-header">

                    <div>Account</div>
                    <div>Debit</div>
                    <div>Credit</div>

                </div>


                <div class="journal-row">

                    <div>Retained Earnings</div>
                    <div>$18,000</div>
                    <div>—</div>

                </div>


                <div class="journal-row credit-row">

                    <div>Utilities Payable</div>
                    <div>—</div>
                    <div>$18,000</div>

                </div>

            </div>



            <h2>
                Accounting changes versus errors
            </h2>


            <div class="financial-example">

                <div>

                    <span>
                        New information changes useful life
                    </span>

                    <strong>
                        Estimate Change
                    </strong>

                </div>


                <div>

                    <span>
                        Mathematical mistake
                    </span>

                    <strong>
                        Error
                    </strong>

                </div>


                <div>

                    <span>
                        Expense accidentally omitted
                    </span>

                    <strong>
                        Error
                    </strong>

                </div>


                <div>

                    <span>
                        Reasonable allowance estimate later revised
                    </span>

                    <strong>
                        Estimate Change
                    </strong>

                </div>


                <div>

                    <span>
                        GAAP incorrectly applied
                    </span>

                    <strong>
                        Error
                    </strong>

                </div>

            </div>



            <h2>
                What you should know after this lesson
            </h2>


            <div class="key-points">

                <ul>

                    <li>
                        Distinguish errors from legitimate
                        changes in estimates.
                    </li>

                    <li>
                        Understand the basic restatement
                        concept for material prior-period errors.
                    </li>

                    <li>
                        Determine how an error affected
                        prior net income.
                    </li>

                    <li>
                        Determine the resulting effect on
                        beginning retained earnings.
                    </li>

                    <li>
                        Prepare basic correcting entries.
                    </li>

                    <li>
                        Analyze capitalization versus
                        expense errors.
                    </li>

                    <li>
                        Analyze the effect of
                        ending-inventory errors.
                    </li>

                    <li>
                        Understand the distinction between
                        counterbalancing and
                        noncounterbalancing errors.
                    </li>

                </ul>

            </div>

        `,
        {
            question:
                "At the end of the prior year, a company failed to accrue $32,000 of wages expense that remained unpaid when the error was discovered this year. Ignoring income taxes, what effect did the error have on prior-year net income and current-year beginning retained earnings?",

            answers: [
                "Net income understated $32,000; beginning retained earnings understated $32,000",
                "Net income overstated $32,000; beginning retained earnings overstated $32,000",
                "Net income overstated $32,000; beginning retained earnings understated $32,000",
                "No effect on either amount because no cash had been paid"
            ],

            correctAnswer: 1,

            explanation:
                "Failure to record the $32,000 wage expense understated prior-year expenses and therefore overstated prior-year net income by $32,000. Because prior-period net income closes into retained earnings, current-year beginning retained earnings is also overstated by $32,000."
        }
    );

    return;

}

if (
    moduleId === 1 &&
    lessonId === 9
) {

    showFARLessonPage(
        1,
        9,
        "Subsequent Events",
        `

            <h2>
                What is a subsequent event?
            </h2>

            <p>
                A subsequent event is an event or transaction
                that occurs after the balance-sheet date but
                before the financial statements are issued
                or are available to be issued.
            </p>

            <p>
                FAR questions require you to determine whether
                the event provides additional evidence about
                conditions that already existed at the
                balance-sheet date or instead relates to
                conditions that arose afterward.
            </p>


            <div class="key-points">

                <h3>CPA mindset</h3>

                <p>
                    For every subsequent event, ask:
                </p>

                <ol>

                    <li>
                        What condition caused the event?
                    </li>

                    <li>
                        Did that condition exist at the
                        balance-sheet date?
                    </li>

                    <li>
                        Does the event require adjustment?
                    </li>

                    <li>
                        If no adjustment is required,
                        is the event important enough
                        to require disclosure?
                    </li>

                </ol>

            </div>



            <h2>
                Recognized subsequent events
            </h2>

            <p>
                A recognized subsequent event provides
                additional evidence about conditions that
                existed at the balance-sheet date.
            </p>

            <p>
                The financial statements are adjusted to
                reflect the effect of the event.
            </p>


            <div class="formula-box">

                Condition existed at balance-sheet date
                + Later information provides better evidence
                =
                Adjust the financial statements

            </div>



            <h2>
                Example — customer bankruptcy
            </h2>

            <div class="example-box">

                <p>
                    A customer owes the company
                    <strong>$80,000 on December 31</strong>.
                </p>

                <p>
                    In January, before the financial statements
                    are issued, the customer declares bankruptcy.
                </p>

                <p>
                    Further investigation shows that the
                    customer's severe financial difficulty
                    already existed on December 31.
                </p>

                <p>
                    The January bankruptcy provides additional
                    evidence concerning the collectibility
                    of a receivable that existed at year-end.
                </p>

                <div class="key-points">

                    <h3>Result</h3>

                    <p>
                        The year-end financial statements
                        should reflect the appropriate
                        credit-loss effect based on the
                        additional evidence.
                    </p>

                </div>

            </div>



            <h2>
                Example — litigation
            </h2>

            <div class="example-box">

                <p>
                    A lawsuit involving an event that occurred
                    before December 31 is settled after year-end
                    but before the financial statements
                    are issued.
                </p>

                <p>
                    The settlement may provide additional
                    evidence about the amount of a loss
                    associated with the condition that
                    existed at year-end.
                </p>

                <p>
                    Subject to the applicable contingency
                    guidance, the new information may affect
                    the amount recognized at December 31.
                </p>

            </div>


            <div class="key-points">

                <h3>CPA trap</h3>

                <p>
                    Do not classify an event solely by asking:
                    "Did it physically happen after year-end?"
                </p>

                <p>
                    The more important question is whether
                    the underlying condition existed at
                    the balance-sheet date.
                </p>

            </div>



            <h2>
                Nonrecognized subsequent events
            </h2>

            <p>
                A nonrecognized subsequent event relates
                to conditions that arose after the
                balance-sheet date.
            </p>

            <p>
                Because the condition did not exist at
                year-end, the year-end financial statement
                amounts generally are not adjusted for it.
            </p>


            <div class="formula-box">

                Condition arose after balance-sheet date
                =
                Do not adjust year-end amounts

            </div>


            <p>
                However, a material nonrecognized subsequent
                event may require disclosure.
            </p>



            <h2>
                Example — fire after year-end
            </h2>

            <div class="example-box">

                <p>
                    A company's manufacturing facility is
                    destroyed by a major fire on January 15.
                </p>

                <p>
                    The fire did not result from a condition
                    that existed on December 31.
                </p>

                <div class="key-points">

                    <h3>Result</h3>

                    <p>
                        Do not adjust the December 31 carrying
                        amounts merely because the fire
                        occurred before issuance.
                    </p>

                    <p>
                        If the event is material, appropriate
                        disclosure may be necessary.
                    </p>

                </div>

            </div>



            <h2>
                Example — issuing debt after year-end
            </h2>

            <p>
                Assume a corporation issues
                <strong>$5 million of bonds</strong>
                in February after a December 31 year-end.
            </p>

            <p>
                The bond issuance itself occurred after
                the balance-sheet date.
            </p>

            <p>
                The company generally would not record
                the February borrowing as a December 31
                liability merely because the transaction
                occurred before the financial statements
                were issued.
            </p>

            <p>
                If material, however, disclosure may
                be appropriate.
            </p>



            <h2>
                Example — business combination
            </h2>

            <p>
                A significant business combination occurring
                after the balance-sheet date generally relates
                to a transaction arising after year-end.
            </p>

            <p>
                It ordinarily does not cause the acquired
                assets and liabilities to be recognized
                retrospectively on the earlier balance sheet.
            </p>

            <p>
                Material events may nevertheless require
                appropriate disclosure.
            </p>



            <h2>
                Recognized versus nonrecognized
            </h2>


            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>
                        Recognized
                    </h3>

                    <p>
                        Condition existed at year-end.
                    </p>

                    <p>
                        Later event provides additional
                        evidence about that condition.
                    </p>

                    <p>
                        Adjust the financial statements.
                    </p>

                </div>


                <div class="comparison-card">

                    <h3>
                        Nonrecognized
                    </h3>

                    <p>
                        Condition arose after year-end.
                    </p>

                    <p>
                        Do not adjust year-end amounts.
                    </p>

                    <p>
                        Disclose if required because
                        of materiality and applicable guidance.
                    </p>

                </div>

            </div>



            <h2>
                Disclosure of nonrecognized events
            </h2>

            <p>
                For a material nonrecognized subsequent event,
                disclosure generally helps users understand:
            </p>


            <div class="key-points">

                <ul>

                    <li>
                        The nature of the event
                    </li>

                    <li>
                        An estimate of its financial effect,
                        when such an estimate can be made
                    </li>

                    <li>
                        When an estimate cannot be made,
                        information required by the
                        applicable guidance
                    </li>

                </ul>

            </div>



            <h2>
                Subsequent-event evaluation period
            </h2>

            <p>
                Subsequent events are evaluated through the
                applicable date on which the financial
                statements are issued or available to be issued.
            </p>

            <p>
                The applicable date depends on the nature
                of the reporting entity and the relevant
                accounting requirements.
            </p>


            <div class="key-points">

                <h3>Important</h3>

                <p>
                    Do not assume that December 31 is the
                    end of the accounting analysis merely
                    because December 31 is the balance-sheet date.
                </p>

            </div>



            <h2>
                Subsequent events and estimates
            </h2>

            <p>
                Subsequent information can sometimes help
                management estimate an amount that already
                existed at year-end.
            </p>

            <p>
                The fact that better information became
                available after year-end does not automatically
                make the event nonrecognized.
            </p>


            <div class="example-box">

                <h3>Example</h3>

                <p>
                    At December 31, a company has an existing
                    obligation whose exact amount is uncertain.
                </p>

                <p>
                    Before issuance, new information provides
                    better evidence about the amount of the
                    obligation as it existed on December 31.
                </p>

                <p>
                    The new information may need to be
                    incorporated into the year-end estimate.
                </p>

            </div>



            <h2>
                Worked CPA-style scenario
            </h2>

            <p>
                A company has a
                <strong>$120,000 receivable</strong>
                from Customer A at December 31.
            </p>

            <p>
                On January 20, before the financial statements
                are issued, Customer A enters bankruptcy.
            </p>

            <p>
                Evidence shows Customer A had suffered major
                financial deterioration during November and
                December.
            </p>


            <h3>
                Step 1 — Identify the condition
            </h3>

            <p>
                The relevant condition is Customer A's
                financial difficulty.
            </p>


            <h3>
                Step 2 — Determine when it existed
            </h3>

            <p>
                Evidence indicates the financial difficulty
                existed before December 31.
            </p>


            <h3>
                Step 3 — Interpret the January event
            </h3>

            <p>
                The bankruptcy provides additional evidence
                about the year-end receivable's collectibility.
            </p>


            <h3>
                Step 4 — Determine treatment
            </h3>

            <div class="formula-box">

                Recognized Subsequent Event
                →
                Adjust Year-End Financial Statements

            </div>


            <div class="key-points">

                <h3>Compare</h3>

                <p>
                    If Customer A had been financially healthy
                    at December 31 but suffered a catastrophic
                    event in January that caused the bankruptcy,
                    the analysis could be different because
                    the underlying condition may have arisen
                    after year-end.
                </p>

            </div>



            <h2>
                Fast CPA decision tree
            </h2>


            <div class="key-points">

                <ol>

                    <li>
                        Event happens after year-end.
                    </li>

                    <li>
                        Identify the underlying condition.
                    </li>

                    <li>
                        Ask whether that condition existed
                        at year-end.
                    </li>

                    <li>
                        If yes → consider adjustment.
                    </li>

                    <li>
                        If no → generally no adjustment.
                    </li>

                    <li>
                        If nonrecognized but material
                        → consider disclosure.
                    </li>

                </ol>

            </div>



            <h2>
                What you should know after this lesson
            </h2>


            <div class="key-points">

                <ul>

                    <li>
                        Define a subsequent event.
                    </li>

                    <li>
                        Distinguish recognized from
                        nonrecognized subsequent events.
                    </li>

                    <li>
                        Focus on when the underlying
                        condition existed.
                    </li>

                    <li>
                        Know when year-end financial
                        statements may require adjustment.
                    </li>

                    <li>
                        Recognize when a material event
                        may require disclosure instead.
                    </li>

                    <li>
                        Analyze bankruptcy, litigation,
                        casualty and financing scenarios.
                    </li>

                    <li>
                        Understand that subsequent information
                        can provide better evidence about
                        year-end estimates.
                    </li>

                </ul>

            </div>

        `,
        {
            question:
                "A company's warehouse is destroyed by an earthquake three weeks after year-end but before the financial statements are issued. The earthquake and resulting damage arose entirely after the balance-sheet date and the loss is material. What is the most appropriate treatment of the event?",

            answers: [
                "Recognize the entire loss in the year-end income statement",
                "Reduce year-end retained earnings directly for the amount of the loss",
                "Ignore the event because it occurred after the balance-sheet date",
                "Do not adjust the year-end amounts, but provide appropriate disclosure of the material subsequent event"
            ],

            correctAnswer: 3,

            explanation:
                "The condition causing the loss arose after the balance-sheet date, so this is a nonrecognized subsequent event. The year-end financial statement amounts are not adjusted for the loss, but a material event generally requires appropriate disclosure."
        }
    );

    return;

}

if (
    moduleId === 1 &&
    lessonId === 10
) {

    showFARLessonPage(
        1,
        10,
        "Special-Purpose Frameworks",
        `

            <h2>
                What is a special-purpose framework?
            </h2>

            <p>
                Financial statements are often prepared
                under U.S. GAAP, but U.S. GAAP is not the
                only framework that may be used for
                financial reporting.
            </p>

            <p>
                Certain entities may prepare financial
                statements using another appropriate
                financial reporting framework designed
                to meet a particular reporting purpose.
            </p>


            <div class="key-points">

                <h3>Common special-purpose frameworks</h3>

                <ul>

                    <li>
                        Cash basis
                    </li>

                    <li>
                        Tax basis
                    </li>

                    <li>
                        Regulatory basis
                    </li>

                    <li>
                        Contractual basis
                    </li>

                </ul>

            </div>


            <div class="key-points">

                <h3>CPA mindset</h3>

                <p>
                    When you see special-purpose financial
                    statements, first determine:
                </p>

                <ol>

                    <li>
                        What framework is being used?
                    </li>

                    <li>
                        How does that framework recognize
                        revenues, expenses, assets
                        and liabilities?
                    </li>

                    <li>
                        How does it differ from U.S. GAAP?
                    </li>

                    <li>
                        What adjustments would be needed
                        to convert from one basis to another?
                    </li>

                </ol>

            </div>



            <h2>
                Cash-basis accounting
            </h2>

            <p>
                Under a pure cash basis, revenues are
                generally recognized when cash is received
                and expenses when cash is paid.
            </p>

            <p>
                This differs significantly from accrual
                accounting, which recognizes economic
                events without requiring the related
                cash movement to occur at the same time.
            </p>


            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>
                        Cash Basis
                    </h3>

                    <p>
                        Focuses primarily on cash
                        receipts and payments.
                    </p>

                </div>


                <div class="comparison-card">

                    <h3>
                        Accrual Basis
                    </h3>

                    <p>
                        Recognizes revenues and expenses
                        according to the applicable
                        recognition requirements,
                        regardless of the timing of cash.
                    </p>

                </div>

            </div>



            <h2>
                Cash versus accrual revenue
            </h2>


            <div class="example-box">

                <h3>Example</h3>

                <p>
                    A company performs
                    <strong>$20,000 of services</strong>
                    in December but will not collect
                    the customer until January.
                </p>


                <h3>
                    Cash basis
                </h3>

                <p>
                    No December cash receipt occurred.
                </p>


                <h3>
                    Accrual basis
                </h3>

                <p>
                    Assuming the revenue-recognition
                    requirements are satisfied, the
                    company recognizes the revenue
                    in December.
                </p>


                <div class="journal-entry">

                    <div class="journal-row journal-header">

                        <div>Account</div>
                        <div>Debit</div>
                        <div>Credit</div>

                    </div>


                    <div class="journal-row">

                        <div>Accounts Receivable</div>
                        <div>$20,000</div>
                        <div>—</div>

                    </div>


                    <div class="journal-row credit-row">

                        <div>Service Revenue</div>
                        <div>—</div>
                        <div>$20,000</div>

                    </div>

                </div>

            </div>



            <h2>
                Converting cash-basis revenue
                to accrual-basis revenue
            </h2>

            <p>
                CPA questions may give you cash collections
                and changes in receivables and ask you to
                determine accrual-basis revenue.
            </p>


            <div class="formula-box">

                Accrual Revenue =
                Cash Collected
                + Ending Accounts Receivable
                − Beginning Accounts Receivable

            </div>


            <div class="example-box">

                <p>
                    Cash collected from customers:
                    <strong>$500,000</strong>
                </p>

                <p>
                    Beginning Accounts Receivable:
                    <strong>$40,000</strong>
                </p>

                <p>
                    Ending Accounts Receivable:
                    <strong>$65,000</strong>
                </p>


                <div class="formula-box">

                    $500,000
                    + $65,000
                    − $40,000
                    =
                    $525,000

                </div>


                <p>
                    Accrual-basis revenue is
                    <strong>$525,000</strong>.
                </p>

            </div>



            <h2>
                Why the receivable adjustment works
            </h2>

            <p>
                If Accounts Receivable increases,
                the company recognized more revenue
                than it collected in cash.
            </p>

            <p>
                Therefore, an increase in receivables
                is added to cash collections when
                converting to accrual-basis revenue.
            </p>


            <div class="key-points">

                <ul>

                    <li>
                        A/R increases → add the increase
                    </li>

                    <li>
                        A/R decreases → subtract the decrease
                    </li>

                </ul>

            </div>



            <h2>
                Cash versus accrual expenses
            </h2>

            <p>
                Cash payments also do not necessarily
                equal accrual-basis expenses.
            </p>

            <p>
                Accounts payable and prepaid expenses
                are common adjustments.
            </p>



            <h2>
                Accounts payable adjustment
            </h2>


            <div class="formula-box">

                Accrual Expense =
                Cash Paid
                + Ending Accounts Payable
                − Beginning Accounts Payable

            </div>


            <div class="example-box">

                <p>
                    Cash paid for operating expenses:
                    <strong>$180,000</strong>
                </p>

                <p>
                    Beginning Accounts Payable:
                    <strong>$25,000</strong>
                </p>

                <p>
                    Ending Accounts Payable:
                    <strong>$37,000</strong>
                </p>


                <div class="formula-box">

                    $180,000
                    + $37,000
                    − $25,000
                    =
                    $192,000

                </div>


                <p>
                    Accrual-basis expense is
                    <strong>$192,000</strong>.
                </p>

            </div>


            <div class="key-points">

                <h3>Reasoning</h3>

                <p>
                    An increase in Accounts Payable means
                    some expenses were recognized but
                    have not yet been paid.
                </p>

                <p>
                    Therefore, those unpaid expenses must
                    be added when converting cash payments
                    to accrual expense.
                </p>

            </div>



            <h2>
                Prepaid expense adjustment
            </h2>

            <p>
                Cash paid does not automatically become
                an expense immediately.
            </p>

            <p>
                Some payments create assets because the
                related benefit applies to a future period.
            </p>


            <div class="formula-box">

                Accrual Expense =
                Cash Paid
                + Beginning Prepaid Expense
                − Ending Prepaid Expense

            </div>


            <div class="example-box">

                <p>
                    Cash paid for insurance:
                    <strong>$60,000</strong>
                </p>

                <p>
                    Beginning prepaid insurance:
                    <strong>$8,000</strong>
                </p>

                <p>
                    Ending prepaid insurance:
                    <strong>$14,000</strong>
                </p>


                <div class="formula-box">

                    $60,000
                    + $8,000
                    − $14,000
                    =
                    $54,000

                </div>


                <p>
                    Accrual-basis insurance expense is
                    <strong>$54,000</strong>.
                </p>

            </div>



            <h2>
                Combined expense conversion
            </h2>

            <p>
                Some CPA problems combine payable and
                prepaid adjustments.
            </p>


            <div class="formula-box">

                Accrual Expense =

                Cash Paid

                + Ending Payable
                − Beginning Payable

                + Beginning Prepaid
                − Ending Prepaid

            </div>


            <div class="example-box">

                <p>
                    Cash paid:
                    <strong>$200,000</strong>
                </p>

                <p>
                    Accounts Payable increases:
                    <strong>$15,000</strong>
                </p>

                <p>
                    Prepaid Expense increases:
                    <strong>$6,000</strong>
                </p>


                <div class="formula-box">

                    $200,000
                    + $15,000
                    − $6,000
                    =
                    $209,000

                </div>


                <p>
                    Accrual-basis expense is
                    <strong>$209,000</strong>.
                </p>

            </div>



            <h2>
                Tax-basis financial statements
            </h2>

            <p>
                Tax-basis financial statements generally
                use recognition and measurement concepts
                based on applicable income-tax rules
                rather than U.S. GAAP.
            </p>

            <p>
                Because tax accounting and financial
                accounting can recognize items differently,
                tax-basis amounts may differ materially
                from U.S. GAAP amounts.
            </p>


            <div class="key-points">

                <h3>Differences can arise from</h3>

                <ul>

                    <li>
                        Revenue recognition
                    </li>

                    <li>
                        Depreciation
                    </li>

                    <li>
                        Expense deductibility
                    </li>

                    <li>
                        Capitalization requirements
                    </li>

                    <li>
                        Other tax-specific recognition
                        and measurement rules
                    </li>

                </ul>

            </div>


            <div class="key-points">

                <h3>CPA trap</h3>

                <p>
                    Tax-basis financial statements are
                    not simply U.S. GAAP statements with
                    income tax expense added.
                </p>

                <p>
                    The underlying measurement basis itself
                    can differ.
                </p>

            </div>



            <h2>
                Regulatory basis
            </h2>

            <p>
                Some entities operate in industries in which
                a regulatory authority prescribes a financial
                reporting framework for particular purposes.
            </p>

            <p>
                Financial statements prepared according to
                such requirements may constitute
                regulatory-basis financial statements.
            </p>



            <h2>
                Contractual basis
            </h2>

            <p>
                Financial statements may also be prepared
                according to accounting requirements
                specified in a contractual agreement.
            </p>


            <div class="example-box">

                <p>
                    A lending agreement might define
                    particular financial measurements
                    or reporting requirements.
                </p>

                <p>
                    Statements prepared according to those
                    contractual provisions may use a
                    contractual basis of accounting.
                </p>

            </div>



            <h2>
                Special-purpose does not mean incorrect
            </h2>

            <p>
                A financial statement prepared using a
                special-purpose framework is not automatically
                wrong merely because it differs from U.S. GAAP.
            </p>

            <p>
                The key is identifying the framework being
                used and evaluating the statements according
                to that framework.
            </p>


            <div class="key-points">

                <h3>CPA trap</h3>

                <p>
                    Do not assume:
                </p>

                <div class="formula-box">

                    Different from GAAP = Error

                </div>

                <p>
                    A legitimate special-purpose framework
                    intentionally may produce different
                    recognition or measurement.
                </p>

            </div>



            <h2>
                Cash-to-accrual conversion framework
            </h2>


            <div class="financial-example">

                <div>

                    <span>
                        Accounts Receivable ↑
                    </span>

                    <strong>
                        Revenue ↑
                    </strong>

                </div>


                <div>

                    <span>
                        Accounts Receivable ↓
                    </span>

                    <strong>
                        Revenue ↓
                    </strong>

                </div>


                <div>

                    <span>
                        Accounts Payable ↑
                    </span>

                    <strong>
                        Expense ↑
                    </strong>

                </div>


                <div>

                    <span>
                        Accounts Payable ↓
                    </span>

                    <strong>
                        Expense ↓
                    </strong>

                </div>


                <div>

                    <span>
                        Prepaid Expense ↑
                    </span>

                    <strong>
                        Expense ↓
                    </strong>

                </div>


                <div>

                    <span>
                        Prepaid Expense ↓
                    </span>

                    <strong>
                        Expense ↑
                    </strong>

                </div>

            </div>



            <h2>
                Worked CPA-style conversion
            </h2>

            <p>
                A cash-basis company reports
                <strong>$620,000 of customer cash receipts</strong>.
            </p>

            <p>
                Accounts Receivable:
            </p>


            <div class="financial-example">

                <div>

                    <span>
                        Beginning A/R
                    </span>

                    <strong>
                        $55,000
                    </strong>

                </div>


                <div>

                    <span>
                        Ending A/R
                    </span>

                    <strong>
                        $82,000
                    </strong>

                </div>

            </div>


            <h3>
                Step 1 — Calculate the increase
            </h3>


            <div class="formula-box">

                $82,000 − $55,000
                =
                $27,000 increase in A/R

            </div>


            <h3>
                Step 2 — Convert cash receipts
                to accrual revenue
            </h3>


            <div class="formula-box">

                $620,000 + $27,000
                =
                $647,000

            </div>


            <p>
                Accrual-basis revenue is
                <strong>$647,000</strong>.
            </p>



            <h2>
                What you should know after this lesson
            </h2>


            <div class="key-points">

                <ul>

                    <li>
                        Identify common special-purpose
                        frameworks.
                    </li>

                    <li>
                        Distinguish cash-basis accounting
                        from accrual accounting.
                    </li>

                    <li>
                        Convert cash collections into
                        accrual-basis revenue.
                    </li>

                    <li>
                        Convert cash payments into
                        accrual-basis expenses.
                    </li>

                    <li>
                        Correctly analyze Accounts Receivable,
                        Accounts Payable and prepaid accounts.
                    </li>

                    <li>
                        Understand the general purpose
                        of tax-basis financial statements.
                    </li>

                    <li>
                        Recognize regulatory and
                        contractual frameworks.
                    </li>

                    <li>
                        Understand that a legitimate
                        non-GAAP framework is not
                        automatically an accounting error.
                    </li>

                </ul>

            </div>

        `,
        {
            question:
                "A company using the cash basis collected $750,000 from customers during the year. Accounts Receivable was $60,000 at the beginning of the year and $95,000 at year-end. What amount of revenue would generally be recognized when converting these amounts to the accrual basis?",

            answers: [
                "$785,000",
                "$715,000",
                "$750,000",
                "$845,000"
            ],

            correctAnswer: 0,

            explanation:
                "Accounts Receivable increased by $35,000 ($95,000 − $60,000). This means accrual-basis revenue exceeded customer cash collections by $35,000. Therefore, accrual-basis revenue is $750,000 + $35,000 = $785,000."
        }
    );

    return;

}

if (moduleId === 2 && lessonId === 1) {

    showFARLessonPage(

        2,

        1,

        "Cash & Cash Equivalents",

        `

        <h2>
            Cash & Cash Equivalents
        </h2>

        <p>
            Cash is one of the most liquid assets on the balance sheet.
            For CPA Exam purposes, you should be able to determine which
            items qualify as cash or cash equivalents, identify restricted
            cash, and understand basic bank reconciliation concepts.
        </p>


        <h3>
            1. What Is Included in Cash?
        </h3>

        <p>
            Cash generally includes amounts that are immediately available
            for use in paying current obligations.
        </p>

        <div class="key-points">

            <p>
                <strong>Common examples include:</strong>
            </p>

            <ul>
                <li>
                    Currency and coins
                </li>

                <li>
                    Demand deposits in checking accounts
                </li>

                <li>
                    Savings accounts available for withdrawal
                </li>

                <li>
                    Undeposited customer checks
                </li>

                <li>
                    Cashier's checks and money orders held by the company
                </li>
            </ul>

        </div>


        <h3>
            2. Cash Equivalents
        </h3>

        <p>
            Cash equivalents are short-term, highly liquid investments
            that are readily convertible to known amounts of cash and
            have an insignificant risk of changes in value.
        </p>

        <div class="formula-box">

            Original maturity:

            <strong>
                Generally three months or less
            </strong>

        </div>

        <p>
            The maturity test is generally based on the investment's
            original maturity when acquired by the company, not simply
            how much time remains until maturity at the reporting date.
        </p>


        <div class="example-box">

            <h3>
                Example
            </h3>

            <p>
                A company purchases a U.S. Treasury bill when it has
                two months remaining until maturity.
            </p>

            <p>
                Assuming the other cash-equivalent criteria are met,
                the Treasury bill may qualify as a cash equivalent.
            </p>

            <p>
                However, an investment originally purchased with a
                one-year maturity does not become a cash equivalent
                merely because only two months remain before maturity.
            </p>

        </div>


        <h3>
            3. Items That Are Generally Not Cash
        </h3>

        <div class="key-points">

            <ul>

                <li>
                    Postdated checks received from customers
                </li>

                <li>
                    Employee advances
                </li>

                <li>
                    IOUs
                </li>

                <li>
                    Stale or uncollectible checks
                </li>

                <li>
                    Certificates of deposit or investments that
                    do not meet the cash-equivalent requirements
                </li>

            </ul>

        </div>


        <h3>
            4. Restricted Cash
        </h3>

        <p>
            Cash may be restricted for a specific purpose and therefore
            unavailable for general operations.
        </p>

        <p>
            Examples can include cash restricted for debt repayment,
            construction, contractual requirements, or other designated
            purposes.
        </p>

        <div class="key-points">

    <p>
        Restricted cash is still cash, but the nature and duration
        of the restriction affect its financial statement
        classification, presentation, and disclosure.
    </p>

    <p>
        For example, cash restricted for a long-term purpose,
        such as construction of a noncurrent asset or repayment
        of long-term debt, generally should not be classified
        with unrestricted current cash.
    </p>

</div>


        <h3>
            5. Bank Reconciliations
        </h3>

        <p>
            A bank reconciliation explains differences between the cash
            balance reported by the bank and the cash balance recorded
            in the company's accounting records.
        </p>


        <h4>
            Common Bank-Side Adjustments
        </h4>

        <ul>

            <li>
                Deposits in transit
            </li>

            <li>
                Outstanding checks
            </li>

            <li>
                Bank errors
            </li>

        </ul>


        <h4>
            Common Book-Side Adjustments
        </h4>

        <ul>

            <li>
                Bank service charges
            </li>

            <li>
                NSF customer checks
            </li>

            <li>
                Interest earned
            </li>

            <li>
                Electronic collections or payments not yet recorded
            </li>

            <li>
                Errors made in the company's accounting records
            </li>

        </ul>


        <div class="formula-box">

            Adjusted Bank Balance

            =

            Adjusted Book Balance

        </div>


        <div class="example-box">

            <h3>
                Bank Reconciliation Example
            </h3>

            <p>
                Bank statement balance:
                <strong>$52,000</strong>
            </p>

            <p>
                Add deposits in transit:
                <strong>$6,000</strong>
            </p>

            <p>
                Subtract outstanding checks:
                <strong>$8,000</strong>
            </p>

            <div class="formula-box">

                $52,000
                + $6,000
                − $8,000
                =
                <strong>$50,000 adjusted cash balance</strong>

            </div>

        </div>


        <h3>
            6. CPA Exam Focus
        </h3>

        <div class="key-points">

            <ul>

                <li>
                    Know what qualifies as cash.
                </li>

                <li>
                    Apply the cash-equivalent maturity concept correctly.
                </li>

                <li>
                    Distinguish restricted cash from unrestricted cash.
                </li>

                <li>
                    Know whether a reconciliation item adjusts the
                    bank side or the book side.
                </li>

                <li>
                    Remember that book-side reconciling items generally
                    require accounting entries.
                </li>

            </ul>

        </div>

        `,

        {
    question:
        "Which investment is most likely to qualify as a cash equivalent?",

    answers: [

        "A bond purchased with five years remaining until maturity",

        "A Treasury bill purchased when it has two months remaining until maturity",

        "Common stock expected to be sold within three months",

        "A one-year certificate of deposit purchased eleven months ago"

    ],

    correctAnswer: 1,

    explanation:
        "Cash equivalents are short-term, highly liquid investments that are readily convertible to known amounts of cash and generally have an original maturity of three months or less when acquired. A Treasury bill purchased with two months remaining until maturity can meet that requirement."
}

    );

    return;

}

if (moduleId === 2 && lessonId === 2) {

    showFARLessonPage(

        2,

        2,

        "Accounts Receivable",

        `

        <h2>
            Accounts Receivable
        </h2>

        <p>
            Accounts receivable represent amounts owed by customers
            from credit sales. For FAR, you need to understand recognition,
            valuation, credit losses, write-offs, recoveries, and presentation
            at net realizable value.
        </p>


        <h3>
            1. Initial Recognition
        </h3>

        <p>
            When a company makes a credit sale, it generally records
            accounts receivable and revenue.
        </p>

        <div class="formula-box">

            Debit Accounts Receivable

            <br><br>

            Credit Revenue

        </div>


        <div class="example-box">

            <h3>
                Example
            </h3>

            <p>
                A company provides services on account for
                <strong>$20,000</strong>.
            </p>

            <div class="formula-box">

                Accounts Receivable +$20,000

                <br>

                Revenue +$20,000

            </div>

        </div>


        <h3>
            2. Net Realizable Value
        </h3>

        <p>
            Accounts receivable are generally presented at the amount
            the company expects to collect.
        </p>

        <div class="formula-box">

            Net Realizable Value

            =

            Gross Accounts Receivable

            −

            Allowance for Credit Losses

        </div>


        <div class="example-box">

            <h3>
                Example
            </h3>

            <p>
                Accounts Receivable:
                <strong>$100,000</strong>
            </p>

            <p>
                Allowance for Credit Losses:
                <strong>$6,000</strong>
            </p>

            <div class="formula-box">

                $100,000 − $6,000

                =

                <strong>$94,000 Net Realizable Value</strong>

            </div>

        </div>


        <h3>
            3. Allowance for Credit Losses
        </h3>

        <p>
    Companies estimate expected credit losses using relevant
    information such as historical experience, current conditions,
    and reasonable and supportable forecasts. An allowance account
    reduces receivables to the net amount expected to be collected.
</p>

        <div class="key-points">

            <ul>

                <li>
                    Credit loss expense reduces income.
                </li>

                <li>
                    The allowance is a contra-asset account.
                </li>

                <li>
                    The allowance reduces gross receivables
                    to net realizable value.
                </li>

            </ul>

        </div>


        <h3>
            4. Recording Expected Credit Losses
        </h3>

        <p>
            When the required allowance is increased, the company
            recognizes credit loss expense.
        </p>

        <div class="formula-box">

            Debit Credit Loss Expense

            <br><br>

            Credit Allowance for Credit Losses

        </div>


        <h3>
            5. Write-Off of a Specific Account
        </h3>

        <p>
            When a specific receivable is determined to be uncollectible,
            it is written off against the allowance.
        </p>

        <div class="formula-box">

            Debit Allowance for Credit Losses

            <br><br>

            Credit Accounts Receivable

        </div>

        <div class="key-points">

            <p>
                Under the allowance method, the write-off itself does
                <strong>not</strong> create additional credit loss expense
                at the time of write-off.
            </p>

        </div>


        <h3>
            6. Effect of a Write-Off
        </h3>

        <p>
            A write-off reduces both gross accounts receivable and
            the allowance by the same amount.
        </p>

        <p>
            Therefore, assuming the allowance was properly established,
            the write-off does not change net realizable value.
        </p>


        <div class="example-box">

            <h3>
                Before Write-Off
            </h3>

            <p>
                Accounts Receivable:
                $100,000
            </p>

            <p>
                Allowance:
                $6,000
            </p>

            <p>
                Net Realizable Value:
                <strong>$94,000</strong>
            </p>


            <h3>
                After a $2,000 Write-Off
            </h3>

            <p>
                Accounts Receivable:
                $98,000
            </p>

            <p>
                Allowance:
                $4,000
            </p>

            <p>
                Net Realizable Value:
                <strong>$94,000</strong>
            </p>

        </div>


        <h3>
    7. Recovery of a Previously Written-Off Account
</h3>

<p>
    If a customer later pays an amount that was previously
    written off, the recovery is recognized when received.
</p>

<p>
    A common instructional approach is to first reinstate
    the receivable and related allowance and then record
    the cash collection.
</p>

<div class="formula-box">

    Step 1 — Reinstate the receivable:

    <br>

    Debit Accounts Receivable

    <br>

    Credit Allowance for Credit Losses

    <br><br>

    Step 2 — Record collection:

    <br>

    Debit Cash

    <br>

    Credit Accounts Receivable

</div>

<div class="key-points">

    <p>
        For CPA Exam purposes, focus on the principle that
        recoveries of amounts previously written off are
        recognized when recovered. The exact presentation
        may vary depending on the entity's accounting approach.
    </p>

</div>


        <h3>
            8. Aging of Receivables
        </h3>

        <p>
            An aging schedule groups receivables according to how long
            they have been outstanding. Older receivables are often assigned
            higher expected loss rates.
        </p>

        <div class="key-points">

            <p>
                The aging approach is commonly used to estimate the
                required ending balance in the allowance account.
            </p>

        </div>


        <h3>
            9. CPA Exam Focus
        </h3>

        <div class="key-points">

            <ul>

                <li>
                    Know how to calculate net realizable value.
                </li>

                <li>
                    Understand that the allowance is a contra asset.
                </li>

                <li>
                    Distinguish recording credit loss expense from
                    writing off a specific receivable.
                </li>

                <li>
                    Remember that a write-off generally does not change
                    net realizable value under the allowance method.
                </li>

                <li>
                    Know how a recovery of a previously written-off
                    receivable is recorded.
                </li>

            </ul>

        </div>

        `,

        {
    question:
        "A company writes off a $4,000 customer account against an existing allowance for credit losses. What is the immediate effect on the net realizable value of accounts receivable?",

    answers: [

        "Net realizable value decreases by $4,000",

        "Net realizable value increases by $4,000",

        "Net realizable value remains unchanged",

        "Credit loss expense increases by $4,000"

    ],

    correctAnswer: 2,

    explanation:
        "A write-off reduces both Accounts Receivable and the Allowance for Credit Losses by the same amount. Because both decrease equally, net realizable value remains unchanged."
}

    );

    return;

}

if (moduleId === 2 && lessonId === 3) {

    showFARLessonPage(

        2,

        3,

        "Inventory",

        `

        <h2>
            Inventory
        </h2>

        <p>
            Inventory represents goods held for sale or used in producing
            goods for sale. For FAR, you need to understand inventory costs,
            ownership, cost flow assumptions, valuation, write-downs,
            and the financial statement effects of inventory errors.
        </p>


        <h3>
            1. What Is Included in Inventory?
        </h3>

        <p>
            Inventory generally includes goods that the company owns
            and intends to sell in the ordinary course of business,
            as well as certain costs incurred to prepare those goods
            for sale.
        </p>

        <div class="key-points">

            <ul>
                <li>
                    Merchandise held for resale
                </li>

                <li>
                    Raw materials
                </li>

                <li>
                    Work in process
                </li>

                <li>
                    Finished goods
                </li>
            </ul>

        </div>


        <h3>
            2. Costs Included in Inventory
        </h3>

        <p>
            Inventory cost generally includes expenditures necessary
            to acquire the inventory and bring it to its present
            location and condition.
        </p>

        <div class="key-points">

            <ul>

                <li>
                    Purchase price
                </li>

                <li>
                    Freight-in
                </li>

                <li>
                    Import duties and certain nonrefundable taxes
                </li>

                <li>
                    Direct labor for manufactured inventory
                </li>

                <li>
                    Appropriate manufacturing overhead
                </li>

            </ul>

        </div>

        <p>
            Selling costs and abnormal waste are generally expensed
            rather than included in inventory.
        </p>


        <h3>
            3. Goods in Transit
        </h3>

        <p>
            Ownership of goods in transit depends on the shipping terms.
        </p>

        <div class="formula-box">

            FOB Shipping Point:

            <strong>
                Buyer owns the goods once the seller ships them.
            </strong>

            <br><br>

            FOB Destination:

            <strong>
                Seller owns the goods until they reach the buyer.
            </strong>

        </div>


        <div class="example-box">

            <h3>
                Example
            </h3>

            <p>
                Goods costing $12,000 are shipped FOB shipping point
                on December 30 and arrive January 3.
            </p>

            <p>
                The buyer generally includes the goods in its
                December 31 inventory because ownership transferred
                when the goods were shipped.
            </p>

        </div>


        <h3>
            4. Consigned Goods
        </h3>

        <p>
            Goods held on consignment remain inventory of the
            <strong>consignor</strong>, the party that owns the goods.
        </p>

        <p>
            The consignee physically holds the goods but generally
            does not record them as its inventory.
        </p>


        <h3>
            5. Cost Flow Assumptions
        </h3>

        <p>
            When identical inventory items are purchased at different
            prices, companies use cost flow assumptions to determine
            cost of goods sold and ending inventory.
        </p>


        <h4>
            FIFO
        </h4>

        <p>
            First-In, First-Out assumes the oldest inventory costs
            are assigned to cost of goods sold first.
        </p>

        <div class="formula-box">

            FIFO ending inventory

            ≈

            Most recent purchase costs

        </div>


        <h4>
            LIFO
        </h4>

        <p>
            Last-In, First-Out assumes the newest inventory costs
            are assigned to cost of goods sold first.
        </p>

        <div class="formula-box">

            LIFO ending inventory

            ≈

            Older purchase costs

        </div>


        <h4>
            Weighted Average
        </h4>

        <p>
            The weighted-average method assigns an average cost
            to inventory units.
        </p>

        <div class="formula-box">

            Average Cost Per Unit

            =

            Cost of Goods Available for Sale

            ÷

            Units Available for Sale

        </div>


        <h3>
            6. FIFO vs. LIFO During Rising Prices
        </h3>

        <div class="key-points">

            <p>
                When inventory purchase prices are rising:
            </p>

            <ul>

                <li>
                    FIFO generally produces lower COGS.
                </li>

                <li>
                    FIFO generally produces higher ending inventory.
                </li>

                <li>
                    FIFO generally produces higher gross profit
                    and net income.
                </li>

                <li>
                    LIFO generally produces higher COGS.
                </li>

                <li>
                    LIFO generally produces lower ending inventory
                    and lower income.
                </li>

            </ul>

        </div>


        <h3>
    7. Inventory Valuation and Write-Downs
</h3>

<p>
    Inventory must be evaluated for declines in value.
    The applicable U.S. GAAP measurement rule depends
    on the inventory cost-flow method being used.
</p>

<div class="key-points">

    <p>
        <strong>
            Inventory measured using FIFO or weighted average:
        </strong>
    </p>

    <p>
        Inventory is generally measured at the
        <strong>lower of cost and net realizable value (LCNRV)</strong>.
    </p>

    <p>
        <strong>
            Inventory measured using LIFO or the retail inventory method:
        </strong>
    </p>

    <p>
        Inventory generally continues to use the
        <strong>lower of cost or market</strong> approach,
        subject to the applicable ceiling and floor limitations.
    </p>

</div>


<h4>
    Net Realizable Value
</h4>

<div class="formula-box">

    Net Realizable Value

    =

    Estimated Selling Price

    −

    Reasonably Predictable Costs of Completion,
    Disposal, and Transportation

</div>


<h4>
    Market Under the LIFO/Retail Rule
</h4>

<p>
    For lower-of-cost-or-market purposes, market is generally
    replacement cost, but it cannot exceed the ceiling or fall
    below the floor.
</p>

<div class="formula-box">

    Ceiling = Net Realizable Value

    <br><br>

    Floor = Net Realizable Value
    − Normal Profit Margin

</div>

<div class="key-points">

    <p>
        Therefore, designated market is generally replacement
        cost limited by the NRV ceiling and the NRV-minus-normal-
        profit floor. The inventory is then reported at the
        lower of cost or that designated market amount.
    </p>

</div>


        <h3>
            8. Inventory Errors
        </h3>

        <p>
            Inventory errors affect both the balance sheet and
            income statement because ending inventory is part of
            the cost of goods sold calculation.
        </p>

        <div class="formula-box">

            Beginning Inventory

            +

            Purchases

            =

            Goods Available for Sale

            <br><br>

            Goods Available for Sale

            −

            Ending Inventory

            =

            Cost of Goods Sold

        </div>


        <div class="example-box">

            <h3>
                Effect of Overstated Ending Inventory
            </h3>

            <p>
                If ending inventory is overstated:
            </p>

            <ul>

                <li>
                    Cost of goods sold is understated.
                </li>

                <li>
                    Gross profit is overstated.
                </li>

                <li>
                    Net income is overstated.
                </li>

                <li>
                    Inventory assets are overstated.
                </li>

            </ul>

        </div>


        <h3>
            9. CPA Exam Focus
        </h3>

        <div class="key-points">

            <ul>

                <li>
                    Know what costs belong in inventory.
                </li>

                <li>
                    Apply FOB shipping point and FOB destination correctly.
                </li>

                <li>
                    Remember who owns consigned inventory.
                </li>

                <li>
                    Understand FIFO, LIFO, and weighted-average effects.
                </li>

                <li>
                    Know how ending inventory errors affect COGS and income.
                </li>

                <li>
                    Be able to calculate net realizable value.
                </li>

            </ul>

        </div>

        `,

        {

            question:
                "During a period of rising inventory costs, which statement is generally true when comparing FIFO with LIFO?",

            answers: [
    "FIFO generally results in higher cost of goods sold and lower ending inventory",
    "FIFO and LIFO always produce the same net income",
    "LIFO generally results in higher ending inventory and higher net income",
    "FIFO generally results in lower cost of goods sold and higher ending inventory"
],

correctAnswer: 3,

            explanation:
                "When inventory costs are rising, FIFO assigns older, lower costs to cost of goods sold and newer, higher costs to ending inventory. Therefore, FIFO generally produces lower COGS, higher ending inventory, and higher income than LIFO."

        }

    );

    return;

}

if (moduleId === 2 && lessonId === 4) {

    showFARLessonPage(

        2,

        4,

        "Property, Plant & Equipment",

        `

        <h2>
            Property, Plant & Equipment
        </h2>

        <p>
            Property, plant, and equipment are long-lived tangible assets
            used in operations. For FAR, you should understand initial cost,
            depreciation, subsequent expenditures, disposals, exchanges,
            and impairment.
        </p>


        <h3>
            1. Initial Measurement
        </h3>

        <p>
            PP&E is generally recorded at the cost necessary to acquire
            the asset and prepare it for its intended use.
        </p>

        <div class="key-points">

            <ul>

                <li>
                    Purchase price
                </li>

                <li>
                    Freight and transportation costs
                </li>

                <li>
                    Installation and testing costs
                </li>

                <li>
                    Legal fees directly related to acquisition
                </li>

                <li>
                    Certain site preparation costs
                </li>

            </ul>

        </div>


        <h3>
            2. Land
        </h3>

        <p>
            Land is generally not depreciated because it normally has
            an indefinite useful life.
        </p>

        <p>
            Costs necessary to prepare land for use are generally included
            in the cost of land.
        </p>

        <div class="key-points">

            <p>
                Examples can include purchase price, title fees,
                commissions, and certain clearing or grading costs.
            </p>

        </div>


        <h3>
            3. Land Improvements
        </h3>

        <p>
            Land improvements with limited useful lives are generally
            recorded separately from land and depreciated.
        </p>

        <div class="example-box">

            <h3>
                Examples
            </h3>

            <ul>
                <li>Parking lots</li>
                <li>Fences</li>
                <li>Lighting systems</li>
                <li>Private roads</li>
            </ul>

        </div>


        <h3>
            4. Depreciation
        </h3>

        <p>
            Depreciation systematically allocates the depreciable cost
            of a long-lived asset over its estimated useful life.
        </p>

        <div class="formula-box">

            Depreciable Base

            =

            Cost

            −

            Estimated Residual Value

        </div>


        <h4>
            Straight-Line Method
        </h4>

        <div class="formula-box">

            Annual Depreciation

            =

            Cost − Residual Value

            ÷

            Useful Life

        </div>


        <div class="example-box">

            <h3>
                Example
            </h3>

            <p>
                Equipment cost:
                <strong>$110,000</strong>
            </p>

            <p>
                Residual value:
                <strong>$10,000</strong>
            </p>

            <p>
                Useful life:
                <strong>5 years</strong>
            </p>

            <div class="formula-box">

                ($110,000 − $10,000)
                ÷ 5

                =

                <strong>$20,000 annual depreciation</strong>

            </div>

        </div>


        <h3>
            5. Book Value
        </h3>

        <div class="formula-box">

            Carrying Amount

            =

            Asset Cost

            −

            Accumulated Depreciation

        </div>

        <p>
            Accumulated depreciation is a contra-asset account.
        </p>


        <h3>
            6. Changes in Depreciation Estimates
        </h3>

        <p>
            Changes in useful life or residual value are generally
            treated as changes in accounting estimates.
        </p>

        <div class="key-points">

            <p>
                Changes in estimates are generally applied
                <strong>prospectively</strong>.
            </p>

        </div>


        <h3>
            7. Subsequent Expenditures
        </h3>

        <p>
            Expenditures after acquisition may be capitalized or expensed
            depending on their nature.
        </p>

        <div class="key-points">

            <ul>

                <li>
                    Routine repairs and maintenance are generally expensed.
                </li>

                <li>
                    Expenditures that extend useful life, increase capacity,
                    or improve future economic benefits may be capitalized.
                </li>

            </ul>

        </div>


        <h3>
            8. Disposal of PP&E
        </h3>

        <p>
            When an asset is sold, the company removes the asset's cost
            and accumulated depreciation and compares the proceeds with
            the asset's carrying amount.
        </p>

        <div class="formula-box">

            Gain or Loss

            =

            Cash Proceeds

            −

            Carrying Amount

        </div>


        <div class="example-box">

            <h3>
                Example
            </h3>

            <p>
                Equipment cost:
                $80,000
            </p>

            <p>
                Accumulated depreciation:
                $50,000
            </p>

            <p>
                Carrying amount:
                $30,000
            </p>

            <p>
                Asset sold for:
                $36,000
            </p>

            <div class="formula-box">

                $36,000 − $30,000

                =

                <strong>$6,000 gain</strong>

            </div>

        </div>


        <h3>
    9. Asset Retirement Obligations
</h3>

<p>
    Certain long-lived assets may create a legal obligation
    to retire, dismantle, remove, or restore property in the future.
</p>

<p>
    When the applicable recognition criteria are met, the company
    recognizes an asset retirement obligation as a liability and
    generally capitalizes a corresponding asset retirement cost
    as part of the carrying amount of the related long-lived asset.
</p>

<div class="key-points">

    <ul>

        <li>
            The capitalized asset retirement cost is generally
            allocated to expense over the asset's useful life.
        </li>

        <li>
            The ARO liability generally increases over time
            because of the passage of time.
        </li>

        <li>
            Changes in the estimated timing or amount of the
            retirement obligation may also require adjustment.
        </li>

    </ul>

</div>


        <h3>
            10. Impairment
        </h3>

        <p>
            Long-lived assets held and used must be evaluated for impairment
            when events or changes in circumstances indicate that their
            carrying amount may not be recoverable.
        </p>

        <div class="key-points">

            <p>
                For U.S. GAAP long-lived assets held and used, the impairment
                model generally begins with a recoverability test using
                undiscounted cash flows.
            </p>

        </div>

        <p>
            If the asset is not recoverable, the impairment loss is generally
            measured as the excess of carrying amount over fair value.
        </p>


        <h3>
            11. CPA Exam Focus
        </h3>

        <div class="key-points">

            <ul>

                <li>
                    Know which acquisition costs are capitalized.
                </li>

                <li>
                    Remember that land is generally not depreciated.
                </li>

                <li>
                    Calculate depreciation and carrying amount.
                </li>

                <li>
                    Treat changes in useful life as changes in estimate.
                </li>

                <li>
                    Distinguish capital expenditures from repairs.
                </li>

                <li>
                    Calculate gains and losses on disposal.
                </li>

                <li>
                    Understand the basic U.S. GAAP impairment model.
                </li>

            </ul>

        </div>

        `,

        {

            question:
                "Equipment cost $90,000 and has accumulated depreciation of $54,000. The equipment is sold for $41,000. What gain or loss should be recognized?",

            answers: [

                "$5,000 gain",

                "$5,000 loss",

                "$41,000 gain",

                "$36,000 gain"

            ],

            correctAnswer: 0,

            explanation:
                "The equipment's carrying amount is $90,000 minus $54,000, or $36,000. Because the equipment is sold for $41,000, the company recognizes a $5,000 gain."

        }

    );

    return;

}

if (moduleId === 2 && lessonId === 5) {

    showFARLessonPage(

        2,

        5,

        "Intangible Assets",

        `

        <h2>
            Intangible Assets
        </h2>

        <p>
            Intangible assets are identifiable nonphysical assets that
            provide future economic benefits. For FAR, you should understand
            recognition, finite versus indefinite useful lives, amortization,
            impairment, research and development costs, and goodwill.
        </p>


        <h3>
            1. Common Intangible Assets
        </h3>

        <div class="key-points">

            <ul>

                <li>
                    Patents
                </li>

                <li>
                    Copyrights
                </li>

                <li>
                    Trademarks and trade names
                </li>

                <li>
                    Franchise rights
                </li>

                <li>
                    Licenses
                </li>

                <li>
                    Customer-related intangible assets
                </li>

            </ul>

        </div>


        <h3>
            2. Purchased Intangible Assets
        </h3>

        <p>
            A separately acquired intangible asset is generally recorded
            at cost.
        </p>

        <p>
            Cost can include the purchase price and other directly
            attributable expenditures necessary to prepare the asset
            for its intended use.
        </p>


        <h3>
            3. Finite-Lived Intangible Assets
        </h3>

        <p>
            An intangible asset with a finite useful life is generally
            amortized over its useful life.
        </p>

        <div class="formula-box">

            Straight-Line Amortization

            =

            Amortizable Amount

            ÷

            Useful Life

        </div>

        <p>
            The amortization period should reflect the period over which
            the asset is expected to provide economic benefits, subject
            to applicable legal, regulatory, contractual, or other limits.
        </p>


        <div class="example-box">

            <h3>
                Example
            </h3>

            <p>
                A company purchases a patent for
                <strong>$120,000</strong>.
            </p>

            <p>
                The patent has an estimated useful life of
                <strong>8 years</strong>, with no residual value.
            </p>

            <div class="formula-box">

                $120,000 ÷ 8

                =

                <strong>$15,000 annual amortization</strong>

            </div>

        </div>


        <h3>
            4. Indefinite-Lived Intangible Assets
        </h3>

        <p>
            An intangible asset is considered indefinite-lived when
            there is no foreseeable limit on the period over which it
            is expected to contribute to cash flows.
        </p>

        <div class="key-points">

            <p>
                Indefinite-lived intangible assets are generally
                <strong>not amortized</strong>.
            </p>

            <p>
                Instead, they are tested for impairment in accordance
                with applicable U.S. GAAP requirements.
            </p>

        </div>


       <h3>
    5. Subsequent Expenditures
</h3>

<p>
    Subsequent expenditures related to an intangible asset
    are capitalized only when the applicable recognition
    requirements are met.
</p>

<p>
    Many internally incurred expenditures do not qualify
    for recognition as separate intangible assets and are
    therefore expensed as incurred.
</p>


<h3>
    6. Finite-Lived Intangible Asset Impairment
</h3>

<p>
    Finite-lived intangible assets are generally evaluated
    for impairment under the long-lived asset impairment
    model when events or changes in circumstances indicate
    that their carrying amounts may not be recoverable.
</p>

<div class="key-points">

    <p>
        The recoverability test generally compares the
        carrying amount of the asset or asset group with
        expected undiscounted future cash flows.
    </p>

    <p>
        If the carrying amount is not recoverable, the
        impairment loss is generally measured as the excess
        of carrying amount over fair value.
    </p>

</div>


<h3>
    7. Indefinite-Lived Intangible Assets
</h3>

<p>
    Indefinite-lived intangible assets are generally not
    amortized because there is no foreseeable limit on the
    period over which they are expected to contribute to
    future cash flows.
</p>

<p>
    Instead, they are subject to applicable impairment
    requirements.
</p>


<h3>
    8. CPA Exam Focus
</h3>

<div class="key-points">

    <ul>

        <li>
            Identify common intangible assets.
        </li>

        <li>
            Understand the initial cost of separately
            acquired intangible assets.
        </li>

        <li>
            Distinguish finite-lived from indefinite-lived
            intangible assets.
        </li>

        <li>
            Calculate amortization of finite-lived
            intangible assets.
        </li>

        <li>
            Remember that useful life may be limited by
            legal, contractual, regulatory, or economic factors.
        </li>

        <li>
            Understand the basic impairment treatment for
            finite-lived intangible assets.
        </li>

    </ul>

</div>


        <h3>
            11. CPA Exam Focus
        </h3>

        <div class="key-points">

            <ul>

                <li>
                    Distinguish finite-lived from indefinite-lived
                    intangible assets.
                </li>

                <li>
                    Finite-lived intangibles are generally amortized.
                </li>

                <li>
                    Indefinite-lived intangibles are generally not amortized.
                </li>

                <li>
                    R&D costs are generally expensed under U.S. GAAP.
                </li>

                <li>
                    Know important exceptions and special guidance
                    involving R&D and software.
                </li>

                <li>
                    Calculate goodwill from an acquisition.
                </li>

                <li>
                    Remember that internally generated goodwill
                    is not recognized.
                </li>

            </ul>

        </div>

        `,

        {

            question:
                "A company purchases a patent for $180,000. The patent has a remaining legal life of 15 years, but the company expects it to provide economic benefits for only 10 years. Assuming no residual value, what annual straight-line amortization should generally be recognized?",

            answers: [

                "$12,000",

                "$15,000",

                "$18,000",

                "$30,000"

            ],

            correctAnswer: 2,

            explanation:
                "A finite-lived intangible asset is amortized over its useful life, considering applicable legal or contractual limits. Because the patent is expected to provide economic benefits for 10 years, which is shorter than its 15-year remaining legal life, annual amortization is $180,000 divided by 10 years, or $18,000."

        }

    );

    return;

}

if (moduleId === 2 && lessonId === 6) {

    showFARLessonPage(

        2,

        6,

        "Current Liabilities",

        `

        <h2>
            Current Liabilities
        </h2>

        <p>
            Current liabilities are obligations generally expected to be
            settled within the operating cycle or one year, depending on
            the applicable classification rules. For FAR, you should
            understand accounts payable, accrued liabilities, short-term
            notes, current maturities of long-term debt, and refinancing.
        </p>


        <h3>
            1. Common Current Liabilities
        </h3>

        <div class="key-points">

            <ul>

                <li>
                    Accounts payable
                </li>

                <li>
                    Accrued wages and salaries
                </li>

                <li>
                    Accrued interest
                </li>

                <li>
                    Taxes payable
                </li>

                <li>
                    Short-term notes payable
                </li>

                <li>
                    Current maturities of long-term debt
                </li>

                <li>
                    Unearned or deferred revenue expected
                    to be recognized in the short term
                </li>

            </ul>

        </div>


        <h3>
            2. Accounts Payable
        </h3>

        <p>
            Accounts payable generally represent amounts owed to
            suppliers for goods or services purchased on credit.
        </p>

        <div class="example-box">

            <h3>
                Example
            </h3>

            <p>
                A company purchases $18,000 of inventory on account.
            </p>

            <div class="formula-box">

                Debit Inventory $18,000

                <br><br>

                Credit Accounts Payable $18,000

            </div>

        </div>


        <h3>
            3. Accrued Liabilities
        </h3>

        <p>
            An accrued liability exists when an expense has been incurred
            but has not yet been paid or recorded.
        </p>

        <div class="example-box">

            <h3>
                Accrued Wages
            </h3>

            <p>
                Employees have earned $9,000 of wages by December 31,
                but the company will pay them in January.
            </p>

            <div class="formula-box">

                Debit Wage Expense $9,000

                <br><br>

                Credit Wages Payable $9,000

            </div>

        </div>


        <h3>
            4. Accrued Interest
        </h3>

        <p>
            Interest expense must generally be recognized as it accrues,
            even when the cash payment occurs later.
        </p>

        <div class="formula-box">

            Interest

            =

            Principal

            ×

            Annual Interest Rate

            ×

            Time

        </div>


        <div class="example-box">

            <h3>
                Example
            </h3>

            <p>
                A company has a $100,000 note with a 6% annual interest
                rate outstanding for three months at year-end.
            </p>

            <div class="formula-box">

                $100,000 × 6% × 3/12

                =

                <strong>$1,500 accrued interest</strong>

            </div>

        </div>


        <h3>
            5. Unearned Revenue
        </h3>

        <p>
            When cash is received before the company satisfies its
            performance obligation, the amount generally represents
            a liability rather than revenue at that time.
        </p>

        <div class="formula-box">

            When Cash Is Received:

            <br><br>

            Debit Cash

            <br>

            Credit Unearned Revenue

        </div>

        <p>
            As the company earns the revenue, the liability decreases
            and revenue is recognized.
        </p>


        <h3>
            6. Current Maturities of Long-Term Debt
        </h3>

        <p>
            The portion of long-term debt that is due within the
            appropriate current classification period is generally
            reported as a current liability unless applicable accounting
            guidance supports long-term classification.
        </p>


        <div class="example-box">

            <h3>
                Example
            </h3>

            <p>
                A company has a $500,000 long-term loan.
            </p>

            <p>
                A principal payment of $80,000 is due during
                the next year.
            </p>

            <p>
                Assuming no exception applies:
            </p>

            <div class="formula-box">

                Current Liability:

                <strong>$80,000</strong>

                <br><br>

                Long-Term Liability:

                <strong>$420,000</strong>

            </div>

        </div>


        <h3>
    7. Short-Term Obligations and Refinancing
</h3>

<p>
    A short-term obligation may qualify for long-term
    classification when the company intends to refinance
    the obligation on a long-term basis and demonstrates
    the ability to do so under applicable U.S. GAAP.
</p>

<div class="key-points">

    <p>
        The ability to refinance may generally be demonstrated
        before the financial statements are issued by:
    </p>

    <ul>

        <li>
            Completing a refinancing through issuance of
            long-term debt or equity securities.
        </li>

        <li>
            Entering into a qualifying financing agreement
            that permits the company to refinance the
            obligation on a long-term basis.
        </li>

    </ul>

    <p>
        If the required conditions are not met, the obligation
        is generally classified as current.
    </p>

</div>


        <h3>
            8. Payroll-Related Liabilities
        </h3>

        <p>
            Employers may have liabilities for amounts withheld from
            employee compensation as well as employer payroll-related
            obligations.
        </p>

        <div class="key-points">

            <ul>

                <li>
                    Employee tax withholdings
                </li>

                <li>
                    Employer payroll taxes
                </li>

                <li>
                    Other employee deductions
                </li>

                <li>
                    Accrued compensation
                </li>

            </ul>

        </div>


        <h3>
            9. Compensated Absences
        </h3>

        <p>
            Certain employee absences, such as qualifying vacation
            benefits, can create an accrued liability when the applicable
            recognition requirements are satisfied.
        </p>

        <p>
            The accounting depends on the nature of the benefit and
            whether the employee's rights accumulate or vest under
            applicable guidance.
        </p>


        <h3>
            10. CPA Exam Focus
        </h3>

        <div class="key-points">

            <ul>

                <li>
                    Identify common current liabilities.
                </li>

                <li>
                    Record accrued expenses correctly.
                </li>

                <li>
                    Calculate accrued interest.
                </li>

                <li>
                    Understand why advance customer payments
                    can create liabilities.
                </li>

                <li>
                    Separate current maturities from the remaining
                    long-term portion of debt.
                </li>

                <li>
                    Pay close attention to refinancing facts when
                    determining debt classification.
                </li>

            </ul>

        </div>

        `,

        {

            question:
                "A company has a $240,000, 8% note payable. At December 31, four months of interest have accrued but will not be paid until the following year. How much interest payable should the company report at December 31?",

            answers: [

                "$4,800",

                "$6,400",

                "$12,800",

                "$19,200"

            ],

            correctAnswer: 1,

            explanation:
                "Accrued interest equals principal multiplied by the annual interest rate multiplied by the fraction of the year outstanding: $240,000 × 8% × 4/12 = $6,400. The company recognizes both interest expense and interest payable for $6,400."

        }

    );

    return;

}

if (moduleId === 2 && lessonId === 7) {

    showFARLessonPage(

        2,

        7,

        "Long-Term Debt",

        `

        <h2>
            Long-Term Debt
        </h2>

        <p>
            Long-term debt includes obligations that are not classified
            as current liabilities. For FAR, major topics include bonds
            payable, notes payable, premiums and discounts, interest
            expense, effective-interest amortization, debt issuance costs,
            and extinguishment of debt.
        </p>


        <h3>
            1. Bonds Payable
        </h3>

        <p>
            Bonds are debt instruments through which an issuer borrows
            money from investors and agrees to make specified interest
            and principal payments.
        </p>

        <div class="key-points">

            <ul>
                <li>
                    Face value is the principal amount stated on the bond.
                </li>

                <li>
                    The stated or coupon rate determines the contractual
                    cash interest payments.
                </li>

                <li>
                    The market or effective rate reflects the return
                    demanded by investors when the bonds are issued.
                </li>

                <li>
                    The maturity date is when the principal is due.
                </li>
            </ul>

        </div>


        <h3>
            2. Cash Interest
        </h3>

        <div class="formula-box">

            Cash Interest Paid

            =

            Face Value

            ×

            Stated Interest Rate

            ×

            Time

        </div>


        <div class="example-box">

            <h3>
                Example
            </h3>

            <p>
                $500,000 bonds have a stated annual rate of 6%
                and pay interest annually.
            </p>

            <div class="formula-box">

                $500,000 × 6%

                =

                <strong>$30,000 annual cash interest</strong>

            </div>

        </div>


        <h3>
            3. Bonds Issued at Par
        </h3>

        <p>
            When the stated interest rate equals the market interest
            rate at issuance, bonds generally sell at face value,
            or par.
        </p>

        <div class="formula-box">

            Stated Rate = Market Rate

            →

            Bond Issued at Par

        </div>


        <h3>
            4. Bonds Issued at a Discount
        </h3>

        <p>
            If the stated rate is lower than the market rate,
            investors generally will not pay full face value.
            The bonds therefore sell at a discount.
        </p>

        <div class="formula-box">

            Stated Rate &lt; Market Rate

            →

            Discount

        </div>

        <div class="key-points">

            <p>
                A bond discount causes the initial carrying amount
                of the debt to be less than its face value.
            </p>

        </div>


        <h3>
            5. Bonds Issued at a Premium
        </h3>

        <p>
            If the stated rate is higher than the market rate,
            investors are generally willing to pay more than face value.
            The bonds therefore sell at a premium.
        </p>

        <div class="formula-box">

            Stated Rate &gt; Market Rate

            →

            Premium

        </div>

        <div class="key-points">

            <p>
                A bond premium causes the initial carrying amount
                of the debt to exceed its face value.
            </p>

        </div>


        <h3>
            6. Effective-Interest Method
        </h3>

        <p>
            Under the effective-interest method, interest expense
            is based on the bond's carrying amount and the effective
            market interest rate.
        </p>

        <div class="formula-box">

            Interest Expense

            =

            Beginning Carrying Amount

            ×

            Effective Interest Rate

            ×

            Time

        </div>


        <h3>
            7. Discount Amortization
        </h3>

        <p>
            For bonds issued at a discount, effective-interest expense
            is greater than the contractual cash interest payment.
        </p>

        <div class="formula-box">

            Discount Amortization

            =

            Interest Expense

            −

            Cash Interest Paid

        </div>

        <p>
            Amortizing the discount increases the bond's carrying amount
            toward face value as maturity approaches.
        </p>


        <div class="example-box">

            <h3>
                Discount Example
            </h3>

            <p>
                Beginning carrying amount:
                <strong>$470,000</strong>
            </p>

            <p>
                Effective annual rate:
                <strong>8%</strong>
            </p>

            <p>
                Annual cash interest:
                <strong>$30,000</strong>
            </p>

            <div class="formula-box">

                Interest Expense:

                $470,000 × 8%

                = $37,600

                <br><br>

                Discount Amortization:

                $37,600 − $30,000

                = <strong>$7,600</strong>

                <br><br>

                Ending Carrying Amount:

                $470,000 + $7,600

                = <strong>$477,600</strong>

            </div>

        </div>


        <h3>
            8. Premium Amortization
        </h3>

        <p>
            For bonds issued at a premium, contractual cash interest
            exceeds effective-interest expense.
        </p>

        <div class="formula-box">

            Premium Amortization

            =

            Cash Interest Paid

            −

            Interest Expense

        </div>

        <p>
            Amortizing the premium decreases the carrying amount
            toward face value as maturity approaches.
        </p>


        <h3>
            9. Notes Payable
        </h3>

        <p>
            Long-term notes payable are generally measured using
            present-value concepts when appropriate. Interest expense
            reflects the effective interest rate on the obligation.
        </p>

        <p>
            If a note is issued at an amount different from its face
            value, the resulting discount or premium is recognized
            over the life of the note.
        </p>


        <h3>
            10. Debt Issuance Costs
        </h3>

        <p>
            Under U.S. GAAP, debt issuance costs related to a recognized
            debt liability are generally presented as a direct deduction
            from the carrying amount of that debt liability.
        </p>

        <p>
            These costs are generally amortized to interest expense
            over the term of the debt.
        </p>


        <h3>
            11. Extinguishment of Debt
        </h3>

        <p>
            When debt is extinguished, the company compares the
            reacquisition price with the net carrying amount of the debt.
        </p>

        <div class="formula-box">

            Gain or Loss

            =

            Net Carrying Amount of Debt

            −

            Reacquisition Price

        </div>

        <div class="key-points">

            <ul>

                <li>
                    Reacquisition price below carrying amount
                    generally creates a gain.
                </li>

                <li>
                    Reacquisition price above carrying amount
                    generally creates a loss.
                </li>

            </ul>

        </div>


        <div class="example-box">

            <h3>
                Extinguishment Example
            </h3>

            <p>
                Net carrying amount of debt:
                <strong>$410,000</strong>
            </p>

            <p>
                Reacquisition price:
                <strong>$425,000</strong>
            </p>

            <div class="formula-box">

                $410,000 − $425,000

                =

                <strong>$15,000 loss</strong>

            </div>

        </div>


        <h3>
            12. CPA Exam Focus
        </h3>

        <div class="key-points">

            <ul>

                <li>
                    Compare the stated rate with the market rate
                    to identify par, discount, or premium.
                </li>

                <li>
                    Calculate contractual cash interest using
                    the stated rate.
                </li>

                <li>
                    Calculate effective interest expense using
                    carrying amount and the market rate.
                </li>

                <li>
                    Discount amortization increases carrying amount.
                </li>

                <li>
                    Premium amortization decreases carrying amount.
                </li>

                <li>
                    At maturity, carrying amount approaches face value.
                </li>

                <li>
                    Know how to calculate a gain or loss when debt
                    is extinguished.
                </li>

            </ul>

        </div>

        `,

        {

            question:
                "A bond with a face value of $500,000 and a stated annual interest rate of 6% is issued when the market rate is 8%. How should the bond generally be issued?",

            answers: [

                "At a premium",

                "At par",

                "At a discount",

                "At face value plus accrued interest"

            ],

            correctAnswer: 2,

            explanation:
                "Because the bond's 6% stated rate is below the 8% market rate, its contractual interest payments are less attractive than the market requires. Investors therefore pay less than face value, causing the bond to be issued at a discount."

        }

    );

    return;

}

if (moduleId === 2 && lessonId === 8) {

    showFARLessonPage(

        2,

        8,

        "Contingencies & Commitments",

        `

        <h2>
            Contingencies & Commitments
        </h2>

        <p>
            Contingencies involve uncertainty about a possible gain or loss
            that will ultimately be resolved by future events. For FAR,
            you should understand when loss contingencies are accrued,
            when disclosure is required, how ranges of losses are handled,
            and how gain contingencies and commitments are reported.
        </p>


        <h3>
            1. Loss Contingencies
        </h3>

        <p>
            A loss contingency involves an existing condition, situation,
            or set of circumstances involving uncertainty about a possible
            loss that will ultimately be resolved when one or more future
            events occur or fail to occur.
        </p>


        <h3>
            2. Probability Categories
        </h3>

        <div class="key-points">

            <ul>

                <li>
                    <strong>Probable:</strong>
                    The future event is likely to occur.
                </li>

                <li>
                    <strong>Reasonably Possible:</strong>
                    The chance of occurrence is more than remote
                    but less than likely.
                </li>

                <li>
                    <strong>Remote:</strong>
                    The chance of occurrence is slight.
                </li>

            </ul>

        </div>


        <h3>
            3. When Is a Loss Accrued?
        </h3>

        <p>
            Under U.S. GAAP, an estimated loss from a contingency is
            generally accrued when both of the following conditions
            are satisfied:
        </p>

        <div class="key-points">

            <ol>

                <li>
                    It is probable that an asset has been impaired
                    or a liability has been incurred as of the
                    financial statement date.
                </li>

                <li>
                    The amount of the loss can be reasonably estimated.
                </li>

            </ol>

        </div>


        <div class="formula-box">

            Probable

            +

            Reasonably Estimable

            =

            <strong>Accrue the Loss</strong>

        </div>


        <div class="example-box">

            <h3>
                Example
            </h3>

            <p>
                A company is being sued. Its attorneys conclude that
                losing the case is probable and estimate the loss
                at $300,000.
            </p>

            <p>
                Assuming the amount is reasonably estimable:
            </p>

            <div class="formula-box">

                Debit Loss $300,000

                <br><br>

                Credit Liability $300,000

            </div>

        </div>


        <h3>
            4. Reasonably Possible Losses
        </h3>

        <p>
            If a loss is reasonably possible rather than probable,
            the loss generally is not accrued.
        </p>

        <p>
            Instead, disclosure is generally required when material.
        </p>

        <div class="formula-box">

            Reasonably Possible

            →

            <strong>Generally Disclose</strong>

        </div>


        <h3>
            5. Remote Losses
        </h3>

        <p>
            Loss contingencies considered remote generally do not
            require accrual or disclosure.
        </p>

        <div class="key-points">

            <p>
                Certain situations, such as some guarantees, may have
                specific disclosure requirements even when the likelihood
                of loss is remote, so always consider whether specialized
                guidance applies.
            </p>

        </div>


        <h3>
            6. Range of Estimated Loss
        </h3>

        <p>
            Sometimes management can estimate a range of possible losses
            rather than one specific amount.
        </p>

        <p>
            If one amount within the range is a better estimate than
            the others, that amount is generally accrued.
        </p>

        <p>
            If no amount within the range is a better estimate than
            another, U.S. GAAP generally requires accrual of the
            <strong>minimum amount in the range</strong>.
        </p>


        <div class="example-box">

            <h3>
                Example
            </h3>

            <p>
                A probable litigation loss is estimated between
                $100,000 and $160,000.
            </p>

            <p>
                No amount within the range is considered a better
                estimate than another.
            </p>

            <div class="formula-box">

                Amount Accrued:

                <strong>$100,000</strong>

            </div>

            <p>
                The possibility of additional loss up to the upper end
                of the range may also require appropriate disclosure.
            </p>

        </div>


        <h3>
            7. Gain Contingencies
        </h3>

        <p>
            Gain contingencies are treated more conservatively than
            loss contingencies.
        </p>

        <div class="key-points">

            <p>
                Gain contingencies generally are
                <strong>not recognized before realization</strong>
                because doing so could recognize income prematurely.
            </p>

        </div>

        <p>
            Appropriate disclosure may be made when warranted, but the
            disclosure should avoid misleading implications about the
            likelihood that the gain will be realized.
        </p>


        <h3>
            8. Commitments
        </h3>

        <p>
            A commitment is generally an agreement to engage in a future
            transaction, such as purchasing inventory or acquiring
            property under specified terms.
        </p>

        <p>
            The existence of a commitment does not automatically mean
            that a liability should be recognized.
        </p>

        <div class="key-points">

            <p>
                Material commitments may require disclosure when the
                information is important to users of the financial
                statements.
            </p>

        </div>


        <h3>
    9. Purchase Commitments
</h3>

<p>
    A firm, noncancelable purchase commitment generally does
    not result in recognition of the inventory or related
    payable before the goods are received.
</p>

<p>
    However, if the contract price exceeds the applicable
    measurement amount of the inventory to be received and
    the decline creates a material expected loss, the loss
    may need to be recognized before delivery.
</p>

<div class="key-points">

    <p>
        For FAR questions, distinguish between:
    </p>

    <ul>

        <li>
            The normal purchase commitment itself, which
            generally is not recorded as inventory and a
            payable before delivery.
        </li>

        <li>
            A loss arising from a firm purchase commitment,
            which may require recognition when the applicable
            U.S. GAAP requirements are met.
        </li>

    </ul>

</div>

<div class="example-box">

    <h3>
        Example
    </h3>

    <p>
        A company enters into a firm, noncancelable agreement
        to purchase inventory for $200,000.
    </p>

    <p>
        Before delivery, the applicable measurement amount of
        the inventory falls to $170,000 and the decline results
        in a recognized loss under U.S. GAAP.
    </p>

    <div class="formula-box">

        Expected Loss

        =

        $200,000 − $170,000

        =

        <strong>$30,000</strong>

    </div>

</div>


        <h3>
            10. CPA Exam Decision Pattern
        </h3>

        <div class="formula-box">

            Probable + Estimable

            →

            <strong>Accrue</strong>

            <br><br>

            Reasonably Possible

            →

            <strong>Generally Disclose</strong>

            <br><br>

            Remote

            →

            <strong>Generally Neither</strong>

        </div>


        <h3>
            11. CPA Exam Focus
        </h3>

        <div class="key-points">

            <ul>

                <li>
                    Distinguish probable, reasonably possible,
                    and remote losses.
                </li>

                <li>
                    Know the two conditions for accruing
                    a loss contingency.
                </li>

                <li>
                    Know how to account for a range of estimated losses.
                </li>

                <li>
                    Do not recognize gain contingencies prematurely.
                </li>

                <li>
                    Remember that commitments do not automatically
                    create recognized liabilities.
                </li>

                <li>
                    Watch for specialized rules involving guarantees
                    and purchase commitments.
                </li>

            </ul>

        </div>

        `,

        {

            question:
                "A company's attorneys conclude that a litigation loss is probable and estimate the loss to be between $80,000 and $120,000. No amount within the range is a better estimate than any other amount. Under U.S. GAAP, what amount should generally be accrued?",

            answers: [

                "$80,000",

                "0",

                "$100,000",

                "$120,000"

            ],

            correctAnswer: 0,

            explanation:
                "When a loss contingency is probable and reasonably estimable as a range, but no amount within the range is a better estimate than another, U.S. GAAP generally requires accrual of the minimum amount in the range. Therefore, $80,000 is accrued, with appropriate disclosure concerning the potential additional loss."

        }

    );

    return;

}

if (moduleId === 2 && lessonId === 9) {

    showFARLessonPage(

        2,

        9,

        "Investments",

        `

        <h2>
            Investments
        </h2>

        <p>
            Companies may invest in debt securities, equity securities,
            and other financial instruments. For FAR, you should understand
            how investments are classified, measured, and presented,
            including where unrealized gains and losses are reported.
        </p>


        <h3>
            1. Debt Securities
        </h3>

        <p>
            Debt securities represent a creditor relationship with
            another entity.
        </p>

        <div class="key-points">

            <p>
                Common examples include:
            </p>

            <ul>

                <li>
                    Corporate bonds
                </li>

                <li>
                    Government bonds
                </li>

                <li>
                    Treasury securities
                </li>

                <li>
                    Certain notes
                </li>

            </ul>

        </div>


        <h3>
            2. Major Debt Security Classifications
        </h3>

        <p>
            Under U.S. GAAP, investments in debt securities are commonly
            classified as:
        </p>

        <div class="key-points">

            <ul>

                <li>
                    <strong>Held-to-Maturity (HTM)</strong>
                </li>

                <li>
                    <strong>Available-for-Sale (AFS)</strong>
                </li>

                <li>
                    <strong>Trading</strong>
                </li>

            </ul>

        </div>


        <h3>
            3. Held-to-Maturity Securities
        </h3>

        <p>
            A debt security may be classified as held-to-maturity when
            the investor has both the positive intent and the ability
            to hold the security until maturity.
        </p>

        <div class="formula-box">

            Held-to-Maturity

            →

            <strong>Generally Reported at Amortized Cost</strong>

        </div>

        <p>
            Changes in market value generally do not create the same
            recurring fair-value adjustment used for trading or
            available-for-sale debt securities.
        </p>


        <h3>
            4. Trading Debt Securities
        </h3>

        <p>
            Trading debt securities are generally measured at fair value.
        </p>

        <div class="formula-box">

            Trading Debt Security

            →

            Fair Value

            <br><br>

            Unrealized Gain or Loss

            →

            <strong>Net Income</strong>

        </div>


        <div class="example-box">

            <h3>
                Example
            </h3>

            <p>
                A trading debt security has a carrying amount before
                fair-value adjustment of $90,000 and a year-end fair
                value of $96,000.
            </p>

            <div class="formula-box">

                $96,000 − $90,000

                =

                <strong>$6,000 unrealized gain</strong>

            </div>

            <p>
                The unrealized gain is generally recognized in earnings.
            </p>

        </div>


        <h3>
            5. Available-for-Sale Debt Securities
        </h3>

        <p>
            Available-for-sale debt securities are generally measured
            at fair value.
        </p>

        <div class="formula-box">

            AFS Debt Security

            →

            Fair Value

            <br><br>

            Unrealized Holding Gain or Loss

            →

            <strong>Other Comprehensive Income</strong>

        </div>

        <p>
            The unrealized holding gain or loss generally enters
            accumulated other comprehensive income through OCI,
            subject to applicable credit-loss and other accounting rules.
        </p>


        <h3>
            6. Trading vs. AFS
        </h3>

        <div class="key-points">

            <ul>

                <li>
                    Trading debt securities:
                    unrealized holding gains and losses generally
                    affect net income.
                </li>

                <li>
                    Available-for-sale debt securities:
                    unrealized holding gains and losses generally
                    affect OCI rather than current net income.
                </li>

                <li>
                    Held-to-maturity debt securities:
                    generally reported at amortized cost.
                </li>

            </ul>

        </div>


        <h3>
            7. Equity Securities
        </h3>

        <p>
            Equity securities represent ownership interests in another
            entity, such as common stock.
        </p>

        <p>
            Equity securities within the scope of the general U.S. GAAP
            equity investment guidance and with readily determinable
            fair values are generally measured at fair value, with
            changes in fair value recognized in net income.
        </p>

        <div class="formula-box">

            Equity Security Fair-Value Change

            →

            <strong>Generally Net Income</strong>

        </div>

        <p>
            Therefore, do not automatically apply the AFS debt-security
            OCI treatment to ordinary equity securities.
        </p>


        <h3>
            8. Investments Without Readily Determinable Fair Values
        </h3>

        <p>
            Certain equity investments without readily determinable
            fair values may qualify for a measurement alternative
            under U.S. GAAP.
        </p>

        <p>
            When applicable, the investment is generally measured at
            cost, less impairment, plus or minus qualifying observable
            price changes from orderly transactions for identical or
            similar investments of the same issuer.
        </p>


        <h3>
            9. Equity Method
        </h3>

        <p>
            When an investor has significant influence over an investee,
            the equity method may apply rather than ordinary fair-value
            accounting.
        </p>

        <div class="key-points">

            <p>
                Ownership of approximately 20% to 50% of voting stock
                can indicate significant influence, but ownership
                percentage alone is not conclusive.
            </p>

        </div>

        <p>
            Under the equity method, the investor generally recognizes
            its share of the investee's income or loss.
        </p>

        <div class="formula-box">

            Investor's Share of Investee Income

            →

            Increase Investment Account

            <br><br>

            Dividends Received

            →

            Decrease Investment Account

        </div>


        <div class="example-box">

            <h3>
                Equity Method Example
            </h3>

            <p>
                An investor owns 30% of an investee.
            </p>

            <p>
                The investee reports net income of $100,000.
            </p>

            <div class="formula-box">

                $100,000 × 30%

                =

                <strong>$30,000 investor share of income</strong>

            </div>

            <p>
                The investor generally increases the carrying amount
                of the investment by $30,000 and recognizes its share
                of the investee's income.
            </p>

        </div>


        <h3>
            10. Dividends Under the Equity Method
        </h3>

        <p>
            Dividends received under the equity method are generally
            treated as a return of investment rather than dividend
            income.
        </p>

        <div class="formula-box">

            Cash Received

            ↑

            <br><br>

            Investment Account

            ↓

        </div>


        <h3>
            11. Credit Losses
        </h3>

        <p>
            Debt securities are also subject to applicable credit-loss
            guidance.
        </p>

        <p>
            The accounting differs depending on the classification
            of the debt security, so distinguish credit-related losses
            from ordinary changes in market interest rates when a
            CPA question provides those facts.
        </p>


        <h3>
            12. CPA Exam Focus
        </h3>

        <div class="key-points">

            <ul>

                <li>
                    Know the classifications of debt securities.
                </li>

                <li>
                    HTM debt securities are generally measured
                    at amortized cost.
                </li>

                <li>
                    Trading debt security unrealized gains and losses
                    generally affect net income.
                </li>

                <li>
                    AFS debt security unrealized holding gains and losses
                    generally affect OCI.
                </li>

                <li>
                    Ordinary equity security fair-value changes generally
                    affect net income.
                </li>

                <li>
                    Recognize when the equity method applies.
                </li>

                <li>
                    Under the equity method, investee income increases
                    the investment account and dividends decrease it.
                </li>

            </ul>

        </div>

        `,

        {

            question:
                "A company owns an available-for-sale debt security. The security's fair value increases by $12,000 during the year, and the increase is an unrealized holding gain unrelated to credit losses. Where is the gain generally reported?",

            answers: [

                "Net income",

                "Additional paid-in capital",

                "Retained earnings directly",

                "Other comprehensive income"

            ],

            correctAnswer: 3,

            explanation:
                "Available-for-sale debt securities are generally measured at fair value, with unrealized holding gains and losses that are not attributable to credit-loss accounting recognized in other comprehensive income. Therefore, the $12,000 unrealized holding gain is generally reported in OCI."

        }

    );

    return;

}

if (moduleId === 2 && lessonId === 10) {

    showFARLessonPage(

        2,

        10,

        "Equity Accounts",

        `

        <h2>
            Equity Accounts
        </h2>

        <p>
            Stockholders' equity represents the residual interest in a
            corporation's assets after liabilities are deducted. For FAR,
            you should understand common and preferred stock, par value,
            additional paid-in capital, treasury stock, retained earnings,
            dividends, and stock splits.
        </p>


        <h3>
            1. Major Components of Stockholders' Equity
        </h3>

        <div class="key-points">

            <ul>

                <li>
                    Common stock
                </li>

                <li>
                    Preferred stock
                </li>

                <li>
                    Additional paid-in capital
                </li>

                <li>
                    Retained earnings
                </li>

                <li>
                    Accumulated other comprehensive income or loss
                </li>

                <li>
                    Treasury stock
                </li>

            </ul>

        </div>


        <h3>
            2. Common Stock
        </h3>

        <p>
            Common stock represents an ownership interest in a corporation.
            When shares are issued, the accounting depends on whether the
            shares have a stated par value.
        </p>

        <p>
            For par-value common stock, the Common Stock account is
            generally credited for the shares' total par value.
        </p>

        <div class="formula-box">

            Common Stock

            =

            Shares Issued

            ×

            Par Value Per Share

        </div>


        <div class="example-box">

            <h3>
                Example
            </h3>

            <p>
                A corporation issues 10,000 shares of $2 par-value
                common stock for $15 per share.
            </p>

            <div class="formula-box">

                Cash Received

                =

                10,000 × $15

                =

                <strong>$150,000</strong>

                <br><br>

                Common Stock

                =

                10,000 × $2

                =

                <strong>$20,000</strong>

                <br><br>

                Additional Paid-In Capital

                =

                $150,000 − $20,000

                =

                <strong>$130,000</strong>

            </div>

        </div>


        <h3>
            3. Additional Paid-In Capital
        </h3>

        <p>
            Additional paid-in capital, or APIC, generally represents
            amounts contributed by shareholders in excess of amounts
            credited to the stock account.
        </p>

        <div class="formula-box">

            APIC from Common Stock Issuance

            =

            Issue Proceeds

            −

            Amount Credited to Common Stock

        </div>


        <h3>
            4. Preferred Stock
        </h3>

        <p>
            Preferred stock may provide shareholders with preferences
            over common shareholders, particularly with respect to
            dividends or distributions upon liquidation.
        </p>

        <div class="key-points">

            <ul>

                <li>
                    Preferred shares may be cumulative.
                </li>

                <li>
                    They may be noncumulative.
                </li>

                <li>
                    They may be convertible.
                </li>

                <li>
                    They may be participating or nonparticipating.
                </li>

            </ul>

        </div>


        <h3>
            5. Cumulative Preferred Dividends
        </h3>

        <p>
            With cumulative preferred stock, unpaid preferred dividends
            from prior periods are called dividends in arrears.
        </p>

        <div class="key-points">

            <p>
                Dividends in arrears generally are
                <strong>not recognized as liabilities</strong>
                until the dividends are declared.
            </p>

        </div>

        <p>
            However, applicable disclosure of dividends in arrears
            may be required.
        </p>


        <h3>
            6. Retained Earnings
        </h3>

        <p>
            Retained earnings generally represents accumulated earnings
            of the corporation that have not been distributed to
            shareholders through dividends.
        </p>

        <div class="formula-box">

            Ending Retained Earnings

            =

            Beginning Retained Earnings

            +

            Net Income

            −

            Dividends

        </div>


        <div class="example-box">

            <h3>
                Example
            </h3>

            <p>
                Beginning retained earnings:
                <strong>$300,000</strong>
            </p>

            <p>
                Net income:
                <strong>$90,000</strong>
            </p>

            <p>
                Dividends:
                <strong>$25,000</strong>
            </p>

            <div class="formula-box">

                $300,000 + $90,000 − $25,000

                =

                <strong>$365,000 ending retained earnings</strong>

            </div>

        </div>


        <h3>
            7. Treasury Stock
        </h3>

        <p>
            Treasury stock represents a corporation's own shares that
            have been issued and subsequently reacquired but not retired.
        </p>

        <div class="key-points">

            <ul>

                <li>
                    Treasury stock is generally a contra-equity account.
                </li>

                <li>
                    It reduces total stockholders' equity.
                </li>

                <li>
                    Treasury shares are not considered outstanding.
                </li>

                <li>
                    Under the cost method, treasury stock is generally
                    recorded at the amount paid to reacquire the shares.
                </li>

            </ul>

        </div>


        <div class="example-box">

            <h3>
                Treasury Stock Example
            </h3>

            <p>
                A corporation reacquires 2,000 of its shares for
                $18 per share.
            </p>

            <div class="formula-box">

                Treasury Stock

                =

                2,000 × $18

                =

                <strong>$36,000</strong>

            </div>

            <p>
                Under the cost method, treasury stock is debited for
                $36,000, reducing total stockholders' equity.
            </p>

        </div>


        <h3>
            8. Shares Authorized, Issued, and Outstanding
        </h3>

        <div class="key-points">

            <ul>

                <li>
                    <strong>Authorized:</strong>
                    Maximum shares the corporation is authorized
                    to issue under its governing documents.
                </li>

                <li>
                    <strong>Issued:</strong>
                    Shares that have been issued to shareholders.
                </li>

                <li>
                    <strong>Outstanding:</strong>
                    Issued shares currently held by shareholders
                    outside the corporation.
                </li>

            </ul>

        </div>

        <div class="formula-box">

            Outstanding Shares

            =

            Issued Shares

            −

            Treasury Shares

        </div>


        <h3>
            9. Cash Dividends
        </h3>

        <p>
            A cash dividend generally creates a liability when the
            corporation's board declares the dividend.
        </p>

        <div class="formula-box">

            Declaration:

            <br><br>

            Debit Retained Earnings

            <br>

            Credit Dividends Payable

            <br><br>

            Payment:

            <br><br>

            Debit Dividends Payable

            <br>

            Credit Cash

        </div>


        <h3>
            10. Stock Dividends
        </h3>

        <p>
            A stock dividend distributes additional shares of the
            corporation's stock to existing shareholders.
        </p>

        <div class="key-points">

            <p>
                A stock dividend generally reallocates amounts within
                stockholders' equity rather than reducing total
                stockholders' equity.
            </p>

        </div>

        <p>
            The specific accounting depends in part on the size and
            circumstances of the stock dividend.
        </p>


        <h3>
            11. Stock Splits
        </h3>

        <p>
            A stock split increases the number of shares while
            proportionately reducing the par or stated value per share.
        </p>

        <div class="example-box">

            <h3>
                2-for-1 Stock Split
            </h3>

            <p>
                Before split:
            </p>

            <div class="formula-box">

                100,000 shares

                ×

                $10 par value

            </div>

            <p>
                After a 2-for-1 split:
            </p>

            <div class="formula-box">

                200,000 shares

                ×

                $5 par value

            </div>

            <p>
                Total par value remains
                <strong>$1,000,000</strong>.
            </p>

        </div>


        <h3>
            12. Accumulated Other Comprehensive Income
        </h3>

        <p>
            Accumulated other comprehensive income, or AOCI, is an
            equity component that accumulates certain items initially
            recognized in other comprehensive income rather than
            directly in net income.
        </p>

        <p>
            For example, certain unrealized holding gains and losses
            on available-for-sale debt securities can affect OCI
            and ultimately AOCI.
        </p>


        <h3>
            13. CPA Exam Focus
        </h3>

        <div class="key-points">

            <ul>

                <li>
                    Calculate common stock and APIC when shares
                    are issued above par.
                </li>

                <li>
                    Understand cumulative preferred dividends
                    and dividends in arrears.
                </li>

                <li>
                    Calculate ending retained earnings.
                </li>

                <li>
                    Remember that treasury stock reduces equity.
                </li>

                <li>
                    Calculate outstanding shares.
                </li>

                <li>
                    Distinguish cash dividends, stock dividends,
                    and stock splits.
                </li>

                <li>
                    Understand the relationship between OCI and AOCI.
                </li>

            </ul>

        </div>

        `,

        {

            question:
                "A corporation has 100,000 shares of common stock issued and reacquires 15,000 shares as treasury stock. How many common shares are outstanding after the reacquisition?",

            answers: [

                "85,000 shares",

                "100,000 shares",

                "115,000 shares",

                "15,000 shares"

            ],

            correctAnswer: 0,

            explanation:
                "Outstanding shares equal issued shares minus treasury shares. Therefore, 100,000 issued shares minus 15,000 treasury shares equals 85,000 outstanding shares."

        }

    );

    return;

}

if (
    moduleId === 3 &&
    lessonId === 1
) {

    showFARLessonPage(
        3,
        1,

        "Accounting Changes & Error Corrections",

        `

        <h2>
            Accounting Changes & Error Corrections
        </h2>

        <p>
            Financial statements sometimes need to reflect
            changes in accounting methods, revised estimates,
            changes in the reporting entity, or corrections
            of errors from prior periods.
        </p>


        <h3>
            1. Change in Accounting Principle
        </h3>

        <p>
            A change in accounting principle occurs when a
            company changes from one generally accepted
            accounting principle to another generally accepted
            accounting principle.
        </p>

        <div class="key-points">

            <strong>
                General treatment:
            </strong>

            <p>
                Apply the change retrospectively unless it is
                impracticable to determine the prior-period
                effects or specific accounting guidance
                requires another treatment.
            </p>

        </div>

        <p>
            Retrospective application means prior comparative
            financial statements are presented as though the
            new accounting principle had always been used.
        </p>

        <p>
            The cumulative effect for periods before those
            presented is generally reflected as an adjustment
            to the opening balance of the affected component
            of equity, usually retained earnings.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A company changes from one acceptable inventory
                accounting principle to another. If retrospective
                application is required and practicable, prior
                periods presented are adjusted to reflect the
                newly adopted principle.
            </p>

        </div>


        <h3>
            2. Change in Accounting Estimate
        </h3>

        <p>
            Estimates are revised when new information or
            experience changes management's expectations.
        </p>

        <p>
            Common examples include changes in:
        </p>

        <ul>

            <li>
                Estimated useful life of depreciable assets
            </li>

            <li>
                Estimated residual value
            </li>

            <li>
                Expected credit losses
            </li>

            <li>
                Warranty obligations
            </li>

        </ul>


        <div class="key-points">

            <strong>
                Treatment:
            </strong>

            <p>
                Changes in accounting estimates are generally
                accounted for prospectively.
            </p>

        </div>

        <p>
            That means previously issued financial statements
            are not revised. The new estimate affects the
            current period and, when applicable, future periods.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                Equipment originally had an estimated remaining
                useful life of eight years. New information
                indicates that it will instead last only five
                remaining years.
            </p>

            <p>
                The company does not go back and recalculate
                depreciation for prior years. It uses the
                revised estimate prospectively.
            </p>

        </div>

        <h3>
    Change in Estimate Effected by a Change in Accounting Principle
</h3>

<p>
    Sometimes a change in accounting principle is inseparable
    from a change in accounting estimate.
</p>

<p>
    In that situation, the change is generally accounted for
    as a change in estimate and therefore applied prospectively.
</p>

<div class="example-box">

    <strong>
        Example
    </strong>

    <p>
        A change in depreciation method may reflect a change
        in the expected pattern in which an asset's economic
        benefits are consumed.
    </p>

    <p>
        Because the effect of the change in principle cannot
        be separated from the change in estimate, the change
        is generally accounted for prospectively.
    </p>

</div>


        <h3>
            3. Change in Reporting Entity
        </h3>

        <p>
            A change in reporting entity changes the specific
            entities included in the financial statements.
        </p>

        <p>
            When applicable, comparative financial statements
            are generally presented retrospectively as though
            the new reporting entity had existed during the
            prior periods presented.
        </p>


        <h3>
            4. Error Corrections
        </h3>

        <p>
            An accounting error is different from a change
            in estimate.
        </p>

        <p>
            Errors may result from:
        </p>

        <ul>

            <li>
                Mathematical mistakes
            </li>

            <li>
                Incorrect application of accounting principles
            </li>

            <li>
                Oversights
            </li>

            <li>
                Misuse of information that was available
                when the financial statements were prepared
            </li>

        </ul>


        <div class="key-points">

            <strong>
                Prior-period errors:
            </strong>

            <p>
                Material errors in previously issued financial
                statements generally require correction of
                prior-period financial information rather than
                being treated as a current-period operating item.
            </p>

        </div>

        <p>
    When comparative financial statements are presented,
    prior periods affected by a material error are generally
    restated to correct the error.
</p>

<p>
    If the error occurred before the earliest period presented,
    the cumulative effect is generally reflected in the opening
    balances of affected assets, liabilities, and equity accounts,
    including retained earnings when applicable.
</p>


        <h3>
            5. Estimate Change vs. Error
        </h3>

        <p>
            This distinction is especially important on the
            CPA Exam.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    New information changes useful life
                </span>

                <strong>
                    Estimate Change
                </strong>

            </div>


            <div>

                <span>
                    Prior depreciation calculation used
                    the wrong asset cost
                </span>

                <strong>
                    Error
                </strong>

            </div>


            <div>

                <span>
                    New collection experience changes
                    expected credit losses
                </span>

                <strong>
                    Estimate Change
                </strong>

            </div>


            <div>

                <span>
                    Transaction was accidentally omitted
                    last year
                </span>

                <strong>
                    Error
                </strong>

            </div>

        </div>


        <h3>
            CPA Exam Memory Rule
        </h3>

        <div class="formula-box">

            Principle
            → Usually Retrospective

            Estimate
            → Prospective

            Reporting Entity
            → Retrospective

            Error
            → Correct Prior Periods

        </div>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    Changes in accounting principle are
                    generally applied retrospectively.
                </li>

                <li>
                    Changes in estimates are generally
                    applied prospectively.
                </li>

                <li>
                    Changes in reporting entity generally
                    require retrospective presentation.
                </li>

                <li>
                    Material prior-period errors require
                    correction rather than prospective
                    accounting.
                </li>

                <li>
                    New information normally indicates an
                    estimate change; misuse or omission of
                    information already available may
                    indicate an error.
                </li>

            </ul>

        </div>

        `,

        {
    question:
        "A company revises the estimated useful life of equipment because of new information. How should the change generally be accounted for?",

    answers: [
    "Retrospectively",
    "As a prior-period error",
    "Directly through accumulated other comprehensive income",
    "Prospectively"
],

correctAnswer: 3,

    explanation:
        "A revision resulting from new information is a change in accounting estimate and is generally accounted for prospectively."
}

    );

    return;

}

if (
    moduleId === 3 &&
    lessonId === 2
) {

    showFARLessonPage(
        3,
        2,

        "Contingencies & Commitments",

        `

        <h2>
            Contingencies & Commitments
        </h2>

        <p>
            A contingency involves an existing condition,
            situation, or set of circumstances involving
            uncertainty about a possible gain or loss.
        </p>


        <h3>
            1. Loss Contingencies
        </h3>

        <p>
            Loss contingencies are evaluated based on both
            the likelihood that a loss has been incurred
            and whether the amount can be reasonably estimated.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Probable + Reasonably Estimable
                </span>

                <strong>
                    Accrue the Loss
                </strong>

            </div>


            <div>

                <span>
                    Reasonably Possible
                </span>

                <strong>
                    Disclose
                </strong>

            </div>


            <div>

                <span>
                    Remote
                </span>

                <strong>
                    Usually No Accrual or Disclosure
                </strong>

            </div>

        </div>


        <div class="key-points">

            <strong>
                CPA Rule:
            </strong>

            <p>
                If a loss is probable and the amount can be
                reasonably estimated, recognize the loss
                and related liability.
            </p>

        </div>


        <h3>
            2. Range of Estimated Loss
        </h3>

        <p>
            Sometimes management can estimate a range rather
            than one exact amount.
        </p>

        <p>
            If one amount within the range is a better estimate
            than the others, that amount is accrued.
        </p>

        <p>
            If no amount is a better estimate than any other,
            the minimum amount in the range is generally accrued,
            with disclosure of the possibility of additional loss.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A lawsuit is probable and the estimated loss
                ranges from $100,000 to $160,000.
                No amount within the range is considered
                a better estimate.
            </p>

            <div class="formula-box">

                Amount Accrued
                =
                $100,000

            </div>

            <p>
                The potential additional exposure up to
                $60,000 should also be appropriately disclosed.
            </p>

        </div>


        <h3>
            3. Reasonably Possible Losses
        </h3>

        <p>
            If a loss is reasonably possible rather than
            probable, it is generally not accrued.
        </p>

        <p>
            Instead, the nature of the contingency and an
            estimate of the possible loss or range of loss
            are generally disclosed when required.
        </p>


        <h3>
            4. Remote Losses
        </h3>

        <p>
            Remote losses generally require neither accrual
            nor disclosure.
        </p>

        <p>
            Certain guarantees and similar arrangements may
            have special disclosure requirements even when
            the likelihood of loss is remote.
        </p>


        <h3>
            5. Gain Contingencies
        </h3>

        <p>
            Potential gains are treated more conservatively.
        </p>

        <div class="key-points">

            <p>
                Gain contingencies generally are not recognized
while realization remains uncertain.
            </p>

        </div>


        <h3>
            6. Commitments
        </h3>

        <p>
            A commitment is an agreement that obligates a
            company to future transactions, such as:
        </p>

        <ul>

            <li>
                Purchase commitments
            </li>

            <li>
                Long-term supply contracts
            </li>

            <li>
                Construction commitments
            </li>

            <li>
                Other significant contractual obligations
            </li>

        </ul>


        <p>
            Commitments do not automatically create a liability.
            Their accounting depends on whether an asset,
            liability, loss, or other recognizable event
            has occurred.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A company signs a noncancelable contract to
                purchase inventory next year for $500,000.
                Simply signing the normal purchase commitment
                does not necessarily create a current liability
                for the full $500,000.
            </p>

        </div>

        <h3>
    Loss on a Firm Purchase Commitment
</h3>

<p>
    A firm, noncancelable purchase commitment generally does
    not result in recording the inventory and related payable
    before the goods are received.
</p>

<p>
    However, if the contract price exceeds the applicable
    measurement amount of the inventory to be received and
    the decline creates a recognizable loss under U.S. GAAP,
    the loss may need to be recognized before delivery.
</p>

<div class="example-box">

    <strong>
        Example
    </strong>

    <p>
        A company has a firm commitment to purchase inventory
        for $100,000. Before delivery, the applicable
        measurement amount of the inventory falls to $82,000,
        and the requirements for recognizing a loss are met.
    </p>

    <div class="formula-box">

        Expected Loss
        =
        $100,000 − $82,000
        =
        $18,000

    </div>

</div>


        <h3>
            CPA Exam Decision Rule
        </h3>

        <div class="formula-box">

            Probable
            + Reasonably Estimable
            → Accrue

            Reasonably Possible
            → Disclose

            Remote
            → Usually Neither

            Gain Contingency
            → Do Not Recognize Early

        </div>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    Probable and reasonably estimable losses
                    are accrued.
                </li>

                <li>
                    Reasonably possible losses are generally
                    disclosed but not accrued.
                </li>

                <li>
                    Remote losses generally require neither
                    recognition nor disclosure.
                </li>

                <li>
                    If a probable loss is estimated as a range
                    and no amount is a better estimate, accrue
                    the minimum amount.
                </li>

                <li>
                    Gain contingencies generally are not
                    recognized before realization.
                </li>

                <li>
                    Commitments do not automatically create
                    liabilities merely because a contract
                    has been signed.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "A lawsuit against a company is probable, and the estimated loss ranges from $200,000 to $300,000. No amount within the range is considered a better estimate than another. What amount should generally be accrued?",

            answers: [
                "$0",
                "$200,000",
                "$250,000",
                "$300,000"
            ],

            correctAnswer: 1,

            explanation:
                "When a loss is probable and reasonably estimable as a range, and no amount within the range is a better estimate than another, the minimum amount in the range is generally accrued."
        }

    );

    return;

}

if (
    moduleId === 3 &&
    lessonId === 3
) {

    showFARLessonPage(
        3,
        3,

        "Revenue Recognition",

        `

        <h2>
            Revenue Recognition
        </h2>

        <p>
            Revenue from contracts with customers is generally
            recognized using the five-step model in ASC Topic 606.
        </p>

        <div class="key-points">

            <strong>
                Core Principle:
            </strong>

            <p>
                Recognize revenue to depict the transfer of
                promised goods or services to customers in an
                amount that reflects the consideration the entity
                expects to receive.
            </p>

        </div>


        <h3>
            The Five-Step Revenue Model
        </h3>


        <div class="financial-example">

            <div>
                <span>Step 1</span>
                <strong>Identify the Contract</strong>
            </div>

            <div>
                <span>Step 2</span>
                <strong>Identify Performance Obligations</strong>
            </div>

            <div>
                <span>Step 3</span>
                <strong>Determine the Transaction Price</strong>
            </div>

            <div>
                <span>Step 4</span>
                <strong>Allocate the Transaction Price</strong>
            </div>

            <div>
                <span>Step 5</span>
                <strong>Recognize Revenue</strong>
            </div>

        </div>


        <h3>
            1. Identify the Contract
        </h3>

        <p>
            A contract creates enforceable rights and obligations
            between the entity and the customer.
        </p>

        <p>
            Among other criteria, the parties must approve the
            arrangement, their rights and payment terms must be
            identifiable, the arrangement must have commercial
            substance, and collection must be probable.
        </p>


        <h3>
            2. Identify Performance Obligations
        </h3>

        <p>
            A performance obligation is generally a promise to
            transfer a distinct good or service to the customer.
        </p>

        <p>
            A promised good or service is distinct when the
            customer can benefit from it on its own or with other
            readily available resources and the promise is
            separately identifiable within the contract.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A company sells equipment together with a
                separately identifiable one-year maintenance
                service.
            </p>

            <p>
                If both are distinct, the equipment and the
                maintenance service are separate performance
                obligations.
            </p>

        </div>


        <h3>
            3. Determine the Transaction Price
        </h3>

        <p>
            The transaction price is the amount of consideration
            the entity expects to be entitled to in exchange for
            transferring the promised goods or services.
        </p>

        <p>
            Consideration may include:
        </p>

        <ul>
            <li>Fixed amounts</li>
            <li>Variable consideration</li>
            <li>Noncash consideration</li>
            <li>Other adjustments required by the guidance</li>
        </ul>


        <h3>
            Variable Consideration
        </h3>

        <p>
            Variable consideration may result from bonuses,
            discounts, rebates, refunds, penalties, or similar
            items.
        </p>

        <div class="key-points">

            <p>
                Variable consideration is included in the
                transaction price only to the extent that it is
                probable that a significant reversal of cumulative
                revenue will not occur when the uncertainty is
                later resolved.
            </p>

        </div>


        <h3>
            4. Allocate the Transaction Price
        </h3>

        <p>
            If a contract contains multiple performance
            obligations, the transaction price is generally
            allocated based on relative standalone selling prices.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A company sells Product A and Service B together
                for $900.
            </p>

            <p>
                Their standalone selling prices are:
            </p>

            <div class="formula-box">

                Product A = $800

                Service B = $200

                Total Standalone Selling Prices = $1,000

            </div>

            <p>
                Product A receives 80% of the transaction price:
            </p>

            <div class="formula-box">

                $900 × 80%
                =
                $720

            </div>

            <p>
                Service B receives 20%:
            </p>

            <div class="formula-box">

                $900 × 20%
                =
                $180

            </div>

        </div>


        <h3>
            5. Recognize Revenue
        </h3>

        <p>
            Revenue is recognized when or as a performance
            obligation is satisfied through transfer of control
            of the promised good or service to the customer.
        </p>


        <h3>
            Point in Time vs. Over Time
        </h3>

        <p>
            Some performance obligations are satisfied at a
            specific point in time, while others are satisfied
            over time.
        </p>

        <div class="key-points">

    <strong>
        Over-Time Recognition:
    </strong>

    <p>
        A performance obligation is satisfied over time
        if one of the applicable criteria is met.
    </p>

    <ul>

        <li>
            The customer simultaneously receives and
            consumes the benefits as the entity performs.
        </li>

        <li>
            The entity's performance creates or enhances
            an asset that the customer controls as the
            asset is created or enhanced.
        </li>

        <li>
            The entity's performance creates an asset
            with no alternative use to the entity, and
            the entity has an enforceable right to payment
            for performance completed to date.
        </li>

    </ul>

</div>


        <div class="financial-example">

            <div>

                <span>
                    Typical Product Sale
                </span>

                <strong>
                    Often Point in Time
                </strong>

            </div>


            <div>

                <span>
                    Qualifying Service Contract
                </span>

                <strong>
                    May Be Over Time
                </strong>

            </div>

        </div>


        <p>
            When revenue is recognized over time, the entity
            recognizes revenue based on an appropriate measure
            of progress toward complete satisfaction of the
            performance obligation.
        </p>


        <h3>
            Contract Liability
        </h3>

        <p>
            If a customer pays before the company has transferred
            the promised goods or services, the company generally
            records a contract liability rather than revenue.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A customer pays $12,000 in advance for a
                12-month service contract.
            </p>

            <p>
                At the beginning, the company generally records
                a contract liability.
            </p>

            <p>
                If the service is provided evenly over the year,
                monthly revenue would be:
            </p>

            <div class="formula-box">

                $12,000 ÷ 12
                =
                $1,000 Per Month

            </div>

        </div>


        <h3>
            Contract Asset
        </h3>

        <p>
            A contract asset may arise when an entity has
            transferred goods or services but its right to
            consideration is still conditional on something
            other than the passage of time.
        </p>


        <h3>
            CPA Exam Memory Rule
        </h3>

        <div class="formula-box">

            Contract

            ↓

            Performance Obligations

            ↓

            Transaction Price

            ↓

            Allocate

            ↓

            Recognize When / As Control Transfers

        </div>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    Revenue recognition under Topic 606 follows
                    a five-step model.
                </li>

                <li>
                    Distinct promised goods and services may be
                    separate performance obligations.
                </li>

                <li>
                    Transaction price may include fixed and
                    variable consideration.
                </li>

                <li>
                    Transaction price is generally allocated
                    using relative standalone selling prices.
                </li>

                <li>
                    Revenue is recognized when or as control
                    transfers to the customer.
                </li>

                <li>
                    Advance customer payments generally create
                    a contract liability until the related
                    performance obligation is satisfied.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "A company sells a product and a separate service for a combined transaction price of $900. The product has a standalone selling price of $800 and the service has a standalone selling price of $200. How much of the transaction price should generally be allocated to the product?",

            answers: [
                "$720",
                "$800",
                "$900",
                "$700"
            ],

            correctAnswer: 0,

            explanation:
                "The total standalone selling price is $1,000. The product represents 80% of that total, so $900 × 80% = $720 is allocated to the product."
        }

    );

    return;

}

if (
    moduleId === 3 &&
    lessonId === 4
) {

    showFARLessonPage(
        3,
        4,

        "Accounting for Income Taxes",

        `

        <h2>
            Accounting for Income Taxes
        </h2>

        <p>
            Financial accounting income and taxable income
            are often different because GAAP and tax law
            recognize certain items in different periods.
        </p>


        <h3>
            1. Current Tax Expense
        </h3>

        <p>
            Current income tax expense generally represents
            the amount of income taxes payable for the
            current year.
        </p>

        <div class="formula-box">

            Taxable Income
            × Enacted Tax Rate
            =
            Current Tax Payable

        </div>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                Taxable income is $400,000 and the enacted
                tax rate is 25%.
            </p>

            <div class="formula-box">

                $400,000 × 25%
                =
                $100,000

            </div>

            <p>
                Current income taxes payable are $100,000.
            </p>

        </div>


        <h3>
            2. Temporary Differences
        </h3>

        <p>
            Temporary differences arise when the carrying
            amount of an asset or liability differs from
            its tax basis and the difference will reverse
            in a future period.
        </p>


        <div class="key-points">

            <strong>
                CPA Focus:
            </strong>

            <p>
                Ask what will happen to taxable income
                when the temporary difference reverses.
            </p>

        </div>


        <h3>
            3. Deferred Tax Liability
        </h3>

        <p>
            A deferred tax liability generally arises when
            a temporary difference will produce taxable
            amounts in future periods.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Future Taxable Amount
                </span>

                <strong>
                    Deferred Tax Liability
                </strong>

            </div>

        </div>


        <div class="example-box">

            <strong>
                Example — Depreciation
            </strong>

            <p>
                Assume equipment has a financial statement
                carrying amount of $150,000 but a tax basis
                of $110,000.
            </p>

            <p>
                The taxable temporary difference is:
            </p>

            <div class="formula-box">

                $150,000 − $110,000
                =
                $40,000

            </div>

            <p>
                If the enacted tax rate is 25%:
            </p>

            <div class="formula-box">

                $40,000 × 25%
                =
                $10,000 DTL

            </div>

        </div>


        <h3>
            4. Deferred Tax Asset
        </h3>

        <p>
            A deferred tax asset generally arises when a
            temporary difference will produce deductible
            amounts in future periods.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Future Deductible Amount
                </span>

                <strong>
                    Deferred Tax Asset
                </strong>

            </div>

        </div>


        <div class="example-box">

            <strong>
                Example — Accrued Warranty Expense
            </strong>

            <p>
                A company records a $60,000 warranty expense
                for financial reporting purposes this year,
                but the amount will not be deductible for tax
                purposes until the warranty costs are actually
                paid in the future.
            </p>

            <p>
                At a 25% tax rate:
            </p>

            <div class="formula-box">

                $60,000 × 25%
                =
                $15,000 DTA

            </div>

        </div>

        <h3>
    Valuation Allowance for Deferred Tax Assets
</h3>

<p>
    After recognizing a deferred tax asset, a company must
    evaluate whether some or all of that asset is expected
    to be realized.
</p>

<div class="key-points">

    <p>
        If, based on the available evidence, it is more likely
        than not that some portion or all of a deferred tax
        asset will not be realized, a valuation allowance is
        recognized to reduce the deferred tax asset to the
        amount expected to be realized.
    </p>

</div>

<div class="example-box">

    <strong>
        Example
    </strong>

    <p>
        A company has a gross deferred tax asset of $50,000.
        Based on the available positive and negative evidence,
        management concludes that $15,000 of the benefit is
        more likely than not not to be realized.
    </p>

    <div class="formula-box">

        Gross DTA
        $50,000

        − Valuation Allowance
        $15,000

        =
        Net DTA
        $35,000

    </div>

</div>


        <h3>
            5. Permanent Differences
        </h3>

        <p>
            Permanent differences affect book income or
            taxable income but do not reverse in future periods.
        </p>

        <p>
            Because they do not reverse, permanent differences
            do not create deferred tax assets or liabilities.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Temporary Difference
                </span>

                <strong>
                    Creates DTA or DTL
                </strong>

            </div>

            <div>

                <span>
                    Permanent Difference
                </span>

                <strong>
                    No Deferred Tax
                </strong>

            </div>

        </div>


        <h3>
            6. Income Tax Expense
        </h3>

        <p>
            Total income tax expense generally includes
            both the current tax component and the deferred
            tax component.
        </p>


        <div class="formula-box">

            Income Tax Expense (or Benefit)
=
Current Tax Expense (or Benefit)
+
Deferred Tax Expense (or Benefit)

        </div>


        <p>
            A net increase in deferred tax liabilities,
            or a net decrease in deferred tax assets,
            generally produces deferred tax expense.
        </p>

        <p>
            A net increase in deferred tax assets,
            or a net decrease in deferred tax liabilities,
            generally produces a deferred tax benefit.
        </p>


        <h3>
            CPA Exam Memory Rule
        </h3>


        <div class="formula-box">

            Future Taxable
            → DTL

            Future Deductible
            → DTA

            Permanent Difference
            → No Deferred Tax

        </div>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    Current tax payable is based on
                    taxable income under tax law.
                </li>

                <li>
                    Temporary differences reverse in
                    future periods.
                </li>

                <li>
                    Future taxable amounts generally
                    create deferred tax liabilities.
                </li>

                <li>
                    Future deductible amounts generally
                    create deferred tax assets.
                </li>

                <li>
                    Permanent differences do not create
                    deferred taxes.
                </li>

                <li>
                    Deferred taxes are measured using
                    enacted tax rates expected to apply
                    when the differences reverse.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "A company has an equipment carrying amount of $180,000 and a tax basis of $140,000. The $40,000 difference will result in future taxable amounts. If the enacted tax rate is 25%, what deferred tax amount should generally be recognized?",

            answers: [
    "$10,000 deferred tax asset",
    "$40,000 deferred tax liability",
    "$0 because the difference has not yet reversed",
    "$10,000 deferred tax liability"
],

correctAnswer: 3,

            explanation:
                "The $40,000 taxable temporary difference creates a deferred tax liability. $40,000 × 25% = $10,000."
        }

    );

    return;

}

if (
    moduleId === 3 &&
    lessonId === 5
) {

    showFARLessonPage(
        3,
        5,

        "Fair Value Measurements",

        `

        <h2>
            Fair Value Measurements
        </h2>

        <p>
            Fair value measurement focuses on the price
            that would be received to sell an asset or
            paid to transfer a liability in an orderly
            transaction between market participants.
        </p>


        <div class="key-points">

            <strong>
                Core Idea:
            </strong>

            <p>
                Fair value is a market-based measurement,
                not an entity-specific measurement.
            </p>

        </div>


        <h3>
            1. Exit Price
        </h3>

        <p>
            Fair value is generally based on an
            <strong>exit price</strong>.
        </p>

        <p>
            For an asset, think about the price the company
            would receive to sell the asset.
        </p>

        <p>
            For a liability, think about the price the
            company would pay to transfer the liability.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Asset
                </span>

                <strong>
                    Price Received to Sell
                </strong>

            </div>


            <div>

                <span>
                    Liability
                </span>

                <strong>
                    Price Paid to Transfer
                </strong>

            </div>

        </div>


        <h3>
            2. Principal Market
        </h3>

        <p>
            Fair value is generally measured using the
            principal market for the asset or liability.
        </p>

        <p>
            The principal market is the market with the
            greatest volume and level of activity for the
            asset or liability.
        </p>


        <h3>
            3. Most Advantageous Market
        </h3>

        <p>
            If there is no principal market, the entity
            generally considers the most advantageous market
            to which it has access.
        </p>

        <p>
            This is the market that maximizes the amount
            received to sell an asset or minimizes the
            amount paid to transfer a liability, after
            considering transaction costs.
        </p>


        <h3>
            4. Transaction Costs
        </h3>

        <p>
            Transaction costs are generally not included
            as an adjustment to the fair value measurement
            itself because they are not an attribute of the
            asset or liability.
        </p>

        <p>
            Transportation costs are different when location
            is an attribute of the asset.
        </p>


        <div class="key-points">

            <strong>
                CPA Distinction:
            </strong>

            <p>
                Transaction costs generally do not reduce
                fair value, but necessary transportation
                costs may affect the measurement when
                location is an asset characteristic.
            </p>

        </div>


        <h3>
            5. Fair Value Hierarchy
        </h3>

        <p>
            Valuation inputs are classified into three
            levels.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Level 1
                </span>

                <strong>
                    Quoted Prices in Active Markets
                </strong>

            </div>


            <div>

                <span>
                    Level 2
                </span>

                <strong>
                    Other Observable Inputs
                </strong>

            </div>


            <div>

                <span>
                    Level 3
                </span>

                <strong>
                    Unobservable Inputs
                </strong>

            </div>

        </div>


        <h3>
            Level 1 Inputs
        </h3>

        <p>
            Level 1 inputs are quoted prices in active
            markets for identical assets or liabilities
            that the reporting entity can access at the
            measurement date.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A company owns publicly traded shares.
                The identical shares have an observable
                quoted market price on an active exchange.
            </p>

            <p>
                That quoted price is generally a
                <strong>Level 1 input</strong>.
            </p>

        </div>


        <h3>
            Level 2 Inputs
        </h3>

        <p>
            Level 2 includes observable inputs other than
            quoted Level 1 prices.
        </p>

        <p>
            Examples may include:
        </p>

        <ul>

            <li>
                Quoted prices for similar assets
            </li>

            <li>
                Observable interest rates
            </li>

            <li>
                Yield curves
            </li>

            <li>
                Other market-corroborated inputs
            </li>

        </ul>


        <h3>
            Level 3 Inputs
        </h3>

        <p>
            Level 3 inputs are unobservable inputs used when
            relevant observable market information is not
            available.
        </p>

        <p>
            These measurements may rely more heavily on
            valuation models and assumptions that market
            participants would use.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A highly specialized asset has no active
                market and little observable market data.
                Management uses a valuation model containing
                significant unobservable assumptions.
            </p>

            <p>
                Those significant assumptions are generally
                <strong>Level 3 inputs</strong>.
            </p>

        </div>


        <h3>
            6. Valuation Techniques
        </h3>

        <p>
            Common approaches used to measure fair value
            include:
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Market Approach
                </span>

                <strong>
                    Market Transaction Information
                </strong>

            </div>


            <div>

                <span>
                    Income Approach
                </span>

                <strong>
                    Present Value / Future Amounts
                </strong>

            </div>


            <div>

                <span>
                    Cost Approach
                </span>

                <strong>
                    Current Replacement Capacity
                </strong>

            </div>

        </div>


        <h3>
            CPA Exam Memory Rule
        </h3>


        <div class="formula-box">

            Level 1
            → Identical + Active Market

            Level 2
            → Observable

            Level 3
            → Unobservable

        </div>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    Fair value is generally an exit-price
                    measurement.
                </li>

                <li>
                    Fair value reflects assumptions of
                    market participants.
                </li>

                <li>
                    The principal market is generally used
                    when one exists.
                </li>

                <li>
                    Level 1 provides quoted prices for
                    identical items in active markets.
                </li>

                <li>
                    Level 2 consists primarily of other
                    observable inputs.
                </li>

                <li>
                    Level 3 consists of unobservable inputs.
                </li>

                <li>
                    The hierarchy prioritizes observable
                    market information over unobservable
                    assumptions.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "A company owns shares of publicly traded common stock. An unadjusted quoted price for identical shares is available in an active market that the company can access on the measurement date. What level of the fair value hierarchy does this input represent?",

            answers: [
                "Level 3",
                "Level 2",
                "Level 1",
                "The input is outside the fair value hierarchy"
            ],

            correctAnswer: 2,

            explanation:
                "An unadjusted quoted price in an active market for an identical asset that the entity can access is a Level 1 input."
        }

    );

    return;

}

if (
    moduleId === 3 &&
    lessonId === 6
) {

    showFARLessonPage(
        3,
        6,

        "Lessee Accounting",

        `

        <h2>
            Lessee Accounting
        </h2>

        <p>
            Under ASC 842, a lessee generally recognizes
            a right-of-use asset and a lease liability
            when a lease begins.
        </p>


        <div class="key-points">

            <strong>
                Core Idea:
            </strong>

            <p>
                The right-of-use asset represents the
                lessee's right to use the underlying asset,
                while the lease liability represents the
                obligation to make lease payments.
            </p>

        </div>


        <h3>
            1. Initial Lease Liability
        </h3>

        <p>
            At lease commencement, the lease liability is
            generally measured at the present value of
            required lease payments that have not yet
            been paid.
        </p>


        <div class="formula-box">

            Lease Liability
            =
            Present Value of Lease Payments

        </div>


        <h3>
            2. Right-of-Use Asset
        </h3>

        <p>
            The initial right-of-use asset generally begins
            with the initial lease liability and is adjusted
            for certain additional items.
        </p>


        <div class="formula-box">

            Initial ROU Asset

            = Lease Liability

            + Lease Payments Made
              At or Before Commencement

            + Qualifying Initial Direct Costs

            − Lease Incentives Received

        </div>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                Assume the initial lease liability is
                $90,000.
            </p>

            <p>
                The lessee also made a $5,000 lease
                prepayment and received a $2,000 lease
                incentive.
            </p>

            <div class="formula-box">

                $90,000
                + $5,000
                − $2,000
                =
                $93,000 ROU Asset

            </div>

        </div>


        <h3>
            3. Finance vs. Operating Lease
        </h3>

        <p>
            Lessees classify leases as either
            <strong>finance leases</strong> or
            <strong>operating leases</strong>.
        </p>

        <p>
            A lease is classified as a finance lease
when one or more of the applicable
classification criteria are met.
        </p>


        <h3>
            Finance Lease Indicators
        </h3>

        <p>
            A lease is classified as a finance lease if
            one or more of the applicable classification
            criteria are met.
        </p>


        <ul>

            <li>
                Ownership transfers to the lessee by the
                end of the lease term.
            </li>

            <li>
                The lessee has a purchase option that it
                is reasonably certain to exercise.
            </li>

            <li>
                The lease term represents a major part
                of the remaining economic life of the
                underlying asset.
            </li>

            <li>
                The present value of lease payments and
                certain residual value guarantees equals
                or exceeds substantially all of the fair
                value of the underlying asset.
            </li>

            <li>
                The underlying asset is so specialized
                that it is expected to have no alternative
                use to the lessor at the end of the lease.
            </li>

        </ul>


        <div class="key-points">

            <strong>
                Important:
            </strong>

            <p>
                ASC 842 does not require the old rigid
                75% and 90% bright-line rules.
            </p>

        </div>


        <h3>
            4. Finance Lease Expense Pattern
        </h3>

        <p>
            For a finance lease, interest on the lease
            liability and amortization of the ROU asset
            are generally presented separately.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Lease Liability
                </span>

                <strong>
                    Interest Expense
                </strong>

            </div>


            <div>

                <span>
                    ROU Asset
                </span>

                <strong>
                    Amortization Expense
                </strong>

            </div>

        </div>


        <h3>
            5. Operating Lease Expense Pattern
        </h3>

        <p>
            Operating leases are also generally recognized
            on the balance sheet with an ROU asset and
            lease liability.
        </p>

        <p>
            However, the lessee generally recognizes a
            single lease expense, typically on a
            straight-line basis over the lease term.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Finance Lease
                </span>

                <strong>
                    Interest + Amortization
                </strong>

            </div>


            <div>

                <span>
                    Operating Lease
                </span>

                <strong>
                    Generally Single Lease Expense
                </strong>

            </div>

        </div>


        <h3>
            6. Short-Term Lease Election
        </h3>

        <p>
            A lessee may elect an accounting policy for
            qualifying short-term leases that avoids
            recognizing the ROU asset and lease liability.
        </p>

        <p>
            A short-term lease generally has a lease term
            of 12 months or less at commencement and does
            not contain a purchase option that the lessee
            is reasonably certain to exercise.
        </p>


        <h3>
            7. Simple Present Value Example
        </h3>

        <p>
            Assume a lessee enters into a lease requiring
            three annual payments of $20,000.
        </p>

        <p>
            The present value of those required payments
            at commencement is calculated to be
            <strong>$54,500</strong>.
        </p>

        <div class="formula-box">

            Initial Lease Liability
            =
            $54,500

        </div>

        <p>
            If there are no prepayments, incentives,
            or qualifying initial direct costs:
        </p>

        <div class="formula-box">

            Initial ROU Asset
            =
            $54,500

        </div>


        <h3>
            CPA Exam Memory Rule
        </h3>


        <div class="formula-box">

            Lease Liability
            → PV of Lease Payments

            ROU Asset
            → Liability Adjusted for
              Prepayments / Incentives /
              Initial Direct Costs

            Finance Lease
            → Interest + Amortization

            Operating Lease
            → Generally Single Lease Expense

        </div>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    Lessees generally recognize an ROU asset
                    and lease liability for both finance
                    and operating leases.
                </li>

                <li>
                    The lease liability is initially based
                    on the present value of lease payments.
                </li>

                <li>
                    The ROU asset begins with the lease
                    liability and is adjusted for certain
                    lease-related amounts.
                </li>

                <li>
                    Finance leases generally produce
                    separate interest and amortization
                    expense.
                </li>

                <li>
                    Operating leases generally produce
                    a single lease expense.
                </li>

                <li>
                    Qualifying short-term leases may be
                    eligible for a recognition exemption
                    through an accounting policy election.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "At lease commencement, a lessee records a lease liability of $120,000. The lessee also made a $6,000 prepayment and received a $4,000 lease incentive. Assume there are no initial direct costs. What is the initial right-of-use asset?",

            answers: [
                "$110,000",
                "$118,000",
                "$122,000",
                "$130,000"
            ],

            correctAnswer: 2,

            explanation:
                "The initial ROU asset is generally the $120,000 lease liability plus the $6,000 prepayment minus the $4,000 incentive, giving $122,000."
        }

    );

    return;

}

if (
    moduleId === 3 &&
    lessonId === 7
) {

    showFARLessonPage(
        3,
        7,

        "Subsequent Events",

        `

        <h2>
            Subsequent Events
        </h2>

        <p>
            Subsequent events are events or transactions
            that occur after the balance sheet date but
            before the financial statements are issued
            or available to be issued.
        </p>


        <div class="key-points">

            <strong>
                CPA Focus:
            </strong>

            <p>
                The key question is whether the event provides
                additional evidence about conditions that
                already existed at the balance sheet date,
                or whether it relates to conditions that arose
                after year-end.
            </p>

        </div>


        <h3>
            1. Recognized Subsequent Events
        </h3>

        <p>
            A recognized subsequent event provides additional
            evidence about a condition that existed at the
            balance sheet date.
        </p>

        <p>
            The financial statements are adjusted to reflect
            the effect of the event.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Condition Existed at Year-End
                </span>

                <strong>
                    Adjust Financial Statements
                </strong>

            </div>

        </div>


        <div class="example-box">

            <strong>
                Example — Customer Bankruptcy
            </strong>

            <p>
                A major customer declares bankruptcy shortly
                after year-end.
            </p>

            <p>
                Evidence shows the customer was already
                experiencing serious financial difficulty
                before December 31.
            </p>

            <p>
                The bankruptcy provides additional evidence
                about the collectibility of the receivable
                that existed at year-end.
            </p>

            <div class="formula-box">

                Existing Year-End Condition
                → Recognized Subsequent Event
                → Adjust Financial Statements

            </div>

        </div>


        <h3>
            2. Nonrecognized Subsequent Events
        </h3>

        <p>
            A nonrecognized subsequent event relates to a
            condition that arose after the balance sheet date.
        </p>

        <p>
            The financial statements are generally not adjusted
            for the event.
        </p>

        <p>
            However, material events may require disclosure
            so that the financial statements are not misleading.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Condition Arose After Year-End
                </span>

                <strong>
                    Generally No Adjustment
                </strong>

            </div>

        </div>


        <div class="example-box">

            <strong>
                Example — Fire After Year-End
            </strong>

            <p>
                A company's manufacturing facility is destroyed
                by a fire on January 20.
            </p>

            <p>
                There was no condition related to the fire
                at December 31.
            </p>

            <p>
                The fire is therefore generally a
                nonrecognized subsequent event.
            </p>

            <p>
                If the event is material, appropriate disclosure
                may still be necessary.
            </p>

        </div>


        <h3>
            3. Recognized vs. Nonrecognized
        </h3>


        <div class="financial-example">

            <div>

                <span>
                    Evidence About Existing Condition
                </span>

                <strong>
                    Recognize / Adjust
                </strong>

            </div>


            <div>

                <span>
                    New Condition After Year-End
                </span>

                <strong>
                    Do Not Adjust
                </strong>

            </div>

        </div>


        <h3>
            4. Lawsuit Example
        </h3>

        <p>
            Assume a lawsuit existed before year-end.
            Shortly after year-end, the company reaches
            a settlement that confirms the amount of the
            obligation at the balance sheet date.
        </p>

        <p>
            The settlement may provide additional evidence
            about the year-end liability and therefore may
            require adjustment.
        </p>


        <h3>
            5. New Borrowing After Year-End
        </h3>

        <p>
            Assume a company enters into a major new borrowing
            agreement after the balance sheet date.
        </p>

        <p>
            If the borrowing relates to a new condition arising
            after year-end, it generally does not change the
            liabilities reported at the earlier balance sheet date.
        </p>

        <p>
            Material information may still require disclosure.
        </p>


        <h3>
            6. Major Business Combination
        </h3>

        <p>
            A major acquisition completed after year-end is
            generally a nonrecognized subsequent event if the
            underlying transaction arose after the balance
            sheet date.
        </p>

        <p>
            Because such a transaction could significantly
            influence users' decisions, disclosure may be
            required when material.
        </p>


        <h3>
            7. Subsequent Event Evaluation Period
        </h3>

        <p>
            Management evaluates subsequent events through
            the applicable date the financial statements
            are issued or available to be issued.
        </p>

        <p>
            The applicable evaluation date depends on the
entity's reporting circumstances. Some entities
evaluate subsequent events through the date the
financial statements are issued, while others
evaluate them through the date the financial
statements are available to be issued.
        </p>


        <h3>
            CPA Exam Decision Rule
        </h3>


        <div class="formula-box">

            Did the condition exist
            at the balance sheet date?

            YES
            ↓
            Recognized Subsequent Event
            ↓
            Adjust

            NO
            ↓
            Nonrecognized Subsequent Event
            ↓
            No Adjustment
            + Disclose if Material

        </div>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    Subsequent events occur after the
                    balance sheet date but before the
                    financial statements are issued or
                    available to be issued.
                </li>

                <li>
                    Events providing additional evidence
                    about existing year-end conditions
                    generally require adjustment.
                </li>

                <li>
                    Events caused by conditions arising
                    after year-end generally do not require
                    adjustment.
                </li>

                <li>
                    Material nonrecognized subsequent events
                    may require disclosure.
                </li>

                <li>
                    Customer bankruptcy may be recognized
                    when it confirms financial difficulty
                    that already existed at year-end.
                </li>

                <li>
                    A major fire occurring entirely after
                    year-end is generally nonrecognized.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "A customer owing a company $90,000 declares bankruptcy shortly after year-end. Evidence indicates the customer was already experiencing severe financial difficulty at the balance sheet date. How should the company generally treat this subsequent event?",

            answers: [
                "Ignore the event because bankruptcy occurred after year-end",
                "Recognize the effect by adjusting the year-end financial statements",
                "Record the loss only in the following year",
                "Report the $90,000 as other comprehensive income"
            ],

            correctAnswer: 1,

            explanation:
                "The bankruptcy provides additional evidence about a condition that already existed at the balance sheet date. Therefore, the year-end financial statements should generally be adjusted."
        }

    );

    return;

}

if (
    moduleId === 3 &&
    lessonId === 8
) {

    showFARLessonPage(
        3,
        8,

        "Revenue Recognition — Advanced Applications",

        `

        <h2>
            Revenue Recognition — Advanced Applications
        </h2>

        <p>
            Revenue contracts may contain features that make
            the basic five-step model more complicated.
        </p>

        <p>
            Important applications include variable
            consideration, contract modifications, warranties,
            principal-versus-agent arrangements, and significant
            financing components.
        </p>


        <h3>
            1. Variable Consideration
        </h3>

        <p>
            The amount a company ultimately receives may depend
            on future events.
        </p>

        <p>
            Examples include:
        </p>

        <ul>

            <li>
                Performance bonuses
            </li>

            <li>
                Rebates
            </li>

            <li>
                Discounts
            </li>

            <li>
                Refunds
            </li>

            <li>
                Penalties
            </li>

            <li>
                Price concessions
            </li>

        </ul>


        <p>
            Variable consideration may generally be estimated
            using either the expected value method or the
            most likely amount method, depending on which
            better predicts the consideration to which the
            entity will be entitled.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Many Possible Outcomes
                </span>

                <strong>
                    Expected Value
                </strong>

            </div>


            <div>

                <span>
                    Two or Few Possible Outcomes
                </span>

                <strong>
                    Most Likely Amount May Be Appropriate
                </strong>

            </div>

        </div>


        <h3>
            2. Variable Consideration Constraint
        </h3>

        <p>
            An estimated amount of variable consideration
            is included in the transaction price only to the
            extent that it is probable that a significant
            reversal of cumulative revenue recognized will
            not occur when the uncertainty is resolved.
        </p>


        <div class="key-points">

            <strong>
                CPA Idea:
            </strong>

            <p>
                Do not aggressively recognize uncertain
                variable revenue that is likely to reverse.
            </p>

        </div>


        <h3>
            3. Contract Modifications
        </h3>

        <p>
            A contract modification occurs when the parties
            approve a change in the scope or price of a
            contract.
        </p>

        <p>
            Some modifications are treated as separate
            contracts.
        </p>


        <div class="key-points">

            <strong>
                Separate Contract:
            </strong>

            <p>
                A modification is generally accounted for
                as a separate contract when it adds distinct
                promised goods or services and the additional
                price reflects their appropriate standalone
                selling prices.
            </p>

        </div>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A customer originally agrees to purchase
                100 units.
            </p>

            <p>
                The customer later adds another 20 distinct
                units at their normal standalone selling price.
            </p>

            <p>
                The modification may generally be accounted
                for as a separate contract.
            </p>

        </div>

        <h3>
    Modification That Is Not a Separate Contract
</h3>

<p>
    If a contract modification does not qualify as a
    separate contract, the accounting depends on the
    relationship between the remaining goods or services
    and those already transferred.
</p>

<div class="key-points">

    <ul>

        <li>
            If the remaining goods or services are distinct,
            the modification is generally accounted for
            prospectively, effectively treating the change
            as a termination of the old contract and creation
            of a new contract.
        </li>

        <li>
            If the remaining goods or services are not distinct
            and are part of a single performance obligation
            that is already partially satisfied, the modification
            generally results in a cumulative catch-up adjustment.
        </li>

    </ul>

</div>


        <h3>
            4. Warranties
        </h3>

        <p>
            Revenue accounting distinguishes between
            assurance-type warranties and warranties that
            provide an additional service.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Assurance Warranty
                </span>

                <strong>
                    Generally Not Separate Performance Obligation
                </strong>

            </div>


            <div>

                <span>
                    Additional Service Warranty
                </span>

                <strong>
                    Separate Performance Obligation
                </strong>

            </div>

        </div>


        <p>
            An assurance-type warranty generally promises
            that the product complies with agreed-upon
            specifications.
        </p>

        <p>
            A separately purchased or service-type warranty
            generally provides an additional service and is
            accounted for as a separate performance obligation.
        </p>


        <h3>
            5. Principal vs. Agent
        </h3>

        <p>
            When another party participates in providing
            goods or services to a customer, the entity
            determines whether it acts as a principal or
            an agent.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Principal
                </span>

                <strong>
                    Controls Good or Service Before Transfer
                </strong>

            </div>


            <div>

                <span>
                    Agent
                </span>

                <strong>
                    Arranges for Another Party to Provide It
                </strong>

            </div>

        </div>


        <p>
            A principal generally recognizes revenue on a
            gross basis for the consideration to which it
            expects to be entitled.
        </p>

        <p>
            An agent generally recognizes its fee or commission
            as revenue rather than the customer's entire payment.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A ticket platform collects $500 from a customer
                but merely arranges for another company to
                provide the service.
            </p>

            <p>
                If the platform is an agent and earns a
                $50 commission, its revenue is generally
                $50 rather than $500.
            </p>

        </div>


        <h3>
            6. Significant Financing Component
        </h3>

        <p>
            A contract may contain a significant financing
            component when the timing of payment provides
            a significant financing benefit to either the
            customer or the entity.
        </p>

        <p>
            When required, the promised consideration is
            adjusted for the effects of the time value of money.
        </p>


        <h3>
            7. Practical Expedient
        </h3>

        <p>
            An entity generally need not adjust the promised
            consideration for a significant financing component
            when, at contract inception, it expects the period
            between transfer of the promised good or service
            and payment to be one year or less.
        </p>


        <h3>
            8. Nonrefundable Upfront Fees
        </h3>

        <p>
            Receiving a nonrefundable upfront fee does not
            automatically mean revenue should be recognized
            immediately.
        </p>

        <p>
            The company must determine whether the fee relates
            to a distinct promised good or service.
        </p>


        <div class="key-points">

            <p>
                Cash received is not automatically revenue.
                Revenue depends on satisfaction of the related
                performance obligation.
            </p>

        </div>


        <h3>
            CPA Exam Memory Rule
        </h3>


        <div class="formula-box">

            Variable Amount
            → Estimate + Apply Constraint

            Added Distinct Goods
            at Standalone Price
            → Separate Contract

            Assurance Warranty
            → Generally Not Separate PO

            Service Warranty
            → Separate PO

            Principal
            → Gross Revenue

            Agent
            → Fee / Commission Revenue

        </div>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    Variable consideration is estimated and
                    subject to the revenue reversal constraint.
                </li>

                <li>
                    Certain contract modifications are treated
                    as separate contracts.
                </li>

                <li>
                    Assurance warranties generally are not
                    separate performance obligations.
                </li>

                <li>
                    Service-type warranties generally are
                    separate performance obligations.
                </li>

                <li>
                    Principals generally report revenue gross.
                </li>

                <li>
                    Agents generally recognize only their
                    fee or commission as revenue.
                </li>

                <li>
                    Upfront cash receipts do not automatically
                    qualify for immediate revenue recognition.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "An online platform collects $1,000 from a customer for a service provided by another company. The platform does not control the service before it is transferred to the customer and retains a $120 commission. If the platform is acting as an agent, how much revenue should it generally recognize?",

            answers: [
    "$1,000",
    "$880",
    "$0",
    "$120"
],

correctAnswer: 3,

            explanation:
                "An agent generally recognizes the fee or commission it earns rather than the gross amount collected from the customer. Therefore, the platform recognizes $120 of revenue."
        }

    );

    return;

}

if (
    moduleId === 3 &&
    lessonId === 9
) {

    showFARLessonPage(
        3,
        9,

        "Deferred Taxes & Valuation Allowances",

        `

        <h2>
            Deferred Taxes & Valuation Allowances
        </h2>

        <p>
            Deferred tax accounting reflects the future
            tax consequences of temporary differences
            between financial statement carrying amounts
            and tax bases.
        </p>


        <h3>
            1. Review: DTA vs. DTL
        </h3>

        <div class="financial-example">

            <div>

                <span>
                    Future Taxable Amount
                </span>

                <strong>
                    Deferred Tax Liability
                </strong>

            </div>


            <div>

                <span>
                    Future Deductible Amount
                </span>

                <strong>
                    Deferred Tax Asset
                </strong>

            </div>

        </div>


        <div class="formula-box">

            Taxable Temporary Difference
            × Enacted Tax Rate
            =
            DTL

            Deductible Temporary Difference
            × Enacted Tax Rate
            =
            DTA

        </div>


        <h3>
            2. Deferred Tax Asset Example
        </h3>

        <p>
            Assume a company recognizes a $100,000 expense
            for financial reporting purposes this year,
            but the expense will not become deductible for
            tax purposes until a future period.
        </p>

        <p>
            If the enacted future tax rate is 25%:
        </p>

        <div class="formula-box">

            $100,000 × 25%
            =
            $25,000 DTA

        </div>

        <p>
            The DTA represents a potential future tax benefit.
        </p>


        <h3>
            3. Realizability of Deferred Tax Assets
        </h3>

        <p>
            Recognizing a deferred tax asset does not
            automatically mean the company expects to
            realize the entire benefit.
        </p>

        <p>
            Management must evaluate whether sufficient
            future taxable income is expected to be available
            to realize the deferred tax asset.
        </p>


        <h3>
            4. Valuation Allowance
        </h3>

        <p>
            A valuation allowance is recognized when,
            based on available evidence, it is
            <strong>more likely than not</strong> that some
            portion or all of a deferred tax asset will
            not be realized.
        </p>


        <div class="key-points">

            <strong>
                More Likely Than Not:
            </strong>

            <p>
                This means a likelihood of more than 50%.
            </p>

        </div>


        <div class="formula-box">

            Gross DTA

            − Valuation Allowance

            =
            Net DTA Expected to Be Realized

        </div>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A company has a gross deferred tax asset
                of $80,000.
            </p>

            <p>
                Based on available evidence, management
                determines that $30,000 of the benefit is
                more likely than not to be unrealized.
            </p>

            <div class="formula-box">

                Gross DTA
                $80,000

                − Valuation Allowance
                $30,000

                = Net DTA
                $50,000

            </div>

        </div>


        <h3>
            5. Evidence About Realizability
        </h3>

        <p>
            Management considers both positive and negative
            evidence when evaluating whether a deferred tax
            asset will be realized.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Positive Evidence
                </span>

                <strong>
                    Supports Future Realization
                </strong>

            </div>


            <div>

                <span>
                    Negative Evidence
                </span>

                <strong>
                    Suggests Benefit May Not Be Realized
                </strong>

            </div>

        </div>


        <p>
            Negative evidence may include significant
            cumulative losses in recent years or expectations
            of future losses.
        </p>

        <p>
            Positive evidence may include sufficient expected
            future taxable income or other available sources
            of taxable income.
        </p>


        <h3>
            6. Changes in the Valuation Allowance
        </h3>

        <p>
            The valuation allowance is reassessed at each
            reporting date.
        </p>

        <p>
            If expectations improve, the valuation allowance
            may decrease.
        </p>

        <p>
            If realization becomes less likely, the valuation
            allowance may increase.
        </p>


        <div class="key-points">

            <strong>
                CPA Concept:
            </strong>

            <p>
                The valuation allowance does not eliminate
                the underlying gross DTA. It reduces the
                amount of the DTA recognized as expected
                to be realized.
            </p>

        </div>


        <h3>
            7. Enacted Tax Rates
        </h3>

        <p>
            Deferred tax assets and liabilities are measured
            using enacted tax rates expected to apply when
            the temporary differences reverse.
        </p>

        <p>
            Proposed tax rates are not used merely because
            management expects them to become law.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Enacted Rate
                </span>

                <strong>
                    Use It
                </strong>

            </div>


            <div>

                <span>
                    Proposed But Not Enacted Rate
                </span>

                <strong>
                    Do Not Use It
                </strong>

            </div>

        </div>


        <h3>
            8. Change in Enacted Tax Rate
        </h3>

        <p>
            If a new tax rate is enacted, existing deferred
            tax assets and liabilities are remeasured using
            the newly enacted rate expected to apply when
            the temporary differences reverse.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A company has a $200,000 taxable temporary
                difference.
            </p>

            <p>
                The enacted rate expected when it reverses
                changes from 25% to 30%.
            </p>

            <div class="formula-box">

                Old DTL:

                $200,000 × 25%
                =
                $50,000


                New DTL:

                $200,000 × 30%
                =
                $60,000


                Increase in DTL:

                $10,000

            </div>

        </div>


        <h3>
            9. Permanent Differences
        </h3>

        <p>
            Remember that permanent differences do not
            reverse in future periods.
        </p>

        <p>
            Therefore, they do not create deferred tax
            assets or deferred tax liabilities.
        </p>


        <h3>
            CPA Exam Memory Rule
        </h3>

        <div class="formula-box">

            Future Taxable
            → DTL

            Future Deductible
            → DTA

            DTA May Not Be Realized
            → Valuation Allowance

            Measure Deferred Taxes
            → Enacted Future Rate

            Permanent Difference
            → No DTA / DTL

        </div>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    Future taxable amounts generally
                    create deferred tax liabilities.
                </li>

                <li>
                    Future deductible amounts generally
                    create deferred tax assets.
                </li>

                <li>
                    A valuation allowance is required when
                    it is more likely than not that some
                    or all of a DTA will not be realized.
                </li>

                <li>
                    Gross DTA minus the valuation allowance
                    gives the net amount expected to be
                    realized.
                </li>

                <li>
                    Deferred taxes use enacted tax rates
                    expected to apply when differences reverse.
                </li>

                <li>
                    Existing deferred tax balances are
                    remeasured when applicable enacted
                    tax rates change.
                </li>

                <li>
                    Permanent differences do not create
                    deferred tax balances.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "A company has a gross deferred tax asset of $120,000. Based on available evidence, management determines that $45,000 of the tax benefit is more likely than not to be unrealized. What net deferred tax asset should the company report?",

            answers: [
                "$45,000",
                "$75,000",
                "$120,000",
                "$165,000"
            ],

            correctAnswer: 1,

            explanation:
                "The company records a $45,000 valuation allowance against the $120,000 gross deferred tax asset. Therefore, the net deferred tax asset is $120,000 − $45,000 = $75,000."
        }

    );

    return;

}

if (
    moduleId === 3 &&
    lessonId === 10
) {

    showFARLessonPage(
        3,
        10,

        "Integrated Select Transactions Review",

        `

        <h2>
            Integrated Select Transactions Review
        </h2>

        <p>
            This lesson brings together the major rules from
            FAR Module 3 and focuses on recognizing which
            accounting treatment applies to different
            transactions.
        </p>


        <h3>
            1. Accounting Changes & Errors
        </h3>

        <div class="financial-example">

            <div>
                <span>Change in Accounting Principle</span>
                <strong>Generally Retrospective</strong>
            </div>

            <div>
                <span>Change in Accounting Estimate</span>
                <strong>Prospective</strong>
            </div>

            <div>
                <span>Change in Reporting Entity</span>
                <strong>Generally Retrospective</strong>
            </div>

            <div>
                <span>Material Prior-Period Error</span>
                <strong>Correct Prior Periods</strong>
            </div>

        </div>


        <div class="key-points">

            <strong>
                Quick Test:
            </strong>

            <p>
                New information usually points toward a
                change in estimate. Incorrect use or omission
                of information that was already available
                may indicate an error.
            </p>

        </div>


        <h3>
            2. Contingencies
        </h3>

        <div class="formula-box">

            Probable
            + Reasonably Estimable
            → Accrue

            Reasonably Possible
            → Generally Disclose

            Remote
            → Generally Neither

        </div>


        <p>
            If a probable loss is estimated within a range
            and no amount is a better estimate than another,
            the minimum amount in the range is generally
            accrued.
        </p>


        <h3>
            3. Revenue Recognition
        </h3>

        <div class="formula-box">

            Step 1
            Identify Contract

            Step 2
            Identify Performance Obligations

            Step 3
            Determine Transaction Price

            Step 4
            Allocate Transaction Price

            Step 5
            Recognize Revenue When / As
            Performance Obligations Are Satisfied

        </div>


        <div class="key-points">

            <strong>
                Remember:
            </strong>

            <p>
                Receiving cash does not automatically mean
                revenue has been earned.
            </p>

        </div>


        <h3>
            4. Principal vs. Agent
        </h3>

        <div class="financial-example">

            <div>
                <span>Principal</span>
                <strong>Generally Reports Gross Revenue</strong>
            </div>

            <div>
                <span>Agent</span>
                <strong>Generally Reports Fee / Commission</strong>
            </div>

        </div>


        <h3>
            5. Deferred Taxes
        </h3>

        <div class="formula-box">

            Future Taxable Amount
            → Deferred Tax Liability

            Future Deductible Amount
            → Deferred Tax Asset

            Permanent Difference
            → No Deferred Tax

        </div>


        <p>
            Deferred tax assets and liabilities are measured
            using enacted tax rates expected to apply when
            the temporary differences reverse.
        </p>


        <h3>
            6. Valuation Allowance
        </h3>

        <p>
            If it is more likely than not that some or all
            of a deferred tax asset will not be realized,
            a valuation allowance reduces the amount expected
            to be realized.
        </p>


        <div class="formula-box">

            Gross DTA
            − Valuation Allowance
            =
            Net DTA

        </div>


        <h3>
            7. Fair Value Hierarchy
        </h3>

        <div class="financial-example">

            <div>
                <span>Level 1</span>
                <strong>Identical Items in Active Markets</strong>
            </div>

            <div>
                <span>Level 2</span>
                <strong>Other Observable Inputs</strong>
            </div>

            <div>
                <span>Level 3</span>
                <strong>Unobservable Inputs</strong>
            </div>

        </div>


        <p>
            Fair value is generally a market-based exit-price
            measurement.
        </p>


        <h3>
            8. Lessee Accounting
        </h3>

        <div class="formula-box">

            Lease Liability
            =
            Present Value of Lease Payments

        </div>

        <p>
            The initial ROU asset generally starts with the
            lease liability and is adjusted for items such
            as prepayments, lease incentives, and qualifying
            initial direct costs.
        </p>


        <div class="financial-example">

            <div>
                <span>Finance Lease</span>
                <strong>Interest + Amortization</strong>
            </div>

            <div>
                <span>Operating Lease</span>
                <strong>Generally Single Lease Expense</strong>
            </div>

        </div>


        <h3>
            9. Subsequent Events
        </h3>

        <div class="formula-box">

            Condition Existed at Year-End
            → Adjust

            Condition Arose After Year-End
            → Generally Do Not Adjust
            → Disclose if Material

        </div>


        <h3>
            10. Integrated Example
        </h3>

        <div class="example-box">

            <strong>
                Scenario
            </strong>

            <p>
                Assume Falcon Corp. is preparing its
                December 31 financial statements.
            </p>

            <p>
                Before the statements are issued:
            </p>

            <ul>

                <li>
                    A customer declares bankruptcy because
                    of financial problems that existed
                    before December 31.
                </li>

                <li>
                    Falcon signs a new lease beginning
                    next year.
                </li>

                <li>
                    A lawsuit existing at December 31 is
                    determined to have a probable and
                    reasonably estimable loss.
                </li>

                <li>
                    Falcon receives cash in advance for
                    services it will provide next year.
                </li>

            </ul>

        </div>


        <h3>
            Analyze Each Item
        </h3>


        <div class="financial-example">

            <div>

                <span>
                    Customer Bankruptcy
                </span>

                <strong>
                    Adjust Year-End Receivable
                </strong>

            </div>


            <div>

                <span>
                    New Future Lease
                </span>

                <strong>
                    Analyze Based on Commencement
                </strong>

            </div>


            <div>

                <span>
                    Probable Estimable Lawsuit
                </span>

                <strong>
                    Accrue Loss / Liability
                </strong>

            </div>


            <div>

                <span>
                    Advance Customer Payment
                </span>

                <strong>
                    Contract Liability Until Earned
                </strong>

            </div>

        </div>


        <h3>
            Module 3 Master Memory Sheet
        </h3>

        <div class="formula-box">

            PRINCIPLE
            → Retrospective

            ESTIMATE
            → Prospective

            PROBABLE + ESTIMABLE LOSS
            → Accrue

            CASH BEFORE PERFORMANCE
            → Contract Liability

            FUTURE TAXABLE
            → DTL

            FUTURE DEDUCTIBLE
            → DTA

            LEVEL 1
            → Active Market + Identical

            LEASE LIABILITY
            → PV of Lease Payments

            EXISTING YEAR-END CONDITION
            → Adjust Subsequent Event

        </div>


        <div class="key-points">

            <h3>
                Module 3 Key Takeaways
            </h3>

            <ul>

                <li>
                    Identify whether accounting changes
                    require retrospective or prospective
                    treatment.
                </li>

                <li>
                    Determine whether contingencies require
                    accrual, disclosure, or neither.
                </li>

                <li>
                    Apply the five-step revenue model.
                </li>

                <li>
                    Distinguish principals from agents.
                </li>

                <li>
                    Distinguish DTAs from DTLs and understand
                    valuation allowances.
                </li>

                <li>
                    Know Levels 1, 2, and 3 of the fair
                    value hierarchy.
                </li>

                <li>
                    Understand ROU assets and lease
                    liabilities.
                </li>

                <li>
                    Determine whether subsequent events
                    require adjustment or disclosure.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "Before year-end financial statements are issued, a company learns that a lawsuit existing at year-end will probably result in a $300,000 loss, and the amount can be reasonably estimated. What is the appropriate general treatment?",

            answers: [
                "Disclose the lawsuit but recognize no loss",
                "Recognize a $300,000 loss and liability",
                "Wait until the lawsuit is paid",
                "Record the amount as a deferred tax liability"
            ],

            correctAnswer: 1,

            explanation:
                "A loss contingency that is probable and reasonably estimable is generally accrued. Therefore, the company recognizes a $300,000 loss and related liability."
        }

    );

    return;

}

if (
    moduleId === 4 &&
    lessonId === 1
) {

    showFARLessonPage(
        4,
        1,

        "Governmental Accounting Foundations",

        `

        <h2>
            Why Governmental Accounting Is Different
        </h2>

        <p>
            State and local governments are not primarily
            designed to generate profit. Their financial
            reporting emphasizes accountability for public
            resources and compliance with legal and
            budgetary requirements.
        </p>


        <h2>
            The Two Reporting Perspectives
        </h2>

        <p>
            Governmental accounting uses two important
            reporting perspectives:
        </p>


        <div class="key-points">

            <h3>
                Fund Financial Statements
            </h3>

            <ul>

                <li>
    Report financial information by fund
    or fund category, depending on the
    applicable presentation requirements.
</li>

                <li>
                    Different fund categories may use
                    different measurement focuses and
                    bases of accounting.
                </li>

                <li>
                    Emphasize accountability for specific
                    resources and activities.
                </li>

            </ul>

        </div>


        <div class="key-points">

            <h3>
                Government-Wide Financial Statements
            </h3>

            <ul>

                <li>
                    Present a broader view of the
                    government's financial position.
                </li>

                <li>
                    Use the economic resources
                    measurement focus.
                </li>

                <li>
                    Use accrual accounting.
                </li>

            </ul>

        </div>


        <h2>
            Three Major Fund Categories
        </h2>


        <div class="financial-example">

            <div>

                <span>
                    Governmental Funds
                </span>

                <strong>
                    Current Financial Resources
                    + Modified Accrual
                </strong>

            </div>


            <div>

                <span>
                    Proprietary Funds
                </span>

                <strong>
                    Economic Resources
                    + Accrual
                </strong>

            </div>


            <div>

                <span>
                    Fiduciary Funds
                </span>

                <strong>
                    Economic Resources
                    + Accrual
                </strong>

            </div>

        </div>


        <h2>
            Governmental Funds
        </h2>

        <p>
            Governmental funds generally focus on
            <strong>current financial resources</strong>.
            They use the
            <strong>modified accrual basis</strong>
            of accounting.
        </p>

        <p>
            These funds are especially important for
            understanding how governments finance and
            provide public services.
        </p>


        <h2>
            Proprietary Funds
        </h2>

        <p>
            Proprietary funds account for activities that
            operate in a manner similar to businesses.
        </p>

        <p>
            They use the
            <strong>economic resources measurement focus</strong>
            and the
            <strong>accrual basis of accounting</strong>.
        </p>


        <h2>
            Fiduciary Funds
        </h2>

        <p>
            Fiduciary funds account for resources a
            government holds in a fiduciary capacity for
            others.
        </p>

        <p>
            They also use the economic resources
            measurement focus and accrual accounting.
            Fiduciary activities are generally excluded
            from government-wide financial statements
            because those resources are not available to
            support the government's own programs.
        </p>


        <h2>
            CPA Exam Shortcut
        </h2>

        <div class="key-points">

            <ul>

                <li>
                    Governmental fund
                    → current financial resources
                    → modified accrual.
                </li>

                <li>
                    Proprietary fund
                    → economic resources
                    → accrual.
                </li>

                <li>
                    Fiduciary fund
                    → economic resources
                    → accrual.
                </li>

                <li>
                    Government-wide
                    → economic resources
                    → accrual.
                </li>

            </ul>

        </div>


        <div class="formula-box">

            GOVERNMENTAL
            =
            Modified Accrual

            PROPRIETARY + FIDUCIARY
            =
            Accrual

            GOVERNMENT-WIDE
            =
            Accrual

        </div>


        <h2>
            Key Takeaway
        </h2>

        <p>
            Before solving a governmental accounting
            question, first identify
            <strong>which reporting level or fund category
            is involved</strong>. That tells you which
            measurement focus and basis of accounting
            generally apply.
        </p>

        `,

        {
            question:
                "Which combination correctly describes the accounting used by governmental funds?",

            answers: [
                "Economic resources measurement focus and accrual basis",
                "Current financial resources measurement focus and modified accrual basis",
                "Current financial resources measurement focus and cash basis",
                "Economic resources measurement focus and modified accrual basis"
            ],

            correctAnswer: 1,

            explanation:
                "Governmental funds use the current financial resources measurement focus and the modified accrual basis of accounting."
        }

    );

    return;
}

if (
    moduleId === 4 &&
    lessonId === 2
) {

    showFARLessonPage(
        4,
        2,

        "Governmental Funds",

        `

        <h2>
            Governmental Funds
        </h2>

        <p>
            Governmental funds account for many of the
            core public-service activities of a state or
            local government.
        </p>

        <p>
            These funds generally use the
            <strong>current financial resources measurement focus</strong>
            and the
            <strong>modified accrual basis of accounting</strong>.
        </p>


        <h2>
            The Five Governmental Fund Types
        </h2>


        <div class="financial-example">

            <div>
                <span>General Fund</span>
                <strong>Primary Operating Fund</strong>
            </div>

            <div>
                <span>Special Revenue Fund</span>
                <strong>Restricted or Committed Revenue Sources</strong>
            </div>

            <div>
                <span>Capital Projects Fund</span>
                <strong>Capital Outlays for Capital Facilities and Other Capital Assets</strong>
            </div>

            <div>
                <span>Debt Service Fund</span>
                <strong>Principal and Interest on Governmental Debt</strong>
            </div>

            <div>
                <span>Permanent Fund</span>
                <strong>Principal Maintained; Earnings Support Government Programs</strong>
            </div>

        </div>


        <h2>
            1. General Fund
        </h2>

        <p>
            The General Fund is the chief operating fund
            of a government.
        </p>

        <p>
            It accounts for resources not required to be
            reported in another fund.
        </p>

        <div class="key-points">

            <strong>
                Think:
            </strong>

            <p>
                Regular government operations such as
                administration, public safety, and other
                general services.
            </p>

        </div>


        <h2>
            2. Special Revenue Funds
        </h2>

        <p>
            Special revenue funds account for specific
            revenue sources that are restricted or committed
            to expenditure for specified purposes other than
            debt service or capital projects.
        </p>

        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A dedicated tax legally restricted for
                road maintenance may be accounted for in
                a special revenue fund.
            </p>

        </div>


        <h2>
            3. Capital Projects Funds
        </h2>

        <p>
    Capital projects funds generally account for
    financial resources used for capital outlays,
    including the acquisition or construction of
    capital facilities and other capital assets.
</p>

        <p>
            A key FAR point is that governmental funds do
            not generally report capital assets themselves.
        </p>

        <div class="key-points">

            <p>
                The fund reports the financing and expenditures,
                while the capital asset is reported at the
                government-wide level.
            </p>

        </div>


        <h2>
            4. Debt Service Funds
        </h2>

        <p>
            Debt service funds account for resources
            accumulated and used to pay principal and
            interest on general long-term governmental debt.
        </p>

        <p>
            Similar to capital assets, long-term governmental
            debt itself is generally reported at the
            government-wide level rather than as a long-term
            liability in governmental funds.
        </p>


        <h2>
            5. Permanent Funds
        </h2>

        <p>
            Permanent funds account for resources whose
            principal is legally restricted so that only
            earnings may be used to support programs that
            benefit the government or its citizens.
        </p>

        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A donor gives a city $2 million and requires
                the principal to remain intact permanently,
                while investment earnings may be used to
                maintain public parks.
            </p>

            <p>
                This may be accounted for in a permanent fund.
            </p>

        </div>


        <h2>
            Capital Assets and Long-Term Debt
        </h2>

        <p>
            Governmental fund financial statements focus
            on current financial resources.
        </p>

        <p>
            Therefore, governmental funds generally do not
            report:
        </p>

        <ul>

            <li>
                Capital assets as fund assets
            </li>

            <li>
                Depreciation expense
            </li>

            <li>
                General long-term debt as a fund liability
            </li>

        </ul>

        <p>
            These items are generally reported in the
            government-wide financial statements.
        </p>


        <h2>
            Expenditures vs. Expenses
        </h2>

        <div class="financial-example">

            <div>
                <span>Governmental Fund</span>
                <strong>Expenditures</strong>
            </div>

            <div>
                <span>Government-Wide</span>
                <strong>Expenses</strong>
            </div>

        </div>

        <p>
            For example, when a governmental fund purchases
            equipment, the fund generally reports an
            <strong>expenditure</strong>.
        </p>

        <p>
            At the government-wide level, the equipment
            is generally capitalized and depreciated.
        </p>


        <h2>
            CPA Memory Rule
        </h2>

        <div class="formula-box">

            GENERAL
            → Regular Operations

            SPECIAL REVENUE
            → Restricted / Committed Revenue

            CAPITAL PROJECTS
→ Capital Outlays / Acquire or Construct Capital Assets

            DEBT SERVICE
            → Pay Governmental Debt

            PERMANENT
            → Principal Stays Intact

        </div>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    There are five governmental fund types.
                </li>

                <li>
                    The General Fund is the primary operating fund.
                </li>

                <li>
                    Capital projects funds finance major capital projects.
                </li>

                <li>
                    Debt service funds handle principal and interest
                    on governmental long-term debt.
                </li>

                <li>
                    Governmental funds generally do not report
                    capital assets or general long-term debt.
                </li>

                <li>
                    Governmental funds use expenditures rather
                    than expenses for many transactions.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "Which governmental fund is generally used to account for resources accumulated to pay principal and interest on general long-term governmental debt?",

            answers: [
                "General Fund",
                "Capital Projects Fund",
                "Debt Service Fund",
                "Permanent Fund"
            ],

            correctAnswer: 2,

            explanation:
                "A Debt Service Fund generally accounts for financial resources accumulated and used for principal and interest payments on general long-term governmental debt."
        }

    );

    return;
}

if (
    moduleId === 4 &&
    lessonId === 3
) {

    showFARLessonPage(
        4,
        3,

        "Modified Accrual Accounting",

        `

        <h2>
            Modified Accrual Accounting
        </h2>

        <p>
            Governmental funds use the
            <strong>modified accrual basis of accounting</strong>
            together with the
            <strong>current financial resources measurement focus</strong>.
        </p>

        <p>
            The key question is not simply whether revenue
            has been earned. Governmental funds focus on
            whether financial resources are available to
            finance current-period expenditures.
        </p>


        <h2>
            Revenue Recognition
        </h2>

        <p>
            Under modified accrual, revenue is generally
            recognized when it is:
        </p>


        <div class="formula-box">

            MEASURABLE
            +
            AVAILABLE
            =
            RECOGNIZE REVENUE

        </div>


        <h2>
            Measurable
        </h2>

        <p>
            Revenue is measurable when the government can
            reasonably determine the amount.
        </p>


        <h2>
            Available
        </h2>

        <p>
            Available generally means the revenue is
            collectible within the current period or soon
            enough afterward to pay liabilities of the
            current period.
        </p>

        <div class="key-points">

            <p>
                The exact availability period can depend
                on the government's policy and the type
                of revenue.
            </p>

        </div>


        <h2>
            Property Tax Example
        </h2>

        <p>
            Assume a government levies property taxes of
            <strong>$500,000</strong>.
        </p>

        <p>
            At year-end, <strong>$470,000</strong> qualifies
            for recognition under the government's
            measurable-and-available criteria.
        </p>

        <p>
            The remaining <strong>$30,000</strong> is measurable
            but is not expected to be collected soon enough
            to satisfy the government's availability criterion.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Revenue Recognized
                </span>

                <strong>
                    $470,000
                </strong>

            </div>


            <div>

                <span>
                    Not Yet Recognized as Revenue
                </span>

                <strong>
                    $30,000
                </strong>

            </div>

        </div>


        <p>
            The unavailable portion is generally reported
            as a <strong>deferred inflow of resources</strong>
            rather than current-period governmental fund revenue.
        </p>


        <h2>
            Expenditures
        </h2>

        <p>
            Governmental funds generally recognize
            <strong>expenditures</strong> rather than expenses.
        </p>

        <p>
            Expenditures are generally recognized when a
            related fund liability is incurred, subject to
            important exceptions for certain long-term items.
        </p>

        <div class="key-points">

    <p>
        Because governmental funds focus on current
        financial resources, certain expenditures
        related to long-term obligations are generally
        recognized when payment is due or when the
        obligation is expected to require the use of
        current financial resources.
    </p>

</div>


        <div class="financial-example">

            <div>

                <span>
                    Governmental Funds
                </span>

                <strong>
                    Expenditures
                </strong>

            </div>


            <div>

                <span>
                    Government-Wide Statements
                </span>

                <strong>
                    Expenses
                </strong>

            </div>

        </div>


        <h2>
            Capital Asset Purchase
        </h2>

        <p>
            Suppose a governmental fund purchases equipment
            for <strong>$100,000</strong>.
        </p>

        <p>
            In the governmental fund financial statements:
        </p>


        <div class="formula-box">

            $100,000
            CAPITAL OUTLAY EXPENDITURE

        </div>


        <p>
            The governmental fund generally does not record
            the equipment as a capital asset.
        </p>

        <p>
            At the government-wide level, however, the
            equipment is generally capitalized and
            subsequently depreciated.
        </p>


        <h2>
            Long-Term Debt Proceeds
        </h2>

        <p>
            Suppose a governmental fund receives
            <strong>$1,000,000</strong> from issuing
            long-term bonds.
        </p>

        <p>
            The governmental fund generally does not
            recognize a long-term liability for the bonds.
            Instead, the proceeds are generally reported as
            an <strong>other financing source</strong>.
        </p>


        <div class="formula-box">

            BOND PROCEEDS
            ≠
            GOVERNMENTAL FUND REVENUE

            BOND PROCEEDS
            =
            OTHER FINANCING SOURCE

        </div>


        <p>
            The long-term liability is generally reported
            in the government-wide financial statements.
        </p>


        <h2>
            Principal Payments
        </h2>

        <p>
            When a governmental fund pays principal on
            general long-term debt, the payment is generally
            reported as an <strong>expenditure</strong>.
        </p>

        <p>
            This differs from accrual accounting, where
            repayment of principal reduces a liability
            rather than creating an expense.
        </p>


        <h2>
            Modified Accrual vs. Accrual
        </h2>


        <div class="financial-example">

            <div>

                <span>
                    Governmental Funds
                </span>

                <strong>
                    Current Financial Resources
                    + Modified Accrual
                </strong>

            </div>


            <div>

                <span>
                    Government-Wide
                </span>

                <strong>
                    Economic Resources
                    + Accrual
                </strong>

            </div>

        </div>


        <h2>
            CPA Memory Rules
        </h2>

        <div class="key-points">

            <ul>

                <li>
                    Revenue → measurable + available.
                </li>

                <li>
                    Governmental funds → expenditures,
                    not expenses.
                </li>

                <li>
                    Capital asset purchase → expenditure
                    in governmental funds.
                </li>

                <li>
                    Long-term bond proceeds → other
                    financing source in governmental funds.
                </li>

                <li>
                    Governmental funds generally do not
                    report general capital assets or
                    general long-term liabilities.
                </li>

            </ul>

        </div>


        <div class="formula-box">

            GOVERNMENTAL FUND

            Revenue
            =
            Measurable + Available

            Capital Purchase
            =
            Expenditure

            Bond Proceeds
            =
            Other Financing Source

        </div>


        <h2>
            Key Takeaway
        </h2>

        <p>
            When you see a governmental fund question,
            think about <strong>current financial resources</strong>.
            This explains why modified accrual treatment
            differs from normal business accrual accounting.
        </p>

        `,

        {
            question:
                "A governmental fund has $600,000 of measurable property tax revenue, but $50,000 does not meet the government's availability criterion. How much revenue should generally be recognized under modified accrual?",

            answers: [
    "$50,000",
    "$600,000",
    "$650,000",
    "$550,000"
],

correctAnswer: 3,

            explanation:
                "Modified accrual revenue generally must be both measurable and available. Therefore, $600,000 − $50,000 = $550,000 is recognized as revenue."
        }

    );

    return;
}

if (
    moduleId === 4 &&
    lessonId === 4
) {

    showFARLessonPage(
        4,
        4,

        "Governmental Fund Financial Statements",

        `

        <h2>
            Governmental Fund Financial Statements
        </h2>

        <p>
            Governmental funds generally present two
            major financial statements:
        </p>


        <div class="financial-example">

            <div>
                <span>Balance Sheet</span>
                <strong>
    Assets + Deferred Outflows of Resources
    − Liabilities − Deferred Inflows of Resources
    = Fund Balance
</strong>
            </div>

            <div>
                <span>Operating Statement</span>
                <strong>
                    Revenues − Expenditures
                    + Other Financing Sources/Uses
                </strong>
            </div>

        </div>


        <h2>
            Governmental Funds Balance Sheet
        </h2>

        <p>
            The governmental funds balance sheet reflects
            the <strong>current financial resources
            measurement focus</strong>.
        </p>

        <p>
            Therefore, it generally reports current
            financial assets and related liabilities rather
            than the government's complete economic resources.
        </p>


        <div class="key-points">

            <h3>
                Usually NOT Reported Here
            </h3>

            <ul>

                <li>
                    General capital assets
                </li>

                <li>
                    General long-term liabilities
                </li>

            </ul>

        </div>


        <p>
            Those items are generally reported in the
            government-wide financial statements instead.
        </p>


        <h2>
            Fund Balance Classifications
        </h2>

        <p>
            Governmental fund balance is classified
            according to the nature of constraints placed
            on how resources may be used.
        </p>


        <div class="financial-example">

            <div>
                <span>Nonspendable</span>
                <strong>
                    Not in Spendable Form or Legally Required
                    to Remain Intact
                </strong>
            </div>

            <div>
                <span>Restricted</span>
                <strong>
                    Externally Enforceable Restrictions
                </strong>
            </div>

            <div>
                <span>Committed</span>
                <strong>
                    Constraint Imposed by Government's
                    Highest-Level Decision-Making Authority
                </strong>
            </div>

            <div>
                <span>Assigned</span>
                <strong>
                    Intended for a Particular Purpose
                </strong>
            </div>

            <div>
                <span>Unassigned</span>
                <strong>
                    Residual Classification
                </strong>
            </div>

        </div>


        <h2>
            Nonspendable Fund Balance
        </h2>

        <p>
            Resources are nonspendable when they cannot
            currently be spent because they are not in
            spendable form or must legally remain intact.
        </p>

        <div class="example-box">

            <strong>
                Examples
            </strong>

            <p>
                Inventories, prepaid items, and the principal
                of certain permanent funds may be
                nonspendable.
            </p>

        </div>


        <h2>
            Restricted Fund Balance
        </h2>

        <p>
            Restricted fund balance results from constraints
            imposed by external parties or through law.
        </p>

        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                Grant money that may legally be used only
                for a specified program may be restricted.
            </p>

        </div>


        <h2>
            Committed vs. Assigned
        </h2>

        <p>
            <strong>Committed</strong> resources are constrained
            by formal action of the government's highest-level
            decision-making authority.
        </p>

        <p>
            <strong>Assigned</strong> resources reflect an
            intended use but do not meet the stronger criteria
            for restricted or committed classification.
        </p>


        <h2>
            Unassigned Fund Balance
        </h2>

        <p>
            Unassigned fund balance is generally the residual
            classification for the General Fund.
        </p>

        <div class="key-points">

    <p>
        Unassigned fund balance is generally used as the
        residual classification in the General Fund.
        Other governmental funds may report a negative
        unassigned amount when expenditures exceed amounts
        available in the classifications applicable to that fund.
    </p>

</div>


        <h2>
            Statement of Revenues, Expenditures,
            and Changes in Fund Balances
        </h2>

        <p>
            This statement explains how governmental fund
            balances changed during the period.
        </p>


        <div class="formula-box">

            REVENUES

            − EXPENDITURES

            =
            EXCESS (DEFICIENCY)
            OF REVENUES OVER EXPENDITURES

            + OTHER FINANCING SOURCES

            − OTHER FINANCING USES

            =
            NET CHANGE IN FUND BALANCE

        </div>


        <h2>
            Other Financing Sources and Uses
        </h2>

        <p>
            Certain financing transactions are reported
            separately from revenues and expenditures.
        </p>


        <div class="key-points">

            <ul>

                <li>
                    Proceeds from long-term debt are generally
                    an <strong>other financing source</strong>.
                </li>

                <li>
                    Transfers in are generally other
                    financing sources.
                </li>

                <li>
                    Transfers out are generally other
                    financing uses.
                </li>

            </ul>

        </div>


        <h2>
            Quick Example
        </h2>

        <p>
            Assume a governmental fund reports:
        </p>


        <div class="financial-example">

            <div>
                <span>Revenues</span>
                <strong>$900,000</strong>
            </div>

            <div>
                <span>Expenditures</span>
                <strong>$820,000</strong>
            </div>

            <div>
                <span>Bond Proceeds</span>
                <strong>$150,000</strong>
            </div>

            <div>
                <span>Transfer Out</span>
                <strong>$30,000</strong>
            </div>

        </div>


        <div class="formula-box">

            $900,000
            − $820,000
            + $150,000
            − $30,000

            =
            $200,000 Net Increase
            in Fund Balance

        </div>


        <h2>
            CPA Exam Traps
        </h2>

        <div class="key-points">

            <ul>

                <li>
                    Bond proceeds are not governmental
                    fund revenue.
                </li>

                <li>
                    Transfers are not revenues or expenditures.
                </li>

                <li>
                    General capital assets generally do not
                    appear on the governmental funds
                    balance sheet.
                </li>

                <li>
                    General long-term debt generally does not
                    appear as a governmental fund
                    long-term liability.
                </li>

            </ul>

        </div>


        <h2>
            Memory Rule
        </h2>

        <div class="formula-box">

            GOVERNMENTAL FUNDS:

            Balance Sheet
            → Current Financial Resources

            Operating Statement
            → Revenues + Expenditures

            Financing
            → Other Financing Sources / Uses

        </div>


        <h2>
            Key Takeaway
        </h2>

        <p>
            Keep governmental fund reporting separate from
            government-wide reporting. The fund statements
            emphasize current financial resources, while
            government-wide statements later convert the
            information to an economic-resources perspective.
        </p>

        `,

        {
            question:
                "A governmental fund reports revenues of $700,000, expenditures of $650,000, bond proceeds of $100,000, and transfers out of $20,000. What is the net increase in fund balance?",

            answers: [
                "$30,000",
                "$50,000",
                "$130,000",
                "$150,000"
            ],

            correctAnswer: 2,

            explanation:
                "The net increase is $700,000 − $650,000 + $100,000 of other financing sources − $20,000 of other financing uses = $130,000."
        }

    );

    return;
}

if (
    moduleId === 4 &&
    lessonId === 5
) {

    showFARLessonPage(
        4,
        5,

        "Proprietary Funds",

        `

        <h2>
            Proprietary Funds
        </h2>

        <p>
            Proprietary funds account for government
            activities that operate in a manner similar
            to commercial businesses.
        </p>

        <p>
            Unlike governmental funds, proprietary funds use:
        </p>


        <div class="formula-box">

            ECONOMIC RESOURCES
            MEASUREMENT FOCUS

            +

            ACCRUAL BASIS
            OF ACCOUNTING

        </div>


        <p>
            This means proprietary funds generally recognize
            assets, liabilities, revenues, and expenses
            similarly to business enterprises.
        </p>


        <h2>
            Two Types of Proprietary Funds
        </h2>


        <div class="financial-example">

            <div>

                <span>
                    Enterprise Fund
                </span>

                <strong>
                    Provides Goods or Services
                    Primarily to External Users
                </strong>

            </div>


            <div>

                <span>
                    Internal Service Fund
                </span>

                <strong>
                    Provides Goods or Services
                    Primarily to Other Government Departments
                </strong>

            </div>

        </div>


        <h2>
            Enterprise Funds
        </h2>

        <p>
            Enterprise funds generally account for
            activities in which goods or services are
            provided to the public or other external users
            for a fee.
        </p>

        <div class="key-points">

    <p>
        Enterprise fund reporting may also be required
        when applicable criteria are met, such as when
        laws, regulations, debt arrangements, or pricing
        policies require an activity's costs to be
        recovered primarily through fees and charges.
    </p>

</div>


        <div class="example-box">

            <strong>
                Common Examples
            </strong>

            <ul>

                <li>
                    Public water utilities
                </li>

                <li>
                    Government-owned airports
                </li>

                <li>
                    Public transit systems
                </li>

                <li>
                    Government parking operations
                </li>

            </ul>

        </div>


        <div class="key-points">

            <h3>
                Think:
            </h3>

            <p>
                Government + customers outside the
                government + user charges
                → Enterprise Fund.
            </p>

        </div>


        <h2>
            Internal Service Funds
        </h2>

        <p>
            Internal service funds generally account for
            goods or services provided by one department
            or agency of a government to other departments
            or agencies, usually on a cost-reimbursement basis.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A city's centralized motor pool maintains
                vehicles for the police, fire, and parks
                departments and charges those departments
                for the services.
            </p>

            <p>
                The activity may be accounted for in an
                internal service fund.
            </p>

        </div>


        <div class="formula-box">

            EXTERNAL CUSTOMERS
            → ENTERPRISE

            INTERNAL DEPARTMENTS
            → INTERNAL SERVICE

        </div>


        <h2>
            Capital Assets
        </h2>

        <p>
            Because proprietary funds use the economic
            resources measurement focus, they generally
            report capital assets directly in the fund.
        </p>

        <p>
            Capital assets are also generally
            <strong>depreciated</strong>.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Equipment Cost
                </span>

                <strong>
                    $300,000
                </strong>

            </div>


            <div>

                <span>
                    Useful Life
                </span>

                <strong>
                    10 Years
                </strong>

            </div>

        </div>


        <div class="formula-box">

            $300,000 ÷ 10

            =

            $30,000 Annual Depreciation

        </div>


        <p>
            This is very different from a governmental fund,
            where acquisition of equipment is generally
            reported as an expenditure rather than recording
            and depreciating the capital asset in the fund.
        </p>


        <h2>
            Long-Term Debt
        </h2>

        <p>
            Proprietary funds generally report their
            long-term liabilities directly because they
            use the economic resources measurement focus.
        </p>


        <div class="formula-box">

            PROPRIETARY FUND

            Capital Assets
            ✓

            Depreciation
            ✓

            Long-Term Liabilities
            ✓

        </div>


        <h2>
            Revenues and Expenses
        </h2>

        <p>
            Proprietary fund statements distinguish
            operating activities from nonoperating
            activities.
        </p>


        <div class="key-points">

            <h3>
                Operating Examples
            </h3>

            <ul>

                <li>
                    Charges to customers for services
                </li>

                <li>
                    Employee costs related to operations
                </li>

                <li>
                    Supplies and other operating costs
                </li>

            </ul>

        </div>


        <div class="key-points">

            <h3>
                Nonoperating Examples
            </h3>

            <ul>

                <li>
                    Interest revenue
                </li>

                <li>
                    Interest expense
                </li>

                <li>
                    Certain investment-related amounts
                </li>

            </ul>

        </div>


        <h2>
            Proprietary Fund Statements
        </h2>

        <p>
            Proprietary funds generally present:
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Statement of Net Position
                </span>

                <strong>
                    Financial Position
                </strong>

            </div>


            <div>

                <span>
                    Statement of Revenues,
                    Expenses, and Changes in Fund Net Position
                </span>

                <strong>
                    Operating Results
                </strong>

            </div>


            <div>

                <span>
                    Statement of Cash Flows
                </span>

                <strong>
                    Cash Activity
                </strong>

            </div>

        </div>


        <h2>
            Important Cash Flow Difference
        </h2>

        <p>
            Proprietary fund cash flow statements use
            categories that differ somewhat from those
            commonly seen in business accounting.
        </p>

        <p>
            One important CPA distinction is that proprietary
            fund statements include an
            <strong>operating activities</strong> category
            based on governmental reporting requirements,
            along with noncapital financing, capital and
            related financing, and investing activities.
        </p>


        <h2>
            Governmental vs. Proprietary
        </h2>


        <div class="financial-example">

            <div>

                <span>
                    Governmental Funds
                </span>

                <strong>
                    Modified Accrual
                    + Current Financial Resources
                </strong>

            </div>


            <div>

                <span>
                    Proprietary Funds
                </span>

                <strong>
                    Accrual
                    + Economic Resources
                </strong>

            </div>

        </div>


        <h2>
            CPA Memory Rule
        </h2>


        <div class="formula-box">

            ENTERPRISE
            =
            OUTSIDE USERS

            INTERNAL SERVICE
            =
            INSIDE USERS

            BOTH
            =
            ACCRUAL + ECONOMIC RESOURCES

        </div>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    Proprietary funds use accrual accounting.
                </li>

                <li>
                    They use the economic resources
                    measurement focus.
                </li>

                <li>
                    Enterprise funds generally serve
                    external users.
                </li>

                <li>
                    Internal service funds generally serve
                    other government departments.
                </li>

                <li>
                    Proprietary funds report and depreciate
                    capital assets.
                </li>

                <li>
                    They generally report their long-term
                    liabilities directly.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "A city operates a central vehicle maintenance department that primarily services vehicles used by the city's police, fire, and parks departments. Which fund is generally most appropriate?",

            answers: [
                "Enterprise Fund",
                "Internal Service Fund",
                "Special Revenue Fund",
                "Capital Projects Fund"
            ],

            correctAnswer: 1,

            explanation:
                "An internal service fund generally accounts for goods or services provided primarily to other departments or agencies of the same government."
        }

    );

    return;
}

if (
    moduleId === 4 &&
    lessonId === 6
) {

    showFARLessonPage(
        4,
        6,

        "Fiduciary Funds",

        `

        <h2>
            Fiduciary Funds
        </h2>

        <p>
            Fiduciary funds account for resources that a
            government holds or administers in a
            <strong>fiduciary capacity for others</strong>.
        </p>

        <p>
            The key idea is that these resources generally
            are <strong>not available to support the
            government's own programs</strong>.
        </p>


        <div class="formula-box">

            FIDUCIARY FUNDS

            =
            RESOURCES HELD FOR OTHERS

            +

            ECONOMIC RESOURCES

            +

            ACCRUAL BASIS

        </div>


        <h2>
            Four Fiduciary Fund Types
        </h2>


        <div class="financial-example">

            <div>

                <span>
                    Pension and Other Employee
                    Benefit Trust Funds
                </span>

                <strong>
                    Employee Benefit Arrangements
                </strong>

            </div>


            <div>

                <span>
                    Investment Trust Funds
                </span>

                <strong>
                    External Portion of Investment Pools
                </strong>

            </div>


            <div>

                <span>
                    Private-Purpose Trust Funds
                </span>

                <strong>
                    Trusts Benefiting Specific
                    Individuals or Organizations
                </strong>

            </div>


            <div>

                <span>
                    Custodial Funds
                </span>

                <strong>
                    Fiduciary Resources Not Reported
                    in Another Fiduciary Fund
                </strong>

            </div>

        </div>


        <h2>
            Pension and Other Employee Benefit Trust Funds
        </h2>

        <p>
            These funds account for qualifying pension
            plans and other employee benefit arrangements
            administered through a trust or equivalent
            arrangement.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A city administers a pension trust for
                retired municipal employees.
            </p>

            <p>
                The pension resources belong to the plan's
                participants and beneficiaries rather than
                being available for ordinary city programs.
            </p>

        </div>


        <h2>
            Investment Trust Funds
        </h2>

        <p>
            Investment trust funds generally report the
            <strong>external portion of investment pools</strong>
            administered by a sponsoring government.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A county manages an investment pool containing
                its own money as well as money belonging to
                legally separate local governments.
            </p>

            <p>
                The qualifying external portion may be
                reported in an investment trust fund.
            </p>

        </div>


        <h2>
            Private-Purpose Trust Funds
        </h2>

        <p>
            Private-purpose trust funds account for certain
            fiduciary activities held in trust for the benefit
            of specific individuals, private organizations,
            or other governments.
        </p>


        <div class="key-points">

            <p>
                The beneficiaries are not the government's
                own programs or the public generally.
            </p>

        </div>


        <h2>
            Custodial Funds
        </h2>

        <p>
            Custodial funds account for qualifying fiduciary
            activities that are not required to be reported
            in one of the three trust fund categories.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A government collects certain amounts on
                behalf of another government and later
                remits those resources to that government.
            </p>

        </div>


        <h2>
            Fiduciary Funds and Government-Wide Statements
        </h2>

        <p>
            This is an important CPA distinction:
        </p>


        <div class="formula-box">

            FIDUCIARY ACTIVITIES

            ARE GENERALLY

            EXCLUDED FROM

            GOVERNMENT-WIDE
            FINANCIAL STATEMENTS

        </div>


        <p>
            Why?
        </p>

        <p>
            Because fiduciary resources generally cannot
            be used to support the government's own
            programs and activities.
        </p>


        <h2>
            Basis of Accounting
        </h2>

        <p>
            Fiduciary funds use the
            <strong>economic resources measurement focus</strong>
            and the
            <strong>accrual basis of accounting</strong>.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Governmental Funds
                </span>

                <strong>
                    Modified Accrual
                </strong>

            </div>


            <div>

                <span>
                    Proprietary Funds
                </span>

                <strong>
                    Accrual
                </strong>

            </div>


            <div>

                <span>
                    Fiduciary Funds
                </span>

                <strong>
                    Accrual
                </strong>

            </div>

        </div>


        <h2>
            Fiduciary Financial Statements
        </h2>

        <p>
            Fiduciary funds generally report:
        </p>


        <div class="key-points">

            <ul>

                <li>
                    Statement of Fiduciary Net Position
                </li>

                <li>
                    Statement of Changes in Fiduciary
                    Net Position
                </li>

            </ul>

        </div>


        <h2>
            Don't Confuse Permanent and
            Private-Purpose Trust Funds
        </h2>

        <p>
            This distinction is especially useful for FAR.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Permanent Fund
                </span>

                <strong>
                    Benefits Government
                    or Its Citizenry
                </strong>

            </div>


            <div>

                <span>
                    Private-Purpose Trust Fund
                </span>

                <strong>
                    Benefits Specific Outside
                    Individuals or Organizations
                </strong>

            </div>

        </div>


        <div class="formula-box">

            BENEFITS GOVERNMENT / CITIZENS
            → PERMANENT FUND

            BENEFITS SPECIFIC OUTSIDERS
            → PRIVATE-PURPOSE TRUST

        </div>


        <h2>
            CPA Memory Rule
        </h2>


        <div class="key-points">

            <ul>

                <li>
                    Fiduciary = government holds resources
                    for others.
                </li>

                <li>
                    Fiduciary funds use accrual accounting.
                </li>

                <li>
                    They use the economic resources
                    measurement focus.
                </li>

                <li>
                    Fiduciary activities are generally
                    excluded from government-wide statements.
                </li>

                <li>
                    Remember the four types:
                    pension/employee benefit trust,
                    investment trust,
                    private-purpose trust,
                    and custodial.
                </li>

            </ul>

        </div>


        <h2>
            Key Takeaway
        </h2>

        <p>
            When a CPA question says the government is
            holding or administering resources
            <strong>for someone else</strong>, consider
            whether fiduciary fund reporting applies.
        </p>

        `,

        {
            question:
                "A city holds qualifying trust resources for the benefit of specific private individuals rather than for the city's own programs or the public generally. Which fiduciary fund type is most likely appropriate?",

            answers: [
    "Permanent Fund",
    "Enterprise Fund",
    "Capital Projects Fund",
    "Private-Purpose Trust Fund"
],

correctAnswer: 3,

            explanation:
                "A private-purpose trust fund accounts for certain fiduciary activities held in trust for specific individuals, private organizations, or other governments rather than for the government's own programs."
        }

    );

    return;
}

if (
    moduleId === 4 &&
    lessonId === 7
) {

    showFARLessonPage(
        4,
        7,

        "Government-Wide Financial Statements",

        `

        <h2>
            Government-Wide Financial Statements
        </h2>

        <p>
            Government-wide financial statements provide
            a broad view of a state or local government's
            financial position and operating results.
        </p>

        <p>
            They use:
        </p>


        <div class="formula-box">

            ECONOMIC RESOURCES
            MEASUREMENT FOCUS

            +

            ACCRUAL BASIS
            OF ACCOUNTING

        </div>


        <h2>
            Two Types of Activities
        </h2>

        <p>
            Government-wide statements generally report:
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Governmental Activities
                </span>

                <strong>
                    Activities Primarily Supported
                    by Taxes and Similar Revenues
                </strong>

            </div>


            <div>

                <span>
                    Business-Type Activities
                </span>

                <strong>
                    Activities Primarily Financed
                    Through User Charges
                </strong>

            </div>

        </div>


        <h2>
            Governmental Activities
        </h2>

        <p>
            Governmental activities generally include
            traditional government services such as:
        </p>


        <div class="key-points">

            <ul>

                <li>
                    Public safety
                </li>

                <li>
                    General administration
                </li>

                <li>
                    Public works
                </li>

                <li>
                    Parks and recreation
                </li>

            </ul>

        </div>


        <h2>
            Business-Type Activities
        </h2>

        <p>
            Business-type activities generally resemble
            commercial operations and are commonly financed
            through fees charged to users.
        </p>


        <div class="example-box">

            <strong>
                Examples
            </strong>

            <p>
                Government-owned water utilities,
                transit systems, and similar operations
                may be reported as business-type activities.
            </p>

        </div>


        <h2>
            What About Fiduciary Activities?
        </h2>

        <p>
            Fiduciary activities are generally
            <strong>not included</strong> in the
            government-wide financial statements.
        </p>


        <div class="formula-box">

            GOVERNMENT-WIDE

            Governmental Activities
            ✓

            Business-Type Activities
            ✓

            Fiduciary Activities
            ✗

        </div>


        <h2>
            Statement of Net Position
        </h2>

        <p>
            The statement of net position presents the
            government's assets, deferred outflows,
            liabilities, deferred inflows, and net position.
        </p>


        <div class="formula-box">

            ASSETS
            + DEFERRED OUTFLOWS

            − LIABILITIES
            − DEFERRED INFLOWS

            =
            NET POSITION

        </div>


        <h2>
            Capital Assets
        </h2>

        <p>
            Unlike governmental fund statements,
            government-wide statements generally report
            capital assets used in governmental activities.
        </p>

        <p>
            Depreciable capital assets are generally
            depreciated over their useful lives.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A governmental fund purchases equipment
                for <strong>$200,000</strong>.
            </p>

            <p>
                In the governmental fund, the purchase
                is generally reported as an expenditure.
            </p>

            <p>
                At the government-wide level, the equipment
                is generally capitalized and depreciated.
            </p>

        </div>


        <h2>
            Long-Term Liabilities
        </h2>

        <p>
            Government-wide statements also report
            long-term liabilities related to governmental
            activities.
        </p>

        <p>
            This includes general long-term debt that
            governmental funds generally do not report
            as a fund liability.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Governmental Fund
                </span>

                <strong>
                    General Long-Term Debt
                    Generally Not Reported
                </strong>

            </div>


            <div>

                <span>
                    Government-Wide
                </span>

                <strong>
                    Long-Term Liability Reported
                </strong>

            </div>

        </div>


        <h2>
            Statement of Activities
        </h2>

        <p>
            The other major government-wide statement is
            the <strong>Statement of Activities</strong>.
        </p>

        <p>
            It reports the cost of governmental functions
            and programs and the extent to which those costs
            are financed by program revenues.
        </p>


        <h2>
            Program Revenues
        </h2>

        <p>
            Program revenues are directly associated with
            particular functions or programs.
        </p>


        <div class="key-points">

            <h3>
                Examples
            </h3>

            <ul>

                <li>
                    Charges for services
                </li>

                <li>
                    Operating grants and contributions
                </li>

                <li>
                    Capital grants and contributions
                </li>

            </ul>

        </div>


        <h2>
            General Revenues
        </h2>

        <p>
            Revenues that are not directly associated with
            a particular program are generally reported
            separately as general revenues.
        </p>

        <div class="example-box">

            <strong>
                Common Example
            </strong>

            <p>
                Taxes that are not restricted to a
                particular program are generally reported
                as general revenues rather than program
                revenues.
            </p>

        </div>


        <h2>
            Net Expense of a Function
        </h2>

        <p>
            Suppose a government program reports:
        </p>


        <div class="financial-example">

            <div>
                <span>Program Expenses</span>
                <strong>$500,000</strong>
            </div>

            <div>
                <span>Charges for Services</span>
                <strong>$120,000</strong>
            </div>

            <div>
                <span>Program Grants</span>
                <strong>$80,000</strong>
            </div>

        </div>


        <div class="formula-box">

            $500,000

            − $120,000

            − $80,000

            =

            $300,000 NET EXPENSE

        </div>


        <h2>
            Governmental Fund vs. Government-Wide
        </h2>


        <div class="financial-example">

            <div>

                <span>
                    Governmental Fund
                </span>

                <strong>
                    Current Financial Resources
                    + Modified Accrual
                </strong>

            </div>


            <div>

                <span>
                    Government-Wide
                </span>

                <strong>
                    Economic Resources
                    + Accrual
                </strong>

            </div>

        </div>


        <div class="key-points">

            <h3>
                Government-Wide Includes
            </h3>

            <ul>

                <li>
                    Capital assets
                </li>

                <li>
                    Depreciation
                </li>

                <li>
                    Long-term liabilities
                </li>

                <li>
                    Governmental activities
                </li>

                <li>
                    Business-type activities
                </li>

            </ul>

        </div>


        <h2>
            CPA Memory Rule
        </h2>


        <div class="formula-box">

            GOVERNMENT-WIDE
            =
            BIG PICTURE

            ACCRUAL
            +
            ECONOMIC RESOURCES

            CAPITAL ASSETS
            ✓

            LONG-TERM DEBT
            ✓

            FIDUCIARY
            ✗

        </div>


        <h2>
            Key Takeaway
        </h2>

        <p>
            Government-wide statements convert the focus
            from short-term financial resources to the
            government's overall economic position.
        </p>

        `,

        {
            question:
                "Which item is generally reported in the government-wide financial statements but not as an asset or long-term liability in governmental fund financial statements?",

            answers: [
                "General capital assets and general long-term liabilities",
                "Current cash and accounts payable",
                "Restricted governmental fund resources only",
                "Fiduciary activities"
            ],

            correctAnswer: 0,

            explanation:
                "Government-wide statements use the economic resources measurement focus and generally report capital assets and long-term liabilities associated with governmental activities. Governmental funds use the current financial resources measurement focus."
        }

    );

    return;
}

if (
    moduleId === 4 &&
    lessonId === 8
) {

    showFARLessonPage(
        4,
        8,

        "Governmental Fund to Government-Wide Reconciliation",

        `

        <h2>
            Why Reconciliation Is Needed
        </h2>

        <p>
            Governmental fund financial statements and
            government-wide financial statements use
            different measurement focuses and bases of
            accounting.
        </p>

        <div class="financial-example">

            <div>
                <span>Governmental Funds</span>
                <strong>
                    Current Financial Resources
                    + Modified Accrual
                </strong>
            </div>

            <div>
                <span>Government-Wide</span>
                <strong>
                    Economic Resources
                    + Accrual
                </strong>
            </div>

        </div>

        <p>
            Because of these differences, governmental
            fund amounts must be reconciled to governmental
            activities reported at the government-wide level.
        </p>


        <h2>
            Capital Assets
        </h2>

        <p>
            Governmental funds generally report purchases
            of capital assets as expenditures.
        </p>

        <p>
            Government-wide statements instead capitalize
            those assets and generally recognize depreciation.
        </p>

        <div class="formula-box">

            FUND LEVEL:

            Capital Purchase
            =
            Expenditure


            GOVERNMENT-WIDE:

            Capital Purchase
            =
            Capital Asset

            Depreciation
            =
            Expense

        </div>


        <h2>
            Long-Term Debt
        </h2>

        <p>
            Governmental funds generally report proceeds
            from general long-term debt as other financing
            sources.
        </p>

        <p>
            Government-wide statements instead report
            the outstanding debt as a liability.
        </p>

        <div class="formula-box">

            FUND LEVEL:

            Bond Proceeds
            =
            Other Financing Source


            GOVERNMENT-WIDE:

            Bond Proceeds
            =
            Increase in Long-Term Liability

        </div>


        <h2>
            Debt Principal Payments
        </h2>

        <p>
            Governmental funds generally report principal
            payments on general long-term debt as expenditures.
        </p>

        <p>
            At the government-wide level, repayment of
            principal reduces the liability rather than
            creating an expense.
        </p>


        <h2>
            Revenue Availability Differences
        </h2>

        <p>
            Governmental funds recognize certain revenues
            only when they are measurable and available.
        </p>

        <p>
            Government-wide statements use accrual accounting,
            so revenue recognition is not based on the
            governmental fund availability criterion.
        </p>

        <p>
            Therefore, amounts deferred solely because they
            were unavailable under modified accrual may require
            adjustment when converting to government-wide
            reporting.
        </p>


        <h2>
            Reconciliation of Fund Balance
            to Net Position
        </h2>

        <p>
            Consider this simplified example.
        </p>

        <div class="financial-example">

            <div>
                <span>Total Governmental Fund Balances</span>
                <strong>$800,000</strong>
            </div>

            <div>
                <span>Capital Assets, Net</span>
                <strong>$1,500,000</strong>
            </div>

            <div>
                <span>General Long-Term Debt</span>
                <strong>$900,000</strong>
            </div>

            <div>
                <span>Revenue Unavailable in Funds</span>
                <strong>$50,000</strong>
            </div>

        </div>


        <h2>
            Step 1 — Begin With Fund Balance
        </h2>

        <div class="formula-box">

            Governmental Fund Balances
            =
            $800,000

        </div>


        <h2>
            Step 2 — Add Capital Assets
        </h2>

        <p>
            Capital assets are not generally reported as
            assets in governmental funds but are reported
            in governmental activities.
        </p>

        <div class="formula-box">

            $800,000
            + $1,500,000

            =
            $2,300,000

        </div>


        <h2>
            Step 3 — Subtract Long-Term Debt
        </h2>

        <p>
            General long-term debt is generally absent from
            governmental fund liabilities but is reported
            at the government-wide level.
        </p>

        <div class="formula-box">

            $2,300,000
            − $900,000

            =
            $1,400,000

        </div>


        <h2>
            Step 4 — Add Revenue Recognized
            Under Accrual
        </h2>

        <p>
            Assume the $50,000 was not recognized as
            governmental fund revenue solely because it
            failed the availability criterion, but it
            qualifies for recognition under accrual accounting.
        </p>

        <div class="formula-box">

            $1,400,000
            + $50,000

            =
            $1,450,000

        </div>


        <h2>
            Government-Wide Net Position
        </h2>

        <div class="formula-box">

            FUND BALANCE
            $800,000

            + CAPITAL ASSETS
            $1,500,000

            − LONG-TERM DEBT
            $900,000

            + ACCRUAL REVENUE ADJUSTMENT
            $50,000

            =

            $1,450,000
            GOVERNMENT-WIDE NET POSITION

        </div>


        <h2>
            Operating Statement Reconciliation
        </h2>

        <p>
            We may also need to reconcile the governmental
            funds' change in fund balances to the change
            in net position of governmental activities.
        </p>


        <div class="key-points">

            <h3>
                Common Adjustments
            </h3>

            <ul>

                <li>
                    Capital outlays are expenditures in
                    governmental funds but are generally
                    capitalized government-wide.
                </li>

                <li>
                    Depreciation is recognized
                    government-wide but generally not in
                    governmental funds.
                </li>

                <li>
                    Bond proceeds are other financing sources
                    in governmental funds but create
                    liabilities government-wide.
                </li>

                <li>
                    Debt principal payments are expenditures
                    in governmental funds but reduce
                    liabilities government-wide.
                </li>

                <li>
                    Revenue recognition may differ because
                    of the modified accrual availability
                    criterion.
                </li>

            </ul>

        </div>


        <h2>
            Mini Example
        </h2>

        <p>
            Assume governmental funds report a
            <strong>$200,000 increase in fund balance</strong>.
        </p>

        <p>
            During the year:
        </p>

        <div class="financial-example">

            <div>
                <span>Capital Outlay</span>
                <strong>$100,000</strong>
            </div>

            <div>
                <span>Depreciation Expense</span>
                <strong>$30,000</strong>
            </div>

            <div>
                <span>Debt Principal Paid</span>
                <strong>$20,000</strong>
            </div>

        </div>


        <div class="formula-box">

            $200,000

            + $100,000 Capital Outlay

            − $30,000 Depreciation

            + $20,000 Principal Payment

            =

            $290,000 Change in Net Position

        </div>


        <h2>
            Why Do We Add Principal Payments?
        </h2>

        <p>
            The governmental fund treated the $20,000
            principal payment as an expenditure that reduced
            fund balance.
        </p>

        <p>
            Government-wide accounting treats the payment
            as a reduction of a liability, not an expense.
            Therefore, we reverse its effect when reconciling.
        </p>


        <h2>
            CPA Memory Rule
        </h2>

        <div class="formula-box">

            FUND → GOVERNMENT-WIDE

            Capital Assets
            → ADD

            Long-Term Liabilities
            → SUBTRACT

            Capital Outlay
            → ADD BACK

            Depreciation
            → SUBTRACT

            Debt Principal Payment
            → ADD BACK

        </div>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    Reconciliation exists because the two
                    reporting levels use different accounting
                    perspectives.
                </li>

                <li>
                    Government-wide reporting recognizes
                    capital assets and long-term liabilities.
                </li>

                <li>
                    Capital outlays must be converted from
                    expenditures to capital assets.
                </li>

                <li>
                    Depreciation must be recognized
                    government-wide.
                </li>

                <li>
                    Principal payments reduce liabilities
                    rather than government-wide expenses.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "Governmental funds report a $300,000 increase in fund balance. During the year, capital outlays were $80,000, depreciation expense was $25,000, and principal payments on general long-term debt were $15,000. Ignoring all other differences, what is the increase in government-wide net position?",

            answers: [
                "$270,000",
                "$340,000",
                "$370,000",
                "$420,000"
            ],

            correctAnswer: 2,

            explanation:
                "Start with the $300,000 increase in fund balance, add back the $80,000 capital outlay, subtract $25,000 depreciation, and add back the $15,000 principal payment. $300,000 + $80,000 − $25,000 + $15,000 = $370,000."
        }

    );

    return;
}

if (
    moduleId === 4 &&
    lessonId === 9
) {

    showFARLessonPage(
        4,
        9,

        "Budgetary Accounting & Encumbrances",

        `

        <h2>
            Why Governments Use Budgets
        </h2>

        <p>
            Budgets are especially important in governmental
            accounting because they help demonstrate
            <strong>legal and financial accountability</strong>
            over public resources.
        </p>

        <p>
            Governments may formally record budgetary
            information in their accounting systems during
            the fiscal year.
        </p>


        <h2>
            Basic Budgetary Accounts
        </h2>

        <div class="financial-example">

            <div>
                <span>Estimated Revenues</span>
                <strong>
                    Resources Expected to Be Available
                </strong>
            </div>

            <div>
                <span>Appropriations</span>
                <strong>
                    Authorized Spending
                </strong>
            </div>

            <div>
                <span>Encumbrances</span>
                <strong>
                    Commitments Related to Orders
                    or Contracts
                </strong>
            </div>

        </div>


        <h2>
            Estimated Revenues
        </h2>

        <p>
            Estimated revenues represent revenues the
            government expects to obtain during the
            budget period.
        </p>

        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A city expects to collect
                <strong>$5,000,000</strong> in taxes and
                other revenues during the next fiscal year.
            </p>

            <p>
                The adopted budget may include estimated
                revenues of $5,000,000.
            </p>

        </div>


        <h2>
            Appropriations
        </h2>

        <p>
            Appropriations represent authorization to
            spend government resources.
        </p>

        <div class="formula-box">

            APPROPRIATION
            =
            AUTHORIZED SPENDING

        </div>

        <p>
            An appropriation does not itself mean that
            an expenditure has already occurred.
        </p>


        <h2>
            What Is an Encumbrance?
        </h2>

        <p>
            An encumbrance is generally used to record
            a commitment related to an outstanding
            purchase order or contract.
        </p>

        <p>
    Encumbrance accounting helps governments
    monitor amounts committed against available
    budgetary authority and avoid overcommitting
    appropriated resources.
</p>


        <div class="formula-box">

            PURCHASE ORDER ISSUED

            →

            ENCUMBRANCE RECORDED

            ≠

            EXPENDITURE YET

        </div>


        <h2>
            Example — Purchase Order
        </h2>

        <p>
            Assume a governmental fund issues a purchase
            order for equipment expected to cost
            <strong>$40,000</strong>.
        </p>

        <p>
            At the purchase-order stage, the government
            may record an encumbrance of $40,000.
        </p>


        <div class="financial-example">

            <div>
                <span>Purchase Order</span>
                <strong>$40,000</strong>
            </div>

            <div>
                <span>Encumbrance</span>
                <strong>$40,000</strong>
            </div>

            <div>
                <span>Expenditure at This Point</span>
                <strong>$0</strong>
            </div>

        </div>


        <h2>
            When the Goods Arrive
        </h2>

        <p>
            Assume the equipment is later received and
            the actual invoice is
            <strong>$39,500</strong>.
        </p>

        <p>
            The outstanding encumbrance is generally
            reversed, and the actual transaction is
            recognized using the appropriate expenditure
            and liability accounts.
        </p>


        <div class="formula-box">

            STEP 1

            Reverse Original Encumbrance
            $40,000


            STEP 2

            Record Actual Expenditure
            $39,500

        </div>


        <h2>
            Encumbrance vs. Expenditure
        </h2>

        <div class="financial-example">

            <div>

                <span>
                    Encumbrance
                </span>

                <strong>
                    Commitment Before the
                    Actual Transaction
                </strong>

            </div>

            <div>

                <span>
                    Expenditure
                </span>

                <strong>
                    Recognized When the Fund
                    Incurs the Related Obligation
                </strong>

            </div>

        </div>


        <div class="key-points">

            <h3>
                CPA Trap
            </h3>

            <p>
                Do not treat the issuance of a purchase
                order as an expenditure merely because
                an encumbrance was recorded.
            </p>

        </div>


        <h2>
            Budgetary Surplus Example
        </h2>

        <p>
            Assume the adopted budget contains:
        </p>


        <div class="financial-example">

            <div>
                <span>Estimated Revenues</span>
                <strong>$2,000,000</strong>
            </div>

            <div>
                <span>Appropriations</span>
                <strong>$1,850,000</strong>
            </div>

        </div>


        <div class="formula-box">

            $2,000,000
            − $1,850,000

            =

            $150,000
            BUDGETARY SURPLUS

        </div>


        <p>
            If appropriations exceed estimated revenues,
            the difference represents a budgetary deficit
            rather than a surplus.
        </p>


        <h2>
            Budgetary vs. GAAP Accounting
        </h2>

        <p>
            Budgetary accounts are used to control and
            monitor legally authorized financial activity.
        </p>

        <p>
            They should not be confused with the accounts
            used to report actual revenues, expenditures,
            assets, and liabilities under GAAP.
        </p>


        <div class="formula-box">

            BUDGET
            =
            PLAN + AUTHORIZATION

            ACTUAL ACCOUNTING
            =
            WHAT REALLY OCCURRED

        </div>


        <h2>
            CPA Memory Rule
        </h2>

        <div class="key-points">

            <ul>

                <li>
                    Estimated revenues = expected resources.
                </li>

                <li>
                    Appropriations = authorized spending.
                </li>

                <li>
                    Encumbrances = commitments.
                </li>

                <li>
                    A purchase order generally creates an
                    encumbrance, not an expenditure.
                </li>

                <li>
                    When the goods or services are received,
                    the encumbrance is generally reversed
                    and the actual transaction is recorded.
                </li>

            </ul>

        </div>


        <h2>
            Key Takeaway
        </h2>

        <p>
            Think of the sequence as:
        </p>

        <div class="formula-box">

            BUDGET AUTHORIZED

            →

            PURCHASE ORDER

            →

            ENCUMBRANCE

            →

            GOODS / SERVICES RECEIVED

            →

            EXPENDITURE

        </div>

        `,

        {
            question:
                "A governmental fund issues a purchase order for supplies estimated to cost $75,000. The supplies have not yet been received. What amount of expenditure should generally be recognized solely because the purchase order was issued?",

            answers: [
                "$0",
                "$37,500",
                "$75,000",
                "$150,000"
            ],

            correctAnswer: 0,

            explanation:
                "Issuing the purchase order may result in recording an encumbrance, but it generally does not by itself create an expenditure. Therefore, the expenditure at that point is $0."
        }

    );

    return;
}

if (
    moduleId === 4 &&
    lessonId === 10
) {

    showFARLessonPage(
        4,
        10,

        "Governmental Accounting Integrated Review",

        `

        <h2>
            Governmental Accounting — Big Picture
        </h2>

        <p>
            The fastest way to solve governmental accounting
            questions is to first identify
            <strong>what type of reporting is involved</strong>.
        </p>


        <div class="financial-example">

            <div>
                <span>Governmental Funds</span>
                <strong>
                    Current Financial Resources
                    + Modified Accrual
                </strong>
            </div>

            <div>
                <span>Proprietary Funds</span>
                <strong>
                    Economic Resources
                    + Accrual
                </strong>
            </div>

            <div>
                <span>Fiduciary Funds</span>
                <strong>
                    Economic Resources
                    + Accrual
                </strong>
            </div>

            <div>
                <span>Government-Wide</span>
                <strong>
                    Economic Resources
                    + Accrual
                </strong>
            </div>

        </div>


        <h2>
            Governmental Fund Types
        </h2>

        <div class="formula-box">

            GENERAL
            → Primary Operating Fund

            SPECIAL REVENUE
            → Restricted / Committed Revenue Sources

            CAPITAL PROJECTS
→ Capital Outlays / Acquire or Construct Capital Assets

            DEBT SERVICE
            → Governmental Debt Payments

            PERMANENT
            → Principal Maintained

        </div>


        <h2>
            Proprietary Funds
        </h2>

        <div class="formula-box">

            ENTERPRISE
            → Primarily External Users

            INTERNAL SERVICE
            → Primarily Internal Government Users

        </div>

        <p>
            Both generally use accrual accounting and
            the economic resources measurement focus.
        </p>


        <h2>
            Fiduciary Funds
        </h2>

        <p>
            Fiduciary funds generally account for resources
            held or administered for others.
        </p>

        <div class="key-points">

            <ul>
                <li>
                    Pension and other employee benefit
                    trust funds
                </li>

                <li>
                    Investment trust funds
                </li>

                <li>
                    Private-purpose trust funds
                </li>

                <li>
                    Custodial funds
                </li>
            </ul>

        </div>

        <p>
            Fiduciary activities are generally excluded
            from government-wide financial statements.
        </p>


        <h2>
            Modified Accrual
        </h2>

        <div class="formula-box">

            REVENUE

            =

            MEASURABLE
            +
            AVAILABLE

        </div>

        <p>
            Governmental funds generally report
            <strong>expenditures</strong> rather than expenses.
        </p>


        <h2>
            Capital Assets
        </h2>

        <div class="financial-example">

            <div>
                <span>Governmental Fund</span>
                <strong>
                    Capital Purchase
                    → Expenditure
                </strong>
            </div>

            <div>
                <span>Government-Wide</span>
                <strong>
                    Capitalize Asset
                    → Recognize Depreciation
                </strong>
            </div>

        </div>


        <h2>
            Long-Term Debt
        </h2>

        <div class="financial-example">

            <div>
                <span>Governmental Fund</span>
                <strong>
                    Bond Proceeds
                    → Other Financing Source
                </strong>
            </div>

            <div>
                <span>Government-Wide</span>
                <strong>
                    Bond Proceeds
                    → Long-Term Liability
                </strong>
            </div>

        </div>


        <h2>
            Government-Wide Reporting
        </h2>

        <div class="formula-box">

            GOVERNMENTAL ACTIVITIES
            ✓

            BUSINESS-TYPE ACTIVITIES
            ✓

            FIDUCIARY ACTIVITIES
            ✗

        </div>

        <p>
            Government-wide statements generally include
            capital assets, depreciation, and long-term
            liabilities because they use the economic
            resources measurement focus.
        </p>


        <h2>
            Fund-to-Government-Wide Reconciliation
        </h2>

        <div class="key-points">

            <ul>

                <li>
                    Capital outlay
                    → add back when reconciling operating results.
                </li>

                <li>
                    Depreciation
                    → subtract.
                </li>

                <li>
                    Debt principal payment
                    → add back.
                </li>

                <li>
                    Bond proceeds
                    → remove their governmental-fund
                    financing effect.
                </li>

                <li>
                    Adjust revenue recognition differences
                    caused by modified accrual.
                </li>

            </ul>

        </div>


        <h2>
            Budgetary Accounting
        </h2>

        <div class="formula-box">

            ESTIMATED REVENUES
            =
            Expected Resources

            APPROPRIATIONS
            =
            Authorized Spending

            ENCUMBRANCES
            =
            Commitments

        </div>

        <p>
            Remember:
            <strong>an encumbrance is not an expenditure.</strong>
        </p>


        <h2>
            Integrated Example
        </h2>

        <p>
            A city's General Fund reports the following
            during the year:
        </p>


        <div class="financial-example">

            <div>
                <span>Revenues</span>
                <strong>$1,000,000</strong>
            </div>

            <div>
                <span>Operating Expenditures</span>
                <strong>$700,000</strong>
            </div>

            <div>
                <span>Capital Outlay</span>
                <strong>$120,000</strong>
            </div>

            <div>
                <span>Bond Proceeds</span>
                <strong>$200,000</strong>
            </div>

        </div>


        <h2>
            Governmental Fund Result
        </h2>

        <div class="formula-box">

            $1,000,000 Revenue

            − $700,000 Operating Expenditures

            − $120,000 Capital Outlay

            + $200,000 Other Financing Source

            =

            $380,000 Increase in Fund Balance

        </div>


        <h2>
            Now Convert to Government-Wide
        </h2>

        <p>
            Assume depreciation on governmental capital
            assets for the year is <strong>$30,000</strong>.
        </p>

        <p>
            The $120,000 capital outlay must be reversed
            because government-wide reporting capitalizes
            the asset.
        </p>

        <p>
            The $200,000 bond proceeds must also be removed
            from the operating result because they create
            a liability rather than revenue.
        </p>


        <div class="formula-box">

            $380,000

            + $120,000 Capital Outlay

            − $30,000 Depreciation

            − $200,000 Bond Proceeds

            =

            $270,000
            CHANGE IN NET POSITION

        </div>


        <h2>
            CPA Decision Process
        </h2>

        <div class="key-points">

            <ol>

                <li>
                    Identify the fund or reporting level.
                </li>

                <li>
                    Identify the measurement focus.
                </li>

                <li>
                    Identify the accounting basis.
                </li>

                <li>
                    Decide whether the transaction is a
                    revenue, expenditure, expense, or
                    other financing source/use.
                </li>

                <li>
                    Determine whether capital assets or
                    long-term liabilities belong in that
                    reporting level.
                </li>

            </ol>

        </div>


        <h2>
            Final Memory Map
        </h2>

        <div class="formula-box">

            GOVERNMENTAL
            → MODIFIED ACCRUAL

            PROPRIETARY
            → ACCRUAL

            FIDUCIARY
            → ACCRUAL

            GOVERNMENT-WIDE
            → ACCRUAL


            PURCHASE ORDER
            → ENCUMBRANCE


            CAPITAL OUTLAY

            FUND:
            EXPENDITURE

            GOVERNMENT-WIDE:
            CAPITAL ASSET


            BOND PROCEEDS

            FUND:
            OTHER FINANCING SOURCE

            GOVERNMENT-WIDE:
            LIABILITY

        </div>


        <h2>
            Key Takeaway
        </h2>

        <p>
            Governmental accounting becomes much easier
            when you stop treating every transaction like
            normal business accounting. First identify
            <strong>where the transaction is being reported</strong>,
            then apply the correct accounting model.
        </p>

        `,

        {
            question:
                "A governmental fund reports a $250,000 increase in fund balance. The amount includes $90,000 of capital outlay and $150,000 of bond proceeds. Government-wide depreciation expense is $20,000. Ignoring all other differences, what is the increase in governmental activities' net position?",

            answers: [
                "$170,000",
                "$190,000",
                "$320,000",
                "$470,000"
            ],

            correctAnswer: 0,

            explanation:
                "Start with the $250,000 increase in fund balance, add back the $90,000 capital outlay, subtract $20,000 depreciation, and remove the $150,000 bond proceeds because they create a government-wide liability rather than income. $250,000 + $90,000 − $20,000 − $150,000 = $170,000."
        }

    );

    return;
}

if (
    moduleId === 5 &&
    lessonId === 1
) {

    showFARLessonPage(
        5,
        1,

        "Not-for-Profit Accounting Foundations",

        `

        <h2>
            What Is a Not-for-Profit Organization?
        </h2>

        <p>
            A not-for-profit organization exists primarily
            to accomplish a mission rather than to generate
            profits for owners or shareholders.
        </p>

        <p>
            Examples may include charities, foundations,
            museums, private universities, hospitals,
            religious organizations, and other mission-driven
            organizations.
        </p>


        <h2>
            The Major Reporting Difference
        </h2>

        <p>
            A business entity normally reports
            <strong>stockholders' equity</strong>.
        </p>

        <p>
            A not-for-profit organization instead reports
            <strong>net assets</strong>.
        </p>


        <div class="formula-box">

            NOT-FOR-PROFIT

            ASSETS
            − LIABILITIES

            =

            NET ASSETS

        </div>


        <h2>
            Two Classes of Net Assets
        </h2>

        <p>
            Net assets are presented in two broad classes.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Without Donor Restrictions
                </span>

                <strong>
                    Resources Not Subject to
                    Donor-Imposed Restrictions
                </strong>

            </div>


            <div>

                <span>
                    With Donor Restrictions
                </span>

                <strong>
                    Resources Subject to
                    Donor-Imposed Restrictions
                </strong>

            </div>

        </div>


        <h2>
            Donor Restrictions Matter
        </h2>

        <p>
            One of the most important questions in
            not-for-profit accounting is:
        </p>


        <div class="formula-box">

            DID THE DONOR
            RESTRICT THE RESOURCE?

        </div>


        <p>
            A donor may restrict how or when contributed
            resources can be used.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A donor gives a charity
                <strong>$100,000</strong> and requires
                the money to be used for a new
                children's education program.
            </p>

            <p>
                The contribution is subject to a
                donor-imposed purpose restriction.
            </p>

        </div>


        <h2>
            Unrestricted Example
        </h2>

        <p>
            Assume instead that a donor contributes
            <strong>$40,000</strong> and gives the
            organization discretion over how to use it.
        </p>


        <div class="formula-box">

            NO DONOR RESTRICTION

            →

            NET ASSETS WITHOUT
            DONOR RESTRICTIONS

        </div>


        <h2>
            Contributions
        </h2>

        <p>
            Contributions are an important source of
            support for many not-for-profit organizations.
        </p>

        <p>
            Accounting for a contribution depends on
            factors such as whether the contribution is
            conditional and whether the donor imposed
            restrictions on its use.
        </p>


        <h2>
            Exchange Transaction vs. Contribution
        </h2>

        <p>
            A contribution is generally a
            <strong>nonreciprocal transaction</strong>.
        </p>

        <p>
            This means the donor does not receive
            approximately equal value in exchange for
            the resources transferred.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Contribution
                </span>

                <strong>
                    Nonreciprocal
                </strong>

            </div>


            <div>

                <span>
                    Exchange Transaction
                </span>

                <strong>
                    Reciprocal Exchange of Value
                </strong>

            </div>

        </div>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A donor gives a museum $10,000 and
                receives nothing of comparable value.
            </p>

            <p>
                This is generally a contribution.
            </p>

            <p>
                If a customer instead purchases a
                $50 admission ticket in exchange for
                admission to the museum, that transaction
                generally has an exchange component.
            </p>

        </div>


        <h2>
            Main Financial Statements
        </h2>

        <p>
            A not-for-profit organization's financial
            reporting generally includes:
        </p>


        <div class="key-points">

            <ul>

                <li>
                    Statement of Financial Position
                </li>

                <li>
                    Statement of Activities
                </li>

                <li>
                    Statement of Cash Flows
                </li>

                <li>
                    Information about expenses by
                    nature and function
                </li>

            </ul>

        </div>


        <h2>
            Statement of Financial Position
        </h2>

        <p>
            This statement reports assets, liabilities,
            and net assets.
        </p>


        <div class="formula-box">

            ASSETS

            −

            LIABILITIES

            =

            NET ASSETS

        </div>


        <h2>
            Statement of Activities
        </h2>

        <p>
            The statement of activities reports changes
            in the organization's net assets during
            the reporting period.
        </p>

        <p>
            It presents changes in:
        </p>


        <div class="key-points">

            <ul>

                <li>
                    Net assets without donor restrictions
                </li>

                <li>
                    Net assets with donor restrictions
                </li>

            </ul>

        </div>


        <h2>
            Expenses
        </h2>

        <p>
            Not-for-profit organizations also report
            information about expenses according to
            their <strong>function</strong> and
            <strong>nature</strong>.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Function
                </span>

                <strong>
                    Why the Cost Was Incurred
                </strong>

            </div>


            <div>

                <span>
                    Nature
                </span>

                <strong>
                    What Type of Cost It Was
                </strong>

            </div>

        </div>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                Employee salaries are a
                <strong>natural classification</strong>.
            </p>

            <p>
                Program services and management/general
                activities are examples of
                <strong>functional classifications</strong>.
            </p>

        </div>


        <h2>
            CPA Memory Rule
        </h2>


        <div class="formula-box">

            NFP ACCOUNTING

            NO OWNERS' EQUITY

            →

            NET ASSETS


            TWO CLASSES:

            WITHOUT DONOR RESTRICTIONS

            WITH DONOR RESTRICTIONS

        </div>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    NFPs report net assets rather than
                    stockholders' equity.
                </li>

                <li>
                    Net assets are classified based on
                    donor restrictions.
                </li>

                <li>
                    Contributions are generally
                    nonreciprocal transactions.
                </li>

                <li>
    Donor restrictions affect whether contribution
    revenue increases net assets with donor restrictions
    or net assets without donor restrictions.
</li>

                <li>
                    Expenses are analyzed by both
                    function and nature.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "A donor gives a not-for-profit organization $75,000 and requires the organization to use the contribution exclusively for a specified educational program. How should the contribution generally be classified when recognized?",

            answers: [
                "Net assets without donor restrictions",
                "Net assets with donor restrictions",
                "Stockholders' equity",
                "An exchange transaction liability"
            ],

            correctAnswer: 1,

            explanation:
                "Because the donor requires the contribution to be used for a specified purpose, the contribution is subject to a donor-imposed restriction and generally increases net assets with donor restrictions."
        }

    );

    return;
}

if (
    moduleId === 5 &&
    lessonId === 2
) {

    showFARLessonPage(
        5,
        2,

        "Net Asset Classification",

        `

        <h2>
            The Two Net Asset Classes
        </h2>

        <p>
            Not-for-profit organizations report net assets
            in two broad classes based primarily on whether
            donor-imposed restrictions exist.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Without Donor Restrictions
                </span>

                <strong>
                    No Donor-Imposed Restriction
                </strong>

            </div>


            <div>

                <span>
                    With Donor Restrictions
                </span>

                <strong>
                    Donor-Imposed Restriction Exists
                </strong>

            </div>

        </div>


        <h2>
            Without Donor Restrictions
        </h2>

        <p>
            Net assets without donor restrictions generally
            include resources that are not subject to
            donor-imposed restrictions.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A donor contributes
                <strong>$50,000</strong> and tells the
                organization to use the money wherever
                it is most needed.
            </p>

            <div class="formula-box">

                $50,000

                →

                WITHOUT DONOR RESTRICTIONS

            </div>

        </div>


        <h2>
            Board Designations
        </h2>

        <p>
            An organization's governing board may decide
            to designate resources for a particular purpose.
        </p>

        <p>
            A board designation is an
            <strong>internal decision</strong>, not a
            donor-imposed restriction.
        </p>


        <div class="formula-box">

            BOARD DESIGNATION

            ≠

            DONOR RESTRICTION

        </div>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                The board designates $100,000 of otherwise
                unrestricted resources for a future building
                project.
            </p>

            <p>
                The amount generally remains within
                <strong>net assets without donor restrictions</strong>.
            </p>

        </div>


        <h2>
            With Donor Restrictions
        </h2>

        <p>
            Resources are generally classified as
            with donor restrictions when a donor imposes
            a restriction on their use or timing.
        </p>


        <h2>
            Purpose Restriction
        </h2>

        <p>
            A donor may require that contributed resources
            be used for a specific program or activity.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A donor contributes
                <strong>$80,000</strong> specifically
                for a scholarship program.
            </p>

            <div class="formula-box">

                SPECIFIC DONOR PURPOSE

                →

                WITH DONOR RESTRICTIONS

            </div>

        </div>


        <h2>
            Time Restriction
        </h2>

        <p>
            A donor may specify that resources cannot
            be used until a future period.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A donor contributes $60,000 in December
                and requires that the organization use
                the contribution during the following year.
            </p>

            <p>
                The contribution is subject to a
                donor-imposed time restriction.
            </p>

        </div>


        <h2>
            Restrictions That Do Not Expire
            Through Spending
        </h2>

        <p>
            Some donor restrictions require contributed
            resources to be maintained according to the
            donor's instructions.
        </p>

        <p>
            A common example is a donor-restricted
            endowment in which the original gift must
            generally be maintained subject to the
            donor's stipulations.
        </p>


        <div class="formula-box">

            DONOR-RESTRICTED ENDOWMENT

            →

            NET ASSETS WITH
            DONOR RESTRICTIONS

        </div>


        <h2>
            Release From Restriction
        </h2>

        <p>
            A donor restriction may be satisfied when
            the required purpose is accomplished or
            the required time period passes.
        </p>

        <p>
            When that happens, the organization generally
            reports a release from donor restrictions.
        </p>


        <div class="formula-box">

            RESTRICTION SATISFIED

            →

            RELEASE FROM RESTRICTION

            →

            WITH DONOR RESTRICTIONS
            DECREASES

            WITHOUT DONOR RESTRICTIONS
            INCREASES

        </div>


        <h2>
            Example — Purpose Restriction Released
        </h2>

        <p>
            A donor previously contributed
            <strong>$90,000</strong> specifically for
            educational programs.
        </p>

        <p>
            During the current year, the organization
            incurs <strong>$90,000</strong> of qualifying
            educational program costs and satisfies the
            donor restriction.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Net Assets With Donor Restrictions
                </span>

                <strong>
                    − $90,000
                </strong>

            </div>


            <div>

                <span>
                    Net Assets Without Donor Restrictions
                </span>

                <strong>
                    + $90,000
                </strong>

            </div>

        </div>


        <p>
            The release changes the classification of
            net assets; it does not create a second
            contribution.
        </p>


        <h2>
            The Donor Controls the Classification
        </h2>

        <p>
            Management intentions alone generally do not
            create donor restrictions.
        </p>

        <p>
            The key question is whether the restriction
            came from the <strong>donor</strong>.
        </p>


        <div class="formula-box">

            ASK:

            WHO CREATED THE RESTRICTION?


            DONOR
            →

            WITH DONOR RESTRICTIONS


            BOARD / MANAGEMENT
            →

            GENERALLY WITHOUT
            DONOR RESTRICTIONS

        </div>


        <h2>
            Quick Classification Practice
        </h2>


        <div class="financial-example">

            <div>

                <span>
                    Donor: "Use this for cancer research."
                </span>

                <strong>
                    WITH RESTRICTIONS
                </strong>

            </div>


            <div>

                <span>
                    Donor: "Use this however you need."
                </span>

                <strong>
                    WITHOUT RESTRICTIONS
                </strong>

            </div>


            <div>

                <span>
                    Board reserves money for a building.
                </span>

                <strong>
                    WITHOUT RESTRICTIONS
                </strong>

            </div>


            <div>

                <span>
                    Donor: "Do not use until next year."
                </span>

                <strong>
                    WITH RESTRICTIONS
                </strong>

            </div>

        </div>


        <h2>
            CPA Memory Rule
        </h2>


        <div class="formula-box">

            DONOR SAYS WHEN / WHY

            →

            WITH DONOR RESTRICTIONS


            ORGANIZATION DECIDES WHEN / WHY

            →

            WITHOUT DONOR RESTRICTIONS

        </div>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    NFP net assets have two broad classes.
                </li>

                <li>
                    Donor-imposed purpose and time
                    restrictions generally create net assets
                    with donor restrictions.
                </li>

                <li>
                    Board designations generally do not
                    create donor-restricted net assets.
                </li>

                <li>
                    Satisfying a donor restriction may
                    result in a release from restriction.
                </li>

                <li>
                    Always identify who imposed the
                    restriction.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "A not-for-profit organization's board designates $200,000 of unrestricted resources for construction of a future headquarters. No donor imposed this restriction. How should the $200,000 generally be classified?",

            answers: [
                "Net assets with donor restrictions",
                "A liability",
                "Net assets without donor restrictions",
                "Contribution revenue with donor restrictions"
            ],

            correctAnswer: 2,

            explanation:
                "A board designation is an internal restriction rather than a donor-imposed restriction. Therefore, the resources generally remain classified as net assets without donor restrictions."
        }

    );

    return;
}

if (
    moduleId === 5 &&
    lessonId === 3
) {

    showFARLessonPage(
        5,
        3,

        "Contributions & Donor Restrictions",

        `

        <h2>
            What Is a Contribution?
        </h2>

        <p>
            A contribution is generally a voluntary,
            nonreciprocal transfer of assets from a donor
            to a not-for-profit organization.
        </p>

        <div class="formula-box">

            CONTRIBUTION

            =

            NONRECIPROCAL TRANSFER

        </div>


        <h2>
            Contribution vs. Exchange Transaction
        </h2>

        <p>
            The key question is whether the resource
            provider receives approximately equal value
            in return.
        </p>

        <div class="financial-example">

            <div>

                <span>
                    Contribution
                </span>

                <strong>
                    Donor Does Not Receive
                    Commensurate Value
                </strong>

            </div>

            <div>

                <span>
                    Exchange Transaction
                </span>

                <strong>
                    Each Party Receives
                    Commensurate Value
                </strong>

            </div>

        </div>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A supporter gives a charity
                <strong>$25,000</strong> and receives
                nothing of comparable value.
            </p>

            <p>
                This is generally a contribution.
            </p>

        </div>


        <h2>
            Unconditional Contributions
        </h2>

        <p>
            An unconditional contribution is generally
            recognized when the contribution is made
            or promised, subject to the applicable
            recognition requirements.
        </p>

        <p>
            After determining that a contribution is
            unconditional, determine whether the donor
            imposed a restriction.
        </p>


        <div class="formula-box">

            STEP 1

            IS IT A CONTRIBUTION?


            STEP 2

            IS IT CONDITIONAL?


            STEP 3

            DOES IT HAVE A
            DONOR RESTRICTION?

        </div>


        <h2>
            Contribution Without Donor Restrictions
        </h2>

        <p>
            Assume a donor gives an organization
            <strong>$60,000</strong> and allows the
            organization to use the money for any
            appropriate purpose.
        </p>


        <div class="formula-box">

            $60,000 CONTRIBUTION

            →

            WITHOUT DONOR RESTRICTIONS

        </div>


        <h2>
            Contribution With a Purpose Restriction
        </h2>

        <p>
            Assume a donor contributes
            <strong>$120,000</strong> and requires that
            the funds be used for a literacy program.
        </p>


        <div class="formula-box">

            DONOR SPECIFIES PURPOSE

            →

            WITH DONOR RESTRICTIONS

        </div>


        <h2>
            Contribution With a Time Restriction
        </h2>

        <p>
            A donor may also restrict when the organization
            can use contributed resources.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                On December 1, a donor makes an
                unconditional promise to give
                <strong>$50,000</strong> that is payable
                in the following year.
            </p>

            <p>
                The promise may carry a donor-imposed
                time restriction until the future period.
            </p>

        </div>


        <h2>
            Restrictions Affect Classification
        </h2>

        <p>
            A donor restriction generally affects
            <strong>which net asset class</strong>
            receives the contribution.
        </p>

        <p>
            A restriction does not necessarily mean
            contribution revenue should wait until the
            restriction is satisfied.
        </p>


        <div class="formula-box">

            UNCONDITIONAL CONTRIBUTION

            +

            DONOR RESTRICTION

            →

            RECOGNIZE IN
            NET ASSETS WITH
            DONOR RESTRICTIONS

        </div>


        <h2>
            Restriction vs. Condition
        </h2>

        <p>
            These concepts must not be confused.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Restriction
                </span>

                <strong>
                    Limits How or When
                    Resources May Be Used
                </strong>

            </div>


            <div>

                <span>
                    Condition
                </span>

                <strong>
                    Must Generally Be Overcome
                    Before Contribution Revenue
                    Is Recognized
                </strong>

            </div>

        </div>


        <div class="key-points">

            <h3>
                Important
            </h3>

            <p>
                A donor restriction and a donor condition
                are not the same thing.
            </p>

        </div>


        <h2>
            Release From Restriction
        </h2>

        <p>
            When the organization satisfies a donor's
            purpose restriction or a time restriction
            expires, the related amount is generally
            reclassified from net assets with donor
            restrictions to net assets without donor
            restrictions.
        </p>


        <div class="formula-box">

            RESTRICTION SATISFIED

            WITH DONOR RESTRICTIONS
            ↓

            WITHOUT DONOR RESTRICTIONS
            ↑

        </div>


        <h2>
            Example — Release
        </h2>

        <p>
            A charity previously received
            <strong>$100,000</strong> restricted by the
            donor for medical research.
        </p>

        <p>
            During the current year, the charity incurs
            <strong>$100,000</strong> of qualifying
            medical research expenses.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    With Donor Restrictions
                </span>

                <strong>
                    − $100,000
                </strong>

            </div>

            <div>

                <span>
                    Without Donor Restrictions
                </span>

                <strong>
                    + $100,000
                </strong>

            </div>

        </div>


        <p>
            This is a release from restriction.
            It is not a second contribution.
        </p>


        <h2>
            Donor Intent Matters
        </h2>

        <p>
            When analyzing a CPA question, carefully
            identify the donor's instructions.
        </p>


        <div class="key-points">

            <ul>

                <li>
                    "Use wherever needed"
                    → generally without donor restrictions.
                </li>

                <li>
                    "Use for scholarships"
                    → purpose restriction.
                </li>

                <li>
                    "Use next year"
                    → time restriction.
                </li>

                <li>
                    "Maintain the principal"
                    → donor restriction associated
                    with an endowment.
                </li>

            </ul>

        </div>


        <h2>
            Numerical Example
        </h2>

        <p>
            During the year, an NFP receives:
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Unrestricted Contribution
                </span>

                <strong>
                    $70,000
                </strong>

            </div>

            <div>

                <span>
                    Donor-Restricted Contribution
                </span>

                <strong>
                    $130,000
                </strong>

            </div>

        </div>


        <div class="formula-box">

            TOTAL CONTRIBUTIONS

            $70,000
            +
            $130,000

            =

            $200,000

        </div>

        <p>
            The organization recognizes $200,000 of
            contributions, but the amounts are reported
            in different net asset classes based on
            the donor restrictions.
        </p>


        <h2>
            CPA Memory Rule
        </h2>

        <div class="formula-box">

            RESTRICTION
            =
            RECOGNIZE,
            BUT CLASSIFY


            CONDITION
=
WAIT UNTIL
THE BARRIER IS
SUBSTANTIALLY OVERCOME

        </div>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    Contributions are generally
                    nonreciprocal.
                </li>

                <li>
                    Unconditional contributions are
                    generally recognized when made
                    or promised.
                </li>

                <li>
                    Donor restrictions affect net
                    asset classification.
                </li>

                <li>
                    Restrictions and conditions are
                    different concepts.
                </li>

                <li>
                    Satisfying a restriction generally
                    creates a release from restriction.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "A donor unconditionally contributes $90,000 to an NFP and requires that the funds be used only for its youth education program. At the date of contribution, how should the NFP generally report the contribution?",

            answers: [
                "Do not recognize revenue until the money is spent",
                "Recognize $90,000 in net assets without donor restrictions",
                "Recognize $90,000 in net assets with donor restrictions",
                "Record a $90,000 liability"
            ],

            correctAnswer: 2,

            explanation:
                "The contribution is unconditional, so it is generally recognized when made. Because the donor imposed a purpose restriction, it is reported within net assets with donor restrictions."
        }

    );

    return;
}

if (
    moduleId === 5 &&
    lessonId === 4
) {

    showFARLessonPage(
        5,
        4,

        "Conditional Contributions",

        `

        <h2>
            What Is a Conditional Contribution?
        </h2>

        <p>
            A contribution is conditional when the
            agreement includes both:
        </p>


        <div class="key-points">

            <ul>

                <li>
                    A <strong>barrier</strong> that the
                    recipient must overcome.
                </li>

                <li>
                    A <strong>right of return</strong>
                    of transferred assets or a
                    <strong>right of release</strong>
                    from the donor's obligation.
                </li>

            </ul>

        </div>


        <div class="formula-box">

            BARRIER

            +

            RIGHT OF RETURN
            OR RIGHT OF RELEASE

            =

            CONDITIONAL CONTRIBUTION

        </div>


        <h2>
            Why Conditions Matter
        </h2>

        <p>
    A conditional contribution is generally
    not recognized as contribution revenue
    until the barrier has been substantially
    overcome.
</p>


        <div class="formula-box">

            BARRIER NOT YET
SUBSTANTIALLY OVERCOME

            →

            NO CONTRIBUTION REVENUE YET


            BARRIER SUBSTANTIALLY
OVERCOME

            →

            RECOGNIZE CONTRIBUTION

        </div>


        <h2>
            Example — Performance Barrier
        </h2>

        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A foundation promises an NFP
                <strong>$300,000</strong> if the organization
                successfully provides job training to
                <strong>500 participants</strong>.
            </p>

            <p>
                The agreement also states that the foundation
                is released from its promise if the required
                number of participants is not served.
            </p>

        </div>


        <p>
            The requirement to serve 500 participants
            represents a measurable performance barrier.
        </p>

        <p>
            The donor also has a right of release.
        </p>


        <div class="formula-box">

            PERFORMANCE BARRIER

            +

            RIGHT OF RELEASE

            →

            CONDITIONAL

        </div>


        <h2>
            Cash Received Before Condition Is Met
        </h2>

        <p>
            Sometimes the donor transfers cash before
            the recipient has satisfied the condition.
        </p>

        <p>
            If the contribution remains conditional,
            the recipient generally does not immediately
            recognize contribution revenue.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                An NFP receives <strong>$120,000</strong>
                in advance under a conditional grant.
            </p>

            <p>
                The agreement requires the NFP to achieve
                a specified measurable outcome, and the
                donor can require repayment if the
                condition is not met.
            </p>

        </div>


        <div class="formula-box">

            CASH RECEIVED
            $120,000

            CONDITION NOT YET MET

            →

            LIABILITY
            $120,000

            NOT CONTRIBUTION REVENUE

        </div>


        <h2>
            When the Condition Is Met
        </h2>

        <p>
            Once the qualifying barrier has been substantially overcome, the contribution can generally be recognized.
        </p>


        <div class="formula-box">

            BARRIER SUBSTANTIALLY OVERCOME

            →

            LIABILITY ↓

            CONTRIBUTION REVENUE ↑

        </div>


        <h2>
            Condition vs. Restriction
        </h2>

        <p>
            This distinction is one of the most important
            concepts in NFP contribution accounting.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Condition
                </span>

                <strong>
                    Affects Whether Revenue
                    Is Recognized Yet
                </strong>

            </div>


            <div>

                <span>
                    Restriction
                </span>

                <strong>
                    Affects How Recognized
                    Resources May Be Used
                </strong>

            </div>

        </div>


        <h2>
            Restriction Example
        </h2>

        <p>
            A donor gives an NFP
            <strong>$75,000</strong> and requires the
            money to be used for scholarships.
        </p>

        <p>
            Assume there is no barrier that must be
            overcome and no right of return.
        </p>


        <div class="formula-box">

            PURPOSE RESTRICTION

            BUT NO CONDITION

            →

            RECOGNIZE CONTRIBUTION

            WITH DONOR RESTRICTIONS

        </div>


        <h2>
            Condition Example
        </h2>

        <p>
            A donor promises <strong>$75,000</strong>
            only if the NFP successfully enrolls
            200 students in a specified program.
        </p>

        <p>
            The donor is released from the promise
            if the target is not achieved.
        </p>


        <div class="formula-box">

            BARRIER

            +

            RIGHT OF RELEASE

            →

            WAIT TO RECOGNIZE

        </div>


        <h2>
            Some Indicators of a Barrier
        </h2>

        <p>
            A barrier may involve requirements such as:
        </p>


        <div class="key-points">

            <ul>

                <li>
                    Achieving a measurable outcome.
                </li>

                <li>
                    Achieving a specified level of service.
                </li>

                <li>
                    Meeting a matching requirement.
                </li>

                <li>
                    Incurring qualifying expenditures.
                </li>

                <li>
                    Following specific requirements that
                    are related to the purpose of the
                    agreement.
                </li>

            </ul>

        </div>


        <h2>
            Matching Requirement Example
        </h2>

        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A donor promises to contribute
                <strong>$100,000</strong> if the NFP
                first raises <strong>$100,000</strong>
                from other donors.
            </p>

            <p>
                The donor is released from the promise
                if the matching requirement is not met.
            </p>

        </div>


        <div class="formula-box">

            MATCHING REQUIREMENT

            +

            RIGHT OF RELEASE

            →

            CONDITIONAL CONTRIBUTION

        </div>


        <h2>
            Administrative Requirements
        </h2>

        <p>
            Not every requirement automatically creates
            a substantive barrier.
        </p>

        <p>
            Routine administrative or reporting
            requirements alone may not be enough to make
            an otherwise unconditional contribution
            conditional.
        </p>


        <h2>
            Conditional AND Restricted
        </h2>

        <p>
            A contribution can contain both a
            <strong>condition</strong> and a
            <strong>donor restriction</strong>.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A donor promises $200,000 if an NFP
                serves 1,000 families.
            </p>

            <p>
                Once earned, the money must be used
                specifically for food assistance.
            </p>

        </div>


        <div class="formula-box">

            FIRST:

            SATISFY CONDITION

            ↓

            RECOGNIZE CONTRIBUTION


            THEN:

            APPLY DONOR RESTRICTION

            ↓

            WITH DONOR RESTRICTIONS

        </div>


        <h2>
            CPA Decision Process
        </h2>


        <div class="formula-box">

            ASK #1

            IS THERE A BARRIER?


            ASK #2

            IS THERE A RIGHT OF
            RETURN OR RELEASE?


            IF BOTH EXIST:

            CONDITIONAL


            ↓


            WAIT UNTIL BARRIER IS
SUBSTANTIALLY OVERCOME


            ↓


            THEN DETERMINE
            DONOR RESTRICTION

        </div>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    Conditional contributions generally
                    contain a barrier and a right of
                    return or release.
                </li>

                <li>
                   Contribution revenue generally waits until the barrier is substantially overcome.
                </li>

                <li>
                    Cash received before a condition is met
                    may generally be reported as a liability.
                </li>

                <li>
                    A donor restriction is different from
                    a donor condition.
                </li>

                <li>
                    A contribution may be both conditional
                    and donor-restricted.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "A donor transfers $150,000 to an NFP. The NFP must first achieve a specified measurable performance target, and the agreement requires the money to be returned if the target is not achieved. The target has not yet been met. How should the NFP generally report the $150,000 received?",

            answers: [
    "A liability until the barrier is substantially overcome",
    "Contribution revenue with donor restrictions",
    "An increase in permanently restricted equity",
    "Contribution revenue without donor restrictions"
],

correctAnswer: 0,

            explanation:
                "The measurable performance barrier together with the donor's right of return makes the contribution conditional. Because cash was received before the barrier was substantially overcome, the amount is generally reported as a liability rather than contribution revenue."
        }

    );

    return;
}

if (
    moduleId === 5 &&
    lessonId === 5
) {

    showFARLessonPage(
        5,
        5,

        "Not-for-Profit Financial Statements",

        `

        <h2>
            Core NFP Financial Statements
        </h2>

        <p>
            A not-for-profit organization generally presents
            financial statements designed to show its
            financial position, changes in net assets,
            and cash flows.
        </p>


        <div class="key-points">

            <ul>

                <li>
                    Statement of Financial Position
                </li>

                <li>
                    Statement of Activities
                </li>

                <li>
                    Statement of Cash Flows
                </li>

                <li>
                    Analysis of expenses by
                    function and nature
                </li>

            </ul>

        </div>


        <h2>
            Statement of Financial Position
        </h2>

        <p>
            The statement of financial position is similar
            in purpose to a business entity's balance sheet.
        </p>

        <p>
            It reports:
        </p>


        <div class="formula-box">

            ASSETS

            −

            LIABILITIES

            =

            NET ASSETS

        </div>


        <p>
            Net assets are presented using the two
            classifications we already learned.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Net Assets Without
                    Donor Restrictions
                </span>

                <strong>
                    No Donor-Imposed Restriction
                </strong>

            </div>


            <div>

                <span>
                    Net Assets With
                    Donor Restrictions
                </span>

                <strong>
                    Donor-Imposed Restriction
                </strong>

            </div>

        </div>


        <h2>
            Example — Financial Position
        </h2>

        <p>
            Assume an NFP reports:
        </p>


        <div class="financial-example">

            <div>
                <span>Total Assets</span>
                <strong>$900,000</strong>
            </div>

            <div>
                <span>Total Liabilities</span>
                <strong>$260,000</strong>
            </div>

        </div>


        <div class="formula-box">

            $900,000

            − $260,000

            =

            $640,000
            TOTAL NET ASSETS

        </div>


        <h2>
            Statement of Activities
        </h2>

        <p>
            The statement of activities reports the
            organization's revenues, gains, expenses,
            losses, and other changes in net assets
            during the reporting period.
        </p>


        <div class="formula-box">

            BEGINNING NET ASSETS

            +

            CHANGE IN NET ASSETS

            =

            ENDING NET ASSETS

        </div>


        <h2>
            Changes in Both Net Asset Classes
        </h2>

        <p>
            The statement of activities reports changes
            separately for:
        </p>


        <div class="key-points">

            <ul>

                <li>
                    Net assets without donor restrictions
                </li>

                <li>
                    Net assets with donor restrictions
                </li>

            </ul>

        </div>


        <h2>
            Contribution Example
        </h2>

        <p>
            During the year, an NFP receives:
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Contribution With No
                    Donor Restriction
                </span>

                <strong>
                    $80,000
                </strong>

            </div>


            <div>

                <span>
                    Contribution Restricted
                    for Scholarships
                </span>

                <strong>
                    $120,000
                </strong>

            </div>

        </div>


        <p>
            Both amounts affect the statement of
            activities, but they affect different
            net asset classes.
        </p>


        <div class="formula-box">

            $80,000

            →

            WITHOUT DONOR RESTRICTIONS


            $120,000

            →

            WITH DONOR RESTRICTIONS

        </div>


        <h2>
            Expenses
        </h2>

        <p>
            Expenses are generally reported as decreases
            in <strong>net assets without donor restrictions</strong>.
        </p>

        <p>
            When donor-restricted resources are used for
            their intended purpose, the related restriction
            may be released.
        </p>


        <div class="formula-box">

            EXPENSES

            →

            GENERALLY DECREASE

            NET ASSETS WITHOUT
            DONOR RESTRICTIONS

        </div>


        <h2>
            Statement of Cash Flows
        </h2>

        <p>
            The statement of cash flows explains changes
            in cash and cash equivalents during the period.
        </p>

        <p>
            Cash flows are generally classified among
            operating, investing, and financing activities.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Operating
                </span>

                <strong>
                    Day-to-Day Activities
                </strong>

            </div>


            <div>

                <span>
                    Investing
                </span>

                <strong>
                    Investments and
                    Long-Lived Assets
                </strong>

            </div>


            <div>

                <span>
                    Financing
                </span>

                <strong>
                    Certain Financing
                    Activities
                </strong>

            </div>

        </div>


        <h2>
            Donor-Restricted Cash Flows
        </h2>

        <p>
            Be careful with contributions containing
            donor restrictions.
        </p>

        <p>
            The cash-flow classification depends on the
            nature and donor stipulations associated
            with the contribution.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A donor contributes cash specifically
                restricted for the acquisition of a
                long-lived asset.
            </p>

            <p>
                The donor restriction can affect how
                the cash receipt is classified in the
                statement of cash flows.
            </p>

        </div>


        <h2>
            Expenses by Function
        </h2>

        <p>
            Functional classification explains
            <strong>why</strong> resources were consumed.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Program Services
                </span>

                <strong>
                    Mission-Related Activities
                </strong>

            </div>


            <div>

                <span>
                    Management & General
                </span>

                <strong>
                    Supporting Activity
                </strong>

            </div>


            <div>

                <span>
                    Fundraising
                </span>

                <strong>
                    Supporting Activity
                </strong>

            </div>

        </div>


        <h2>
            Expenses by Nature
        </h2>

        <p>
            Natural classification explains
            <strong>what type of expense</strong>
            was incurred.
        </p>


        <div class="key-points">

            <ul>

                <li>
                    Salaries
                </li>

                <li>
                    Rent
                </li>

                <li>
                    Utilities
                </li>

                <li>
                    Supplies
                </li>

                <li>
                    Depreciation
                </li>

            </ul>

        </div>


        <h2>
            Function vs. Nature
        </h2>


        <div class="formula-box">

            FUNCTION

            =

            WHY WAS THE MONEY SPENT?


            NATURE

            =

            WHAT TYPE OF COST WAS IT?

        </div>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A social-service charity pays
                <strong>$70,000 of salaries</strong>
                to employees working directly in
                its food-assistance program.
            </p>


            <div class="financial-example">

                <div>

                    <span>
                        Nature
                    </span>

                    <strong>
                        Salaries
                    </strong>

                </div>


                <div>

                    <span>
                        Function
                    </span>

                    <strong>
                        Program Services
                    </strong>

                </div>

            </div>

        </div>


        <h2>
            Statement Relationships
        </h2>


        <div class="formula-box">

            STATEMENT OF
            FINANCIAL POSITION

            →

            WHERE THE NFP
            STANDS


            STATEMENT OF
            ACTIVITIES

            →

            HOW NET ASSETS
            CHANGED


            STATEMENT OF
            CASH FLOWS

            →

            WHY CASH CHANGED

        </div>


        <h2>
            CPA Memory Rule
        </h2>


        <div class="formula-box">

            POSITION

ASSETS
=
LIABILITIES
+
NET ASSETS


            ACTIVITIES

            = CHANGE
            IN NET ASSETS


            CASH FLOWS

            = CHANGE
            IN CASH

        </div>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    The statement of financial position
                    reports assets, liabilities, and
                    net assets.
                </li>

                <li>
                    The statement of activities reports
                    changes in net assets.
                </li>

                <li>
                    NFPs distinguish net assets with and
                    without donor restrictions.
                </li>

                <li>
                    Expenses generally decrease net assets
                    without donor restrictions.
                </li>

                <li>
                    Expense information is analyzed by
                    both function and nature.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "Which financial statement of a not-for-profit organization primarily reports revenues, expenses, gains, losses, and the resulting changes in net assets during a period?",

            answers: [
                "Statement of Financial Position",
                "Statement of Cash Flows",
                "Statement of Functional Expenses only",
                "Statement of Activities"
            ],

            correctAnswer: 3,

            explanation:
                "The statement of activities reports revenues, expenses, gains, losses, and other changes that explain the change in the NFP's net assets during the reporting period."
        }

    );

    return;
}

if (
    moduleId === 5 &&
    lessonId === 6
) {

    showFARLessonPage(
        5,
        6,

        "Expenses by Function & Nature",

        `

        <h2>
            Why NFP Expense Reporting Is Different
        </h2>

        <p>
            Not-for-profit organizations report expenses
            in a way that helps users understand both:
        </p>


        <div class="formula-box">

            FUNCTION
            =
            WHY THE COST WAS INCURRED


            NATURE
            =
            WHAT TYPE OF COST IT WAS

        </div>


        <h2>
            Functional Classification
        </h2>

        <p>
            Functional classification groups expenses
            according to the purpose they serve.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Program Services
                </span>

                <strong>
                    Activities That Directly
                    Carry Out the NFP's Mission
                </strong>

            </div>


            <div>

                <span>
                    Management & General
                </span>

                <strong>
                    Administrative and
                    Overall Support Activities
                </strong>

            </div>


            <div>

                <span>
                    Fundraising
                </span>

                <strong>
                    Activities Designed
                    to Obtain Contributions
                </strong>

            </div>

        </div>


        <h2>
            Program Services
        </h2>

        <p>
            Program services are activities that directly
            accomplish the organization's mission.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A food-assistance charity pays employees
                who distribute meals directly to families.
            </p>

            <p>
                Those salary costs are generally classified
                functionally as
                <strong>program service expense</strong>.
            </p>

        </div>


        <h2>
            Management & General
        </h2>

        <p>
            Management and general expenses support the
            overall administration and operation of the NFP
            rather than one specific program.
        </p>


        <div class="key-points">

            <h3>
                Examples
            </h3>

            <ul>

                <li>
                    General accounting
                </li>

                <li>
                    Executive administration
                </li>

                <li>
                    Human resources
                </li>

                <li>
                    General legal services
                </li>

            </ul>

        </div>


        <h2>
            Fundraising
        </h2>

        <p>
            Fundraising expenses are costs incurred to
            encourage donors to contribute resources
            to the organization.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                An NFP pays $15,000 to organize a donor
                solicitation campaign.
            </p>

            <p>
                That amount is generally classified as a
                <strong>fundraising expense</strong>.
            </p>

        </div>


        <h2>
            Natural Classification
        </h2>

        <p>
            Natural classification describes the
            economic type of expense.
        </p>


        <div class="financial-example">

            <div>
                <span>Salaries</span>
                <strong>Natural Classification</strong>
            </div>

            <div>
                <span>Rent</span>
                <strong>Natural Classification</strong>
            </div>

            <div>
                <span>Utilities</span>
                <strong>Natural Classification</strong>
            </div>

            <div>
                <span>Depreciation</span>
                <strong>Natural Classification</strong>
            </div>

            <div>
                <span>Supplies</span>
                <strong>Natural Classification</strong>
            </div>

        </div>


        <h2>
            One Expense Can Have Both
        </h2>

        <p>
            The same cost can be classified by both its
            nature and its function.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                An employee earns $50,000 working entirely
                in an educational program.
            </p>


            <div class="financial-example">

                <div>

                    <span>
                        Nature
                    </span>

                    <strong>
                        Salaries
                    </strong>

                </div>


                <div>

                    <span>
                        Function
                    </span>

                    <strong>
                        Program Services
                    </strong>

                </div>

            </div>

        </div>


        <h2>
            Allocating Shared Costs
        </h2>

        <p>
            Some expenses benefit more than one function.
            In that case, the organization generally
            allocates the costs using a reasonable and
            appropriate method.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A building is used:
            </p>

            <ul>

                <li>
                    70% for program services
                </li>

                <li>
                    20% for management and general
                </li>

                <li>
                    10% for fundraising
                </li>

            </ul>

            <p>
                Annual rent is
                <strong>$100,000</strong>.
            </p>


            <div class="formula-box">

                Program
                =
                $70,000


                Management & General
                =
                $20,000


                Fundraising
                =
                $10,000

            </div>

        </div>


        <h2>
            Supporting Services
        </h2>

        <p>
            Management and general and fundraising are
            commonly grouped as
            <strong>supporting services</strong>.
        </p>


        <div class="formula-box">

            PROGRAM SERVICES

            ≠

            SUPPORTING SERVICES


            SUPPORTING SERVICES
            GENERALLY INCLUDE:

            MANAGEMENT & GENERAL
            +
            FUNDRAISING

        </div>


        <h2>
            Why This Matters
        </h2>

        <p>
            Expense classification helps financial
            statement users evaluate how an NFP uses
            its resources.
        </p>

        <p>
            For example, users may want to know how much
            spending goes directly toward mission-related
            programs versus administrative or fundraising
            activities.
        </p>


        <h2>
            Statement of Functional Expenses
        </h2>

        <p>
            An NFP must present information about expenses
            by both nature and function in one location.
        </p>

        <p>
            This information may be presented in the
            financial statements, in the notes, or through
            a separate statement of functional expenses,
            depending on presentation.
        </p>


        <h2>
            CPA Classification Example
        </h2>

        <p>
            A health charity incurs:
        </p>


        <div class="financial-example">

            <div>
                <span>Medical Staff Salaries</span>
                <strong>$200,000</strong>
            </div>

            <div>
                <span>Accounting Staff Salaries</span>
                <strong>$60,000</strong>
            </div>

            <div>
                <span>Fundraising Campaign Costs</span>
                <strong>$40,000</strong>
            </div>

        </div>


        <div class="formula-box">

            FUNCTIONALLY:


            PROGRAM SERVICES
            =
            $200,000


            MANAGEMENT & GENERAL
            =
            $60,000


            FUNDRAISING
            =
            $40,000

        </div>


        <p>
            From a natural classification perspective,
            the first two amounts are both salary expense,
            even though their functional classifications
            differ.
        </p>


        <h2>
            CPA Memory Rule
        </h2>


        <div class="formula-box">

            FUNCTION
            =
            PURPOSE


            NATURE
            =
            TYPE


            PROGRAM
            =
            MISSION


            MANAGEMENT + FUNDRAISING
            =
            SUPPORT

        </div>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    NFP expenses are analyzed by both
                    function and nature.
                </li>

                <li>
                    Program services directly support
                    the organization's mission.
                </li>

                <li>
                    Management and general and fundraising
                    are supporting services.
                </li>

                <li>
                    Natural classifications describe the
                    type of cost.
                </li>

                <li>
                    Shared costs should be allocated using
                    a reasonable method.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "An NFP pays $80,000 of salaries to employees who work directly in its primary charitable program. Which combination best describes this expense?",

            answers: [
                "Nature: Program services; Function: Salaries",
                "Nature: Salaries; Function: Management and general",
                "Nature: Fundraising; Function: Salaries",
                "Nature: Salaries; Function: Program services"
            ],

            correctAnswer: 3,

            explanation:
                "Salaries describe the natural classification, while program services describe the functional classification because the employees work directly on the NFP's mission-related program."
        }

    );

    return;
}

if (
    moduleId === 5 &&
    lessonId === 7
) {

    showFARLessonPage(
        5,
        7,

        "Donated Services & Noncash Contributions",

        `

        <h2>
            Donated Services
        </h2>

        <p>
            Not-for-profit organizations often receive
            services from volunteers.
        </p>

        <p>
            However, donated services are not automatically
            recognized as contribution revenue and expense.
        </p>


        <h2>
            When Are Donated Services Recognized?
        </h2>

        <p>
            Donated services are generally recognized
            when they meet certain criteria.
        </p>


        <div class="key-points">

            <ul>

                <li>
                    The services create or enhance
                    a nonfinancial asset.
                </li>

                <li>
                    OR the services require specialized
                    skills, are provided by individuals
                    possessing those skills, and would
                    typically need to be purchased
                    if they were not donated.
                </li>

            </ul>

        </div>


        <div class="formula-box">

            DONATED SERVICE

            RECOGNIZE IF:

            CREATES / ENHANCES
            NONFINANCIAL ASSET

            OR

            SPECIALIZED SKILL
            + PROVIDED BY SKILLED PERSON
            + OTHERWISE WOULD BE PURCHASED

        </div>


        <h2>
            Specialized Skills
        </h2>

        <p>
            Specialized skills may include services
            provided by professionals such as:
        </p>


        <div class="financial-example">

            <div>
                <span>Lawyers</span>
                <strong>Specialized Skill</strong>
            </div>

            <div>
                <span>Accountants</span>
                <strong>Specialized Skill</strong>
            </div>

            <div>
                <span>Doctors</span>
                <strong>Specialized Skill</strong>
            </div>

            <div>
                <span>Electricians</span>
                <strong>Specialized Skill</strong>
            </div>

        </div>


        <h2>
            Example — Donated Legal Services
        </h2>

        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                An attorney donates legal services
                with a fair value of
                <strong>$12,000</strong>.
            </p>

            <p>
                The NFP would otherwise have hired
                an attorney to perform the work.
            </p>

        </div>


        <div class="formula-box">

            Contribution Revenue
            =
            $12,000

            Legal Expense
            =
            $12,000

        </div>


        <p>
            The NFP recognizes both contribution revenue
            and the related expense.
        </p>


        <h2>
            Example — Volunteer Reception Work
        </h2>

        <p>
            Assume volunteers provide general reception
            and clerical support.
        </p>

        <p>
            If the services do not require specialized
            skills and do not create or enhance a
            nonfinancial asset, they generally are
            <strong>not recognized</strong>.
        </p>


        <div class="formula-box">

            GENERAL VOLUNTEER SERVICE

            DOES NOT MEET CRITERIA

            →

            NO RECOGNITION

        </div>


        <h2>
            Services That Create a Nonfinancial Asset
        </h2>

        <p>
            Donated services may also be recognized if
            they create or enhance a nonfinancial asset.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                Skilled workers donate labor to construct
                a new facility for an NFP.
            </p>

            <p>
                Because the services create a
                nonfinancial asset, the value of the
                donated services may generally be
                capitalized as part of the asset.
            </p>

        </div>


        <h2>
            Noncash Contributions
        </h2>

        <p>
            Not-for-profit organizations may also receive
            contributed nonfinancial assets rather than cash.
        </p>


        <div class="key-points">

            <h3>
                Examples
            </h3>

            <ul>

                <li>
                    Food
                </li>

                <li>
                    Clothing
                </li>

                <li>
                    Equipment
                </li>

                <li>
                    Land
                </li>

                <li>
                    Building materials
                </li>

                <li>
                    Pharmaceuticals
                </li>

            </ul>

        </div>


        <h2>
            Measurement
        </h2>

        <p>
            Contributed nonfinancial assets are generally
            measured at fair value when recognized.
        </p>


        <div class="formula-box">

            CONTRIBUTED
            NONFINANCIAL ASSET

            →

            FAIR VALUE

        </div>


        <h2>
            Example — Donated Equipment
        </h2>

        <p>
            A donor gives an NFP equipment with a
            fair value of <strong>$40,000</strong>.
        </p>

        <p>
            Assume there are no donor restrictions.
        </p>


        <div class="formula-box">

            Equipment
            + $40,000

            Contribution Revenue
            + $40,000

        </div>


        <h2>
            Donor Restrictions Still Matter
        </h2>

        <p>
            A donated noncash asset may still be subject
            to donor-imposed restrictions.
        </p>

        <p>
            For example, donated land may be restricted
            for use only as a community garden.
        </p>


        <div class="formula-box">

            NONCASH CONTRIBUTION

            + DONOR RESTRICTION

            →

            NET ASSETS WITH
            DONOR RESTRICTIONS

        </div>


        <h2>
            Donated Services vs. Donated Goods
        </h2>


        <div class="financial-example">

            <div>

                <span>
                    Donated Services
                </span>

                <strong>
                    Recognize Only If
                    Criteria Are Met
                </strong>

            </div>


            <div>

                <span>
                    Donated Goods
                </span>

                <strong>
    Generally Recognize at
    Fair Value When Recognized
</strong>

            </div>

        </div>


        <h2>
            Example — Medical Supplies
        </h2>

        <p>
            A health charity receives donated medical
            supplies with a fair value of
            <strong>$25,000</strong>.
        </p>

        <p>
            If the contribution is unconditional and
            unrestricted:
        </p>


        <div class="formula-box">

            Supplies
            =
            $25,000

            Contribution Revenue
            =
            $25,000

        </div>


        <h2>
            CPA Memory Rule
        </h2>


        <div class="formula-box">

            DONATED SERVICE?

            ASK:

            SPECIALIZED?

            WOULD WE OTHERWISE BUY IT?

            OR

            DOES IT CREATE
            A NONFINANCIAL ASSET?


            YES
            → RECOGNIZE


            NO
            → GENERALLY DON'T RECOGNIZE

        </div>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    Not all volunteer services are recognized.
                </li>

                <li>
                    Specialized donated services may be
                    recognized when they would otherwise
                    need to be purchased.
                </li>

                <li>
                    Services creating or enhancing
                    nonfinancial assets may also be recognized.
                </li>

                <li>
                    Contributed nonfinancial assets are
                    generally measured at fair value.
                </li>

                <li>
                    Donor restrictions can affect the
                    net asset classification of noncash
                    contributions.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "A CPA donates audit services to an NFP. The services have a fair value of $18,000, require specialized accounting skills, and the NFP would otherwise have hired a CPA to perform the work. How should the NFP generally account for the donated services?",

            answers: [
                "Do not recognize the services because no cash was paid",
                "Recognize $18,000 of contribution revenue and $18,000 of related expense",
                "Recognize only the $18,000 expense",
                "Recognize the amount directly as net assets with donor restrictions"
            ],

            correctAnswer: 1,

            explanation:
                "The donated services require specialized skills, are provided by someone possessing those skills, and would otherwise need to be purchased. Therefore, the NFP generally recognizes both contribution revenue and the related expense at fair value."
        }

    );

    return;
}

if (
    moduleId === 5 &&
    lessonId === 8
) {

    showFARLessonPage(
        5,
        8,

        "Endowments & Investment Income",

        `

        <h2>
            What Is an Endowment?
        </h2>

        <p>
            An endowment is a pool of resources established
            to provide financial support to an organization
            over an extended period.
        </p>

        <p>
            Endowments may be created by donors or,
            in some cases, designated internally by
            the organization's governing board.
        </p>


        <h2>
            Donor-Restricted Endowment
        </h2>

        <p>
            A donor may require that contributed resources
            be maintained according to the terms of an
            endowment agreement.
        </p>

        <p>
            Because the restriction comes from the donor,
            the related resources are generally included in
            <strong>net assets with donor restrictions</strong>.
        </p>


        <div class="formula-box">

            DONOR CREATES
            ENDOWMENT RESTRICTION

            →

            NET ASSETS WITH
            DONOR RESTRICTIONS

        </div>


        <h2>
            Example — Donor-Restricted Endowment
        </h2>

        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A donor contributes
                <strong>$500,000</strong> to an NFP and
                requires the contribution to be maintained
                as an endowment.
            </p>

            <p>
                Investment returns may be used for
                scholarships in accordance with the
                donor's instructions.
            </p>

        </div>


        <div class="formula-box">

            ORIGINAL ENDOWMENT GIFT

            $500,000

            →

            WITH DONOR RESTRICTIONS

        </div>


        <h2>
            Board-Designated Endowment
        </h2>

        <p>
            The organization's board may also designate
            resources to function like an endowment.
        </p>

        <p>
            This is sometimes called a
            <strong>board-designated endowment</strong>
            or <strong>quasi-endowment</strong>.
        </p>


        <div class="formula-box">

            BOARD DESIGNATION

            ≠

            DONOR RESTRICTION

        </div>


        <p>
            Because the restriction was created internally,
            the resources generally remain within
            <strong>net assets without donor restrictions</strong>.
        </p>


        <h2>
            Donor vs. Board
        </h2>


        <div class="financial-example">

            <div>

                <span>
                    Donor-Restricted Endowment
                </span>

                <strong>
                    With Donor Restrictions
                </strong>

            </div>


            <div>

                <span>
                    Board-Designated Endowment
                </span>

                <strong>
                    Without Donor Restrictions
                </strong>

            </div>

        </div>


        <h2>
            Investment Return
        </h2>

        <p>
            Endowment investments may generate returns
            such as interest, dividends, and gains or losses.
        </p>


        <div class="formula-box">

            INVESTMENT RETURN

            MAY INCLUDE:

            INTEREST

            +

            DIVIDENDS

            +

            REALIZED GAINS / LOSSES

            +

            UNREALIZED GAINS / LOSSES

        </div>


        <h2>
            Classification of Investment Return
        </h2>

        <p>
            The classification of investment return
            depends on donor stipulations and applicable
            legal requirements.
        </p>

        <p>
            If the donor restricts the return for a
            particular purpose, the return generally
            increases net assets with donor restrictions
            until the restriction is satisfied.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                An endowment earns
                <strong>$30,000</strong> of investment
                return.
            </p>

            <p>
                The donor requires that the return be
                used only for student scholarships.
            </p>

        </div>


        <div class="formula-box">

            $30,000 RETURN

            +

            SCHOLARSHIP RESTRICTION

            →

            WITH DONOR RESTRICTIONS

        </div>


        <h2>
            Spending the Restricted Return
        </h2>

        <p>
            If the NFP later uses the $30,000 for
            qualifying scholarships and satisfies the
            donor restriction, a release from restriction
            is generally reported.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    With Donor Restrictions
                </span>

                <strong>
                    − $30,000
                </strong>

            </div>


            <div>

                <span>
                    Without Donor Restrictions
                </span>

                <strong>
                    + $30,000
                </strong>

            </div>

        </div>


        <h2>
            Investment Expenses
        </h2>

        <p>
            Investment return should be reported in
            accordance with the applicable presentation
            requirements, including the treatment of
            related investment expenses.
        </p>

        <p>
            For CPA questions, carefully distinguish
            investment return from contributions and
            determine whether donor restrictions apply.
        </p>


        <h2>
            Endowment Growth Example
        </h2>

        <p>
            Assume a donor-restricted endowment begins
            the year with investments of
            <strong>$800,000</strong>.
        </p>

        <p>
            During the year:
        </p>


        <div class="financial-example">

            <div>
                <span>Interest & Dividends</span>
                <strong>$35,000</strong>
            </div>

            <div>
                <span>Net Investment Gain</span>
                <strong>$25,000</strong>
            </div>

        </div>


        <div class="formula-box">

            TOTAL INVESTMENT RETURN

            $35,000
            +
            $25,000

            =

            $60,000

        </div>


        <p>
            The classification of the $60,000 depends
            on donor stipulations and applicable
            endowment requirements.
        </p>


        <h2>
            Underwater Endowment
        </h2>

        <p>
            An underwater endowment exists when the
            fair value of a donor-restricted endowment
            falls below the amount required to be
            maintained by the donor or by applicable law.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                Required amount to be maintained:
                <strong>$500,000</strong>
            </p>

            <p>
                Current fair value:
                <strong>$470,000</strong>
            </p>

        </div>


        <div class="formula-box">

            $500,000
            −
            $470,000

            =

            $30,000
            UNDERWATER AMOUNT

        </div>


        <p>
            Under current NFP reporting, underwater
            amounts associated with donor-restricted
            endowment funds are generally reflected
            within <strong>net assets with donor
            restrictions</strong>.
        </p>


        <h2>
            CPA Decision Process
        </h2>


        <div class="formula-box">

            STEP 1

            WHO CREATED THE ENDOWMENT?


            DONOR
            →

            WITH DONOR RESTRICTIONS


            BOARD
            →

            WITHOUT DONOR RESTRICTIONS


            STEP 2

            WHAT DOES THE DONOR SAY
            ABOUT INVESTMENT RETURN?


            STEP 3

            HAS THE RESTRICTION
            BEEN SATISFIED?

        </div>


        <h2>
            CPA Memory Rule
        </h2>


        <div class="formula-box">

            DONOR ENDOWMENT
            =
            RESTRICTED


            BOARD ENDOWMENT
            =
            NOT DONOR-RESTRICTED


            INVESTMENT RETURN
            =
            CHECK DONOR TERMS

        </div>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    Donor-restricted endowments generally
                    fall within net assets with donor
                    restrictions.
                </li>

                <li>
                    Board-designated endowments generally
                    remain within net assets without
                    donor restrictions.
                </li>

                <li>
                    Investment return may include interest,
                    dividends, and realized or unrealized
                    gains and losses.
                </li>

                <li>
                    Donor stipulations affect the
                    classification of investment return.
                </li>

                <li>
                    Satisfying a donor restriction may
                    result in a release from restriction.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "An NFP's governing board designates $400,000 of resources that previously had no donor restrictions to function as an endowment. No donor imposed the designation. How should the $400,000 generally be classified?",

            answers: [
                "Net assets without donor restrictions",
                "Net assets with donor restrictions",
                "A liability until the board removes the designation",
                "Deferred contribution revenue"
            ],

            correctAnswer: 0,

            explanation:
                "A board-designated endowment is created internally rather than through a donor-imposed restriction. Therefore, the resources generally remain classified within net assets without donor restrictions."
        }

    );

    return;
}

if (
    moduleId === 5 &&
    lessonId === 9
) {

    showFARLessonPage(
        5,
        9,

        "Promises to Give & Contribution Receivables",

        `

        <h2>
            What Is a Promise to Give?
        </h2>

        <p>
            A promise to give is a donor's written
            or oral agreement to contribute cash
            or other assets to an organization
            in the future.
        </p>


        <h2>
            Unconditional Promise to Give
        </h2>

        <p>
            An unconditional promise to give is generally
            recognized as contribution revenue when
            sufficient evidence of the promise exists.
        </p>


        <div class="formula-box">

            UNCONDITIONAL PROMISE

            →

            RECOGNIZE CONTRIBUTION

            +

            CONTRIBUTION RECEIVABLE

        </div>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A donor makes an unconditional promise
                to contribute <strong>$50,000</strong>
                to an NFP.
            </p>

            <p>
                The amount will be collected in
                three months.
            </p>

        </div>


        <div class="formula-box">

            Contribution Receivable
            + $50,000

            Contribution Revenue
            + $50,000

        </div>


        <h2>
            Conditional Promise
        </h2>

        <p>
            A conditional promise generally is not
recognized as contribution revenue until
the barrier has been substantially overcome.
        </p>


        <div class="formula-box">

            CONDITIONAL PROMISE

            →

            GENERALLY NO
            CONTRIBUTION RECEIVABLE

            AND

            NO CONTRIBUTION REVENUE YET

        </div>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A donor promises $100,000 if the NFP
                successfully raises another $100,000
                from other donors.
            </p>

            <p>
                Assume the donor is released from the
                promise if the matching requirement
                is not achieved.
            </p>

            <p>
                Until the barrier has been substantially overcome,
the promise generally is not recognized
as contribution revenue.
            </p>

        </div>


        <h2>
            Promise vs. Restriction
        </h2>

        <p>
            An unconditional promise may still contain
            a donor-imposed restriction.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                A donor unconditionally promises
                <strong>$80,000</strong> for a future
                scholarship program.
            </p>

            <p>
                The contribution may be recognized,
                but the donor's purpose or time
                restriction affects its classification.
            </p>

        </div>


        <div class="formula-box">

            UNCONDITIONAL

            →

            RECOGNIZE


            DONOR RESTRICTION

            →

            DETERMINE NET ASSET
            CLASSIFICATION

        </div>


        <h2>
            Promises Due in Future Periods
        </h2>

        <p>
            Unconditional promises expected to be
            collected in future periods may create
            a donor-imposed time restriction.
        </p>

        <p>
            When collection extends beyond one year,
            measurement may also require consideration
            of present value.
        </p>


        <h2>
            Present Value
        </h2>

        <p>
            Long-term unconditional promises to give
            are generally measured using the present
            value of expected future cash flows,
            when the effect is material.
        </p>


        <div class="formula-box">

            FUTURE CONTRIBUTION

            →

            DISCOUNT FUTURE CASH FLOWS

            →

            PRESENT VALUE

        </div>


        <div class="example-box">

            <strong>
                Simplified Example
            </strong>

            <p>
                A donor unconditionally promises
                <strong>$110,000</strong> payable several
                years in the future.
            </p>

            <p>
                Assume the present value of the expected
                future payment is
                <strong>$100,000</strong>.
            </p>

        </div>


        <div class="formula-box">

            CONTRIBUTION RECEIVABLE

            $110,000 FACE AMOUNT


            LESS:

            DISCOUNT
            $10,000


            NET PRESENT VALUE

            =

            $100,000

        </div>


        <h2>
            Collectibility
        </h2>

        <p>
            The organization must also consider whether
            all recognized promises are expected to
            be collected.
        </p>

        <p>
            Estimated uncollectible amounts reduce the
            net amount expected to be realized.
        </p>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                Contribution receivables total
                <strong>$200,000</strong>.
            </p>

            <p>
                The NFP estimates that
                <strong>$8,000</strong> will not
                be collected.
            </p>

        </div>


        <div class="formula-box">

            $200,000

            − $8,000

            =

            $192,000
            NET RECEIVABLE

        </div>


        <h2>
            Multi-Year Pledges
        </h2>

        <p>
            A donor may promise payments over several
            years.
        </p>

        <p>
            If the promise is unconditional, the NFP
            generally does not wait for each future
            cash payment before recognizing the
            contribution.
        </p>


        <div class="formula-box">

            CASH COLLECTION DATE

            ≠

            NECESSARILY THE
            REVENUE RECOGNITION DATE

        </div>


        <h2>
            Example — Three-Year Pledge
        </h2>

        <p>
            A donor makes an unconditional
            <strong>$300,000</strong> pledge payable
            over three years.
        </p>

        <p>
            Assume the present value of the expected
            payments is <strong>$275,000</strong>.
        </p>


        <div class="formula-box">

            INITIAL CONTRIBUTION
            RECOGNIZED

            =

            $275,000

        </div>


        <p>
            The discount related to the future payments
            changes over time as the collection dates
            approach.
        </p>


        <h2>
            Conditional vs. Unconditional
        </h2>


        <div class="financial-example">

            <div>

                <span>
                    Unconditional Promise
                </span>

                <strong>
                    Generally Recognize
                    When Promise Is Made
                </strong>

            </div>


            <div>

                <span>
    Conditional Promise
</span>

<strong>
    Generally Wait Until
    Barrier Is Substantially Overcome
</strong>

            </div>

        </div>


        <h2>
            CPA Decision Process
        </h2>


        <div class="formula-box">

            STEP 1

            IS THE PROMISE
            CONDITIONAL?


            YES

            →

            GENERALLY WAIT


            NO

            →

            RECOGNIZE


            STEP 2

            IS THERE A
            DONOR RESTRICTION?


            STEP 3

            IS PAYMENT
            LONG-TERM?


            →

            CONSIDER PRESENT VALUE


            STEP 4

            CONSIDER
            COLLECTIBILITY

        </div>


        <h2>
            CPA Memory Rule
        </h2>


        <div class="formula-box">

            UNCONDITIONAL PLEDGE

            =

            RECEIVABLE NOW


            CONDITIONAL PLEDGE

            =

            GENERALLY WAIT


            LONG-TERM PLEDGE

            =

            THINK PRESENT VALUE

        </div>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    Unconditional promises to give are
                    generally recognized when made.
                </li>

                <li>
                    Conditional promises generally are
not recognized until the barrier
has been substantially overcome.
                </li>

                <li>
                    Donor restrictions affect the
                    classification of recognized
                    contributions.
                </li>

                <li>
                    Long-term promises may require
                    present-value measurement.
                </li>

                <li>
                    Collectibility affects the net
                    contribution receivable reported.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "An NFP receives an unconditional promise from a donor to pay $200,000 three years from now. The present value of the expected payment is $175,000. Assuming collectibility is probable, what amount should generally be initially recognized as contribution revenue?",

            answers: [
                "$0 until the cash is collected",
                "$200,000",
                "$175,000",
                "$25,000"
            ],

            correctAnswer: 2,

            explanation:
                "Because the promise is unconditional, contribution revenue is generally recognized when the promise is made. For a material long-term promise, the contribution is initially measured using present value, which is $175,000."
        }

    );

    return;
}

if (
    moduleId === 5 &&
    lessonId === 10
) {

    showFARLessonPage(
        5,
        10,

        "Not-for-Profit Integrated Review",

        `

        <h2>
            Module 5 Big Picture
        </h2>

        <p>
            Not-for-profit accounting focuses heavily on
            contributions, donor restrictions, net asset
            classification, expense reporting, and the
            organization's financial statements.
        </p>


        <div class="formula-box">

            NFP CORE MODEL

            ASSETS
            − LIABILITIES

            =

            NET ASSETS

        </div>


        <h2>
            The Two Net Asset Classes
        </h2>


        <div class="financial-example">

            <div>

                <span>
                    Without Donor Restrictions
                </span>

                <strong>
                    No Donor-Imposed Restriction
                </strong>

            </div>


            <div>

                <span>
                    With Donor Restrictions
                </span>

                <strong>
                    Donor-Imposed Restriction Exists
                </strong>

            </div>

        </div>


        <h2>
            Restriction vs. Condition
        </h2>

        <p>
            These two concepts must remain separate.
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Restriction
                </span>

                <strong>
                    Controls How or When
                    Resources May Be Used
                </strong>

            </div>


            <div>

                <span>
                    Condition
                </span>

                <strong>
                    Affects Whether Contribution
                    Revenue Is Recognized Yet
                </strong>

            </div>

        </div>


        <div class="formula-box">

            RESTRICTION

            →

            RECOGNIZE,
            THEN CLASSIFY


            CONDITION
→
GENERALLY WAIT UNTIL
BARRIER IS SUBSTANTIALLY OVERCOME

        </div>


        <h2>
            Integrated Contribution Example
        </h2>

        <p>
            Hope Foundation receives the following
            during the year:
        </p>


        <div class="financial-example">

            <div>

                <span>
                    Unrestricted Cash Contribution
                </span>

                <strong>
                    $100,000
                </strong>

            </div>


            <div>

                <span>
                    Contribution Restricted
                    for Education
                </span>

                <strong>
                    $150,000
                </strong>

            </div>


            <div>

                <span>
                    Conditional Grant Received
                    Before Condition Is Met
                </span>

                <strong>
                    $80,000
                </strong>

            </div>

        </div>


        <p>
            The first contribution generally increases
            net assets without donor restrictions.
        </p>

        <p>
            The second generally increases net assets
            with donor restrictions.
        </p>

        <p>
            The conditional $80,000 received before
the barrier has been substantially overcome is
generally reported as a liability.
        </p>


        <div class="formula-box">

            $100,000
            →

            WITHOUT DONOR RESTRICTIONS


            $150,000
            →

            WITH DONOR RESTRICTIONS


            $80,000 CONDITIONAL CASH

            →

            LIABILITY

        </div>


        <h2>
            Release From Restriction
        </h2>

        <p>
            During the year, Hope Foundation spends
            <strong>$90,000</strong> on qualifying
            educational costs related to the donor's
            restriction.
        </p>


        <div class="formula-box">

            RESTRICTION SATISFIED

            $90,000


            WITH DONOR RESTRICTIONS

            − $90,000


            WITHOUT DONOR RESTRICTIONS

            + $90,000

        </div>


        <p>
            This is a reclassification between net asset
            classes, not another contribution.
        </p>


        <h2>
            Donated Services
        </h2>

        <p>
            Hope Foundation receives donated legal
            services worth <strong>$20,000</strong>.
        </p>

        <p>
            The attorney has specialized skills and
            Hope Foundation would otherwise have
            purchased the services.
        </p>


        <div class="formula-box">

            Contribution Revenue
            =
            $20,000

            Legal Expense
            =
            $20,000

        </div>


        <h2>
            Donated Property
        </h2>

        <p>
            A donor contributes equipment with a
            fair value of <strong>$45,000</strong>.
        </p>


        <div class="formula-box">

            Equipment
            + $45,000

            Contribution Revenue
            + $45,000

        </div>


        <p>
            Contributed nonfinancial assets are generally
            measured at fair value when recognized.
        </p>


        <h2>
            Endowment Classification
        </h2>


        <div class="financial-example">

            <div>

                <span>
                    Donor Creates Endowment
                </span>

                <strong>
                    With Donor Restrictions
                </strong>

            </div>


            <div>

                <span>
                    Board Designates Endowment
                </span>

                <strong>
                    Without Donor Restrictions
                </strong>

            </div>

        </div>


        <h2>
            Promises to Give
        </h2>


        <div class="formula-box">

            UNCONDITIONAL PROMISE

            →

            GENERALLY RECOGNIZE


            CONDITIONAL PROMISE

            →

            GENERALLY WAIT


            LONG-TERM PROMISE

            →

            CONSIDER PRESENT VALUE

        </div>


        <h2>
            Expense Reporting
        </h2>


        <div class="formula-box">

            FUNCTION

            =

            WHY?


            NATURE

            =

            WHAT?

        </div>


        <div class="financial-example">

            <div>

                <span>
                    Program Services
                </span>

                <strong>
                    Mission Activities
                </strong>

            </div>


            <div>

                <span>
                    Management & General
                </span>

                <strong>
                    Supporting Services
                </strong>

            </div>


            <div>

                <span>
                    Fundraising
                </span>

                <strong>
                    Supporting Services
                </strong>

            </div>

        </div>


        <h2>
            Financial Statement Map
        </h2>


        <div class="financial-example">

            <div>

                <span>
                    Statement of Financial Position
                </span>

                <strong>
                    Assets, Liabilities,
                    and Net Assets
                </strong>

            </div>


            <div>

                <span>
                    Statement of Activities
                </span>

                <strong>
                    Changes in Net Assets
                </strong>

            </div>


            <div>

                <span>
                    Statement of Cash Flows
                </span>

                <strong>
                    Changes in Cash
                </strong>

            </div>

        </div>


        <h2>
            Final CPA Decision Tree
        </h2>


        <div class="formula-box">

            CONTRIBUTION?


            ↓


            CONDITIONAL?

            YES
            →
            GENERALLY WAIT


            NO
            ↓


            DONOR RESTRICTION?

            YES
            →
            WITH DONOR RESTRICTIONS


            NO
            →
            WITHOUT DONOR RESTRICTIONS

        </div>


        <h2>
            Module 5 Memory Sheet
        </h2>


        <div class="key-points">

            <ul>

                <li>
                    NFPs report net assets rather than
                    owners' equity.
                </li>

                <li>
                    Donor restrictions determine net
                    asset classification.
                </li>

                <li>
                    Board designations do not create
                    donor restrictions.
                </li>

                <li>
                    Conditions generally affect the
                    timing of contribution recognition.
                </li>

                <li>
                    Restrictions generally affect the
                    classification and use of resources.
                </li>

                <li>
                    Recognizable donated services may
                    produce both contribution revenue
                    and expense.
                </li>

                <li>
                    Contributed nonfinancial assets are
                    generally measured at fair value.
                </li>

                <li>
                    Long-term unconditional pledges may
                    require present-value measurement.
                </li>

                <li>
                    Function means why an expense was
                    incurred; nature means what type
                    of expense it was.
                </li>

                <li>
                    The statement of activities explains
                    changes in net assets.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "An NFP receives $120,000 cash under an agreement requiring it to first serve 600 qualifying participants. The donor may require repayment if the target is not achieved. By year-end, the NFP has not met the target. How should the $120,000 generally be reported?",

            answers: [
                "As a liability",
                "As contribution revenue with donor restrictions",
                "As contribution revenue without donor restrictions",
                "As a board-designated component of net assets"
            ],

            correctAnswer: 0,

            explanation:
                "The measurable performance barrier and the donor's right of return make the contribution conditional. Because the barrier has not been substantially met, cash already received is generally reported as a liability rather than contribution revenue."
        }

    );

    return;
}

if (
    moduleId === 6 &&
    lessonId === 1
) {

    showFARLessonPage(
        6,
        1,

        "Financial Statement Analysis & Adjustments",

        `

        <h2>
            The FAR Big Picture
        </h2>

        <p>
            FAR questions often require more than knowing
            an isolated accounting rule.
        </p>

        <p>
            You may need to determine how an adjustment
            affects several financial statement accounts
            at the same time.
        </p>


        <div class="formula-box">

            ACCOUNTING EVENT

            ↓

            RECOGNITION

            ↓

            MEASUREMENT

            ↓

            FINANCIAL STATEMENT EFFECT

        </div>


        <h2>
            Start With the Accounting Equation
        </h2>

        <div class="formula-box">

            ASSETS

            =

            LIABILITIES

            +

            EQUITY

        </div>

        <p>
            Every adjustment must preserve the accounting
            equation.
        </p>


        <h2>
            Example — Accrued Expense
        </h2>

        <p>
            A company owes employees
            <strong>$12,000</strong> of salaries at year-end
            that have not yet been recorded.
        </p>


        <div class="financial-example">

            <div>
                <span>Salary Expense</span>
                <strong>+ $12,000</strong>
            </div>

            <div>
                <span>Salaries Payable</span>
                <strong>+ $12,000</strong>
            </div>

            <div>
                <span>Net Income</span>
                <strong>− $12,000</strong>
            </div>

            <div>
                <span>Equity</span>
                <strong>− $12,000</strong>
            </div>

        </div>


        <h2>
            Example — Accrued Revenue
        </h2>

        <p>
            A company has earned
            <strong>$8,000</strong> of service revenue
            but has not yet billed the customer.
        </p>


        <div class="financial-example">

            <div>
                <span>Receivable</span>
                <strong>+ $8,000</strong>
            </div>

            <div>
                <span>Revenue</span>
                <strong>+ $8,000</strong>
            </div>

            <div>
                <span>Net Income</span>
                <strong>+ $8,000</strong>
            </div>

            <div>
                <span>Equity</span>
                <strong>+ $8,000</strong>
            </div>

        </div>


        <h2>
            Unearned Revenue
        </h2>

        <p>
            Cash received before the related performance
            obligation is satisfied generally creates
            a liability.
        </p>


        <div class="formula-box">

            CASH RECEIVED FIRST

            →

            LIABILITY


            PERFORMANCE LATER

            →

            REDUCE LIABILITY

            +

            RECOGNIZE REVENUE

        </div>


        <h2>
            Example — Advance Collection
        </h2>

        <p>
            A company receives
            <strong>$24,000</strong> for twelve months
            of services beginning immediately.
        </p>

        <p>
            After three months:
        </p>


        <div class="formula-box">

            $24,000 ÷ 12

            =

            $2,000 PER MONTH


            $2,000 × 3

            =

            $6,000 REVENUE EARNED


            $24,000 − $6,000

            =

            $18,000 LIABILITY REMAINING

        </div>


        <h2>
            Prepaid Expenses
        </h2>

        <p>
            A prepaid cost initially represents an asset.
            As the benefit is consumed, the asset decreases
            and expense is recognized.
        </p>


        <div class="formula-box">

            PREPAYMENT

            →

            ASSET


            BENEFIT CONSUMED

            →

            EXPENSE

        </div>


        <h2>
            Depreciation Adjustment
        </h2>

        <p>
            Depreciation allocates the depreciable cost
            of a long-lived asset over its useful life.
        </p>


        <div class="formula-box">

            STRAIGHT-LINE DEPRECIATION

            =

            COST − RESIDUAL VALUE

            ÷

            USEFUL LIFE

        </div>


        <div class="example-box">

            <strong>
                Example
            </strong>

            <p>
                Equipment cost:
                <strong>$110,000</strong>
            </p>

            <p>
                Residual value:
                <strong>$10,000</strong>
            </p>

            <p>
                Useful life:
                <strong>5 years</strong>
            </p>

        </div>


        <div class="formula-box">

            ($110,000 − $10,000)

            ÷ 5

            =

            $20,000 ANNUAL DEPRECIATION

        </div>


        <div class="financial-example">

            <div>
                <span>Depreciation Expense</span>
                <strong>+ $20,000</strong>
            </div>

            <div>
                <span>Accumulated Depreciation</span>
                <strong>+ $20,000</strong>
            </div>

            <div>
                <span>Net Income</span>
                <strong>− $20,000</strong>
            </div>

            <div>
                <span>Carrying Amount of Assets</span>
                <strong>− $20,000</strong>
            </div>

        </div>


        <h2>
            Allowance for Credit Losses
        </h2>

        <p>
            Receivables should reflect the amount
            expected to be collected.
        </p>


        <div class="formula-box">

            GROSS RECEIVABLE

            −

            ALLOWANCE FOR CREDIT LOSSES

            =

            NET RECEIVABLE

        </div>


        <div class="example-box">

            <p>
                Accounts receivable:
                <strong>$300,000</strong>
            </p>

            <p>
                Required allowance:
                <strong>$18,000</strong>
            </p>

        </div>


        <div class="formula-box">

            $300,000

            − $18,000

            =

            $282,000 NET RECEIVABLE

        </div>


        <h2>
            Inventory Errors
        </h2>

        <p>
            Inventory errors can affect both the
            balance sheet and income statement.
        </p>


        <div class="formula-box">

            COGS

            =

            BEGINNING INVENTORY

            +

            PURCHASES

            −

            ENDING INVENTORY

        </div>


        <p>
            If ending inventory is overstated:
        </p>


        <div class="financial-example">

            <div>
                <span>Ending Inventory</span>
                <strong>Overstated</strong>
            </div>

            <div>
                <span>COGS</span>
                <strong>Understated</strong>
            </div>

            <div>
                <span>Net Income</span>
                <strong>Overstated</strong>
            </div>

            <div>
                <span>Assets</span>
                <strong>Overstated</strong>
            </div>

        </div>


        <h2>
            Current Ratio
        </h2>

        <div class="formula-box">

            CURRENT RATIO

            =

            CURRENT ASSETS

            ÷

            CURRENT LIABILITIES

        </div>


        <div class="example-box">

            <p>
                Current assets:
                <strong>$450,000</strong>
            </p>

            <p>
                Current liabilities:
                <strong>$300,000</strong>
            </p>

        </div>


        <div class="formula-box">

            $450,000 ÷ $300,000

            =

            1.50

        </div>


        <h2>
            Working Capital
        </h2>

        <div class="formula-box">

            WORKING CAPITAL

            =

            CURRENT ASSETS

            −

            CURRENT LIABILITIES

        </div>


        <div class="formula-box">

            $450,000 − $300,000

            =

            $150,000

        </div>


        <h2>
            FAR Adjustment Strategy
        </h2>

        <div class="formula-box">

            1. IDENTIFY THE EVENT

            2. IDENTIFY ACCOUNTS AFFECTED

            3. DETERMINE DEBIT / CREDIT EFFECT

            4. CALCULATE THE ADJUSTMENT

            5. FOLLOW THE EFFECT TO
               NET INCOME AND EQUITY

            6. RECHECK THE ACCOUNTING EQUATION

        </div>


        <h2>
            Common CPA Trap
        </h2>

        <p>
            Do not focus only on the account directly
            mentioned in the question.
        </p>

        <p>
            An adjustment to one account may affect
            assets, liabilities, revenue or expense,
            net income, and equity simultaneously.
        </p>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    Every adjustment must preserve
                    the accounting equation.
                </li>

                <li>
                    Accrued expenses increase liabilities
                    and decrease income.
                </li>

                <li>
                    Accrued revenues increase assets
                    and income.
                </li>

                <li>
                    Advance collections generally remain
                    liabilities until revenue is earned.
                </li>

                <li>
                    Ending inventory errors affect both
                    COGS and net income.
                </li>

                <li>
                    Always trace an adjustment through
                    the financial statements.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "A company fails to record $15,000 of salaries incurred but unpaid at year-end. Before correction, which combination is correct?",

            answers: [
                "Liabilities are overstated and net income is understated",
                "Assets are understated and net income is overstated",
                "Liabilities are understated and net income is overstated",
                "Liabilities are understated and net income is understated"
            ],

            correctAnswer: 2,

            explanation:
                "Failing to accrue the salaries omits both salary expense and salaries payable. Therefore, liabilities are understated by $15,000 and expenses are understated, causing net income to be overstated by $15,000."
        }

    );

    return;
}

if (
    moduleId === 6 &&
    lessonId === 2
) {

    showFARLessonPage(
        6,
        2,

        "Revenue, Receivables & Cash Flow Review",

        `

        <h2>
            Connecting Revenue, Receivables, and Cash
        </h2>

        <p>
            Revenue recognition, accounts receivable,
            credit losses, and cash collections are closely
            connected, but they do not necessarily occur
            at the same time.
        </p>

        <div class="formula-box">

            REVENUE RECOGNITION

            ≠

            CASH COLLECTION

        </div>

        <p>
            A company may recognize revenue before cash
            is collected, at the same time cash is collected,
            or after cash was collected in advance.
        </p>


        <h2>
            The Revenue Recognition Model
        </h2>

        <p>
            For revenue from contracts with customers,
            ASC 606 uses a five-step model.
        </p>

        <div class="formula-box">

            STEP 1

            IDENTIFY THE CONTRACT


            STEP 2

            IDENTIFY THE PERFORMANCE OBLIGATIONS


            STEP 3

            DETERMINE THE TRANSACTION PRICE


            STEP 4

            ALLOCATE THE TRANSACTION PRICE


            STEP 5

            RECOGNIZE REVENUE WHEN
            (OR AS) PERFORMANCE OBLIGATIONS
            ARE SATISFIED

        </div>


        <h2>
            Revenue Before Cash Collection
        </h2>

        <p>
            Assume a company provides
            <strong>$40,000</strong> of services on account
            and has satisfied its performance obligation.
        </p>

        <div class="financial-example">

            <div>
                <span>Accounts Receivable</span>
                <strong>+ $40,000</strong>
            </div>

            <div>
                <span>Revenue</span>
                <strong>+ $40,000</strong>
            </div>

            <div>
                <span>Cash</span>
                <strong>No Immediate Effect</strong>
            </div>

            <div>
                <span>Net Income</span>
                <strong>+ $40,000</strong>
            </div>

        </div>

        <p>
            Revenue recognition increased income even
            though no cash was collected at that time.
        </p>


        <h2>
            Later Collection of the Receivable
        </h2>

        <p>
            If the customer later pays the
            <strong>$40,000</strong>:
        </p>

        <div class="financial-example">

            <div>
                <span>Cash</span>
                <strong>+ $40,000</strong>
            </div>

            <div>
                <span>Accounts Receivable</span>
                <strong>− $40,000</strong>
            </div>

            <div>
                <span>Revenue</span>
                <strong>No New Revenue</strong>
            </div>

            <div>
                <span>Net Income</span>
                <strong>No Effect</strong>
            </div>

        </div>

        <p>
            Collecting an existing receivable does not
            create revenue again.
        </p>


        <h2>
            Cash Collected Before Revenue
        </h2>

        <p>
            If cash is collected before the company
            satisfies the related performance obligation,
            the company generally records a
            <strong>contract liability</strong>.
        </p>

        <div class="formula-box">

            CASH RECEIVED

            BEFORE PERFORMANCE

            →

            CONTRACT LIABILITY

        </div>

        <p>
            When the performance obligation is later
            satisfied:
        </p>

        <div class="formula-box">

            REDUCE CONTRACT LIABILITY

            +

            RECOGNIZE REVENUE

        </div>


        <h2>
            Example — Advance Payment
        </h2>

        <p>
            A customer pays
            <strong>$60,000</strong> in advance.
            At year-end, the company has satisfied
            40% of the related performance obligation.
        </p>

        <div class="formula-box">

            REVENUE RECOGNIZED

            =

            $60,000 × 40%

            =

            $24,000


            CONTRACT LIABILITY REMAINING

            =

            $60,000 − $24,000

            =

            $36,000

        </div>


        <h2>
            Accounts Receivable and Credit Losses
        </h2>

        <p>
            Recording a receivable does not mean the
            company expects to collect every dollar.
        </p>

        <p>
            The allowance for credit losses reduces
            gross accounts receivable to the amount
            expected to be collected.
        </p>

        <div class="formula-box">

            NET ACCOUNTS RECEIVABLE

            =

            GROSS ACCOUNTS RECEIVABLE

            −

            ALLOWANCE FOR CREDIT LOSSES

        </div>


        <h2>
            Example — Required Allowance
        </h2>

        <p>
            Gross accounts receivable are
            <strong>$500,000</strong>.
        </p>

        <p>
            The required ending allowance for credit
            losses is <strong>$30,000</strong>.
        </p>

        <div class="formula-box">

            $500,000 − $30,000

            =

            $470,000

            NET ACCOUNTS RECEIVABLE

        </div>


        <h2>
            Adjusting the Allowance
        </h2>

        <p>
            FAR may give you an existing balance in
            the allowance account and ask for the
            required credit loss expense.
        </p>

        <div class="example-box">

            <p>
                Required ending allowance:
                <strong>$30,000 credit</strong>
            </p>

            <p>
                Existing allowance balance before
                adjustment:
                <strong>$8,000 credit</strong>
            </p>

        </div>

        <div class="formula-box">

            REQUIRED ADJUSTMENT

            =

            $30,000 − $8,000

            =

            $22,000

        </div>

        <p>
            The adjustment increases credit loss expense
            and increases the allowance by $22,000.
        </p>


        <h2>
            Watch for a Debit Balance
        </h2>

        <p>
            Suppose instead the allowance has a
            <strong>$4,000 debit balance</strong>
            before adjustment and the required ending
            credit balance is $30,000.
        </p>

        <div class="formula-box">

            REQUIRED ADJUSTMENT

            =

            $30,000 + $4,000

            =

            $34,000

        </div>

        <p>
            A pre-adjustment debit balance means the
            adjustment must first eliminate that debit
            and then establish the required credit balance.
        </p>


        <h2>
            Writing Off a Specific Account
        </h2>

        <p>
            Under the allowance method, writing off
            a specific uncollectible receivable reduces
            both accounts receivable and the allowance.
        </p>

        <div class="financial-example">

            <div>
                <span>Accounts Receivable</span>
                <strong>Decrease</strong>
            </div>

            <div>
                <span>Allowance for Credit Losses</span>
                <strong>Decrease</strong>
            </div>

            <div>
                <span>Net Accounts Receivable</span>
                <strong>No Immediate Effect</strong>
            </div>

            <div>
                <span>Credit Loss Expense</span>
                <strong>No New Expense</strong>
            </div>

        </div>

        <p>
            This is a common FAR trap. The expected loss
            was recognized through the allowance process,
            not when the specific account was later
            written off.
        </p>


        <h2>
            Revenue and the Statement of Cash Flows
        </h2>

        <p>
            Under the indirect method, the operating
            section begins with net income and adjusts
            for differences between accrual accounting
            and operating cash flows.
        </p>

        <div class="formula-box">

            INCREASE IN ACCOUNTS RECEIVABLE

            →

            SUBTRACT FROM NET INCOME


            DECREASE IN ACCOUNTS RECEIVABLE

            →

            ADD TO NET INCOME

        </div>


        <h2>
            Why?
        </h2>

        <p>
            An increase in accounts receivable generally
            means revenue recognized exceeded cash
            collected from customers.
        </p>

        <div class="example-box">

            <p>
                Net income:
                <strong>$200,000</strong>
            </p>

            <p>
                Accounts receivable increased:
                <strong>$25,000</strong>
            </p>

        </div>

        <div class="formula-box">

            $200,000

            − $25,000

            =

            $175,000

            BEFORE CONSIDERING OTHER
            OPERATING ADJUSTMENTS

        </div>


        <h2>
            Contract Liabilities and Operating Cash Flow
        </h2>

        <p>
            An increase in a contract liability can occur
            when cash has been collected before the
            related revenue is recognized.
        </p>

        <p>
            Under the indirect method, an increase in an
            operating liability is generally added to
            net income when reconciling to operating
            cash flow.
        </p>


        <h2>
            Receivables Turnover
        </h2>

        <div class="formula-box">

            RECEIVABLES TURNOVER

            =

            NET CREDIT SALES

            ÷

            AVERAGE NET ACCOUNTS RECEIVABLE

        </div>

        <p>
            A higher turnover generally indicates that
            receivables are being collected more quickly,
            although interpretation should consider the
            company's business and credit policies.
        </p>


        <h2>
            Average Collection Period
        </h2>

        <div class="formula-box">

            AVERAGE COLLECTION PERIOD

            ≈

            365

            ÷

            RECEIVABLES TURNOVER

        </div>


        <h2>
            Integrated Example
        </h2>

        <p>
            A company reports:
        </p>

        <div class="example-box">

            <p>
                Beginning accounts receivable:
                <strong>$80,000</strong>
            </p>

            <p>
                Ending accounts receivable:
                <strong>$110,000</strong>
            </p>

            <p>
                Revenue on account:
                <strong>$500,000</strong>
            </p>

            <p>
                Ignore write-offs and other adjustments.
            </p>

        </div>

        <p>
            The increase in receivables is:
        </p>

        <div class="formula-box">

            $110,000 − $80,000

            =

            $30,000

        </div>

        <p>
            Therefore, cash collected from customers is:
        </p>

        <div class="formula-box">

            $500,000 − $30,000

            =

            $470,000

        </div>


        <h2>
            FAR Problem-Solving Strategy
        </h2>

        <div class="formula-box">

            ASK THREE QUESTIONS:


            1. WHEN WAS REVENUE EARNED?


            2. WHEN WAS CASH COLLECTED?


            3. WHAT HAPPENED TO THE
               RELATED RECEIVABLE OR LIABILITY?

        </div>

        <p>
            Separating those three events prevents many
            revenue and cash-flow mistakes.
        </p>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    Revenue recognition and cash collection
                    can occur at different times.
                </li>

                <li>
                    Collecting an existing receivable does
                    not create additional revenue.
                </li>

                <li>
                    Cash collected before performance
                    generally creates a contract liability.
                </li>

                <li>
                    Net receivables equal gross receivables
                    less the allowance for credit losses.
                </li>

                <li>
                    A write-off under the allowance method
                    does not immediately change net
                    receivables or create new credit loss
                    expense.
                </li>

                <li>
                    Under the indirect cash-flow method,
                    increases in operating receivables
                    generally reduce operating cash flow
                    relative to net income.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "A company's accounts receivable increased by $30,000 during the year. The company reported $500,000 of revenue on account. Ignoring write-offs and other adjustments, how much cash was collected from customers?",

            answers: [
                "$530,000",
                "$470,000",
                "$500,000",
                "$30,000"
            ],

            correctAnswer: 1,

            explanation:
                "Accounts receivable increased because revenue on account exceeded cash collections. Cash collected equals $500,000 of revenue on account minus the $30,000 increase in accounts receivable, or $470,000."
        }

    );

    return;
}

if (
    moduleId === 6 &&
    lessonId === 3
) {

    showFARLessonPage(
        6,
        3,

        "Inventory & Long-Lived Asset Review",

        `

        <h2>
            Why These Topics Matter Together
        </h2>

        <p>
            Inventory and long-lived assets both involve
            measurement, cost allocation, impairment,
            and financial statement presentation.
        </p>

        <p>
            FAR frequently tests whether you can distinguish
            between costs that should be expensed immediately
            and costs that should be capitalized and recognized
            over future periods.
        </p>


        <h2>
            Inventory Cost Flow
        </h2>

        <div class="formula-box">

            BEGINNING INVENTORY

            +

            PURCHASES

            =

            GOODS AVAILABLE FOR SALE


            GOODS AVAILABLE FOR SALE

            −

            ENDING INVENTORY

            =

            COST OF GOODS SOLD

        </div>


        <h2>
            Inventory Error Relationships
        </h2>

        <p>
            Ending inventory directly affects cost of goods sold.
        </p>

        <div class="formula-box">

            ENDING INVENTORY ↑

            →

            COGS ↓

            →

            NET INCOME ↑

        </div>

        <p>
            Therefore, if ending inventory is overstated,
            assets and net income are generally overstated
            in the current period.
        </p>


        <h2>
            Example — Inventory Overstatement
        </h2>

        <p>
            Actual ending inventory is
            <strong>$90,000</strong>,
            but the company reports
            <strong>$105,000</strong>.
        </p>

        <div class="formula-box">

            INVENTORY OVERSTATEMENT

            =

            $105,000 − $90,000

            =

            $15,000

        </div>

        <div class="financial-example">

            <div>
                <span>Ending Inventory</span>
                <strong>Overstated $15,000</strong>
            </div>

            <div>
                <span>COGS</span>
                <strong>Understated $15,000</strong>
            </div>

            <div>
                <span>Net Income</span>
                <strong>Overstated $15,000</strong>
            </div>

            <div>
                <span>Assets</span>
                <strong>Overstated $15,000</strong>
            </div>

        </div>


        <h2>
            Inventory Measurement
        </h2>

        <p>
            Inventory measurement depends on the cost-flow
            method used.
        </p>

        <p>
            For inventory measured using FIFO or average cost,
            U.S. GAAP generally applies the
            <strong>lower of cost and net realizable value</strong>
            approach.
        </p>

        <p>
    Inventory measured using LIFO or the retail
    inventory method is generally evaluated using
    the <strong>lower of cost or market</strong>
    approach, subject to the applicable ceiling
    and floor limitations.
</p>

        <div class="formula-box">

            NET REALIZABLE VALUE

            =

            ESTIMATED SELLING PRICE

            −

            REASONABLY PREDICTABLE COSTS
            OF COMPLETION, DISPOSAL,
            AND TRANSPORTATION

        </div>


        <h2>
            Example — Lower of Cost and NRV
        </h2>

        <div class="example-box">

            <p>
                Inventory cost:
                <strong>$75,000</strong>
            </p>

            <p>
                Net realizable value:
                <strong>$68,000</strong>
            </p>

        </div>

        <div class="formula-box">

            REPORTED INVENTORY

            =

            LOWER OF

            $75,000 OR $68,000

            =

            $68,000

        </div>

        <p>
            The company recognizes a
            <strong>$7,000 loss</strong>.
        </p>


        <h2>
            Capitalize or Expense?
        </h2>

        <p>
            Long-lived asset questions often begin with
            determining which costs belong in the asset's
            initial carrying amount.
        </p>

        <p>
            Costs necessary to acquire the asset and prepare
            it for its intended use are generally capitalized.
        </p>

        <div class="formula-box">

            CAPITALIZED COST

            MAY INCLUDE:

            PURCHASE PRICE

            +

            FREIGHT

            +

            INSTALLATION

            +

            TESTING

            +

            OTHER COSTS NECESSARY
            TO PREPARE THE ASSET
            FOR INTENDED USE

        </div>


        <h2>
            Example — Equipment Cost
        </h2>

        <div class="example-box">

            <p>
                Purchase price:
                <strong>$100,000</strong>
            </p>

            <p>
                Freight:
                <strong>$4,000</strong>
            </p>

            <p>
                Installation:
                <strong>$6,000</strong>
            </p>

            <p>
                Annual maintenance contract:
                <strong>$3,000</strong>
            </p>

        </div>

        <div class="formula-box">

            CAPITALIZED EQUIPMENT COST

            =

            $100,000

            + $4,000

            + $6,000

            =

            $110,000

        </div>

        <p>
            The annual maintenance contract is generally
            an operating expense rather than part of the
            equipment's acquisition cost.
        </p>


        <h2>
            Depreciation
        </h2>

        <p>
            Depreciation allocates depreciable cost over
            the periods benefited by the asset.
        </p>

        <div class="formula-box">

            DEPRECIABLE BASE

            =

            COST

            −

            RESIDUAL VALUE

        </div>

        <div class="formula-box">

            STRAIGHT-LINE DEPRECIATION

            =

            DEPRECIABLE BASE

            ÷

            USEFUL LIFE

        </div>


        <h2>
            Example — Straight-Line Depreciation
        </h2>

        <div class="example-box">

            <p>
                Cost:
                <strong>$210,000</strong>
            </p>

            <p>
                Residual value:
                <strong>$10,000</strong>
            </p>

            <p>
                Useful life:
                <strong>10 years</strong>
            </p>

        </div>

        <div class="formula-box">

            ($210,000 − $10,000)

            ÷ 10

            =

            $20,000 PER YEAR

        </div>


        <h2>
            Change in Depreciation Estimate
        </h2>

        <p>
            A change in useful life or residual value is
            generally treated as a
            <strong>change in accounting estimate</strong>.
        </p>

        <div class="formula-box">

            CHANGE IN ESTIMATE

            →

            PROSPECTIVE APPLICATION

        </div>

        <p>
            Prior-period financial statements are not
            retrospectively revised merely because management
            changes its estimate.
        </p>


        <h2>
            Long-Lived Asset Impairment
        </h2>

        <p>
            For long-lived assets to be held and used,
            U.S. GAAP generally uses a two-step concept
            for impairment.
        </p>

        <div class="formula-box">

            STEP 1

            RECOVERABILITY TEST


            CARRYING AMOUNT

            >

            UNDISCOUNTED EXPECTED
            FUTURE CASH FLOWS?

        </div>

        <p>
            If the carrying amount is not recoverable,
            impairment is measured using fair value.
        </p>

        <div class="formula-box">

            IMPAIRMENT LOSS

            =

            CARRYING AMOUNT

            −

            FAIR VALUE

        </div>


        <h2>
            Example — Impairment
        </h2>

        <div class="example-box">

            <p>
                Carrying amount:
                <strong>$500,000</strong>
            </p>

            <p>
                Undiscounted expected future cash flows:
                <strong>$430,000</strong>
            </p>

            <p>
                Fair value:
                <strong>$390,000</strong>
            </p>

        </div>

        <p>
            Because:
        </p>

        <div class="formula-box">

            $500,000

            >

            $430,000

        </div>

        <p>
            the asset fails the recoverability test.
        </p>

        <div class="formula-box">

            IMPAIRMENT LOSS

            =

            $500,000 − $390,000

            =

            $110,000

        </div>


        <h2>
            Intangible Assets
        </h2>

        <p>
            Intangible assets may have finite or indefinite
            useful lives.
        </p>

        <div class="formula-box">

            FINITE-LIVED INTANGIBLE

            →

            AMORTIZE


            INDEFINITE-LIVED INTANGIBLE

            →

            GENERALLY NO AMORTIZATION

            BUT TEST FOR IMPAIRMENT

        </div>


        <h2>
            Purchased vs Internally Generated Intangibles
        </h2>

        <p>
            Purchased intangible assets are generally
            recognized at cost.
        </p>

        <p>
            Many internally generated costs are expensed
            rather than capitalized, subject to specific
            accounting rules for particular types of costs.
        </p>


        <h2>
            Gain or Loss on Disposal
        </h2>

        <p>
            When a long-lived asset is sold, compare
            the proceeds received with the asset's carrying
            amount on the disposal date.
        </p>

        <div class="formula-box">

            GAIN OR LOSS

            =

            PROCEEDS

            −

            CARRYING AMOUNT

        </div>


        <h2>
            Example — Disposal
        </h2>

        <div class="example-box">

            <p>
                Asset cost:
                <strong>$150,000</strong>
            </p>

            <p>
                Accumulated depreciation:
                <strong>$90,000</strong>
            </p>

            <p>
                Selling price:
                <strong>$72,000</strong>
            </p>

        </div>

        <div class="formula-box">

            CARRYING AMOUNT

            =

            $150,000 − $90,000

            =

            $60,000


            GAIN

            =

            $72,000 − $60,000

            =

            $12,000

        </div>


        <h2>
            Integrated FAR Thinking
        </h2>

        <p>
            Inventory and long-lived asset questions often
            test more than one financial statement effect.
        </p>

        <div class="formula-box">

            ASK:

            WHAT IS THE CORRECT ASSET BALANCE?

            WHAT EXPENSE OR LOSS IS RECOGNIZED?

            WHAT HAPPENS TO NET INCOME?

            WHAT HAPPENS TO TOTAL ASSETS?

        </div>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    Ending inventory affects both COGS
                    and net income.
                </li>

                <li>
                    FIFO and average-cost inventory are
                    generally subject to lower of cost
                    and net realizable value.
                </li>

                <li>
                    Costs necessary to acquire and prepare
                    PP&E for intended use are generally
                    capitalized.
                </li>

                <li>
                    Changes in useful life and residual
                    value are generally treated prospectively.
                </li>

                <li>
                    Held-and-used long-lived assets first
                    undergo a recoverability test using
                    undiscounted cash flows.
                </li>

                <li>
                    If impaired, the loss is generally
                    measured as carrying amount minus
                    fair value.
                </li>

                <li>
                    Gain or loss on disposal compares
                    proceeds with carrying amount.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "Equipment has a carrying amount of $500,000, undiscounted expected future cash flows of $430,000, and a fair value of $390,000. Under U.S. GAAP for a long-lived asset held and used, what impairment loss should be recognized?",

            answers: [
                "$70,000",
                "$110,000",
                "$40,000",
                "$0"
            ],

            correctAnswer: 1,

            explanation:
                "Because the $500,000 carrying amount exceeds the $430,000 of undiscounted expected future cash flows, the asset fails the recoverability test. The impairment loss is then measured as carrying amount minus fair value: $500,000 − $390,000 = $110,000."
        }

    );

    return;
}

if (
    moduleId === 6 &&
    lessonId === 4
) {

    showFARLessonPage(
        6,
        4,

        "Liabilities, Debt & Contingencies Review",

        `

        <h2>
            Why This Area Matters
        </h2>

        <p>
            Liabilities questions often combine
            recognition, measurement, classification,
            interest calculations, and disclosure.
        </p>

        <p>
            FAR may also require you to distinguish
            between an amount that should be accrued,
            disclosed only, or not reported at all.
        </p>


        <h2>
            Current vs Long-Term Liabilities
        </h2>

        <p>
            A liability is generally classified as current
            when it is expected to be settled within the
            operating cycle or within one year,
            whichever is longer.
        </p>

        <div class="formula-box">

            CURRENT LIABILITY

            →

            GENERALLY DUE WITHIN

            ONE YEAR

            OR

            OPERATING CYCLE

        </div>


        <h2>
            Common Current Liabilities
        </h2>

        <div class="formula-box">

            ACCOUNTS PAYABLE

            ACCRUED EXPENSES

            SALARIES PAYABLE

            INTEREST PAYABLE

            TAXES PAYABLE

            CURRENT PORTION
            OF LONG-TERM DEBT

            CONTRACT LIABILITIES

        </div>


        <h2>
            Current Portion of Long-Term Debt
        </h2>

        <p>
            The portion of long-term debt due within
            the next year is generally classified
            as a current liability.
        </p>

        <div class="example-box">

            <p>
                Total note payable:
                <strong>$300,000</strong>
            </p>

            <p>
                Principal due next year:
                <strong>$45,000</strong>
            </p>

        </div>

        <div class="formula-box">

            CURRENT LIABILITY

            =

            $45,000


            LONG-TERM PORTION

            =

            $255,000

        </div>


        <h2>
            Accrued Interest
        </h2>

        <div class="formula-box">

            INTEREST

            =

            PRINCIPAL

            ×

            ANNUAL RATE

            ×

            TIME

        </div>


        <h2>
            Example — Accrued Interest
        </h2>

        <p>
            A company has a
            <strong>$200,000</strong>
            note bearing
            <strong>9%</strong>
            annual interest.
        </p>

        <p>
            Three months of interest have accrued.
        </p>

        <div class="formula-box">

            $200,000

            × 9%

            × 3/12

            =

            $4,500

        </div>

        <div class="financial-example">

            <div>
                <span>Interest Expense</span>
                <strong>+ $4,500</strong>
            </div>

            <div>
                <span>Interest Payable</span>
                <strong>+ $4,500</strong>
            </div>

            <div>
                <span>Net Income</span>
                <strong>− $4,500</strong>
            </div>

            <div>
                <span>Cash</span>
                <strong>No Immediate Effect</strong>
            </div>

        </div>


        <h2>
            Bonds Payable
        </h2>

        <p>
            Bond pricing depends on the relationship
            between the bond's stated rate and the
            market yield at issuance.
        </p>

        <div class="formula-box">

            STATED RATE

            =

            MARKET RATE

            →

            ISSUED AT PAR


            STATED RATE

            >

            MARKET RATE

            →

            PREMIUM


            STATED RATE

            <

            MARKET RATE

            →

            DISCOUNT

        </div>


        <h2>
            Why Premiums and Discounts Exist
        </h2>

        <p>
            Investors compare the bond's contractual
            interest payments with the return currently
            available in the market.
        </p>

        <p>
            A bond paying more than the market demands
            is worth more than face value.
        </p>


        <h2>
            Effective Interest Method
        </h2>

        <div class="formula-box">

            INTEREST EXPENSE

            =

            BEGINNING CARRYING AMOUNT

            ×

            EFFECTIVE MARKET RATE

        </div>

        <div class="formula-box">

            CASH INTEREST PAID

            =

            FACE VALUE

            ×

            STATED RATE

        </div>


        <h2>
            Discount Amortization
        </h2>

        <p>
            When bonds are issued at a discount:
        </p>

        <div class="formula-box">

            INTEREST EXPENSE

            >

            CASH INTEREST PAID

        </div>

        <p>
            The difference increases the bond's
            carrying amount over time toward face value.
        </p>


        <h2>
            Premium Amortization
        </h2>

        <p>
            When bonds are issued at a premium:
        </p>

        <div class="formula-box">

            INTEREST EXPENSE

            <

            CASH INTEREST PAID

        </div>

        <p>
            The difference decreases the carrying amount
            toward face value.
        </p>


        <h2>
            Example — Bond Discount
        </h2>

        <div class="example-box">

            <p>
                Face value:
                <strong>$500,000</strong>
            </p>

            <p>
                Stated annual rate:
                <strong>6%</strong>
            </p>

            <p>
                Beginning carrying amount:
                <strong>$470,000</strong>
            </p>

            <p>
                Effective annual rate:
                <strong>8%</strong>
            </p>

        </div>

        <div class="formula-box">

            CASH INTEREST

            =

            $500,000 × 6%

            =

            $30,000


            INTEREST EXPENSE

            =

            $470,000 × 8%

            =

            $37,600


            DISCOUNT AMORTIZATION

            =

            $37,600 − $30,000

            =

            $7,600

        </div>

        <div class="formula-box">

            NEW CARRYING AMOUNT

            =

            $470,000 + $7,600

            =

            $477,600

        </div>


        <h2>
            Loss Contingencies
        </h2>

        <p>
            A loss contingency requires careful evaluation
            of both likelihood and whether the amount
            can be reasonably estimated.
        </p>

        <div class="formula-box">

            PROBABLE

            +

            REASONABLY ESTIMABLE

            →

            ACCRUE


            REASONABLY POSSIBLE

            →

            GENERALLY DISCLOSE


            REMOTE

            →

            GENERALLY NO ACCRUAL
            OR DISCLOSURE

        </div>


        <h2>
            Example — Lawsuit
        </h2>

        <p>
            Attorneys conclude that a loss is
            <strong>probable</strong>
            and estimate the loss at
            <strong>$120,000</strong>.
        </p>

        <div class="financial-example">

            <div>
                <span>Loss Expense</span>
                <strong>+ $120,000</strong>
            </div>

            <div>
                <span>Liability</span>
                <strong>+ $120,000</strong>
            </div>

            <div>
                <span>Net Income</span>
                <strong>− $120,000</strong>
            </div>

        </div>


        <h2>
            Range of Possible Losses
        </h2>

        <p>
            Suppose a loss is probable and the estimated
            range is between
            <strong>$80,000 and $120,000</strong>,
            with no amount in the range considered
            more likely than another.
        </p>

        <p>
            Under U.S. GAAP, the minimum amount in
            the range is generally accrued.
        </p>

        <div class="formula-box">

            ACCRUED LIABILITY

            =

            $80,000

        </div>

        <p>
            Additional disclosure may be required
            regarding the potential additional exposure.
        </p>


        <h2>
            Gain Contingencies
        </h2>

        <p>
            Potential gains are treated more conservatively
            than potential losses.
        </p>

        <p>
            Gain contingencies generally are not recognized
            before realization is sufficiently certain.
        </p>

        <div class="formula-box">

            DO NOT RECOGNIZE
            ANTICIPATED GAINS
            TOO EARLY

        </div>


        <h2>
            Commitments
        </h2>

        <p>
            A commitment is not automatically a liability.
        </p>

        <p>
            Executory contracts generally do not create
            recognized assets and liabilities simply
            because the agreement has been signed,
            although disclosures may be required
            depending on the circumstances.
        </p>


        <h2>
            Debt Covenant Violations
        </h2>

        <p>
            FAR questions may ask how a violation
            of a debt agreement affects classification.
        </p>

        <p>
            The key issue is whether the violation allows
            the lender to demand repayment and whether
            the conditions for long-term classification
            are satisfied under the applicable accounting
            guidance.
        </p>


        <h2>
            Debt Extinguishment
        </h2>

        <p>
            When debt is extinguished, compare the
            reacquisition price with the debt's net
            carrying amount.
        </p>

        <div class="formula-box">

            GAIN OR LOSS

            =

            NET CARRYING AMOUNT
            OF DEBT

            −

            REACQUISITION PRICE

        </div>

        <p>
            If the company pays less than the carrying
            amount, a gain generally results.
        </p>


        <h2>
            Example — Debt Extinguishment
        </h2>

        <div class="example-box">

            <p>
                Carrying amount of debt:
                <strong>$410,000</strong>
            </p>

            <p>
                Amount paid to retire debt:
                <strong>$395,000</strong>
            </p>

        </div>

        <div class="formula-box">

            GAIN

            =

            $410,000 − $395,000

            =

            $15,000

        </div>


        <h2>
            FAR Liability Strategy
        </h2>

        <div class="formula-box">

            ASK:

            1. DOES A PRESENT OBLIGATION EXIST?

            2. SHOULD IT BE RECOGNIZED?

            3. HOW IS IT MEASURED?

            4. CURRENT OR LONG-TERM?

            5. DOES INTEREST NEED TO ACCRUE?

            6. IS DISCLOSURE ALSO REQUIRED?

        </div>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    The current portion of long-term debt
                    is generally classified as current.
                </li>

                <li>
                    Accrued interest creates both an expense
                    and a liability.
                </li>

                <li>
                    Bond discounts increase interest expense
                    relative to cash interest paid.
                </li>

                <li>
                    Bond premiums decrease interest expense
                    relative to cash interest paid.
                </li>

                <li>
                    Probable and reasonably estimable
                    loss contingencies are generally accrued.
                </li>

                <li>
                    Reasonably possible losses are generally
                    disclosed rather than accrued.
                </li>

                <li>
                    Gain contingencies are not recognized
                    prematurely.
                </li>

                <li>
                    Debt extinguishment gains and losses
                    depend on the difference between carrying
                    amount and reacquisition price.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "A company has $500,000 face-value bonds outstanding with a 6% stated rate. The beginning carrying amount is $470,000 and the effective market rate is 8%. What is the carrying amount after one year of interest under the effective-interest method?",

            answers: [
                "$470,000",
                "$500,000",
                "$477,600",
                "$462,400"
            ],

            correctAnswer: 2,

            explanation:
                "Cash interest is $500,000 × 6% = $30,000. Interest expense is $470,000 × 8% = $37,600. The $7,600 difference amortizes the bond discount and increases the carrying amount to $477,600."
        }

    );

    return;
}

if (
    moduleId === 6 &&
    lessonId === 5
) {

    showFARLessonPage(
        6,
        5,

        "Equity & Investment Review",

        `

        <h2>
            Equity and Investments
        </h2>

        <p>
            FAR questions in this area often test whether
            you can connect ownership transactions,
            retained earnings, investment measurement,
            unrealized gains and losses, and financial
            statement presentation.
        </p>


        <h2>
            Basic Stockholders' Equity Structure
        </h2>

        <div class="formula-box">

            STOCKHOLDERS' EQUITY

            MAY INCLUDE:

            COMMON STOCK

            +

            ADDITIONAL PAID-IN CAPITAL

            +

            RETAINED EARNINGS

            +

            ACCUMULATED OTHER
            COMPREHENSIVE INCOME

            −

            TREASURY STOCK

        </div>


        <h2>
            Common Stock Issuance
        </h2>

        <p>
            When stock is issued above par value,
            the par value is credited to common stock
            and the excess is generally credited to
            additional paid-in capital.
        </p>


        <h2>
            Example — Stock Issuance
        </h2>

        <p>
            A company issues
            <strong>10,000 shares</strong>
            of $2 par common stock for
            <strong>$15 per share</strong>.
        </p>

        <div class="formula-box">

            CASH RECEIVED

            =

            10,000 × $15

            =

            $150,000

        </div>

        <div class="formula-box">

            COMMON STOCK

            =

            10,000 × $2

            =

            $20,000


            ADDITIONAL PAID-IN CAPITAL

            =

            $150,000 − $20,000

            =

            $130,000

        </div>


        <h2>
            Retained Earnings
        </h2>

        <p>
            Retained earnings generally represents
            accumulated earnings that have not been
            distributed to shareholders.
        </p>

        <div class="formula-box">

            ENDING RETAINED EARNINGS

            =

            BEGINNING RETAINED EARNINGS

            +

            NET INCOME

            −

            DIVIDENDS

            ±

            CERTAIN PRIOR-PERIOD
            ADJUSTMENTS

        </div>


        <h2>
            Example — Retained Earnings
        </h2>

        <div class="example-box">

            <p>
                Beginning retained earnings:
                <strong>$400,000</strong>
            </p>

            <p>
                Net income:
                <strong>$90,000</strong>
            </p>

            <p>
                Dividends:
                <strong>$25,000</strong>
            </p>

        </div>

        <div class="formula-box">

            $400,000

            + $90,000

            − $25,000

            =

            $465,000

            ENDING RETAINED EARNINGS

        </div>


        <h2>
            Cash Dividends
        </h2>

        <p>
            Once a cash dividend is declared,
            retained earnings decreases and a dividend
            payable is generally recognized.
        </p>

        <div class="financial-example">

            <div>
                <span>Retained Earnings</span>
                <strong>Decrease</strong>
            </div>

            <div>
                <span>Dividends Payable</span>
                <strong>Increase</strong>
            </div>

            <div>
                <span>Total Equity</span>
                <strong>Decrease</strong>
            </div>

        </div>


        <h2>
            Stock Dividends
        </h2>

        <p>
            A stock dividend generally reallocates amounts
            within stockholders' equity rather than
            reducing total stockholders' equity.
        </p>

        <div class="formula-box">

            STOCK DIVIDEND

            →

            RETAINED EARNINGS ↓

            CONTRIBUTED CAPITAL ↑

            TOTAL EQUITY

            GENERALLY UNCHANGED

        </div>


        <h2>
            Stock Splits
        </h2>

        <p>
            A stock split increases the number of shares
            outstanding and decreases par value per share
            proportionately.
        </p>

        <p>
            Total stockholders' equity generally does
            not change.
        </p>

        <div class="formula-box">

            2-FOR-1 STOCK SPLIT

            →

            SHARES DOUBLE

            PAR VALUE PER SHARE HALVES

            TOTAL EQUITY UNCHANGED

        </div>


        <h2>
            Treasury Stock
        </h2>

        <p>
            Treasury stock represents an entity's own
            shares that have been reacquired.
        </p>

        <p>
            Treasury stock is generally presented as
            a reduction of stockholders' equity,
            not as an asset.
        </p>

        <div class="formula-box">

            PURCHASE TREASURY STOCK

            →

            CASH ↓

            TOTAL EQUITY ↓

        </div>


        <h2>
            Example — Treasury Stock
        </h2>

        <p>
            A company reacquires
            <strong>2,000 shares</strong>
            of its common stock for
            <strong>$18 per share</strong>.
        </p>

        <div class="formula-box">

            TREASURY STOCK COST

            =

            2,000 × $18

            =

            $36,000

        </div>

        <p>
            Under the cost method, treasury stock
            is generally recorded at the amount paid
            to reacquire the shares.
        </p>


        <h2>
            Investment Classification Matters
        </h2>

        <p>
            The accounting for an investment depends
            on the type of security and the investor's
            relationship with the investee.
        </p>

        <div class="formula-box">

            ASK:

            DEBT OR EQUITY SECURITY?

            WHAT LEVEL OF INFLUENCE EXISTS?

            WHAT MEASUREMENT CATEGORY APPLIES?

            WHERE DO CHANGES IN VALUE GO?

        </div>


        <h2>
            Equity Securities
        </h2>

        <p>
            Equity securities with readily determinable
            fair values are generally measured at fair value,
            with changes in fair value recognized in
            net income.
        </p>

        <div class="formula-box">

            EQUITY SECURITY
            FAIR VALUE CHANGE

            →

            GENERALLY NET INCOME

        </div>


        <h2>
            Example — Equity Investment
        </h2>

        <p>
            An equity investment is purchased for
            <strong>$80,000</strong>.
        </p>

        <p>
            Its fair value at year-end is
            <strong>$92,000</strong>.
        </p>

        <div class="formula-box">

            UNREALIZED GAIN

            =

            $92,000 − $80,000

            =

            $12,000

        </div>

        <p>
            Assuming the investment is subject to
            fair value through net income,
            the $12,000 unrealized gain increases
            current-period income.
        </p>


        <h2>
            Debt Securities
        </h2>

        <p>
            Debt securities may be classified differently
            depending on management's intent and the
            applicable accounting guidance.
        </p>

        <div class="formula-box">

            COMMON CATEGORIES:

            HELD-TO-MATURITY

            AVAILABLE-FOR-SALE

            TRADING

        </div>


        <h2>
            Held-to-Maturity Debt Securities
        </h2>

        <p>
            Held-to-maturity securities are debt securities
            for which the entity has the positive intent
            and ability to hold until maturity.
        </p>

        <div class="formula-box">

            HELD-TO-MATURITY

            →

            AMORTIZED COST

        </div>


        <h2>
            Trading Debt Securities
        </h2>

        <p>
            Trading debt securities are generally
            measured at fair value.
        </p>

        <div class="formula-box">

            TRADING SECURITY
            FAIR VALUE CHANGE

            →

            NET INCOME

        </div>


        <h2>
            Available-for-Sale Debt Securities
        </h2>

        <p>
            Available-for-sale debt securities are
            generally measured at fair value.
        </p>

        <p>
            Unrealized holding gains and losses are
            generally reported in
            <strong>other comprehensive income</strong>,
            subject to specific impairment and credit-loss
            guidance.
        </p>

        <div class="formula-box">

            AFS DEBT SECURITY

            →

            FAIR VALUE


            UNREALIZED HOLDING
            GAIN OR LOSS

            →

            GENERALLY OCI

        </div>


        <h2>
            Net Income vs OCI
        </h2>

        <p>
            This distinction is important throughout FAR.
        </p>

        <div class="formula-box">

            NET INCOME

            →

            AFFECTS RETAINED EARNINGS


            OTHER COMPREHENSIVE INCOME

            →

            ACCUMULATES IN AOCI

        </div>


        <h2>
            Comprehensive Income
        </h2>

        <div class="formula-box">

            COMPREHENSIVE INCOME

            =

            NET INCOME

            +

            OTHER COMPREHENSIVE INCOME

        </div>


        <h2>
            Equity Method Investments
        </h2>

        <p>
            When an investor has significant influence
            over an investee, the equity method may apply.
        </p>

        <p>
            Significant influence is often associated
            with ownership of approximately
            <strong>20% to 50%</strong>,
            although ownership percentage alone is
            not always determinative.
        </p>


        <h2>
            Equity Method — Basic Mechanics
        </h2>

        <div class="formula-box">

            INVESTEE NET INCOME

            →

            INVESTMENT ACCOUNT ↑

            INVESTOR INCOME ↑


            INVESTEE DIVIDENDS

            →

            INVESTMENT ACCOUNT ↓

            CASH ↑

        </div>

        <p>
            Dividends received under the equity method
            are generally treated as a return of investment,
            not additional dividend income.
        </p>


        <h2>
            Example — Equity Method
        </h2>

        <p>
            Investor owns
            <strong>30%</strong>
            of Investee.
        </p>

        <div class="example-box">

            <p>
                Investee net income:
                <strong>$100,000</strong>
            </p>

            <p>
                Investee dividends:
                <strong>$20,000</strong>
            </p>

        </div>

        <div class="formula-box">

            INVESTOR SHARE OF INCOME

            =

            $100,000 × 30%

            =

            $30,000

        </div>

        <div class="formula-box">

            DIVIDENDS RECEIVED

            =

            $20,000 × 30%

            =

            $6,000

        </div>

        <div class="formula-box">

            NET INCREASE
            IN INVESTMENT ACCOUNT

            =

            $30,000 − $6,000

            =

            $24,000

        </div>


        <h2>
            Dividends and Investment Accounting
        </h2>

        <p>
            Be careful with dividends because their
            accounting depends on the investment method.
        </p>

        <div class="formula-box">

            EQUITY METHOD:

            DIVIDENDS

            →

            REDUCE INVESTMENT ACCOUNT


            FAIR VALUE INVESTMENT:

            DIVIDEND INCOME

            →

            GENERALLY RECOGNIZED
            IN INCOME

        </div>


        <h2>
            Integrated Equity Example
        </h2>

        <p>
            Beginning retained earnings are
            <strong>$600,000</strong>.
        </p>

        <p>
            During the year:
        </p>

        <div class="example-box">

            <p>
                Net income:
                <strong>$140,000</strong>
            </p>

            <p>
                Cash dividends:
                <strong>$35,000</strong>
            </p>

        </div>

        <div class="formula-box">

            ENDING RETAINED EARNINGS

            =

            $600,000

            + $140,000

            − $35,000

            =

            $705,000

        </div>


        <h2>
            FAR Strategy
        </h2>

        <div class="formula-box">

            FOR EQUITY:

            WHAT TYPE OF TRANSACTION
            OCCURRED?

            DOES TOTAL EQUITY CHANGE
            OR ONLY ITS COMPOSITION?


            FOR INVESTMENTS:

            WHAT TYPE OF SECURITY?

            WHAT ACCOUNTING METHOD?

            WHERE DOES THE GAIN,
            LOSS, OR INCOME APPEAR?

        </div>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    Stock issued above par increases both
                    common stock and additional paid-in capital.
                </li>

                <li>
                    Cash dividends reduce retained earnings
                    and total stockholders' equity.
                </li>

                <li>
                    Stock dividends generally reclassify
                    amounts within equity rather than
                    reducing total equity.
                </li>

                <li>
                    Treasury stock is a contra-equity account,
                    not an asset.
                </li>

                <li>
                    Equity securities subject to fair value
                    measurement generally report fair value
                    changes in net income.
                </li>

                <li>
                    Held-to-maturity debt securities are
                    generally measured at amortized cost.
                </li>

                <li>
                    Unrealized holding gains and losses on
                    available-for-sale debt securities are
                    generally reported in OCI.
                </li>

                <li>
                    Under the equity method, the investor
                    recognizes its share of investee income
                    and reduces the investment account for
                    dividends received.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "An investor owns 30% of an investee and appropriately uses the equity method. The investee reports $100,000 of net income and pays $20,000 of dividends during the year. Ignoring other adjustments, by how much does the investor's investment account increase during the year?",

            answers: [
                "$24,000",
                "$30,000",
                "$6,000",
                "$36,000"
            ],

            correctAnswer: 0,

            explanation:
                "The investor recognizes 30% of the investee's $100,000 net income, increasing the investment account by $30,000. The investor receives 30% of the $20,000 dividends, or $6,000, which reduces the investment account. The net increase is $30,000 − $6,000 = $24,000."
        }

    );

    return;
}

if (
    moduleId === 6 &&
    lessonId === 6
) {

    showFARLessonPage(
        6,
        6,

        "Accounting Changes, Errors & Subsequent Events",

        `

        <h2>
            Why This Topic Is Important
        </h2>

        <p>
            FAR frequently requires you to determine
            whether an event represents a change in
            accounting principle, a change in estimate,
            an error correction, or a subsequent event.
        </p>

        <p>
            The classification matters because each
            category can require a different accounting
            treatment.
        </p>


        <h2>
            The Three Major Categories
        </h2>

        <div class="formula-box">

            ACCOUNTING CHANGE OR ERROR

            ↓

            CHANGE IN PRINCIPLE

            CHANGE IN ESTIMATE

            ERROR CORRECTION

        </div>


        <h2>
            Change in Accounting Principle
        </h2>

        <p>
            A change in accounting principle occurs when
            an entity changes from one generally accepted
            accounting principle to another generally
            accepted accounting principle.
        </p>

        <div class="formula-box">

            EXAMPLE:

            FIFO

            →

            WEIGHTED-AVERAGE

        </div>

        <p>
            Changes in accounting principle are generally
            reported through
            <strong>retrospective application</strong>,
            unless it is impracticable to determine the
            period-specific or cumulative effects.
        </p>


        <h2>
            Retrospective Application
        </h2>

        <div class="formula-box">

            RETROSPECTIVE

            →

            PRIOR COMPARATIVE PERIODS

            ARE PRESENTED AS IF

            THE NEW PRINCIPLE

            HAD ALWAYS BEEN USED

        </div>

        <p>
            The carrying amounts of assets and liabilities
            may need adjustment, along with the opening
            balance of retained earnings for the earliest
            period presented when appropriate.
        </p>


        <h2>
            Example — Change in Principle
        </h2>

        <p>
            A company changes from FIFO to
            weighted-average inventory accounting.
        </p>

        <p>
            Assuming retrospective application is
            practicable, prior comparative financial
            statements are adjusted to reflect the
            new accounting principle.
        </p>


        <h2>
            Important Exception — Change to LIFO
        </h2>

        <p>
            A change to LIFO is generally treated
            differently because reconstructing prior
            LIFO layers may be impracticable.
        </p>

        <div class="formula-box">

            CHANGE TO LIFO

            →

            GENERALLY PROSPECTIVE

        </div>


        <h2>
            Change in Accounting Estimate
        </h2>

        <p>
            Estimates change because new information
            becomes available or circumstances change.
        </p>

        <p>
            These are not corrections of mistakes.
        </p>

        <div class="formula-box">

            COMMON ESTIMATE CHANGES:

            USEFUL LIFE

            RESIDUAL VALUE

            EXPECTED CREDIT LOSSES

            WARRANTY OBLIGATIONS

            OTHER ACCOUNTING ESTIMATES

        </div>


        <h2>
            Prospective Treatment
        </h2>

        <div class="formula-box">

            CHANGE IN ESTIMATE

            →

            PROSPECTIVE


            CURRENT PERIOD

            AND

            FUTURE PERIODS

            AS APPLICABLE

        </div>

        <p>
            Prior financial statements are not revised
            simply because management has obtained
            better information.
        </p>


        <h2>
            Example — Revised Useful Life
        </h2>

        <p>
            Equipment originally cost
            <strong>$100,000</strong>,
            has no residual value, and originally had
            a 10-year useful life.
        </p>

        <p>
            After four years, accumulated depreciation
            is <strong>$40,000</strong>.
        </p>

        <p>
            At that point, management estimates that
            the equipment has
            <strong>3 years of remaining useful life</strong>.
        </p>

        <div class="formula-box">

            CARRYING AMOUNT

            =

            $100,000 − $40,000

            =

            $60,000

        </div>

        <div class="formula-box">

            NEW ANNUAL DEPRECIATION

            =

            $60,000 ÷ 3

            =

            $20,000

        </div>

        <p>
            The prior four years are not restated.
            The new estimate is used prospectively.
        </p>


        <h2>
            Change in Estimate Effected by
            a Change in Principle
        </h2>

        <p>
            Sometimes a change has characteristics
            of both a principle and an estimate.
        </p>

        <p>
            A classic example is a change in
            depreciation method.
        </p>

        <div class="formula-box">

            CHANGE IN DEPRECIATION METHOD

            →

            CHANGE IN ESTIMATE

            EFFECTED BY A CHANGE
            IN ACCOUNTING PRINCIPLE

            →

            PROSPECTIVE

        </div>


        <h2>
            Error Corrections
        </h2>

        <p>
            An accounting error is different from a
            change in estimate.
        </p>

        <p>
            Errors may result from mathematical mistakes,
            incorrect application of GAAP, or oversight
            or misuse of facts that existed when the
            financial statements were prepared.
        </p>

        <div class="formula-box">

            ERROR

            →

            PRIOR-PERIOD CORRECTION

            NOT

            A CHANGE IN ESTIMATE

        </div>


        <h2>
            Examples of Errors
        </h2>

        <div class="formula-box">

            EXPENSING AN ASSET
            THAT SHOULD HAVE
            BEEN CAPITALIZED


            FAILING TO RECORD
            AN ACCRUED LIABILITY


            MATHEMATICAL ERROR


            INCORRECT APPLICATION
            OF AN ACCOUNTING RULE

        </div>


        <h2>
            Prior-Period Adjustments
        </h2>

        <p>
            A material error in previously issued
            financial statements generally requires
            correction of the prior-period financial
            statements presented.
        </p>

        <p>
            When applicable, the beginning balance
            of retained earnings of the earliest period
            presented is adjusted for the cumulative
            effect relating to periods before those
            presented.
        </p>


        <h2>
            Example — Prior-Period Error
        </h2>

        <p>
            Assume a company incorrectly expensed
            <strong>$50,000</strong> of equipment in a
            prior year when the amount should have
            been capitalized.
        </p>

        <p>
            This is not a change in estimate.
            It is an accounting error.
        </p>

        <div class="formula-box">

            PRIOR-YEAR ERROR

            →

            CORRECT PRIOR-PERIOD
            FINANCIAL STATEMENTS

            +

            ADJUST BEGINNING
            EQUITY WHEN REQUIRED

        </div>


        <h2>
            Estimate Change or Error?
        </h2>

        <p>
            This distinction is heavily tested.
        </p>

        <div class="formula-box">

            NEW INFORMATION?

            →

            USUALLY ESTIMATE CHANGE


            INFORMATION WAS AVAILABLE
            BUT ACCOUNTING WAS WRONG?

            →

            USUALLY ERROR

        </div>


        <h2>
            Subsequent Events
        </h2>

        <p>
            Subsequent events occur after the
            balance-sheet date but before the financial
            statements are issued or are available
            to be issued, as applicable.
        </p>

        <p>
            The key question is whether the event
            provides additional evidence about a
            condition that already existed at the
            balance-sheet date.
        </p>


        <h2>
            Recognized Subsequent Events
        </h2>

        <p>
            A recognized subsequent event provides
            additional evidence about conditions that
            existed at the balance-sheet date.
        </p>

        <div class="formula-box">

            CONDITION EXISTED
            AT BALANCE-SHEET DATE

            +

            NEW INFORMATION
            RECEIVED AFTER YEAR-END

            →

            ADJUST FINANCIAL STATEMENTS

        </div>


        <h2>
            Example — Customer Bankruptcy
        </h2>

        <p>
            A major customer was experiencing severe
            financial difficulty at December 31.
        </p>

        <p>
            In January, before the financial statements
            are issued, the customer files for bankruptcy.
        </p>

        <p>
            If the bankruptcy confirms that the customer's
            financial deterioration existed at year-end,
            the receivable and related credit-loss estimate
            should generally be adjusted.
        </p>


        <h2>
            Nonrecognized Subsequent Events
        </h2>

        <p>
            A nonrecognized subsequent event relates
            to a condition that arose after the
            balance-sheet date.
        </p>

        <div class="formula-box">

            CONDITION AROSE

            AFTER

            BALANCE-SHEET DATE

            →

            DO NOT ADJUST
            YEAR-END AMOUNTS

        </div>

        <p>
            If the event is material, disclosure may
            still be necessary.
        </p>


        <h2>
            Example — Fire After Year-End
        </h2>

        <p>
            A company's manufacturing facility is
            destroyed by a fire in January.
        </p>

        <p>
            The fire was unrelated to any condition
            existing at December 31.
        </p>

        <div class="formula-box">

            NO YEAR-END ADJUSTMENT

            BUT

            MATERIAL EVENT MAY
            REQUIRE DISCLOSURE

        </div>


        <h2>
            Subsequent-Event Decision Process
        </h2>

        <div class="formula-box">

            STEP 1

            WHAT CONDITION
            CAUSED THE EVENT?


            STEP 2

            DID THAT CONDITION EXIST
            AT THE BALANCE-SHEET DATE?


            YES

            →

            GENERALLY RECOGNIZE / ADJUST


            NO

            →

            GENERALLY DO NOT ADJUST


            STEP 3

            IF NOT RECOGNIZED,
            IS THE EVENT MATERIAL?


            YES

            →

            CONSIDER DISCLOSURE

        </div>


        <h2>
            Example — Lawsuit
        </h2>

        <p>
            A lawsuit concerning an event that occurred
            before year-end is settled after year-end
            but before issuance of the financial statements.
        </p>

        <p>
            The settlement may provide additional evidence
            about the obligation that existed at year-end.
        </p>

        <p>
            Therefore, the year-end financial statements
            may require adjustment.
        </p>


        <h2>
            Integrated Classification Review
        </h2>

        <div class="formula-box">

            CHANGE IN PRINCIPLE

            →

            GENERALLY RETROSPECTIVE


            CHANGE IN ESTIMATE

            →

            PROSPECTIVE


            ERROR CORRECTION

            →

            RESTATE / CORRECT
            PRIOR PERIODS


            RECOGNIZED
            SUBSEQUENT EVENT

            →

            ADJUST


            NONRECOGNIZED
            SUBSEQUENT EVENT

            →

            NO ADJUSTMENT

            POSSIBLE DISCLOSURE

        </div>


        <h2>
            Common FAR Traps
        </h2>

        <div class="formula-box">

            NEW ESTIMATE

            ≠

            ERROR


            CHANGE IN DEPRECIATION METHOD

            →

            PROSPECTIVE


            EVENT HAPPENED AFTER YEAR-END

            DOES NOT AUTOMATICALLY MEAN

            NONRECOGNIZED


            ASK WHEN THE
            UNDERLYING CONDITION EXISTED

        </div>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    Changes in accounting principle are
                    generally applied retrospectively.
                </li>

                <li>
                    Changes in accounting estimates are
                    generally applied prospectively.
                </li>

                <li>
                    A change in depreciation method is
                    generally treated prospectively as
                    a change in estimate effected by a
                    change in accounting principle.
                </li>

                <li>
                    Material errors from prior periods
                    require correction rather than
                    prospective treatment.
                </li>

                <li>
                    Recognized subsequent events provide
                    additional evidence about conditions
                    existing at the balance-sheet date.
                </li>

                <li>
                    Nonrecognized subsequent events arise
                    from conditions occurring after the
                    balance-sheet date.
                </li>

                <li>
                    Material nonrecognized subsequent
                    events may require disclosure even
                    though year-end amounts are not adjusted.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "After four years of use, a company revises the remaining useful life of equipment based on new information. How should the change generally be accounted for?",

            answers: [
                "Restate all prior periods and adjust beginning retained earnings",
                "Record the entire effect as a prior-period error",
                "Apply the new estimate retrospectively from the acquisition date",
                "Apply the revised estimate prospectively to the current and future periods"
            ],

            correctAnswer: 3,

            explanation:
                "A revision of an asset's useful life based on new information is a change in accounting estimate. Changes in estimates are accounted for prospectively in the period of change and future periods affected by the change."
        }

    );

    return;
}

if (
    moduleId === 6 &&
    lessonId === 7
) {

    showFARLessonPage(
        6,
        7,

        "Governmental Accounting Final Review",

        `

        <h2>
            The Big Governmental Accounting Split
        </h2>

        <p>
            Governmental accounting becomes much easier
            when you first identify which financial
            statements you are dealing with.
        </p>

        <div class="formula-box">

            GOVERNMENT-WIDE STATEMENTS

            →

            ECONOMIC RESOURCES

            +

            ACCRUAL ACCOUNTING


            GOVERNMENTAL FUND STATEMENTS

            →

            CURRENT FINANCIAL RESOURCES

            +

            MODIFIED ACCRUAL

        </div>


        <h2>
            Government-Wide Financial Statements
        </h2>

        <p>
            Government-wide statements provide a broad
            economic view of governmental and business-type
            activities.
        </p>

        <div class="formula-box">

            GOVERNMENT-WIDE:

            STATEMENT OF NET POSITION

            STATEMENT OF ACTIVITIES

        </div>

        <p>
            These statements generally include long-term
            assets and long-term liabilities.
        </p>


        <h2>
            Governmental Fund Statements
        </h2>

        <p>
            Governmental funds focus on current financial
            resources rather than the government's total
            economic resources.
        </p>

        <div class="formula-box">

            GOVERNMENTAL FUND:

            BALANCE SHEET

            +

            STATEMENT OF REVENUES,
            EXPENDITURES, AND
            CHANGES IN FUND BALANCES

        </div>


        <h2>
            Governmental Funds
        </h2>

        <p>
            The governmental fund category includes:
        </p>

        <div class="formula-box">

            GENERAL FUND

            SPECIAL REVENUE FUNDS

            CAPITAL PROJECTS FUNDS

            DEBT SERVICE FUNDS

            PERMANENT FUNDS

        </div>


        <h2>
            General Fund
        </h2>

        <p>
            The General Fund accounts for resources
            not required to be reported in another fund.
        </p>

        <div class="formula-box">

            GENERAL FUND

            →

            DEFAULT GOVERNMENTAL FUND

        </div>


        <h2>
            Special Revenue Fund
        </h2>

        <p>
            Special revenue funds generally account
            for proceeds of specific revenue sources
            restricted or committed to specified purposes
            other than debt service or capital projects.
        </p>


        <h2>
            Capital Projects Fund
        </h2>

        <p>
    Capital projects funds generally account for
    financial resources that are restricted, committed,
    or assigned for capital outlays, including the
    acquisition or construction of capital facilities
    and other capital assets.
</p>


        <h2>
            Debt Service Fund
        </h2>

        <p>
            Debt service funds generally account for
            resources accumulated and used for principal
            and interest payments on general long-term debt.
        </p>


        <h2>
            Permanent Fund
        </h2>

        <p>
            Permanent funds account for resources for which
            the principal generally must remain intact
            while earnings may be used for governmental
            purposes.
        </p>


        <h2>
            Modified Accrual Revenue Recognition
        </h2>

        <p>
            Under modified accrual accounting,
            governmental fund revenue is generally recognized
            when it is both:
        </p>

        <div class="formula-box">

            MEASURABLE

            +

            AVAILABLE

            →

            RECOGNIZE REVENUE

        </div>

        <p>
            Available generally means collectible soon enough
            to finance expenditures of the current period.
        </p>


        <h2>
            Example — Property Tax Revenue
        </h2>

        <p>
            Assume a governmental fund levies
            <strong>$1,000,000</strong>
            of property taxes.
        </p>

        <p>
            At year-end:
        </p>

        <div class="example-box">

            <p>
                Amount measurable:
                <strong>$1,000,000</strong>
            </p>

            <p>
                Amount considered available:
                <strong>$940,000</strong>
            </p>

        </div>

        <div class="formula-box">

            REVENUE RECOGNIZED

            =

            $940,000

        </div>

        <p>
            The portion not considered available is not
            recognized as current-period governmental fund
            revenue merely because it is measurable.
        </p>


        <h2>
            Expenditures vs Expenses
        </h2>

        <p>
            Governmental fund statements report
            <strong>expenditures</strong>,
            while government-wide statements report
            <strong>expenses</strong>.
        </p>

        <div class="formula-box">

            GOVERNMENTAL FUND

            →

            EXPENDITURES


            GOVERNMENT-WIDE

            →

            EXPENSES

        </div>


        <h2>
            Capital Asset Purchase
        </h2>

        <p>
            This is one of the most important governmental
            accounting differences.
        </p>

        <p>
            Suppose a government purchases equipment for
            <strong>$300,000</strong>.
        </p>

        <div class="formula-box">

            GOVERNMENTAL FUND:

            CAPITAL OUTLAY EXPENDITURE

            =

            $300,000

        </div>

        <div class="formula-box">

            GOVERNMENT-WIDE:

            CAPITAL ASSET

            =

            $300,000

            THEN

            DEPRECIATE OVER USEFUL LIFE

        </div>


        <h2>
            Long-Term Debt Issuance
        </h2>

        <p>
            Governmental funds generally do not report
            general long-term debt as a fund liability.
        </p>

        <p>
            Instead, proceeds from issuance of general
            long-term debt are generally reported as an
            <strong>other financing source</strong>
            in the governmental fund.
        </p>

        <div class="formula-box">

            GOVERNMENTAL FUND:

            BOND PROCEEDS

            →

            OTHER FINANCING SOURCE


            GOVERNMENT-WIDE:

            BOND ISSUANCE

            →

            LONG-TERM LIABILITY

        </div>


        <h2>
            Example — Bond Issuance
        </h2>

        <p>
            A city issues
            <strong>$2,000,000</strong>
            of general obligation bonds.
        </p>

        <div class="financial-example">

            <div>
                <span>Governmental Fund</span>
                <strong>
                    $2,000,000 Other Financing Source
                </strong>
            </div>

            <div>
                <span>Government-Wide</span>
                <strong>
                    $2,000,000 Liability
                </strong>
            </div>

        </div>


        <h2>
            Debt Principal Payments
        </h2>

        <p>
            In governmental funds, payment of general
            long-term debt principal is generally reported
            as an expenditure.
        </p>

        <div class="formula-box">

            GOVERNMENTAL FUND

            PRINCIPAL PAYMENT

            →

            EXPENDITURE


            GOVERNMENT-WIDE

            PRINCIPAL PAYMENT

            →

            REDUCE LIABILITY

        </div>


        <h2>
            Interest on Long-Term Debt
        </h2>

        <p>
            Governmental funds generally recognize
            expenditures for general long-term debt
            interest when the related obligation becomes
            due, subject to applicable governmental
            accounting guidance.
        </p>

        <p>
            Government-wide statements use accrual
            accounting and recognize interest expense
            as incurred.
        </p>


        <h2>
            Encumbrances
        </h2>

        <p>
            Encumbrance accounting is a budgetary control
            mechanism often associated with governmental
            accounting.
        </p>

        <p>
            A purchase order can create an encumbrance,
            helping prevent governments from committing
            resources beyond authorized amounts.
        </p>

        <div class="formula-box">

            PURCHASE ORDER

            →

            ENCUMBRANCE


            GOODS / SERVICES RECEIVED

            →

            REVERSE ENCUMBRANCE

            +

            RECORD ACTUAL EXPENDITURE
            AND LIABILITY

        </div>

        <p>
            An outstanding encumbrance by itself is not
            the same thing as a recognized expenditure
            or liability.
        </p>


        <h2>
            Proprietary Funds
        </h2>

        <p>
            Proprietary funds use accounting similar
            to business enterprises.
        </p>

        <div class="formula-box">

            PROPRIETARY FUNDS

            →

            ECONOMIC RESOURCES

            +

            ACCRUAL ACCOUNTING

        </div>

        <p>
            The two major proprietary fund types are:
        </p>

        <div class="formula-box">

            ENTERPRISE FUND

            INTERNAL SERVICE FUND

        </div>


        <h2>
            Enterprise Funds
        </h2>

        <p>
            Enterprise funds generally report activities
            financed primarily through charges to external
            users for goods or services.
        </p>

        <div class="formula-box">

            COMMON EXAMPLES:

            WATER UTILITY

            PUBLIC TRANSIT SYSTEM

            MUNICIPAL AIRPORT

        </div>


        <h2>
            Internal Service Funds
        </h2>

        <p>
            Internal service funds generally account
            for goods or services provided primarily
            to other departments or agencies of the
            same government.
        </p>


        <h2>
            Fiduciary Activities
        </h2>

        <p>
            Fiduciary activities involve resources
            the government holds for others and that
            meet the applicable fiduciary criteria.
        </p>

        <p>
            Fiduciary funds use:
        </p>

        <div class="formula-box">

            ECONOMIC RESOURCES

            +

            ACCRUAL ACCOUNTING

        </div>

        <p>
            Fiduciary activities generally are not
            included in government-wide governmental
            or business-type activities because those
            resources are held for others.
        </p>


        <h2>
            Government-Wide Classification
        </h2>

        <div class="formula-box">

            GOVERNMENTAL ACTIVITIES

            +

            BUSINESS-TYPE ACTIVITIES

        </div>

        <p>
            Fiduciary activities are excluded from
            these government-wide activity columns.
        </p>


        <h2>
            Fund Balance Categories
        </h2>

        <p>
            Governmental fund balance may be classified
            into several categories based on the nature
            of constraints placed on the resources.
        </p>

        <div class="formula-box">

            NONSPENDABLE

            RESTRICTED

            COMMITTED

            ASSIGNED

            UNASSIGNED

        </div>


        <h2>
            Nonspendable
        </h2>

        <p>
            Resources are nonspendable when they cannot
            be spent because of their form or because
            they are legally or contractually required
            to remain intact.
        </p>


        <h2>
            Restricted
        </h2>

        <p>
            Restricted fund balance results from
            externally enforceable constraints or
            qualifying legal restrictions.
        </p>


        <h2>
            Committed
        </h2>

        <p>
            Committed amounts are constrained for a
            specific purpose by the government's
            highest level of decision-making authority.
        </p>


        <h2>
            Assigned
        </h2>

        <p>
            Assigned amounts represent intended uses
            of resources that do not meet the stricter
            criteria for restricted or committed
            classification.
        </p>


        <h2>
            Unassigned
        </h2>

        <p>
            Unassigned fund balance generally represents
            residual spendable resources available
            for purposes not otherwise constrained.
        </p>


        <h2>
            Reconciliation Is Critical
        </h2>

        <p>
            Governmental fund statements and government-wide
            statements use different measurement focuses
            and bases of accounting.
        </p>

        <p>
            Therefore, reconciliation is required.
        </p>

        <div class="formula-box">

            GOVERNMENTAL FUND BALANCE

            +

            CAPITAL ASSETS

            −

            ACCUMULATED DEPRECIATION

            −

            LONG-TERM LIABILITIES

            ±

            OTHER CONVERSION ITEMS

            =

            GOVERNMENTAL ACTIVITIES
            NET POSITION

        </div>


        <h2>
            Example — Simple Reconciliation
        </h2>

        <div class="example-box">

            <p>
                Governmental fund balance:
                <strong>$900,000</strong>
            </p>

            <p>
                Capital assets, net:
                <strong>$2,400,000</strong>
            </p>

            <p>
                General long-term debt:
                <strong>$1,500,000</strong>
            </p>

        </div>

        <div class="formula-box">

            $900,000

            + $2,400,000

            − $1,500,000

            =

            $1,800,000

            GOVERNMENTAL ACTIVITIES
            NET POSITION

        </div>


        <h2>
            Conversion Logic
        </h2>

        <div class="formula-box">

            FUND STATEMENTS

            DO NOT REPORT
            GENERAL CAPITAL ASSETS

            →

            ADD THEM


            FUND STATEMENTS

            DO NOT REPORT
            GENERAL LONG-TERM LIABILITIES

            →

            SUBTRACT THEM

        </div>


        <h2>
            Capital Outlay Conversion
        </h2>

        <p>
            A governmental fund reports the entire cost
            of a capital asset as an expenditure.
        </p>

        <p>
            At the government-wide level, however,
            the asset is capitalized and depreciation
            expense is recognized over time.
        </p>

        <div class="formula-box">

            FUND EXPENDITURE

            →

            REMOVE FOR
            GOVERNMENT-WIDE PURPOSES


            CAPITALIZE ASSET

            +

            RECOGNIZE DEPRECIATION

        </div>


        <h2>
            Bond Proceeds Conversion
        </h2>

        <p>
            Governmental fund bond proceeds are other
            financing sources.
        </p>

        <p>
            At the government-wide level, issuing debt
            does not create revenue.
        </p>

        <div class="formula-box">

            REMOVE

            OTHER FINANCING SOURCE

            +

            RECORD LIABILITY

        </div>


        <h2>
            FAR Governmental Strategy
        </h2>

        <div class="formula-box">

            FIRST QUESTION:

            FUND LEVEL

            OR

            GOVERNMENT-WIDE?


            THEN ASK:

            WHAT MEASUREMENT FOCUS?

            WHAT BASIS OF ACCOUNTING?

            REVENUE OR OTHER FINANCING SOURCE?

            EXPENDITURE OR EXPENSE?

            CAPITAL ASSET REPORTED?

            LONG-TERM DEBT REPORTED?

        </div>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    Governmental funds use the current
                    financial resources measurement focus
                    and modified accrual accounting.
                </li>

                <li>
                    Government-wide statements use the
                    economic resources measurement focus
                    and accrual accounting.
                </li>

                <li>
                    Governmental fund revenue generally
                    must be measurable and available.
                </li>

                <li>
                    General capital asset purchases are
                    expenditures at the governmental
                    fund level but assets at the
                    government-wide level.
                </li>

                <li>
                    General long-term bond proceeds are
                    generally other financing sources
                    in governmental funds but liabilities
                    at the government-wide level.
                </li>

                <li>
                    Proprietary and fiduciary funds use
                    accrual accounting and an economic
                    resources measurement focus.
                </li>

                <li>
                    Encumbrances help control spending
                    but are not automatically liabilities
                    or expenditures.
                </li>

                <li>
                    Reconciliations explain the differences
                    between governmental fund reporting
                    and government-wide reporting.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "A city issues $2,000,000 of general obligation bonds to finance construction of a public building. How should the bond proceeds generally be reported in the city's governmental fund statements?",

            answers: [
                "As revenue",
                "As a long-term liability",
                "As an expenditure",
                "As an other financing source"
            ],

            correctAnswer: 3,

            explanation:
                "Governmental funds focus on current financial resources and generally do not report general long-term debt as a fund liability. Proceeds from issuing general long-term debt are generally reported as an other financing source. At the government-wide level, the bonds are reported as a liability."
        }

    );

    return;
}

if (
    moduleId === 6 &&
    lessonId === 8
) {

    showFARLessonPage(
        6,
        8,

        "Not-for-Profit Accounting Final Review",

        `

        <h2>
            The NFP Big Picture
        </h2>

        <p>
            Not-for-profit accounting questions often
            revolve around one central issue:
        </p>

        <div class="formula-box">

            WHO IMPOSED THE LIMITATION

            AND

            IS IT A RESTRICTION
            OR A CONDITION?

        </div>

        <p>
            Correctly identifying those two concepts
            solves a large portion of NFP contribution
            questions.
        </p>


        <h2>
            Net Asset Classes
        </h2>

        <p>
            NFP financial statements generally present
            two classes of net assets.
        </p>

        <div class="formula-box">

            NET ASSETS

            ↓

            WITHOUT DONOR RESTRICTIONS

            +

            WITH DONOR RESTRICTIONS

        </div>


        <h2>
            Who Creates a Donor Restriction?
        </h2>

        <p>
            A donor-imposed restriction can limit
            how or when contributed resources may be used.
        </p>

        <p>
            Internal decisions by the board generally
            do not create donor-restricted net assets.
        </p>

        <div class="formula-box">

            DONOR LIMITATION

            →

            MAY CREATE
            DONOR-RESTRICTED NET ASSETS


            BOARD DESIGNATION

            →

            GENERALLY REMAINS
            WITHOUT DONOR RESTRICTIONS

        </div>


        <h2>
            Restrictions vs Conditions
        </h2>

        <p>
            These terms are not interchangeable.
        </p>

        <div class="formula-box">

            RESTRICTION

            →

            LIMITS HOW OR WHEN
            RESOURCES MAY BE USED


            CONDITION

            →

            MUST BE OVERCOME
            BEFORE ENTITLEMENT EXISTS

        </div>


        <h2>
            Conditional Contribution
        </h2>

        <p>
            A contribution is generally conditional
            when the agreement includes:
        </p>

        <div class="formula-box">

            A BARRIER

            +

            RIGHT OF RETURN

            OR

            RIGHT OF RELEASE

        </div>

        <p>
            Until the barrier is substantially overcome,
            the organization generally does not recognize
            contribution revenue.
        </p>


        <h2>
            Example — Conditional Grant
        </h2>

        <p>
            An organization receives
            <strong>$100,000 cash</strong>
            from a donor.
        </p>

        <p>
            The organization must provide services to
            <strong>500 participants</strong>,
            and the donor has the right to require
            repayment if the requirement is not met.
        </p>

        <p>
            Only 300 participants have been served.
        </p>

        <div class="formula-box">

            BARRIER NOT YET OVERCOME

            →

            NO CONTRIBUTION REVENUE YET

        </div>

        <p>
            Because the cash has already been received,
            the organization generally records a liability.
        </p>

        <div class="financial-example">

            <div>
                <span>Cash</span>
                <strong>+ $100,000</strong>
            </div>

            <div>
                <span>Refundable Advance / Liability</span>
                <strong>+ $100,000</strong>
            </div>

            <div>
                <span>Contribution Revenue</span>
                <strong>$0</strong>
            </div>

        </div>


        <h2>
            Once the Condition Is Met
        </h2>

        <p>
            When the barrier is overcome,
            the contribution becomes unconditional.
        </p>

        <p>
            At that point, the organization evaluates
            whether a donor restriction still applies.
        </p>

        <div class="formula-box">

            CONDITION SATISFIED

            →

            RECOGNIZE CONTRIBUTION

            THEN

            DETERMINE WHETHER
            DONOR RESTRICTION EXISTS

        </div>


        <h2>
            Unconditional Contributions
        </h2>

        <p>
            An unconditional contribution is generally
            recognized when the donor makes the promise
            or transfers the resources, subject to
            measurement requirements.
        </p>


        <h2>
            Restricted Contribution Example
        </h2>

        <p>
            A donor gives an organization
            <strong>$150,000</strong>
            specifically for a scholarship program.
        </p>

        <div class="formula-box">

            CONTRIBUTION REVENUE

            =

            $150,000


            CLASSIFICATION

            =

            WITH DONOR RESTRICTIONS

        </div>


        <h2>
            Release From Restriction
        </h2>

        <p>
            When the organization satisfies the donor's
            purpose or time restriction, the restriction
            is released.
        </p>

        <p>
            This is a reclassification between net
            asset classes, not new contribution revenue.
        </p>

        <div class="formula-box">

            WITH DONOR RESTRICTIONS

            ↓

            WITHOUT DONOR RESTRICTIONS

        </div>


        <h2>
            Example — Release
        </h2>

        <p>
            The organization spends
            <strong>$60,000</strong>
            on the qualifying scholarship program.
        </p>

        <div class="formula-box">

            RELEASE FROM RESTRICTION

            =

            $60,000

        </div>

        <p>
            The organization does not recognize another
            $60,000 of contribution revenue simply
            because the restriction was satisfied.
        </p>


        <h2>
            Promises to Give
        </h2>

        <p>
            Unconditional promises to give are generally
            recognized when made.
        </p>

        <div class="formula-box">

            UNCONDITIONAL PROMISE

            →

            RECOGNIZE


            CONDITIONAL PROMISE

→

WAIT UNTIL THE BARRIER
IS SUBSTANTIALLY OVERCOME

        </div>


        <h2>
            Long-Term Pledges
        </h2>

        <p>
            An unconditional pledge expected to be
            collected over multiple years may require
            present-value measurement.
        </p>

        <div class="example-box">

            <p>
                Face amount of pledge:
                <strong>$200,000</strong>
            </p>

            <p>
                Present value:
                <strong>$176,000</strong>
            </p>

        </div>

        <div class="formula-box">

            INITIAL CONTRIBUTION
            RECEIVABLE

            =

            $176,000

        </div>


        <h2>
            Donated Services
        </h2>

        <p>
            Donated services are not automatically
            recognized simply because volunteers
            provided them.
        </p>

        <p>
            Contributed services are generally recognized
            when they:
        </p>

        <div class="formula-box">

            CREATE OR ENHANCE
            A NONFINANCIAL ASSET

            OR

            REQUIRE SPECIALIZED SKILLS

            +

            ARE PROVIDED BY PERSONS
            POSSESSING THOSE SKILLS

            +

            WOULD OTHERWISE
            NEED TO BE PURCHASED

        </div>


        <h2>
            Example — Donated Legal Services
        </h2>

        <p>
            An attorney provides legal services with a
            fair value of <strong>$25,000</strong>.
        </p>

        <p>
            The organization would otherwise have hired
            an attorney to perform those services.
        </p>

        <div class="financial-example">

            <div>
                <span>Contribution Revenue</span>
                <strong>+ $25,000</strong>
            </div>

            <div>
                <span>Legal Expense</span>
                <strong>+ $25,000</strong>
            </div>

            <div>
                <span>Net Assets</span>
                <strong>No Net Change</strong>
            </div>

        </div>


        <h2>
            Routine Volunteer Services
        </h2>

        <p>
            Routine volunteer services that do not meet
            the recognition criteria generally are not
            recognized as contribution revenue or expense.
        </p>

        <div class="formula-box">

            VOLUNTEER TIME

            ≠

            AUTOMATIC RECOGNITION

        </div>


        <h2>
            Donated Noncash Assets
        </h2>

        <p>
            Contributed nonfinancial assets such as
            equipment, supplies, or property are generally
            recognized at fair value, subject to applicable
            accounting guidance.
        </p>

        <div class="example-box">

            <p>
                Donated equipment fair value:
                <strong>$70,000</strong>
            </p>

        </div>

        <div class="formula-box">

            EQUIPMENT

            =

            $70,000


            CONTRIBUTION REVENUE

            =

            $70,000

        </div>


        <h2>
            Endowments
        </h2>

        <p>
            Endowment accounting depends heavily on
            whether the restriction was imposed by
            the donor or internally by the organization.
        </p>

        <div class="formula-box">

            DONOR-RESTRICTED ENDOWMENT

            →

            NET ASSETS
            WITH DONOR RESTRICTIONS


            BOARD-DESIGNATED
            ENDOWMENT

            →

            GENERALLY NET ASSETS
            WITHOUT DONOR RESTRICTIONS

        </div>


        <h2>
            Investment Return
        </h2>

        <p>
            Investment income associated with an
            endowment must be classified according
            to applicable donor restrictions and
            governing requirements.
        </p>

        <p>
            Do not automatically assume that all
            investment income is unrestricted.
        </p>


        <h2>
            Example — Restricted Endowment Return
        </h2>

        <p>
            A donor-restricted endowment earns:
        </p>

        <div class="example-box">

            <p>
                Interest and dividends:
                <strong>$20,000</strong>
            </p>

            <p>
                Appreciation:
                <strong>$15,000</strong>
            </p>

            <p>
                Donor requires returns to support
                scholarships.
            </p>

        </div>

        <div class="formula-box">

            TOTAL INVESTMENT RETURN

            =

            $20,000 + $15,000

            =

            $35,000

        </div>

        <p>
            The classification of that return reflects
            the donor restriction until the applicable
            restriction is satisfied.
        </p>


        <h2>
            NFP Financial Statements
        </h2>

        <p>
            Core NFP financial statements commonly include:
        </p>

        <div class="formula-box">

            STATEMENT OF
            FINANCIAL POSITION


            STATEMENT OF ACTIVITIES


            STATEMENT OF
            CASH FLOWS

        </div>


        <h2>
            Statement of Activities
        </h2>

        <p>
            The statement of activities reports changes
            in the organization's net assets.
        </p>

        <div class="formula-box">

            REVENUES

            +

            GAINS

            −

            EXPENSES

            −

            LOSSES

            =

            CHANGE IN NET ASSETS

        </div>


        <h2>
            Functional Expense Classification
        </h2>

        <p>
            Expenses may be classified by function.
        </p>

        <div class="formula-box">

            PROGRAM SERVICES

            +

            SUPPORTING SERVICES

        </div>

        <p>
            Supporting services can include management
            and general activities and fundraising.
        </p>


        <h2>
            Natural Expense Classification
        </h2>

        <p>
            Natural classification describes what type
            of cost was incurred.
        </p>

        <div class="formula-box">

            EXAMPLES:

            SALARIES

            RENT

            DEPRECIATION

            SUPPLIES

            INTEREST

        </div>


        <h2>
            Functional vs Natural
        </h2>

        <div class="formula-box">

            FUNCTION

            →

            WHY WAS THE COST INCURRED?


            NATURE

            →

            WHAT TYPE OF COST WAS IT?

        </div>


        <h2>
            Integrated NFP Example
        </h2>

        <p>
            Beginning net assets:
        </p>

        <div class="example-box">

            <p>
                Without donor restrictions:
                <strong>$500,000</strong>
            </p>

            <p>
                With donor restrictions:
                <strong>$180,000</strong>
            </p>

        </div>

        <p>
            During the year:
        </p>

        <div class="example-box">

            <p>
                Unrestricted contribution:
                <strong>$100,000</strong>
            </p>

            <p>
                Restricted contribution:
                <strong>$90,000</strong>
            </p>

            <p>
                Qualifying restricted spending:
                <strong>$50,000</strong>
            </p>

            <p>
                Other expenses:
                <strong>$70,000</strong>
            </p>

        </div>


        <h2>
            Ending Restricted Net Assets
        </h2>

        <div class="formula-box">

            $180,000

            + $90,000

            − $50,000

            =

            $220,000

        </div>


        <h2>
            Ending Unrestricted Net Assets
        </h2>

        <div class="formula-box">

            $500,000

            + $100,000

            + $50,000 RELEASE

            − $70,000 EXPENSES

            =

            $580,000

        </div>


        <h2>
            NFP Decision Strategy
        </h2>

        <div class="formula-box">

            ASK:

            1. IS THIS A CONTRIBUTION
               OR AN EXCHANGE TRANSACTION?

            2. IS THE CONTRIBUTION
               CONDITIONAL?

            3. IF UNCONDITIONAL,
               IS THERE A DONOR RESTRICTION?

            4. HAS THE RESTRICTION
               BEEN SATISFIED?

            5. DOES THE TRANSACTION
               AFFECT REVENUE,
               EXPENSE,
               OR ONLY NET-ASSET
               CLASSIFICATION?

        </div>


        <h2>
            Common FAR Traps
        </h2>

        <div class="formula-box">

            CONDITION

            ≠

            RESTRICTION


            BOARD DESIGNATION

            ≠

            DONOR RESTRICTION


            RELEASE FROM RESTRICTION

            ≠

            NEW REVENUE


            DONATED SERVICES

            ≠

            AUTOMATIC RECOGNITION

        </div>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    NFPs report net assets with donor
                    restrictions and without donor
                    restrictions.
                </li>

                <li>
                    Board designations generally do not
                    create donor-restricted net assets.
                </li>

                <li>
                    A conditional contribution generally
                    requires both a barrier and a right
                    of return or release.
                </li>

                <li>
                    Once a contribution becomes
                    unconditional, donor restrictions
                    are evaluated separately.
                </li>

                <li>
                    Satisfaction of a donor restriction
                    generally results in a reclassification,
                    not additional contribution revenue.
                </li>

                <li>
                    Unconditional promises to give are
                    generally recognized when made.
                </li>

                <li>
                    Qualifying donated professional services
                    are recognized at fair value.
                </li>

                <li>
                    Donor-restricted endowments remain
                    within net assets with donor restrictions
                    until applicable restrictions are met.
                </li>

                <li>
                    Functional classification describes why
                    a cost was incurred; natural
                    classification describes the type
                    of cost.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "A donor gives an NFP $120,000 restricted for a specific education program. During the year, the NFP spends $45,000 on qualifying program costs. Ignoring all other activity, how much of the original contribution remains in net assets with donor restrictions?",

            answers: [
                "$45,000",
                "$120,000",
                "$75,000",
                "$165,000"
            ],

            correctAnswer: 2,

            explanation:
                "The organization initially recognizes the $120,000 contribution within net assets with donor restrictions. When $45,000 is spent for the donor-specified purpose, that amount is released from restriction. The remaining donor-restricted amount is $120,000 − $45,000 = $75,000."
        }

    );

    return;
}

if (
    moduleId === 6 &&
    lessonId === 9
) {

    showFARLessonPage(
        6,
        9,

        "FAR Integrated Financial Statement Review",

        `

        <h2>
            Think Across the Financial Statements
        </h2>

        <p>
            Many FAR questions are not really testing
            one isolated account.
        </p>

        <p>
            They test whether you can follow an accounting
            event through the balance sheet, income statement,
            statement of cash flows, and equity.
        </p>

        <div class="formula-box">

            TRANSACTION

            ↓

            ACCOUNT BALANCES

            ↓

            NET INCOME

            ↓

            EQUITY

            ↓

            CASH FLOW CLASSIFICATION

        </div>


        <h2>
            Scenario 1 — Accrued Expense
        </h2>

        <p>
            At year-end, a company has incurred
            <strong>$18,000</strong> of salaries
            that have not yet been recorded or paid.
        </p>

        <div class="financial-example">

            <div>
                <span>Salary Expense</span>
                <strong>+ $18,000</strong>
            </div>

            <div>
                <span>Salaries Payable</span>
                <strong>+ $18,000</strong>
            </div>

            <div>
                <span>Net Income</span>
                <strong>− $18,000</strong>
            </div>

            <div>
                <span>Equity</span>
                <strong>− $18,000</strong>
            </div>

        </div>

        <p>
            Because cash has not yet been paid,
            there is no immediate cash-flow effect
            from recording the accrual.
        </p>


        <h2>
            Scenario 2 — Accrued Revenue
        </h2>

        <p>
            A company has earned
            <strong>$25,000</strong> of service revenue
            but has not yet billed the customer.
        </p>

        <div class="financial-example">

            <div>
                <span>Receivable</span>
                <strong>+ $25,000</strong>
            </div>

            <div>
                <span>Revenue</span>
                <strong>+ $25,000</strong>
            </div>

            <div>
                <span>Net Income</span>
                <strong>+ $25,000</strong>
            </div>

            <div>
                <span>Equity</span>
                <strong>+ $25,000</strong>
            </div>

        </div>


        <h2>
            Scenario 3 — Advance Customer Payment
        </h2>

        <p>
            A customer pays
            <strong>$48,000</strong>
            in advance for 12 months of service.
        </p>

        <p>
            Three months have been earned by year-end.
        </p>

        <div class="formula-box">

            MONTHLY REVENUE

            =

            $48,000 ÷ 12

            =

            $4,000


            REVENUE EARNED

            =

            $4,000 × 3

            =

            $12,000


            CONTRACT LIABILITY

            =

            $48,000 − $12,000

            =

            $36,000

        </div>


        <h2>
            Scenario 4 — Inventory Error
        </h2>

        <p>
            Ending inventory is overstated by
            <strong>$20,000</strong>.
        </p>

        <div class="formula-box">

            ENDING INVENTORY

            OVERSTATED $20,000

            ↓

            COGS

            UNDERSTATED $20,000

            ↓

            NET INCOME

            OVERSTATED $20,000

        </div>

        <div class="financial-example">

            <div>
                <span>Assets</span>
                <strong>Overstated $20,000</strong>
            </div>

            <div>
                <span>COGS</span>
                <strong>Understated $20,000</strong>
            </div>

            <div>
                <span>Net Income</span>
                <strong>Overstated $20,000</strong>
            </div>

            <div>
                <span>Equity</span>
                <strong>Overstated $20,000</strong>
            </div>

        </div>


        <h2>
            Scenario 5 — Depreciation
        </h2>

        <p>
            Equipment has:
        </p>

        <div class="example-box">

            <p>
                Cost:
                <strong>$260,000</strong>
            </p>

            <p>
                Residual value:
                <strong>$20,000</strong>
            </p>

            <p>
                Useful life:
                <strong>8 years</strong>
            </p>

        </div>

        <div class="formula-box">

            ANNUAL DEPRECIATION

            =

            ($260,000 − $20,000)

            ÷ 8

            =

            $30,000

        </div>

        <div class="financial-example">

            <div>
                <span>Depreciation Expense</span>
                <strong>+ $30,000</strong>
            </div>

            <div>
                <span>Accumulated Depreciation</span>
                <strong>+ $30,000</strong>
            </div>

            <div>
                <span>Net Income</span>
                <strong>− $30,000</strong>
            </div>

            <div>
                <span>Carrying Amount of Assets</span>
                <strong>− $30,000</strong>
            </div>

        </div>


        <h2>
            Depreciation and Cash Flow
        </h2>

        <p>
            Depreciation reduces net income but does
            not itself require a current-period cash payment.
        </p>

        <p>
            Therefore, under the indirect method:
        </p>

        <div class="formula-box">

            DEPRECIATION EXPENSE

            →

            ADD BACK TO NET INCOME

            IN OPERATING CASH FLOWS

        </div>


        <h2>
            Scenario 6 — Accounts Receivable Increase
        </h2>

        <p>
            Net income includes revenue that has not
            necessarily been collected in cash.
        </p>

        <p>
            If accounts receivable increases by
            <strong>$15,000</strong>:
        </p>

        <div class="formula-box">

            INDIRECT METHOD

            →

            SUBTRACT $15,000

            FROM NET INCOME

        </div>


        <h2>
            Scenario 7 — Accounts Payable Increase
        </h2>

        <p>
            If accounts payable increases by
            <strong>$9,000</strong>,
            the company has generally recognized expenses
            that have not yet been paid in cash.
        </p>

        <div class="formula-box">

            INDIRECT METHOD

            →

            ADD $9,000

            TO NET INCOME

        </div>


        <h2>
            Working Capital Adjustment Pattern
        </h2>

        <div class="formula-box">

            OPERATING ASSET ↑

            →

            SUBTRACT


            OPERATING ASSET ↓

            →

            ADD


            OPERATING LIABILITY ↑

            →

            ADD


            OPERATING LIABILITY ↓

            →

            SUBTRACT

        </div>


        <h2>
            Scenario 8 — Sale of Equipment
        </h2>

        <p>
            Equipment has:
        </p>

        <div class="example-box">

            <p>
                Cost:
                <strong>$150,000</strong>
            </p>

            <p>
                Accumulated depreciation:
                <strong>$100,000</strong>
            </p>

            <p>
                Cash proceeds:
                <strong>$62,000</strong>
            </p>

        </div>

        <div class="formula-box">

            CARRYING AMOUNT

            =

            $150,000 − $100,000

            =

            $50,000


            GAIN

            =

            $62,000 − $50,000

            =

            $12,000

        </div>


        <h2>
            Sale of Equipment — Cash Flow Effect
        </h2>

        <div class="formula-box">

            CASH PROCEEDS

            $62,000

            →

            INVESTING INFLOW

        </div>

        <p>
            The $12,000 gain is included in net income,
            but under the indirect method it is removed
            from operating cash flow because the related
            cash proceeds belong in investing activities.
        </p>

        <div class="formula-box">

            GAIN ON SALE

            →

            SUBTRACT FROM NET INCOME

            IN OPERATING SECTION

        </div>


        <h2>
            Scenario 9 — Bond Issuance
        </h2>

        <p>
            A corporation issues
            <strong>$500,000</strong>
            of bonds for cash.
        </p>

        <div class="financial-example">

            <div>
                <span>Cash</span>
                <strong>Increase</strong>
            </div>

            <div>
                <span>Liabilities</span>
                <strong>Increase</strong>
            </div>

            <div>
                <span>Net Income</span>
                <strong>No Immediate Effect</strong>
            </div>

            <div>
                <span>Cash Flow</span>
                <strong>Financing Inflow</strong>
            </div>

        </div>


        <h2>
            Scenario 10 — Treasury Stock Purchase
        </h2>

        <p>
            A company pays
            <strong>$40,000</strong>
            to reacquire its own common shares.
        </p>

        <div class="financial-example">

            <div>
                <span>Cash</span>
                <strong>− $40,000</strong>
            </div>

            <div>
                <span>Treasury Stock</span>
                <strong>+ $40,000</strong>
            </div>

            <div>
                <span>Total Equity</span>
                <strong>− $40,000</strong>
            </div>

            <div>
                <span>Cash Flow</span>
                <strong>Financing Outflow</strong>
            </div>

        </div>


        <h2>
            Scenario 11 — Cash Dividend
        </h2>

        <p>
            When a cash dividend is declared:
        </p>

        <div class="formula-box">

            RETAINED EARNINGS ↓

            DIVIDENDS PAYABLE ↑

        </div>

        <p>
            When the dividend is later paid:
        </p>

        <div class="formula-box">

            CASH ↓

            DIVIDENDS PAYABLE ↓

            →

            FINANCING CASH OUTFLOW

        </div>


        <h2>
            Scenario 12 — Credit Loss Adjustment
        </h2>

        <p>
            Gross accounts receivable are
            <strong>$400,000</strong>.
        </p>

        <p>
            The required ending allowance for credit
            losses is <strong>$24,000</strong>.
        </p>

        <div class="formula-box">

            NET ACCOUNTS RECEIVABLE

            =

            $400,000 − $24,000

            =

            $376,000

        </div>

        <p>
            Increasing the allowance through credit-loss
            expense decreases net income and decreases
            the net carrying amount of receivables.
        </p>


        <h2>
            Scenario 13 — Loss Contingency
        </h2>

        <p>
            A lawsuit loss of
            <strong>$75,000</strong>
            is probable and reasonably estimable.
        </p>

        <div class="financial-example">

            <div>
                <span>Loss Expense</span>
                <strong>+ $75,000</strong>
            </div>

            <div>
                <span>Liability</span>
                <strong>+ $75,000</strong>
            </div>

            <div>
                <span>Net Income</span>
                <strong>− $75,000</strong>
            </div>

            <div>
                <span>Cash</span>
                <strong>No Immediate Effect</strong>
            </div>

        </div>


        <h2>
            Scenario 14 — Unrealized Investment Gain
        </h2>

        <p>
            Be careful about where investment gains
            and losses are reported.
        </p>

        <div class="formula-box">

            TRADING DEBT SECURITY

            →

            FAIR VALUE CHANGE

            →

            NET INCOME


            AVAILABLE-FOR-SALE
            DEBT SECURITY

            →

            UNREALIZED HOLDING
            GAIN OR LOSS

            →

            GENERALLY OCI

        </div>


        <h2>
            Net Income vs Comprehensive Income
        </h2>

        <div class="formula-box">

            COMPREHENSIVE INCOME

            =

            NET INCOME

            +

            OTHER COMPREHENSIVE INCOME

        </div>

        <p>
            A transaction can affect comprehensive income
            without affecting current-period net income.
        </p>


        <h2>
            Integrated Adjustment Example
        </h2>

        <p>
            Assume preliminary net income is
            <strong>$300,000</strong>.
        </p>

        <p>
            The following year-end adjustments
            have not yet been recorded:
        </p>

        <div class="example-box">

            <p>
                Accrued salaries:
                <strong>$20,000</strong>
            </p>

            <p>
                Accrued service revenue:
                <strong>$15,000</strong>
            </p>

            <p>
                Depreciation expense:
                <strong>$25,000</strong>
            </p>

            <p>
                Probable lawsuit loss:
                <strong>$10,000</strong>
            </p>

        </div>


        <h2>
            Corrected Net Income
        </h2>

        <div class="formula-box">

            $300,000

            − $20,000

            + $15,000

            − $25,000

            − $10,000

            =

            $260,000

        </div>


        <h2>
            FAR Integrated Strategy
        </h2>

        <div class="formula-box">

            FOR EVERY ADJUSTMENT:

            1. IDENTIFY THE ACCOUNTS

            2. DETERMINE WHETHER
               EACH ACCOUNT INCREASES
               OR DECREASES

            3. DETERMINE THE
               NET-INCOME EFFECT

            4. DETERMINE THE
               BALANCE-SHEET EFFECT

            5. DETERMINE WHETHER
               CASH ACTUALLY MOVED

            6. IF CASH MOVED,
               CLASSIFY THE CASH FLOW

            7. RECHECK THE
               ACCOUNTING EQUATION

        </div>


        <h2>
            Cash Flow Classification Review
        </h2>

        <div class="formula-box">

            OPERATING

            →

            CORE BUSINESS
            CASH FLOWS


            INVESTING

            →

            LONG-LIVED ASSETS
            AND MANY INVESTMENTS


            FINANCING

            →

            DEBT AND EQUITY
            FINANCING ACTIVITIES

        </div>


        <h2>
            Common Exam Trap
        </h2>

        <p>
            Do not assume that an item affecting
            net income also belongs in operating cash flow
            for the same amount.
        </p>

        <p>
            Gains and losses on investing activities
            are classic examples.
        </p>

        <div class="formula-box">

            GAIN ON SALE OF EQUIPMENT

            →

            INCLUDED IN NET INCOME

            BUT

            CASH PROCEEDS ARE INVESTING

        </div>


        <h2>
            Another Common Trap
        </h2>

        <p>
            A noncash accounting adjustment can affect
            income and the balance sheet without changing
            cash at all.
        </p>

        <div class="formula-box">

            ACCRUAL

            DEPRECIATION

            CREDIT-LOSS ESTIMATE

            CONTINGENCY ACCRUAL

            →

            MAY HAVE

            NO IMMEDIATE CASH EFFECT

        </div>


        <div class="key-points">

            <h3>
                Key Takeaways
            </h3>

            <ul>

                <li>
                    Trace every FAR transaction through
                    all affected financial statements.
                </li>

                <li>
                    Accrual accounting separates recognition
                    from cash collection or payment.
                </li>

                <li>
                    Inventory errors affect both assets
                    and income.
                </li>

                <li>
                    Depreciation reduces net income but
                    is added back under the indirect
                    cash-flow method.
                </li>

                <li>
                    Changes in operating assets and
                    liabilities help reconcile net income
                    to operating cash flow.
                </li>

                <li>
                    Gains and losses on asset disposals
                    must be separated from the related
                    investing cash proceeds.
                </li>

                <li>
                    Debt issuance and treasury-stock
                    transactions are financing activities.
                </li>

                <li>
                    Some items affect OCI rather than
                    current-period net income.
                </li>

                <li>
                    Noncash adjustments can change income
                    and balance-sheet amounts without
                    immediately changing cash.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "A company reports preliminary net income of $300,000 before recording $20,000 of accrued salaries, $15,000 of accrued service revenue, $25,000 of depreciation expense, and a $10,000 probable and estimable lawsuit loss. What is corrected net income?",

            answers: [
                "$260,000",
                "$300,000",
                "$250,000",
                "$270,000"
            ],

            correctAnswer: 0,

            explanation:
                "Start with $300,000. Accrued salaries reduce income by $20,000, accrued service revenue increases income by $15,000, depreciation reduces income by $25,000, and the lawsuit loss reduces income by $10,000. Therefore, corrected net income is $300,000 − $20,000 + $15,000 − $25,000 − $10,000 = $260,000."
        }

    );

    return;
}

if (
    moduleId === 6 &&
    lessonId === 10
) {

    showFARLessonPage(
        6,
        10,

        "FAR Exam Strategy & Final Comprehensive Review",

        `

        <h2>
            You Have Reached the FAR Final Review
        </h2>

        <p>
            At this stage, the goal is no longer to
            memorize isolated accounting rules.
        </p>

        <p>
            The goal is to recognize what a question
            is testing, identify the applicable accounting
            treatment, perform the calculation accurately,
            and follow the result through the financial
            statements.
        </p>


        <div class="formula-box">

            FAR SUCCESS

            =

            KNOW THE RULE

            +

            IDENTIFY THE ISSUE

            +

            CALCULATE ACCURATELY

            +

            UNDERSTAND THE
            FINANCIAL STATEMENT EFFECT

        </div>


        <h2>
            The Universal FAR Framework
        </h2>

        <p>
            When you encounter an unfamiliar-looking
            transaction, break it into four questions.
        </p>

        <div class="formula-box">

            1. RECOGNITION

            SHOULD SOMETHING
            BE RECORDED?


            2. MEASUREMENT

            AT WHAT AMOUNT?


            3. PRESENTATION

            WHERE DOES IT APPEAR?


            4. DISCLOSURE

            WHAT ADDITIONAL INFORMATION
            MUST BE PROVIDED?

        </div>


        <h2>
            Recognition
        </h2>

        <p>
            First determine whether the transaction
            or event meets the requirements for
            financial statement recognition.
        </p>

        <div class="formula-box">

            ASK:

            DOES AN ASSET EXIST?

            DOES A LIABILITY EXIST?

            HAS REVENUE BEEN EARNED?

            HAS AN EXPENSE OR LOSS
            BEEN INCURRED?

        </div>


        <h2>
            Measurement
        </h2>

        <p>
            Once an item should be recognized,
            determine the appropriate measurement basis.
        </p>

        <div class="formula-box">

            POSSIBLE MEASUREMENT CONCEPTS:

            HISTORICAL COST

            AMORTIZED COST

            FAIR VALUE

            NET REALIZABLE VALUE

            PRESENT VALUE

            ESTIMATED AMOUNT

        </div>

        <p>
            Do not choose a measurement basis simply
            because it appears reasonable. Apply the
            accounting rule for the specific item.
        </p>


        <h2>
            Presentation
        </h2>

        <p>
            FAR frequently tests where an amount belongs,
            not merely how much it is.
        </p>

        <div class="formula-box">

            CURRENT

            OR

            NONCURRENT?


            NET INCOME

            OR

            OCI?


            ASSET

            OR

            CONTRA-ASSET?


            LIABILITY

            OR

            EQUITY?

        </div>


        <h2>
            Disclosure
        </h2>

        <p>
            Some matters may require disclosure even
            when no amount is recognized.
        </p>

        <div class="formula-box">

            NO JOURNAL ENTRY

            DOES NOT ALWAYS MEAN

            NO FINANCIAL REPORTING
            CONSEQUENCE

        </div>

        <p>
            Loss contingencies and certain subsequent
            events are common examples.
        </p>


        <h2>
            Master the Accounting Equation
        </h2>

        <div class="formula-box">

            ASSETS

            =

            LIABILITIES

            +

            EQUITY

        </div>

        <p>
            When you are unsure about an adjustment,
            trace its effect through this equation.
        </p>


        <h2>
            Income Statement Connection
        </h2>

        <div class="formula-box">

            REVENUE ↑

            →

            NET INCOME ↑

            →

            EQUITY ↑


            EXPENSE ↑

            →

            NET INCOME ↓

            →

            EQUITY ↓

        </div>

        <p>
            This relationship can help you solve
            questions even when the journal entry
            is not immediately obvious.
        </p>


        <h2>
            Accrual Accounting
        </h2>

        <p>
            Never assume that revenue equals cash received
            or expense equals cash paid.
        </p>

        <div class="formula-box">

            RECOGNITION

            ≠

            CASH MOVEMENT

        </div>


        <h2>
            Accrued Revenue
        </h2>

        <div class="formula-box">

            REVENUE EARNED

            BEFORE CASH RECEIVED

            →

            ASSET ↑

            REVENUE ↑

        </div>


        <h2>
            Accrued Expense
        </h2>

        <div class="formula-box">

            EXPENSE INCURRED

            BEFORE CASH PAID

            →

            LIABILITY ↑

            EXPENSE ↑

        </div>


        <h2>
            Deferred Revenue
        </h2>

        <div class="formula-box">

            CASH RECEIVED

            BEFORE PERFORMANCE

            →

            LIABILITY


            PERFORMANCE SATISFIED

            →

            LIABILITY ↓

            REVENUE ↑

        </div>


        <h2>
            Prepaid Expense
        </h2>

        <div class="formula-box">

            CASH PAID

            BEFORE BENEFIT CONSUMED

            →

            ASSET


            BENEFIT CONSUMED

            →

            ASSET ↓

            EXPENSE ↑

        </div>


        <h2>
            Inventory Formula
        </h2>

        <div class="formula-box">

            BEGINNING INVENTORY

            +

            PURCHASES

            −

            ENDING INVENTORY

            =

            COST OF GOODS SOLD

        </div>

        <p>
            Memorize the relationship rather than
            memorizing individual error rules.
        </p>


        <h2>
            Inventory Error Logic
        </h2>

        <div class="formula-box">

            ENDING INVENTORY ↑

            →

            COGS ↓

            →

            NET INCOME ↑


            ENDING INVENTORY ↓

            →

            COGS ↑

            →

            NET INCOME ↓

        </div>


        <h2>
            Receivables
        </h2>

        <div class="formula-box">

            NET ACCOUNTS RECEIVABLE

            =

            GROSS ACCOUNTS RECEIVABLE

            −

            ALLOWANCE FOR CREDIT LOSSES

        </div>


        <h2>
            Long-Lived Assets
        </h2>

        <div class="formula-box">

            CARRYING AMOUNT

            =

            COST

            −

            ACCUMULATED DEPRECIATION

            −

            APPLICABLE IMPAIRMENT

        </div>


        <h2>
            Straight-Line Depreciation
        </h2>

        <div class="formula-box">

            ANNUAL DEPRECIATION

            =

            COST − RESIDUAL VALUE

            ÷

            USEFUL LIFE

        </div>


        <h2>
            Held-and-Used Asset Impairment
        </h2>

        <div class="formula-box">

            STEP 1:

            CARRYING AMOUNT

            VS

            UNDISCOUNTED EXPECTED
            FUTURE CASH FLOWS


            STEP 2:

            IF NOT RECOVERABLE

            →

            LOSS GENERALLY BASED ON

            CARRYING AMOUNT
            MINUS FAIR VALUE

        </div>


        <h2>
            Bonds
        </h2>

        <div class="formula-box">

            INTEREST EXPENSE

            =

            BEGINNING CARRYING AMOUNT

            ×

            EFFECTIVE RATE


            CASH INTEREST

            =

            FACE VALUE

            ×

            STATED RATE

        </div>


        <h2>
            Bond Direction Shortcut
        </h2>

        <div class="formula-box">

            DISCOUNT

            →

            CARRYING AMOUNT
            INCREASES TOWARD PAR


            PREMIUM

            →

            CARRYING AMOUNT
            DECREASES TOWARD PAR

        </div>


        <h2>
            Contingencies
        </h2>

        <div class="formula-box">

            PROBABLE

            +

            REASONABLY ESTIMABLE

            →

            ACCRUE


            REASONABLY POSSIBLE

            →

            GENERALLY DISCLOSE


            REMOTE

            →

            GENERALLY NEITHER

        </div>


        <h2>
            Accounting Changes
        </h2>

        <div class="formula-box">

            PRINCIPLE

            →

            GENERALLY RETROSPECTIVE


            ESTIMATE

            →

            PROSPECTIVE


            ERROR

            →

            CORRECT PRIOR PERIODS

        </div>


        <h2>
            Subsequent Events
        </h2>

        <div class="formula-box">

            CONDITION EXISTED
            AT YEAR-END?

            →

            GENERALLY ADJUST


            CONDITION AROSE
            AFTER YEAR-END?

            →

            GENERALLY DO NOT ADJUST

            BUT

            MATERIAL DISCLOSURE
            MAY BE REQUIRED

        </div>


        <h2>
            Investments
        </h2>

        <div class="formula-box">

            TRADING DEBT SECURITY

            →

            FAIR VALUE CHANGES
            IN NET INCOME


            AVAILABLE-FOR-SALE
            DEBT SECURITY

            →

            UNREALIZED HOLDING
            GAINS / LOSSES
            GENERALLY IN OCI


            HELD-TO-MATURITY

            →

            AMORTIZED COST

        </div>


        <h2>
            Equity Method
        </h2>

        <div class="formula-box">

            SHARE OF INVESTEE INCOME

            →

            INVESTMENT ↑


            DIVIDENDS RECEIVED

            →

            INVESTMENT ↓

        </div>


        <h2>
            Statement of Cash Flows
        </h2>

        <p>
            Separate the accounting effect from
            the cash-flow classification.
        </p>

        <div class="formula-box">

            OPERATING

            INVESTING

            FINANCING

        </div>


        <h2>
            Indirect Method Pattern
        </h2>

        <div class="formula-box">

            OPERATING ASSET ↑

            →

            SUBTRACT


            OPERATING ASSET ↓

            →

            ADD


            OPERATING LIABILITY ↑

            →

            ADD


            OPERATING LIABILITY ↓

            →

            SUBTRACT

        </div>


        <h2>
            Governmental Accounting Shortcut
        </h2>

        <p>
            Before doing anything else, identify
            which reporting level is being tested.
        </p>

        <div class="formula-box">

            GOVERNMENTAL FUND

            →

            CURRENT FINANCIAL RESOURCES

            +

            MODIFIED ACCRUAL


            GOVERNMENT-WIDE

            →

            ECONOMIC RESOURCES

            +

            ACCRUAL

        </div>


        <h2>
            Governmental Capital Assets and Debt
        </h2>

        <div class="formula-box">

            GOVERNMENTAL FUND:

            CAPITAL OUTLAY

            →

            EXPENDITURE


            GENERAL LONG-TERM
            BOND PROCEEDS

            →

            OTHER FINANCING SOURCE

        </div>

        <div class="formula-box">

            GOVERNMENT-WIDE:

            CAPITAL ASSET

            →

            CAPITALIZE


            LONG-TERM DEBT

            →

            LIABILITY

        </div>


        <h2>
            NFP Shortcut
        </h2>

        <div class="formula-box">

            FIRST:

            CONDITION?


            THEN:

            DONOR RESTRICTION?


            THEN:

            HAS RESTRICTION
            BEEN SATISFIED?

        </div>


        <h2>
            NFP Conditions vs Restrictions
        </h2>

        <div class="formula-box">

            CONDITION

            →

            AFFECTS WHETHER
            CONTRIBUTION IS RECOGNIZED


            RESTRICTION

            →

            AFFECTS HOW RECOGNIZED
            NET ASSETS ARE CLASSIFIED

        </div>


        <h2>
            Do Not Memorize Without Understanding
        </h2>

        <p>
            Formulas are useful, but FAR questions
            can change the facts.
        </p>

        <p>
            Understanding why the formula works
            is more reliable than memorizing a
            mechanical answer pattern.
        </p>


        <h2>
            MCQ Strategy
        </h2>

        <div class="formula-box">

            READ THE REQUIREMENT

            ↓

            IDENTIFY THE TOPIC

            ↓

            WRITE THE RULE / FORMULA

            ↓

            USE ONLY RELEVANT FACTS

            ↓

            CALCULATE

            ↓

            CHECK WHETHER THE ANSWER
            MAKES ACCOUNTING SENSE

        </div>


        <h2>
            Watch for Distractors
        </h2>

        <p>
            CPA-style questions may provide information
            that is not needed for the required calculation.
        </p>

        <div class="formula-box">

            MORE NUMBERS

            ≠

            USE EVERY NUMBER

        </div>


        <h2>
            Read the Requirement Carefully
        </h2>

        <p>
            A question may ask for:
        </p>

        <div class="formula-box">

            REVENUE

            NOT CASH


            CARRYING AMOUNT

            NOT FAIR VALUE


            EXPENSE

            NOT CASH PAYMENT


            CURRENT LIABILITY

            NOT TOTAL LIABILITY


            FUND-LEVEL AMOUNT

            NOT GOVERNMENT-WIDE AMOUNT

        </div>

        <p>
            Answer the exact question being asked.
        </p>


        <h2>
            TBS Strategy
        </h2>

        <p>
            Task-based simulations can contain much
            more information than MCQs.
        </p>

        <p>
            Break the simulation into smaller independent
            requirements.
        </p>

        <div class="formula-box">

            1. READ THE REQUIREMENT

            2. IDENTIFY THE RELEVANT EXHIBIT

            3. SOLVE ONE CELL
               OR REQUIREMENT AT A TIME

            4. CHECK SIGNS
               AND CLASSIFICATIONS

            5. RECONCILE TOTALS

            6. REVIEW BEFORE SUBMITTING

        </div>


        <h2>
            Do Not Let One TBS Destroy Your Time
        </h2>

        <p>
            If one requirement is difficult,
            continue solving the portions you can
            determine independently.
        </p>

        <div class="formula-box">

            ONE DIFFICULT CELL

            ≠

            ENTIRE TBS LOST

        </div>


        <h2>
            Use Reasonableness Checks
        </h2>

        <p>
            Before accepting an answer, ask whether
            its direction makes sense.
        </p>

        <div class="formula-box">

            EXAMPLE:

            BOND DISCOUNT AMORTIZATION

            SHOULD MOVE CARRYING AMOUNT

            TOWARD

            FACE VALUE

        </div>

        <p>
            If your calculation moves it farther away,
            recheck your work.
        </p>


        <h2>
            Integrated Final Example
        </h2>

        <p>
            A company reports preliminary net income
            of <strong>$500,000</strong>.
        </p>

        <p>
            The following adjustments remain:
        </p>

        <div class="example-box">

            <p>
                Accrued salaries:
                <strong>$30,000</strong>
            </p>

            <p>
                Accrued revenue:
                <strong>$20,000</strong>
            </p>

            <p>
                Depreciation:
                <strong>$40,000</strong>
            </p>

            <p>
                Probable and estimable lawsuit loss:
                <strong>$15,000</strong>
            </p>

            <p>
                Ending inventory is understated:
                <strong>$10,000</strong>
            </p>

        </div>


        <h2>
            Solve Each Adjustment Separately
        </h2>

        <div class="formula-box">

            SALARIES

            − $30,000


            ACCRUED REVENUE

            + $20,000


            DEPRECIATION

            − $40,000


            LAWSUIT

            − $15,000


            INVENTORY UNDERSTATEMENT

            →

            COGS OVERSTATED

            →

            CORRECTING IT

            + $10,000 TO INCOME

        </div>


        <h2>
            Corrected Net Income
        </h2>

        <div class="formula-box">

            $500,000

            − $30,000

            + $20,000

            − $40,000

            − $15,000

            + $10,000

            =

            $445,000

        </div>


        <h2>
            Final FAR Checklist
        </h2>

        <div class="formula-box">

            BEFORE FINALIZING AN ANSWER:

            ✓ CORRECT ACCOUNTING RULE?

            ✓ CORRECT PERIOD?

            ✓ CORRECT MEASUREMENT?

            ✓ CORRECT CLASSIFICATION?

            ✓ CORRECT SIGN?

            ✓ CORRECT FINANCIAL
              STATEMENT EFFECT?

            ✓ ANSWERED WHAT
              WAS ACTUALLY ASKED?

        </div>


        <h2>
            What Mastery Looks Like
        </h2>

        <p>
            FAR mastery does not mean that every
            question looks familiar.
        </p>

        <p>
            It means that when a new scenario appears,
            you can break it into accounting concepts
            you understand and work toward the answer.
        </p>

        <div class="formula-box">

            DON'T ASK:

            "HAVE I SEEN THIS
            EXACT QUESTION?"


            ASK:

            "WHAT ACCOUNTING CONCEPT
            IS THIS TESTING?"

        </div>


        <div class="key-points">

            <h3>
                Final Takeaways
            </h3>

            <ul>

                <li>
                    Start with recognition, measurement,
                    presentation, and disclosure.
                </li>

                <li>
                    Trace transactions through the
                    accounting equation and net income.
                </li>

                <li>
                    Keep accrual accounting separate
                    from cash movement.
                </li>

                <li>
                    Understand relationships instead
                    of memorizing isolated answers.
                </li>

                <li>
                    For governmental questions, identify
                    fund-level versus government-wide
                    reporting first.
                </li>

                <li>
                    For NFP contributions, separate
                    conditions from donor restrictions.
                </li>

                <li>
                    For cash flows, separate the income
                    statement effect from the cash
                    classification.
                </li>

                <li>
                    Break large TBSs into individual
                    requirements.
                </li>

                <li>
                    Use reasonableness checks before
                    finalizing calculations.
                </li>

                <li>
                    Always answer the exact requirement
                    presented by the question.
                </li>

            </ul>

        </div>

        `,

        {
            question:
                "A company reports preliminary net income of $500,000. It has unrecorded accrued salaries of $30,000, accrued revenue of $20,000, depreciation of $40,000, a probable and reasonably estimable lawsuit loss of $15,000, and ending inventory is understated by $10,000. What is corrected net income?",

            answers: [
                "$425,000",
                "$455,000",
                "$445,000",
                "$465,000"
            ],

            correctAnswer: 2,

            explanation:
                "Corrected net income is $500,000 − $30,000 + $20,000 − $40,000 − $15,000 + $10,000 = $445,000. The inventory understatement caused COGS to be overstated, so correcting the inventory error increases income by $10,000."
        }

    );

    return;
}

    // LESSONS NOT BUILT YET

    const lessons =
        farModuleLessons[moduleId] || [];


    const lesson =
        lessons.find(function(item) {

            return item.id === lessonId;

        });


    if (!lesson) {
        return;
    }


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    ${lesson.title}
                </h1>

                <p>
                    FAR · Module ${moduleId}
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule(${moduleId})">

                ← Back to Module

            </button>

        </header>


        <section class="lesson-page">


            <div class="lesson-content-card">

                <span class="exam-badge">
                    CPA LEVEL
                </span>

                <h2>
                    ${lesson.title}
                </h2>

                <p>
                    This lesson content has not been built yet.
                </p>

            </div>


        </section>

    `;

}
