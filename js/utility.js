function elementHiddenById(elementId) {
  const hiddenElement = document.getElementById(elementId);
  hiddenElement.classList.add("hidden");
}

function elementShowById(elementId) {
  const hiddenElement = document.getElementById(elementId);
  hiddenElement.classList.remove("hidden");
}

function getRandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  const randomNumber = Math.floor(Math.random() * 25);
  const alphabet = alphabets[randomNumber];
  return alphabet;
}

function setBackgrundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-500");
}
function removeBackgrundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-500");
}

function getElementValueById(elementId) {
  const currentElement = document.getElementById(elementId);
  const currentElementText = currentElement.innerText;
  const currentElementValue = parseInt(currentElementText);
  return currentElementValue;
}

function updateScoreById(elementId, value) {
  const currentElement = document.getElementById(elementId);
  currentElement.innerText = value;
}

function gameOver() {
  elementHiddenById("home");
  elementHiddenById("play-ground");
  elementShowById("score");
  updateScoreById("current-score", 0);
  updateScoreById("current-life", 5);
}
