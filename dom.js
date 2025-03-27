const container = document.querySelector("#container");
let gridSize = 16;
const containerWidth = 500;
const divSize = containerWidth / gridSize;

function getGrid() {
  return parseInt(prompt("Qual o tamanho da grade?"));
}

function createGrid(num) {
  // Limpar grade anterior
  container.innerHTML = "";

  // Configurar grid CSS
  container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${num}, 1fr)`;

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

// Criar grade inicial
createGrid(gridSize);

// Event listeners para interação com a grade
container.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("gridButton")) {
    e.target.style.backgroundColor = generateRandomRGB();
  }
});

// Event listeners para botões de ação
document.querySelectorAll(".header button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const action = event.target.textContent.trim();

    switch (action) {
      case "Grid Size":
        gridSize = getGrid();
        createGrid(gridSize);
        break;

      case "Clear":
        document.querySelectorAll(".gridButton").forEach((btn) => {
          btn.style.backgroundColor = "lightblue";
        });
        break;

      case "Light mode":
        document.body.style.backgroundColor =
          document.body.style.backgroundColor === "black" ? "white" : "black";
        break;
    }
  });
});
