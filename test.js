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
let waterTankX = 100;
let waterTankY = 100;
let waterDropX = 100;
let waterDropY = 100;

//watertank
function waterTank(waterTankX, waterTankY) {
  noStroke();
  fill(121, 205, 244);
  ellipse(waterTankX + 100, waterTankY + 55, 70, 80);

  ellipse(waterTankX + 100, waterTankY + 80, 70, 20);
  ellipse(waterTankX + 100, waterTankY + 90, 70, 20);
  ellipse(waterTankX + 100, waterTankY + 100, 70, 20);
  ellipse(waterTankX + 100, waterTankY + 110, 70, 20);
  ellipse(waterTankX + 100, waterTankY + 120, 70, 20);
  ellipse(waterTankX + 100, waterTankY + 130, 70, 20);
  ellipse(waterTankX + 100, waterTankY + 140, 70, 20);
  rect(waterTankX + 65, waterTankY + 142, 70, 20, 20);

  //lid
  fill(187, 189, 191);
  rect(waterTankX + 85, waterTankY, 30, 20);

  //lid stripes
  fill(0, 0, 0);
  rect(waterTankX + 88, waterTankY, 1, 20);
  rect(waterTankX + 91, waterTankY, 1, 20);
  rect(waterTankX + 94, waterTankY, 1, 20);
  rect(waterTankX + 97, waterTankY, 1, 20);

  //white reflection
  fill(255, 255, 255);
  ellipse(waterTankX + 95, waterTankY + 55, 50, 60);
  fill(121, 205, 244);
  ellipse(waterTankX + 98, waterTankY + 55, 50, 70);
}

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

class Cactus {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  draw() {
    fill(102, 124, 40);
    rect(this.x + 196, this.y + 260, this.width - 70, this.height + 50, 100);
    rect(this.x + 196, this.y + 340, this.width - 40, this.height - 80, 100);
    rect(this.x + 240, this.y + 320, this.width - 80, this.height - 60, 100);
    rect(this.x + 170, this.y + 290, this.width - 80, this.height - 40, 100);
    rect(this.x + 170, this.y + 330, this.width - 50, this.height - 80, 100);
  }
}
let cactus = new Cactus(200, 200, 100, 100);

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

//position camel
function sadCamel(camelX, camelY) {
  //camel head
  push();
  rotate(radians(sin(rotationAngle) * 0.5)); // Rotate up and down
  fill(219, 165, 119);
  ellipse(camelX + 125, camelY + 130, 80, 80);

  //camel nose
  noStroke();
  fill(219, 165, 119);
  ellipse(camelX + 125, camelY + 162, 60, 60);

  //camel ears
  fill(219, 165, 119);
  ellipse(camelX + 140, camelY + 100, 10, 70);

  ellipse(camelX + 108, camelY + 100, 10, 70);

  //camel neck
  ellipse(camelX + 123, camelY + 200, 40, 150);
  pop();

  //camel body
  fill(219, 165, 119);
  ellipse(camelX + 35, camelY + 255, 200, 100);

  //camel legs
  ellipse(camelX + 100, camelY + 320, 10, 100);
  ellipse(camelX + 80, camelY + 320, 10, 100);

  ellipse(camelX - 10, camelY + 320, 10, 100);
  ellipse(camelX - 30, camelY + 320, 10, 100);

  //camel tail
  ellipse(camelX - 65, camelY + 255, 50, 10);

  //camel blanket
  fill(211, 117, 100);
  ellipse(camelX + 30, camelY + 210, 50, 110);

  ellipse(camelX + 0, camelY + 220, 50, 90);
  ellipse(camelX + 55, camelY + 220, 50, 90);

  //blanket accessories stripes
  ellipse(camelX + 70, camelY + 265, 4, 25);
  ellipse(camelX + 60, camelY + 260, 4, 25);
  ellipse(camelX + 50, camelY + 265, 4, 25);
  ellipse(camelX + 40, camelY + 260, 4, 25);
  ellipse(camelX + 30, camelY + 265, 4, 25);
  ellipse(camelX + 20, camelY + 260, 4, 25);
  ellipse(camelX + 10, camelY + 265, 4, 25);
  ellipse(camelX + 0, camelY + 260, 4, 25);
  ellipse(camelX - 10, camelY + 265, 4, 25);

  //blanket accessories dots
  fill(151, 153, 171);
  ellipse(camelX + 70, camelY + 276, 7, 7);
  ellipse(camelX + 60, camelY + 273, 7, 7);
  ellipse(camelX + 50, camelY + 276, 7, 7);
  ellipse(camelX + 40, camelY + 273, 7, 7);
  ellipse(camelX + 30, camelY + 276, 7, 7);
  ellipse(camelX + 20, camelY + 273, 7, 7);
  ellipse(camelX + 10, camelY + 276, 7, 7);
  ellipse(camelX + 0, camelY + 273, 7, 7);
  ellipse(camelX - 10, camelY + 276, 7, 7);

  //dead eyes
  push();
  rotate(radians(sin(rotationAngle) * 0.5)); // Rotate up and down
  fill(0, 0, 0);
  stroke(0);
  strokeWeight(3);
  //left eye
  line(camelX + 125 - 15, camelY + 130 + 5, camelX + 125 - 5, camelY + 130 + 5);

  //right eye
  line(
    camelX + 125 + 10,
    camelY + 130 + 5,
    camelX + 125 + 20,
    camelY + 130 + 5
  );

  pop();

  //nose dot
  push();
  rotate(radians(sin(rotationAngle) * 0.5)); // Rotate up and down
  fill(0, 0, 0);
  ellipse(camelX + 116, camelY + 163, 4, 8);
  fill(0, 0, 0);
  ellipse(camelX + 134, camelY + 163, 4, 8);
  pop();
  //feets
  fill(129, 88, 67);
  ellipse(camelX + 100, camelY + 360, 8, 20);
  ellipse(camelX + 80, camelY + 360, 8, 20);

  ellipse(camelX - 10, camelY + 360, 8, 20);
  ellipse(camelX - 30, camelY + 360, 8, 20);
}
let rotationAngle = 0;

