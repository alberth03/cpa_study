let currentFARPracticeQuestions = [];

let currentFARPracticeIndex = 0;

let currentFARPracticeScore = 0;

let currentFARPracticeSelectedAnswer = null;

let currentFARPracticeAnswered = false;

let currentFARPracticeResults = [];

let currentFARPracticeModuleId = 1;

// =====================================================
// FAR MODULE MCQ — ACTIVE STATE PERSISTENCE
// =====================================================

function saveFARPracticeState() {

    const state = {
        moduleId: currentFARPracticeModuleId,
        questions: currentFARPracticeQuestions,
        index: currentFARPracticeIndex,
        score: currentFARPracticeScore,
        results: currentFARPracticeResults
    };

    localStorage.setItem(
        "farPracticeActiveState",
        JSON.stringify(state)
    );

}


function loadFARPracticeState() {

    const savedState =
        localStorage.getItem(
            "farPracticeActiveState"
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
            clearFARPracticeState();
            return false;
        }

        currentFARPracticeModuleId =
            state.moduleId || 1;

        currentFARPracticeQuestions =
            state.questions;

        currentFARPracticeIndex =
            Math.max(
                0,
                Math.min(
                    state.index,
                    state.questions.length - 1
                )
            );

        currentFARPracticeScore =
            Number(state.score) || 0;

        currentFARPracticeResults =
            Array.isArray(state.results)
                ? state.results
                : [];

        currentFARPracticeSelectedAnswer = null;
        currentFARPracticeAnswered = false;

        return true;

    } catch (error) {

        clearFARPracticeState();

        return false;

    }

}


function clearFARPracticeState() {

    localStorage.removeItem(
        "farPracticeActiveState"
    );

}

function resumeFARModulePractice(moduleId) {

    const restored =
        loadFARPracticeState();

    if (
        restored &&
        currentFARPracticeModuleId === moduleId
    ) {

        saveCurrentPage({
            page: "farPractice",
            moduleId: moduleId
        });

        setActiveNav("Learn");

        showFARPracticeQuestion();

    } else {

        startFARModulePractice(moduleId);

    }

}

function startFARModulePractice(moduleId) {


    currentFARPracticeModuleId = moduleId;

    saveCurrentPage({
        page: "farPractice",
        moduleId: moduleId
    });

    setActiveNav("Learn");

    let questionBank = [];

    if (moduleId === 1) {
        questionBank = farModule1Questions;
    }

    if (moduleId === 2) {
        questionBank = farModule2Questions;
    }

    if (moduleId === 3) {
    questionBank = farModule3Questions;
}

if (moduleId === 4) {
    questionBank = farModule4Questions;
}

if (moduleId === 5) {
    questionBank = farModule5Questions;
}

if (moduleId === 6) {
    questionBank = farModule6Questions;
}

    if (questionBank.length === 0) {
        return;
    }

    const selectedQuestions = [];

const currentModuleLessons =
    farModuleLessons[moduleId] || [];


currentModuleLessons.forEach(
    function(lesson) {

        const lessonQuestions =
            questionBank.filter(
                function(question) {

                    const questionLessonId =
                        question.lessonId !== undefined
                            ? question.lessonId
                            : question.lesson;

                    return (
                        questionLessonId ===
                        lesson.id
                    );

                }
            );


        if (lessonQuestions.length > 0) {

            const randomIndex =
                Math.floor(
                    Math.random() *
                    lessonQuestions.length
                );

            selectedQuestions.push(
                lessonQuestions[randomIndex]
            );

        }

    }
);


selectedQuestions.sort(function() {
    return Math.random() - 0.5;
});


currentFARPracticeQuestions =
selectedQuestions
    .map(function(question) {

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


            answerObjects.sort(function() {
                return Math.random() - 0.5;
            });


            return {
                ...question,

                answers:
                    answerObjects.map(
                        function(item) {
                            return item.text;
                        }
                    ),

                correctAnswer:
                    answerObjects.findIndex(
                        function(item) {
                            return item.isCorrect;
                        }
                    )
            };

        });

    currentFARPracticeIndex = 0;
currentFARPracticeScore = 0;
currentFARPracticeSelectedAnswer = null;
currentFARPracticeAnswered = false;
currentFARPracticeResults = [];

saveFARPracticeState();

showFARPracticeQuestion();
}


