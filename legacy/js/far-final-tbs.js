function showFARFinalTBSHome() {

    saveCurrentPage({
        page: "farFinalTBSHome"
    });

    setActiveNav("Learn");

    const hasActiveTBS =
    localStorage.getItem(
        "farFinalTBSActiveState"
    ) !== null;


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Final TBS Assessment
                </h1>

                <p>
                    Task-Based Simulations
                </p>

            </div>


            <button
                class="back-button"
                onclick="showFARFinalExam()"
            >
                ← Back to Final Exam
            </button>

        </header>


        <section>

            <div class="course-intro-card">

                <span class="exam-badge">
                    FINAL SIMULATIONS
                </span>

                <h2>
                    FAR Task-Based Simulation Assessment
                </h2>

                <p>
                    Complete cumulative CPA-style
                    simulations covering material from
                    across the FAR course.
                </p>


                <div class="course-stats">

                    <div>
                        <strong>7</strong>
                        <span>Simulations</span>
                    </div>

                    <div>
                        <strong>FAR</strong>
                        <span>Cumulative</span>
                    </div>

                    <div>
                        <strong>TBS</strong>
                        <span>Final Assessment</span>
                    </div>

                </div>

            </div>


            <div class="key-points">

                <h3>
                    Assessment Format
                </h3>

                <p>
                    These simulations will test
                    calculations, journal entries,
                    financial reporting decisions,
                    and integrated FAR concepts.
                </p>

                <p>
                    Answers and explanations will not
                    be shown until the assessment
                    is submitted.
                </p>

            </div>


            <div class="lesson-actions">

                <button
    class="primary-button"
    onclick="${
        hasActiveTBS
            ? "resumeFARFinalTBSAssessment()"
            : "startFARFinalTBSAssessment()"
    }"
>
    ${
        hasActiveTBS
            ? "Resume TBS Assessment"
            : "Begin TBS Assessment"
    }
</button>

                <button
                    class="back-button"
                    onclick="showFARFinalExam()"
                >
                    ← Back to Final Exam
                </button>

            </div>

        </section>

    `;

}

function resumeFARFinalTBSAssessment() {

    const restored =
        loadFARFinalTBSState();

    if (!restored) {

        startFARFinalTBSAssessment();
        return;

    }


    saveCurrentPage({
        page: "farFinalTBSActive",
        tbsIndex: farFinalTBSIndex
    });


    const tbsFunctions = [
        showFARFinalTBS1,
        showFARFinalTBS2,
        showFARFinalTBS3,
        showFARFinalTBS4,
        showFARFinalTBS5,
        showFARFinalTBS6,
        showFARFinalTBS7
    ];


    const showTBS =
        tbsFunctions[
            farFinalTBSIndex
        ];


    if (showTBS) {

        showTBS();

    } else {

        showFARFinalTBS1();

    }

}

function startFARFinalTBSAssessment() {

    farFinalTBSIndex = 0;

    farFinalTBSAnswers =
        new Array(7).fill(null);

    saveCurrentPage({
        page: "farFinalTBSActive",
        tbsIndex: 0
    });

    saveFARFinalTBSState();

    showFARFinalTBS1();

}

function showFARFinalTBS1() {

    farFinalTBSIndex = 0;

    saveFARFinalTBSState();

    saveCurrentPage({
        page: "farFinalTBSActive",
        tbsIndex: 0
    });


    const savedAnswer =
        farFinalTBSAnswers[0] || {};


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Final TBS Assessment
                </h1>

                <p>
                    Simulation 1 of 7
                </p>

            </div>


            <button
                class="back-button"
                onclick="showFARFinalTBSHome()"
            >
                ← Exit Assessment
            </button>

        </header>


        <section class="exam-page">

        ${
    farFinalTBSReviewMode
        ? `
            <button
                class="back-button"
                onclick="returnToFARFinalTBSReview()"
            >
                ← Back to Review
            </button>
        `
        : ""
}

            <div class="course-intro-card">

                <span class="exam-badge">
                    TBS 1 OF 7
                </span>

                <h2>
                    Year-End Financial Statement Adjustments
                </h2>

                <p>
                    Summit Company reports preliminary
                    net income of
                    <strong>$400,000</strong>
                    before the following year-end
                    adjustments are recorded.
                </p>

            </div>


            <div class="course-intro-card">

                <h3>
                    Year-End Information
                </h3>

                <ol>

                    <li>
                        <strong>$18,000</strong>
                        of prepaid insurance expired
                        during the year but has not
                        yet been recorded as expense.
                    </li>

                    <li>
                        The company earned
                        <strong>$24,000</strong>
                        of service revenue that has
                        not yet been billed or recorded.
                    </li>

                    <li>
                        Current-year depreciation of
                        <strong>$30,000</strong>
                        has not yet been recorded.
                    </li>

                    <li>
                        Utilities expense of
                        <strong>$12,000</strong>
                        has been incurred but has not
                        yet been recorded or paid.
                    </li>

                    <li>
                        Ending inventory is
                        <strong>overstated by $10,000</strong>.
                    </li>

                </ol>

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 1 — Adjusted Net Income
                </h3>

                <input
                    id="far-final-tbs1-net-income"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.netIncome ?? ""
                    }"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 2 — Increase in Accounts Receivable
                </h3>

                <input
                    id="far-final-tbs1-ar"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.ar ?? ""
                    }"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 3 — Decrease in Inventory
                </h3>

                <input
                    id="far-final-tbs1-inventory"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.inventory ?? ""
                    }"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 4 — Increase in Liabilities
                </h3>

                <input
                    id="far-final-tbs1-liabilities"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.liabilities ?? ""
                    }"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 5 — Net Change in Total Assets
                </h3>

                <p>
                    Enter a decrease as a negative number.
                </p>

                <input
                    id="far-final-tbs1-assets"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.assets ?? ""
                    }"
                >

            </div>


            <div class="lesson-actions">

                <button
                    class="primary-button"
                    onclick="saveFARFinalTBS1()"
                >
                    Save & Continue →
                </button>

            </div>

        </section>

    `;

}

function saveFARFinalTBS1() {

    const netIncome =
        document.getElementById(
            "far-final-tbs1-net-income"
        ).value.trim();

    const ar =
        document.getElementById(
            "far-final-tbs1-ar"
        ).value.trim();

    const inventory =
        document.getElementById(
            "far-final-tbs1-inventory"
        ).value.trim();

    const liabilities =
        document.getElementById(
            "far-final-tbs1-liabilities"
        ).value.trim();

    const assets =
        document.getElementById(
            "far-final-tbs1-assets"
        ).value.trim();


    if (
        netIncome === "" ||
        ar === "" ||
        inventory === "" ||
        liabilities === "" ||
        assets === ""
    ) {

        alert(
            "Please complete all five items before continuing."
        );

        return;

    }


    farFinalTBSAnswers[0] = {

        netIncome:
            Number(netIncome),

        ar:
            Number(ar),

        inventory:
            Number(inventory),

        liabilities:
            Number(liabilities),

        assets:
            Number(assets)

    };


    showFARFinalTBS1Saved();
    saveFARFinalTBSState();

}

