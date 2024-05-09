/** @format */

let x = 200;
let y = 200;
let cloudX = 200;
let cloudY = 200;
let sunX = 200;
let sunY = 200;
let cactusX = 200;
let cactusY = 200;
let waterDropX = 100;
let waterDropY = 100;

function waterDrop(waterDropX, waterDropY) {
  //waterdrop
  noStroke();
  fill(121, 205, 244);
  ellipse(waterDropX + 250, waterDropY + 55, 20, 40);

  //reflection
  fill(255, 255, 255);
  ellipse(waterDropX + 248, waterDropY + 55, 10, 30);
  fill(121, 205, 244);
  ellipse(waterDropX + 250, waterDropY + 55, 10, 30);
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

//start position camel
function camel(camelX, camelY, scale) {
  //camel head
  fill(219, 165, 119);
  ellipse(camelX + 150 * scale, camelY + 150 * scale, 80 * scale, 80 * scale);

  //camel nose
  noStroke();
  fill(219, 165, 119);
  ellipse(camelX + 175 * scale, camelY + 162 * scale, 60 * scale, 60 * scale);

  //camel ears
  fill(219, 165, 119);
  ellipse(camelX + 155 * scale, camelY + 110 * scale, 10 * scale, 70 * scale);
  ellipse(camelX + 128 * scale, camelY + 120 * scale, 10 * scale, 70 * scale);

  //camel neck
  ellipse(camelX + 123 * scale, camelY + 200 * scale, 40 * scale, 150 * scale);

  //neck dots
  push();
  fill(223, 204, 183);
  ellipse(camelX + 120 * scale, camelY + 152 * scale, 4 * scale, 8 * scale);
  ellipse(camelX + 112 * scale, camelY + 162 * scale, 4 * scale, 8 * scale);
  ellipse(camelX + 120 * scale, camelY + 172 * scale, 4 * scale, 8 * scale);
  ellipse(camelX + 112 * scale, camelY + 182 * scale, 4 * scale, 8 * scale);
  pop();

  //camel body
  ellipse(camelX + 35 * scale, camelY + 255 * scale, 200 * scale, 100 * scale);

  //camel legs
  ellipse(camelX + 100 * scale, camelY + 320 * scale, 10 * scale, 100 * scale);
  ellipse(camelX + 80 * scale, camelY + 320 * scale, 10 * scale, 100 * scale);
  ellipse(camelX - 10 * scale, camelY + 320 * scale, 10 * scale, 100 * scale);
  ellipse(camelX - 30 * scale, camelY + 320 * scale, 10 * scale, 100 * scale);

  //camel tail
  ellipse(camelX - 65 * scale, camelY + 255 * scale, 50 * scale, 10 * scale);

  //camel blanket
  fill(211, 117, 100);
  ellipse(camelX + 30 * scale, camelY + 210 * scale, 50 * scale, 110 * scale);
  ellipse(camelX + 0 * scale, camelY + 220 * scale, 50 * scale, 90 * scale);
  ellipse(camelX + 55 * scale, camelY + 220 * scale, 50 * scale, 90 * scale);

  //stripes on blanket
  ellipse(camelX + 70 * scale, camelY + 265 * scale, 4 * scale, 25 * scale);
  ellipse(camelX + 60 * scale, camelY + 260 * scale, 4 * scale, 25 * scale);
  ellipse(camelX + 50 * scale, camelY + 265 * scale, 4 * scale, 25 * scale);
  ellipse(camelX + 40 * scale, camelY + 260 * scale, 4 * scale, 25 * scale);
  ellipse(camelX + 30 * scale, camelY + 265 * scale, 4 * scale, 25 * scale);
  ellipse(camelX + 20 * scale, camelY + 260 * scale, 4 * scale, 25 * scale);
  ellipse(camelX + 10 * scale, camelY + 265 * scale, 4 * scale, 25 * scale);
  ellipse(camelX + 0 * scale, camelY + 260 * scale, 4 * scale, 25 * scale);
  ellipse(camelX - 10 * scale, camelY + 265 * scale, 4 * scale, 25 * scale);

  //dots on blanket
  fill(151, 153, 171);
  ellipse(camelX + 70 * scale, camelY + 276 * scale, 7 * scale, 7 * scale);
  ellipse(camelX + 60 * scale, camelY + 273 * scale, 7 * scale, 7 * scale);
  ellipse(camelX + 50 * scale, camelY + 276 * scale, 7 * scale, 7 * scale);
  ellipse(camelX + 40 * scale, camelY + 273 * scale, 7 * scale, 7 * scale);
  ellipse(camelX + 30 * scale, camelY + 276 * scale, 7 * scale, 7 * scale);
  ellipse(camelX + 20 * scale, camelY + 273 * scale, 7 * scale, 7 * scale);
  ellipse(camelX + 10 * scale, camelY + 276 * scale, 7 * scale, 7 * scale);
  ellipse(camelX + 0 * scale, camelY + 273 * scale, 7 * scale, 7 * scale);
  ellipse(camelX - 10 * scale, camelY + 276 * scale, 7 * scale, 7 * scale);

  //eyes
  fill(0, 0, 0);
  ellipse(camelX + 172 * scale, camelY + 150 * scale, 20 * scale, 20 * scale);
  fill(219, 165, 119);
  ellipse(camelX + 173 * scale, camelY + 153 * scale, 25 * scale, 20 * scale);

  //nose dot
  fill(0, 0, 0);
  ellipse(camelX + 196 * scale, camelY + 163 * scale, 4 * scale, 8 * scale);

  //feets
  fill(129, 88, 67);
  ellipse(camelX + 100 * scale, camelY + 360 * scale, 8 * scale, 20 * scale);
  ellipse(camelX + 80 * scale, camelY + 360 * scale, 8 * scale, 20 * scale);
  ellipse(camelX - 10 * scale, camelY + 360 * scale, 8 * scale, 20 * scale);
  ellipse(camelX - 30 * scale, camelY + 360 * scale, 8 * scale, 20 * scale);
}

function resetGame() {
  camel(x, y);
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
let lastWaterDropTime = 0;
let waterDropInterval = 3000; // 3 seconds
let waterDrops = [];
// Display and check collisions with water drops
for (let i = 0; i < waterDrops.length; i++) {
  let drop = waterDrops[i];
  waterDrop(drop.x, drop.y);
  // Check collision with camel
  let distance = dist(camelX, camelY + 300, drop.x, drop.y); // Adjusted camelY position
  if (distance < 50) {
    // Camel collects the water drop
    waterDrops.splice(i, 1); // Remove the collected water drop
    // You can add any additional actions here, such as increasing score
  }
}

function draw() {
  //Make the background move
  dunes(x + 30, y);
  x = x - speed;
  speed = speed;
  if (x < -280) x = 100;
  camel(camelX, camelY + 300, 0.6); //scale down the camel
  sun();
  cactus(cactusX, cactusY);
  cactusX = cactusX - speed;
  if (cactusX < -280) cactusX = 100;

  // Check if it's time to display a new water drop
  if (gameIsRunning && millis() - lastWaterDropTime > waterDropInterval) {
    // Generate random coordinates for the water drop
    let randomX = Math.random() * width;
    let randomY = Math.random() * height;
    // Add the new water drop to the array
    waterDrops.push({ x: randomX, y: randomY });
    // Update the last water drop time
    lastWaterDropTime = millis();
  }

  // Display and check collisions with water drops
  for (let i = 0; i < waterDrops.length; i++) {
    let drop = waterDrops[i];
    waterDrop(drop.x, drop.y);
    // Check collision with camel
    let distance = dist(camelX, camelY + 300, drop.x, drop.y); // Adjusted camelY position
    if (distance < 50) {
      // Camel collects the water drop
      waterDrops.splice(i, 1); // Remove the collected water drop
      // You can add any additional actions here, such as increasing score
    }
  }

  // Add startscreen before starting game
  if (!gameIsRunning && !gameEnd) {
    startScreen();
  } else if (gameIsRunning && enterPressed) {
    // Check if Enter-key is pressed
    camelX += 0.1;
    camelY += velocity;
    velocity += acceleration;
    camelY += velocity * 2; //make the camel fall down
    if (keyIsDown(32)) {
      velocity = velocity - acceleration * 2; //add jumping effect
    }

    if (camelX >= 400 && camelY >= 600) {
      gameIsRunning = false;
      gameEnd = true;
    }
  }
}