class Camel {
  constructor(x, y, width, height, scale) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.scale = scale;
  }

  draw() {
    // camel head
    fill(219, 165, 119);
    ellipse(this.x + 150, this.y + 150, this.width - 20, this.height - 20);

    // camel nose
    noStroke();
    fill(219, 165, 119);
    ellipse(this.x + 175, this.y + 162, this.width - 40, this.height - 40);

    // camel ears
    push();
    rotate(radians(sin(rotationAngle) * 0.2));
    fill(219, 165, 119);
    ellipse(this.x + 155, this.y + 110, this.width - 90, this.height - 30);
    ellipse(this.x + 128, this.y + 120, this.width - 90, this.height - 30);
    pop();

    // camel neck
    ellipse(this.x + 123, this.y + 200, this.width - 60, this.height + 50);

    // neck dots
    push();
    fill(223, 204, 183);
    ellipse(this.x + 120, this.y + 152, this.width - 96, this.height - 92);
    ellipse(this.x + 112, this.y + 162, this.width - 96, this.height - 92);
    ellipse(this.x + 120, this.y + 172, this.width - 96, this.height - 92);
    ellipse(this.x + 112, this.y + 182, this.width - 96, this.height - 92);
    pop();

    // camel body
    ellipse(this.x + 35, this.y + 255, this.width + 100, this.height);

    // camel legs
    push();
    rotate(radians(sin(rotationAngle) * 0.5));

    ellipse(this.x + 100, this.y + 320, this.width - 90, this.height);
    ellipse(this.x + 80, this.y + 320, this.width - 90, this.height);
    ellipse(this.x - 10, this.y + 320, this.width - 90, this.height);
    ellipse(this.x - 30, this.y + 320, this.width - 90, this.height);

    // feet
    fill(129, 88, 67);
    ellipse(this.x + 100, this.y + 360, this.width - 92, this.height - 80);
    ellipse(this.x + 80, this.y + 360, this.width - 92, this.height - 80);
    ellipse(this.x - 10, this.y + 360, this.width - 92, this.height - 80);
    ellipse(this.x - 30, this.y + 360, this.width - 92, this.height - 80);
    rotationAngle += 0.2;
    pop();

    // camel tail
    ellipse(this.x - 65, this.y + 255, this.width - 50, this.height - 90);

    // camel blanket
    fill(211, 117, 100);
    ellipse(this.x + 30, this.y + 210, this.width - 50, this.height + 10);
    ellipse(this.x, this.y + 220, this.width - 50, this.height - 10);
    ellipse(this.x + 55, this.y + 220, this.width - 50, this.height - 10);

    // stripes on blanket
    ellipse(this.x + 70, this.y + 265, this.width - 96, this.height - 75);
    ellipse(this.x + 60, this.y + 260, this.width - 96, this.height - 75);
    ellipse(this.x + 50, this.y + 265, this.width - 96, this.height - 75);
    ellipse(this.x + 40, this.y + 260, this.width - 96, this.height - 75);
    ellipse(this.x + 30, this.y + 265, this.width - 96, this.height - 75);
    ellipse(this.x + 20, this.y + 260, this.width - 96, this.height - 75);
    ellipse(this.x + 10, this.y + 265, this.width - 96, this.height - 75);
    ellipse(this.x, this.y + 260, this.width - 96, this.height - 75);
    ellipse(this.x - 10, this.y + 265, this.width - 96, this.height - 75);

    // dots on blanket
    fill(151, 153, 171);
    ellipse(this.x + 70, this.y + 276, this.width - 93, this.height - 93);
    ellipse(this.x + 60, this.y + 273, this.width - 93, this.height - 93);
    ellipse(this.x + 50, this.y + 276, this.width - 93, this.height - 93);
    ellipse(this.x + 40, this.y + 273, this.width - 93, this.height - 93);
    ellipse(this.x + 30, this.y + 276, this.width - 93, this.height - 93);
    ellipse(this.x + 20, this.y + 273, this.width - 93, this.height - 93);
    ellipse(this.x + 10, this.y + 276, this.width - 93, this.height - 93);
    ellipse(this.x + 0, this.y + 273, this.width - 93, this.height - 93);
    ellipse(this.x - 10, this.y + 276, this.width - 93, this.height - 93);

    // eyes
    fill(0, 0, 0);
    ellipse(this.x + 172, this.y + 150, this.width - 80, this.height - 80);
    fill(219, 165, 119);
    ellipse(this.x + 173, this.y + 153, this.width - 75, this.height - 80);

    // nose dot
    fill(0, 0, 0);
    ellipse(this.x + 196, this.y + 163, this.width - 96, this.height - 92);
  }
}

