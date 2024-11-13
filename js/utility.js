function elementHiddenById(elementId) {
  const hiddenElement = document.getElementById(elementId);
  hiddenElement.classList.add("hidden");
}

function elementShowById(elementId) {
  const hiddenElement = document.getElementById(elementId);
  hiddenElement.classList.remove("hidden");
}

function getRandomAlphabets() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const alphabet = alphabets.split("");
  const randomNumber = Math.floor(Math.random() * 25);

  const kbd = document.getElementById(alphabet[randomNumber]);
  kbd.style.backgroundColor = "#fca624";
  const diplayAlphabet = document.getElementById("diplayAlphabet");
  diplayAlphabet.innerText = alphabet[randomNumber];
  //   console.log(alphabet[randomNumber]);
}
