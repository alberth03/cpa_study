const intermediateModules = [

    {
        id: 1,
        title: "Financial Reporting Foundations",
        description:
            "Build the reporting concepts needed for intermediate and CPA-level accounting."
    },

    {
        id: 2,
        title: "Cash & Receivables",
        description:
            "Cash controls, bank reconciliations, receivables and credit losses."
    },

    {
        id: 3,
        title: "Inventory",
        description:
            "Inventory systems, cost flow assumptions, valuation and errors."
    },

    {
        id: 4,
        title: "Property, Plant & Equipment",
        description:
            "Acquisition, capitalization, depreciation, disposal and impairment."
    },

    {
        id: 5,
        title: "Liabilities & Bonds",
        description:
            "Current liabilities, contingencies and long-term debt."
    },

    {
        id: 6,
        title: "Revenue Recognition",
        description:
            "Learn when and how companies recognize revenue."
    },

    {
        id: 7,
        title: "Leases",
        description:
            "Understand lease classification, measurement and accounting."
    },

    {
        id: 8,
        title: "Equity & Earnings Per Share",
        description:
            "Stockholders' equity, treasury stock, dividends and EPS."
    },

    {
        id: 9,
        title: "Income Taxes & Accounting Changes",
        description:
            "Deferred taxes, temporary differences, changes and error corrections."
    },

    {
        id: 10,
        title: "Cash Flows & Advanced Reporting",
        description:
            "Cash flow reporting and additional financial reporting concepts."
    }

];