function showFARFinalTBS1Saved() {

    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Final TBS Assessment
                </h1>

                <p>
                    Simulation 1 of 7
                </p>

            </div>

        </header>


        <section class="exam-page">

            <div class="course-intro-card">

                <span class="exam-badge">
                    RESPONSE SAVED
                </span>

                <h2>
                    TBS 1 Complete
                </h2>

                <p>
                    Your responses have been saved.
                </p>

                <p>
                    Answers and explanations will not
                    be shown until the full assessment
                    is submitted.
                </p>

            </div>


            <div class="lesson-actions">

                <button
                    class="back-button"
                    onclick="showFARFinalTBS1()"
                >
                    ← Review TBS 1
                </button>

                <button
    class="primary-button"
    onclick="showFARFinalTBS2()"
>
    Continue to TBS 2 →
</button>

            </div>

        </section>

    `;

}

function showFARFinalTBS2() {

    farFinalTBSIndex = 1;

    saveFARFinalTBSState();

    saveCurrentPage({
        page: "farFinalTBSActive",
        tbsIndex: 1
    });


    const savedAnswer =
        farFinalTBSAnswers[1] || {};


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Final TBS Assessment
                </h1>

                <p>
                    Simulation 2 of 7
                </p>

            </div>


            <button
                class="back-button"
                onclick="showFARFinalTBS1()"
            >
                ← Previous TBS
            </button>

        </header>


        <section class="exam-page">

          ${
    farFinalTBSReviewMode
        ? `
            <button
                class="back-button"
                onclick="returnToFARFinalTBSReview()"
            >
                ← Back to Review
            </button>
        `
        : ""
}

            <div class="course-intro-card">

                <span class="exam-badge">
                    TBS 2 OF 7
                </span>

                <h2>
                    Operating Cycle Analysis
                </h2>

                <p>
                    Orion Company reports the following
                    financial information for the current year.
                    Analyze receivables, inventory,
                    credit losses, and operating cash flow.
                </p>

            </div>


            <div class="course-intro-card">

                <h3>
                    Financial Information
                </h3>

                <ul>

                    <li>
                        Beginning Accounts Receivable:
                        <strong>$180,000</strong>
                    </li>

                    <li>
                        Ending Accounts Receivable before
                        year-end credit-loss adjustment:
                        <strong>$220,000</strong>
                    </li>

                    <li>
                        Sales revenue on account:
                        <strong>$900,000</strong>
                    </li>

                    <li>
                        Allowance for Credit Losses has a
                        <strong>$3,000 debit balance</strong>
                        before adjustment.
                    </li>

                    <li>
                        Required ending Allowance for
                        Credit Losses:
                        <strong>$16,000 credit balance</strong>
                    </li>

                    <li>
                        Beginning Inventory:
                        <strong>$140,000</strong>
                    </li>

                    <li>
                        Purchases:
                        <strong>$500,000</strong>
                    </li>

                    <li>
                        Ending Inventory:
                        <strong>$170,000</strong>
                    </li>

                    <li>
                        Net income:
                        <strong>$210,000</strong>
                    </li>

                    <li>
                        Depreciation expense:
                        <strong>$35,000</strong>
                    </li>

                    <li>
                        Accounts Payable increased by:
                        <strong>$20,000</strong>
                    </li>

                </ul>

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 1 — Cash Collected from Customers
                </h3>

                <input
                    id="far-final-tbs2-cash-collected"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.cashCollected ?? ""
                    }"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 2 — Credit Loss Expense
                </h3>

                <input
                    id="far-final-tbs2-credit-loss"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.creditLoss ?? ""
                    }"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 3 — Cost of Goods Sold
                </h3>

                <input
                    id="far-final-tbs2-cogs"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.cogs ?? ""
                    }"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 4 — Inventory Adjustment in CFO
                </h3>

                <p>
                    Enter the adjustment as a positive
                    amount if added to net income or
                    a negative amount if subtracted.
                </p>

                <input
                    id="far-final-tbs2-inventory-cfo"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.inventoryCFO ?? ""
                    }"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 5 — Net Cash Provided by Operating Activities
                </h3>

                <input
                    id="far-final-tbs2-cfo"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.cfo ?? ""
                    }"
                >

            </div>


            <div class="lesson-actions">

                <button
                    class="back-button"
                    onclick="showFARFinalTBS1()"
                >
                    ← Previous TBS
                </button>

                <button
                    class="primary-button"
                    onclick="saveFARFinalTBS2()"
                >
                    Save & Continue →
                </button>

            </div>

        </section>

    `;

}

function saveFARFinalTBS2() {

    const cashCollected =
        document.getElementById(
            "far-final-tbs2-cash-collected"
        ).value.trim();

    const creditLoss =
        document.getElementById(
            "far-final-tbs2-credit-loss"
        ).value.trim();

    const cogs =
        document.getElementById(
            "far-final-tbs2-cogs"
        ).value.trim();

    const inventoryCFO =
        document.getElementById(
            "far-final-tbs2-inventory-cfo"
        ).value.trim();

    const cfo =
        document.getElementById(
            "far-final-tbs2-cfo"
        ).value.trim();


    if (
        cashCollected === "" ||
        creditLoss === "" ||
        cogs === "" ||
        inventoryCFO === "" ||
        cfo === ""
    ) {

        alert(
            "Please complete all five items before continuing."
        );

        return;

    }


    farFinalTBSAnswers[1] = {

        cashCollected:
            Number(cashCollected),

        creditLoss:
            Number(creditLoss),

        cogs:
            Number(cogs),

        inventoryCFO:
            Number(inventoryCFO),

        cfo:
            Number(cfo)

    };


    showFARFinalTBS2Saved();
    saveFARFinalTBSState();

}

function showFARFinalTBS2Saved() {

    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Final TBS Assessment
                </h1>

                <p>
                    Simulation 2 of 7
                </p>

            </div>

        </header>


        <section class="exam-page">

            <div class="course-intro-card">

                <span class="exam-badge">
                    RESPONSE SAVED
                </span>

                <h2>
                    TBS 2 Complete
                </h2>

                <p>
                    Your responses have been saved.
                </p>

                <p>
                    Answers and explanations will not
                    be shown until the full assessment
                    is submitted.
                </p>

            </div>


            <div class="lesson-actions">

                <button
                    class="back-button"
                    onclick="showFARFinalTBS2()"
                >
                    ← Review TBS 2
                </button>

                <button
    class="primary-button"
    onclick="showFARFinalTBS3()"
>
    Continue to TBS 3 →
</button>

            </div>

        </section>

    `;

}

function showFARFinalTBS3() {

    farFinalTBSIndex = 2;

    saveFARFinalTBSState();

    saveCurrentPage({
        page: "farFinalTBSActive",
        tbsIndex: 2
    });


    const savedAnswer =
        farFinalTBSAnswers[2] || {};


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Final TBS Assessment
                </h1>

                <p>
                    Simulation 3 of 7
                </p>

            </div>


            <button
                class="back-button"
                onclick="showFARFinalTBS2()"
            >
                ← Previous TBS
            </button>

        </header>


        <section class="exam-page">

          ${
    farFinalTBSReviewMode
        ? `
            <button
                class="back-button"
                onclick="returnToFARFinalTBSReview()"
            >
                ← Back to Review
            </button>
        `
        : ""
}

            <div class="course-intro-card">

                <span class="exam-badge">
                    TBS 3 OF 7
                </span>

                <h2>
                    Asset, Debt & Investment Analysis
                </h2>

                <p>
                    Summit Company is completing its
                    year-end financial statements.
                    Analyze the following independent
                    matters involving long-lived assets,
                    debt, and investments.
                </p>

            </div>


            <div class="course-intro-card">

                <h3>
                    Year-End Information
                </h3>

                <ol>

                    <li>
                        Equipment has an original cost of
                        <strong>$480,000</strong>
                        and accumulated depreciation of
                        <strong>$120,000</strong>.

                        Expected undiscounted future cash
                        flows are
                        <strong>$330,000</strong>
                        and fair value is
                        <strong>$300,000</strong>.
                    </li>

                    <li>
                        Bonds payable have a face amount of
                        <strong>$1,000,000</strong>,
                        a stated annual interest rate of
                        <strong>6%</strong>,
                        and a beginning carrying amount of
                        <strong>$940,000</strong>.

                        The effective annual interest rate is
                        <strong>8%</strong>.

                        Interest is paid annually.
                    </li>

                    <li>
                        A debt security classified as a
                        trading investment has a carrying
                        amount of
                        <strong>$190,000</strong>
                        before the year-end fair value
                        adjustment.

                        Its year-end fair value is
                        <strong>$215,000</strong>.
                    </li>

                    <li>
                        Assume there are no income tax effects
                        and no other transactions affecting
                        the amounts requested below.
                    </li>

                </ol>

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 1 — Equipment Impairment Loss
                </h3>

                <input
                    id="far-final-tbs3-impairment"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.impairment ?? ""
                    }"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 2 — Bond Interest Expense
                </h3>

                <input
                    id="far-final-tbs3-interest"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.interest ?? ""
                    }"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 3 — Bond Discount Amortization
                </h3>

                <input
                    id="far-final-tbs3-amortization"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.amortization ?? ""
                    }"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 4 — Unrealized Gain on Trading Investment
                </h3>

                <input
                    id="far-final-tbs3-investment-gain"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.investmentGain ?? ""
                    }"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 5 — Combined Effect on Net Income
                </h3>

                <p>
                    Enter a decrease in net income
                    as a negative amount.
                </p>

                <input
                    id="far-final-tbs3-net-income"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.netIncome ?? ""
                    }"
                >

            </div>


            <div class="lesson-actions">

                <button
                    class="back-button"
                    onclick="showFARFinalTBS2()"
                >
                    ← Previous TBS
                </button>

                <button
                    class="primary-button"
                    onclick="saveFARFinalTBS3()"
                >
                    Save & Continue →
                </button>

            </div>

        </section>

    `;

}

function saveFARFinalTBS3() {

    const impairment =
        document.getElementById(
            "far-final-tbs3-impairment"
        ).value.trim();

    const interest =
        document.getElementById(
            "far-final-tbs3-interest"
        ).value.trim();

    const amortization =
        document.getElementById(
            "far-final-tbs3-amortization"
        ).value.trim();

    const investmentGain =
        document.getElementById(
            "far-final-tbs3-investment-gain"
        ).value.trim();

    const netIncome =
        document.getElementById(
            "far-final-tbs3-net-income"
        ).value.trim();


    if (
        impairment === "" ||
        interest === "" ||
        amortization === "" ||
        investmentGain === "" ||
        netIncome === ""
    ) {

        alert(
            "Please complete all five items before continuing."
        );

        return;

    }


    farFinalTBSAnswers[2] = {

        impairment:
            Number(impairment),

        interest:
            Number(interest),

        amortization:
            Number(amortization),

        investmentGain:
            Number(investmentGain),

        netIncome:
            Number(netIncome)

    };


    showFARFinalTBS3Saved();
    saveFARFinalTBSState();

}

