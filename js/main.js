const fruits = [
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


/* this.fruitsArr = [];
const newElement = new Game(); 

window.addEventListener('load', (event) => {
  //gonna add this later
  setInterval(() => {
    fruitsArr.forEach((fruit) => {
      fruit.moveDown();
    });
  }, 50); 
}); 
 */

const columns = ["A", "B", "C", "D"];
const rows = [1, 2, 3, 4, 5, 6,];

let html = "";
let fruitIndex = 0;

columns.forEach(col => {
  rows.forEach(row => {
    const pic = fruits[fruitIndex];
    fruitIndex++;

    if (pic) {
      html += `
    <div class="fruits" row-and-column="${col}${row}">
    <div id="container-background"></div>
    <img draggable="false" class="fruitsImg" fruits-name="${pic.name}" src="./images/${pic.img}">
    </div>`;
    }
  });
});

document.querySelector("#container-div").innerHTML = html;

function getRowAndColumn(fruit) {
  const rowAndCol = fruit.getAttribute("row-and-column");
  const column = rowAndCol.charAt(0);
  const row = parseInt(rowAndCol.slice(1));
  return { column, row };
}

let firstFruit = null;
document.querySelectorAll(".fruits").forEach((fruit) => {
  fruit.addEventListener("click", () => {
    if (firstFruit === null) {
      firstFruit = fruit;
    } else {
      swapFruits(firstFruit, fruit);
      firstFruit = null;
    }
  });
});

function swapFruits(fruit1, fruit2) {
  const position1 = getRowAndColumn(fruit1);
  const position2 = getRowAndColumn(fruit2);

  const columnDifference = position1.column.charCodeAt(0) - position2.column.charCodeAt(0);
  const rowDifference = position1.row - position2.row;

  if (
    (columnDifference === 1 || columnDifference === -1) && rowDifference === 0 || 
    (rowDifference === 1 || rowDifference === -1) && columnDifference === 0
  ) {
    const swapping = fruit1.innerHTML;
    fruit1.innerHTML = fruit2.innerHTML;
    fruit2.innerHTML = swapping;
  }
}