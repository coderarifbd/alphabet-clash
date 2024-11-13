document.getElementById("btn-play").addEventListener("click", function () {
  elementHiddenById("home");
  elementShowById("play-ground");
  getRandomAlphabets();
});