function showFARFinalTBS3Saved() {

    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Final TBS Assessment
                </h1>

                <p>
                    Simulation 3 of 7
                </p>

            </div>

        </header>


        <section class="exam-page">

            <div class="course-intro-card">

                <span class="exam-badge">
                    RESPONSE SAVED
                </span>

                <h2>
                    TBS 3 Complete
                </h2>

                <p>
                    Your responses have been saved.
                </p>

                <p>
                    Answers and explanations will not
                    be shown until the full assessment
                    is submitted.
                </p>

            </div>


            <div class="lesson-actions">

                <button
                    class="back-button"
                    onclick="showFARFinalTBS3()"
                >
                    ← Review TBS 3
                </button>

                <button
    class="primary-button"
    onclick="showFARFinalTBS4()"
>
    Continue to TBS 4 →
</button>

            </div>

        </section>

    `;

}

function showFARFinalTBS4() {

    farFinalTBSIndex = 3;

    saveFARFinalTBSState();

    saveCurrentPage({
        page: "farFinalTBSActive",
        tbsIndex: 3
    });


    const savedAnswer =
        farFinalTBSAnswers[3] || {};


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Final TBS Assessment
                </h1>

                <p>
                    Simulation 4 of 7
                </p>

            </div>


            <button
                class="back-button"
                onclick="showFARFinalTBS3()"
            >
                ← Previous TBS
            </button>

        </header>


        <section class="exam-page">

         ${
    farFinalTBSReviewMode
        ? `
            <button
                class="back-button"
                onclick="returnToFARFinalTBSReview()"
            >
                ← Back to Review
            </button>
        `
        : ""
}

            <div class="course-intro-card">

                <span class="exam-badge">
                    TBS 4 OF 7
                </span>

                <h2>
                    Governmental and NFP Reporting Analysis
                </h2>

                <p>
                    Analyze the following independent
                    year-end transactions involving
                    a state and local government
                    and a not-for-profit organization.
                </p>

            </div>


            <div class="course-intro-card">

                <h3>
                    Governmental Information
                </h3>

                <ol>

                    <li>
                        A city's General Fund recognizes
                        <strong>$500,000</strong>
                        of measurable property taxes.

                        Of this amount,
                        <strong>$450,000</strong>
                        is collected during the current year,
                        <strong>$30,000</strong>
                        is collected soon enough after
                        year-end to meet the city's
                        availability criterion, and
                        <strong>$20,000</strong>
                        is not available under that criterion.
                    </li>

                    <li>
                        The city's Capital Projects Fund
                        receives
                        <strong>$1,200,000</strong>
                        from the issuance of
                        general obligation bonds.
                    </li>

                    <li>
                        The city purchases equipment
                        for
                        <strong>$300,000</strong>
                        for use in governmental activities.

                        Ignore depreciation for the
                        current period.
                    </li>

                </ol>

            </div>


            <div class="course-intro-card">

                <h3>
                    Not-for-Profit Information
                </h3>

                <ol>

                    <li>
                        An NFP receives an unconditional
                        contribution of
                        <strong>$200,000</strong>
                        restricted by the donor for
                        a specific program.
                    </li>

                    <li>
                        During the year, the NFP incurs
                        <strong>$80,000</strong>
                        of qualifying expenditures
                        that satisfy that donor restriction.
                    </li>

                    <li>
                        The NFP also receives
                        <strong>$150,000</strong>
                        in cash under a conditional grant.

                        The agreement contains a substantive
                        barrier and a right of return.

                        At year-end, the barrier has
                        not been overcome.
                    </li>

                </ol>

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 1 — Governmental Fund Property Tax Revenue
                </h3>

                <input
                    id="far-final-tbs4-tax-revenue"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.taxRevenue ?? ""
                    }"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 2 — Bond Proceeds in Capital Projects Fund
                </h3>

                <input
                    id="far-final-tbs4-bond-proceeds"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.bondProceeds ?? ""
                    }"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 3 — Government-Wide Capital Asset Increase
                </h3>

                <input
                    id="far-final-tbs4-capital-asset"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.capitalAsset ?? ""
                    }"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 4 — Remaining Donor-Restricted Net Assets
                </h3>

                <input
                    id="far-final-tbs4-restricted"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.restricted ?? ""
                    }"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 5 — Conditional Grant Liability
                </h3>

                <input
                    id="far-final-tbs4-conditional"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.conditional ?? ""
                    }"
                >

            </div>


            <div class="lesson-actions">

                <button
                    class="back-button"
                    onclick="showFARFinalTBS3()"
                >
                    ← Previous TBS
                </button>

                <button
                    class="primary-button"
                    onclick="saveFARFinalTBS4()"
                >
                    Save & Continue →
                </button>

            </div>

        </section>

    `;

}

function saveFARFinalTBS4() {

    const taxRevenue =
        document.getElementById(
            "far-final-tbs4-tax-revenue"
        ).value.trim();

    const bondProceeds =
        document.getElementById(
            "far-final-tbs4-bond-proceeds"
        ).value.trim();

    const capitalAsset =
        document.getElementById(
            "far-final-tbs4-capital-asset"
        ).value.trim();

    const restricted =
        document.getElementById(
            "far-final-tbs4-restricted"
        ).value.trim();

    const conditional =
        document.getElementById(
            "far-final-tbs4-conditional"
        ).value.trim();


    if (
        taxRevenue === "" ||
        bondProceeds === "" ||
        capitalAsset === "" ||
        restricted === "" ||
        conditional === ""
    ) {

        alert(
            "Please complete all five items before continuing."
        );

        return;

    }


    farFinalTBSAnswers[3] = {

        taxRevenue:
            Number(taxRevenue),

        bondProceeds:
            Number(bondProceeds),

        capitalAsset:
            Number(capitalAsset),

        restricted:
            Number(restricted),

        conditional:
            Number(conditional)

    };


    showFARFinalTBS4Saved();
    saveFARFinalTBSState();

}



