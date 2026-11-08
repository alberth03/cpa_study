const fundamentalsLessons = [

    {
        id: 1,
        title: "What Is Accounting?",
        description: "Understand what accounting does and why businesses need it."
    },

    {
        id: 2,
        title: "The Accounting Equation",
        description: "Assets = Liabilities + Equity"
    },

    {
        id: 3,
        title: "Accounts and Account Types",
        description: "Assets, liabilities, equity, revenue and expenses."
    },

    {
        id: 4,
        title: "Debits and Credits",
        description: "Learn the system behind recording accounting transactions."
    },

    {
        id: 5,
        title: "T-Accounts",
        description: "Visualize how debits and credits affect accounts."
    },

    {
        id: 6,
        title: "Journal Entries",
        description: "Record real business transactions step by step."
    },

    {
        id: 7,
        title: "The General Ledger",
        description: "Understand where accounting transactions are organized."
    },

    {
        id: 8,
        title: "Trial Balance",
        description: "Check whether your debits and credits are balanced."
    },

    {
        id: 9,
        title: "Adjusting Entries",
        description: "Accruals, deferrals, depreciation and other adjustments."
    },

    {
        id: 10,
        title: "Financial Statements",
        description: "Income statement, balance sheet and statement of cash flows."
    }

];


function showFundamentals() {

    saveCurrentPage({
        page: "fundamentals"
    });

    setActiveNav("Learn");

    let completedLessons = 0;

    fundamentalsLessons.forEach(function (lesson) {

        if (localStorage.getItem("fundamentalsLesson" + lesson.id) === "true") {
            completedLessons++;
        }

    });

    const progressPercent =
        (completedLessons / fundamentalsLessons.length) * 100;


    let lessonCards = "";


    fundamentalsLessons.forEach(function (lesson) {

        const completed =
            localStorage.getItem("fundamentalsLesson" + lesson.id) === "true";


        lessonCards += `

            <div class="lesson-card"
                 onclick="showFundamentalsLesson(${lesson.id})">

                <div class="lesson-number">
                    ${lesson.id}
                </div>

                <div class="lesson-info">

                    <h3>${lesson.title}</h3>

                    <p>
                        ${lesson.description}
                    </p>

                </div>

                <div class="lesson-status">

                    ${completed ? "✓ Completed" : "Start →"}

                </div>

            </div>

        `;

    });


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>Accounting Fundamentals</h1>

                <p>
                    Build the foundation you need before moving into advanced accounting.
                </p>

            </div>

            <button class="back-button" onclick="showLearn()">
                ← Back to Learn
            </button>

        </header>


        <section>

            <div class="course-progress-card">

                <div>

                    <h3>Course Progress</h3>

                    <p>
                        ${completedLessons} of ${fundamentalsLessons.length}
                        lessons completed
                    </p>

                </div>

                <div class="course-progress-bar">

                    <div class="course-progress-fill"
                         style="width: ${progressPercent}%;">
                    </div>

                </div>

            </div>


            <div class="lesson-list">

                ${lessonCards}

            </div>

            <div class="final-exam-card">

    <div>
        <span class="exam-badge">FINAL</span>

        <h2>Accounting Fundamentals Final Exam</h2>

        <p>
            20 questions covering everything from Lessons 1–10.
        </p>
    </div>

    <button class="primary-button"
            onclick="startFundamentalsExam()">

        Start Final Exam

    </button>

</div>

        </section>

    `;

}
function showFundamentalsLesson(lessonId) {

    saveCurrentPage({
        page: "fundamentalsLesson",
        lessonId: lessonId
    });

    setActiveNav("Learn");

    if (lessonId === 1) {

        showLessonPage(
            1,
            "What Is Accounting?",
            `

                <h2>What is accounting?</h2>

                <p>
                    Accounting is the process of recording, organizing,
                    summarizing, and analyzing financial information.
                </p>

                <p>
                    Businesses use accounting to understand what they own,
                    what they owe, how much they earn, and how much they spend.
                </p>


                <div class="example-box">

                    <h3>Simple Example</h3>

                    <p>
                        You start a business and invest
                        <strong>$10,000</strong> of your own money.
                    </p>

                    <p>
                        The business now has
                        <strong>$10,000 of cash</strong>
                        and the owner has
                        <strong>$10,000 of equity</strong>.
                    </p>

                </div>


                <h2>Why is accounting important?</h2>

                <p>
                    Accounting helps owners, investors, lenders, managers,
                    governments, and other users make financial decisions.
                </p>


                <div class="key-points">

                    <h3>Key Points</h3>

                    <ul>
                        <li>Accounting tracks financial activity.</li>
                        <li>It helps measure profit and loss.</li>
                        <li>It shows what a business owns and owes.</li>
                        <li>It supports financial decision-making.</li>
                        <li>It provides information used in financial statements.</li>
                    </ul>

                </div>

            `,
            {
                question: "Which statement best describes accounting?",

                answers: [
                    "A. A system used only to calculate taxes",
                    "B. A system for recording, organizing and analyzing financial information",
                    "C. A method used only by large corporations",
                    "D. A system used only for tracking cash"
                ],

                correctAnswer: 1,

                explanation:
                    "Accounting records, organizes, summarizes and analyzes financial information."
            }
        );

        return;
    }


    if (lessonId === 2) {

        showLessonPage(
            2,
            "The Accounting Equation",
            `

                <h2>The basic equation</h2>

                <div class="formula-box">
                    Assets = Liabilities + Equity
                </div>

                <p>
                    This equation is one of the foundations of accounting.
                    Every transaction must keep the equation balanced.
                </p>


                <h2>Assets</h2>

                <p>
                    Assets are resources controlled by a business that are
                    expected to provide future economic benefit.
                </p>

                <p>
                    Examples include cash, inventory, equipment,
                    buildings and accounts receivable.
                </p>


                <h2>Liabilities</h2>

                <p>
                    Liabilities are obligations the business owes to others.
                </p>

                <p>
                    Examples include accounts payable, loans payable
                    and wages payable.
                </p>


                <h2>Equity</h2>

                <p>
                    Equity represents the owners' residual interest in the
                    assets after liabilities are deducted.
                </p>


                <div class="example-box">

                    <h3>Example</h3>

                    <p>
                        A business has <strong>$50,000 of assets</strong>
                        and <strong>$20,000 of liabilities</strong>.
                    </p>

                    <p>
                        Equity must equal:
                    </p>

                    <p>
                        <strong>
                            $50,000 − $20,000 = $30,000
                        </strong>
                    </p>

                </div>


                <div class="key-points">

                    <h3>Remember</h3>

                    <ul>
                        <li>The accounting equation must always balance.</li>
                        <li>Assets are resources.</li>
                        <li>Liabilities are obligations.</li>
                        <li>Equity is the owners' residual interest.</li>
                    </ul>

                </div>

            `,
            {
                question:
                    "A company has $80,000 of assets and $25,000 of liabilities. What is equity?",

                answers: [
                    "A. $105,000",
                    "B. $55,000",
                    "C. $25,000",
                    "D. $80,000"
                ],

                correctAnswer: 1,

                explanation:
                    "Equity = Assets − Liabilities. $80,000 − $25,000 = $55,000."
            }
        );

        return;
    }

    if (lessonId === 3) {

    showLessonPage(
        3,
        "Accounts and Account Types",
        `

            <h2>What is an account?</h2>

            <p>
                An account is a record used to track changes in a specific
                financial item.
            </p>

            <p>
                For example, a business may have separate accounts for
                Cash, Inventory, Accounts Payable, Revenue, and Rent Expense.
            </p>


            <h2>The five main account types</h2>

            <div class="key-points">

                <h3>1. Assets</h3>

                <p>
                    Resources the business owns or controls.
                </p>

                <p>
                    Examples: Cash, Accounts Receivable, Inventory,
                    Equipment, Buildings.
                </p>

            </div>


            <div class="key-points">

                <h3>2. Liabilities</h3>

                <p>
                    Amounts the business owes to others.
                </p>

                <p>
                    Examples: Accounts Payable, Loans Payable,
                    Wages Payable.
                </p>

            </div>


            <div class="key-points">

                <h3>3. Equity</h3>

                <p>
                    The owners' residual interest in the business.
                </p>

                <p>
                    Examples may include Common Stock,
                    Additional Paid-In Capital, and Retained Earnings.
                </p>

            </div>


            <div class="key-points">

                <h3>4. Revenue</h3>

                <p>
                    Income earned from providing goods or services.
                </p>

                <p>
                    Examples: Sales Revenue, Service Revenue,
                    Interest Revenue.
                </p>

            </div>


            <div class="key-points">

                <h3>5. Expenses</h3>

                <p>
                    Costs incurred while operating the business.
                </p>

                <p>
                    Examples: Rent Expense, Salary Expense,
                    Utilities Expense.
                </p>

            </div>


            <div class="example-box">

                <h3>Example</h3>

                <p>
                    A company buys a computer for $2,000 cash.
                </p>

                <p>
                    The <strong>Equipment</strong> account increases,
                    while the <strong>Cash</strong> account decreases.
                </p>

                <p>
                    Both Equipment and Cash are asset accounts.
                </p>

            </div>


            <div class="key-points">

                <h3>Important</h3>

                <p>
                    Every account belongs to a category.
                    Knowing the category is important because it determines
                    how debits and credits affect the account.
                </p>

            </div>

        `,
        {
            question:
                "Which of the following is a liability?",

            answers: [
                "A. Cash",
                "B. Accounts Receivable",
                "C. Accounts Payable",
                "D. Service Revenue"
            ],

            correctAnswer: 2,

            explanation:
                "Accounts Payable is a liability because it represents money the business owes to another party."
        }
    );

    return;
}


if (lessonId === 4) {

    showLessonPage(
        4,
        "Debits and Credits",
        `

            <h2>Debits and credits</h2>

            <p>
                Every accounting transaction affects at least two accounts.
                Debits and credits are the system used to record those changes.
            </p>

            <p>
                A debit does not automatically mean increase,
                and a credit does not automatically mean decrease.
            </p>

            <p>
                Whether a debit increases or decreases an account depends
                on the type of account.
            </p>


            <div class="formula-box">
                Total Debits = Total Credits
            </div>


            <h2>Normal balance rules</h2>

            <div class="debit-credit-table">

                <div class="dc-row dc-header">
                    <div>Account Type</div>
                    <div>Increase</div>
                    <div>Decrease</div>
                </div>

                <div class="dc-row">
                    <div>Assets</div>
                    <div>Debit</div>
                    <div>Credit</div>
                </div>

                <div class="dc-row">
                    <div>Liabilities</div>
                    <div>Credit</div>
                    <div>Debit</div>
                </div>

                <div class="dc-row">
                    <div>Equity</div>
                    <div>Credit</div>
                    <div>Debit</div>
                </div>

                <div class="dc-row">
                    <div>Revenue</div>
                    <div>Credit</div>
                    <div>Debit</div>
                </div>

                <div class="dc-row">
                    <div>Expenses</div>
                    <div>Debit</div>
                    <div>Credit</div>
                </div>

            </div>


            <div class="key-points">

                <h3>Easy memory rule</h3>

                <p>
                    Assets and Expenses normally increase with debits.
                </p>

                <p>
                    Liabilities, Equity, and Revenue normally increase with credits.
                </p>

            </div>


            <h2>Example 1</h2>

            <div class="example-box">

                <p>
                    The owner invests <strong>$10,000 cash</strong>
                    into the business.
                </p>

                <p>
                    Cash is an asset, so it increases with a debit.
                </p>

                <p>
                    Owner's equity increases with a credit.
                </p>

                <p>
                    <strong>Debit Cash $10,000</strong>
                </p>

                <p>
                    <strong>Credit Equity $10,000</strong>
                </p>

            </div>


            <h2>Example 2</h2>

            <div class="example-box">

                <p>
                    The business pays <strong>$1,000 rent in cash</strong>.
                </p>

                <p>
                    Rent Expense increases with a debit.
                </p>

                <p>
                    Cash decreases with a credit.
                </p>

                <p>
                    <strong>Debit Rent Expense $1,000</strong>
                </p>

                <p>
                    <strong>Credit Cash $1,000</strong>
                </p>

            </div>


            <div class="key-points">

                <h3>Never forget</h3>

                <ul>
                    <li>Every transaction must balance.</li>
                    <li>Total debits must equal total credits.</li>
                    <li>Debit does not mean good or bad.</li>
                    <li>Credit does not mean increase in every account.</li>
                </ul>

            </div>

        `,
        {
            question:
                "A company receives $5,000 cash from a customer for services already performed. Which account is credited?",

            answers: [
                "A. Cash",
                "B. Service Revenue",
                "C. Accounts Receivable",
                "D. Rent Expense"
            ],

            correctAnswer: 1,

            explanation:
                "Cash increases with a debit, while Service Revenue increases with a credit."
        }
    );

    return;
}

if (lessonId === 5) {

    showLessonPage(
        5,
        "T-Accounts",
        `

            <h2>What is a T-account?</h2>

            <p>
                A T-account is a simple visual way to show increases
                and decreases in an account.
            </p>

            <p>
                The left side is always the <strong>debit side</strong>
                and the right side is always the <strong>credit side</strong>.
            </p>


            <div class="t-account">

                <div class="t-title">Cash</div>

                <div class="t-sides">

                    <div>
                        <strong>Debit</strong>
                        <span>Left Side</span>
                    </div>

                    <div>
                        <strong>Credit</strong>
                        <span>Right Side</span>
                    </div>

                </div>

            </div>


            <div class="key-points">

                <h3>Important</h3>

                <p>
                    Debit always means LEFT.
                </p>

                <p>
                    Credit always means RIGHT.
                </p>

                <p>
                    But whether the account increases or decreases depends
                    on the account type.
                </p>

            </div>


            <h2>Example: Receiving cash</h2>

            <p>
                Suppose a business receives <strong>$5,000 cash</strong>
                from its owner.
            </p>

            <p>
                Cash is an asset. Assets increase with debits.
            </p>


            <div class="t-account">

                <div class="t-title">Cash</div>

                <div class="t-sides">

                    <div>
                        <strong>Debit</strong>
                        <span>$5,000</span>
                    </div>

                    <div>
                        <strong>Credit</strong>
                        <span>—</span>
                    </div>

                </div>

            </div>


            <h2>Example: Paying cash</h2>

            <p>
                Now suppose the business pays <strong>$1,000 rent</strong>.
            </p>

            <p>
                Cash decreases. Because Cash is an asset,
                a decrease is recorded with a credit.
            </p>


            <div class="t-account">

                <div class="t-title">Cash</div>

                <div class="t-sides">

                    <div>
                        <strong>Debit</strong>
                        <span>$5,000</span>
                    </div>

                    <div>
                        <strong>Credit</strong>
                        <span>$1,000</span>
                    </div>

                </div>

            </div>


            <div class="example-box">

                <h3>Ending Cash Balance</h3>

                <p>
                    $5,000 debit − $1,000 credit =
                    <strong>$4,000 debit balance</strong>.
                </p>

            </div>


            <div class="key-points">

                <h3>Remember</h3>

                <ul>
                    <li>Debit = left.</li>
                    <li>Credit = right.</li>
                    <li>Assets normally have debit balances.</li>
                    <li>Liabilities normally have credit balances.</li>
                    <li>Equity normally has a credit balance.</li>
                    <li>Revenue normally has a credit balance.</li>
                    <li>Expenses normally have debit balances.</li>
                </ul>

            </div>

        `,
        {
            question:
                "Cash has a $9,000 debit and a $2,500 credit. What is the ending balance?",

            answers: [
                "A. $11,500 debit",
                "B. $6,500 debit",
                "C. $6,500 credit",
                "D. $2,500 credit"
            ],

            correctAnswer: 1,

            explanation:
                "Cash is an asset. $9,000 debit minus $2,500 credit gives a $6,500 debit balance."
        }
    );

    return;
}


if (lessonId === 6) {

    showLessonPage(
        6,
        "Journal Entries",
        `

            <h2>What is a journal entry?</h2>

            <p>
                A journal entry records the accounts affected by a transaction
                and the debit and credit amounts for those accounts.
            </p>

            <div class="formula-box">
                Total Debits = Total Credits
            </div>


            <h2>How to analyze a transaction</h2>

            <div class="key-points">

                <ol>
                    <li>Identify which accounts are affected.</li>
                    <li>Determine each account's type.</li>
                    <li>Determine whether each account increases or decreases.</li>
                    <li>Apply the debit and credit rules.</li>
                    <li>Make sure total debits equal total credits.</li>
                </ol>

            </div>


            <h2>Example 1 — Owner invests cash</h2>

            <p>
                An owner invests <strong>$20,000 cash</strong>
                into a corporation in exchange for common stock.
            </p>


            <div class="journal-entry">

                <div class="journal-row journal-header">
                    <div>Account</div>
                    <div>Debit</div>
                    <div>Credit</div>
                </div>

                <div class="journal-row">
                    <div>Cash</div>
                    <div>$20,000</div>
                    <div>—</div>
                </div>

                <div class="journal-row credit-row">
                    <div>Common Stock</div>
                    <div>—</div>
                    <div>$20,000</div>
                </div>

            </div>


            <p>
                Cash increases, so we debit Cash.
                Equity increases, so we credit Common Stock.
            </p>


            <h2>Example 2 — Purchase equipment for cash</h2>

            <p>
                The company buys equipment for
                <strong>$6,000 cash</strong>.
            </p>


            <div class="journal-entry">

                <div class="journal-row journal-header">
                    <div>Account</div>
                    <div>Debit</div>
                    <div>Credit</div>
                </div>

                <div class="journal-row">
                    <div>Equipment</div>
                    <div>$6,000</div>
                    <div>—</div>
                </div>

                <div class="journal-row credit-row">
                    <div>Cash</div>
                    <div>—</div>
                    <div>$6,000</div>
                </div>

            </div>


            <p>
                Equipment increases and Cash decreases.
                Both accounts are assets.
            </p>


            <h2>Example 3 — Purchase supplies on account</h2>

            <p>
                The company purchases <strong>$1,500 of supplies</strong>
                but will pay the supplier later.
            </p>


            <div class="journal-entry">

                <div class="journal-row journal-header">
                    <div>Account</div>
                    <div>Debit</div>
                    <div>Credit</div>
                </div>

                <div class="journal-row">
                    <div>Supplies</div>
                    <div>$1,500</div>
                    <div>—</div>
                </div>

                <div class="journal-row credit-row">
                    <div>Accounts Payable</div>
                    <div>—</div>
                    <div>$1,500</div>
                </div>

            </div>


            <p>
                Supplies increases as an asset.
                Accounts Payable increases as a liability.
            </p>


            <div class="key-points">

                <h3>CPA habit</h3>

                <p>
                    Don't memorize entire journal entries.
                    Analyze the accounts first.
                </p>

                <p>
                    Ask:
                    <strong>
                        What accounts changed? Did they increase or decrease?
                    </strong>
                </p>

                <p>
                    Then apply the debit and credit rules.
                </p>

            </div>

        `,
        {
            question:
                "A company pays $3,000 cash to reduce Accounts Payable. Which journal entry is correct?",

            answers: [
                "A. Debit Cash $3,000; Credit Accounts Payable $3,000",
                "B. Debit Accounts Payable $3,000; Credit Cash $3,000",
                "C. Debit Expense $3,000; Credit Cash $3,000",
                "D. Debit Accounts Payable $3,000; Credit Revenue $3,000"
            ],

            correctAnswer: 1,

            explanation:
                "Accounts Payable is a liability, so decreasing it requires a debit. Cash is an asset, so decreasing it requires a credit."
        }
    );

    return;
}

if (lessonId === 7) {

    showLessonPage(
        7,
        "The General Ledger",
        `

            <h2>What is the general ledger?</h2>

            <p>
                The general ledger is the collection of all accounts used
                by a business.
            </p>

            <p>
                After transactions are recorded in the journal, the amounts
                are posted into the appropriate ledger accounts.
            </p>


            <div class="key-points">

                <h3>Think of it this way</h3>

                <p>
                    The journal records transactions in date order.
                </p>

                <p>
                    The general ledger organizes those transactions
                    by account.
                </p>

            </div>


            <h2>Example</h2>

            <p>
                Suppose a company has these transactions:
            </p>

            <ul class="lesson-list-simple">
                <li>Owner invests $10,000 cash.</li>
                <li>Company pays $2,000 cash for equipment.</li>
                <li>Company earns $1,500 cash revenue.</li>
            </ul>


            <div class="ledger-grid">

                <div class="ledger-account">

                    <h3>Cash</h3>

                    <div class="ledger-line">
                        <span>Owner investment</span>
                        <strong>+ $10,000</strong>
                    </div>

                    <div class="ledger-line">
                        <span>Equipment purchase</span>
                        <strong>- $2,000</strong>
                    </div>

                    <div class="ledger-line">
                        <span>Revenue received</span>
                        <strong>+ $1,500</strong>
                    </div>

                    <div class="ledger-total">
                        Ending Balance: $9,500
                    </div>

                </div>


                <div class="ledger-account">

                    <h3>Equipment</h3>

                    <div class="ledger-line">
                        <span>Equipment purchase</span>
                        <strong>+ $2,000</strong>
                    </div>

                    <div class="ledger-total">
                        Ending Balance: $2,000
                    </div>

                </div>


                <div class="ledger-account">

                    <h3>Revenue</h3>

                    <div class="ledger-line">
                        <span>Revenue earned</span>
                        <strong>+ $1,500</strong>
                    </div>

                    <div class="ledger-total">
                        Ending Balance: $1,500
                    </div>

                </div>

            </div>


            <div class="key-points">

                <h3>Why the ledger matters</h3>

                <ul>
                    <li>It shows the balance of each account.</li>
                    <li>It groups transactions by account.</li>
                    <li>It helps prepare the trial balance.</li>
                    <li>It helps accountants find and review transactions.</li>
                </ul>

            </div>

        `,
        {
            question:
                "What is the main purpose of the general ledger?",

            answers: [
                "A. To organize transactions by account",
                "B. To calculate only taxes",
                "C. To record only cash transactions",
                "D. To replace financial statements"
            ],

            correctAnswer: 0,

            explanation:
                "The general ledger organizes financial activity by account and shows each account's balance."
        }
    );

    return;
}


if (lessonId === 8) {

    showLessonPage(
        8,
        "Trial Balance",
        `

            <h2>What is a trial balance?</h2>

            <p>
                A trial balance is a list of all general ledger accounts
                and their balances at a specific date.
            </p>

            <p>
                Its main purpose is to check whether total debit balances
                equal total credit balances.
            </p>


            <div class="formula-box">
                Total Debit Balances = Total Credit Balances
            </div>


            <h2>Example trial balance</h2>

            <div class="trial-balance-table">

                <div class="tb-row tb-header">
                    <div>Account</div>
                    <div>Debit</div>
                    <div>Credit</div>
                </div>

                <div class="tb-row">
                    <div>Cash</div>
                    <div>$15,000</div>
                    <div>—</div>
                </div>

                <div class="tb-row">
                    <div>Equipment</div>
                    <div>$10,000</div>
                    <div>—</div>
                </div>

                <div class="tb-row">
                    <div>Accounts Payable</div>
                    <div>—</div>
                    <div>$5,000</div>
                </div>

                <div class="tb-row">
                    <div>Common Stock</div>
                    <div>—</div>
                    <div>$15,000</div>
                </div>

                <div class="tb-row">
                    <div>Revenue</div>
                    <div>—</div>
                    <div>$5,000</div>
                </div>

                <div class="tb-row tb-total">
                    <div>Total</div>
                    <div>$25,000</div>
                    <div>$25,000</div>
                </div>

            </div>


            <h2>Does a balanced trial balance mean everything is correct?</h2>

            <p>
                No.
            </p>

            <p>
                A trial balance can still balance even when certain accounting
                errors exist.
            </p>


            <div class="example-box">

                <h3>Example of an error that still balances</h3>

                <p>
                    Suppose a company buys Equipment for $3,000 cash,
                    but accidentally debits Supplies instead of Equipment.
                </p>

                <p>
                    The debit is still $3,000 and the credit is still $3,000,
                    so the trial balance can still balance.
                </p>

                <p>
                    But the wrong account was used.
                </p>

            </div>


            <div class="key-points">

                <h3>Important</h3>

                <ul>
                    <li>A trial balance checks debit and credit equality.</li>
                    <li>It is prepared from ledger balances.</li>
                    <li>A balanced trial balance does not guarantee no errors exist.</li>
                    <li>It is an important step before preparing financial statements.</li>
                </ul>

            </div>

        `,
        {
            question:
                "If a trial balance has $42,000 of total debits, what should total credits equal?",

            answers: [
                "A. $21,000",
                "B. $42,000",
                "C. $84,000",
                "D. It cannot be determined"
            ],

            correctAnswer: 1,

            explanation:
                "For a balanced trial balance, total debit balances must equal total credit balances."
        }
    );

    return;
}

if (lessonId === 9) {

    showLessonPage(
        9,
        "Adjusting Entries",
        `

            <h2>Why do we need adjusting entries?</h2>

            <p>
                Some revenues and expenses are not recorded at exactly the
                same time cash is received or paid.
            </p>

            <p>
                At the end of an accounting period, adjusting entries help
                make sure revenues and expenses are recognized in the
                appropriate period under accrual accounting.
            </p>


            <div class="key-points">

                <h3>Common adjusting entries</h3>

                <ul>
                    <li>Accrued revenues</li>
                    <li>Accrued expenses</li>
                    <li>Prepaid expenses</li>
                    <li>Unearned revenue</li>
                    <li>Depreciation</li>
                </ul>

            </div>


            <h2>1. Accrued Expenses</h2>

            <p>
                An accrued expense is an expense that has been incurred
                but has not yet been paid or recorded.
            </p>


            <div class="example-box">

                <h3>Example — Wages</h3>

                <p>
                    Employees have earned <strong>$2,000</strong> by
                    December 31, but they will be paid in January.
                </p>

                <div class="journal-entry">

                    <div class="journal-row journal-header">
                        <div>Account</div>
                        <div>Debit</div>
                        <div>Credit</div>
                    </div>

                    <div class="journal-row">
                        <div>Wages Expense</div>
                        <div>$2,000</div>
                        <div>—</div>
                    </div>

                    <div class="journal-row credit-row">
                        <div>Wages Payable</div>
                        <div>—</div>
                        <div>$2,000</div>
                    </div>

                </div>

            </div>


            <h2>2. Prepaid Expenses</h2>

            <p>
                A prepaid expense begins as an asset because the company
                has paid for a future benefit.
            </p>

            <p>
                As that benefit is used, part of the asset becomes an expense.
            </p>


            <div class="example-box">

                <h3>Example — Insurance</h3>

                <p>
                    A company originally pays <strong>$12,000</strong>
                    for 12 months of insurance.
                </p>

                <p>
                    After one month, <strong>$1,000</strong> has been used.
                </p>

                <div class="journal-entry">

                    <div class="journal-row journal-header">
                        <div>Account</div>
                        <div>Debit</div>
                        <div>Credit</div>
                    </div>

                    <div class="journal-row">
                        <div>Insurance Expense</div>
                        <div>$1,000</div>
                        <div>—</div>
                    </div>

                    <div class="journal-row credit-row">
                        <div>Prepaid Insurance</div>
                        <div>—</div>
                        <div>$1,000</div>
                    </div>

                </div>

            </div>


            <h2>3. Unearned Revenue</h2>

            <p>
                When a customer pays before the company has earned the revenue,
                the company initially records a liability.
            </p>

            <p>
                As the service is performed, the liability decreases and
                revenue is recognized.
            </p>


            <div class="example-box">

                <h3>Example</h3>

                <p>
                    A company previously received $5,000 in advance.
                    By period-end, it has earned $2,000.
                </p>

                <div class="journal-entry">

                    <div class="journal-row journal-header">
                        <div>Account</div>
                        <div>Debit</div>
                        <div>Credit</div>
                    </div>

                    <div class="journal-row">
                        <div>Unearned Revenue</div>
                        <div>$2,000</div>
                        <div>—</div>
                    </div>

                    <div class="journal-row credit-row">
                        <div>Service Revenue</div>
                        <div>—</div>
                        <div>$2,000</div>
                    </div>

                </div>

            </div>


            <h2>4. Depreciation</h2>

            <p>
                Long-lived assets such as equipment generally provide benefits
                over multiple accounting periods.
            </p>

            <p>
                Depreciation allocates the asset's depreciable cost over
                its useful life.
            </p>


            <div class="example-box">

                <h3>Simple Example</h3>

                <p>
                    Assume equipment has a depreciable amount of $12,000
                    and that $1,000 of depreciation should be recognized
                    for the current period.
                </p>

                <div class="journal-entry">

                    <div class="journal-row journal-header">
                        <div>Account</div>
                        <div>Debit</div>
                        <div>Credit</div>
                    </div>

                    <div class="journal-row">
                        <div>Depreciation Expense</div>
                        <div>$1,000</div>
                        <div>—</div>
                    </div>

                    <div class="journal-row credit-row">
                        <div>Accumulated Depreciation</div>
                        <div>—</div>
                        <div>$1,000</div>
                    </div>

                </div>

            </div>


            <div class="key-points">

                <h3>The big idea</h3>

                <p>
                    Adjusting entries help put revenues and expenses into
                    the appropriate accounting period.
                </p>

            </div>

        `,
        {
            question:
                "Employees earned $4,000 of wages before year-end, but the company will pay them next year. What should the company record?",

            answers: [
                "A. Debit Cash; Credit Wages Expense",
                "B. Debit Wages Expense; Credit Wages Payable",
                "C. Debit Wages Payable; Credit Cash",
                "D. No entry until the employees are paid"
            ],

            correctAnswer: 1,

            explanation:
                "The wages were incurred in the current period. Wages Expense is debited and Wages Payable is credited."
        }
    );

    return;
}


if (lessonId === 10) {

    showLessonPage(
        10,
        "Financial Statements",
        `

            <h2>The major financial statements</h2>

            <p>
                Financial statements organize accounting information into
                reports that help users understand a company's financial
                performance and financial position.
            </p>


            <div class="statement-grid">

                <div class="statement-card">

                    <h3>Income Statement</h3>

                    <p>
                        Reports revenues and expenses over a period of time.
                    </p>

                    <strong>
                        Revenue − Expenses = Net Income
                    </strong>

                </div>


                <div class="statement-card">

                    <h3>Balance Sheet</h3>

                    <p>
                        Reports assets, liabilities and equity at a specific date.
                    </p>

                    <strong>
                        Assets = Liabilities + Equity
                    </strong>

                </div>


                <div class="statement-card">

                    <h3>Statement of Cash Flows</h3>

                    <p>
                        Explains changes in cash during a period.
                    </p>

                    <strong>
                        Operating · Investing · Financing
                    </strong>

                </div>


                <div class="statement-card">

                    <h3>Statement of Equity</h3>

                    <p>
                        Explains changes in owners' or shareholders' equity
                        during a period.
                    </p>

                </div>

            </div>


            <h2>Income Statement Example</h2>

            <div class="financial-example">

                <div>
                    <span>Service Revenue</span>
                    <strong>$50,000</strong>
                </div>

                <div>
                    <span>Salary Expense</span>
                    <strong>($20,000)</strong>
                </div>

                <div>
                    <span>Rent Expense</span>
                    <strong>($8,000)</strong>
                </div>

                <div>
                    <span>Utilities Expense</span>
                    <strong>($2,000)</strong>
                </div>

                <div class="financial-total">
                    <span>Net Income</span>
                    <strong>$20,000</strong>
                </div>

            </div>


            <h2>Balance Sheet Example</h2>

            <div class="financial-example">

                <div>
                    <span>Total Assets</span>
                    <strong>$100,000</strong>
                </div>

                <div>
                    <span>Total Liabilities</span>
                    <strong>$40,000</strong>
                </div>

                <div>
                    <span>Total Equity</span>
                    <strong>$60,000</strong>
                </div>

                <div class="financial-total">
                    <span>Liabilities + Equity</span>
                    <strong>$100,000</strong>
                </div>

            </div>


            <h2>Statement of Cash Flows</h2>

            <div class="key-points">

                <h3>Three categories</h3>

                <ul>
                    <li>
                        <strong>Operating:</strong>
                        cash flows related primarily to normal business operations.
                    </li>

                    <li>
                        <strong>Investing:</strong>
                        cash flows involving certain long-term assets and investments.
                    </li>

                    <li>
                        <strong>Financing:</strong>
                        cash flows involving debt and owners/shareholders.
                    </li>
                </ul>

            </div>


            <div class="example-box">

                <h3>Connecting the statements</h3>

                <p>
                    The financial statements are not isolated reports.
                    Information from the accounting system flows between them.
                </p>

                <p>
                    As you move into intermediate and CPA-level accounting,
                    understanding these connections becomes increasingly important.
                </p>

            </div>


            <div class="key-points">

                <h3>Fundamentals complete</h3>

                <p>
                    You now have the foundation needed to begin studying
                    accounting in much greater depth.
                </p>

                <p>
                    The next stage will build on these concepts with
                    more difficult transactions, calculations, rules,
                    and financial reporting topics.
                </p>

            </div>

        `,
        {
            question:
                "Which financial statement reports assets, liabilities and equity at a specific date?",

            answers: [
                "A. Income Statement",
                "B. Statement of Cash Flows",
                "C. Balance Sheet",
                "D. Statement of Equity"
            ],

            correctAnswer: 2,

            explanation:
                "The balance sheet reports a company's assets, liabilities and equity at a specific point in time."
        }
    );

    return;
}

    alert("We have not built this lesson yet.");

}
function checkAnswer(button, isCorrect) {

    const result = document.getElementById("quiz-result");

    const allAnswers = document.querySelectorAll(".answer-button");

    allAnswers.forEach(function(answer) {
        answer.disabled = true;
    });


    if (isCorrect) {

        button.classList.add("correct-answer");

        result.innerHTML = `
            <div class="result-correct">
                Correct! Accounting records, organizes,
                summarizes and analyzes financial information.
            </div>
        `;

    } else {

        button.classList.add("wrong-answer");

        result.innerHTML = `
            <div class="result-wrong">
                Not quite. Accounting is much broader than this.
                Try reviewing the explanation above.
            </div>
        `;

    }

}


function completeLesson1() {

    localStorage.setItem("lesson1Completed", "true");

    alert("Lesson 1 completed! 🎉");

    showFundamentals();

}
function showLessonPage(
    lessonId,
    lessonTitle,
    lessonContent,
    quiz
) {

    let answersHTML = "";


    quiz.answers.forEach(function (answer, index) {

        answersHTML += `

            <button class="answer-button"
                onclick="checkLessonAnswer(
                    this,
                    ${index},
                    ${quiz.correctAnswer},
                    '${quiz.explanation.replace(/'/g, "\\'")}'
                )">

                ${answer}

            </button>

        `;

    });


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    Lesson ${lessonId}: ${lessonTitle}
                </h1>

                <p>
                    Accounting Fundamentals
                </p>

            </div>

            <button class="back-button"
                    onclick="showFundamentals()">

                ← Back to Course

            </button>

        </header>


        <section class="lesson-page">


            <div class="lesson-content-card">

                ${lessonContent}

            </div>


            <div class="quiz-card">

                <h2>Quick Check</h2>

                <p class="quiz-question">
                    ${quiz.question}
                </p>

                ${answersHTML}

                <div id="quiz-result"></div>

            </div>


            <div class="lesson-actions">

                <button class="complete-button"
                        onclick="completeFundamentalsLesson(${lessonId})">

                    Complete Lesson

                </button>

            </div>


        </section>

    `;

}
function checkLessonAnswer(
    button,
    selectedAnswer,
    correctAnswer,
    explanation
) {

    const result = document.getElementById("quiz-result");

    const allAnswers =
        document.querySelectorAll(".answer-button");


    allAnswers.forEach(function (answer) {
        answer.disabled = true;
    });


    if (selectedAnswer === correctAnswer) {

        button.classList.add("correct-answer");

        result.innerHTML = `

            <div class="result-correct">

                Correct! ${explanation}

            </div>

        `;

    } else {

        button.classList.add("wrong-answer");

        allAnswers[correctAnswer].classList.add("correct-answer");

        result.innerHTML = `

            <div class="result-wrong">

                Incorrect. ${explanation}

            </div>

        `;

    }

}


