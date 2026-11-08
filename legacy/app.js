const navItems = document.querySelectorAll(".nav-item");
const mainContent = document.getElementById("main-content");

// Save our original Dashboard
const dashboardHTML = mainContent.innerHTML;

// REMEMBER CURRENT PAGE

function saveCurrentPage(pageData) {

    localStorage.setItem(
        "cpaCurrentPage",
        JSON.stringify(pageData)
    );

}


function setActiveNav(pageName) {

    navItems.forEach(function(item) {

        item.classList.remove("active");

        if (item.textContent.trim() === pageName) {
            item.classList.add("active");
        }

    });

}


// NAVIGATION

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navItems.forEach(function (button) {
            button.classList.remove("active");
        });

        item.classList.add("active");

        const page = item.textContent.trim();

        if (page === "Dashboard") {
            showDashboard();
        }

        if (page === "Learn") {
            showLearn();
        }

    });

});


// DASHBOARD

function showDashboard() {

    saveCurrentPage({
        page: "dashboard"
    });

    setActiveNav("Dashboard");

    mainContent.innerHTML = dashboardHTML;

}


// LEARN PAGE

function showLearn() {

    saveCurrentPage({
        page: "learn"
    });

    setActiveNav("Learn");

    mainContent.innerHTML = `

        <header class="topbar">

            <div>
                <h1>Learn</h1>
                <p>Build your accounting knowledge from the ground up.</p>
            </div>

        </header>


        <section>

            <h2 class="section-title">Your Learning Path</h2>

            <div class="learning-grid">


                <div class="learning-card">

                    <div class="level-number">1</div>

                    <h2>Accounting Fundamentals</h2>

                    <p>
                        Start here. Build the foundation needed for everything
                        that comes later.
                    </p>

                    <div class="topic-preview">
                        Accounting Equation · Debits & Credits · Journal Entries · Financial Statements
                    </div>

                   <button class="primary-button" onclick="showFundamentals()">
    Start Learning
</button>
                </div>


                <div class="learning-card">

                    <div class="level-number">2</div>

                    <h2>Intermediate Accounting</h2>

                    <p>
                        Develop the deeper financial accounting knowledge
                        required before CPA-level study.
                    </p>

                    <div class="topic-preview">
                        Inventory · Receivables · PPE · Bonds · Leases · Revenue Recognition
                    </div>

                    <button class="primary-button"
        onclick="showIntermediate()">
    Start Learning
</button>

                </div>


                <div class="learning-card">

                    <div class="level-number">3</div>

                    <h2>CPA Core</h2>

                    <p>
                        Begin studying the three Core sections of the CPA Exam.
                    </p>

                    <div class="topic-preview">
                        FAR · AUD · REG
                    </div>

                    <button class="primary-button"
        onclick="showCPACore()">

    Start CPA Core

</button>

                </div>


                <div class="learning-card">

                    <div class="level-number">4</div>

                    <h2>CPA Discipline</h2>

                    <p>
                        Choose your Discipline section when you're ready.
                    </p>

                    <div class="topic-preview">
                        BAR · ISC · TCP
                    </div>

                    <button class="primary-button">
                        Explore Disciplines
                    </button>

                </div>


            </div>

        </section>

    `;

}

// ========================================
// CPA CORE
// ========================================

function showCPACore() {

    saveCurrentPage({
        page: "cpaCore"
    });

    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>CPA Core</h1>

                <p>
                    Prepare for the three Core sections
                    of the Uniform CPA Examination.
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
                    CPA LEVEL
                </span>

                <h2>
                    CPA Core Preparation
                </h2>

                <p>
                    Your accounting foundation is complete.
                    Now we move into exam-level preparation.
                </p>


                <div class="course-stats">

                    <div>

                        <strong>3</strong>
                        <span>Core Sections</span>

                    </div>


                    <div>

                        <strong>12 hrs</strong>
                        <span>Total Core Exam Time</span>

                    </div>


                    <div>

                        <strong>75</strong>
                        <span>Passing Score</span>

                    </div>

                </div>

            </div>



            <h2 class="section-title">
                Core Sections
            </h2>


            <div class="learning-grid">


                <div class="learning-card">

                    <div class="level-number">
                        1
                    </div>

                    <span class="exam-badge">
                        FAR
                    </span>

                    <h2>
                        Financial Accounting & Reporting
                    </h2>

                    <p>
                        Financial reporting, transactions,
                        financial statements and
                        not-for-profit accounting.
                    </p>

                    <div class="topic-preview">
                        Financial Statements · Assets · Liabilities ·
                        Equity · Revenue · NFP
                    </div>

                    <button class="primary-button"
                            onclick="showFAR()">

                        Start FAR

                    </button>

                </div>



                <div class="learning-card">

                    <div class="level-number">
                        2
                    </div>

                    <span class="exam-badge">
                        AUD
                    </span>

                    <h2>
                        Auditing & Attestation
                    </h2>

                    <p>
                        Audit procedures, evidence,
                        risk assessment, reporting,
                        ethics and professional responsibilities.
                    </p>

                    <div class="topic-preview">
                        Audit Risk · Evidence · Controls ·
                        Audit Reports · Ethics
                    </div>

                    <button class="primary-button"
                            disabled>

                        Coming After FAR

                    </button>

                </div>



                <div class="learning-card">

                    <div class="level-number">
                        3
                    </div>

                    <span class="exam-badge">
                        REG
                    </span>

                    <h2>
                        Taxation & Regulation
                    </h2>

                    <p>
                        Federal taxation, business law,
                        ethics and professional responsibilities.
                    </p>

                    <div class="topic-preview">
                        Individual Tax · Entity Tax ·
                        Property Taxation · Business Law
                    </div>

                    <button class="primary-button"
                            disabled>

                        Coming After AUD

                    </button>

                </div>


            </div>


        </section>

    `;

}

// =====================================================
// FAR FINAL EXAM — SHUFFLE HELPER
// =====================================================

function shuffleFARFinalExamArray(array) {

    const shuffled = [...array];

    for (
        let i = shuffled.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        const temp = shuffled[i];

        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }

    return shuffled;
}


// =====================================================
// FAR FINAL EXAM — SELECT QUESTIONS
// =====================================================

function getFARFinalExamQuestions() {

    function normalizeQuestionText(question) {

        return question.question
            .toLowerCase()
            .replace(/\s+/g, " ")
            .trim();

    }

function getFARFinalExamDiversityKey(
    question,
    moduleId
) {

    if (question.topic) {

        return (
            "module-" +
            moduleId +
            "-topic-" +
            question.topic
                .toLowerCase()
                .trim()
        );

    }


    if (
        question.lessonId !== undefined
    ) {

        return (
            "module-" +
            moduleId +
            "-lesson-" +
            question.lessonId
        );

    }


    if (
        question.lesson !== undefined
    ) {

        return (
            "module-" +
            moduleId +
            "-lesson-" +
            question.lesson
        );

    }


    return (
        "module-" +
        moduleId +
        "-general"
    );

}


    function selectFromBank(
        bank,
        numberNeeded,
        moduleId,
        usedQuestions
    ) {

        // Use array position, not question.id.
        // Bank order is:
        // 0–19   = foundation
        // 20–39  = application
        // 40–59  = advanced

        const foundationPool =
            bank.slice(0, 20);

        const applicationPool =
            bank.slice(20, 40);

        const advancedPool =
            bank.slice(40, 60);


        const foundationCount =
            Math.max(
                1,
                Math.round(numberNeeded * 0.20)
            );


        const advancedCount =
            Math.round(numberNeeded * 0.40);


        const applicationCount =
            numberNeeded -
            foundationCount -
            advancedCount;


        const selected = [];

        const diversityCounts = {};


        function addFromPool(
            pool,
            count
        ) {

            const shuffled =
                shuffleFARFinalExamArray(pool);

            for (
                let i = 0;
                i < shuffled.length &&
                count > 0;
                i++
            ) {

                const question =
                    shuffled[i];

                const normalized =
                    normalizeQuestionText(
                        question
                    );


                if (
                    usedQuestions.has(
                        normalized
                    )
                ) {

                    continue;

                }


                const diversityKey =
    getFARFinalExamDiversityKey(
        question,
        moduleId
    );


const currentDiversityCount =
    diversityCounts[
        diversityKey
    ] || 0;


// Do not allow one topic/lesson
// to dominate the Final Exam selection.
if (
    currentDiversityCount >= 2
) {

    continue;

}


usedQuestions.add(
    normalized
);


diversityCounts[
    diversityKey
] =
    currentDiversityCount + 1;


selected.push({

    ...question,

    finalExamModuleId:
        moduleId

});


count--;

            }

        }


        addFromPool(
            foundationPool,
            foundationCount
        );


        addFromPool(
            applicationPool,
            applicationCount
        );


        addFromPool(
            advancedPool,
            advancedCount
        );


        // If one difficulty pool did not have enough
        // unique questions, fill remaining spots
        // from anywhere else in this module.

        if (
    selected.length <
    numberNeeded
) {

    const remainingPool =
        shuffleFARFinalExamArray(
            bank
        );


    // First fallback pass:
    // still respect the max-2 diversity rule.

    for (
        let i = 0;
        i < remainingPool.length &&
        selected.length <
        numberNeeded;
        i++
    ) {

        const question =
            remainingPool[i];


        const normalized =
            normalizeQuestionText(
                question
            );


        if (
            usedQuestions.has(
                normalized
            )
        ) {

            continue;

        }


        const diversityKey =
            getFARFinalExamDiversityKey(
                question,
                moduleId
            );


        const currentDiversityCount =
            diversityCounts[
                diversityKey
            ] || 0;


        if (
            currentDiversityCount >= 2
        ) {

            continue;

        }


        usedQuestions.add(
            normalized
        );


        diversityCounts[
            diversityKey
        ] =
            currentDiversityCount + 1;


        selected.push({

            ...question,

            finalExamModuleId:
                moduleId

        });

    }


    // Emergency fallback:
    // only used if strict diversity prevents
    // reaching the required module question count.
    // Exact duplicates are still prohibited.

    if (
        selected.length <
        numberNeeded
    ) {

        for (
            let i = 0;
            i < remainingPool.length &&
            selected.length <
            numberNeeded;
            i++
        ) {

            const question =
                remainingPool[i];


            const normalized =
                normalizeQuestionText(
                    question
                );


            if (
                usedQuestions.has(
                    normalized
                )
            ) {

                continue;

            }


            usedQuestions.add(
                normalized
            );


            selected.push({

                ...question,

                finalExamModuleId:
                    moduleId

            });

        }

    }

}


        return selected;

    }


    const usedQuestions =
        new Set();


    const examQuestions = [

    // Core blueprint-aligned FAR areas

    ...selectFromBank(
        farModule1Questions,
        11,
        1,
        usedQuestions
    ),

    ...selectFromBank(
        farModule2Questions,
        12,
        2,
        usedQuestions
    ),

    ...selectFromBank(
        farModule3Questions,
        11,
        3,
        usedQuestions
    ),

    // Dedicated governmental / NFP coverage

    ...selectFromBank(
    farModule4Questions,
    4,
    4,
    usedQuestions
),

    ...selectFromBank(
        farModule5Questions,
        4,
        5,
        usedQuestions
    ),

    // Cumulative mixed FAR review

    ...selectFromBank(
        farModule6Questions,
        8,
        6,
        usedQuestions
    )

];


    return shuffleFARFinalExamArray(
    examQuestions
).map(function(question) {

    const answerObjects =
        question.answers.map(
            function(answer, index) {

                return {
                    text: answer,
                    isCorrect:
                        index ===
                        question.correctAnswer
                };

            }
        );


    const shuffledAnswers =
        shuffleFARFinalExamArray(
            answerObjects
        );


    return {
        ...question,

        answers:
            shuffledAnswers.map(
                function(item) {
                    return item.text;
                }
            ),

        correctAnswer:
            shuffledAnswers.findIndex(
                function(item) {
                    return item.isCorrect;
                }
            )
    };

});

}


// =====================================================
// FAR FINAL EXAM — START
// =====================================================

function resumeFARFinalExam() {

    const restored =
        loadFARFinalExamState();

    if (restored) {

        saveCurrentPage({
            page: "farFinalExamActive"
        });

        showFARFinalExamQuestion();

    } else {

        startFARFinalExam();

    }

}

function startFARFinalExam() {

    farFinalExamQuestions =
        getFARFinalExamQuestions();

    farFinalExamIndex = 0;
    farFinalExamScore = 0;
    farFinalExamSelectedAnswer = null;
    farFinalExamAnswered = false;
    farFinalExamResults = [];


    farFinalExamAnswers =
        new Array(
            farFinalExamQuestions.length
        ).fill(null);

    farFinalExamFlags =
    new Array(
        farFinalExamQuestions.length
    ).fill(false);


    saveCurrentPage({
    page: "farFinalExamActive"
});


saveFARFinalExamState();


showFARFinalExamQuestion();

}


// =====================================================
// FAR FINAL EXAM — SHOW QUESTION
// =====================================================

function showFARFinalExamQuestion() {

    const question =
        farFinalExamQuestions[
            farFinalExamIndex
        ];


    if (!question) {
        return;
    }


    farFinalExamSelectedAnswer =
        farFinalExamAnswers[
            farFinalExamIndex
        ];


    let answersHTML = "";


    question.answers.forEach(
        function(answer, index) {

            const selectedClass =
                farFinalExamSelectedAnswer === index
                    ? " selected-answer"
                    : "";


            answersHTML += `

                <button
                    class="answer-button${selectedClass}"
                    onclick="selectFARFinalExamAnswer(
                        this,
                        ${index}
                    )"
                >

                    ${String.fromCharCode(65 + index)}.
                    ${answer}

                </button>

            `;

        }
    );


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Final Exam
                </h1>

                <p>
                    Comprehensive MCQ Assessment
                </p>

            </div>


            <button
                class="back-button"
                onclick="showFARFinalExam()"
            >
                ← Exit Exam
            </button>

        </header>


        <section class="exam-page">


            <div class="quiz-card">


                <div class="exam-progress">

                    Question
                    ${farFinalExamIndex + 1}
                    of
                    ${farFinalExamQuestions.length}

                </div>


                <h2>
                    FAR Final Exam MCQ
                </h2>


                <p class="quiz-question">

                    ${question.question}

                </p>


                <div id="far-final-exam-answers">

                    ${answersHTML}

                </div>


                <div class="lesson-actions">

                <button
    class="back-button"
    onclick="toggleFARFinalExamFlag()"
>
    ${
        farFinalExamFlags[
            farFinalExamIndex
        ]
            ? "★ Flagged for Review"
            : "☆ Flag for Review"
    }
</button>

<button
    class="back-button"
    onclick="showFARFinalExamReview()"
>
    Review Exam
</button>


                    ${
                        farFinalExamIndex > 0
                            ? `

                                <button
                                    class="back-button"
                                    onclick="previousFARFinalExamQuestion()"
                                >
                                    ← Previous
                                </button>

                            `
                            : ""
                    }


                    <button
                        class="primary-button"
                        onclick="submitFARFinalExamAnswer()"
                    >

                        ${
                            farFinalExamIndex ===
                            farFinalExamQuestions.length - 1

                                ? "Finish Exam"
                                : "Next Question →"
                        }

                    </button>


                </div>


            </div>


        </section>

    `;

}


// =====================================================
// FAR FINAL EXAM — SELECT ANSWER
// =====================================================

function selectFARFinalExamAnswer(
    button,
    answerIndex
) {

    farFinalExamSelectedAnswer =
        answerIndex;


    farFinalExamAnswers[
        farFinalExamIndex
    ] = answerIndex;

    saveFARFinalExamState();


    const buttons =
        document.querySelectorAll(
            "#far-final-exam-answers .answer-button"
        );


    buttons.forEach(function(item) {

        item.classList.remove(
            "selected-answer"
        );

    });


    button.classList.add(
        "selected-answer"
    );

}

function submitFARFinalExamAnswer() {

    if (
        farFinalExamIndex <
        farFinalExamQuestions.length - 1
    ) {

        farFinalExamIndex++;


saveFARFinalExamState();


showFARFinalExamQuestion();

        return;

    }


    const unansweredCount =
        farFinalExamAnswers.filter(
            function(answer) {

                return answer === null;

            }
        ).length;


    if (unansweredCount > 0) {

        const firstUnansweredIndex =
            farFinalExamAnswers.findIndex(
                function(answer) {

                    return answer === null;

                }
            );


        alert(
            "You still have " +
            unansweredCount +
            " unanswered question" +
            (
                unansweredCount === 1
                    ? "."
                    : "s."
            )
        );


        farFinalExamIndex =
            firstUnansweredIndex;


        showFARFinalExamQuestion();

        return;

    }


    const confirmed =
    confirm(
        "Submit your FAR Final Exam? " +
        "You will not be able to change your answers after submission."
    );

if (!confirmed) {
    return;
}

finishFARFinalExam();

}

function previousFARFinalExamQuestion() {

    if (farFinalExamIndex <= 0) {
        return;
    }


    farFinalExamIndex--;


saveFARFinalExamState();


showFARFinalExamQuestion();

}

function toggleFARFinalExamFlag() {

    farFinalExamFlags[
        farFinalExamIndex
    ] =
        !farFinalExamFlags[
            farFinalExamIndex
        ];


    saveFARFinalExamState();


    showFARFinalExamQuestion();

}

function showFARFinalExamReview() {

    let questionsHTML = "";


    farFinalExamQuestions.forEach(
        function(question, index) {

            const answered =
                farFinalExamAnswers[index] !== null;

            const flagged =
                farFinalExamFlags[index];


            let statusText = "";

            if (answered && flagged) {

                statusText =
                    "Answered · Flagged";

            } else if (flagged) {

                statusText =
                    "Unanswered · Flagged";

            } else if (answered) {

                statusText =
                    "Answered";

            } else {

                statusText =
                    "Unanswered";

            }


            questionsHTML += `

                <div class="module-card">

                    <div class="module-content">

                        <span class="module-label">
                            QUESTION ${index + 1}
                        </span>

                        <h3>
                            ${statusText}
                        </h3>

                    </div>


                    <button
                        class="back-button"
                        onclick="goToFARFinalExamQuestion(
                            ${index}
                        )"
                    >
                        Go to Question
                    </button>

                </div>

            `;

        }
    );


    const answeredCount =
        farFinalExamAnswers.filter(
            function(answer) {

                return answer !== null;

            }
        ).length;


    const unansweredCount =
        farFinalExamQuestions.length -
        answeredCount;


    const flaggedCount =
        farFinalExamFlags.filter(
            function(flagged) {

                return flagged;

            }
        ).length;


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Final Exam Review
                </h1>

                <p>
                    Review your answers before submitting
                </p>

            </div>

        </header>


        <section>


            <div class="course-intro-card">

                <span class="exam-badge">
                    EXAM REVIEW
                </span>

                <h2>
                    Review Your 50 Questions
                </h2>


                <div class="course-stats">

                    <div>

                        <strong>
                            ${answeredCount}
                        </strong>

                        <span>
                            Answered
                        </span>

                    </div>


                    <div>

                        <strong>
                            ${unansweredCount}
                        </strong>

                        <span>
                            Unanswered
                        </span>

                    </div>


                    <div>

                        <strong>
                            ${flaggedCount}
                        </strong>

                        <span>
                            Flagged
                        </span>

                    </div>

                </div>

            </div>


            <div class="key-points">

                <h3>
                    Before You Submit
                </h3>

                <p>
                    Review unanswered or flagged questions
                    before completing the exam.
                </p>

                <p>
                    Once you submit the exam, your answers
                    will be graded and your results will
                    be displayed.
                </p>

            </div>


            <h2 class="section-title">
                Questions
            </h2>


            <div class="module-list">

                ${questionsHTML}

            </div>


            <div class="lesson-actions">

                <button
                    class="back-button"
                    onclick="goToFARFinalExamQuestion(
                        ${farFinalExamIndex}
                    )"
                >
                    ← Return to Exam
                </button>


                <button
                    class="primary-button"
                    onclick="submitFARFinalExamFromReview()"
                >
                    Submit Final Exam
                </button>

            </div>


        </section>

    `;

}

function goToFARFinalExamQuestion(
    questionIndex
) {

    if (
        questionIndex < 0 ||
        questionIndex >=
        farFinalExamQuestions.length
    ) {

        return;

    }


    farFinalExamIndex =
    questionIndex;


saveFARFinalExamState();


showFARFinalExamQuestion();

}

function submitFARFinalExamFromReview() {

    const unansweredCount =
        farFinalExamAnswers.filter(
            function(answer) {

                return answer === null;

            }
        ).length;


    if (unansweredCount > 0) {

        alert(
            "You still have " +
            unansweredCount +
            " unanswered question" +
            (
                unansweredCount === 1
                    ? "."
                    : "s."
            ) +
            " Please answer all questions before submitting."
        );

        return;

    }


    const confirmed =
        confirm(
            "Submit your FAR Final Exam? " +
            "You will not be able to change your answers after submission."
        );


    if (!confirmed) {

        return;

    }


    finishFARFinalExam();

}

function finishFARFinalExam() {

    farFinalExamScore = 0;
    farFinalExamResults = [];
    clearFARFinalExamState();


    farFinalExamQuestions.forEach(
        function(question, index) {

            const selectedAnswer =
                farFinalExamAnswers[
                    index
                ];


            const isCorrect =
                selectedAnswer ===
                question.correctAnswer;


            const questionLessonId =
    question.lessonId !== undefined
        ? question.lessonId
        : question.lesson;


const matchingLesson =
    (
        farModuleLessons[
            question.finalExamModuleId
        ] || []
    ).find(function(lesson) {

        return (
            lesson.id ===
            questionLessonId
        );

    });


            if (isCorrect) {

                farFinalExamScore++;

            }


            farFinalExamResults.push({

                moduleId:
                    question.finalExamModuleId,

                topic:
    question.topic ||
    (
        matchingLesson
            ? matchingLesson.title
            : "General FAR"
    ),

                question:
                    question.question,

                answers:
                    question.answers,

                selectedAnswer:
                    selectedAnswer,

                correctAnswer:
                    question.correctAnswer,

                explanation:
                    question.explanation || "",

                isCorrect:
                    isCorrect

            });

        }
    );


    showFARFinalExamResults();

}


// =====================================================
// FAR FINAL EXAM — RESULTS
// =====================================================

function showFARFinalExamResults() {

    const totalQuestions =
        farFinalExamQuestions.length;

    const percentage =
        totalQuestions > 0
            ? Math.round(
                (
                    farFinalExamScore /
                    totalQuestions
                ) * 100
            )
            : 0;


    localStorage.setItem(
        "farFinalExamLastScore",
        percentage
    );


    const currentBest =
        Number(
            localStorage.getItem(
                "farFinalExamBestScore"
            ) || 0
        );


    if (percentage > currentBest) {

        localStorage.setItem(
            "farFinalExamBestScore",
            percentage
        );

    }



    const moduleNames = {

        1: "Financial Reporting",

        2: "Balance Sheet Accounts",

        3: "Select Transactions",

        4: "Governmental Accounting",

        5: "Not-for-Profit Accounting",

        6: "Integrated Final Review"

    };

    let missedQuestionsHTML = "";


const missedQuestions =
    farFinalExamResults.filter(
        function(result) {

            return !result.isCorrect;

        }
    );


if (missedQuestions.length === 0) {

    missedQuestionsHTML = `

        <div class="key-points">

            <h3>
                Perfect Score
            </h3>

            <p>
                You did not miss any questions.
            </p>

        </div>

    `;

} else {

    missedQuestions.forEach(
        function(result, index) {

            const selectedText =
                result.answers[
                    result.selectedAnswer
                ];

            const correctText =
                result.answers[
                    result.correctAnswer
                ];


            missedQuestionsHTML += `

                <div class="quiz-card">

                    <div class="exam-progress">

                        Missed Question
                        ${index + 1}
                        of
                        ${missedQuestions.length}

                    </div>


                    <h3>
                        ${result.topic}
                    </h3>


                    <p class="quiz-question">

                        ${result.question}

                    </p>


                    <div class="key-points">

                        <p>
                            <strong>
                                Your Answer:
                            </strong>

                            ${String.fromCharCode(
                                65 +
                                result.selectedAnswer
                            )}.
                            ${selectedText}
                        </p>


                        <p>
                            <strong>
                                Correct Answer:
                            </strong>

                            ${String.fromCharCode(
                                65 +
                                result.correctAnswer
                            )}.
                            ${correctText}
                        </p>

                    </div>


                    ${
                        result.explanation
                            ? `

                                <div class="formula-box">

                                    <strong>
                                        Explanation
                                    </strong>

                                    <p>
                                        ${result.explanation}
                                    </p>

                                </div>

                            `
                            : ""
                    }


                </div>

            `;

        }
    );

}

    let breakdownHTML = "";


    for (
        let moduleId = 1;
        moduleId <= 6;
        moduleId++
    ) {

        const moduleResults =
            farFinalExamResults.filter(
                function(result) {

                    return (
                        result.moduleId ===
                        moduleId
                    );

                }
            );


        const correct =
            moduleResults.filter(
                function(result) {

                    return result.isCorrect;

                }
            ).length;


        const total =
            moduleResults.length;


        const modulePercentage =
            total > 0
                ? Math.round(
                    (
                        correct /
                        total
                    ) * 100
                )
                : 0;


        breakdownHTML += `

            <div class="module-card">

                <div class="module-content">

                    <span class="module-label">
                        MODULE ${moduleId}
                    </span>

                    <h3>
                        ${moduleNames[moduleId]}
                    </h3>

                    <p>
                        ${correct} / ${total}
                        correct
                    </p>

                </div>


                <div class="module-status">

                    ${modulePercentage}%

                </div>

            </div>

        `;

    }


    saveCurrentPage({
        page: "farFinalExamResults"
    });


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Final Exam Results
                </h1>

                <p>
                    Comprehensive Performance Review
                </p>

            </div>

        </header>


        <section>


            <div class="course-intro-card">

                <span class="exam-badge">
                    EXAM COMPLETE
                </span>

                <h2>
                    ${farFinalExamScore}
                    /
                    ${totalQuestions}
                    Correct
                </h2>


                <div class="course-stats">

                    <div>

                        <strong>
                            ${percentage}%
                        </strong>

                        <span>
                            Final Score
                        </span>

                    </div>


                    <div>

                        <strong>
                            ${farFinalExamScore}
                        </strong>

                        <span>
                            Correct
                        </span>

                    </div>


                    <div>

                        <strong>
                            ${
                                totalQuestions -
                                farFinalExamScore
                            }
                        </strong>

                        <span>
                            Incorrect
                        </span>

                    </div>

                </div>


                <p>
                    This percentage is your score on this
                    practice exam. The actual CPA Exam uses
                    a scaled scoring system, so this should
                    not be interpreted as an official
                    CPA Exam score.
                </p>

            </div>


            <h2 class="section-title">
                Performance by Study Area
            </h2>


            <div class="module-list">

                ${breakdownHTML}

            </div>


            <h2 class="section-title">
    Missed Question Review
</h2>


<div>

    ${missedQuestionsHTML}

</div>

            <div class="lesson-actions">

                <button
                    class="primary-button"
                    onclick="startFARFinalExam()"
                >
                    Retake Final Exam
                </button>


                <button
                    class="back-button"
                    onclick="showFARFinalExam()"
                >
                    Exam Home
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


const farModule1Questions = [

    // =========================================================
    // LESSON 1 — FINANCIAL REPORTING FOUNDATIONS
    // =========================================================

    {
        id: 1,
        lesson: 1,
        topic: "Financial Reporting Foundations",

        question:
            "A company has total assets of $800,000 and total liabilities of $310,000. What is total stockholders' equity?",

        answers: [
            "$490,000",
            "$1,110,000",
            "$310,000",
            "$800,000"
        ],

        correctAnswer: 0,

        explanation:
            "The accounting equation is Assets = Liabilities + Equity. Therefore, equity equals $800,000 − $310,000 = $490,000."
    },

    {
        id: 2,
        lesson: 1,
        topic: "Financial Reporting Foundations",

        question:
            "Which financial statement reports an entity's assets, liabilities, and equity at a specific date?",

        answers: [
            "Statement of cash flows",
            "Income statement",
            "Balance sheet",
            "Statement of comprehensive income"
        ],

        correctAnswer: 2,

        explanation:
            "The balance sheet, also called the statement of financial position, presents assets, liabilities, and equity at a specific point in time."
    },

    {
        id: 3,
        lesson: 1,
        topic: "Accrual Accounting",

        question:
            "A company performs $12,000 of services in December but does not receive cash until January. Under accrual accounting, when should the revenue generally be recognized?",

        answers: [
            "When the cash is collected in January",
            "In December, when the service is performed",
            "Half in December and half in January",
            "When management decides collection is certain"
        ],

        correctAnswer: 1,

        explanation:
            "Under accrual accounting, revenue is generally recognized when the applicable recognition criteria are satisfied rather than merely when cash is received. Here, the services were performed in December."
    },

    {
        id: 4,
        lesson: 1,
        topic: "Accounting Equation",

        question:
            "A corporation borrows $50,000 cash from a bank by signing a note payable. What is the immediate effect on the accounting equation?",

        answers: [
            "Assets increase $50,000 and equity increases $50,000",
            "Liabilities increase $50,000 and equity decreases $50,000",
            "Assets remain unchanged and liabilities increase $50,000",
            "Assets increase $50,000 and liabilities increase $50,000"
        ],

        correctAnswer: 3,

        explanation:
            "Receiving the loan increases cash, an asset, by $50,000 and creates a $50,000 note payable liability. Equity is unaffected."
    },


    // =========================================================
    // LESSON 2 — BALANCE SHEET
    // =========================================================

    {
        id: 5,
        lesson: 2,
        topic: "Balance Sheet Classification",

        question:
            "Which of the following would generally be classified as a current asset?",

        answers: [
            "Land held for use in operations",
            "Accounts receivable expected to be collected within the operating cycle",
            "A building used as corporate headquarters",
            "A patent with a remaining life of ten years"
        ],

        correctAnswer: 1,

        explanation:
            "Accounts receivable expected to be realized within the operating cycle are generally classified as current assets."
    },

    {
        id: 6,
        lesson: 2,
        topic: "Working Capital",

        question:
            "A company reports current assets of $460,000 and current liabilities of $285,000. What is working capital?",

        answers: [
            "$745,000",
            "$285,000",
            "$460,000",
            "$175,000"
        ],

        correctAnswer: 3,

        explanation:
            "Working capital equals current assets minus current liabilities: $460,000 − $285,000 = $175,000."
    },

    {
        id: 7,
        lesson: 2,
        topic: "Balance Sheet Classification",

        question:
            "Which item is normally presented as a liability on the balance sheet?",

        answers: [
            "Unearned revenue",
            "Retained earnings",
            "Treasury stock",
            "Prepaid insurance"
        ],

        correctAnswer: 0,

        explanation:
            "Unearned revenue represents an obligation to provide goods or services in the future and is therefore generally reported as a liability."
    },

    {
        id: 8,
        lesson: 2,
        topic: "Current Liabilities",

        question:
            "A company has a $40,000 accounts payable balance due to suppliers within 30 days. How should it generally be classified?",

        answers: [
            "Long-term asset",
            "Stockholders' equity",
            "Current liability",
            "Noncurrent liability"
        ],

        correctAnswer: 2,

        explanation:
            "Accounts payable that will be settled in the near term as part of the normal operating cycle are generally classified as current liabilities."
    },


    // =========================================================
    // LESSON 3 — INCOME STATEMENT & COMPREHENSIVE INCOME
    // =========================================================

    {
        id: 9,
        lesson: 3,
        topic: "Comprehensive Income",

        question:
            "A company reports net income of $140,000 and other comprehensive loss of $25,000. What is comprehensive income?",

        answers: [
            "$165,000",
            "$25,000",
            "$115,000",
            "$140,000"
        ],

        correctAnswer: 2,

        explanation:
            "Comprehensive income equals net income plus other comprehensive income or loss. $140,000 − $25,000 = $115,000."
    },

    {
        id: 10,
        lesson: 3,
        topic: "Income Statement",

        question:
            "Which item normally reduces income from continuing operations?",

        answers: [
            "Operating expenses",
            "Issuance of common stock",
            "Cash dividends",
            "Purchase of treasury stock"
        ],

        correctAnswer: 0,

        explanation:
            "Operating expenses are recognized in determining income from continuing operations. Stock issuances, dividends, and treasury stock transactions are equity transactions."
    },

    {
        id: 11,
        lesson: 3,
        topic: "Other Comprehensive Income",

        question:
            "Which statement best describes accumulated other comprehensive income (AOCI)?",

        answers: [
            "It represents total cash generated from operations",
            "It is another name for retained earnings",
            "It contains only current-year net income",
            "It accumulates qualifying OCI items within stockholders' equity"
        ],

        correctAnswer: 3,

        explanation:
            "AOCI is a component of stockholders' equity that accumulates qualifying other comprehensive income and loss items."
    },

    {
        id: 12,
        lesson: 3,
        topic: "Net Income",

        question:
            "A company reports revenues of $600,000 and total expenses of $455,000. Ignoring taxes and other income items, what is net income?",

        answers: [
            "$1,055,000",
            "$145,000",
            "$455,000",
            "$600,000"
        ],

        correctAnswer: 1,

        explanation:
            "Net income equals revenues minus expenses: $600,000 − $455,000 = $145,000."
    },


    // =========================================================
    // LESSON 4 — STATEMENT OF CASH FLOWS
    // =========================================================

    {
        id: 13,
        lesson: 4,
        topic: "Cash Flow Classification",

        question:
            "Under U.S. GAAP, cash paid to purchase equipment is generally classified as what type of cash flow?",

        answers: [
            "Operating",
            "Financing",
            "Noncash",
            "Investing"
        ],

        correctAnswer: 3,

        explanation:
            "Purchasing property, plant, and equipment for cash is generally an investing cash outflow."
    },

    {
        id: 14,
        lesson: 4,
        topic: "Indirect Method",

        question:
            "Using the indirect method, depreciation expense is generally treated how when reconciling net income to net cash provided by operating activities?",

        answers: [
            "Deducted from net income",
            "Added back to net income",
            "Reported as an investing inflow",
            "Reported as a financing inflow"
        ],

        correctAnswer: 1,

        explanation:
            "Depreciation reduced net income but did not use operating cash. Therefore, it is generally added back when using the indirect method."
    },

    {
        id: 15,
        lesson: 4,
        topic: "Cash Flow Classification",

        question:
            "Under U.S. GAAP, cash received from issuing common stock is generally classified as:",

        answers: [
            "Operating activity",
            "Investing activity",
            "Financing activity",
            "A noncash activity"
        ],

        correctAnswer: 2,

        explanation:
            "Cash received from issuing the company's own stock is a financing cash inflow."
    },

    {
        id: 16,
        lesson: 4,
        topic: "Indirect Method",

        question:
            "Net income is $90,000. Depreciation expense is $12,000, and accounts receivable increased by $7,000. Ignoring all other adjustments, what is net cash provided by operating activities under the indirect method?",

        answers: [
            "$95,000",
            "$109,000",
            "$71,000",
            "$85,000"
        ],

        correctAnswer: 0,

        explanation:
            "Start with $90,000 net income, add back $12,000 depreciation, and subtract the $7,000 increase in accounts receivable: $90,000 + $12,000 − $7,000 = $95,000."
    },


    // =========================================================
    // LESSON 5 — STATEMENT OF CHANGES IN EQUITY
    // =========================================================

    {
        id: 17,
        lesson: 5,
        topic: "Retained Earnings",

        question:
            "Beginning retained earnings are $250,000. Net income is $80,000 and dividends declared are $30,000. What is ending retained earnings?",

        answers: [
            "$300,000",
            "$330,000",
            "$200,000",
            "$360,000"
        ],

        correctAnswer: 0,

        explanation:
            "Ending retained earnings equals $250,000 + $80,000 − $30,000 = $300,000."
    },

    {
        id: 18,
        lesson: 5,
        topic: "Treasury Stock",

        question:
            "When a corporation purchases its own shares as treasury stock under the cost method, what is the general effect on total stockholders' equity?",

        answers: [
            "Equity increases",
            "Equity is unaffected",
            "A liability is created with no equity effect",
            "Equity decreases"
        ],

        correctAnswer: 3,

        explanation:
            "Treasury stock is a contra-equity account. Purchasing treasury shares generally reduces total stockholders' equity."
    },

    {
        id: 19,
        lesson: 5,
        topic: "Common Stock and APIC",

        question:
            "A corporation issues 1,000 shares of $5 par common stock for $12 per share. How much is credited to additional paid-in capital?",

        answers: [
            "$12,000",
            "$7,000",
            "$5,000",
            "$17,000"
        ],

        correctAnswer: 1,

        explanation:
            "The company receives $12,000. Common stock is credited for $5,000 par value, leaving $7,000 credited to additional paid-in capital."
    },

    {
        id: 20,
        lesson: 5,
        topic: "Equity Components",

        question:
            "Which of the following is generally a component of stockholders' equity rather than an expense?",

        answers: [
            "Interest expense",
            "Cost of goods sold",
            "Additional paid-in capital",
            "Income tax expense"
        ],

        correctAnswer: 2,

        explanation:
            "Additional paid-in capital is an equity account. The other choices are expenses reported in determining income."
    },


    // =========================================================
    // LESSON 6 — NOTES & DISCLOSURES
    // =========================================================

    {
        id: 21,
        lesson: 6,
        topic: "Financial Statement Disclosures",

        question:
            "Why are notes to financial statements important?",

        answers: [
            "They replace the primary financial statements",
            "They provide information needed to understand amounts, policies, risks, and other matters presented in the financial statements",
            "They contain only management forecasts",
            "They are used only when a company reports a net loss"
        ],

        correctAnswer: 1,

        explanation:
            "Notes are an integral part of financial reporting and provide important information about accounting policies, balances, risks, commitments, and other matters."
    },

    {
        id: 22,
        lesson: 6,
        topic: "Loss Contingencies",

        question:
            "A loss contingency is probable and the amount of loss can be reasonably estimated. Under U.S. GAAP, what is generally required?",

        answers: [
            "No recognition or disclosure",
            "Disclosure only, never recognition",
            "Recognition of the loss and liability, with appropriate disclosure as necessary",
            "Recognition directly in stockholders' equity"
        ],

        correctAnswer: 2,

        explanation:
            "When a loss contingency is probable and reasonably estimable, U.S. GAAP generally requires the loss and liability to be accrued."
    },

    {
        id: 23,
        lesson: 6,
        topic: "Related Parties",

        question:
            "Which situation is most likely to require consideration of related-party disclosures?",

        answers: [
            "A material transaction between the company and an entity controlled by a principal owner",
            "A normal cash sale to an unrelated customer",
            "Payment of monthly utility bills",
            "Purchase of office supplies from an unrelated retailer"
        ],

        correctAnswer: 0,

        explanation:
            "Transactions involving related parties can occur on terms different from arm's-length transactions and may require disclosure of the relationship and transaction information."
    },

    {
        id: 24,
        lesson: 6,
        topic: "Accounting Policies",

        question:
            "Where would a financial statement user generally look for information about significant accounting policies used in preparing the financial statements?",

        answers: [
            "Only the statement of cash flows",
            "Only the balance sheet",
            "Only the income statement",
            "The notes to the financial statements"
        ],

        correctAnswer: 3,

        explanation:
            "Significant accounting policies and other important explanatory information are generally communicated in the notes to the financial statements."
    },


    // =========================================================
    // LESSON 7 — ACCOUNTING CHANGES
    // =========================================================

    {
        id: 25,
        lesson: 7,
        topic: "Change in Accounting Estimate",

        question:
            "A company revises the estimated useful life of equipment based on new information. How is this change generally accounted for?",

        answers: [
            "By restating all prior years",
            "As a prior-period error",
            "Prospectively as a change in accounting estimate",
            "Directly through additional paid-in capital"
        ],

        correctAnswer: 2,

        explanation:
            "Changes in accounting estimates resulting from new information are generally accounted for prospectively."
    },

    {
        id: 26,
        lesson: 7,
        topic: "Change in Accounting Principle",

        question:
            "When an entity voluntarily changes from one acceptable accounting principle to another acceptable accounting principle, the change is generally reported using which approach, assuming retrospective application is practicable?",

        answers: [
            "Prospective application only",
            "Retrospective application",
            "No financial statement effect",
            "Recognition entirely in current-year revenue"
        ],

        correctAnswer: 1,

        explanation:
            "A change from one generally accepted accounting principle to another is generally applied retrospectively unless an exception applies or retrospective application is impracticable."
    },

    {
        id: 27,
        lesson: 7,
        topic: "Change in Reporting Entity",

        question:
            "A change in the entities included in combined financial statements that represents a change in reporting entity is generally presented:",

        answers: [
            "Prospectively beginning in the current year",
            "Only in a footnote with no statement adjustment",
            "As a current-period operating expense",
            "Retrospectively for prior periods presented"
        ],

        correctAnswer: 3,

        explanation:
            "A change in reporting entity is generally accounted for retrospectively so comparative financial statements reflect the new reporting entity."
    },

    {
        id: 28,
        lesson: 7,
        topic: "Depreciation Estimate",

        question:
            "A change in depreciation method is generally treated for accounting purposes as:",

        answers: [
            "A change in accounting estimate effected by a change in accounting principle and accounted for prospectively",
            "A prior-period error requiring restatement",
            "A change in reporting entity",
            "An extraordinary item"
        ],

        correctAnswer: 0,

        explanation:
            "A change in depreciation method is generally treated as a change in accounting estimate effected by a change in accounting principle and is accounted for prospectively."
    },


    // =========================================================
    // LESSON 8 — ERROR CORRECTIONS
    // =========================================================

    {
        id: 29,
        lesson: 8,
        topic: "Prior-Period Errors",

        question:
            "A material error in a previously issued financial statement is discovered in the current year. What is generally the appropriate treatment when comparative statements are presented?",

        answers: [
            "Include the entire correction in current-year revenue",
            "Ignore the error because the prior year is closed",
            "Treat the error as a change in estimate",
            "Correct the prior-period financial statements through restatement"
        ],

        correctAnswer: 3,

        explanation:
            "Material errors in previously issued financial statements are generally corrected through prior-period restatement rather than being treated as current-period income."
    },

    {
        id: 30,
        lesson: 8,
        topic: "Capitalization Errors",

        question:
            "A company incorrectly expensed a $20,000 equipment purchase on the final day of the year. Ignoring depreciation and taxes, what was the effect on that year's net income?",

        answers: [
            "Net income was understated by $20,000",
            "Net income was overstated by $20,000",
            "Net income was unaffected",
            "Net income was understated by $40,000"
        ],

        correctAnswer: 0,

        explanation:
            "The equipment should have been capitalized. Expensing the full $20,000 immediately caused expenses to be overstated and net income to be understated by $20,000."
    },

    {
        id: 31,
        lesson: 8,
        topic: "Inventory Errors",

        question:
            "If ending inventory is understated by $15,000 and no other errors exist, what is the effect on current-year cost of goods sold and net income?",

        answers: [
            "COGS understated; net income overstated",
            "Both COGS and net income understated",
            "COGS overstated; net income understated",
            "Both COGS and net income overstated"
        ],

        correctAnswer: 2,

        explanation:
            "Ending inventory is subtracted in computing cost of goods sold. If ending inventory is understated, COGS is overstated, which causes net income to be understated."
    },

    {
        id: 32,
        lesson: 8,
        topic: "Accrued Expenses",

        question:
            "At year-end, a company fails to record an accrued expense of $8,000. What is the effect before correction?",

        answers: [
            "Liabilities are overstated and net income is understated",
            "Liabilities are understated and net income is overstated",
            "Assets are understated and net income is understated",
            "Liabilities and net income are both understated"
        ],

        correctAnswer: 1,

        explanation:
            "Failing to accrue an expense understates both the expense and related liability. Because expenses are understated, net income is overstated."
    },


    // =========================================================
    // LESSON 9 — SUBSEQUENT EVENTS
    // =========================================================

    {
        id: 33,
        lesson: 9,
        topic: "Recognized Subsequent Events",

        question:
            "After year-end but before the financial statements are issued, a customer declares bankruptcy. Evidence indicates the customer's severe financial difficulty existed at year-end. What is generally required?",

        answers: [
            "Adjust the year-end financial statements because the event provides additional evidence about a condition existing at year-end",
            "Record the loss only in the following year",
            "Ignore the bankruptcy completely",
            "Treat the bankruptcy as a change in accounting principle"
        ],

        correctAnswer: 0,

        explanation:
            "When a subsequent event provides additional evidence about a condition that existed at the balance-sheet date, the financial statements are generally adjusted."
    },

    {
        id: 34,
        lesson: 9,
        topic: "Nonrecognized Subsequent Events",

        question:
            "A company's uninsured factory is destroyed by an earthquake occurring after year-end. The earthquake and resulting condition did not exist at year-end. If the loss is material, what is generally appropriate?",

        answers: [
            "Recognize the loss in the year just ended",
            "Do not adjust year-end amounts, but disclose the material event appropriately",
            "Reduce beginning retained earnings",
            "Record an asset for the expected rebuilding cost"
        ],

        correctAnswer: 1,

        explanation:
            "The event arose after year-end, so year-end amounts generally are not adjusted. A material nonrecognized subsequent event may require disclosure."
    },

    {
        id: 35,
        lesson: 9,
        topic: "Subsequent Events",

        question:
            "The key distinction between recognized and nonrecognized subsequent events is generally whether:",

        answers: [
            "The event involves cash",
            "Management expected the event",
            "The event involves more than $1 million",
            "The underlying condition existed at the balance-sheet date"
        ],

        correctAnswer: 3,

        explanation:
            "The central question is whether the underlying condition existed at the balance-sheet date. Existing conditions may lead to recognition; conditions arising afterward generally do not."
    },

    {
        id: 36,
        lesson: 9,
        topic: "Subsequent Events",

        question:
            "A lawsuit concerning an event that occurred before year-end is settled after year-end but before the financial statements are issued. The settlement provides better evidence of the obligation that existed at year-end. The settlement generally should be considered:",

        answers: [
            "A financing activity",
            "A change in accounting principle",
            "Evidence relevant to adjustment of the year-end financial statements",
            "An event that can never affect year-end statements"
        ],

        correctAnswer: 2,

        explanation:
            "A settlement after year-end can provide additional evidence about a condition and obligation that already existed at the balance-sheet date."
    },


    // =========================================================
    // LESSON 10 — SPECIAL-PURPOSE FRAMEWORKS
    // =========================================================

    {
        id: 37,
        lesson: 10,
        topic: "Cash Basis",

        question:
            "Under the cash basis of accounting, revenue is generally recognized when:",

        answers: [
            "The related contract is signed",
            "Cash is received",
            "The customer first expresses interest",
            "A receivable is created regardless of collection"
        ],

        correctAnswer: 1,

        explanation:
            "Under cash-basis accounting, revenues are generally recognized when cash is received and expenses when cash is paid."
    },

    {
        id: 38,
        lesson: 10,
        topic: "Special-Purpose Frameworks",

        question:
            "Which of the following is an example of a special-purpose financial reporting framework?",

        answers: [
            "Only U.S. GAAP",
            "Only IFRS",
            "A framework cannot be based on tax rules",
            "The tax basis of accounting"
        ],

        correctAnswer: 3,

        explanation:
            "Tax-basis accounting is one example of a special-purpose framework. Other examples include cash basis and certain regulatory or contractual bases."
    },

    {
        id: 39,
        lesson: 10,
        topic: "Cash-to-Accrual Conversion",

        question:
            "A company collected $120,000 cash from customers during the year. Accounts receivable increased from $18,000 to $28,000. Assuming no other relevant adjustments, what amount of revenue was earned on the accrual basis?",

        answers: [
            "$110,000",
            "$120,000",
            "$130,000",
            "$148,000"
        ],

        correctAnswer: 2,

        explanation:
            "An increase in accounts receivable means revenue earned exceeded cash collections. Accrual revenue equals $120,000 cash collected + $10,000 increase in receivables = $130,000."
    },

    {
        id: 40,
        lesson: 10,
        topic: "Cash-to-Accrual Conversion",

        question:
            "A company paid $75,000 cash for operating expenses during the year. Accrued expenses payable increased from $6,000 to $11,000. Assuming no other relevant adjustments, what is accrual-basis expense?",

        answers: [
            "$80,000",
            "$70,000",
            "$75,000",
            "$86,000"
        ],

        correctAnswer: 0,

        explanation:
            "The payable increased by $5,000, meaning $5,000 of expense was recognized but not yet paid. Accrual-basis expense is $75,000 + $5,000 = $80,000."
    },

        // =========================================================
    // MODULE 1 — ADVANCED CPA-STYLE REVIEW
    // QUESTIONS 41–60
    // =========================================================

    {
        id: 41,
        lesson: 1,
        topic: "Financial Reporting Foundations",

        question:
            "At the beginning of the year, a company had total assets of $900,000 and total liabilities of $540,000. During the year, the company earned net income of $95,000, declared and paid $25,000 of dividends, and issued $40,000 of common stock for cash. Assuming no other transactions affected equity, what is total stockholders' equity at year-end?",

        answers: [
            "$430,000",
            "$470,000",
            "$540,000",
            "$565,000"
        ],

        correctAnswer: 1,

        explanation:
            "Beginning equity is $900,000 − $540,000 = $360,000. Add $95,000 of net income, subtract $25,000 of dividends, and add the $40,000 stock issuance. Ending equity is $360,000 + $95,000 − $25,000 + $40,000 = $470,000."
    },

    {
        id: 42,
        lesson: 1,
        topic: "Accrual Accounting",

        question:
            "During December, a company collected $30,000 in advance for services to be performed next year and performed $18,000 of services for a customer that will pay next year. Ignoring all other transactions, by how much does December revenue increase under accrual accounting?",

        answers: [
            "$48,000",
            "$30,000",
            "$18,000",
            "$12,000"
        ],

        correctAnswer: 2,

        explanation:
            "The $30,000 collected in advance is not December revenue because the services have not yet been performed; it is generally recorded as a liability. The $18,000 of services performed in December is recognized as revenue even though cash will be collected later. December revenue therefore increases by $18,000."
    },

    {
        id: 43,
        lesson: 2,
        topic: "Balance Sheet Classification",

        question:
            "A company has an operating cycle of 18 months. At year-end, it reports inventory expected to be sold in 14 months, a receivable expected to be collected in 16 months from a normal operating sale, equipment to be used for five years, and a note receivable unrelated to operations due in three years. Which items would generally be classified as current assets?",

        answers: [
            "Only the inventory",
            "The inventory and the operating receivable",
            "The inventory, operating receivable, and equipment",
            "All four items"
        ],

        correctAnswer: 1,

        explanation:
            "When the normal operating cycle exceeds one year, assets expected to be realized during that operating cycle may generally be classified as current. The inventory and operating receivable fall within the 18-month operating cycle. The equipment and three-year nonoperating note are noncurrent."
    },

    {
        id: 44,
        lesson: 2,
        topic: "Working Capital",

        question:
            "A company reports cash of $90,000, accounts receivable of $140,000, inventory of $180,000, prepaid insurance of $20,000, equipment of $500,000, accounts payable of $110,000, accrued liabilities of $35,000, and a $300,000 long-term note of which $45,000 is due within the next year. What is working capital?",

        answers: [
            "$240,000",
            "$430,000",
            "$285,000",
            "$540,000"
        ],

        correctAnswer: 0,

        explanation:
            "Current assets are $90,000 + $140,000 + $180,000 + $20,000 = $430,000. Current liabilities are $110,000 + $35,000 + $45,000 = $190,000. Working capital is $430,000 − $190,000 = $240,000."
    },

    {
        id: 45,
        lesson: 3,
        topic: "Comprehensive Income",

        question:
            "A company reports income from continuing operations after tax of $420,000, an after-tax loss from discontinued operations of $60,000, and other comprehensive income of $25,000. What are net income and comprehensive income, respectively?",

        answers: [
            "$420,000 and $445,000",
            "$360,000 and $385,000",
            "$360,000 and $335,000",
            "$385,000 and $420,000"
        ],

        correctAnswer: 1,

        explanation:
            "Net income includes the discontinued-operations loss: $420,000 − $60,000 = $360,000. Comprehensive income equals net income plus OCI: $360,000 + $25,000 = $385,000."
    },

    {
        id: 46,
        lesson: 3,
        topic: "Comprehensive Income",

        question:
            "A corporation reports net income of $275,000, other comprehensive loss of $18,000, cash dividends of $30,000, and proceeds from issuing common stock of $100,000. What is comprehensive income?",

        answers: [
            "$327,000",
            "$245,000",
            "$257,000",
            "$357,000"
        ],

        correctAnswer: 2,

        explanation:
            "Comprehensive income equals net income plus other comprehensive income or loss. Therefore, comprehensive income is $275,000 − $18,000 = $257,000. Dividends and stock issuances are owner-related equity transactions and are not components of comprehensive income."
    },

    {
        id: 47,
        lesson: 4,
        topic: "Indirect Method",

        question:
            "A company reports net income of $210,000. Depreciation expense is $32,000, a gain on sale of equipment is $9,000, accounts receivable increased $14,000, inventory decreased $11,000, and accounts payable decreased $7,000. What is net cash provided by operating activities under the indirect method?",

        answers: [
            "$223,000",
            "$251,000",
            "$209,000",
            "$237,000"
        ],

        correctAnswer: 0,

        explanation:
            "Operating cash flow is $210,000 + $32,000 − $9,000 − $14,000 + $11,000 − $7,000 = $223,000. Depreciation is added back, the gain is removed, increases in operating assets are subtracted, decreases in operating assets are added, and decreases in operating liabilities are subtracted."
    },

    {
        id: 48,
        lesson: 4,
        topic: "Statement of Cash Flows",

        question:
            "During the year, a company received $250,000 from issuing common stock, paid $90,000 to purchase equipment, borrowed $160,000 by issuing long-term debt, and paid $40,000 of cash dividends. What is net cash provided by financing activities?",

        answers: [
            "$280,000",
            "$370,000",
            "$410,000",
            "$320,000"
        ],

        correctAnswer: 1,

        explanation:
            "Financing activities include the $250,000 stock issuance, $160,000 debt issuance, and $40,000 dividend payment. Net financing cash flow is $250,000 + $160,000 − $40,000 = $370,000. The equipment purchase is an investing cash outflow."
    },

    {
        id: 49,
        lesson: 5,
        topic: "Statement of Changes in Equity",

        question:
            "Beginning stockholders' equity is $700,000. During the year, the company earns $120,000 of net income, reports $15,000 of other comprehensive income, issues $80,000 of common stock for cash, declares $35,000 of dividends, and purchases $50,000 of treasury stock. What is ending total stockholders' equity?",

        answers: [
            "$830,000",
            "$865,000",
            "$780,000",
            "$915,000"
        ],

        correctAnswer: 0,

        explanation:
            "Ending equity is $700,000 + $120,000 + $15,000 + $80,000 − $35,000 − $50,000 = $830,000. Net income and OCI increase equity, stock issuance increases equity, while dividends and treasury-stock purchases reduce equity."
    },

    {
        id: 50,
        lesson: 5,
        topic: "Common Stock and APIC",

        question:
            "A corporation issues 8,000 shares of $4 par common stock for $11 per share. It later purchases treasury stock for $18,000. Ignoring all other equity transactions, what is the net increase in total stockholders' equity from these two transactions?",

        answers: [
            "$70,000",
            "$88,000",
            "$38,000",
            "$52,000"
        ],

        correctAnswer: 0,

        explanation:
            "The stock issuance increases total equity by the $88,000 proceeds (8,000 × $11). The treasury-stock purchase reduces total equity by $18,000. The net increase in equity is $88,000 − $18,000 = $70,000."
    },

    {
        id: 51,
        lesson: 6,
        topic: "Recognition and Disclosure",

        question:
            "At year-end, a company has incurred $75,000 of employee compensation that will be paid next year. Management proposes disclosing the obligation in the notes instead of recording it because no cash has yet been paid. Which treatment is most appropriate?",

        answers: [
            "Disclosure only because the amount will be paid next year",
            "No recognition or disclosure until cash is paid",
            "Recognize compensation expense and a liability; disclosure does not substitute for required recognition",
            "Charge the amount directly to retained earnings"
        ],

        correctAnswer: 2,

        explanation:
            "The compensation has been incurred and the related obligation exists at year-end. Required recognition in the financial statements generally cannot be replaced merely by note disclosure. The company should recognize compensation expense and the related liability."
    },

    {
        id: 52,
        lesson: 6,
        topic: "Loss Contingencies",

        question:
            "At year-end, a company is involved in litigation. Its attorneys conclude that a loss is probable and estimate the loss at $90,000. Before issuing the financial statements, additional evidence confirms that the obligation existed at year-end and that $90,000 remains the best estimate. What is the appropriate year-end treatment?",

        answers: [
            "Accrue a $90,000 loss and liability, with appropriate disclosure as necessary",
            "Disclose the matter but never recognize a liability",
            "Wait until the lawsuit is paid",
            "Record the amount as a reduction of additional paid-in capital"
        ],

        correctAnswer: 0,

        explanation:
            "A probable loss that is reasonably estimable is generally accrued. The additional information confirms the year-end condition rather than creating a new post-year-end obligation, so the $90,000 loss and liability should be recognized."
    },

    {
        id: 53,
        lesson: 7,
        topic: "Change in Accounting Estimate",

        question:
            "Equipment has a carrying amount of $150,000 when management revises its estimated remaining useful life to six years and its residual value to $18,000 based on new information. Using straight-line depreciation, what annual depreciation expense should generally be recognized prospectively?",

        answers: [
            "$28,000",
            "$22,000",
            "$25,000",
            "$18,000"
        ],

        correctAnswer: 1,

        explanation:
            "The revised depreciable amount is $150,000 − $18,000 = $132,000. Spread prospectively over the six-year remaining useful life, annual depreciation is $132,000 ÷ 6 = $22,000."
    },

    {
        id: 54,
        lesson: 7,
        topic: "Accounting Changes",

        question:
            "Which situation is generally accounted for prospectively rather than through retrospective application or prior-period restatement?",

        answers: [
            "Correction of a material mathematical error in a prior-period statement",
            "A change in reporting entity",
            "A change from one acceptable inventory accounting principle to another when retrospective application is required and practicable",
            "A revision of an asset's estimated residual value based on new information"
        ],

        correctAnswer: 3,

        explanation:
            "A revision of residual value based on new information is a change in accounting estimate and is generally accounted for prospectively. Material prior-period errors are corrected through restatement, and changes in reporting entity and many changes in accounting principle are generally retrospective."
    },

    {
        id: 55,
        lesson: 8,
        topic: "Inventory Errors",

        question:
            "A company's Year 1 ending inventory was understated by $24,000, and the error was not corrected. No additional inventory errors occurred in Year 2. Ignoring taxes, what is the effect on net income in Year 1 and Year 2?",

        answers: [
            "Year 1 understated $24,000; Year 2 overstated $24,000",
            "Year 1 overstated $24,000; Year 2 understated $24,000",
            "Both years understated $24,000",
            "Year 1 understated $24,000; Year 2 unaffected"
        ],

        correctAnswer: 0,

        explanation:
            "Understated Year 1 ending inventory causes Year 1 COGS to be overstated and Year 1 net income to be understated by $24,000. That understated ending inventory becomes understated beginning inventory in Year 2, causing Year 2 COGS to be understated and Year 2 net income to be overstated by $24,000. The income effects counterbalance over the two periods."
    },

    {
        id: 56,
        lesson: 8,
        topic: "Prior-Period Error Correction",

        question:
            "In the prior year, a company failed to record $36,000 of wages expense and the related payable. The wages remain unpaid when the material error is discovered at the beginning of the current year. Ignoring income taxes, which correcting entry is appropriate?",

        answers: [
            "Debit Wages Expense $36,000; credit Cash $36,000",
            "Debit Retained Earnings $36,000; credit Wages Payable $36,000",
            "Debit Wages Payable $36,000; credit Retained Earnings $36,000",
            "Debit Cash $36,000; credit Wages Expense $36,000"
        ],

        correctAnswer: 1,

        explanation:
            "The omitted prior-year expense caused prior-year income and current-year beginning retained earnings to be overstated, while the payable was understated. The correction therefore debits beginning retained earnings and credits wages payable for $36,000."
    },

    {
        id: 57,
        lesson: 9,
        topic: "Subsequent Events",

        question:
            "A company has a $200,000 receivable from a customer at December 31. The customer is financially healthy at year-end. On January 18, the customer's only manufacturing facility is unexpectedly destroyed by a natural disaster, causing the customer to enter bankruptcy before the company's financial statements are issued. Which treatment is generally most appropriate if the event is material?",

        answers: [
            "Adjust the December 31 receivable because every bankruptcy before issuance is recognized",
            "Do not adjust the December 31 amounts for the new condition, but provide appropriate disclosure of the material event",
            "Write off the receivable directly against December 31 retained earnings",
            "Recognize the natural-disaster loss as a December operating expense"
        ],

        correctAnswer: 1,

        explanation:
            "The customer was financially healthy at December 31, and the condition causing the bankruptcy arose after year-end. Therefore, the event is generally nonrecognized for the year-end amounts. Because it is material, appropriate disclosure may be required."
    },

    {
        id: 58,
        lesson: 9,
        topic: "Recognized Subsequent Events",

        question:
            "At December 31, a company is defending a lawsuit arising from an event that occurred during the year. Before the financial statements are issued, the lawsuit is settled for $140,000. The settlement provides additional evidence about the obligation that existed at December 31. Subject to the applicable loss-contingency requirements, how should the settlement generally affect the year-end financial statements?",

        answers: [
            "It can provide evidence used in determining the amount recognized for the year-end obligation",
            "It must always be ignored because settlement occurred after year-end",
            "It must be recorded entirely as a transaction of the following year",
            "It is treated as a change in accounting principle"
        ],

        correctAnswer: 0,

        explanation:
            "Because the underlying event and obligation existed at year-end, the subsequent settlement can provide additional evidence about the amount of the year-end loss contingency. Subject to the applicable contingency guidance, that evidence may affect the amount recognized in the year-end financial statements."
    },

    {
        id: 59,
        lesson: 10,
        topic: "Cash-to-Accrual Conversion",

        question:
            "A cash-basis company collected $900,000 from customers during the year. Accounts receivable increased from $70,000 to $105,000. The company also collected $20,000 in advance at year-end for services that will be performed next year; the $20,000 is included in the $900,000 cash collections. Assuming no other relevant adjustments, what is current-year accrual-basis revenue?",

        answers: [
            "$935,000",
            "$915,000",
            "$865,000",
            "$955,000"
        ],

        correctAnswer: 1,

        explanation:
            "Start with $900,000 of cash collections. Add the $35,000 increase in accounts receivable because earned revenue exceeded collections by that amount, then subtract the $20,000 collected in advance because it is not current-year revenue. Accrual-basis revenue is $900,000 + $35,000 − $20,000 = $915,000."
    },

    {
        id: 60,
        lesson: 10,
        topic: "Cash-to-Accrual Conversion",

        question:
            "A company paid $400,000 cash for operating costs during the year. Accounts payable increased by $28,000, while prepaid operating costs increased by $12,000. Assuming no other relevant adjustments, what is accrual-basis operating expense?",

        answers: [
            "$440,000",
            "$416,000",
            "$384,000",
            "$428,000"
        ],

        correctAnswer: 1,

        explanation:
            "An increase in accounts payable means $28,000 of recognized expense has not yet been paid, so it is added to cash payments. An increase in prepaid costs means $12,000 of cash paid relates to future periods, so it is subtracted. Accrual expense is $400,000 + $28,000 − $12,000 = $416,000."
    }

];

const farModule2Questions = [

    // =====================================================
    // LESSON 1 — CASH & CASH EQUIVALENTS
    // =====================================================

    {
        lessonId: 1,
        question:
            "Which item should generally be included in cash and cash equivalents?",
        answers: [
            "A Treasury bill purchased with two months remaining until maturity",
            "Common stock held for short-term appreciation",
            "A five-year corporate bond purchased one month before year-end",
            "A restricted deposit that cannot be used for normal operations"
        ],
        correctAnswer: 0,
        explanation:
            "Cash equivalents are short-term, highly liquid investments that are readily convertible to known amounts of cash and generally have an original maturity of three months or less when acquired."
    },

    {
        lessonId: 1,
        question:
            "Which item appearing on a bank reconciliation generally requires an adjusting entry on the company's books?",
        answers: [
            "Deposit in transit",
            "Bank service charge",
            "Outstanding check",
            "Bank error that understated the bank balance"
        ],
        correctAnswer: 1,
        explanation:
            "A bank service charge has been recorded by the bank but may not yet have been recorded by the company. Therefore, the company's books must generally be adjusted."
    },

    {
        lessonId: 1,
        question:
            "A company has a bank balance of $48,000, deposits in transit of $7,000, and outstanding checks of $9,000. What is the adjusted bank balance?",
        answers: [
            "$39,000",
            "$41,000",
            "$46,000",
            "$64,000"
        ],
        correctAnswer: 2,
        explanation:
            "Adjusted bank balance equals $48,000 plus $7,000 of deposits in transit minus $9,000 of outstanding checks, resulting in $46,000."
    },

    {
        lessonId: 1,
        question:
            "How are outstanding checks generally treated on a bank reconciliation?",
        answers: [
            "Added to the book balance",
            "Deducted from the book balance",
            "Added to the bank balance",
            "Deducted from the bank balance"
        ],
        correctAnswer: 3,
        explanation:
            "Outstanding checks have already been recorded by the company but have not yet cleared the bank. They are therefore deducted from the bank statement balance."
    },


    // =====================================================
    // LESSON 2 — ACCOUNTS RECEIVABLE
    // =====================================================

    {
        lessonId: 2,
        question:
            "Accounts receivable are $250,000 and the allowance for credit losses has a $12,000 credit balance. What is the net realizable value of accounts receivable?",
        answers: [
            "$238,000",
            "$250,000",
            "$262,000",
            "$12,000"
        ],
        correctAnswer: 0,
        explanation:
            "Net realizable value equals gross accounts receivable minus the allowance for credit losses: $250,000 minus $12,000 equals $238,000."
    },

    {
        lessonId: 2,
        question:
            "What is the immediate effect of writing off a specific receivable against an existing allowance for credit losses?",
        answers: [
            "Credit loss expense increases",
            "Net realizable value generally remains unchanged",
            "Net realizable value decreases",
            "Revenue decreases"
        ],
        correctAnswer: 1,
        explanation:
            "A write-off reduces both Accounts Receivable and the Allowance for Credit Losses by the same amount. Therefore, net realizable value generally remains unchanged."
    },

    {
        lessonId: 2,
        question:
            "A company's aging analysis indicates that the required ending allowance for credit losses is $18,000. Before adjustment, the allowance has a $5,000 credit balance. What adjustment is required?",
        answers: [
            "$5,000",
            "$18,000",
            "$13,000",
            "$23,000"
        ],
        correctAnswer: 2,
        explanation:
            "The allowance must increase from its existing $5,000 credit balance to the required $18,000 credit balance. The adjustment is therefore $13,000."
    },

    {
    lessonId: 2,
    question:
        "A company determines that a specific $9,000 accounts receivable balance is uncollectible and writes it off against an existing allowance for credit losses. What is the immediate effect of the write-off on gross accounts receivable and net realizable value?",
    answers: [
        "Gross accounts receivable decreases by $9,000, and net realizable value generally remains unchanged",
        "Gross accounts receivable and net realizable value both decrease by $9,000",
        "Gross accounts receivable remains unchanged, but net realizable value decreases by $9,000",
        "Gross accounts receivable decreases by $9,000, and net realizable value increases by $9,000"
    ],
    correctAnswer: 0,
    explanation:
        "The write-off reduces both gross Accounts Receivable and the Allowance for Credit Losses by $9,000. Because both amounts decrease equally, net realizable value generally remains unchanged."
},


    // =====================================================
    // LESSON 3 — INVENTORY
    // =====================================================

    {
        lessonId: 3,
        question:
            "Goods are shipped FOB shipping point on December 30 and received by the buyer on January 3. Who generally owns the goods on December 31?",
        answers: [
            "The buyer",
            "The seller",
            "The shipping company",
            "Neither party until delivery"
        ],
        correctAnswer: 0,
        explanation:
            "Under FOB shipping point terms, ownership generally transfers to the buyer when the seller ships the goods."
    },

    {
        lessonId: 3,
        question:
            "Inventory held by a consignee on behalf of another company should generally be included in whose inventory?",
        answers: [
            "The consignee's inventory",
            "The consignor's inventory",
            "Both companies' inventory",
            "Neither company's inventory"
        ],
        correctAnswer: 1,
        explanation:
            "The consignor retains ownership of goods held on consignment. Therefore, the consignor generally includes the goods in inventory."
    },

    {
        lessonId: 3,
        question:
            "During a period of rising purchase prices, FIFO will generally produce which result compared with LIFO?",
        answers: [
            "Higher cost of goods sold and lower ending inventory",
            "Lower net income and lower ending inventory",
            "Lower cost of goods sold and higher ending inventory",
            "Exactly the same results as LIFO"
        ],
        correctAnswer: 2,
        explanation:
            "With rising prices, FIFO assigns older, lower costs to cost of goods sold and newer, higher costs to ending inventory. This generally produces lower COGS and higher ending inventory than LIFO."
    },

    {
        lessonId: 3,
        question:
            "Estimated selling price of inventory is $75,000. Reasonably predictable costs of completion, disposal, and transportation total $9,000. What is net realizable value?",
        answers: [
            "$75,000",
            "$84,000",
            "$9,000",
            "$66,000"
        ],
        correctAnswer: 3,
        explanation:
            "Net realizable value equals estimated selling price minus reasonably predictable costs of completion, disposal, and transportation: $75,000 minus $9,000 equals $66,000."
    },


    // =====================================================
    // LESSON 4 — PROPERTY, PLANT & EQUIPMENT
    // =====================================================

    {
        lessonId: 4,
        question:
            "Which expenditure associated with newly purchased equipment should generally be capitalized?",
        answers: [
            "Freight and installation costs necessary to prepare the equipment for use",
            "Routine maintenance performed six months after installation",
            "Normal employee training costs",
            "Advertising related to the new equipment"
        ],
        correctAnswer: 0,
        explanation:
            "Costs necessary to acquire an asset and prepare it for its intended use, such as freight and installation, are generally included in the asset's cost."
    },

    {
        lessonId: 4,
        question:
            "Equipment costs $150,000, has an estimated residual value of $30,000, and has a six-year useful life. What is annual straight-line depreciation?",
        answers: [
            "$25,000",
            "$20,000",
            "$30,000",
            "$15,000"
        ],
        correctAnswer: 1,
        explanation:
            "The depreciable base is $150,000 minus $30,000, or $120,000. Dividing by six years gives annual straight-line depreciation of $20,000."
    },

    {
        lessonId: 4,
        question:
            "Equipment costing $100,000 has accumulated depreciation of $70,000 and is sold for $36,000. What should the company recognize?",
        answers: [
            "$36,000 gain",
            "$6,000 loss",
            "$6,000 gain",
            "$30,000 gain"
        ],
        correctAnswer: 2,
        explanation:
            "The carrying amount is $100,000 minus $70,000, or $30,000. Selling it for $36,000 creates a $6,000 gain."
    },

    {
        lessonId: 4,
        question:
            "Under the U.S. GAAP impairment model for long-lived assets held and used, what generally occurs first when impairment is indicated?",
        answers: [
            "The asset is immediately written to zero",
            "Fair value is compared directly with historical cost",
            "The asset is automatically classified as held for sale",
            "Carrying amount is tested for recoverability using undiscounted cash flows"
        ],
        correctAnswer: 3,
        explanation:
            "For long-lived assets held and used, U.S. GAAP generally begins with a recoverability test comparing carrying amount with undiscounted expected cash flows."
    },


    // =====================================================
    // LESSON 5 — INTANGIBLE ASSETS
    // =====================================================

    {
        lessonId: 5,
        question:
            "A company purchases a patent for $160,000 that is expected to provide economic benefits for eight years. Assuming no residual value, what is annual straight-line amortization?",
        answers: [
            "$20,000",
            "$10,000",
            "$16,000",
            "$8,000"
        ],
        correctAnswer: 0,
        explanation:
            "Annual amortization is $160,000 divided by the eight-year useful life, resulting in $20,000."
    },

    {
    lessonId: 5,
    question:
        "A company purchases a patent for $240,000. The patent has a remaining legal life of 15 years, but the company expects the patent to generate economic benefits for only 10 years. Assuming no residual value, what annual amortization expense should generally be recognized?",
    answers: [
        "$16,000",
        "$24,000",
        "$20,000",
        "$0"
    ],
    correctAnswer: 1,
    explanation:
        "A finite-lived intangible asset is generally amortized over its useful life, considering legal, contractual, regulatory, and economic factors. Because the expected economic life is 10 years, annual amortization is $240,000 ÷ 10 = $24,000."
},

    {
    lessonId: 5,
    question:
        "A finite-lived intangible asset has a carrying amount of $180,000. Events indicate possible impairment. Expected undiscounted future cash flows are $150,000, and the asset's fair value is $125,000. Under the U.S. GAAP long-lived asset impairment model, what impairment loss should generally be recognized?",
    answers: [
        "$0",
        "$30,000",
        "$55,000",
        "$125,000"
    ],
    correctAnswer: 2,
    explanation:
        "Because the $180,000 carrying amount exceeds the $150,000 of undiscounted future cash flows, the asset fails the recoverability test. The impairment loss is then measured as carrying amount minus fair value: $180,000 − $125,000 = $55,000."
},

    {
        lessonId: 5,
        question:
            "Which statement about an indefinite-lived intangible asset is generally correct?",
        answers: [
            "It must be amortized over exactly 10 years",
            "It must be immediately written off",
            "It is treated as inventory",
            "It generally is not amortized but is subject to impairment testing"
        ],
        correctAnswer: 3,
        explanation:
            "An indefinite-lived intangible asset generally is not amortized because there is no foreseeable limit on the period of expected cash flows. It is instead subject to impairment testing."
    },


    // =====================================================
    // LESSON 6 — CURRENT LIABILITIES
    // =====================================================

    {
        lessonId: 6,
        question:
            "A $300,000 note bears interest at 6% annually. Two months of interest have accrued at year-end. What amount of interest payable should be recognized?",
        answers: [
            "$3,000",
            "$18,000",
            "$6,000",
            "$1,500"
        ],
        correctAnswer: 0,
        explanation:
            "$300,000 × 6% × 2/12 equals $3,000 of accrued interest."
    },

    {
        lessonId: 6,
        question:
            "A company receives cash from a customer before satisfying the related performance obligation. What should generally be recognized initially?",
        answers: [
            "Revenue",
            "A contract liability or unearned revenue",
            "A gain",
            "Additional paid-in capital"
        ],
        correctAnswer: 1,
        explanation:
            "When payment is received before the company satisfies the related performance obligation, the company generally recognizes a liability until the revenue is earned."
    },

    {
        lessonId: 6,
        question:
            "A company has $900,000 of long-term debt, of which $120,000 is due during the next year. Assuming no classification exception applies, what amount should generally be reported as current?",
        answers: [
            "$780,000",
            "$900,000",
            "$120,000",
            "$0"
        ],
        correctAnswer: 2,
        explanation:
            "The $120,000 principal payment due during the next year is generally classified as a current liability when no applicable exception supports long-term classification."
    },

    {
        lessonId: 6,
        question:
            "Employees earned $14,000 of wages before year-end that will be paid next year. Which entry is generally required at year-end?",
        answers: [
            "Debit Cash and credit Wage Expense",
            "Debit Wages Payable and credit Cash",
            "Debit Wages Payable and credit Wage Expense",
            "Debit Wage Expense and credit Wages Payable"
        ],
        correctAnswer: 3,
        explanation:
            "Because the employees have already earned the wages, the company recognizes Wage Expense and an accrued Wages Payable liability."
    },


    // =====================================================
    // LESSON 7 — LONG-TERM DEBT
    // =====================================================

    {
        lessonId: 7,
        question:
            "A bond's stated interest rate is 9% and the market rate at issuance is 7%. The bond will generally be issued:",
        answers: [
            "At a premium",
            "At a discount",
            "At exactly zero carrying value",
            "Without recognizing interest"
        ],
        correctAnswer: 0,
        explanation:
            "Because the bond pays a stated rate above the market rate, investors are generally willing to pay more than face value, resulting in a premium."
    },

    {
        lessonId: 7,
        question:
            "Under the effective-interest method, interest expense on a bond is generally calculated using:",
        answers: [
            "Face value multiplied only by the stated rate",
            "Beginning carrying amount multiplied by the effective market rate",
            "Ending carrying amount multiplied by the stated rate",
            "Face value minus cash interest"
        ],
        correctAnswer: 1,
        explanation:
            "Under the effective-interest method, interest expense is based on the beginning carrying amount of the debt multiplied by the effective interest rate for the period."
    },

    {
        lessonId: 7,
        question:
            "A bond issued at a discount has interest expense of $42,000 and cash interest paid of $35,000. How much discount is amortized?",
        answers: [
            "$42,000",
            "$35,000",
            "$7,000",
            "$77,000"
        ],
        correctAnswer: 2,
        explanation:
            "For a discount bond, discount amortization equals interest expense minus cash interest: $42,000 minus $35,000 equals $7,000."
    },

    {
        lessonId: 7,
        question:
            "A company's debt has a net carrying amount of $520,000 and is reacquired for $545,000. What is recognized on extinguishment?",
        answers: [
            "$545,000 gain",
            "$25,000 gain",
            "No gain or loss",
            "$25,000 loss"
        ],
        correctAnswer: 3,
        explanation:
            "The reacquisition price exceeds the debt's carrying amount by $25,000. Therefore, the company recognizes a $25,000 loss."
    },


    // =====================================================
    // LESSON 8 — CONTINGENCIES & COMMITMENTS
    // =====================================================

    {
        lessonId: 8,
        question:
            "A litigation loss is probable and can be reasonably estimated at $200,000. What is generally required under U.S. GAAP?",
        answers: [
            "Accrue the $200,000 loss",
            "Ignore the matter until cash is paid",
            "Record the amount directly in equity",
            "Recognize a gain"
        ],
        correctAnswer: 0,
        explanation:
            "A loss contingency is generally accrued when it is probable that a liability has been incurred or an asset impaired and the amount can be reasonably estimated."
    },

    {
        lessonId: 8,
        question:
            "A probable loss is estimated to range from $60,000 to $100,000, and no amount in the range is a better estimate than another. What amount should generally be accrued?",
        answers: [
            "$0",
            "$60,000",
            "$80,000",
            "$100,000"
        ],
        correctAnswer: 1,
        explanation:
            "When no amount within a probable and reasonably estimable range is a better estimate than another, U.S. GAAP generally requires accrual of the minimum amount in the range."
    },

    {
        lessonId: 8,
        question:
            "A material loss contingency is reasonably possible but not probable. What is the general accounting treatment?",
        answers: [
            "Recognize the maximum possible liability",
            "Accrue the minimum possible amount",
            "Generally disclose the contingency without accrual",
            "Recognize revenue"
        ],
        correctAnswer: 2,
        explanation:
            "A reasonably possible material loss contingency generally requires disclosure but not accrual."
    },

    {
        lessonId: 8,
        question:
            "How are gain contingencies generally treated before realization?",
        answers: [
            "They are always recorded as revenue",
            "They are always recorded in OCI",
            "They are recorded as liabilities",
            "They generally are not recognized before realization"
        ],
        correctAnswer: 3,
        explanation:
            "Gain contingencies generally are not recognized before realization because recognizing them too early could result in premature recognition of income."
    },


    // =====================================================
    // LESSON 9 — INVESTMENTS
    // =====================================================

    {
        lessonId: 9,
        question:
            "How is a held-to-maturity debt security generally measured?",
        answers: [
            "At amortized cost",
            "At fair value with changes in net income",
            "At fair value with all changes in retained earnings",
            "At liquidation value"
        ],
        correctAnswer: 0,
        explanation:
            "Held-to-maturity debt securities are generally reported at amortized cost when the investor has the positive intent and ability to hold them to maturity."
    },

    {
        lessonId: 9,
        question:
            "Where are unrealized holding gains and losses on trading debt securities generally recognized?",
        answers: [
            "Other comprehensive income",
            "Net income",
            "Additional paid-in capital",
            "They are never recognized"
        ],
        correctAnswer: 1,
        explanation:
            "Trading debt securities are generally measured at fair value, with unrealized holding gains and losses recognized in current earnings."
    },

    {
        lessonId: 9,
        question:
            "An available-for-sale debt security experiences a $20,000 unrealized holding gain unrelated to credit losses. Where is that gain generally reported?",
        answers: [
            "Retained earnings directly",
            "Revenue",
            "Other comprehensive income",
            "Additional paid-in capital"
        ],
        correctAnswer: 2,
        explanation:
            "Unrealized holding gains and losses on available-for-sale debt securities generally are recognized in other comprehensive income, subject to the applicable credit-loss guidance."
    },

    {
        lessonId: 9,
        question:
            "Under the equity method, how are cash dividends received from the investee generally treated by the investor?",
        answers: [
            "As additional investment income",
            "As an increase in goodwill",
            "As an increase in the investment account",
            "As a reduction of the investment account"
        ],
        correctAnswer: 3,
        explanation:
            "Under the equity method, dividends generally represent a return of investment and therefore reduce the carrying amount of the investment."
    },


    // =====================================================
    // LESSON 10 — EQUITY ACCOUNTS
    // =====================================================

    {
        lessonId: 10,
        question:
            "A corporation issues 5,000 shares of $4 par common stock for $12 per share. How much additional paid-in capital is recognized?",
        answers: [
            "$40,000",
            "$20,000",
            "$60,000",
            "$80,000"
        ],
        correctAnswer: 0,
        explanation:
            "Cash received is 5,000 × $12 = $60,000. Common Stock is credited for 5,000 × $4 = $20,000. The remaining $40,000 is credited to additional paid-in capital."
    },

    {
        lessonId: 10,
        question:
            "What is the general effect of purchasing treasury stock under the cost method?",
        answers: [
            "Total stockholders' equity increases",
            "Total stockholders' equity decreases",
            "Net income increases",
            "Total liabilities increase"
        ],
        correctAnswer: 1,
        explanation:
            "Treasury stock is generally a contra-equity account. Purchasing treasury shares therefore reduces total stockholders' equity."
    },

    {
        lessonId: 10,
        question:
            "Beginning retained earnings are $420,000. Net income is $95,000 and dividends are $35,000. What is ending retained earnings?",
        answers: [
            "$515,000",
            "$455,000",
            "$480,000",
            "$550,000"
        ],
        correctAnswer: 2,
        explanation:
            "Ending retained earnings equals $420,000 plus $95,000 of net income minus $35,000 of dividends, resulting in $480,000."
    },

    {
        lessonId: 10,
        question:
            "A corporation has 300,000 shares issued and 45,000 shares held as treasury stock. How many shares are outstanding?",
        answers: [
            "300,000",
            "345,000",
            "45,000",
            "255,000"
        ],
        correctAnswer: 3,
        explanation:
            "Outstanding shares equal issued shares minus treasury shares: 300,000 minus 45,000 equals 255,000."
    },

    // =====================================================
// ADVANCED APPLICATION & ANALYSIS — QUESTIONS 41–60
// =====================================================

{
    lessonId: 1,
    question:
        "At December 31, a company has unrestricted checking deposits of $85,000, petty cash of $2,000, a Treasury bill purchased 45 days before maturity for $30,000, and $40,000 of cash restricted for construction of a building expected to begin in two years. What amount should generally be included with unrestricted cash and cash equivalents?",
    answers: [
        "$157,000",
        "$117,000",
        "$87,000",
        "$115,000"
    ],
    correctAnswer: 1,
    explanation:
        "Unrestricted checking deposits of $85,000, petty cash of $2,000, and the qualifying $30,000 Treasury bill are included, for a total of $117,000. The $40,000 restricted for a long-term construction purpose generally should not be included with unrestricted cash and cash equivalents."
},

{
    lessonId: 1,
    question:
        "A company's bank statement shows $96,000. Deposits in transit are $14,000, outstanding checks are $21,000, and the bank incorrectly deducted another company's $3,000 check from the company's account. What is the adjusted bank balance?",
    answers: [
        "$86,000",
        "$92,000",
        "$89,000",
        "$110,000"
    ],
    correctAnswer: 1,
    explanation:
        "Adjusted bank balance is $96,000 + $14,000 − $21,000 + $3,000 = $92,000. The bank error is added back because the company should not have been charged for another company's check."
},

{
    lessonId: 2,
    question:
        "At year-end, Accounts Receivable is $500,000. An aging analysis indicates that the required ending Allowance for Credit Losses is $28,000. Before adjustment, the allowance has a $4,000 debit balance. What credit loss expense should be recognized?",
    answers: [
        "$24,000",
        "$28,000",
        "$32,000",
        "$4,000"
    ],
    correctAnswer: 2,
    explanation:
        "The allowance must move from a $4,000 debit balance to a $28,000 credit balance. Therefore, the required adjustment and credit loss expense is $32,000."
},

{
    lessonId: 2,
    question:
        "Beginning Accounts Receivable was $210,000. Credit sales during the year were $900,000, cash collections were $840,000, and $15,000 of receivables were written off. What is ending gross Accounts Receivable?",
    answers: [
        "$255,000",
        "$270,000",
        "$285,000",
        "$225,000"
    ],
    correctAnswer: 0,
    explanation:
        "Ending Accounts Receivable = $210,000 + $900,000 − $840,000 − $15,000 = $255,000."
},

{
    lessonId: 3,
    question:
        "Inventory accounted for using FIFO has a cost of $140,000 and a net realizable value of $126,000. Under the applicable lower-of-cost-and-NRV guidance, at what amount should the inventory generally be reported?",
    answers: [
        "$140,000",
        "$133,000",
        "$126,000",
        "$14,000"
    ],
    correctAnswer: 2,
    explanation:
        "Inventory measured using FIFO is generally subject to the lower of cost and net realizable value. Because NRV of $126,000 is below cost of $140,000, the inventory is reported at $126,000."
},

{
    lessonId: 3,
    question:
        "Inventory measured using LIFO has a cost of $120,000. Replacement cost is $102,000, net realizable value is $110,000, and a normal profit margin is $12,000. Under the lower-of-cost-or-market approach applicable to LIFO inventory, what amount is generally used as market?",
    answers: [
        "$98,000",
        "$102,000",
        "$110,000",
        "$120,000"
    ],
    correctAnswer: 1,
    explanation:
        "Designated market is generally replacement cost constrained by a ceiling of NRV and a floor of NRV minus normal profit margin. The ceiling is $110,000 and the floor is $98,000. Replacement cost of $102,000 falls within that range, so market is $102,000."
},

{
    lessonId: 3,
    question:
        "Ending inventory for Year 1 is understated by $25,000, and the error is not corrected until after Year 2. Assuming no other errors, what is the effect on Year 1 net income and Year 2 net income?",
    answers: [
        "Year 1 overstated $25,000; Year 2 understated $25,000",
        "Both years understated $25,000",
        "Year 1 understated $25,000; Year 2 overstated $25,000",
        "Neither year's net income is affected"
    ],
    correctAnswer: 2,
    explanation:
        "Understated ending inventory overstates Year 1 cost of goods sold and understates Year 1 net income by $25,000. That understated ending inventory becomes understated beginning inventory in Year 2, causing Year 2 COGS to be understated and Year 2 net income to be overstated by $25,000."
},

{
    lessonId: 4,
    question:
        "A company purchases equipment for $300,000 and pays $12,000 freight, $18,000 installation, $5,000 employee training, and $4,000 for routine maintenance after the equipment is placed in service. What amount should generally be capitalized as the equipment's initial cost?",
    answers: [
        "$339,000",
        "$330,000",
        "$335,000",
        "$300,000"
    ],
    correctAnswer: 1,
    explanation:
        "The equipment's cost includes the $300,000 purchase price, $12,000 freight, and $18,000 installation necessary to prepare it for use, totaling $330,000. Employee training and subsequent routine maintenance are generally expensed."
},

{
    lessonId: 4,
    question:
        "A long-lived asset held and used has a carrying amount of $620,000. Expected undiscounted future cash flows are $570,000 and fair value is $510,000. What impairment loss should generally be recognized under U.S. GAAP?",
    answers: [
        "$50,000",
        "$60,000",
        "$110,000",
        "$0"
    ],
    correctAnswer: 2,
    explanation:
        "Because carrying amount of $620,000 exceeds undiscounted cash flows of $570,000, the asset is not recoverable. The impairment loss is measured as carrying amount minus fair value: $620,000 − $510,000 = $110,000."
},

{
    lessonId: 4,
    question:
        "When the recognition requirements for an asset retirement obligation are met, what is the general initial accounting effect?",
    answers: [
        "Recognize only an immediate operating expense",
        "Recognize a liability and generally capitalize a corresponding asset retirement cost",
        "Recognize only a reduction of retained earnings",
        "Make no entry until the asset is physically retired"
    ],
    correctAnswer: 1,
    explanation:
        "When the applicable recognition requirements are met, an asset retirement obligation is recognized as a liability and a corresponding asset retirement cost is generally capitalized as part of the related long-lived asset."
},

{
    lessonId: 5,
    question:
        "A company purchases a finite-lived license for $360,000. Its contractual life is 12 years, but renewal is uncertain and the company expects economic benefits for only 8 years. Assuming no residual value, what annual amortization should generally be recognized?",
    answers: [
        "$30,000",
        "$45,000",
        "$0",
        "$60,000"
    ],
    correctAnswer: 1,
    explanation:
        "A finite-lived intangible is amortized over its useful life. Based on an expected economic life of eight years, annual amortization is $360,000 ÷ 8 = $45,000."
},

{
    lessonId: 5,
    question:
        "A finite-lived intangible asset has a carrying amount of $250,000. An impairment indicator exists, but expected undiscounted future cash flows are $275,000. Fair value is $220,000. Under the U.S. GAAP held-and-used impairment model, what impairment loss should generally be recognized?",
    answers: [
        "$30,000",
        "$55,000",
        "$250,000",
        "$0"
    ],
    correctAnswer: 3,
    explanation:
        "The carrying amount of $250,000 does not exceed the $275,000 of expected undiscounted future cash flows, so the asset passes the recoverability test. No impairment loss is recognized even though fair value is below carrying amount."
},

{
    lessonId: 6,
    question:
        "At December 31, a company has a $600,000 short-term obligation due in February. Before the financial statements are issued, the company completes a qualifying long-term refinancing of the entire obligation and had intended to refinance it on a long-term basis. Assuming the applicable U.S. GAAP requirements are satisfied, how should the obligation generally be classified?",
    answers: [
        "Entirely current",
        "Entirely long-term",
        "Half current and half long-term",
        "As stockholders' equity"
    ],
    correctAnswer: 1,
    explanation:
        "A short-term obligation may qualify for long-term classification when the entity intends to refinance it on a long-term basis and demonstrates the ability to do so under the applicable U.S. GAAP requirements, including through a qualifying completed refinancing before the financial statements are issued."
},

{
    lessonId: 6,
    question:
        "At year-end, a company has accounts payable of $140,000, accrued wages of $35,000, unearned revenue expected to be earned next year of $50,000, and a $90,000 principal payment on long-term debt due next year. Assuming no classification exceptions apply, what total current liabilities arise from these items?",
    answers: [
        "$225,000",
        "$275,000",
        "$315,000",
        "$365,000"
    ],
    correctAnswer: 2,
    explanation:
        "Total current liabilities are $140,000 + $35,000 + $50,000 + $90,000 = $315,000."
},

{
    lessonId: 7,
    question:
        "A bond has a beginning carrying amount of $760,000, a face value of $800,000, a stated annual rate of 5%, and an effective annual rate of 7%. Interest is paid annually. What is the bond's ending carrying amount after one year?",
    answers: [
        "$773,200",
        "$760,000",
        "$746,800",
        "$800,000"
    ],
    correctAnswer: 0,
    explanation:
        "Cash interest is $800,000 × 5% = $40,000. Interest expense is $760,000 × 7% = $53,200. Discount amortization is $13,200, so ending carrying amount is $760,000 + $13,200 = $773,200."
},

{
    lessonId: 7,
    question:
        "A bond issued at a premium has a beginning carrying amount of $1,060,000, face value of $1,000,000, stated annual rate of 8%, and effective annual rate of 6%. Interest is paid annually. What is the ending carrying amount after one year?",
    answers: [
        "$1,080,000",
        "$1,043,600",
        "$1,063,600",
        "$983,600"
    ],
    correctAnswer: 1,
    explanation:
        "Cash interest is $1,000,000 × 8% = $80,000. Interest expense is $1,060,000 × 6% = $63,600. Premium amortization is $16,400, reducing carrying amount to $1,043,600."
},

{
    lessonId: 8,
    question:
        "A company has a firm, noncancelable commitment to purchase inventory for $250,000. Before delivery, the applicable measurement amount of the inventory falls to $210,000, and the decline results in a recognized loss under U.S. GAAP. What loss should the company recognize?",
    answers: [
        "$0",
        "$40,000",
        "$210,000",
        "$250,000"
    ],
    correctAnswer: 1,
    explanation:
        "The expected loss is the $40,000 difference between the $250,000 contract price and the $210,000 applicable measurement amount, assuming the recognition requirements for the loss on the purchase commitment are satisfied."
},

{
    lessonId: 9,
    question:
        "An equity security within the general equity-investment guidance has a readily determinable fair value. Its carrying amount before year-end adjustment is $180,000 and its fair value is $205,000. Where is the $25,000 unrealized gain generally recognized?",
    answers: [
        "Other comprehensive income",
        "Additional paid-in capital",
        "Net income",
        "Directly in retained earnings without affecting income"
    ],
    correctAnswer: 2,
    explanation:
        "Equity securities within the general U.S. GAAP equity-investment guidance and with readily determinable fair values are generally measured at fair value, with changes in fair value recognized in net income."
},

{
    lessonId: 9,
    question:
        "An investor owns 30% of an investee and appropriately applies the equity method. The investee reports $200,000 of net income and pays total dividends of $50,000. What is the net increase in the investor's investment account from these two events?",
    answers: [
        "$45,000",
        "$60,000",
        "$15,000",
        "$75,000"
    ],
    correctAnswer: 0,
    explanation:
        "The investor recognizes 30% of $200,000, or $60,000, as an increase in the investment account. Dividends reduce the investment by 30% of $50,000, or $15,000. The net increase is $45,000."
},

{
    lessonId: 10,
    question:
        "A corporation has 20,000 shares of $100 par, 6% cumulative preferred stock outstanding. No dividends were declared last year. If the corporation declares $300,000 of dividends this year, how much is available to common shareholders after satisfying the current-year preferred dividend and dividends in arrears?",
    answers: [
        "$60,000",
        "$120,000",
        "$180,000",
        "$300,000"
    ],
    correctAnswer: 0,
    explanation:
        "Annual preferred dividends are 20,000 × $100 × 6% = $120,000. Because the preferred stock is cumulative and one prior year is in arrears, preferred shareholders receive $240,000 before common shareholders. Of the $300,000 declared, $60,000 remains for common shareholders."
}

];

const farModule3Questions = [

    // =========================================================
    // MODULE 3 — SELECT TRANSACTIONS
    // QUESTIONS 1–10
    // =========================================================


    // QUESTION 1 — ACCOUNTING CHANGES
    {
        id: 1,
        lesson: 1,
        topic: "Accounting Changes & Error Corrections",

        question:
            "A company revises the estimated useful life of equipment based on new information. How should the change generally be accounted for?",

        answers: [
            "Retrospectively",
            "Prospectively",
            "As a prior-period error",
            "As an adjustment to accumulated OCI"
        ],

        correctAnswer: 1,

        explanation:
            "A revision resulting from new information is a change in accounting estimate and is generally accounted for prospectively."
    },


    // QUESTION 2 — CONTINGENCIES
    {
        id: 2,
        lesson: 2,
        topic: "Contingencies & Commitments",

        question:
            "A loss contingency is probable and reasonably estimable at $75,000. What should the company generally do?",

        answers: [
            "Disclose the contingency only",
            "Recognize a $75,000 loss and liability",
            "Take no action until the loss is paid",
            "Recognize the amount in OCI"
        ],

        correctAnswer: 1,

        explanation:
            "A loss contingency that is both probable and reasonably estimable is generally accrued."
    },


    // QUESTION 3 — REVENUE RECOGNITION
    {
        id: 3,
        lesson: 3,
        topic: "Revenue Recognition",

        question:
            "A customer pays $24,000 in advance for 12 months of services that will be provided evenly. How much revenue should generally be recognized after three months of service?",

        answers: [
            "$2,000",
            "$6,000",
            "$18,000",
            "$24,000"
        ],

        correctAnswer: 1,

        explanation:
            "Monthly revenue is $24,000 ÷ 12 = $2,000. After three months, $2,000 × 3 = $6,000 of revenue has been earned."
    },


    // QUESTION 4 — INCOME TAXES
    {
        id: 4,
        lesson: 4,
        topic: "Accounting for Income Taxes",

        question:
            "A $60,000 temporary difference will result in future taxable amounts. The enacted tax rate is 25%. What deferred tax amount generally results?",

        answers: [
            "$15,000 deferred tax asset",
            "$15,000 deferred tax liability",
            "$60,000 deferred tax liability",
            "$0"
        ],

        correctAnswer: 1,

        explanation:
            "Future taxable amounts create a deferred tax liability. $60,000 × 25% = $15,000."
    },


    // QUESTION 5 — FAIR VALUE
    {
        id: 5,
        lesson: 5,
        topic: "Fair Value Measurements",

        question:
            "Which input is classified as Level 1 in the fair value hierarchy?",

        answers: [
            "Management's unobservable cash-flow assumptions",
            "An observable interest-rate curve",
            "An unadjusted quoted price for an identical asset in an active market",
            "A quoted price for a similar asset in an inactive market"
        ],

        correctAnswer: 2,

        explanation:
            "Level 1 inputs are unadjusted quoted prices in active markets for identical assets or liabilities that the entity can access."
    },


    // QUESTION 6 — LEASES
    {
        id: 6,
        lesson: 6,
        topic: "Lessee Accounting",

        question:
            "A lessee initially measures its lease liability at $200,000. It made a $10,000 prepayment and received a $6,000 lease incentive. There are no initial direct costs. What is the initial ROU asset?",

        answers: [
            "$184,000",
            "$196,000",
            "$204,000",
            "$216,000"
        ],

        correctAnswer: 2,

        explanation:
            "Initial ROU asset = $200,000 lease liability + $10,000 prepayment − $6,000 incentive = $204,000."
    },


    // QUESTION 7 — SUBSEQUENT EVENTS
    {
        id: 7,
        lesson: 7,
        topic: "Subsequent Events",

        question:
            "A company's warehouse is destroyed by an unexpected fire after year-end. No related condition existed at the balance sheet date. The loss is material. What is the general treatment?",

        answers: [
            "Adjust the year-end financial statements for the loss",
            "Recognize the loss as a prior-period error",
            "Do not adjust the year-end amounts, but disclose the material event as appropriate",
            "Recognize the loss in accumulated OCI"
        ],

        correctAnswer: 2,

        explanation:
            "The condition arose after year-end, making this a nonrecognized subsequent event. The year-end amounts generally are not adjusted, although a material event may require disclosure."
    },


    // QUESTION 8 — ADVANCED REVENUE
    {
        id: 8,
        lesson: 8,
        topic: "Advanced Revenue Recognition",

        question:
            "An entity acts as an agent in a transaction. It collects $800 from the customer, pays $700 to the principal, and retains a $100 commission. How much revenue should the agent generally recognize?",

        answers: [
            "$100",
            "$700",
            "$800",
            "$1,500"
        ],

        correctAnswer: 0,

        explanation:
            "An agent generally recognizes its fee or commission rather than the gross amount collected. Therefore, revenue is $100."
    },


    // QUESTION 9 — VALUATION ALLOWANCE
    {
        id: 9,
        lesson: 9,
        topic: "Deferred Taxes & Valuation Allowances",

        question:
            "A company has a gross deferred tax asset of $90,000 and determines that a $25,000 valuation allowance is required. What net deferred tax asset should be reported?",

        answers: [
            "$25,000",
            "$65,000",
            "$90,000",
            "$115,000"
        ],

        correctAnswer: 1,

        explanation:
            "Net DTA = $90,000 gross deferred tax asset − $25,000 valuation allowance = $65,000."
    },


    // QUESTION 10 — INTEGRATED REVIEW
    {
        id: 10,
        lesson: 10,
        topic: "Integrated Select Transactions Review",

        question:
            "Which combination of accounting treatments is generally correct?",

        answers: [
            "Change in estimate — retrospective; future taxable amount — DTA",
            "Probable estimable loss — disclose only; Level 1 input — unobservable",
            "Change in estimate — prospective; future taxable amount — DTL",
            "Agent arrangement — gross revenue; subsequent new condition — adjust year-end statements"
        ],

        correctAnswer: 2,

        explanation:
            "Changes in estimates are generally prospective, and temporary differences producing future taxable amounts generally create deferred tax liabilities."
    },

        // =========================================================
    // QUESTIONS 11–13 — LESSON 1
    // ACCOUNTING CHANGES & ERROR CORRECTIONS
    // =========================================================

    {
        id: 11,
        lesson: 1,
        topic: "Accounting Changes & Error Corrections",

        question:
            "A company changes its estimate of warranty obligations because newly available claims data indicates that future warranty costs will be higher. How should the change generally be accounted for?",

        answers: [
            "Prospectively",
            "Retrospectively",
            "As a prior-period error",
            "Through other comprehensive income"
        ],

        correctAnswer: 0,

        explanation:
            "A revision caused by new information is a change in accounting estimate and is generally accounted for prospectively."
    },


    {
        id: 12,
        lesson: 1,
        topic: "Accounting Changes & Error Corrections",

        question:
            "A company discovers that equipment purchased last year was incorrectly recorded as an expense even though the information necessary to capitalize it was available. How should this generally be classified?",

        answers: [
            "A change in estimate",
            "A change in reporting entity",
            "A change in accounting principle",
            "An accounting error"
        ],

        correctAnswer: 3,

        explanation:
            "Incorrectly expensing an asset when the relevant information was already available is an accounting error rather than a change in estimate."
    },


    {
        id: 13,
        lesson: 1,
        topic: "Accounting Changes & Error Corrections",

        question:
            "Which accounting change is generally applied retrospectively when practicable?",

        answers: [
            "A revision of an asset's useful life",
            "A change in expected warranty claims",
            "A change from one acceptable accounting principle to another",
            "A revision of estimated credit losses"
        ],

        correctAnswer: 2,

        explanation:
            "A change in accounting principle is generally applied retrospectively when required and practicable."
    },


    // =========================================================
    // QUESTIONS 14–16 — LESSON 2
    // CONTINGENCIES & COMMITMENTS
    // =========================================================

    {
        id: 14,
        lesson: 2,
        topic: "Contingencies & Commitments",

        question:
            "A lawsuit loss is reasonably possible but not probable. The amount can be reasonably estimated. What is the general financial reporting treatment?",

        answers: [
            "Accrue the estimated loss",
            "Recognize the loss in OCI",
            "Record a deferred liability",
            "Do not accrue the loss, but disclose the contingency as appropriate"
        ],

        correctAnswer: 3,

        explanation:
            "A reasonably possible loss is generally disclosed rather than accrued."
    },


    {
        id: 15,
        lesson: 2,
        topic: "Contingencies & Commitments",

        question:
            "A probable lawsuit loss is estimated to range from $40,000 to $70,000. No amount within the range is a better estimate than another. What amount is generally accrued?",

        answers: [
            "$40,000",
            "$55,000",
            "$70,000",
            "$0"
        ],

        correctAnswer: 0,

        explanation:
            "When a loss is probable and no amount within the reasonably estimable range is a better estimate, the minimum amount in the range is generally accrued."
    },


    {
        id: 16,
        lesson: 2,
        topic: "Contingencies & Commitments",

        question:
            "Which statement about gain contingencies is generally correct?",

        answers: [
            "They are recognized whenever reasonably possible",
            "They generally are not recognized before realization",
            "They are always recognized when probable",
            "They are recorded directly in retained earnings"
        ],

        correctAnswer: 1,

        explanation:
            "Gain contingencies generally are not recognized before realization because doing so could result in premature recognition of income."
    },


    // =========================================================
    // QUESTIONS 17–19 — LESSON 3
    // REVENUE RECOGNITION
    // =========================================================

    {
        id: 17,
        lesson: 3,
        topic: "Revenue Recognition",

        question:
            "A company receives $36,000 on October 1 for twelve months of services to be provided evenly beginning immediately. How much revenue should generally be recognized by December 31?",

        answers: [
            "$9,000",
            "$12,000",
            "$27,000",
            "$36,000"
        ],

        correctAnswer: 0,

        explanation:
            "Monthly revenue is $36,000 ÷ 12 = $3,000. Three months of service have been provided, so revenue recognized is $9,000."
    },


    {
        id: 18,
        lesson: 3,
        topic: "Revenue Recognition",

        question:
            "In the revenue recognition model, what generally occurs immediately after identifying the performance obligations in a contract?",

        answers: [
            "Recognize revenue",
            "Allocate the transaction price",
            "Record cash collections",
            "Determine the transaction price"
        ],

        correctAnswer: 3,

        explanation:
            "The five-step model is: identify the contract, identify performance obligations, determine the transaction price, allocate the price, and recognize revenue."
    },


    {
        id: 19,
        lesson: 3,
        topic: "Revenue Recognition",

        question:
            "A contract has two performance obligations with standalone selling prices of $600 and $400. The total transaction price is $900. How much should generally be allocated to the first performance obligation?",

        answers: [
            "$360",
            "$450",
            "$540",
            "$600"
        ],

        correctAnswer: 2,

        explanation:
            "The first obligation represents 60% of total standalone selling prices. $900 × 60% = $540."
    },


    // =========================================================
    // QUESTIONS 20–22 — LESSON 4
    // ACCOUNTING FOR INCOME TAXES
    // =========================================================

    {
        id: 20,
        lesson: 4,
        topic: "Accounting for Income Taxes",

        question:
            "A temporary difference of $80,000 will produce future deductible amounts. The enacted tax rate is 30%. What deferred tax amount generally results?",

        answers: [
            "$80,000 deferred tax asset",
            "$24,000 deferred tax liability",
            "$80,000 deferred tax liability",
            "$24,000 deferred tax asset"
        ],

        correctAnswer: 3,

        explanation:
            "Future deductible amounts generally create a deferred tax asset. $80,000 × 30% = $24,000."
    },


    {
        id: 21,
        lesson: 4,
        topic: "Accounting for Income Taxes",

        question:
            "Which type of difference generally does NOT create a deferred tax asset or deferred tax liability?",

        answers: [
            "Permanent difference",
            "Taxable temporary difference",
            "Deductible temporary difference",
            "Depreciation timing difference"
        ],

        correctAnswer: 0,

        explanation:
            "Permanent differences do not reverse in future periods and therefore generally do not create deferred tax balances."
    },


    {
        id: 22,
        lesson: 4,
        topic: "Accounting for Income Taxes",

        question:
            "A company has taxable income of $500,000 and an enacted current tax rate of 24%. Ignoring credits and other adjustments, what is current income tax payable?",

        answers: [
            "$24,000",
            "$120,000",
            "$476,000",
            "$500,000"
        ],

        correctAnswer: 1,

        explanation:
            "$500,000 × 24% = $120,000 of current income tax payable."
    },


    // =========================================================
    // QUESTIONS 23–25 — LESSON 5
    // FAIR VALUE MEASUREMENTS
    // =========================================================

    {
        id: 23,
        lesson: 5,
        topic: "Fair Value Measurements",

        question:
            "A valuation relies primarily on significant assumptions developed using information that is not observable in the marketplace. These inputs are generally classified as:",

        answers: [
            "Level 1",
            "Level 2",
            "Level 3",
            "Outside the fair value hierarchy"
        ],

        correctAnswer: 2,

        explanation:
            "Level 3 inputs are unobservable inputs used when relevant observable market information is not available."
    },


    {
        id: 24,
        lesson: 5,
        topic: "Fair Value Measurements",

        question:
            "Fair value for an asset is generally based on which concept?",

        answers: [
            "The asset's original purchase price",
            "Management's intended selling price",
            "The cost to reproduce the asset",
            "The price that would be received to sell the asset in an orderly transaction"
        ],

        correctAnswer: 3,

        explanation:
            "Fair value is generally an exit-price measurement based on the price that would be received to sell an asset."
    },


    {
        id: 25,
        lesson: 5,
        topic: "Fair Value Measurements",

        question:
            "What is generally the principal market for an asset?",

        answers: [
            "The market with the greatest volume and level of activity for the asset",
            "The market with the lowest transaction costs",
            "The market selected by management for convenience",
            "Any market where the asset could theoretically be sold"
        ],

        correctAnswer: 0,

        explanation:
            "The principal market is generally the market with the greatest volume and level of activity for the asset or liability."
    },


    // =========================================================
    // QUESTIONS 26–28 — LESSON 6
    // LESSEE ACCOUNTING
    // =========================================================

    {
        id: 26,
        lesson: 6,
        topic: "Lessee Accounting",

        question:
            "At commencement, a lessee generally measures its lease liability based primarily on:",

        answers: [
            "The fair value of the underlying asset",
            "The present value of required lease payments",
            "The total undiscounted lease payments",
            "The carrying value reported by the lessor"
        ],

        correctAnswer: 1,

        explanation:
            "The lease liability is initially measured using the present value of lease payments that have not yet been paid."
    },


    {
        id: 27,
        lesson: 6,
        topic: "Lessee Accounting",

        question:
            "Which characteristic most strongly indicates finance lease classification for a lessee?",

        answers: [
            "The lease requires monthly payments",
            "The underlying asset is insured",
            "The lease term is shorter than one year",
            "Ownership of the underlying asset transfers to the lessee by the end of the lease term"
        ],

        correctAnswer: 3,

        explanation:
            "Transfer of ownership to the lessee by the end of the lease term is one of the finance lease classification criteria."
    },


    {
        id: 28,
        lesson: 6,
        topic: "Lessee Accounting",

        question:
            "A lease liability is $150,000 at commencement. The lessee made a $7,000 prepayment and received a $3,000 lease incentive. There are no initial direct costs. What is the initial ROU asset?",

        answers: [
            "$154,000",
            "$140,000",
            "$146,000",
            "$160,000"
        ],

        correctAnswer: 0,

        explanation:
            "Initial ROU asset = $150,000 + $7,000 − $3,000 = $154,000."
    },


    // =========================================================
    // QUESTIONS 29–31 — LESSON 7
    // SUBSEQUENT EVENTS
    // =========================================================

    {
        id: 29,
        lesson: 7,
        topic: "Subsequent Events",

        question:
            "After year-end but before the financial statements are issued, a customer files bankruptcy. Evidence confirms that the customer's serious financial difficulties existed before year-end. What is the general treatment?",

        answers: [
            "No adjustment or disclosure",
            "Disclosure only",
            "Adjust the year-end financial statements",
            "Recognize the event in the following year only"
        ],

        correctAnswer: 2,

        explanation:
            "The bankruptcy provides additional evidence about a condition that existed at year-end, so the financial statements are generally adjusted."
    },


    {
        id: 30,
        lesson: 7,
        topic: "Subsequent Events",

        question:
            "A major acquisition is negotiated and completed after year-end, and no related condition existed at the balance sheet date. If material, what is the general treatment?",

        answers: [
            "Adjust all prior-year balances",
            "Record the acquisition as a prior-period correction",
            "Ignore the acquisition entirely",
            "Do not adjust year-end amounts, but disclose the event as appropriate"
        ],

        correctAnswer: 3,

        explanation:
            "A material event arising from a new condition after year-end is generally nonrecognized but may require disclosure."
    },


    {
        id: 31,
        lesson: 7,
        topic: "Subsequent Events",

        question:
            "Which subsequent event would generally NOT require adjustment of the year-end financial statements?",

        answers: [
            "Settlement after year-end of litigation confirming an obligation that existed at year-end",
            "Bankruptcy confirming a customer's financial difficulty that existed before year-end",
            "New information confirming that inventory was impaired at year-end",
            "A destructive fire caused entirely by events occurring after year-end"
        ],

        correctAnswer: 3,

        explanation:
            "A fire caused by a new condition arising entirely after year-end is generally a nonrecognized subsequent event."
    },


    // =========================================================
    // QUESTIONS 32–34 — LESSON 8
    // ADVANCED REVENUE RECOGNITION
    // =========================================================

    {
        id: 32,
        lesson: 8,
        topic: "Advanced Revenue Recognition",

        question:
            "An entity is an agent in a transaction and collects $2,500 from a customer. It forwards $2,200 to the principal and retains $300. How much revenue should the agent generally report?",

        answers: [
            "$300",
            "$2,200",
            "$2,500",
            "$4,700"
        ],

        correctAnswer: 0,

        explanation:
            "An agent generally recognizes its fee or commission. The commission is $2,500 − $2,200 = $300."
    },


    {
        id: 33,
        lesson: 8,
        topic: "Advanced Revenue Recognition",

        question:
            "A contract modification adds additional distinct goods at prices that reflect their standalone selling prices. How is the modification generally accounted for?",

        answers: [
            "As an accounting error",
            "As a reduction of the original transaction price",
            "As a change in accounting estimate",
            "As a separate contract"
        ],

        correctAnswer: 3,

        explanation:
            "A modification that adds distinct promised goods or services at appropriate standalone selling prices is generally accounted for as a separate contract."
    },


    {
        id: 34,
        lesson: 8,
        topic: "Advanced Revenue Recognition",

        question:
            "Which warranty is most likely accounted for as a separate performance obligation?",

        answers: [
            "A basic assurance that a product complies with agreed specifications",
            "An optional extended service warranty purchased separately by the customer",
            "A legally required product defect warranty",
            "A standard assurance warranty included with every product"
        ],

        correctAnswer: 1,

        explanation:
            "A separately purchased service-type warranty generally provides an additional service and is accounted for as a separate performance obligation."
    },


    // =========================================================
    // QUESTIONS 35–37 — LESSON 9
    // DEFERRED TAXES & VALUATION ALLOWANCES
    // =========================================================

    {
        id: 35,
        lesson: 9,
        topic: "Deferred Taxes & Valuation Allowances",

        question:
            "A company has a gross deferred tax asset of $150,000 and a valuation allowance of $40,000. What net deferred tax asset should generally be reported?",

        answers: [
            "$110,000",
            "$40,000",
            "$150,000",
            "$190,000"
        ],

        correctAnswer: 0,

        explanation:
            "Net DTA = $150,000 gross DTA − $40,000 valuation allowance = $110,000."
    },


    {
        id: 36,
        lesson: 9,
        topic: "Deferred Taxes & Valuation Allowances",

        question:
            "When is a valuation allowance generally recognized against a deferred tax asset?",

        answers: [
            "Whenever a deferred tax liability also exists",
            "Whenever tax rates increase",
            "When it is more likely than not that some or all of the deferred tax asset will not be realized",
            "Whenever the company reports net income"
        ],

        correctAnswer: 2,

        explanation:
            "A valuation allowance is recognized when available evidence indicates that it is more likely than not that some portion or all of the DTA will not be realized."
    },


    {
        id: 37,
        lesson: 9,
        topic: "Deferred Taxes & Valuation Allowances",

        question:
            "A company has a $300,000 taxable temporary difference. The enacted tax rate expected when the difference reverses changes from 20% to 25%. What is the newly measured deferred tax liability?",

        answers: [
            "$15,000",
            "$60,000",
            "$300,000",
            "$75,000"
        ],

        correctAnswer: 3,

        explanation:
            "Deferred taxes are measured using the enacted tax rate expected when reversal occurs. $300,000 × 25% = $75,000."
    },


    // =========================================================
    // QUESTIONS 38–40 — LESSON 10
    // INTEGRATED SELECT TRANSACTIONS REVIEW
    // =========================================================

    {
        id: 38,
        lesson: 10,
        topic: "Integrated Select Transactions Review",

        question:
            "Which combination is generally correct?",

        answers: [
            "Future deductible difference → DTL; Level 3 → active-market quoted price",
            "Accounting estimate change → retrospective; agent → gross revenue",
            "Future taxable difference → DTL; accounting estimate change → prospective",
            "Remote contingency → accrue; Level 1 → unobservable input"
        ],

        correctAnswer: 2,

        explanation:
            "Future taxable amounts generally create deferred tax liabilities, and changes in accounting estimates are generally accounted for prospectively."
    },


    {
        id: 39,
        lesson: 10,
        topic: "Integrated Select Transactions Review",

        question:
            "Which transaction would generally result in recognizing a liability rather than immediate revenue?",

        answers: [
            "Completion of a service already performed for a customer",
            "Cash received in advance for services to be provided next year",
            "Sale of inventory for cash after control transfers",
            "Recognition of a trading security unrealized gain"
        ],

        correctAnswer: 1,

        explanation:
            "Advance consideration received before performance generally creates a contract liability until the related performance obligation is satisfied."
    },


    {
        id: 40,
        lesson: 10,
        topic: "Integrated Select Transactions Review",

        question:
            "Which statement best describes a recognized subsequent event?",

        answers: [
            "It provides additional evidence about a condition that existed at the balance sheet date",
            "It always occurs before the balance sheet date",
            "It relates only to events involving cash",
            "It never affects reported financial statement amounts"
        ],

        correctAnswer: 0,

        explanation:
            "A recognized subsequent event provides additional evidence about a condition existing at the balance sheet date and generally requires adjustment."
    },

    // =========================================================
// QUESTIONS 41–60 — ADVANCED APPLICATION & ANALYSIS
// MODULE 3 — SELECT TRANSACTIONS
// =========================================================


// QUESTION 41 — CHANGE IN ESTIMATE EFFECTED BY PRINCIPLE
{
    id: 41,
    lesson: 1,
    topic: "Accounting Changes & Error Corrections",

    question:
        "A company changes its depreciation method because new information indicates that the new method better reflects the pattern in which the asset's economic benefits are consumed. How should the change generally be accounted for?",

    answers: [
        "Retrospectively by restating all prior periods",
        "Prospectively as a change in estimate effected by a change in accounting principle",
        "As a prior-period error",
        "Directly as an adjustment to retained earnings"
    ],

    correctAnswer: 1,

    explanation:
        "A change in depreciation method is generally treated as a change in accounting estimate effected by a change in accounting principle and is accounted for prospectively."
},


// QUESTION 42 — ERROR CORRECTION
{
    id: 42,
    lesson: 1,
    topic: "Accounting Changes & Error Corrections",

    question:
        "In 2026, a company discovers that a $70,000 expenditure made in 2025 was incorrectly expensed even though it should have been capitalized. The information necessary to apply GAAP correctly was available in 2025. Assuming the error is material, how should the company generally treat the error?",

    answers: [
        "Treat it as a 2026 change in estimate",
        "Recognize the entire correction in 2026 operating income",
        "Correct the affected prior-period information rather than treating it as a current-period operating item",
        "Account for it prospectively because the asset relates to future periods"
    ],

    correctAnswer: 2,

    explanation:
        "The incorrect accounting resulted from information that was available when the original financial statements were prepared, so it is an accounting error. A material prior-period error is generally corrected through restatement of affected prior-period information, with opening balances adjusted when applicable."
},


// QUESTION 43 — CONTINGENCY RANGE
{
    id: 43,
    lesson: 2,
    topic: "Contingencies & Commitments",

    question:
        "At year-end, a lawsuit is probable. Management estimates the loss will be between $180,000 and $260,000. Management believes $220,000 is a better estimate than any other amount within the range. What amount should generally be accrued?",

    answers: [
        "$180,000",
        "$220,000",
        "$260,000",
        "$0, with disclosure only"
    ],

    correctAnswer: 1,

    explanation:
        "When one amount within a reasonably estimable range is a better estimate than the others, that amount is generally accrued. Therefore, the company accrues $220,000."
},


// QUESTION 44 — PURCHASE COMMITMENT
{
    id: 44,
    lesson: 2,
    topic: "Contingencies & Commitments",

    question:
        "A company has a firm, noncancelable commitment to purchase inventory for $300,000. Before delivery, the applicable measurement amount of the inventory declines to $245,000, and the requirements for recognizing a loss on the commitment are met. What loss should generally be recognized?",

    answers: [
        "$0 because the inventory has not yet been delivered",
        "$245,000",
        "$55,000",
        "$300,000"
    ],

    correctAnswer: 2,

    explanation:
        "When the requirements for recognizing a loss on a firm purchase commitment are met, the expected loss is generally recognized before delivery. The loss is $300,000 − $245,000 = $55,000."
},


// QUESTION 45 — OVER-TIME REVENUE
{
    id: 45,
    lesson: 3,
    topic: "Revenue Recognition",

    question:
        "Which situation most clearly supports recognizing revenue over time under ASC 606?",

    answers: [
        "The customer receives control only when a completed standard product is delivered",
        "The seller manufactures standard inventory that can readily be sold to another customer",
        "The customer simultaneously receives and consumes the benefits of the entity's performance as the entity performs",
        "The customer pays the entire contract price before production begins"
    ],

    correctAnswer: 2,

    explanation:
        "A performance obligation is satisfied over time when, among other qualifying criteria, the customer simultaneously receives and consumes the benefits provided by the entity's performance as the entity performs."
},


// QUESTION 46 — CONTRACT ASSET VS RECEIVABLE
{
    id: 46,
    lesson: 3,
    topic: "Revenue Recognition",

    question:
        "An entity has transferred services to a customer and recognized revenue, but its right to consideration depends on completing an additional performance milestone rather than merely waiting for payment. What should the entity generally recognize for the conditional right to consideration?",

    answers: [
        "A contract asset",
        "Accounts receivable",
        "A contract liability",
        "Deferred tax asset"
    ],

    correctAnswer: 0,

    explanation:
        "A contract asset may arise when an entity has transferred goods or services but its right to consideration remains conditional on something other than the passage of time."
},


// QUESTION 47 — REVENUE ALLOCATION
{
    id: 47,
    lesson: 3,
    topic: "Revenue Recognition",

    question:
        "A company sells Equipment A and Service B for a combined transaction price of $1,080. Their standalone selling prices are $900 and $300, respectively. How much of the transaction price should generally be allocated to Service B?",

    answers: [
        "$180",
        "$270",
        "$300",
        "$360"
    ],

    correctAnswer: 1,

    explanation:
        "Total standalone selling prices are $1,200. Service B represents 25% of the total ($300 ÷ $1,200). Therefore, $1,080 × 25% = $270 is allocated to Service B."
},


// QUESTION 48 — CURRENT + DEFERRED TAX
{
    id: 48,
    lesson: 4,
    topic: "Accounting for Income Taxes",

    question:
        "A company has taxable income of $600,000 and a 25% enacted current tax rate. During the year, its net deferred tax liability increases by $20,000, with the change recognized in income. Ignoring other tax effects, what total income tax expense should generally be recognized?",

    answers: [
        "$130,000",
        "$150,000",
        "$170,000",
        "$620,000"
    ],

    correctAnswer: 2,

    explanation:
        "Current tax expense is $600,000 × 25% = $150,000. The $20,000 increase in the net deferred tax liability produces deferred tax expense, so total income tax expense is $170,000."
},


// QUESTION 49 — DTA + VALUATION ALLOWANCE
{
    id: 49,
    lesson: 4,
    topic: "Accounting for Income Taxes",

    question:
        "A deductible temporary difference of $240,000 creates a gross deferred tax asset at an enacted tax rate of 25%. Based on available evidence, a $18,000 valuation allowance is required. What net deferred tax asset should generally be reported?",

    answers: [
        "$42,000",
        "$60,000",
        "$78,000",
        "$18,000"
    ],

    correctAnswer: 0,

    explanation:
        "The gross DTA is $240,000 × 25% = $60,000. After subtracting the $18,000 valuation allowance, the net DTA is $42,000."
},


// QUESTION 50 — FAIR VALUE TRANSACTION COSTS
{
    id: 50,
    lesson: 5,
    topic: "Fair Value Measurements",

    question:
        "An asset would sell for $500,000 in its principal market. Selling the asset would require $12,000 of transaction costs. Assume there are no transportation costs. What is the asset's fair value?",

    answers: [
        "$488,000",
        "$500,000",
        "$512,000",
        "$12,000"
    ],

    correctAnswer: 1,

    explanation:
        "Transaction costs are generally not deducted from the fair value measurement because they are not an attribute of the asset or liability. Therefore, fair value remains $500,000."
},


// QUESTION 51 — TRANSPORTATION COST
{
    id: 51,
    lesson: 5,
    topic: "Fair Value Measurements",

    question:
        "A commodity located at the entity's facility could be sold for $210,000 in the principal market. Because location is an attribute of the asset, $8,000 of transportation costs would be required to transport it from its current location to that market. Ignoring transaction costs, what fair value should generally be measured?",

    answers: [
        "$202,000",
        "$210,000",
        "$218,000",
        "$8,000"
    ],

    correctAnswer: 0,

    explanation:
        "When location is an attribute of the asset, the market price is adjusted for transportation costs necessary to move the asset from its current location to the principal market. Fair value is $210,000 − $8,000 = $202,000."
},


// QUESTION 52 — PRINCIPAL VS MOST ADVANTAGEOUS MARKET
{
    id: 52,
    lesson: 5,
    topic: "Fair Value Measurements",

    question:
        "An entity can access two markets for an asset. Market A has the greatest volume and level of activity. Market B would produce a higher net amount after transaction costs. Which market should generally be used to measure fair value?",

    answers: [
        "Market B because it produces the highest net proceeds",
        "Whichever market management prefers",
        "Market A because it is the principal market",
        "An average of Markets A and B"
    ],

    correctAnswer: 2,

    explanation:
        "When a principal market exists, fair value is generally measured using that market. The most advantageous market is considered only when there is no principal market."
},


// QUESTION 53 — FINANCE LEASE CLASSIFICATION
{
    id: 53,
    lesson: 6,
    topic: "Lessee Accounting",

    question:
        "A lease does not transfer ownership and contains no purchase option. However, the underlying asset is highly specialized and is expected to have no alternative use to the lessor at the end of the lease term. How should the lessee generally classify the lease?",

    answers: [
        "Operating lease because ownership does not transfer",
        "Finance lease because a finance lease classification criterion is met",
        "Short-term lease",
        "The lease cannot be recognized"
    ],

    correctAnswer: 1,

    explanation:
        "A lease is classified as a finance lease when one or more applicable classification criteria are met. A highly specialized underlying asset expected to have no alternative use to the lessor is one of those criteria."
},


// QUESTION 54 — OPERATING LEASE EXPENSE
{
    id: 54,
    lesson: 6,
    topic: "Lessee Accounting",

    question:
        "Which statement best describes the subsequent expense pattern for an operating lease by a lessee under ASC 842?",

    answers: [
        "The lessee generally recognizes no expense after commencement",
        "The lessee always reports separate interest and amortization expenses",
        "The lessee generally recognizes a single lease expense, typically on a straight-line basis over the lease term",
        "The entire remaining lease liability is expensed immediately"
    ],

    correctAnswer: 2,

    explanation:
        "For an operating lease, a lessee generally recognizes a single lease expense, typically on a straight-line basis over the lease term."
},


// QUESTION 55 — SHORT-TERM LEASE
{
    id: 55,
    lesson: 6,
    topic: "Lessee Accounting",

    question:
        "A lessee enters into a 10-month lease. The agreement contains a purchase option that the lessee is reasonably certain to exercise. Does the lease qualify for the short-term lease recognition exemption solely because its stated term is less than 12 months?",

    answers: [
        "Yes, because every lease of 12 months or less qualifies",
        "Yes, if the payments are made monthly",
        "No, because a qualifying short-term lease cannot contain a purchase option the lessee is reasonably certain to exercise",
        "No, because all leases must have terms longer than one year"
    ],

    correctAnswer: 2,

    explanation:
        "A short-term lease generally has a lease term of 12 months or less at commencement and does not include a purchase option that the lessee is reasonably certain to exercise."
},


// QUESTION 56 — VARIABLE CONSIDERATION
{
    id: 56,
    lesson: 8,
    topic: "Advanced Revenue Recognition",

    question:
        "A contract provides a fixed price of $400,000 plus a $60,000 performance bonus. The entity concludes that including the bonus would not satisfy the variable consideration constraint because a significant revenue reversal is probable when the uncertainty is resolved. What amount should generally be included in the transaction price at that time?",

    answers: [
        "$340,000",
        "$400,000",
        "$430,000",
        "$460,000"
    ],

    correctAnswer: 1,

    explanation:
        "Variable consideration is included only to the extent that it is probable that a significant reversal of cumulative revenue will not occur. Because the $60,000 bonus does not satisfy the constraint, the transaction price includes only the $400,000 fixed consideration."
},


// QUESTION 57 — CONTRACT MODIFICATION
{
    id: 57,
    lesson: 8,
    topic: "Advanced Revenue Recognition",

    question:
        "A contract is modified, but the modification does not qualify as a separate contract. The remaining goods are distinct from those already transferred. How is the modification generally accounted for?",

    answers: [
        "As a prior-period error",
        "Through a cumulative catch-up adjustment in all cases",
        "Prospectively, effectively as termination of the existing contract and creation of a new contract",
        "By ignoring the modification until all remaining goods are delivered"
    ],

    correctAnswer: 2,

    explanation:
        "When a modification is not a separate contract and the remaining goods or services are distinct from those already transferred, the modification is generally accounted for prospectively, effectively as termination of the old contract and creation of a new contract."
},


// QUESTION 58 — SIGNIFICANT FINANCING COMPONENT
{
    id: 58,
    lesson: 8,
    topic: "Advanced Revenue Recognition",

    question:
        "At contract inception, an entity expects that a customer will pay for a promised service six months after the service is transferred. Which statement is generally correct regarding a significant financing component?",

    answers: [
        "The entity must always recognize six months of financing income",
        "The entity may generally use the practical expedient and need not adjust consideration for a significant financing component because the expected period is one year or less",
        "The arrangement automatically creates a contract liability",
        "Revenue cannot be recognized until cash is collected"
    ],

    correctAnswer: 1,

    explanation:
        "An entity may generally elect the practical expedient not to adjust consideration for a significant financing component when it expects, at contract inception, that the period between transfer and payment will be one year or less."
},


// QUESTION 59 — TAX RATE REMEASUREMENT
{
    id: 59,
    lesson: 9,
    topic: "Deferred Taxes & Valuation Allowances",

    question:
        "A company has a $400,000 deductible temporary difference. Its deferred tax asset was previously measured using a 20% enacted rate. A new 25% tax rate is enacted and is expected to apply when the difference reverses. Ignoring any valuation allowance, by how much should the deferred tax asset increase?",

    answers: [
        "$20,000",
        "$80,000",
        "$100,000",
        "$5,000"
    ],

    correctAnswer: 0,

    explanation:
        "The old DTA is $400,000 × 20% = $80,000. The remeasured DTA is $400,000 × 25% = $100,000. Therefore, the DTA increases by $20,000."
},


// QUESTION 60 — INTEGRATED ANALYSIS
{
    id: 60,
    lesson: 10,
    topic: "Integrated Select Transactions Review",

    question:
        "At December 31, a company has the following items: (1) a probable and reasonably estimable lawsuit loss of $90,000, (2) $48,000 received in advance for services to be performed next year, and (3) a $120,000 temporary difference that will create future taxable amounts at a 25% enacted tax rate. What liabilities should generally be recognized from these three items?",

    answers: [
        "$90,000 lawsuit liability, $48,000 contract liability, and $30,000 deferred tax liability",
        "$90,000 lawsuit liability and $48,000 revenue, with no deferred tax liability",
        "$48,000 contract liability and $30,000 deferred tax asset only",
        "$90,000 lawsuit liability and $120,000 deferred tax liability only"
    ],

    correctAnswer: 0,

    explanation:
        "The probable and estimable lawsuit creates a $90,000 liability. Cash received before performance creates a $48,000 contract liability. The $120,000 future taxable temporary difference creates a DTL of $120,000 × 25% = $30,000."
}

];

const farModule4Questions = [

    // =========================================================
    // LESSON 1 — GOVERNMENTAL ACCOUNTING FOUNDATIONS
    // =========================================================

    {
        id: 1,
        lesson: 1,
        topic: "Governmental Accounting Foundations",

        question:
            "Which measurement focus and basis of accounting are generally used by governmental funds?",

        answers: [
            "Economic resources and accrual",
            "Current financial resources and modified accrual",
            "Current financial resources and cash basis",
            "Economic resources and modified accrual"
        ],

        correctAnswer: 1,

        explanation:
            "Governmental funds generally use the current financial resources measurement focus and modified accrual basis of accounting."
    },

    {
        id: 2,
        lesson: 1,
        topic: "Governmental Accounting Foundations",

        question:
            "Which reporting level generally uses the economic resources measurement focus and accrual accounting?",

        answers: [
            "Government-wide financial statements",
            "Governmental fund statements only",
            "General Fund only",
            "Debt Service Fund only"
        ],

        correctAnswer: 0,

        explanation:
            "Government-wide financial statements use the economic resources measurement focus and accrual basis of accounting."
    },

    {
        id: 3,
        lesson: 1,
        topic: "Governmental Accounting Foundations",

        question:
            "Which fund category generally uses accrual accounting rather than modified accrual?",

        answers: [
            "Governmental funds",
            "General Fund",
            "Proprietary funds",
            "Capital Projects Fund"
        ],

        correctAnswer: 2,

        explanation:
            "Proprietary funds use the economic resources measurement focus and accrual basis of accounting."
    },

    {
        id: 4,
        lesson: 1,
        topic: "Governmental Accounting Foundations",

        question:
            "Why are fiduciary activities generally excluded from government-wide financial statements?",

        answers: [
            "They never involve cash",
            "Their resources generally are not available to support the government's own programs",
            "They use modified accrual accounting",
            "They are always immaterial"
        ],

        correctAnswer: 1,

        explanation:
            "Fiduciary resources are generally held for others and therefore are not available to finance the government's own programs."
    },


    // =========================================================
    // LESSON 2 — GOVERNMENTAL FUNDS
    // =========================================================

    {
        id: 5,
        lesson: 2,
        topic: "Governmental Funds",

        question:
            "Which governmental fund is generally the government's primary operating fund?",

        answers: [
            "General Fund",
            "Permanent Fund",
            "Debt Service Fund",
            "Capital Projects Fund"
        ],

        correctAnswer: 0,

        explanation:
            "The General Fund generally serves as the chief operating fund of the government."
    },

    {
        id: 6,
        lesson: 2,
        topic: "Governmental Funds",

        question:
            "Which fund generally accounts for resources used to construct a major government building?",

        answers: [
            "Debt Service Fund",
            "Capital Projects Fund",
            "Internal Service Fund",
            "Permanent Fund"
        ],

        correctAnswer: 1,

        explanation:
            "Capital Projects Funds generally account for financial resources used to acquire or construct major capital facilities."
    },

    {
        id: 7,
        lesson: 2,
        topic: "Governmental Funds",

        question:
            "A donor requires that the principal of a gift remain intact permanently while earnings are used to maintain public parks. Which fund is generally appropriate?",

        answers: [
            "Special Revenue Fund",
            "General Fund",
            "Permanent Fund",
            "Private-Purpose Trust Fund"
        ],

        correctAnswer: 2,

        explanation:
            "A Permanent Fund generally reports resources whose principal must remain intact while earnings support government programs or citizens."
    },

    {
        id: 8,
        lesson: 2,
        topic: "Governmental Funds",

        question:
            "Which governmental fund is generally used to accumulate resources for principal and interest payments on general long-term debt?",

        answers: [
            "Capital Projects Fund",
            "Special Revenue Fund",
            "General Fund",
            "Debt Service Fund"
        ],

        correctAnswer: 3,

        explanation:
            "Debt Service Funds generally account for resources used to pay principal and interest on general long-term governmental debt."
    },


    // =========================================================
    // LESSON 3 — MODIFIED ACCRUAL
    // =========================================================

    {
        id: 9,
        lesson: 3,
        topic: "Modified Accrual Accounting",

        question:
            "Under modified accrual accounting, revenue is generally recognized when it is:",

        answers: [
            "Earned and collectible within five years",
            "Measurable and available",
            "Received in cash",
            "Approved in the budget"
        ],

        correctAnswer: 1,

        explanation:
            "Governmental fund revenue generally must be both measurable and available."
    },

    {
        id: 10,
        lesson: 3,
        topic: "Modified Accrual Accounting",

        question:
            "A governmental fund has $900,000 of measurable property taxes, but $70,000 does not satisfy the availability criterion. How much revenue should generally be recognized?",

        answers: [
            "$70,000",
            "$830,000",
            "$900,000",
            "$970,000"
        ],

        correctAnswer: 1,

        explanation:
            "$900,000 − $70,000 = $830,000 is measurable and available and therefore generally recognized."
    },

    {
        id: 11,
        lesson: 3,
        topic: "Modified Accrual Accounting",

        question:
            "How are proceeds from issuing general long-term bonds generally reported in a governmental fund?",

        answers: [
            "Revenue",
            "Capital contribution",
            "Other financing source",
            "Deferred inflow"
        ],

        correctAnswer: 2,

        explanation:
            "General long-term bond proceeds are generally reported as other financing sources in governmental funds."
    },

    {
        id: 12,
        lesson: 3,
        topic: "Modified Accrual Accounting",

        question:
            "A governmental fund purchases equipment for $120,000. How is the purchase generally reported in that fund?",

        answers: [
            "As an expenditure",
            "As depreciation expense",
            "As a capital asset only",
            "As an other financing use"
        ],

        correctAnswer: 0,

        explanation:
            "Governmental funds generally report capital asset acquisitions as expenditures."
    },


    // =========================================================
    // LESSON 4 — GOVERNMENTAL FUND FINANCIAL STATEMENTS
    // =========================================================

    {
        id: 13,
        lesson: 4,
        topic: "Governmental Fund Financial Statements",

        question:
            "Which item is generally NOT reported on a governmental funds balance sheet?",

        answers: [
            "Cash",
            "Accounts payable",
            "General capital assets",
            "Taxes receivable"
        ],

        correctAnswer: 2,

        explanation:
            "General capital assets are generally reported at the government-wide level rather than on governmental fund balance sheets."
    },

    {
        id: 14,
        lesson: 4,
        topic: "Governmental Fund Financial Statements",

        question:
            "Which fund balance classification generally represents externally enforceable constraints?",

        answers: [
            "Restricted",
            "Assigned",
            "Unassigned",
            "Committed"
        ],

        correctAnswer: 0,

        explanation:
            "Restricted fund balance generally results from externally enforceable constraints or legal restrictions."
    },

    {
        id: 15,
        lesson: 4,
        topic: "Governmental Fund Financial Statements",

        question:
            "Which classification is generally the residual fund balance classification for the General Fund?",

        answers: [
            "Committed",
            "Restricted",
            "Unassigned",
            "Nonspendable"
        ],

        correctAnswer: 2,

        explanation:
            "Unassigned fund balance generally represents the residual classification in the General Fund."
    },

    {
        id: 16,
        lesson: 4,
        topic: "Governmental Fund Financial Statements",

        question:
            "A governmental fund reports revenues of $900,000, expenditures of $820,000, bond proceeds of $100,000, and transfers out of $30,000. What is the increase in fund balance?",

        answers: [
            "$80,000",
            "$150,000",
            "$180,000",
            "$230,000"
        ],

        correctAnswer: 1,

        explanation:
            "$900,000 − $820,000 + $100,000 − $30,000 = $150,000."
    },


    // =========================================================
    // LESSON 5 — PROPRIETARY FUNDS
    // =========================================================

    {
        id: 17,
        lesson: 5,
        topic: "Proprietary Funds",

        question:
            "A city-owned water utility primarily provides services to residents for a fee. Which fund is generally appropriate?",

        answers: [
            "Internal Service Fund",
            "Enterprise Fund",
            "Special Revenue Fund",
            "General Fund"
        ],

        correctAnswer: 1,

        explanation:
            "Enterprise funds generally report activities that provide goods or services primarily to external users for a fee."
    },

    {
        id: 18,
        lesson: 5,
        topic: "Proprietary Funds",

        question:
            "Which basis of accounting is generally used by proprietary funds?",

        answers: [
            "Modified accrual",
            "Cash basis",
            "Accrual",
            "Budgetary basis only"
        ],

        correctAnswer: 2,

        explanation:
            "Proprietary funds use the economic resources measurement focus and accrual basis of accounting."
    },

    {
        id: 19,
        lesson: 5,
        topic: "Proprietary Funds",

        question:
            "A city's central IT department primarily provides services to other city departments and charges them for those services. Which fund is generally appropriate?",

        answers: [
            "Internal Service Fund",
            "Enterprise Fund",
            "Permanent Fund",
            "Debt Service Fund"
        ],

        correctAnswer: 0,

        explanation:
            "Internal Service Funds generally provide goods or services primarily to other departments of the same government."
    },

    {
        id: 20,
        lesson: 5,
        topic: "Proprietary Funds",

        question:
            "Which item is generally reported directly in a proprietary fund?",

        answers: [
            "Capital assets and depreciation",
            "Encumbrances only",
            "General governmental capital assets only",
            "Appropriations instead of expenses"
        ],

        correctAnswer: 0,

        explanation:
            "Proprietary funds use the economic resources measurement focus and therefore generally report capital assets and depreciation."
    },


    // =========================================================
    // LESSON 6 — FIDUCIARY FUNDS
    // =========================================================

    {
        id: 21,
        lesson: 6,
        topic: "Fiduciary Funds",

        question:
            "Which fiduciary fund generally reports the external portion of an investment pool administered by a government?",

        answers: [
            "Private-Purpose Trust Fund",
            "Investment Trust Fund",
            "Permanent Fund",
            "Enterprise Fund"
        ],

        correctAnswer: 1,

        explanation:
            "Investment Trust Funds generally report the external portion of qualifying governmental investment pools."
    },

    {
        id: 22,
        lesson: 6,
        topic: "Fiduciary Funds",

        question:
            "Which statement about fiduciary funds is generally correct?",

        answers: [
            "They use modified accrual accounting",
            "They are included in governmental activities",
            "They generally use accrual accounting",
            "They always benefit the government's own programs"
        ],

        correctAnswer: 2,

        explanation:
            "Fiduciary funds generally use the economic resources measurement focus and accrual basis."
    },

    {
        id: 23,
        lesson: 6,
        topic: "Fiduciary Funds",

        question:
            "Resources held in trust for specific private individuals are most likely reported in which fund?",

        answers: [
            "Private-Purpose Trust Fund",
            "Permanent Fund",
            "Special Revenue Fund",
            "Internal Service Fund"
        ],

        correctAnswer: 0,

        explanation:
            "Private-Purpose Trust Funds generally report qualifying fiduciary resources benefiting specific individuals or organizations."
    },

    {
        id: 24,
        lesson: 6,
        topic: "Fiduciary Funds",

        question:
            "Fiduciary activities are generally excluded from government-wide statements because:",

        answers: [
            "They involve only temporary accounts",
            "The resources generally belong to or are held for others",
            "They do not use accrual accounting",
            "They cannot contain investments"
        ],

        correctAnswer: 1,

        explanation:
            "Fiduciary resources generally are held for others and cannot be used to support the government's own programs."
    },


    // =========================================================
    // LESSON 7 — GOVERNMENT-WIDE FINANCIAL STATEMENTS
    // =========================================================

    {
        id: 25,
        lesson: 7,
        topic: "Government-Wide Financial Statements",

        question:
            "Which activity is generally included in government-wide financial statements?",

        answers: [
            "Governmental activities",
            "Fiduciary activities only",
            "Custodial activities only",
            "Private-purpose trust activities only"
        ],

        correctAnswer: 0,

        explanation:
            "Government-wide statements generally include governmental activities and business-type activities, but exclude fiduciary activities."
    },

    {
        id: 26,
        lesson: 7,
        topic: "Government-Wide Financial Statements",

        question:
            "Which statement is one of the primary government-wide financial statements?",

        answers: [
            "Statement of Revenues, Expenditures, and Changes in Fund Balances",
            "Statement of Net Position",
            "Budgetary Comparison Schedule only",
            "General Fund Trial Balance"
        ],

        correctAnswer: 1,

        explanation:
            "The Statement of Net Position is one of the two primary government-wide financial statements."
    },

    {
        id: 27,
        lesson: 7,
        topic: "Government-Wide Financial Statements",

        question:
            "A governmental program has expenses of $700,000, charges for services of $150,000, and program grants of $100,000. What is the program's net expense?",

        answers: [
            "$450,000",
            "$550,000",
            "$600,000",
            "$950,000"
        ],

        correctAnswer: 0,

        explanation:
            "$700,000 − $150,000 − $100,000 = $450,000 net expense."
    },

    {
        id: 28,
        lesson: 7,
        topic: "Government-Wide Financial Statements",

        question:
            "Which item is generally recognized at the government-wide level for governmental activities?",

        answers: [
            "General long-term liabilities",
            "Encumbrances as expenses",
            "Appropriations as liabilities",
            "Bond proceeds as revenue"
        ],

        correctAnswer: 0,

        explanation:
            "Government-wide reporting includes general long-term liabilities because it uses the economic resources measurement focus."
    },


    // =========================================================
    // LESSON 8 — RECONCILIATION
    // =========================================================

    {
        id: 29,
        lesson: 8,
        topic: "Governmental Fund to Government-Wide Reconciliation",

        question:
            "When reconciling governmental fund operating results to government-wide results, how is a capital outlay generally treated?",

        answers: [
            "Subtract it again",
            "Add it back because it is capitalized government-wide",
            "Ignore it completely",
            "Treat it as bond proceeds"
        ],

        correctAnswer: 1,

        explanation:
            "Governmental funds report capital outlays as expenditures, but government-wide statements capitalize them, so the expenditure effect is added back."
    },

    {
        id: 30,
        lesson: 8,
        topic: "Governmental Fund to Government-Wide Reconciliation",

        question:
            "Governmental funds report a $400,000 increase in fund balance. Capital outlays were $120,000 and depreciation was $40,000. Ignoring all other differences, what is the change in government-wide net position?",

        answers: [
            "$320,000",
            "$400,000",
            "$480,000",
            "$560,000"
        ],

        correctAnswer: 2,

        explanation:
            "$400,000 + $120,000 capital outlay − $40,000 depreciation = $480,000."
    },

    {
        id: 31,
        lesson: 8,
        topic: "Governmental Fund to Government-Wide Reconciliation",

        question:
            "Why is a principal payment on general long-term debt generally added back when reconciling governmental fund results to government-wide results?",

        answers: [
            "Because it becomes revenue",
            "Because government-wide accounting treats it as a reduction of a liability rather than an expense",
            "Because it creates a capital asset",
            "Because it is a fiduciary activity"
        ],

        correctAnswer: 1,

        explanation:
            "Governmental funds report principal payments as expenditures, while government-wide accounting reduces the long-term liability."
    },

    {
        id: 32,
        lesson: 8,
        topic: "Governmental Fund to Government-Wide Reconciliation",

        question:
            "Governmental funds report $250,000 of bond proceeds as an other financing source. What happens to this amount when converting operating results to government-wide reporting?",

        answers: [
            "It remains revenue",
            "It is removed because government-wide reporting recognizes a liability instead",
            "It becomes depreciation",
            "It becomes an expenditure"
        ],

        correctAnswer: 1,

        explanation:
            "Bond proceeds create a liability at the government-wide level rather than income."
    },


    // =========================================================
    // LESSON 9 — BUDGETARY ACCOUNTING & ENCUMBRANCES
    // =========================================================

    {
        id: 33,
        lesson: 9,
        topic: "Budgetary Accounting & Encumbrances",

        question:
            "What does an appropriation generally represent?",

        answers: [
            "Authorized spending",
            "Actual revenue",
            "A long-term liability",
            "A capital asset"
        ],

        correctAnswer: 0,

        explanation:
            "Appropriations generally represent legally authorized spending."
    },

    {
        id: 34,
        lesson: 9,
        topic: "Budgetary Accounting & Encumbrances",

        question:
            "A governmental fund issues a purchase order for $60,000 of supplies. The supplies have not yet been received. What amount of expenditure is generally recognized solely because of the purchase order?",

        answers: [
            "$60,000",
            "$30,000",
            "$0",
            "$120,000"
        ],

        correctAnswer: 2,

        explanation:
            "The purchase order may result in an encumbrance, but generally no expenditure is recognized until the related obligation is incurred."
    },

    {
        id: 35,
        lesson: 9,
        topic: "Budgetary Accounting & Encumbrances",

        question:
            "A government budget includes estimated revenues of $3,000,000 and appropriations of $2,750,000. What is the budgetary surplus?",

        answers: [
            "$250,000",
            "$2,750,000",
            "$3,000,000",
            "$5,750,000"
        ],

        correctAnswer: 0,

        explanation:
            "$3,000,000 − $2,750,000 = $250,000 budgetary surplus."
    },

    {
        id: 36,
        lesson: 9,
        topic: "Budgetary Accounting & Encumbrances",

        question:
            "When goods related to a previously recorded encumbrance are received, what generally happens?",

        answers: [
            "The encumbrance remains permanently",
            "The encumbrance is reversed and the actual expenditure/liability is recorded",
            "Revenue is recognized",
            "A capital contribution is recognized"
        ],

        correctAnswer: 1,

        explanation:
            "When the goods or services are received, the encumbrance is generally reversed and the actual transaction is recorded."
    },


    // =========================================================
    // LESSON 10 — INTEGRATED REVIEW
    // =========================================================

    {
        id: 37,
        lesson: 10,
        topic: "Governmental Accounting Integrated Review",

        question:
            "Which combination is generally correct?",

        answers: [
            "Governmental fund → accrual; Enterprise Fund → modified accrual",
            "Governmental fund → modified accrual; Enterprise Fund → accrual",
            "Government-wide → modified accrual; Fiduciary → modified accrual",
            "General Fund → accrual; Capital Projects Fund → accrual"
        ],

        correctAnswer: 1,

        explanation:
            "Governmental funds use modified accrual, while enterprise funds use accrual accounting."
    },

    {
        id: 38,
        lesson: 10,
        topic: "Governmental Accounting Integrated Review",

        question:
            "Which transaction is generally reported as an other financing source in a governmental fund?",

        answers: [
            "Property tax revenue",
            "Bond proceeds",
            "Depreciation expense",
            "Purchase order issuance"
        ],

        correctAnswer: 1,

        explanation:
            "General long-term bond proceeds are generally reported as other financing sources in governmental funds."
    },

    {
        id: 39,
        lesson: 10,
        topic: "Governmental Accounting Integrated Review",

        question:
            "Which statement best describes an encumbrance?",

        answers: [
            "It is a commitment related to an order or contract",
            "It is always an actual expenditure",
            "It is a long-term liability",
            "It is government-wide revenue"
        ],

        correctAnswer: 0,

        explanation:
            "An encumbrance is generally used to record a commitment related to an outstanding purchase order or contract."
    },

    {
        id: 40,
        lesson: 10,
        topic: "Governmental Accounting Integrated Review",

        question:
            "Which item is generally excluded from government-wide financial statements?",

        answers: [
            "Governmental activities",
            "Business-type activities",
            "Capital assets",
            "Fiduciary activities"
        ],

        correctAnswer: 3,

        explanation:
            "Fiduciary activities generally are excluded from government-wide financial statements because the resources are held for others."
    },

        // =========================================================
    // HARDER APPLICATION MCQs — MODULE 4
    // =========================================================

    {
        id: 41,
        lesson: 3,
        topic: "Modified Accrual Accounting",

        question:
            "A city's General Fund levies $1,200,000 of property taxes for the current year. All amounts are measurable. Of the total levy, $1,080,000 is expected to be collected during the current year or soon enough thereafter to satisfy the government's availability criterion. The remaining $120,000 is not available. What amount of property tax revenue should generally be recognized in the General Fund for the current year?",

        answers: [
            "$1,200,000",
            "$120,000",
            "$1,080,000",
            "$960,000"
        ],

        correctAnswer: 2,

        explanation:
            "Governmental fund revenue generally must be measurable and available. Because $1,080,000 satisfies both criteria, the General Fund generally recognizes $1,080,000 of property tax revenue."
    },

    {
        id: 42,
        lesson: 2,
        topic: "Governmental Funds",

        question:
            "A city receives $4,000,000 of resources that are restricted for construction of a new fire station. Which governmental fund would generally be used to account for these resources and the related capital outlays?",

        answers: [
            "Capital Projects Fund",
            "Special Revenue Fund",
            "Debt Service Fund",
            "Enterprise Fund"
        ],

        correctAnswer: 0,

        explanation:
            "A Capital Projects Fund generally accounts for financial resources restricted, committed, or assigned for capital outlays, including acquisition or construction of capital facilities and other capital assets."
    },

    {
        id: 43,
        lesson: 4,
        topic: "Governmental Fund Financial Statements",

        question:
            "A General Fund has $900,000 of assets and $350,000 of liabilities. Of the resulting fund balance, $100,000 is nonspendable, $80,000 is restricted, $70,000 is committed, and $50,000 is assigned. Assuming no deferred outflows or deferred inflows, what amount is generally classified as unassigned fund balance?",

        answers: [
            "$300,000",
            "$250,000",
            "$550,000",
            "$200,000"
        ],

        correctAnswer: 1,

        explanation:
            "Total fund balance is $900,000 − $350,000 = $550,000. Subtract the nonspendable $100,000, restricted $80,000, committed $70,000, and assigned $50,000 amounts. The remaining $250,000 is generally unassigned."
    },

    {
        id: 44,
        lesson: 7,
        topic: "Government-Wide Financial Statements",

        question:
            "A governmental function reports $850,000 of expenses, $200,000 of charges for services, $90,000 of operating grants, and $60,000 of capital grants. What net expense should generally be reported for the function in the government-wide statement of activities?",

        answers: [
            "$650,000",
            "$500,000",
            "$700,000",
            "$440,000"
        ],

        correctAnswer: 1,

        explanation:
            "Program revenues include charges for services, operating grants and contributions, and capital grants and contributions. Net expense is $850,000 − $200,000 − $90,000 − $60,000 = $500,000."
    },

    {
        id: 45,
        lesson: 8,
        topic: "Governmental Fund to Government-Wide Reconciliation",

        question:
            "Governmental funds report a $600,000 increase in fund balance. During the year, the funds reported $180,000 of capital outlays, $300,000 of bond proceeds, and $50,000 of principal payments on general long-term debt. Government-wide depreciation expense is $70,000. Ignoring all other differences, what is the increase in net position of governmental activities?",

        answers: [
            "$460,000",
            "$660,000",
            "$760,000",
            "$360,000"
        ],

        correctAnswer: 0,

        explanation:
            "Begin with the $600,000 increase in fund balance. Add back $180,000 of capital outlays, subtract $70,000 of depreciation, add back $50,000 of principal payments, and remove $300,000 of bond proceeds. The result is $460,000."
    },

    {
        id: 46,
        lesson: 5,
        topic: "Proprietary Funds",

        question:
            "A city operates a central motor pool that provides vehicles almost entirely to the city's police, parks, and public works departments and charges those departments based on usage. Which fund is generally most appropriate?",

        answers: [
            "Enterprise Fund",
            "General Fund",
            "Internal Service Fund",
            "Special Revenue Fund"
        ],

        correctAnswer: 2,

        explanation:
            "An Internal Service Fund generally accounts for goods or services provided primarily to other departments or agencies of the same government on a cost-reimbursement or similar basis."
    },

    {
        id: 47,
        lesson: 6,
        topic: "Fiduciary Funds",

        question:
            "A county holds qualifying resources in trust under an arrangement requiring the principal to remain intact and the earnings to benefit a specific private family. Which fund is generally appropriate?",

        answers: [
            "Permanent Fund",
            "Private-Purpose Trust Fund",
            "Special Revenue Fund",
            "Investment Trust Fund"
        ],

        correctAnswer: 1,

        explanation:
            "Because the qualifying trust benefits specific private individuals rather than the government or its citizenry, a Private-Purpose Trust Fund is generally appropriate. A Permanent Fund instead benefits the government or its citizenry."
    },

    {
        id: 48,
        lesson: 3,
        topic: "Modified Accrual Accounting",

        question:
            "A governmental fund issues $2,000,000 of general long-term bonds and immediately uses $500,000 of the proceeds to acquire equipment. Ignoring issuance costs, how should these two transactions generally affect the governmental fund's operating statement?",

        answers: [
            "$2,000,000 revenue and $500,000 expense",
            "$1,500,000 net revenue",
            "$2,000,000 other financing source and $500,000 expenditure",
            "$2,000,000 liability and $500,000 capital asset"
        ],

        correctAnswer: 2,

        explanation:
            "At the governmental fund level, general long-term bond proceeds are generally reported as an other financing source, while acquisition of equipment is generally reported as an expenditure."
    },

    {
        id: 49,
        lesson: 7,
        topic: "Government-Wide Financial Statements",

        question:
            "Which of the following would generally be reported as a general revenue rather than a program revenue in the government-wide statement of activities?",

        answers: [
            "A fee charged specifically for building inspections",
            "An operating grant restricted to a public safety program",
            "A capital grant restricted to construction of a transit facility",
            "Property taxes not restricted to a particular governmental program"
        ],

        correctAnswer: 3,

        explanation:
            "Taxes that are not restricted to a particular governmental program are generally reported as general revenues. Charges for services and operating and capital grants associated with programs are generally program revenues."
    },

    {
        id: 50,
        lesson: 8,
        topic: "Governmental Fund to Government-Wide Reconciliation",

        question:
            "Total governmental fund balances are $1,100,000. Governmental activities have $2,400,000 of net capital assets and $1,500,000 of general long-term liabilities that are not reported in the governmental funds. In addition, $90,000 of revenue was deferred in the governmental funds solely because it was unavailable but qualifies for recognition under accrual accounting. Ignoring all other differences, what is governmental activities' net position?",

        answers: [
            "$2,090,000",
            "$1,910,000",
            "$3,090,000",
            "$1,010,000"
        ],

        correctAnswer: 0,

        explanation:
            "Start with governmental fund balances of $1,100,000, add $2,400,000 of net capital assets, subtract $1,500,000 of long-term liabilities, and add the $90,000 accrual revenue adjustment. Net position is $2,090,000."
    },

    {
        id: 51,
        lesson: 9,
        topic: "Budgetary Accounting & Encumbrances",

        question:
            "A governmental fund records an $85,000 encumbrance when it issues a purchase order. The goods are later received with an actual invoice of $82,000. What amount should generally be recognized as the expenditure when the goods are received?",

        answers: [
            "$3,000",
            "$85,000",
            "$82,000",
            "$167,000"
        ],

        correctAnswer: 2,

        explanation:
            "The original $85,000 encumbrance is generally reversed when the goods are received, and the actual expenditure is recorded at the $82,000 invoice amount."
    },

    {
        id: 52,
        lesson: 4,
        topic: "Governmental Fund Financial Statements",

        question:
            "A governmental fund reports $1,500,000 of revenues, $1,260,000 of expenditures, $300,000 of bond proceeds, $90,000 of transfers in, and $140,000 of transfers out. What is the increase in fund balance?",

        answers: [
            "$290,000",
            "$490,000",
            "$390,000",
            "$190,000"
        ],

        correctAnswer: 1,

        explanation:
            "The increase in fund balance is $1,500,000 − $1,260,000 + $300,000 + $90,000 − $140,000 = $490,000."
    },

    {
        id: 53,
        lesson: 6,
        topic: "Fiduciary Funds",

        question:
            "A county sponsors an investment pool containing $8,000,000 of the county's own resources and $12,000,000 belonging to legally separate governments. Assuming the external portion qualifies for fiduciary reporting, what amount is generally associated with the Investment Trust Fund?",

        answers: [
            "$8,000,000",
            "$20,000,000",
            "$4,000,000",
            "$12,000,000"
        ],

        correctAnswer: 3,

        explanation:
            "An Investment Trust Fund generally reports the qualifying external portion of a governmental investment pool. The $12,000,000 belonging to legally separate governments represents the external portion."
    },

    {
        id: 54,
        lesson: 7,
        topic: "Government-Wide Financial Statements",

        question:
            "Which transaction involving governmental activities would generally increase a government-wide liability without producing government-wide revenue?",

        answers: [
            "Issuance of general long-term bonds",
            "Collection of unrestricted property taxes",
            "Receipt of charges for services",
            "Recognition of an operating grant"
        ],

        correctAnswer: 0,

        explanation:
            "At the government-wide level, issuance of general long-term debt increases a liability. The bond proceeds are not revenue."
    },

    {
        id: 55,
        lesson: 8,
        topic: "Governmental Fund to Government-Wide Reconciliation",

        question:
            "Governmental funds report a $420,000 decrease in fund balance. During the year, capital outlays were $160,000, depreciation expense was $55,000, principal payments on general long-term debt were $40,000, and bond proceeds were $100,000. Ignoring all other differences, what is the change in governmental activities' net position?",

        answers: [
            "$375,000 decrease",
            "$475,000 decrease",
            "$255,000 decrease",
            "$155,000 decrease"
        ],

        correctAnswer: 0,

        explanation:
            "Begin with a $420,000 decrease, or −$420,000. Add back $160,000 of capital outlays, subtract $55,000 of depreciation, add back $40,000 of principal payments, and subtract $100,000 of bond proceeds. The result is −$375,000, or a $375,000 decrease in net position."
    },

    {
        id: 56,
        lesson: 5,
        topic: "Proprietary Funds",

        question:
            "Which combination is generally correct for an Enterprise Fund?",

        answers: [
            "Current financial resources; modified accrual; no depreciation",
            "Economic resources; modified accrual; capital assets excluded",
            "Current financial resources; accrual; capital assets expensed immediately",
            "Economic resources; accrual; capital assets and depreciation reported"
        ],

        correctAnswer: 3,

        explanation:
            "Enterprise Funds are proprietary funds. They generally use the economic resources measurement focus and accrual accounting and report capital assets and depreciation."
    },

    {
        id: 57,
        lesson: 4,
        topic: "Governmental Fund Financial Statements",

        question:
            "A General Fund has total fund balance of $700,000. Of this amount, $80,000 is nonspendable, $120,000 is restricted, and $150,000 is committed. The government has also assigned $50,000 for a specific purpose. What amount is generally unassigned?",

        answers: [
            "$350,000",
            "$250,000",
            "$300,000",
            "$400,000"
        ],

        correctAnswer: 2,

        explanation:
            "$700,000 − $80,000 − $120,000 − $150,000 − $50,000 = $300,000 of unassigned fund balance."
    },

    {
        id: 58,
        lesson: 9,
        topic: "Budgetary Accounting & Encumbrances",

        question:
            "A government's adopted budget includes estimated revenues of $4,600,000 and appropriations of $4,850,000. Which statement is generally correct?",

        answers: [
            "The budget contains a $250,000 deficit",
            "The budget contains a $250,000 surplus",
            "The budget contains a $4,850,000 deficit",
            "No budgetary difference exists until expenditures occur"
        ],

        correctAnswer: 0,

        explanation:
            "Appropriations exceed estimated revenues by $250,000, so the adopted budget reflects a $250,000 budgetary deficit."
    },

    {
        id: 59,
        lesson: 10,
        topic: "Governmental Accounting Integrated Review",

        question:
            "A city's General Fund receives $600,000 from issuing general long-term debt and spends $450,000 to acquire equipment. Which combination generally describes the same transactions at the governmental fund and government-wide levels?",

        answers: [
            "Fund: $600,000 revenue and $450,000 asset; government-wide: $150,000 revenue",
            "Fund: $600,000 other financing source and $450,000 expenditure; government-wide: liability and capital asset",
            "Fund: liability and capital asset; government-wide: other financing source and expenditure",
            "Fund: $600,000 revenue and $450,000 expenditure; government-wide: $600,000 revenue and depreciation only"
        ],

        correctAnswer: 1,

        explanation:
            "The governmental fund generally reports the bond proceeds as an other financing source and the equipment acquisition as an expenditure. Government-wide reporting instead recognizes the debt liability and capitalizes the equipment."
    },

    {
        id: 60,
        lesson: 10,
        topic: "Governmental Accounting Integrated Review",

        question:
            "A city reports a water utility, a central motor pool serving city departments, a pension trust, and its police department. Which classification is generally correct?",

        answers: [
            "Water utility—Enterprise; motor pool—Internal Service; pension trust—Fiduciary; police—Governmental activity",
            "Water utility—Internal Service; motor pool—Enterprise; pension trust—Governmental; police—Fiduciary",
            "Water utility—Special Revenue; motor pool—General Fund; pension trust—Enterprise; police—Business-type activity",
            "Water utility—Enterprise; motor pool—Permanent; pension trust—Capital Projects; police—Internal Service"
        ],

        correctAnswer: 0,

        explanation:
            "A fee-supported water utility is generally associated with an Enterprise Fund, a central service operation serving city departments with an Internal Service Fund, a qualifying pension trust with fiduciary reporting, and traditional police services with governmental activities."
    }

];

const farModule5Questions = [

    // =========================================================
    // LESSON 1 — NOT-FOR-PROFIT ACCOUNTING FOUNDATIONS
    // =========================================================

    {
        id: 1,
        lesson: 1,
        topic: "Not-for-Profit Accounting Foundations",

        question:
            "Which equation best describes the basic financial position of a not-for-profit organization?",

        answers: [
            "Assets + Liabilities = Net Assets",
            "Assets − Liabilities = Net Assets",
            "Assets − Revenues = Net Assets",
            "Revenue − Expenses = Total Assets"
        ],

        correctAnswer: 1,

        explanation:
            "An NFP reports net assets rather than owners' equity. Assets minus liabilities equals net assets."
    },

    {
        id: 2,
        lesson: 1,
        topic: "Not-for-Profit Accounting Foundations",

        question:
            "Which transaction is most clearly a contribution rather than an exchange transaction?",

        answers: [
            "A customer pays $100 for admission to a fundraising dinner",
            "A university charges a student tuition for courses",
            "A museum sells merchandise in its gift shop",
            "A donor gives $50,000 and receives no commensurate value in return"
        ],

        correctAnswer: 3,

        explanation:
            "A contribution is generally nonreciprocal. The donor transfers resources without receiving commensurate value in return."
    },

    {
        id: 3,
        lesson: 1,
        topic: "Not-for-Profit Accounting Foundations",

        question:
            "An NFP receives an unconditional $30,000 cash contribution with no donor-imposed restrictions. Which net asset class generally increases?",

        answers: [
            "Net assets without donor restrictions",
            "Net assets with donor restrictions",
            "Liabilities",
            "Contributed capital"
        ],

        correctAnswer: 0,

        explanation:
            "An unconditional contribution without a donor-imposed restriction generally increases net assets without donor restrictions."
    },

    {
        id: 4,
        lesson: 1,
        topic: "Not-for-Profit Accounting Foundations",

        question:
            "Which statement about an NFP's equity section is generally correct?",

        answers: [
            "It reports common stock and retained earnings",
            "It reports only contributed capital",
            "It reports net assets rather than stockholders' equity",
            "It reports fund balance using governmental fund classifications"
        ],

        correctAnswer: 2,

        explanation:
            "Not-for-profit entities do not have owners in the traditional business sense and generally report net assets instead of stockholders' equity."
    },


    // =========================================================
    // LESSON 2 — NET ASSET CLASSIFICATION
    // =========================================================

    {
        id: 5,
        lesson: 2,
        topic: "Net Asset Classification",

        question:
            "A donor contributes $100,000 and requires that it be used exclusively for cancer research. How should the contribution generally be classified?",

        answers: [
            "Net assets without donor restrictions",
            "A liability",
            "Net assets with donor restrictions",
            "Board-designated net assets"
        ],

        correctAnswer: 2,

        explanation:
            "The donor imposed a specific purpose restriction, so the contribution generally increases net assets with donor restrictions."
    },

    {
        id: 6,
        lesson: 2,
        topic: "Net Asset Classification",

        question:
            "The board of an NFP designates $250,000 of otherwise unrestricted resources for a future building project. How are those resources generally classified?",

        answers: [
            "Net assets without donor restrictions",
            "Net assets with donor restrictions",
            "A deferred inflow",
            "A liability"
        ],

        correctAnswer: 0,

        explanation:
            "A board designation is internally imposed rather than donor imposed, so the resources generally remain within net assets without donor restrictions."
    },

    {
        id: 7,
        lesson: 2,
        topic: "Net Asset Classification",

        question:
            "Which event would generally cause a reclassification from net assets with donor restrictions to net assets without donor restrictions?",

        answers: [
            "Receiving a new unrestricted contribution",
            "The board designating cash for expansion",
            "Recording depreciation",
            "Satisfying the purpose specified by the donor"
        ],

        correctAnswer: 3,

        explanation:
            "When a donor-imposed purpose or time restriction is satisfied, the amount is generally released from restriction."
    },

    {
        id: 8,
        lesson: 2,
        topic: "Net Asset Classification",

        question:
            "A donor contributes $70,000 in December and requires that the resources not be used until the following year. The contribution is generally classified initially as:",

        answers: [
            "A liability",
            "Net assets with donor restrictions",
            "Net assets without donor restrictions",
            "Deferred revenue from an exchange transaction"
        ],

        correctAnswer: 1,

        explanation:
            "The donor imposed a time restriction, so the recognized contribution generally increases net assets with donor restrictions."
    },


    // =========================================================
    // LESSON 3 — CONTRIBUTIONS & DONOR RESTRICTIONS
    // =========================================================

    {
        id: 9,
        lesson: 3,
        topic: "Contributions & Donor Restrictions",

        question:
            "An NFP receives an unconditional $60,000 contribution with no donor restriction. What amount of contribution revenue should generally be recognized?",

        answers: [
            "$60,000",
            "$0 until spent",
            "$30,000",
            "$60,000 as a liability"
        ],

        correctAnswer: 0,

        explanation:
            "An unconditional contribution without donor restrictions is generally recognized when received or promised."
    },

    {
        id: 10,
        lesson: 3,
        topic: "Contributions & Donor Restrictions",

        question:
            "An unconditional $120,000 contribution is restricted by the donor for scholarships. Which statement is generally correct?",

        answers: [
            "Revenue recognition waits until scholarships are paid",
            "The contribution is initially recorded as a liability",
            "The contribution is recognized in net assets with donor restrictions",
            "The contribution is treated as an exchange transaction"
        ],

        correctAnswer: 2,

        explanation:
            "A donor restriction affects classification rather than preventing recognition of an otherwise unconditional contribution."
    },

    {
        id: 11,
        lesson: 3,
        topic: "Contributions & Donor Restrictions",

        question:
            "An NFP spends $45,000 on the exact program for which previously recognized donor-restricted resources were contributed. What generally occurs?",

        answers: [
            "Another $45,000 contribution is recognized",
            "A release from donor restrictions is reported",
            "A $45,000 liability is recognized",
            "The original contribution is reversed"
        ],

        correctAnswer: 1,

        explanation:
            "Satisfying the donor's purpose restriction generally results in a release from restriction rather than recognition of another contribution."
    },

    {
        id: 12,
        lesson: 3,
        topic: "Contributions & Donor Restrictions",

        question:
            "Which statement best distinguishes a donor restriction from a donor condition?",

        answers: [
            "Restrictions are always liabilities",
            "Conditions affect only expense classification",
            "There is no accounting difference",
            "Restrictions generally affect use/classification, while conditions can affect whether contribution revenue is recognized yet"
        ],

        correctAnswer: 3,

        explanation:
    "Restrictions limit how or when recognized resources can be used. Conditions generally delay recognition until the barrier has been substantially overcome."
    },


    // =========================================================
    // LESSON 4 — CONDITIONAL CONTRIBUTIONS
    // =========================================================

    {
        id: 13,
        lesson: 4,
        topic: "Conditional Contributions",

        question:
            "Which combination most strongly indicates that a contribution agreement is conditional?",

        answers: [
            "A donor suggestion and a board designation",
            "A time restriction only",
            "A barrier plus a right of return or right of release",
            "A donor restriction plus immediate cash collection"
        ],

        correctAnswer: 2,

        explanation:
            "FASB guidance focuses on the presence of a barrier and either a right of return of transferred assets or a right of release from the promise."
    },

    {
        id: 14,
        lesson: 4,
        topic: "Conditional Contributions",

        question:
            "An NFP receives $200,000 cash under an agreement requiring it to achieve a measurable outcome. The donor can demand repayment if the outcome is not achieved. The condition remains unmet at year-end. What is generally reported?",

        answers: [
            "A $200,000 liability",
            "$200,000 contribution revenue without restrictions",
            "$200,000 contribution revenue with restrictions",
            "$200,000 other comprehensive income"
        ],

        correctAnswer: 0,

        explanation:
            "Cash received before the contribution barrier has been substantially overcome is generally reported as a liability."
    },

    {
        id: 15,
        lesson: 4,
        topic: "Conditional Contributions",

        question:
            "A donor promises $90,000 if an NFP first raises $90,000 from other donors, and the donor is released from the promise if the match is not achieved. Before the matching target is reached, the promise is generally:",

        answers: [
            "An unconditional receivable",
            "Contribution revenue with donor restrictions",
            "An exchange transaction",
            "A conditional promise not yet recognized as contribution revenue"
        ],

        correctAnswer: 3,

        explanation:
            "A matching requirement can represent a barrier. Together with the donor's right of release, the promise is conditional."
    },

    {
        id: 16,
        lesson: 4,
        topic: "Conditional Contributions",

        question:
    "A conditional grant becomes unconditional after the NFP substantially overcomes the required barrier. What should the NFP generally do next?",

answers: [
            "Continue reporting the amount only as a liability forever",
            "Recognize the contribution and then consider whether donor restrictions apply",
            "Record the amount directly in equity without revenue",
            "Treat the grant automatically as an exchange transaction"
        ],

        correctAnswer: 1,

        explanation:
"Once the barrier has been substantially overcome, the contribution can generally be recognized. The NFP then evaluates any donor-imposed restrictions."    },


    // =========================================================
    // LESSON 5 — NFP FINANCIAL STATEMENTS
    // =========================================================

    {
        id: 17,
        lesson: 5,
        topic: "Not-for-Profit Financial Statements",

        question:
            "Which NFP financial statement reports assets, liabilities, and net assets at a point in time?",

        answers: [
            "Statement of Activities",
            "Statement of Cash Flows",
            "Statement of Financial Position",
            "Statement of Functional Expenses only"
        ],

        correctAnswer: 2,

        explanation:
            "The Statement of Financial Position reports the NFP's assets, liabilities, and net assets."
    },

    {
        id: 18,
        lesson: 5,
        topic: "Not-for-Profit Financial Statements",

        question:
            "Which NFP financial statement primarily explains changes in net assets during the period?",

        answers: [
            "Statement of Financial Position",
            "Statement of Cash Flows",
            "Statement of Changes in Stockholders' Equity",
            "Statement of Activities"
        ],

        correctAnswer: 3,

        explanation:
            "The Statement of Activities reports revenues, expenses, gains, losses, releases, and other changes affecting net assets."
    },

    {
        id: 19,
        lesson: 5,
        topic: "Not-for-Profit Financial Statements",

        question:
            "An NFP has total assets of $1,300,000 and liabilities of $475,000. What are total net assets?",

        answers: [
            "$825,000",
            "$1,775,000",
            "$475,000",
            "$1,300,000"
        ],

        correctAnswer: 0,

        explanation:
            "Net assets equal assets minus liabilities: $1,300,000 − $475,000 = $825,000."
    },

    {
        id: 20,
        lesson: 5,
        topic: "Not-for-Profit Financial Statements",

        question:
            "Expenses of an NFP generally decrease which net asset class?",

        answers: [
            "Net assets with donor restrictions only",
            "Net assets without donor restrictions",
            "Both classes equally in every case",
            "Neither class"
        ],

        correctAnswer: 1,

        explanation:
            "Expenses are generally reported as decreases in net assets without donor restrictions, with releases from restriction reported when applicable."
    },


    // =========================================================
    // LESSON 6 — EXPENSES BY FUNCTION & NATURE
    // =========================================================

    {
        id: 21,
        lesson: 6,
        topic: "Expenses by Function & Nature",

        question:
            "Which classification describes WHY an NFP incurred an expense?",

        answers: [
            "Natural classification",
            "Donor classification",
            "Functional classification",
            "Liquidity classification"
        ],

        correctAnswer: 2,

        explanation:
            "Functional classification describes the purpose for which the cost was incurred, such as program services or fundraising."
    },

    {
        id: 22,
        lesson: 6,
        topic: "Expenses by Function & Nature",

        question:
            "Which of the following is a natural expense classification?",

        answers: [
            "Program services",
            "Management and general",
            "Fundraising",
            "Salaries"
        ],

        correctAnswer: 3,

        explanation:
            "Salaries describe the type or nature of the cost. Program services, management and general, and fundraising describe functions."
    },

    {
        id: 23,
        lesson: 6,
        topic: "Expenses by Function & Nature",

        question:
            "An employee works entirely in an NFP's food distribution program. Her $65,000 compensation would generally have which functional classification?",

        answers: [
            "Program services",
            "Fundraising",
            "Management and general",
            "Investment activity"
        ],

        correctAnswer: 0,

        explanation:
            "The employee works directly on the organization's mission-related activity, so the functional classification is program services."
    },

    {
        id: 24,
        lesson: 6,
        topic: "Expenses by Function & Nature",

        question:
            "An NFP pays annual rent of $120,000 for a building used 60% for programs, 25% for management and general, and 15% for fundraising. How much rent should be allocated to fundraising?",

        answers: [
            "$72,000",
            "$18,000",
            "$30,000",
            "$102,000"
        ],

        correctAnswer: 1,

        explanation:
            "$120,000 × 15% = $18,000 of rent is allocated to fundraising."
    },


    // =========================================================
    // LESSON 7 — DONATED SERVICES & NONCASH CONTRIBUTIONS
    // =========================================================

    {
        id: 25,
        lesson: 7,
        topic: "Donated Services & Noncash Contributions",

        question:
            "Which donated service is most likely to qualify for recognition by an NFP?",

        answers: [
            "Occasional general volunteer greeting services",
            "Unskilled volunteer attendance at a meeting",
            "A CPA performs specialized accounting work the NFP otherwise would have purchased",
            "A supporter shares the NFP's social media post"
        ],

        correctAnswer: 2,

        explanation:
            "Specialized services provided by individuals with those skills and that otherwise would need to be purchased generally qualify for recognition."
    },

    {
        id: 26,
        lesson: 7,
        topic: "Donated Services & Noncash Contributions",

        question:
            "An attorney donates qualifying legal services with a fair value of $14,000. How should the NFP generally record the transaction?",

        answers: [
            "Recognize contribution revenue and legal expense of $14,000",
            "Recognize only a $14,000 expense",
            "Recognize only $14,000 of contribution revenue",
            "Do not recognize anything because no cash changed hands"
        ],

        correctAnswer: 0,

        explanation:
            "Qualifying donated professional services are generally recognized at fair value as both contribution revenue and the related expense."
    },

    {
        id: 27,
        lesson: 7,
        topic: "Donated Services & Noncash Contributions",

        question:
            "A donor gives an NFP unrestricted equipment with a fair value of $55,000. What is the general initial accounting effect?",

        answers: [
            "Recognize a $55,000 liability",
            "Expense the equipment immediately in all cases",
            "No recognition because the asset was donated",
            "Recognize the equipment and contribution revenue at approximately $55,000"
        ],

        correctAnswer: 3,

        explanation:
            "A contributed nonfinancial asset is generally recognized at fair value, along with contribution revenue, subject to applicable guidance."
    },

    {
        id: 28,
        lesson: 7,
        topic: "Donated Services & Noncash Contributions",

        question:
            "Volunteers provide routine clerical services that do not require specialized skills and do not create or enhance a nonfinancial asset. What is the general accounting treatment?",

        answers: [
            "Recognize revenue only",
            "Generally do not recognize the volunteer services",
            "Recognize expense only",
            "Capitalize the services"
        ],

        correctAnswer: 1,

        explanation:
            "Volunteer services that do not satisfy the recognition criteria generally are not recognized in the financial statements."
    },


    // =========================================================
    // LESSON 8 — ENDOWMENTS & INVESTMENT INCOME
    // =========================================================

    {
        id: 29,
        lesson: 8,
        topic: "Endowments & Investment Income",

        question:
            "A donor contributes $600,000 and requires the principal to be maintained as an endowment. How is the original contribution generally classified?",

        answers: [
            "Net assets with donor restrictions",
            "Net assets without donor restrictions",
            "A liability",
            "Deferred exchange revenue"
        ],

        correctAnswer: 0,

        explanation:
            "A donor-imposed endowment restriction generally results in classification within net assets with donor restrictions."
    },

    {
        id: 30,
        lesson: 8,
        topic: "Endowments & Investment Income",

        question:
            "An NFP's governing board designates $300,000 of unrestricted resources to function as an endowment. No donor restriction exists. The amount generally remains:",

        answers: [
            "A liability",
            "Net assets without donor restrictions",
            "Net assets with donor restrictions",
            "Deferred contribution revenue"
        ],

        correctAnswer: 1,

        explanation:
            "A board-designated endowment is internally designated and generally remains within net assets without donor restrictions."
    },

    {
        id: 31,
        lesson: 8,
        topic: "Endowments & Investment Income",

        question:
            "A donor-restricted endowment earns $40,000 of investment return, and the donor requires that the return be used for scholarships. Before it is spent, the return is generally included in:",

        answers: [
            "A liability",
            "Net assets without donor restrictions",
            "Investment principal outside the financial statements",
            "Net assets with donor restrictions"
        ],

        correctAnswer: 3,

        explanation:
            "Because the donor restricts the investment return for scholarships, the return generally increases net assets with donor restrictions until the restriction is satisfied."
    },

    {
        id: 32,
        lesson: 8,
        topic: "Endowments & Investment Income",

        question:
            "An endowment begins the year with investments of $900,000 and earns $30,000 of dividends plus a $20,000 net investment gain. What is total investment return before considering expenses or appropriations?",

        answers: [
            "$20,000",
            "$30,000",
            "$50,000",
            "$950,000"
        ],

        correctAnswer: 2,

        explanation:
            "$30,000 of dividends + $20,000 investment gain = $50,000 total investment return."
    },


    // =========================================================
    // LESSON 9 — PROMISES TO GIVE & CONTRIBUTION RECEIVABLES
    // =========================================================

    {
        id: 33,
        lesson: 9,
        topic: "Promises to Give & Contribution Receivables",

        question:
            "An NFP receives an unconditional promise to give $80,000 payable in three months. Assuming collectibility is not an issue, what is the general treatment?",

        answers: [
            "Recognize nothing until cash is collected",
            "Recognize a liability",
            "Recognize contribution revenue and a contribution receivable",
            "Recognize only memorandum disclosure"
        ],

        correctAnswer: 2,

        explanation:
            "An unconditional promise to give is generally recognized when the promise is made, resulting in contribution revenue and a receivable."
    },

    {
        id: 34,
        lesson: 9,
        topic: "Promises to Give & Contribution Receivables",

        question:
            "Contribution receivables total $240,000, and the NFP estimates that $12,000 will not be collected. What is the net receivable?",

        answers: [
            "$228,000",
            "$240,000",
            "$252,000",
            "$12,000"
        ],

        correctAnswer: 0,

        explanation:
            "$240,000 − $12,000 estimated uncollectible amount = $228,000 net contribution receivable."
    },

    {
        id: 35,
        lesson: 9,
        topic: "Promises to Give & Contribution Receivables",

        question:
            "A donor promises $150,000 only if an NFP meets a substantive matching requirement. The requirement has not yet been met and the donor has a right of release. How should the promise generally be treated?",

        answers: [
            "Recognize the full receivable immediately",
            "Generally do not recognize contribution revenue yet",
            "Recognize revenue without donor restrictions",
            "Recognize a capital contribution"
        ],

        correctAnswer: 1,

        explanation:
            "The matching barrier plus the donor's right of release makes the promise conditional, so contribution revenue generally waits until the barrier has been substantially overcome."
    },

    {
        id: 36,
        lesson: 9,
        topic: "Promises to Give & Contribution Receivables",

        question:
            "An unconditional pledge has a face amount of $500,000 due several years from now. Its present value at recognition is $455,000. Assuming the discount is material, what amount is generally initially recognized as contribution revenue?",

        answers: [
            "$45,000",
            "$500,000",
            "$0",
            "$455,000"
        ],

        correctAnswer: 3,

        explanation:
            "A material long-term unconditional promise is generally initially measured at the present value of expected future cash flows, here $455,000."
    },


    // =========================================================
    // LESSON 10 — NOT-FOR-PROFIT INTEGRATED REVIEW
    // =========================================================

    {
        id: 37,
        lesson: 10,
        topic: "Not-for-Profit Integrated Review",

        question:
            "Which statement is generally correct?",

        answers: [
            "Donor restrictions always delay contribution recognition",
            "Conditional contributions are always recognized immediately",
            "Board designations create donor-restricted net assets",
            "An unconditional donor-restricted contribution may be recognized immediately in net assets with donor restrictions"
        ],

        correctAnswer: 3,

        explanation:
            "An unconditional contribution can generally be recognized when made. A donor restriction affects classification rather than necessarily delaying recognition."
    },

    {
        id: 38,
        lesson: 10,
        topic: "Not-for-Profit Integrated Review",

        question:
            "An NFP receives $100,000 cash under a conditional agreement. The condition has not been met and the donor has a right of return. Which treatment is generally appropriate?",

        answers: [
            "Recognize a liability",
            "Recognize net assets with donor restrictions",
            "Recognize net assets without donor restrictions",
            "Recognize investment income"
        ],

        correctAnswer: 0,

        explanation:
    "Cash received before the contribution barrier has been substantially overcome is generally reported as a liability."
    },

    {
        id: 39,
        lesson: 10,
        topic: "Not-for-Profit Integrated Review",

        question:
            "Which pairing is correct?",

        answers: [
            "Fundraising → natural classification; Salaries → functional classification",
            "Program services → natural classification; Rent → functional classification",
            "Salaries → natural classification; Program services → functional classification",
            "Management and general → natural classification; Utilities → functional classification"
        ],

        correctAnswer: 2,

        explanation:
            "Salaries describe the nature of an expense, while program services describe its function."
    },

    {
        id: 40,
        lesson: 10,
        topic: "Not-for-Profit Integrated Review",

        question:
            "An NFP has assets of $2,000,000 and liabilities of $650,000. Of total net assets, $500,000 is subject to donor restrictions. How much is classified as net assets without donor restrictions?",

        answers: [
            "$500,000",
            "$1,350,000",
            "$850,000",
            "$2,650,000"
        ],

        correctAnswer: 2,

        explanation:
            "Total net assets are $2,000,000 − $650,000 = $1,350,000. Subtract $500,000 with donor restrictions, leaving $850,000 without donor restrictions."
    },

        // =========================================================
    // HARDER MODULE 5 MCQs — QUESTIONS 41–60
    // =========================================================

    {
        id: 41,
        lesson: 2,
        topic: "Net Asset Classification",

        question:
            "An NFP begins the year with $420,000 of net assets with donor restrictions. During the year, it receives $180,000 of unconditional contributions restricted for a literacy program and spends $135,000 on qualifying literacy-program costs that satisfy donor restrictions. Ignoring all other activity, what are ending net assets with donor restrictions?",

        answers: [
            "$465,000",
            "$600,000",
            "$285,000",
            "$555,000"
        ],

        correctAnswer: 0,

        explanation:
            "Ending net assets with donor restrictions are $420,000 + $180,000 − $135,000 = $465,000. The $135,000 is released from donor restrictions when the qualifying purpose is satisfied."
    },

    {
        id: 42,
        lesson: 3,
        topic: "Contributions & Donor Restrictions",

        question:
            "During the year, an NFP receives $240,000 of unconditional contributions restricted by donors for a specific program. The NFP spends $150,000 on qualifying program costs during the same year. Ignoring other activity, what amount of the $240,000 remains in net assets with donor restrictions at year-end?",

        answers: [
            "$240,000",
            "$150,000",
            "$90,000",
            "$390,000"
        ],

        correctAnswer: 2,

        explanation:
            "The NFP initially recognizes $240,000 with donor restrictions. Qualifying expenditures satisfy $150,000 of the restriction, leaving $90,000 with donor restrictions."
    },

    {
        id: 43,
        lesson: 4,
        topic: "Conditional Contributions",

        question:
            "An NFP receives $300,000 cash from a donor. The agreement requires the NFP to serve 1,000 qualifying participants, and the donor has a right of return if the requirement is not achieved. At year-end, only 700 participants have been served and the barrier has not been substantially overcome. How should the $300,000 generally be reported?",

        answers: [
            "Contribution revenue with donor restrictions",
            "A liability",
            "Contribution revenue without donor restrictions",
            "A board-designated component of net assets"
        ],

        correctAnswer: 1,

        explanation:
            "The measurable performance requirement is a barrier and the donor has a right of return. Because the barrier has not been substantially overcome, cash received is generally reported as a liability."
    },

    {
        id: 44,
        lesson: 4,
        topic: "Conditional Contributions",

        question:
            "A donor promises an NFP $500,000 if the NFP raises $1,000,000 from other donors by December 31. The donor has a right of release if the matching requirement is not achieved. On December 31, the NFP has successfully raised the required $1,000,000. Assuming no separate donor restriction applies to the $500,000, what should the NFP generally recognize?",

        answers: [
            "Nothing until the $500,000 cash is collected",
            "A $500,000 liability",
            "$500,000 of contribution revenue with donor restrictions",
            "$500,000 of contribution revenue without donor restrictions and a receivable"
        ],

        correctAnswer: 3,

        explanation:
            "The matching barrier has been substantially overcome, so the previously conditional promise becomes recognizable. Because no separate donor restriction is stated, the contribution generally increases net assets without donor restrictions and a receivable is recognized."
    },

    {
        id: 45,
        lesson: 9,
        topic: "Promises to Give & Contribution Receivables",

        question:
            "An NFP receives an unconditional promise to give $600,000 several years in the future. The present value of the expected cash flows is $540,000, and estimated uncollectible amounts have a present-value effect of $15,000. What net contribution receivable should generally be initially reported?",

        answers: [
            "$525,000",
            "$540,000",
            "$585,000",
            "$600,000"
        ],

        correctAnswer: 0,

        explanation:
            "The receivable is measured using the present value of expected future cash flows and adjusted for estimated uncollectibility. $540,000 − $15,000 = $525,000."
    },

    {
        id: 46,
        lesson: 6,
        topic: "Expenses by Function & Nature",

        question:
            "An NFP incurs $360,000 of occupancy costs. Based on a reasonable allocation method, 65% relates to program services, 20% to management and general, and 15% to fundraising. What total amount is classified as supporting services?",

        answers: [
            "$234,000",
            "$72,000",
            "$126,000",
            "$54,000"
        ],

        correctAnswer: 2,

        explanation:
            "Supporting services consist of management and general plus fundraising. $360,000 × (20% + 15%) = $126,000."
    },

    {
        id: 47,
        lesson: 7,
        topic: "Donated Services & Noncash Contributions",

        question:
            "During the year, volunteers provide an NFP with 1,000 hours of routine clerical work valued at $20,000 and an attorney provides qualifying specialized legal services valued at $35,000 that the NFP otherwise would have purchased. Neither service creates or enhances a nonfinancial asset. What amount of contributed services should generally be recognized?",

        answers: [
            "$55,000",
            "$20,000",
            "$0",
            "$35,000"
        ],

        correctAnswer: 3,

        explanation:
            "The routine clerical work does not satisfy the recognition criteria. The specialized legal services do because they are provided by a person possessing specialized skills and otherwise would have been purchased. Therefore, $35,000 is recognized."
    },

    {
        id: 48,
        lesson: 8,
        topic: "Endowments & Investment Income",

        question:
            "A donor-restricted endowment has investments of $800,000 at the beginning of the year. During the year it earns $32,000 of dividends and has a $48,000 net investment gain. The donor requires all investment return to support future scholarships, and none is appropriated or spent during the year. Ignoring expenses, by how much do net assets with donor restrictions increase from the investment return?",

        answers: [
            "$32,000",
            "$80,000",
            "$48,000",
            "$880,000"
        ],

        correctAnswer: 1,

        explanation:
            "Total investment return is $32,000 + $48,000 = $80,000. Because the return is donor restricted for future scholarships and has not yet been used, it increases net assets with donor restrictions."
    },

    {
        id: 49,
        lesson: 5,
        topic: "Not-for-Profit Financial Statements",

        question:
            "An NFP reports beginning total net assets of $900,000. During the year it recognizes $520,000 of revenues and gains and $410,000 of expenses. Releases from donor restrictions total $75,000. Ignoring other changes, what are ending total net assets?",

        answers: [
            "$1,010,000",
            "$1,085,000",
            "$935,000",
            "$1,160,000"
        ],

        correctAnswer: 0,

        explanation:
            "Total net assets change by revenues and gains less expenses: $520,000 − $410,000 = $110,000. Releases are reclassifications between net asset classes and do not change total net assets. Ending total net assets are $900,000 + $110,000 = $1,010,000."
    },

    {
        id: 50,
        lesson: 2,
        topic: "Net Asset Classification",

        question:
            "At year-end, an NFP has total net assets of $1,500,000. Donor-restricted resources total $620,000. Of the remaining resources, the board has designated $300,000 for future expansion. What amount should be reported as net assets without donor restrictions?",

        answers: [
            "$580,000",
            "$1,180,000",
            "$880,000",
            "$300,000"
        ],

        correctAnswer: 2,

        explanation:
            "Net assets without donor restrictions equal $1,500,000 − $620,000 = $880,000. The $300,000 board designation remains within net assets without donor restrictions because it is internally imposed."
    },

    {
        id: 51,
        lesson: 3,
        topic: "Contributions & Donor Restrictions",

        question:
            "An NFP receives an unconditional $250,000 contribution restricted for construction of a community center. During the year, $190,000 of qualifying construction costs satisfy the donor restriction. What is the effect of the restriction release on the two net asset classes?",

        answers: [
            "With donor restrictions decreases $190,000 and without donor restrictions increases $190,000",
            "Both classes decrease $190,000",
            "With donor restrictions increases $190,000 and without donor restrictions decreases $190,000",
            "Total net assets increase an additional $190,000"
        ],

        correctAnswer: 0,

        explanation:
            "Satisfaction of the donor restriction produces a $190,000 reclassification from net assets with donor restrictions to net assets without donor restrictions. The release does not create additional total contribution revenue."
    },

    {
        id: 52,
        lesson: 9,
        topic: "Promises to Give & Contribution Receivables",

        question:
            "An NFP has unconditional contribution receivables with a face amount of $750,000. A $40,000 discount reflects the present-value effect of future collection, and estimated uncollectible amounts are $18,000. What net contribution receivable should be reported?",

        answers: [
            "$710,000",
            "$692,000",
            "$732,000",
            "$768,000"
        ],

        correctAnswer: 1,

        explanation:
            "Net contribution receivable is $750,000 − $40,000 discount − $18,000 estimated uncollectible amounts = $692,000."
    },

    {
        id: 53,
        lesson: 7,
        topic: "Donated Services & Noncash Contributions",

        question:
            "A licensed architect donates services with a fair value of $60,000 to design a building that an NFP is constructing for its own use. The services directly create or enhance a nonfinancial asset. What is the general accounting treatment?",

        answers: [
            "Recognize only contribution revenue of $60,000",
            "Do not recognize the services because no cash was paid",
            "Recognize contribution revenue and capitalize $60,000 as part of the building's cost",
            "Recognize a $60,000 liability"
        ],

        correctAnswer: 2,

        explanation:
            "Donated services that create or enhance a nonfinancial asset qualify for recognition. Because the services relate directly to constructing the building, the recognized amount is generally capitalized as part of the asset's cost, with corresponding contribution revenue."
    },

    {
        id: 54,
        lesson: 4,
        topic: "Conditional Contributions",

        question:
            "An NFP receives a $400,000 award requiring it to incur at least $400,000 of qualifying program expenditures, with unspent amounts subject to return. At year-end, the NFP has incurred $310,000 of qualifying expenditures. Assume the agreement permits recognition as qualifying costs are incurred. What amount of contribution revenue should generally be recognized by year-end?",

        answers: [
            "$400,000",
            "$90,000",
            "$0",
            "$310,000"
        ],

        correctAnswer: 3,

        explanation:
            "When the agreement's barrier is overcome as qualifying expenditures are incurred, the NFP generally recognizes contribution revenue as the qualifying costs are incurred. Therefore, $310,000 is recognized, while the remaining $90,000 remains conditional."
    },

    {
        id: 55,
        lesson: 5,
        topic: "Not-for-Profit Financial Statements",

        question:
            "An NFP begins the year with $700,000 of net assets without donor restrictions and $300,000 with donor restrictions. During the year, it recognizes $450,000 of unrestricted revenue, $200,000 of donor-restricted contribution revenue, $380,000 of expenses, and $120,000 of releases from restriction. What are ending net assets without donor restrictions?",

        answers: [
            "$890,000",
            "$770,000",
            "$1,090,000",
            "$590,000"
        ],

        correctAnswer: 0,

        explanation:
            "Ending net assets without donor restrictions are $700,000 + $450,000 − $380,000 + $120,000 of releases = $890,000."
    },

    {
        id: 56,
        lesson: 5,
        topic: "Not-for-Profit Financial Statements",

        question:
            "Using the same facts, beginning net assets with donor restrictions are $300,000, donor-restricted contribution revenue is $200,000, and $120,000 of restrictions are satisfied during the year. What are ending net assets with donor restrictions?",

        answers: [
            "$620,000",
            "$500,000",
            "$180,000",
            "$380,000"
        ],

        correctAnswer: 3,

        explanation:
            "Ending net assets with donor restrictions are $300,000 + $200,000 − $120,000 = $380,000."
    },

    {
        id: 57,
        lesson: 8,
        topic: "Endowments & Investment Income",

        question:
            "An NFP has a donor-restricted endowment for which the donor requires $1,000,000 to be maintained. At year-end, the fair value of the endowment investments is $940,000. Assuming applicable law and the donor agreement do not change the classification, where is the $60,000 underwater amount generally reflected?",

        answers: [
            "As a liability",
            "Within net assets with donor restrictions",
            "As a reduction of net assets without donor restrictions",
            "As an extraordinary loss outside net assets"
        ],

        correctAnswer: 1,

        explanation:
            "For a donor-restricted endowment, the underwater amount is generally reflected within net assets with donor restrictions rather than being reclassified to net assets without donor restrictions."
    },

    {
        id: 58,
        lesson: 6,
        topic: "Expenses by Function & Nature",

        question:
            "An NFP incurs salaries of $500,000, rent of $120,000, and supplies of $80,000. Of the total $700,000 of expenses, reasonable allocations assign 70% to program services, 20% to management and general, and 10% to fundraising. What amount is classified functionally as program services?",

        answers: [
            "$500,000",
            "$210,000",
            "$490,000",
            "$700,000"
        ],

        correctAnswer: 2,

        explanation:
            "Program services equal $700,000 × 70% = $490,000. Salaries, rent, and supplies are natural classifications, while program services is a functional classification."
    },

    {
        id: 59,
        lesson: 10,
        topic: "Not-for-Profit Integrated Review",

        question:
            "During the year, an NFP receives $160,000 of unrestricted contributions, $240,000 of unconditional contributions restricted for a health program, and $100,000 cash under a conditional agreement whose barrier has not been substantially overcome and that includes a right of return. The NFP also spends $90,000 on qualifying health-program costs. Ignoring other activity, what amount remains in net assets with donor restrictions from these transactions at year-end?",

        answers: [
            "$150,000",
            "$250,000",
            "$240,000",
            "$310,000"
        ],

        correctAnswer: 0,

        explanation:
            "The $240,000 restricted contribution initially increases net assets with donor restrictions. Qualifying expenditures release $90,000, leaving $150,000. The $160,000 unrestricted contribution affects net assets without donor restrictions, and the conditional $100,000 cash is generally a liability until the barrier is substantially overcome."
    },

    {
        id: 60,
        lesson: 10,
        topic: "Not-for-Profit Integrated Review",

        question:
            "An NFP begins the year with total net assets of $1,200,000. During the year it recognizes $500,000 of unconditional contribution revenue, $40,000 of qualifying donated legal services as both contribution revenue and expense, and $420,000 of other expenses. It also reports a $100,000 release from donor restrictions. Ignoring all other activity, what are ending total net assets?",

        answers: [
    "$1,220,000",
    "$1,280,000",
    "$1,380,000",
    "$1,180,000"
],

        correctAnswer: 1,

        explanation:
            "The donated legal services increase both revenue and expense by $40,000, producing no net effect on total net assets. The $100,000 release is a reclassification and also has no effect on total net assets. Ending total net assets are $1,200,000 + $500,000 − $420,000 = $1,280,000."
    },

];

// =====================================================
// FAR FINAL EXAM — GLOBAL STATE
// =====================================================

let farFinalExamQuestions = [];
let farFinalExamIndex = 0;
let farFinalExamScore = 0;
let farFinalExamSelectedAnswer = null;
let farFinalExamAnswered = false;
let farFinalExamResults = [];
let farFinalExamAnswers = [];
let farFinalExamFlags = [];

// =====================================================
// FAR FINAL EXAM — ACTIVE STATE PERSISTENCE
// =====================================================

function saveFARFinalExamState() {

    const state = {

        questions:
            farFinalExamQuestions,

        index:
            farFinalExamIndex,

        answers:
            farFinalExamAnswers,

        flags:
            farFinalExamFlags

    };

    localStorage.setItem(
        "farFinalExamActiveState",
        JSON.stringify(state)
    );

}


function loadFARFinalExamState() {

    const savedState =
        localStorage.getItem(
            "farFinalExamActiveState"
        );

    if (!savedState) {
        return false;
    }


    try {

        const state =
            JSON.parse(savedState);


        if (
            !state ||
            !Array.isArray(state.questions) ||
            state.questions.length !== 50 ||
            !Array.isArray(state.answers) ||
            state.answers.length !==
                state.questions.length ||
            !Array.isArray(state.flags) ||
            state.flags.length !==
                state.questions.length
        ) {

            clearFARFinalExamState();

            return false;

        }


        farFinalExamQuestions =
            state.questions;


        farFinalExamIndex =
            Number.isInteger(state.index)
                ? Math.max(
                    0,
                    Math.min(
                        state.index,
                        state.questions.length - 1
                    )
                )
                : 0;


        farFinalExamAnswers =
            state.answers;


        farFinalExamFlags =
            state.flags;


        farFinalExamScore = 0;

        farFinalExamSelectedAnswer =
            farFinalExamAnswers[
                farFinalExamIndex
            ];

        farFinalExamAnswered = false;

        farFinalExamResults = [];


        return true;

    } catch (error) {

        clearFARFinalExamState();

        return false;

    }

}


function clearFARFinalExamState() {

    localStorage.removeItem(
        "farFinalExamActiveState"
    );

}


const farModule6Questions = [

    // =====================================================
    // QUESTION 1 — ACCRUED EXPENSE
    // =====================================================
    {
        lessonId: 1,

        question:
            "At December 31, a company has $24,000 of salaries that have been incurred by employees but have not been recorded or paid. What is the effect of recording the required adjusting entry?",

        answers: [
            "Assets decrease and liabilities decrease",
            "Liabilities increase and net income decreases",
            "Liabilities decrease and net income increases",
            "Assets increase and net income increases"
        ],

        correctAnswer: 1,

        explanation:
            "The company records a debit to Salaries Expense and a credit to Salaries Payable for $24,000. The liability increases and the additional expense decreases net income."
    },


    // =====================================================
    // QUESTION 2 — REVENUE / CONTRACT LIABILITY
    // =====================================================
    {
        lessonId: 2,

        question:
            "On October 1, a company receives $48,000 in advance for 12 months of service beginning immediately. Assuming the performance obligation is satisfied evenly over time, how much revenue should be recognized through December 31?",

        answers: [
            "$48,000",
            "$16,000",
            "$12,000",
            "$36,000"
        ],

        correctAnswer: 2,

        explanation:
            "Monthly revenue is $48,000 ÷ 12 = $4,000. Three months of service have been provided from October through December, so revenue recognized is $12,000. The remaining $36,000 remains a contract liability."
    },


    // =====================================================
    // QUESTION 3 — INVENTORY ERROR
    // =====================================================
    {
        lessonId: 3,

        question:
            "A company's ending inventory is understated by $35,000. What effect does the error have on the current year's cost of goods sold and net income?",

        answers: [
            "COGS is overstated by $35,000 and net income is understated by $35,000",
            "COGS is understated by $35,000 and net income is overstated by $35,000",
            "Both COGS and net income are understated by $35,000",
            "Both COGS and net income are overstated by $35,000"
        ],

        correctAnswer: 0,

        explanation:
            "COGS = beginning inventory + purchases − ending inventory. If ending inventory is understated, too little is subtracted, causing COGS to be overstated. Higher COGS causes net income to be understated by the same amount."
    },


    // =====================================================
    // QUESTION 4 — BOND EFFECTIVE INTEREST
    // =====================================================
    {
        lessonId: 4,

        question:
            "A bond has a face amount of $600,000, a stated annual rate of 5%, a beginning carrying amount of $570,000, and an effective annual rate of 7%. What is interest expense for the year under the effective-interest method?",

        answers: [
            "$30,000",
            "$42,000",
            "$39,900",
            "$28,500"
        ],

        correctAnswer: 2,

        explanation:
            "Interest expense equals the beginning carrying amount multiplied by the effective rate: $570,000 × 7% = $39,900. The $30,000 cash interest is based on the face amount multiplied by the stated rate."
    },


    // =====================================================
    // QUESTION 5 — TREASURY STOCK
    // =====================================================
    {
        lessonId: 5,

        question:
            "A corporation reacquires 5,000 shares of its own common stock for $18 per share and accounts for treasury stock using the cost method. What is the immediate effect of the purchase?",

        answers: [
            "Assets decrease by $90,000 and total stockholders' equity decreases by $90,000",
            "Assets increase by $90,000 and equity decreases by $90,000",
            "Net income decreases by $90,000",
            "A $90,000 investment asset is recognized"
        ],

        correctAnswer: 0,

        explanation:
            "The corporation pays $90,000 cash and records treasury stock at cost. Cash decreases by $90,000 and treasury stock, a contra-equity account, reduces total stockholders' equity by $90,000. The purchase does not create an expense."
    },


    // =====================================================
    // QUESTION 6 — ACCOUNTING ESTIMATE
    // =====================================================
    {
        lessonId: 6,

        question:
            "Based on new information, a company changes the estimated remaining useful life of equipment from six years to four years. How should the change generally be accounted for?",

        answers: [
            "As an error correction",
            "Retrospectively for all prior periods",
            "As a direct adjustment to additional paid-in capital",
            "Prospectively as a change in accounting estimate"
        ],

        correctAnswer: 3,

        explanation:
            "A revision of useful life based on new information is a change in accounting estimate. Changes in estimates are accounted for prospectively in the current and future periods affected."
    },


    // =====================================================
    // QUESTION 7 — GOVERNMENTAL FUND
    // =====================================================
    {
        lessonId: 7,

        question:
            "Which measurement focus and basis of accounting are used by governmental funds?",

        answers: [
            "Economic resources and cash basis",
            "Current financial resources and modified accrual",
            "Economic resources and modified accrual",
            "Current financial resources and full accrual"
        ],

        correctAnswer: 1,

        explanation:
            "Governmental funds use the current financial resources measurement focus and the modified accrual basis of accounting."
    },


    // =====================================================
    // QUESTION 8 — NFP CONDITION
    // =====================================================
    {
        lessonId: 8,

        question:
            "An NFP receives $200,000 cash under an agreement requiring it to achieve a specified measurable outcome. The donor has the right to require repayment if the barrier is not overcome. The barrier has not yet been overcome. How should the NFP generally report the cash received?",

        answers: [
            "Contribution revenue without donor restrictions",
            "Contribution revenue with donor restrictions",
            "An increase in permanent endowment net assets",
            "A liability rather than contribution revenue"
        ],

        correctAnswer: 3,


            explanation:
    "The agreement contains a barrier and a right of return, making the contribution conditional. Because the cash has been received before the barrier has been substantially overcome, the NFP generally recognizes a liability rather than contribution revenue."
    },


    // =====================================================
    // QUESTION 9 — CASH FLOW
    // =====================================================
    {
        lessonId: 9,

        question:
            "Under the indirect method of presenting operating cash flows, how is an increase in accounts receivable generally treated in reconciling net income to net cash provided by operating activities?",

        answers: [
            "Added to net income",
            "Reported as an investing outflow",
            "Subtracted from net income",
            "Reported as a financing outflow"
        ],

        correctAnswer: 2,

        explanation:
            "An increase in accounts receivable generally means that recognized revenue exceeded cash collected from customers. Therefore, the increase is subtracted from net income in the operating section under the indirect method."
    },


    // =====================================================
    // QUESTION 10 — INTEGRATED ADJUSTMENTS
    // =====================================================
    {
        lessonId: 10,

        question:
            "A company reports preliminary net income of $250,000. Unrecorded adjustments include $18,000 of accrued expenses, $12,000 of accrued revenue, and $20,000 of depreciation expense. What is corrected net income?",

        answers: [
            "$224,000",
            "$220,000",
            "$280,000",
            "$260,000"
        ],

        correctAnswer: 0,

        explanation:
            "Corrected net income is $250,000 − $18,000 + $12,000 − $20,000 = $224,000."
    },


    // =====================================================
    // QUESTION 11 — CREDIT LOSSES
    // =====================================================
    {
        lessonId: 2,

        question:
            "Before adjustment, the Allowance for Credit Losses has a $3,000 credit balance. The required ending balance is $14,000. What amount of credit loss expense should be recognized?",

        answers: [
            "$17,000",
            "$14,000",
            "$3,000",
            "$11,000"
        ],

        correctAnswer: 3,

        explanation:
            "The allowance already has a $3,000 credit balance and must end at $14,000. Therefore, an additional $11,000 credit to the allowance is required, with corresponding credit loss expense of $11,000."
    },


    // =====================================================
    // QUESTION 12 — PP&E COST
    // =====================================================
    {
        lessonId: 3,

        question:
            "A company purchases equipment for $180,000, pays $8,000 for delivery, and pays $12,000 for installation necessary to place the equipment into service. What amount should generally be capitalized as the equipment's initial cost?",

        answers: [
            "$180,000",
            "$188,000",
            "$200,000",
            "$192,000"
        ],

        correctAnswer: 2,

        explanation:
            "The capitalized cost generally includes the purchase price and costs necessary to bring the asset to the location and condition required for its intended use. Therefore, $180,000 + $8,000 + $12,000 = $200,000."
    },


    // =====================================================
    // QUESTION 13 — LOSS CONTINGENCY
    // =====================================================
    {
        lessonId: 4,

        question:
            "A company concludes that a loss from pending litigation is probable. The estimated loss is between $80,000 and $120,000, and no amount within the range is a better estimate than another. Under U.S. GAAP, what amount should generally be accrued?",

        answers: [
            "$80,000",
            "$100,000",
            "$120,000",
            "$0"
        ],

        correctAnswer: 0,

        explanation:
            "When a loss is probable and a range can be reasonably estimated but no amount within the range is a better estimate than another, U.S. GAAP generally requires accrual of the minimum amount in the range, which is $80,000, with appropriate disclosure."
    },


    // =====================================================
    // QUESTION 14 — EQUITY METHOD
    // =====================================================
    {
        lessonId: 5,

        question:
            "An investor owns 25% of an investee and appropriately applies the equity method. The investee reports $160,000 of net income and pays total dividends of $40,000. Ignoring other adjustments, by how much does the investor's investment account increase?",

        answers: [
            "$40,000",
            "$10,000",
            "$50,000",
            "$30,000"
        ],

        correctAnswer: 3,

        explanation:
            "The investor recognizes 25% of $160,000, or $40,000, as equity-method income. Its 25% share of the $40,000 dividends is $10,000, which reduces the investment account. Net increase = $40,000 − $10,000 = $30,000."
    },


    // =====================================================
    // QUESTION 15 — SUBSEQUENT EVENT
    // =====================================================
    {
        lessonId: 6,

        question:
            "Shortly after year-end but before the financial statements are issued, a major customer files for bankruptcy. Evidence indicates that the customer's severe financial difficulties existed at year-end. How should the event generally be treated?",

        answers: [
            "Ignore the event because bankruptcy occurred after year-end",
            "Adjust the year-end financial statements because the event provides additional evidence about a condition existing at year-end",
            "Recognize the loss only in the following year",
            "Record the bankruptcy directly in stockholders' equity"
        ],

        correctAnswer: 1,

        explanation:
            "The bankruptcy provides additional evidence about a condition that existed at the balance-sheet date. It is therefore generally a recognized subsequent event requiring adjustment of the year-end financial statements."
    },


    // =====================================================
    // QUESTION 16 — GOVERNMENT CAPITAL ASSET
    // =====================================================
    {
        lessonId: 7,

        question:
            "A city's General Fund purchases equipment for $400,000. How is the purchase generally reported in the governmental fund financial statements?",

        answers: [
            "As a $400,000 capital asset",
            "As a $400,000 capital outlay expenditure",
            "As depreciation expense over the equipment's useful life",
            "As an other financing use only"
        ],

        correctAnswer: 1,

        explanation:
            "Governmental funds use the current financial resources measurement focus. A purchase of a general capital asset is generally reported as a capital outlay expenditure in the governmental fund statements. The asset is capitalized at the government-wide level."
    },


    // =====================================================
    // QUESTION 17 — NFP DONATED SERVICES
    // =====================================================
    {
        lessonId: 8,

        question:
            "An attorney donates legal services with a fair value of $30,000 to an NFP. The attorney possesses specialized skills, and the NFP would otherwise have purchased the services. How should the NFP generally account for the services?",

        answers: [
            "Recognize both contribution revenue and legal expense of $30,000",
            "Recognize contribution revenue but no expense",
            "Recognize expense but no contribution revenue",
            "Do not recognize the services because no cash was paid"
        ],

        correctAnswer: 0,

        explanation:
            "The services meet the recognition criteria because they require specialized skills, are provided by someone possessing those skills, and would otherwise have been purchased. The NFP generally recognizes contribution revenue and an equal amount of expense."
    },


    // =====================================================
    // QUESTION 18 — SALE OF EQUIPMENT
    // =====================================================
    {
        lessonId: 9,

        question:
            "Equipment originally costing $120,000 with accumulated depreciation of $75,000 is sold for $52,000 cash. What gain or loss should be recognized?",

        answers: [
            "$68,000 gain",
            "$7,000 loss",
            "$7,000 gain",
            "$45,000 gain"
        ],

        correctAnswer: 2,

        explanation:
            "The carrying amount is $120,000 − $75,000 = $45,000. Because the equipment is sold for $52,000, the company recognizes a $7,000 gain."
    },


    // =====================================================
    // QUESTION 19 — DEPRECIATION
    // =====================================================
    {
        lessonId: 3,

        question:
            "Equipment costs $340,000, has an estimated residual value of $40,000, and has a 10-year useful life. What is annual straight-line depreciation?",

        answers: [
            "$30,000",
            "$34,000",
            "$38,000",
            "$40,000"
        ],

        correctAnswer: 0,

        explanation:
            "Straight-line depreciation is ($340,000 − $40,000) ÷ 10 = $30,000 per year."
    },


    // =====================================================
    // QUESTION 20 — AFS DEBT SECURITY
    // =====================================================
    {
        lessonId: 5,

        question:
            "Ignoring credit-loss considerations, where is an unrealized holding gain on an available-for-sale debt security generally reported?",

        answers: [
            "Directly in retained earnings without passing through comprehensive income",
            "In other comprehensive income",
            "As additional paid-in capital",
            "As a financing cash inflow"
        ],

        correctAnswer: 1,

        explanation:
            "Available-for-sale debt securities are generally measured at fair value, with unrealized holding gains and losses reported in other comprehensive income, subject to applicable credit-loss guidance."
    },


    // =====================================================
    // QUESTION 21 — CURRENT RATIO
    // =====================================================
    {
        lessonId: 1,

        question:
            "A company has current assets of $360,000 and current liabilities of $240,000. It pays $60,000 of accounts payable with cash. What is the current ratio immediately after the payment?",

        answers: [
            "1.25",
            "1.50",
            "1.67",
            "2.00"
        ],

        correctAnswer: 2,

        explanation:
            "After the payment, current assets are $300,000 and current liabilities are $180,000. The current ratio is $300,000 ÷ $180,000 = approximately 1.67."
    },


    // =====================================================
    // QUESTION 22 — REVENUE / RECEIVABLES
    // =====================================================
    {
        lessonId: 2,

        question:
            "A company begins the year with accounts receivable of $70,000 and ends the year with accounts receivable of $95,000. All $600,000 of the year's revenue was earned on account, and there were no write-offs or other adjustments. How much cash was collected from customers?",

        answers: [
            "$625,000",
            "$575,000",
            "$600,000",
            "$505,000"
        ],

        correctAnswer: 1,

        explanation:
            "Beginning AR + credit sales − collections = ending AR. Therefore, $70,000 + $600,000 − collections = $95,000. Collections equal $575,000."
    },


    // =====================================================
    // QUESTION 23 — LONG-LIVED ASSET IMPAIRMENT
    // =====================================================
    {
        lessonId: 3,

        question:
            "A long-lived asset held and used has a carrying amount of $700,000, expected undiscounted future cash flows of $620,000, and fair value of $550,000. Under U.S. GAAP, what impairment loss should generally be recognized?",

        answers: [
            "$80,000",
            "$150,000",
            "$70,000",
            "$0"
        ],

        correctAnswer: 1,

        explanation:
            "Because the carrying amount of $700,000 exceeds the undiscounted expected future cash flows of $620,000, the asset fails the recoverability test. The impairment loss is generally $700,000 − $550,000 fair value = $150,000."
    },


    // =====================================================
    // QUESTION 24 — BOND DISCOUNT
    // =====================================================
    {
        lessonId: 4,

        question:
            "For a bond issued at a discount and accounted for using the effective-interest method, which statement is generally correct as the bond approaches maturity?",

        answers: [
            "The carrying amount decreases toward zero",
            "The carrying amount remains unchanged",
            "The carrying amount increases toward face value",
            "The face value decreases toward the carrying amount"
        ],

        correctAnswer: 2,

        explanation:
            "Amortization of a bond discount increases the bond's carrying amount over time until it approaches face value at maturity."
    },


    // =====================================================
    // QUESTION 25 — CASH DIVIDEND
    // =====================================================
    {
        lessonId: 5,

        question:
            "What is the effect when a corporation declares a cash dividend?",

        answers: [
            "Assets decrease and liabilities decrease",
            "Net income decreases and cash decreases immediately",
            "Retained earnings increases and liabilities decrease",
            "Retained earnings decreases and liabilities increase"
        ],

        correctAnswer: 3,

        explanation:
            "At declaration, the corporation generally reduces retained earnings and recognizes a dividends payable liability. Cash is not reduced until the dividend is paid."
    },


    // =====================================================
    // QUESTION 26 — CHANGE IN PRINCIPLE
    // =====================================================
    {
        lessonId: 6,

        question:
            "A company voluntarily changes from one acceptable inventory accounting principle to another acceptable principle. Assuming retrospective application is practicable and no specific exception applies, how is the change generally reported?",

        answers: [
            "Retrospectively",
            "Prospectively only",
            "As an extraordinary item",
            "As a correction of an accounting error"
        ],

        correctAnswer: 0,

        explanation:
            "A change from one generally accepted accounting principle to another is generally accounted for retrospectively unless an exception applies or retrospective application is impracticable."
    },


    // =====================================================
    // QUESTION 27 — GOVERNMENT BOND PROCEEDS
    // =====================================================
    {
        lessonId: 7,

        question:
            "A governmental fund receives $3,000,000 from issuing general long-term bonds. How are the proceeds generally reported in the governmental fund?",

        answers: [
            "Revenue",
            "Other financing source",
            "Long-term liability",
            "Deferred inflow of resources"
        ],

        correctAnswer: 1,

        explanation:
            "Governmental funds generally report proceeds from issuing general long-term debt as an other financing source. The related long-term liability is reported at the government-wide level."
    },


    // =====================================================
    // QUESTION 28 — NFP RELEASE
    // =====================================================
    {
        lessonId: 8,

        question:
            "An NFP previously recognized a $90,000 contribution with a donor restriction for a qualifying program. During the current year, it spends $35,000 in satisfaction of that restriction. What generally occurs with respect to the $35,000?",

        answers: [
            "A new $35,000 contribution is recognized",
            "The original contribution is reversed",
            "A $35,000 liability is recognized",
            "$35,000 is reclassified from net assets with donor restrictions to net assets without donor restrictions"
        ],

        correctAnswer: 3,

        explanation:
            "Satisfying a donor restriction generally causes a reclassification from net assets with donor restrictions to net assets without donor restrictions. It does not create new contribution revenue."
    },


    // =====================================================
    // QUESTION 29 — INDIRECT CASH FLOW
    // =====================================================
    {
        lessonId: 9,

        question:
            "A company reports net income of $180,000, depreciation expense of $25,000, an increase in accounts receivable of $14,000, and an increase in accounts payable of $9,000. Ignoring all other adjustments, what is net cash provided by operating activities under the indirect method?",

        answers: [
            "$228,000",
            "$190,000",
            "$172,000",
            "$200,000"
        ],

        correctAnswer: 3,

        explanation:
            "Operating cash flow is $180,000 + $25,000 − $14,000 + $9,000 = $200,000."
    },


    // =====================================================
    // QUESTION 30 — ACCOUNTING EQUATION
    // =====================================================
    {
        lessonId: 10,

        question:
            "A company records $40,000 of revenue earned on account. What is the immediate effect of the transaction?",

        answers: [
            "Assets increase $40,000 and equity increases $40,000",
            "Assets increase $40,000 and liabilities increase $40,000",
            "Cash increases $40,000 and liabilities decrease $40,000",
            "Assets remain unchanged and equity increases $40,000"
        ],

        correctAnswer: 0,

        explanation:
            "Revenue earned on account increases accounts receivable, an asset, by $40,000. Revenue also increases net income and ultimately equity by $40,000."
    },


    // =====================================================
    // QUESTION 31 — UNEARNED REVENUE ADJUSTMENT
    // =====================================================
    {
        lessonId: 1,

        question:
            "Before adjustment, a company's contract liability balance is $72,000. At year-end, $28,000 of the related services have been provided. What adjusting effect is required?",

        answers: [
            "Increase the liability by $28,000 and decrease revenue by $28,000",
            "Decrease the liability by $28,000 and increase revenue by $28,000",
            "Increase accounts receivable and revenue by $28,000",
            "Decrease cash and increase expense by $28,000"
        ],

        correctAnswer: 1,

        explanation:
            "As the company satisfies its performance obligation, it recognizes revenue and reduces the contract liability. Therefore, the liability decreases by $28,000 and revenue increases by $28,000."
    },


    // =====================================================
    // QUESTION 32 — AR WRITE-OFF
    // =====================================================
    {
        lessonId: 2,

        question:
            "Under the allowance method, what is the effect of writing off a specific customer account that has been determined to be uncollectible?",

        answers: [
            "Credit loss expense increases and net receivables decrease",
            "Revenue decreases and gross receivables remain unchanged",
            "Gross accounts receivable and the allowance both decrease, with no immediate effect on net receivables",
            "The allowance increases and net income decreases"
        ],

        correctAnswer: 2,

        explanation:
            "A write-off debits the allowance and credits accounts receivable. Both gross receivables and the allowance decrease by the same amount, so net accounts receivable and current-period net income are not immediately affected."
    },


    // =====================================================
    // QUESTION 33 — INTANGIBLE ASSET
    // =====================================================
    {
        lessonId: 3,

        question:
            "Which statement generally describes the subsequent accounting for an intangible asset with an indefinite useful life under U.S. GAAP?",

        answers: [
            "It is amortized over 40 years",
            "It is not amortized but is subject to impairment testing",
            "It is immediately expensed when acquired",
            "It is amortized using the effective-interest method"
        ],

        correctAnswer: 1,

        explanation:
            "An indefinite-lived intangible asset is generally not amortized. Instead, it is subject to the applicable impairment testing requirements."
    },


    // =====================================================
    // QUESTION 34 — DEBT EXTINGUISHMENT
    // =====================================================
    {
        lessonId: 4,

        question:
            "A company extinguishes debt with a carrying amount of $820,000 by paying the creditor $790,000. Ignoring transaction costs, what should the company recognize?",

        answers: [
            "$30,000 gain",
            "$30,000 loss",
            "$790,000 gain",
            "No gain or loss"
        ],

        correctAnswer: 0,

        explanation:
            "The carrying amount removed is $820,000 and the reacquisition price is $790,000. Because the company pays $30,000 less than the carrying amount, it recognizes a $30,000 gain on extinguishment."
    },


    // =====================================================
    // QUESTION 35 — STOCK ISSUANCE
    // =====================================================
    {
        lessonId: 5,

        question:
            "A corporation issues 20,000 shares of $5 par common stock for $14 per share. How much should generally be credited to additional paid-in capital?",

        answers: [
            "$100,000",
            "$180,000",
            "$280,000",
            "$380,000"
        ],

        correctAnswer: 1,

        explanation:
            "Cash received is 20,000 × $14 = $280,000. Common stock is credited for par value of 20,000 × $5 = $100,000. The remaining $180,000 is credited to additional paid-in capital."
    },


    // =====================================================
    // QUESTION 36 — NONRECOGNIZED SUBSEQUENT EVENT
    // =====================================================
    {
        lessonId: 6,

        question:
            "After year-end but before issuance of the financial statements, a company's factory is destroyed by a fire caused by an event that arose entirely after year-end. The loss is material. What is the general financial reporting treatment?",

        answers: [
            "Adjust the year-end asset balance and recognize the loss in the year-end statements",
            "Ignore the event completely",
            "Do not adjust the year-end amounts, but disclose the material subsequent event as appropriate",
            "Record the loss directly in beginning retained earnings"
        ],

        correctAnswer: 2,

        explanation:
            "Because the underlying condition arose after the balance-sheet date, the fire is generally a nonrecognized subsequent event. The year-end amounts are not adjusted, but a material event may require disclosure."
    },


    // =====================================================
    // QUESTION 37 — GOVERNMENTAL REVENUE
    // =====================================================
    {
        lessonId: 7,

        question:
            "For governmental funds using modified accrual accounting, revenue generally must meet which criteria for recognition?",

        answers: [
            "Earned and collected in cash",
            "Realized and realizable only",
            "Probable and reasonably estimable",
            "Measurable and available"
        ],

        correctAnswer: 3,

        explanation:
            "Under modified accrual accounting, governmental fund revenue is generally recognized when it is measurable and available to finance expenditures of the current period."
    },


    // =====================================================
    // QUESTION 38 — NFP BOARD DESIGNATION
    // =====================================================
    {
        lessonId: 8,

        question:
            "An NFP's board designates $500,000 of otherwise unrestricted resources for a future building project. How are those resources generally classified?",

        answers: [
            "Net assets without donor restrictions",
            "Net assets with donor restrictions",
            "A liability",
            "Deferred contribution revenue"
        ],

        correctAnswer: 0,

        explanation:
            "A board designation is an internal limitation and is not a donor-imposed restriction. Therefore, the resources generally remain classified as net assets without donor restrictions."
    },


    // =====================================================
    // QUESTION 39 — SALE OF EQUIPMENT / CASH FLOW
    // =====================================================
    {
        lessonId: 9,

        question:
            "Equipment with a carrying amount of $60,000 is sold for $75,000 cash. Under the indirect method, how should the $15,000 gain and the $75,000 cash proceeds generally be reflected in the statement of cash flows?",

        answers: [
            "Add the $15,000 gain to operating cash flow and report no investing activity",
            "Subtract the $15,000 gain in the operating reconciliation and report $75,000 as an investing inflow",
            "Report the entire $75,000 as an operating inflow",
            "Report $60,000 as investing and $15,000 as financing"
        ],

        correctAnswer: 1,

        explanation:
            "The gain is included in net income but is removed from the operating reconciliation under the indirect method. The full $75,000 of cash proceeds from selling the equipment is reported as an investing cash inflow."
    },


    // =====================================================
    // QUESTION 40 — FINAL INTEGRATED QUESTION
    // =====================================================
    {
        lessonId: 10,

        question:
            "A company reports preliminary net income of $420,000. Ending inventory is overstated by $18,000, accrued salaries of $12,000 were omitted, and accrued service revenue of $9,000 was omitted. What is corrected net income?",

        answers: [
            "$435,000",
            "$399,000",
            "$381,000",
            "$417,000"
        ],

        correctAnswer: 1,

        explanation:
            "Overstated ending inventory causes COGS to be understated and preliminary net income to be overstated by $18,000, so subtract $18,000. Omitted accrued salaries require another $12,000 reduction. Omitted accrued revenue increases income by $9,000. Corrected net income = $420,000 − $18,000 − $12,000 + $9,000 = $399,000."
    },

// =====================================================
// QUESTION 41 — INTEGRATED ACCRUAL ADJUSTMENTS
// =====================================================
{
    lessonId: 10,

    question:
        "A company reports preliminary net income of $640,000. The following items have not yet been recorded: $28,000 of accrued salaries, $36,000 of services performed but not yet billed, $22,000 of depreciation expense, and a $15,000 probable and reasonably estimable litigation loss. In addition, ending inventory is overstated by $12,000. What is corrected net income?",

    answers: [
        "$599,000",
        "$623,000",
        "$611,000",
        "$587,000"
    ],

    correctAnswer: 0,

    explanation:
        "Start with $640,000. Accrued salaries reduce income by $28,000, accrued revenue increases income by $36,000, depreciation reduces income by $22,000, the litigation loss reduces income by $15,000, and overstated ending inventory causes preliminary income to be overstated by $12,000. Corrected net income = $640,000 − $28,000 + $36,000 − $22,000 − $15,000 − $12,000 = $599,000."
},


// =====================================================
// QUESTION 42 — AR, WRITE-OFFS & CASH COLLECTIONS
// =====================================================
{
    lessonId: 2,

    question:
        "A company begins the year with gross accounts receivable of $150,000. During the year, it records $900,000 of credit sales, collects $840,000 from customers, and writes off $18,000 of accounts as uncollectible. What is ending gross accounts receivable?",

    answers: [
        "$210,000",
        "$174,000",
        "$192,000",
        "$228,000"
    ],

    correctAnswer: 2,

    explanation:
        "Ending gross accounts receivable = $150,000 beginning AR + $900,000 credit sales − $840,000 collections − $18,000 write-offs = $192,000."
},


// =====================================================
// QUESTION 43 — ALLOWANCE FOR CREDIT LOSSES
// =====================================================
{
    lessonId: 2,

    question:
        "Before year-end adjustment, the Allowance for Credit Losses has a $6,000 debit balance. The company determines that a $31,000 credit balance is required at year-end. What amount of credit loss expense should be recognized?",

    answers: [
        "$25,000",
        "$31,000",
        "$6,000",
        "$37,000"
    ],

    correctAnswer: 3,

    explanation:
        "The allowance must move from a $6,000 debit balance to a $31,000 credit balance. Therefore, a $37,000 credit to the allowance is required, with corresponding credit loss expense of $37,000."
},


// =====================================================
// QUESTION 44 — INVENTORY ERROR ACROSS TWO YEARS
// =====================================================
{
    lessonId: 3,

    question:
        "Year 1 ending inventory was understated by $45,000, and the error was not discovered until after Year 2 financial statements were prepared. Assume Year 2 ending inventory is correct and no correcting entry was made during Year 2. What is the effect of the error on net income in Year 1 and Year 2?",

    answers: [
        "Year 1 understated $45,000; Year 2 overstated $45,000",
        "Year 1 overstated $45,000; Year 2 understated $45,000",
        "Both years understated $45,000",
        "Year 1 understated $45,000; Year 2 unaffected"
    ],

    correctAnswer: 0,

    explanation:
        "Understated Year 1 ending inventory overstates Year 1 COGS and understates Year 1 net income by $45,000. That understated ending inventory becomes understated Year 2 beginning inventory, which understates Year 2 COGS and overstates Year 2 net income by $45,000, assuming Year 2 ending inventory is correct."
},


// =====================================================
// QUESTION 45 — PP&E CAPITALIZATION + DEPRECIATION
// =====================================================
{
    lessonId: 3,

    question:
        "A company purchases equipment for $420,000 and pays $15,000 for delivery, $25,000 for installation, and $8,000 for routine maintenance during the first year. The equipment has a $40,000 residual value and a 10-year useful life. Using straight-line depreciation, what depreciation expense should be recognized for a full year?",

    answers: [
        "$46,800",
        "$42,000",
        "$42,800",
        "$38,000"
    ],

    correctAnswer: 1,

    explanation:
        "Capitalized cost is $420,000 + $15,000 + $25,000 = $460,000. Routine maintenance is expensed rather than capitalized. Straight-line depreciation = ($460,000 − $40,000) ÷ 10 = $42,000."
},


// =====================================================
// QUESTION 46 — LONG-LIVED ASSET IMPAIRMENT
// =====================================================
{
    lessonId: 3,

    question:
        "A long-lived asset held and used has a carrying amount of $900,000, expected undiscounted future cash flows of $840,000, and fair value of $710,000. What impairment loss should generally be recognized under U.S. GAAP?",

    answers: [
        "$60,000",
        "$130,000",
        "$190,000",
        "$0"
    ],

    correctAnswer: 2,

    explanation:
        "Because the $900,000 carrying amount exceeds the $840,000 undiscounted expected future cash flows, the asset is not recoverable. The impairment loss is generally measured as carrying amount minus fair value: $900,000 − $710,000 = $190,000."
},


// =====================================================
// QUESTION 47 — BOND EFFECTIVE INTEREST
// =====================================================
{
    lessonId: 4,

    question:
        "A $1,000,000 bond has a stated annual interest rate of 6% and was issued at a discount. At the beginning of the current year, its carrying amount is $940,000 and its effective annual interest rate is 8%. What is the bond's carrying amount immediately after the current year's interest payment and discount amortization?",

    answers: [
        "$955,200",
        "$924,800",
        "$1,015,200",
        "$940,000"
    ],

    correctAnswer: 0,

    explanation:
        "Interest expense = $940,000 × 8% = $75,200. Cash interest = $1,000,000 × 6% = $60,000. Discount amortization = $15,200, which increases the carrying amount. Ending carrying amount = $940,000 + $15,200 = $955,200."
},


// =====================================================
// QUESTION 48 — BOND PREMIUM
// =====================================================
{
    lessonId: 4,

    question:
        "A $800,000 bond has a stated annual rate of 9%, a beginning carrying amount of $850,000, and an effective annual rate of 7%. What is the ending carrying amount after one year of effective-interest amortization?",

    answers: [
        "$837,500",
        "$862,500",
        "$790,500",
        "$849,500"
    ],

    correctAnswer: 0,

    explanation:
        "Cash interest = $800,000 × 9% = $72,000. Interest expense = $850,000 × 7% = $59,500. Premium amortization = $72,000 − $59,500 = $12,500. Ending carrying amount = $850,000 − $12,500 = $837,500."
},


// =====================================================
// QUESTION 49 — LOSS CONTINGENCY RANGE
// =====================================================
{
    lessonId: 4,

    question:
        "A company concludes that a litigation loss is probable. The reasonably estimated loss range is $250,000 to $400,000, and $325,000 is a better estimate than any other amount within the range. Under U.S. GAAP, what amount should generally be accrued?",

    answers: [
        "$250,000",
        "$400,000",
        "$325,000",
        "$0"
    ],

    correctAnswer: 2,

    explanation:
        "When one amount within a probable and reasonably estimable loss range is a better estimate than the other amounts, that best estimate is accrued. Therefore, the company generally accrues $325,000."
},


// =====================================================
// QUESTION 50 — EQUITY METHOD
// =====================================================
{
    lessonId: 5,

    question:
        "An investor appropriately applies the equity method to a 30% investment. The investment account has a beginning balance of $500,000. During the year, the investee reports $240,000 of net income and pays total dividends of $80,000. Ignoring other adjustments, what is the investor's ending investment balance?",

    answers: [
        "$548,000",
        "$572,000",
        "$476,000",
        "$596,000"
    ],

    correctAnswer: 0,

    explanation:
        "The investor recognizes 30% of $240,000 = $72,000 of investee income, increasing the investment. Its share of dividends is 30% of $80,000 = $24,000, reducing the investment. Ending balance = $500,000 + $72,000 − $24,000 = $548,000."
},


// =====================================================
// QUESTION 51 — NET INCOME & OCI
// =====================================================
{
    lessonId: 5,

    question:
        "A company reports net income of $420,000. During the year, it also recognizes a $35,000 unrealized holding gain in OCI on an available-for-sale debt security, ignoring taxes and credit-loss considerations. What is comprehensive income?",

    answers: [
        "$385,000",
        "$420,000",
        "$455,000",
        "$35,000"
    ],

    correctAnswer: 2,

    explanation:
        "Comprehensive income equals net income plus other comprehensive income. Therefore, comprehensive income = $420,000 + $35,000 = $455,000."
},


// =====================================================
// QUESTION 52 — ACCOUNTING ESTIMATE
// =====================================================
{
    lessonId: 6,

    question:
        "Equipment originally cost $300,000 and has accumulated depreciation of $120,000 when management revises its remaining useful life to six years and estimates a $12,000 residual value. What annual straight-line depreciation should generally be recognized prospectively?",

    answers: [
        "$30,000",
        "$28,000",
        "$48,000",
        "$32,000"
    ],

    correctAnswer: 1,

    explanation:
        "The carrying amount at the date of change is $300,000 − $120,000 = $180,000. The revised depreciable amount is $180,000 − $12,000 = $168,000. Because the change in useful life and residual value is accounted for prospectively, annual depreciation = $168,000 ÷ 6 = $28,000."
},


// =====================================================
// QUESTION 53 — SUBSEQUENT EVENT + RECEIVABLE
// =====================================================
{
    lessonId: 6,

    question:
        "At December 31, a company has a $160,000 receivable from a customer. Before the financial statements are issued, the customer declares bankruptcy. Evidence shows the customer's severe financial deterioration existed before December 31, and only $25,000 of the receivable is now expected to be collected. Ignoring an existing allowance balance, what loss should generally be reflected in the December 31 financial statements?",

    answers: [
        "$25,000",
        "$160,000",
        "$135,000",
        "$0"
    ],

    correctAnswer: 2,

    explanation:
        "The bankruptcy provides additional evidence about a condition that existed at year-end, so the year-end financial statements are adjusted. If only $25,000 of the $160,000 receivable is expected to be collected, the required loss is $160,000 − $25,000 = $135,000."
},


// =====================================================
// QUESTION 54 — GOVERNMENTAL FUND INTEGRATED
// =====================================================
{
    lessonId: 7,

    question:
        "A city's General Fund issues $1,500,000 of general long-term bonds and immediately uses $600,000 of the proceeds to purchase equipment for governmental activities. Ignoring other transactions, which combination is generally reported in the General Fund?",

    answers: [
        "$1,500,000 revenue and a $600,000 capital asset",
        "$1,500,000 other financing source and a $600,000 capital outlay expenditure",
        "$1,500,000 long-term liability and $600,000 depreciation expense",
        "$900,000 net revenue and a $600,000 capital asset"
    ],

    correctAnswer: 1,

    explanation:
        "At the governmental fund level, general long-term bond proceeds are generally reported as an other financing source, while the acquisition of a general capital asset is reported as a capital outlay expenditure. The long-term debt and capital asset are reported at the government-wide level."
},


// =====================================================
// QUESTION 55 — GOVERNMENT-WIDE CONVERSION
// =====================================================
{
    lessonId: 7,

    question:
        "A governmental fund reports a $500,000 capital outlay expenditure for equipment purchased at the beginning of the year. The equipment has a 10-year useful life and no residual value. Ignoring other conversion items, what adjustment to the change in fund balance is needed to reflect this transaction in the government-wide change in net position for the year?",

    answers: [
        "Subtract $500,000",
        "Add $450,000",
        "Add $500,000",
        "Subtract $50,000"
    ],

    correctAnswer: 1,

    explanation:
        "The governmental fund reported the entire $500,000 purchase as an expenditure. Government-wide reporting capitalizes the equipment and recognizes only $50,000 of annual depreciation. Therefore, the conversion increases the governmental-fund result by $500,000 and decreases it by $50,000 depreciation, for a net addition of $450,000."
},


// =====================================================
// QUESTION 56 — NFP CONDITIONAL + RESTRICTED CONTRIBUTION
// =====================================================
{
    lessonId: 8,

    question:
        "An NFP receives $300,000 cash under a donor agreement requiring the organization to serve 1,000 qualifying participants. The donor has a right of return if the requirement is not achieved. At year-end, 700 participants have been served and the barrier has not been substantially overcome. The donor also specifies that, once the condition is satisfied, the resources must be used for educational programs. What should the NFP generally recognize at year-end?",

    answers: [
        "$300,000 contribution revenue with donor restrictions",
        "$210,000 contribution revenue and a $90,000 liability",
        "$300,000 contribution revenue without donor restrictions",
        "A $300,000 liability and no contribution revenue"
    ],

    correctAnswer: 3,

    explanation:
        "The agreement contains a barrier and a right of return, so the contribution is conditional. Because the barrier has not been substantially overcome, the $300,000 cash received is generally reported as a liability rather than contribution revenue. The donor restriction is evaluated once the contribution becomes unconditional."
},


// =====================================================
// QUESTION 57 — NFP RESTRICTION RELEASE
// =====================================================
{
    lessonId: 8,

    question:
        "An NFP begins the year with $240,000 of net assets with donor restrictions. During the year it receives $180,000 of additional unconditional contributions restricted for qualifying programs and spends $150,000 satisfying donor restrictions. Ignoring all other activity, what is ending net assets with donor restrictions?",

    answers: [
        "$570,000",
        "$270,000",
        "$90,000",
        "$420,000"
    ],

    correctAnswer: 1,

    explanation:
        "Ending net assets with donor restrictions = $240,000 beginning balance + $180,000 restricted contributions − $150,000 released from restriction = $270,000."
},


// =====================================================
// QUESTION 58 — INDIRECT CASH FLOW INTEGRATED
// =====================================================
{
    lessonId: 9,

    question:
        "A company reports net income of $310,000. Depreciation expense is $45,000, a gain on sale of equipment is $18,000, accounts receivable increased $25,000, inventory decreased $14,000, and accounts payable decreased $11,000. What is net cash provided by operating activities under the indirect method?",

    answers: [
        "$315,000",
        "$337,000",
        "$293,000",
        "$351,000"
    ],

    correctAnswer: 0,

    explanation:
        "Operating cash flow = $310,000 + $45,000 depreciation − $18,000 gain − $25,000 increase in AR + $14,000 decrease in inventory − $11,000 decrease in AP = $315,000."
},


// =====================================================
// QUESTION 59 — SALE OF EQUIPMENT + CASH FLOW
// =====================================================
{
    lessonId: 9,

    question:
        "Equipment costing $300,000 with accumulated depreciation of $190,000 is sold for $135,000 cash. Which statement correctly describes the transaction and its cash-flow effects?",

    answers: [
        "A $25,000 loss is recognized and $110,000 is an investing inflow",
        "A $25,000 gain is recognized and $135,000 is an investing inflow",
        "A $135,000 gain is recognized and the proceeds are operating cash flow",
        "A $25,000 gain is recognized and only $110,000 is an investing inflow"
    ],

    correctAnswer: 1,

    explanation:
        "The carrying amount is $300,000 − $190,000 = $110,000. Cash proceeds are $135,000, producing a $25,000 gain. The full $135,000 proceeds are an investing cash inflow. Under the indirect method, the $25,000 gain is also subtracted in reconciling net income to operating cash flow."
},


// =====================================================
// QUESTION 60 — FINAL COMPREHENSIVE FAR QUESTION
// =====================================================
{
    lessonId: 10,

    question:
        "A company reports preliminary net income of $800,000. Year-end review identifies the following unrecorded items: $35,000 accrued salaries, $24,000 accrued service revenue, $30,000 depreciation expense, and a $20,000 probable and reasonably estimable litigation loss. Ending inventory is understated by $16,000. The company also has a $12,000 unrealized holding gain on an available-for-sale debt security that is properly reportable in OCI. Ignoring taxes, what are corrected net income and comprehensive income?",

    answers: [
        "Net income $755,000; comprehensive income $767,000",
        "Net income $743,000; comprehensive income $755,000",
        "Net income $767,000; comprehensive income $779,000",
        "Net income $755,000; comprehensive income $755,000"
    ],

    correctAnswer: 0,

    explanation:
        "Corrected net income = $800,000 − $35,000 + $24,000 − $30,000 − $20,000 + $16,000 = $755,000. The $12,000 AFS debt-security unrealized holding gain is reported in OCI rather than net income. Comprehensive income = $755,000 + $12,000 = $767,000."
}

];


const farJournalEntryQuestions = [

    // =====================================================
    // 1 — ACCRUED SALARIES
    // =====================================================
    {
        id: 1,
        topic: "Accrued Expenses",

        question:
            "At December 31, employees have earned $18,000 of salaries that have not yet been paid or recorded. Record the required adjusting entry.",

        availableAccounts: [
            "Salaries Expense",
            "Salaries Payable",
            "Cash",
            "Accounts Payable",
            "Prepaid Salaries"
        ],

        correctEntries: [
            {
                account: "Salaries Expense",
                debit: 18000,
                credit: 0
            },
            {
                account: "Salaries Payable",
                debit: 0,
                credit: 18000
            }
        ],

        explanation:
            "The employees earned the salaries during the current period. Salaries Expense is debited and the unpaid obligation, Salaries Payable, is credited."
    },


    // =====================================================
    // 2 — ACCRUED REVENUE
    // =====================================================
    {
        id: 2,
        topic: "Accrued Revenue",

        question:
            "A company performs $25,000 of consulting services before year-end but will not bill the customer until next month. Record the year-end adjusting entry.",

        availableAccounts: [
            "Accounts Receivable",
            "Service Revenue",
            "Cash",
            "Contract Liability",
            "Accounts Payable"
        ],

        correctEntries: [
            {
                account: "Accounts Receivable",
                debit: 25000,
                credit: 0
            },
            {
                account: "Service Revenue",
                debit: 0,
                credit: 25000
            }
        ],

        explanation:
            "The revenue has been earned even though billing and collection occur later. Accounts Receivable increases with a debit and Service Revenue increases with a credit."
    },


    // =====================================================
    // 3 — CONTRACT LIABILITY
    // =====================================================
    {
        id: 3,
        topic: "Contract Liabilities",

        question:
            "A company previously received cash in advance and recorded a contract liability. By year-end, $12,000 of the related services have been provided. Record the adjusting entry.",

        availableAccounts: [
            "Contract Liability",
            "Service Revenue",
            "Cash",
            "Accounts Receivable",
            "Service Expense"
        ],

        correctEntries: [
            {
                account: "Contract Liability",
                debit: 12000,
                credit: 0
            },
            {
                account: "Service Revenue",
                debit: 0,
                credit: 12000
            }
        ],

        explanation:
            "Once the related performance obligation is satisfied, the liability is reduced and revenue is recognized."
    },


    // =====================================================
    // 4 — PREPAID INSURANCE
    // =====================================================
    {
        id: 4,
        topic: "Prepaid Expenses",

        question:
            "A company's Prepaid Insurance account has a balance of $24,000 before adjustment. At year-end, $9,000 of the insurance coverage has expired. Record the adjusting entry.",

        availableAccounts: [
            "Insurance Expense",
            "Prepaid Insurance",
            "Cash",
            "Insurance Payable",
            "Accumulated Insurance"
        ],

        correctEntries: [
            {
                account: "Insurance Expense",
                debit: 9000,
                credit: 0
            },
            {
                account: "Prepaid Insurance",
                debit: 0,
                credit: 9000
            }
        ],

        explanation:
            "The expired portion is no longer an asset. Insurance Expense increases by $9,000 and Prepaid Insurance decreases by $9,000."
    },


    // =====================================================
    // 5 — DEPRECIATION
    // =====================================================
    {
        id: 5,
        topic: "Depreciation",

        question:
            "A company determines that depreciation expense for equipment for the current year is $30,000. Record the adjusting entry.",

        availableAccounts: [
            "Depreciation Expense",
            "Accumulated Depreciation — Equipment",
            "Equipment",
            "Cash",
            "Repairs Expense"
        ],

        correctEntries: [
            {
                account: "Depreciation Expense",
                debit: 30000,
                credit: 0
            },
            {
                account: "Accumulated Depreciation — Equipment",
                debit: 0,
                credit: 30000
            }
        ],

        explanation:
            "Depreciation Expense is debited. Accumulated Depreciation, a contra-asset account, is credited rather than directly reducing Equipment."
    },


    // =====================================================
    // 6 — CREDIT LOSS ADJUSTMENT
    // =====================================================
    {
        id: 6,
        topic: "Credit Losses",

        question:
            "At year-end, a company determines that its Allowance for Credit Losses must be increased by $14,000. Record the required adjustment.",

        availableAccounts: [
            "Credit Loss Expense",
            "Allowance for Credit Losses",
            "Accounts Receivable",
            "Cash",
            "Bad Debt Payable"
        ],

        correctEntries: [
            {
                account: "Credit Loss Expense",
                debit: 14000,
                credit: 0
            },
            {
                account: "Allowance for Credit Losses",
                debit: 0,
                credit: 14000
            }
        ],

        explanation:
            "The required increase in the allowance is recognized with a debit to Credit Loss Expense and a credit to Allowance for Credit Losses."
    },


    // =====================================================
    // 7 — WRITE-OFF
    // =====================================================
    {
        id: 7,
        topic: "Accounts Receivable",

        question:
            "A specific $8,000 customer balance is determined to be uncollectible and is written off using the allowance method. Record the write-off.",

        availableAccounts: [
            "Allowance for Credit Losses",
            "Accounts Receivable",
            "Credit Loss Expense",
            "Cash",
            "Sales Revenue"
        ],

        correctEntries: [
            {
                account: "Allowance for Credit Losses",
                debit: 8000,
                credit: 0
            },
            {
                account: "Accounts Receivable",
                debit: 0,
                credit: 8000
            }
        ],

        explanation:
            "Under the allowance method, the expense was recognized when the allowance was estimated. The write-off therefore debits the allowance and credits Accounts Receivable."
    },


    // =====================================================
    // 8 — COLLECTION OF RECEIVABLE
    // =====================================================
    {
        id: 8,
        topic: "Accounts Receivable",

        question:
            "A customer pays $32,000 on an outstanding accounts receivable balance. Record the collection.",

        availableAccounts: [
            "Cash",
            "Accounts Receivable",
            "Sales Revenue",
            "Allowance for Credit Losses",
            "Service Revenue"
        ],

        correctEntries: [
            {
                account: "Cash",
                debit: 32000,
                credit: 0
            },
            {
                account: "Accounts Receivable",
                debit: 0,
                credit: 32000
            }
        ],

        explanation:
            "Cash increases and Accounts Receivable decreases. Revenue is not recognized again because it was recognized when earned."
    },


    // =====================================================
    // 9 — INVENTORY PURCHASE
    // =====================================================
    {
        id: 9,
        topic: "Inventory",

        question:
            "A company using a perpetual inventory system purchases $45,000 of inventory on account. Record the purchase.",

        availableAccounts: [
            "Inventory",
            "Accounts Payable",
            "Purchases",
            "Cash",
            "Cost of Goods Sold"
        ],

        correctEntries: [
            {
                account: "Inventory",
                debit: 45000,
                credit: 0
            },
            {
                account: "Accounts Payable",
                debit: 0,
                credit: 45000
            }
        ],

        explanation:
            "Under a perpetual inventory system, inventory purchases are recorded directly in the Inventory account. The unpaid amount creates Accounts Payable."
    },


    // =====================================================
    // 10 — INVENTORY SALE
    // =====================================================
    {
        id: 10,
        topic: "Inventory & Revenue",

        question:
            "A company using a perpetual inventory system sells inventory for $100,000 cash. The inventory had a cost of $60,000. Record all parts of the sale.",

        availableAccounts: [
            "Cash",
            "Sales Revenue",
            "Cost of Goods Sold",
            "Inventory",
            "Accounts Receivable"
        ],

        correctEntries: [
            {
                account: "Cash",
                debit: 100000,
                credit: 0
            },
            {
                account: "Sales Revenue",
                debit: 0,
                credit: 100000
            },
            {
                account: "Cost of Goods Sold",
                debit: 60000,
                credit: 0
            },
            {
                account: "Inventory",
                debit: 0,
                credit: 60000
            }
        ],

        explanation:
            "A perpetual-system sale requires two effects: recognize the $100,000 sale and remove the $60,000 cost of the inventory sold."
    },


    // =====================================================
    // 11 — EQUIPMENT PURCHASE
    // =====================================================
    {
        id: 11,
        topic: "PP&E",

        question:
            "A company purchases equipment for $90,000 cash and pays $6,000 cash for installation necessary to place the asset into service. Record the acquisition.",

        availableAccounts: [
            "Equipment",
            "Cash",
            "Installation Expense",
            "Repairs Expense",
            "Accumulated Depreciation — Equipment"
        ],

        correctEntries: [
            {
                account: "Equipment",
                debit: 96000,
                credit: 0
            },
            {
                account: "Cash",
                debit: 0,
                credit: 96000
            }
        ],

        explanation:
            "Costs necessary to place the equipment into the condition and location required for its intended use are included in the asset's initial cost."
    },


    // =====================================================
    // 12 — EQUIPMENT DISPOSAL WITH GAIN
    // =====================================================
    {
        id: 12,
        topic: "PP&E Disposal",

        question:
            "Equipment originally costing $120,000 has accumulated depreciation of $75,000. It is sold for $52,000 cash. Record the disposal.",

        availableAccounts: [
            "Cash",
            "Accumulated Depreciation — Equipment",
            "Equipment",
            "Gain on Sale of Equipment",
            "Loss on Sale of Equipment"
        ],

        correctEntries: [
            {
                account: "Cash",
                debit: 52000,
                credit: 0
            },
            {
                account: "Accumulated Depreciation — Equipment",
                debit: 75000,
                credit: 0
            },
            {
                account: "Equipment",
                debit: 0,
                credit: 120000
            },
            {
                account: "Gain on Sale of Equipment",
                debit: 0,
                credit: 7000
            }
        ],

        explanation:
            "The carrying amount is $120,000 − $75,000 = $45,000. Cash received is $52,000, producing a $7,000 gain."
    },


    // =====================================================
    // 13 — PATENT AMORTIZATION
    // =====================================================
    {
        id: 13,
        topic: "Intangible Assets",

        question:
            "A finite-lived patent requires $16,000 of amortization for the current year. Record the amortization.",

        availableAccounts: [
            "Amortization Expense",
            "Accumulated Amortization — Patent",
            "Patent",
            "Cash",
            "Research Expense"
        ],

        correctEntries: [
            {
                account: "Amortization Expense",
                debit: 16000,
                credit: 0
            },
            {
                account: "Accumulated Amortization — Patent",
                debit: 0,
                credit: 16000
            }
        ],

        explanation:
            "The cost of a finite-lived intangible asset is allocated over its useful life. Amortization Expense is debited and accumulated amortization is credited."
    },


    // =====================================================
    // 14 — ASSET IMPAIRMENT
    // =====================================================
    {
        id: 14,
        topic: "Long-Lived Asset Impairment",

        question:
            "A long-lived asset held and used has a carrying amount of $500,000. It fails the recoverability test and has a fair value of $390,000. Record the impairment loss.",

        availableAccounts: [
            "Impairment Loss",
            "Accumulated Impairment",
            "Cash",
            "Gain on Impairment",
            "Depreciation Expense"
        ],

        correctEntries: [
            {
                account: "Impairment Loss",
                debit: 110000,
                credit: 0
            },
            {
                account: "Accumulated Impairment",
                debit: 0,
                credit: 110000
            }
        ],

        explanation:
            "After the asset fails the recoverability test, the impairment loss is measured as carrying amount less fair value: $500,000 − $390,000 = $110,000."
    },


    // =====================================================
    // 15 — BOND ISSUED AT DISCOUNT
    // =====================================================
    {
        id: 15,
        topic: "Bonds Payable",

        question:
            "A company issues $500,000 face amount of bonds for $470,000 cash. Record the issuance using a Discount on Bonds Payable account.",

        availableAccounts: [
            "Cash",
            "Discount on Bonds Payable",
            "Bonds Payable",
            "Interest Expense",
            "Premium on Bonds Payable"
        ],

        correctEntries: [
            {
                account: "Cash",
                debit: 470000,
                credit: 0
            },
            {
                account: "Discount on Bonds Payable",
                debit: 30000,
                credit: 0
            },
            {
                account: "Bonds Payable",
                debit: 0,
                credit: 500000
            }
        ],

        explanation:
            "The company receives $470,000 cash but must repay $500,000 face value. The $30,000 difference is recorded as a bond discount."
    },


    // =====================================================
    // 16 — EFFECTIVE INTEREST ON DISCOUNT BOND
    // =====================================================
    {
        id: 16,
        topic: "Bond Interest",

        question:
            "A $500,000 bond has a 6% stated rate, a beginning carrying amount of $470,000, and an 8% effective rate. Record one year's interest using the effective-interest method.",

        availableAccounts: [
            "Interest Expense",
            "Discount on Bonds Payable",
            "Cash",
            "Bonds Payable",
            "Premium on Bonds Payable"
        ],

        correctEntries: [
            {
                account: "Interest Expense",
                debit: 37600,
                credit: 0
            },
            {
                account: "Discount on Bonds Payable",
                debit: 0,
                credit: 7600
            },
            {
                account: "Cash",
                debit: 0,
                credit: 30000
            }
        ],

        explanation:
            "Cash interest is $500,000 × 6% = $30,000. Interest expense is $470,000 × 8% = $37,600. The $7,600 difference amortizes the discount."
    },


    // =====================================================
    // 17 — BOND ISSUED AT PREMIUM
    // =====================================================
    {
        id: 17,
        topic: "Bonds Payable",

        question:
            "A company issues $500,000 face amount of bonds for $520,000 cash. Record the issuance using a Premium on Bonds Payable account.",

        availableAccounts: [
            "Cash",
            "Bonds Payable",
            "Premium on Bonds Payable",
            "Discount on Bonds Payable",
            "Interest Expense"
        ],

        correctEntries: [
            {
                account: "Cash",
                debit: 520000,
                credit: 0
            },
            {
                account: "Bonds Payable",
                debit: 0,
                credit: 500000
            },
            {
                account: "Premium on Bonds Payable",
                debit: 0,
                credit: 20000
            }
        ],

        explanation:
            "Cash exceeds the bond's face amount by $20,000, creating a bond premium."
    },


    // =====================================================
    // 18 — EFFECTIVE INTEREST ON PREMIUM BOND
    // =====================================================
    {
        id: 18,
        topic: "Bond Interest",

        question:
            "A $500,000 bond has a 6% stated rate, a beginning carrying amount of $520,000, and a 5% effective rate. Record one year's interest using the effective-interest method.",

        availableAccounts: [
            "Interest Expense",
            "Premium on Bonds Payable",
            "Cash",
            "Discount on Bonds Payable",
            "Bonds Payable"
        ],

        correctEntries: [
            {
                account: "Interest Expense",
                debit: 26000,
                credit: 0
            },
            {
                account: "Premium on Bonds Payable",
                debit: 4000,
                credit: 0
            },
            {
                account: "Cash",
                debit: 0,
                credit: 30000
            }
        ],

        explanation:
            "Interest expense is $520,000 × 5% = $26,000. Cash interest is $500,000 × 6% = $30,000. The $4,000 difference reduces the bond premium."
    },


    // =====================================================
    // 19 — LOSS CONTINGENCY
    // =====================================================
    {
        id: 19,
        topic: "Contingencies",

        question:
            "A company determines that a litigation loss of $60,000 is probable and reasonably estimable. Record the required accrual.",

        availableAccounts: [
            "Litigation Loss",
            "Litigation Liability",
            "Cash",
            "Retained Earnings",
            "Legal Revenue"
        ],

        correctEntries: [
            {
                account: "Litigation Loss",
                debit: 60000,
                credit: 0
            },
            {
                account: "Litigation Liability",
                debit: 0,
                credit: 60000
            }
        ],

        explanation:
            "A probable and reasonably estimable loss contingency is accrued as a loss and liability."
    },


    // =====================================================
    // 20 — DEBT EXTINGUISHMENT
    // =====================================================
    {
        id: 20,
        topic: "Debt Extinguishment",

        question:
            "A company extinguishes a note payable with a carrying amount of $820,000 by paying $790,000 cash. Record the extinguishment.",

        availableAccounts: [
            "Notes Payable",
            "Cash",
            "Gain on Debt Extinguishment",
            "Loss on Debt Extinguishment",
            "Interest Expense"
        ],

        correctEntries: [
            {
                account: "Notes Payable",
                debit: 820000,
                credit: 0
            },
            {
                account: "Cash",
                debit: 0,
                credit: 790000
            },
            {
                account: "Gain on Debt Extinguishment",
                debit: 0,
                credit: 30000
            }
        ],

        explanation:
            "The $820,000 liability is removed for only $790,000 cash, producing a $30,000 gain."
    },


    // =====================================================
    // 21 — COMMON STOCK ISSUANCE
    // =====================================================
    {
        id: 21,
        topic: "Stockholders' Equity",

        question:
            "A corporation issues 10,000 shares of $5 par common stock for $12 per share cash. Record the issuance.",

        availableAccounts: [
            "Cash",
            "Common Stock",
            "Additional Paid-in Capital",
            "Retained Earnings",
            "Treasury Stock"
        ],

        correctEntries: [
            {
                account: "Cash",
                debit: 120000,
                credit: 0
            },
            {
                account: "Common Stock",
                debit: 0,
                credit: 50000
            },
            {
                account: "Additional Paid-in Capital",
                debit: 0,
                credit: 70000
            }
        ],

        explanation:
            "Cash received is $120,000. Common Stock is credited for $50,000 par value, and the remaining $70,000 is Additional Paid-in Capital."
    },


    // =====================================================
    // 22 — TREASURY STOCK
    // =====================================================
    {
        id: 22,
        topic: "Treasury Stock",

        question:
            "A corporation reacquires 4,000 shares of its own stock for $20 per share. The company uses the cost method. Record the purchase.",

        availableAccounts: [
            "Treasury Stock",
            "Cash",
            "Common Stock",
            "Retained Earnings",
            "Additional Paid-in Capital"
        ],

        correctEntries: [
            {
                account: "Treasury Stock",
                debit: 80000,
                credit: 0
            },
            {
                account: "Cash",
                debit: 0,
                credit: 80000
            }
        ],

        explanation:
            "Under the cost method, treasury shares are recorded at acquisition cost. Treasury Stock is a contra-equity account."
    },


    // =====================================================
    // 23 — DIVIDEND DECLARATION
    // =====================================================
    {
        id: 23,
        topic: "Cash Dividends",

        question:
            "A corporation declares a $50,000 cash dividend. Record the declaration.",

        availableAccounts: [
            "Retained Earnings",
            "Dividends Payable",
            "Cash",
            "Dividend Expense",
            "Common Stock"
        ],

        correctEntries: [
            {
                account: "Retained Earnings",
                debit: 50000,
                credit: 0
            },
            {
                account: "Dividends Payable",
                debit: 0,
                credit: 50000
            }
        ],

        explanation:
            "Declaration of a cash dividend reduces retained earnings and creates a liability. It is not an expense."
    },


    // =====================================================
    // 24 — DIVIDEND PAYMENT
    // =====================================================
    {
        id: 24,
        topic: "Cash Dividends",

        question:
            "A corporation pays a previously declared $50,000 cash dividend. Record the payment.",

        availableAccounts: [
            "Dividends Payable",
            "Cash",
            "Retained Earnings",
            "Dividend Expense",
            "Common Stock"
        ],

        correctEntries: [
            {
                account: "Dividends Payable",
                debit: 50000,
                credit: 0
            },
            {
                account: "Cash",
                debit: 0,
                credit: 50000
            }
        ],

        explanation:
            "The dividend liability was recognized when the dividend was declared. Payment removes the liability and reduces cash."
    },


    // =====================================================
    // 25 — EQUITY METHOD INCOME
    // =====================================================
    {
        id: 25,
        topic: "Equity Method Investments",

        question:
            "An investor appropriately using the equity method owns 30% of an investee. The investee reports $100,000 of net income. Ignoring other adjustments, record the investor's share of the income.",

        availableAccounts: [
            "Investment in Investee",
            "Equity in Earnings of Investee",
            "Dividend Revenue",
            "Cash",
            "Unrealized Holding Gain"
        ],

        correctEntries: [
            {
                account: "Investment in Investee",
                debit: 30000,
                credit: 0
            },
            {
                account: "Equity in Earnings of Investee",
                debit: 0,
                credit: 30000
            }
        ],

        explanation:
            "The investor recognizes 30% of the investee's $100,000 income, or $30,000, and increases the carrying amount of the investment."
    },


    // =====================================================
    // 26 — EQUITY METHOD DIVIDEND
    // =====================================================
    {
        id: 26,
        topic: "Equity Method Investments",

        question:
            "An investor appropriately using the equity method owns 30% of an investee. The investee pays total cash dividends of $20,000. Record the investor's receipt of its share.",

        availableAccounts: [
            "Cash",
            "Investment in Investee",
            "Dividend Revenue",
            "Equity in Earnings of Investee",
            "Interest Revenue"
        ],

        correctEntries: [
            {
                account: "Cash",
                debit: 6000,
                credit: 0
            },
            {
                account: "Investment in Investee",
                debit: 0,
                credit: 6000
            }
        ],

        explanation:
            "The investor receives 30% × $20,000 = $6,000. Under the equity method, dividends are treated as a return of investment rather than dividend income."
    },


    // =====================================================
    // 27 — TRADING SECURITY FAIR VALUE GAIN
    // =====================================================
    {
        id: 27,
        topic: "Investments",

        question:
            "At year-end, a trading debt security has increased in fair value by $9,000. Ignoring credit-loss considerations, record the unrealized holding gain.",

        availableAccounts: [
            "Fair Value Adjustment — Trading",
            "Unrealized Holding Gain — Income",
            "Unrealized Holding Gain — OCI",
            "Cash",
            "Interest Revenue"
        ],

        correctEntries: [
            {
                account: "Fair Value Adjustment — Trading",
                debit: 9000,
                credit: 0
            },
            {
                account: "Unrealized Holding Gain — Income",
                debit: 0,
                credit: 9000
            }
        ],

        explanation:
            "Trading debt securities are measured at fair value, with unrealized holding gains and losses generally recognized in net income."
    },


    // =====================================================
    // 28 — AFS DEBT SECURITY FAIR VALUE GAIN
    // =====================================================
    {
        id: 28,
        topic: "Investments & OCI",

        question:
            "At year-end, an available-for-sale debt security has an unrealized holding gain of $11,000. Ignoring credit-loss considerations, record the fair value adjustment.",

        availableAccounts: [
            "Fair Value Adjustment — AFS",
            "Unrealized Holding Gain — OCI",
            "Unrealized Holding Gain — Income",
            "Interest Revenue",
            "Cash"
        ],

        correctEntries: [
            {
                account: "Fair Value Adjustment — AFS",
                debit: 11000,
                credit: 0
            },
            {
                account: "Unrealized Holding Gain — OCI",
                debit: 0,
                credit: 11000
            }
        ],

        explanation:
            "For an available-for-sale debt security, qualifying unrealized holding gains are generally reported in other comprehensive income rather than current net income."
    },


    // =====================================================
    // 29 — SERVICE REVENUE ON ACCOUNT
    // =====================================================
    {
        id: 29,
        topic: "Revenue Recognition",

        question:
            "A company satisfies a performance obligation and recognizes $70,000 of revenue. The customer will pay later. Record the transaction.",

        availableAccounts: [
            "Accounts Receivable",
            "Service Revenue",
            "Cash",
            "Contract Liability",
            "Service Expense"
        ],

        correctEntries: [
            {
                account: "Accounts Receivable",
                debit: 70000,
                credit: 0
            },
            {
                account: "Service Revenue",
                debit: 0,
                credit: 70000
            }
        ],

        explanation:
            "Because the company has earned the revenue and has a receivable from the customer, Accounts Receivable is debited and revenue is credited."
    },


    // =====================================================
    // 30 — INITIAL LEASE RECOGNITION
    // =====================================================
    {
        id: 30,
        topic: "Leases",

        question:
            "At commencement of a lease, a lessee measures both the initial right-of-use asset and lease liability at $180,000. Ignore initial direct costs, prepaid rent, incentives, and other adjustments. Record the initial recognition.",

        availableAccounts: [
            "Right-of-Use Asset",
            "Lease Liability",
            "Rent Expense",
            "Cash",
            "Interest Expense"
        ],

        correctEntries: [
            {
                account: "Right-of-Use Asset",
                debit: 180000,
                credit: 0
            },
            {
                account: "Lease Liability",
                debit: 0,
                credit: 180000
            }
        ],

        explanation:
            "At commencement, the lessee recognizes a right-of-use asset and a lease liability. The problem states that both initial amounts are $180,000."
    },


    // =====================================================
    // 31 — INCOME TAX PAYABLE
    // =====================================================
    {
        id: 31,
        topic: "Income Taxes",

        question:
            "A company determines that its current income tax expense and current income taxes payable are both $84,000. Ignore deferred taxes. Record the current tax provision.",

        availableAccounts: [
            "Income Tax Expense",
            "Income Taxes Payable",
            "Deferred Tax Asset",
            "Deferred Tax Liability",
            "Cash"
        ],

        correctEntries: [
            {
                account: "Income Tax Expense",
                debit: 84000,
                credit: 0
            },
            {
                account: "Income Taxes Payable",
                debit: 0,
                credit: 84000
            }
        ],

        explanation:
            "With no deferred tax effects in this scenario, current income tax expense is debited and the unpaid current tax obligation is credited."
    },


    // =====================================================
    // 32 — CORRECTING A CAPITALIZATION ERROR
    // =====================================================
    {
        id: 32,
        topic: "Error Corrections",

        question:
            "During the current year, a company incorrectly recorded a $40,000 equipment purchase as Repairs Expense. The error is discovered before the current-year financial statements are issued. Ignore depreciation. Record the correcting entry.",

        availableAccounts: [
            "Equipment",
            "Repairs Expense",
            "Cash",
            "Retained Earnings",
            "Accumulated Depreciation — Equipment"
        ],

        correctEntries: [
            {
                account: "Equipment",
                debit: 40000,
                credit: 0
            },
            {
                account: "Repairs Expense",
                debit: 0,
                credit: 40000
            }
        ],

        explanation:
            "The original entry incorrectly debited Repairs Expense. The correction removes that expense with a credit and records the Equipment asset with a debit."
    },


    // =====================================================
    // 33 — RECOGNIZED SUBSEQUENT EVENT
    // =====================================================
    {
        id: 33,
        topic: "Subsequent Events",

        question:
            "After year-end but before issuance of the financial statements, a customer's bankruptcy provides additional evidence that a receivable was impaired at year-end. The company determines that its Allowance for Credit Losses should be increased by $25,000. Record the year-end adjustment.",

        availableAccounts: [
            "Credit Loss Expense",
            "Allowance for Credit Losses",
            "Accounts Receivable",
            "Cash",
            "Loss on Bankruptcy"
        ],

        correctEntries: [
            {
                account: "Credit Loss Expense",
                debit: 25000,
                credit: 0
            },
            {
                account: "Allowance for Credit Losses",
                debit: 0,
                credit: 25000
            }
        ],

        explanation:
            "Because the subsequent information provides evidence about a condition that existed at year-end, the year-end estimate is adjusted."
    },


    // =====================================================
    // 34 — GOVERNMENTAL FUND CAPITAL OUTLAY
    // =====================================================
    {
        id: 34,
        topic: "Governmental Accounting",

        question:
            "A city's General Fund purchases equipment for $200,000 cash. Record the transaction in the governmental fund accounts.",

        availableAccounts: [
            "Expenditures — Capital Outlay",
            "Cash",
            "Equipment",
            "Depreciation Expense",
            "Other Financing Uses"
        ],

        correctEntries: [
            {
                account: "Expenditures — Capital Outlay",
                debit: 200000,
                credit: 0
            },
            {
                account: "Cash",
                debit: 0,
                credit: 200000
            }
        ],

        explanation:
            "Governmental funds use the current financial resources measurement focus, so acquisition of a general capital asset is reported as a capital outlay expenditure rather than a fund-level capital asset."
    },


    // =====================================================
    // 35 — GOVERNMENTAL FUND BOND PROCEEDS
    // =====================================================
    {
        id: 35,
        topic: "Governmental Accounting",

        question:
            "A governmental fund receives $1,500,000 cash from issuing general long-term bonds. Record the governmental fund entry.",

        availableAccounts: [
            "Cash",
            "Other Financing Sources — Bond Proceeds",
            "Bonds Payable",
            "Revenue",
            "Deferred Inflow of Resources"
        ],

        correctEntries: [
            {
                account: "Cash",
                debit: 1500000,
                credit: 0
            },
            {
                account: "Other Financing Sources — Bond Proceeds",
                debit: 0,
                credit: 1500000
            }
        ],

        explanation:
            "General long-term debt is not reported as a governmental-fund liability. Bond proceeds are generally reported as an other financing source in the governmental fund."
    },


    // =====================================================
    // 36 — GOVERNMENTAL FUND CURRENT EXPENDITURE
    // =====================================================
    {
        id: 36,
        topic: "Governmental Accounting",

        question:
            "A governmental fund receives $75,000 of supplies and related services that represent a current-period expenditure. The amount has not yet been paid. Record the fund-level entry.",

        availableAccounts: [
            "Expenditures",
            "Accounts Payable",
            "Expenses",
            "Cash",
            "Other Financing Uses"
        ],

        correctEntries: [
            {
                account: "Expenditures",
                debit: 75000,
                credit: 0
            },
            {
                account: "Accounts Payable",
                debit: 0,
                credit: 75000
            }
        ],

        explanation:
            "Governmental funds generally recognize current-period resource outflows as expenditures. Because payment has not yet occurred, Accounts Payable is credited."
    },


    // =====================================================
    // 37 — NFP UNRESTRICTED CONTRIBUTION
    // =====================================================
    {
        id: 37,
        topic: "Not-for-Profit Contributions",

        question:
            "An NFP receives an unconditional $100,000 cash contribution with no donor-imposed restrictions. Record the contribution.",

        availableAccounts: [
            "Cash",
            "Contribution Revenue — Without Donor Restrictions",
            "Contribution Revenue — With Donor Restrictions",
            "Refundable Advance",
            "Accounts Receivable"
        ],

        correctEntries: [
            {
                account: "Cash",
                debit: 100000,
                credit: 0
            },
            {
                account: "Contribution Revenue — Without Donor Restrictions",
                debit: 0,
                credit: 100000
            }
        ],

        explanation:
            "The contribution is unconditional and contains no donor-imposed restriction, so contribution revenue is recognized without donor restrictions."
    },


    // =====================================================
    // 38 — NFP DONOR-RESTRICTED CONTRIBUTION
    // =====================================================
    {
        id: 38,
        topic: "Not-for-Profit Contributions",

        question:
            "An NFP receives an unconditional $120,000 cash contribution that the donor restricts for a specific future program. Record the contribution when received.",

        availableAccounts: [
            "Cash",
            "Contribution Revenue — With Donor Restrictions",
            "Contribution Revenue — Without Donor Restrictions",
            "Refundable Advance",
            "Program Expense"
        ],

        correctEntries: [
            {
                account: "Cash",
                debit: 120000,
                credit: 0
            },
            {
                account: "Contribution Revenue — With Donor Restrictions",
                debit: 0,
                credit: 120000
            }
        ],

        explanation:
            "The contribution is unconditional, so it is recognized immediately. Because the donor imposed a purpose restriction, it is recognized as contribution revenue with donor restrictions."
    },


    // =====================================================
    // 39 — NFP CONDITIONAL CONTRIBUTION RECEIVED IN ADVANCE
    // =====================================================
    {
        id: 39,
        topic: "Conditional Contributions",

        question:
            "An NFP receives $60,000 cash under a contribution agreement containing a substantive barrier and a right of return. The barrier has not been overcome. Record the cash receipt.",

        availableAccounts: [
            "Cash",
            "Refundable Advance",
            "Contribution Revenue — With Donor Restrictions",
            "Contribution Revenue — Without Donor Restrictions",
            "Deferred Inflow"
        ],

        correctEntries: [
            {
                account: "Cash",
                debit: 60000,
                credit: 0
            },
            {
                account: "Refundable Advance",
                debit: 0,
                credit: 60000
            }
        ],

        explanation:
            "Because the agreement remains conditional and includes a right of return, contribution revenue has not yet been recognized. Cash received in advance is reported as a refundable advance liability."
    },


    // =====================================================
    // 40 — DONATED PROFESSIONAL SERVICES
    // =====================================================
    {
        id: 40,
        topic: "Donated Services",

        question:
            "An attorney donates $20,000 of legal services to an NFP. The attorney possesses specialized skills, and the NFP would otherwise have purchased those services. Record the donated services.",

        availableAccounts: [
            "Legal Expense",
            "Contribution Revenue — Without Donor Restrictions",
            "Cash",
            "Accounts Payable",
            "Contribution Revenue — With Donor Restrictions"
        ],

        correctEntries: [
            {
                account: "Legal Expense",
                debit: 20000,
                credit: 0
            },
            {
                account: "Contribution Revenue — Without Donor Restrictions",
                debit: 0,
                credit: 20000
            }
        ],

        explanation:
            "The donated services meet the recognition criteria because they require specialized skills, are provided by a person possessing those skills, and would otherwise have been purchased. The NFP recognizes both contribution revenue and the related expense."
    }

];

let currentFARJournalQuestions = [];
let currentFARJournalIndex = 0;
let currentFARJournalScore = 0;
let currentFARJournalAnswered = false;
let currentFARJournalResults = [];

// =====================================================
// FAR JOURNAL PRACTICE — ACTIVE STATE PERSISTENCE
// =====================================================

function saveFARJournalState() {

    const state = {
        questions: currentFARJournalQuestions,
        index: currentFARJournalIndex,
        score: currentFARJournalScore,
        results: currentFARJournalResults
    };

    localStorage.setItem(
        "farJournalActiveState",
        JSON.stringify(state)
    );

}


function loadFARJournalState() {

    const savedState =
        localStorage.getItem(
            "farJournalActiveState"
        );

    if (!savedState) {
        return false;
    }

    try {

        const state =
            JSON.parse(savedState);

        if (
            !state ||
            !Array.isArray(state.questions) ||
            state.questions.length === 0 ||
            !Number.isInteger(state.index)
        ) {

            clearFARJournalState();

            return false;

        }

        currentFARJournalQuestions =
            state.questions;

        currentFARJournalIndex =
            Math.max(
                0,
                Math.min(
                    state.index,
                    state.questions.length - 1
                )
            );

        currentFARJournalScore =
            Number(state.score) || 0;

        currentFARJournalResults =
            Array.isArray(state.results)
                ? state.results
                : [];

        currentFARJournalAnswered = false;

        return true;

    } catch (error) {

        clearFARJournalState();

        return false;

    }

}


function clearFARJournalState() {

    localStorage.removeItem(
        "farJournalActiveState"
    );

}

function resumeFARJournalPractice() {

    const restored =
        loadFARJournalState();

    if (restored) {

        saveCurrentPage({
            page: "farJournalPractice"
        });

        setActiveNav("Learn");

        showFARJournalQuestion();

    } else {

        startFARJournalPractice();

    }

}

function startFARJournalPractice() {

    saveCurrentPage({
        page: "farJournalPractice"
    });

    setActiveNav("Learn");


    const shuffledJournalQuestions =
        [...farJournalEntryQuestions];


    shuffledJournalQuestions.sort(function() {
        return Math.random() - 0.5;
    });


    currentFARJournalQuestions =
        shuffledJournalQuestions.slice(
            0,
            Math.min(
                10,
                shuffledJournalQuestions.length
            )
        );


    currentFARJournalIndex = 0;
currentFARJournalScore = 0;
currentFARJournalAnswered = false;
currentFARJournalResults = [];

saveFARJournalState();

showFARJournalQuestion();
}


function showFARJournalQuestion() {

    const question =
        currentFARJournalQuestions[
            currentFARJournalIndex
        ];


    if (!question) {
        showFARJournalResults();
        return;
    }


    currentFARJournalAnswered = false;


    let accountOptions = `

        <option value="">
            Select account
        </option>

    `;


    question.availableAccounts.forEach(
        function(account) {

            accountOptions += `

                <option value="${account}">
                    ${account}
                </option>

            `;

        }
    );


    let journalRows = "";


    for (let i = 0; i < 4; i++) {

        journalRows += `

            <div
                style="
                    display:grid;
                    grid-template-columns: 2fr 1fr 1fr;
                    gap:12px;
                    margin-bottom:10px;
                    align-items:center;
                "
            >

                <select
                    id="journal-account-${i}"
                    style="
                        width:100%;
                        padding:12px;
                        border-radius:8px;
                    "
                >
                    ${accountOptions}
                </select>


                <input
                    id="journal-debit-${i}"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="Debit"
                    style="
                        width:100%;
                        padding:12px;
                        border-radius:8px;
                        box-sizing:border-box;
                    "
                >


                <input
                    id="journal-credit-${i}"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="Credit"
                    style="
                        width:100%;
                        padding:12px;
                        border-radius:8px;
                        box-sizing:border-box;
                    "
                >

            </div>

        `;

    }


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Journal Entry Practice
                </h1>

                <p>
                    Question
                    ${currentFARJournalIndex + 1}
                    of
                    ${currentFARJournalQuestions.length}
                </p>

            </div>


            <button
                class="back-button"
                onclick="showFARModule(6)"
            >
                ← Back to Module 6
            </button>

        </header>


        <section>


            <div class="course-intro-card">

                <span class="exam-badge">
                    ${question.topic}
                </span>


                <h2>
                    Build the Journal Entry
                </h2>


                <p>
                    ${question.question}
                </p>

            </div>


            <div class="course-intro-card">

                <div
                    style="
                        display:grid;
                        grid-template-columns:2fr 1fr 1fr;
                        gap:12px;
                        margin-bottom:10px;
                        font-weight:700;
                    "
                >

                    <div>
                        Account
                    </div>

                    <div>
                        Debit
                    </div>

                    <div>
                        Credit
                    </div>

                </div>


                ${journalRows}


                <div
                    id="journal-feedback"
                    style="
                        margin-top:20px;
                    "
                >
                </div>


                <div
                    id="journal-actions"
                    style="
                        margin-top:20px;
                    "
                >

                    <button
                        class="primary-button"
                        onclick="submitFARJournalEntry()"
                    >
                        Check Entry
                    </button>

                </div>

            </div>

        </section>

    `;
}


function submitFARJournalEntry() {

    if (currentFARJournalAnswered) {
        return;
    }


    const question =
        currentFARJournalQuestions[
            currentFARJournalIndex
        ];


    const userEntries = [];


    for (let i = 0; i < 4; i++) {

        const account =
            document
                .getElementById(
                    "journal-account-" + i
                )
                .value;


        const debitValue =
            document
                .getElementById(
                    "journal-debit-" + i
                )
                .value;


        const creditValue =
            document
                .getElementById(
                    "journal-credit-" + i
                )
                .value;


        const debit =
            debitValue === ""
                ? 0
                : Number(debitValue);


        const credit =
            creditValue === ""
                ? 0
                : Number(creditValue);


        if (
            account !== "" ||
            debit !== 0 ||
            credit !== 0
        ) {

            userEntries.push({
                account: account,
                debit: debit,
                credit: credit
            });

        }

    }


    let isCorrect = true;


    if (
        userEntries.length !==
        question.correctEntries.length
    ) {

        isCorrect = false;

    }


    question.correctEntries.forEach(
        function(correctEntry) {

            const matchingEntry =
                userEntries.find(
                    function(userEntry) {

                        return (
                            userEntry.account ===
                                correctEntry.account &&

                            Math.abs(
                                userEntry.debit -
                                correctEntry.debit
                            ) < 0.01 &&

                            Math.abs(
                                userEntry.credit -
                                correctEntry.credit
                            ) < 0.01
                        );

                    }
                );


            if (!matchingEntry) {
                isCorrect = false;
            }

        }
    );


    currentFARJournalAnswered = true;


    if (isCorrect) {
        currentFARJournalScore++;
    }


    currentFARJournalResults.push({

        questionId: question.id,

        topic: question.topic,

        correct: isCorrect

    });


    let correctEntryHTML = "";


    question.correctEntries.forEach(
        function(entry) {

            correctEntryHTML += `

                <div
                    style="
                        display:grid;
                        grid-template-columns:2fr 1fr 1fr;
                        gap:12px;
                        padding:8px 0;
                    "
                >

                    <div>
                        ${entry.account}
                    </div>

                    <div>
                        ${
                            entry.debit > 0
                                ? "$" +
                                  entry.debit.toLocaleString()
                                : ""
                        }
                    </div>

                    <div>
                        ${
                            entry.credit > 0
                                ? "$" +
                                  entry.credit.toLocaleString()
                                : ""
                        }
                    </div>

                </div>

            `;

        }
    );


    const feedback =
        document.getElementById(
            "journal-feedback"
        );


    feedback.innerHTML = `

        <div
            class="course-intro-card"
            style="margin-top:20px;"
        >

            <h3>
                ${
                    isCorrect
                        ? "✓ Correct"
                        : "✗ Not Quite"
                }
            </h3>


            <p>
                <strong>
                    Correct Journal Entry
                </strong>
            </p>


            <div
                style="
                    display:grid;
                    grid-template-columns:2fr 1fr 1fr;
                    gap:12px;
                    font-weight:700;
                    border-bottom:1px solid #ccc;
                    padding-bottom:8px;
                "
            >

                <div>
                    Account
                </div>

                <div>
                    Debit
                </div>

                <div>
                    Credit
                </div>

            </div>


            ${correctEntryHTML}


            <p
                style="
                    margin-top:18px;
                "
            >
                ${question.explanation}
            </p>

        </div>

    `;


    const actions =
        document.getElementById(
            "journal-actions"
        );


    const isLastQuestion =
        currentFARJournalIndex ===
        currentFARJournalQuestions.length - 1;


    actions.innerHTML = `

        <button
            class="primary-button"
            onclick="nextFARJournalQuestion()"
        >

            ${
                isLastQuestion
                    ? "View Results"
                    : "Next Entry"
            }

        </button>

    `;

}


function nextFARJournalQuestion() {

    currentFARJournalIndex++;

    if (
        currentFARJournalIndex >=
        currentFARJournalQuestions.length
    ) {

        showFARJournalResults();
        return;

    }

    saveFARJournalState();

    showFARJournalQuestion();
}


function showFARJournalResults() {

    clearFARJournalState();

    saveCurrentPage({
        page: "farJournalResults"
    });

    const totalQuestions =
        currentFARJournalQuestions.length;


    const percentage =
        totalQuestions === 0
            ? 0
            : Math.round(
                (
                    currentFARJournalScore /
                    totalQuestions
                ) * 100
            );


    const oldBest =
        Number(
            localStorage.getItem(
                "farJournalPracticeBest"
            )
        ) || 0;


    if (percentage > oldBest) {

        localStorage.setItem(
            "farJournalPracticeBest",
            percentage
        );

    }


    const bestScore =
        Math.max(
            oldBest,
            percentage
        );


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    Journal Entry Results
                </h1>

                <p>
                    FAR Cumulative Practice
                </p>

            </div>


            <button
                class="back-button"
                onclick="showFARModule(6)"
            >
                ← Back to Module 6
            </button>

        </header>


        <section>


            <div class="course-intro-card">

                <span class="exam-badge">
                    PRACTICE COMPLETE
                </span>


                <h2>
                    ${currentFARJournalScore}
                    /
                    ${totalQuestions}
                    Correct
                </h2>


                <p>
                    Score: ${percentage}%
                </p>


                <p>
                    Best Score: ${bestScore}%
                </p>


                <button
                    class="primary-button"
                    onclick="startFARJournalPractice()"
                >
                    Practice Again
                </button>

            </div>

        </section>

    `;
}

// =====================================================
// FAR TBS — SAVE BEST SCORE
// =====================================================

function saveFARTBSBestScore(key, newScore) {

    const savedScore =
        localStorage.getItem(key);

    const previousScore =
        savedScore !== null
            ? Number(savedScore)
            : null;

    const bestScore =
        previousScore !== null
            ? Math.max(previousScore, newScore)
            : newScore;

    localStorage.setItem(
        key,
        bestScore
    );

}

function showFARModule1TBSHub() {

    saveCurrentPage({
        page: "farModule1TBS"
    });

    setActiveNav("Learn");


    const tbs1Score =
        localStorage.getItem("farModule1TBS1Score");

    const tbs2Score =
        localStorage.getItem("farModule1TBS2Score");

    const tbs3Score =
        localStorage.getItem("farModule1TBS3Score");

    const tbs4Score =
        localStorage.getItem("farModule1TBS4Score");

    const tbs5Score =
        localStorage.getItem("farModule1TBS5Score");


    const scores = [
        tbs1Score,
        tbs2Score,
        tbs3Score,
        tbs4Score,
        tbs5Score
    ];


    const completedCount =
        scores.filter(function(score) {
            return score !== null;
        }).length;


    function getTBSStatus(score) {

        if (score === null) {

            return `
                <div class="lesson-status">
                    Start →
                </div>
            `;

        }

        return `
            <div class="lesson-status">
                ✓ Completed · ${score}%
            </div>
        `;

    }


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    Module 1 · TBS Practice
                </h1>

                <p>
                    FAR · Financial Reporting
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule(1)">

                ← Back to Module 1

            </button>

        </header>


        <section>


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATIONS
                </span>

                <h2>
                    Module 1 TBS Practice
                </h2>

                <p>
                    Complete CPA-style simulations covering
                    financial reporting concepts from Module 1.
                </p>


                <div class="formula-box">

                    TBS Progress:
                    <strong>
                        ${completedCount} / 5 Completed
                    </strong>

                </div>

            </div>



            <div class="lesson-list">


                <div class="lesson-card"
                     onclick="startFARTBS1()">

                    <div class="lesson-number">
                        1
                    </div>

                    <div class="lesson-info">

                        <h3>
                            Financial Statement Adjustments
                        </h3>

                        <p>
                            Record year-end adjustments and determine
                            corrected financial statement amounts.
                        </p>

                    </div>

                    ${getTBSStatus(tbs1Score)}

                </div>



                <div class="lesson-card"
                     onclick="startFARTBS2()">

                    <div class="lesson-number">
                        2
                    </div>

                    <div class="lesson-info">

                        <h3>
                            Statement of Cash Flows
                        </h3>

                        <p>
                            Classify transactions and calculate
                            cash flows from operating activities.
                        </p>

                    </div>

                    ${getTBSStatus(tbs2Score)}

                </div>



                <div class="lesson-card"
                     onclick="startFARTBS3()">

                    <div class="lesson-number">
                        3
                    </div>

                    <div class="lesson-info">

                        <h3>
                            Accounting Changes & Errors
                        </h3>

                        <p>
                            Determine the proper accounting treatment
                            for changes and prior-period errors.
                        </p>

                    </div>

                    ${getTBSStatus(tbs3Score)}

                </div>



                <div class="lesson-card"
                     onclick="startFARTBS4()">

                    <div class="lesson-number">
                        4
                    </div>

                    <div class="lesson-info">

                        <h3>
                            Subsequent Events & Disclosures
                        </h3>

                        <p>
                            Determine whether subsequent events
                            require adjustment, disclosure, or no action.
                        </p>

                    </div>

                    ${getTBSStatus(tbs4Score)}

                </div>



                <div class="lesson-card"
                     onclick="startFARTBS5()">

                    <div class="lesson-number">
                        5
                    </div>

                    <div class="lesson-info">

                        <h3>
                            Cash-to-Accrual Conversion
                        </h3>

                        <p>
                            Convert cash-basis amounts into
                            accrual-basis revenue and expenses.
                        </p>

                    </div>

                    ${getTBSStatus(tbs5Score)}

                </div>


            </div>

        </section>

    `;

}

function showFARTBSComingSoon(simulationId) {

    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    TBS ${simulationId}
                </h1>

                <p>
                    FAR · Module 1
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule1TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section>

            <div class="coming-next-box">

                <h3>
                    Simulation ${simulationId}
                    is coming next
                </h3>

                <p>
                    We are building the simulations
                    one at a time so each one can be
                    tested before adding the next.
                </p>

            </div>

        </section>

    `;

}

function startFARTBS1() {

    saveCurrentPage({
        page: "farTBS1"
    });


    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    TBS 1
                </h1>

                <p>
                    Financial Statement Adjustments
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule1TBSHub()">

                ← Exit Simulation

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
                </span>

                <h2>
                    Year-End Adjustments
                </h2>

                <p>
                    Atlas Company is preparing its
                    December 31 financial statements.
                    The following balances are shown
                    before year-end adjustments.
                </p>

            </div>


            <div class="tbs-data-card">

                <h3>
                    Unadjusted Information
                </h3>

                <div class="tbs-data-row">

                    <span>
                        Cash
                    </span>

                    <strong>
                        $95,000
                    </strong>

                </div>


                <div class="tbs-data-row">

                    <span>
                        Accounts Receivable
                    </span>

                    <strong>
                        $120,000
                    </strong>

                </div>


                <div class="tbs-data-row">

                    <span>
                        Equipment
                    </span>

                    <strong>
                        $300,000
                    </strong>

                </div>


                <div class="tbs-data-row">

                    <span>
                        Accumulated Depreciation
                    </span>

                    <strong>
                        $60,000
                    </strong>

                </div>


                <div class="tbs-data-row">

                    <span>
                        Accounts Payable
                    </span>

                    <strong>
                        $75,000
                    </strong>

                </div>


                <div class="tbs-data-row">

                    <span>
                        Service Revenue
                    </span>

                    <strong>
                        $500,000
                    </strong>

                </div>


                <div class="tbs-data-row">

                    <span>
                        Operating Expenses
                    </span>

                    <strong>
                        $320,000
                    </strong>

                </div>

            </div>


            <div class="course-intro-card">

                <h3>
                    Additional Information
                </h3>

                <p>
                    1. Atlas performed $15,000 of
                    services before year-end that
                    have not yet been recorded.
                </p>

                <p>
                    2. Employees earned $8,000 of
                    wages before year-end that will
                    be paid next year.
                </p>

                <p>
                    3. Depreciation expense for the
                    year is understated by $12,000.
                </p>

            </div>


            <div class="course-intro-card">

                <h2>
                    Required
                </h2>

                <p>
                    Enter the corrected amounts
                    after considering all three
                    adjustments.
                </p>


                <div class="tbs-question">

                    <label>
                        1. Corrected Accounts Receivable
                    </label>

                    <input type="number"
                           id="tbs1-q1"
                           class="tbs-input"
                           placeholder="Enter amount">

                </div>


                <div class="tbs-question">

                    <label>
                        2. Corrected Service Revenue
                    </label>

                    <input type="number"
                           id="tbs1-q2"
                           class="tbs-input"
                           placeholder="Enter amount">

                </div>


                <div class="tbs-question">

                    <label>
                        3. Corrected Operating Expenses
                    </label>

                    <input type="number"
                           id="tbs1-q3"
                           class="tbs-input"
                           placeholder="Enter amount">

                </div>


                <div class="tbs-question">

                    <label>
                        4. Accrued Wage Liability
                    </label>

                    <input type="number"
                           id="tbs1-q4"
                           class="tbs-input"
                           placeholder="Enter amount">

                </div>


                <div class="tbs-question">

                    <label>
                        5. Corrected Accumulated Depreciation
                    </label>

                    <input type="number"
                           id="tbs1-q5"
                           class="tbs-input"
                           placeholder="Enter amount">

                </div>


                <div class="tbs-question">

                    <label>
                        6. Corrected Net Income
                    </label>

                    <input type="number"
                           id="tbs1-q6"
                           class="tbs-input"
                           placeholder="Enter amount">

                </div>


                <div id="tbs1-result"></div>


                <button class="primary-button"
                        id="tbs1-submit"
                        onclick="submitFARTBS1()">

                    Submit Simulation

                </button>


            </div>


        </section>

    `;

}

function submitFARTBS1() {

    const correctAnswers = [

        135000,
        515000,
        340000,
        8000,
        72000,
        175000

    ];


    const userAnswers = [

        Number(
            document.getElementById(
                "tbs1-q1"
            ).value
        ),

        Number(
            document.getElementById(
                "tbs1-q2"
            ).value
        ),

        Number(
            document.getElementById(
                "tbs1-q3"
            ).value
        ),

        Number(
            document.getElementById(
                "tbs1-q4"
            ).value
        ),

        Number(
            document.getElementById(
                "tbs1-q5"
            ).value
        ),

        Number(
            document.getElementById(
                "tbs1-q6"
            ).value
        )

    ];


    let correctCount = 0;


    userAnswers.forEach(
        function(answer, index) {

            if (
                answer ===
                correctAnswers[index]
            ) {

                correctCount++;

            }

        }
    );


    const percentage =
        Math.round(
            (
                correctCount /
                correctAnswers.length
            ) * 100
        );


    const result =
        document.getElementById(
            "tbs1-result"
        );


    result.innerHTML = `

        <div class="tbs-results">

            <span class="exam-badge">
                SIMULATION RESULTS
            </span>

            <h2>
                ${percentage}%
            </h2>

            <p>
                ${correctCount}
                of
                ${correctAnswers.length}
                responses correct.
            </p>


            <div class="performance-row">

                <div class="performance-info">

                    <strong>
                        Accounts Receivable
                    </strong>

                    <span>
                        Correct answer
                    </span>

                </div>

                <div class="performance-score">
                    $135,000
                </div>

            </div>


            <div class="performance-row">

                <div class="performance-info">

                    <strong>
                        Service Revenue
                    </strong>

                    <span>
                        Correct answer
                    </span>

                </div>

                <div class="performance-score">
                    $515,000
                </div>

            </div>


            <div class="performance-row">

                <div class="performance-info">

                    <strong>
                        Operating Expenses
                    </strong>

                    <span>
                        Correct answer
                    </span>

                </div>

                <div class="performance-score">
                    $340,000
                </div>

            </div>


            <div class="performance-row">

                <div class="performance-info">

                    <strong>
                        Accrued Wage Liability
                    </strong>

                    <span>
                        Correct answer
                    </span>

                </div>

                <div class="performance-score">
                    $8,000
                </div>

            </div>


            <div class="performance-row">

                <div class="performance-info">

                    <strong>
                        Accumulated Depreciation
                    </strong>

                    <span>
                        Correct answer
                    </span>

                </div>

                <div class="performance-score">
                    $72,000
                </div>

            </div>


            <div class="performance-row">

                <div class="performance-info">

                    <strong>
                        Net Income
                    </strong>

                    <span>
                        Correct answer
                    </span>

                </div>

                <div class="performance-score">
                    $175,000
                </div>

            </div>


            <div class="review-recommendation">

                <h3>
                    Explanation
                </h3>

                <p>
                    Unrecorded services increase
                    Accounts Receivable and Service
                    Revenue by $15,000.
                </p>

                <p>
                    Accrued wages increase both
                    Operating Expenses and liabilities
                    by $8,000.
                </p>

                <p>
                    Additional depreciation increases
                    Operating Expenses and Accumulated
                    Depreciation by $12,000.
                </p>

                <p>
                    Corrected net income is:
                    $515,000 revenue −
                    $340,000 expenses =
                    <strong>$175,000</strong>.
                </p>

            </div>


            <div class="lesson-actions">

                <button class="primary-button"
                        onclick="startFARTBS1()">

                    Try Again

                </button>


                <button class="back-button"
                        onclick="showFARModule1TBSHub()">

                    Back to Simulations

                </button>

            </div>

        </div>

    `;


    document.getElementById(
        "tbs1-submit"
    ).style.display = "none";


    saveFARTBSBestScore(
    "farModule1TBS1Score",
    percentage
);

}


function startFARTBS2() {

    saveCurrentPage({
        page: "farTBS2"
    });


    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    TBS 2 · Statement of Cash Flows
                </h1>

                <p>
                    FAR · Module 1
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule1TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="lesson-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
                </span>

                <h2>
                    Statement of Cash Flows
                </h2>

                <p>
                    Classify cash transactions and calculate
                    net cash provided by operating activities.
                </p>

            </div>


            <div class="tbs-data-card">

                <h3>
                    Company Information
                </h3>


                <div class="tbs-data-row">

                    <span>
                        Net Income
                    </span>

                    <strong>
                        $120,000
                    </strong>

                </div>


                <div class="tbs-data-row">

                    <span>
                        Depreciation Expense
                    </span>

                    <strong>
                        $25,000
                    </strong>

                </div>


                <div class="tbs-data-row">

                    <span>
                        Increase in Accounts Receivable
                    </span>

                    <strong>
                        $18,000
                    </strong>

                </div>


                <div class="tbs-data-row">

                    <span>
                        Decrease in Inventory
                    </span>

                    <strong>
                        $10,000
                    </strong>

                </div>


                <div class="tbs-data-row">

                    <span>
                        Increase in Accounts Payable
                    </span>

                    <strong>
                        $7,000
                    </strong>

                </div>


            </div>


            <div class="tbs-data-card">

                <h3>
                    Part 1 · Classify the Transactions
                </h3>


                <div class="tbs-question">

                    <label>
                        1. Cash paid to purchase equipment
                    </label>

                    <select id="tbs2-q1"
                            class="tbs-input">

                        <option value="">
                            Select classification
                        </option>

                        <option value="Operating">
                            Operating
                        </option>

                        <option value="Investing">
                            Investing
                        </option>

                        <option value="Financing">
                            Financing
                        </option>

                    </select>

                </div>


                <div class="tbs-question">

                    <label>
                        2. Cash received from issuing common stock
                    </label>

                    <select id="tbs2-q2"
                            class="tbs-input">

                        <option value="">
                            Select classification
                        </option>

                        <option value="Operating">
                            Operating
                        </option>

                        <option value="Investing">
                            Investing
                        </option>

                        <option value="Financing">
                            Financing
                        </option>

                    </select>

                </div>


                <div class="tbs-question">

                    <label>
                        3. Cash collected from customers
                    </label>

                    <select id="tbs2-q3"
                            class="tbs-input">

                        <option value="">
                            Select classification
                        </option>

                        <option value="Operating">
                            Operating
                        </option>

                        <option value="Investing">
                            Investing
                        </option>

                        <option value="Financing">
                            Financing
                        </option>

                    </select>

                </div>


            </div>


            <div class="tbs-data-card">

                <h3>
                    Part 2 · Operating Cash Flow
                </h3>


                <p>
                    Using the indirect method and the information above,
                    calculate net cash provided by operating activities.
                </p>


                <div class="tbs-question">

                    <label>
                        4. Net Cash Provided by Operating Activities
                    </label>

                    <input type="number"
                           id="tbs2-q4"
                           class="tbs-input"
                           placeholder="Enter amount">

                </div>


            </div>


            <button class="primary-button"
                    id="tbs2-submit"
                    onclick="submitFARTBS2()">

                Submit Simulation

            </button>


            <div id="tbs2-result"></div>


        </section>

    `;

}

function submitFARTBS2() {

    const q1 =
        document.getElementById("tbs2-q1").value;

    const q2 =
        document.getElementById("tbs2-q2").value;

    const q3 =
        document.getElementById("tbs2-q3").value;

    const q4 =
        Number(
            document.getElementById("tbs2-q4").value
        );


    const correctAnswers = [
        "Investing",
        "Financing",
        "Operating",
        144000
    ];


    const userAnswers = [
        q1,
        q2,
        q3,
        q4
    ];


    let score = 0;


    userAnswers.forEach(
        function(answer, index) {

            if (
                answer ===
                correctAnswers[index]
            ) {

                score++;

            }

        }
    );


    const percentage =
        Math.round(
            (score / correctAnswers.length) * 100
        );


    saveFARTBSBestScore(
    "farModule1TBS2Score",
    percentage
);


    document.getElementById(
        "tbs2-submit"
    ).style.display = "none";


    document.getElementById(
        "tbs2-result"
    ).innerHTML = `

        <div class="tbs-results">

            <h2>
                Score: ${score} / 4
            </h2>

            <p>
                ${percentage}%
            </p>


            <div class="key-points">

                <h3>
                    Correct Answers
                </h3>

                <p>
                    1. Equipment purchase:
                    <strong>Investing</strong>
                </p>

                <p>
                    2. Issue common stock:
                    <strong>Financing</strong>
                </p>

                <p>
                    3. Customer collections:
                    <strong>Operating</strong>
                </p>

                <p>
                    4. Net operating cash flow:
                    <strong>$144,000</strong>
                </p>

            </div>


            <div class="example-box">

                <h3>
                    Operating Cash Flow Calculation
                </h3>

                <p>
                    Net Income = $120,000
                </p>

                <p>
                    + Depreciation = $25,000
                </p>

                <p>
                    − Increase in Accounts Receivable = $18,000
                </p>

                <p>
                    + Decrease in Inventory = $10,000
                </p>

                <p>
                    + Increase in Accounts Payable = $7,000
                </p>

                <div class="formula-box">

                    $120,000
                    + $25,000
                    − $18,000
                    + $10,000
                    + $7,000
                    =
                    $144,000

                </div>

            </div>


            <button class="primary-button"
                    onclick="showFARModule1TBSHub()">

                Back to Simulations

            </button>

        </div>

    `;

}

function startFARTBS3() {

    saveCurrentPage({
        page: "farTBS3"
    });


    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    TBS 3 · Accounting Changes & Errors
                </h1>

                <p>
                    FAR · Module 1
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule1TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="lesson-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
                </span>

                <h2>
                    Accounting Changes & Error Corrections
                </h2>

                <p>
                    Determine the proper accounting treatment
                    for changes in principle, estimates,
                    reporting entities, and prior-period errors.
                </p>

            </div>


            <div class="tbs-data-card">

                <h3>
                    Scenario
                </h3>

                <p>
                    For each independent situation below,
                    select the appropriate accounting treatment.
                </p>

            </div>


            <div class="tbs-data-card">

                <div class="tbs-question">

                    <label>
                        1. A company revises the estimated useful life
                        of equipment because of new information.
                    </label>

                    <select id="tbs3-q1"
                            class="tbs-input">

                        <option value="">
                            Select treatment
                        </option>

                        <option value="Retrospective">
                            Retrospective
                        </option>

                        <option value="Prospective">
                            Prospective
                        </option>

                        <option value="Error Correction">
                            Error Correction
                        </option>

                    </select>

                </div>


                <div class="tbs-question">

                    <label>
                        2. A company changes from one acceptable
                        inventory accounting principle to another,
                        and retrospective application is practicable.
                    </label>

                    <select id="tbs3-q2"
                            class="tbs-input">

                        <option value="">
                            Select treatment
                        </option>

                        <option value="Retrospective">
                            Retrospective
                        </option>

                        <option value="Prospective">
                            Prospective
                        </option>

                        <option value="Error Correction">
                            Error Correction
                        </option>

                    </select>

                </div>


                <div class="tbs-question">

                    <label>
                        3. Management discovers that depreciation
                        expense was incorrectly omitted in the prior year.
                    </label>

                    <select id="tbs3-q3"
                            class="tbs-input">

                        <option value="">
                            Select treatment
                        </option>

                        <option value="Retrospective">
                            Retrospective
                        </option>

                        <option value="Prospective">
                            Prospective
                        </option>

                        <option value="Error Correction">
                            Error Correction
                        </option>

                    </select>

                </div>


                <div class="tbs-question">

                    <label>
                        4. The reporting entity changes because
                        financial statements now include an entity
                        that was previously presented separately.
                    </label>

                    <select id="tbs3-q4"
                            class="tbs-input">

                        <option value="">
                            Select treatment
                        </option>

                        <option value="Retrospective">
                            Retrospective
                        </option>

                        <option value="Prospective">
                            Prospective
                        </option>

                        <option value="Error Correction">
                            Error Correction
                        </option>

                    </select>

                </div>

            </div>


            <button class="primary-button"
                    id="tbs3-submit"
                    onclick="submitFARTBS3()">

                Submit Simulation

            </button>


            <div id="tbs3-result"></div>


        </section>

    `;

}

function submitFARTBS3() {

    const answers = [
        document.getElementById("tbs3-q1").value,
        document.getElementById("tbs3-q2").value,
        document.getElementById("tbs3-q3").value,
        document.getElementById("tbs3-q4").value
    ];


    const correctAnswers = [
        "Prospective",
        "Retrospective",
        "Error Correction",
        "Retrospective"
    ];


    let score = 0;


    answers.forEach(function(answer, index) {

        if (answer === correctAnswers[index]) {
            score++;
        }

    });


    const percentage =
        Math.round(
            (score / correctAnswers.length) * 100
        );


    saveFARTBSBestScore(
    "farModule1TBS3Score",
    percentage
);


    document.getElementById(
        "tbs3-submit"
    ).style.display = "none";


    document.getElementById(
        "tbs3-result"
    ).innerHTML = `

        <div class="tbs-results">

            <h2>
                Score: ${score} / 4
            </h2>

            <p>
                ${percentage}%
            </p>


            <div class="key-points">

                <h3>
                    Correct Answers
                </h3>

                <p>
                    1. Change in estimate:
                    <strong>Prospective</strong>
                </p>

                <p>
                    2. Change in accounting principle:
                    <strong>Retrospective</strong>
                </p>

                <p>
                    3. Prior-year omitted depreciation:
                    <strong>Error Correction</strong>
                </p>

                <p>
                    4. Change in reporting entity:
                    <strong>Retrospective</strong>
                </p>

            </div>


            <div class="example-box">

                <h3>
                    Why?
                </h3>

                <p>
                    Changes in accounting estimates are generally
                    handled prospectively.
                </p>

                <p>
                    Changes in accounting principles are generally
                    applied retrospectively when required and practicable.
                </p>

                <p>
                    Prior-period mistakes are corrected as errors,
                    not treated as new estimates.
                </p>

                <p>
                    Changes in reporting entity are generally
                    reflected retrospectively for periods presented.
                </p>

            </div>


            <button class="primary-button"
                    onclick="showFARModule1TBSHub()">

                Back to Simulations

            </button>

        </div>

    `;

}

function startFARTBS4() {

    saveCurrentPage({
        page: "farTBS4"
    });


    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    TBS 4 · Subsequent Events & Disclosures
                </h1>

                <p>
                    FAR · Module 1
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule1TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="lesson-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
                </span>

                <h2>
                    Subsequent Events
                </h2>

                <p>
                    Determine whether events occurring after year-end
                    require adjustment, disclosure only, or no financial
                    statement action.
                </p>

            </div>


            <div class="tbs-data-card">

                <h3>
                    Reporting Timeline
                </h3>

                <div class="tbs-data-row">
                    <span>Year-End</span>
                    <strong>December 31</strong>
                </div>

                <div class="tbs-data-row">
                    <span>Financial Statements Issued</span>
                    <strong>March 15</strong>
                </div>

            </div>


            <div class="tbs-data-card">

                <h3>
                    Evaluate Each Event
                </h3>


                <div class="tbs-question">

                    <label>
                        1. On January 20, a major customer files for bankruptcy.
                        The customer's severe financial difficulties already
                        existed at December 31.
                    </label>

                    <select id="tbs4-q1"
                            class="tbs-input">

                        <option value="">
                            Select treatment
                        </option>

                        <option value="Adjust">
                            Adjust Financial Statements
                        </option>

                        <option value="Disclose">
                            Disclosure Only
                        </option>

                        <option value="None">
                            No Action
                        </option>

                    </select>

                </div>


                <div class="tbs-question">

                    <label>
                        2. On February 10, a fire destroys a major warehouse.
                        The fire occurred entirely after year-end.
                    </label>

                    <select id="tbs4-q2"
                            class="tbs-input">

                        <option value="">
                            Select treatment
                        </option>

                        <option value="Adjust">
                            Adjust Financial Statements
                        </option>

                        <option value="Disclose">
                            Disclosure Only
                        </option>

                        <option value="None">
                            No Action
                        </option>

                    </select>

                </div>


                <div class="tbs-question">

                    <label>
                        3. On January 5, the company settles a lawsuit.
                        The lawsuit related to conditions that existed
                        before December 31, and the settlement provides
                        additional evidence about the year-end obligation.
                    </label>

                    <select id="tbs4-q3"
                            class="tbs-input">

                        <option value="">
                            Select treatment
                        </option>

                        <option value="Adjust">
                            Adjust Financial Statements
                        </option>

                        <option value="Disclose">
                            Disclosure Only
                        </option>

                        <option value="None">
                            No Action
                        </option>

                    </select>

                </div>


                <div class="tbs-question">

                    <label>
                        4. On February 25, management begins preliminary
                        discussions about a possible future expansion.
                        No binding commitment exists and the matter is
                        not significant to the current financial statements.
                    </label>

                    <select id="tbs4-q4"
                            class="tbs-input">

                        <option value="">
                            Select treatment
                        </option>

                        <option value="Adjust">
                            Adjust Financial Statements
                        </option>

                        <option value="Disclose">
                            Disclosure Only
                        </option>

                        <option value="None">
                            No Action
                        </option>

                    </select>

                </div>


            </div>


            <button class="primary-button"
                    id="tbs4-submit"
                    onclick="submitFARTBS4()">

                Submit Simulation

            </button>


            <div id="tbs4-result"></div>


        </section>

    `;

}

function submitFARTBS4() {

    const answers = [
        document.getElementById("tbs4-q1").value,
        document.getElementById("tbs4-q2").value,
        document.getElementById("tbs4-q3").value,
        document.getElementById("tbs4-q4").value
    ];


    const correctAnswers = [
        "Adjust",
        "Disclose",
        "Adjust",
        "None"
    ];


    let score = 0;


    answers.forEach(function(answer, index) {

        if (answer === correctAnswers[index]) {
            score++;
        }

    });


    const percentage =
        Math.round(
            (score / correctAnswers.length) * 100
        );


    saveFARTBSBestScore(
    "farModule1TBS4Score",
    percentage
);


    document.getElementById(
        "tbs4-submit"
    ).style.display = "none";


    document.getElementById(
        "tbs4-result"
    ).innerHTML = `

        <div class="tbs-results">

            <h2>
                Score: ${score} / 4
            </h2>

            <p>
                ${percentage}%
            </p>


            <div class="key-points">

                <h3>
                    Correct Answers
                </h3>

                <p>
                    1. Customer bankruptcy:
                    <strong>Adjust Financial Statements</strong>
                </p>

                <p>
                    2. Warehouse fire after year-end:
                    <strong>Disclosure Only</strong>
                </p>

                <p>
                    3. Lawsuit settlement:
                    <strong>Adjust Financial Statements</strong>
                </p>

                <p>
                    4. Preliminary expansion discussions:
                    <strong>No Action</strong>
                </p>

            </div>


            <div class="example-box">

                <h3>
                    Key Rule
                </h3>

                <p>
                    If the subsequent event provides additional evidence
                    about a condition that already existed at year-end,
                    the financial statements are generally adjusted.
                </p>

                <p>
                    If the event relates to a new condition arising after
                    year-end, adjustment is generally not made, although
                    material events may require disclosure.
                </p>

            </div>


            <button class="primary-button"
                    onclick="showFARModule1TBSHub()">

                Back to Simulations

            </button>

        </div>

    `;

}


function startFARTBS5() {

    saveCurrentPage({
        page: "farTBS5"
    });


    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    TBS 5 · Cash-to-Accrual Conversion
                </h1>

                <p>
                    FAR · Module 1
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule1TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="lesson-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
                </span>

                <h2>
                    Cash-to-Accrual Conversion
                </h2>

                <p>
                    Convert cash-basis amounts to accrual-basis
                    revenue, expenses, and net income.
                </p>

            </div>


            <div class="tbs-data-card">

                <h3>
                    Company Information
                </h3>


                <div class="tbs-data-row">

                    <span>
                        Cash Collected from Customers
                    </span>

                    <strong>
                        $500,000
                    </strong>

                </div>


                <div class="tbs-data-row">

                    <span>
                        Beginning Accounts Receivable
                    </span>

                    <strong>
                        $40,000
                    </strong>

                </div>


                <div class="tbs-data-row">

                    <span>
                        Ending Accounts Receivable
                    </span>

                    <strong>
                        $55,000
                    </strong>

                </div>


                <div class="tbs-data-row">

                    <span>
                        Cash Paid for Operating Expenses
                    </span>

                    <strong>
                        $280,000
                    </strong>

                </div>


                <div class="tbs-data-row">

                    <span>
                        Beginning Accounts Payable
                    </span>

                    <strong>
                        $30,000
                    </strong>

                </div>


                <div class="tbs-data-row">

                    <span>
                        Ending Accounts Payable
                    </span>

                    <strong>
                        $38,000
                    </strong>

                </div>


            </div>


            <div class="tbs-data-card">

                <h3>
                    Required
                </h3>


                <div class="tbs-question">

                    <label>
                        1. Accrual-Basis Revenue
                    </label>

                    <input type="number"
                           id="tbs5-q1"
                           class="tbs-input"
                           placeholder="Enter amount">

                </div>


                <div class="tbs-question">

                    <label>
                        2. Accrual-Basis Operating Expenses
                    </label>

                    <input type="number"
                           id="tbs5-q2"
                           class="tbs-input"
                           placeholder="Enter amount">

                </div>


                <div class="tbs-question">

                    <label>
                        3. Accrual-Basis Net Income
                    </label>

                    <input type="number"
                           id="tbs5-q3"
                           class="tbs-input"
                           placeholder="Enter amount">

                </div>


            </div>


            <button class="primary-button"
                    id="tbs5-submit"
                    onclick="submitFARTBS5()">

                Submit Simulation

            </button>


            <div id="tbs5-result"></div>


        </section>

    `;

}

function submitFARTBS5() {

    const q1 =
        Number(
            document.getElementById("tbs5-q1").value
        );

    const q2 =
        Number(
            document.getElementById("tbs5-q2").value
        );

    const q3 =
        Number(
            document.getElementById("tbs5-q3").value
        );


    const correctAnswers = [
        515000,
        288000,
        227000
    ];


    const userAnswers = [
        q1,
        q2,
        q3
    ];


    let score = 0;


    userAnswers.forEach(
        function(answer, index) {

            if (
                answer ===
                correctAnswers[index]
            ) {

                score++;

            }

        }
    );


    const percentage =
        Math.round(
            (score / correctAnswers.length) * 100
        );


    saveFARTBSBestScore(
    "farModule1TBS5Score",
    percentage
);


    document.getElementById(
        "tbs5-submit"
    ).style.display = "none";


    document.getElementById(
        "tbs5-result"
    ).innerHTML = `

        <div class="tbs-results">

            <h2>
                Score: ${score} / 3
            </h2>

            <p>
                ${percentage}%
            </p>


            <div class="key-points">

                <h3>
                    Correct Answers
                </h3>

                <p>
                    1. Accrual-Basis Revenue:
                    <strong>$515,000</strong>
                </p>

                <p>
                    2. Accrual-Basis Operating Expenses:
                    <strong>$288,000</strong>
                </p>

                <p>
                    3. Accrual-Basis Net Income:
                    <strong>$227,000</strong>
                </p>

            </div>


            <div class="example-box">

                <h3>
                    Revenue Conversion
                </h3>

                <div class="formula-box">

                    Cash Collected
                    + Ending A/R
                    − Beginning A/R

                    =

                    $500,000
                    + $55,000
                    − $40,000

                    = $515,000

                </div>


                <h3>
                    Expense Conversion
                </h3>

                <div class="formula-box">

                    Cash Paid
                    + Ending A/P
                    − Beginning A/P

                    =

                    $280,000
                    + $38,000
                    − $30,000

                    = $288,000

                </div>


                <h3>
                    Net Income
                </h3>

                <div class="formula-box">

                    $515,000
                    − $288,000
                    = $227,000

                </div>

            </div>


            <button class="primary-button"
                    onclick="showFARModule1TBSHub()">

                Back to Simulations

            </button>

        </div>

    `;

}

    function showFARModule2TBSHub() {

    saveCurrentPage({
        page: "farModule2TBSHub"
    });

    setActiveNav("Learn");


    const tbs1Score =
        localStorage.getItem(
            "farModule2TBS1Score"
        );

    const tbs2Score =
        localStorage.getItem(
            "farModule2TBS2Score"
        );

    const tbs3Score =
        localStorage.getItem(
            "farModule2TBS3Score"
        );

    const tbs4Score =
        localStorage.getItem(
            "farModule2TBS4Score"
        );

    const tbs5Score =
        localStorage.getItem(
            "farModule2TBS5Score"
        );


    const completedCount = [
        tbs1Score,
        tbs2Score,
        tbs3Score,
        tbs4Score,
        tbs5Score
    ].filter(function(score) {

        return score !== null;

    }).length;


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 2 TBS Practice
                </h1>

                <p>
                    Select Balance Sheet Accounts
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule(2)">

                ← Back to Module 2

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATIONS
                </span>

                <h2>
                    Module 2 Simulation Center
                </h2>

                <p>
                    Practice CPA-style simulations covering
                    cash, receivables, inventory, long-lived
                    assets, liabilities, investments, and equity.
                </p>


                <div class="exam-progress">

                    TBS Progress:
                    ${completedCount} / 5 Completed

                </div>

            </div>



            <div class="lesson-card"
                 onclick="showFARModule2TBS1()">

                <div class="lesson-number">
                    TBS 1
                </div>

                <div class="lesson-info">

                    <h3>
                        Bank Reconciliation & Cash
                    </h3>

                    <p>
                        Reconcile book and bank balances,
                        identify reconciling items, and determine
                        the correct cash balance.
                    </p>

                </div>

                <div class="lesson-status">

                    ${
                        tbs1Score !== null
                            ? "✓ " + tbs1Score + "%"
                            : "Start →"
                    }

                </div>

            </div>



            <div class="lesson-card"
     onclick="showFARModule2TBS2()">

    <div class="lesson-number">
        TBS 2
    </div>

    <div class="lesson-info">

        <h3>
            Accounts Receivable & Credit Losses
        </h3>

        <p>
            Analyze receivables, expected credit losses,
            the allowance account, and net realizable value.
        </p>

    </div>

    <div class="lesson-status">

        ${
            tbs2Score !== null
                ? "✓ " + tbs2Score + "%"
                : "Start →"
        }

    </div>

    </div>

<div class="lesson-card"
     onclick="showFARModule2TBS3()">

    <div class="lesson-number">
        TBS 3
    </div>

    <div class="lesson-info">

        <h3>
            Inventory Measurement
        </h3>

        <p>
            Analyze inventory ownership, goods in transit,
            consigned goods, and lower-of-cost-and-NRV
            adjustments.
        </p>

    </div>

    <div class="lesson-status">

        ${
            tbs3Score !== null
                ? "✓ " + tbs3Score + "%"
                : "Start →"
        }

    </div>

</div>


            <div class="lesson-card"
     onclick="showFARModule2TBS4()">

    <div class="lesson-number">
        TBS 4
    </div>

    <div class="lesson-info">

        <h3>
            PP&E and Long-Term Assets
        </h3>

        <p>
            Analyze asset capitalization, depreciation,
            carrying value, and impairment of long-lived assets.
        </p>

    </div>

    <div class="lesson-status">

        ${
            tbs4Score !== null
                ? "✓ " + tbs4Score + "%"
                : "Start →"
        }

    </div>

</div>



            <div class="lesson-card"
     onclick="showFARModule2TBS5()">

    <div class="lesson-number">
        TBS 5
    </div>

    <div class="lesson-info">

        <h3>
            Liabilities, Investments & Equity
        </h3>

        <p>
            Analyze debt, investment valuation,
            treasury stock, and retained earnings
            in an integrated balance-sheet simulation.
        </p>

    </div>

    <div class="lesson-status">

        ${
            tbs5Score !== null
                ? "✓ " + tbs5Score + "%"
                : "Start →"
        }

    </div>

</div>


        </section>

    `;

}

function showFARModule2TBS1() {

    saveCurrentPage({
        page: "farModule2TBS1"
    });

    setActiveNav("Learn");

    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 2 · TBS 1
                </h1>

                <p>
                    Bank Reconciliation & Cash
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule2TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
                </span>

                <h2>
                    Bank Reconciliation
                </h2>

                <p>
                    Determine the adjusted cash balance
                    by analyzing the bank statement,
                    company records, and reconciling items.
                </p>

            </div>


            <div class="quiz-card">

                <h2>
                    Scenario
                </h2>

                <p>
                    Falcon Corp.'s general ledger reports
                    a cash balance of
                    <strong>$82,400</strong>
                    at December 31.
                </p>

                <p>
                    The bank statement reports a balance of
                    <strong>$92,070</strong>.
                </p>

                <p>
                    The following information is available:
                </p>


                <div class="key-points">

                    <ul>

                        <li>
                            Deposits in transit:
                            <strong>$12,500</strong>
                        </li>

                        <li>
                            Outstanding checks:
                            <strong>$18,200</strong>
                        </li>

                        <li>
                            Bank service charge not yet recorded
                            by Falcon:
                            <strong>$300</strong>
                        </li>

                        <li>
                            Customer note collected by the bank,
                            including interest:
                            <strong>$4,000</strong>
                        </li>

                        <li>
                            A check issued by Falcon for
                            <strong>$1,250</strong>
                            was incorrectly recorded in the books
                            as <strong>$1,520</strong>.
                        </li>

                    </ul>

                </div>


                <h2>
                    Required
                </h2>

                <p>
                    Enter the adjusted bank balance and
                    adjusted book balance.
                </p>


                <div class="financial-example">

                    <div>

                        <span>
                            Adjusted Bank Balance
                        </span>

                        <input
                            type="number"
                            id="far-m2-tbs1-bank"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            Adjusted Book Balance
                        </span>

                        <input
                            type="number"
                            id="far-m2-tbs1-book"
                            placeholder="Enter amount"
                        >

                    </div>

                </div>


                <div id="far-m2-tbs1-result"></div>


                <div class="lesson-actions">

                    <button class="primary-button"
                            onclick="gradeFARModule2TBS1()">

                        Submit Simulation

                    </button>

                </div>

            </div>


        </section>

    `;

}

function gradeFARModule2TBS1() {

    const bankAnswer =
        Number(
            document.getElementById(
                "far-m2-tbs1-bank"
            ).value
        );

    const bookAnswer =
        Number(
            document.getElementById(
                "far-m2-tbs1-book"
            ).value
        );


    const correctBank = 86370;

    const correctBook = 86370;


    let score = 0;


    if (bankAnswer === correctBank) {
        score += 50;
    }


    if (bookAnswer === correctBook) {
        score += 50;
    }


    saveFARTBSBestScore(
    "farModule2TBS1Score",
    percentage
);


    const result =
        document.getElementById(
            "far-m2-tbs1-result"
        );


    result.innerHTML = `

        <div class="${
            score === 100
                ? "result-correct"
                : "review-recommendation"
        }">

            <h3>
                Score: ${score}%
            </h3>


            <p>
                <strong>
                    Correct Adjusted Bank Balance:
                    $86370,
                </strong>
            </p>


          <div class="formula-box">

    $92,070
    + $12,500
    − $18,200
    =
    $86,370

</div>


            <p>
                <strong>
                    Correct Adjusted Book Balance:
                    $86,370
                </strong>
            </p>


            <div class="formula-box">

                $82,400
                − $300
                + $4,000
                + $270
                =
                $86,370

            </div>


            <p>
                The $270 adjustment corrects the company's
                recording error. Falcon recorded a
                $1,250 check as $1,520, which understated
                book cash by $270.
            </p>


            <div class="lesson-actions">

                <button class="primary-button"
                        onclick="showFARModule2TBS1()">

                    Try Again

                </button>

                <button class="back-button"
                        onclick="showFARModule2TBSHub()">

                    Back to Simulations

                </button>

            </div>

        </div>

    `;

}


function showFARModule2TBS2() {

    saveCurrentPage({
        page: "farModule2TBS2"
    });

    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 2 · TBS 2
                </h1>

                <p>
                    Accounts Receivable & Credit Losses
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule2TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
                </span>

                <h2>
                    Allowance for Credit Losses
                </h2>

                <p>
                    Use an aging analysis to determine the
                    required allowance for credit losses,
                    credit loss expense, and net accounts
                    receivable.
                </p>

            </div>


            <div class="quiz-card">

                <h2>
                    Scenario
                </h2>


                <p>
                    At December 31, Horizon Corp. reports
                    gross Accounts Receivable of
                    <strong>$240,000</strong>.
                </p>


                <p>
                    Before the year-end adjustment, the
                    Allowance for Credit Losses has a
                    <strong>$7,500 credit balance</strong>.
                </p>


                <p>
                    Horizon prepared the following aging
                    analysis of its receivables:
                </p>


                <div class="financial-example">

                    <div>

                        <span>
                            Current
                        </span>

                        <strong>
                            $140,000 × 2%
                        </strong>

                    </div>


                    <div>

                        <span>
                            31–60 Days Past Due
                        </span>

                        <strong>
                            $55,000 × 6%
                        </strong>

                    </div>


                    <div>

                        <span>
                            61–90 Days Past Due
                        </span>

                        <strong>
                            $25,000 × 15%
                        </strong>

                    </div>


                    <div>

                        <span>
                            More Than 90 Days Past Due
                        </span>

                        <strong>
                            $20,000 × 40%
                        </strong>

                    </div>

                </div>


                <div class="key-points">

                    <h3>
                        Additional Information
                    </h3>

                    <p>
                        Assume the aging percentages appropriately
                        reflect Horizon's expected credit losses
                        at December 31.
                    </p>

                    <p>
                        Also assume Horizon writes off a
                        <strong>$2,000</strong> customer account
                        after the allowance has already been
                        established.
                    </p>

                </div>


                <h2>
                    Required
                </h2>


                <p>
                    Enter each amount below.
                </p>



                <div class="financial-example">


                    <div>

                        <span>
                            1. Required Ending Allowance
                            for Credit Losses
                        </span>

                        <input
                            type="number"
                            id="far-m2-tbs2-allowance"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            2. Credit Loss Expense
                            for the Year-End Adjustment
                        </span>

                        <input
                            type="number"
                            id="far-m2-tbs2-expense"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            3. Net Accounts Receivable
                            After the Year-End Adjustment
                        </span>

                        <input
                            type="number"
                            id="far-m2-tbs2-net-ar"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            4. Effect of the $2,000 Write-Off
                            on Net Accounts Receivable
                        </span>

                        <input
                            type="number"
                            id="far-m2-tbs2-writeoff"
                            placeholder="Enter amount"
                        >

                    </div>


                </div>


                <div id="far-m2-tbs2-result"></div>


                <div class="lesson-actions">

                    <button class="primary-button"
                            onclick="gradeFARModule2TBS2()">

                        Submit Simulation

                    </button>

                </div>


            </div>


        </section>

    `;

}

function gradeFARModule2TBS2() {

    const allowanceInput =
        document.getElementById("far-m2-tbs2-allowance").value;

    const expenseInput =
        document.getElementById("far-m2-tbs2-expense").value;

    const netARInput =
        document.getElementById("far-m2-tbs2-net-ar").value;

    const writeoffInput =
        document.getElementById("far-m2-tbs2-writeoff").value;


    const allowanceAnswer =
        allowanceInput.trim() === ""
            ? null
            : Number(allowanceInput);

    const expenseAnswer =
        expenseInput.trim() === ""
            ? null
            : Number(expenseInput);

    const netARAnswer =
        netARInput.trim() === ""
            ? null
            : Number(netARInput);

    const writeoffAnswer =
        writeoffInput.trim() === ""
            ? null
            : Number(writeoffInput);


    const correctAllowance = 17850;
    const correctExpense = 10350;
    const correctNetAR = 222150;
    const correctWriteoffEffect = 0;


    let score = 0;


    if (allowanceAnswer === correctAllowance) {
        score += 25;
    }


    if (expenseAnswer === correctExpense) {
        score += 25;
    }


    if (netARAnswer === correctNetAR) {
        score += 25;
    }


    if (writeoffAnswer === correctWriteoffEffect) {
        score += 25;
    }


    saveFARTBSBestScore(
    "farModule2TBS2Score",
    percentage
);


    const result =
        document.getElementById(
            "far-m2-tbs2-result"
        );


    result.innerHTML = `

        <div class="${
            score === 100
                ? "result-correct"
                : "review-recommendation"
        }">

            <h3>
                Score: ${score}%
            </h3>


            <h3>
                Step 1 — Required Ending Allowance
            </h3>


            <div class="formula-box">

                Current:
                $140,000 × 2%
                =
                $2,800

            </div>


            <div class="formula-box">

                31–60 Days:
                $55,000 × 6%
                =
                $3,300

            </div>


            <div class="formula-box">

                61–90 Days:
                $25,000 × 15%
                =
                $3,750

            </div>


            <div class="formula-box">

                Over 90 Days:
                $20,000 × 40%
                =
                $8,000

            </div>


            <div class="formula-box">

                $2,800
                + $3,300
                + $3,750
                + $8,000
                =
                $17,850

            </div>


            <p>

                <strong>
                    Required Ending Allowance:
                    $17,850
                </strong>

            </p>



            <h3>
                Step 2 — Credit Loss Expense
            </h3>


            <p>
                The allowance already has a
                $7,500 credit balance before adjustment.
            </p>


            <div class="formula-box">

                Required Allowance
                $17,850
                − Existing Credit Balance
                $7,500
                =
                $10,350

            </div>


            <p>

                <strong>
                    Credit Loss Expense:
                    $10,350
                </strong>

            </p>



            <h3>
                Step 3 — Net Accounts Receivable
            </h3>


            <div class="formula-box">

                Gross Accounts Receivable
                $240,000
                − Allowance for Credit Losses
                $17,850
                =
                $222,150

            </div>


            <p>

                <strong>
                    Net Accounts Receivable:
                    $222,150
                </strong>

            </p>



            <h3>
                Step 4 — Write-Off
            </h3>


            <p>
                A specific account write-off reduces both
                Accounts Receivable and the Allowance for
                Credit Losses by the same amount.
            </p>


            <div class="formula-box">

                Accounts Receivable
                ↓ $2,000

                &nbsp;&nbsp;and&nbsp;&nbsp;

                Allowance for Credit Losses
                ↓ $2,000

            </div>


            <p>
                Therefore, assuming the write-off is charged
                against an existing allowance, the immediate
                effect on net Accounts Receivable is
                <strong>$0</strong>.
            </p>


            <div class="lesson-actions">

                <button class="primary-button"
                        onclick="showFARModule2TBS2()">

                    Try Again

                </button>


                <button class="back-button"
                        onclick="showFARModule2TBSHub()">

                    Back to Simulations

                </button>

            </div>


        </div>

    `;

}

function showFARModule2TBS3() {

    saveCurrentPage({
        page: "farModule2TBS3"
    });

    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 2 · TBS 3
                </h1>

                <p>
                    Inventory Measurement
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule2TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
                </span>

                <h2>
                    Inventory Ownership & Valuation
                </h2>

                <p>
                    Determine the inventory owned at year-end
                    and apply the appropriate valuation
                    adjustment.
                </p>

            </div>


            <div class="quiz-card">

                <h2>
                    Scenario
                </h2>


                <p>
                    Redwood Corp. uses the
                    <strong>FIFO inventory method</strong>.
                    At December 31, Redwood's physical
                    inventory count totaled
                    <strong>$310,000</strong>.
                </p>


                <p>
                    The following items require analysis:
                </p>


                <div class="key-points">

                    <ul>

                        <li>
                            The physical count includes
                            <strong>$18,000</strong> of merchandise
                            held by Redwood on consignment for
                            another company.
                        </li>

                        <li>
                            Merchandise costing
                            <strong>$24,000</strong> was purchased
                            FOB shipping point and shipped to
                            Redwood on December 29. The goods were
                            still in transit at December 31 and
                            were not included in the physical count.
                        </li>

                        <li>
                            Merchandise costing
                            <strong>$15,000</strong> was sold by
                            Redwood FOB destination on December 30.
                            The customer received the goods on
                            January 3. The goods were not included
                            in Redwood's physical count.
                        </li>

                    </ul>

                </div>


                <h2>
                    Valuation Information
                </h2>


                <p>
                    After correcting the inventory ownership
                    items above, Redwood determines that one
                    group of inventory has:
                </p>


                <div class="financial-example">

                    <div>

                        <span>
                            Cost
                        </span>

                        <strong>
                            $80,000
                        </strong>

                    </div>


                    <div>

                        <span>
                            Net Realizable Value
                        </span>

                        <strong>
                            $73,000
                        </strong>

                    </div>

                </div>


                <p>
                    Assume the remaining inventory has net
                    realizable value at or above cost and
                    requires no write-down.
                </p>


                <h2>
                    Required
                </h2>


                <div class="financial-example">


                    <div>

                        <span>
                            1. Inventory Owned Before
                            Valuation Adjustment
                        </span>

                        <input
                            type="number"
                            id="far-m2-tbs3-owned"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            2. Inventory Write-Down
                        </span>

                        <input
                            type="number"
                            id="far-m2-tbs3-writedown"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            3. Final Reported Inventory
                        </span>

                        <input
                            type="number"
                            id="far-m2-tbs3-final"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            4. Increase in Expense From
                            the Inventory Write-Down
                        </span>

                        <input
                            type="number"
                            id="far-m2-tbs3-expense"
                            placeholder="Enter amount"
                        >

                    </div>


                </div>


                <div id="far-m2-tbs3-result"></div>


                <div class="lesson-actions">

                    <button class="primary-button"
                            onclick="gradeFARModule2TBS3()">

                        Submit Simulation

                    </button>

                </div>


            </div>


        </section>

    `;

}

function gradeFARModule2TBS3() {

    const ownedAnswer =
        Number(
            document.getElementById(
                "far-m2-tbs3-owned"
            ).value
        );


    const writedownAnswer =
        Number(
            document.getElementById(
                "far-m2-tbs3-writedown"
            ).value
        );


    const finalAnswer =
        Number(
            document.getElementById(
                "far-m2-tbs3-final"
            ).value
        );


    const expenseAnswer =
        Number(
            document.getElementById(
                "far-m2-tbs3-expense"
            ).value
        );


    const correctOwned = 331000;

    const correctWritedown = 7000;

    const correctFinal = 324000;

    const correctExpense = 7000;


    let score = 0;


    if (ownedAnswer === correctOwned) {
        score += 25;
    }


    if (writedownAnswer === correctWritedown) {
        score += 25;
    }


    if (finalAnswer === correctFinal) {
        score += 25;
    }


    if (expenseAnswer === correctExpense) {
        score += 25;
    }


    saveFARTBSBestScore(
    "farModule2TBS3Score",
    percentage
);


    const result =
        document.getElementById(
            "far-m2-tbs3-result"
        );


    result.innerHTML = `

        <div class="${
            score === 100
                ? "result-correct"
                : "review-recommendation"
        }">

            <h3>
                Score: ${score}%
            </h3>


            <h3>
                Step 1 — Correct the Physical Count
            </h3>


            <p>
                Start with the physical inventory count:
            </p>


            <div class="formula-box">

                $310,000

            </div>


            <p>
                The $18,000 of consigned merchandise
                belongs to another company, so Redwood
                must exclude it.
            </p>


            <div class="formula-box">

                $310,000 − $18,000
                =
                $292,000

            </div>


            <p>
                The $24,000 purchase was shipped
                FOB shipping point. Ownership passed to
                Redwood when the seller shipped the goods,
                so it must be included.
            </p>


            <div class="formula-box">

                $292,000 + $24,000
                =
                $316,000

            </div>


            <p>
                The $15,000 sale was shipped
                FOB destination. Because the customer
                had not yet received the goods at
                December 31, Redwood still owned them.
            </p>


            <div class="formula-box">

                $316,000 + $15,000
                =
                $331,000

            </div>


            <p>

                <strong>
                    Inventory Owned Before Valuation:
                    $331,000
                </strong>

            </p>



            <h3>
                Step 2 — Apply Lower of Cost and NRV
            </h3>


            <p>
                The affected inventory has cost of
                $80,000 and net realizable value of
                $73,000.
            </p>


            <div class="formula-box">

                $80,000 − $73,000
                =
                $7,000 Write-Down

            </div>


            <p>

                <strong>
                    Inventory Write-Down:
                    $7,000
                </strong>

            </p>



            <h3>
                Step 3 — Final Inventory
            </h3>


            <div class="formula-box">

                $331,000 − $7,000
                =
                $324,000

            </div>


            <p>

                <strong>
                    Final Reported Inventory:
                    $324,000
                </strong>

            </p>



            <h3>
                Step 4 — Income Statement Effect
            </h3>


            <p>
                The $7,000 inventory write-down
                creates a $7,000 loss or expense,
                reducing current-period income.
            </p>


            <p>

                <strong>
                    Increase in Expense:
                    $7,000
                </strong>

            </p>


            <div class="key-points">

                <h3>
                    CPA Takeaway
                </h3>

                <ul>

                    <li>
                        Consigned goods belong to the
                        consignor, not the consignee.
                    </li>

                    <li>
                        FOB shipping point generally transfers
                        ownership when goods are shipped.
                    </li>

                    <li>
                        FOB destination generally transfers
                        ownership when the buyer receives
                        the goods.
                    </li>

                    <li>
                        For this FIFO inventory, when NRV
                        falls below cost, inventory is
                        written down to NRV.
                    </li>

                </ul>

            </div>


            <div class="lesson-actions">

                <button class="primary-button"
                        onclick="showFARModule2TBS3()">

                    Try Again

                </button>


                <button class="back-button"
                        onclick="showFARModule2TBSHub()">

                    Back to Simulations

                </button>

            </div>


        </div>

    `;

}

function showFARModule2TBS4() {

    saveCurrentPage({
        page: "farModule2TBS4"
    });

    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 2 · TBS 4
                </h1>

                <p>
                    PP&E and Long-Term Assets
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule2TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
                </span>

                <h2>
                    Equipment Acquisition, Depreciation & Impairment
                </h2>

                <p>
                    Determine the capitalized cost of equipment,
                    calculate depreciation and analyze whether
                    an impairment loss should be recognized.
                </p>

            </div>


            <div class="quiz-card">

                <h2>
                    Scenario
                </h2>


                <p>
                    Atlas Corp. purchased production equipment
                    on January 1 for a quoted price of
                    <strong>$180,000</strong>.
                </p>


                <p>
                    Atlas incurred the following additional costs:
                </p>


                <div class="financial-example">

                    <div>
                        <span>Freight</span>
                        <strong>$6,000</strong>
                    </div>

                    <div>
                        <span>Installation</span>
                        <strong>$9,000</strong>
                    </div>

                    <div>
                        <span>Testing Before Use</span>
                        <strong>$5,000</strong>
                    </div>

                    <div>
                        <span>Annual Maintenance Contract</span>
                        <strong>$4,000</strong>
                    </div>

                </div>


                <p>
                    The equipment has an estimated useful life
                    of <strong>10 years</strong>, an estimated
                    residual value of <strong>$20,000</strong>,
                    and Atlas uses straight-line depreciation.
                </p>


                <div class="key-points">

                    <h3>
                        Impairment Information
                    </h3>

                    <p>
                        At the end of Year 3, after recording
                        Year 3 depreciation, adverse business
                        conditions indicate that the equipment
                        may be impaired.
                    </p>

                    <p>
                        The sum of the expected undiscounted
                        future cash flows from the equipment is
                        <strong>$130,000</strong>.
                    </p>

                    <p>
                        The equipment's fair value at that date
                        is <strong>$118,000</strong>.
                    </p>

                </div>


                <h2>
                    Required
                </h2>


                <div class="financial-example">

                    <div>

                        <span>
                            1. Capitalized Cost of Equipment
                        </span>

                        <input
                            type="number"
                            id="far-m2-tbs4-cost"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            2. Annual Straight-Line Depreciation
                        </span>

                        <input
                            type="number"
                            id="far-m2-tbs4-depreciation"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            3. Carrying Amount at End of Year 3
                            Before Impairment
                        </span>

                        <input
                            type="number"
                            id="far-m2-tbs4-carrying"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            4. Impairment Loss
                        </span>

                        <input
                            type="number"
                            id="far-m2-tbs4-impairment"
                            placeholder="Enter amount"
                        >

                    </div>

                </div>


                <div id="far-m2-tbs4-result"></div>


                <div class="lesson-actions">

                    <button class="primary-button"
                            onclick="gradeFARModule2TBS4()">

                        Submit Simulation

                    </button>

                </div>


            </div>


        </section>

    `;

}

function gradeFARModule2TBS4() {

    const costAnswer =
        Number(
            document.getElementById(
                "far-m2-tbs4-cost"
            ).value
        );


    const depreciationAnswer =
        Number(
            document.getElementById(
                "far-m2-tbs4-depreciation"
            ).value
        );


    const carryingAnswer =
        Number(
            document.getElementById(
                "far-m2-tbs4-carrying"
            ).value
        );


    const impairmentAnswer =
        Number(
            document.getElementById(
                "far-m2-tbs4-impairment"
            ).value
        );


    const correctCost = 200000;

    const correctDepreciation = 18000;

    const correctCarrying = 146000;

    const correctImpairment = 28000;


    let score = 0;


    if (costAnswer === correctCost) {
        score += 25;
    }


    if (depreciationAnswer === correctDepreciation) {
        score += 25;
    }


    if (carryingAnswer === correctCarrying) {
        score += 25;
    }


    if (impairmentAnswer === correctImpairment) {
        score += 25;
    }


    saveFARTBSBestScore(
    "farModule2TBS4Score",
    percentage
);


    const result =
        document.getElementById(
            "far-m2-tbs4-result"
        );


    result.innerHTML = `

        <div class="${
            score === 100
                ? "result-correct"
                : "review-recommendation"
        }">

            <h3>
                Score: ${score}%
            </h3>


            <h3>
                Step 1 — Capitalized Cost
            </h3>


            <p>
                Costs necessary to acquire the equipment
                and prepare it for its intended use are
                included in the asset's cost.
            </p>


            <div class="formula-box">

                Purchase Price
                $180,000

                + Freight
                $6,000

                + Installation
                $9,000

                + Testing
                $5,000

                =
                $200,000

            </div>


            <p>
                The $4,000 annual maintenance contract
                is a period expense and is not capitalized
                as part of the equipment.
            </p>


            <p>

                <strong>
                    Capitalized Cost:
                    $200,000
                </strong>

            </p>



            <h3>
                Step 2 — Annual Depreciation
            </h3>


            <div class="formula-box">

                ($200,000 − $20,000)
                ÷ 10 Years
                =
                $18,000

            </div>


            <p>

                <strong>
                    Annual Depreciation:
                    $18,000
                </strong>

            </p>



            <h3>
                Step 3 — Carrying Amount After 3 Years
            </h3>


            <div class="formula-box">

                Accumulated Depreciation:

                $18,000 × 3
                =
                $54,000

            </div>


            <div class="formula-box">

                $200,000 − $54,000
                =
                $146,000

            </div>


            <p>

                <strong>
                    Carrying Amount:
                    $146,000
                </strong>

            </p>



            <h3>
                Step 4 — Impairment Test
            </h3>


            <p>
                Because impairment indicators exist,
                Atlas first performs the recoverability test.
            </p>


            <div class="formula-box">

                Carrying Amount:
                $146,000

                >

                Undiscounted Future Cash Flows:
                $130,000

            </div>


            <p>
                Because the carrying amount exceeds
                undiscounted future cash flows, the asset
                is not recoverable and an impairment loss
                must be recognized.
            </p>


            <div class="formula-box">

                Carrying Amount
                $146,000

                − Fair Value
                $118,000

                =
                $28,000

            </div>


            <p>

                <strong>
                    Impairment Loss:
                    $28,000
                </strong>

            </p>


            <div class="key-points">

                <h3>
                    CPA Takeaway
                </h3>

                <ul>

                    <li>
                        Capitalize costs necessary to acquire
                        an asset and prepare it for use.
                    </li>

                    <li>
                        Ordinary recurring maintenance is
                        generally expensed.
                    </li>

                    <li>
                        For long-lived assets held and used,
                        first test recoverability using
                        undiscounted cash flows.
                    </li>

                    <li>
                        If the asset is not recoverable,
                        measure the impairment loss using
                        fair value.
                    </li>

                </ul>

            </div>


            <div class="lesson-actions">

                <button class="primary-button"
                        onclick="showFARModule2TBS4()">

                    Try Again

                </button>


                <button class="back-button"
                        onclick="showFARModule2TBSHub()">

                    Back to Simulations

                </button>

            </div>


        </div>

    `;

}

function showFARModule2TBS5() {

    saveCurrentPage({
        page: "farModule2TBS5"
    });

    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 2 · TBS 5
                </h1>

                <p>
                    Liabilities, Investments & Equity
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule2TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
                </span>

                <h2>
                    Integrated Balance Sheet Analysis
                </h2>

                <p>
                    Analyze year-end information involving
                    bonds payable, investments, treasury stock,
                    and retained earnings.
                </p>

            </div>


            <div class="quiz-card">

                <h2>
                    Scenario
                </h2>


                <p>
                    Summit Corp. is preparing its December 31
                    financial statements. Analyze each of the
                    following independent items.
                </p>


                <div class="key-points">

                    <h3>
                        Item 1 — Bonds Payable
                    </h3>

                    <p>
                        On January 1, Summit issued
                        <strong>$500,000</strong> face amount
                        of bonds at par.
                    </p>

                    <p>
                        The bonds have a
                        <strong>6% annual stated interest rate</strong>,
                        with interest paid annually on December 31.
                    </p>

                </div>


                <div class="key-points">

                    <h3>
                        Item 2 — Trading Debt Security
                    </h3>

                    <p>
                        Summit purchased a debt security classified
                        as a <strong>trading security</strong>
                        for <strong>$90,000</strong>.
                    </p>

                    <p>
                        At December 31, its fair value is
                        <strong>$98,000</strong>.
                    </p>

                    <p>
                        Assume there are no other adjustments
                        affecting the investment's carrying amount.
                    </p>

                </div>


                <div class="key-points">

                    <h3>
                        Item 3 — Treasury Stock
                    </h3>

                    <p>
                        Summit reacquired
                        <strong>2,000 shares</strong>
                        of its own common stock for
                        <strong>$15 per share</strong>.
                    </p>

                    <p>
                        Summit uses the
                        <strong>cost method</strong>
                        for treasury stock.
                    </p>

                </div>


                <div class="key-points">

                    <h3>
                        Item 4 — Retained Earnings
                    </h3>

                    <p>
                        Beginning retained earnings were
                        <strong>$420,000</strong>.
                    </p>

                    <p>
                        Summit reports
                        <strong>$95,000</strong>
                        of net income for the year and
                        declared cash dividends of
                        <strong>$25,000</strong>.
                    </p>

                </div>


                <h2>
                    Required
                </h2>


                <div class="financial-example">


                    <div>

                        <span>
                            1. Annual Bond Interest Expense
                        </span>

                        <input
                            type="number"
                            id="far-m2-tbs5-interest"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            2. Unrealized Gain on
                            Trading Security
                        </span>

                        <input
                            type="number"
                            id="far-m2-tbs5-gain"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            3. Treasury Stock Balance
                        </span>

                        <input
                            type="number"
                            id="far-m2-tbs5-treasury"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            4. Ending Retained Earnings
                        </span>

                        <input
                            type="number"
                            id="far-m2-tbs5-re"
                            placeholder="Enter amount"
                        >

                    </div>


                </div>


                <div id="far-m2-tbs5-result"></div>


                <div class="lesson-actions">

                    <button class="primary-button"
                            onclick="gradeFARModule2TBS5()">

                        Submit Simulation

                    </button>

                </div>


            </div>


        </section>

    `;

}

function gradeFARModule2TBS5() {

    const interestAnswer =
        Number(
            document.getElementById(
                "far-m2-tbs5-interest"
            ).value
        );


    const gainAnswer =
        Number(
            document.getElementById(
                "far-m2-tbs5-gain"
            ).value
        );


    const treasuryAnswer =
        Number(
            document.getElementById(
                "far-m2-tbs5-treasury"
            ).value
        );


    const retainedEarningsAnswer =
        Number(
            document.getElementById(
                "far-m2-tbs5-re"
            ).value
        );


    const correctInterest = 30000;

    const correctGain = 8000;

    const correctTreasury = 30000;

    const correctRetainedEarnings = 490000;


    let score = 0;


    if (interestAnswer === correctInterest) {
        score += 25;
    }


    if (gainAnswer === correctGain) {
        score += 25;
    }


    if (treasuryAnswer === correctTreasury) {
        score += 25;
    }


    if (
        retainedEarningsAnswer ===
        correctRetainedEarnings
    ) {
        score += 25;
    }


    saveFARTBSBestScore(
    "farModule2TBS5Score",
    percentage
);


    const result =
        document.getElementById(
            "far-m2-tbs5-result"
        );


    result.innerHTML = `

        <div class="${
            score === 100
                ? "result-correct"
                : "review-recommendation"
        }">

            <h3>
                Score: ${score}%
            </h3>


            <h3>
                Step 1 — Bond Interest
            </h3>


            <p>
                Because the bonds were issued at par,
                the stated rate equals the effective
                rate at issuance in this simplified scenario.
            </p>


            <div class="formula-box">

                $500,000 × 6%
                =
                $30,000

            </div>


            <p>

                <strong>
                    Interest Expense:
                    $30,000
                </strong>

            </p>



            <h3>
                Step 2 — Trading Security
            </h3>


            <div class="formula-box">

                Fair Value
                $98,000

                − Carrying Amount
                $90,000

                =
                $8,000 Unrealized Gain

            </div>


            <p>
                Because the debt security is classified
                as trading, the unrealized holding gain
                is recognized in current-period earnings.
            </p>


            <p>

                <strong>
                    Unrealized Gain:
                    $8,000
                </strong>

            </p>



            <h3>
                Step 3 — Treasury Stock
            </h3>


            <div class="formula-box">

                2,000 Shares × $15
                =
                $30,000

            </div>


            <p>
                Under the cost method, treasury stock
                is recorded at the amount paid to
                reacquire the shares.
            </p>


            <p>

                <strong>
                    Treasury Stock:
                    $30,000
                </strong>

            </p>



            <h3>
                Step 4 — Retained Earnings
            </h3>


            <div class="formula-box">

                Beginning Retained Earnings
                $420,000

                + Net Income
                $95,000

                − Dividends
                $25,000

                =
                $490,000

            </div>


            <p>

                <strong>
                    Ending Retained Earnings:
                    $490,000
                </strong>

            </p>


            <div class="key-points">

                <h3>
                    CPA Takeaway
                </h3>

                <ul>

                    <li>
                        Bonds issued at par have no
                        initial premium or discount.
                    </li>

                    <li>
                        Trading debt securities are
                        reported at fair value, with
                        unrealized holding gains and losses
                        recognized in earnings.
                    </li>

                    <li>
                        Treasury stock under the cost method
                        is recorded at reacquisition cost
                        and is a contra-equity account.
                    </li>

                    <li>
                        Net income increases retained earnings,
                        while dividends decrease retained earnings.
                    </li>

                </ul>

            </div>


            <div class="lesson-actions">

                <button class="primary-button"
                        onclick="showFARModule2TBS5()">

                    Try Again

                </button>


                <button class="back-button"
                        onclick="showFARModule2TBSHub()">

                    Back to Simulations

                </button>

            </div>


        </div>

    `;

}

function showFARModule3TBSHub() {

    saveCurrentPage({
        page: "farModule3TBSHub"
    });

    setActiveNav("Learn");


    const tbs1Score =
        localStorage.getItem(
            "farModule3TBS1Score"
        );

    const tbs2Score =
        localStorage.getItem(
            "farModule3TBS2Score"
        );

    const tbs3Score =
        localStorage.getItem(
            "farModule3TBS3Score"
        );

    const tbs4Score =
        localStorage.getItem(
            "farModule3TBS4Score"
        );

    const tbs5Score =
        localStorage.getItem(
            "farModule3TBS5Score"
        );


    const completedCount = [
        tbs1Score,
        tbs2Score,
        tbs3Score,
        tbs4Score,
        tbs5Score
    ].filter(function(score) {

        return score !== null;

    }).length;


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 3 TBS Practice
                </h1>

                <p>
                    Select Transactions
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule(3)">

                ← Back to Module 3

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATIONS
                </span>

                <h2>
                    Module 3 Simulation Center
                </h2>

                <p>
                    Practice integrated CPA-style simulations
                    covering revenue, taxes, contingencies,
                    leases, accounting changes, and
                    subsequent events.
                </p>


                <div class="exam-progress">

                    TBS Progress:
                    ${completedCount} / 5 Completed

                </div>

            </div>



            <div class="lesson-card"
                 onclick="showFARModule3TBS1()">

                <div class="lesson-number">
                    TBS 1
                </div>

                <div class="lesson-info">

                    <h3>
                        Revenue Recognition Allocation
                    </h3>

                    <p>
                        Allocate transaction price among
                        multiple performance obligations
                        and determine revenue recognized.
                    </p>

                </div>

                <div class="lesson-status">

                    ${
                        tbs1Score !== null
                            ? "✓ " + tbs1Score + "%"
                            : "Start →"
                    }

                </div>

            </div>



            <div class="lesson-card"
     onclick="showFARModule3TBS2()">

    <div class="lesson-number">
        TBS 2
    </div>

    <div class="lesson-info">

        <h3>
            Deferred Taxes
        </h3>

        <p>
            Analyze temporary differences,
            deferred tax assets, deferred tax
            liabilities, and valuation allowances.
        </p>

    </div>

    <div class="lesson-status">

        ${
            tbs2Score !== null
                ? "✓ " + tbs2Score + "%"
                : "Start →"
        }

    </div>

</div>



            <div class="lesson-card"
     onclick="showFARModule3TBS3()">

    <div class="lesson-number">
        TBS 3
    </div>

    <div class="lesson-info">

        <h3>
            Contingencies & Subsequent Events
        </h3>

        <p>
            Determine whether items should be
            accrued, disclosed, adjusted,
            or left unrecognized.
        </p>

    </div>

    <div class="lesson-status">

        ${
            tbs3Score !== null
                ? "✓ " + tbs3Score + "%"
                : "Start →"
        }

    </div>

</div>



            <div class="lesson-card"
     onclick="showFARModule3TBS4()">

    <div class="lesson-number">
        TBS 4
    </div>

    <div class="lesson-info">

        <h3>
            Lessee Accounting
        </h3>

        <p>
            Calculate lease liability,
            right-of-use asset, interest,
            and ending lease liability.
        </p>

    </div>

    <div class="lesson-status">

        ${
            tbs4Score !== null
                ? "✓ " + tbs4Score + "%"
                : "Start →"
        }

    </div>

</div>



            <div class="lesson-card"
     onclick="showFARModule3TBS5()">

    <div class="lesson-number">
        TBS 5
    </div>

    <div class="lesson-info">

        <h3>
            Integrated Select Transactions
        </h3>

        <p>
            Combine accounting changes, contingencies,
            revenue, fair value, and subsequent events
            in one integrated simulation.
        </p>

    </div>

    <div class="lesson-status">

        ${
            tbs5Score !== null
                ? "✓ " + tbs5Score + "%"
                : "Start →"
        }

    </div>

</div>


        </section>

    `;

}

function showFARModule3TBS1() {

    saveCurrentPage({
        page: "farModule3TBS1"
    });

    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 3 · TBS 1
                </h1>

                <p>
                    Revenue Recognition Allocation
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule3TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
                </span>

                <h2>
                    Multiple Performance Obligations
                </h2>

                <p>
                    Allocate a contract's transaction price
                    using relative standalone selling prices
                    and determine revenue recognized.
                </p>

            </div>


            <div class="quiz-card">

                <h2>
                    Scenario
                </h2>


                <p>
                    Nova Corp. enters into a contract with
                    a customer for a total transaction price
                    of <strong>$108,000</strong>.
                </p>


                <p>
                    The contract contains two distinct
                    performance obligations:
                </p>


                <div class="financial-example">

                    <div>

                        <span>
                            Equipment
                        </span>

                        <strong>
                            Standalone Selling Price:
                            $100,000
                        </strong>

                    </div>


                    <div>

                        <span>
                            One-Year Service Plan
                        </span>

                        <strong>
                            Standalone Selling Price:
                            $20,000
                        </strong>

                    </div>

                </div>


                <p>
                    The equipment is delivered to the
                    customer on January 1 and control
                    transfers immediately.
                </p>


                <p>
                    The one-year service plan is provided
                    evenly over the next 12 months.
                </p>


                <h2>
                    Required
                </h2>


                <div class="financial-example">


                    <div>

                        <span>
                            1. Transaction Price Allocated
                            to Equipment
                        </span>

                        <input
                            type="number"
                            id="far-m3-tbs1-equipment"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            2. Transaction Price Allocated
                            to Service Plan
                        </span>

                        <input
                            type="number"
                            id="far-m3-tbs1-service"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            3. Revenue Recognized
                            on January 1
                        </span>

                        <input
                            type="number"
                            id="far-m3-tbs1-day1"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            4. Monthly Service Revenue
                        </span>

                        <input
                            type="number"
                            id="far-m3-tbs1-monthly"
                            placeholder="Enter amount"
                        >

                    </div>


                </div>


                <div id="far-m3-tbs1-result"></div>


                <div class="lesson-actions">

                    <button class="primary-button"
                            onclick="gradeFARModule3TBS1()">

                        Submit Simulation

                    </button>

                </div>


            </div>


        </section>

    `;

}

function gradeFARModule3TBS1() {

    const equipmentAnswer =
        Number(
            document.getElementById(
                "far-m3-tbs1-equipment"
            ).value
        );


    const serviceAnswer =
        Number(
            document.getElementById(
                "far-m3-tbs1-service"
            ).value
        );


    const day1Answer =
        Number(
            document.getElementById(
                "far-m3-tbs1-day1"
            ).value
        );


    const monthlyAnswer =
        Number(
            document.getElementById(
                "far-m3-tbs1-monthly"
            ).value
        );


    const correctEquipment = 90000;

    const correctService = 18000;

    const correctDay1 = 90000;

    const correctMonthly = 1500;


    let score = 0;


    if (equipmentAnswer === correctEquipment) {
        score += 25;
    }


    if (serviceAnswer === correctService) {
        score += 25;
    }


    if (day1Answer === correctDay1) {
        score += 25;
    }


    if (monthlyAnswer === correctMonthly) {
        score += 25;
    }


    saveFARTBSBestScore(
    "farModule3TBS1Score",
    percentage
);


    const result =
        document.getElementById(
            "far-m3-tbs1-result"
        );


    result.innerHTML = `

        <div class="${
            score === 100
                ? "result-correct"
                : "review-recommendation"
        }">

            <h3>
                Score: ${score}%
            </h3>


            <h3>
                Step 1 — Relative Standalone Selling Prices
            </h3>


            <div class="formula-box">

                Equipment:
                $100,000

                Service Plan:
                $20,000

                Total:
                $120,000

            </div>


            <p>
                Equipment represents:
            </p>


            <div class="formula-box">

                $100,000 ÷ $120,000
                =
                83.3333%

            </div>


            <p>
                Service represents:
            </p>


            <div class="formula-box">

                $20,000 ÷ $120,000
                =
                16.6667%

            </div>


            <h3>
                Step 2 — Allocate Transaction Price
            </h3>


            <div class="formula-box">

                Equipment:

                $108,000 × 83.3333%
                =
                $90,000

            </div>


            <div class="formula-box">

                Service:

                $108,000 × 16.6667%
                =
                $18,000

            </div>


            <p>

                <strong>
                    Equipment Allocation:
                    $90,000
                </strong>

            </p>


            <p>

                <strong>
                    Service Allocation:
                    $18,000
                </strong>

            </p>


            <h3>
                Step 3 — January 1 Revenue
            </h3>


            <p>
                Control of the equipment transfers
                immediately on January 1.
            </p>


            <div class="formula-box">

                Revenue Recognized January 1
                =
                $90,000

            </div>


            <h3>
                Step 4 — Monthly Service Revenue
            </h3>


            <p>
                The $18,000 service allocation is
                recognized evenly over 12 months.
            </p>


            <div class="formula-box">

                $18,000 ÷ 12
                =
                $1,500 Per Month

            </div>


            <div class="key-points">

                <h3>
                    CPA Takeaway
                </h3>

                <ul>

                    <li>
                        Allocate transaction price using
                        relative standalone selling prices.
                    </li>

                    <li>
                        Revenue allocated to equipment is
                        recognized when control transfers.
                    </li>

                    <li>
                        Revenue allocated to services is
                        recognized as the services are
                        performed.
                    </li>

                    <li>
                        Cash received and revenue recognized
                        are not necessarily the same amount
                        at the same time.
                    </li>

                </ul>

            </div>


            <div class="lesson-actions">

                <button class="primary-button"
                        onclick="showFARModule3TBS1()">

                    Try Again

                </button>


                <button class="back-button"
                        onclick="showFARModule3TBSHub()">

                    Back to Simulations

                </button>

            </div>


        </div>

    `;

}

function showFARModule3TBS2() {

    saveCurrentPage({
        page: "farModule3TBS2"
    });

    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 3 · TBS 2
                </h1>

                <p>
                    Deferred Taxes
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule3TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
                </span>

                <h2>
                    Deferred Tax Analysis
                </h2>

                <p>
                    Calculate deferred tax assets and
                    liabilities and determine the net amount
                    after considering a valuation allowance.
                </p>

            </div>


            <div class="quiz-card">

                <h2>
                    Scenario
                </h2>


                <p>
                    Apex Corp. has the following temporary
                    differences at December 31.
                </p>


                <div class="financial-example">

                    <div>

                        <span>
                            Depreciation Difference
                        </span>

                        <strong>
                            $120,000 Future Taxable Amount
                        </strong>

                    </div>


                    <div>

                        <span>
                            Warranty Liability
                        </span>

                        <strong>
                            $60,000 Future Deductible Amount
                        </strong>

                    </div>


                    <div>

                        <span>
                            Accrued Compensation
                        </span>

                        <strong>
                            $40,000 Future Deductible Amount
                        </strong>

                    </div>

                </div>


                <p>
                    The enacted tax rate expected when
                    these temporary differences reverse
                    is <strong>25%</strong>.
                </p>


                <p>
                    Based on available evidence, Apex
                    determines that a
                    <strong>$5,000 valuation allowance</strong>
                    is required against its deferred tax assets.
                </p>


                <h2>
                    Required
                </h2>


                <div class="financial-example">


                    <div>

                        <span>
                            1. Deferred Tax Liability
                        </span>

                        <input
                            type="number"
                            id="far-m3-tbs2-dtl"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            2. Gross Deferred Tax Asset
                        </span>

                        <input
                            type="number"
                            id="far-m3-tbs2-dta"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            3. Net Deferred Tax Asset
                            After Valuation Allowance
                        </span>

                        <input
                            type="number"
                            id="far-m3-tbs2-netdta"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            4. Net Deferred Tax Position
                            (Enter Net Liability Amount)
                        </span>

                        <input
                            type="number"
                            id="far-m3-tbs2-net"
                            placeholder="Enter amount"
                        >

                    </div>


                </div>


                <div id="far-m3-tbs2-result"></div>


                <div class="lesson-actions">

                    <button class="primary-button"
                            onclick="gradeFARModule3TBS2()">

                        Submit Simulation

                    </button>

                </div>


            </div>


        </section>

    `;

}

function gradeFARModule3TBS2() {

    const dtlAnswer =
        Number(
            document.getElementById(
                "far-m3-tbs2-dtl"
            ).value
        );


    const dtaAnswer =
        Number(
            document.getElementById(
                "far-m3-tbs2-dta"
            ).value
        );


    const netDTAAnswer =
        Number(
            document.getElementById(
                "far-m3-tbs2-netdta"
            ).value
        );


    const netAnswer =
        Number(
            document.getElementById(
                "far-m3-tbs2-net"
            ).value
        );


    const correctDTL = 30000;

    const correctDTA = 25000;

    const correctNetDTA = 20000;

    const correctNet = 10000;


    let score = 0;


    if (dtlAnswer === correctDTL) {
        score += 25;
    }


    if (dtaAnswer === correctDTA) {
        score += 25;
    }


    if (netDTAAnswer === correctNetDTA) {
        score += 25;
    }


    if (netAnswer === correctNet) {
        score += 25;
    }


    saveFARTBSBestScore(
    "farModule3TBS2Score",
    percentage
);


    const result =
        document.getElementById(
            "far-m3-tbs2-result"
        );


    result.innerHTML = `

        <div class="${
            score === 100
                ? "result-correct"
                : "review-recommendation"
        }">

            <h3>
                Score: ${score}%
            </h3>


            <h3>
                Step 1 — Deferred Tax Liability
            </h3>


            <p>
                The $120,000 depreciation difference
                creates future taxable amounts.
            </p>


            <div class="formula-box">

                $120,000 × 25%
                =
                $30,000 DTL

            </div>


            <h3>
                Step 2 — Gross Deferred Tax Asset
            </h3>


            <p>
                Future deductible amounts total:
            </p>


            <div class="formula-box">

                Warranty
                $60,000

                + Accrued Compensation
                $40,000

                =
                $100,000

            </div>


            <div class="formula-box">

                $100,000 × 25%
                =
                $25,000 Gross DTA

            </div>


            <h3>
                Step 3 — Valuation Allowance
            </h3>


            <div class="formula-box">

                Gross DTA
                $25,000

                − Valuation Allowance
                $5,000

                =
                $20,000 Net DTA

            </div>


            <h3>
                Step 4 — Net Deferred Tax Position
            </h3>


            <div class="formula-box">

                DTL
                $30,000

                − Net DTA
                $20,000

                =
                $10,000 Net Deferred Tax Liability

            </div>


            <div class="key-points">

                <h3>
                    CPA Takeaway
                </h3>

                <ul>

                    <li>
                        Future taxable amounts create DTLs.
                    </li>

                    <li>
                        Future deductible amounts create DTAs.
                    </li>

                    <li>
                        A valuation allowance reduces the
                        deferred tax asset expected to be realized.
                    </li>

                    <li>
                        Netting depends on applicable tax
                        jurisdiction and classification rules,
                        but this simulation focuses on the
                        arithmetic relationship among the balances.
                    </li>

                </ul>

            </div>


            <div class="lesson-actions">

                <button class="primary-button"
                        onclick="showFARModule3TBS2()">

                    Try Again

                </button>


                <button class="back-button"
                        onclick="showFARModule3TBSHub()">

                    Back to Simulations

                </button>

            </div>


        </div>

    `;

}

function showFARModule3TBS3() {

    saveCurrentPage({
        page: "farModule3TBS3"
    });

    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 3 · TBS 3
                </h1>

                <p>
                    Contingencies & Subsequent Events
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule3TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
                </span>

                <h2>
                    Year-End Recognition Analysis
                </h2>

                <p>
                    Analyze several year-end events and
                    determine the appropriate accounting
                    treatment.
                </p>

            </div>


            <div class="quiz-card">

                <h2>
                    Scenario
                </h2>

                <p>
                    Delta Corp. is preparing its December 31
                    financial statements. Consider each
                    independent item below.
                </p>


                <div class="key-points">

                    <h3>
                        Item 1 — Lawsuit
                    </h3>

                    <p>
                        A lawsuit existed at December 31.
                        Management concludes that a loss is
                        <strong>probable</strong> and reasonably
                        estimable at <strong>$90,000</strong>.
                    </p>

                </div>


                <div class="key-points">

                    <h3>
                        Item 2 — Possible Claim
                    </h3>

                    <p>
                        A separate claim is considered
                        <strong>reasonably possible</strong>,
                        and the potential loss can be estimated.
                    </p>

                </div>


                <div class="key-points">

                    <h3>
                        Item 3 — Customer Bankruptcy
                    </h3>

                    <p>
                        A major customer declares bankruptcy
                        shortly after year-end.
                    </p>

                    <p>
                        Evidence shows that the customer's
                        severe financial problems existed
                        before December 31.
                    </p>

                </div>


                <div class="key-points">

                    <h3>
                        Item 4 — Warehouse Fire
                    </h3>

                    <p>
                        A warehouse is destroyed by a fire
                        after year-end.
                    </p>

                    <p>
                        No related condition existed at
                        December 31, and the loss is material.
                    </p>

                </div>


                <h2>
                    Required
                </h2>

                <p>
                    Enter the requested amounts below.
                </p>


                <div class="financial-example">

                    <div>

                        <span>
                            1. Lawsuit Loss to Accrue
                        </span>

                        <input
                            type="number"
                            id="far-m3-tbs3-lawsuit"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            2. Amount to Accrue for the
                            Reasonably Possible Claim
                        </span>

                        <input
                            type="number"
                            id="far-m3-tbs3-possible"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            3. Customer Bankruptcy:
                            Enter 1 if Year-End Statements
                            Should Be Adjusted, 0 if Not
                        </span>

                        <input
                            type="number"
                            id="far-m3-tbs3-bankruptcy"
                            placeholder="Enter 1 or 0"
                        >

                    </div>


                    <div>

                        <span>
                            4. Warehouse Fire:
                            Enter 1 if Year-End Statements
                            Should Be Adjusted, 0 if Not
                        </span>

                        <input
                            type="number"
                            id="far-m3-tbs3-fire"
                            placeholder="Enter 1 or 0"
                        >

                    </div>

                </div>


                <div id="far-m3-tbs3-result"></div>


                <div class="lesson-actions">

                    <button class="primary-button"
                            onclick="gradeFARModule3TBS3()">

                        Submit Simulation

                    </button>

                </div>

            </div>


        </section>

    `;

}

function gradeFARModule3TBS3() {

    const lawsuitInput =
        document.getElementById(
            "far-m3-tbs3-lawsuit"
        ).value;

    const possibleInput =
        document.getElementById(
            "far-m3-tbs3-possible"
        ).value;

    const bankruptcyInput =
        document.getElementById(
            "far-m3-tbs3-bankruptcy"
        ).value;

    const fireInput =
        document.getElementById(
            "far-m3-tbs3-fire"
        ).value;


    const lawsuitAnswer =
        lawsuitInput.trim() === ""
            ? null
            : Number(lawsuitInput);

    const possibleAnswer =
        possibleInput.trim() === ""
            ? null
            : Number(possibleInput);

    const bankruptcyAnswer =
        bankruptcyInput.trim() === ""
            ? null
            : Number(bankruptcyInput);

    const fireAnswer =
        fireInput.trim() === ""
            ? null
            : Number(fireInput);


    const correctLawsuit = 90000;
    const correctPossible = 0;
    const correctBankruptcy = 1;
    const correctFire = 0;


    let score = 0;


    if (lawsuitAnswer === correctLawsuit) {
        score += 25;
    }


    if (possibleAnswer === correctPossible) {
        score += 25;
    }


    if (bankruptcyAnswer === correctBankruptcy) {
        score += 25;
    }


    if (fireAnswer === correctFire) {
        score += 25;
    }


    saveFARTBSBestScore(
    "farModule3TBS3Score",
    percentage
);


    const result =
        document.getElementById(
            "far-m3-tbs3-result"
        );


    result.innerHTML = `

        <div class="${
            score === 100
                ? "result-correct"
                : "review-recommendation"
        }">

            <h3>
                Score: ${score}%
            </h3>


            <h3>
                Item 1 — Lawsuit
            </h3>

            <p>
                The loss is probable and reasonably
                estimable.
            </p>

            <div class="formula-box">

                Loss Accrued
                =
                $90,000

            </div>


            <h3>
                Item 2 — Reasonably Possible Claim
            </h3>

            <p>
                A reasonably possible loss is generally
                disclosed rather than accrued.
            </p>

            <div class="formula-box">

                Amount Accrued
                =
                $0

            </div>


            <h3>
                Item 3 — Customer Bankruptcy
            </h3>

            <p>
                The bankruptcy provides additional evidence
                about financial difficulty that already
                existed at December 31.
            </p>

            <div class="formula-box">

                Existing Year-End Condition
                → Adjust

                Correct Entry:
                1

            </div>


            <h3>
                Item 4 — Warehouse Fire
            </h3>

            <p>
                The fire resulted from a condition arising
                after year-end.
            </p>

            <p>
                The year-end amounts generally are not
                adjusted, although the material event may
                require disclosure.
            </p>

            <div class="formula-box">

                New Post-Year-End Condition
                → No Adjustment

                Correct Entry:
                0

            </div>


            <div class="key-points">

                <h3>
                    CPA Takeaway
                </h3>

                <ul>

                    <li>
                        Probable + reasonably estimable
                        loss → accrue.
                    </li>

                    <li>
                        Reasonably possible loss
                        → generally disclose.
                    </li>

                    <li>
                        Subsequent event confirming an
                        existing year-end condition
                        → adjust.
                    </li>

                    <li>
                        New condition arising after
                        year-end → generally no adjustment,
                        but disclose if material.
                    </li>

                </ul>

            </div>


            <div class="lesson-actions">

                <button class="primary-button"
                        onclick="showFARModule3TBS3()">

                    Try Again

                </button>


                <button class="back-button"
                        onclick="showFARModule3TBSHub()">

                    Back to Simulations

                </button>

            </div>

        </div>

    `;

}

function showFARModule3TBS4() {

    saveCurrentPage({
        page: "farModule3TBS4"
    });

    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 3 · TBS 4
                </h1>

                <p>
                    Lessee Accounting
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule3TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
                </span>

                <h2>
                    Lease Measurement
                </h2>

                <p>
                    Determine the initial lease liability,
                    right-of-use asset, interest expense,
                    and ending lease liability.
                </p>

            </div>


            <div class="quiz-card">

                <h2>
                    Scenario
                </h2>


                <p>
                    Orion Corp. enters into a lease on
                    January 1.
                </p>


                <p>
                    The present value of the required
                    lease payments at commencement is
                    <strong>$180,000</strong>.
                </p>


                <p>
                    Orion also:
                </p>


                <div class="key-points">

                    <ul>

                        <li>
                            Makes a lease prepayment of
                            <strong>$8,000</strong>.
                        </li>

                        <li>
                            Receives a lease incentive of
                            <strong>$3,000</strong>.
                        </li>

                        <li>
                            Incurs qualifying initial direct
                            costs of <strong>$5,000</strong>.
                        </li>

                    </ul>

                </div>


                <p>
                    Assume the lease is classified as a
                    <strong>finance lease</strong>.
                </p>


                <p>
                    The annual discount rate is
                    <strong>6%</strong>.
                </p>


                <p>
                    At the end of Year 1, Orion makes a
                    required lease payment of
                    <strong>$45,000</strong>.
                </p>


                <h2>
                    Required
                </h2>


                <div class="financial-example">


                    <div>

                        <span>
                            1. Initial Lease Liability
                        </span>

                        <input
                            type="number"
                            id="far-m3-tbs4-liability"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            2. Initial Right-of-Use Asset
                        </span>

                        <input
                            type="number"
                            id="far-m3-tbs4-rou"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            3. Year 1 Interest Expense
                        </span>

                        <input
                            type="number"
                            id="far-m3-tbs4-interest"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            4. Ending Lease Liability
                            After Year 1 Payment
                        </span>

                        <input
                            type="number"
                            id="far-m3-tbs4-ending"
                            placeholder="Enter amount"
                        >

                    </div>


                </div>


                <div id="far-m3-tbs4-result"></div>


                <div class="lesson-actions">

                    <button class="primary-button"
                            onclick="gradeFARModule3TBS4()">

                        Submit Simulation

                    </button>

                </div>


            </div>


        </section>

    `;

}

function gradeFARModule3TBS4() {

    const liabilityAnswer =
        Number(
            document.getElementById(
                "far-m3-tbs4-liability"
            ).value
        );


    const rouAnswer =
        Number(
            document.getElementById(
                "far-m3-tbs4-rou"
            ).value
        );


    const interestAnswer =
        Number(
            document.getElementById(
                "far-m3-tbs4-interest"
            ).value
        );


    const endingAnswer =
        Number(
            document.getElementById(
                "far-m3-tbs4-ending"
            ).value
        );


    const correctLiability = 180000;

    const correctROU = 190000;

    const correctInterest = 10800;

    const correctEnding = 145800;


    let score = 0;


    if (liabilityAnswer === correctLiability) {
        score += 25;
    }


    if (rouAnswer === correctROU) {
        score += 25;
    }


    if (interestAnswer === correctInterest) {
        score += 25;
    }


    if (endingAnswer === correctEnding) {
        score += 25;
    }


    saveFARTBSBestScore(
    "farModule3TBS4Score",
    percentage
);


    const result =
        document.getElementById(
            "far-m3-tbs4-result"
        );


    result.innerHTML = `

        <div class="${
            score === 100
                ? "result-correct"
                : "review-recommendation"
        }">

            <h3>
                Score: ${score}%
            </h3>


            <h3>
                Step 1 — Initial Lease Liability
            </h3>


            <p>
                The present value of required lease payments
                is given as $180,000.
            </p>


            <div class="formula-box">

                Initial Lease Liability
                =
                $180,000

            </div>


            <h3>
                Step 2 — Initial ROU Asset
            </h3>


            <div class="formula-box">

                Lease Liability
                $180,000

                + Prepayment
                $8,000

                + Initial Direct Costs
                $5,000

                − Lease Incentive
                $3,000

                =
                $190,000

            </div>


            <h3>
                Step 3 — Year 1 Interest
            </h3>


            <div class="formula-box">

                $180,000 × 6%
                =
                $10,800

            </div>


            <p>

                <strong>
                    Interest Expense:
                    $10,800
                </strong>

            </p>


            <h3>
                Step 4 — Ending Lease Liability
            </h3>


            <p>
                Interest increases the lease liability,
                while the lease payment reduces it.
            </p>


            <div class="formula-box">

                Beginning Liability
                $180,000

                + Interest
                $10,800

                − Payment
                $45,000

                =
                $145,800

            </div>


            <p>

                <strong>
                    Ending Lease Liability:
                    $145,800
                </strong>

            </p>


            <div class="key-points">

                <h3>
                    CPA Takeaway
                </h3>

                <ul>

                    <li>
                        Initial lease liability is based
                        on present value of lease payments.
                    </li>

                    <li>
                        ROU asset begins with the lease
                        liability and is adjusted for
                        prepayments, incentives, and
                        qualifying initial direct costs.
                    </li>

                    <li>
                        Finance lease interest is calculated
                        using the effective interest method.
                    </li>

                    <li>
                        Lease payments reduce the liability
                        after accounting for interest.
                    </li>

                </ul>

            </div>


            <div class="lesson-actions">

                <button class="primary-button"
                        onclick="showFARModule3TBS4()">

                    Try Again

                </button>


                <button class="back-button"
                        onclick="showFARModule3TBSHub()">

                    Back to Simulations

                </button>

            </div>


        </div>

    `;

}

function showFARModule3TBS5() {

    saveCurrentPage({
        page: "farModule3TBS5"
    });

    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 3 · TBS 5
                </h1>

                <p>
                    Integrated Select Transactions
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule3TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
                </span>

                <h2>
                    Integrated Year-End Analysis
                </h2>

                <p>
                    Apply multiple Module 3 concepts to
                    independent year-end transactions.
                </p>

            </div>


            <div class="quiz-card">

                <h2>
                    Scenario
                </h2>

                <p>
                    Vertex Corp. is preparing its December 31
                    financial statements. Analyze each
                    independent item below.
                </p>


                <div class="key-points">

                    <h3>
                        Item 1 — Accounting Estimate
                    </h3>

                    <p>
                        Based on new operating information,
                        Vertex revises the remaining useful
                        life of equipment.
                    </p>

                    <p>
                        Enter <strong>1</strong> if the change
                        should generally be accounted for
                        prospectively, or <strong>0</strong>
                        if not.
                    </p>

                </div>


                <div class="key-points">

                    <h3>
                        Item 2 — Loss Contingency
                    </h3>

                    <p>
                        A lawsuit existing at December 31 is
                        probable and reasonably estimable at
                        <strong>$140,000</strong>.
                    </p>

                </div>


                <div class="key-points">

                    <h3>
                        Item 3 — Advance Customer Payment
                    </h3>

                    <p>
                        Vertex receives
                        <strong>$48,000</strong>
                        on December 1 for twelve months of
                        services beginning immediately.
                    </p>

                    <p>
                        Services are provided evenly over
                        the contract period.
                    </p>

                </div>


                <div class="key-points">

                    <h3>
                        Item 4 — Fair Value
                    </h3>

                    <p>
                        Vertex owns an investment with an
                        unadjusted quoted market price of
                        <strong>$72,000</strong> for an
                        identical asset in an active market.
                    </p>

                    <p>
                        Enter the fair value amount to use.
                    </p>

                </div>


                <div class="key-points">

                    <h3>
                        Item 5 — Subsequent Event
                    </h3>

                    <p>
                        After year-end, a customer owing
                        Vertex money declares bankruptcy.
                        Evidence confirms that the customer's
                        severe financial problems existed
                        before December 31.
                    </p>

                    <p>
                        Enter <strong>1</strong> if the
                        year-end financial statements should
                        generally be adjusted, or
                        <strong>0</strong> if not.
                    </p>

                </div>


                <h2>
                    Required
                </h2>


                <div class="financial-example">

                    <div>

                        <span>
                            1. Prospective Treatment?
                            Enter 1 or 0
                        </span>

                        <input
                            type="number"
                            id="far-m3-tbs5-estimate"
                            placeholder="Enter 1 or 0"
                        >

                    </div>


                    <div>

                        <span>
                            2. Lawsuit Loss to Accrue
                        </span>

                        <input
                            type="number"
                            id="far-m3-tbs5-lawsuit"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            3. Contract Liability
                            at December 31
                        </span>

                        <input
                            type="number"
                            id="far-m3-tbs5-contract"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            4. Fair Value Measurement
                        </span>

                        <input
                            type="number"
                            id="far-m3-tbs5-fairvalue"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            5. Adjust for Bankruptcy?
                            Enter 1 or 0
                        </span>

                        <input
                            type="number"
                            id="far-m3-tbs5-bankruptcy"
                            placeholder="Enter 1 or 0"
                        >

                    </div>

                </div>


                <div id="far-m3-tbs5-result"></div>


                <div class="lesson-actions">

                    <button class="primary-button"
                            onclick="gradeFARModule3TBS5()">

                        Submit Simulation

                    </button>

                </div>


            </div>


        </section>

    `;

}

function gradeFARModule3TBS5() {

    const estimateAnswer =
        Number(
            document.getElementById(
                "far-m3-tbs5-estimate"
            ).value
        );


    const lawsuitAnswer =
        Number(
            document.getElementById(
                "far-m3-tbs5-lawsuit"
            ).value
        );


    const contractAnswer =
        Number(
            document.getElementById(
                "far-m3-tbs5-contract"
            ).value
        );


    const fairValueAnswer =
        Number(
            document.getElementById(
                "far-m3-tbs5-fairvalue"
            ).value
        );


    const bankruptcyAnswer =
        Number(
            document.getElementById(
                "far-m3-tbs5-bankruptcy"
            ).value
        );


    const correctEstimate = 1;

    const correctLawsuit = 140000;

    const correctContract = 44000;

    const correctFairValue = 72000;

    const correctBankruptcy = 1;


    let score = 0;


    if (estimateAnswer === correctEstimate) {
        score += 20;
    }


    if (lawsuitAnswer === correctLawsuit) {
        score += 20;
    }


    if (contractAnswer === correctContract) {
        score += 20;
    }


    if (fairValueAnswer === correctFairValue) {
        score += 20;
    }


    if (bankruptcyAnswer === correctBankruptcy) {
        score += 20;
    }


    saveFARTBSBestScore(
    "farModule3TBS5Score",
    percentage
);


    const result =
        document.getElementById(
            "far-m3-tbs5-result"
        );


    result.innerHTML = `

        <div class="${
            score === 100
                ? "result-correct"
                : "review-recommendation"
        }">

            <h3>
                Score: ${score}%
            </h3>


            <h3>
                Item 1 — Accounting Estimate
            </h3>

            <p>
                A revised useful life caused by new
                information is a change in accounting
                estimate.
            </p>

            <div class="formula-box">

                Change in Estimate
                → Prospective

                Correct Entry:
                1

            </div>


            <h3>
                Item 2 — Loss Contingency
            </h3>

            <p>
                The lawsuit is probable and reasonably
                estimable.
            </p>

            <div class="formula-box">

                Loss Accrued
                =
                $140,000

            </div>


            <h3>
                Item 3 — Contract Liability
            </h3>

            <p>
                Monthly service revenue is:
            </p>

            <div class="formula-box">

                $48,000 ÷ 12
                =
                $4,000 Per Month

            </div>

            <p>
                One month of service has been provided
                by December 31.
            </p>

            <div class="formula-box">

                Cash Received
                $48,000

                − Revenue Earned
                $4,000

                =
                $44,000 Contract Liability

            </div>


            <h3>
                Item 4 — Fair Value
            </h3>

            <p>
                An unadjusted quoted price for an identical
                asset in an active market is a Level 1 input.
            </p>

            <div class="formula-box">

                Fair Value
                =
                $72,000

            </div>


            <h3>
                Item 5 — Subsequent Event
            </h3>

            <p>
                The bankruptcy confirms financial difficulty
                that existed at the balance sheet date.
            </p>

            <div class="formula-box">

                Existing Year-End Condition
                → Adjust

                Correct Entry:
                1

            </div>


            <div class="key-points">

                <h3>
                    Module 3 Final Takeaway
                </h3>

                <ul>

                    <li>
                        Estimate changes are generally
                        prospective.
                    </li>

                    <li>
                        Probable and estimable losses
                        are accrued.
                    </li>

                    <li>
                        Advance cash remains a contract
                        liability until performance occurs.
                    </li>

                    <li>
                        Level 1 fair value evidence uses
                        quoted prices for identical items
                        in active markets.
                    </li>

                    <li>
                        Subsequent events confirming
                        year-end conditions generally
                        require adjustment.
                    </li>

                </ul>

            </div>


            <div class="lesson-actions">

                <button class="primary-button"
                        onclick="showFARModule3TBS5()">

                    Try Again

                </button>


                <button class="back-button"
                        onclick="showFARModule3TBSHub()">

                    Back to Simulations

                </button>

            </div>


        </div>

    `;

}

function showFARModule4TBSHub() {

    saveCurrentPage({
        page: "farModule4TBSHub"
    });

    setActiveNav("Learn");


    const tbs1Score =
        localStorage.getItem(
            "farModule4TBS1Score"
        );

    const tbs2Score =
        localStorage.getItem(
            "farModule4TBS2Score"
        );

    const tbs3Score =
        localStorage.getItem(
            "farModule4TBS3Score"
        );

    const tbs4Score =
        localStorage.getItem(
            "farModule4TBS4Score"
        );

    const tbs5Score =
        localStorage.getItem(
            "farModule4TBS5Score"
        );


    const completedCount = [
        tbs1Score,
        tbs2Score,
        tbs3Score,
        tbs4Score,
        tbs5Score
    ].filter(function(score) {

        return score !== null;

    }).length;


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 4 TBS Practice
                </h1>

                <p>
                    State & Local Government Concepts
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule(4)">

                ← Back to Module 4

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATIONS
                </span>

                <h2>
                    Module 4 Simulation Center
                </h2>

                <p>
                    Practice governmental fund accounting,
                    reconciliations, proprietary and fiduciary
                    reporting, and budgetary accounting.
                </p>


                <div class="exam-progress">

                    TBS Progress:
                    ${completedCount} / 5 Completed

                </div>

            </div>


            <div class="lesson-card"
                 onclick="showFARModule4TBS1()">

                <div class="lesson-number">
                    TBS 1
                </div>

                <div class="lesson-info">

                    <h3>
                        Modified Accrual & Fund Reporting
                    </h3>

                    <p>
                        Analyze measurable-and-available revenue,
                        capital outlays, bond proceeds,
                        and governmental fund results.
                    </p>

                </div>

                <div class="lesson-status">

                    ${
                        tbs1Score !== null
                            ? "✓ " + tbs1Score + "%"
                            : "Start →"
                    }

                </div>

            </div>


            <div class="lesson-card"
     onclick="showFARModule4TBS2()">

    <div class="lesson-number">
        TBS 2
    </div>

    <div class="lesson-info">

        <h3>
            Fund Classification
        </h3>

        <p>
            Identify governmental, proprietary,
            and fiduciary fund types from
            real-world scenarios.
        </p>

    </div>

    <div class="lesson-status">

        ${
            tbs2Score !== null
                ? "✓ " + tbs2Score + "%"
                : "Start →"
        }

    </div>

</div>


            <div class="lesson-card"
     onclick="showFARModule4TBS3()">

    <div class="lesson-number">
        TBS 3
    </div>

    <div class="lesson-info">

        <h3>
            Fund-to-Government-Wide Reconciliation
        </h3>

        <p>
            Convert governmental fund results
            to government-wide accounting.
        </p>

    </div>

    <div class="lesson-status">

        ${
            tbs3Score !== null
                ? "✓ " + tbs3Score + "%"
                : "Start →"
        }

    </div>

</div>


            <div class="lesson-card"
     onclick="showFARModule4TBS4()">

    <div class="lesson-number">
        TBS 4
    </div>

    <div class="lesson-info">

        <h3>
            Budgetary Accounting & Encumbrances
        </h3>

        <p>
            Analyze estimated revenues, appropriations,
            encumbrances, expenditures, and budgetary results.
        </p>

    </div>

    <div class="lesson-status">

        ${
            tbs4Score !== null
                ? "✓ " + tbs4Score + "%"
                : "Start →"
        }

    </div>

</div>


            <div class="lesson-card"
     onclick="showFARModule4TBS5()">

    <div class="lesson-number">
        TBS 5
    </div>

    <div class="lesson-info">

        <h3>
            Integrated Governmental Accounting
        </h3>

        <p>
            Combine fund classification,
            modified accrual, reconciliation,
            and government-wide reporting.
        </p>

    </div>

    <div class="lesson-status">

        ${
            tbs5Score !== null
                ? "✓ " + tbs5Score + "%"
                : "Start →"
        }

    </div>

</div>


        </section>

    `;

}

function showFARModule4TBS1() {

    saveCurrentPage({
        page: "farModule4TBS1"
    });

    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 4 · TBS 1
                </h1>

                <p>
                    Modified Accrual & Fund Reporting
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule4TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
                </span>

                <h2>
                    Governmental Fund Analysis
                </h2>

                <p>
                    Apply modified accrual accounting to
                    revenue recognition, capital outlays,
                    bond proceeds, and fund balance.
                </p>

            </div>


            <div class="quiz-card">

                <h2>
                    Scenario
                </h2>

                <p>
                    The City of Brookfield's General Fund
                    reports the following information for
                    the current year.
                </p>


                <div class="key-points">

                    <ul>

                        <li>
                            Property taxes levied:
                            <strong>$1,200,000</strong>
                        </li>

                        <li>
                            Of the property taxes,
                            <strong>$80,000</strong> does not
                            satisfy the government's
                            availability criterion.
                        </li>

                        <li>
                            Operating expenditures:
                            <strong>$760,000</strong>
                        </li>

                        <li>
                            Equipment purchased during the year:
                            <strong>$140,000</strong>
                        </li>

                        <li>
                            Proceeds from issuance of
                            general long-term bonds:
                            <strong>$250,000</strong>
                        </li>

                        <li>
                            Transfers out:
                            <strong>$30,000</strong>
                        </li>

                    </ul>

                </div>


                <h2>
                    Required
                </h2>


                <div class="financial-example">


                    <div>

                        <span>
                            1. Property Tax Revenue Recognized
                        </span>

                        <input
                            type="number"
                            id="far-m4-tbs1-revenue"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            2. Capital Outlay Expenditure
                        </span>

                        <input
                            type="number"
                            id="far-m4-tbs1-capital"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            3. Other Financing Source
                            From Bond Proceeds
                        </span>

                        <input
                            type="number"
                            id="far-m4-tbs1-bonds"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            4. Increase in Fund Balance
                        </span>

                        <input
                            type="number"
                            id="far-m4-tbs1-fundbalance"
                            placeholder="Enter amount"
                        >

                    </div>


                </div>


                <div id="far-m4-tbs1-result"></div>


                <div class="lesson-actions">

                    <button class="primary-button"
                            onclick="gradeFARModule4TBS1()">

                        Submit Simulation

                    </button>

                </div>


            </div>


        </section>

    `;

}

function gradeFARModule4TBS1() {

    const revenueAnswer =
        Number(
            document.getElementById(
                "far-m4-tbs1-revenue"
            ).value
        );


    const capitalAnswer =
        Number(
            document.getElementById(
                "far-m4-tbs1-capital"
            ).value
        );


    const bondsAnswer =
        Number(
            document.getElementById(
                "far-m4-tbs1-bonds"
            ).value
        );


    const fundBalanceAnswer =
        Number(
            document.getElementById(
                "far-m4-tbs1-fundbalance"
            ).value
        );


    const correctRevenue = 1120000;

    const correctCapital = 140000;

    const correctBonds = 250000;

    const correctFundBalance = 440000;


    let score = 0;


    if (revenueAnswer === correctRevenue) {
        score += 25;
    }


    if (capitalAnswer === correctCapital) {
        score += 25;
    }


    if (bondsAnswer === correctBonds) {
        score += 25;
    }


    if (fundBalanceAnswer === correctFundBalance) {
        score += 25;
    }


    saveFARTBSBestScore(
    "farModule4TBS1Score",
    percentage
);


    const result =
        document.getElementById(
            "far-m4-tbs1-result"
        );


    result.innerHTML = `

        <div class="${
            score === 100
                ? "result-correct"
                : "review-recommendation"
        }">

            <h3>
                Score: ${score}%
            </h3>


            <h3>
                Step 1 — Revenue Recognition
            </h3>

            <p>
                Governmental fund revenue generally must
                be measurable and available.
            </p>

            <div class="formula-box">

                Property Taxes Levied
                $1,200,000

                − Unavailable Amount
                $80,000

                =
                $1,120,000 Revenue

            </div>


            <h3>
                Step 2 — Capital Outlay
            </h3>

            <p>
                The equipment purchase is generally
                reported as an expenditure in the
                governmental fund.
            </p>

            <div class="formula-box">

                Capital Outlay Expenditure
                =
                $140,000

            </div>


            <h3>
                Step 3 — Bond Proceeds
            </h3>

            <p>
                General long-term bond proceeds are not
                governmental fund revenue.
            </p>

            <div class="formula-box">

                Other Financing Source
                =
                $250,000

            </div>


            <h3>
                Step 4 — Fund Balance Change
            </h3>

            <div class="formula-box">

                Revenue
                $1,120,000

                − Operating Expenditures
                $760,000

                − Capital Outlay
                $140,000

                + Bond Proceeds
                $250,000

                − Transfer Out
                $30,000

                =
                $440,000

            </div>


            <p>

                <strong>
                    Increase in Fund Balance:
                    $440,000
                </strong>

            </p>


            <div class="key-points">

                <h3>
                    CPA Takeaway
                </h3>

                <ul>

                    <li>
                        Modified accrual revenue generally
                        requires measurable + available.
                    </li>

                    <li>
                        Governmental fund capital purchases
                        are generally expenditures.
                    </li>

                    <li>
                        General long-term bond proceeds are
                        other financing sources.
                    </li>

                    <li>
                        Transfers out are generally other
                        financing uses.
                    </li>

                </ul>

            </div>


            <div class="lesson-actions">

                <button class="primary-button"
                        onclick="showFARModule4TBS1()">

                    Try Again

                </button>


                <button class="back-button"
                        onclick="showFARModule4TBSHub()">

                    Back to Simulations

                </button>

            </div>


        </div>

    `;

}

function showFARModule4TBS2() {

    saveCurrentPage({
        page: "farModule4TBS2"
    });

    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 4 · TBS 2
                </h1>

                <p>
                    Fund Classification
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule4TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
                </span>

                <h2>
                    Identify the Correct Fund
                </h2>

                <p>
                    Analyze each independent scenario
                    and enter the number corresponding
                    to the appropriate fund type.
                </p>

            </div>


            <div class="quiz-card">

                <h2>
                    Fund Code
                </h2>

                <div class="financial-example">

                    <div>
    <span>1</span>
    <strong>Enterprise Fund</strong>
</div>

<div>
    <span>2</span>
    <strong>Private-Purpose Trust Fund</strong>
</div>

<div>
    <span>3</span>
    <strong>General Fund</strong>
</div>

<div>
    <span>4</span>
    <strong>Internal Service Fund</strong>
</div>

<div>
    <span>5</span>
    <strong>Capital Projects Fund</strong>
</div>

                </div>


                <h2>
                    Scenarios
                </h2>


                <div class="key-points">

                    <h3>
                        Item 1
                    </h3>

                    <p>
                        A city accounts for its normal
                        administrative operations, police,
                        and general public services.
                    </p>

                </div>


                <div class="key-points">

                    <h3>
                        Item 2
                    </h3>

                    <p>
                        A county accumulates resources
                        specifically to construct a new
                        courthouse.
                    </p>

                </div>


                <div class="key-points">

                    <h3>
                        Item 3
                    </h3>

                    <p>
                        A city-owned water utility provides
                        water to residents and charges
                        customers based on usage.
                    </p>

                </div>


                <div class="key-points">

                    <h3>
                        Item 4
                    </h3>

                    <p>
                        A centralized vehicle maintenance
                        department services vehicles used
                        by other city departments.
                    </p>

                </div>


                <div class="key-points">

                    <h3>
                        Item 5
                    </h3>

                    <p>
                        A government administers trust
                        resources for specific private
                        individuals rather than for its
                        own programs or citizens generally.
                    </p>

                </div>


                <h2>
                    Required
                </h2>


                <div class="financial-example">


                    <div>

                        <span>
                            1. Normal Government Operations
                        </span>

                        <input
                            type="number"
                            id="far-m4-tbs2-item1"
                            placeholder="Enter fund code"
                        >

                    </div>


                    <div>

                        <span>
                            2. New Courthouse Construction
                        </span>

                        <input
                            type="number"
                            id="far-m4-tbs2-item2"
                            placeholder="Enter fund code"
                        >

                    </div>


                    <div>

                        <span>
                            3. Water Utility
                        </span>

                        <input
                            type="number"
                            id="far-m4-tbs2-item3"
                            placeholder="Enter fund code"
                        >

                    </div>


                    <div>

                        <span>
                            4. Central Vehicle Maintenance
                        </span>

                        <input
                            type="number"
                            id="far-m4-tbs2-item4"
                            placeholder="Enter fund code"
                        >

                    </div>


                    <div>

                        <span>
                            5. Trust for Private Individuals
                        </span>

                        <input
                            type="number"
                            id="far-m4-tbs2-item5"
                            placeholder="Enter fund code"
                        >

                    </div>


                </div>


                <div id="far-m4-tbs2-result"></div>


                <div class="lesson-actions">

                    <button class="primary-button"
                            onclick="gradeFARModule4TBS2()">

                        Submit Simulation

                    </button>

                </div>


            </div>


        </section>

    `;

}

function gradeFARModule4TBS2() {

    const item1 =
        Number(
            document.getElementById(
                "far-m4-tbs2-item1"
            ).value
        );

    const item2 =
        Number(
            document.getElementById(
                "far-m4-tbs2-item2"
            ).value
        );

    const item3 =
        Number(
            document.getElementById(
                "far-m4-tbs2-item3"
            ).value
        );

    const item4 =
        Number(
            document.getElementById(
                "far-m4-tbs2-item4"
            ).value
        );

    const item5 =
        Number(
            document.getElementById(
                "far-m4-tbs2-item5"
            ).value
        );


    const correct1 = 3;
const correct2 = 5;
const correct3 = 1;
const correct4 = 4;
const correct5 = 2;


    let score = 0;


    if (item1 === correct1) {
        score += 20;
    }

    if (item2 === correct2) {
        score += 20;
    }

    if (item3 === correct3) {
        score += 20;
    }

    if (item4 === correct4) {
        score += 20;
    }

    if (item5 === correct5) {
        score += 20;
    }


    saveFARTBSBestScore(
    "farModule4TBS2Score",
    percentage
);


    const result =
        document.getElementById(
            "far-m4-tbs2-result"
        );


    result.innerHTML = `

        <div class="${
            score === 100
                ? "result-correct"
                : "review-recommendation"
        }">

            <h3>
                Score: ${score}%
            </h3>


            <h3>
                Item 1 — General Fund
            </h3>

            <p>
                The General Fund is generally the primary
                operating fund for normal governmental
                activities.
            </p>

            <div class="formula-box">
                Correct Code = 3
            </div>


            <h3>
                Item 2 — Capital Projects Fund
            </h3>

            <p>
                Courthouse construction is generally
accounted for in a Capital Projects Fund.
            </p>

            <div class="formula-box">
                Correct Code = 5
            </div>


            <h3>
                Item 3 — Enterprise Fund
            </h3>

            <p>
                A water utility charging external customers
                is generally an Enterprise Fund activity.
            </p>

            <div class="formula-box">
                Correct Code = 1
            </div>


            <h3>
                Item 4 — Internal Service Fund
            </h3>

            <p>
                A department primarily serving other
                departments of the same government is
                generally an Internal Service Fund.
            </p>

            <div class="formula-box">
                Correct Code = 4
            </div>


            <h3>
                Item 5 — Private-Purpose Trust Fund
            </h3>

            <p>
                Trust resources benefiting specific
                private individuals are generally reported
                in a Private-Purpose Trust Fund.
            </p>

            <div class="formula-box">
                Correct Code = 2
            </div>


            <div class="key-points">

                <h3>
                    CPA Takeaway
                </h3>

                <ul>

                    <li>
                        General Fund → regular operations.
                    </li>

                    <li>
                        Capital Projects → capital outlays / construction.
                    </li>

                    <li>
                        Enterprise → external customers.
                    </li>

                    <li>
                        Internal Service → internal departments.
                    </li>

                    <li>
                        Private-Purpose Trust → specific outsiders.
                    </li>

                </ul>

            </div>


            <div class="lesson-actions">

                <button class="primary-button"
                        onclick="showFARModule4TBS2()">

                    Try Again

                </button>


                <button class="back-button"
                        onclick="showFARModule4TBSHub()">

                    Back to Simulations

                </button>

            </div>


        </div>

    `;

}

function showFARModule4TBS3() {

    saveCurrentPage({
        page: "farModule4TBS3"
    });

    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 4 · TBS 3
                </h1>

                <p>
                    Fund-to-Government-Wide Reconciliation
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule4TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
                </span>

                <h2>
                    Reconciliation Analysis
                </h2>

                <p>
                    Reconcile governmental fund operating
                    results to the change in net position
                    of governmental activities.
                </p>

            </div>


            <div class="quiz-card">

                <h2>
                    Scenario
                </h2>

                <p>
                    The City of Westbrook reports an
                    <strong>$420,000 increase in total
                    governmental fund balances</strong>
                    for the current year.
                </p>

                <p>
                    Additional information follows.
                </p>


                <div class="key-points">

                    <ul>

                        <li>
                            Capital outlays reported as
                            governmental fund expenditures:
                            <strong>$180,000</strong>
                        </li>

                        <li>
                            Depreciation expense applicable
                            to governmental activities:
                            <strong>$55,000</strong>
                        </li>

                        <li>
                            Principal payments on general
                            long-term debt reported as
                            governmental fund expenditures:
                            <strong>$45,000</strong>
                        </li>

                        <li>
                            General long-term bond proceeds
                            reported as an other financing
                            source:
                            <strong>$160,000</strong>
                        </li>

                        <li>
                            Revenue recognized at the
                            government-wide level but not
                            recognized in governmental funds
                            solely because it was unavailable:
                            <strong>$30,000</strong>
                        </li>

                    </ul>

                </div>


                <h2>
                    Required
                </h2>

                <p>
                    Enter each adjustment using the
                    <strong>signed amount</strong>.
                    Use a positive number for an addition
                    and a negative number for a subtraction.
                </p>


                <div class="financial-example">


                    <div>

                        <span>
                            1. Capital Outlay Adjustment
                        </span>

                        <input
                            type="number"
                            id="far-m4-tbs3-capital"
                            placeholder="Enter signed amount"
                        >

                    </div>


                    <div>

                        <span>
                            2. Depreciation Adjustment
                        </span>

                        <input
                            type="number"
                            id="far-m4-tbs3-depreciation"
                            placeholder="Enter signed amount"
                        >

                    </div>


                    <div>

                        <span>
                            3. Debt Principal Adjustment
                        </span>

                        <input
                            type="number"
                            id="far-m4-tbs3-principal"
                            placeholder="Enter signed amount"
                        >

                    </div>


                    <div>

                        <span>
                            4. Bond Proceeds Adjustment
                        </span>

                        <input
                            type="number"
                            id="far-m4-tbs3-bonds"
                            placeholder="Enter signed amount"
                        >

                    </div>


                    <div>

                        <span>
                            5. Revenue Availability Adjustment
                        </span>

                        <input
                            type="number"
                            id="far-m4-tbs3-revenue"
                            placeholder="Enter signed amount"
                        >

                    </div>


                    <div>

                        <span>
                            6. Change in Governmental
                            Activities' Net Position
                        </span>

                        <input
                            type="number"
                            id="far-m4-tbs3-netposition"
                            placeholder="Enter final amount"
                        >

                    </div>


                </div>


                <div id="far-m4-tbs3-result"></div>


                <div class="lesson-actions"
     id="far-m4-tbs3-submit-actions">

    <button class="primary-button"
            onclick="gradeFARModule4TBS3()">

        Submit Simulation

    </button>

</div>


            </div>


        </section>

    `;

}

function gradeFARModule4TBS3() {

    const capitalAnswer =
        Number(
            document.getElementById(
                "far-m4-tbs3-capital"
            ).value
        );

    const depreciationAnswer =
        Number(
            document.getElementById(
                "far-m4-tbs3-depreciation"
            ).value
        );

    const principalAnswer =
        Number(
            document.getElementById(
                "far-m4-tbs3-principal"
            ).value
        );

    const bondsAnswer =
        Number(
            document.getElementById(
                "far-m4-tbs3-bonds"
            ).value
        );

    const revenueAnswer =
        Number(
            document.getElementById(
                "far-m4-tbs3-revenue"
            ).value
        );

    const netPositionAnswer =
        Number(
            document.getElementById(
                "far-m4-tbs3-netposition"
            ).value
        );


    const correctCapital = 180000;

    const correctDepreciation = -55000;

    const correctPrincipal = 45000;

    const correctBonds = -160000;

    const correctRevenue = 30000;

    const correctNetPosition = 460000;


    let correctCount = 0;


    if (capitalAnswer === correctCapital) {
        correctCount++;
    }

    if (depreciationAnswer === correctDepreciation) {
        correctCount++;
    }

    if (principalAnswer === correctPrincipal) {
        correctCount++;
    }

    if (bondsAnswer === correctBonds) {
        correctCount++;
    }

    if (revenueAnswer === correctRevenue) {
        correctCount++;
    }

    if (netPositionAnswer === correctNetPosition) {
        correctCount++;
    }


    const score =
        Math.round(
            (correctCount / 6) * 100
        );


    saveFARTBSBestScore(
    "farModule4TBS3Score",
    percentage
);


    const result =
        document.getElementById(
            "far-m4-tbs3-result"
        );

        const submitActions =
    document.getElementById(
        "far-m4-tbs3-submit-actions"
    );

if (submitActions) {
    submitActions.style.display = "none";
}


    result.innerHTML = `

        <div class="${
            score === 100
                ? "result-correct"
                : "review-recommendation"
        }">

            <h3>
                Score: ${score}%
            </h3>


            <h3>
                Capital Outlay
            </h3>

            <p>
                Governmental funds treated the
                $180,000 capital outlay as an expenditure.
                Government-wide accounting generally
                capitalizes the asset.
            </p>

            <div class="formula-box">

                Adjustment
                =
                +$180,000

            </div>


            <h3>
                Depreciation
            </h3>

            <p>
                Depreciation is recognized as an expense
                at the government-wide level.
            </p>

            <div class="formula-box">

                Adjustment
                =
                −$55,000

            </div>


            <h3>
                Debt Principal
            </h3>

            <p>
                Governmental funds treated the $45,000
                principal payment as an expenditure.
                Government-wide accounting treats it as
                a reduction of the liability.
            </p>

            <div class="formula-box">

                Adjustment
                =
                +$45,000

            </div>


            <h3>
                Bond Proceeds
            </h3>

            <p>
                The governmental funds included $160,000
                of bond proceeds as an other financing
                source.
            </p>

            <p>
                Government-wide accounting instead
                recognizes a long-term liability.
            </p>

            <div class="formula-box">

                Adjustment
                =
                −$160,000

            </div>


            <h3>
                Revenue Availability
            </h3>

            <p>
                The $30,000 was excluded from governmental
                fund revenue solely because it failed the
                modified-accrual availability criterion.
            </p>

            <p>
                It qualifies for recognition under
                government-wide accrual accounting.
            </p>

            <div class="formula-box">

                Adjustment
                =
                +$30,000

            </div>


            <h3>
                Final Reconciliation
            </h3>

            <div class="formula-box">

                Increase in Fund Balances
                $420,000

                + Capital Outlay
                $180,000

                − Depreciation
                $55,000

                + Principal Payment
                $45,000

                − Bond Proceeds
                $160,000

                + Revenue Adjustment
                $30,000

                =

                $460,000
                CHANGE IN NET POSITION

            </div>


            <div class="key-points">

                <h3>
                    CPA Takeaway
                </h3>

                <ul>

                    <li>
                        Capital outlay → add back.
                    </li>

                    <li>
                        Depreciation → subtract.
                    </li>

                    <li>
                        Debt principal payment → add back.
                    </li>

                    <li>
                        Bond proceeds → subtract.
                    </li>

                    <li>
                        Accrual revenue excluded only
                        because of availability → add.
                    </li>

                </ul>

            </div>


            <div class="lesson-actions">

                <button class="primary-button"
                        onclick="showFARModule4TBS3()">

                    Try Again

                </button>


                <button class="back-button"
                        onclick="showFARModule4TBSHub()">

                    Back to Simulations

                </button>

            </div>


        </div>

    `;

}

function showFARModule4TBS4() {

    saveCurrentPage({
        page: "farModule4TBS4"
    });

    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 4 · TBS 4
                </h1>

                <p>
                    Budgetary Accounting & Encumbrances
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule4TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
                </span>

                <h2>
                    Budgetary Control Analysis
                </h2>

                <p>
                    Analyze a governmental fund's adopted
                    budget and purchase-order activity.
                </p>

            </div>


            <div class="quiz-card">

                <h2>
                    Scenario
                </h2>


                <p>
                    The City of Lakeside adopts the following
                    General Fund budget:
                </p>


                <div class="financial-example">

                    <div>
                        <span>Estimated Revenues</span>
                        <strong>$2,400,000</strong>
                    </div>

                    <div>
                        <span>Appropriations</span>
                        <strong>$2,150,000</strong>
                    </div>

                </div>


                <p>
                    During the year, Lakeside issues a purchase
                    order for supplies estimated to cost
                    <strong>$90,000</strong>.
                </p>


                <p>
                    The supplies are later received with an
                    actual invoice amount of
                    <strong>$87,500</strong>.
                </p>


                <h2>
                    Required
                </h2>


                <div class="financial-example">


                    <div>

                        <span>
                            1. Budgetary Surplus
                        </span>

                        <input
                            type="number"
                            id="far-m4-tbs4-surplus"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            2. Encumbrance Recorded
                            When Purchase Order Is Issued
                        </span>

                        <input
                            type="number"
                            id="far-m4-tbs4-encumbrance"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            3. Expenditure Recognized
                            When Purchase Order Is Issued
                        </span>

                        <input
                            type="number"
                            id="far-m4-tbs4-po-expenditure"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            4. Actual Expenditure
                            When Supplies Are Received
                        </span>

                        <input
                            type="number"
                            id="far-m4-tbs4-actual"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            5. Difference Between Original
                            Encumbrance and Actual Expenditure
                        </span>

                        <input
                            type="number"
                            id="far-m4-tbs4-difference"
                            placeholder="Enter amount"
                        >

                    </div>


                </div>


                <div id="far-m4-tbs4-result"></div>


                <div class="lesson-actions"
                     id="far-m4-tbs4-submit-actions">

                    <button class="primary-button"
                            onclick="gradeFARModule4TBS4()">

                        Submit Simulation

                    </button>

                </div>


            </div>


        </section>

    `;

}

function gradeFARModule4TBS4() {

    const surplusInput =
        document.getElementById(
            "far-m4-tbs4-surplus"
        ).value;

    const encumbranceInput =
        document.getElementById(
            "far-m4-tbs4-encumbrance"
        ).value;

    const poExpenditureInput =
        document.getElementById(
            "far-m4-tbs4-po-expenditure"
        ).value;

    const actualInput =
        document.getElementById(
            "far-m4-tbs4-actual"
        ).value;

    const differenceInput =
        document.getElementById(
            "far-m4-tbs4-difference"
        ).value;


    const surplusAnswer =
        surplusInput.trim() === ""
            ? null
            : Number(surplusInput);

    const encumbranceAnswer =
        encumbranceInput.trim() === ""
            ? null
            : Number(encumbranceInput);

    const poExpenditureAnswer =
        poExpenditureInput.trim() === ""
            ? null
            : Number(poExpenditureInput);

    const actualAnswer =
        actualInput.trim() === ""
            ? null
            : Number(actualInput);

    const differenceAnswer =
        differenceInput.trim() === ""
            ? null
            : Number(differenceInput);


    const correctSurplus = 250000;
    const correctEncumbrance = 90000;
    const correctPOExpenditure = 0;
    const correctActual = 87500;
    const correctDifference = 2500;


    let score = 0;


    if (surplusAnswer === correctSurplus) {
        score += 20;
    }

    if (encumbranceAnswer === correctEncumbrance) {
        score += 20;
    }

    if (poExpenditureAnswer === correctPOExpenditure) {
        score += 20;
    }

    if (actualAnswer === correctActual) {
        score += 20;
    }

    if (differenceAnswer === correctDifference) {
        score += 20;
    }


    saveFARTBSBestScore(
    "farModule4TBS4Score",
    percentage
);


    const result =
        document.getElementById(
            "far-m4-tbs4-result"
        );


    const submitActions =
        document.getElementById(
            "far-m4-tbs4-submit-actions"
        );

    if (submitActions) {
        submitActions.style.display = "none";
    }


    result.innerHTML = `

        <div class="${
            score === 100
                ? "result-correct"
                : "review-recommendation"
        }">

            <h3>
                Score: ${score}%
            </h3>


            <h3>
                Step 1 — Budgetary Surplus
            </h3>

            <div class="formula-box">

                Estimated Revenues
                $2,400,000

                − Appropriations
                $2,150,000

                =
                $250,000 Budgetary Surplus

            </div>


            <h3>
                Step 2 — Purchase Order
            </h3>

            <p>
                The $90,000 purchase order creates an
                encumbrance.
            </p>

            <div class="formula-box">

                Encumbrance
                =
                $90,000

            </div>


            <h3>
                Step 3 — Expenditure at Purchase-Order Stage
            </h3>

            <p>
                Merely issuing the purchase order does not
                generally create an expenditure.
            </p>

            <div class="formula-box">

                Expenditure
                =
                $0

            </div>


            <h3>
                Step 4 — Goods Received
            </h3>

            <p>
                When the supplies are received, the original
                encumbrance is generally reversed and the
                actual expenditure is recorded.
            </p>

            <div class="formula-box">

                Actual Expenditure
                =
                $87,500

            </div>


            <h3>
                Step 5 — Difference
            </h3>

            <div class="formula-box">

                Original Encumbrance
                $90,000

                − Actual Expenditure
                $87,500

                =
                $2,500 Difference

            </div>


            <div class="key-points">

                <h3>
                    CPA Takeaway
                </h3>

                <ul>

                    <li>
                        Estimated revenues represent expected resources.
                    </li>

                    <li>
                        Appropriations represent authorized spending.
                    </li>

                    <li>
                        Purchase orders may create encumbrances.
                    </li>

                    <li>
                        Encumbrances are not expenditures.
                    </li>

                    <li>
                        Actual expenditures are recorded when the related obligation is incurred.
                    </li>

                </ul>

            </div>


            <div class="lesson-actions">

                <button class="primary-button"
                        onclick="showFARModule4TBS4()">

                    Try Again

                </button>


                <button class="back-button"
                        onclick="showFARModule4TBSHub()">

                    Back to Simulations

                </button>

            </div>


        </div>

    `;

}

function showFARModule4TBS5() {

    saveCurrentPage({
        page: "farModule4TBS5"
    });

    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 4 · TBS 5
                </h1>

                <p>
                    Integrated Governmental Accounting
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule4TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
                </span>

                <h2>
                    Integrated Governmental Analysis
                </h2>

                <p>
                    Apply multiple governmental accounting
                    concepts in one year-end simulation.
                </p>

            </div>


            <div class="quiz-card">

                <h2>
                    Scenario
                </h2>


                <p>
                    The City of Fairview reports the following
                    information for the current year.
                </p>


                <div class="key-points">

                    <h3>
                        Item 1 — Fund Classification
                    </h3>

                    <p>
                        The city operates a public parking
                        garage that primarily charges
                        external customers for usage.
                    </p>

                    <p>
                        Enter:
                        <strong>1 = Enterprise Fund</strong>,
                        <strong>2 = Internal Service Fund</strong>,
                        <strong>3 = General Fund</strong>.
                    </p>

                </div>


                <div class="key-points">

                    <h3>
                        Item 2 — Property Tax Revenue
                    </h3>

                    <p>
                        The General Fund has
                        <strong>$950,000</strong> of measurable
                        property taxes.
                    </p>

                    <p>
                        Of that amount,
                        <strong>$70,000</strong> does not meet
                        the government's availability criterion.
                    </p>

                </div>


                <div class="key-points">

                    <h3>
                        Item 3 — Capital Asset Purchase
                    </h3>

                    <p>
                        The General Fund purchases equipment
                        for <strong>$160,000</strong>.
                    </p>

                    <p>
                        Enter the amount reported as a
                        governmental fund expenditure.
                    </p>

                </div>


                <div class="key-points">

                    <h3>
                        Item 4 — Bond Proceeds
                    </h3>

                    <p>
                        The General Fund receives
                        <strong>$300,000</strong> from issuance
                        of general long-term bonds.
                    </p>

                    <p>
                        Enter the amount reported as an
                        other financing source.
                    </p>

                </div>


                <div class="key-points">

                    <h3>
                        Item 5 — Government-Wide Reconciliation
                    </h3>

                    <p>
                        The governmental funds report a
                        <strong>$500,000 increase in fund balance</strong>.
                    </p>

                    <p>
                        This amount includes:
                    </p>

                    <ul>

                        <li>
                            Capital outlay:
                            <strong>$160,000</strong>
                        </li>

                        <li>
                            Bond proceeds:
                            <strong>$300,000</strong>
                        </li>

                    </ul>

                    <p>
                        Government-wide depreciation expense
                        is <strong>$40,000</strong>.
                    </p>

                    <p>
                        Ignore all other reconciling items.
                    </p>

                </div>


                <h2>
                    Required
                </h2>


                <div class="financial-example">


                    <div>

                        <span>
                            1. Fund Classification Code
                        </span>

                        <input
                            type="number"
                            id="far-m4-tbs5-fund"
                            placeholder="Enter 1, 2, or 3"
                        >

                    </div>


                    <div>

                        <span>
                            2. Property Tax Revenue Recognized
                        </span>

                        <input
                            type="number"
                            id="far-m4-tbs5-revenue"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            3. Capital Outlay Expenditure
                        </span>

                        <input
                            type="number"
                            id="far-m4-tbs5-capital"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            4. Other Financing Source
                        From Bond Proceeds
                        </span>

                        <input
                            type="number"
                            id="far-m4-tbs5-bonds"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            5. Government-Wide Change
                            in Net Position
                        </span>

                        <input
                            type="number"
                            id="far-m4-tbs5-netposition"
                            placeholder="Enter amount"
                        >

                    </div>


                </div>


                <div id="far-m4-tbs5-result"></div>


                <div class="lesson-actions"
                     id="far-m4-tbs5-submit-actions">

                    <button class="primary-button"
                            onclick="gradeFARModule4TBS5()">

                        Submit Simulation

                    </button>

                </div>


            </div>


        </section>

    `;

}

function gradeFARModule4TBS5() {

    const fundAnswer =
        Number(
            document.getElementById(
                "far-m4-tbs5-fund"
            ).value
        );

    const revenueAnswer =
        Number(
            document.getElementById(
                "far-m4-tbs5-revenue"
            ).value
        );

    const capitalAnswer =
        Number(
            document.getElementById(
                "far-m4-tbs5-capital"
            ).value
        );

    const bondsAnswer =
        Number(
            document.getElementById(
                "far-m4-tbs5-bonds"
            ).value
        );

    const netPositionAnswer =
        Number(
            document.getElementById(
                "far-m4-tbs5-netposition"
            ).value
        );


    const correctFund = 1;

    const correctRevenue = 880000;

    const correctCapital = 160000;

    const correctBonds = 300000;

    const correctNetPosition = 320000;


    let score = 0;


    if (fundAnswer === correctFund) {
        score += 20;
    }

    if (revenueAnswer === correctRevenue) {
        score += 20;
    }

    if (capitalAnswer === correctCapital) {
        score += 20;
    }

    if (bondsAnswer === correctBonds) {
        score += 20;
    }

    if (netPositionAnswer === correctNetPosition) {
        score += 20;
    }


    saveFARTBSBestScore(
    "farModule4TBS5Score",
    percentage
);


    const result =
        document.getElementById(
            "far-m4-tbs5-result"
        );


    const submitActions =
        document.getElementById(
            "far-m4-tbs5-submit-actions"
        );

    if (submitActions) {
        submitActions.style.display = "none";
    }


    result.innerHTML = `

        <div class="${
            score === 100
                ? "result-correct"
                : "review-recommendation"
        }">

            <h3>
                Score: ${score}%
            </h3>


            <h3>
                Item 1 — Fund Classification
            </h3>

            <p>
                The parking garage primarily serves
                external customers and charges users
                for services.
            </p>

            <div class="formula-box">

                Enterprise Fund
                =
                Code 1

            </div>


            <h3>
                Item 2 — Property Tax Revenue
            </h3>

            <p>
                Governmental fund revenue must generally
                be measurable and available.
            </p>

            <div class="formula-box">

                $950,000

                − $70,000 Unavailable

                =

                $880,000 Revenue

            </div>


            <h3>
                Item 3 — Capital Outlay
            </h3>

            <p>
                The General Fund generally reports the
                equipment purchase as an expenditure.
            </p>

            <div class="formula-box">

                Capital Outlay Expenditure
                =
                $160,000

            </div>


            <h3>
                Item 4 — Bond Proceeds
            </h3>

            <p>
                General long-term bond proceeds are
                generally reported as an other financing
                source in governmental funds.
            </p>

            <div class="formula-box">

                Other Financing Source
                =
                $300,000

            </div>


            <h3>
                Item 5 — Government-Wide Reconciliation
            </h3>

            <div class="formula-box">

                Increase in Fund Balance
                $500,000

                + Capital Outlay
                $160,000

                − Depreciation
                $40,000

                − Bond Proceeds
                $300,000

                =

                $320,000
                CHANGE IN NET POSITION

            </div>


            <div class="key-points">

                <h3>
                    Module 4 Final Takeaway
                </h3>

                <ul>

                    <li>
                        Enterprise funds generally serve
                        external users.
                    </li>

                    <li>
                        Modified accrual revenue requires
                        measurable + available.
                    </li>

                    <li>
                        Governmental fund capital purchases
                        are generally expenditures.
                    </li>

                    <li>
                        Bond proceeds are other financing
                        sources in governmental funds.
                    </li>

                    <li>
                        Government-wide reporting removes
                        governmental-fund financing effects
                        and recognizes capital assets and
                        depreciation.
                    </li>

                </ul>

            </div>


            <div class="lesson-actions">

                <button class="primary-button"
                        onclick="showFARModule4TBS5()">

                    Try Again

                </button>


                <button class="back-button"
                        onclick="showFARModule4TBSHub()">

                    Back to Simulations

                </button>

            </div>


        </div>

    `;

}

function showFARModule5TBSHub() {

    saveCurrentPage({
        page: "farModule5TBSHub"
    });

    setActiveNav("Learn");


    const tbs1Score =
        localStorage.getItem(
            "farModule5TBS1Score"
        );

    const tbs2Score =
        localStorage.getItem(
            "farModule5TBS2Score"
        );

    const tbs3Score =
        localStorage.getItem(
            "farModule5TBS3Score"
        );

    const tbs4Score =
        localStorage.getItem(
            "farModule5TBS4Score"
        );

    const tbs5Score =
        localStorage.getItem(
            "farModule5TBS5Score"
        );


    const completedCount = [
        tbs1Score,
        tbs2Score,
        tbs3Score,
        tbs4Score,
        tbs5Score
    ].filter(function(score) {

        return score !== null;

    }).length;


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 5 TBS Practice
                </h1>

                <p>
                    Not-for-Profit Accounting
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule(5)">

                ← Back to Module 5

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATIONS
                </span>

                <h2>
                    Module 5 Simulation Center
                </h2>

                <p>
                    Practice contributions, donor
                    restrictions, conditional grants,
                    donated services, endowments,
                    and NFP reporting.
                </p>


                <div class="exam-progress">

                    TBS Progress:
                    ${completedCount} / 5 Completed

                </div>

            </div>


            <div class="lesson-card"
                 onclick="showFARModule5TBS1()">

                <div class="lesson-number">
                    TBS 1
                </div>

                <div class="lesson-info">

                    <h3>
                        Contributions & Restrictions
                    </h3>

                    <p>
                        Analyze unrestricted contributions,
                        donor-restricted contributions,
                        and releases from restriction.
                    </p>

                </div>

                <div class="lesson-status">

                    ${
                        tbs1Score !== null
                            ? "✓ " + tbs1Score + "%"
                            : "Start →"
                    }

                </div>

            </div>


            <div class="lesson-card"
     onclick="showFARModule5TBS2()">

    <div class="lesson-number">
        TBS 2
    </div>

    <div class="lesson-info">

        <h3>
            Conditional Contributions
        </h3>

        <p>
            Determine whether contribution
            revenue or a liability should
            be recognized.
        </p>

    </div>

    <div class="lesson-status">

        ${
            tbs2Score !== null
                ? "✓ " + tbs2Score + "%"
                : "Start →"
        }

    </div>

</div>


            <div class="lesson-card"
     onclick="showFARModule5TBS3()">

    <div class="lesson-number">
        TBS 3
    </div>

    <div class="lesson-info">

        <h3>
            Donated Services & Noncash Gifts
        </h3>

        <p>
            Analyze recognition of donated
            professional services and
            contributed nonfinancial assets.
        </p>

    </div>

    <div class="lesson-status">

        ${
            tbs3Score !== null
                ? "✓ " + tbs3Score + "%"
                : "Start →"
        }

    </div>

</div>


            <div class="lesson-card"
     onclick="showFARModule5TBS4()">

    <div class="lesson-number">
        TBS 4
    </div>

    <div class="lesson-info">

        <h3>
            Endowments & Pledges
        </h3>

        <p>
            Analyze donor-restricted endowments,
            investment return, and promises to give.
        </p>

    </div>

    <div class="lesson-status">

        ${
            tbs4Score !== null
                ? "✓ " + tbs4Score + "%"
                : "Start →"
        }

    </div>

</div>


            <div class="lesson-card"
     onclick="showFARModule5TBS5()">

    <div class="lesson-number">
        TBS 5
    </div>

    <div class="lesson-info">

        <h3>
            Integrated NFP Reporting
        </h3>

        <p>
            Combine contributions, restrictions,
            conditional amounts, donated services,
            and net asset reporting.
        </p>

    </div>

    <div class="lesson-status">

        ${
            tbs5Score !== null
                ? "✓ " + tbs5Score + "%"
                : "Start →"
        }

    </div>

</div>


        </section>

    `;

}

function showFARModule5TBS1() {

    saveCurrentPage({
        page: "farModule5TBS1"
    });

    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 5 · TBS 1
                </h1>

                <p>
                    Contributions & Restrictions
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule5TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
                </span>

                <h2>
                    Contribution Classification
                </h2>

                <p>
                    Analyze contributions, donor restrictions,
                    and releases from restriction.
                </p>

            </div>


            <div class="quiz-card">

                <h2>
                    Scenario
                </h2>

                <p>
                    Hope Foundation reports the following
                    transactions during the year.
                </p>

                <p>
    Hope Foundation does not elect to report
    donor-restricted contributions whose restrictions
    are satisfied in the same period as contributions
    without donor restrictions.
</p>


                <div class="key-points">

                    <ul>

                        <li>
                            Donor A contributes
                            <strong>$90,000</strong>
                            with no donor-imposed restriction.
                        </li>

                        <li>
                            Donor B contributes
                            <strong>$140,000</strong>
                            and requires that the money be used
                            only for educational programs.
                        </li>

                        <li>
                            During the year, Hope Foundation
                            spends <strong>$60,000</strong>
                            on qualifying educational costs
                            that satisfy part of Donor B's
                            restriction.
                        </li>

                    </ul>

                </div>


                <h2>
                    Required
                </h2>


                <div class="financial-example">


                    <div>

                        <span>
                            1. Contribution Revenue
                            Without Donor Restrictions
                        </span>

                        <input
                            type="number"
                            id="far-m5-tbs1-unrestricted"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            2. Contribution Revenue
                            With Donor Restrictions
                        </span>

                        <input
                            type="number"
                            id="far-m5-tbs1-restricted"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            3. Release From Restriction
                        </span>

                        <input
                            type="number"
                            id="far-m5-tbs1-release"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            4. Remaining Donor-Restricted
                            Amount After the Release
                        </span>

                        <input
                            type="number"
                            id="far-m5-tbs1-remaining"
                            placeholder="Enter amount"
                        >

                    </div>


                </div>


                <div id="far-m5-tbs1-result"></div>


                <div class="lesson-actions"
                     id="far-m5-tbs1-submit-actions">

                    <button class="primary-button"
                            onclick="gradeFARModule5TBS1()">

                        Submit Simulation

                    </button>

                </div>


            </div>


        </section>

    `;

}

function gradeFARModule5TBS1() {

    const unrestrictedAnswer =
        Number(
            document.getElementById(
                "far-m5-tbs1-unrestricted"
            ).value
        );

    const restrictedAnswer =
        Number(
            document.getElementById(
                "far-m5-tbs1-restricted"
            ).value
        );

    const releaseAnswer =
        Number(
            document.getElementById(
                "far-m5-tbs1-release"
            ).value
        );

    const remainingAnswer =
        Number(
            document.getElementById(
                "far-m5-tbs1-remaining"
            ).value
        );


    const correctUnrestricted = 90000;
    const correctRestricted = 140000;
    const correctRelease = 60000;
    const correctRemaining = 80000;


    let score = 0;


    if (unrestrictedAnswer === correctUnrestricted) {
        score += 25;
    }

    if (restrictedAnswer === correctRestricted) {
        score += 25;
    }

    if (releaseAnswer === correctRelease) {
        score += 25;
    }

    if (remainingAnswer === correctRemaining) {
        score += 25;
    }


    saveFARTBSBestScore(
    "farModule5TBS1Score",
    percentage
);


    const result =
        document.getElementById(
            "far-m5-tbs1-result"
        );


    const submitActions =
        document.getElementById(
            "far-m5-tbs1-submit-actions"
        );

    if (submitActions) {
        submitActions.style.display = "none";
    }


    result.innerHTML = `

        <div class="${
            score === 100
                ? "result-correct"
                : "review-recommendation"
        }">

            <h3>
                Score: ${score}%
            </h3>


            <h3>
                Item 1 — Unrestricted Contribution
            </h3>

            <div class="formula-box">

                Contribution Revenue
                Without Donor Restrictions
                =
                $90,000

            </div>


            <h3>
                Item 2 — Donor-Restricted Contribution
            </h3>

            <div class="formula-box">

                Contribution Revenue
                With Donor Restrictions
                =
                $140,000

            </div>


            <h3>
                Item 3 — Release From Restriction
            </h3>

            <p>
                Hope Foundation used $60,000 for the
                exact educational purpose specified
                by the donor.
            </p>

            <div class="formula-box">

                Release From Restriction
                =
                $60,000

            </div>


            <h3>
                Item 4 — Remaining Restricted Amount
            </h3>

            <div class="formula-box">

                Original Restricted Contribution
                $140,000

                − Release
                $60,000

                =

                $80,000 Remaining

            </div>


            <div class="key-points">

                <h3>
                    CPA Takeaway
                </h3>

                <ul>

                    <li>
                        No donor restriction
                        → net assets without donor restrictions.
                    </li>

                    <li>
                        Donor purpose restriction
                        → net assets with donor restrictions.
                    </li>

                    <li>
                        Satisfying the restriction
                        → release from restriction.
                    </li>

                    <li>
                        A release changes classification;
                        it is not a second contribution.
                    </li>

                </ul>

            </div>


            <div class="lesson-actions">

                <button class="primary-button"
                        onclick="showFARModule5TBS1()">

                    Try Again

                </button>


                <button class="back-button"
                        onclick="showFARModule5TBSHub()">

                    Back to Simulations

                </button>

            </div>


        </div>

    `;

}

function showFARModule5TBS2() {

    saveCurrentPage({
        page: "farModule5TBS2"
    });

    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 5 · TBS 2
                </h1>

                <p>
                    Conditional Contributions
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule5TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
                </span>

                <h2>
                    Contribution Recognition Analysis
                </h2>

                <p>
                    Analyze a conditional contribution
                    before and after the required barrier
has been substantially overcome.
                </p>

            </div>


            <div class="quiz-card">

                <h2>
                    Scenario
                </h2>

                <p>
                    Bright Future Foundation receives
                    <strong>$180,000 cash</strong>
                    from a donor on January 1.
                </p>

                <p>
                    Under the agreement:
                </p>


                <div class="key-points">

                    <ul>

                        <li>
                            Bright Future must provide
                            job-training services to at least
                            <strong>600 qualifying participants</strong>.
                        </li>

                        <li>
                            If the target is not achieved,
                            the donor may require the
                            <strong>$180,000 to be returned</strong>.
                        </li>

                        <li>
                            At June 30, only
                            <strong>350 participants</strong>
                            have been served.
                        </li>

                        <li>
                            By December 31, Bright Future
                            has served <strong>650 participants</strong>
                            and has substantially overcome
the required barrier.
                        </li>

                        <li>
                            Once earned, the donor requires
                            the resources to be used only
                            for workforce-development programs.
                        </li>

                    </ul>

                </div>


                <h2>
                    Required
                </h2>


                <div class="financial-example">


                    <div>

                        <span>
                            1. Contribution Revenue
                            Recognized at January 1
                        </span>

                        <input
                            type="number"
                            id="far-m5-tbs2-jan-revenue"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            2. Liability Reported
                            at January 1
                        </span>

                        <input
                            type="number"
                            id="far-m5-tbs2-jan-liability"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            3. Contribution Revenue
                            Recognized at June 30
                        </span>

                        <input
                            type="number"
                            id="far-m5-tbs2-june-revenue"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            4. Contribution Revenue
                            Recognized When Condition
                            Is Satisfied
                        </span>

                        <input
                            type="number"
                            id="far-m5-tbs2-earned"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            5. After Recognition:
                            Enter 1 if With Donor Restrictions,
                            0 if Without Donor Restrictions
                        </span>

                        <input
                            type="number"
                            id="far-m5-tbs2-restriction"
                            placeholder="Enter 1 or 0"
                        >

                    </div>


                </div>


                <div id="far-m5-tbs2-result"></div>


                <div class="lesson-actions"
                     id="far-m5-tbs2-submit-actions">

                    <button class="primary-button"
                            onclick="gradeFARModule5TBS2()">

                        Submit Simulation

                    </button>

                </div>


            </div>


        </section>

    `;

}

function gradeFARModule5TBS2() {

    const janRevenueInput =
        document.getElementById(
            "far-m5-tbs2-jan-revenue"
        ).value;

    const janLiabilityInput =
        document.getElementById(
            "far-m5-tbs2-jan-liability"
        ).value;

    const juneRevenueInput =
        document.getElementById(
            "far-m5-tbs2-june-revenue"
        ).value;

    const earnedInput =
        document.getElementById(
            "far-m5-tbs2-earned"
        ).value;

    const restrictionInput =
        document.getElementById(
            "far-m5-tbs2-restriction"
        ).value;


    const janRevenueAnswer =
        janRevenueInput.trim() === ""
            ? null
            : Number(janRevenueInput);

    const janLiabilityAnswer =
        janLiabilityInput.trim() === ""
            ? null
            : Number(janLiabilityInput);

    const juneRevenueAnswer =
        juneRevenueInput.trim() === ""
            ? null
            : Number(juneRevenueInput);

    const earnedAnswer =
        earnedInput.trim() === ""
            ? null
            : Number(earnedInput);

    const restrictionAnswer =
        restrictionInput.trim() === ""
            ? null
            : Number(restrictionInput);


    const correctJanRevenue = 0;
    const correctJanLiability = 180000;
    const correctJuneRevenue = 0;
    const correctEarned = 180000;
    const correctRestriction = 1;


    let score = 0;


    if (janRevenueAnswer === correctJanRevenue) {
        score += 20;
    }

    if (janLiabilityAnswer === correctJanLiability) {
        score += 20;
    }

    if (juneRevenueAnswer === correctJuneRevenue) {
        score += 20;
    }

    if (earnedAnswer === correctEarned) {
        score += 20;
    }

    if (restrictionAnswer === correctRestriction) {
        score += 20;
    }


    saveFARTBSBestScore(
    "farModule5TBS2Score",
    percentage
);


    const result =
        document.getElementById(
            "far-m5-tbs2-result"
        );


    const submitActions =
        document.getElementById(
            "far-m5-tbs2-submit-actions"
        );

    if (submitActions) {
        submitActions.style.display = "none";
    }


    result.innerHTML = `

        <div class="${
            score === 100
                ? "result-correct"
                : "review-recommendation"
        }">

            <h3>
                Score: ${score}%
            </h3>


            <h3>
                January 1
            </h3>

            <p>
                Bright Future received cash, but the
                measurable service barrier had not yet
                been satisfied.
            </p>

            <p>
                The donor also has a right of return.
            </p>


            <div class="formula-box">

                Contribution Revenue
                =
                $0


                Liability
                =
                $180,000

            </div>


            <h3>
                June 30
            </h3>

            <p>
                Only 350 of the required 600 participants
                have been served.
            </p>

            <p>
                The required barrier therefore has not yet
been substantially overcome.
            </p>


            <div class="formula-box">

                Contribution Revenue
                =
                $0

            </div>


            <h3>
                December 31
            </h3>

            <p>
                Bright Future has served 650 participants
                and substantially overcome the
required contribution barrier.
            </p>


            <div class="formula-box">

                Contribution Revenue
                =
                $180,000

            </div>


            <h3>
                Donor Restriction
            </h3>

            <p>
                Once the contribution is recognized,
                the donor still requires the resources
                to be used for workforce-development
                programs.
            </p>


            <div class="formula-box">

                WITH DONOR RESTRICTIONS

                Correct Entry
                =
                1

            </div>


            <div class="key-points">

                <h3>
                    CPA Takeaway
                </h3>

                <ul>

                    <li>
                        Barrier + right of return
                        → conditional contribution.
                    </li>

                    <li>
                        Cash received before satisfaction
                        → generally a liability.
                    </li>

                    <li>
                        Barrier substantially overcome
→ recognize contribution revenue.
                    </li>

                    <li>
                        After recognition, separately
                        evaluate donor restrictions.
                    </li>

                </ul>

            </div>


            <div class="lesson-actions">

                <button class="primary-button"
                        onclick="showFARModule5TBS2()">

                    Try Again

                </button>


                <button class="back-button"
                        onclick="showFARModule5TBSHub()">

                    Back to Simulations

                </button>

            </div>


        </div>

    `;

}

function showFARModule5TBS3() {

    saveCurrentPage({
        page: "farModule5TBS3"
    });

    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 5 · TBS 3
                </h1>

                <p>
                    Donated Services & Noncash Gifts
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule5TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
                </span>

                <h2>
                    Contribution Recognition Analysis
                </h2>

                <p>
                    Determine which donated services
                    and noncash gifts should be recognized
                    and calculate the related amounts.
                </p>

            </div>


            <div class="quiz-card">

                <h2>
                    Scenario
                </h2>

                <p>
                    Community Health Foundation receives
                    the following contributions during the year.
                </p>


                <div class="key-points">

                    <h3>
                        Item 1 — Legal Services
                    </h3>

                    <p>
                        An attorney donates legal services
                        with a fair value of
                        <strong>$24,000</strong>.
                    </p>

                    <p>
                        The services require specialized
                        legal skills, and the Foundation
                        otherwise would have hired an attorney.
                    </p>

                </div>


                <div class="key-points">

                    <h3>
                        Item 2 — General Volunteers
                    </h3>

                    <p>
                        Volunteers provide routine clerical
                        assistance valued at
                        <strong>$10,000</strong>.
                    </p>

                    <p>
                        The work does not require specialized
                        skills and does not create or enhance
                        a nonfinancial asset.
                    </p>

                </div>


                <div class="key-points">

                    <h3>
                        Item 3 — Donated Equipment
                    </h3>

                    <p>
                        A donor contributes medical equipment
                        with a fair value of
                        <strong>$65,000</strong>.
                    </p>

                    <p>
                        There are no donor-imposed restrictions.
                    </p>

                </div>


                <div class="key-points">

                    <h3>
                        Item 4 — Construction Services
                    </h3>

                    <p>
                        Skilled workers donate construction
                        services with a fair value of
                        <strong>$30,000</strong>
                        to build an addition to the Foundation's
                        facility.
                    </p>

                </div>


                <h2>
                    Required
                </h2>


                <div class="financial-example">

                    <div>

                        <span>
                            1. Legal Services Contribution Revenue
                        </span>

                        <input
                            type="number"
                            id="far-m5-tbs3-legal"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            2. General Volunteer Services Recognized
                        </span>

                        <input
                            type="number"
                            id="far-m5-tbs3-volunteer"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            3. Donated Equipment Recognized
                        </span>

                        <input
                            type="number"
                            id="far-m5-tbs3-equipment"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            4. Construction Services
                            Capitalized Into Asset
                        </span>

                        <input
                            type="number"
                            id="far-m5-tbs3-construction"
                            placeholder="Enter amount"
                        >

                    </div>


                </div>


                <div id="far-m5-tbs3-result"></div>


                <div class="lesson-actions"
                     id="far-m5-tbs3-submit-actions">

                    <button class="primary-button"
                            onclick="gradeFARModule5TBS3()">

                        Submit Simulation

                    </button>

                </div>


            </div>


        </section>

    `;

}

function gradeFARModule5TBS3() {

    const legalInput =
        document.getElementById(
            "far-m5-tbs3-legal"
        ).value;

    const volunteerInput =
        document.getElementById(
            "far-m5-tbs3-volunteer"
        ).value;

    const equipmentInput =
        document.getElementById(
            "far-m5-tbs3-equipment"
        ).value;

    const constructionInput =
        document.getElementById(
            "far-m5-tbs3-construction"
        ).value;


    const legalAnswer =
        legalInput.trim() === ""
            ? null
            : Number(legalInput);

    const volunteerAnswer =
        volunteerInput.trim() === ""
            ? null
            : Number(volunteerInput);

    const equipmentAnswer =
        equipmentInput.trim() === ""
            ? null
            : Number(equipmentInput);

    const constructionAnswer =
        constructionInput.trim() === ""
            ? null
            : Number(constructionInput);


    const correctLegal = 24000;
    const correctVolunteer = 0;
    const correctEquipment = 65000;
    const correctConstruction = 30000;


    let score = 0;


    if (legalAnswer === correctLegal) {
        score += 25;
    }

    if (volunteerAnswer === correctVolunteer) {
        score += 25;
    }

    if (equipmentAnswer === correctEquipment) {
        score += 25;
    }

    if (constructionAnswer === correctConstruction) {
        score += 25;
    }


    saveFARTBSBestScore(
    "farModule5TBS3Score",
    percentage
);


    const result =
        document.getElementById(
            "far-m5-tbs3-result"
        );


    const submitActions =
        document.getElementById(
            "far-m5-tbs3-submit-actions"
        );

    if (submitActions) {
        submitActions.style.display = "none";
    }


    result.innerHTML = `

        <div class="${
            score === 100
                ? "result-correct"
                : "review-recommendation"
        }">

            <h3>
                Score: ${score}%
            </h3>


            <h3>
                Item 1 — Legal Services
            </h3>

            <p>
                The legal services require specialized
                skills and otherwise would have been purchased.
            </p>

            <div class="formula-box">

                Contribution Revenue
                =
                $24,000

                Related Legal Expense
                =
                $24,000

            </div>


            <h3>
                Item 2 — General Volunteers
            </h3>

            <p>
                The routine clerical services do not
                satisfy the recognition criteria.
            </p>

            <div class="formula-box">

                Amount Recognized
                =
                $0

            </div>


            <h3>
                Item 3 — Donated Equipment
            </h3>

            <p>
                The contributed equipment is generally
                recognized at fair value.
            </p>

            <div class="formula-box">

                Equipment
                =
                $65,000

                Contribution Revenue
                =
                $65,000

            </div>


            <h3>
                Item 4 — Construction Services
            </h3>

            <p>
                The donated services create or enhance
                a nonfinancial asset.
            </p>

            <div class="formula-box">

                Amount Capitalized
                =
                $30,000

            </div>


            <div class="key-points">

                <h3>
                    CPA Takeaway
                </h3>

                <ul>

                    <li>
                        Specialized donated services may
                        qualify for recognition.
                    </li>

                    <li>
                        Routine volunteer services often
                        are not recognized.
                    </li>

                    <li>
                        Contributed nonfinancial assets
                        are generally measured at fair value.
                    </li>

                    <li>
                        Donated services that create or
                        enhance a nonfinancial asset may
                        be capitalized.
                    </li>

                </ul>

            </div>


            <div class="lesson-actions">

                <button class="primary-button"
                        onclick="showFARModule5TBS3()">

                    Try Again

                </button>


                <button class="back-button"
                        onclick="showFARModule5TBSHub()">

                    Back to Simulations

                </button>

            </div>


        </div>

    `;

}

function showFARModule5TBS4() {

    saveCurrentPage({
        page: "farModule5TBS4"
    });

    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 5 · TBS 4
                </h1>

                <p>
                    Endowments & Pledges
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule5TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
                </span>

                <h2>
                    Endowment and Contribution Receivable Analysis
                </h2>

                <p>
                    Analyze donor-restricted endowment
                    resources, investment return,
                    and an unconditional long-term pledge.
                </p>

            </div>


            <div class="quiz-card">

                <h2>
                    Scenario
                </h2>


                <div class="key-points">

                    <h3>
                        Item 1 — Endowment Gift
                    </h3>

                    <p>
                        A donor contributes
                        <strong>$500,000</strong>
                        and requires that the principal
                        be maintained as an endowment.
                    </p>

                </div>


                <div class="key-points">

                    <h3>
                        Item 2 — Investment Return
                    </h3>

                    <p>
                        During the year, the endowment earns:
                    </p>

                    <ul>

                        <li>
                            Interest and dividends:
                            <strong>$22,000</strong>
                        </li>

                        <li>
                            Net investment gain:
                            <strong>$18,000</strong>
                        </li>

                    </ul>

                    <p>
                        The donor requires the investment
                        return to be used only for scholarships.
                    </p>

                </div>


                <div class="key-points">

                    <h3>
                        Item 3 — Long-Term Pledge
                    </h3>

                    <p>
                        A separate donor makes an
                        <strong>unconditional promise</strong>
                        to contribute
                        <strong>$200,000</strong>
                        three years from now.
                    </p>

                    <p>
                        The present value of the expected
                        payment is <strong>$176,000</strong>.
                    </p>

                </div>


                <div class="key-points">

                    <h3>
                        Item 4 — Scholarship Spending
                    </h3>

                    <p>
                        During the year, the NFP uses
                        <strong>$25,000</strong>
                        of the endowment investment return
                        for qualifying scholarships,
                        satisfying that portion of the
                        donor restriction.
                    </p>

                </div>


                <h2>
                    Required
                </h2>


                <div class="financial-example">


                    <div>

                        <span>
                            1. Endowment Contribution
                            With Donor Restrictions
                        </span>

                        <input
                            type="number"
                            id="far-m5-tbs4-endowment"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            2. Total Investment Return
                        </span>

                        <input
                            type="number"
                            id="far-m5-tbs4-return"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            3. Initial Contribution Receivable
                            for Long-Term Pledge
                        </span>

                        <input
                            type="number"
                            id="far-m5-tbs4-pledge"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            4. Release From Restriction
                        for Scholarship Spending
                        </span>

                        <input
                            type="number"
                            id="far-m5-tbs4-release"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            5. Remaining Restricted
                            Investment Return
                        </span>

                        <input
                            type="number"
                            id="far-m5-tbs4-remaining"
                            placeholder="Enter amount"
                        >

                    </div>


                </div>


                <div id="far-m5-tbs4-result"></div>


                <div class="lesson-actions"
                     id="far-m5-tbs4-submit-actions">

                    <button class="primary-button"
                            onclick="gradeFARModule5TBS4()">

                        Submit Simulation

                    </button>

                </div>


            </div>


        </section>

    `;

}

function gradeFARModule5TBS4() {

    const endowmentAnswer =
        Number(
            document.getElementById(
                "far-m5-tbs4-endowment"
            ).value
        );

    const returnAnswer =
        Number(
            document.getElementById(
                "far-m5-tbs4-return"
            ).value
        );

    const pledgeAnswer =
        Number(
            document.getElementById(
                "far-m5-tbs4-pledge"
            ).value
        );

    const releaseAnswer =
        Number(
            document.getElementById(
                "far-m5-tbs4-release"
            ).value
        );

    const remainingAnswer =
        Number(
            document.getElementById(
                "far-m5-tbs4-remaining"
            ).value
        );


    const correctEndowment = 500000;
    const correctReturn = 40000;
    const correctPledge = 176000;
    const correctRelease = 25000;
    const correctRemaining = 15000;


    let score = 0;


    if (endowmentAnswer === correctEndowment) {
        score += 20;
    }

    if (returnAnswer === correctReturn) {
        score += 20;
    }

    if (pledgeAnswer === correctPledge) {
        score += 20;
    }

    if (releaseAnswer === correctRelease) {
        score += 20;
    }

    if (remainingAnswer === correctRemaining) {
        score += 20;
    }


    saveFARTBSBestScore(
    "farModule5TBS4Score",
    percentage
);


    const result =
        document.getElementById(
            "far-m5-tbs4-result"
        );


    const submitActions =
        document.getElementById(
            "far-m5-tbs4-submit-actions"
        );

    if (submitActions) {
        submitActions.style.display = "none";
    }


    result.innerHTML = `

        <div class="${
            score === 100
                ? "result-correct"
                : "review-recommendation"
        }">

            <h3>
                Score: ${score}%
            </h3>


            <h3>
                Item 1 — Donor-Restricted Endowment
            </h3>

            <p>
                The donor requires the principal to be
                maintained as an endowment.
            </p>

            <div class="formula-box">

                Contribution With
                Donor Restrictions
                =
                $500,000

            </div>


            <h3>
                Item 2 — Investment Return
            </h3>

            <div class="formula-box">

                Interest & Dividends
                $22,000

                + Investment Gain
                $18,000

                =

                $40,000
                Total Investment Return

            </div>


            <p>
                Because the donor restricts the return
                for scholarships, the return is generally
                included in net assets with donor restrictions
                until used for that purpose.
            </p>


            <h3>
                Item 3 — Long-Term Pledge
            </h3>

            <p>
                The promise is unconditional and payable
                several years in the future.
            </p>

            <div class="formula-box">

                Initial Contribution Receivable
                =
                Present Value

                =

                $176,000

            </div>


            <h3>
                Item 4 — Release From Restriction
            </h3>

            <p>
                The NFP spent $25,000 on qualifying
                scholarships.
            </p>

            <div class="formula-box">

                Release From Restriction
                =
                $25,000

            </div>


            <h3>
                Item 5 — Remaining Restricted Return
            </h3>

            <div class="formula-box">

                Investment Return
                $40,000

                − Release
                $25,000

                =

                $15,000 Remaining

            </div>


            <div class="key-points">

                <h3>
                    CPA Takeaway
                </h3>

                <ul>

                    <li>
                        Donor-restricted endowments
                        generally increase net assets
                        with donor restrictions.
                    </li>

                    <li>
                        Investment return classification
                        depends on donor stipulations.
                    </li>

                    <li>
                        Long-term unconditional pledges
                        may require present-value measurement.
                    </li>

                    <li>
                        Spending restricted return for
                        the donor's specified purpose
                        generally creates a release
                        from restriction.
                    </li>

                </ul>

            </div>


            <div class="lesson-actions">

                <button class="primary-button"
                        onclick="showFARModule5TBS4()">

                    Try Again

                </button>


                <button class="back-button"
                        onclick="showFARModule5TBSHub()">

                    Back to Simulations

                </button>

            </div>


        </div>

    `;

}

function showFARModule5TBS5() {

    saveCurrentPage({
        page: "farModule5TBS5"
    });

    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 5 · TBS 5
                </h1>

                <p>
                    Integrated NFP Reporting
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule5TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
                </span>

                <h2>
                    Integrated Year-End NFP Analysis
                </h2>

                <p>
                    Apply multiple not-for-profit accounting
                    concepts to determine contribution
                    recognition and ending net assets.
                </p>

            </div>


            <div class="quiz-card">

                <h2>
                    Scenario
                </h2>

                <p>
                    Helping Hands Foundation begins the year with:
                </p>


                <div class="financial-example">

                    <div>

                        <span>
                            Net Assets Without
                            Donor Restrictions
                        </span>

                        <strong>
                            $400,000
                        </strong>

                    </div>


                    <div>

                        <span>
                            Net Assets With
                            Donor Restrictions
                        </span>

                        <strong>
                            $150,000
                        </strong>

                    </div>

                </div>


                <p>
                    During the year, the Foundation has
                    the following transactions:
                </p>


                <div class="key-points">

                    <ul>

                        <li>
                            Receives an unconditional
                            contribution of
                            <strong>$100,000</strong>
                            with no donor restrictions.
                        </li>

                        <li>
                            Receives an unconditional
                            contribution of
                            <strong>$120,000</strong>
                            restricted by the donor
                            for educational programs.
                        </li>

                        <li>
                            Receives
                            <strong>$60,000 cash</strong>
                            under a conditional agreement.
                            The required barrier has not yet
been substantially overcome.
                        </li>

                        <li>
                            Uses <strong>$70,000</strong>
                            of previously donor-restricted
                            resources for qualifying
                            educational expenses.
                        </li>

                        <li>
                            Receives qualifying donated
                            legal services with a fair
                            value of <strong>$20,000</strong>.
                            The NFP would otherwise have
                            purchased the services.
                        </li>

                        <li>
                            Other operating expenses
                            during the year total
                            <strong>$90,000</strong>.
                        </li>

                    </ul>

                </div>


                <h2>
                    Required
                </h2>


                <div class="financial-example">


                    <div>

                        <span>
                            1. Contribution Revenue
                            Without Donor Restrictions
                            From Cash Contribution
                        </span>

                        <input
                            type="number"
                            id="far-m5-tbs5-unrestricted"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            2. Contribution Revenue
                            With Donor Restrictions
                        </span>

                        <input
                            type="number"
                            id="far-m5-tbs5-restricted"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            3. Liability From
                            Conditional Contribution
                        </span>

                        <input
                            type="number"
                            id="far-m5-tbs5-liability"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            4. Ending Net Assets
                            With Donor Restrictions
                        </span>

                        <input
                            type="number"
                            id="far-m5-tbs5-ending-restricted"
                            placeholder="Enter amount"
                        >

                    </div>


                    <div>

                        <span>
                            5. Ending Net Assets
                            Without Donor Restrictions
                        </span>

                        <input
                            type="number"
                            id="far-m5-tbs5-ending-unrestricted"
                            placeholder="Enter amount"
                        >

                    </div>


                </div>


                <div id="far-m5-tbs5-result"></div>


                <div class="lesson-actions"
                     id="far-m5-tbs5-submit-actions">

                    <button class="primary-button"
                            onclick="gradeFARModule5TBS5()">

                        Submit Simulation

                    </button>

                </div>


            </div>


        </section>

    `;

}

function gradeFARModule5TBS5() {

    const unrestrictedAnswer =
        Number(
            document.getElementById(
                "far-m5-tbs5-unrestricted"
            ).value
        );

    const restrictedAnswer =
        Number(
            document.getElementById(
                "far-m5-tbs5-restricted"
            ).value
        );

    const liabilityAnswer =
        Number(
            document.getElementById(
                "far-m5-tbs5-liability"
            ).value
        );

    const endingRestrictedAnswer =
        Number(
            document.getElementById(
                "far-m5-tbs5-ending-restricted"
            ).value
        );

    const endingUnrestrictedAnswer =
        Number(
            document.getElementById(
                "far-m5-tbs5-ending-unrestricted"
            ).value
        );


    const correctUnrestricted = 100000;

    const correctRestricted = 120000;

    const correctLiability = 60000;

    const correctEndingRestricted = 200000;

    const correctEndingUnrestricted = 480000;


    let score = 0;


    if (unrestrictedAnswer === correctUnrestricted) {
        score += 20;
    }

    if (restrictedAnswer === correctRestricted) {
        score += 20;
    }

    if (liabilityAnswer === correctLiability) {
        score += 20;
    }

    if (endingRestrictedAnswer === correctEndingRestricted) {
        score += 20;
    }

    if (endingUnrestrictedAnswer === correctEndingUnrestricted) {
        score += 20;
    }


    saveFARTBSBestScore(
    "farModule5TBS5Score",
    percentage
);


    const result =
        document.getElementById(
            "far-m5-tbs5-result"
        );


    const submitActions =
        document.getElementById(
            "far-m5-tbs5-submit-actions"
        );

    if (submitActions) {
        submitActions.style.display = "none";
    }


    result.innerHTML = `

        <div class="${
            score === 100
                ? "result-correct"
                : "review-recommendation"
        }">

            <h3>
                Score: ${score}%
            </h3>


            <h3>
                Item 1 — Unrestricted Contribution
            </h3>

            <div class="formula-box">

                Contribution Revenue
                Without Donor Restrictions
                =
                $100,000

            </div>


            <h3>
                Item 2 — Restricted Contribution
            </h3>

            <div class="formula-box">

                Contribution Revenue
                With Donor Restrictions
                =
                $120,000

            </div>


            <h3>
                Item 3 — Conditional Contribution
            </h3>

            <p>
                The $60,000 was received before
the required contribution barrier
was substantially overcome.
            </p>

            <div class="formula-box">

                Contribution Revenue
                =
                $0

                Liability
                =
                $60,000

            </div>


            <h3>
                Item 4 — Ending Net Assets
                With Donor Restrictions
            </h3>

            <div class="formula-box">

                Beginning
                $150,000

                + Restricted Contribution
                $120,000

                − Release From Restriction
                $70,000

                =

                $200,000

            </div>


            <h3>
                Item 5 — Ending Net Assets
                Without Donor Restrictions
            </h3>

            <p>
                Start with beginning net assets without
                donor restrictions and include:
            </p>

            <ul>

                <li>
                    + $100,000 unrestricted contribution
                </li>

                <li>
                    + $70,000 release from restriction
                </li>

                <li>
                    + $20,000 qualifying donated
                    legal-service contribution revenue
                </li>

                <li>
                    − $20,000 legal expense
                </li>

                <li>
                    − $90,000 other operating expenses
                </li>

            </ul>


            <div class="formula-box">

                Beginning
                $400,000

                + $100,000

                + $70,000

                + $20,000

                − $20,000

                − $90,000

                =

                $480,000

            </div>


            <div class="lesson-actions">

                <button class="primary-button"
                        onclick="showFARModule5TBS5()">

                    Try Again

                </button>


                <button class="back-button"
                        onclick="showFARModule5TBSHub()">

                    Back to Simulations

                </button>

            </div>


        </div>

    `;

}

function showFARModule6TBSHub() {

    saveCurrentPage({
        page: "farModule6TBSHub"
    });

    setActiveNav("Learn");


    const tbs1Score =
        localStorage.getItem(
            "farModule6TBS1Score"
        );

    const tbs2Score =
        localStorage.getItem(
            "farModule6TBS2Score"
        );

    const tbs3Score =
        localStorage.getItem(
            "farModule6TBS3Score"
        );

    const tbs4Score =
        localStorage.getItem(
            "farModule6TBS4Score"
        );

    const tbs5Score =
        localStorage.getItem(
            "farModule6TBS5Score"
        );


    const completedCount = [
        tbs1Score,
        tbs2Score,
        tbs3Score,
        tbs4Score,
        tbs5Score
    ].filter(function(score) {

        return score !== null;

    }).length;


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 6 TBS Practice
                </h1>

                <p>
                    FAR Final Review & Simulations
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule(6)">

                ← Back to Module 6

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATIONS
                </span>

                <h2>
                    FAR Final Simulation Center
                </h2>

                <p>
                    Practice cumulative FAR simulations
                    combining financial reporting,
                    balance sheet accounts, transactions,
                    governmental accounting,
                    and not-for-profit accounting.
                </p>


                <div class="exam-progress">

                    TBS Progress:
                    ${completedCount} / 5 Completed

                </div>

            </div>


            <div class="lesson-card"
                 onclick="showFARModule6TBS1()">

                <div class="lesson-number">
                    TBS 1
                </div>

                <div class="lesson-info">

                    <h3>
                        Integrated Financial Statement Adjustments
                    </h3>

                    <p>
                        Analyze year-end adjustments
                        and determine their effects on
                        net income, assets, and liabilities.
                    </p>

                </div>

                <div class="lesson-status">

                    ${
                        tbs1Score !== null
                            ? "✓ " + tbs1Score + "%"
                            : "Start →"
                    }

                </div>

            </div>


            <div class="lesson-card"
     onclick="showFARModule6TBS2()">

    <div class="lesson-number">
        TBS 2
    </div>

    <div class="lesson-info">

        <h3>
            Receivables, Inventory & Cash Flow
        </h3>

        <p>
            Integrate receivables, credit losses,
            inventory effects, and operating cash flow.
        </p>

    </div>

    <div class="lesson-status">

        ${
            tbs2Score !== null
                ? "✓ " + tbs2Score + "%"
                : "Start →"
        }

    </div>

</div>


            <div class="lesson-card"
     onclick="showFARModule6TBS3()">

    <div class="lesson-number">
        TBS 3
    </div>

    <div class="lesson-info">

        <h3>
            Long-Lived Assets, Debt & Investments
        </h3>

        <p>
            Analyze impairment, bond interest,
            discount amortization, and investment
            fair value adjustments.
        </p>

    </div>

    <div class="lesson-status">

        ${
            tbs3Score !== null
                ? "✓ " + tbs3Score + "%"
                : "Start →"
        }

    </div>

</div>


            <div class="lesson-card"
     onclick="showFARModule6TBS4()">

    <div class="lesson-number">
        TBS 4
    </div>

    <div class="lesson-info">

        <h3>
            Governmental & NFP Integrated Review
        </h3>

        <p>
            Apply governmental fund, government-wide,
            donor restriction, and conditional
            contribution concepts.
        </p>

    </div>

    <div class="lesson-status">

        ${
            tbs4Score !== null
                ? "✓ " + tbs4Score + "%"
                : "Start →"
        }

    </div>

</div>


            <div class="lesson-card"
     onclick="showFARModule6TBS5()">

    <div class="lesson-number">
        TBS 5
    </div>

    <div class="lesson-info">

        <h3>
            FAR Final Comprehensive Simulation
        </h3>

        <p>
            Complete a final integrated simulation
            covering financial reporting, receivables,
            debt, cash flows, and NFP accounting.
        </p>

    </div>

    <div class="lesson-status">

        ${
            tbs5Score !== null
                ? "✓ " + tbs5Score + "%"
                : "Start →"
        }

    </div>

</div>


        </section>

    `;

}

function showFARModule6TBS1() {

    saveCurrentPage({
        page: "farModule6TBS1"
    });

    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 6 — TBS 1
                </h1>

                <p>
                    Integrated Financial Statement Adjustments
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule6TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
                </span>


                <h2>
                    Year-End Adjustment Analysis
                </h2>


                <p>
                    Apex Company reports preliminary
                    net income of
                    <strong>$420,000</strong>
                    before considering the following
                    year-end adjustments.
                </p>

            </div>


            <div class="course-intro-card">

                <h3>
                    Year-End Information
                </h3>


                <ol>

                    <li>
                        Employees earned
                        <strong>$24,000</strong>
                        of salaries that have not
                        been recorded or paid.
                    </li>

                    <li>
                        The company earned
                        <strong>$18,000</strong>
                        of service revenue that has
                        not yet been recorded or billed.
                    </li>

                    <li>
                        Current-year depreciation expense
                        of
                        <strong>$30,000</strong>
                        has not been recorded.
                    </li>

                    <li>
                        Ending inventory was understated by
                        <strong>$12,000</strong>
                        because inventory on hand was
                        accidentally omitted from the count.
                    </li>

                    <li>
                        A lawsuit loss of
                        <strong>$20,000</strong>
                        is probable and reasonably estimable,
                        but has not yet been recorded.
                    </li>

                </ol>

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 1 — Adjusted Net Income
                </h3>

                <input
                    id="far-m6-tbs1-net-income"
                    type="number"
                    placeholder="Enter amount"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 2 — Accounts Receivable Increase
                </h3>

                <input
                    id="far-m6-tbs1-ar"
                    type="number"
                    placeholder="Enter amount"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 3 — Inventory Increase
                </h3>

                <input
                    id="far-m6-tbs1-inventory"
                    type="number"
                    placeholder="Enter amount"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 4 — Increase in Liabilities
                </h3>

                <input
                    id="far-m6-tbs1-liabilities"
                    type="number"
                    placeholder="Enter amount"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 5 — Net Change in Total Assets
                </h3>

                <input
                    id="far-m6-tbs1-assets"
                    type="number"
                    placeholder="Enter amount"
                >

            </div>


            <div
                id="far-m6-tbs1-submit-actions"
                class="lesson-actions"
            >

                <button
                    class="primary-button"
                    onclick="gradeFARModule6TBS1()"
                >
                    Submit Simulation
                </button>


                <button
                    class="back-button"
                    onclick="showFARModule6TBSHub()"
                >
                    Back to Simulations
                </button>

            </div>


            <div id="far-m6-tbs1-result">
            </div>


        </section>

    `;

}

function gradeFARModule6TBS1() {

    const netIncomeInput =
        document.getElementById(
            "far-m6-tbs1-net-income"
        ).value;

    const arInput =
        document.getElementById(
            "far-m6-tbs1-ar"
        ).value;

    const inventoryInput =
        document.getElementById(
            "far-m6-tbs1-inventory"
        ).value;

    const liabilitiesInput =
        document.getElementById(
            "far-m6-tbs1-liabilities"
        ).value;

    const assetsInput =
        document.getElementById(
            "far-m6-tbs1-assets"
        ).value;


    const netIncomeAnswer =
        netIncomeInput.trim() === ""
            ? null
            : Number(netIncomeInput);

    const arAnswer =
        arInput.trim() === ""
            ? null
            : Number(arInput);

    const inventoryAnswer =
        inventoryInput.trim() === ""
            ? null
            : Number(inventoryInput);

    const liabilitiesAnswer =
        liabilitiesInput.trim() === ""
            ? null
            : Number(liabilitiesInput);

    const assetsAnswer =
        assetsInput.trim() === ""
            ? null
            : Number(assetsInput);


    const correctNetIncome = 376000;
    const correctAR = 18000;
    const correctInventory = 12000;
    const correctLiabilities = 44000;
    const correctAssets = 0;


    let score = 0;


    if (netIncomeAnswer === correctNetIncome) {
        score += 20;
    }

    if (arAnswer === correctAR) {
        score += 20;
    }

    if (inventoryAnswer === correctInventory) {
        score += 20;
    }

    if (liabilitiesAnswer === correctLiabilities) {
        score += 20;
    }

    if (assetsAnswer === correctAssets) {
        score += 20;
    }


    saveFARTBSBestScore(
    "farModule6TBS1Score",
    percentage
);


    const result =
        document.getElementById(
            "far-m6-tbs1-result"
        );


    const submitActions =
        document.getElementById(
            "far-m6-tbs1-submit-actions"
        );

    if (submitActions) {
        submitActions.style.display = "none";
    }


    result.innerHTML = `

    <div class="${
        score === 100
            ? "result-correct"
            : "review-recommendation"
    }">

        <h3>
            Score: ${score}%
        </h3>


        <h3>
            Item 1 — Adjusted Net Income
        </h3>

        <div class="formula-box">

            <p>
                Preliminary Net Income:
                <strong>$420,000</strong>
            </p>

            <p>
                − Accrued Salaries:
                <strong>$24,000</strong>
            </p>

            <p>
                + Accrued Revenue:
                <strong>$18,000</strong>
            </p>

            <p>
                − Depreciation:
                <strong>$30,000</strong>
            </p>

            <p>
                + Inventory Correction:
                <strong>$12,000</strong>
            </p>

            <p>
                − Lawsuit Loss:
                <strong>$20,000</strong>
            </p>

            <hr>

            <p>
                <strong>
                    Adjusted Net Income = $376,000
                </strong>
            </p>

        </div>


        <h3>
            Item 2 — Accounts Receivable
        </h3>

        <p>
            The company earned $18,000 of service
            revenue that had not yet been recorded
            or billed.
        </p>

        <div class="formula-box">

            <p>
                <strong>
                    Increase in Accounts Receivable
                    = $18,000
                </strong>
            </p>

        </div>


        <h3>
            Item 3 — Inventory
        </h3>

        <p>
            Ending inventory was understated because
            $12,000 of inventory was omitted from the
            physical count.
        </p>

        <div class="formula-box">

            <p>
                <strong>
                    Increase in Inventory = $12,000
                </strong>
            </p>

        </div>


        <h3>
            Item 4 — Liabilities
        </h3>

        <p>
            Two adjustments create additional
            liabilities.
        </p>

        <div class="formula-box">

            <p>
                Salaries Payable:
                <strong>+$24,000</strong>
            </p>

            <p>
                Litigation Liability:
                <strong>+$20,000</strong>
            </p>

            <hr>

            <p>
                <strong>
                    Total Increase in Liabilities
                    = $44,000
                </strong>
            </p>

        </div>


        <h3>
            Item 5 — Net Effect on Total Assets
        </h3>

        <p>
            Three adjustments affect total assets.
        </p>

        <div class="formula-box">

            <p>
                Accounts Receivable:
                <strong>+$18,000</strong>
            </p>

            <p>
                Depreciation / Accumulated Depreciation:
                <strong>−$30,000</strong>
            </p>

            <p>
                Inventory:
                <strong>+$12,000</strong>
            </p>

            <hr>

            <p>
                <strong>
                    Net Change in Total Assets = $0
                </strong>
            </p>

        </div>


        <div class="key-points">

            <h3>
                Integrated Check
            </h3>

            <p>
                Overall, the adjustments decrease
                net income by
                <strong>$44,000</strong>.
            </p>

            <p>
                Total assets have
                <strong>$0 net change</strong>,
                while total liabilities increase by
                <strong>$44,000</strong>.
            </p>

            <p>
                Because the $44,000 decrease in net
                income decreases equity by $44,000:
            </p>

            <div class="formula-box">

                <p>
                    Change in Assets:
                    <strong>$0</strong>
                </p>

                <p>
                    Change in Liabilities:
                    <strong>+$44,000</strong>
                </p>

                <p>
                    Change in Equity:
                    <strong>−$44,000</strong>
                </p>

                <hr>

                <p>
                    <strong>
                        $0 = $44,000 − $44,000
                    </strong>
                </p>

            </div>

            <p>
                The accounting equation remains balanced.
            </p>

        </div>


        <div class="lesson-actions">

            <button class="primary-button"
                    onclick="showFARModule6TBS1()">

                Try Again

            </button>


            <button class="back-button"
                    onclick="showFARModule6TBSHub()">

                Back to Simulations

            </button>

        </div>

    </div>

`;

}

function showFARModule6TBS2() {

    saveCurrentPage({
        page: "farModule6TBS2"
    });

    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 6 — TBS 2
                </h1>

                <p>
                    Receivables, Inventory & Cash Flow
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule6TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
                </span>

                <h2>
                    Operating Cycle Analysis
                </h2>

                <p>
                    Orion Company reports the following
                    information for the current year.
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
    Net income after all accrual-basis
    year-end adjustments, including the
    credit-loss adjustment:
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

                <p>
                    How much cash was collected from customers
                    during the year?
                </p>

                <input
                    id="far-m6-tbs2-cash-collected"
                    type="number"
                    placeholder="Enter amount"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 2 — Credit Loss Expense
                </h3>

                <p>
                    What credit loss expense must be recognized
                    to produce the required ending allowance?
                </p>

                <input
                    id="far-m6-tbs2-credit-loss"
                    type="number"
                    placeholder="Enter amount"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 3 — Cost of Goods Sold
                </h3>

                <p>
                    What is cost of goods sold for the year?
                </p>

                <input
                    id="far-m6-tbs2-cogs"
                    type="number"
                    placeholder="Enter amount"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 4 — Inventory Adjustment in CFO
                </h3>

                <p>
                    Under the indirect method,
                    what adjustment related to Inventory
                    should be made to net income?
                </p>

                <p>
                    Enter the adjustment as a positive amount
                    if added to net income or a negative amount
                    if subtracted.
                </p>

                <input
                    id="far-m6-tbs2-inventory-cfo"
                    type="number"
                    placeholder="Enter amount"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 5 — Net Cash Provided by Operating Activities
                </h3>

                <p>
                    Using the indirect method, calculate
                    net cash provided by operating activities.
                </p>

                <input
                    id="far-m6-tbs2-cfo"
                    type="number"
                    placeholder="Enter amount"
                >

            </div>


            <div
                id="far-m6-tbs2-submit-actions"
                class="lesson-actions"
            >

                <button class="primary-button"
                        onclick="gradeFARModule6TBS2()">

                    Submit Simulation

                </button>


                <button class="back-button"
                        onclick="showFARModule6TBSHub()">

                    Back to Simulations

                </button>

            </div>


            <div id="far-m6-tbs2-result">
            </div>


        </section>

    `;

}

function gradeFARModule6TBS2() {

    const cashCollectedAnswer =
        Number(
            document.getElementById(
                "far-m6-tbs2-cash-collected"
            ).value
        );

    const creditLossAnswer =
        Number(
            document.getElementById(
                "far-m6-tbs2-credit-loss"
            ).value
        );

    const cogsAnswer =
        Number(
            document.getElementById(
                "far-m6-tbs2-cogs"
            ).value
        );

    const inventoryCFOAnswer =
        Number(
            document.getElementById(
                "far-m6-tbs2-inventory-cfo"
            ).value
        );

    const cfoAnswer =
        Number(
            document.getElementById(
                "far-m6-tbs2-cfo"
            ).value
        );


    const correctCashCollected = 860000;
    const correctCreditLoss = 19000;
    const correctCOGS = 470000;
    const correctInventoryCFO = -30000;
    const correctCFO = 195000;


    let score = 0;


    if (cashCollectedAnswer === correctCashCollected) {
        score += 20;
    }

    if (creditLossAnswer === correctCreditLoss) {
        score += 20;
    }

    if (cogsAnswer === correctCOGS) {
        score += 20;
    }

    if (inventoryCFOAnswer === correctInventoryCFO) {
        score += 20;
    }

    if (cfoAnswer === correctCFO) {
        score += 20;
    }


    saveFARTBSBestScore(
    "farModule6TBS2Score",
    percentage
);


    const result =
        document.getElementById(
            "far-m6-tbs2-result"
        );


    const submitActions =
        document.getElementById(
            "far-m6-tbs2-submit-actions"
        );


    if (submitActions) {
        submitActions.style.display = "none";
    }


    result.innerHTML = `

    <div class="${
        score === 100
            ? "result-correct"
            : "review-recommendation"
    }">

        <h3>
            Score: ${score}%
        </h3>


        <h3>
            Item 1 — Cash Collected
        </h3>

        <p>
            Use the Accounts Receivable rollforward.
        </p>

        <div class="formula-box">

            <p>
                Beginning Accounts Receivable:
                <strong>$180,000</strong>
            </p>

            <p>
                + Credit Sales:
                <strong>$900,000</strong>
            </p>

            <p>
                − Cash Collections
            </p>

            <p>
                = Ending Accounts Receivable:
                <strong>$220,000</strong>
            </p>

            <hr>

            <p>
                <strong>
                    Cash Collections = $860,000
                </strong>
            </p>

        </div>


        <h3>
            Item 2 — Credit Loss Expense
        </h3>

        <p>
            The Allowance for Credit Losses has a
            $3,000 debit balance before adjustment
            and must end with a $16,000 credit balance.
        </p>

        <div class="formula-box">

            <p>
                Required ending credit balance:
                <strong>$16,000</strong>
            </p>

            <p>
                + Existing debit balance:
                <strong>$3,000</strong>
            </p>

            <hr>

            <p>
                <strong>
                    Credit Loss Expense = $19,000
                </strong>
            </p>

        </div>


        <h3>
            Item 3 — Cost of Goods Sold
        </h3>

        <div class="formula-box">

            <p>
                Beginning Inventory:
                <strong>$140,000</strong>
            </p>

            <p>
                + Purchases:
                <strong>$500,000</strong>
            </p>

            <p>
                − Ending Inventory:
                <strong>$170,000</strong>
            </p>

            <hr>

            <p>
                <strong>
                    Cost of Goods Sold = $470,000
                </strong>
            </p>

        </div>


        <h3>
            Item 4 — Inventory CFO Adjustment
        </h3>

        <p>
            Inventory increased from
            $140,000 to $170,000.
        </p>

        <div class="formula-box">

            <p>
                Ending Inventory:
                <strong>$170,000</strong>
            </p>

            <p>
                − Beginning Inventory:
                <strong>$140,000</strong>
            </p>

            <p>
                = Increase in Inventory:
                <strong>$30,000</strong>
            </p>

            <hr>

            <p>
                Because inventory increased,
                it is subtracted from net income
                under the indirect method.
            </p>

            <p>
                <strong>
                    CFO Adjustment = −$30,000
                </strong>
            </p>

        </div>


        <h3>
            Item 5 — Net Cash Provided by Operating Activities
        </h3>

        <div class="formula-box">

            <p>
                Net Income:
                <strong>$210,000</strong>
            </p>

            <p>
                + Depreciation Expense:
                <strong>$35,000</strong>
            </p>

            <p>
                − Increase in Accounts Receivable:
                <strong>$40,000</strong>
            </p>

            <p>
                − Increase in Inventory:
                <strong>$30,000</strong>
            </p>

            <p>
                + Increase in Accounts Payable:
                <strong>$20,000</strong>
            </p>

            <hr>

            <p>
                <strong>
                    Net Cash Provided by
                    Operating Activities = $195,000
                </strong>
            </p>

        </div>


        <div class="key-points">

            <h3>
                Key FAR Relationships
            </h3>

            <p>
                An increase in Accounts Receivable
                decreases operating cash flow under
                the indirect method.
            </p>

            <p>
                An increase in Inventory decreases
                operating cash flow.
            </p>

            <p>
                An increase in Accounts Payable
                increases operating cash flow.
            </p>

        </div>


        <div class="lesson-actions">

            <button class="primary-button"
                    onclick="showFARModule6TBS2()">

                Try Again

            </button>


            <button class="back-button"
                    onclick="showFARModule6TBSHub()">

                Back to Simulations

            </button>

        </div>

    </div>

`;

}

function showFARModule6TBS3() {

    saveCurrentPage({
        page: "farModule6TBS3"
    });

    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 6 — TBS 3
                </h1>

                <p>
                    Long-Lived Assets, Debt & Investments
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule6TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
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
                        Due to adverse circumstances,
                        the equipment is tested for impairment.
                        Expected undiscounted future cash flows
                        are <strong>$330,000</strong>,
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
                        amount of <strong>$190,000</strong>
                        before the year-end fair value
                        adjustment. Its year-end fair value
                        is <strong>$215,000</strong>.
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

                <p>
                    Determine the impairment loss,
                    if any, on the equipment.
                </p>

                <input
                    id="far-m6-tbs3-impairment"
                    type="number"
                    placeholder="Enter amount"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 2 — Bond Interest Expense
                </h3>

                <p>
                    Determine interest expense for
                    the current year using the
                    effective-interest method.
                </p>

                <input
                    id="far-m6-tbs3-interest"
                    type="number"
                    placeholder="Enter amount"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 3 — Bond Discount Amortization
                </h3>

                <p>
                    Determine the amount of bond
                    discount amortized during the year.
                </p>

                <input
                    id="far-m6-tbs3-amortization"
                    type="number"
                    placeholder="Enter amount"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 4 — Unrealized Gain on Trading Investment
                </h3>

                <p>
                    Determine the unrealized holding gain
                    recognized in current-year net income.
                </p>

                <input
                    id="far-m6-tbs3-investment-gain"
                    type="number"
                    placeholder="Enter amount"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 5 — Combined Effect on Net Income
                </h3>

                <p>
                    Determine the combined effect of the
                    impairment loss, bond interest expense,
                    and trading investment fair value
                    adjustment on current-year net income.
                </p>

                <p>
                    Enter a decrease in net income
                    as a negative amount.
                </p>

                <input
                    id="far-m6-tbs3-net-income"
                    type="number"
                    placeholder="Enter amount"
                >

            </div>


            <div
                id="far-m6-tbs3-submit-actions"
                class="lesson-actions"
            >

                <button
                    class="primary-button"
                    onclick="gradeFARModule6TBS3()"
                >
                    Submit Simulation
                </button>


                <button
                    class="back-button"
                    onclick="showFARModule6TBSHub()"
                >
                    Back to Simulations
                </button>

            </div>


            <div id="far-m6-tbs3-result">
            </div>


        </section>

    `;

}

function gradeFARModule6TBS3() {

    const impairmentAnswer =
        Number(
            document.getElementById(
                "far-m6-tbs3-impairment"
            ).value
        );

    const interestAnswer =
        Number(
            document.getElementById(
                "far-m6-tbs3-interest"
            ).value
        );

    const amortizationAnswer =
        Number(
            document.getElementById(
                "far-m6-tbs3-amortization"
            ).value
        );

    const investmentGainAnswer =
        Number(
            document.getElementById(
                "far-m6-tbs3-investment-gain"
            ).value
        );

    const netIncomeAnswer =
        Number(
            document.getElementById(
                "far-m6-tbs3-net-income"
            ).value
        );


    const correctImpairment = 60000;
    const correctInterest = 75200;
    const correctAmortization = 15200;
    const correctInvestmentGain = 25000;
    const correctNetIncome = -110200;


    let score = 0;


    if (impairmentAnswer === correctImpairment) {
        score += 20;
    }

    if (interestAnswer === correctInterest) {
        score += 20;
    }

    if (amortizationAnswer === correctAmortization) {
        score += 20;
    }

    if (investmentGainAnswer === correctInvestmentGain) {
        score += 20;
    }

    if (netIncomeAnswer === correctNetIncome) {
        score += 20;
    }


    saveFARTBSBestScore(
    "farModule6TBS3Score",
    percentage
);


    const result =
        document.getElementById(
            "far-m6-tbs3-result"
        );


    const submitActions =
        document.getElementById(
            "far-m6-tbs3-submit-actions"
        );


    if (submitActions) {
        submitActions.style.display = "none";
    }


    result.innerHTML = `

        <div class="${
            score === 100
                ? "result-correct"
                : "review-recommendation"
        }">

            <h3>
                Score: ${score}%
            </h3>


            <h3>
                Item 1 — Equipment Impairment Loss
            </h3>

            <p>
                First determine the equipment's
                carrying amount.
            </p>

            <div class="formula-box">

                <p>
                    Original Cost:
                    <strong>$480,000</strong>
                </p>

                <p>
                    − Accumulated Depreciation:
                    <strong>$120,000</strong>
                </p>

                <hr>

                <p>
                    Carrying Amount:
                    <strong>$360,000</strong>
                </p>

            </div>

            <p>
                For a long-lived asset held and used,
                compare the carrying amount with expected
                undiscounted future cash flows.
            </p>

            <div class="formula-box">

                <p>
                    Carrying Amount:
                    <strong>$360,000</strong>
                </p>

                <p>
                    Undiscounted Future Cash Flows:
                    <strong>$330,000</strong>
                </p>

                <p>
                    Because $360,000 &gt; $330,000,
                    the asset fails the recoverability test.
                </p>

                <hr>

                <p>
                    Carrying Amount:
                    <strong>$360,000</strong>
                </p>

                <p>
                    − Fair Value:
                    <strong>$300,000</strong>
                </p>

                <p>
                    <strong>
                        Impairment Loss = $60,000
                    </strong>
                </p>

            </div>


            <h3>
                Item 2 — Bond Interest Expense
            </h3>

            <p>
                Under the effective-interest method,
                interest expense is based on the
                beginning carrying amount and the
                effective interest rate.
            </p>

            <div class="formula-box">

                <p>
                    Beginning Carrying Amount:
                    <strong>$940,000</strong>
                </p>

                <p>
                    × Effective Rate:
                    <strong>8%</strong>
                </p>

                <hr>

                <p>
                    <strong>
                        Interest Expense = $75,200
                    </strong>
                </p>

            </div>


            <h3>
                Item 3 — Bond Discount Amortization
            </h3>

            <div class="formula-box">

                <p>
                    Cash Interest:
                </p>

                <p>
                    $1,000,000 × 6%
                    =
                    <strong>$60,000</strong>
                </p>

                <p>
                    Interest Expense:
                    <strong>$75,200</strong>
                </p>

                <p>
                    − Cash Interest:
                    <strong>$60,000</strong>
                </p>

                <hr>

                <p>
                    <strong>
                        Discount Amortization = $15,200
                    </strong>
                </p>

            </div>


            <h3>
                Item 4 — Trading Investment Gain
            </h3>

            <p>
                A trading debt security is measured
                at fair value, with the unrealized
                holding gain or loss recognized in
                current-period net income.
            </p>

            <div class="formula-box">

                <p>
                    Year-End Fair Value:
                    <strong>$215,000</strong>
                </p>

                <p>
                    − Carrying Amount:
                    <strong>$190,000</strong>
                </p>

                <hr>

                <p>
                    <strong>
                        Unrealized Gain = $25,000
                    </strong>
                </p>

            </div>


            <h3>
                Item 5 — Combined Effect on Net Income
            </h3>

            <div class="formula-box">

                <p>
                    Impairment Loss:
                    <strong>−$60,000</strong>
                </p>

                <p>
                    Bond Interest Expense:
                    <strong>−$75,200</strong>
                </p>

                <p>
                    Trading Investment Gain:
                    <strong>+$25,000</strong>
                </p>

                <hr>

                <p>
                    <strong>
                        Combined Net Income Effect
                        = −$110,200
                    </strong>
                </p>

            </div>


            <div class="key-points">

                <h3>
                    Key FAR Relationships
                </h3>

                <p>
                    A held-and-used long-lived asset
                    first undergoes the undiscounted
                    cash-flow recoverability test.
                    If it fails, the impairment loss
                    reduces the asset to fair value.
                </p>

                <p>
                    For a bond issued at a discount,
                    effective-interest expense exceeds
                    cash interest, and the difference
                    increases the bond's carrying amount.
                </p>

                <p>
                    Unrealized holding gains and losses
                    on trading debt securities affect
                    current-period net income.
                </p>

            </div>


            <div class="lesson-actions">

                <button
                    class="primary-button"
                    onclick="showFARModule6TBS3()"
                >
                    Try Again
                </button>


                <button
                    class="back-button"
                    onclick="showFARModule6TBSHub()"
                >
                    Back to Simulations
                </button>

            </div>

        </div>

    `;

}

function showFARModule6TBS4() {

    saveCurrentPage({
        page: "farModule6TBS4"
    });

    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 6 — TBS 4
                </h1>

                <p>
                    Governmental & NFP Integrated Review
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule6TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    TASK-BASED SIMULATION
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
                        of property taxes that are measurable.
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
                        receives <strong>$1,200,000</strong>
                        from the issuance of
                        general obligation bonds.
                    </li>

                    <li>
                        The city purchases equipment
                        for <strong>$300,000</strong>
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

                <p>
                    Determine the amount of property tax
                    revenue recognized in the General Fund
                    under modified accrual accounting.
                </p>

                <input
                    id="far-m6-tbs4-tax-revenue"
                    type="number"
                    placeholder="Enter amount"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 2 — Bond Proceeds in the Capital Projects Fund
                </h3>

                <p>
                    Determine the amount reported as an
                    other financing source from the
                    bond issuance.
                </p>

                <input
                    id="far-m6-tbs4-bond-proceeds"
                    type="number"
                    placeholder="Enter amount"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 3 — Government-Wide Capital Asset Increase
                </h3>

                <p>
                    Determine the increase in capital assets
                    reported for governmental activities
                    from the equipment purchase.
                </p>

                <input
                    id="far-m6-tbs4-capital-asset"
                    type="number"
                    placeholder="Enter amount"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 4 — Remaining Donor-Restricted Net Assets
                </h3>

                <p>
                    Considering only the $200,000
                    donor-restricted contribution and
                    the $80,000 of qualifying expenditures,
                    determine the amount that remains
                    subject to donor restriction.
                </p>

                <input
                    id="far-m6-tbs4-restricted"
                    type="number"
                    placeholder="Enter amount"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 5 — Conditional Grant Liability
                </h3>

                <p>
                    Determine the liability recognized
                    at year-end for the $150,000 cash
                    received under the conditional grant.
                </p>

                <input
                    id="far-m6-tbs4-conditional"
                    type="number"
                    placeholder="Enter amount"
                >

            </div>


            <div
                id="far-m6-tbs4-submit-actions"
                class="lesson-actions"
            >

                <button
                    class="primary-button"
                    onclick="gradeFARModule6TBS4()"
                >
                    Submit Simulation
                </button>


                <button
                    class="back-button"
                    onclick="showFARModule6TBSHub()"
                >
                    Back to Simulations
                </button>

            </div>


            <div id="far-m6-tbs4-result">
            </div>


        </section>

    `;

}

function gradeFARModule6TBS4() {

    const taxRevenueAnswer =
        Number(
            document.getElementById(
                "far-m6-tbs4-tax-revenue"
            ).value
        );

    const bondProceedsAnswer =
        Number(
            document.getElementById(
                "far-m6-tbs4-bond-proceeds"
            ).value
        );

    const capitalAssetAnswer =
        Number(
            document.getElementById(
                "far-m6-tbs4-capital-asset"
            ).value
        );

    const restrictedAnswer =
        Number(
            document.getElementById(
                "far-m6-tbs4-restricted"
            ).value
        );

    const conditionalAnswer =
        Number(
            document.getElementById(
                "far-m6-tbs4-conditional"
            ).value
        );


    const correctTaxRevenue = 480000;
    const correctBondProceeds = 1200000;
    const correctCapitalAsset = 300000;
    const correctRestricted = 120000;
    const correctConditional = 150000;


    let score = 0;


    if (taxRevenueAnswer === correctTaxRevenue) {
        score += 20;
    }

    if (bondProceedsAnswer === correctBondProceeds) {
        score += 20;
    }

    if (capitalAssetAnswer === correctCapitalAsset) {
        score += 20;
    }

    if (restrictedAnswer === correctRestricted) {
        score += 20;
    }

    if (conditionalAnswer === correctConditional) {
        score += 20;
    }


    saveFARTBSBestScore(
    "farModule6TBS4Score",
    percentage
);


    const result =
        document.getElementById(
            "far-m6-tbs4-result"
        );


    const submitActions =
        document.getElementById(
            "far-m6-tbs4-submit-actions"
        );


    if (submitActions) {
        submitActions.style.display = "none";
    }


    result.innerHTML = `

        <div class="${
            score === 100
                ? "result-correct"
                : "review-recommendation"
        }">

            <h3>
                Score: ${score}%
            </h3>


            <h3>
                Item 1 — Governmental Fund Property Tax Revenue
            </h3>

            <p>
                Governmental funds use modified accrual
                accounting. Revenue generally must be
                both measurable and available.
            </p>

            <div class="formula-box">

                <p>
                    Collected During Current Year:
                    <strong>$450,000</strong>
                </p>

                <p>
                    + Collected Within Availability Period:
                    <strong>$30,000</strong>
                </p>

                <p>
                    Amount Not Available:
                    <strong>$20,000</strong>
                </p>

                <hr>

                <p>
                    <strong>
                        General Fund Revenue = $480,000
                    </strong>
                </p>

            </div>


            <h3>
                Item 2 — Bond Proceeds
            </h3>

            <p>
                Long-term debt is not reported as a
                liability in governmental funds.
                Bond proceeds are reported as an
                other financing source.
            </p>

            <div class="formula-box">

                <p>
                    General Obligation Bonds Issued:
                    <strong>$1,200,000</strong>
                </p>

                <hr>

                <p>
                    <strong>
                        Other Financing Source = $1,200,000
                    </strong>
                </p>

            </div>

            <p>
                At the government-wide level, the
                bonds instead create a long-term liability.
            </p>


            <h3>
                Item 3 — Government-Wide Capital Asset
            </h3>

            <p>
                Governmental fund statements report
                the acquisition of equipment as an
                expenditure, but government-wide
                statements capitalize the asset.
            </p>

            <div class="formula-box">

                <p>
                    Equipment Purchased:
                    <strong>$300,000</strong>
                </p>

                <p>
                    Depreciation Assumed:
                    <strong>$0</strong>
                </p>

                <hr>

                <p>
                    <strong>
                        Increase in Capital Assets = $300,000
                    </strong>
                </p>

            </div>


            <h3>
                Item 4 — Donor-Restricted Net Assets
            </h3>

            <p>
                The $200,000 contribution is
                unconditional but subject to a
                donor-imposed purpose restriction.
            </p>

            <p>
                When $80,000 is spent for the
                specified purpose, that amount is
                released from restriction.
            </p>

            <div class="formula-box">

                <p>
                    Donor-Restricted Contribution:
                    <strong>$200,000</strong>
                </p>

                <p>
                    − Restriction Satisfied:
                    <strong>$80,000</strong>
                </p>

                <hr>

                <p>
                    <strong>
                        Remaining Donor-Restricted
                        Net Assets = $120,000
                    </strong>
                </p>

            </div>


            <h3>
                Item 5 — Conditional Grant
            </h3>

            <p>
                The grant contains both a substantive
                barrier and a right of return.
                Because the barrier has not been overcome,
                contribution revenue is not yet recognized.
            </p>

            <div class="formula-box">

                <p>
                    Cash Received:
                    <strong>$150,000</strong>
                </p>

                <p>
                    Contribution Revenue Recognized:
                    <strong>$0</strong>
                </p>

                <hr>

                <p>
                    <strong>
                        Refundable Advance /
                        Conditional Grant Liability
                        = $150,000
                    </strong>
                </p>

            </div>


            <div class="key-points">

                <h3>
                    Integrated FAR Review
                </h3>

                <p>
                    Governmental funds emphasize
                    current financial resources and
                    modified accrual accounting.
                </p>

                <p>
                    Government-wide statements use
                    the economic resources measurement
                    focus and accrual accounting.
                </p>

                <p>
                    For NFPs, a donor restriction
                    affects classification of net assets,
                    while a contribution condition
                    can delay revenue recognition entirely.
                </p>

            </div>


            <div class="lesson-actions">

                <button
                    class="primary-button"
                    onclick="showFARModule6TBS4()"
                >
                    Try Again
                </button>


                <button
                    class="back-button"
                    onclick="showFARModule6TBSHub()"
                >
                    Back to Simulations
                </button>

            </div>

        </div>

    `;

}

function checkFARLessonAnswer(
    button,
    selectedAnswer,
    correctAnswer
) {

    const result =
        document.getElementById(
            "far-quiz-result"
        );


    const allAnswers =
        document.querySelectorAll(
            ".answer-button"
        );


    allAnswers.forEach(function(answer) {

        answer.disabled = true;

    });


    if (selectedAnswer === correctAnswer) {

        button.classList.add(
            "correct-answer"
        );


        result.innerHTML = `

            <div class="result-correct">

                <strong>Correct.</strong>

                ${window.currentFARQuizExplanation}

            </div>

        `;

    } else {

        button.classList.add(
            "wrong-answer"
        );


        allAnswers[
            correctAnswer
        ].classList.add(
            "correct-answer"
        );


        result.innerHTML = `

            <div class="result-wrong">

                <strong>Incorrect.</strong>

                ${window.currentFARQuizExplanation}

            </div>

        `;

    }

}

function showFARModule6TBS5() {

    saveCurrentPage({
        page: "farModule6TBS5"
    });

    setActiveNav("Learn");


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Module 6 — TBS 5
                </h1>

                <p>
                    FAR Final Comprehensive Simulation
                </p>

            </div>


            <button class="back-button"
                    onclick="showFARModule6TBSHub()">

                ← Back to Simulations

            </button>

        </header>


        <section class="exam-page">


            <div class="course-intro-card">

                <span class="exam-badge">
                    FINAL TASK-BASED SIMULATION
                </span>

                <h2>
                    Comprehensive FAR Analysis
                </h2>

                <p>
                    Complete the following independent
                    year-end analyses using concepts
                    from across the FAR section.
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
                    id="far-m6-tbs5-net-income"
                    type="number"
                    placeholder="Enter amount"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Part B — Accounts Receivable
                </h3>

                <p>
                    Beginning Accounts Receivable was
                    <strong>$160,000</strong>.
                    Credit sales during the year were
                    <strong>$850,000</strong>,
                    and cash collected from customers
                    was <strong>$805,000</strong>.
                </p>

                <p>
                    No receivables were written off
                    during the year.
                </p>

            </div>


            <div class="course-intro-card">

                <h3>
                    Item 2 — Ending Accounts Receivable
                </h3>

                <input
                    id="far-m6-tbs5-ar"
                    type="number"
                    placeholder="Enter amount"
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
                    id="far-m6-tbs5-bond"
                    type="number"
                    placeholder="Enter amount"
                >

            </div>


            <div class="course-intro-card">

                <h3>
                    Part D — Statement of Cash Flows
                </h3>

                <p>
                    A separate company reports:
                </p>

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
                    id="far-m6-tbs5-cfo"
                    type="number"
                    placeholder="Enter amount"
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
                    id="far-m6-tbs5-restricted"
                    type="number"
                    placeholder="Enter amount"
                >

            </div>


            <div
                id="far-m6-tbs5-submit-actions"
                class="lesson-actions"
            >

                <button
                    class="primary-button"
                    onclick="gradeFARModule6TBS5()"
                >
                    Submit Simulation
                </button>


                <button
                    class="back-button"
                    onclick="showFARModule6TBSHub()"
                >
                    Back to Simulations
                </button>

            </div>


            <div id="far-m6-tbs5-result">
            </div>


        </section>

    `;

}

function gradeFARModule6TBS5() {

    const netIncomeAnswer =
        Number(
            document.getElementById(
                "far-m6-tbs5-net-income"
            ).value
        );

    const arAnswer =
        Number(
            document.getElementById(
                "far-m6-tbs5-ar"
            ).value
        );

    const bondAnswer =
        Number(
            document.getElementById(
                "far-m6-tbs5-bond"
            ).value
        );

    const cfoAnswer =
        Number(
            document.getElementById(
                "far-m6-tbs5-cfo"
            ).value
        );

    const restrictedAnswer =
        Number(
            document.getElementById(
                "far-m6-tbs5-restricted"
            ).value
        );


    const correctNetIncome = 487000;
    const correctAR = 205000;
    const correctBond = 773200;
    const correctCFO = 502000;
    const correctRestricted = 85000;


    let score = 0;


    if (netIncomeAnswer === correctNetIncome) {
        score += 20;
    }

    if (arAnswer === correctAR) {
        score += 20;
    }

    if (bondAnswer === correctBond) {
        score += 20;
    }

    if (cfoAnswer === correctCFO) {
        score += 20;
    }

    if (restrictedAnswer === correctRestricted) {
        score += 20;
    }


    saveFARTBSBestScore(
    "farModule6TBS5Score",
    percentage
);


    const result =
        document.getElementById(
            "far-m6-tbs5-result"
        );


    const submitActions =
        document.getElementById(
            "far-m6-tbs5-submit-actions"
        );


    if (submitActions) {
        submitActions.style.display = "none";
    }


    result.innerHTML = `

        <div class="${
            score === 100
                ? "result-correct"
                : "review-recommendation"
        }">

            <h3>
                Score: ${score}%
            </h3>


            <h3>
                Item 1 — Adjusted Net Income
            </h3>

            <div class="formula-box">

                <p>
                    Preliminary Net Income:
                    <strong>$520,000</strong>
                </p>

                <p>
                    − Accrued Salaries:
                    <strong>$28,000</strong>
                </p>

                <p>
                    + Accrued Revenue:
                    <strong>$22,000</strong>
                </p>

                <p>
                    − Depreciation:
                    <strong>$35,000</strong>
                </p>

                <p>
                    + Inventory Correction:
                    <strong>$8,000</strong>
                </p>

                <hr>

                <p>
                    <strong>
                        Adjusted Net Income = $487,000
                    </strong>
                </p>

            </div>


            <h3>
                Item 2 — Ending Accounts Receivable
            </h3>

            <div class="formula-box">

                <p>
                    Beginning Accounts Receivable:
                    <strong>$160,000</strong>
                </p>

                <p>
                    + Credit Sales:
                    <strong>$850,000</strong>
                </p>

                <p>
                    − Cash Collections:
                    <strong>$805,000</strong>
                </p>

                <hr>

                <p>
                    <strong>
                        Ending Accounts Receivable
                        = $205,000
                    </strong>
                </p>

            </div>


            <h3>
                Item 3 — Ending Bond Carrying Amount
            </h3>

            <div class="formula-box">

                <p>
                    Beginning Carrying Amount:
                    <strong>$760,000</strong>
                </p>

                <p>
                    Effective Interest Expense:
                </p>

                <p>
                    $760,000 × 7%
                    =
                    <strong>$53,200</strong>
                </p>

                <p>
                    Cash Interest:
                </p>

                <p>
                    $800,000 × 5%
                    =
                    <strong>$40,000</strong>
                </p>

                <p>
                    Discount Amortization:
                </p>

                <p>
                    $53,200 − $40,000
                    =
                    <strong>$13,200</strong>
                </p>

                <hr>

                <p>
                    $760,000 + $13,200
                </p>

                <p>
                    <strong>
                        Ending Carrying Amount
                        = $773,200
                    </strong>
                </p>

            </div>


            <h3>
                Item 4 — Net Cash Provided by Operating Activities
            </h3>

            <div class="formula-box">

                <p>
                    Net Income:
                    <strong>$460,000</strong>
                </p>

                <p>
                    + Depreciation:
                    <strong>$55,000</strong>
                </p>

                <p>
                    − Increase in Accounts Receivable:
                    <strong>$18,000</strong>
                </p>

                <p>
                    + Decrease in Inventory:
                    <strong>$12,000</strong>
                </p>

                <p>
                    − Decrease in Accounts Payable:
                    <strong>$7,000</strong>
                </p>

                <hr>

                <p>
                    <strong>
                        Net Cash Provided by
                        Operating Activities = $502,000
                    </strong>
                </p>

            </div>


            <h3>
                Item 5 — Net Assets With Donor Restrictions
            </h3>

            <div class="formula-box">

                <p>
                    Beginning Net Assets
                    With Donor Restrictions:
                    <strong>$40,000</strong>
                </p>

                <p>
                    + Donor-Restricted Contribution:
                    <strong>$125,000</strong>
                </p>

                <p>
                    − Restrictions Satisfied:
                    <strong>$80,000</strong>
                </p>

                <hr>

                <p>
                    <strong>
                        Ending Net Assets
                        With Donor Restrictions
                        = $85,000
                    </strong>
                </p>

            </div>


            <div class="key-points">

                <h3>
                    Final FAR Integration
                </h3>

                <p>
                    This simulation combines adjusting
                    entries, receivable rollforwards,
                    effective-interest amortization,
                    operating cash flow, and NFP
                    donor-restriction accounting.
                </p>

                <p>
                    On cumulative FAR problems,
                    identify the accounting model first,
                    calculate each component separately,
                    and only then combine the effects.
                </p>

            </div>


            <div class="lesson-actions">

                <button
                    class="primary-button"
                    onclick="showFARModule6TBS5()"
                >
                    Try Again
                </button>


                <button
                    class="back-button"
                    onclick="showFARModule6TBSHub()"
                >
                    Back to Simulations
                </button>

            </div>

        </div>

    `;

}

function completeFARLesson(
    moduleId,
    lessonId
) {

    localStorage.setItem(
        "farModule" +
        moduleId +
        "Lesson" +
        lessonId,
        "true"
    );


    showFARModule(
        moduleId
    );

}



function restoreCurrentPage() {

    const savedPage =
        localStorage.getItem("cpaCurrentPage");


    if (!savedPage) {
    showDashboard();
    return;
}


    let pageData;


    try {

        pageData = JSON.parse(savedPage);

    } catch (error) {

        localStorage.removeItem("cpaCurrentPage");

        return;

    }


    // DASHBOARD

    if (pageData.page === "dashboard") {

        showDashboard();

        return;

    }


    // LEARN

    if (pageData.page === "learn") {

        showLearn();

        return;

    }


    // FUNDAMENTALS

    if (pageData.page === "fundamentals") {

        showFundamentals();

        return;

    }


    if (pageData.page === "fundamentalsLesson") {

        showFundamentalsLesson(
            pageData.lessonId
        );

        return;

    }


    // INTERMEDIATE

    if (pageData.page === "intermediate") {

        showIntermediate();

        return;

    }


    if (pageData.page === "intermediateModule") {

        showIntermediateModule(
            pageData.moduleId
        );

        return;

    }


    if (pageData.page === "intermediateLesson") {

        showIntermediateLesson(
            pageData.moduleId,
            pageData.lessonId
        );

        return;

    }


    // CPA CORE

    if (pageData.page === "cpaCore") {

        showCPACore();

        return;

    }

    // FAR pages belong to Learn navigation
if (
    typeof pageData.page === "string" &&
    pageData.page.startsWith("far")
) {
    setActiveNav("Learn");
}


    // FAR

    if (pageData.page === "far") {

        showFAR();

        return;

    }

// FAR FINAL EXAM HOME

if (pageData.page === "farFinalExam") {

    showFARFinalExam();

    return;

}


// FAR FINAL EXAM ACTIVE

if (pageData.page === "farFinalExamActive") {

    const restored =
        loadFARFinalExamState();


    if (restored) {

        showFARFinalExamQuestion();

    } else {

        showFARFinalExam();

    }


    return;

}


// FAR FINAL EXAM RESULTS
// Results are currently stored in memory,
// so refresh safely returns to the exam home.

if (pageData.page === "farFinalExamResults") {

    showFARFinalExam();

    return;

}


// FAR FINAL TBS HOME

if (pageData.page === "farFinalTBSHome") {

    showFARFinalTBSHome();

    return;

}


// FAR FINAL TBS ACTIVE

if (pageData.page === "farFinalTBSActive") {

    const restored =
        loadFARFinalTBSState();


    if (!restored) {

        showFARFinalTBSHome();

        return;

    }


    const tbsScreens = [
        showFARFinalTBS1,
        showFARFinalTBS2,
        showFARFinalTBS3,
        showFARFinalTBS4,
        showFARFinalTBS5,
        showFARFinalTBS6,
        showFARFinalTBS7
    ];


    tbsScreens[
        farFinalTBSIndex
    ]();


    return;

}


// FAR FINAL TBS REVIEW

if (pageData.page === "farFinalTBSReview") {

    showFARFinalTBSHome();

    return;

}


// FAR FINAL TBS RESULTS
// Detailed results are currently stored in memory,
// so refresh safely returns to the TBS home.

if (pageData.page === "farFinalTBSResults") {

    showFARFinalTBSHome();

    return;

}

if (pageData.page === "farModule") {

    showFARModule(
        pageData.moduleId
    );

    return;

}

if (pageData.page === "farPractice") {

    const restored =
        loadFARPracticeState();

    if (restored) {

        showFARPracticeQuestion();

    } else {

        showFARModule(
            pageData.moduleId || 1
        );

    }

    return;
}


if (pageData.page === "farLesson") {

    showFARLesson(
        pageData.moduleId,
        pageData.lessonId
    );

    return;

}


if (pageData.page === "farModule1TBS") {

    showFARModule1TBSHub();

    return;

}

if (pageData.page === "farModule2TBSHub") {

    showFARModule2TBSHub();

    return;

}


if (pageData.page === "farTBS1") {

    startFARTBS1();

    return;

}

if (pageData.page === "farTBS2") {

    startFARTBS2();

    return;

}

if (pageData.page === "farTBS3") {

    startFARTBS3();

    return;

}

if (pageData.page === "farTBS4") {

    startFARTBS4();

    return;

}

if (pageData.page === "farTBS5") {

    startFARTBS5();

    return;

}

if (pageData.page === "farModule2TBS1") {

    showFARModule2TBS1();

    return;

}

if (pageData.page === "farModule2TBS2") {

    showFARModule2TBS2();

    return;

}

if (pageData.page === "farModule2TBS3") {

    showFARModule2TBS3();

    return;

}

if (pageData.page === "farModule2TBS4") {

    showFARModule2TBS4();

    return;

}

if (pageData.page === "farModule2TBS5") {

    showFARModule2TBS5();

    return;

}

if (
    pageData.page ===
    "farModule3TBSHub"
) {

    showFARModule3TBSHub();

    return;

}

if (pageData.page === "farModule3TBS1") {

    showFARModule3TBS1();

    return;

}

if (pageData.page === "farModule3TBS2") {

    showFARModule3TBS2();

    return;

}

if (pageData.page === "farModule3TBS3") {

    showFARModule3TBS3();

    return;

}

if (pageData.page === "farModule3TBS4") {

    showFARModule3TBS4();

    return;

}

if (pageData.page === "farModule3TBS5") {

    showFARModule3TBS5();

    return;

}

if (pageData.page === "farModule4TBSHub") {

    showFARModule4TBSHub();

    return;

}

if (pageData.page === "farModule4TBS1") {

    showFARModule4TBS1();

    return;

}

if (pageData.page === "farModule4TBS2") {

    showFARModule4TBS2();

    return;

}

if (pageData.page === "farModule4TBS3") {

    showFARModule4TBS3();

    return;

}

if (pageData.page === "farModule4TBS4") {

    showFARModule4TBS4();

    return;

}

if (pageData.page === "farModule4TBS5") {

    showFARModule4TBS5();

    return;

}

if (pageData.page === "farModule5TBSHub") {

    showFARModule5TBSHub();

    return;

}

if (pageData.page === "farModule5TBS1") {

    showFARModule5TBS1();

    return;

}

if (pageData.page === "farModule5TBS2") {

    showFARModule5TBS2();

    return;

}

if (pageData.page === "farModule5TBS3") {

    showFARModule5TBS3();

    return;

}

if (pageData.page === "farModule5TBS4") {

    showFARModule5TBS4();

    return;

}

if (pageData.page === "farModule5TBS5") {

    showFARModule5TBS5();

    return;

}

if (pageData.page === "farJournalPractice") {

    const restored =
        loadFARJournalState();

    if (restored) {

        setActiveNav("Learn");

        showFARJournalQuestion();

    } else {

        startFARJournalPractice();

    }

    return;
}


if (pageData.page === "farJournalResults") {
    showFARModule(6);
    return;
}

if (pageData.page === "farModule6TBSHub") {
    showFARModule6TBSHub();
    return;
}


if (pageData.page === "farModule6TBS1") {
    showFARModule6TBS1();
    return;
}

if (pageData.page === "farModule6TBS2") {
    showFARModule6TBS2();
    return;
}

if (pageData.page === "farModule6TBS3") {
    showFARModule6TBS3();
    return;
}

if (pageData.page === "farModule6TBS4") {
    showFARModule6TBS4();
    return;
}

if (pageData.page === "farModule6TBS5") {
    showFARModule6TBS5();
    return;
}

}

restoreCurrentPage();
