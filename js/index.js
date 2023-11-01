class Game {
  constructor(fruits) {
    this.fruits = fruits;
  }
  createFruits(columns, rows) {
    let html = "";
    let fruitIndex = 0;

    columns.forEach(col => {
      rows.forEach(row => {
        const pic = this.fruits[fruitIndex];
        fruitIndex++;

        if (pic) {
          html += `
          <div class="fruits" row-and-column="${col}${row}">
          <div id="container-background"></div>
          <img draggable="false" class="fruitsImg" fruits-name="${pic.name}" src="./images/${pic.img}">
          </div>`;
        }
        const containerDiv = document.querySelector("#container-div");
        if (containerDiv) {
          containerDiv.innerHTML = html;
        } else {
          console.error("#container-div not found in the HTML.");
        }
      });
    });
    document.querySelector("#container-div").innerHTML = html;
  }

  swapFruits(fruit1, fruit2) {
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
  shuffleFruits() {
    for (let i = this.fruits.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.fruits[i];
      this.fruits[i] = this.fruits[j];
      this.fruits[j] = temp;
    }
    const containerDiv = document.querySelector("#container-div");
    containerDiv.innerHTML = "";
  }
  matchFruits() {
    const matchedFruits = [];


  }
}

function getRowAndColumn(fruit) {
  const rowAndCol = fruit.getAttribute("row-and-column");
  const column = rowAndCol.charAt(0);
  const row = parseInt(rowAndCol.slice(1));
  return { column, row };
}

