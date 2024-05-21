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

// watertank
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

  // lid
  fill(187, 189, 191);
  rect(waterTankX + 85, waterTankY, 30, 20);

  // lid stripes
  fill(0, 0, 0);
  rect(waterTankX + 88, waterTankY, 1, 20);
  rect(waterTankX + 91, waterTankY, 1, 20);
  rect(waterTankX + 94, waterTankY, 1, 20);
  rect(waterTankX + 97, waterTankY, 1, 20);

  // white reflection
  fill(255, 255, 255);
  ellipse(waterTankX + 95, waterTankY + 55, 50, 60);
  fill(121, 205, 244);
  ellipse(waterTankX + 98, waterTankY + 55, 50, 70);
}

function waterDrop(waterDropX, waterDropY) {
  // waterdrop
  noStroke();
  fill(121, 205, 244);
  ellipse(waterDropX + 250, waterDropY + 55, 20, 40);

  // reflection
  fill(255, 255, 255);
  ellipse(waterDropX + 248, waterDropY + 55, 10, 30);
  fill(121, 205, 244);
  ellipse(waterDropX + 250, waterDropY + 55, 10, 30);
}

function dunes(x, y) {
  // sky
  background(239, 227, 210);

  // dunes
  fill(192, 120, 50);
  noStroke();
  ellipse(x - 100, y + 400, 300);
  ellipse(x + 100, y + 420, 200, 200);
  ellipse(x + 350, y + 400, 250, 300);
  ellipse(x + 600, y + 400, 300);
  ellipse(x + 450, y + 500, 250, 300);
  ellipse(x + 700, y + 500, 250, 200);

  // sand
  fill(202, 143, 66);
  noStroke();
  rect(x - 200, y + 400, 1000, 300);

  // mud
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
  // cloud
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

  // sun
  push();
  fill(250, 210, 160);
  ellipse(sunX - 90, sunY - 50, 140);
  fill(251, 140, 26);
  ellipse(sunX - 90, sunY - 50, 100);
  pop();
}
let camelX = 100;
let camelY = 100;
let rotationAngle = 0;

