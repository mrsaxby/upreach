
const nextTutorial = (e) => {
    currentTutorial++;
    displayTutorial();
}

const previousTutorial = (e) => {
    currentTutorial--;
    displayTutorial();
}


const tutorialButtons = () => {
    const prevButton = document.getElementById("tutorial-previous");
    const nextButton = document.getElementById("tutorial-next");

    if (currentTutorial <= 1) {
        prevButton.disabled = true;
    }
    else {
        prevButton.disabled = false;
    }

    if (currentTutorial >= numberOfTutorials) {
        nextButton.disabled = true;
    }
    else {
        nextButton.disabled = false;
    }
}


function displayTutorial() {
    tutorialButtons();
    for (let i = 1; i <= numberOfTutorials; i++) {
        if (currentTutorial === i) {
            document.getElementById("tutorial-" + currentTutorial).style.display = "block";
        }
        else {
            document.getElementById("tutorial-" + i).style.display = "none";
        }
    }
}

