const fruitsData = [
  { name: "strawberry", img: "strawberry.png" },
  { name: "grapes", img: "grapes.png" },
  { name: "lemon", img: "lemon.png" },
  { name: "apple", img: "apple.png" },
  { name: "melon", img: "melon.png" },
  { name: "orange", img: "orange.png" },
  { name: "strawberry", img: "strawberry.png" },
  { name: "grapes", img: "grapes.png" },
  { name: "lemon", img: "lemon.png" },
  { name: "apple", img: "apple.png" },
  { name: "melon", img: "melon.png" },
  { name: "orange", img: "orange.png" },
  { name: "strawberry", img: "strawberry.png" },
  { name: "grapes", img: "grapes.png" },
  { name: "lemon", img: "lemon.png" },
  { name: "apple", img: "apple.png" },
  { name: "melon", img: "melon.png" },
  { name: "orange", img: "orange.png" },
  { name: "strawberry", img: "strawberry.png" },
  { name: "grapes", img: "grapes.png" },
  { name: "lemon", img: "lemon.png" },
  { name: "apple", img: "apple.png" },
  { name: "melon", img: "melon.png" },
  { name: "orange", img: "orange.png" },
]

const columns = ["A", "B", "C", "D"];
const rows = [1, 2, 3, 4, 5, 6];


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