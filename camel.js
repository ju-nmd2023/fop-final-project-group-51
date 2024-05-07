/** @format */

let camelX = 100;
let camelY = 100;

//start position camel

function camel(camelX, camelY) {
  //camel head
  fill(219, 165, 119);
  ellipse(camelX + 150, camelY + 150, 80, 80);

  //camel nose
  noStroke();
  fill(219, 165, 119);
  ellipse(camelX + 175, camelY + 162, 60, 60);

  //camel ears
  fill(219, 165, 119);
  ellipse(camelX + 155, camelY + 110, 10, 70);

  ellipse(camelX + 128, camelY + 120, 10, 70);

  //camel neck
  ellipse(camelX + 123, camelY + 200, 40, 150);

  //neck dots
  push();
  fill(223, 204, 183);
  ellipse(camelX + 120, camelY + 152, 4, 8);
  ellipse(camelX + 112, camelY + 162, 4, 8);
  ellipse(camelX + 120, camelY + 172, 4, 8);
  ellipse(camelX + 112, camelY + 182, 4, 8);
  pop();

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

  //eyes
  fill(0, 0, 0);
  ellipse(camelX + 172, camelY + 150, 20, 20);
  fill(219, 165, 119);
  ellipse(camelX + 173, camelY + 153, 25, 20);

  //nose dot
  fill(0, 0, 0);
  ellipse(camelX + 196, camelY + 163, 4, 8);

  //feets
  fill(129, 88, 67);
  ellipse(camelX + 100, camelY + 360, 8, 20);
  ellipse(camelX + 80, camelY + 360, 8, 20);

  ellipse(camelX - 10, camelY + 360, 8, 20);
  ellipse(camelX - 30, camelY + 360, 8, 20);
}

function draw() {
  camel(100, 100);
}
