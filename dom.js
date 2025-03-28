const container = document.querySelector("#container");
let gridSize = 16;
const containerWidth = 500;
const divSize = containerWidth / gridSize;

function getGrid() {
  gridSize = parseInt(prompt("What´s the size of your grid"));
  if (gridSize > 100) {
    alert("That´s too big");
    gridSize = parseInt(prompt("Please Insert a valid number"));
  }
  return gridSize;
}

function createGrid(num) {
  // Limpar grade anterior
  container.innerHTML = "";

  let totalGrids = num * num;
  for (let i = 0; i < totalGrids; i++) {
    const gridButton = document.createElement("button");
    gridButton.className = "gridButton";
    gridButton.style.width = `${divSize}px`;
    gridButton.style.height = `${divSize}px`;

    container.appendChild(gridButton);
  }
}

function generateRandomRGB() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

createGrid(gridSize);

container.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("gridButton")) {
    e.target.style.backgroundColor = generateRandomRGB();
  }
});

document.querySelectorAll(".header button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const action = event.target.textContent.trim();

    switch (action) {
      case "Grid Size":
        gridSize = getGrid();
        createGrid(gridSize);
        break;

      case "Clear":
        event.target.textContent = "Random";
        container.addEventListener("mouseover", (e) => {
          if (e.target.classList.contains("gridButton")) {
            e.target.style.backgroundColor = "white";
          }
        });
        break;
      case "Random":
        event.target.textContent = "Clear";
        container.addEventListener("mouseover", (e) => {
          if (e.target.classList.contains("gridButton")) {
            e.target.style.backgroundColor = generateRandomRGB();
          }
        });
        break;

      case "Erase":
        document.querySelectorAll(".gridButton").forEach((cell) => {
          cell.style.backgroundColor = "white"; // Ou a cor inicial desejada
        });
        break;

      case "Light mode":
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "white";
        event.target.textContent = "Dark mode";
        break;
      case "Dark mode":
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "black";
        event.target.textContent = "Background";
        break;
      case "Background":
        document.body.style.backgroundImage =
          'url("/images/navbackground.jpeg")';
        event.target.textContent = "Light mode";
        break;
    }
  });
});
