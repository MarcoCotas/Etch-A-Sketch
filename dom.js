/*
Create a container DIV on HTML
Acess that Div and assign a function to multply by x to get all other block divs
In css edit the block divs to have a grid
*/

const container = document.querySelector("#container");
const gridSize = 16;
const containerWidth = 500;
const divSize = containerWidth / gridSize;

function grid(num) {
  let totalgrids = num * num;
  for (let i = 0; i < totalgrids; i++) {
    const myDiv = document.createElement("div");
    myDiv.style.width = `${divSize}px`;
    myDiv.style.height = `${divSize}px`;
    myDiv.style.border = "1px solid black";
    myDiv.style.backgroundColor = "lightblue";
    myDiv.style.boxSizing = "border-box";

    myDiv.classList.add("griditem");
    container.appendChild(myDiv);
  }
}
grid(gridSize);