function showFARFinalTBS4Saved() {

    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Final TBS Assessment
                </h1>

                <p>
                    Simulation 4 of 7
                </p>

            </div>

        </header>


        <section class="exam-page">

            <div class="course-intro-card">

                <span class="exam-badge">
                    RESPONSE SAVED
                </span>

                <h2>
                    TBS 4 Complete
                </h2>

                <p>
                    Your responses have been saved.
                </p>

                <p>
                    Answers and explanations will not
                    be shown until the full assessment
                    is submitted.
                </p>

            </div>


            <div class="lesson-actions">

                <button
                    class="back-button"
                    onclick="showFARFinalTBS4()"
                >
                    ← Review TBS 4
                </button>

                <button
    class="primary-button"
    onclick="showFARFinalTBS5()"
>
    Continue to TBS 5 →
</button>

            </div>

        </section>

    `;

}

function showFARFinalTBS5() {

    farFinalTBSIndex = 4;

    saveFARFinalTBSState();

    saveCurrentPage({
        page: "farFinalTBSActive",
        tbsIndex: 4
    });


    const savedAnswer =
        farFinalTBSAnswers[4] || {};


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Final TBS Assessment
                </h1>

                <p>
                    Simulation 5 of 7
                </p>

            </div>


            <button
                class="back-button"
                onclick="showFARFinalTBS4()"
            >
                ← Previous TBS
            </button>

        </header>


        <section class="exam-page">

        ${
    farFinalTBSReviewMode
        ? `
            <button
                class="back-button"
                onclick="returnToFARFinalTBSReview()"
            >
                ← Back to Review
            </button>
        `
        : ""
}


            <div class="course-intro-card">

                <span class="exam-badge">
                    TBS 5 OF 7
                </span>

                <h2>
                    Comprehensive FAR Analysis
                </h2>

                <p>
                    Complete the following independent
                    year-end analyses using concepts
                    from across the FAR course.
                </p>

            </div>

            <div class="course-intro-card">

                <h3>
                    Part A — Financial Statement Adjustments
                </h3>

                <p>
                    Meridian Company reports preliminary
                    net income of
                    <strong>$520,000</strong>.
                </p>

                <ol>

                    <li>
                        Salaries of
                        <strong>$28,000</strong>
                        have been earned by employees
                        but have not been recorded.
                    </li>

                    <li>
                        Service revenue of
                        <strong>$22,000</strong>
                        has been earned but not recorded.
                    </li>

                    <li>
                        Depreciation expense of
                        <strong>$35,000</strong>
                        has not been recorded.
                    </li>

                    <li>
                        Ending inventory is understated by
                        <strong>$8,000</strong>.
                    </li>

                </ol>

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 1 — Adjusted Net Income
                </h3>

                <input
                    id="far-final-tbs5-net-income"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.netIncome ?? ""
                    }"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Part B — Accounts Receivable
                </h3>

                <p>
                    Beginning Accounts Receivable was
                    <strong>$160,000</strong>.
                </p>

                <p>
                    Credit sales were
                    <strong>$850,000</strong>
                    and cash collections were
                    <strong>$805,000</strong>.
                </p>

                <p>
                    No receivables were written off.
                </p>

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 2 — Ending Accounts Receivable
                </h3>

                <input
                    id="far-final-tbs5-ar"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.ar ?? ""
                    }"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Part C — Bonds Payable
                </h3>

                <p>
                    Bonds have a face amount of
                    <strong>$800,000</strong>
                    and a beginning carrying amount of
                    <strong>$760,000</strong>.
                </p>

                <p>
                    The stated annual interest rate is
                    <strong>5%</strong>,
                    the effective annual rate is
                    <strong>7%</strong>,
                    and interest is paid annually.
                </p>

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 3 — Ending Bond Carrying Amount
                </h3>

                <input
                    id="far-final-tbs5-bond"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.bond ?? ""
                    }"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Part D — Statement of Cash Flows
                </h3>

                <ul>

                    <li>
                        Net income:
                        <strong>$460,000</strong>
                    </li>

                    <li>
                        Depreciation expense:
                        <strong>$55,000</strong>
                    </li>

                    <li>
                        Accounts Receivable increased:
                        <strong>$18,000</strong>
                    </li>

                    <li>
                        Inventory decreased:
                        <strong>$12,000</strong>
                    </li>

                    <li>
                        Accounts Payable decreased:
                        <strong>$7,000</strong>
                    </li>

                </ul>

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 4 — Net Cash Provided by Operating Activities
                </h3>

                <input
                    id="far-final-tbs5-cfo"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.cfo ?? ""
                    }"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Part E — Not-for-Profit Accounting
                </h3>

                <p>
                    An NFP begins the year with
                    <strong>$40,000</strong>
                    of net assets with donor restrictions.
                </p>

                <p>
                    During the year, it receives an
                    unconditional donor-restricted
                    contribution of
                    <strong>$125,000</strong>.
                </p>

                <p>
                    It incurs
                    <strong>$80,000</strong>
                    of qualifying expenditures that
                    satisfy donor restrictions.
                </p>

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 5 — Ending Net Assets With Donor Restrictions
                </h3>

                <input
                    id="far-final-tbs5-restricted"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.restricted ?? ""
                    }"
                >

            </div>


            <div class="lesson-actions">

                <button
                    class="back-button"
                    onclick="showFARFinalTBS4()"
                >
                    ← Previous TBS
                </button>

                <button
                    class="primary-button"
                    onclick="saveFARFinalTBS5()"
                >
                    Save & Continue →
                </button>

            </div>

        </section>

    `;

}

function saveFARFinalTBS5() {

    const netIncome =
        document.getElementById(
            "far-final-tbs5-net-income"
        ).value.trim();

    const ar =
        document.getElementById(
            "far-final-tbs5-ar"
        ).value.trim();

    const bond =
        document.getElementById(
            "far-final-tbs5-bond"
        ).value.trim();

    const cfo =
        document.getElementById(
            "far-final-tbs5-cfo"
        ).value.trim();

    const restricted =
        document.getElementById(
            "far-final-tbs5-restricted"
        ).value.trim();


    if (
        netIncome === "" ||
        ar === "" ||
        bond === "" ||
        cfo === "" ||
        restricted === ""
    ) {

        alert(
            "Please complete all five items before continuing."
        );

        return;

    }


    farFinalTBSAnswers[4] = {

        netIncome:
            Number(netIncome),

        ar:
            Number(ar),

        bond:
            Number(bond),

        cfo:
            Number(cfo),

        restricted:
            Number(restricted)

    };


    showFARFinalTBS5Saved();
    saveFARFinalTBSState();

}


function showFARFinalTBS5Saved() {

    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Final TBS Assessment
                </h1>

                <p>
                    Simulation 5 of 7
                </p>

            </div>

        </header>


        <section class="exam-page">

            <div class="course-intro-card">

                <span class="exam-badge">
                    RESPONSE SAVED
                </span>

                <h2>
                    TBS 5 Complete
                </h2>

                <p>
                    Your responses have been saved.
                </p>

                <p>
                    Answers and explanations will not
                    be shown until the full assessment
                    is submitted.
                </p>

            </div>


            <div class="lesson-actions">

                <button
                    class="back-button"
                    onclick="showFARFinalTBS5()"
                >
                    ← Review TBS 5
                </button>

                <button
    class="primary-button"
    onclick="showFARFinalTBS6()"
>
    Continue to TBS 6 →
</button>

            </div>

        </section>

    `;

}

function showFARFinalTBS6() {

    farFinalTBSIndex = 5;

    saveFARFinalTBSState();

    saveCurrentPage({
        page: "farFinalTBSActive",
        tbsIndex: 5
    });


    const savedAnswer =
        farFinalTBSAnswers[5] || {};


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Final TBS Assessment
                </h1>

                <p>
                    Simulation 6 of 7
                </p>

            </div>


            <button
                class="back-button"
                onclick="showFARFinalTBS5()"
            >
                ← Previous TBS
            </button>

        </header>


        <section class="exam-page">

         ${
    farFinalTBSReviewMode
        ? `
            <button
                class="back-button"
                onclick="returnToFARFinalTBSReview()"
            >
                ← Back to Review
            </button>
        `
        : ""
}

            <div class="course-intro-card">

                <span class="exam-badge">
                    TBS 6 OF 7
                </span>

                <h2>
                    Accounting Changes, Errors & Subsequent Events
                </h2>

                <p>
                    Analyze the following independent
                    year-end matters and determine the
                    required financial statement effects.
                </p>

            </div>


            <div class="course-intro-card">

                <h3>
                    Part A — Change in Accounting Estimate
                </h3>

                <p>
                    Equipment was purchased for
                    <strong>$280,000</strong>
                    on January 1, Year 1.
                </p>

                <p>
                    The equipment originally had a
                    <strong>6-year useful life</strong>
                    and a
                    <strong>$40,000 residual value</strong>.
                </p>

                <p>
                    Straight-line depreciation is used.
                </p>

                <p>
                    At the beginning of Year 3,
                    after two full years of depreciation,
                    management revises the asset's
                    <strong>total useful life to 8 years</strong>
                    and its residual value to
                    <strong>$20,000</strong>.
                </p>

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 1 — Year 3 Depreciation Expense
                </h3>

                <input
                    id="far-final-tbs6-depreciation"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.depreciation ?? ""
                    }"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Part B — Prior-Period Inventory Error
                </h3>

                <p>
                    After the Year 2 financial statements
                    were issued, the company discovers that
                    Year 2 ending inventory was
                    <strong>understated by $25,000</strong>.
                </p>

                <p>
                    Ignore income taxes.
                </p>

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 2 — Beginning Retained Earnings Adjustment
                </h3>

                <p>
                    Enter the amount by which beginning
                    retained earnings in Year 3 should increase.
                </p>

                <input
                    id="far-final-tbs6-retained-earnings"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.retainedEarnings ?? ""
                    }"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Part C — Customer Bankruptcy After Year-End
                </h3>

                <p>
                    At December 31, the company has an
                    Accounts Receivable balance of
                    <strong>$60,000</strong>
                    from a major customer.
                </p>

                <p>
                    In January, before the financial
                    statements are issued, the customer
                    files for bankruptcy.
                </p>

                <p>
                    The bankruptcy confirms severe
                    financial difficulties that already
                    existed at December 31.
                </p>

                <p>
                    The company now expects to collect only
                    <strong>$10,000</strong>.
                </p>

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 3 — Loss Recognized at December 31
                </h3>

                <input
                    id="far-final-tbs6-bankruptcy"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.bankruptcy ?? ""
                    }"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Part D — Fire After Year-End
                </h3>

                <p>
                    On January 20, before the financial
                    statements are issued, a warehouse
                    is destroyed by a fire.
                </p>

                <p>
                    The fire resulted from an event
                    that occurred entirely after
                    December 31.
                </p>

                <p>
                    The uninsured loss is
                    <strong>$200,000</strong>.
                </p>

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 4 — Loss Recognized in December 31 Financial Statements
                </h3>

                <p>
                    Enter zero if no loss should be
                    recognized in the December 31
                    financial statements.
                </p>

                <input
                    id="far-final-tbs6-fire"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.fire ?? ""
                    }"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 5 — Combined Effect on Year 3 Net Income
                </h3>

                <p>
                    Consider only:
                </p>

                <ul>

                    <li>
                        the change in depreciation
                        estimate from Part A,
                    </li>

                    <li>
                        the customer bankruptcy adjustment
                        from Part C, and
                    </li>

                    <li>
                        the warehouse fire from Part D.
                    </li>

                </ul>

                <p>
                    Compare Year 3 net income with the
                    amount that would have been reported
                    if the original depreciation estimate
                    had continued and neither subsequent
                    event had been considered.
                </p>

                <p>
                    Enter a net decrease as a
                    negative number.
                </p>

                <input
                    id="far-final-tbs6-net-income"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.netIncome ?? ""
                    }"
                >

            </div>


            <div class="lesson-actions">

                <button
                    class="back-button"
                    onclick="showFARFinalTBS5()"
                >
                    ← Previous TBS
                </button>

                <button
                    class="primary-button"
                    onclick="saveFARFinalTBS6()"
                >
                    Save & Continue →
                </button>

            </div>

        </section>

    `;

}

