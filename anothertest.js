/** @format */

class Cactus {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    fill(102, 124, 40);
    rect(this.x, this.y, this.width, this.height, 10);
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
  }

  hitTest(x, y, width, height) {
    return (
      x < this.x + this.width &&
      x + width > this.x &&
      y < this.y + this.height &&
      y + height > this.y
    );
  }
}

class Camel {
  constructor(x, y, width, height, scale) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.scale = scale;
  }

  draw() {
    fill(153, 102, 51);
    ellipse(
      this.x + 35 * this.scale,
      this.y + 255 * this.scale,
      (this.width + 100) * this.scale,
      this.height * this.scale
    );
    // Additional camel parts can be drawn here
  }
}

const cactus = new Cactus(200, 200, 100, 100);
const camel = new Camel(50, 300, 100, 50, 1);

let velocity = 0;
const acceleration = 0.2;
let gameIsRunning = true;
let enterPressed = true;

function setup() {
  createCanvas(800, 600); // Ensure a canvas is created with proper dimensions
}

function draw() {
  background(255, 255, 255);

  // Camel movement logic
  if (gameIsRunning && enterPressed) {
    camel.x += 0.1;
    camel.y += velocity;
    velocity += acceleration;
    if (keyIsDown(32)) {
      // Space bar key code
      velocity -= acceleration * 2; // Add jumping effect
    }

    // Prevent camel from falling through the floor
    if (camel.y + camel.height * camel.scale > height) {
      camel.y = height - camel.height * camel.scale;
      velocity = 0;
    }
  }

  // Draw camel and cactus
  camel.draw();
  cactus.draw();

  // Check for collision between camel and cactus
  if (cactus.hitTest(camel.x, camel.y, camel.width, camel.height)) {
    background(255, 0, 0);
  }
}
