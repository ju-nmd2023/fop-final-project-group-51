/** @format */
/** @format */

let x = 200;
let y = 200;
let cloudX = 200;
let cloudY = 200;
let sunX = 200;
let sunY = 200;
let bubbles = [];

function dunes(x, y) {
  //sky
  background(246, 227, 210);

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

  //cactus
  fill(102, 124, 40);
  rect(x + 196, y + 260, 30, 150, 100);
  rect(x + 196, y + 340, 60, 20, 100);
  rect(x + 240, y + 320, 20, 40, 100);
  rect(x + 170, y + 290, 20, 60, 100);
  rect(x + 170, y + 330, 50, 20, 100);

  fill(10, 64, 40);
  rect(x + 496, y + 260, 30, 150, 100);
  rect(x + 496, y + 340, 60, 20, 100);
  rect(x + 540, y + 320, 20, 40, 100);
  rect(x + 470, y + 290, 20, 60, 100);
  rect(x + 470, y + 330, 50, 20, 100);

  fill(10, 64, 40);
  rect(x - 100, y + 300, 30, 110, 100);
  rect(x - 100, y + 340, 60, 20, 100);
  rect(x - 60, y + 320, 20, 40, 100);
  rect(x - 130, y + 320, 20, 60, 100);
  rect(x - 130, y + 360, 50, 20, 100);
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

let camelX = 240;
let camelY = 285;

//position camel
function camel(camelX, camelY) {
  //camel head
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

  //camel body
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
  fill(0, 0, 0);
  ellipse(camelX + 116, camelY + 163, 4, 8);
  fill(0, 0, 0);
  ellipse(camelX + 134, camelY + 163, 4, 8);

  //feets
  fill(129, 88, 67);
  ellipse(camelX + 100, camelY + 360, 8, 20);
  ellipse(camelX + 80, camelY + 360, 8, 20);

  ellipse(camelX - 10, camelY + 360, 8, 20);
  ellipse(camelX - 30, camelY + 360, 8, 20);
}

function loseScreen() {
  dunes(x, y);
  camel(camelX, camelY, scale);
  sun();
  textSize(50);
  fill(231, 56, 56);
  text("YOU LOSE", 150, 300);
  textSize(30);
  fill(231, 56, 56);
  text("Click to restart", 180, 340);
}

//Generate Bubbles
for (let i = 0; i < 100; i++) {
  const bubble = {
    x: Math.floor(Math.random() * 700),
    y: Math.floor(Math.random() * 900),
    circle: Math.random() * 10,
    alpha: Math.random(),
  };
  bubbles.push(bubble);
}

function draw() {
  loseScreen();
  for (let bubble of bubbles) {
    fill(231, 56, 56, Math.abs(Math.sin(bubble.alpha)) * 455);
    ellipse(bubble.x, bubble.y, 20);
    bubble.y += bubble.circle;
    if (bubble.y > height) {
      bubble.y = 0;
    }
  }
}
