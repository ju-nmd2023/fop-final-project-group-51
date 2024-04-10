function setup() {
  createCanvas(570, 700);
  let canvas = createCanvas(570, 750);
  frameRate(30);
  color = (x, x, x);
}

function setup() {
  var cnv = createCanvas(570, 750);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(255, 0, 200);
}

function grass() {
  push();
  fill(166, 166, 166);
  noStroke();
  fill(0, 128, 0);
  rect(0, 600, width, height);
  fill(88, 57, 39);
  ellipse(270, 620, 210, 40);
  flower(f, r + 160);
  flower(f + 50, r + 180);
  flower(f + 530, r + 170);
  pop();
}

function draw() {
  grass();
}
