function showFAR() {

    saveCurrentPage({
        page: "far"
    });

    setActiveNav("Learn");


    let modulesHTML = "";


    farModules.forEach(function(module) {

        modulesHTML += `

            <div class="module-card"
                 onclick="showFARModule(${module.id})">

                <div class="module-number">
                    ${module.id}
                </div>

                <div class="module-content">

                    <span class="module-label">
                        FAR MODULE ${module.id}
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
                        localStorage.getItem(
                            "farModule" +
                            module.id +
                            "Mastered"
                        ) === "true"

                            ? "✓ MCQ Practice Passed"
: "Start →"
                    }

                </div>

            </div>

        `;

    });


    mainContent.innerHTML = `

        <header class="topbar">

            <div>

                <h1>
                    FAR
                </h1>

                <p>
                    Financial Accounting & Reporting
                </p>

            </div>


            <button class="back-button"
                    onclick="showCPACore()">

                ← Back to CPA Core

            </button>

        </header>


        <section>


            <div class="course-intro-card">

                <span class="exam-badge">
                    CPA CORE
                </span>

                <h2>
                    Financial Accounting & Reporting
                </h2>

                <p>
                    This is where we move from accounting education
                    into CPA exam-level application.
                </p>


                <div class="course-stats">

                    <div>

                        <strong>6</strong>
                        <span>Study Areas</span>

                    </div>

                    <div>

                        <strong>CPA</strong>
                        <span>Difficulty</span>

                    </div>

                    <div>

                        <strong>MCQ + TBS</strong>
                        <span>Practice</span>

                    </div>

                </div>

            </div>


            <div class="key-points">

                <h3>How FAR will be different</h3>

                <p>
                    Intermediate Accounting taught the foundation.
                    FAR will require deeper application,
                    multi-step calculations and exam-style reasoning.
                </p>

                <p>
                    We will not mark a FAR topic mastered
                    merely because the lesson was read.
                </p>

            </div>


            <h2 class="section-title">
                FAR Study Areas
            </h2>


            <div class="module-list">

                ${modulesHTML}

            </div>

            <div class="final-exam-card">

    <div>

        <span class="exam-badge">
            FAR FINAL EXAM
        </span>

        <h2>
            FAR Comprehensive Final Exam
        </h2>

        <p>
            Test your readiness with a comprehensive
            50-question exam covering material from
            across the entire FAR section.
        </p>

    </div>

    <button
        class="primary-button"
        onclick="showFARFinalExam()"
    >
        Start Final Exam
    </button>

</div>


        </section>

    `;

}
