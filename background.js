/** @format */

let x = 200;
let y = 200;

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
