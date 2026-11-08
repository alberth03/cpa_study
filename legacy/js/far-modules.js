function showFARModule(moduleId) {

    const module =
        farModules.find(function(item) {

            return item.id === moduleId;

        });


    if (!module) {
        return;
    }


    saveCurrentPage({

        page: "farModule",
        moduleId: moduleId

    });


    setActiveNav("Learn");


    const lessons =
        farModuleLessons[moduleId] || [];


    let lessonsHTML = "";


    lessons.forEach(function(lesson) {

        const completed =
            localStorage.getItem(
                "farModule" +
                moduleId +
                "Lesson" +
                lesson.id
            ) === "true";


        lessonsHTML += `

            <div class="lesson-card"
                 onclick="showFARLesson(
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

                    ${
                        completed
                            ? "✓ Completed"
                            : "Start →"
                    }

                </div>

            </div>

        `;

    });


    const activePracticeState =
    localStorage.getItem(
        "farPracticeActiveState"
    );

let hasActivePracticeForModule = false;

if (activePracticeState) {

    try {

        const parsedPracticeState =
            JSON.parse(activePracticeState);

        hasActivePracticeForModule =
    Number(parsedPracticeState.moduleId) ===
    Number(moduleId);

    } catch (error) {

        hasActivePracticeForModule = false;

    }

}

const hasActiveJournal =
    localStorage.getItem(
        "farJournalActiveState"
    ) !== null;

    let practiceHTML = "";


    if (moduleId === 1) {

        practiceHTML = `

    <div class="final-exam-card">

        <div>

            <span class="exam-badge">
                CPA PRACTICE
            </span>

            <h2>
                Module 1 Practice MCQs
            </h2>

            <p>
                Practice randomized CPA-style
                multiple-choice questions covering
                all 10 lessons.
            </p>

        </div>


        <button class="primary-button"
        onclick="${
            hasActivePracticeForModule
                ? "resumeFARModulePractice(1)"
                : "startFARModulePractice(1)"
        }">

    ${
        hasActivePracticeForModule
            ? "Resume MCQs"
            : "Practice MCQs"
    }

</button>

    </div>


    <div class="final-exam-card">

        <div>

            <span class="exam-badge">
                TASK-BASED SIMULATIONS
            </span>

            <h2>
                Module 1 TBS Practice
            </h2>

            <p>
                Work through multi-part CPA-style
                financial reporting simulations.
            </p>

        </div>


        <button class="primary-button"
                onclick="showFARModule1TBSHub()">

            Open Simulations

        </button>

    </div>

`;

}

if (moduleId === 2) {

    practiceHTML = `

        <div class="final-exam-card">

            <div>

                <span class="exam-badge">
                    CPA PRACTICE
                </span>

                <h2>
                    Module 2 Practice MCQs
                </h2>

                <p>
                    Practice randomized CPA-style
                    multiple-choice questions covering
                    all 10 balance sheet lessons.
                </p>

            </div>


            <button class="primary-button"
        onclick="${
            hasActivePracticeForModule
                ? "resumeFARModulePractice(2)"
                : "startFARModulePractice(2)"
        }">

    ${
        hasActivePracticeForModule
            ? "Resume MCQs"
            : "Practice MCQs"
    }

</button>

        </div>


       <div class="final-exam-card">

    <div>

        <span class="exam-badge">
            TASK-BASED SIMULATIONS
        </span>

        <h2>
            Module 2 TBS Practice
        </h2>

        <p>
            Work through multi-part CPA-style
            simulations covering balance sheet
            accounts and related transactions.
        </p>

    </div>


    <button class="primary-button"
            onclick="showFARModule2TBSHub()">

        Open Simulations

    </button>

</div>

    `;

}

if (moduleId === 3) {

    practiceHTML = `

        <div class="final-exam-card">

            <div>

                <span class="exam-badge">
                    CPA PRACTICE
                </span>

                <h2>
                    Module 3 Practice MCQs
                </h2>

                <p>
                    Practice randomized CPA-style
                    multiple-choice questions covering
                    select transactions.
                </p>

            </div>


            <button class="primary-button"
        onclick="${
            hasActivePracticeForModule
                ? "resumeFARModulePractice(3)"
                : "startFARModulePractice(3)"
        }">

    ${
        hasActivePracticeForModule
            ? "Resume MCQs"
            : "Practice MCQs"
    }

</button>

        </div>

        <div class="final-exam-card">

    <div>

        <span class="exam-badge">
            TASK-BASED SIMULATIONS
        </span>

        <h2>
            Module 3 TBS Practice
        </h2>

        <p>
            Work through CPA-style simulations covering
            accounting changes, contingencies, revenue,
            income taxes, fair value, and leases.
        </p>

    </div>


    <button class="primary-button"
            onclick="showFARModule3TBSHub()">

        Open Simulations

    </button>

</div>

    `;
}

if (moduleId === 4) {

    practiceHTML = `

        <div class="final-exam-card">

            <div>

                <span class="exam-badge">
                    CPA PRACTICE
                </span>

                <h2>
                    Module 4 Practice MCQs
                </h2>

                <p>
                    Practice randomized CPA-style
                    multiple-choice questions covering
                    state and local governmental accounting.
                </p>

            </div>

            <button class="primary-button"
        onclick="${
            hasActivePracticeForModule
                ? "resumeFARModulePractice(4)"
                : "startFARModulePractice(4)"
        }">

    ${
        hasActivePracticeForModule
            ? "Resume MCQs"
            : "Practice MCQs"
    }

</button>

        </div>


        <div class="final-exam-card">

            <div>

                <span class="exam-badge">
                    TASK-BASED SIMULATIONS
                </span>

                <h2>
                    Module 4 TBS Practice
                </h2>

                <p>
                    Work through CPA-style governmental
                    accounting simulations.
                </p>

            </div>

            <button class="primary-button"
                    onclick="showFARModule4TBSHub()">

                Open Simulations

            </button>

        </div>

    `;
}

if (moduleId === 5) {

    practiceHTML = `

        <div class="final-exam-card">

            <div>

                <span class="exam-badge">
                    CPA PRACTICE
                </span>

                <h2>
                    Module 5 Practice MCQs
                </h2>

                <p>
                    Practice randomized CPA-style
                    multiple-choice questions covering
                    not-for-profit accounting.
                </p>

            </div>


            <button class="primary-button"
        onclick="${
            hasActivePracticeForModule
                ? "resumeFARModulePractice(5)"
                : "startFARModulePractice(5)"
        }">

    ${
        hasActivePracticeForModule
            ? "Resume MCQs"
            : "Practice MCQs"
    }

</button>

        </div>


        <div class="final-exam-card">

            <div>

                <span class="exam-badge">
                    TASK-BASED SIMULATIONS
                </span>

                <h2>
                    Module 5 TBS Practice
                </h2>

                <p>
                    Practice CPA-style simulations covering
                    contributions, donor restrictions,
                    conditional grants, donated services,
                    endowments, and NFP reporting.
                </p>

            </div>


            <button class="primary-button"
                    onclick="showFARModule5TBSHub()">

                Open Simulations

            </button>

        </div>

    `;

}

if (moduleId === 6) {

    practiceHTML = `

        <div class="final-exam-card">

            <div>

                <span class="exam-badge">
                    CPA PRACTICE
                </span>

                <h2>
                    FAR Cumulative Practice MCQs
                </h2>

                <p>
                    Practice randomized CPA-style
                    multiple-choice questions covering
                    material from across the entire FAR section.
                </p>

            </div>

            <button class="primary-button"
        onclick="${
            hasActivePracticeForModule
                ? "resumeFARModulePractice(6)"
                : "startFARModulePractice(6)"
        }">

    ${
        hasActivePracticeForModule
            ? "Resume MCQs"
            : "Practice MCQs"
    }

</button>

        </div>


        <div class="final-exam-card">

            <div>

                <span class="exam-badge">
                    JOURNAL ENTRY PRACTICE
                </span>

                <h2>
                    FAR Journal Entry Practice
                </h2>

                <p>
                    Build journal entries using account,
                    debit, and credit fields across major
                    FAR topics.
                </p>

            </div>

            <button class="primary-button"
        onclick="${
            hasActiveJournal
                ? "resumeFARJournalPractice()"
                : "startFARJournalPractice()"
        }">

    ${
        hasActiveJournal
            ? "Resume Journal Practice"
            : "Practice Journal Entries"
    }

</button>

        </div>


        <div class="final-exam-card">

            <div>

                <span class="exam-badge">
                    TASK-BASED SIMULATIONS
                </span>

                <h2>
                    FAR Cumulative TBS Practice
                </h2>

                <p>
                    Practice cumulative FAR simulations
                    combining concepts from across
                    the entire FAR section.
                </p>

            </div>

            <button class="primary-button"
                    onclick="showFARModule6TBSHub()">

                Practice TBSs

            </button>

        </div>

    `;

}

mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    ${module.title}
                </h1>

                <p>
                    FAR · Module ${module.id}
                </p>

            </div>


            <button class="back-button"
                    onclick="showFAR()">

                ← Back to FAR

            </button>

        </header>


        <section>


            <div class="course-intro-card">

                <span class="exam-badge">
                    FAR MODULE ${module.id}
                </span>

                <h2>
                    ${module.title}
                </h2>

                <p>
                    ${module.description}
                </p>

            </div>


            ${
                lessons.length > 0

                    ? `

                        <h2 class="section-title">
                            Lessons
                        </h2>

                        <div class="lesson-list">

                            ${lessonsHTML}

                        </div>

                        ${practiceHTML}

                    `

                    : `

                        <div class="coming-next-box">

                            <h3>
                                This module is not built yet
                            </h3>

                            <p>
                                We will add this FAR module
                                after completing the earlier modules.
                            </p>

                        </div>

                    `
            }


        </section>

    `;

}
