let cols = 5;
let rows = 5;

let grid = new Array(cols);

let openSet = [];
let closedSet = [];
let start, end;
let w, h;

function Spot(i, j) {
  this.x = i;
  this.y = j;
  this.f = 0;
  this.g = 0;
  this.h = 0;

  this.show = function () {
    fill(255);
    stroke(0);
    rect(this.x * w, this.y * h, w, h);
  }
}


function setup() {
  createCanvas(400, 400);
  console.log('A*');

  w = width / cols;
  h = height / rows;

  // Making a 2D Array

  for (let i = 0; i < cols; i++) {
    grid[i] = new Array(rows)
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Spot(i, j);
    }
  }

  start = grid[0][0];
  end = grid[cols - 1][rows - 1];
  console.log(grid);
  openSet.push(start);


}

function draw() {

  if (openSet.length > 0) {
    //we can keep going
  } else {
    //no solution
  }


  background(0);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; i < rows; j++) {
      grid[i][j].show()
    }
  }


}


console.log('zdarova raxdeba ??')