function completeFundamentalsLesson(lessonId) {

    localStorage.setItem(
        "fundamentalsLesson" + lessonId,
        "true"
    );

    showFundamentals();

}
const fundamentalsExamQuestions = [

    {
        topic: "Accounting Basics",
        question: "What is the primary purpose of accounting?",
        answers: [
            "To calculate taxes only",
            "To record, organize, summarize and analyze financial information",
            "To track only cash transactions",
            "To prepare payroll only"
        ],
        correctAnswer: 1,
        explanation:
            "Accounting provides financial information by recording, organizing, summarizing and analyzing economic activity."
    },

    {
        topic: "Accounting Equation",
        question: "A company has $90,000 of assets and $35,000 of liabilities. What is equity?",
        answers: [
            "$55,000",
            "$125,000",
            "$35,000",
            "$90,000"
        ],
        correctAnswer: 0,
        explanation:
            "Assets = Liabilities + Equity, so Equity = $90,000 − $35,000 = $55,000."
    },

    {
        topic: "Account Types",
        question: "Which account is an asset?",
        answers: [
            "Accounts Payable",
            "Service Revenue",
            "Accounts Receivable",
            "Wages Expense"
        ],
        correctAnswer: 2,
        explanation:
            "Accounts Receivable represents amounts customers owe the business and is therefore an asset."
    },

    {
        topic: "Account Types",
        question: "Which account is normally classified as a liability?",
        answers: [
            "Inventory",
            "Accounts Payable",
            "Common Stock",
            "Rent Expense"
        ],
        correctAnswer: 1,
        explanation:
            "Accounts Payable represents an obligation owed to another party."
    },

    {
        topic: "Debits & Credits",
        question: "Which type of account normally increases with a debit?",
        answers: [
            "Revenue",
            "Liability",
            "Expense",
            "Equity"
        ],
        correctAnswer: 2,
        explanation:
            "Expenses normally increase with debits."
    },

    {
        topic: "Debits & Credits",
        question: "Which type of account normally increases with a credit?",
        answers: [
            "Asset",
            "Expense",
            "Revenue",
            "Prepaid Expense"
        ],
        correctAnswer: 2,
        explanation:
            "Revenue accounts normally increase with credits."
    },

    {
        topic: "T-Accounts",
        question: "In a T-account, which side is the debit side?",
        answers: [
            "Right",
            "Left",
            "Top",
            "It depends on the account"
        ],
        correctAnswer: 1,
        explanation:
            "A debit is always recorded on the left side of a T-account."
    },

    {
        topic: "T-Accounts",
        question: "Cash has debits of $12,000 and credits of $4,500. What is its balance?",
        answers: [
            "$16,500 credit",
            "$7,500 credit",
            "$7,500 debit",
            "$16,500 debit"
        ],
        correctAnswer: 2,
        explanation:
            "$12,000 − $4,500 = a $7,500 debit balance."
    },

    {
        topic: "Journal Entries",
        question: "A business purchases equipment for $8,000 cash. Which entry is correct?",
        answers: [
            "Debit Cash; Credit Equipment",
            "Debit Equipment; Credit Cash",
            "Debit Equipment; Credit Revenue",
            "Debit Expense; Credit Equipment"
        ],
        correctAnswer: 1,
        explanation:
            "Equipment increases with a debit and Cash decreases with a credit."
    },

    {
        topic: "Journal Entries",
        question: "A company provides $3,000 of services for cash. Which entry is correct?",
        answers: [
            "Debit Cash; Credit Service Revenue",
            "Debit Service Revenue; Credit Cash",
            "Debit Accounts Receivable; Credit Cash",
            "Debit Cash; Credit Accounts Payable"
        ],
        correctAnswer: 0,
        explanation:
            "Cash increases with a debit and Service Revenue increases with a credit."
    },

    {
        topic: "Journal Entries",
        question: "A company purchases $2,500 of supplies on account. Which account is credited?",
        answers: [
            "Cash",
            "Supplies",
            "Accounts Payable",
            "Supplies Expense"
        ],
        correctAnswer: 2,
        explanation:
            "Buying on account creates a liability, so Accounts Payable is credited."
    },

    {
        topic: "General Ledger",
        question: "What does the general ledger primarily organize?",
        answers: [
            "Transactions by employee",
            "Transactions by account",
            "Only tax transactions",
            "Only cash transactions"
        ],
        correctAnswer: 1,
        explanation:
            "The general ledger groups financial transactions according to their accounts."
    },

    {
        topic: "Trial Balance",
        question: "A trial balance reports total debits of $64,000. If it balances, total credits should be:",
        answers: [
            "$32,000",
            "$64,000",
            "$128,000",
            "$0"
        ],
        correctAnswer: 1,
        explanation:
            "A balanced trial balance has equal total debit and credit balances."
    },

    {
        topic: "Trial Balance",
        question: "Which statement about a balanced trial balance is correct?",
        answers: [
            "It proves that every transaction was recorded correctly",
            "It proves there are no accounting errors",
            "It shows debit balances equal credit balances but some errors may still exist",
            "It means net income is zero"
        ],
        correctAnswer: 2,
        explanation:
            "Some errors can leave total debits and credits equal, so a balanced trial balance does not guarantee all entries are correct."
    },

    {
        topic: "Adjusting Entries",
        question: "Employees earned wages before year-end that will be paid next year. What liability should be recognized?",
        answers: [
            "Accounts Receivable",
            "Prepaid Wages",
            "Wages Payable",
            "Unearned Revenue"
        ],
        correctAnswer: 2,
        explanation:
            "An expense has been incurred but not yet paid, creating Wages Payable."
    },

    {
        topic: "Adjusting Entries",
        question: "A prepaid insurance asset is used during the accounting period. What happens?",
        answers: [
            "Insurance Expense increases and Prepaid Insurance decreases",
            "Cash increases and Revenue increases",
            "Prepaid Insurance increases and Expense decreases",
            "Accounts Payable increases"
        ],
        correctAnswer: 0,
        explanation:
            "As insurance coverage is consumed, the prepaid asset decreases and Insurance Expense is recognized."
    },

    {
        topic: "Adjusting Entries",
        question: "When previously unearned revenue becomes earned, which account decreases?",
        answers: [
            "Cash",
            "Revenue",
            "Unearned Revenue",
            "Accounts Receivable"
        ],
        correctAnswer: 2,
        explanation:
            "Unearned Revenue is a liability. As the company earns the revenue, the liability decreases."
    },

    {
        topic: "Financial Statements",
        question: "Which statement reports revenues and expenses over a period of time?",
        answers: [
            "Balance Sheet",
            "Income Statement",
            "Statement of Cash Flows only",
            "Trial Balance"
        ],
        correctAnswer: 1,
        explanation:
            "The income statement reports revenues, expenses and resulting income or loss over a period."
    },

    {
        topic: "Financial Statements",
        question: "Which financial statement reports assets, liabilities and equity at a specific date?",
        answers: [
            "Income Statement",
            "Balance Sheet",
            "Statement of Cash Flows",
            "General Ledger"
        ],
        correctAnswer: 1,
        explanation:
            "The balance sheet presents financial position at a specific point in time."
    },

    {
        topic: "Financial Statements",
        question: "Cash flows are commonly classified into which three categories?",
        answers: [
            "Assets, liabilities and equity",
            "Revenue, expenses and income",
            "Operating, investing and financing",
            "Debits, credits and balances"
        ],
        correctAnswer: 2,
        explanation:
            "The statement of cash flows classifies cash flows into operating, investing and financing activities."
    }

];
let currentExamQuestion = 0;
let fundamentalsExamScore = 0;
let fundamentalsExamAnswers = [];
let fundamentalsExamLocked = false;


