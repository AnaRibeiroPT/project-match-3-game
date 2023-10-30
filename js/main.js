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


this.fruitsArr = [];
const newElement = new Game();

window.addEventListener('load', (event) => {
  //gonna add this later
  /* setInterval(() => {
    fruitsArr.forEach((fruit) => {
      fruit.moveDown();
    });
  }, 50); */

  let html = "";
  fruits.forEach(pic => {
    html += `
    <div class="fruits" fruits-name ="${pic.name}">
    <div id="container-background"></div>
    <img draggable="false" class="fruitsImg" src="./images/${pic.img}">
    </div>`;
  });

  document.querySelector("#container-div").innerHTML = html;


  document.querySelectorAll(".fruits").forEach((fruit) => {
    fruit.addEventListener("click", () => {
      console.log("Clicking fruit");
    })
  });
  }
);
