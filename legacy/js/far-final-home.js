function showFARFinalExam() {

    saveCurrentPage({
        page: "farFinalExam"
    });

    setActiveNav("Learn");


    const lastScore =
        localStorage.getItem(
            "farFinalExamLastScore"
        );

    const bestScore =
        localStorage.getItem(
            "farFinalExamBestScore"
        );

    const hasActiveExam =
    localStorage.getItem(
        "farFinalExamActiveState"
    ) !== null;


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR Final Exam
                </h1>

                <p>
                    Financial Accounting & Reporting
                </p>

            </div>


            <button
                class="back-button"
                onclick="showFAR()"
            >
                ← Back to FAR
            </button>

        </header>


        <section>

            <div class="course-intro-card">

                <span class="exam-badge">
                    COMPREHENSIVE EXAM
                </span>

                <h2>
                    FAR Final Exam
                </h2>

                <p>
                    Complete 50 cumulative multiple-choice
                    questions covering material from across
                    the entire FAR course.
                </p>


                <div class="course-stats">

                    <div>

                        <strong>50</strong>
                        <span>Questions</span>

                    </div>

                    <div>

                        <strong>6</strong>
                        <span>Study Areas</span>

                    </div>

                    <div>

                        <strong>MCQ</strong>
                        <span>Final Assessment</span>

                    </div>

                </div>

            </div>


            <div class="key-points">

                <h3>
                    Exam Format
                </h3>

                <p>
                    Questions are randomly selected from
                    all six FAR study areas.
                </p>

                <p>
                    Correct answers and explanations will
                    not be shown while you are taking
                    the exam.
                </p>

                <p>
                    Your score and performance breakdown
                    will appear after all 50 questions
                    are completed.
                </p>

            </div>


            ${
                lastScore !== null
                    ? `

                        <div class="key-points">

                            <h3>
                                Previous Results
                            </h3>

                            <p>
                                Last Score:
                                <strong>
                                    ${lastScore}%
                                </strong>
                            </p>

                            <p>
                                Best Score:
                                <strong>
                                    ${bestScore || lastScore}%
                                </strong>
                            </p>

                        </div>

                    `
                    : ""
            }


            <div class="learning-grid">

    <div class="learning-card">

        <span class="exam-badge">
            MCQ
        </span>

        <h2>
            50-Question Final Exam
        </h2>

        <p>
            Complete a cumulative FAR multiple-choice
            assessment covering all six study areas.
        </p>

        <button
    class="primary-button"
    onclick="${
        hasActiveExam
            ? "resumeFARFinalExam()"
            : "startFARFinalExam()"
    }"
>
    ${
        hasActiveExam
            ? "Resume MCQ Exam"
            : "Start MCQ Exam"
    }
</button>

    </div>


    <div class="learning-card">

        <span class="exam-badge">
            TBS
        </span>

        <h2>
            Final TBS Assessment
        </h2>

        <p>
            Complete cumulative task-based simulations
            testing calculations, journal entries,
            and integrated FAR concepts.
        </p>

        <button
            class="primary-button"
            onclick="showFARFinalTBSHome()"
        >
            Open TBS Assessment
        </button>

    </div>

</div>


<div class="lesson-actions">

    <button
        class="back-button"
        onclick="showFAR()"
    >
        ← Back to FAR
    </button>

</div>

        </section>

    `;

}
