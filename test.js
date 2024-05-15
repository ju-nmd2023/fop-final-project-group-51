/** @format */

let x = 200;
let y = 200;
let cloudX = 200;
let cloudY = 200;
let sunX = 200;
let sunY = 200;
let cactusX = 200;
let cactusY = 200;

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

function cactus(cactusX, cactusY) {
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

  fill(10, 64, 40);
  rect(cactusX + 605, cactusY + 300, 30, 110, 100);
  rect(cactusX + 650, cactusY + 340, 60, 20, 100);
  rect(cactusX + 690, cactusY + 320, 20, 40, 100);
  rect(cactusX + 620, cactusY + 320, 20, 60, 100);
  rect(cactusX + 620, cactusY + 360, 50, 20, 100);
}

function sun() {
  //cloud
  fill(255, 255, 255, 200);
  stroke(255, 255, 255, 10);
  ellipse(cloudX + 100, cloudY + 10, 70, 60);
  ellipse(cloudX + 70, cloudY + 10, 60, 40);
  ellipse(cloudX + 140, cloudY + 15, 50, 40);

  fill(255, 255, 255, 200);
  stroke(255, 255, 255, 10);
  ellipse(cloudX + 250, cloudY + 70, 70, 60);
  ellipse(cloudX + 220, cloudY + 70, 60, 40);
  ellipse(cloudX + 290, cloudY + 75, 50, 40);

  fill(255, 255, 255, 200);
  stroke(255, 255, 255, 10);
  ellipse(cloudX + 250, cloudY - 70, 70, 60);
  ellipse(cloudX + 220, cloudY - 70, 60, 40);
  ellipse(cloudX + 290, cloudY - 65, 50, 40);
  cloudX = cloudX + 0.7;
  if (cloudX > 750) {
    cloudX = -250;
  }

  //sun
  push();
  fill(250, 210, 160);
  ellipse(sunX - 90, sunY - 50, 140);
  fill(251, 140, 26);
  ellipse(sunX - 90, sunY - 50, 100);
  pop();
}
let camelX = 100;
let camelY = 100;

class Camel {
  constructor(x, y, scale = 1) {
    this.x = x;
    this.y = y;
    this.scale = scale;
  }

  draw() {
    // camel head
    fill(219, 165, 119);
    ellipse(
      this.x + 150 * this.scale,
      this.y + 150 * this.scale,
      80 * this.scale,
      80 * this.scale
    );

    // camel nose
    noStroke();
    fill(219, 165, 119);
    ellipse(
      this.x + 175 * this.scale,
      this.y + 162 * this.scale,
      60 * this.scale,
      60 * this.scale
    );

    // camel ears
    fill(219, 165, 119);
    ellipse(
      this.x + 155 * this.scale,
      this.y + 110 * this.scale,
      10 * this.scale,
      70 * this.scale
    );
    ellipse(
      this.x + 128 * this.scale,
      this.y + 120 * this.scale,
      10 * this.scale,
      70 * this.scale
    );

    // camel neck
    ellipse(
      this.x + 123 * this.scale,
      this.y + 200 * this.scale,
      40 * this.scale,
      150 * this.scale
    );

    // neck dots
    push();
    fill(223, 204, 183);
    ellipse(
      this.x + 120 * this.scale,
      this.y + 152 * this.scale,
      4 * this.scale,
      8 * this.scale
    );
    ellipse(
      this.x + 112 * this.scale,
      this.y + 162 * this.scale,
      4 * this.scale,
      8 * this.scale
    );
    ellipse(
      this.x + 120 * this.scale,
      this.y + 172 * this.scale,
      4 * this.scale,
      8 * this.scale
    );
    ellipse(
      this.x + 112 * this.scale,
      this.y + 182 * this.scale,
      4 * this.scale,
      8 * this.scale
    );
    pop();

    // camel body
    ellipse(
      this.x + 35 * this.scale,
      this.y + 255 * this.scale,
      200 * this.scale,
      100 * this.scale
    );

    // camel legs
    ellipse(
      this.x + 100 * this.scale,
      this.y + 320 * this.scale,
      10 * this.scale,
      100 * this.scale
    );
    ellipse(
      this.x + 80 * this.scale,
      this.y + 320 * this.scale,
      10 * this.scale,
      100 * this.scale
    );
    ellipse(
      this.x - 10 * this.scale,
      this.y + 320 * this.scale,
      10 * this.scale,
      100 * this.scale
    );
    ellipse(
      this.x - 30 * this.scale,
      this.y + 320 * this.scale,
      10 * this.scale,
      100 * this.scale
    );

    // camel tail
    ellipse(
      this.x - 65 * this.scale,
      this.y + 255 * this.scale,
      50 * this.scale,
      10 * this.scale
    );

    // camel blanket
    fill(211, 117, 100);
    ellipse(
      this.x + 30 * this.scale,
      this.y + 210 * this.scale,
      50 * this.scale,
      110 * this.scale
    );
    ellipse(
      this.x + 0 * this.scale,
      this.y + 220 * this.scale,
      50 * this.scale,
      90 * this.scale
    );
    ellipse(
      this.x + 55 * this.scale,
      this.y + 220 * this.scale,
      50 * this.scale,
      90 * this.scale
    );

    // stripes on blanket
    ellipse(
      this.x + 70 * this.scale,
      this.y + 265 * this.scale,
      4 * this.scale,
      25 * this.scale
    );
    ellipse(
      this.x + 60 * this.scale,
      this.y + 260 * this.scale,
      4 * this.scale,
      25 * this.scale
    );
    ellipse(
      this.x + 50 * this.scale,
      this.y + 265 * this.scale,
      4 * this.scale,
      25 * this.scale
    );
    ellipse(
      this.x + 40 * this.scale,
      this.y + 260 * this.scale,
      4 * this.scale,
      25 * this.scale
    );
    ellipse(
      this.x + 30 * this.scale,
      this.y + 265 * this.scale,
      4 * this.scale,
      25 * this.scale
    );
    ellipse(
      this.x + 20 * this.scale,
      this.y + 260 * this.scale,
      4 * this.scale,
      25 * this.scale
    );
    ellipse(
      this.x + 10 * this.scale,
      this.y + 265 * this.scale,
      4 * this.scale,
      25 * this.scale
    );
    ellipse(
      this.x + 0 * this.scale,
      this.y + 260 * this.scale,
      4 * this.scale,
      25 * this.scale
    );
    ellipse(
      this.x - 10 * this.scale,
      this.y + 265 * this.scale,
      4 * this.scale,
      25 * this.scale
    );

    // dots on blanket
    fill(151, 153, 171);
    ellipse(
      this.x + 70 * this.scale,
      this.y + 276 * this.scale,
      7 * this.scale,
      7 * this.scale
    );
    ellipse(
      this.x + 60 * this.scale,
      this.y + 273 * this.scale,
      7 * this.scale,
      7 * this.scale
    );
    ellipse(
      this.x + 50 * this.scale,
      this.y + 276 * this.scale,
      7 * this.scale,
      7 * this.scale
    );
    ellipse(
      this.x + 40 * this.scale,
      this.y + 273 * this.scale,
      7 * this.scale,
      7 * this.scale
    );
    ellipse(
      this.x + 30 * this.scale,
      this.y + 276 * this.scale,
      7 * this.scale,
      7 * this.scale
    );
    ellipse(
      this.x + 20 * this.scale,
      this.y + 273 * this.scale,
      7 * this.scale,
      7 * this.scale
    );
    ellipse(
      this.x + 10 * this.scale,
      this.y + 276 * this.scale,
      7 * this.scale,
      7 * this.scale
    );
    ellipse(
      this.x + 0 * this.scale,
      this.y + 273 * this.scale,
      7 * this.scale,
      7 * this.scale
    );
    ellipse(
      this.x - 10 * this.scale,
      this.y + 276 * this.scale,
      7 * this.scale,
      7 * this.scale
    );

    // eyes
    fill(0, 0, 0);
    ellipse(
      this.x + 172 * this.scale,
      this.y + 150 * this.scale,
      20 * this.scale,
      20 * this.scale
    );
    fill(219, 165, 119);
    ellipse(
      this.x + 173 * this.scale,
      this.y + 153 * this.scale,
      25 * this.scale,
      20 * this.scale
    );

    // nose dot
    fill(0, 0, 0);
    ellipse(
      this.x + 196 * this.scale,
      this.y + 163 * this.scale,
      4 * this.scale,
      8 * this.scale
    );

    // feet
    fill(129, 88, 67);
    ellipse(
      this.x + 100 * this.scale,
      this.y + 360 * this.scale,
      8 * this.scale,
      20 * this.scale
    );
    ellipse(
      this.x + 80 * this.scale,
      this.y + 360 * this.scale,
      8 * this.scale,
      20 * this.scale
    );
    ellipse(
      this.x - 10 * this.scale,
      this.y + 360 * this.scale,
      8 * this.scale,
      20 * this.scale
    );
    ellipse(
      this.x - 30 * this.scale,
      this.y + 360 * this.scale,
      8 * this.scale,
      20 * this.scale
    );
  }
}