// position camel
function sadCamel(camelX, camelY) {
  // camel head
  push();
  rotate(radians(sin(rotationAngle) * 0.5)); // Rotate up and down
  fill(219, 165, 119);
  ellipse(camelX + 125, camelY + 130, 80, 80);

  // camel nose
  noStroke();
  fill(219, 165, 119);
  ellipse(camelX + 125, camelY + 162, 60, 60);

  // camel ears

  ellipse(
    this.x + 112 * scale,
    this.y + 162 * scale,
    (this.width - 96) * scale,
    (this.height - 92) * scale
  );
  ellipse(
    this.x + 120 * scale,
    this.y + 172 * scale,
    (this.width - 96) * scale,
    (this.height - 92) * scale
  );
  ellipse(
    this.x + 112 * scale,
    this.y + 182 * scale,
    (this.width - 96) * scale,
    (this.height - 92) * scale
  );
  pop();

  // camel body
  ellipse(
    this.x + 35 * scale,
    this.y + 255 * scale,
    (this.width + 100) * scale,
    this.height * scale
  );

  // camel legs
  push();
  rotate(radians(sin(rotationAngle) * 0.5));
  ellipse(
    this.x + 100 * scale,
    this.y + 320 * scale,
    (this.width - 90) * scale,
    this.height * scale
  );
  ellipse(
    this.x + 80 * scale,
    this.y + 320 * scale,
    (this.width - 90) * scale,
    this.height * scale
  );
  ellipse(
    this.x - 10 * scale,
    this.y + 320 * scale,
    (this.width - 90) * scale,
    this.height * scale
  );
  ellipse(
    this.x - 30 * scale,
    this.y + 320 * scale,
    (this.width - 90) * scale,
    this.height * scale
  );

  // feet
  fill(129, 88, 67);
  ellipse(
    this.x + 100 * scale,
    this.y + 360 * scale,
    (this.width - 92) * scale,
    (this.height - 80) * scale
  );
  ellipse(
    this.x + 80 * scale,
    this.y + 360 * scale,
    (this.width - 92) * scale,
    (this.height - 80) * scale
  );
  ellipse(
    this.x - 10 * scale,
    this.y + 360 * scale,
    (this.width - 92) * scale,
    (this.height - 80) * scale
  );
  ellipse(
    this.x - 30 * scale,
    this.y + 360 * scale,
    (this.width - 92) * scale,
    (this.height - 80) * scale
  );
  rotationAngle += 0.2;
  pop();

  // camel tail
  ellipse(
    this.x - 65 * scale,
    this.y + 255 * scale,
    (this.width - 50) * scale,
    (this.height - 90) * scale
  );

  // camel blanket
  fill(211, 117, 100);
  ellipse(
    this.x + 30 * scale,
    this.y + 210 * scale,
    (this.width - 50) * scale,
    (this.height + 10) * scale
  );
  ellipse(
    this.x,
    this.y + 220 * scale,
    (this.width - 50) * scale,
    (this.height - 10) * scale
  );
  ellipse(
    this.x + 55 * scale,
    this.y + 220 * scale,
    (this.width - 50) * scale,
    (this.height - 10) * scale
  );

  // stripes on blanket
  ellipse(
    this.x + 70 * scale,
    this.y + 265 * scale,
    (this.width - 96) * scale,
    (this.height - 75) * scale
  );
  ellipse(
    this.x + 60 * scale,
    this.y + 260 * scale,
    (this.width - 96) * scale,
    (this.height - 75) * scale
  );
  ellipse(
    this.x + 50 * scale,
    this.y + 265 * scale,
    (this.width - 96) * scale,
    (this.height - 75) * scale
  );
  ellipse(
    this.x + 40 * scale,
    this.y + 260 * scale,
    (this.width - 96) * scale,
    (this.height - 75) * scale
  );
  ellipse(
    this.x + 30 * scale,
    this.y + 265 * scale,
    (this.width - 96) * scale,
    (this.height - 75) * scale
  );
  ellipse(
    this.x + 20 * scale,
    this.y + 260 * scale,
    (this.width - 96) * scale,
    (this.height - 75) * scale
  );
  ellipse(
    this.x + 10 * scale,
    this.y + 265 * scale,
    (this.width - 96) * scale,
    (this.height - 75) * scale
  );
  ellipse(
    this.x,
    this.y + 260 * scale,
    (this.width - 96) * scale,
    (this.height - 75) * scale
  );
  ellipse(
    this.x - 10 * scale,
    this.y + 265 * scale,
    (this.width - 96) * scale,
    (this.height - 75) * scale
  );

  // dots on blanket
  fill(151, 153, 171);
  ellipse(
    this.x + 70 * scale,
    this.y + 276 * scale,
    (this.width - 93) * scale,
    (this.height - 93) * scale
  );
  ellipse(
    this.x + 60 * scale,
    this.y + 273 * scale,
    (this.width - 93) * scale,
    (this.height - 93) * scale
  );
  ellipse(
    this.x + 50 * scale,
    this.y + 276 * scale,
    (this.width - 93) * scale,
    (this.height - 93) * scale
  );
  ellipse(
    this.x + 40 * scale,
    this.y + 273 * scale,
    (this.width - 93) * scale,
    (this.height - 93) * scale
  );
  ellipse(
    this.x + 30 * scale,
    this.y + 276 * scale,
    (this.width - 93) * scale,
    (this.height - 93) * scale
  );
  ellipse(
    this.x + 20 * scale,
    this.y + 273 * scale,
    (this.width - 93) * scale,
    (this.height - 93) * scale
  );
  ellipse(
    this.x + 10 * scale,
    this.y + 276 * scale,
    (this.width - 93) * scale,
    (this.height - 93) * scale
  );
  ellipse(
    this.x,
    this.y + 273 * scale,
    (this.width - 93) * scale,
    (this.height - 93) * scale
  );
  ellipse(
    this.x - 10 * scale,
    this.y + 276 * scale,
    (this.width - 93) * scale,
    (this.height - 93) * scale
  );

  // eyes
  fill(0, 0, 0);
  ellipse(
    this.x + 172 * scale,
    this.y + 150 * scale,
    (this.width - 80) * scale,
    (this.height - 80) * scale
  );
  fill(219, 165, 119);
  ellipse(
    this.x + 173 * scale,
    this.y + 153 * scale,
    (this.width - 75) * scale,
    (this.height - 80) * scale
  );

  // nose dot
  fill(0, 0, 0);
  ellipse(
    this.x + 196 * scale,
    this.y + 163 * scale,
    (this.width - 96) * scale,
    (this.height - 92) * scale
  );
}

// Setup function to initialize the canvas and draw the elements
function setup() {
  createCanvas(800, 600);
}

// Draw function to render the scene
function draw() {
  background(239, 227, 210);
  dunes(x, y);
  sun();
  waterTank(waterTankX, waterTankY);
  waterDrop(waterDropX, waterDropY);
  cactus.draw();
  sadCamel(camelX, camelY);
  camel.draw();
}

// Call the setup function to initialize the canvas
setup();
