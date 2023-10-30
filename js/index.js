class Game {
  constructor() {
    this.height = 15;
    this.width = 8;
    this.positionX = 0;
    this.positionY = 0;
    this.elements = [];
  }  
  createFruits() {
    this.elements = document.createElement("div");
    this.elements.className = "elements";

    this.elements.style.width = this.width + "vw";
    this.elements.style.height = this.height + "vh";
    this.elements.style.left = this.positionX + "vw";
    this.elements.style.bottom = this.positionY + "vh";

    const containerDiv = document.querySelector(".container-div");
    containerDiv.appendChild(this.elements);
  }
  moveDown() {
    this.positionY--;
    this.elements.style.bottom = this.positionY + "vh";
  }
}