function showIntermediate() {

    saveCurrentPage({
        page: "intermediate"
    });

    setActiveNav("Learn");

    let modulesHTML = "";


    intermediateModules.forEach(function(module) {

        const moduleLessons =
    intermediateModuleLessons[module.id] || [];

let completedModuleLessons = 0;

moduleLessons.forEach(function(lesson) {

    const completed =
        localStorage.getItem(
            "intermediateModule" +
            module.id +
            "Lesson" +
            lesson.id
        ) === "true";

    if (completed) {
        completedModuleLessons++;
    }

});

const moduleComplete =
    moduleLessons.length > 0 &&
    completedModuleLessons === moduleLessons.length;

const moduleProgress =
    moduleLessons.length > 0
        ? Math.round(
            (completedModuleLessons / moduleLessons.length) * 100
        )
        : 0;

        const moduleMastered =
    localStorage.getItem(
        "intermediateModule" +
        module.id +
        "Mastered"
    ) === "true";

        modulesHTML += `

            <div class="module-card"
                 onclick="showIntermediateModule(${module.id})">

                <div class="module-number">
                    ${module.id}
                </div>

                <div class="module-content">

                    <span class="module-label">
                        MODULE ${module.id}
                    </span>

                    <h2>
                        ${module.title}
                    </h2>

                    <p>
                        ${module.description}
                    </p>

                </div>

                <div class="module-status">

    ${
    moduleMastered
        ? "✓ MCQ Practice Passed"
        : moduleComplete
            ? "✓ Lessons Completed"
            : moduleLessons.length > 0
                ? moduleProgress + "%"
                : "Not Started"
}

</div>

            </div>

        `;

    });


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>Intermediate Accounting</h1>

                <p>
                    The bridge from accounting fundamentals
                    to CPA-level financial reporting.
                </p>

            </div>

            <button class="back-button"
                    onclick="showLearn()">

                ← Back to Learn

            </button>

        </header>


        <section>

            <div class="course-intro-card">

                <span class="exam-badge">
                    LEVEL 2
                </span>

                <h2>
                    Intermediate Accounting
                </h2>

                <p>
                    This course takes the accounting foundation
                    you already built and develops it into deeper
                    financial reporting knowledge.
                </p>

                <div class="course-stats">

                    <div>
                        <strong>10</strong>
                        <span>Modules</span>
                    </div>

                    <div>
                        <strong>0%</strong>
                        <span>Progress</span>
                    </div>

                    <div>
                        <strong>Final</strong>
                        <span>Assessment</span>
                    </div>

                </div>

            </div>


            <h2 class="section-title">
                Course Modules
            </h2>


            <div class="module-list">

                ${modulesHTML}

            </div>

            <div class="final-exam-card">

    <div>

        <span class="exam-badge">
            FINAL
        </span>

        <h2>
            Intermediate Accounting Final Exam
        </h2>

        <p>
            50 mixed questions covering all 10 modules.
            Score 80% or higher to pass.
        </p>

    </div>

    <button class="primary-button"
            onclick="startIntermediateFinalExam()">

        Start Final Exam

    </button>

</div>

        </section>

    `;

}


const intermediateModuleLessons = {

    1: [
        {
            id: 1,
            title: "Financial Reporting Environment",
            description:
                "Understand the purpose of financial reporting and who uses financial statements."
        },

        {
            id: 2,
            title: "Accrual Accounting",
            description:
                "Learn when revenues and expenses are recognized."
        },

        {
            id: 3,
            title: "Qualitative Characteristics",
            description:
                "Understand relevance, faithful representation and other reporting qualities."
        },

        {
            id: 4,
            title: "Elements of Financial Statements",
            description:
                "Assets, liabilities, equity, revenues, expenses, gains and losses."
        },

        {
            id: 5,
            title: "Present Value Basics",
            description:
                "Introduction to time value of money and present value concepts."
        }

    ],

    2: [

        {
            id: 1,
            title: "Cash & Cash Equivalents",
            description:
                "Understand what qualifies as cash and how cash equivalents are treated."
        },

        {
            id: 2,
            title: "Bank Reconciliation",
            description:
                "Reconcile the company's cash records with the bank statement."
        },

        {
            id: 3,
            title: "Accounts Receivable",
            description:
                "Learn how receivables arise, are recorded and collected."
        },

        {
            id: 4,
            title: "Credit Losses & Allowance Method",
            description:
                "Estimate uncollectible receivables and record credit losses."
        },

        {
            id: 5,
            title: "Notes Receivable",
            description:
                "Understand interest-bearing notes and maturity calculations."
        }

    ],

    3: [

        {
            id: 1,
            title: "Inventory Basics & Systems",
            description:
                "Understand inventory, cost of goods sold, and periodic vs perpetual systems."
        },

        {
            id: 2,
            title: "FIFO",
            description:
                "Calculate ending inventory and cost of goods sold using first-in, first-out."
        },

        {
            id: 3,
            title: "LIFO",
            description:
                "Calculate ending inventory and cost of goods sold using last-in, first-out."
        },

        {
            id: 4,
            title: "Weighted-Average Cost",
            description:
                "Use average inventory cost to calculate COGS and ending inventory."
        },

        {
            id: 5,
            title: "Inventory Valuation & Errors",
            description:
                "Learn valuation adjustments and how inventory errors affect financial statements."
        }

    ],

    4: [

        {
            id: 1,
            title: "PPE Acquisition & Capitalization",
            description:
                "Determine which costs should be capitalized when acquiring property, plant and equipment."
        },

        {
            id: 2,
            title: "Depreciation Methods",
            description:
                "Calculate depreciation using straight-line, declining-balance and units-of-production methods."
        },

        {
            id: 3,
            title: "Changes in Depreciation Estimates",
            description:
                "Account for changes in useful life, residual value and other depreciation estimates."
        },

        {
            id: 4,
            title: "Disposal of PPE",
            description:
                "Calculate carrying amount and gains or losses when long-lived assets are sold or retired."
        },

        {
            id: 5,
            title: "Impairment & Asset Retirement Concepts",
            description:
                "Understand impairment of long-lived assets and introductory asset retirement concepts."
        }

    ],

    5: [

        {
            id: 1,
            title: "Current Liabilities & Accruals",
            description:
                "Understand short-term obligations, accrued liabilities and common payable accounts."
        },

        {
            id: 2,
            title: "Contingencies & Commitments",
            description:
                "Learn when potential losses may require recognition or disclosure."
        },

        {
            id: 3,
            title: "Bond Basics",
            description:
                "Understand face value, stated rate, market rate, maturity and bond cash flows."
        },

        {
            id: 4,
            title: "Bond Premiums & Discounts",
            description:
                "Understand why bonds issue above or below face value and how carrying amount changes."
        },

        {
            id: 5,
            title: "Effective-Interest Amortization",
            description:
                "Calculate interest expense and amortize bond premiums and discounts."
        }

    ],

        6: [

        {
            id: 1,
            title: "Revenue Recognition Overview",
            description:
                "Understand the core principle and five-step revenue recognition model."
        },

        {
            id: 2,
            title: "Contracts & Performance Obligations",
            description:
                "Identify valid customer contracts and distinct promised goods or services."
        },

        {
            id: 3,
            title: "Determining Transaction Price",
            description:
                "Understand fixed consideration, variable consideration and the amount expected from a contract."
        },

        {
            id: 4,
            title: "Allocating Transaction Price",
            description:
                "Allocate consideration among performance obligations using relative standalone selling prices."
        },

        {
            id: 5,
            title: "Recognizing Revenue",
            description:
                "Determine whether revenue is recognized at a point in time or over time."
        }

    ],

    7: [

    {
        id: 1,
        title: "Lease Fundamentals",
        description:
            "Understand lease terminology, right-of-use assets, lease liabilities and the basic lessee accounting model."
    },

    {
        id: 2,
        title: "Finance vs Operating Leases",
        description:
            "Learn the major criteria used to classify leases and understand why classification matters."
    },

    {
        id: 3,
        title: "Initial Lease Measurement",
        description:
            "Understand how the present value of lease payments determines the initial lease liability."
    },

    {
        id: 4,
        title: "Finance Lease Subsequent Accounting",
        description:
            "Calculate interest, lease liability reduction and amortization of the right-of-use asset."
    },

    {
        id: 5,
        title: "Operating Lease Subsequent Accounting",
        description:
            "Understand single lease expense and subsequent measurement for operating leases."
    }

],

8: [

    {
        id: 1,
        title: "Stockholders' Equity Fundamentals",
        description:
            "Understand the major components of stockholders' equity and how transactions affect them."
    },

    {
        id: 2,
        title: "Common & Preferred Stock",
        description:
            "Learn how stock issuances are recorded and understand important differences between common and preferred stock."
    },

    {
        id: 3,
        title: "Treasury Stock & Dividends",
        description:
            "Understand treasury stock transactions, cash dividends and their effects on stockholders' equity."
    },

    {
        id: 4,
        title: "Basic Earnings Per Share",
        description:
            "Calculate basic EPS using income available to common shareholders and weighted-average common shares."
    },

    {
        id: 5,
        title: "Diluted EPS Foundations",
        description:
            "Understand potentially dilutive securities and the basic concepts behind diluted EPS."
    }

],

9: [

    {
        id: 1,
        title: "Book Income vs Taxable Income",
        description:
            "Understand why financial accounting income and taxable income can differ."
    },

    {
        id: 2,
        title: "Temporary & Permanent Differences",
        description:
            "Distinguish temporary differences that reverse in future periods from permanent differences."
    },

    {
        id: 3,
        title: "Deferred Tax Assets & Liabilities",
        description:
            "Understand how temporary differences can create future taxable or deductible amounts."
    },

    {
        id: 4,
        title: "Income Tax Expense",
        description:
            "Connect current tax expense, deferred tax effects and total income tax expense."
    },

    {
        id: 5,
        title: "Accounting Changes & Error Corrections",
        description:
            "Understand changes in accounting principles, estimates and corrections of prior-period errors."
    }

],

10: [

    {
        id: 1,
        title: "Statement of Cash Flows Fundamentals",
        description:
            "Understand the purpose and structure of the statement of cash flows."
    },

    {
        id: 2,
        title: "Operating, Investing & Financing Activities",
        description:
            "Classify cash receipts and payments into the three major cash flow categories."
    },

    {
        id: 3,
        title: "Indirect Method",
        description:
            "Reconcile net income to net cash provided by operating activities."
    },

    {
        id: 4,
        title: "Noncash Investing & Financing Activities",
        description:
            "Identify significant investing and financing transactions that do not directly involve cash."
    },

    {
        id: 5,
        title: "Comprehensive Income & OCI",
        description:
            "Understand net income, other comprehensive income and accumulated other comprehensive income."
    }

]

};


function showIntermediateModule(moduleId) {

    saveCurrentPage({
        page: "intermediateModule",
        moduleId: moduleId
    });

    setActiveNav("Learn");

    const module =
        intermediateModules.find(function(item) {
            return item.id === moduleId;
        });


    if (!module) {
        return;
    }


    const lessons =
        intermediateModuleLessons[moduleId] || [];


    let lessonsHTML = "";


    if (lessons.length === 0) {

        lessonsHTML = `

            <div class="coming-next-box">

                <h3>Module content coming next</h3>

                <p>
                    We'll build this module after completing
                    the earlier modules.
                </p>

            </div>

        `;

    } else {

        lessons.forEach(function(lesson) {

            const completed =
                localStorage.getItem(
                    "intermediateModule" +
                    moduleId +
                    "Lesson" +
                    lesson.id
                ) === "true";


            lessonsHTML += `

                <div class="lesson-card"
                     onclick="showIntermediateLesson(
                        ${moduleId},
                        ${lesson.id}
                     )">

                    <div class="lesson-number">
                        ${lesson.id}
                    </div>

                    <div class="lesson-info">

                        <h3>
                            ${lesson.title}
                        </h3>

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

    }


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    ${module.title}
                </h1>

                <p>
                    Intermediate Accounting · Module ${module.id}
                </p>

            </div>

            <button class="back-button"
                    onclick="showIntermediate()">

                ← Back to Course

            </button>

        </header>


        <section>

            <div class="course-progress-card">

                <div>

                    <h3>
                        Module ${module.id}
                    </h3>

                    <p>
                        ${module.description}
                    </p>

                </div>

            </div>


            <div class="lesson-list">

                ${lessonsHTML}

            </div>

            ${
   moduleId === 1 ||
moduleId === 2 ||
moduleId === 3 ||
moduleId === 4 ||
moduleId === 5 ||
moduleId === 6 ||
moduleId === 7 ||
moduleId === 8 ||
moduleId === 9 ||
moduleId === 10
        ? `

            <div class="final-exam-card">

                <div>

                    <span class="exam-badge">
                        MODULE QUIZ
                    </span>

                    <h2>
                        ${module.title} Quiz
                    </h2>

                    <p>
                        10 questions covering all five lessons.
                    </p>

                </div>

                <button class="primary-button"
                        onclick="startIntermediateModuleQuiz(${moduleId})">

                    Start Module Quiz

                </button>

            </div>

        `
        : ""
}

        </section>

    `;

}

function showIntermediateLesson(moduleId, lessonId) {

        saveCurrentPage({
        page: "intermediateLesson",
        moduleId: moduleId,
        lessonId: lessonId
    });

    setActiveNav("Learn");


    if (moduleId === 1 && lessonId === 1) {

        showIntermediateLessonPage(
            1,
            1,
            "Financial Reporting Environment",
            `

                <h2>What is financial reporting?</h2>

                <p>
                    Financial reporting communicates financial information
                    about a business to people who need that information
                    to make decisions.
                </p>


                <h2>Who uses financial statements?</h2>

                <div class="key-points">

                    <ul>

                        <li>
                            Investors
                        </li>

                        <li>
                            Lenders
                        </li>

                        <li>
                            Creditors
                        </li>

                        <li>
                            Management
                        </li>

                        <li>
                            Regulators
                        </li>

                    </ul>

                </div>


                <h2>General-purpose financial reporting</h2>

                <p>
                    General-purpose financial statements are designed
                    primarily to provide useful financial information
                    to external users.
                </p>


                <div class="example-box">

                    <h3>Example</h3>

                    <p>
                        An investor considering buying stock in a company
                        may review its financial statements to evaluate
                        profitability, debt levels, cash flows and financial position.
                    </p>

                </div>


                <div class="key-points">

                    <h3>Main idea</h3>

                    <p>
                        Financial reporting exists to provide useful information
                        for economic decision-making.
                    </p>

                </div>

            `,
            {
                question:
                    "Which user is considered an external user of financial statements?",

                answers: [
                    "A. Production manager",
                    "B. Sales manager",
                    "C. Investor",
                    "D. Payroll employee"
                ],

                correctAnswer: 2,

                explanation:
                    "Investors are external users because they are outside the company and use financial information to make investment decisions."
            }
        );

        return;
    }


    if (moduleId === 1 && lessonId === 2) {

        showIntermediateLessonPage(
            1,
            2,
            "Accrual Accounting",
            `

                <h2>Cash basis vs accrual basis</h2>

                <p>
                    Under cash-basis accounting, revenue and expenses
                    are generally recognized when cash changes hands.
                </p>

                <p>
                    Under accrual accounting, revenues and expenses are
                    recognized according to when economic activity occurs,
                    not simply when cash is received or paid.
                </p>


                <div class="comparison-grid">

                    <div class="comparison-card">

                        <h3>Cash Basis</h3>

                        <p>
                            Focuses primarily on cash receipts and payments.
                        </p>

                    </div>


                    <div class="comparison-card">

                        <h3>Accrual Basis</h3>

                        <p>
                            Recognizes economic events in the appropriate period.
                        </p>

                    </div>

                </div>


                <h2>Revenue example</h2>

                <div class="example-box">

                    <p>
                        A company performs $5,000 of services in December
                        but receives payment in January.
                    </p>

                    <p>
                        Under accrual accounting, the revenue is generally
                        recognized in December because that is when the
                        service was performed.
                    </p>

                </div>


                <h2>Expense example</h2>

                <div class="example-box">

                    <p>
                        Employees earn $2,000 in wages during December
                        but are paid in January.
                    </p>

                    <p>
                        The wage expense is recognized in December.
                    </p>

                </div>


                <div class="key-points">

                    <h3>Remember</h3>

                    <p>
                        Accrual accounting focuses on when revenues are earned
                        and when expenses are incurred.
                    </p>

                </div>

            `,
            {
                question:
                    "A company performs services in December but receives cash in January. Under accrual accounting, when is the revenue generally recognized?",

                answers: [
                    "A. January",
                    "B. December",
                    "C. When the customer signs the contract",
                    "D. Only when both companies agree"
                ],

                correctAnswer: 1,

                explanation:
                    "Under accrual accounting, revenue is recognized when it is earned, so the revenue belongs in December."
            }
        );

        return;
    }

if (moduleId === 1 && lessonId === 3) {

    showIntermediateLessonPage(
        1,
        3,
        "Qualitative Characteristics",
        `

            <h2>What makes financial information useful?</h2>

            <p>
                Financial information is useful when it helps users make
                better economic decisions.
            </p>

            <p>
                Two fundamental qualitative characteristics are especially important:
                <strong>relevance</strong> and
                <strong>faithful representation</strong>.
            </p>


            <h2>1. Relevance</h2>

            <p>
                Information is relevant when it can influence a user's decision.
            </p>

            <div class="key-points">

                <h3>Relevant information may have:</h3>

                <ul>
                    <li>Predictive value</li>
                    <li>Confirmatory value</li>
                    <li>Materiality</li>
                </ul>

            </div>


            <div class="example-box">

                <h3>Materiality Example</h3>

                <p>
                    A $10 error may be insignificant for a company with
                    billions of dollars in assets.
                </p>

                <p>
                    But a $10,000,000 error could clearly affect the decisions
                    of investors and creditors.
                </p>

            </div>


            <h2>2. Faithful Representation</h2>

            <p>
                Financial information should represent the economic
                substance of what actually occurred.
            </p>

            <div class="key-points">

                <h3>Faithful representation aims to be:</h3>

                <ul>
                    <li>Complete</li>
                    <li>Neutral</li>
                    <li>Free from material error</li>
                </ul>

            </div>


            <h2>Enhancing characteristics</h2>

            <p>
                Other characteristics can make useful information even better.
            </p>

            <div class="debit-credit-table">

                <div class="dc-row dc-header">
                    <div>Characteristic</div>
                    <div>Meaning</div>
                    <div>Why It Matters</div>
                </div>

                <div class="dc-row">
                    <div>Comparability</div>
                    <div>Allows comparison</div>
                    <div>Helps compare companies or periods</div>
                </div>

                <div class="dc-row">
                    <div>Verifiability</div>
                    <div>Can be supported</div>
                    <div>Improves confidence in information</div>
                </div>

                <div class="dc-row">
                    <div>Timeliness</div>
                    <div>Available in time</div>
                    <div>Information can still affect decisions</div>
                </div>

                <div class="dc-row">
                    <div>Understandability</div>
                    <div>Clearly presented</div>
                    <div>Helps knowledgeable users interpret it</div>
                </div>

            </div>


            <div class="key-points">

                <h3>Big idea</h3>

                <p>
                    Useful financial information should first be relevant
                    and faithfully represented.
                </p>

                <p>
                    Comparability, verifiability, timeliness and
                    understandability enhance that usefulness.
                </p>

            </div>

        `,
        {
            question:
                "Which of the following is a fundamental qualitative characteristic of useful financial information?",

            answers: [
                "A. Timeliness",
                "B. Comparability",
                "C. Relevance",
                "D. Understandability"
            ],

            correctAnswer: 2,

            explanation:
                "Relevance and faithful representation are fundamental qualitative characteristics. Timeliness, comparability, verifiability and understandability are enhancing characteristics."
        }
    );

    return;
}


if (moduleId === 1 && lessonId === 4) {

    showIntermediateLessonPage(
        1,
        4,
        "Elements of Financial Statements",
        `

            <h2>Building blocks of financial statements</h2>

            <p>
                Financial statements are built from categories called
                financial statement elements.
            </p>

            <p>
                You already know several of them from Accounting Fundamentals,
                but now we will connect them more directly to financial reporting.
            </p>


            <h2>Assets</h2>

            <div class="key-points">

                <p>
                    Assets are present economic resources controlled by
                    the entity as a result of past events.
                </p>

                <p>
                    Examples include Cash, Accounts Receivable,
                    Inventory and Equipment.
                </p>

            </div>


            <h2>Liabilities</h2>

            <div class="key-points">

                <p>
                    Liabilities are present obligations of an entity
                    to transfer economic resources as a result of past events.
                </p>

                <p>
                    Examples include Accounts Payable,
                    Wages Payable and Debt.
                </p>

            </div>


            <h2>Equity</h2>

            <div class="key-points">

                <p>
                    Equity is the residual interest in the assets
                    of an entity after deducting liabilities.
                </p>

            </div>


            <div class="formula-box">
                Equity = Assets − Liabilities
            </div>


            <h2>Revenue and Expenses</h2>

            <p>
                Revenues generally increase equity through activities
                related to providing goods or services.
            </p>

            <p>
                Expenses generally decrease equity through the consumption
                of resources or incurrence of obligations in generating revenue.
            </p>


            <h2>Gains and Losses</h2>

            <p>
                Gains and losses may arise from transactions that are not
                part of the entity's main revenue-producing activities.
            </p>


            <div class="example-box">

                <h3>Example</h3>

                <p>
                    A company sells old equipment for more than its carrying amount.
                </p>

                <p>
                    The excess may be reported as a
                    <strong>gain</strong>.
                </p>

            </div>


            <div class="key-points">

                <h3>Keep the relationships straight</h3>

                <ul>
                    <li>Assets represent economic resources.</li>
                    <li>Liabilities represent obligations.</li>
                    <li>Equity is the residual interest.</li>
                    <li>Revenue generally increases equity.</li>
                    <li>Expenses generally decrease equity.</li>
                    <li>Gains and losses can also affect equity.</li>
                </ul>

            </div>

        `,
        {
            question:
                "Which statement best describes equity?",

            answers: [
                "A. The total cash owned by the company",
                "B. Assets minus liabilities",
                "C. Revenue minus expenses only",
                "D. All amounts owed to creditors"
            ],

            correctAnswer: 1,

            explanation:
                "Equity is the residual interest in the entity after liabilities are deducted from assets."
        }
    );

    return;
}


if (moduleId === 1 && lessonId === 5) {

    showIntermediateLessonPage(
        1,
        5,
        "Present Value Basics",
        `

            <h2>The time value of money</h2>

            <p>
                A dollar today is generally worth more than a dollar
                received in the future because today's dollar can potentially
                be invested and earn a return.
            </p>


            <div class="key-points">

                <h3>Two important ideas</h3>

                <p>
                    <strong>Future Value:</strong>
                    What money today could grow to in the future.
                </p>

                <p>
                    <strong>Present Value:</strong>
                    What a future amount of money is worth today.
                </p>

            </div>


            <h2>Simple future value example</h2>

            <p>
                Suppose you invest <strong>$1,000</strong>
                for one year at <strong>10%</strong>.
            </p>

            <div class="formula-box">
                $1,000 × 1.10 = $1,100
            </div>

            <p>
                The future value after one year is
                <strong>$1,100</strong>.
            </p>


            <h2>Now work backward</h2>

            <p>
                If someone promises to pay you
                <strong>$1,100 one year from now</strong>
                and the appropriate discount rate is 10%,
                its present value is:
            </p>

            <div class="formula-box">
                $1,100 ÷ 1.10 = $1,000
            </div>


            <h2>Basic present value formula</h2>

            <div class="formula-box">
                PV = FV ÷ (1 + r)ⁿ
            </div>


            <div class="key-points">

                <p>
                    <strong>PV</strong> = Present Value
                </p>

                <p>
                    <strong>FV</strong> = Future Value
                </p>

                <p>
                    <strong>r</strong> = Interest or discount rate
                </p>

                <p>
                    <strong>n</strong> = Number of periods
                </p>

            </div>


            <h2>Accounting connection</h2>

            <p>
                Present value concepts become important later when you study
                topics such as bonds, leases and certain long-term obligations.
            </p>


            <div class="example-box">

                <h3>Example</h3>

                <p>
                    You will receive $10,000 one year from now.
                    Assume a 5% discount rate.
                </p>

                <p>
                    Present Value =
                    $10,000 ÷ 1.05
                </p>

                <p>
                    Present Value ≈
                    <strong>$9,523.81</strong>
                </p>

            </div>


            <div class="key-points">

                <h3>Don't overcomplicate this yet</h3>

                <p>
                    At this stage, the goal is simply to understand
                    why future cash flows may be worth less today.
                </p>

                <p>
                    We'll do much more detailed present-value calculations
                    when we reach bonds and leases.
                </p>

            </div>

        `,
        {
            question:
                "What is the present value of $1,100 received one year from now if the discount rate is 10%?",

            answers: [
                "A. $900",
                "B. $1,000",
                "C. $1,100",
                "D. $1,210"
            ],

            correctAnswer: 1,

            explanation:
                "PV = $1,100 ÷ 1.10 = $1,000."
        }
    );

    return;
}

if (moduleId === 2 && lessonId === 1) {

    showIntermediateLessonPage(
        2,
        1,
        "Cash & Cash Equivalents",
        `

            <h2>What counts as cash?</h2>

            <p>
                Cash includes money that is readily available for use.
            </p>

            <div class="key-points">

                <h3>Common examples</h3>

                <ul>
                    <li>Currency and coins</li>
                    <li>Demand deposits</li>
                    <li>Checking accounts</li>
                    <li>Undeposited customer checks</li>
                </ul>

            </div>


            <h2>Cash equivalents</h2>

            <p>
                Cash equivalents are short-term, highly liquid investments
                that can be converted quickly into known amounts of cash
                and generally have insignificant risk of changes in value.
            </p>

            <p>
                They generally have an original maturity of
                <strong>three months or less</strong>.
            </p>


            <div class="example-box">

                <h3>Example</h3>

                <p>
                    A company purchases a Treasury bill when it has
                    two months remaining until maturity.
                </p>

                <p>
                    Assuming the other requirements are met,
                    it may qualify as a cash equivalent.
                </p>

            </div>


            <h2>Restricted cash</h2>

            <p>
                Sometimes cash cannot be used freely because it has been
                set aside for a particular purpose.
            </p>

            <p>
                This is called <strong>restricted cash</strong>.
            </p>


            <div class="key-points">

                <h3>Important distinction</h3>

                <p>
                    Cash may physically exist but still require separate
                    presentation or disclosure if its use is restricted.
                </p>

            </div>


            <h2>Items that are not automatically cash</h2>

            <div class="key-points">

                <ul>
                    <li>Postdated checks</li>
                    <li>Employee IOUs</li>
                    <li>Long-term investments</li>
                    <li>Receivables from customers</li>
                </ul>

            </div>

        `,
        {
            question:
                "Which investment is most likely to qualify as a cash equivalent?",

            answers: [
    "A bond purchased with five years remaining until maturity",
    "Common stock expected to be sold within three months",
    "A one-year certificate of deposit purchased eleven months ago",
    "A Treasury bill purchased when it has two months remaining until maturity"
],

correctAnswer: 3,

            explanation:
                "Cash equivalents are highly liquid short-term investments, generally with original maturities of three months or less."
        }
    );

    return;
}

if (moduleId === 2 && lessonId === 2) {

    showIntermediateLessonPage(
        2,
        2,
        "Bank Reconciliation",
        `

            <h2>Why do bank and book balances differ?</h2>

            <p>
                The cash balance in a company's accounting records may differ
                from the balance shown on its bank statement.
            </p>

            <p>
                A bank reconciliation explains those differences.
            </p>


            <h2>Bank-side adjustments</h2>

            <div class="key-points">

                <h3>Deposits in transit</h3>

                <p>
                    Deposits recorded by the company that have not yet
                    appeared on the bank statement.
                </p>

                <p>
                    These are generally <strong>added to the bank balance</strong>.
                </p>

            </div>


            <div class="key-points">

                <h3>Outstanding checks</h3>

                <p>
                    Checks recorded by the company that have not yet
                    cleared the bank.
                </p>

                <p>
                    These are generally <strong>subtracted from the bank balance</strong>.
                </p>

            </div>


            <h2>Book-side adjustments</h2>

            <p>
                Some items appear on the bank statement before the company
                records them.
            </p>

            <div class="key-points">

                <ul>
                    <li>Bank service charges</li>
                    <li>NSF customer checks</li>
                    <li>Interest earned</li>
                    <li>Automatic collections or payments</li>
                </ul>

            </div>


            <h2>Example</h2>

            <div class="financial-example">

                <div>
                    <span>Bank statement balance</span>
                    <strong>$20,000</strong>
                </div>

                <div>
                    <span>Add: Deposit in transit</span>
                    <strong>$3,000</strong>
                </div>

                <div>
                    <span>Less: Outstanding checks</span>
                    <strong>($2,000)</strong>
                </div>

                <div class="financial-total">
                    <span>Adjusted bank balance</span>
                    <strong>$21,000</strong>
                </div>

            </div>


            <div class="example-box">

                <h3>Important</h3>

                <p>
                    Deposits in transit and outstanding checks usually
                    do not require new journal entries because the company
                    has already recorded them.
                </p>

                <p>
                    Book-side items such as bank fees or NSF checks
                    generally do require journal entries.
                </p>

            </div>

        `,
        {
            question:
                "A company has a $15,000 bank balance, a $2,000 deposit in transit and $1,500 of outstanding checks. What is the adjusted bank balance?",

            answers: [
                "A. $11,500",
                "B. $15,500",
                "C. $16,500",
                "D. $18,500"
            ],

            correctAnswer: 1,

            explanation:
                "$15,000 + $2,000 − $1,500 = $15,500."
        }
    );

    return;
}

if (moduleId === 2 && lessonId === 3) {

    showIntermediateLessonPage(
        2,
        3,
        "Accounts Receivable",
        `

            <h2>What is Accounts Receivable?</h2>

            <p>
                Accounts Receivable represents amounts customers owe
                the company for goods or services provided on credit.
            </p>


            <div class="example-box">

                <h3>Credit sale</h3>

                <p>
                    A company provides $5,000 of services on account.
                </p>

                <div class="journal-entry">

                    <div class="journal-row journal-header">
                        <div>Account</div>
                        <div>Debit</div>
                        <div>Credit</div>
                    </div>

                    <div class="journal-row">
                        <div>Accounts Receivable</div>
                        <div>$5,000</div>
                        <div>—</div>
                    </div>

                    <div class="journal-row credit-row">
                        <div>Service Revenue</div>
                        <div>—</div>
                        <div>$5,000</div>
                    </div>

                </div>

            </div>


            <h2>Collection from customer</h2>

            <p>
                Later, the customer pays the $5,000.
            </p>

            <div class="journal-entry">

                <div class="journal-row journal-header">
                    <div>Account</div>
                    <div>Debit</div>
                    <div>Credit</div>
                </div>

                <div class="journal-row">
                    <div>Cash</div>
                    <div>$5,000</div>
                    <div>—</div>
                </div>

                <div class="journal-row credit-row">
                    <div>Accounts Receivable</div>
                    <div>—</div>
                    <div>$5,000</div>
                </div>

            </div>


            <div class="key-points">

                <h3>Remember</h3>

                <p>
                    Recording revenue does not always mean cash was received.
                </p>

                <p>
                    Under accrual accounting, revenue can be recognized
                    before collection.
                </p>

            </div>


            <h2>Gross vs net receivables</h2>

            <p>
                Companies may not expect to collect every dollar owed
                by customers.
            </p>

            <p>
                That leads us to the allowance for credit losses,
                which we'll study in the next lesson.
            </p>

        `,
        {
            question:
                "A company provides $8,000 of services on account. Which account is debited?",

            answers: [
                "A. Cash",
                "B. Service Revenue",
                "C. Accounts Receivable",
                "D. Accounts Payable"
            ],

            correctAnswer: 2,

            explanation:
                "The customer owes the company money, so Accounts Receivable increases with a debit."
        }
    );

    return;
}

if (moduleId === 2 && lessonId === 4) {

    showIntermediateLessonPage(
        2,
        4,
        "Credit Losses & Allowance Method",
        `

            <h2>Why do companies estimate credit losses?</h2>

            <p>
                When a company sells goods or services on credit,
                some customers may not pay what they owe.
            </p>

            <p>
                Because of this, a company should consider expected
                credit losses on its receivables.
            </p>


            <h2>Allowance for Credit Losses</h2>

            <p>
                Instead of waiting until a specific customer fails to pay,
                the company estimates expected uncollectible amounts.
            </p>

            <p>
                The estimate is recorded in an
                <strong>Allowance for Credit Losses</strong>,
                which is a contra-asset account related to receivables.
            </p>


            <div class="formula-box">

                Net Accounts Receivable =
                Accounts Receivable − Allowance for Credit Losses

            </div>


            <h2>Example</h2>

            <p>
                Assume a company has:
            </p>

            <div class="financial-example">

                <div>
                    <span>Accounts Receivable</span>
                    <strong>$100,000</strong>
                </div>

                <div>
                    <span>Allowance for Credit Losses</span>
                    <strong>($4,000)</strong>
                </div>

                <div class="financial-total">
                    <span>Net Accounts Receivable</span>
                    <strong>$96,000</strong>
                </div>

            </div>


            <h2>Recording estimated credit losses</h2>

            <p>
                Suppose the company determines that its allowance
                needs to increase by $4,000.
            </p>


            <div class="journal-entry">

                <div class="journal-row journal-header">
                    <div>Account</div>
                    <div>Debit</div>
                    <div>Credit</div>
                </div>

                <div class="journal-row">
                    <div>Credit Loss Expense</div>
                    <div>$4,000</div>
                    <div>—</div>
                </div>

                <div class="journal-row credit-row">
                    <div>Allowance for Credit Losses</div>
                    <div>—</div>
                    <div>$4,000</div>
                </div>

            </div>


            <h2>Writing off a specific account</h2>

            <p>
                Later, suppose a particular customer's
                <strong>$1,000 receivable</strong>
                is determined to be uncollectible.
            </p>


            <div class="journal-entry">

                <div class="journal-row journal-header">
                    <div>Account</div>
                    <div>Debit</div>
                    <div>Credit</div>
                </div>

                <div class="journal-row">
                    <div>Allowance for Credit Losses</div>
                    <div>$1,000</div>
                    <div>—</div>
                </div>

                <div class="journal-row credit-row">
                    <div>Accounts Receivable</div>
                    <div>—</div>
                    <div>$1,000</div>
                </div>

            </div>


            <div class="key-points">

                <h3>Very important</h3>

                <p>
                    Under the allowance method, the write-off itself
                    generally does <strong>not</strong> create a new
                    credit loss expense.
                </p>

                <p>
                    The expense was recognized when the expected loss
                    was estimated.
                </p>

            </div>


            <h2>Aging of receivables</h2>

            <p>
                Companies may estimate expected credit losses by grouping
                receivables according to how long they have been outstanding.
            </p>

            <div class="example-box">

                <h3>General idea</h3>

                <p>
                    A receivable that is 120 days overdue may have a
                    greater expected credit-loss percentage than a
                    receivable that is only 10 days old.
                </p>

            </div>

        `,
        {
            question:
                "Accounts Receivable is $80,000 and the Allowance for Credit Losses has a $5,000 credit balance. What is net Accounts Receivable?",

            answers: [
                "A. $75,000",
                "B. $80,000",
                "C. $85,000",
                "D. $5,000"
            ],

            correctAnswer: 0,

            explanation:
                "Net Accounts Receivable equals $80,000 minus the $5,000 allowance, resulting in $75,000."
        }
    );

    return;
}


if (moduleId === 2 && lessonId === 5) {

    showIntermediateLessonPage(
        2,
        5,
        "Notes Receivable",
        `

            <h2>What is a note receivable?</h2>

            <p>
                A note receivable is a written promise from another
                party to pay a specified amount, usually at a specified
                future date.
            </p>

            <p>
                Notes often require the borrower to pay
                <strong>interest</strong>.
            </p>


            <h2>Basic interest formula</h2>

            <div class="formula-box">

                Interest =
                Principal × Interest Rate × Time

            </div>


            <div class="key-points">

                <p>
                    <strong>Principal</strong> =
                    amount borrowed
                </p>

                <p>
                    <strong>Interest Rate</strong> =
                    annual interest rate
                </p>

                <p>
                    <strong>Time</strong> =
                    portion of a year the note is outstanding
                </p>

            </div>


            <h2>Example 1 — One-year note</h2>

            <p>
                A company receives a
                <strong>$10,000, 8%, one-year note</strong>.
            </p>

            <div class="formula-box">

                $10,000 × 8% × 1 = $800 Interest

            </div>


            <p>
                At maturity, the borrower would pay:
            </p>

            <div class="formula-box">

                $10,000 Principal + $800 Interest = $10,800

            </div>


            <h2>Example 2 — Six-month note</h2>

            <p>
                Assume a company holds a
                <strong>$20,000, 6%, six-month note</strong>.
            </p>

            <div class="formula-box">

                $20,000 × 6% × 6/12 = $600

            </div>

            <p>
                Interest revenue for the six-month period is
                <strong>$600</strong>.
            </p>


            <h2>Recording interest</h2>

            <p>
                If $800 of interest has been earned and received
                at maturity, a simplified collection entry could include:
            </p>


            <div class="journal-entry">

                <div class="journal-row journal-header">
                    <div>Account</div>
                    <div>Debit</div>
                    <div>Credit</div>
                </div>

                <div class="journal-row">
                    <div>Cash</div>
                    <div>$10,800</div>
                    <div>—</div>
                </div>

                <div class="journal-row credit-row">
                    <div>Notes Receivable</div>
                    <div>—</div>
                    <div>$10,000</div>
                </div>

                <div class="journal-row credit-row">
                    <div>Interest Revenue</div>
                    <div>—</div>
                    <div>$800</div>
                </div>

            </div>


            <h2>Accrued interest</h2>

            <p>
                Sometimes a reporting period ends before the note matures.
            </p>

            <p>
                If interest has already been earned, accrual accounting
                may require the company to recognize that interest even
                though the cash has not yet been received.
            </p>


            <div class="example-box">

                <h3>Example</h3>

                <p>
                    A $12,000 note earns 10% annually.
                    If three months of interest have been earned:
                </p>

                <p>
                    $12,000 × 10% × 3/12 =
                    <strong>$300</strong>
                </p>

                <p>
                    The company has earned $300 of interest during
                    those three months.
                </p>

            </div>


            <div class="key-points">

                <h3>Remember</h3>

                <ul>
                    <li>Interest rates are normally stated annually.</li>
                    <li>Adjust the time portion for notes shorter than one year.</li>
                    <li>Interest may need to be accrued before cash is received.</li>
                    <li>Principal and interest are separate amounts.</li>
                </ul>

            </div>

        `,
        {
            question:
                "How much interest is earned on a $30,000, 8% note held for six months?",

            answers: [
                "A. $1,200",
                "B. $2,400",
                "C. $4,800",
                "D. $800"
            ],

            correctAnswer: 0,

            explanation:
                "$30,000 × 8% × 6/12 = $1,200 of interest."
        }
    );

    return;
}

if (moduleId === 3 && lessonId === 1) {

    showIntermediateLessonPage(
        3,
        1,
        "Inventory Basics & Systems",
        `

            <h2>What is inventory?</h2>

            <p>
                Inventory consists of goods held for sale to customers
                or goods used in producing items that will be sold.
            </p>


            <div class="key-points">

                <h3>For a merchandising company</h3>

                <p>
                    Inventory usually consists mainly of goods purchased
                    for resale.
                </p>

            </div>


            <h2>Cost of Goods Sold</h2>

            <p>
                When inventory is sold, its cost generally becomes
                <strong>Cost of Goods Sold (COGS)</strong>.
            </p>


            <div class="formula-box">

                Beginning Inventory
                + Purchases
                − Ending Inventory
                = Cost of Goods Sold

            </div>


            <h2>Example</h2>

            <div class="financial-example">

                <div>
                    <span>Beginning Inventory</span>
                    <strong>$20,000</strong>
                </div>

                <div>
                    <span>Add: Purchases</span>
                    <strong>$70,000</strong>
                </div>

                <div>
                    <span>Goods Available for Sale</span>
                    <strong>$90,000</strong>
                </div>

                <div>
                    <span>Less: Ending Inventory</span>
                    <strong>($25,000)</strong>
                </div>

                <div class="financial-total">
                    <span>Cost of Goods Sold</span>
                    <strong>$65,000</strong>
                </div>

            </div>


            <h2>Periodic inventory system</h2>

            <p>
                Under a periodic system, inventory records are not
                continuously updated for every sale.
            </p>

            <p>
                Ending inventory is generally determined using a
                physical count at period-end.
            </p>


            <h2>Perpetual inventory system</h2>

            <p>
                Under a perpetual system, inventory records are updated
                continuously as purchases and sales occur.
            </p>


            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>Periodic</h3>

                    <p>
                        Inventory and COGS are determined periodically.
                    </p>

                </div>

                <div class="comparison-card">

                    <h3>Perpetual</h3>

                    <p>
                        Inventory records are updated continuously.
                    </p>

                </div>

            </div>


            <div class="key-points">

                <h3>Important</h3>

                <p>
                    Inventory accounting determines how the total cost of
                    goods available for sale is divided between:
                </p>

                <ul>
                    <li>Cost of Goods Sold</li>
                    <li>Ending Inventory</li>
                </ul>

            </div>

        `,
        {
            question:
                "Beginning inventory is $15,000, purchases are $55,000, and ending inventory is $20,000. What is cost of goods sold?",

            answers: [
                "A. $35,000",
                "B. $50,000",
                "C. $70,000",
                "D. $90,000"
            ],

            correctAnswer: 1,

            explanation:
                "$15,000 + $55,000 − $20,000 = $50,000 of cost of goods sold."
        }
    );

    return;
}

if (moduleId === 3 && lessonId === 2) {

    showIntermediateLessonPage(
        3,
        2,
        "FIFO",
        `

            <h2>What does FIFO mean?</h2>

            <p>
                FIFO means
                <strong>First-In, First-Out</strong>.
            </p>

            <p>
                The earliest inventory costs are assigned to
                Cost of Goods Sold first.
            </p>

            <p>
                Therefore, ending inventory generally contains the
                most recent inventory costs.
            </p>


            <h2>Example</h2>

            <p>
                Assume a company has:
            </p>


            <div class="financial-example">

                <div>
                    <span>100 units @ $10</span>
                    <strong>$1,000</strong>
                </div>

                <div>
                    <span>100 units @ $12</span>
                    <strong>$1,200</strong>
                </div>

                <div class="financial-total">
                    <span>Total: 200 units</span>
                    <strong>$2,200</strong>
                </div>

            </div>


            <p>
                Suppose the company sells
                <strong>150 units</strong>.
            </p>


            <h2>FIFO Cost of Goods Sold</h2>

            <p>
                FIFO assumes the oldest units are sold first.
            </p>


            <div class="financial-example">

                <div>
                    <span>100 units × $10</span>
                    <strong>$1,000</strong>
                </div>

                <div>
                    <span>50 units × $12</span>
                    <strong>$600</strong>
                </div>

                <div class="financial-total">
                    <span>FIFO COGS</span>
                    <strong>$1,600</strong>
                </div>

            </div>


            <h2>Ending Inventory</h2>

            <p>
                There are 50 units remaining from the newest purchase.
            </p>

            <div class="formula-box">

                50 × $12 = $600 Ending Inventory

            </div>


            <div class="key-points">

                <h3>FIFO pattern</h3>

                <ul>
                    <li>Oldest costs → COGS</li>
                    <li>Newest costs → Ending Inventory</li>
                </ul>

            </div>

        `,
        {
            question:
                "A company has 100 units at $20 and then buys 100 units at $25. If 120 units are sold using FIFO, what is COGS?",

            answers: [
                "A. $2,000",
                "B. $2,400",
                "C. $2,500",
                "D. $2,900"
            ],

            correctAnswer: 2,

            explanation:
                "FIFO assigns the first 100 units at $20 ($2,000) plus 20 units at $25 ($500), for total COGS of $2,500."
        }
    );

    return;
}

if (moduleId === 3 && lessonId === 3) {

    showIntermediateLessonPage(
        3,
        3,
        "LIFO",
        `

            <h2>What does LIFO mean?</h2>

            <p>
                LIFO means
                <strong>Last-In, First-Out</strong>.
            </p>

            <p>
                The most recent inventory costs are assigned to
                Cost of Goods Sold first.
            </p>

            <p>
                Ending inventory therefore generally contains
                older inventory costs.
            </p>


            <h2>Example</h2>

            <div class="financial-example">

                <div>
                    <span>100 units @ $10</span>
                    <strong>$1,000</strong>
                </div>

                <div>
                    <span>100 units @ $12</span>
                    <strong>$1,200</strong>
                </div>

                <div class="financial-total">
                    <span>Total</span>
                    <strong>$2,200</strong>
                </div>

            </div>


            <p>
                Assume the company sells
                <strong>150 units</strong>.
            </p>


            <h2>LIFO Cost of Goods Sold</h2>

            <div class="financial-example">

                <div>
                    <span>100 units × $12</span>
                    <strong>$1,200</strong>
                </div>

                <div>
                    <span>50 units × $10</span>
                    <strong>$500</strong>
                </div>

                <div class="financial-total">
                    <span>LIFO COGS</span>
                    <strong>$1,700</strong>
                </div>

            </div>


            <h2>Ending Inventory</h2>

            <p>
                The remaining 50 units come from the older $10 layer.
            </p>

            <div class="formula-box">

                50 × $10 = $500 Ending Inventory

            </div>


            <div class="key-points">

                <h3>LIFO pattern</h3>

                <ul>
                    <li>Newest costs → COGS</li>
                    <li>Older costs → Ending Inventory</li>
                </ul>

            </div>


            <div class="example-box">

                <h3>FIFO vs LIFO when prices rise</h3>

                <p>
                    When inventory costs are increasing, LIFO often produces
                    higher COGS and lower ending inventory than FIFO.
                </p>

            </div>

        `,
        {
            question:
                "A company has 100 units at $20 and then buys 100 units at $25. If 120 units are sold using LIFO, what is COGS?",

            answers: [
                "A. $2,400",
                "B. $2,500",
                "C. $2,900",
                "D. $3,000"
            ],

            correctAnswer: 2,

            explanation:
                "LIFO assigns 100 units at $25 ($2,500) plus 20 units at $20 ($400), giving COGS of $2,900."
        }
    );

    return;
}

if (moduleId === 3 && lessonId === 4) {

    showIntermediateLessonPage(
        3,
        4,
        "Weighted-Average Cost",
        `

            <h2>What is weighted-average cost?</h2>

            <p>
                Instead of assigning specific old or new costs to units sold,
                the weighted-average method uses an average cost per unit.
            </p>


            <h2>Basic formula</h2>

            <div class="formula-box">

                Average Cost Per Unit =
                Total Cost of Goods Available ÷
                Total Units Available

            </div>


            <h2>Example</h2>

            <p>
                Assume a company has the following inventory:
            </p>


            <div class="financial-example">

                <div>
                    <span>100 units × $10</span>
                    <strong>$1,000</strong>
                </div>

                <div>
                    <span>100 units × $14</span>
                    <strong>$1,400</strong>
                </div>

                <div class="financial-total">
                    <span>200 units available</span>
                    <strong>$2,400</strong>
                </div>

            </div>


            <h2>Step 1 — Calculate average cost</h2>

            <div class="formula-box">

                $2,400 ÷ 200 units = $12 per unit

            </div>


            <h2>Step 2 — Calculate COGS</h2>

            <p>
                Suppose the company sells
                <strong>150 units</strong>.
            </p>

            <div class="formula-box">

                150 × $12 = $1,800 COGS

            </div>


            <h2>Step 3 — Calculate ending inventory</h2>

            <p>
                The company has 50 units remaining.
            </p>

            <div class="formula-box">

                50 × $12 = $600 Ending Inventory

            </div>


            <div class="key-points">

                <h3>Check your work</h3>

                <p>
                    COGS + Ending Inventory should equal
                    total cost of goods available for sale.
                </p>

                <div class="formula-box">

                    $1,800 + $600 = $2,400

                </div>

            </div>


            <h2>FIFO vs LIFO vs Weighted Average</h2>

            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>FIFO</h3>

                    <p>
                        Oldest costs flow to COGS first.
                    </p>

                </div>

                <div class="comparison-card">

                    <h3>LIFO</h3>

                    <p>
                        Newest costs flow to COGS first.
                    </p>

                </div>

                <div class="comparison-card">

                    <h3>Weighted Average</h3>

                    <p>
                        Costs are averaged together.
                    </p>

                </div>

            </div>


            <div class="key-points">

                <h3>Remember</h3>

                <p>
                    Weighted average smooths differences between
                    different purchase costs.
                </p>

            </div>

        `,
        {
            question:
                "A company has 100 units costing $8 each and 100 units costing $12 each. What is the weighted-average cost per unit?",

            answers: [
                "A. $8",
                "B. $10",
                "C. $12",
                "D. $20"
            ],

            correctAnswer: 1,

            explanation:
                "Total cost is $2,000 and total units are 200. $2,000 ÷ 200 = $10 per unit."
        }
    );

    return;
}

if (moduleId === 3 && lessonId === 5) {

    showIntermediateLessonPage(
        3,
        5,
        "Inventory Valuation & Errors",
        `

            <h2>Inventory is not always kept at its original cost</h2>

            <p>
                Sometimes inventory loses value because of damage,
                obsolescence, declining selling prices or other economic changes.
            </p>

            <p>
                Accounting rules may therefore require inventory
                to be written down.
            </p>


            <h2>Lower of Cost and Net Realizable Value</h2>

            <p>
                For inventory measured using certain methods,
                a common valuation approach compares cost with
                <strong>net realizable value (NRV)</strong>.
            </p>


            <div class="formula-box">

                NRV =
                Estimated Selling Price
                − Costs of Completion, Disposal and Transportation

            </div>


            <h2>Example</h2>

            <p>
                Assume inventory has:
            </p>


            <div class="financial-example">

                <div>
                    <span>Recorded Cost</span>
                    <strong>$50,000</strong>
                </div>

                <div>
                    <span>Net Realizable Value</span>
                    <strong>$46,000</strong>
                </div>

            </div>


            <p>
                If the applicable accounting rule requires the lower
                amount, inventory would be reported at:
            </p>

            <div class="formula-box">

                $46,000

            </div>

            <p>
                The decline is:
            </p>

            <div class="formula-box">

                $50,000 − $46,000 = $4,000

            </div>


            <h2>Inventory errors</h2>

            <p>
                Inventory errors are especially important because ending
                inventory affects both the balance sheet and
                Cost of Goods Sold.
            </p>


            <div class="formula-box">

                Beginning Inventory
                + Purchases
                − Ending Inventory
                = COGS

            </div>


            <h2>What if ending inventory is overstated?</h2>

            <p>
                Suppose actual ending inventory is $20,000,
                but the company incorrectly reports $25,000.
            </p>

            <p>
                Ending inventory is overstated by
                <strong>$5,000</strong>.
            </p>


            <div class="key-points">

                <h3>Current-period effects</h3>

                <ul>
                    <li>Ending Inventory → Overstated</li>
                    <li>Cost of Goods Sold → Understated</li>
                    <li>Gross Profit → Overstated</li>
                    <li>Net Income → Overstated</li>
                </ul>

            </div>


            <h2>Why does COGS become understated?</h2>

            <p>
                Look at the formula:
            </p>

            <div class="formula-box">

                COGS =
                Beginning Inventory
                + Purchases
                − Ending Inventory

            </div>

            <p>
                If you subtract an ending inventory amount that is
                too large, calculated COGS becomes too small.
            </p>


            <h2>What if ending inventory is understated?</h2>

            <div class="key-points">

                <ul>
                    <li>Ending Inventory → Understated</li>
                    <li>Cost of Goods Sold → Overstated</li>
                    <li>Gross Profit → Understated</li>
                    <li>Net Income → Understated</li>
                </ul>

            </div>


            <div class="example-box">

                <h3>CPA thinking</h3>

                <p>
                    Don't just memorize the arrows.
                </p>

                <p>
                    Start with the COGS formula and determine
                    what happens when ending inventory changes.
                </p>

            </div>

        `,
        {
            question:
                "If ending inventory is overstated, what happens to current-period Cost of Goods Sold?",

            answers: [
                "A. COGS is overstated",
                "B. COGS is understated",
                "C. COGS is unaffected",
                "D. COGS becomes zero"
            ],

            correctAnswer: 1,

            explanation:
                "Because ending inventory is subtracted when calculating COGS, overstating ending inventory causes COGS to be understated."
        }
    );

    return;
}

if (moduleId === 4 && lessonId === 1) {

    showIntermediateLessonPage(
        4,
        1,
        "PPE Acquisition & Capitalization",
        `

            <h2>What is Property, Plant & Equipment?</h2>

            <p>
                Property, Plant & Equipment (PPE) consists of tangible
                long-lived assets used in a company's operations.
            </p>

            <div class="key-points">

                <h3>Examples</h3>

                <ul>
                    <li>Land</li>
                    <li>Buildings</li>
                    <li>Machinery</li>
                    <li>Equipment</li>
                    <li>Vehicles</li>
                </ul>

            </div>


            <h2>What does capitalization mean?</h2>

            <p>
                When a cost is capitalized, it is initially recorded
                as an asset rather than immediately recognized as an expense.
            </p>

            <p>
                Generally, the acquisition cost of PPE includes costs
                necessary to acquire the asset and prepare it for its
                intended use.
            </p>


            <h2>Equipment example</h2>

            <p>
                A company purchases equipment with the following costs:
            </p>

            <div class="financial-example">

                <div>
                    <span>Purchase price</span>
                    <strong>$50,000</strong>
                </div>

                <div>
                    <span>Transportation</span>
                    <strong>$2,000</strong>
                </div>

                <div>
                    <span>Installation</span>
                    <strong>$3,000</strong>
                </div>

                <div class="financial-total">
                    <span>Capitalized equipment cost</span>
                    <strong>$55,000</strong>
                </div>

            </div>


            <div class="formula-box">

                $50,000 + $2,000 + $3,000 = $55,000

            </div>


            <h2>Land</h2>

            <p>
                The cost of land can include more than just its purchase price.
            </p>

            <div class="key-points">

                <h3>Potential land costs</h3>

                <ul>
                    <li>Purchase price</li>
                    <li>Legal and title fees</li>
                    <li>Certain closing costs</li>
                    <li>Costs of preparing the land for use</li>
                </ul>

            </div>


            <h2>Land vs building</h2>

            <p>
                Land normally has an indefinite life and therefore is
                generally <strong>not depreciated</strong>.
            </p>

            <p>
                Buildings generally have finite useful lives and
                are depreciated.
            </p>


            <div class="key-points">

                <h3>Core idea</h3>

                <p>
                    Ask whether a cost is necessary to acquire the asset
                    and prepare it for its intended use.
                </p>

            </div>

        `,
        {
            question:
                "A company buys equipment for $80,000 and pays $4,000 for delivery and $6,000 for installation. What is the equipment's initial capitalized cost?",

            answers: [
                "A. $80,000",
                "B. $84,000",
                "C. $86,000",
                "D. $90,000"
            ],

            correctAnswer: 3,

            explanation:
                "The purchase price, delivery and installation are included: $80,000 + $4,000 + $6,000 = $90,000."
        }
    );

    return;
}

if (moduleId === 4 && lessonId === 2) {

    showIntermediateLessonPage(
        4,
        2,
        "Depreciation Methods",
        `

            <h2>What is depreciation?</h2>

            <p>
                Depreciation systematically allocates the depreciable
                amount of a tangible long-lived asset over its useful life.
            </p>

            <p>
                Depreciation is an allocation process. It does not simply
                attempt to measure the asset's change in market value.
            </p>


            <h2>Straight-Line Depreciation</h2>

            <div class="formula-box">

                Annual Depreciation =
                (Cost − Residual Value) ÷ Useful Life

            </div>


            <h2>Example</h2>

            <p>
                Equipment costs $50,000, has a $5,000 residual value,
                and a 5-year useful life.
            </p>

            <div class="formula-box">

                ($50,000 − $5,000) ÷ 5 = $9,000 per year

            </div>


            <h2>Carrying Amount</h2>

            <div class="formula-box">

                Carrying Amount =
                Asset Cost − Accumulated Depreciation

            </div>


            <p>
                After two full years:
            </p>

            <div class="financial-example">

                <div>
                    <span>Asset Cost</span>
                    <strong>$50,000</strong>
                </div>

                <div>
                    <span>Accumulated Depreciation</span>
                    <strong>($18,000)</strong>
                </div>

                <div class="financial-total">
                    <span>Carrying Amount</span>
                    <strong>$32,000</strong>
                </div>

            </div>


            <h2>Units-of-Production</h2>

            <p>
                This method bases depreciation on actual usage
                or production rather than simply the passage of time.
            </p>

            <div class="formula-box">

                Depreciation Per Unit =
                (Cost − Residual Value) ÷
                Estimated Total Units

            </div>


            <h2>Declining-Balance Methods</h2>

            <p>
                Accelerated methods recognize more depreciation
                in earlier years and less in later years.
            </p>


            <div class="example-box">

                <h3>Double-Declining Balance</h3>

                <p>
                    For a 5-year asset, the straight-line rate is 20%.
                    A double-declining rate would therefore be 40%.
                </p>

                <p>
                    The rate is applied to the asset's beginning
                    carrying amount each year.
                </p>

            </div>


            <div class="key-points">

                <h3>Remember</h3>

                <ul>
                    <li>Straight-line → equal depreciation each full year</li>
                    <li>Units-of-production → based on usage</li>
                    <li>Accelerated methods → more depreciation earlier</li>
                </ul>

            </div>

        `,
        {
            question:
                "Equipment costs $100,000, has a $10,000 residual value and a 6-year useful life. What is annual straight-line depreciation?",

            answers: [
                "A. $10,000",
                "B. $15,000",
                "C. $16,667",
                "D. $18,000"
            ],

            correctAnswer: 1,

            explanation:
                "($100,000 − $10,000) ÷ 6 = $15,000 per year."
        }
    );

    return;
}

if (moduleId === 4 && lessonId === 3) {

    showIntermediateLessonPage(
        4,
        3,
        "Changes in Depreciation Estimates",
        `

            <h2>Accounting estimates can change</h2>

            <p>
                A company may later obtain new information showing that
                an asset's useful life or residual value differs from
                the original estimate.
            </p>

            <p>
                A change in estimate is generally handled
                <strong>prospectively</strong>.
            </p>


            <div class="key-points">

                <h3>Prospectively means:</h3>

                <p>
                    Do not go back and rewrite depreciation from
                    previous periods simply because the estimate changed.
                </p>

                <p>
                    Instead, use the new estimate for the current
                    and future periods.
                </p>

            </div>


            <h2>Example</h2>

            <p>
                Equipment originally cost $50,000 with no residual value
                and a 5-year useful life.
            </p>

            <div class="formula-box">

                Original Annual Depreciation =
                $50,000 ÷ 5 = $10,000

            </div>


            <p>
                After two years, accumulated depreciation is $20,000.
            </p>

            <div class="formula-box">

                Carrying Amount =
                $50,000 − $20,000 = $30,000

            </div>


            <p>
                At that point, the company determines the asset will
                last <strong>four additional years</strong>.
            </p>


            <h2>New depreciation</h2>

            <div class="formula-box">

                $30,000 ÷ 4 remaining years =
                $7,500 per year

            </div>


            <div class="example-box">

                <h3>Notice what we did NOT do</h3>

                <p>
                    We did not change the $10,000 depreciation recorded
                    in either of the first two years.
                </p>

                <p>
                    The new information affects depreciation going forward.
                </p>

            </div>


            <h2>General approach</h2>

            <div class="key-points">

                <ol>
                    <li>Determine current carrying amount.</li>
                    <li>Determine the revised residual value, if applicable.</li>
                    <li>Determine remaining useful life.</li>
                    <li>Calculate depreciation for current and future periods.</li>
                </ol>

            </div>

        `,
        {
            question:
                "An asset has a carrying amount of $36,000 when its remaining useful life is revised to 3 years with no residual value. What is annual straight-line depreciation going forward?",

            answers: [
                "A. $9,000",
                "B. $12,000",
                "C. $18,000",
                "D. $36,000"
            ],

            correctAnswer: 1,

            explanation:
                "$36,000 ÷ 3 remaining years = $12,000 per year. The revised estimate is applied prospectively."
        }
    );

    return;
}

if (moduleId === 4 && lessonId === 4) {

    showIntermediateLessonPage(
        4,
        4,
        "Disposal of PPE",
        `

            <h2>What happens when PPE is sold?</h2>

            <p>
                Before calculating a gain or loss, the company needs to know
                the asset's carrying amount at the date of disposal.
            </p>

            <div class="formula-box">

                Carrying Amount =
                Cost − Accumulated Depreciation

            </div>


            <h2>Then compare carrying amount with proceeds</h2>

            <div class="formula-box">

                Gain or Loss =
                Selling Price − Carrying Amount

            </div>


            <div class="key-points">

                <ul>
                    <li>If selling price is greater than carrying amount → Gain</li>
                    <li>If selling price is less than carrying amount → Loss</li>
                    <li>If selling price equals carrying amount → No gain or loss</li>
                </ul>

            </div>


            <h2>Example 1 — Gain</h2>

            <p>
                Equipment originally cost <strong>$60,000</strong>.
                Accumulated depreciation is <strong>$42,000</strong>.
            </p>

            <div class="formula-box">

                Carrying Amount =
                $60,000 − $42,000 = $18,000

            </div>

            <p>
                The company sells the equipment for
                <strong>$22,000</strong>.
            </p>

            <div class="formula-box">

                $22,000 − $18,000 =
                $4,000 Gain

            </div>


            <h2>Journal entry</h2>

            <div class="journal-entry">

                <div class="journal-row journal-header">
                    <div>Account</div>
                    <div>Debit</div>
                    <div>Credit</div>
                </div>

                <div class="journal-row">
                    <div>Cash</div>
                    <div>$22,000</div>
                    <div>—</div>
                </div>

                <div class="journal-row">
                    <div>Accumulated Depreciation</div>
                    <div>$42,000</div>
                    <div>—</div>
                </div>

                <div class="journal-row credit-row">
                    <div>Equipment</div>
                    <div>—</div>
                    <div>$60,000</div>
                </div>

                <div class="journal-row credit-row">
                    <div>Gain on Disposal</div>
                    <div>—</div>
                    <div>$4,000</div>
                </div>

            </div>


            <h2>Example 2 — Loss</h2>

            <p>
                Assume the same asset is sold for
                <strong>$15,000</strong>.
            </p>

            <div class="formula-box">

                $15,000 − $18,000 =
                ($3,000) Loss

            </div>


            <div class="key-points">

                <h3>Important habit</h3>

                <p>
                    Always calculate carrying amount first.
                    Then compare it with the proceeds.
                </p>

            </div>

        `,
        {
            question:
                "Equipment cost $90,000 and has accumulated depreciation of $65,000. It is sold for $30,000. What is the gain or loss?",

            answers: [
                "A. $5,000 gain",
                "B. $5,000 loss",
                "C. $25,000 gain",
                "D. $30,000 gain"
            ],

            correctAnswer: 0,

            explanation:
                "Carrying amount is $90,000 − $65,000 = $25,000. Selling price of $30,000 exceeds carrying amount by $5,000, so there is a $5,000 gain."
        }
    );

    return;
}

if (moduleId === 4 && lessonId === 5) {

    showIntermediateLessonPage(
        4,
        5,
        "Impairment & Asset Retirement Concepts",
        `

            <h2>What is impairment?</h2>

            <p>
                A long-lived asset may lose economic value because of
                damage, technological change, poor performance,
                market changes or other events.
            </p>

            <p>
                When certain impairment conditions are met,
                accounting rules may require the asset's carrying amount
                to be reduced.
            </p>


            <div class="key-points">

                <h3>Think about impairment when:</h3>

                <ul>
                    <li>An asset is significantly damaged</li>
                    <li>Technology makes the asset less useful</li>
                    <li>Expected future performance declines</li>
                    <li>Market or business conditions change significantly</li>
                </ul>

            </div>


            <h2>Carrying amount matters again</h2>

            <div class="formula-box">

                Carrying Amount =
                Cost − Accumulated Depreciation

            </div>


            <div class="example-box">

                <h3>Simple concept example</h3>

                <p>
                    A machine has a carrying amount of $40,000.
                </p>

                <p>
                    New information indicates that the machine's economic value
                    has declined substantially.
                </p>

                <p>
                    If the applicable impairment test shows that the carrying
                    amount is not recoverable or exceeds the required measurement
                    amount, an impairment loss may need to be recognized.
                </p>

            </div>


            <h2>Why we are not memorizing one universal formula</h2>

            <p>
                The detailed impairment model depends on the type of asset
                and the applicable accounting guidance.
            </p>

            <p>
                For now, the important foundation is to understand that
                impairment can cause a long-lived asset's carrying amount
                to be written down.
            </p>


            <h2>Asset retirement obligations</h2>

            <p>
                Some long-lived assets create a legal obligation to retire,
                dismantle, remove or restore something in the future.
            </p>

            <div class="example-box">

                <h3>Example</h3>

                <p>
                    A company builds an asset and is legally required to remove
                    it and restore the site at the end of its useful life.
                </p>

                <p>
                    That future obligation can have accounting consequences
                    before the actual retirement occurs.
                </p>

            </div>


            <div class="key-points">

                <h3>Core ideas</h3>

                <ul>
                    <li>PPE can become impaired.</li>
                    <li>Impairment can reduce carrying amount.</li>
                    <li>Asset retirement obligations arise from certain legal obligations.</li>
                    <li>Detailed measurement rules will come later at CPA level.</li>
                </ul>

            </div>

        `,
        {
            question:
                "Which event would most likely indicate that a long-lived asset should be evaluated for impairment?",

            answers: [
                "A. The company earns slightly more revenue than expected",
                "B. The asset suffers major damage and its future usefulness declines",
                "C. The company pays an ordinary utility bill",
                "D. The company issues common stock"
            ],

            correctAnswer: 1,

            explanation:
                "Significant damage and reduced future usefulness are examples of events that may indicate impairment."
        }
    );

    return;
}

if (moduleId === 5 && lessonId === 1) {

    showIntermediateLessonPage(
        5,
        1,
        "Current Liabilities & Accruals",
        `

            <h2>What is a current liability?</h2>

            <p>
                A current liability is an obligation generally expected
                to be settled within the entity's normal operating cycle
                or within the applicable short-term classification period.
            </p>


            <div class="key-points">

                <h3>Common examples</h3>

                <ul>
                    <li>Accounts Payable</li>
                    <li>Wages Payable</li>
                    <li>Interest Payable</li>
                    <li>Taxes Payable</li>
                    <li>Current portions of certain long-term obligations</li>
                </ul>

            </div>


            <h2>Accounts Payable</h2>

            <p>
                Accounts Payable usually arises when a company purchases
                goods or services on credit.
            </p>


            <div class="example-box">

                <h3>Example</h3>

                <p>
                    A company purchases $8,000 of supplies on account.
                </p>

                <div class="journal-entry">

                    <div class="journal-row journal-header">
                        <div>Account</div>
                        <div>Debit</div>
                        <div>Credit</div>
                    </div>

                    <div class="journal-row">
                        <div>Supplies</div>
                        <div>$8,000</div>
                        <div>—</div>
                    </div>

                    <div class="journal-row credit-row">
                        <div>Accounts Payable</div>
                        <div>—</div>
                        <div>$8,000</div>
                    </div>

                </div>

            </div>


            <h2>Accrued liabilities</h2>

            <p>
                An accrued liability exists when an expense has been incurred
                but has not yet been paid.
            </p>


            <div class="example-box">

                <h3>Accrued wages</h3>

                <p>
                    Employees have earned $5,000 by year-end,
                    but payment will occur next period.
                </p>

                <div class="journal-entry">

                    <div class="journal-row journal-header">
                        <div>Account</div>
                        <div>Debit</div>
                        <div>Credit</div>
                    </div>

                    <div class="journal-row">
                        <div>Wages Expense</div>
                        <div>$5,000</div>
                        <div>—</div>
                    </div>

                    <div class="journal-row credit-row">
                        <div>Wages Payable</div>
                        <div>—</div>
                        <div>$5,000</div>
                    </div>

                </div>

            </div>


            <h2>Accrued interest</h2>

            <p>
                Interest can also accumulate before the company actually
                pays the lender.
            </p>

            <div class="formula-box">

                Interest =
                Principal × Annual Rate × Time

            </div>


            <div class="example-box">

                <p>
                    A company has a $60,000 note at 8%.
                    Three months of interest have accrued.
                </p>

                <div class="formula-box">

                    $60,000 × 8% × 3/12 = $1,200

                </div>

            </div>


            <div class="key-points">

                <h3>Core idea</h3>

                <p>
                    Accrual accounting recognizes obligations when they arise,
                    not merely when cash is eventually paid.
                </p>

            </div>

        `,
        {
            question:
                "A company owes employees $7,500 for work performed before year-end but will pay them next year. Which liability should be recognized?",

            answers: [
                "A. Accounts Receivable",
                "B. Wages Payable",
                "C. Prepaid Wages",
                "D. Unearned Revenue"
            ],

            correctAnswer: 1,

            explanation:
                "The employees have already earned the wages, so the company recognizes Wages Expense and Wages Payable."
        }
    );

    return;
}

if (moduleId === 5 && lessonId === 2) {

    showIntermediateLessonPage(
        5,
        2,
        "Contingencies & Commitments",
        `

            <h2>What is a contingency?</h2>

            <p>
                A contingency involves uncertainty about a possible
                future gain or loss that depends on the outcome
                of a future event.
            </p>


            <h2>Loss contingencies</h2>

            <p>
                Examples can include lawsuits, guarantees,
                environmental matters and certain other claims.
            </p>


            <div class="key-points">

                <h3>Two questions matter</h3>

                <ol>
                    <li>How likely is the loss?</li>
                    <li>Can the amount be reasonably estimated?</li>
                </ol>

            </div>


            <p>
                Depending on those factors and the applicable accounting guidance,
                a company may need to recognize a liability, disclose the matter,
                or sometimes do neither.
            </p>


            <div class="example-box">

                <h3>Example</h3>

                <p>
                    A company is involved in a lawsuit.
                </p>

                <p>
                    If the relevant recognition criteria are met
                    and the loss can be reasonably estimated,
                    a loss and liability may need to be recorded.
                </p>

            </div>


            <h2>Commitments</h2>

            <p>
                A commitment is generally an agreement to engage in
                a future transaction.
            </p>

            <p>
                A commitment does not automatically mean a liability
                should be recorded immediately.
            </p>


            <div class="key-points">

                <h3>Important</h3>

                <p>
                    Contingency accounting depends heavily on the
                    specific facts and applicable GAAP.
                </p>

                <p>
                    At CPA level, we'll study the precise recognition
                    and disclosure thresholds more deeply.
                </p>

            </div>

        `,
        {
            question:
                "When evaluating a potential loss contingency, which two factors are especially important?",

            answers: [
                "A. Revenue and gross profit",
                "B. Probability of loss and ability to estimate the amount",
                "C. Cash balance and inventory balance",
                "D. Number of employees and tax rate"
            ],

            correctAnswer: 1,

            explanation:
                "The likelihood of the loss and whether the loss can be reasonably estimated are key considerations."
        }
    );

    return;
}

if (moduleId === 5 && lessonId === 3) {

    showIntermediateLessonPage(
        5,
        3,
        "Bond Basics",
        `

            <h2>What is a bond?</h2>

            <p>
                A bond is a form of long-term borrowing.
                The issuer receives cash from investors and promises
                to make specified payments.
            </p>


            <h2>Important bond terms</h2>

            <div class="key-points">

                <p>
                    <strong>Face Value:</strong>
                    Amount repaid at maturity.
                </p>

                <p>
                    <strong>Stated or Coupon Rate:</strong>
                    Rate used to determine periodic cash interest payments.
                </p>

                <p>
                    <strong>Market or Effective Rate:</strong>
                    Rate investors demand when the bond is issued.
                </p>

                <p>
                    <strong>Maturity Date:</strong>
                    Date the face amount is repaid.
                </p>

            </div>


            <h2>Cash interest</h2>

            <div class="formula-box">

                Cash Interest =
                Face Value × Stated Rate × Time

            </div>


            <h2>Example</h2>

            <p>
                A company has $100,000 of bonds with a
                6% annual stated rate.
            </p>

            <div class="formula-box">

                $100,000 × 6% = $6,000 Annual Cash Interest

            </div>


            <h2>Semiannual payments</h2>

            <p>
                If the bond pays interest twice each year:
            </p>

            <div class="formula-box">

                $100,000 × 6% × 6/12 = $3,000

            </div>

            <p>
                The company pays $3,000 every six months.
            </p>


            <h2>Stated rate vs market rate</h2>

            <p>
                These rates are not the same thing.
            </p>

            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>Stated Rate</h3>

                    <p>
                        Determines the contractual cash interest payment.
                    </p>

                </div>

                <div class="comparison-card">

                    <h3>Market Rate</h3>

                    <p>
                        Helps determine the bond's issue price and effective yield.
                    </p>

                </div>

            </div>


            <div class="key-points">

                <h3>The relationship we'll use next</h3>

                <ul>
                    <li>Stated rate = market rate → generally issued near face value</li>
                    <li>Stated rate &lt; market rate → generally issued at a discount</li>
                    <li>Stated rate &gt; market rate → generally issued at a premium</li>
                </ul>

            </div>


            <div class="example-box">

                <h3>Why?</h3>

                <p>
                    If investors can earn 8% elsewhere but your bond pays only 6%,
                    they generally will not pay full face value for it.
                </p>

                <p>
                    The issue price must fall so the investor's effective yield
                    becomes competitive with the market.
                </p>

            </div>

        `,
        {
            question:
                "A $200,000 bond has a 5% annual stated rate and pays interest semiannually. How much cash interest is paid every six months?",

            answers: [
                "A. $5,000",
                "B. $10,000",
                "C. $20,000",
                "D. $2,500"
            ],

            correctAnswer: 0,

            explanation:
                "$200,000 × 5% × 6/12 = $5,000 every six months."
        }
    );

    return;
}


if (moduleId === 5 && lessonId === 4) {

    showIntermediateLessonPage(
        5,
        4,
        "Bond Premiums & Discounts",
        `

            <h2>Why don't bonds always sell at face value?</h2>

            <p>
                The stated interest rate on a bond may be different
                from the market interest rate investors currently demand.
            </p>


            <div class="key-points">

                <h3>Remember this relationship</h3>

                <ul>
                    <li>Stated Rate = Market Rate → Face Value</li>
                    <li>Stated Rate &lt; Market Rate → Discount</li>
                    <li>Stated Rate &gt; Market Rate → Premium</li>
                </ul>

            </div>


            <h2>Bond issued at a discount</h2>

            <p>
                Suppose a $100,000 bond pays 6% interest,
                but investors demand an 8% return.
            </p>

            <p>
                The bond's contractual interest payments are less attractive
                than the market requires.
            </p>

            <p>
                Therefore, investors will generally pay
                <strong>less than $100,000</strong>.
            </p>

            <div class="formula-box">

                Stated Rate &lt; Market Rate
                → Bond Discount

            </div>


            <h2>Bond issued at a premium</h2>

            <p>
                Now suppose the $100,000 bond pays 10%,
                while investors demand only 8%.
            </p>

            <p>
                The bond's contractual interest payments are relatively
                attractive, so investors may pay
                <strong>more than $100,000</strong>.
            </p>

            <div class="formula-box">

                Stated Rate &gt; Market Rate
                → Bond Premium

            </div>


            <h2>Carrying amount</h2>

            <p>
                The carrying amount is the amount at which the bond
                liability is reported after considering an
                unamortized discount or premium.
            </p>


            <div class="key-points">

                <h3>Discount</h3>

                <p>
                    Carrying Amount &lt; Face Value
                </p>

                <h3>Premium</h3>

                <p>
                    Carrying Amount &gt; Face Value
                </p>

            </div>


            <h2>What happens over time?</h2>

            <p>
                As the discount or premium is amortized,
                the bond's carrying amount moves toward its face value.
            </p>


            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>Discount Bond</h3>

                    <p>
                        Carrying amount increases toward face value.
                    </p>

                </div>

                <div class="comparison-card">

                    <h3>Premium Bond</h3>

                    <p>
                        Carrying amount decreases toward face value.
                    </p>

                </div>

            </div>


            <div class="key-points">

                <h3>CPA shortcut</h3>

                <p>
                    Discount → carrying amount climbs.
                </p>

                <p>
                    Premium → carrying amount falls.
                </p>

                <p>
                    Both move toward face value.
                </p>

            </div>

        `,
        {
            question:
                "A bond has a 6% stated rate when investors demand an 8% market rate. The bond will generally issue at:",

            answers: [
                "A. A premium",
                "B. A discount",
                "C. Face value only",
                "D. Twice face value"
            ],

            correctAnswer: 1,

            explanation:
                "Because the stated rate is below the market rate, investors generally pay less than face value, creating a bond discount."
        }
    );

    return;
}
if (moduleId === 5 && lessonId === 5) {

    showIntermediateLessonPage(
        5,
        5,
        "Effective-Interest Amortization",
        `

            <h2>The two interest calculations</h2>

            <p>
                This is one of the most important bond concepts.
                Do not mix these two calculations.
            </p>


            <div class="key-points">

                <h3>Cash Interest</h3>

                <div class="formula-box">

                    Face Value × Stated Rate × Time

                </div>

                <h3>Interest Expense</h3>

                <div class="formula-box">

                    Beginning Carrying Amount × Effective Rate × Time

                </div>

            </div>


            <h2>Discount example</h2>

            <p>
                Assume:
            </p>


            <div class="financial-example">

                <div>
                    <span>Face Value</span>
                    <strong>$100,000</strong>
                </div>

                <div>
                    <span>Stated Annual Rate</span>
                    <strong>6%</strong>
                </div>

                <div>
                    <span>Effective Annual Rate</span>
                    <strong>8%</strong>
                </div>

                <div>
                    <span>Beginning Carrying Amount</span>
                    <strong>$95,000</strong>
                </div>

            </div>


            <p>
                For this introductory example, assume annual interest payments.
            </p>


            <h2>Step 1 — Calculate cash interest</h2>

            <div class="formula-box">

                $100,000 × 6% = $6,000

            </div>


            <h2>Step 2 — Calculate interest expense</h2>

            <div class="formula-box">

                $95,000 × 8% = $7,600

            </div>


            <h2>Step 3 — Calculate discount amortization</h2>

            <div class="formula-box">

                $7,600 − $6,000 = $1,600

            </div>


            <h2>Step 4 — Update carrying amount</h2>

            <div class="formula-box">

                $95,000 + $1,600 = $96,600

            </div>


            <div class="financial-example">

                <div>
                    <span>Beginning Carrying Amount</span>
                    <strong>$95,000</strong>
                </div>

                <div>
                    <span>Interest Expense</span>
                    <strong>$7,600</strong>
                </div>

                <div>
                    <span>Cash Interest</span>
                    <strong>($6,000)</strong>
                </div>

                <div class="financial-total">
                    <span>Ending Carrying Amount</span>
                    <strong>$96,600</strong>
                </div>

            </div>


            <div class="key-points">

                <h3>Discount rule</h3>

                <p>
                    Interest Expense &gt; Cash Interest
                </p>

                <p>
                    The difference amortizes the discount,
                    increasing carrying amount.
                </p>

            </div>


            <h2>Premium example</h2>

            <p>
                Now assume:
            </p>


            <div class="financial-example">

                <div>
                    <span>Face Value</span>
                    <strong>$100,000</strong>
                </div>

                <div>
                    <span>Stated Annual Rate</span>
                    <strong>10%</strong>
                </div>

                <div>
                    <span>Effective Annual Rate</span>
                    <strong>8%</strong>
                </div>

                <div>
                    <span>Beginning Carrying Amount</span>
                    <strong>$105,000</strong>
                </div>

            </div>


            <h2>Cash interest</h2>

            <div class="formula-box">

                $100,000 × 10% = $10,000

            </div>


            <h2>Interest expense</h2>

            <div class="formula-box">

                $105,000 × 8% = $8,400

            </div>


            <h2>Premium amortization</h2>

            <div class="formula-box">

                $10,000 − $8,400 = $1,600

            </div>


            <h2>Ending carrying amount</h2>

            <div class="formula-box">

                $105,000 − $1,600 = $103,400

            </div>


            <div class="key-points">

                <h3>Premium rule</h3>

                <p>
                    Cash Interest &gt; Interest Expense
                </p>

                <p>
                    The difference amortizes the premium,
                    decreasing carrying amount.
                </p>

            </div>


            <h2>The pattern to memorize</h2>

            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>Discount</h3>

                    <p>
                        Expense &gt; Cash
                    </p>

                    <p>
                        Carrying amount ↑
                    </p>

                </div>

                <div class="comparison-card">

                    <h3>Premium</h3>

                    <p>
                        Cash &gt; Expense
                    </p>

                    <p>
                        Carrying amount ↓
                    </p>

                </div>

            </div>

        `,
        {
            question:
                "A bond has a $200,000 face value, a 6% stated annual rate, an 8% effective annual rate, and a beginning carrying amount of $190,000. Assuming annual interest payments, what is the first year's discount amortization?",

            answers: [
                "A. $3,200",
                "B. $12,000",
                "C. $15,200",
                "D. $2,000"
            ],

            correctAnswer: 0,

            explanation:
                "Cash interest = $200,000 × 6% = $12,000. Interest expense = $190,000 × 8% = $15,200. Discount amortization = $15,200 − $12,000 = $3,200."
        }
    );

    return;
}

if (moduleId === 6 && lessonId === 1) {

    showIntermediateLessonPage(
        6,
        1,
        "Revenue Recognition Overview",
        `

            <h2>The core principle</h2>

            <p>
                Revenue recognition is based on the transfer of promised
                goods or services to customers.
            </p>

            <p>
                Revenue should reflect the amount of consideration
                the company expects to receive in exchange for those
                goods or services.
            </p>


            <h2>The five-step model</h2>

            <div class="key-points">

                <ol>
                    <li>Identify the contract with a customer.</li>
                    <li>Identify the performance obligations.</li>
                    <li>Determine the transaction price.</li>
                    <li>Allocate the transaction price.</li>
                    <li>Recognize revenue when or as each performance obligation is satisfied.</li>
                </ol>

            </div>


            <h2>Simple example</h2>

            <p>
                A company agrees to sell a customer a laptop for
                <strong>$1,500</strong>.
            </p>

            <p>
                The laptop is transferred to the customer,
                and the customer obtains control of it.
            </p>

            <div class="formula-box">

                Revenue Recognized = $1,500

            </div>


            <h2>Why cash timing is not enough</h2>

            <p>
                Receiving cash does not automatically mean revenue
                should be recognized immediately.
            </p>


            <div class="example-box">

                <h3>Advance payment</h3>

                <p>
                    A customer pays $12,000 today for services that
                    will be provided over the next 12 months.
                </p>

                <p>
                    The company has received cash, but it has not yet
                    provided all of the promised services.
                </p>

                <p>
                    Revenue recognition depends on satisfying the
                    performance obligation, not merely receiving cash.
                </p>

            </div>


            <div class="key-points">

                <h3>Important</h3>

                <p>
                    Revenue recognition focuses on the transfer of
                    promised goods or services and customer control.
                </p>

            </div>

        `,
        {
            question:
                "Under the revenue recognition model, revenue is recognized primarily when:",

            answers: [
                "A. Cash is received",
                "B. The company signs any agreement",
                "C. A performance obligation is satisfied by transferring a promised good or service",
                "D. Management decides it wants to report revenue"
            ],

            correctAnswer: 2,

            explanation:
                "Revenue is recognized when or as a performance obligation is satisfied through transfer of the promised good or service to the customer."
        }
    );

    return;
}

if (moduleId === 6 && lessonId === 2) {

    showIntermediateLessonPage(
        6,
        2,
        "Contracts & Performance Obligations",
        `

            <h2>Step 1 — Identify the contract</h2>

            <p>
                Revenue accounting begins by determining whether
                an arrangement qualifies as a contract with a customer.
            </p>


            <div class="key-points">

                <h3>Important contract considerations</h3>

                <ul>
                    <li>The parties have approved the arrangement.</li>
                    <li>The rights of the parties can be identified.</li>
                    <li>Payment terms can be identified.</li>
                    <li>The arrangement has commercial substance.</li>
                    <li>Collection of consideration is probable.</li>
                </ul>

            </div>


            <h2>Step 2 — Identify performance obligations</h2>

            <p>
                A performance obligation is a promise to transfer
                a good or service to a customer.
            </p>


            <h2>Distinct goods or services</h2>

            <p>
                A contract may contain more than one promised good
                or service.
            </p>

            <p>
                A promised good or service may be accounted for
                separately if it is distinct.
            </p>


            <div class="example-box">

                <h3>Example — Phone + Service</h3>

                <p>
                    A telecommunications company enters into a contract
                    that includes:
                </p>

                <ul>
                    <li>A smartphone</li>
                    <li>12 months of wireless service</li>
                </ul>

                <p>
                    The company must evaluate whether these promises
                    represent separate performance obligations.
                </p>

            </div>


            <h2>Why performance obligations matter</h2>

            <p>
                If a contract contains multiple performance obligations,
                the transaction price may need to be allocated among them.
            </p>

            <p>
                Revenue is then recognized as each performance
                obligation is satisfied.
            </p>


            <div class="key-points">

                <h3>Think ahead</h3>

                <p>
                    One contract does not necessarily equal one revenue event.
                </p>

                <p>
                    A single contract can contain multiple separate
                    promises that are recognized at different times.
                </p>

            </div>

        `,
        {
            question:
                "A customer contract includes a product and a separate service. Why is identifying separate performance obligations important?",

            answers: [
                "A. It determines payroll tax",
                "B. Revenue may need to be allocated and recognized separately for each obligation",
                "C. It automatically eliminates revenue",
                "D. It means the customer never pays cash"
            ],

            correctAnswer: 1,

            explanation:
                "Different performance obligations may receive different portions of the transaction price and may be satisfied at different times."
        }
    );

    return;
}

if (moduleId === 6 && lessonId === 3) {

    showIntermediateLessonPage(
        6,
        3,
        "Determining Transaction Price",
        `

            <h2>Step 3 — Determine the transaction price</h2>

            <p>
                The transaction price is the amount of consideration
                the company expects to be entitled to in exchange
                for transferring promised goods or services.
            </p>


            <h2>Fixed consideration</h2>

            <p>
                Sometimes the price is straightforward.
            </p>

            <div class="example-box">

                <p>
                    A company agrees to provide consulting services
                    for a fixed price of <strong>$20,000</strong>.
                </p>

                <p>
                    If there are no other relevant pricing adjustments,
                    the transaction price may simply be $20,000.
                </p>

            </div>


            <h2>Variable consideration</h2>

            <p>
                Some contracts contain amounts that can vary.
            </p>


            <div class="key-points">

                <h3>Examples</h3>

                <ul>
                    <li>Bonuses</li>
                    <li>Performance incentives</li>
                    <li>Refunds</li>
                    <li>Rebates</li>
                    <li>Price concessions</li>
                    <li>Penalties</li>
                </ul>

            </div>


            <div class="example-box">

                <h3>Example — Performance bonus</h3>

                <p>
                    A contractor will receive:
                </p>

                <p>
                    <strong>$100,000 fixed payment</strong>
                </p>

                <p>
                    plus a potential
                    <strong>$10,000 performance bonus</strong>.
                </p>

                <p>
                    The company must evaluate the variable portion
                    under the applicable revenue recognition guidance.
                </p>

            </div>


            <h2>Variable consideration constraint</h2>

            <p>
                Variable consideration cannot simply be included
                without considering uncertainty.
            </p>

            <p>
                The model contains a constraint intended to reduce
                the risk of recognizing revenue that may later
                require a significant reversal.
            </p>


            <h2>Amounts collected for others</h2>

            <p>
                The transaction price generally excludes amounts
                collected on behalf of third parties.
            </p>


            <div class="key-points">

                <h3>CPA thinking</h3>

                <p>
                    Don't automatically assume that the number printed
                    on a contract is the amount of revenue.
                </p>

                <p>
                    First determine what consideration the company
                    expects to be entitled to under the model.
                </p>

            </div>

        `,
        {
            question:
                "Which item is an example of variable consideration?",

            answers: [
                "A. A fixed $5,000 contract price with no adjustments",
                "B. A performance bonus dependent on achieving a target",
                "C. The company's cash balance",
                "D. Common stock issued by the company"
            ],

            correctAnswer: 1,

            explanation:
                "Performance bonuses are a common example of variable consideration because the amount ultimately received depends on an uncertain outcome."
        }
    );

    return;
}

if (moduleId === 6 && lessonId === 4) {

    showIntermediateLessonPage(
        6,
        4,
        "Allocating Transaction Price",
        `

            <h2>Step 4 — Allocate the transaction price</h2>

            <p>
                When a contract contains more than one performance obligation,
                the transaction price generally must be allocated among
                those obligations.
            </p>

            <p>
                Allocation is generally based on the relative
                standalone selling prices of the promised goods or services.
            </p>


            <h2>Standalone selling price</h2>

            <p>
                The standalone selling price is the price at which
                a company would sell a promised good or service
                separately to a customer.
            </p>


            <h2>Example</h2>

            <p>
                A company sells a package containing:
            </p>

            <div class="financial-example">

                <div>
                    <span>Product standalone price</span>
                    <strong>$800</strong>
                </div>

                <div>
                    <span>Service standalone price</span>
                    <strong>$200</strong>
                </div>

                <div class="financial-total">
                    <span>Total standalone prices</span>
                    <strong>$1,000</strong>
                </div>

            </div>

            <p>
                The customer pays a bundled contract price of
                <strong>$900</strong>.
            </p>


            <h2>Step 1 — Determine relative percentages</h2>

            <div class="formula-box">

                Product:
                $800 ÷ $1,000 = 80%

            </div>

            <div class="formula-box">

                Service:
                $200 ÷ $1,000 = 20%

            </div>


            <h2>Step 2 — Allocate the $900 transaction price</h2>

            <div class="formula-box">

                Product:
                $900 × 80% = $720

            </div>

            <div class="formula-box">

                Service:
                $900 × 20% = $180

            </div>


            <div class="financial-example">

                <div>
                    <span>Allocated to Product</span>
                    <strong>$720</strong>
                </div>

                <div>
                    <span>Allocated to Service</span>
                    <strong>$180</strong>
                </div>

                <div class="financial-total">
                    <span>Total Transaction Price</span>
                    <strong>$900</strong>
                </div>

            </div>


            <div class="key-points">

                <h3>Always check</h3>

                <p>
                    The amounts allocated to all performance obligations
                    should add back to the transaction price.
                </p>

                <div class="formula-box">

                    $720 + $180 = $900 ✓

                </div>

            </div>


            <h2>General formula</h2>

            <div class="formula-box">

                Allocation =
                Transaction Price ×
                (Standalone Price of Obligation ÷
                Total Standalone Selling Prices)

            </div>

        `,
        {
            question:
                "A contract contains Product A with a standalone selling price of $600 and Service B with a standalone selling price of $400. The bundled transaction price is $800. How much is allocated to Product A?",

            answers: [
                "A. $320",
                "B. $400",
                "C. $480",
                "D. $600"
            ],

            correctAnswer: 2,

            explanation:
                "Product A represents $600 ÷ $1,000 = 60% of total standalone selling prices. $800 × 60% = $480."
        }
    );

    return;
}

if (moduleId === 6 && lessonId === 5) {

    showIntermediateLessonPage(
        6,
        5,
        "Recognizing Revenue",
        `

            <h2>Step 5 — Recognize revenue</h2>

            <p>
                Revenue is recognized when or as a company satisfies
                a performance obligation by transferring control
                of a promised good or service to the customer.
            </p>


            <h2>Two broad patterns</h2>

            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>Point in Time</h3>

                    <p>
                        Revenue is recognized when control transfers
                        at a particular point.
                    </p>

                </div>

                <div class="comparison-card">

                    <h3>Over Time</h3>

                    <p>
                        Revenue is recognized progressively as the
                        performance obligation is satisfied.
                    </p>

                </div>

            </div>


            <h2>Point-in-time example</h2>

            <p>
                A retailer sells a television for
                <strong>$2,000</strong>.
            </p>

            <p>
                The television is delivered and control transfers
                to the customer.
            </p>

            <div class="formula-box">

                Revenue Recognized = $2,000

            </div>


            <h2>Over-time recognition</h2>

            <p>
                A performance obligation is recognized over time
                when the applicable criteria for over-time recognition
                are satisfied.
            </p>


            <div class="key-points">

                <h3>Examples of circumstances considered</h3>

                <ul>
                    <li>
                        The customer simultaneously receives and consumes
                        benefits as the entity performs.
                    </li>

                    <li>
                        The entity's performance creates or enhances an asset
                        that the customer controls as it is created.
                    </li>

                    <li>
                        The entity's performance creates an asset with no
                        alternative use to the entity and the entity has an
                        enforceable right to payment for performance completed
                        to date.
                    </li>
                </ul>

            </div>


            <h2>Simple service example</h2>

            <p>
                Assume a company provides a qualifying service evenly
                over 12 months for a total transaction price of
                <strong>$24,000</strong>.
            </p>

            <p>
                Assume an appropriate measure of progress indicates
                that performance occurs evenly throughout the year.
            </p>

            <div class="formula-box">

                $24,000 ÷ 12 = $2,000 per month

            </div>

            <p>
                After three months:
            </p>

            <div class="formula-box">

                $2,000 × 3 = $6,000 Revenue Recognized

            </div>


            <h2>What if over-time criteria are not met?</h2>

            <p>
                If a performance obligation does not qualify for
                recognition over time, it is satisfied at a point in time.
            </p>


            <div class="key-points">

                <h3>CPA thinking</h3>

                <p>
                    Don't begin by asking:
                    "When did the customer pay?"
                </p>

                <p>
                    Ask:
                    "When did control of the promised good or service transfer?"
                </p>

            </div>


            <h2>The entire five-step model</h2>

            <div class="key-points">

                <ol>
                    <li>Identify the contract.</li>
                    <li>Identify performance obligations.</li>
                    <li>Determine transaction price.</li>
                    <li>Allocate transaction price.</li>
                    <li>Recognize revenue when or as obligations are satisfied.</li>
                </ol>

            </div>

        `,
        {
            question:
                "A company provides a qualifying 12-month service for $36,000, and an appropriate measure of progress shows the service is provided evenly. How much revenue is recognized after four months?",

            answers: [
                "A. $3,000",
                "B. $9,000",
                "C. $12,000",
                "D. $36,000"
            ],

            correctAnswer: 2,

            explanation:
                "$36,000 ÷ 12 = $3,000 per month. After four months, $3,000 × 4 = $12,000 of revenue is recognized."
        }
    );

    return;
}

if (moduleId === 7 && lessonId === 1) {

    showIntermediateLessonPage(
        7,
        1,
        "Lease Fundamentals",
        `

            <h2>What is a lease?</h2>

            <p>
                A lease generally gives a customer the right to control
                the use of an identified asset for a period of time
                in exchange for consideration.
            </p>


            <h2>Important terminology</h2>

            <div class="key-points">

                <p>
                    <strong>Lessee:</strong>
                    The party obtaining the right to use the asset.
                </p>

                <p>
                    <strong>Lessor:</strong>
                    The party providing the right to use the asset.
                </p>

                <p>
                    <strong>Right-of-Use Asset:</strong>
                    Represents the lessee's right to use the underlying
                    asset during the lease term.
                </p>

                <p>
                    <strong>Lease Liability:</strong>
                    Represents the lessee's obligation to make
                    lease payments.
                </p>

            </div>


            <h2>Important idea</h2>

            <p>
                The lessee does not necessarily own the underlying asset.
            </p>

            <p>
                Instead, the lessee recognizes its
                <strong>right to use</strong> the asset and its
                <strong>obligation to make lease payments</strong>.
            </p>


            <div class="example-box">

                <h3>Example</h3>

                <p>
                    A company enters into a five-year lease for office space.
                </p>

                <p>
                    The company does not necessarily own the building.
                    However, the lease may create both:
                </p>

                <ul>
                    <li>A right-of-use asset</li>
                    <li>A lease liability</li>
                </ul>

            </div>


            <h2>Why leases matter</h2>

            <p>
                Lease contracts can create significant assets and liabilities,
                even though the company did not purchase the underlying asset.
            </p>


            <div class="key-points">

                <h3>Foundation</h3>

                <p>
                    Think of lessee accounting as:
                </p>

                <div class="formula-box">

                    Right to Use Asset
                    +
                    Obligation to Pay

                </div>

            </div>

        `,
        {
            question:
                "From the lessee's perspective, what does a lease liability generally represent?",

            answers: [
                "A. Ownership of the underlying asset",
                "B. The obligation to make lease payments",
                "C. Revenue earned from customers",
                "D. The market value of the lessee's common stock"
            ],

            correctAnswer: 1,

            explanation:
                "The lease liability represents the lessee's obligation to make lease payments."
        }
    );

    return;
}

if (moduleId === 7 && lessonId === 2) {

    showIntermediateLessonPage(
        7,
        2,
        "Finance vs Operating Leases",
        `

            <h2>Lessee lease classification</h2>

            <p>
                Under U.S. GAAP, a lessee generally classifies a lease
                as either a finance lease or an operating lease.
            </p>


            <h2>Finance lease indicators</h2>

            <p>
                A lease is classified as a finance lease when it meets
                one or more of the applicable classification criteria.
            </p>


            <div class="key-points">

                <ol>
                    <li>
                        Ownership of the underlying asset transfers
                        to the lessee by the end of the lease.
                    </li>

                    <li>
                        The lessee has a purchase option that is
                        reasonably certain to be exercised.
                    </li>

                    <li>
                        The lease term is for a major part of the
                        remaining economic life of the asset.
                    </li>

                    <li>
                        The present value of lease payments plus certain
                        residual value guarantees equals or exceeds
                        substantially all of the asset's fair value.
                    </li>

                    <li>
                        The asset is so specialized that it is expected
                        to have no alternative use to the lessor
                        at the end of the lease term.
                    </li>
                </ol>

            </div>


            <h2>If none of those criteria are met</h2>

            <p>
                The lessee generally classifies the lease as an
                <strong>operating lease</strong>.
            </p>


            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>Finance Lease</h3>

                    <p>
                        Meets at least one applicable finance
                        lease classification criterion.
                    </p>

                </div>

                <div class="comparison-card">

                    <h3>Operating Lease</h3>

                    <p>
                        Does not meet the finance lease
                        classification criteria.
                    </p>

                </div>

            </div>


            <h2>Don't memorize fake bright-line rules</h2>

            <p>
                You may encounter old study material referring mechanically
                to rules such as 75% of economic life or 90% of fair value.
            </p>

            <p>
                Current U.S. GAAP uses principles such as
                <strong>major part</strong> and
                <strong>substantially all</strong>.
            </p>


            <div class="key-points">

                <h3>CPA habit</h3>

                <p>
                    Look at the facts of the lease and evaluate the
                    classification criteria rather than blindly applying
                    an outdated numerical rule.
                </p>

            </div>

        `,
        {
            question:
                "A lease transfers ownership of the underlying asset to the lessee at the end of the lease term. From the lessee's perspective, this is an indicator of:",

            answers: [
                "A. Finance lease classification",
                "B. Operating lease classification only",
                "C. Accounts receivable",
                "D. Revenue recognition"
            ],

            correctAnswer: 0,

            explanation:
                "Transfer of ownership by the end of the lease term is one of the finance lease classification criteria."
        }
    );

    return;
}

if (moduleId === 7 && lessonId === 3) {

    showIntermediateLessonPage(
        7,
        3,
        "Initial Lease Measurement",
        `

            <h2>Lease liability at commencement</h2>

            <p>
                At commencement, the lease liability is generally based
                on the present value of lease payments that have not yet
                been paid.
            </p>


            <div class="formula-box">

                Initial Lease Liability
                =
                Present Value of Applicable Lease Payments

            </div>


            <h2>Why present value?</h2>

            <p>
                A dollar paid several years from now is not economically
                equivalent to a dollar paid today.
            </p>

            <p>
                Therefore, future lease payments are discounted
                to a present value.
            </p>


            <h2>Simple present-value example</h2>

            <p>
                Assume a lease requires a single payment of
                <strong>$10,000 one year from today</strong>.
            </p>

            <p>
                Assume the applicable annual discount rate is
                <strong>5%</strong>.
            </p>


            <div class="formula-box">

                Present Value =
                Future Payment ÷ (1 + Rate)

            </div>

            <div class="formula-box">

                $10,000 ÷ 1.05
                =
                $9,523.81

            </div>


            <p>
                The present value is approximately
                <strong>$9,524</strong>.
            </p>


            <h2>Multiple payments</h2>

            <p>
                Real leases usually contain multiple periodic payments.
            </p>

            <p>
                Each applicable future payment is discounted based on
                when it will be paid, and the present values are combined.
            </p>


            <div class="formula-box">

                PV =
                Payment₁ ÷ (1+r)¹
                +
                Payment₂ ÷ (1+r)²
                +
                ...
            </div>


            <h2>Right-of-use asset</h2>

            <p>
                The initial ROU asset often begins with the initial
                lease liability, but it is not always exactly equal to it.
            </p>

            <p>
                Certain items can adjust the ROU asset, such as applicable
                payments made at or before commencement, lease incentives,
                and certain initial direct costs.
            </p>


            <div class="key-points">

                <h3>Don't memorize this:</h3>

                <p>
                    ROU Asset = Lease Liability in every situation.
                </p>

                <h3>Instead remember:</h3>

                <p>
                    The lease liability is based on the present value
                    of applicable unpaid lease payments, while the initial
                    ROU asset begins from that measurement and may require
                    adjustments.
                </p>

            </div>


            <h2>What comes next</h2>

            <p>
                After initial recognition, interest accrues on the
                lease liability and lease payments reduce the liability.
            </p>

            <p>
                Finance and operating leases then differ in important
                aspects of subsequent expense recognition.
            </p>

        `,
        {
            question:
                "A lease requires a single payment of $21,000 exactly one year from today. If the applicable annual discount rate is 5%, what is the approximate present value?",

            answers: [
                "A. $20,000",
                "B. $21,000",
                "C. $22,050",
                "D. $19,000"
            ],

            correctAnswer: 0,

            explanation:
                "$21,000 ÷ 1.05 = $20,000."
        }
    );

    return;
}

if (moduleId === 7 && lessonId === 4) {

    showIntermediateLessonPage(
        7,
        4,
        "Finance Lease Subsequent Accounting",
        `

            <h2>What happens after commencement?</h2>

            <p>
                For a finance lease, interest accrues on the outstanding
                lease liability.
            </p>

            <p>
                When a lease payment is made, part of the payment represents
                interest and the remainder reduces the lease liability.
            </p>


            <h2>The basic roll-forward</h2>

            <div class="formula-box">

                Interest =
                Beginning Lease Liability × Periodic Discount Rate

            </div>

            <div class="formula-box">

                Liability Reduction =
                Lease Payment − Interest

            </div>

            <div class="formula-box">

                Ending Lease Liability =
                Beginning Liability − Liability Reduction

            </div>


            <h2>Example</h2>

            <p>
                Assume the beginning lease liability is
                <strong>$50,000</strong>.
            </p>

            <p>
                The annual discount rate is <strong>6%</strong>
                and the year-end lease payment is
                <strong>$12,000</strong>.
            </p>


            <h3>Step 1 — Interest</h3>

            <div class="formula-box">

                $50,000 × 6% = $3,000

            </div>


            <h3>Step 2 — Liability reduction</h3>

            <div class="formula-box">

                $12,000 − $3,000 = $9,000

            </div>


            <h3>Step 3 — Ending liability</h3>

            <div class="formula-box">

                $50,000 − $9,000 = $41,000

            </div>


            <div class="financial-example">

                <div>
                    <span>Beginning Lease Liability</span>
                    <strong>$50,000</strong>
                </div>

                <div>
                    <span>Interest</span>
                    <strong>$3,000</strong>
                </div>

                <div>
                    <span>Cash Payment</span>
                    <strong>($12,000)</strong>
                </div>

                <div class="financial-total">
                    <span>Ending Lease Liability</span>
                    <strong>$41,000</strong>
                </div>

            </div>


            <h2>Another way to see the roll-forward</h2>

            <div class="formula-box">

                $50,000 + $3,000 − $12,000
                = $41,000

            </div>


            <h2>Right-of-use asset</h2>

            <p>
                For a finance lease, the ROU asset is generally amortized
                separately from the interest recognized on the lease liability.
            </p>

            <p>
                The appropriate amortization period depends on the facts,
                including whether ownership transfers or a purchase option
                is reasonably certain to be exercised.
            </p>


            <div class="key-points">

                <h3>Finance lease pattern</h3>

                <ul>
                    <li>Interest expense is recognized on the lease liability.</li>
                    <li>The lease payment reduces the liability after interest.</li>
                    <li>The ROU asset is amortized separately.</li>
                </ul>

            </div>

        `,
        {
            question:
                "A finance lease has a beginning lease liability of $80,000. The annual discount rate is 5%, and a $18,000 payment is made at year-end. What is the ending lease liability?",

            answers: [
                "A. $62,000",
                "B. $66,000",
                "C. $76,000",
                "D. $84,000"
            ],

            correctAnswer: 1,

            explanation:
                "Interest = $80,000 × 5% = $4,000. Liability reduction = $18,000 − $4,000 = $14,000. Ending liability = $80,000 − $14,000 = $66,000."
        }
    );

    return;
}

if (moduleId === 7 && lessonId === 5) {

    showIntermediateLessonPage(
        7,
        5,
        "Operating Lease Subsequent Accounting",
        `

            <h2>Operating leases</h2>

            <p>
                Operating leases also generally result in recognition
                of a right-of-use asset and lease liability by the lessee.
            </p>

            <p>
                However, their subsequent expense recognition differs
                from finance leases.
            </p>


            <h2>Single lease cost</h2>

            <p>
                For an operating lease, the lessee generally recognizes
                a single lease cost, typically on a straight-line basis
                over the lease term.
            </p>


            <div class="example-box">

                <h3>Simple example</h3>

                <p>
                    Assume an operating lease requires total fixed payments
                    of <strong>$60,000</strong> over five years,
                    with no other adjustments affecting this simple example.
                </p>

                <div class="formula-box">

                    $60,000 ÷ 5 years =
                    $12,000 annual lease cost

                </div>

            </div>


            <h2>The lease liability still uses interest</h2>

            <p>
                The lease liability itself continues to be measured
                using an interest-based roll-forward.
            </p>


            <div class="formula-box">

                Interest =
                Beginning Lease Liability × Periodic Discount Rate

            </div>

            <div class="formula-box">

                Ending Lease Liability =
                Beginning Liability + Interest − Payment

            </div>


            <h2>Example</h2>

            <p>
                Beginning lease liability:
                <strong>$40,000</strong>
            </p>

            <p>
                Discount rate:
                <strong>5%</strong>
            </p>

            <p>
                Year-end payment:
                <strong>$10,000</strong>
            </p>


            <h3>Interest on liability</h3>

            <div class="formula-box">

                $40,000 × 5% = $2,000

            </div>


            <h3>Ending lease liability</h3>

            <div class="formula-box">

                $40,000 + $2,000 − $10,000
                = $32,000

            </div>


            <h2>What makes operating accounting different?</h2>

            <p>
                Although interest is used in measuring the lease liability,
                the operating lease generally presents a single lease cost.
            </p>

            <p>
                The change in the ROU asset is therefore determined in a way
                that produces the required single lease-cost pattern.
            </p>


            <div class="key-points">

                <h3>Do not confuse these</h3>

                <p>
                    <strong>Finance lease:</strong>
                    interest and ROU asset amortization are recognized separately.
                </p>

                <p>
                    <strong>Operating lease:</strong>
                    generally produces a single lease cost.
                </p>

            </div>


            <h2>Big picture</h2>

            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>Finance</h3>

                    <p>Interest expense</p>
                    <p>+</p>
                    <p>ROU asset amortization</p>

                </div>

                <div class="comparison-card">

                    <h3>Operating</h3>

                    <p>
                        Generally a single lease cost
                        over the lease term
                    </p>

                </div>

            </div>

        `,
        {
            question:
                "An operating lease liability begins the year at $60,000. The annual discount rate is 5%, and the year-end payment is $14,000. What is the ending lease liability?",

            answers: [
                "A. $46,000",
                "B. $49,000",
                "C. $57,000",
                "D. $63,000"
            ],

            correctAnswer: 1,

            explanation:
                "Interest = $60,000 × 5% = $3,000. Ending liability = $60,000 + $3,000 − $14,000 = $49,000."
        }
    );

    return;
}

if (moduleId === 8 && lessonId === 1) {

    showIntermediateLessonPage(
        8,
        1,
        "Stockholders' Equity Fundamentals",
        `

            <h2>What is stockholders' equity?</h2>

            <p>
                Stockholders' equity represents the residual interest
                in a corporation's assets after deducting its liabilities.
            </p>

            <div class="formula-box">

                Assets − Liabilities = Stockholders' Equity

            </div>


            <h2>Major components</h2>

            <div class="key-points">

                <ul>
                    <li>Common Stock</li>
                    <li>Preferred Stock, when applicable</li>
                    <li>Additional Paid-In Capital</li>
                    <li>Retained Earnings</li>
                    <li>Accumulated Other Comprehensive Income or Loss</li>
                    <li>Treasury Stock</li>
                </ul>

            </div>


            <h2>Contributed capital</h2>

            <p>
                Contributed capital generally represents amounts
                invested by shareholders in exchange for shares.
            </p>


            <h2>Retained earnings</h2>

            <p>
                Retained earnings generally represents accumulated
                earnings of the corporation that have not been
                distributed to shareholders as dividends.
            </p>


            <div class="example-box">

                <h3>Simple retained earnings example</h3>

                <p>
                    Beginning Retained Earnings = $100,000
                </p>

                <p>
                    Net Income = $30,000
                </p>

                <p>
                    Dividends = $8,000
                </p>

                <div class="formula-box">

                    Ending Retained Earnings =
                    $100,000 + $30,000 − $8,000
                    = $122,000

                </div>

            </div>


            <h2>Treasury stock</h2>

            <p>
                Treasury stock consists of a corporation's own shares
                that were issued and later reacquired.
            </p>

            <p>
                Treasury stock is generally presented as a reduction
                of stockholders' equity rather than as an asset.
            </p>


            <div class="key-points">

                <h3>Remember</h3>

                <p>
                    Assets − Liabilities = Equity
                </p>

                <p>
                    Net income generally increases retained earnings.
                </p>

                <p>
                    Dividends generally reduce retained earnings.
                </p>

                <p>
                    Treasury stock generally reduces total stockholders' equity.
                </p>

            </div>

        `,
        {
            question:
                "Beginning retained earnings is $80,000, net income is $25,000 and dividends are $10,000. What is ending retained earnings?",

            answers: [
                "A. $65,000",
                "B. $95,000",
                "C. $105,000",
                "D. $115,000"
            ],

            correctAnswer: 1,

            explanation:
                "$80,000 + $25,000 − $10,000 = $95,000 ending retained earnings."
        }
    );

    return;
}

if (moduleId === 8 && lessonId === 2) {

    showIntermediateLessonPage(
        8,
        2,
        "Common & Preferred Stock",
        `

            <h2>Issuing common stock</h2>

            <p>
                When a corporation issues shares for cash,
                cash increases and stockholders' equity increases.
            </p>


            <h2>Par value example</h2>

            <p>
                A corporation issues <strong>10,000 shares</strong>
                of $1 par common stock for
                <strong>$15 per share</strong>.
            </p>

            <h3>Cash received</h3>

            <div class="formula-box">

                10,000 × $15 = $150,000

            </div>

            <h3>Common Stock</h3>

            <div class="formula-box">

                10,000 × $1 par = $10,000

            </div>

            <h3>Additional Paid-In Capital</h3>

            <div class="formula-box">

                $150,000 − $10,000 = $140,000

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
                    <div>$10,000</div>
                </div>

                <div class="journal-row credit-row">
                    <div>Additional Paid-In Capital</div>
                    <div>—</div>
                    <div>$140,000</div>
                </div>

            </div>


            <h2>Preferred stock</h2>

            <p>
                Preferred stock can have rights that differ from
                common stock.
            </p>

            <p>
                One common feature is a preference regarding dividends.
            </p>


            <h2>Cumulative preferred stock</h2>

            <p>
                If preferred stock is cumulative, unpaid dividends from
                prior periods can accumulate as dividends in arrears.
            </p>


            <div class="example-box">

                <h3>Example</h3>

                <p>
                    A corporation has 1,000 shares of
                    $100 par, 6% cumulative preferred stock.
                </p>

                <div class="formula-box">

                    Annual Preferred Dividend =
                    1,000 × $100 × 6%
                    = $6,000

                </div>

            </div>


            <div class="key-points">

                <h3>Keep these separate</h3>

                <p>
                    <strong>Par value</strong> is not necessarily the
                    market price of the stock.
                </p>

                <p>
                    <strong>Issue price</strong> determines the total
                    cash received in a cash issuance.
                </p>

            </div>

        `,
        {
            question:
                "A company issues 5,000 shares of $2 par common stock for $12 per share. How much is credited to Additional Paid-In Capital?",

            answers: [
                "A. $10,000",
                "B. $50,000",
                "C. $60,000",
                "D. $70,000"
            ],

            correctAnswer: 1,

            explanation:
                "Cash received = 5,000 × $12 = $60,000. Common Stock = 5,000 × $2 = $10,000. APIC = $60,000 − $10,000 = $50,000."
        }
    );

    return;
}

if (moduleId === 8 && lessonId === 3) {

    showIntermediateLessonPage(
        8,
        3,
        "Treasury Stock & Dividends",
        `

            <h2>Treasury stock</h2>

            <p>
                Treasury stock consists of a company's own shares
                that it has reacquired.
            </p>

            <p>
                Under the cost method, treasury stock is recorded
                at the amount paid to reacquire the shares.
            </p>


            <h2>Example</h2>

            <p>
                A corporation repurchases 2,000 of its shares
                for <strong>$20 per share</strong>.
            </p>

            <div class="formula-box">

                2,000 × $20 = $40,000

            </div>


            <div class="journal-entry">

                <div class="journal-row journal-header">
                    <div>Account</div>
                    <div>Debit</div>
                    <div>Credit</div>
                </div>

                <div class="journal-row">
                    <div>Treasury Stock</div>
                    <div>$40,000</div>
                    <div>—</div>
                </div>

                <div class="journal-row credit-row">
                    <div>Cash</div>
                    <div>—</div>
                    <div>$40,000</div>
                </div>

            </div>


            <div class="key-points">

                <p>
                    Treasury Stock is a
                    <strong>contra-equity account</strong>.
                </p>

                <p>
                    Therefore, purchasing treasury stock generally
                    decreases total stockholders' equity.
                </p>

            </div>


            <h2>Cash dividends</h2>

            <p>
                A cash dividend generally moves through three important dates:
            </p>

            <div class="key-points">

                <ol>
                    <li>Declaration date</li>
                    <li>Record date</li>
                    <li>Payment date</li>
                </ol>

            </div>


            <h2>Declaration date</h2>

            <p>
                When the board declares a cash dividend,
                the corporation generally recognizes a liability.
            </p>


            <div class="example-box">

                <p>
                    A $15,000 cash dividend is declared.
                </p>

                <div class="journal-entry">

                    <div class="journal-row journal-header">
                        <div>Account</div>
                        <div>Debit</div>
                        <div>Credit</div>
                    </div>

                    <div class="journal-row">
                        <div>Retained Earnings / Dividends</div>
                        <div>$15,000</div>
                        <div>—</div>
                    </div>

                    <div class="journal-row credit-row">
                        <div>Dividends Payable</div>
                        <div>—</div>
                        <div>$15,000</div>
                    </div>

                </div>

            </div>


            <h2>Record date</h2>

            <p>
                The record date determines which shareholders
                are entitled to receive the dividend.
            </p>

            <p>
                Generally, no journal entry is required merely
                because the record date occurs.
            </p>


            <h2>Payment date</h2>

            <div class="journal-entry">

                <div class="journal-row journal-header">
                    <div>Account</div>
                    <div>Debit</div>
                    <div>Credit</div>
                </div>

                <div class="journal-row">
                    <div>Dividends Payable</div>
                    <div>$15,000</div>
                    <div>—</div>
                </div>

                <div class="journal-row credit-row">
                    <div>Cash</div>
                    <div>—</div>
                    <div>$15,000</div>
                </div>

            </div>


            <h2>Treasury shares and dividends</h2>

            <p>
                Treasury shares are not considered outstanding shares.
            </p>

            <p>
                Therefore, a corporation does not pay itself a cash
                dividend on shares it holds as treasury stock.
            </p>


            <div class="example-box">

                <h3>Outstanding shares</h3>

                <p>
                    A company has 100,000 issued shares and
                    8,000 treasury shares.
                </p>

                <div class="formula-box">

                    Outstanding Shares =
                    100,000 − 8,000
                    = 92,000

                </div>

            </div>


            <div class="key-points">

                <h3>Remember</h3>

                <p>
                    Issued shares − Treasury shares =
                    Outstanding shares
                </p>

            </div>

        `,
        {
            question:
                "A corporation has 50,000 issued shares and holds 6,000 shares as treasury stock. How many shares are outstanding?",

            answers: [
                "A. 44,000",
                "B. 50,000",
                "C. 56,000",
                "D. 6,000"
            ],

            correctAnswer: 0,

            explanation:
                "Outstanding shares = 50,000 issued shares − 6,000 treasury shares = 44,000."
        }
    );

    return;
}

if (moduleId === 8 && lessonId === 4) {

    showIntermediateLessonPage(
        8,
        4,
        "Basic Earnings Per Share",
        `

            <h2>What is Basic EPS?</h2>

            <p>
                Basic earnings per share measures income available
                to common shareholders for each weighted-average
                common share outstanding during the period.
            </p>


            <div class="formula-box">

                Basic EPS =
                (Net Income − Preferred Dividends)
                ÷
                Weighted-Average Common Shares Outstanding

            </div>


            <h2>Simple example</h2>

            <p>
                Assume:
            </p>

            <div class="financial-example">

                <div>
                    <span>Net Income</span>
                    <strong>$500,000</strong>
                </div>

                <div>
                    <span>Preferred Dividends</span>
                    <strong>$20,000</strong>
                </div>

                <div>
                    <span>Weighted-Average Common Shares</span>
                    <strong>120,000</strong>
                </div>

            </div>


            <h3>Income available to common shareholders</h3>

            <div class="formula-box">

                $500,000 − $20,000 = $480,000

            </div>

            <h3>Basic EPS</h3>

            <div class="formula-box">

                $480,000 ÷ 120,000 = $4.00 per share

            </div>


            <h2>Why weighted-average shares?</h2>

            <p>
                The number of shares outstanding can change during the year.
                Therefore, shares are generally weighted according to
                the portion of the reporting period they were outstanding.
            </p>


            <h2>Weighted-average example</h2>

            <p>
                Assume 100,000 common shares are outstanding on January 1.
            </p>

            <p>
                On July 1, the company issues another 40,000 shares.
            </p>


            <h3>Original shares</h3>

            <div class="formula-box">

                100,000 × 12/12 = 100,000

            </div>


            <h3>New shares</h3>

            <div class="formula-box">

                40,000 × 6/12 = 20,000

            </div>


            <h3>Weighted-average shares</h3>

            <div class="formula-box">

                100,000 + 20,000 = 120,000

            </div>


            <div class="key-points">

                <h3>Important</h3>

                <p>
                    Do not automatically use ending shares outstanding
                    in the EPS denominator.
                </p>

                <p>
                    Shares issued or reacquired during the period
                    generally must be time-weighted.
                </p>

            </div>


            <h2>Stock splits and stock dividends</h2>

            <p>
                Stock splits and certain stock dividends require special
                treatment in EPS calculations.
            </p>

            <p>
                The related share amounts are generally reflected
                retrospectively for EPS purposes as though the change
                had occurred at the beginning of the earliest period presented.
            </p>


            <div class="example-box">

                <h3>Simple stock split idea</h3>

                <p>
                    If a 2-for-1 stock split occurs, each old share
                    becomes two shares.
                </p>

                <p>
                    EPS share data must be adjusted so periods are
                    presented on a comparable basis.
                </p>

            </div>


            <div class="key-points">

                <h3>Basic EPS checklist</h3>

                <ol>
                    <li>Start with net income.</li>
                    <li>Adjust for applicable preferred dividends.</li>
                    <li>Calculate weighted-average common shares.</li>
                    <li>Account properly for stock splits or stock dividends.</li>
                    <li>Divide numerator by denominator.</li>
                </ol>

            </div>

        `,
        {
            question:
                "A company reports net income of $360,000 and preferred dividends of $20,000. Weighted-average common shares outstanding are 85,000. What is basic EPS?",

            answers: [
                "A. $3.76",
                "B. $4.00",
                "C. $4.24",
                "D. $4.47"
            ],

            correctAnswer: 1,

            explanation:
                "Income available to common shareholders = $360,000 − $20,000 = $340,000. Basic EPS = $340,000 ÷ 85,000 = $4.00."
        }
    );

    return;
}

if (moduleId === 8 && lessonId === 5) {

    showIntermediateLessonPage(
        8,
        5,
        "Diluted EPS Foundations",
        `

            <h2>What is diluted EPS?</h2>

            <p>
                Diluted EPS considers the potential reduction in
                earnings per share that could result from certain
                potentially dilutive securities.
            </p>


            <div class="key-points">

                <h3>Examples can include:</h3>

                <ul>
                    <li>Convertible preferred stock</li>
                    <li>Convertible debt</li>
                    <li>Options</li>
                    <li>Warrants</li>
                    <li>Certain other arrangements that may result in common shares</li>
                </ul>

            </div>


            <h2>Basic vs Diluted EPS</h2>

            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>Basic EPS</h3>

                    <p>
                        Uses actual weighted-average common shares
                        outstanding.
                    </p>

                </div>

                <div class="comparison-card">

                    <h3>Diluted EPS</h3>

                    <p>
                        Reflects the effect of qualifying potentially
                        dilutive common shares.
                    </p>

                </div>

            </div>


            <h2>Convertible securities — basic idea</h2>

            <p>
                For certain convertible securities, diluted EPS asks
                what EPS would have looked like if conversion had
                occurred under the applicable assumptions.
            </p>


            <div class="example-box">

                <h3>Conceptual example</h3>

                <p>
                    Assume basic EPS is based on:
                </p>

                <div class="formula-box">

                    $500,000 ÷ 100,000 shares
                    = $5.00 Basic EPS

                </div>

                <p>
                    Assume a convertible security would add
                    25,000 common shares if included.
                </p>

                <p>
                    Depending on the security, the numerator may also
                    require an adjustment.
                </p>

                <p>
                    Therefore, we cannot correctly calculate diluted EPS
                    merely by adding shares to the denominator without
                    considering the related numerator effects.
                </p>

            </div>


            <h2>Options and warrants</h2>

            <p>
                Options and warrants can require a different method
                from convertible securities.
            </p>

            <p>
                Under the treasury stock method, the calculation considers
                assumed exercise and assumed use of proceeds to repurchase
                shares at the applicable average market price.
            </p>


            <div class="key-points">

                <h3>Very important</h3>

                <p>
                    Do not use one universal shortcut for every
                    potentially dilutive security.
                </p>

                <p>
                    Convertible securities and options or warrants
                    can require different EPS methods.
                </p>

            </div>


            <h2>Antidilution</h2>

            <p>
                A potentially dilutive security is not included in
                diluted EPS when its effect would be antidilutive.
            </p>

            <p>
                In other words, diluted EPS should reflect dilution,
                not securities that would increase EPS or otherwise
                produce an antidilutive result.
            </p>


            <div class="key-points">

                <h3>Intermediate-level takeaway</h3>

                <ol>
                    <li>Calculate Basic EPS correctly first.</li>
                    <li>Identify potentially dilutive securities.</li>
                    <li>Use the appropriate method for each security.</li>
                    <li>Exclude antidilutive effects.</li>
                    <li>Then determine Diluted EPS.</li>
                </ol>

            </div>


            <h2>We'll go deeper in FAR</h2>

            <p>
                At the CPA level, we will separately practice
                convertible debt, convertible preferred stock,
                options and warrants, treasury stock method calculations,
                if-converted calculations and antidilution.
            </p>

        `,
        {
            question:
                "Which statement about diluted EPS is correct?",

            answers: [
                "A. Every convertible security must always be included",
                "B. Potential common shares are considered, but antidilutive effects are excluded",
                "C. Diluted EPS always uses only actual shares outstanding",
                "D. Options and convertible bonds always use exactly the same calculation method"
            ],

            correctAnswer: 1,

            explanation:
                "Diluted EPS considers qualifying potentially dilutive common shares, while antidilutive effects are excluded."
        }
    );

    return;
}

if (moduleId === 9 && lessonId === 1) {

    showIntermediateLessonPage(
        9,
        1,
        "Book Income vs Taxable Income",
        `

            <h2>Two different systems</h2>

            <p>
                A company's income reported in its financial statements
                is not necessarily the same as its taxable income.
            </p>

            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>Book Income</h3>

                    <p>
                        Determined using financial accounting
                        principles for financial reporting.
                    </p>

                </div>

                <div class="comparison-card">

                    <h3>Taxable Income</h3>

                    <p>
                        Determined using applicable income tax laws
                        and regulations.
                    </p>

                </div>

            </div>


            <h2>Why can they differ?</h2>

            <p>
                Financial accounting rules and tax rules may recognize
                certain revenues or expenses differently.
            </p>

            <p>
                Sometimes the difference is only about
                <strong>timing</strong>.
            </p>

            <p>
                Other differences may never reverse.
            </p>


            <div class="example-box">

                <h3>Simple timing example</h3>

                <p>
                    Assume financial reporting recognizes an expense
                    of $10,000 this year.
                </p>

                <p>
                    Tax law does not allow the deduction until
                    a future year.
                </p>

                <p>
                    Book income and taxable income can therefore
                    differ this year even though the tax deduction
                    may occur later.
                </p>

            </div>


            <h2>Current income taxes</h2>

            <p>
                Taxable income is used in determining the company's
                current income tax obligation under the applicable
                tax law.
            </p>


            <div class="key-points">

                <h3>Foundation</h3>

                <p>
                    Book Income ≠ Automatically Taxable Income
                </p>

                <p>
                    The important question is:
                    <strong>Why are they different?</strong>
                </p>

            </div>

        `,
        {
            question:
                "Why can financial statement income differ from taxable income?",

            answers: [
                "A. Because financial reporting and tax rules may recognize items differently",
                "B. Because companies are never required to pay taxes",
                "C. Because taxable income always equals cash flow",
                "D. Because book income excludes all expenses"
            ],

            correctAnswer: 0,

            explanation:
                "Financial reporting rules and tax rules can differ in the timing or treatment of revenues and expenses."
        }
    );

    return;
}

if (moduleId === 9 && lessonId === 2) {

    showIntermediateLessonPage(
        9,
        2,
        "Temporary & Permanent Differences",
        `

            <h2>Temporary differences</h2>

            <p>
                Temporary differences arise when the financial reporting
                carrying amount of an asset or liability differs from
                its tax basis in a way that can affect future taxable
                or deductible amounts.
            </p>

            <p>
                The key idea is that the tax effect
                <strong>reverses in future periods</strong>.
            </p>


            <div class="example-box">

                <h3>Example — Different depreciation timing</h3>

                <p>
                    Financial reporting and tax reporting may use
                    different depreciation patterns.
                </p>

                <p>
                    This can cause book income and taxable income
                    to differ today.
                </p>

                <p>
                    But the timing difference can reverse over
                    the life of the asset.
                </p>

            </div>


            <h2>Permanent differences</h2>

            <p>
                Permanent differences affect book income or taxable
                income but do not reverse in future periods.
            </p>


            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>Temporary</h3>

                    <p>Timing difference</p>
                    <p>Future reversal</p>
                    <p>Can create deferred taxes</p>

                </div>

                <div class="comparison-card">

                    <h3>Permanent</h3>

                    <p>No future reversal</p>
                    <p>Does not create a deferred tax asset or liability</p>

                </div>

            </div>


            <div class="key-points">

                <h3>Critical distinction</h3>

                <p>
                    Temporary → think
                    <strong>future tax consequence</strong>.
                </p>

                <p>
                    Permanent → there is no future reversal
                    of that difference.
                </p>

            </div>

        `,
        {
            question:
                "Which statement best describes a temporary difference?",

            answers: [
                "A. A difference that can create future taxable or deductible amounts",
                "B. A difference that can never affect future periods",
                "C. A bookkeeping error",
                "D. A difference that always increases cash"
            ],

            correctAnswer: 0,

            explanation:
                "Temporary differences involve differences between book carrying amounts and tax bases that can result in future taxable or deductible amounts."
        }
    );

    return;
}

if (moduleId === 9 && lessonId === 3) {

    showIntermediateLessonPage(
        9,
        3,
        "Deferred Tax Assets & Liabilities",
        `

            <h2>Future tax consequences</h2>

            <p>
                Temporary differences can create future taxable
                amounts or future deductible amounts.
            </p>

            <p>
                This leads us to deferred tax liabilities and
                deferred tax assets.
            </p>


            <h2>Deferred Tax Liability</h2>

            <div class="key-points">

                <p>
                    A taxable temporary difference generally creates
                    a <strong>Deferred Tax Liability (DTL)</strong>.
                </p>

                <p>
                    Think:
                    <strong>more tax expected in a future period</strong>
                    because of the reversal.
                </p>

            </div>


            <h2>Deferred Tax Asset</h2>

            <div class="key-points">

                <p>
                    A deductible temporary difference generally creates
                    a <strong>Deferred Tax Asset (DTA)</strong>.
                </p>

                <p>
                    Think:
                    <strong>future tax deduction or tax benefit</strong>
                    associated with the reversal.
                </p>

            </div>


            <h2>Basic calculation</h2>

            <p>
                For our introductory examples, assume a single enacted
                tax rate applies when the temporary difference reverses.
            </p>

            <div class="formula-box">

                Deferred Tax Amount =
                Temporary Difference × Applicable Enacted Tax Rate

            </div>


            <h2>DTL example</h2>

            <p>
                Assume a taxable temporary difference is
                <strong>$50,000</strong>.
            </p>

            <p>
                Assume the enacted tax rate expected to apply when
                it reverses is <strong>25%</strong>.
            </p>

            <div class="formula-box">

                $50,000 × 25% = $12,500 DTL

            </div>


            <h2>DTA example</h2>

            <p>
                Assume a deductible temporary difference is
                <strong>$40,000</strong>.
            </p>

            <p>
                Assume the applicable enacted tax rate is
                <strong>25%</strong>.
            </p>

            <div class="formula-box">

                $40,000 × 25% = $10,000 DTA

            </div>


            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>DTL</h3>

                    <p>Taxable temporary difference</p>
                    <p>Future taxable amount</p>

                </div>

                <div class="comparison-card">

                    <h3>DTA</h3>

                    <p>Deductible temporary difference</p>
                    <p>Future deductible amount</p>

                </div>

            </div>


            <h2>Important caution</h2>

            <p>
                Deferred tax accounting can become considerably
                more complex than simply multiplying one difference
                by one rate.
            </p>

            <p>
                At CPA level, we will work with tax bases,
                multiple temporary differences, changes in enacted
                tax rates and the realizability of deferred tax assets.
            </p>


            <div class="key-points">

                <h3>For now memorize the direction</h3>

                <p>
                    Taxable temporary difference → DTL
                </p>

                <p>
                    Deductible temporary difference → DTA
                </p>

            </div>

        `,
        {
            question:
                "A deductible temporary difference is $80,000 and the applicable enacted tax rate is 25%. Ignoring other considerations, what deferred tax amount results?",

            answers: [
                "A. $20,000 Deferred Tax Asset",
                "B. $20,000 Deferred Tax Liability",
                "C. $80,000 Deferred Tax Asset",
                "D. $100,000 Deferred Tax Liability"
            ],

            correctAnswer: 0,

            explanation:
                "$80,000 × 25% = $20,000. A deductible temporary difference generally gives rise to a deferred tax asset."
        }
    );

    return;
}

if (moduleId === 9 && lessonId === 4) {

    showIntermediateLessonPage(
        9,
        4,
        "Income Tax Expense",
        `

            <h2>Current tax vs deferred tax</h2>

            <p>
                Income tax accounting can include both a current
                tax component and a deferred tax component.
            </p>


            <h2>Current tax</h2>

            <p>
                The current portion relates to taxes payable or
                refundable for the current year based on taxable income.
            </p>


            <div class="formula-box">

                Current Tax =
                Taxable Income × Applicable Current Tax Rate

            </div>


            <h2>Example</h2>

            <p>
                Assume taxable income is <strong>$400,000</strong>
                and the applicable tax rate is <strong>25%</strong>.
            </p>

            <div class="formula-box">

                $400,000 × 25% = $100,000

            </div>

            <p>
                Current income taxes payable are $100,000.
            </p>


            <h2>Deferred tax component</h2>

            <p>
                Temporary differences can cause deferred tax assets
                and deferred tax liabilities to change during the period.
            </p>

            <p>
                Those changes affect the deferred portion of
                income tax expense or benefit.
            </p>


            <h2>Simple example</h2>

            <p>
                Assume:
            </p>

            <div class="financial-example">

                <div>
                    <span>Current Tax Expense</span>
                    <strong>$100,000</strong>
                </div>

                <div>
                    <span>Increase in Net DTL</span>
                    <strong>$15,000</strong>
                </div>

            </div>

            <p>
                In this simplified example, the increase in the
                deferred tax liability produces deferred tax expense.
            </p>

            <div class="formula-box">

                $100,000 + $15,000
                = $115,000 Total Income Tax Expense

            </div>


            <h2>What if a deferred tax asset increases?</h2>

            <p>
                In a simplified situation, an increase in a deferred
                tax asset can create a deferred tax benefit.
            </p>


            <div class="example-box">

                <p>
                    Current tax expense = $100,000
                </p>

                <p>
                    Deferred tax benefit = $10,000
                </p>

                <div class="formula-box">

                    $100,000 − $10,000
                    = $90,000 Total Income Tax Expense

                </div>

            </div>


            <div class="key-points">

                <h3>Do not memorize an oversimplified sign rule</h3>

                <p>
                    At the CPA level, we will analyze the beginning
                    and ending deferred tax balances and determine
                    whether the change represents deferred tax
                    expense or benefit.
                </p>

                <p>
                    For now, understand that total income tax expense
                    can contain both current and deferred components.
                </p>

            </div>

        `,
        {
            question:
                "Current income tax expense is $70,000 and an increase in a deferred tax liability creates $12,000 of deferred tax expense. What is total income tax expense in this simplified example?",

            answers: [
                "A. $58,000",
                "B. $70,000",
                "C. $82,000",
                "D. $840,000"
            ],

            correctAnswer: 2,

            explanation:
                "$70,000 current tax expense + $12,000 deferred tax expense = $82,000 total income tax expense."
        }
    );

    return;
}

if (moduleId === 9 && lessonId === 5) {

    showIntermediateLessonPage(
        9,
        5,
        "Accounting Changes & Error Corrections",
        `

            <h2>Not every accounting change is treated the same</h2>

            <p>
                A major exam skill is identifying exactly
                what type of change occurred.
            </p>


            <div class="key-points">

                <h3>Main categories</h3>

                <ul>
                    <li>Change in accounting principle</li>
                    <li>Change in accounting estimate</li>
                    <li>Change in reporting entity</li>
                    <li>Correction of an error</li>
                </ul>

            </div>


            <h2>Change in accounting principle</h2>

            <p>
                This occurs when a company changes from one
                generally accepted accounting principle to another
                generally accepted accounting principle.
            </p>

            <p>
                When required and practicable, a change in accounting
                principle is generally applied
                <strong>retrospectively</strong>.
            </p>


            <div class="key-points">

                <h3>Retrospective application</h3>

                <p>
                    Prior-period financial statements presented are
                    generally adjusted as though the new principle
                    had been used in those periods, subject to the
                    applicable guidance and practicability rules.
                </p>

            </div>


            <h2>Change in accounting estimate</h2>

            <p>
                Estimates change because new information or
                experience becomes available.
            </p>

            <p>
                Changes in estimates are generally accounted for
                <strong>prospectively</strong>.
            </p>


            <div class="example-box">

                <h3>Example</h3>

                <p>
                    Equipment originally had an estimated useful life
                    of 10 years.
                </p>

                <p>
                    Based on new information, management changes its
                    estimate of the remaining useful life.
                </p>

                <p>
                    Prior financial statements are generally not rewritten
                    simply because the estimate changed.
                </p>

                <p>
                    The new estimate affects the current and future
                    periods as applicable.
                </p>

            </div>


            <h2>Change in reporting entity</h2>

            <p>
                A change in reporting entity generally requires
                retrospective application to financial statements
                of prior periods presented.
            </p>


            <h2>Error correction</h2>

            <p>
                An error is different from a legitimate change
                in estimate.
            </p>

            <p>
                Examples can include mathematical mistakes,
                incorrect application of accounting principles,
                or oversight or misuse of facts that existed
                when the financial statements were prepared.
            </p>


            <div class="key-points">

                <h3>Prior-period errors</h3>

                <p>
                    Material errors in previously issued financial
                    statements generally require correction through
                    restatement of prior-period financial statements
                    when presented, along with the appropriate
                    beginning-equity adjustment when necessary.
                </p>

            </div>


            <h2>Comparison</h2>

            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>Principle</h3>

                    <p>Generally retrospective</p>

                </div>

                <div class="comparison-card">

                    <h3>Estimate</h3>

                    <p>Prospective</p>

                </div>

            </div>

            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>Reporting Entity</h3>

                    <p>Generally retrospective</p>

                </div>

                <div class="comparison-card">

                    <h3>Error</h3>

                    <p>Prior-period correction / restatement</p>

                </div>

            </div>


            <div class="key-points">

                <h3>Important warning</h3>

                <p>
                    Some situations have special guidance.
                    Do not assume that every change involving an
                    accounting method automatically follows the
                    same treatment.
                </p>

            </div>

        `,
        {
            question:
                "A company revises the estimated remaining useful life of equipment because of new information. How is the change generally accounted for?",

            answers: [
                "A. Retrospectively by rewriting all prior years",
                "B. Prospectively in the current and future periods affected",
                "C. As a prior-period error",
                "D. By ignoring the new information"
            ],

            correctAnswer: 1,

            explanation:
                "A revision based on new information is generally a change in accounting estimate and is accounted for prospectively."
        }
    );

    return;
}

if (moduleId === 10 && lessonId === 1) {

    showIntermediateLessonPage(
        10,
        1,
        "Statement of Cash Flows Fundamentals",
        `

            <h2>What does the statement of cash flows show?</h2>

            <p>
                The statement of cash flows explains how cash and
                cash equivalents changed during a reporting period.
            </p>


            <h2>The three major categories</h2>

            <div class="key-points">

                <ol>
                    <li>Operating Activities</li>
                    <li>Investing Activities</li>
                    <li>Financing Activities</li>
                </ol>

            </div>


            <h2>Basic structure</h2>

            <div class="formula-box">

                Net Cash from Operating Activities
                +
                Net Cash from Investing Activities
                +
                Net Cash from Financing Activities
                =
                Net Change in Cash

            </div>

            <div class="formula-box">

                Beginning Cash
                +
                Net Change in Cash
                =
                Ending Cash

            </div>


            <h2>Example</h2>

            <div class="financial-example">

                <div>
                    <span>Operating Cash Flow</span>
                    <strong>$80,000</strong>
                </div>

                <div>
                    <span>Investing Cash Flow</span>
                    <strong>($30,000)</strong>
                </div>

                <div>
                    <span>Financing Cash Flow</span>
                    <strong>($10,000)</strong>
                </div>

            </div>

            <div class="formula-box">

                $80,000 − $30,000 − $10,000
                = $40,000 Net Increase in Cash

            </div>

            <p>
                If beginning cash was $25,000:
            </p>

            <div class="formula-box">

                $25,000 + $40,000
                = $65,000 Ending Cash

            </div>


            <h2>Cash flow is not the same as net income</h2>

            <p>
                Financial statements use accrual accounting,
                so revenue and expenses are not necessarily recognized
                in the same periods that cash is received or paid.
            </p>

            <p>
                Therefore, a company can report net income while
                experiencing a different amount of operating cash flow.
            </p>


            <div class="key-points">

                <h3>Remember</h3>

                <p>
                    Income Statement → profitability
                </p>

                <p>
                    Statement of Cash Flows → sources and uses of cash
                </p>

            </div>

        `,
        {
            question:
                "Operating cash flow is $90,000, investing cash flow is negative $40,000, and financing cash flow is $15,000. What is the net change in cash?",

            answers: [
                "A. $35,000 increase",
                "B. $65,000 increase",
                "C. $115,000 increase",
                "D. $145,000 increase"
            ],

            correctAnswer: 1,

            explanation:
                "$90,000 − $40,000 + $15,000 = $65,000 net increase in cash."
        }
    );

    return;
}

if (moduleId === 10 && lessonId === 2) {

    showIntermediateLessonPage(
        10,
        2,
        "Operating, Investing & Financing Activities",
        `

            <h2>Operating activities</h2>

            <p>
                Operating activities generally include cash effects
                associated with transactions that enter into the
                determination of net income, except where classified
                elsewhere under applicable guidance.
            </p>

            <div class="key-points">

                <h3>Common examples</h3>

                <ul>
                    <li>Cash collected from customers</li>
                    <li>Cash paid to suppliers</li>
                    <li>Cash paid to employees</li>
                    <li>Other operating cash receipts and payments</li>
                </ul>

            </div>


            <h2>Investing activities</h2>

            <p>
                Investing activities generally involve acquiring
                and disposing of long-term assets and certain investments.
            </p>

            <div class="key-points">

                <h3>Examples</h3>

                <ul>
                    <li>Purchase of property, plant and equipment</li>
                    <li>Cash proceeds from sale of equipment</li>
                    <li>Making certain loans to other entities</li>
                    <li>Collection of principal on certain loans</li>
                </ul>

            </div>


            <h2>Financing activities</h2>

            <p>
                Financing activities generally involve obtaining
                resources from owners and creditors and returning
                resources to them.
            </p>

            <div class="key-points">

                <h3>Examples</h3>

                <ul>
                    <li>Issuing common stock for cash</li>
                    <li>Borrowing cash through debt</li>
                    <li>Repaying debt principal</li>
                    <li>Repurchasing company shares for cash</li>
                    <li>Cash dividends paid to shareholders</li>
                </ul>

            </div>


            <h2>Classification example</h2>

            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>Buy Equipment</h3>

                    <p>Investing outflow</p>

                </div>

                <div class="comparison-card">

                    <h3>Issue Stock</h3>

                    <p>Financing inflow</p>

                </div>

            </div>

            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>Collect from Customers</h3>

                    <p>Operating inflow</p>

                </div>

                <div class="comparison-card">

                    <h3>Repay Loan Principal</h3>

                    <p>Financing outflow</p>

                </div>

            </div>


            <div class="key-points">

                <h3>CPA habit</h3>

                <p>
                    Don't classify a cash flow merely because
                    "cash went in" or "cash went out."
                </p>

                <p>
                    Ask what economic activity caused the cash flow.
                </p>

            </div>

        `,
        {
            question:
                "A company pays $70,000 cash to purchase equipment. How is the payment generally classified on the statement of cash flows?",

            answers: [
                "A. Operating inflow",
                "B. Operating outflow",
                "C. Investing outflow",
                "D. Financing outflow"
            ],

            correctAnswer: 2,

            explanation:
                "Cash paid to acquire property, plant and equipment is generally an investing cash outflow."
        }
    );

    return;
}

if (moduleId === 10 && lessonId === 3) {

    showIntermediateLessonPage(
        10,
        3,
        "Indirect Method",
        `

            <h2>Purpose of the indirect method</h2>

            <p>
                Under the indirect method, the operating section begins
                with net income and reconciles it to net cash provided
                by operating activities.
            </p>


            <div class="formula-box">

                Net Income
                + / − Adjustments
                =
                Net Cash from Operating Activities

            </div>


            <h2>Noncash expenses</h2>

            <p>
                Some expenses reduce net income without using
                operating cash in the current period.
            </p>

            <p>
                Depreciation expense is a classic example.
            </p>

            <div class="formula-box">

                Net Income
                + Depreciation Expense

            </div>


            <h2>Changes in operating assets</h2>

            <div class="key-points">

                <p>
                    Increase in operating asset → generally subtract
                </p>

                <p>
                    Decrease in operating asset → generally add
                </p>

            </div>


            <div class="example-box">

                <h3>Accounts Receivable</h3>

                <p>
                    If Accounts Receivable increases, recognized revenue
                    exceeded cash collected from customers by that increase.
                </p>

                <p>
                    Therefore, the increase is generally subtracted
                    in the indirect operating reconciliation.
                </p>

            </div>


            <h2>Changes in operating liabilities</h2>

            <div class="key-points">

                <p>
                    Increase in operating liability → generally add
                </p>

                <p>
                    Decrease in operating liability → generally subtract
                </p>

            </div>


            <h2>Full example</h2>

            <div class="financial-example">

                <div>
                    <span>Net Income</span>
                    <strong>$100,000</strong>
                </div>

                <div>
                    <span>Depreciation Expense</span>
                    <strong>$20,000</strong>
                </div>

                <div>
                    <span>Increase in A/R</span>
                    <strong>$15,000</strong>
                </div>

                <div>
                    <span>Increase in A/P</span>
                    <strong>$8,000</strong>
                </div>

            </div>


            <div class="formula-box">

                $100,000
                + $20,000
                − $15,000
                + $8,000
                =
                $113,000

            </div>

            <p>
                Net cash provided by operating activities is
                <strong>$113,000</strong>.
            </p>


            <h2>Why does Accounts Payable get added?</h2>

            <p>
                An increase in Accounts Payable means some expenses
                recognized in arriving at net income have not yet
                required cash payment.
            </p>

            <p>
                Therefore, the increase is generally added back
                in the reconciliation.
            </p>


            <div class="key-points">

                <h3>Starting pattern</h3>

                <p>
                    Operating Asset ↑ → subtract
                </p>

                <p>
                    Operating Asset ↓ → add
                </p>

                <p>
                    Operating Liability ↑ → add
                </p>

                <p>
                    Operating Liability ↓ → subtract
                </p>

            </div>


            <h2>But don't memorize blindly</h2>

            <p>
                Later CPA questions will include gains and losses,
                multiple working-capital accounts, noncash items and
                transactions requiring careful classification.
            </p>

            <p>
                The goal is to understand why each adjustment converts
                accrual-basis net income toward operating cash flow.
            </p>

        `,
        {
            question:
                "Net income is $150,000. Depreciation expense is $25,000, Accounts Receivable increased by $20,000, and Accounts Payable decreased by $10,000. Using the indirect method and ignoring other items, what is net cash provided by operating activities?",

            answers: [
                "A. $145,000",
                "B. $155,000",
                "C. $165,000",
                "D. $205,000"
            ],

            correctAnswer: 0,

            explanation:
                "$150,000 + $25,000 − $20,000 − $10,000 = $145,000."
        }
    );

    return;
}

if (moduleId === 10 && lessonId === 4) {

    showIntermediateLessonPage(
        10,
        4,
        "Noncash Investing & Financing Activities",
        `

            <h2>Not every important transaction uses cash</h2>

            <p>
                Some investing and financing activities can significantly
                affect a company's financial position without causing
                cash to be received or paid at that time.
            </p>

            <p>
                Because no cash moved, these transactions are not reported
                as cash inflows or cash outflows in the main body of the
                statement of cash flows.
            </p>


            <h2>Example — Equipment acquired by issuing debt</h2>

            <p>
                Assume a company acquires equipment worth
                <strong>$100,000</strong> by issuing a
                <strong>$100,000 note payable</strong>.
            </p>

            <div class="financial-example">

                <div>
                    <span>Equipment</span>
                    <strong>+$100,000</strong>
                </div>

                <div>
                    <span>Note Payable</span>
                    <strong>+$100,000</strong>
                </div>

                <div class="financial-total">
                    <span>Cash Effect</span>
                    <strong>$0</strong>
                </div>

            </div>


            <p>
                This is an important investing and financing transaction,
                but no cash was exchanged at acquisition.
            </p>


            <h2>Another example — Debt converted to stock</h2>

            <p>
                Suppose $50,000 of debt is converted into common stock.
            </p>

            <div class="formula-box">

                Debt ↓ $50,000
                +
                Equity ↑ $50,000
                +
                Cash Effect = $0

            </div>


            <h2>Where does this information go?</h2>

            <p>
                Significant noncash investing and financing activities
                are disclosed so financial statement users can understand
                important transactions that are not visible from cash
                receipts and payments alone.
            </p>


            <div class="key-points">

                <h3>CPA trap</h3>

                <p>
                    A transaction can be an investing or financing
                    activity economically without creating a cash flow.
                </p>

                <p>
                    If no cash or cash equivalent moved, do not invent
                    a cash inflow and cash outflow merely to put the
                    transaction into the main cash flow totals.
                </p>

            </div>

        `,
        {
            question:
                "A company acquires $200,000 of equipment by issuing a $200,000 long-term note directly to the seller. How much cash flow results from the acquisition at that time?",

            answers: [
                "A. $200,000 investing outflow",
                "B. $200,000 financing inflow",
                "C. $400,000 total cash flow",
                "D. $0"
            ],

            correctAnswer: 3,

            explanation:
                "The equipment was acquired by issuing debt rather than paying cash. The transaction is a significant noncash investing and financing activity, so the immediate cash effect is $0."
        }
    );

    return;
}

if (moduleId === 10 && lessonId === 5) {

    showIntermediateLessonPage(
        10,
        5,
        "Comprehensive Income & OCI",
        `

            <h2>Net income is not always the whole story</h2>

            <p>
                Certain gains, losses and other items are recognized
                outside net income and instead enter
                Other Comprehensive Income, or OCI.
            </p>


            <div class="formula-box">

                Comprehensive Income
                =
                Net Income
                +
                Other Comprehensive Income

            </div>


            <h2>OCI vs AOCI</h2>

            <div class="comparison-grid">

                <div class="comparison-card">

                    <h3>OCI</h3>

                    <p>
                        Other Comprehensive Income relates to
                        qualifying items recognized during the period.
                    </p>

                </div>

                <div class="comparison-card">

                    <h3>AOCI</h3>

                    <p>
                        Accumulated Other Comprehensive Income is
                        the cumulative balance reported within equity.
                    </p>

                </div>

            </div>


            <h2>Simple example</h2>

            <p>
                Assume:
            </p>

            <div class="financial-example">

                <div>
                    <span>Net Income</span>
                    <strong>$200,000</strong>
                </div>

                <div>
                    <span>Other Comprehensive Income</span>
                    <strong>$30,000</strong>
                </div>

            </div>

            <div class="formula-box">

                $200,000 + $30,000
                = $230,000 Comprehensive Income

            </div>


            <h2>What types of items can appear in OCI?</h2>

            <p>
                Depending on the applicable accounting guidance,
                OCI can include certain items involving:
            </p>

            <div class="key-points">

                <ul>
                    <li>Certain unrealized gains and losses on debt securities</li>
                    <li>Certain foreign currency translation adjustments</li>
                    <li>Certain pension and postretirement benefit adjustments</li>
                    <li>Certain gains and losses associated with qualifying cash flow hedges</li>
                </ul>

            </div>


            <h2>Why AOCI matters</h2>

            <p>
                OCI is a period measure.
            </p>

            <p>
                AOCI represents accumulated OCI amounts reported
                as a component of stockholders' equity.
            </p>


            <div class="example-box">

                <h3>Simple AOCI roll-forward</h3>

                <p>
                    Beginning AOCI = $15,000
                </p>

                <p>
                    Assume current-period OCI increases AOCI by $8,000,
                    with no other AOCI adjustments in this simple example.
                </p>

                <div class="formula-box">

                    $15,000 + $8,000
                    = $23,000 Ending AOCI

                </div>

            </div>


            <h2>Reclassification</h2>

            <p>
                Some amounts initially recognized in OCI can later
                be reclassified into net income when the applicable
                accounting requirements are satisfied.
            </p>

            <p>
                This prevents simply treating every OCI amount as
                permanently excluded from net income.
            </p>


            <div class="key-points">

                <h3>Keep the three concepts separate</h3>

                <p>
                    <strong>Net Income</strong> — income statement measure.
                </p>

                <p>
                    <strong>OCI</strong> — qualifying current-period items
                    outside net income.
                </p>

                <p>
                    <strong>AOCI</strong> — cumulative equity balance
                    associated with OCI.
                </p>

            </div>


            <h2>Intermediate Accounting complete</h2>

            <p>
                You have now reached the end of our Intermediate
                Accounting learning modules.
            </p>

            <p>
                The next stage will build on these foundations at
                CPA exam depth.
            </p>

        `,
        {
            question:
                "A company reports net income of $450,000 and positive other comprehensive income of $25,000. What is comprehensive income?",

            answers: [
                "A. $425,000",
                "B. $450,000",
                "C. $475,000",
                "D. $11,250,000"
            ],

            correctAnswer: 2,

            explanation:
                "Comprehensive income = Net income + OCI = $450,000 + $25,000 = $475,000."
        }
    );

    return;
}

alert("We have not built this lesson yet.");

}

function showIntermediateLessonPage(
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
                onclick="checkIntermediateAnswer(
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
                    Intermediate Accounting · Module ${moduleId}
                </p>

            </div>

            <button class="back-button"
                    onclick="showIntermediateModule(${moduleId})">

                ← Back to Module

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
                    onclick="completeIntermediateLesson(
                        ${moduleId},
                        ${lessonId}
                    )">

                    Complete Lesson

                </button>

            </div>


        </section>

    `;


    window.currentIntermediateQuiz = quiz;

}
function checkIntermediateAnswer(
    button,
    selectedAnswer,
    correctAnswer
) {

    const quiz =
        window.currentIntermediateQuiz;


    const result =
        document.getElementById("quiz-result");


    const buttons =
        document.querySelectorAll(".answer-button");


    buttons.forEach(function(answerButton) {
        answerButton.disabled = true;
    });


    if (selectedAnswer === correctAnswer) {

        button.classList.add("correct-answer");

        result.innerHTML = `

            <div class="result-correct">

                Correct! ${quiz.explanation}

            </div>

        `;

    } else {

        button.classList.add("wrong-answer");

        buttons[
            correctAnswer
        ].classList.add("correct-answer");


        result.innerHTML = `

            <div class="result-wrong">

                Incorrect. ${quiz.explanation}

            </div>

        `;

    }

}
function completeIntermediateLesson(
    moduleId,
    lessonId
) {

    localStorage.setItem(

        "intermediateModule" +
        moduleId +
        "Lesson" +
        lessonId,

        "true"

    );


    showIntermediateModule(moduleId);

}
const intermediateModuleQuizzes = {

    1: [

    {
        topic: "Financial Reporting Environment",
        question:
            "What is a primary purpose of general-purpose financial reporting?",

        answers: [
            "To guarantee investors earn a return",
            "To provide useful financial information to users making decisions",
            "To calculate only income taxes",
            "To record only cash transactions"
        ],

        correctAnswer: 1,

        explanation:
            "General-purpose financial reporting provides useful financial information to investors, creditors and other users making economic decisions."
    },

    {
        topic: "Financial Reporting Environment",
        question:
            "Which group is most likely to use financial statements when deciding whether to lend money to a company?",

        answers: [
            "Creditors",
            "Customers only",
            "Employees only",
            "Competitors only"
        ],

        correctAnswer: 0,

        explanation:
            "Creditors use financial information to evaluate matters such as the company's financial position and ability to repay obligations."
    },

    {
        topic: "Accrual Accounting",
        question:
            "A company performs $15,000 of services in December but collects the cash in January. Under accrual accounting, when is revenue generally recognized?",

        answers: [
            "December",
            "January",
            "Half in December and half in January",
            "Only after year-end financial statements are issued"
        ],

        correctAnswer: 0,

        explanation:
            "Under accrual accounting, revenue is recognized when earned rather than simply when cash is collected."
    },

    {
        topic: "Accrual Accounting",
        question:
            "Employees earn $8,000 of wages before year-end but will be paid next year. What should generally be recognized at year-end?",

        answers: [
            "No expense until cash is paid",
            "Wages Expense and Wages Payable",
            "Cash and Wages Revenue",
            "Accounts Receivable and Revenue"
        ],

        correctAnswer: 1,

        explanation:
            "The employees have already performed the work, so the company recognizes Wages Expense and a Wages Payable liability."
    },

    {
        topic: "Qualitative Characteristics",
        question:
            "Which qualitative characteristic means financial information is capable of making a difference in users' decisions?",

        answers: [
            "Relevance",
            "Consistency",
            "Verifiability",
            "Understandability"
        ],

        correctAnswer: 0,

        explanation:
            "Relevant information is capable of making a difference in users' decisions."
    },

    {
        topic: "Qualitative Characteristics",
        question:
            "Faithful representation is most closely associated with information that is:",

        answers: [
            "Complete, neutral and free from material error",
            "Guaranteed to predict the future",
            "Always reported at market value",
            "Useful only to management"
        ],

        correctAnswer: 0,

        explanation:
            "Faithful representation focuses on information that is complete, neutral and free from material error."
    },

    {
        topic: "Financial Statement Elements",
        question:
            "Which financial statement element represents a present obligation of an entity arising from past events?",

        answers: [
            "Asset",
            "Liability",
            "Revenue",
            "Gain"
        ],

        correctAnswer: 1,

        explanation:
            "A liability represents an obligation of the entity arising from past events."
    },

    {
        topic: "Financial Statement Elements",
        question:
            "Which equation represents the basic relationship among assets, liabilities and equity?",

        answers: [
            "Assets = Liabilities + Equity",
            "Assets + Liabilities = Equity",
            "Revenue = Assets − Liabilities",
            "Assets = Revenue + Expenses"
        ],

        correctAnswer: 0,

        explanation:
            "The accounting equation is Assets = Liabilities + Equity."
    },

    {
        topic: "Present Value",
        question:
            "A company will receive $21,000 exactly one year from today. If the applicable annual discount rate is 5%, what is the present value?",

        answers: [
            "$20,000",
            "$21,000",
            "$22,050",
            "$19,950"
        ],

        correctAnswer: 0,

        explanation:
            "$21,000 ÷ 1.05 = $20,000."
    },

    {
        topic: "Present Value",
        question:
            "Why is a future cash payment discounted when calculating present value?",

        answers: [
            "Because money received or paid in the future is not economically equivalent to the same amount today",
            "Because every future payment must be reduced by exactly 50%",
            "Because present value ignores interest rates",
            "Because future cash flows are never recorded"
        ],

        correctAnswer: 0,

        explanation:
            "Present value reflects the time value of money, recognizing that cash amounts at different points in time are not economically equivalent."
    }

],

    2: [

        {
            topic: "Cash & Cash Equivalents",
            question:
                "Which item is most likely to qualify as a cash equivalent?",

            answers: [
                "Common stock held for five years",
                "A Treasury bill purchased with two months remaining to maturity",
                "Accounts Receivable",
                "A five-year corporate bond"
            ],

            correctAnswer: 1,

            explanation:
                "Cash equivalents are highly liquid short-term investments, generally with original maturities of three months or less."
        },

        {
            topic: "Cash & Cash Equivalents",
            question:
                "Which item would generally NOT be considered cash?",

            answers: [
                "Currency",
                "Checking account balance",
                "Postdated customer check",
                "Undeposited valid customer check"
            ],

            correctAnswer: 2,

            explanation:
                "A postdated check is generally not available for immediate use and is not normally treated as cash."
        },

        {
            topic: "Bank Reconciliation",
            question:
                "A bank statement shows $25,000. Deposits in transit are $4,000 and outstanding checks are $6,000. What is the adjusted bank balance?",

            answers: [
                "$15,000",
                "$23,000",
                "$27,000",
                "$35,000"
            ],

            correctAnswer: 1,

            explanation:
                "$25,000 + $4,000 − $6,000 = $23,000."
        },

        {
            topic: "Bank Reconciliation",
            question:
                "Which item usually requires a book-side journal entry?",

            answers: [
                "Deposit in transit",
                "Outstanding check",
                "Bank service charge",
                "Check already recorded correctly by the company"
            ],

            correctAnswer: 2,

            explanation:
                "A bank service charge may appear first on the bank statement and therefore requires the company to record it."
        },

        {
            topic: "Accounts Receivable",
            question:
                "A company provides $9,000 of services on account. Which account is debited?",

            answers: [
                "Cash",
                "Accounts Receivable",
                "Service Revenue",
                "Accounts Payable"
            ],

            correctAnswer: 1,

            explanation:
                "Accounts Receivable increases because the customer owes the company money."
        },

        {
            topic: "Accounts Receivable",
            question:
                "When a customer pays an existing Accounts Receivable balance, what happens?",

            answers: [
                "Cash increases and Accounts Receivable decreases",
                "Revenue increases again",
                "Accounts Payable decreases",
                "Expense increases"
            ],

            correctAnswer: 0,

            explanation:
                "Collection increases Cash and decreases Accounts Receivable. Revenue was recognized earlier."
        },

        {
            topic: "Credit Losses",
            question:
                "Accounts Receivable is $120,000 and the Allowance for Credit Losses is $7,000. What is net Accounts Receivable?",

            answers: [
                "$113,000",
                "$120,000",
                "$127,000",
                "$7,000"
            ],

            correctAnswer: 0,

            explanation:
                "Net Accounts Receivable equals $120,000 − $7,000 = $113,000."
        },

        {
            topic: "Credit Losses",
            question:
                "Under the allowance method, writing off a specific uncollectible account generally does what?",

            answers: [
                "Creates a new credit loss expense immediately",
                "Debits Allowance for Credit Losses and credits Accounts Receivable",
                "Debits Cash and credits Revenue",
                "Increases net Accounts Receivable"
            ],

            correctAnswer: 1,

            explanation:
                "The write-off reduces both Accounts Receivable and the allowance. The expected loss was generally recognized earlier."
        },

        {
            topic: "Notes Receivable",
            question:
                "How much interest is earned on a $40,000, 6% note held for six months?",

            answers: [
                "$1,200",
                "$2,400",
                "$4,800",
                "$600"
            ],

            correctAnswer: 0,

            explanation:
                "$40,000 × 6% × 6/12 = $1,200."
        },

        {
            topic: "Notes Receivable",
            question:
                "A $10,000, 8%, one-year note matures. How much total cash is collected if all interest is paid at maturity?",

            answers: [
                "$10,000",
                "$10,080",
                "$10,800",
                "$18,000"
            ],

            correctAnswer: 2,

            explanation:
                "$10,000 principal + $800 interest = $10,800."
        }

    ],

    3: [

    {
        topic: "Inventory Basics",
        question:
            "Beginning inventory is $30,000, purchases are $90,000 and ending inventory is $25,000. What is COGS?",

        answers: [
            "$65,000",
            "$95,000",
            "$115,000",
            "$145,000"
        ],

        correctAnswer: 1,

        explanation:
            "$30,000 + $90,000 − $25,000 = $95,000."
    },

    {
        topic: "Inventory Systems",
        question:
            "Which inventory system continuously updates inventory records as transactions occur?",

        answers: [
            "Periodic",
            "Perpetual",
            "Cash basis",
            "Accrual adjustment"
        ],

        correctAnswer: 1,

        explanation:
            "A perpetual inventory system continuously updates inventory records."
    },

    {
        topic: "FIFO",
        question:
            "Inventory consists of 50 units at $10 followed by 50 units at $14. If 60 units are sold using FIFO, what is COGS?",

        answers: [
            "$500",
            "$600",
            "$640",
            "$840"
        ],

        correctAnswer: 2,

        explanation:
            "FIFO uses 50 × $10 = $500 plus 10 × $14 = $140. Total COGS = $640."
    },

    {
        topic: "FIFO",
        question:
            "Under FIFO, which costs generally remain in ending inventory?",

        answers: [
            "The oldest costs",
            "The newest costs",
            "Only average costs",
            "No costs"
        ],

        correctAnswer: 1,

        explanation:
            "FIFO assigns older costs to COGS first, leaving newer costs in ending inventory."
    },

    {
        topic: "LIFO",
        question:
            "Inventory consists of 100 units at $8 followed by 100 units at $11. If 120 units are sold using LIFO, what is COGS?",

        answers: [
            "$960",
            "$1,100",
            "$1,260",
            "$1,360"
        ],

        correctAnswer: 2,

        explanation:
            "LIFO uses 100 × $11 = $1,100 plus 20 × $8 = $160. Total COGS = $1,260."
    },

    {
        topic: "LIFO",
        question:
            "When inventory costs are rising, LIFO generally produces what compared with FIFO?",

        answers: [
            "Lower COGS",
            "Higher COGS",
            "Exactly the same COGS in every case",
            "Zero ending inventory"
        ],

        correctAnswer: 1,

        explanation:
            "With rising costs, LIFO generally assigns newer, higher costs to COGS."
    },

    {
        topic: "Weighted Average",
        question:
            "A company has 100 units costing $6 and 200 units costing $9. What is weighted-average cost per unit?",

        answers: [
            "$7",
            "$8",
            "$9",
            "$15"
        ],

        correctAnswer: 1,

        explanation:
            "Total cost is $2,400. $2,400 ÷ 300 units = $8 per unit."
    },

    {
        topic: "Weighted Average",
        question:
            "If weighted-average cost is $15 per unit and 80 units remain, what is ending inventory?",

        answers: [
            "$95",
            "$1,000",
            "$1,200",
            "$1,500"
        ],

        correctAnswer: 2,

        explanation:
            "80 units × $15 = $1,200."
    },

    {
        topic: "Inventory Valuation",
        question:
            "Inventory has a cost of $40,000 and an applicable net realizable value of $37,000. If the lower amount is required, at what amount is inventory reported?",

        answers: [
            "$3,000",
            "$37,000",
            "$40,000",
            "$77,000"
        ],

        correctAnswer: 1,

        explanation:
            "Under a lower-of-cost-and-NRV comparison, the lower amount is $37,000."
    },

    {
        topic: "Inventory Errors",
        question:
            "If ending inventory is understated, what happens to current-period net income?",

        answers: [
            "Net income is overstated",
            "Net income is understated",
            "Net income is unaffected",
            "Revenue becomes understated"
        ],

        correctAnswer: 1,

        explanation:
            "Understated ending inventory causes COGS to be overstated, which causes net income to be understated."
    }

],

4: [

    {
        topic: "PPE Acquisition",
        question:
            "Equipment costs $70,000, freight is $3,000 and installation is $5,000. What amount should initially be capitalized?",

        answers: [
            "$70,000",
            "$73,000",
            "$75,000",
            "$78,000"
        ],

        correctAnswer: 3,

        explanation:
            "$70,000 + $3,000 + $5,000 = $78,000."
    },

    {
        topic: "PPE Acquisition",
        question:
            "Which asset is generally not depreciated?",

        answers: [
            "Building",
            "Equipment",
            "Land",
            "Vehicle"
        ],

        correctAnswer: 2,

        explanation:
            "Land generally has an indefinite useful life and is normally not depreciated."
    },

    {
        topic: "Depreciation",
        question:
            "An asset costs $80,000, has a $5,000 residual value and a 5-year useful life. What is annual straight-line depreciation?",

        answers: [
            "$15,000",
            "$16,000",
            "$17,000",
            "$75,000"
        ],

        correctAnswer: 0,

        explanation:
            "($80,000 − $5,000) ÷ 5 = $15,000."
    },

    {
        topic: "Depreciation",
        question:
            "Which depreciation method is based primarily on actual activity or usage?",

        answers: [
            "Straight-line",
            "Units-of-production",
            "Double-declining balance",
            "Cash basis"
        ],

        correctAnswer: 1,

        explanation:
            "Units-of-production bases depreciation on actual usage or production."
    },

    {
        topic: "Estimate Changes",
        question:
            "How is a change in an asset's estimated useful life generally handled?",

        answers: [
            "By restating all prior periods",
            "Prospectively",
            "By ignoring the change",
            "By recording revenue"
        ],

        correctAnswer: 1,

        explanation:
            "Changes in accounting estimates are generally applied prospectively."
    },

    {
        topic: "Estimate Changes",
        question:
            "An asset has a carrying amount of $48,000 and a revised remaining useful life of 4 years with no residual value. What is annual straight-line depreciation going forward?",

        answers: [
            "$6,000",
            "$12,000",
            "$16,000",
            "$48,000"
        ],

        correctAnswer: 1,

        explanation:
            "$48,000 ÷ 4 = $12,000 per year."
    },

    {
        topic: "PPE Disposal",
        question:
            "An asset cost $100,000 and accumulated depreciation is $70,000. What is its carrying amount?",

        answers: [
            "$30,000",
            "$70,000",
            "$100,000",
            "$170,000"
        ],

        correctAnswer: 0,

        explanation:
            "$100,000 − $70,000 = $30,000."
    },

    {
        topic: "PPE Disposal",
        question:
            "An asset with a $24,000 carrying amount is sold for $20,000. What is recognized?",

        answers: [
            "$4,000 gain",
            "$4,000 loss",
            "$20,000 gain",
            "No gain or loss"
        ],

        correctAnswer: 1,

        explanation:
            "$20,000 proceeds − $24,000 carrying amount = $4,000 loss."
    },

    {
        topic: "Impairment",
        question:
            "What is the general effect of recognizing an impairment loss on a long-lived asset?",

        answers: [
            "Its carrying amount increases",
            "Its carrying amount decreases",
            "Revenue automatically increases",
            "Its accumulated depreciation becomes zero"
        ],

        correctAnswer: 1,

        explanation:
            "An impairment loss generally reduces the asset's carrying amount."
    },

    {
        topic: "Asset Retirement",
        question:
            "An asset retirement obligation is most closely associated with:",

        answers: [
            "A legal obligation related to future retirement or restoration activities",
            "Ordinary payroll",
            "Customer receivables",
            "Inventory purchases"
        ],

        correctAnswer: 0,

        explanation:
            "Asset retirement obligations arise from certain legal obligations related to retiring assets or restoring sites."
    }

],

    5: [

        {
            topic: "Current Liabilities",
            question:
                "Employees have earned $9,000 of wages by year-end, but the company will pay them next year. What should be recognized at year-end?",

            answers: [
                "Debit Cash; Credit Wages Payable",
                "Debit Wages Expense; Credit Wages Payable",
                "Debit Wages Payable; Credit Wages Expense",
                "No entry until cash is paid"
            ],

            correctAnswer: 1,

            explanation:
                "The wages were incurred in the current period. Wages Expense is debited and Wages Payable is credited."
        },

        {
            topic: "Current Liabilities",
            question:
                "A $120,000 note bears 6% annual interest. How much interest accrues over three months?",

            answers: [
                "$1,800",
                "$3,600",
                "$7,200",
                "$21,600"
            ],

            correctAnswer: 0,

            explanation:
                "$120,000 × 6% × 3/12 = $1,800."
        },

        {
            topic: "Contingencies",
            question:
                "Which two factors are especially important when evaluating a potential loss contingency?",

            answers: [
                "Revenue and cash balance",
                "Likelihood of loss and ability to estimate the amount",
                "Inventory and accounts receivable",
                "Tax rate and depreciation method"
            ],

            correctAnswer: 1,

            explanation:
                "Loss contingency accounting depends heavily on the likelihood of the loss and whether the amount can be reasonably estimated."
        },

        {
            topic: "Bond Basics",
            question:
                "A $300,000 bond has a 4% annual stated rate and pays interest semiannually. What cash interest is paid every six months?",

            answers: [
                "$6,000",
                "$12,000",
                "$24,000",
                "$3,000"
            ],

            correctAnswer: 0,

            explanation:
                "$300,000 × 4% × 6/12 = $6,000."
        },

        {
            topic: "Bond Basics",
            question:
                "Which rate determines the contractual cash interest paid to bondholders?",

            answers: [
                "Market rate",
                "Effective rate",
                "Stated or coupon rate",
                "Prime rate"
            ],

            correctAnswer: 2,

            explanation:
                "Cash interest is based on face value multiplied by the stated or coupon rate."
        },

        {
            topic: "Premiums & Discounts",
            question:
                "A bond's stated rate is 5%, while the market rate at issuance is 7%. The bond will generally issue at:",

            answers: [
                "A premium",
                "A discount",
                "Exactly face value",
                "Zero carrying amount"
            ],

            correctAnswer: 1,

            explanation:
                "Because the bond pays less interest than investors demand, investors generally pay less than face value."
        },

        {
            topic: "Premiums & Discounts",
            question:
                "A bond issued at a discount will generally have a carrying amount that does what over time as the discount is amortized?",

            answers: [
                "Decreases toward zero",
                "Increases toward face value",
                "Remains permanently unchanged",
                "Increases above face value"
            ],

            correctAnswer: 1,

            explanation:
                "Discount amortization increases the bond's carrying amount toward face value."
        },

        {
            topic: "Effective Interest",
            question:
                "A bond has a $100,000 face value, a 6% stated annual rate, an 8% effective annual rate, and a beginning carrying amount of $95,000. Assuming annual interest payments, what is interest expense?",

            answers: [
                "$5,700",
                "$6,000",
                "$7,600",
                "$8,000"
            ],

            correctAnswer: 2,

            explanation:
                "Effective-interest expense equals beginning carrying amount × effective rate: $95,000 × 8% = $7,600."
        },

        {
            topic: "Effective Interest",
            question:
                "Using the same bond: face value $100,000, stated rate 6%, effective rate 8%, and beginning carrying amount $95,000. What is discount amortization for the year?",

            answers: [
                "$1,600",
                "$6,000",
                "$7,600",
                "$5,000"
            ],

            correctAnswer: 0,

            explanation:
                "Interest expense is $7,600 and cash interest is $6,000. The difference, $1,600, is discount amortization."
        },

        {
            topic: "Effective Interest",
            question:
                "A premium bond has a $100,000 face value, a 10% stated rate, an 8% effective rate, and a beginning carrying amount of $105,000. Assuming annual payments, what is the ending carrying amount after one year?",

            answers: [
                "$106,600",
                "$105,000",
                "$103,400",
                "$100,000"
            ],

            correctAnswer: 2,

            explanation:
                "Cash interest is $10,000. Interest expense is $105,000 × 8% = $8,400. Premium amortization is $1,600, so carrying amount decreases to $103,400."
        }

    ],

    6: [

    {
        topic: "Revenue Recognition Overview",
        question:
            "Which statement best describes the core principle of revenue recognition?",

        answers: [
            "Revenue is recognized whenever cash is received",
            "Revenue is recognized when or as promised goods or services are transferred to customers",
            "Revenue is recognized when management prepares financial statements",
            "Revenue is recognized only at year-end"
        ],

        correctAnswer: 1,

        explanation:
            "Revenue is recognized when or as performance obligations are satisfied by transferring promised goods or services to customers."
    },

    {
        topic: "Five-Step Model",
        question:
            "Which step comes immediately after identifying the performance obligations in a contract?",

        answers: [
            "Recognize revenue",
            "Determine the transaction price",
            "Collect cash",
            "Prepare the income statement"
        ],

        correctAnswer: 1,

        explanation:
            "Step 3 of the revenue recognition model is determining the transaction price."
    },

    {
        topic: "Contracts",
        question:
            "Which item is an important consideration when determining whether an arrangement qualifies as a contract with a customer?",

        answers: [
            "The company must already have received all cash",
            "The parties' rights and payment terms can be identified",
            "The contract must contain exactly one performance obligation",
            "Revenue must already have been recognized"
        ],

        correctAnswer: 1,

        explanation:
            "Identifiable rights and payment terms are among the important criteria used when evaluating a contract with a customer."
    },

    {
        topic: "Performance Obligations",
        question:
            "Why must a company identify distinct performance obligations?",

        answers: [
            "Because each obligation may receive an allocation of the transaction price and be recognized at a different time",
            "Because every contract must contain at least five obligations",
            "Because performance obligations determine income tax rates",
            "Because each obligation must be paid for separately in cash"
        ],

        correctAnswer: 0,

        explanation:
            "Separate performance obligations may receive different allocations of consideration and may be satisfied at different times."
    },

    {
        topic: "Transaction Price",
        question:
            "Which item is most clearly an example of variable consideration?",

        answers: [
            "A guaranteed fixed contract price",
            "A performance bonus dependent on achieving a target",
            "Cash already in the company's bank account",
            "The carrying amount of equipment"
        ],

        correctAnswer: 1,

        explanation:
            "A performance bonus depends on an uncertain future outcome and is therefore an example of variable consideration."
    },

    {
        topic: "Transaction Price Allocation",
        question:
            "Product A has a standalone selling price of $900 and Service B has a standalone selling price of $600. The total contract price is $1,200. How much of the transaction price is allocated to Product A?",

        answers: [
            "$480",
            "$600",
            "$720",
            "$900"
        ],

        correctAnswer: 2,

        explanation:
            "Total standalone selling prices are $1,500. Product A represents 60% ($900 ÷ $1,500). Therefore, $1,200 × 60% = $720."
    },

    {
        topic: "Transaction Price Allocation",
        question:
            "A contract price of $2,000 is allocated between two performance obligations whose standalone selling prices are $1,500 and $500. How much is allocated to the second obligation?",

        answers: [
            "$250",
            "$500",
            "$1,000",
            "$1,500"
        ],

        correctAnswer: 1,

        explanation:
            "The second obligation represents $500 ÷ $2,000 = 25% of total standalone selling prices. $2,000 × 25% = $500."
    },

    {
        topic: "Revenue Recognition Timing",
        question:
            "If a performance obligation does not satisfy the criteria for recognition over time, revenue is generally recognized:",

        answers: [
            "When the contract is signed",
            "When cash is received",
            "At a point in time when control transfers",
            "Only at the end of the fiscal year"
        ],

        correctAnswer: 2,

        explanation:
            "If a performance obligation is not satisfied over time, it is satisfied at a point in time when control of the promised good or service transfers."
    },

    {
        topic: "Over-Time Revenue",
        question:
            "A qualifying service contract has a transaction price of $48,000 and is satisfied evenly over 12 months. How much revenue is recognized after five months?",

        answers: [
            "$4,000",
            "$20,000",
            "$24,000",
            "$48,000"
        ],

        correctAnswer: 1,

        explanation:
            "$48,000 ÷ 12 = $4,000 per month. $4,000 × 5 months = $20,000."
    },

    {
        topic: "Revenue Recognition Application",
        question:
            "A customer pays $24,000 in advance for a qualifying 12-month service that is provided evenly over the contract period. After three months, how much revenue should be recognized?",

        answers: [
            "$0",
            "$2,000",
            "$6,000",
            "$24,000"
        ],

        correctAnswer: 2,

        explanation:
            "Cash receipt does not determine the timing of revenue. $24,000 ÷ 12 = $2,000 per month. After three months, $6,000 has been earned."
    }

],

7: [

    {
        topic: "Lease Fundamentals",
        question:
            "From a lessee's perspective, what does a right-of-use asset generally represent?",

        answers: [
            "Ownership of every leased asset",
            "The lessee's right to use the underlying asset during the lease term",
            "The obligation to make lease payments",
            "Revenue earned from the lease"
        ],

        correctAnswer: 1,

        explanation:
            "The ROU asset represents the lessee's right to use the underlying asset during the lease term."
    },

    {
        topic: "Lease Fundamentals",
        question:
            "What does a lease liability generally represent for a lessee?",

        answers: [
            "The obligation to make lease payments",
            "The fair value of the lessee",
            "Accumulated depreciation",
            "Revenue owed by customers"
        ],

        correctAnswer: 0,

        explanation:
            "The lease liability represents the lessee's obligation associated with its lease payments."
    },

    {
        topic: "Lease Classification",
        question:
            "Which fact is an indicator of finance lease classification for a lessee?",

        answers: [
            "The lease transfers ownership of the underlying asset to the lessee by the end of the lease term",
            "The lessee pays ordinary utility costs",
            "The asset has an alternative use to the lessor",
            "The lease has no payment requirements"
        ],

        correctAnswer: 0,

        explanation:
            "Transfer of ownership by the end of the lease term is one of the finance lease classification criteria."
    },

    {
        topic: "Lease Classification",
        question:
            "If none of the finance lease classification criteria are met, a lessee generally classifies the lease as:",

        answers: [
            "A sales-type lease",
            "An operating lease",
            "Accounts payable",
            "Unearned revenue"
        ],

        correctAnswer: 1,

        explanation:
            "For a lessee, a lease that does not meet any finance lease classification criterion is generally classified as an operating lease."
    },

    {
        topic: "Initial Measurement",
        question:
            "A lease requires a single payment of $31,500 one year from today. The applicable annual discount rate is 5%. What is the present value?",

        answers: [
            "$30,000",
            "$31,500",
            "$33,075",
            "$29,925"
        ],

        correctAnswer: 0,

        explanation:
            "$31,500 ÷ 1.05 = $30,000."
    },

    {
        topic: "Initial Measurement",
        question:
            "Which statement about the initial ROU asset and lease liability is most accurate?",

        answers: [
            "They must always be exactly equal",
            "The ROU asset can never exceed the liability",
            "The lease liability is based on the present value of applicable unpaid lease payments, while the ROU asset may require additional adjustments",
            "The ROU asset is always the fair value of the underlying asset"
        ],

        correctAnswer: 2,

        explanation:
            "The initial ROU asset begins with the lease liability measurement but may be adjusted for items such as certain prepayments, incentives and initial direct costs."
    },

    {
        topic: "Finance Lease",
        question:
            "A finance lease has a beginning liability of $100,000, an annual discount rate of 6%, and a $25,000 year-end payment. What amount of the payment reduces principal?",

        answers: [
            "$6,000",
            "$19,000",
            "$25,000",
            "$31,000"
        ],

        correctAnswer: 1,

        explanation:
            "Interest = $100,000 × 6% = $6,000. Principal reduction = $25,000 − $6,000 = $19,000."
    },

    {
        topic: "Finance Lease",
        question:
            "Using the same lease — beginning liability $100,000, 6% rate and $25,000 year-end payment — what is the ending lease liability?",

        answers: [
            "$75,000",
            "$81,000",
            "$94,000",
            "$106,000"
        ],

        correctAnswer: 1,

        explanation:
            "Beginning liability $100,000 + $6,000 interest − $25,000 payment = $81,000 ending liability."
    },

    {
        topic: "Operating Lease",
        question:
            "An operating lease liability begins at $80,000. The annual discount rate is 5%, and a $20,000 payment is made at year-end. What is the ending liability?",

        answers: [
            "$60,000",
            "$64,000",
            "$76,000",
            "$84,000"
        ],

        correctAnswer: 1,

        explanation:
            "Interest accretion = $80,000 × 5% = $4,000. Ending liability = $80,000 + $4,000 − $20,000 = $64,000."
    },

    {
        topic: "Finance vs Operating",
        question:
            "Which statement best describes the expense pattern taught for lessee finance and operating leases?",

        answers: [
            "Neither type produces expense",
            "Finance leases generally recognize interest and ROU asset amortization separately, while operating leases generally produce a single lease cost",
            "Operating leases recognize only interest expense",
            "Finance and operating leases always have identical expense presentation"
        ],

        correctAnswer: 1,

        explanation:
            "Finance leases generally recognize interest on the liability and amortization of the ROU asset separately. Operating leases generally recognize a single lease cost."
    }

],

8: [

    {
        topic: "Stockholders' Equity",
        question:
            "Beginning retained earnings is $200,000. Net income is $75,000 and dividends are $25,000. What is ending retained earnings?",

        answers: [
            "$150,000",
            "$200,000",
            "$250,000",
            "$300,000"
        ],

        correctAnswer: 2,

        explanation:
            "$200,000 + $75,000 − $25,000 = $250,000."
    },

    {
        topic: "Common Stock",
        question:
            "A company issues 20,000 shares of $2 par common stock for $10 per share. How much is credited to Additional Paid-In Capital?",

        answers: [
            "$40,000",
            "$160,000",
            "$200,000",
            "$240,000"
        ],

        correctAnswer: 1,

        explanation:
            "Cash received = 20,000 × $10 = $200,000. Common Stock = 20,000 × $2 = $40,000. APIC = $160,000."
    },

    {
        topic: "Preferred Stock",
        question:
            "A corporation has 5,000 shares of $100 par, 6% cumulative preferred stock. What is the annual preferred dividend?",

        answers: [
            "$6,000",
            "$30,000",
            "$50,000",
            "$500,000"
        ],

        correctAnswer: 1,

        explanation:
            "5,000 × $100 × 6% = $30,000 annual preferred dividend."
    },

    {
        topic: "Treasury Stock",
        question:
            "A corporation has 120,000 issued common shares and 15,000 treasury shares. How many shares are outstanding?",

        answers: [
            "105,000",
            "120,000",
            "135,000",
            "15,000"
        ],

        correctAnswer: 0,

        explanation:
            "Outstanding shares = 120,000 issued − 15,000 treasury = 105,000."
    },

    {
        topic: "Treasury Stock",
        question:
            "Under the cost method, a corporation repurchases 4,000 of its own shares for $18 per share. At what amount is Treasury Stock initially recorded?",

        answers: [
            "$18,000",
            "$22,000",
            "$72,000",
            "$4,000"
        ],

        correctAnswer: 2,

        explanation:
            "4,000 shares × $18 = $72,000. Under the cost method, Treasury Stock is recorded at reacquisition cost."
    },

    {
        topic: "Dividends",
        question:
            "Which date associated with a cash dividend generally requires no journal entry merely because that date occurs?",

        answers: [
            "Declaration date",
            "Record date",
            "Payment date",
            "Both declaration and payment dates"
        ],

        correctAnswer: 1,

        explanation:
            "The record date identifies shareholders entitled to receive the dividend, but generally does not itself require a journal entry."
    },

    {
        topic: "Basic EPS",
        question:
            "A company reports net income of $620,000 and preferred dividends of $20,000. Weighted-average common shares are 150,000. What is basic EPS?",

        answers: [
            "$3.87",
            "$4.00",
            "$4.13",
            "$4.27"
        ],

        correctAnswer: 1,

        explanation:
            "Income available to common shareholders = $620,000 − $20,000 = $600,000. Basic EPS = $600,000 ÷ 150,000 = $4.00."
    },

    {
        topic: "Weighted-Average Shares",
        question:
            "A company has 100,000 common shares outstanding on January 1 and issues 60,000 additional shares on July 1. What are weighted-average common shares for the year?",

        answers: [
            "100,000",
            "130,000",
            "160,000",
            "80,000"
        ],

        correctAnswer: 1,

        explanation:
            "100,000 × 12/12 = 100,000. The new 60,000 shares were outstanding for six months: 60,000 × 6/12 = 30,000. Total weighted-average shares = 130,000."
    },

    {
        topic: "Basic EPS",
        question:
            "Net income is $540,000 and there are no preferred dividends. A company had 120,000 shares outstanding all year and issued another 60,000 shares on October 1. What is basic EPS?",

        answers: [
            "$3.00",
            "$4.00",
            "$4.24",
            "$4.50"
        ],

        correctAnswer: 1,

        explanation:
            "The 60,000 new shares were outstanding for 3/12 of the year: 60,000 × 3/12 = 15,000. Weighted-average shares = 120,000 + 15,000 = 135,000. EPS = $540,000 ÷ 135,000 = $4.00."
    },

    {
        topic: "Diluted EPS",
        question:
            "Which statement about potentially dilutive securities is correct?",

        answers: [
            "Every potentially dilutive security must always be included",
            "Antidilutive effects are excluded from diluted EPS",
            "Options and convertible debt always use the same calculation method",
            "Diluted EPS ignores potential common shares"
        ],

        correctAnswer: 1,

        explanation:
            "Potential common shares are included only when their effect is dilutive. Antidilutive effects are excluded."
    }

],

9: [

    {
        topic: "Book vs Taxable Income",
        question:
            "Which statement about book income and taxable income is correct?",

        answers: [
            "They must always be identical",
            "They can differ because financial reporting and tax rules may recognize items differently",
            "Taxable income always equals operating cash flow",
            "Book income is calculated using tax law"
        ],

        correctAnswer: 1,

        explanation:
            "Financial accounting and tax rules can differ in the timing or treatment of revenues and expenses."
    },

    {
        topic: "Temporary Differences",
        question:
            "Which characteristic best distinguishes a temporary difference from a permanent difference?",

        answers: [
            "A temporary difference has future tax consequences that reverse",
            "A temporary difference never affects future periods",
            "A permanent difference always creates a deferred tax asset",
            "A permanent difference always creates a deferred tax liability"
        ],

        correctAnswer: 0,

        explanation:
            "Temporary differences create future taxable or deductible amounts. Permanent differences do not reverse and therefore do not create deferred tax assets or liabilities."
    },

    {
        topic: "Deferred Tax Liability",
        question:
            "A taxable temporary difference is $120,000. The enacted tax rate expected to apply when it reverses is 25%. Ignoring other considerations, what deferred tax amount results?",

        answers: [
            "$25,000 DTA",
            "$30,000 DTA",
            "$30,000 DTL",
            "$120,000 DTL"
        ],

        correctAnswer: 2,

        explanation:
            "$120,000 × 25% = $30,000. A taxable temporary difference generally creates a deferred tax liability."
    },

    {
        topic: "Deferred Tax Asset",
        question:
            "A deductible temporary difference is $60,000 and the applicable enacted tax rate is 30%. Ignoring other considerations, what deferred tax amount results?",

        answers: [
            "$18,000 DTA",
            "$18,000 DTL",
            "$20,000 DTA",
            "$60,000 DTA"
        ],

        correctAnswer: 0,

        explanation:
            "$60,000 × 30% = $18,000. A deductible temporary difference generally creates a deferred tax asset."
    },

    {
        topic: "Income Tax Expense",
        question:
            "Taxable income is $400,000 and the current tax rate is 25%. What is current income tax payable?",

        answers: [
            "$25,000",
            "$75,000",
            "$100,000",
            "$400,000"
        ],

        correctAnswer: 2,

        explanation:
            "$400,000 × 25% = $100,000 current income tax payable."
    },

    {
        topic: "Income Tax Expense",
        question:
            "Current tax expense is $90,000. An increase in a deferred tax liability creates $15,000 of deferred tax expense. In this simplified situation, what is total income tax expense?",

        answers: [
            "$75,000",
            "$90,000",
            "$105,000",
            "$1,350,000"
        ],

        correctAnswer: 2,

        explanation:
            "$90,000 current tax expense + $15,000 deferred tax expense = $105,000 total income tax expense."
    },

    {
        topic: "Accounting Changes",
        question:
            "A company changes from one generally accepted accounting principle to another. Subject to applicable guidance and practicability, this change is generally accounted for:",

        answers: [
            "Prospectively",
            "Retrospectively",
            "As an error in every situation",
            "Only when cash is affected"
        ],

        correctAnswer: 1,

        explanation:
            "A change in accounting principle is generally applied retrospectively, subject to applicable guidance and practicability."
    },

    {
        topic: "Accounting Estimates",
        question:
            "New information causes a company to revise the estimated useful life of equipment. The change is generally accounted for:",

        answers: [
            "Retrospectively",
            "Prospectively",
            "As a prior-period error",
            "By restating every prior financial statement"
        ],

        correctAnswer: 1,

        explanation:
            "A change in estimate resulting from new information is generally recognized prospectively in the current and future periods affected."
    },

    {
        topic: "Error Corrections",
        question:
            "A company discovers a material mathematical error in previously issued financial statements. Which description is most appropriate?",

        answers: [
            "Change in estimate",
            "Change in tax rate",
            "Prior-period error requiring appropriate correction",
            "Normal prospective accounting change"
        ],

        correctAnswer: 2,

        explanation:
            "A mathematical mistake in previously issued financial statements is an error rather than a change in estimate."
    },

    {
        topic: "Tax Accounting",
        question:
            "Which pairing is correct?",

        answers: [
            "Taxable temporary difference → DTA",
            "Deductible temporary difference → DTL",
            "Permanent difference → always DTA",
            "Taxable temporary difference → DTL"
        ],

        correctAnswer: 3,

        explanation:
            "A taxable temporary difference generally creates a deferred tax liability. A deductible temporary difference generally creates a deferred tax asset."
    }

],

10: [

    {
        topic: "Statement of Cash Flows",
        question:
            "Operating cash flow is $120,000, investing cash flow is negative $50,000, and financing cash flow is negative $20,000. What is the net change in cash?",

        answers: [
            "$50,000 increase",
            "$70,000 increase",
            "$90,000 increase",
            "$190,000 increase"
        ],

        correctAnswer: 0,

        explanation:
            "$120,000 − $50,000 − $20,000 = $50,000 net increase in cash."
    },

    {
        topic: "Statement of Cash Flows",
        question:
            "Beginning cash is $35,000 and the company reports a $45,000 net increase in cash during the year. What is ending cash?",

        answers: [
            "$10,000",
            "$35,000",
            "$45,000",
            "$80,000"
        ],

        correctAnswer: 3,

        explanation:
            "Ending cash = $35,000 beginning cash + $45,000 net increase = $80,000."
    },

    {
        topic: "Cash Flow Classification",
        question:
            "A company purchases equipment for $90,000 cash. How is the transaction generally classified?",

        answers: [
            "Operating outflow",
            "Investing outflow",
            "Financing outflow",
            "Investing inflow"
        ],

        correctAnswer: 1,

        explanation:
            "Cash paid to acquire property, plant and equipment is generally classified as an investing cash outflow."
    },

    {
        topic: "Cash Flow Classification",
        question:
            "A corporation issues common stock to investors for $250,000 cash. How is the cash receipt generally classified?",

        answers: [
            "Operating inflow",
            "Investing inflow",
            "Financing inflow",
            "Financing outflow"
        ],

        correctAnswer: 2,

        explanation:
            "Cash received from issuing the corporation's own stock is generally a financing cash inflow."
    },

    {
        topic: "Indirect Method",
        question:
            "Net income is $200,000. Depreciation expense is $30,000, Accounts Receivable increases by $25,000, and Accounts Payable increases by $15,000. Ignoring other items, what is net cash provided by operating activities under the indirect method?",

        answers: [
            "$190,000",
            "$200,000",
            "$220,000",
            "$270,000"
        ],

        correctAnswer: 2,

        explanation:
            "$200,000 + $30,000 − $25,000 + $15,000 = $220,000."
    },

    {
        topic: "Indirect Method",
        question:
            "Net income is $150,000. Depreciation expense is $20,000, Inventory decreases by $12,000, and Accounts Payable decreases by $7,000. Ignoring other items, what is net cash provided by operating activities under the indirect method?",

        answers: [
            "$131,000",
            "$155,000",
            "$175,000",
            "$189,000"
        ],

        correctAnswer: 2,

        explanation:
            "$150,000 + $20,000 + $12,000 − $7,000 = $175,000."
    },

    {
        topic: "Noncash Activities",
        question:
            "A company acquires $300,000 of equipment by issuing a $300,000 long-term note directly to the seller. What is the immediate cash effect of the acquisition?",

        answers: [
            "$300,000 cash inflow",
            "$300,000 cash outflow",
            "$600,000 total cash movement",
            "$0"
        ],

        correctAnswer: 3,

        explanation:
            "No cash is exchanged when the equipment is acquired directly by issuing the note. It is a significant noncash investing and financing activity."
    },

    {
        topic: "Comprehensive Income",
        question:
            "A company reports net income of $600,000 and positive other comprehensive income of $40,000. What is comprehensive income?",

        answers: [
            "$560,000",
            "$600,000",
            "$640,000",
            "$24,000,000"
        ],

        correctAnswer: 2,

        explanation:
            "Comprehensive income = $600,000 net income + $40,000 OCI = $640,000."
    },

    {
        topic: "OCI & AOCI",
        question:
            "Which statement correctly distinguishes OCI from AOCI?",

        answers: [
            "OCI is a current-period measure, while AOCI is the cumulative related balance reported in equity",
            "OCI and AOCI always mean exactly the same balance",
            "AOCI is reported as operating cash flow",
            "OCI represents cash collected from shareholders"
        ],

        correctAnswer: 0,

        explanation:
            "OCI includes qualifying current-period items outside net income, while AOCI represents the cumulative related balance within stockholders' equity."
    },

    {
        topic: "Cash Flow Classification",
        question:
            "Which combination is generally classified correctly under U.S. GAAP?",

        answers: [
            "Cash from customers → Investing; equipment purchase → Operating; stock issuance → Financing",
            "Cash from customers → Operating; equipment purchase → Investing; stock issuance → Financing",
            "Cash from customers → Financing; equipment purchase → Investing; stock issuance → Operating",
            "Cash from customers → Operating; equipment purchase → Financing; stock issuance → Investing"
        ],

        correctAnswer: 1,

        explanation:
            "Cash collections from customers are generally operating, purchases of equipment are investing, and cash received from issuing the company's own stock is financing."
    }

]

};
let currentModuleQuizId = null;
let currentModuleQuizQuestion = 0;
let currentModuleQuizScore = 0;
let currentModuleQuizAnswers = [];
let currentModuleQuizLocked = false;


