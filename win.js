/** @format */
/** @format */

let x = 200;
let y = 200;
let cloudX = 200;
let cloudY = 200;
let sunX = 200;
let sunY = 200;

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

let stars = [];

//CONFETTI FUNCTION
for (let i = 0; i < 100; i++) {
  const star = {
    x: Math.floor(Math.random() * 570),
    y: Math.floor(Math.random() * 400),
    snow: Math.random() * 2,
    alpha: Math.random(),
  };
  stars.push(star);
}

function winScreen() {
  dunes(x, y);
  camel(camelX, camelY, scale);
  sun();
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

function draw() {
  winScreen();
  camel(camelX + 90, camelY + 200, 1); //scale down the camel
  waterTank(waterTankX + 170, waterTankY + 400);
}