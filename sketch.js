let bgImg;
let circleImg;
let xspeed = 4;
let xpos = 0;

function preload() {
  bgImg = loadImage('background.jpg');
  circleImg = loadImage('circle.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  image(bgImg, 0, 0); 

  image(circleImg, xpos, height / 2 - circleImg.height / 2);

  if (xpos > width - circleImg.width || xpos < 0) {
    xspeed *= -1;
  }

  xpos += xspeed;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

