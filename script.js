document.addEventListener('DOMContentLoaded', () => {
    const surveyForm = document.getElementById('survey-form');
    const submitBtn = document.getElementById('submit-btn');
    const resultDiv = document.getElementById('result');

    const questions = [
        {
            group: "Goals & Objectives",
            questions: [
                {
                    text: "What is your organization's primary business objective?",
                    answer1: "We want to understand the ROI of their marketing channels, optimize budget allocation, identify diminishing returns, and forecast the impact of future marketing investments.",
                    answer2: "We want to know which specific ad creative is performing best, understand real-time campaign performance, or attribute individual conversions to specific touchpoints."
                },
                {
                    text: "What is the primary purpose of the measurement?",
                    answer1: "We need to justify marketing spend to leadership and are looking for ways to optimize for better performance.",
                    answer2: "We primarily need to report on marketing activities and basic performance metrics."
                },
                {
                    text: "What is your organization's planning horizon?",
                    answer1: "We are focused on annual or multi-year strategic planning and want to understand the sustainable drivers of growth.",
                    answer2: "We need to make rapid, in-flight adjustments to campaigns on a daily or weekly basis."
                },
                {
                    text: "Is your organization interested in understanding cross-channel effects?",
                    answer1: "We want to understand how different marketing channels interact with each other (e.g., how TV ads impact search queries).",
                    answer2: "We are only interested in the performance of individual channels in isolation."
                }
            ]
        },
        {
            group: "Data & Analytics Readiness",
            questions: [
                {
                    text: "How much historical data can your organization provide?",
                    answer1: "We can provide at least 2 years of continuous weekly data for all significant marketing channels and conversion metrics.",
                    answer2: "We have less than 2 years of data, the data is not granular (e.g., monthly instead of weekly), or there are significant gaps."
                },
                {
                    text: "How many distinct marketing channels is your organization using?",
                    answer1: "We have a diverse marketing mix with several channels (e.g., TV, Radio, Social Media, Search) that have variable spending patterns.",
                    answer2: "We rely on only one or two marketing channels, or the spending has been constant with little variation."
                },
                {
                    text: "What kind of data can your organization provide?",
                    answer1: "We can provide granular data on marketing spend, impressions, clicks, and conversions, along with relevant external factors (e.g., promotions, economic data, competitor activity). The data is clean, consistent, and well-organized.",
                    answer2: "We can only provide high-level data (e.g., total marketing spend), or the data is inconsistent, messy, or missing key variables."
                },
                {
                    text: "Is third-party or external data available to your organization?",
                    answer1: "We can provide or are willing to acquire data on external factors like competitor spending, economic indicators, promotions, or major events.",
                    answer2: "We only have access to their own internal marketing and sales data."
                }
            ]
        }
    ];

    function renderQuestions() {
        let questionHTML = '';
        questions.forEach((group, groupIndex) => {
            questionHTML += `<div class="question-group"><h2>${group.group}</h2>`;
            group.questions.forEach((q, questionIndex) => {
                const questionId = `q${groupIndex}_${questionIndex}`;
                
                const isFlipped = Math.random() < 0.5;
                const firstAnswer = isFlipped ? q.answer2 : q.answer1;
                const secondAnswer = isFlipped ? q.answer1 : q.answer2;
                const firstValue = isFlipped ? 0 : 1;
                const secondValue = isFlipped ? 1 : 0;

                questionHTML += `
                    <div>
                        <h3>${q.text}</h3>
                        <label>
                            <input type="radio" name="${questionId}" value="${firstValue}" required>
                            ${firstAnswer}
                        </label>
                        <label>
                            <input type="radio" name="${questionId}" value="${secondValue}">
                            ${secondAnswer}
                        </label>
                    </div>
                `;
            });
            questionHTML += `</div>`;
        });
        surveyForm.innerHTML = questionHTML;
    }

    function calculateResults() {
        const formData = new FormData(surveyForm);
        let score = 0;
        let totalQuestions = 0;

        for (let value of formData.values()) {
            score += parseInt(value, 10);
            totalQuestions++;
        }
        
        const totalPossibleQuestions = questions.reduce((acc, group) => acc + group.questions.length, 0);
        if (totalQuestions < totalPossibleQuestions) {
            alert('Please answer all questions before calculating the fit.');
            return;
        }

        const percentage = (score / totalPossibleQuestions) * 100;
        displayResult(percentage);
    }

    function displayResult(percentage) {
        let content = '';
        resultDiv.className = 'result-container'; // Reset classes

        if (percentage >= 60) {
            resultDiv.classList.add('result-good');
            content = `
                <h2>Conclusion: Strong Candidate for MMM (${percentage.toFixed(0)}% Match)</h2>
                <p>Your organization is likely a good fit for an MMM project.</p>
                <h3>Next Steps:</h3>
                <ul>
                    <li>Proceed with a deeper dive into the data requirements for MMM.</li>
                    <li>Scope the MMM project, outlining timelines, deliverables, and costs.</li>
                    <li>Begin the data collection and integration process.</li>
                </ul>
                Have questions about your results? Reach out to us and we'll chat!<br><br>
                <a href="https://www.wheelhousedmg.com/contact/" class="button contact-button">Contact Us</a>
            `;
        } else {
            resultDiv.classList.add('result-bad');
            content = `
                <h2>Conclusion: Not a Good Fit for MMM at this Time (${percentage.toFixed(0)}% Match)</h2>
                <p>Your organization may not be ready for an MMM project. Consider the following alternatives:</p>
                <h3>Alternative Solutions:</h3>
                <ul>
                    <li><strong>For tactical/creative optimization goals:</strong> Propose A/B Testing or Attribution Modeling.</li>
                    <li><strong>If data is insufficient or of low quality:</strong> Propose a Data Readiness Assessment or a smaller-scale Scenario Forecasting project.</li>
                    <li><strong>For forward-looking goals without historical data:</strong> Propose Scenario Forecasting.</li>
                </ul>
                Have questions about your results? Reach out to us and we'll chat!<br><br>
                <a href="https://www.wheelhousedmg.com/contact/" class="button contact-button">Contact Us</a>
            `;
        }

        resultDiv.innerHTML = content;
        resultDiv.style.display = 'block';
        resultDiv.scrollIntoView({ behavior: 'smooth' });
    }

    renderQuestions();
    submitBtn.addEventListener('click', calculateResults);
});