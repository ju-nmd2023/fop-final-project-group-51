/** @format */

let x = 200;
let y = 200;
let cloudX = 200;
let cloudY = 200;
let sunX = 200;
let sunY = 200;
let cactusX = 200;
let cactusY = 200;
let bubbles = [];
let waterDrops = [];
let waterTankX = 100;
let waterTankY = 100;
let cactuses = [];
let gameIsRunning = false;
let gameEnd = false;
let velocity = 0.5;
const acceleration = 0.1;
let speed = 1;
let xDirection = 0;
let collectedWaterDrops = 0;
let elapsedTime = 0;
let speedIncrement = 5.0;

const GameState = {
  MENU: "menu",
  PLAYING: "playing",
  PAUSED: "paused",
  GAME_OVER: "game_over",
};

let currentState = GameState.MENU;

function setup() {
  createCanvas(600, 750);
  generateWaterDrops();
}

class WaterDrop {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.isVisible = true;
  }

  draw() {
    if (this.isVisible) {
      // Water drop
      noStroke();
      fill(121, 205, 244);
      ellipse(this.x, this.y, 20, 40);

      // Reflection
      fill(255, 255, 255);
      ellipse(this.x - 2, this.y, 10, 30);
      fill(121, 205, 244);
      ellipse(this.x, this.y, 10, 30);
    }
  }

  checkCollision(camelX, camelY) {
    if (this.isVisible && dist(camelX, camelY, this.x, this.y) < 50) {
      this.isVisible = false;
      collectedWaterDrops++;
      speedIncrement += 5; // You can adjust this value as needed
    }
  }
}

function generateWaterDrops() {
  for (let i = 0; i < 4; i++) {
    let waterDropX = random(100, width - 50);
    let waterDropY = random(0, 300);
    waterDrops.push(new WaterDrop(waterDropX, waterDropY));
  }
}

function drawWaterDrops() {
  waterDrops.forEach((drop) => {
    drop.draw();
    drop.y += 0.3; // Move the water drops downwards
    drop.x -= 0.5;
  });
}

function checkWaterDropCollision(camelX, camelY) {
  waterDrops.forEach((drop) => {
    drop.checkCollision(camelX, camelY);
  });
}

//watertank
function waterTank(waterTankX, waterTankY) {
  noStroke();
  fill(121, 205, 244);
  ellipse(waterTankX + 50, waterTankY + 27.5, 35, 40);
  ellipse(waterTankX + 50, waterTankY + 40, 35, 10);
  ellipse(waterTankX + 50, waterTankY + 45, 35, 10);
  ellipse(waterTankX + 50, waterTankY + 50, 35, 10);
  ellipse(waterTankX + 50, waterTankY + 55, 35, 10);
  ellipse(waterTankX + 50, waterTankY + 60, 35, 10);
  ellipse(waterTankX + 50, waterTankY + 65, 35, 10);
  ellipse(waterTankX + 50, waterTankY + 70, 35, 10);
  rect(waterTankX + 32.5, waterTankY + 71, 35, 10, 10);

  // Lid
  fill(187, 189, 191);
  rect(waterTankX + 42.5, waterTankY, 15, 10);

  // Lid stripes
  fill(0, 0, 0);
  rect(waterTankX + 44, waterTankY, 0.5, 10);
  rect(waterTankX + 45.5, waterTankY, 0.5, 10);
  rect(waterTankX + 47, waterTankY, 0.5, 10);
  rect(waterTankX + 48.5, waterTankY, 0.5, 10);

  // White reflection
  fill(255, 255, 255);
  ellipse(waterTankX + 47.5, waterTankY + 27.5, 25, 30);
  fill(121, 205, 244);
  ellipse(waterTankX + 49, waterTankY + 27.5, 25, 35);
}

function dunes(x, y) {
  //sky

  background(239, 227, 210);

  //dunes
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

class Cactus {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    fill(102, 124, 40);
    rect(this.x + 25, this.y, this.width / 2, this.height, 10);
    rect(
      this.x + this.width * 0.2,
      this.y - this.height * 0.4,
      this.width * 0.6,
      this.height * 0.4,
      100
    );
    rect(
      this.x + this.width * 0.4,
      this.y - this.height * 0.6,
      this.width * 0.2,
      this.height * 0.2,
      100
    );
    rect(
      this.x - this.width / 25,
      this.y + 20 - this.height * 0.2,
      this.width * 0.3,
      this.height * 0.4,
      5
    );
  }

  hitTest(x, y, width, height) {
    return (
      x < this.x + this.width &&
      x + width > this.x &&
      y < this.y + this.height &&
      y + height > this.y -}}
