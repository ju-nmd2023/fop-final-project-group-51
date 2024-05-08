/** @format */

let x = 200;
let y = 200;
let cloudX = 200;
let cloudY = 200;
let sunX = 200;
let sunY = 200;
let cactusX = 200;
let cactusY = 200;
let camelX = 100;
let camelY = 100;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(239, 227, 210);
  drawDunes();
  drawSun();
  moveCloud();
  drawCactus();
  moveCamel();
}

function drawDunes() {
  fill(192, 120, 50);
  noStroke();
  ellipse(x - 100, y + 400, 300);
  ellipse(x + 100, y + 420, 200, 200);
  ellipse(x + 350, y + 400, 250, 300);
  ellipse(x + 600, y + 400, 300);
  ellipse(x + 450, y + 500, 250, 300);
  ellipse(x + 700, y + 500, 250, 200);

  //sand
  fill(202, 143, 66);
  noStroke();
  rect(x - 200, y + 400, 1000, 300);

  //mud
  fill(101, 70, 33);
  noStroke();
  ellipse(x + 500, y + 590, 300);
  ellipse(x + 700, y + 620, 500, 300);
  ellipse(x - 100, y + 640, 300);
  ellipse(x + 200, y + 620, 500, 300);
  fill(88, 57, 39);
  noStroke();
  ellipse(x - 100, y + 520, 20);
  ellipse(x - 140, y + 560, 20);
  ellipse(x - 80, y + 570, 30, 20);
  ellipse(x, y + 570, 40, 30);
  ellipse(x, y + 570, 30);
  ellipse(x + 100, y + 570, 30);
  ellipse(x + 70, y + 520, 20);
  ellipse(x + 140, y + 520, 20);
  ellipse(x + 200, y + 550, 30);
  ellipse(x + 300, y + 550, 30);
  ellipse(x + 250, y + 520, 20, 15);
  ellipse(x + 350, y + 570, 35);
  ellipse(x + 100, y + 570, 30);
  ellipse(x + 400, y + 500, 20);
  ellipse(x + 540, y + 520, 20);
  ellipse(x + 600, y + 550, 30);
  ellipse(x + 700, y + 550, 30);
  ellipse(x + 650, y + 520, 20, 15);
  ellipse(x + 550, y + 570, 35);
  ellipse(x + 470, y + 570, 35);
}

function drawSun() {
  // Your sun code here...
}

function moveCloud() {
  // Your cloud movement code here...
}

function drawCactus() {
    fill(102, 124, 40);
    rect(cactusX + 196, cactusY + 260, 30, 150, 100);
    rect(cactusX + 196, cactusY + 340, 60, 20, 100);
    rect(cactusX + 240, cactusY + 320, 20, 40, 100);
    rect(cactusX + 170, cactusY + 290, 20, 60, 100);
    rect(cactusX + 170, cactusY + 330, 50, 20, 100);
  
    fill(10, 64, 40);
    rect(cactusX + 496, cactusY + 260, 30, 150, 100);
    rect(cactusX + 496, cactusY + 340, 60, 20, 100);
    rect(cactusX + 540, cactusY + 320, 20, 40, 100);
    rect(cactusX + 470, cactusY + 290, 20, 60, 100);
    rect(cactusX + 470, cactusY + 330, 50, 20, 100);
  
    fill(10, 64, 40);
    rect(cactusX - 100, cactusY + 300, 30, 110, 100);
    rect(cactusX - 100, cactusY + 340, 60, 20, 100);
    rect(cactusX - 60, cactusY + 320, 20, 40, 100);
    rect(cactusX - 130, cactusY + 320, 20, 60, 100);
    rect(cactusX - 130, cactusY + 360, 50, 20, 100);
  }}

function moveCamel() {
  // Your camel movement code here...
}

function startScreen() {
  // Your start screen code here...
}

function resetGame() {
  // Your reset game code here...
}

function mouseClicked() {
  // Your mouse click code here...
}

function keyPressed() {
  // Your key press code here...
}
