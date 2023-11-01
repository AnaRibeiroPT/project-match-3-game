const fruitsData = [
  { name: "dragon-fruit", img: "dragon-fruit.png" },
  { name: "strawberry", img: "strawberry.png" },
  { name: "watermelon", img: "watermelon.png" },
  { name: "blueberry", img: "blueberry.png" },
  { name: "orange", img: "orange.png" },
  { name: "banana", img: "banana.png" },
  { name: "grapes", img: "grapes.png" },
  { name: "cherry", img: "cherry.png" },
  { name: "lemon", img: "lemon.png" },
  { name: "melon", img: "melon.png" },
  { name: "peach", img: "peach.png" },
  { name: "lime", img: "lime.png" },
  { name: "dragon-fruit", img: "dragon-fruit.png" },
  { name: "strawberry", img: "strawberry.png" },
  { name: "watermelon", img: "watermelon.png" },
  { name: "blueberry", img: "blueberry.png" },
  { name: "orange", img: "orange.png" },
  { name: "banana", img: "banana.png" },
  { name: "grapes", img: "grapes.png" },
  { name: "cherry", img: "cherry.png" },
  { name: "lemon", img: "lemon.png" },
  { name: "melon", img: "melon.png" },
  { name: "peach", img: "peach.png" },
  { name: "lime", img: "lime.png" },
  { name: "dragon-fruit", img: "dragon-fruit.png" },
  { name: "strawberry", img: "strawberry.png" },
  { name: "watermelon", img: "watermelon.png" },
  { name: "blueberry", img: "blueberry.png" },
  { name: "orange", img: "orange.png" },
  { name: "banana", img: "banana.png" },
  { name: "grapes", img: "grapes.png" },
  { name: "cherry", img: "cherry.png" },
  { name: "lemon", img: "lemon.png" },
  { name: "melon", img: "melon.png" },
  { name: "peach", img: "peach.png" },
  { name: "lime", img: "lime.png" },
  { name: "dragon-fruit", img: "dragon-fruit.png" },
  { name: "strawberry", img: "strawberry.png" },
  { name: "watermelon", img: "watermelon.png" },
  { name: "blueberry", img: "blueberry.png" },
  { name: "orange", img: "orange.png" },
  { name: "banana", img: "banana.png" },
  { name: "grapes", img: "grapes.png" },
  { name: "cherry", img: "cherry.png" },
  { name: "lemon", img: "lemon.png" },
  { name: "melon", img: "melon.png" },
  { name: "peach", img: "peach.png" },
  { name: "lime", img: "lime.png" },
  { name: "peach", img: "peach.png" },
  { name: "lime", img: "lime.png" },
]

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


    const columns = ["A", "B", "C", "D", "E", "F"];
    const rows = [1, 2, 3, 4, 5, 6, 7, 8];


    const game = new Game(fruitsData);
    game.shuffleFruits();
    game.createFruits(columns, rows);


    let firstFruit = null;
    document.querySelectorAll(".fruits").forEach((fruit) => {
      fruit.addEventListener("click", () => {
        if (firstFruit === null) {
          fruit.querySelector(".fruitsImg").classList.add("enlarged");
          firstFruit = fruit;
        } else {
          game.swapFruits(firstFruit, fruit);
          firstFruit = null;
          document.querySelectorAll(".fruits").forEach((fruit) => {
            fruit.querySelector(".fruitsImg").classList.remove("enlarged");
          });
        }
      });
    });
  });
});