let camel = new Camel(100, 200, 100, 100, 0.1);

function happyCamel(camelX, camelY, scale) {
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
function draw() {
  dunes(x, y);
  Cactus.draw();
  sun();
  camel.draw(100, 200, 50, 100, 0.1);
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
  push();
  rotate(radians(sin(rotationAngle) * 0.5));
  text("CAMEL RUN", 130, 300);
  textSize(30);
  fill(255);
  text("Click to start", 195, 340);
  pop();
}

function loseScreen() {
  dunes(camelX, y);
  sadCamel(camelX + 110, camelY + 30, scale);
  sun();
  textSize(50);
  fill(231, 56, 56);
  text("YOU LOSE", 150, 300);
  textSize(30);
  fill(231, 56, 56);
  text("Click to restart", 180, 340);
  //Generate Bubbles
  for (let i = 0; i < 0.5; i++) {
    const bubble = {
      x: Math.floor(Math.random() * 700),
      y: Math.floor(Math.random() * 900),
      circle: Math.random() * 10,
      alpha: Math.random(),
    };
    bubbles.push(bubble);
  }
}

function winScreen() {
  dunes(camelX, y);
  sun();
  happyCamel(camelX, camelY, scale);

  textSize(50);
  fill(53, 180, 40);
  text("YOU WON", 150, 300);
  textSize(30);
  fill(53, 180, 40);
  text("Click to restart", 180, 340);
  for (let star of stars) {
    const randomValue = Math.random();
    if (randomValue < 0.2) {
      fill(204, 204, 102); //yellow confetti
    } else if (randomValue < 0.4) {
      fill(204, 153, 204); //pink confetti
    } else if (randomValue < 0.6) {
      fill(153, 204, 153); //green confetti
    } else if (randomValue < 0.8) {
      fill(153, 204, 204); //blue confetti
    } else {
      fill(204, 153, 204); //purple confetti
    }
    ellipse(star.x, star.y, 10, 10);
    star.alpha = star.alpha + 0.05;
    star.y += star.snow;
    if (star.y > height) {
      star.y = 0;
    }
  }
}

let gameIsRunning = false;
let gameEnd = false;
let velocity = 0.5;
const acceleration = 0.1;
let speed = 1.5;
let xDirection = 0;
let enterPressed = false;

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
  camel.draw(100, 200, 50, 100, 0.1);
  sun();
  cactus.draw();

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

    // Check if the rectangles overlap
    //if () {
    //  console.log("hit");
    //gameIsRunning = false;
    //gameEnd = true;
  }
}
if (gameEnd) {
  loseScreen();
  for (let bubble of bubbles) {
    fill(231, 56, 56, Math.abs(Math.sin(bubble.alpha)) * 455);
    ellipse(bubble.x, bubble.y, 20);
    bubble.y += bubble.circle;
  }

  // } else {
  // winScreen();
  //waterTank(waterTankX + 170, waterTankY + 400);
  //}
  // rect(camel.x - 30, camel.x + 180, camel.y - 100, camel.y - 100);
  //rect(cactus.x + 180, cactus.x + 250, cactus.y - 130, cactus.y - 50);
}

//Cactus(200, 200, 100, 100);
// Camel(100, 200, 0.5);
//let camel = new Camel(100, 200, 50, 100, 0.1);
