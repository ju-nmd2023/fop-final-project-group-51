/** @format */

let x = 200;
let y = 200;
let cloudX = 200;
let cloudY = 200;

//sky
background(239, 227, 210);

//dunes
fill(192, 120, 50);
noStroke();
ellipse(x - 100, y + 400, 300);
ellipse(x + 100, y + 420, 200, 200);
ellipse(x + 350, y + 400, 250, 300);

//sand
fill(202, 143, 66);
noStroke();
rect(x - 200, y + 400, 600, 300);

//mud
fill(101, 70, 33);
noStroke();
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

//cactus
fill(102, 124, 40);
rect(x + 196, y + 260, 30, 150, 100);
rect(x + 196, y + 340, 60, 20, 100);
rect(x + 240, y + 320, 20, 40, 100);
rect(x + 170, y + 290, 20, 60, 100);
rect(x + 170, y + 330, 50, 20, 100);

fill(10, 64, 40);
rect(x - 100, y + 300, 30, 110, 100);
rect(x - 100, y + 340, 60, 20, 100);
rect(x - 60, y + 320, 20, 40, 100);
rect(x - 130, y + 320, 20, 60, 100);
rect(x - 130, y + 360, 50, 20, 100);

fill(10, 64, 40);
rect(x - 100, y + 300, 30, 110, 100);
rect(x - 100, y + 340, 60, 20, 100);
rect(x - 60, y + 320, 20, 40, 100);
rect(x - 130, y + 320, 20, 60, 100);
rect(x - 130, y + 360, 50, 20, 100);

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

//sun
fill(250, 210, 160);
ellipse(x - 90, y - 50, 140);
fill(251, 140, 26);
ellipse(x - 90, y - 50, 100);

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

  //blanket accessories stripes
  for (let i = 0; i < 9; i++) {
    ellipse(
      camelX + (70 - 10 * i) * scale,
      camelY + (265 - 5 * i) * scale,
      4 * scale,
      25 * scale
    );
  }

  //blanket accessories dots
  fill(151, 153, 171);
  for (let i = 0; i < 9; i++) {
    ellipse(
      camelX + (70 - 10 * i) * scale,
      camelY + (276 - 3 * i) * scale,
      7 * scale,
      7 * scale
    );
  }

  //hair
  push();
  rotate(radians(30));
  fill(129, 88, 67);
  ellipse(camelX + 220 * scale, camelY - 25 * scale, 5 * scale, 25 * scale);
  pop();

  push();
  rotate(radians(10));
  fill(129, 88, 67);
  ellipse(camelX + 180 * scale, camelY + 80 * scale, 5 * scale, 25 * scale);
  pop();

  push();
  rotate(radians(-10));
  fill(129, 88, 67);
  ellipse(camelX + 107 * scale, camelY + 166 * scale, 5 * scale, 25 * scale);
  pop();

  push();
  rotate(radians(-30));
  fill(129, 88, 67);
  ellipse(camelX + 8 * scale, camelY + 223 * scale, 5 * scale, 25 * scale);
  pop();

  push();
  rotate(radians(-60));
  fill(129, 88, 67);
  ellipse(camelX - 162 * scale, camelY + 234 * scale, 5 * scale, 25 * scale);
  pop();

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
  camel(100, 400, 0.6); // Adjust the scale factor as needed (here, 0.5 to scale down by half)
}
