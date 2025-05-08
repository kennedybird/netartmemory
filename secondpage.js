let font; 
let bgImage;
let fullText = "I want to eat my dinner without feeling like I'll grow ";
let typedText = "";
let charIndex = 0;
let lastTime = 0;
let typingSpeed = 100; // milliseconds between characters

function preload() {
  bgImage = loadImage("star.jpg"); // Make sure star.jpg is in your project folder
}

function setup() {
  createCanvas(400, 400);
  textSize(24);
  fill(255);
}

function draw() {
  background(bgImage);

  // Typing effect
  if (millis() - lastTime > typingSpeed && charIndex < fullText.length) {
    typedText += fullText.charAt(charIndex);
    charIndex++;
    lastTime = millis();
  }

  textFont(''); 
  text(typedText, 20, height / 2);
}
