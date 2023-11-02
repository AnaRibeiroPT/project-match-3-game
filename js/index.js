class Game {
  constructor(fruits) {
    this.fruits = fruits;
    this.rows = ["A", "B", "C", "D", "E", "F"];
    this.columns = [1, 2, 3, 4, 5, 6, 7, 8];
    this.score = 0;
  }
  createFruits(columns, rows) {
    let html = "";
    let fruitIndex = 0;

    rows.forEach(row => {
      columns.forEach(col => {
        const pic = this.fruits[fruitIndex];
        fruitIndex++;

        if (pic) {
          html += `
          <div class="fruits" row-and-column="${row}${col}">
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

    let firstFruit = null;
    document.querySelectorAll(".fruits").forEach((fruit) => {
      fruit.addEventListener("click", () => {
        if (firstFruit === null) {
          fruit.querySelector(".fruitsImg").classList.add("enlarged");
          firstFruit = fruit;
        } else {
          this.swapFruits(firstFruit, fruit);
          this.processSwitch(firstFruit, fruit);
          firstFruit = null;
          document.querySelectorAll(".fruits").forEach((fruit) => {
            fruit.querySelector(".fruitsImg").classList.remove("enlarged");
          });
        };
      });
    });
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

      const firstFruitValue = this.fruits[this.getFruitIndexData(fruit1)];
      this.fruits[this.getFruitIndexData(fruit1)] = this.fruits[this.getFruitIndexData(fruit2)];
      this.fruits[this.getFruitIndexData(fruit2)] = firstFruitValue;

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
  getRowThree(chosenFruit) {
    const fruitPosition = chosenFruit.getAttribute("row-and-column");
    let prevFruit = null;
    if ((+fruitPosition[1] - 1) > 0) {
      const prevPosition = fruitPosition[0] + (+fruitPosition[1] - 1);
      prevFruit = document.querySelector(`[row-and-column="${prevPosition}"]`);
    }
    let nextFruit = null;
    if ((+fruitPosition[1] + 1) > 0) {
      const nextPosition = fruitPosition[0] + (+fruitPosition[1] + 1)
      nextFruit = document.querySelector(`[row-and-column="${nextPosition}"]`);
    }
    if (prevFruit === null || nextFruit === null) {
      return null;
    } else {
      return [prevFruit, chosenFruit, nextFruit]
    }
  }
  getColumnThree(chosenFruit) {
    const fruitPosition = chosenFruit.getAttribute("row-and-column");

    const prevIndexRow = this.rows.indexOf(fruitPosition[0]) - 1;
    let prevFruit = null;
    if (prevIndexRow >= 0) {
      const prevPosition = (this.rows[prevIndexRow]) + (fruitPosition[1]);
      prevFruit = document.querySelector(`[row-and-column="${prevPosition}"]`);
    }

    const nextIndexRow = this.rows.indexOf(fruitPosition[0]) + 1;
    let nextFruit = null;
    if (nextIndexRow >= 0) {
      const nextPosition = (this.rows[nextIndexRow]) + (fruitPosition[1]);
      nextFruit = document.querySelector(`[row-and-column="${nextPosition}"]`);
    }
    if (prevFruit === null || nextFruit === null) {
      return null;
    } else {
      return [prevFruit, chosenFruit, nextFruit];
    }
  }
  checkMatchingFruits(matchingFruits) {
    const firstFruitsName = matchingFruits[0].querySelector(".fruitsImg").getAttribute("fruits-name");
    const secondFruitsName = matchingFruits[1].querySelector(".fruitsImg").getAttribute("fruits-name");
    const thirdFruitsName = matchingFruits[2].querySelector(".fruitsImg").getAttribute("fruits-name");

    if (firstFruitsName === secondFruitsName && firstFruitsName === thirdFruitsName) {
      this.score += 100;
      return true;
    } else {
      return false;
    }
  }
  processSwitch(firstFruit, secondFruit) {
    let matching = false;
    let matchedFruits;

    if (!matching) {
      matchedFruits = this.getRowThree(firstFruit);
      if (matchedFruits !== null) {
        matching = this.checkMatchingFruits(matchedFruits);
      }
    }

    if (!matching) {
      matchedFruits = this.getColumnThree(firstFruit);
      if (matchedFruits !== null) {
        matching = this.checkMatchingFruits(matchedFruits);
      }
    }

    if (!matching) {
      matchedFruits = this.getRowThree(secondFruit);
      if (matchedFruits !== null) {
        matching = this.checkMatchingFruits(matchedFruits);
      }
    }

    if (!matching) {
      matchedFruits = this.getColumnThree(secondFruit);
      if (matchedFruits !== null) {
        matching = this.checkMatchingFruits(matchedFruits);
      }
    }

    if (matching) {
      this.replaceFruitsForAbove(matchedFruits);
      this.updateScore();
    }
  }
  getFruitIndexData(fruit) {
    const fruitPosition = fruit.getAttribute("row-and-column");
    return this.rows.indexOf(fruitPosition[0]) * 8 + (+fruitPosition[1]) - 1;
  }
  getElementsAbove(chosenFruit) {
    let aboveFruits = [];
    const indexRow = this.rows.indexOf(chosenFruit.getAttribute("row-and-column")[0]);
    for (let i = 0; i <= indexRow; i++) {
      const currentLetter = this.rows[i];
      const elementAbove = document.querySelector(`[row-and-column="${currentLetter + chosenFruit.getAttribute("row-and-column")[1]}"]`);
      aboveFruits.push(elementAbove);
    }
    return aboveFruits;
  }
  replaceFruitsForAbove(matchedFruits) {
    matchedFruits.forEach(matchedFruit => {
      let lastItemValue = null;
      this.getElementsAbove(matchedFruit).forEach(fruit => {
        const fruitRealIndex = this.getFruitIndexData(fruit);
        let temp = this.fruits[fruitRealIndex];
        this.fruits[fruitRealIndex] = lastItemValue;
        lastItemValue = temp;
      });
    });
    this.generateFruits();
  }
  generateFruits() {
    const firstRandomFruit = fruitsData[Math.floor(Math.random() * fruitsData.length)];
    const secondRandomFruit = fruitsData[Math.floor(Math.random() * fruitsData.length)];
    const thirdRandomFruit = fruitsData[Math.floor(Math.random() * fruitsData.length)];
    const arrayRandom = [firstRandomFruit, secondRandomFruit, thirdRandomFruit];
    let counter = 0;

    for (let i = 0; i < this.fruits.length; i++) {
      const element = this.fruits[i];
      if (element === null) {
        this.fruits[i] = arrayRandom[counter];
        counter++;
      }
    }
    this.createFruits(this.columns, this.rows);
  }
  updateScore() {
    const scoreElement = document.getElementById("score");
    if (scoreElement) {
      scoreElement.textContent = `Score: ${this.score}`;
    }
  }
}
function getRowAndColumn(fruit) {
  const rowAndCol = fruit.getAttribute("row-and-column");
  const column = rowAndCol.charAt(0);
  const row = parseInt(rowAndCol.slice(1));
  return { column, row };
}

