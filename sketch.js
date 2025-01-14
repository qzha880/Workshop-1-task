function setup() {
  createCanvas(600, 600);
  background(50);
  x = 0;
  for (x = 0; x < 5 - random(0, 3); x++) {
    Zombie(random(0, width - 80), random(0, height - 80), 80, color(108, 148, 87));
  }
 
    for (x = 0; x < 3 - random(0, 3); x++) {
    Skeleton(random(0, width - 80), random(0, height - 80), 80, color(221));
  }
 
      for (x = 0; x < 2 - random(0, 3); x++) {
    Creeper(random(0, width - 80), random(0, height - 80), 80, color(13, 181, 13));
  }
}

function draw() {
}

function Zombie(x, y, stories, colour) {
  fill(colour);
  noStroke();
  square(x, y, 80);
  fill(0);
  rect(x + 10, y + 40, 20, 10);
  rect(x + 50, y + 40, 20, 10);
  fill(39, 78, 19);
  rect(x + 30, y + 50, 20, 10);
  fill(79,119,52);
  rect(x, y, 80, 20);
  square(x, y + 20, 10);
  rect(x, y + 60, 80, 20);
  square(x, y + 50, 10);
  square(x + 70, y + 50, 10);
}

function Skeleton(x, y, stories, colour) {
  fill(colour);
  noStroke();
  square(x, y, 80);
  fill(80);
  rect(x + 10, y + 40, 20, 10);
  rect(x + 50, y + 40, 20, 10);
  rect(x + 10, y + 60, 60, 10);
  fill(134);
  rect(x + 30, y + 50, 20, 10);
  fill(134);
  rect(x, y, 80, 10);
  rect(x, y + 10, 40, 10);
  rect(x + 60, y + 10, 20, 10);
  square(x, y + 20, 10);
  rect(x, y + 70, 80, 10);
  rect(x + 70, y + 50, 10, 20);
  fill(169);
  rect(x, y + 50, 10, 20);
}

function Creeper(x, y, stories, colour) {
  fill(colour);
  noStroke();
  square(x, y, 80);
  fill(0,69,0);
  square(x + 10, y + 20, 20);
  square(x + 50, y + 20, 20);
  rect(x + 30, y + 40, 20, 10);
  rect(x + 20, y + 50, 10, 30);
  rect(x + 50, y + 50, 10, 30);
  fill(0);
  square(x + 20, y + 30, 10);
  square(x + 50, y + 30, 10);
  rect(x + 30, y + 50, 20, 10);
  rect(x + 20, y + 60, 40, 10);
  fill(143,227,143);
  square(x , y, 10);
  rect(x + 30, y, 40, 10);
  square(x + 50 , y + 10, 10);
  square(x + 30 , y + 20, 10);
  rect(x + 70, y + 10, 10, 30);
  rect(x, y + 40, 10, 30);
  square(x + 10 , y + 70, 10);
  square(x + 50 , y + 40, 10);
  square(x + 70 , y + 50, 10);
}