function startIntermediateModuleQuiz(moduleId) {

    const questions =
        intermediateModuleQuizzes[moduleId];

    if (!questions || questions.length === 0) {

        alert("This module quiz has not been built yet.");

        return;

    }


    currentModuleQuizId = moduleId;
    currentModuleQuizQuestion = 0;
    currentModuleQuizScore = 0;
    currentModuleQuizAnswers = [];
    currentModuleQuizLocked = false;

    showIntermediateModuleQuizQuestion();

}
function showIntermediateModuleQuizQuestion() {

    const questions =
        intermediateModuleQuizzes[currentModuleQuizId];

    const question =
        questions[currentModuleQuizQuestion];

    const progress =
        ((currentModuleQuizQuestion + 1) /
        questions.length) * 100;


    let answersHTML = "";


    question.answers.forEach(function(answer, index) {

        answersHTML += `

            <button class="exam-answer-button"
                    onclick="selectIntermediateModuleAnswer(
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

                <h1>
                    Module ${currentModuleQuizId} Quiz
                </h1>

                <p>
                    Question ${currentModuleQuizQuestion + 1}
                    of ${questions.length}
                </p>

            </div>

            <button class="back-button"
                    onclick="showIntermediateModule(${currentModuleQuizId})">

                Exit Quiz

            </button>

        </header>


        <section class="exam-page">


            <div class="exam-progress">

                <div class="exam-progress-text">

                    <span>
                        Question ${currentModuleQuizQuestion + 1}
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


                <div id="module-quiz-feedback"></div>


                <button
                    id="module-quiz-next"
                    class="next-question-button"
                    onclick="nextIntermediateModuleQuestion()"
                    disabled>

                    ${
                        currentModuleQuizQuestion ===
                        questions.length - 1
                            ? "Finish Quiz"
                            : "Next Question →"
                    }

                </button>

            </div>


        </section>

    `;

}
function selectIntermediateModuleAnswer(
    button,
    selectedAnswer
) {

    if (currentModuleQuizLocked) {
        return;
    }


    currentModuleQuizLocked = true;


    const questions =
        intermediateModuleQuizzes[currentModuleQuizId];

    const question =
        questions[currentModuleQuizQuestion];


    const buttons =
        document.querySelectorAll(
            ".exam-answer-button"
        );


    buttons.forEach(function(answerButton) {
        answerButton.disabled = true;
    });


    const correct =
        selectedAnswer === question.correctAnswer;


    if (correct) {

        currentModuleQuizScore++;

        button.classList.add("exam-correct");

    } else {

        button.classList.add("exam-wrong");

        buttons[
            question.correctAnswer
        ].classList.add("exam-correct");

    }


    currentModuleQuizAnswers.push({

        topic: question.topic,
        correct: correct

    });


    const feedback =
        document.getElementById(
            "module-quiz-feedback"
        );


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
        "module-quiz-next"
    ).disabled = false;

}
function nextIntermediateModuleQuestion() {

    currentModuleQuizQuestion++;

    currentModuleQuizLocked = false;


    const questions =
        intermediateModuleQuizzes[currentModuleQuizId];


    if (
        currentModuleQuizQuestion >=
        questions.length
    ) {

        finishIntermediateModuleQuiz();

        return;

    }


    showIntermediateModuleQuizQuestion();

}
function finishIntermediateModuleQuiz() {

    const questions =
        intermediateModuleQuizzes[currentModuleQuizId];

    const percentage =
        Math.round(
            (
                currentModuleQuizScore /
                questions.length
            ) * 100
        );


    const passed =
        percentage >= 80;


    localStorage.setItem(
        "intermediateModule" +
        currentModuleQuizId +
        "QuizLast",
        percentage
    );


    const previousBest =
        Number(
            localStorage.getItem(
                "intermediateModule" +
                currentModuleQuizId +
                "QuizBest"
            )
        ) || 0;


    if (percentage > previousBest) {

        localStorage.setItem(
            "intermediateModule" +
            currentModuleQuizId +
            "QuizBest",
            percentage
        );

    }


    if (passed) {

        localStorage.setItem(
            "intermediateModule" +
            currentModuleQuizId +
            "Mastered",
            "true"
        );

    }


    const topicPerformance = {};


    currentModuleQuizAnswers.forEach(function(answer) {

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

        const score =
            Math.round(
                (data.correct / data.total) * 100
            );


        topicHTML += `

            <div class="topic-result-row">

                <span>
                    ${topic}
                </span>

                <strong>
                    ${score}%
                </strong>

            </div>

        `;

    });


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    Module ${currentModuleQuizId} Results
                </h1>

                <p>
                    Intermediate Accounting
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
                        passed
                            ? "Module Mastered 🏆"
                            : "More Practice Recommended"
                    }

                </h2>


                <p>

                    You answered

                    <strong>
                        ${currentModuleQuizScore}
                    </strong>

                    of

                    <strong>
                        ${questions.length}
                    </strong>

                    correctly.

                </p>

            </div>


            <div class="results-card">

                <h2>
                    Topic Performance
                </h2>

                ${topicHTML}

            </div>


            <div class="results-actions">

                <button class="back-button"
                        onclick="showIntermediateModule(${currentModuleQuizId})">

                    Back to Module

                </button>


                <button class="primary-button"
                        onclick="startIntermediateModuleQuiz(${currentModuleQuizId})">

                    Retake Quiz

                </button>

            </div>


        </section>

    `;

}

// ========================================
// INTERMEDIATE ACCOUNTING FINAL EXAM
// ========================================

const intermediateFinalExamQuestions = [

    // =====================================================
    // MODULE 1 — FINANCIAL REPORTING FOUNDATIONS
    // =====================================================

    {
        module: 1,
        topic: "Financial Reporting",
        question:
            "What is a primary purpose of general-purpose financial reporting?",

        answers: [
            "To guarantee that investors earn a profit",
            "To provide useful financial information to users making decisions",
            "To calculate only the company's income tax return",
            "To report only cash receipts and payments"
        ],

        correctAnswer: 1,

        explanation:
            "General-purpose financial reporting provides useful financial information to users such as investors and creditors when making decisions."
    },

    {
        module: 1,
        topic: "Accrual Accounting",
        question:
            "A company performs $12,000 of services in December but will collect the cash in January. Under accrual accounting, when is the $12,000 revenue generally recognized?",

        answers: [
            "December",
            "January",
            "Half in December and half in January",
            "Only when the customer signs a receipt"
        ],

        correctAnswer: 0,

        explanation:
            "Under accrual accounting, revenue is recognized when earned rather than simply when cash is collected."
    },

    {
        module: 1,
        topic: "Qualitative Characteristics",
        question:
            "Which characteristic means financial information is capable of making a difference in users' decisions?",

        answers: [
            "Relevance",
            "Neutrality",
            "Comparability",
            "Verifiability"
        ],

        correctAnswer: 0,

        explanation:
            "Relevant information is capable of making a difference in users' decisions."
    },

    {
        module: 1,
        topic: "Financial Statement Elements",
        question:
            "A present obligation of an entity arising from past events is most closely associated with which financial statement element?",

        answers: [
            "Asset",
            "Liability",
            "Revenue",
            "Expense"
        ],

        correctAnswer: 1,

        explanation:
            "A liability represents an obligation of the entity arising from past events."
    },

    {
        module: 1,
        topic: "Present Value",
        question:
            "A company will receive $10,500 one year from now. If the applicable annual discount rate is 5%, what is the present value?",

        answers: [
            "$9,500",
            "$10,000",
            "$10,500",
            "$11,025"
        ],

        correctAnswer: 1,

        explanation:
            "$10,500 ÷ 1.05 = $10,000."
    },


    // =====================================================
    // MODULE 2 — CASH & RECEIVABLES
    // =====================================================

    {
        module: 2,
        topic: "Cash & Cash Equivalents",
        question:
            "Which investment is most likely to qualify as a cash equivalent?",

        answers: [
            "Common stock held as a long-term investment",
            "A Treasury bill purchased with two months remaining to maturity",
            "A five-year corporate bond",
            "Inventory held for resale"
        ],

        correctAnswer: 1,

        explanation:
            "Cash equivalents are highly liquid short-term investments with very short maturities."
    },

    {
        module: 2,
        topic: "Bank Reconciliation",
        question:
            "A bank statement reports $40,000. Deposits in transit are $6,000 and outstanding checks are $9,000. What is the adjusted bank balance?",

        answers: [
            "$25,000",
            "$37,000",
            "$43,000",
            "$55,000"
        ],

        correctAnswer: 1,

        explanation:
            "$40,000 + $6,000 − $9,000 = $37,000."
    },

    {
        module: 2,
        topic: "Accounts Receivable",
        question:
            "A company performs $18,000 of services on account. Which account is debited?",

        answers: [
            "Cash",
            "Accounts Receivable",
            "Service Revenue",
            "Accounts Payable"
        ],

        correctAnswer: 1,

        explanation:
            "Accounts Receivable increases because the customer owes the company $18,000."
    },

    {
        module: 2,
        topic: "Credit Losses",
        question:
            "Accounts Receivable is $150,000 and the Allowance for Credit Losses is $9,000. What is net Accounts Receivable?",

        answers: [
            "$141,000",
            "$150,000",
            "$159,000",
            "$9,000"
        ],

        correctAnswer: 0,

        explanation:
            "$150,000 − $9,000 = $141,000 net Accounts Receivable."
    },

    {
        module: 2,
        topic: "Notes Receivable",
        question:
            "A $50,000 note bears 8% annual interest and is outstanding for nine months. How much interest is earned?",

        answers: [
            "$2,000",
            "$3,000",
            "$4,000",
            "$6,000"
        ],

        correctAnswer: 1,

        explanation:
            "$50,000 × 8% × 9/12 = $3,000."
    },


    // =====================================================
    // MODULE 3 — INVENTORY
    // =====================================================

    {
        module: 3,
        topic: "Inventory Basics",
        question:
            "Beginning inventory is $25,000, purchases are $85,000, and ending inventory is $30,000. What is Cost of Goods Sold?",

        answers: [
            "$55,000",
            "$80,000",
            "$110,000",
            "$140,000"
        ],

        correctAnswer: 1,

        explanation:
            "$25,000 + $85,000 − $30,000 = $80,000 COGS."
    },

    {
        module: 3,
        topic: "FIFO",
        question:
            "A company has 100 units costing $10 each and then purchases 100 units costing $14 each. If 120 units are sold using FIFO, what is COGS?",

        answers: [
            "$1,200",
            "$1,280",
            "$1,400",
            "$1,680"
        ],

        correctAnswer: 1,

        explanation:
            "FIFO uses 100 units × $10 = $1,000 plus 20 units × $14 = $280. Total COGS = $1,280."
    },

    {
        module: 3,
        topic: "LIFO",
        question:
            "A company has 100 units costing $10 each and then purchases 100 units costing $14 each. If 120 units are sold using LIFO, what is COGS?",

        answers: [
            "$1,280",
            "$1,400",
            "$1,600",
            "$1,680"
        ],

        correctAnswer: 2,

        explanation:
            "LIFO uses 100 units × $14 = $1,400 plus 20 units × $10 = $200. Total COGS = $1,600."
    },

    {
        module: 3,
        topic: "Weighted Average",
        question:
            "Inventory consists of 100 units costing $8 each and 300 units costing $12 each. What is the weighted-average cost per unit?",

        answers: [
            "$8",
            "$10",
            "$11",
            "$12"
        ],

        correctAnswer: 2,

        explanation:
            "Total cost = $800 + $3,600 = $4,400. $4,400 ÷ 400 units = $11 per unit."
    },

    {
        module: 3,
        topic: "Inventory Errors",
        question:
            "If ending inventory is overstated, what happens to current-period Cost of Goods Sold and net income?",

        answers: [
            "COGS overstated; net income understated",
            "COGS understated; net income overstated",
            "Both COGS and net income overstated",
            "Neither amount is affected"
        ],

        correctAnswer: 1,

        explanation:
            "Overstated ending inventory causes too much to be subtracted in the COGS formula, making COGS understated and net income overstated."
    },


    // =====================================================
    // MODULE 4 — PROPERTY, PLANT & EQUIPMENT
    // =====================================================

    {
        module: 4,
        topic: "PPE Acquisition",
        question:
            "Equipment has a purchase price of $90,000. Delivery costs are $4,000 and installation costs are $6,000. What is the initial capitalized cost?",

        answers: [
            "$90,000",
            "$94,000",
            "$96,000",
            "$100,000"
        ],

        correctAnswer: 3,

        explanation:
            "$90,000 + $4,000 + $6,000 = $100,000."
    },

    {
        module: 4,
        topic: "Depreciation",
        question:
            "Equipment costs $120,000, has a $20,000 residual value, and a 5-year useful life. What is annual straight-line depreciation?",

        answers: [
            "$20,000",
            "$24,000",
            "$28,000",
            "$100,000"
        ],

        correctAnswer: 0,

        explanation:
            "($120,000 − $20,000) ÷ 5 = $20,000 per year."
    },

    {
        module: 4,
        topic: "Changes in Estimates",
        question:
            "An asset has a carrying amount of $36,000 when its estimated remaining life is revised to 4 years with no residual value. What is annual straight-line depreciation going forward?",

        answers: [
            "$4,500",
            "$9,000",
            "$12,000",
            "$36,000"
        ],

        correctAnswer: 1,

        explanation:
            "$36,000 ÷ 4 remaining years = $9,000 per year."
    },

    {
        module: 4,
        topic: "PPE Disposal",
        question:
            "Equipment cost $80,000 and has accumulated depreciation of $50,000. It is sold for $35,000. What is recognized?",

        answers: [
            "$5,000 gain",
            "$5,000 loss",
            "$30,000 gain",
            "$35,000 gain"
        ],

        correctAnswer: 0,

        explanation:
            "Carrying amount = $80,000 − $50,000 = $30,000. Selling price exceeds carrying amount by $5,000, producing a $5,000 gain."
    },

    {
        module: 4,
        topic: "Impairment",
        question:
            "Which event is most likely to indicate that a long-lived asset should be evaluated for impairment?",

        answers: [
            "The asset suffers major damage and expected usefulness declines",
            "The company pays its normal monthly rent",
            "The company issues new common shares",
            "The company earns more revenue than expected"
        ],

        correctAnswer: 0,

        explanation:
            "Major damage and reduced expected usefulness can indicate that an asset may be impaired."
    },


    // =====================================================
    // MODULE 5 — LIABILITIES & BONDS
    // =====================================================

    {
        module: 5,
        topic: "Current Liabilities",
        question:
            "Employees have earned $14,000 of wages by year-end, but they will be paid next year. What should the company recognize?",

        answers: [
            "Wages Expense and Wages Payable",
            "Cash and Wages Revenue",
            "Accounts Receivable and Revenue",
            "No entry until payment"
        ],

        correctAnswer: 0,

        explanation:
            "The expense has already been incurred, so Wages Expense and Wages Payable should be recognized."
    },

    {
        module: 5,
        topic: "Bond Basics",
        question:
            "A $400,000 bond has a 6% annual stated rate and pays interest semiannually. How much cash interest is paid every six months?",

        answers: [
            "$6,000",
            "$12,000",
            "$24,000",
            "$48,000"
        ],

        correctAnswer: 1,

        explanation:
            "$400,000 × 6% × 6/12 = $12,000."
    },

    {
        module: 5,
        topic: "Premiums & Discounts",
        question:
            "A bond's stated rate is 9% while the market rate at issuance is 7%. The bond will generally issue at:",

        answers: [
            "A discount",
            "A premium",
            "Zero value",
            "Exactly half of face value"
        ],

        correctAnswer: 1,

        explanation:
            "Because the stated rate exceeds the market rate, the bond's contractual interest is attractive and the bond generally issues at a premium."
    },

    {
        module: 5,
        topic: "Effective Interest",
        question:
            "A bond has a beginning carrying amount of $190,000 and an effective annual rate of 8%. What is annual interest expense?",

        answers: [
            "$12,000",
            "$15,200",
            "$16,000",
            "$19,000"
        ],

        correctAnswer: 1,

        explanation:
            "$190,000 × 8% = $15,200 interest expense."
    },

    {
        module: 5,
        topic: "Effective Interest",
        question:
            "A discount bond has face value of $200,000, stated annual rate of 6%, effective annual rate of 8%, and beginning carrying amount of $190,000. Assuming annual payments, what is the ending carrying amount after one year?",

        answers: [
            "$186,800",
            "$190,000",
            "$193,200",
            "$202,000"
        ],

        correctAnswer: 2,

        explanation:
            "Cash interest = $200,000 × 6% = $12,000. Interest expense = $190,000 × 8% = $15,200. Discount amortization = $3,200. Ending carrying amount = $190,000 + $3,200 = $193,200."
    },


    // =====================================================
    // MODULE 6 — REVENUE RECOGNITION
    // =====================================================

    {
        module: 6,
        topic: "Five-Step Model",
        question:
            "What is Step 3 of the revenue recognition model?",

        answers: [
            "Identify the contract",
            "Identify performance obligations",
            "Determine the transaction price",
            "Recognize revenue"
        ],

        correctAnswer: 2,

        explanation:
            "Step 3 is determining the transaction price."
    },

    {
        module: 6,
        topic: "Performance Obligations",
        question:
            "Why is identifying distinct performance obligations important?",

        answers: [
            "Each obligation may receive an allocation of the transaction price and be recognized at a different time",
            "Every obligation must always be paid separately in cash",
            "Each obligation creates a separate corporation",
            "It determines the company's income tax rate"
        ],

        correctAnswer: 0,

        explanation:
            "Separate performance obligations may receive different allocations and may be satisfied at different times."
    },

    {
        module: 6,
        topic: "Variable Consideration",
        question:
            "Which item is an example of variable consideration?",

        answers: [
            "A guaranteed fixed contract amount",
            "A performance bonus dependent on reaching a target",
            "The company's inventory balance",
            "The par value of common stock"
        ],

        correctAnswer: 1,

        explanation:
            "A performance bonus varies depending on whether a specified outcome occurs."
    },

    {
        module: 6,
        topic: "Transaction Price Allocation",
        question:
            "Product A has a standalone selling price of $750 and Service B has a standalone selling price of $250. The bundled transaction price is $800. How much is allocated to Product A?",

        answers: [
            "$200",
            "$600",
            "$750",
            "$800"
        ],

        correctAnswer: 1,

        explanation:
            "Product A represents $750 ÷ $1,000 = 75% of the standalone total. $800 × 75% = $600."
    },

    {
        module: 6,
        topic: "Revenue Timing",
        question:
            "A qualifying 12-month service contract has a total transaction price of $60,000 and is satisfied evenly over time. How much revenue is recognized after four months?",

        answers: [
            "$5,000",
            "$15,000",
            "$20,000",
            "$60,000"
        ],

        correctAnswer: 2,

        explanation:
            "$60,000 ÷ 12 = $5,000 per month. $5,000 × 4 = $20,000."
    },


    // =====================================================
    // MODULE 7 — LEASES
    // =====================================================

    {
        module: 7,
        topic: "Lease Fundamentals",
        question:
            "What does a lease liability generally represent for a lessee?",

        answers: [
            "The lessee's ownership of the underlying asset",
            "The lessee's obligation to make lease payments",
            "Revenue earned from customers",
            "The market value of the leased asset"
        ],

        correctAnswer: 1,

        explanation:
            "The lease liability represents the lessee's obligation associated with lease payments."
    },

    {
        module: 7,
        topic: "Lease Classification",
        question:
            "Which condition is an indicator of finance lease classification for a lessee?",

        answers: [
            "Ownership transfers to the lessee by the end of the lease term",
            "The lessee pays an electricity bill",
            "The lease has no identified asset",
            "The lessee never makes payments"
        ],

        correctAnswer: 0,

        explanation:
            "Transfer of ownership is one of the finance lease classification criteria."
    },

    {
        module: 7,
        topic: "Initial Measurement",
        question:
            "A lease requires a single $42,000 payment one year from today. The applicable annual discount rate is 5%. What is its present value?",

        answers: [
            "$38,000",
            "$40,000",
            "$42,000",
            "$44,100"
        ],

        correctAnswer: 1,

        explanation:
            "$42,000 ÷ 1.05 = $40,000."
    },

    {
        module: 7,
        topic: "Finance Lease",
        question:
            "A finance lease liability begins at $100,000. The annual discount rate is 5% and a $25,000 payment is made at year-end. What is the ending lease liability?",

        answers: [
            "$75,000",
            "$80,000",
            "$95,000",
            "$105,000"
        ],

        correctAnswer: 1,

        explanation:
            "Interest = $100,000 × 5% = $5,000. Ending liability = $100,000 + $5,000 − $25,000 = $80,000."
    },

    {
        module: 7,
        topic: "Finance vs Operating",
        question:
            "Which statement best describes the expense pattern for lessee finance and operating leases?",

        answers: [
            "Finance leases generally recognize interest and ROU asset amortization separately, while operating leases generally recognize a single lease cost",
            "Operating leases never recognize a lease liability",
            "Finance leases never recognize interest",
            "Both classifications always have identical expense presentation"
        ],

        correctAnswer: 0,

        explanation:
            "Finance leases generally recognize interest and ROU asset amortization separately, while operating leases generally produce a single lease-cost pattern."
    },


    // =====================================================
    // MODULE 8 — EQUITY & EPS
    // =====================================================

    {
        module: 8,
        topic: "Retained Earnings",
        question:
            "Beginning retained earnings is $300,000. Net income is $90,000 and dividends are $40,000. What is ending retained earnings?",

        answers: [
            "$250,000",
            "$350,000",
            "$390,000",
            "$430,000"
        ],

        correctAnswer: 1,

        explanation:
            "$300,000 + $90,000 − $40,000 = $350,000."
    },

    {
        module: 8,
        topic: "Common Stock",
        question:
            "A corporation issues 10,000 shares of $3 par common stock for $15 per share. How much is credited to Additional Paid-In Capital?",

        answers: [
            "$30,000",
            "$120,000",
            "$150,000",
            "$180,000"
        ],

        correctAnswer: 1,

        explanation:
            "Cash received = 10,000 × $15 = $150,000. Common Stock = 10,000 × $3 = $30,000. APIC = $120,000."
    },

    {
        module: 8,
        topic: "Treasury Stock",
        question:
            "A company has 200,000 issued common shares and 25,000 treasury shares. How many common shares are outstanding?",

        answers: [
            "175,000",
            "200,000",
            "225,000",
            "25,000"
        ],

        correctAnswer: 0,

        explanation:
            "Outstanding shares = 200,000 issued − 25,000 treasury = 175,000."
    },

    {
        module: 8,
        topic: "Weighted-Average Shares",
        question:
            "A company has 100,000 common shares outstanding on January 1 and issues an additional 40,000 shares on April 1. What are weighted-average shares for the year?",

        answers: [
            "110,000",
            "120,000",
            "130,000",
            "140,000"
        ],

        correctAnswer: 2,

        explanation:
            "Existing shares = 100,000. New shares = 40,000 × 9/12 = 30,000. Weighted-average shares = 130,000."
    },

    {
        module: 8,
        topic: "Basic EPS",
        question:
            "Net income is $570,000, preferred dividends are $30,000, and weighted-average common shares are 135,000. What is basic EPS?",

        answers: [
            "$3.60",
            "$4.00",
            "$4.22",
            "$4.44"
        ],

        correctAnswer: 1,

        explanation:
            "Income available to common shareholders = $570,000 − $30,000 = $540,000. $540,000 ÷ 135,000 = $4.00 EPS."
    },


    // =====================================================
    // MODULE 9 — INCOME TAXES & ACCOUNTING CHANGES
    // =====================================================

    {
        module: 9,
        topic: "Book vs Tax Income",
        question:
            "Why can book income differ from taxable income?",

        answers: [
            "Financial reporting and tax rules may recognize items differently",
            "Taxable income always equals cash flow",
            "Financial accounting ignores all expenses",
            "Companies can choose any taxable income amount"
        ],

        correctAnswer: 0,

        explanation:
            "Financial reporting and tax law can differ in the timing or treatment of revenues and expenses."
    },

    {
        module: 9,
        topic: "Temporary Differences",
        question:
            "Which statement correctly distinguishes temporary and permanent differences?",

        answers: [
            "Temporary differences can reverse in future periods; permanent differences do not",
            "Permanent differences always create deferred tax assets",
            "Temporary differences never have future tax consequences",
            "Both always create deferred tax liabilities"
        ],

        correctAnswer: 0,

        explanation:
            "Temporary differences create future taxable or deductible amounts, while permanent differences do not reverse."
    },

    {
        module: 9,
        topic: "Deferred Taxes",
        question:
            "A taxable temporary difference is $80,000 and the applicable enacted tax rate is 25%. What deferred tax amount results, ignoring other considerations?",

        answers: [
            "$20,000 Deferred Tax Asset",
            "$20,000 Deferred Tax Liability",
            "$80,000 Deferred Tax Liability",
            "$100,000 Deferred Tax Asset"
        ],

        correctAnswer: 1,

        explanation:
            "$80,000 × 25% = $20,000. A taxable temporary difference generally creates a deferred tax liability."
    },

    {
        module: 9,
        topic: "Income Tax Expense",
        question:
            "Current tax expense is $100,000 and deferred tax expense is $15,000. In this simplified example, what is total income tax expense?",

        answers: [
            "$85,000",
            "$100,000",
            "$115,000",
            "$1,500,000"
        ],

        correctAnswer: 2,

        explanation:
            "$100,000 + $15,000 = $115,000 total income tax expense."
    },

    {
        module: 9,
        topic: "Accounting Changes",
        question:
            "A company revises an asset's estimated useful life because of new information. How is the change generally accounted for?",

        answers: [
            "Retrospectively",
            "Prospectively",
            "As a prior-period error",
            "By reversing all prior depreciation"
        ],

        correctAnswer: 1,

        explanation:
            "A legitimate change in accounting estimate based on new information is generally accounted for prospectively."
    },


    // =====================================================
    // MODULE 10 — CASH FLOWS & ADVANCED REPORTING
    // =====================================================

    {
        module: 10,
        topic: "Cash Flow Classification",
        question:
            "A company pays $150,000 cash to purchase equipment. How is the transaction generally classified?",

        answers: [
            "Operating outflow",
            "Investing outflow",
            "Financing outflow",
            "Investing inflow"
        ],

        correctAnswer: 1,

        explanation:
            "Cash paid to purchase property, plant and equipment is generally an investing cash outflow."
    },

    {
        module: 10,
        topic: "Cash Flow Classification",
        question:
            "A corporation receives $300,000 cash from issuing common stock. How is the transaction generally classified?",

        answers: [
            "Operating inflow",
            "Investing inflow",
            "Financing inflow",
            "Financing outflow"
        ],

        correctAnswer: 2,

        explanation:
            "Cash received from issuing the corporation's own stock is generally a financing inflow."
    },

    {
        module: 10,
        topic: "Indirect Method",
        question:
            "Net income is $180,000. Depreciation expense is $20,000, Accounts Receivable increases by $15,000, and Accounts Payable increases by $5,000. Ignoring other items, what is operating cash flow under the indirect method?",

        answers: [
            "$170,000",
            "$180,000",
            "$190,000",
            "$220,000"
        ],

        correctAnswer: 2,

        explanation:
            "$180,000 + $20,000 − $15,000 + $5,000 = $190,000."
    },

    {
        module: 10,
        topic: "Noncash Activities",
        question:
            "A company acquires $250,000 of equipment by issuing a $250,000 long-term note directly to the seller. What immediate cash flow is reported from the acquisition?",

        answers: [
            "$250,000 investing outflow",
            "$250,000 financing inflow",
            "$500,000 total cash movement",
            "$0"
        ],

        correctAnswer: 3,

        explanation:
            "No cash is exchanged. The acquisition is a significant noncash investing and financing transaction."
    },

    {
        module: 10,
        topic: "Comprehensive Income",
        question:
            "Net income is $700,000 and positive Other Comprehensive Income is $45,000. What is comprehensive income?",

        answers: [
            "$655,000",
            "$700,000",
            "$745,000",
            "$31,500,000"
        ],

        correctAnswer: 2,

        explanation:
            "$700,000 + $45,000 = $745,000 comprehensive income."
    }

];

let currentIntermediateFinalQuestion = 0;
let intermediateFinalScore = 0;
let intermediateFinalAnswers = [];
let intermediateFinalLocked = false;

function startIntermediateFinalExam() {

    if (intermediateFinalExamQuestions.length === 0) {

        alert("Final exam questions have not been added yet.");

        return;

    }

    currentIntermediateFinalQuestion = 0;
    intermediateFinalScore = 0;
    intermediateFinalAnswers = [];
    intermediateFinalLocked = false;

    showIntermediateFinalQuestion();

}

function showIntermediateFinalQuestion() {

    const question =
        intermediateFinalExamQuestions[
            currentIntermediateFinalQuestion
        ];

    const progress =
        (
            (currentIntermediateFinalQuestion + 1) /
            intermediateFinalExamQuestions.length
        ) * 100;


    let answersHTML = "";


    question.answers.forEach(function(answer, index) {

        answersHTML += `

            <button class="exam-answer-button"
                    onclick="selectIntermediateFinalAnswer(
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

                <h1>
                    Intermediate Final Exam
                </h1>

                <p>
                    Question
                    ${currentIntermediateFinalQuestion + 1}
                    of
                    ${intermediateFinalExamQuestions.length}
                </p>

            </div>


            <button class="back-button"
                    onclick="showIntermediate()">

                Exit Exam

            </button>

        </header>


        <section class="exam-page">


            <div class="exam-progress">

                <div class="exam-progress-text">

                    <span>
                        Question
                        ${currentIntermediateFinalQuestion + 1}
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

                    Module ${question.module} ·
                    ${question.topic}

                </div>


                <h2>
                    ${question.question}
                </h2>


                <div class="exam-answers">

                    ${answersHTML}

                </div>


                <div id="intermediate-final-feedback">
                </div>


                <button
                    id="intermediate-final-next"
                    class="next-question-button"
                    onclick="nextIntermediateFinalQuestion()"
                    disabled>

                    ${
                        currentIntermediateFinalQuestion ===
                        intermediateFinalExamQuestions.length - 1

                            ? "Finish Exam"
                            : "Next Question →"
                    }

                </button>


            </div>


        </section>

    `;

}

function selectIntermediateFinalAnswer(
    button,
    selectedAnswer
) {

    if (intermediateFinalLocked) {
        return;
    }


    intermediateFinalLocked = true;


    const question =
        intermediateFinalExamQuestions[
            currentIntermediateFinalQuestion
        ];


    const answerButtons =
        document.querySelectorAll(
            ".exam-answer-button"
        );


    answerButtons.forEach(function(answerButton) {

        answerButton.disabled = true;

    });


    const correct =
        selectedAnswer === question.correctAnswer;


    if (correct) {

        intermediateFinalScore++;

        button.classList.add(
            "exam-correct"
        );

    } else {

        button.classList.add(
            "exam-wrong"
        );

        answerButtons[
            question.correctAnswer
        ].classList.add(
            "exam-correct"
        );

    }


    intermediateFinalAnswers.push({

        module: question.module,
        topic: question.topic,
        question: question.question,
        correct: correct,
        selectedAnswer: selectedAnswer,
        correctAnswer: question.correctAnswer,
        explanation: question.explanation

    });


    const feedback =
        document.getElementById(
            "intermediate-final-feedback"
        );


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
        "intermediate-final-next"
    ).disabled = false;

}

function nextIntermediateFinalQuestion() {

    currentIntermediateFinalQuestion++;

    intermediateFinalLocked = false;


    if (
        currentIntermediateFinalQuestion >=
        intermediateFinalExamQuestions.length
    ) {

        finishIntermediateFinalExam();

        return;

    }


    showIntermediateFinalQuestion();

}

function finishIntermediateFinalExam() {

    const total =
        intermediateFinalExamQuestions.length;


    const percentage =
        Math.round(
            (intermediateFinalScore / total) * 100
        );


    const passed =
        percentage >= 80;


    localStorage.setItem(
        "intermediateFinalLast",
        percentage
    );


    const previousBest =
        Number(
            localStorage.getItem(
                "intermediateFinalBest"
            )
        ) || 0;


    if (percentage > previousBest) {

        localStorage.setItem(
            "intermediateFinalBest",
            percentage
        );

    }


    if (passed) {

        localStorage.setItem(
            "intermediateFinalPassed",
            "true"
        );

    }


    const modulePerformance = {};


    intermediateFinalAnswers.forEach(function(answer) {

        const moduleName =
            "Module " + answer.module;


        if (!modulePerformance[moduleName]) {

            modulePerformance[moduleName] = {
                correct: 0,
                total: 0
            };

        }


        modulePerformance[moduleName].total++;


        if (answer.correct) {

            modulePerformance[moduleName].correct++;

        }

    });


    let moduleHTML = "";


    Object.keys(modulePerformance).forEach(
        function(moduleName) {

            const data =
                modulePerformance[moduleName];


            const modulePercent =
                Math.round(
                    (
                        data.correct /
                        data.total
                    ) * 100
                );


            moduleHTML += `

                <div class="topic-result-row">

                    <span>
                        ${moduleName}
                    </span>

                    <strong>
                        ${modulePercent}%
                    </strong>

                </div>

            `;

        }
    );


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    Intermediate Final Results
                </h1>

                <p>
                    Accounting Foundation Assessment
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
                        passed
                            ? "Intermediate Accounting Passed 🏆"
                            : "More Review Recommended"
                    }

                </h2>


                <p>

                    You answered

                    <strong>
                        ${intermediateFinalScore}
                    </strong>

                    of

                    <strong>
                        ${total}
                    </strong>

                    questions correctly.

                </p>


                <p>

                    Passing score:
                    <strong>80%</strong>

                </p>

            </div>


            <div class="results-card">

                <h2>
                    Performance by Module
                </h2>

                ${moduleHTML}

            </div>


            <div class="results-actions">


                <button class="back-button"
                        onclick="showIntermediate()">

                    Back to Intermediate

                </button>


                <button class="primary-button"
                        onclick="startIntermediateFinalExam()">

                    Retake Final Exam

                </button>


            </div>


        </section>

    `;

}

