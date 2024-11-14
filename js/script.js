document.getElementById("btn-play").addEventListener("click", function () {
  elementHiddenById("home");
  elementShowById("play-ground");
  continueGame();
});

function continueGame() {
  const alphabet = getRandomAlphabet();
  // console.log(alphabet);
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  setBackgrundColorById(alphabet);
  elementHiddenById("home");
  elementHiddenById("score");
  elementShowById("play-ground");
}

function handleKeyboardButtonPress(e) {
  const playerPressed = e.key;
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();

  if (playerPressed === expectedAlphabet) {
    const elementId = document.getElementById(expectedAlphabet).innerText;
    removeBackgrundColorById(elementId);
    continueGame();
    let scoreNumber = getElementValueById("current-score");
    scoreNumber = scoreNumber + 1;
    updateScoreById("current-score", scoreNumber);
    updateScoreById("final-score", scoreNumber);
  } else if (playerPressed === "Escape") {
    let scoreNumber = getElementValueById("current-score");
    updateScoreById("current-score", scoreNumber);
    updateScoreById("final-score", scoreNumber);
    gameOver();
  } else {
    let lifeScoreNumber = getElementValueById("current-life");
    lifeScoreNumber = lifeScoreNumber - 1;
    if (lifeScoreNumber >= 0) {
      updateScoreById("current-life", lifeScoreNumber);
    } else {
      gameOver();
      removeBackgrundColorById(expectedAlphabet);
    }
  }
}
document.addEventListener("keyup", handleKeyboardButtonPress);
