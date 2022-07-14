const renderQuestionContainer = () => {
    questionButtons();
    document.querySelector("#question-title").innerText = "Task " + questionsArray[currentQuestionIndex].id;
    document.querySelector("#question-question").innerText = questionsArray[currentQuestionIndex].question;

};

const nextQuestion = (e) => {
    document.querySelector("#question-guide").innerHTML = "";
    currentQuestionIndex++;
    renderQuestionContainer();
}

const displayHint = (e) => {
    document.querySelector("#question-guide").innerHTML = questionsArray[currentQuestionIndex].hints.guide;
}


const questionButtons = () => {
    const nextButton = document.getElementById("next-question");

    if (currentQuestionIndex >= numberOfQuestions) {
        nextButton.disabled = true;
    }
    else {
        nextButton.disabled = false;
    }
}
nextQuestion();