function showFARPracticeQuestion() {

    const question =
        currentFARPracticeQuestions[
            currentFARPracticeIndex
        ];


    if (!question) {
        finishFARModulePractice();
        return;
    }


    currentFARPracticeSelectedAnswer = null;

    currentFARPracticeAnswered = false;


    let answersHTML = "";


    question.answers.forEach(
        function(answer, index) {

            answersHTML += `

                <button class="answer-button"
                        onclick="selectFARPracticeAnswer(
                            this,
                            ${index}
                        )">

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
    FAR Module ${currentFARPracticeModuleId} MCQ Practice
</h1>

                <p>
                    FAR · Financial Reporting
                </p>

            </div>


            <button class="back-button"
        onclick="showFARModule(currentFARPracticeModuleId)">

    ← Exit Practice

</button>

        </header>


        <section class="exam-page">


            <div class="quiz-card">

                <div class="exam-progress">

                    Question
                    ${currentFARPracticeIndex + 1}
                    of
                    ${currentFARPracticeQuestions.length}

                </div>


                <h2>
                    CPA-Style MCQ
                </h2>


                <p class="quiz-question">

                    ${question.question}

                </p>


                <div id="far-practice-answers">

                    ${answersHTML}

                </div>


                <div id="far-practice-result"></div>


                <div class="lesson-actions">

                    <button class="primary-button"
                            id="far-practice-submit"
                            onclick="submitFARPracticeAnswer()">

                        Submit Answer

                    </button>


                    <button class="primary-button"
                            id="far-practice-next"
                            onclick="nextFARPracticeQuestion()"
                            style="display: none;">

                        Next Question

                    </button>

                </div>


            </div>


        </section>

    `;

}

function selectFARPracticeAnswer(
    button,
    answerIndex
) {

    if (currentFARPracticeAnswered) {
        return;
    }


    currentFARPracticeSelectedAnswer =
        answerIndex;


    const buttons =
        document.querySelectorAll(
            "#far-practice-answers .answer-button"
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

function submitFARPracticeAnswer() {

    if (currentFARPracticeAnswered) {
        return;
    }


    if (
        currentFARPracticeSelectedAnswer === null
    ) {

        alert(
            "Please select an answer first."
        );

        return;
    }


    const question =
        currentFARPracticeQuestions[
            currentFARPracticeIndex
        ];


    const buttons =
        document.querySelectorAll(
            "#far-practice-answers .answer-button"
        );


    currentFARPracticeAnswered = true;


    buttons.forEach(function(button) {

        button.disabled = true;

    });

    const wasCorrect =
    currentFARPracticeSelectedAnswer ===
    question.correctAnswer;


currentFARPracticeResults.push({

    questionId: question.id,

    lesson:
        question.lessonId ||
        question.lesson,

    selectedAnswer:
        currentFARPracticeSelectedAnswer,

    correctAnswer:
        question.correctAnswer,

    correct: wasCorrect

});


    const selectedButton =
        buttons[
            currentFARPracticeSelectedAnswer
        ];


    const correctButton =
        buttons[
            question.correctAnswer
        ];


    const result =
        document.getElementById(
            "far-practice-result"
        );


    if (
        currentFARPracticeSelectedAnswer ===
        question.correctAnswer
    ) {

        currentFARPracticeScore++;


        selectedButton.classList.add(
            "correct-answer"
        );


        result.innerHTML = `

            <div class="result-correct">

                <strong>
                    Correct.
                </strong>

                <p>
                    ${question.explanation}
                </p>

            </div>

        `;

    } else {

        selectedButton.classList.add(
            "wrong-answer"
        );


        correctButton.classList.add(
            "correct-answer"
        );


        result.innerHTML = `

            <div class="result-wrong">

                <strong>
                    Incorrect.
                </strong>

                <p>
                    ${question.explanation}
                </p>

            </div>

        `;

    }


    document.getElementById(
        "far-practice-submit"
    ).style.display = "none";


    document.getElementById(
        "far-practice-next"
    ).style.display = "inline-block";

}

function nextFARPracticeQuestion() {

    if (!currentFARPracticeAnswered) {
        return;
    }


    currentFARPracticeIndex++;

if (
    currentFARPracticeIndex >=
    currentFARPracticeQuestions.length
) {

    finishFARModulePractice();
    return;

}

saveFARPracticeState();

showFARPracticeQuestion();

}

function finishFARModulePractice() {

    clearFARPracticeState();

    const total =
        currentFARPracticeQuestions.length;


    const percentage =
        Math.round(
            (
                currentFARPracticeScore /
                total
            ) * 100
        );


    const practiceBestKey =
    "farModule" +
    currentFARPracticeModuleId +
    "PracticeBest";


const previousBest =
    Number(
        localStorage.getItem(
            practiceBestKey
        )
    ) || 0;


if (percentage > previousBest) {

    localStorage.setItem(
        practiceBestKey,
        percentage
    );

}




    const bestScore =
        Math.max(
            percentage,
            previousBest
        );


        const passed =
    percentage >= 80;


if (passed) {

    localStorage.setItem(
        "farModule" +
        currentFARPracticeModuleId +
        "Mastered",
        "true"
    );

}


    // =====================================================
    // BUILD LESSON PERFORMANCE
    // =====================================================

    const lessonPerformance = {};


    currentFARPracticeResults.forEach(
        function(result) {

            if (!lessonPerformance[result.lesson]) {

                lessonPerformance[result.lesson] = {

                    total: 0,
                    correct: 0

                };

            }


            lessonPerformance[result.lesson].total++;


            if (result.correct) {

                lessonPerformance[
                    result.lesson
                ].correct++;

            }

        }
    );


    const lessonNames = {};

const currentModuleLessons =
    farModuleLessons[
        currentFARPracticeModuleId
    ] || [];

currentModuleLessons.forEach(
    function(lesson) {

        lessonNames[lesson.id] =
            lesson.title;

    }
);


    let breakdownHTML = "";

    let weakestLesson = null;

    let weakestPercentage = 101;


    Object.keys(lessonPerformance).forEach(
        function(lessonId) {

            const performance =
                lessonPerformance[lessonId];


            const lessonPercentage =
                Math.round(
                    (
                        performance.correct /
                        performance.total
                    ) * 100
                );


            if (
                lessonPercentage <
                weakestPercentage
            ) {

                weakestPercentage =
                    lessonPercentage;

                weakestLesson =
                    lessonId;

            }


            breakdownHTML += `

                <div class="performance-row">

                    <div class="performance-info">

                        <strong>
                            ${lessonNames[lessonId]}
                        </strong>

                        <span>
                            ${performance.correct}
                            /
                            ${performance.total}
                            correct
                        </span>

                    </div>


                    <div class="performance-score">

                        ${lessonPercentage}%

                    </div>

                </div>

            `;

        }
    );


    let recommendationHTML = "";


    if (percentage === 100) {

        recommendationHTML = `

            <div class="result-correct">

                <strong>
                    Excellent performance.
                </strong>

                <p>
                    You answered every question
                    correctly on this attempt.
                </p>

            </div>

        `;

    } else if (weakestLesson !== null) {

        recommendationHTML = `

            <div class="review-recommendation">

                <span class="exam-badge">
                    RECOMMENDED REVIEW
                </span>

                <h3>
                    ${lessonNames[weakestLesson]}
                </h3>

                <p>
                    This was your weakest tested
                    lesson on this practice attempt,
                    with ${weakestPercentage}% correct.
                </p>

                <button class="primary-button"
                        onclick="showFARLesson(
    currentFARPracticeModuleId,
    ${weakestLesson}
)">

                    Review This Lesson

                </button>

            </div>

        `;

    }


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    Practice Results
                </h1>

                <p>
    FAR · Module ${currentFARPracticeModuleId}
</p>

            </div>

        </header>


        <section class="exam-page">


            <div class="final-exam-card">

                <div>

                    <span class="exam-badge">
                        PRACTICE COMPLETE
                    </span>


                    <h2>
                        ${percentage}%
                    </h2>


                    <p>

                        You answered

                        <strong>
                            ${currentFARPracticeScore}
                            of
                            ${total}
                        </strong>

                        questions correctly.

                    </p>


                    <p>

                        Best Score:

                        <strong>
                            ${bestScore}%
                        </strong>

                    </p>

                </div>

            </div>


            <div class="course-intro-card">

                <h2>
                    Performance by Lesson
                </h2>

                <p>
                    Breakdown of the topics tested
                    during this practice attempt.
                </p>


                <div class="performance-breakdown">

                    ${breakdownHTML}

                </div>

            </div>


            ${recommendationHTML}


            <div class="lesson-actions">

                <button class="primary-button"
        onclick="startFARModulePractice(currentFARPracticeModuleId)">

    Practice Again

</button>


                <button class="back-button"
                        onclick="showFARModule(currentFARPracticeModuleId)">

                    Back to Module ${currentFARPracticeModuleId}

                </button>

            </div>


        </section>

    `;

}