function saveFARFinalTBS6() {

    const depreciation =
        document.getElementById(
            "far-final-tbs6-depreciation"
        ).value.trim();

    const retainedEarnings =
        document.getElementById(
            "far-final-tbs6-retained-earnings"
        ).value.trim();

    const bankruptcy =
        document.getElementById(
            "far-final-tbs6-bankruptcy"
        ).value.trim();

    const fire =
        document.getElementById(
            "far-final-tbs6-fire"
        ).value.trim();

    const netIncome =
        document.getElementById(
            "far-final-tbs6-net-income"
        ).value.trim();


    if (
        depreciation === "" ||
        retainedEarnings === "" ||
        bankruptcy === "" ||
        fire === "" ||
        netIncome === ""
    ) {

        alert(
            "Please complete all five items before continuing."
        );

        return;

    }


    farFinalTBSAnswers[5] = {

        depreciation:
            Number(depreciation),

        retainedEarnings:
            Number(retainedEarnings),

        bankruptcy:
            Number(bankruptcy),

        fire:
            Number(fire),

        netIncome:
            Number(netIncome)

    };


    showFARFinalTBS6Saved();
    saveFARFinalTBSState();

}


function showFARFinalTBS6Saved() {

    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Final TBS Assessment
                </h1>

                <p>
                    Simulation 6 of 7
                </p>

            </div>

        </header>


        <section class="exam-page">

            <div class="course-intro-card">

                <span class="exam-badge">
                    RESPONSE SAVED
                </span>

                <h2>
                    TBS 6 Complete
                </h2>

                <p>
                    Your responses have been saved.
                </p>

                <p>
                    Answers and explanations will not
                    be shown until the full assessment
                    is submitted.
                </p>

            </div>


            <div class="lesson-actions">

                <button
                    class="back-button"
                    onclick="showFARFinalTBS6()"
                >
                    ← Review TBS 6
                </button>

                <button
    class="primary-button"
    onclick="showFARFinalTBS7()"
>
    Continue to TBS 7 →
</button>

            </div>

        </section>

    `;

}

function showFARFinalTBS7() {

    farFinalTBSIndex = 6;

    saveFARFinalTBSState();

    saveCurrentPage({
        page: "farFinalTBSActive",
        tbsIndex: 6
    });


    const savedAnswer =
        farFinalTBSAnswers[6] || {};


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Final TBS Assessment
                </h1>

                <p>
                    Simulation 7 of 7
                </p>

            </div>


            <button
                class="back-button"
                onclick="showFARFinalTBS6()"
            >
                ← Previous TBS
            </button>

        </header>


        <section class="exam-page">

        ${
    farFinalTBSReviewMode
        ? `
            <button
                class="back-button"
                onclick="returnToFARFinalTBSReview()"
            >
                ← Back to Review
            </button>
        `
        : ""
}

            <div class="course-intro-card">

                <span class="exam-badge">
                    TBS 7 OF 7
                </span>

                <h2>
                    Revenue, Taxes, Contingencies & OCI
                </h2>

                <p>
                    Analyze the following independent
                    year-end matters and determine the
                    required financial reporting amounts.
                </p>

            </div>


            <div class="course-intro-card">

                <h3>
                    Part A — Revenue Recognition
                </h3>

                <p>
                    On October 1, Nova Company enters
                    into a contract for equipment and
                    one year of service.
                </p>

                <p>
                    The total transaction price is
                    <strong>$150,000</strong>.
                </p>

                <ul>

                    <li>
                        Standalone selling price of equipment:
                        <strong>$120,000</strong>
                    </li>

                    <li>
                        Standalone selling price of service:
                        <strong>$60,000</strong>
                    </li>

                </ul>

                <p>
                    The equipment is delivered immediately
                    on October 1.
                </p>

                <p>
                    The service is provided evenly over
                    12 months. Three months of service
                    have been completed by December 31.
                </p>

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 1 — Equipment Revenue
                </h3>

                <input
                    id="far-final-tbs7-equipment-revenue"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.equipmentRevenue ?? ""
                    }"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 2 — Total Revenue Recognized by December 31
                </h3>

                <input
                    id="far-final-tbs7-total-revenue"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.totalRevenue ?? ""
                    }"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Part B — Deferred Income Taxes
                </h3>

                <p>
                    At December 31, an asset has a
                    financial statement carrying amount of
                    <strong>$500,000</strong>
                    and a tax basis of
                    <strong>$380,000</strong>.
                </p>

                <p>
                    The enacted tax rate expected to apply
                    when the difference reverses is
                    <strong>25%</strong>.
                </p>

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 3 — Deferred Tax Liability
                </h3>

                <input
                    id="far-final-tbs7-dtl"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.dtl ?? ""
                    }"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Part C — Loss Contingency
                </h3>

                <p>
                    Nova Company is involved in a lawsuit.
                    At year-end, a loss is
                    <strong>probable</strong>.
                </p>

                <p>
                    The estimated loss is between
                    <strong>$60,000 and $90,000</strong>,
                    and no amount within the range is
                    considered more likely than another.
                </p>

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 4 — Litigation Loss Accrued
                </h3>

                <input
                    id="far-final-tbs7-lawsuit"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.lawsuit ?? ""
                    }"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Part D — Available-for-Sale Debt Security
                </h3>

                <p>
                    An available-for-sale debt security
                    has a carrying amount of
                    <strong>$200,000</strong>
                    before its year-end fair value adjustment.
                </p>

                <p>
                    Its year-end fair value is
                    <strong>$230,000</strong>.
                </p>

                <p>
                    Assume there is no credit impairment.
                </p>

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 5 — Unrealized Gain Reported in OCI
                </h3>

                <input
                    id="far-final-tbs7-oci"
                    type="number"
                    placeholder="Enter amount"
                    value="${
                        savedAnswer.oci ?? ""
                    }"
                >

            </div>


            <div class="lesson-actions">

                <button
                    class="back-button"
                    onclick="showFARFinalTBS6()"
                >
                    ← Previous TBS
                </button>

                <button
                    class="primary-button"
                    onclick="saveFARFinalTBS7()"
                >
                    Save & Review Assessment →
                </button>

            </div>

        </section>

    `;

}

function saveFARFinalTBS7() {

    const equipmentRevenue =
        document.getElementById(
            "far-final-tbs7-equipment-revenue"
        ).value.trim();

    const totalRevenue =
        document.getElementById(
            "far-final-tbs7-total-revenue"
        ).value.trim();

    const dtl =
        document.getElementById(
            "far-final-tbs7-dtl"
        ).value.trim();

    const lawsuit =
        document.getElementById(
            "far-final-tbs7-lawsuit"
        ).value.trim();

    const oci =
        document.getElementById(
            "far-final-tbs7-oci"
        ).value.trim();


    if (
        equipmentRevenue === "" ||
        totalRevenue === "" ||
        dtl === "" ||
        lawsuit === "" ||
        oci === ""
    ) {

        alert(
            "Please complete all five items before continuing."
        );

        return;

    }


    farFinalTBSAnswers[6] = {

        equipmentRevenue:
            Number(equipmentRevenue),

        totalRevenue:
            Number(totalRevenue),

        dtl:
            Number(dtl),

        lawsuit:
            Number(lawsuit),

        oci:
            Number(oci)

    };


    showFARFinalTBS7Saved();
    saveFARFinalTBSState();

}