let camel = new Camel(100, 420, 0.5);

function draw() {
  dunes(x, y);
  cactus(cactusX, cactusY);
  sun();
  camel.draw();
  waterDrop(waterDropX, waterDropY);
}

function resetGame() {
  camel.draw();
  cloudflyY = 240;
  gameIsRunning = true;
  gameEnd = false;
}

function mouseClicked() {
  if (!gameIsRunning) {
    resetGame();
  }
}

let stars = [];

//CONFETTI FUNCTION
for (let i = 0; i < 1000; i++) {
  const star = {
    x: Math.floor(Math.random() * 570),
    y: Math.floor(Math.random() * 700),
    snow: Math.random() * 1,
    alpha: Math.random(),
  };
  stars.push(star);
}

function startScreen() {
  dunes(camelX, y);
  sun();
  textSize(50);
  fill(255);
  text("CAMEL RUN", 130, 300);
  textSize(30);
  fill(255);
  text("Click to start", 195, 340);
}

let gameIsRunning = false;
let gameEnd = false;
let velocity = 0.5;
const acceleration = 0.1;
let speed = 1.5;
let xDirection = 0;
let enterPressed = false;

function gameEndScreen() {}

//function for press ENTER
function keyPressed() {
  if (keyCode === ENTER) {
    enterPressed = true;
  }
}

//Draw screen
function draw() {
  //Make the background move

  dunes(x + 30, y);
  x = x - speed;
  speed = speed;
  if (x < -280) x = 100;
  camel.draw();
  sun();
  cactus(cactusX, cactusY);
  cactusX = cactusX - speed;
  if (cactusX < -280) cactusX = 100;

  //Add startscreen before starting game
  if (!gameIsRunning && !gameEnd) {
    startScreen();
  } else if (gameIsRunning && enterPressed) {
    // Check if Enter-key is pressed
    camel.x += 0.1;
    camel.y += velocity;
    velocity += acceleration;
    camelY += velocity * 2; // make the camel fall down
    if (keyIsDown(32)) {
      velocity = velocity - acceleration * 2; //add jumping effect
    }

    if (camelX + 135 >= cactusX) {
      console.log("hit");
      gameIsRunning = false;
      gameEnd = true;
    }
  }
}