// RESTORE PAGE AFTER REFRESH


const farModules = [

    {
        id: 1,
        title: "Financial Reporting",
        description:
            "Master general-purpose financial reporting, financial statements, disclosures, accounting changes, error corrections and reporting concepts."
    },

    {
        id: 2,
        title: "Balance Sheet Accounts",
        description:
            "Master cash, receivables, inventory, long-lived assets, liabilities, debt, investments and stockholders' equity."
    },

    {
        id: 3,
        title: "Select Transactions",
        description:
            "Apply FAR guidance to accounting changes, contingencies, revenue recognition, income taxes, fair value, leases and subsequent events."
    },

    {
        id: 4,
        title: "Governmental Accounting",
        description:
            "Master governmental funds, modified accrual accounting, government-wide reporting, reconciliations, budgets and encumbrances."
    },

    {
        id: 5,
        title: "Not-for-Profit Accounting",
        description:
            "Master contributions, donor restrictions, conditional gifts, donated services, endowments and not-for-profit financial reporting."
    },

    {
        id: 6,
        title: "FAR Comprehensive Review",
        description:
            "Integrate FAR topics through cumulative CPA-style MCQs, multi-step calculations, task-based simulations and final exam preparation."
    }

];

const farModuleLessons = {

    1: [

        {
            id: 1,
            title: "Financial Statements & General-Purpose Reporting",
            description:
                "Master the purpose, structure and relationships of the primary financial statements and general-purpose financial reporting."
        },

        {
            id: 2,
            title: "Balance Sheet Classification & Presentation",
            description:
                "Apply CPA-level classification and presentation rules for assets, liabilities and equity."
        },

        {
            id: 3,
            title: "Income Statement & Comprehensive Income",
            description:
                "Prepare and analyze income statement presentation, continuing operations and other comprehensive income."
        },

        {
            id: 4,
            title: "Statement of Cash Flows",
            description:
                "Classify cash flows and prepare operating activities using the direct and indirect methods."
        },

        {
            id: 5,
            title: "Statement of Changes in Equity",
            description:
                "Account for and present changes in contributed capital, retained earnings, accumulated OCI and other equity balances."
        },

        {
            id: 6,
            title: "Notes to Financial Statements & Disclosures",
            description:
                "Determine appropriate financial statement disclosures and understand information presented in the notes."
        },

        {
            id: 7,
            title: "Accounting Changes",
            description:
                "Distinguish changes in accounting principle, changes in estimate and changes in reporting entity and apply the appropriate accounting treatment."
        },

        {
            id: 8,
            title: "Error Corrections",
            description:
                "Identify financial statement errors, determine their effects and apply appropriate correction and presentation."
        },

        {
            id: 9,
            title: "Subsequent Events",
            description:
                "Evaluate events occurring after the balance sheet date and determine whether recognition or disclosure is required."
        },

        {
            id: 10,
            title: "Special-Purpose Frameworks",
            description:
                "Understand financial statements prepared using cash basis, modified cash basis, tax basis and other special-purpose frameworks."
        }

    ],

2: [

    {
        id: 1,
        title: "Cash & Cash Equivalents",
        description:
            "Understand cash classifications, cash equivalents, restricted cash, bank reconciliations and financial statement presentation."
    },

    {
        id: 2,
        title: "Accounts Receivable",
        description:
            "Account for receivables, bad debts, credit losses, write-offs, recoveries and presentation of net realizable value."
    },

    {
        id: 3,
        title: "Inventory",
        description:
            "Apply inventory cost flow methods, valuation rules, write-downs, purchase commitments and related financial reporting concepts."
    },

    {
        id: 4,
        title: "Property, Plant & Equipment",
        description:
            "Account for acquisition costs, depreciation, disposals, exchanges, impairment and presentation of long-lived tangible assets."
    },

    {
        id: 5,
        title: "Intangible Assets",
        description:
            "Apply recognition, amortization and impairment rules for finite-lived and indefinite-lived intangible assets and goodwill."
    },

    {
        id: 6,
        title: "Current Liabilities",
        description:
            "Recognize and measure accounts payable, accrued liabilities, short-term obligations and other current liabilities."
    },

    {
        id: 7,
        title: "Long-Term Debt",
        description:
            "Account for bonds and notes payable, premiums, discounts, interest expense, extinguishments and debt presentation."
    },

    {
        id: 8,
        title: "Contingencies & Commitments",
        description:
            "Evaluate loss contingencies, gain contingencies, commitments and related recognition and disclosure requirements."
    },

    {
        id: 9,
        title: "Investments",
        description:
            "Account for debt and equity investments, unrealized gains and losses, impairment and financial statement classification."
    },

    {
        id: 10,
        title: "Equity Accounts",
        description:
            "Account for common and preferred stock, additional paid-in capital, treasury stock, retained earnings and dividends."
    }

],



    3: [

    {
        id: 1,
        title: "Accounting Changes & Error Corrections",
        description:
            "Learn retrospective and prospective treatment of accounting changes and prior-period errors."
    },

    {
        id: 2,
        title: "Contingencies & Commitments",
        description:
            "Determine when losses are accrued, disclosed, or not recognized, and analyze commitments."
    },

    {
        id: 3,
        title: "Revenue Recognition",
        description:
            "Apply the revenue recognition model to contracts, performance obligations, and transaction prices."
    },

    {
        id: 4,
        title: "Accounting for Income Taxes",
        description:
            "Understand current tax expense, deferred tax assets, deferred tax liabilities, and temporary differences."
    },

    {
        id: 5,
        title: "Fair Value Measurements",
        description:
            "Analyze fair value measurement concepts, valuation inputs, and the fair value hierarchy."
    },

    {
        id: 6,
        title: "Lessee Accounting",
        description:
            "Account for operating and finance leases from the lessee's perspective."
    },

    {
        id: 7,
        title: "Subsequent Events",
        description:
            "Determine whether events after year-end require adjustment, disclosure, or no action."
    },

    {
        id: 8,
        title: "Revenue Recognition — Advanced Applications",
        description:
            "Practice more complex revenue situations including variable consideration and contract modifications."
    },

    {
        id: 9,
        title: "Deferred Taxes & Valuation Allowances",
        description:
            "Work through deferred tax calculations, realizability, and valuation allowance analysis."
    },

    {
        id: 10,
        title: "Integrated Select Transactions Review",
        description:
            "Combine the major Module 3 topics in an integrated CPA-style review."
    }

],

4: [

    {
        id: 1,
        title: "Governmental Accounting Foundations",
        description:
            "Learn the purpose, structure, and core concepts of state and local governmental accounting."
    },

    {
        id: 2,
        title: "Governmental Funds",
        description:
            "Understand the General Fund, special revenue, capital projects, debt service, and permanent funds."
    },

    {
        id: 3,
        title: "Modified Accrual Accounting",
        description:
            "Learn modified accrual accounting and the measurable-and-available revenue recognition concept."
    },

    {
        id: 4,
        title: "Governmental Fund Financial Statements",
        description:
            "Understand governmental fund balance sheets and statements of revenues, expenditures, and changes in fund balances."
    },

    {
        id: 5,
        title: "Proprietary Funds",
        description:
            "Learn enterprise and internal service funds and how they use economic resources measurement and accrual accounting."
    },

    {
        id: 6,
        title: "Fiduciary Funds",
        description:
            "Understand custodial, pension and other employee benefit trust, investment trust, and private-purpose trust funds."
    },

    {
        id: 7,
        title: "Government-Wide Financial Statements",
        description:
            "Learn government-wide reporting, governmental and business-type activities, and the economic resources measurement focus."
    },

    {
        id: 8,
        title: "Governmental Fund to Government-Wide Reconciliation",
        description:
            "Convert governmental fund information to government-wide reporting by analyzing capital assets, debt, and other adjustments."
    },

    {
        id: 9,
        title: "Budgetary Accounting & Encumbrances",
        description:
            "Understand governmental budgets, appropriations, estimated revenues, expenditures, and encumbrance accounting."
    },

    {
        id: 10,
        title: "Governmental Accounting Integrated Review",
        description:
            "Combine fund classification, measurement focus, basis of accounting, financial statements, and governmental transactions."
    }

],

5: [

    {
        id: 1,
        title: "Not-for-Profit Accounting Foundations",
        description:
            "Learn the purpose, reporting model, and core financial statement concepts used by not-for-profit entities."
    },

    {
        id: 2,
        title: "Net Asset Classification",
        description:
            "Understand net assets with donor restrictions and net assets without donor restrictions."
    },

    {
        id: 3,
        title: "Contributions & Donor Restrictions",
        description:
            "Account for contributions, donor-imposed restrictions, and releases from restriction."
    },

    {
        id: 4,
        title: "Conditional Contributions",
        description:
            "Distinguish conditional from unconditional contributions and determine when contribution revenue is recognized."
    },

    {
        id: 5,
        title: "Not-for-Profit Financial Statements",
        description:
            "Understand the statement of financial position, statement of activities, and statement of cash flows."
    },

    {
        id: 6,
        title: "Expenses by Function & Nature",
        description:
            "Classify program services and supporting services and understand expense reporting by function and nature."
    },

    {
        id: 7,
        title: "Donated Services & Noncash Contributions",
        description:
            "Determine when donated services and other contributed nonfinancial assets should be recognized."
    },

    {
        id: 8,
        title: "Endowments & Investment Income",
        description:
            "Analyze donor-restricted endowments, investment returns, and related net asset classifications."
    },

    {
        id: 9,
        title: "Promises to Give & Contribution Receivables",
        description:
            "Account for unconditional promises to give, contribution receivables, present value, and collectibility."
    },

    {
        id: 10,
        title: "Not-for-Profit Integrated Review",
        description:
            "Combine contributions, restrictions, expenses, endowments, financial statements, and net asset reporting."
    }

],

6: [

    {
        id: 1,
        title: "Financial Statement Analysis & Adjustments",
        description:
            "Review how accounting adjustments affect assets, liabilities, income, equity, and key financial statement relationships."
    },

    {
        id: 2,
        title: "Revenue, Receivables & Cash Flow Review",
        description:
            "Integrate revenue recognition, receivables, credit losses, cash collections, and cash flow effects."
    },

    {
        id: 3,
        title: "Inventory & Long-Lived Asset Review",
        description:
            "Review inventory measurement, PP&E, depreciation, impairment, and intangible asset concepts."
    },

    {
        id: 4,
        title: "Liabilities, Debt & Contingencies Review",
        description:
            "Review current liabilities, bonds, long-term debt, contingencies, commitments, and related reporting effects."
    },

    {
        id: 5,
        title: "Equity & Investment Review",
        description:
            "Integrate stockholders' equity, retained earnings, investments, fair value, and related reporting concepts."
    },

    {
        id: 6,
        title: "Accounting Changes, Errors & Subsequent Events",
        description:
            "Review changes in principles and estimates, error corrections, and subsequent-event treatment."
    },

    {
        id: 7,
        title: "Governmental Accounting Final Review",
        description:
            "Review governmental fund reporting, measurement focus, basis of accounting, and government-wide concepts."
    },

    {
        id: 8,
        title: "Not-for-Profit Accounting Final Review",
        description:
            "Review contributions, donor restrictions, conditional gifts, donated services, endowments, and pledges."
    },

    {
        id: 9,
        title: "FAR Integrated Financial Statement Review",
        description:
            "Combine recognition, measurement, presentation, disclosure, and financial statement effects across FAR."
    },

    {
        id: 10,
        title: "FAR Exam Strategy & Final Comprehensive Review",
        description:
            "Review high-yield FAR relationships, common traps, integrated calculations, and exam-day problem solving."
    }

]

}

