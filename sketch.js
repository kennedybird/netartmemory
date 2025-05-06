let bgImg;      // background image
let circleImg;  // image to replace the circle
let xspeed = 4;
let xpos = 0;

function preload() {
  bgImg = loadImage('background.jpg'); // load background image
  circleImg = loadImage('circle.png'); // load circle image
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(bgImg); // display background image

  // draw the circle image, centered vertically
  image(circleImg, xpos, height / 2 - circleImg.height / 2);

  // bounce logic
  if (xpos > width - circleImg.width || xpos < 0) {
    xspeed *= -1;
  }

  xpos += xspeed;
}
