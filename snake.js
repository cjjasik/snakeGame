// make sure html has a div that has ID "container"
const container = document.getElementById("container");

// BUILD GRID
function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    // sets ID of the cells.
    cell.id = c + 1;
    container.appendChild(cell).className = "grid-item";
  };
};

// SET SNAKE START LOCATION
let snakeStartLocation = Math.floor(Math.random() * 64 + 1);
let snakeStartCell = document.getElementById(snakeStartLocation.toString())
snakeStartCell.classList.add('snake');

// SET APPLE START LOCATION
let appleStartLocation = Math.floor(Math.random() * 64 + 1);

makeGrid(8, 8);