/*
Create a container DIV on HTML
Acess that Div and assign a function to multply by x to get all other block divs
In css edit the block divs to have a grid
*/

const container = document.querySelector("#container");
console.log(container);

function grid(num) {
  let grid = num * num;
  for (let i = 0; i < grid; i++) {
    const myDiv = document.createElement("div");
    myDiv.classList.add("grid-item");
    container.appendChild(myDiv);
    console.log(myDiv);
  }
}
grid(16);