function showFARFinalTBS7Saved() {

    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Final TBS Assessment
                </h1>

                <p>
                    Simulation 7 of 7
                </p>

            </div>

        </header>


        <section class="exam-page">

            <div class="course-intro-card">

                <span class="exam-badge">
                    ALL RESPONSES SAVED
                </span>

                <h2>
                    All 7 TBSs Complete
                </h2>

                <p>
                    Your responses for all seven
                    simulations have been saved.
                </p>

                <p>
                    You will have an opportunity to
                    review the assessment before
                    final submission.
                </p>

            </div>


            <div class="lesson-actions">

                <button
                    class="back-button"
                    onclick="showFARFinalTBS7()"
                >
                    ← Review TBS 7
                </button>

                <button
    class="primary-button"
    onclick="showFARFinalTBSReview()"
>
    Review Full Assessment
</button>

            </div>

        </section>

    `;

}

function showFARFinalTBSReview() {

    saveCurrentPage({
        page: "farFinalTBSReview"
    });


    const tbsNames = [

        "Year-End Financial Statement Adjustments",

        "Operating Cycle Analysis",

        "Asset, Debt & Investment Analysis",

        "Governmental and NFP Reporting Analysis",

        "Comprehensive FAR Analysis",

        "Accounting Changes, Errors & Subsequent Events",

        "Revenue, Taxes, Contingencies & OCI"

    ];


    const tbsFunctions = [

        "showFARFinalTBS1()",

        "showFARFinalTBS2()",

        "showFARFinalTBS3()",

        "showFARFinalTBS4()",

        "showFARFinalTBS5()",

        "showFARFinalTBS6()",

        "showFARFinalTBS7()"

    ];


    let completedCount = 0;

    farFinalTBSAnswers.forEach(
        function(answer) {

            if (answer !== null) {
                completedCount++;
            }

        }
    );


    let reviewCards = "";


    tbsNames.forEach(
        function(name, index) {

            const isComplete =
                farFinalTBSAnswers[index] !== null;


            reviewCards += `

                <div class="course-intro-card">

                    <span class="exam-badge">
                        TBS ${index + 1}
                    </span>

                    <h3>
                        ${name}
                    </h3>

                    <p>
                        Status:
                        <strong>
                            ${
                                isComplete
                                    ? "Completed"
                                    : "Not Completed"
                            }
                        </strong>
                    </p>

                    <button
    class="back-button"
    onclick="openFARFinalTBSFromReview(${index + 1})"
>
    Review TBS ${index + 1}
</button>

                </div>

            `;

        }
    );


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Final TBS Assessment
                </h1>

                <p>
                    Review Assessment
                </p>

            </div>


            <button
                class="back-button"
                onclick="showFARFinalTBS7()"
            >
                ← Back to TBS 7
            </button>

        </header>


        <section class="exam-page">

            <div class="course-intro-card">

                <span class="exam-badge">
                    FINAL REVIEW
                </span>

                <h2>
                    Review Before Submission
                </h2>

                <p>
                    Review any simulation before
                    submitting your final assessment.
                </p>


                <div class="exam-progress">

                    <strong>
                        ${completedCount} of 7 TBSs Completed
                    </strong>

                </div>

            </div>


            ${reviewCards}


            <div class="course-intro-card">

                <h3>
                    Ready to Submit?
                </h3>

                <p>
                    Once submitted, the assessment
                    will be graded and the correct
                    answers and explanations will
                    become available.
                </p>


                ${
                    completedCount === 7

                        ? `

                            <button
    class="primary-button"
    onclick="submitFARFinalTBSAssessment()"
>
    Submit Final Assessment
</button>

                        `

                        : `

                            <p>
                                <strong>
                                    Complete all seven
                                    simulations before
                                    submitting.
                                </strong>
                            </p>

                        `
                }

            </div>


            <div class="lesson-actions">

                <button
                    class="back-button"
                    onclick="showFARFinalTBSHome()"
                >
                    Exit to TBS Home
                </button>

            </div>

        </section>

    `;

}

function submitFARFinalTBSAssessment() {

    const allCompleted =
        farFinalTBSAnswers.every(
            function(answer) {
                return answer !== null;
            }
        );


    if (!allCompleted) {

        alert(
            "Please complete all seven TBSs before submitting the assessment."
        );

        return;

    }


    const confirmed = confirm(
        "Submit your final TBS assessment? After submission, your answers will be graded."
    );


    if (!confirmed) {
        return;
    }


    const answerKeys = [

        // TBS 1
        {
            netIncome: 354000,
            ar: 24000,
            inventory: 10000,
            liabilities: 12000,
            assets: -34000
        },

        // TBS 2
        {
            cashCollected: 860000,
            creditLoss: 19000,
            cogs: 470000,
            inventoryCFO: -30000,
            cfo: 195000
        },

        // TBS 3
        {
            impairment: 60000,
            interest: 75200,
            amortization: 15200,
            investmentGain: 25000,
            netIncome: -110200
        },

        // TBS 4
        {
            taxRevenue: 480000,
            bondProceeds: 1200000,
            capitalAsset: 300000,
            restricted: 120000,
            conditional: 150000
        },

        // TBS 5
        {
            netIncome: 487000,
            ar: 205000,
            bond: 773200,
            cfo: 502000,
            restricted: 85000
        },

        // TBS 6
        {
            depreciation: 30000,
            retainedEarnings: 25000,
            bankruptcy: 50000,
            fire: 0,
            netIncome: -40000
        },

        // TBS 7
        {
            equipmentRevenue: 100000,
            totalRevenue: 112500,
            dtl: 30000,
            lawsuit: 60000,
            oci: 30000
        }

    ];


    const tbsNames = [

        "Year-End Financial Statement Adjustments",

        "Operating Cycle Analysis",

        "Asset, Debt & Investment Analysis",

        "Governmental and NFP Reporting Analysis",

        "Comprehensive FAR Analysis",

        "Accounting Changes, Errors & Subsequent Events",

        "Revenue, Taxes, Contingencies & OCI"

    ];


    let totalCorrect = 0;

    const totalItems = 35;

    const tbsResults = [];


    answerKeys.forEach(
        function(answerKey, tbsIndex) {

            const studentAnswers =
                farFinalTBSAnswers[tbsIndex];

            let tbsCorrect = 0;

            const itemResults = [];


            Object.keys(answerKey).forEach(
                function(key) {

                    const studentAnswer =
                        studentAnswers[key];

                    const correctAnswer =
                        answerKey[key];

                    const isCorrect =
                        studentAnswer ===
                        correctAnswer;


                    if (isCorrect) {

                        tbsCorrect++;
                        totalCorrect++;

                    }


                    itemResults.push({

                        key: key,

                        studentAnswer:
                            studentAnswer,

                        correctAnswer:
                            correctAnswer,

                        isCorrect:
                            isCorrect

                    });

                }
            );


            tbsResults.push({

                tbsNumber:
                    tbsIndex + 1,

                name:
                    tbsNames[tbsIndex],

                correct:
                    tbsCorrect,

                total:
                    5,

                percent:
                    Math.round(
                        (
                            tbsCorrect /
                            5
                        ) *
                        100
                    ),

                items:
                    itemResults

            });

        }
    );


    const percentage =
        Math.round(
            (
                totalCorrect /
                totalItems
            ) *
            100
        );


    localStorage.setItem(
        "farFinalTBSLastScore",
        percentage
    );


    const previousBest =
        Number(
            localStorage.getItem(
                "farFinalTBSBestScore"
            )
        ) || 0;


    if (percentage > previousBest) {

        localStorage.setItem(
            "farFinalTBSBestScore",
            percentage
        );

    }


    farFinalTBSReviewMode = false;

farFinalTBSResults = tbsResults;

// Assessment is finished.
// Remove the saved active-attempt state.
clearFARFinalTBSState();

showFARFinalTBSResults(
    totalCorrect,
    totalItems,
    percentage,
    tbsResults
);

}


