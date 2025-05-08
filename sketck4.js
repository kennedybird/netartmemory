let bgImage;
let fullText = "I do not want to hurt you\nbut I'm scared it's in my bones";
let typedText = "";
let charIndex = 0;
let lastTime = 0;
let typingSpeed = 110; // milliseconds between characters
let imgAspect;

function preload() {
  bgImage = loadImage("fourth.jpg", img => {
    imgAspect = img.width / img.height;
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight); // Fullscreen canvas
  textAlign(CENTER, CENTER);
  textFont('pf-scandal');
  textSize(22); // Smaller text size like your other code
  imageMode(CENTER);
}

function draw() {
  background('#FDF7E3'); // Slightly warmer cream background

  // Calculate proportional image size based on full canvas width
  let drawWidth = width;
  let drawHeight = width / imgAspect;

  image(bgImage, width / 2, height / 2, drawWidth, drawHeight);

  // Typing effect
  if (millis() - lastTime > typingSpeed && charIndex < fullText.length) {
    typedText += fullText.charAt(charIndex);
    charIndex++;
    lastTime = millis();
  }

  fill(0); // Black text
  text(typedText, width / 2, height - 50);
}

