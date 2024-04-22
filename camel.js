let camelX = 100;
let camelY = 100;

//start position camel

//camel head
fill(219, 165, 119);
ellipse(camelX + 150, camelY + 150, camelX - 20, camelY - 20);

//camel nose
noStroke();
fill(219, 165, 119);
ellipse(camelX + 175, camelY + 162, camelX - 40, camelY - 40);

//camel ears
fill(219, 165, 119);
ellipse(camelX + 155, camelY + 110, camelX - 90, camelY - 30);

ellipse(camelX + 128, camelY + 120, camelX - 90, camelY - 30);

//camel neck
ellipse(camelX + 123, camelY + 200, camelX - 60, camelY - 250);

//neck dots
push();
fill(223, 204, 183);
ellipse(camelX + 120, camelY + 152, camelX - 96, camelY - 92);
ellipse(camelX + 112, camelY + 162, camelX - 96, camelY - 92);
ellipse(camelX + 120, camelY + 172, camelX - 96, camelY - 92);
ellipse(camelX + 112, camelY + 182, camelX - 96, camelY - 92);
pop();

//camel body
ellipse(camelX + 35, camelY + 255, camelX - 300, camelY - 0);

//camel legs
ellipse(camelX + 100, camelY + 320, camelX - 90, camelY - 0);
ellipse(camelX + 80, camelY + 320, camelX - 90, camelY - 0);

ellipse(camelX - 10, camelY + 320, camelX - 90, camelY - 0);
ellipse(camelX - 30, camelY + 320, camelX - 90, camelY - 0);

//camel tail
ellipse(camelX - 65, camelY + 255, camelX - 50, camelY - 110);

//camel blanket
fill(211, 117, 100);
ellipse(camelX + 30, camelY + 210, camelX - 50, camelY + 10);

ellipse(camelX + 0, camelY + 220, camelX - 50, camelY - 10);
ellipse(camelX + 55, camelY + 220, camelX - 50, camelY - 10);

//blanket accessories stripes
ellipse(camelX + 70, camelY + 265, camelX - 96, camelY - 75);
ellipse(camelX + 60, camelY + 260, camelX - 96, camelY - 75);
ellipse(camelX + 50, camelY + 265, camelX - 96, camelY - 75);
ellipse(camelX + 40, camelY + 260, camelX - 96, camelY - 75);
ellipse(camelX + 30, camelY + 265, camelX - 96, camelY - 75);
ellipse(camelX + 20, camelY + 260, camelX - 96, camelY - 75);
ellipse(camelX + 10, camelY + 265, camelX - 96, camelY - 75);
ellipse(camelX + 0, camelY + 260, camelX - 96, camelY - 75);
ellipse(camelX - 10, camelY + 265, camelX - 96, camelY - 75);

//blanket accessories dots
fill(151, 153, 171);
ellipse(camelX + 70, camelY + 276, camelX - 93, camelY - 93);
ellipse(camelX + 60, camelY + 273, camelX - 93, camelY - 93);
ellipse(camelX + 50, camelY + 276, camelX - 93, camelY - 93);
ellipse(camelX + 40, camelY + 273, camelX - 93, camelY - 93);
ellipse(camelX + 30, camelY + 276, camelX - 93, camelY - 93);
ellipse(camelX + 20, camelY + 273, camelX - 93, camelY - 93);
ellipse(camelX + 10, camelY + 276, camelX - 93, camelY - 93);
ellipse(camelX + 0, camelY + 273, camelX - 93, camelY - 93);
ellipse(camelX - 10, camelY + 276, camelX - 93, camelY - 93);

//hair
push();
rotate(radians(30));
fill(129, 88, 67);
ellipse(camelX + 220, camelY - 25, camelX - 95, camelY - 75);
pop();

push();
rotate(radians(10));
fill(129, 88, 67);
ellipse(camelX + 180, camelY + 80, camelX - 95, camelY - 75);
pop();

push();
rotate(radians(-10));
fill(129, 88, 67);
ellipse(camelX + 107, camelY + 166, camelX - 95, camelY - 75);
pop();

push();
rotate(radians(-30));
fill(129, 88, 67);
ellipse(camelX + 8, camelY + 223, camelX - 95, camelY - 75);
pop();

push();
rotate(radians(-60));
fill(129, 88, 67);
ellipse(camelX - 162, camelY + 234, camelX - 95, camelY - 75);
pop();

//eyes
fill(0, 0, 0);
ellipse(camelX + 172, camelY + 150, camelX - 80, camelY - 80);
fill(219, 165, 119);
ellipse(camelX + 173, camelY + 153, camelX - 75, camelY - 80);

//nose dot
fill(0, 0, 0);
ellipse(camelX + 196, camelY + 163, camelX - 96, camelY - 92);

//feets
fill(129, 88, 67);
ellipse(camelX + 100, camelY + 360, camelX - 92, camelY - 80);
ellipse(camelX + 80, camelY + 360, camelX - 92, camelY - 80);

ellipse(camelX - 10, camelY + 360, camelX - 92, camelY - 80);
ellipse(camelX - 30, camelY + 360, camelX - 92, camelY - 80);