function showFARFinalTBSAnswerReview(tbsIndex) {

    const reviewData = [

        // ==========================================
        // TBS 1
        // ==========================================
        [
            {
                key: "netIncome",
                label: "Adjusted Net Income",
                explanation:
                    "Begin with preliminary net income of $400,000. Subtract $18,000 of expired insurance, add $24,000 of accrued service revenue, subtract $30,000 of depreciation, subtract $12,000 of accrued utilities, and subtract $10,000 for the ending inventory overstatement. Adjusted net income is $354,000."
            },

            {
                key: "ar",
                label: "Increase in Accounts Receivable",
                explanation:
                    "The $24,000 of service revenue was earned but had not yet been recorded. Recording the accrued revenue increases Accounts Receivable by $24,000."
            },

            {
                key: "inventory",
                label: "Decrease in Inventory",
                explanation:
                    "Ending inventory is overstated by $10,000. Correcting the error requires decreasing inventory by $10,000."
            },

            {
                key: "liabilities",
                label: "Increase in Liabilities",
                explanation:
                    "The $12,000 of utilities incurred but not recorded must be accrued. This increases liabilities by $12,000."
            },

            {
                key: "assets",
                label: "Net Change in Total Assets",
                explanation:
                    "Assets decrease $18,000 for expired insurance, increase $24,000 for accrued revenue, decrease $30,000 for depreciation, and decrease $10,000 for the inventory correction. The net change is a $34,000 decrease, represented as -$34,000."
            }
        ],


        // ==========================================
        // TBS 2
        // ==========================================
        [
            {
                key: "cashCollected",
                label: "Cash Collected from Customers",
                explanation:
                    "Beginning Accounts Receivable of $180,000 plus $900,000 of credit sales less ending Accounts Receivable of $220,000 equals $860,000 of cash collected from customers."
            },

            {
                key: "creditLoss",
                label: "Credit-Loss Expense",
                explanation:
                    "The Allowance for Credit Losses has a $3,000 debit balance before adjustment and must end with a $16,000 credit balance. A $19,000 credit is therefore required, producing $19,000 of credit-loss expense."
            },

            {
                key: "cogs",
                label: "Cost of Goods Sold",
                explanation:
                    "Cost of goods sold equals beginning inventory of $140,000 plus purchases of $500,000 less ending inventory of $170,000. Therefore, COGS is $470,000."
            },

            {
                key: "inventoryCFO",
                label: "Inventory Adjustment to Operating Cash Flow",
                explanation:
                    "Inventory increased from $140,000 to $170,000, a $30,000 increase. Under the indirect method, an increase in inventory is subtracted from net income, so the operating cash flow adjustment is -$30,000."
            },

            {
                key: "cfo",
                label: "Cash Flow from Operating Activities",
                explanation:
"Starting with net income of $210,000, add $35,000 of depreciation, subtract the $40,000 increase in Accounts Receivable, subtract the $30,000 increase in inventory, and add the $20,000 increase in Accounts Payable. Operating cash flow is $195,000."            }
        ],


        // ==========================================
        // TBS 3
        // ==========================================
        [
            {
                key: "impairment",
                label: "Equipment Impairment Loss",
                explanation:
                    "The equipment's carrying amount is $360,000 ($480,000 cost less $120,000 accumulated depreciation). Because undiscounted cash flows of $330,000 are below carrying amount, the asset is impaired. The loss is carrying amount of $360,000 less fair value of $300,000, or $60,000."
            },

            {
                key: "interest",
                label: "Bond Interest Expense",
                explanation:
                    "Under the effective-interest method, interest expense equals the beginning carrying amount of $940,000 multiplied by the 8% effective interest rate. Interest expense is $75,200."
            },

            {
                key: "amortization",
                label: "Bond Discount Amortization",
                explanation:
                    "Cash interest is $60,000, calculated as $1,000,000 face value multiplied by the 6% stated rate. Interest expense is $75,200. The difference of $15,200 is discount amortization."
            },

            {
                key: "investmentGain",
                label: "Unrealized Trading Investment Gain",
                explanation:
                    "The trading debt security increases from a carrying amount of $190,000 to a fair value of $215,000. The $25,000 unrealized gain is recognized in current-period net income."
            },

            {
                key: "netIncome",
                label: "Combined Effect on Net Income",
                explanation:
                    "The impairment loss reduces income by $60,000, bond interest expense reduces income by $75,200, and the trading-security gain increases income by $25,000. The combined effect is -$110,200."
            }
        ],


        // ==========================================
        // TBS 4
        // ==========================================
        [
            {
                key: "taxRevenue",
                label: "General Fund Property Tax Revenue",
                explanation:
                    "The General Fund recognizes revenues that are measurable and available. The $450,000 collected during the year plus $30,000 collected after year-end within the availability period equals $480,000 of revenue. The remaining $20,000 is unavailable."
            },

            {
                key: "bondProceeds",
                label: "Capital Projects Fund Bond Proceeds",
                explanation:
                    "Governmental funds do not report long-term debt as a fund liability. The $1,200,000 of general obligation bond proceeds received by the Capital Projects Fund are reported as an other financing source."
            },

            {
                key: "capitalAsset",
                label: "Government-Wide Capital Asset Increase",
                explanation:
                    "Governmental activities report capital assets on the government-wide statements. Therefore, the $300,000 equipment purchase increases government-wide capital assets by $300,000."
            },

            {
                key: "restricted",
                label: "Remaining Donor-Restricted Net Assets",
                explanation:
                    "The NFP receives a $200,000 donor-restricted contribution. Qualifying expenditures of $80,000 satisfy that amount of the restriction, leaving $120,000 of donor-restricted net assets."
            },

            {
                key: "conditional",
                label: "Conditional Grant Liability",
                explanation:
                    "Because the $150,000 grant contains both a substantive barrier and a right of return and the barrier has not been overcome, contribution revenue is not recognized. Cash received in advance is reported as a liability of $150,000."
            }
        ],


        // ==========================================
        // TBS 5
        // ==========================================
        [
            {
                key: "netIncome",
                label: "Adjusted Net Income",
                explanation:
                    "Start with preliminary net income of $520,000. Subtract $28,000 of unrecorded salaries, add $22,000 of earned service revenue, subtract $35,000 of depreciation, and add $8,000 because understated ending inventory overstated COGS. Adjusted net income is $487,000."
            },

            {
                key: "ar",
                label: "Ending Accounts Receivable",
                explanation:
                    "Ending Accounts Receivable equals beginning Accounts Receivable of $160,000 plus $850,000 of credit sales less $805,000 of collections. Ending Accounts Receivable is $205,000."
            },

            {
                key: "bond",
                label: "Ending Bond Carrying Amount",
                explanation:
                    "Interest expense is $53,200 ($760,000 × 7%). Cash interest is $40,000 ($800,000 × 5%). Discount amortization is therefore $13,200. Adding the amortization to the beginning carrying amount gives an ending carrying amount of $773,200."
            },

            {
                key: "cfo",
                label: "Cash Flow from Operating Activities",
                explanation:
                    "Under the indirect method, begin with net income of $460,000, add $55,000 depreciation, subtract the $18,000 increase in Accounts Receivable, add the $12,000 decrease in inventory, and subtract the $7,000 decrease in Accounts Payable. CFO is $502,000."
            },

            {
                key: "restricted",
                label: "Ending Donor-Restricted Net Assets",
                explanation:
                    "Beginning donor-restricted net assets of $40,000 plus $125,000 of restricted contributions less $80,000 of qualifying expenditures equals ending donor-restricted net assets of $85,000."
            }
        ],


        // ==========================================
        // TBS 6
        // ==========================================
        [
            {
                key: "depreciation",
                label: "Year 3 Depreciation Expense",
                explanation:
                    "Original annual depreciation is $40,000: ($280,000 cost - $40,000 residual value) ÷ 6 years. After two years, carrying amount is $200,000. The revised estimate leaves six years remaining and a $20,000 residual value. Year 3 depreciation is ($200,000 - $20,000) ÷ 6 = $30,000."
            },

            {
                key: "retainedEarnings",
                label: "Beginning Retained Earnings Adjustment",
                explanation:
                    "The prior-year ending inventory was understated by $25,000, which understated prior-year income and ending retained earnings by $25,000. Correcting the prior-period error therefore increases beginning Year 3 retained earnings by $25,000, ignoring taxes."
            },

            {
                key: "bankruptcy",
                label: "Recognized Bankruptcy Loss",
                explanation:
                    "The customer's January bankruptcy provides additional evidence about conditions that existed at December 31. Because only $10,000 of the $60,000 receivable is expected to be collected, a $50,000 loss must be recognized in the December 31 financial statements."
            },

            {
                key: "fire",
                label: "December 31 Recognized Fire Loss",
                explanation:
                    "The warehouse fire occurred after year-end and resulted from conditions arising after December 31. It is a nonrecognized subsequent event. Therefore, the December 31 recognized loss is $0, although disclosure may be required if the event is material."
            },

            {
                key: "netIncome",
                label: "Combined Year 3 Net Income Effect",
                explanation:
                    "The depreciation estimate change reduces depreciation by $10,000 compared with the old estimate, increasing income by $10,000. The bankruptcy adjustment decreases income by $50,000, while the subsequent fire produces no December 31 recognized loss. The net effect is -$40,000."
            }
        ],


        // ==========================================
        // TBS 7
        // ==========================================
        [
            {
                key: "equipmentRevenue",
                label: "Equipment Revenue",
                explanation:
                    "The total standalone selling prices are $180,000 ($120,000 equipment + $60,000 service). The equipment receives two-thirds of the $150,000 transaction price. Therefore, equipment revenue is $100,000."
            },

            {
                key: "totalRevenue",
                label: "Total Revenue Through December 31",
                explanation:
                    "Equipment revenue is $100,000. The service allocation is $50,000, and three of twelve months have been provided, so service revenue is $12,500. Total revenue recognized through December 31 is $112,500."
            },

            {
                key: "dtl",
                label: "Deferred Tax Liability",
                explanation:
                    "The asset's $500,000 carrying amount exceeds its $380,000 tax basis by $120,000, creating a taxable temporary difference. At the enacted 25% tax rate, the deferred tax liability is $30,000."
            },

            {
                key: "lawsuit",
                label: "Accrued Lawsuit Loss",
                explanation:
                    "The loss is probable and reasonably estimable within a range of $60,000 to $90,000, with no amount in the range a better estimate than another. Under U.S. GAAP, the minimum amount in the range, $60,000, is accrued."
            },

            {
                key: "oci",
                label: "AFS Unrealized Gain in OCI",
                explanation:
                    "The available-for-sale debt security has a carrying amount of $200,000 before the fair-value adjustment and a fair value of $230,000. With no credit impairment, the $30,000 unrealized holding gain is reported in other comprehensive income."
            }
        ]

    ];


    const tbsNames = [

        "Year-End Financial Statement Adjustments",

        "Operating Cycle Analysis",

        "Asset, Debt & Investment Analysis",

        "Governmental and NFP Reporting Analysis",

        "Comprehensive FAR Analysis",

        "Accounting Changes, Errors & Subsequent Events",

        "Revenue, Taxes, Contingencies & OCI"

    ];


    const result =
        farFinalTBSResults[tbsIndex];


    if (!result) {

        alert(
            "Assessment results are not available."
        );

        return;

    }


    const explanations =
        reviewData[tbsIndex];


    let itemHTML = "";


    explanations.forEach(
        function(item, index) {

            const itemResult =
                result.items.find(
                    function(resultItem) {
                        return (
                            resultItem.key ===
                            item.key
                        );
                    }
                );


            if (!itemResult) {
                return;
            }


            const statusText =
                itemResult.isCorrect
                    ? "✓ Correct"
                    : "✗ Incorrect";


            itemHTML += `

                <div class="course-intro-card">

                    <span class="exam-badge">
                        ITEM ${index + 1}
                    </span>

                    <h3>
                        ${item.label}
                    </h3>


                    <p>
                        <strong>
                            ${statusText}
                        </strong>
                    </p>


                    <p>
                        Your Answer:
                        <strong>
                            ${formatFARFinalTBSCurrency(
                                itemResult.studentAnswer
                            )}
                        </strong>
                    </p>


                    <p>
                        Correct Answer:
                        <strong>
                            ${formatFARFinalTBSCurrency(
                                itemResult.correctAnswer
                            )}
                        </strong>
                    </p>


                    <div class="formula-box">

                        <strong>
                            Explanation
                        </strong>

                        <p>
                            ${item.explanation}
                        </p>

                    </div>

                </div>

            `;

        }
    );


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Final TBS Assessment
                </h1>

                <p>
                    Detailed Answer Review
                </p>

            </div>

        </header>


        <section class="exam-page">

            <div class="course-intro-card">

                <span class="exam-badge">
                    TBS ${tbsIndex + 1}
                </span>

                <h2>
                    ${tbsNames[tbsIndex]}
                </h2>

                <p>
                    <strong>
                        ${result.correct} of 5 Correct
                    </strong>
                </p>

                <p>
                    Score:
                    <strong>
                        ${result.percent}%
                    </strong>
                </p>

            </div>


            ${itemHTML}


            <div class="lesson-actions">

                ${
                    tbsIndex > 0
                        ? `
                            <button
                                class="back-button"
                                onclick="showFARFinalTBSAnswerReview(${tbsIndex - 1})"
                            >
                                ← Previous TBS
                            </button>
                        `
                        : ""
                }


                ${
                    tbsIndex < 6
                        ? `
                            <button
                                class="primary-button"
                                onclick="showFARFinalTBSAnswerReview(${tbsIndex + 1})"
                            >
                                Next TBS →
                            </button>
                        `
                        : ""
                }


                <button
                    class="back-button"
                    onclick="returnToFARFinalTBSResults()"
                >
                    Back to Results
                </button>

            </div>

        </section>

    `;

}

function formatFARFinalTBSCurrency(value) {

    const number =
        Number(value);


    if (number < 0) {

        return (
            "-$" +
            Math.abs(number).toLocaleString()
        );

    }


    return (
        "$" +
        number.toLocaleString()
    );

}


function returnToFARFinalTBSResults() {

    if (
        !farFinalTBSResults ||
        farFinalTBSResults.length !== 7
    ) {

        showFARFinalTBSHome();
        return;

    }


    let totalCorrect = 0;


    farFinalTBSResults.forEach(
        function(result) {

            totalCorrect +=
                result.correct;

        }
    );


    const totalItems = 35;


    const percentage =
        Math.round(
            (
                totalCorrect /
                totalItems
            ) *
            100
        );


    showFARFinalTBSResults(
        totalCorrect,
        totalItems,
        percentage,
        farFinalTBSResults
    );

}

function showFARFinalTBSResults(
    totalCorrect,
    totalItems,
    percentage,
    tbsResults
) {

    saveCurrentPage({
        page: "farFinalTBSResults"
    });


    let breakdownHTML = "";


    tbsResults.forEach(
        function(result) {

            breakdownHTML += `

                <div class="course-intro-card">

                    <span class="exam-badge">
                        TBS ${result.tbsNumber}
                    </span>

                    <h3>
                        ${result.name}
                    </h3>

                    <p>
                        <strong>
                            ${result.correct} / ${result.total}
                        </strong>
                        correct
                    </p>

                    <p>
                        Score:
                        <strong>
                            ${result.percent}%
                        </strong>
                    </p>


                    <button
    class="back-button"
    onclick="showFARFinalTBSAnswerReview(${result.tbsNumber - 1})"
>
    Review Answers
</button>

                </div>

            `;

        }
    );


    const bestScore =
        Number(
            localStorage.getItem(
                "farFinalTBSBestScore"
            )
        ) || percentage;


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Final TBS Assessment
                </h1>

                <p>
                    Assessment Results
                </p>

            </div>

        </header>


        <section class="exam-page">

            <div class="course-intro-card">

                <span class="exam-badge">
                    FINAL RESULT
                </span>

                <h2>
                    ${totalCorrect} of ${totalItems} Items Correct
                </h2>

                <div class="exam-progress">

                    <strong>
                        ${percentage}%
                    </strong>

                </div>

                <p>
                    Best Score:
                    <strong>
                        ${bestScore}%
                    </strong>
                </p>

                <p>
                    This percentage is a study-assessment
                    score and is not an official CPA Exam
                    scaled score.
                </p>

            </div>


            <div class="course-intro-card">

                <h2>
                    Performance by Simulation
                </h2>

                <p>
                    Review your performance across
                    all seven FAR simulations.
                </p>

            </div>


            ${breakdownHTML}


            <div class="lesson-actions">

                <button
                    class="primary-button"
                    onclick="startFARFinalTBSAssessment()"
                >
                    Retake TBS Assessment
                </button>

                <button
                    class="back-button"
                    onclick="showFARFinalTBSHome()"
                >
                    TBS Assessment Home
                </button>

                <button
                    class="back-button"
                    onclick="showFAR()"
                >
                    Back to FAR
                </button>

            </div>

        </section>

    `;

}

