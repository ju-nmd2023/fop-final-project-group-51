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