function startFundamentalsExam() {

    currentExamQuestion = 0;
    fundamentalsExamScore = 0;
    fundamentalsExamAnswers = [];
    fundamentalsExamLocked = false;

    showFundamentalsExamQuestion();

}
function showFundamentalsExamQuestion() {

    const question =
        fundamentalsExamQuestions[currentExamQuestion];

    const progress =
        ((currentExamQuestion + 1) /
        fundamentalsExamQuestions.length) * 100;


    let answersHTML = "";


    question.answers.forEach(function(answer, index) {

        answersHTML += `

            <button class="exam-answer-button"
                    onclick="selectFundamentalsExamAnswer(
                        this,
                        ${index}
                    )">

                <span class="answer-letter">
                    ${String.fromCharCode(65 + index)}
                </span>

                <span>
                    ${answer}
                </span>

            </button>

        `;

    });


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>Fundamentals Final Exam</h1>

                <p>
                    Question ${currentExamQuestion + 1}
                    of ${fundamentalsExamQuestions.length}
                </p>

            </div>

            <button class="back-button"
                    onclick="showFundamentals()">

                Exit Exam

            </button>

        </header>


        <section class="exam-page">


            <div class="exam-progress">

                <div class="exam-progress-text">

                    <span>
                        Question ${currentExamQuestion + 1}
                    </span>

                    <span>
                        ${Math.round(progress)}%
                    </span>

                </div>

                <div class="course-progress-bar">

                    <div class="course-progress-fill"
                         style="width: ${progress}%;">
                    </div>

                </div>

            </div>


            <div class="exam-question-card">

                <div class="question-topic">
                    ${question.topic}
                </div>

                <h2>
                    ${question.question}
                </h2>


                <div class="exam-answers">

                    ${answersHTML}

                </div>


                <div id="exam-feedback"></div>


                <button
                    id="next-exam-button"
                    class="next-question-button"
                    onclick="nextFundamentalsExamQuestion()"
                    disabled>

                    ${
                        currentExamQuestion ===
                        fundamentalsExamQuestions.length - 1
                        ? "Finish Exam"
                        : "Next Question →"
                    }

                </button>

            </div>


        </section>

    `;

}
function selectFundamentalsExamAnswer(button, selectedAnswer) {

    if (fundamentalsExamLocked) {
        return;
    }

    fundamentalsExamLocked = true;


    const question =
        fundamentalsExamQuestions[currentExamQuestion];


    const answerButtons =
        document.querySelectorAll(".exam-answer-button");


    answerButtons.forEach(function(answerButton) {
        answerButton.disabled = true;
    });


    const correct =
        selectedAnswer === question.correctAnswer;


    if (correct) {

        fundamentalsExamScore++;

        button.classList.add("exam-correct");

    } else {

        button.classList.add("exam-wrong");

        answerButtons[
            question.correctAnswer
        ].classList.add("exam-correct");

    }


    fundamentalsExamAnswers.push({

        topic: question.topic,

        question: question.question,

        correct: correct,

        selectedAnswer: selectedAnswer,

        correctAnswer: question.correctAnswer,

        explanation: question.explanation

    });


    const feedback =
        document.getElementById("exam-feedback");


    feedback.innerHTML = `

        <div class="${
            correct
                ? "exam-feedback-correct"
                : "exam-feedback-wrong"
        }">

            <strong>
                ${correct ? "Correct!" : "Incorrect"}
            </strong>

            <p>
                ${question.explanation}
            </p>

        </div>

    `;


    document.getElementById(
        "next-exam-button"
    ).disabled = false;

}
function nextFundamentalsExamQuestion() {

    currentExamQuestion++;

    fundamentalsExamLocked = false;


    if (
        currentExamQuestion >=
        fundamentalsExamQuestions.length
    ) {

        finishFundamentalsExam();

        return;

    }


    showFundamentalsExamQuestion();

}
function finishFundamentalsExam() {

    const total =
        fundamentalsExamQuestions.length;

    const percentage =
        Math.round(
            (fundamentalsExamScore / total) * 100
        );


    const previousBest =
        Number(
            localStorage.getItem(
                "fundamentalsExamBest"
            )
        ) || 0;


    if (percentage > previousBest) {

        localStorage.setItem(
            "fundamentalsExamBest",
            percentage
        );

    }


    localStorage.setItem(
        "fundamentalsExamLast",
        percentage
    );


    const topicPerformance = {};


    fundamentalsExamAnswers.forEach(function(answer) {

        if (!topicPerformance[answer.topic]) {

            topicPerformance[answer.topic] = {
                correct: 0,
                total: 0
            };

        }


        topicPerformance[answer.topic].total++;


        if (answer.correct) {

            topicPerformance[answer.topic].correct++;

        }

    });


    let topicHTML = "";


    Object.keys(topicPerformance).forEach(function(topic) {

        const data =
            topicPerformance[topic];

        const topicPercent =
            Math.round(
                (data.correct / data.total) * 100
            );


        topicHTML += `

            <div class="topic-result-row">

                <span>
                    ${topic}
                </span>

                <strong>
                    ${topicPercent}%
                </strong>

            </div>

        `;

    });


    let weakTopics =
        Object.keys(topicPerformance).filter(function(topic) {

            const data =
                topicPerformance[topic];

            return (
                data.correct / data.total
            ) < 0.75;

        });


    let weakHTML = "";


    if (weakTopics.length === 0) {

        weakHTML = `

            <div class="strong-result">

                Great job. No major weak areas were detected
                on this Fundamentals exam.

            </div>

        `;

    } else {

        weakHTML = `

            <div class="weak-result">

                <strong>Review Recommended:</strong>

                ${weakTopics.join(" · ")}

            </div>

        `;

    }


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>Exam Results</h1>

                <p>
                    Accounting Fundamentals
                </p>

            </div>

        </header>


        <section class="exam-results-page">


            <div class="score-card">

                <div class="score-circle">

                    ${percentage}%

                </div>


                <h2>

                    ${
                        percentage >= 80
                            ? "Fundamentals Mastered 🎉"
                            : "Keep Practicing"
                    }

                </h2>


                <p>

                    You answered

                    <strong>
                        ${fundamentalsExamScore}
                    </strong>

                    of

                    <strong>
                        ${total}
                    </strong>

                    questions correctly.

                </p>

            </div>


            <div class="results-card">

                <h2>Performance by Topic</h2>

                ${topicHTML}

            </div>


            <div class="results-card">

                <h2>Weak Area Detection</h2>

                ${weakHTML}

            </div>


            <div class="results-actions">

                <button class="back-button"
                        onclick="showFundamentals()">

                    Back to Course

                </button>


                <button class="primary-button"
                        onclick="startFundamentalsExam()">

                    Retake Exam

                </button>

            </div>


        </section>

    `;

}