function openFARFinalTBSFromReview(tbsNumber) {

    farFinalTBSReviewMode = true;

    if (tbsNumber === 1) {
        showFARFinalTBS1();
        return;
    }

    if (tbsNumber === 2) {
        showFARFinalTBS2();
        return;
    }

    if (tbsNumber === 3) {
        showFARFinalTBS3();
        return;
    }

    if (tbsNumber === 4) {
        showFARFinalTBS4();
        return;
    }

    if (tbsNumber === 5) {
        showFARFinalTBS5();
        return;
    }

    if (tbsNumber === 6) {
        showFARFinalTBS6();
        return;
    }

    if (tbsNumber === 7) {
        showFARFinalTBS7();
    }

}

function returnToFARFinalTBSReview() {

    farFinalTBSReviewMode = false;

    showFARFinalTBSReview();

}

let farFinalTBSIndex = 0;
let farFinalTBSReviewMode = false;

let farFinalTBSAnswers =
    new Array(7).fill(null);

let farFinalTBSResults = [];

// =====================================================
// FAR FINAL TBS — ACTIVE STATE PERSISTENCE
// =====================================================

function saveFARFinalTBSState() {

    const state = {
        index: farFinalTBSIndex,
        answers: farFinalTBSAnswers,
        reviewMode: farFinalTBSReviewMode
    };

    localStorage.setItem(
        "farFinalTBSActiveState",
        JSON.stringify(state)
    );

}


function loadFARFinalTBSState() {

    const savedState =
        localStorage.getItem(
            "farFinalTBSActiveState"
        );

    if (!savedState) {
        return false;
    }

    try {

        const state =
            JSON.parse(savedState);

        if (
            !state ||
            !Array.isArray(state.answers) ||
            state.answers.length !== 7
        ) {

            clearFARFinalTBSState();

            return false;

        }

        farFinalTBSAnswers =
            state.answers;

        farFinalTBSIndex =
            Number.isInteger(state.index)
                ? Math.max(
                    0,
                    Math.min(
                        state.index,
                        6
                    )
                )
                : 0;

        farFinalTBSReviewMode =
            state.reviewMode === true;

        farFinalTBSResults = [];

        return true;

    } catch (error) {

        clearFARFinalTBSState();

        return false;

    }

}


function clearFARFinalTBSState() {

    localStorage.removeItem(
        "farFinalTBSActiveState"
    );

}
