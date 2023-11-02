const fruitsData = [
  { name: "dragon-fruit", img: "dragon-fruit.png" },
  { name: "strawberry", img: "strawberry.png" },
  { name: "watermelon", img: "watermelon.png" },
  { name: "blueberry", img: "blueberry.png" },
  { name: "orange", img: "orange.png" },
  { name: "banana", img: "banana.png" },
  { name: "grapes", img: "grapes.png" },
  { name: "lemon", img: "lemon.png" },
  { name: "peach", img: "peach.png" },
  { name: "lime", img: "lime.png" },
]

const numberOfDuplicates = 10;

const finalFruitsData = [];
for (let i = 0; i < numberOfDuplicates; i++) {
  finalFruitsData.push(...fruitsData);
}

const playButton = document.getElementById("startButton");
const bgMusic = document.getElementById("backgroundMusic");
const audioElement = document.getElementById("audioStart");

playButton.addEventListener("click", function () {
  audioElement.play();
  bgMusic.play();

  const fadeDuration = 5000;
  const fadeStep = 0.02;
  let currentVolume = 0;

  const fadeInterval = setInterval(function () {
    if (currentVolume < 0.2) {
      currentVolume += fadeStep;
      bgMusic.volume = currentVolume;
    } else {
      clearInterval(fadeInterval);
    }
  }, fadeDuration * fadeStep);
});

document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const gameContainer = document.getElementById("gameContainer");

  startButton.addEventListener("click", function () {
    startButton.style.display = "none";
    gameContainer.style.display = "block";

    const game = new Game(finalFruitsData);
    game.shuffleFruits();
    game.createFruits(game.columns, game.rows);
  });
});
