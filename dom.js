/*
Create a container DIV on HTML
Acess that Div and assign a function to multply by x to get all other block divs
In css edit the block divs to have a grid

parseInt(prompt("Whats your number"));
*/

const container = document.querySelector("#container");
const gridSize = 16;
const containerWidth = 500;
const divSize = containerWidth / gridSize;

function grid(num) {
  let totalgrids = num * num;
  for (let i = 0; i < totalgrids; i++) {
    const myBtn = document.createElement("button");
    myBtn.className = "gridButton";
    myBtn.style.width = `${divSize}px`;
    myBtn.style.height = `${divSize}px`;
    myBtn.style.border = "1px solid black";
    myBtn.style.backgroundColor = "lightblue";
    myBtn.style.boxSizing = "border-box";

    myBtn.classList.add("grid-item");
    container.appendChild(myBtn);
  }
}
grid(gridSize);

document.body.addEventListener("mouseover", (e) => {
  let button = e.target.closest(".gridButton");
  if (!button) {
    return;
  }
  button.style.backgroundColor = rgb();
});

document.body.addEventListener("mouseout", (e) => {
  let button = e.target.closest(".gridButton");
  if (!button) {
    return;
  }
  button.style.backgroundColor = rgb();
});

function rgb() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  const rgb = `rgb(${r}, ${g}, ${b})`;
  return rgb;
}
