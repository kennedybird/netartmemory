let bgImage;
let fullText = "I want to eat my dinner without feeling like I'd grow!";
let typedText = "";
let charIndex = 0;
let lastTime = 0;
let typingSpeed = 100; // milliseconds between characters

function preload() {
  bgImage = loadImage("star.jpg"); // Make sure star.jpg is in your project folder
}

function setup() {
  createCanvas(windowWidth, windowHeight); // Make the canvas full screen
  textAlign(CENTER, CENTER); // Center text horizontally and vertically
}

function draw() {
  background(bgImage);

  let maxFontSize = min(width, height) / 15; // Adjust 15 to control max text size
  textSize(maxFontSize);

  // Typing effect
  if (millis() - lastTime > typingSpeed && charIndex < fullText.length) {
    typedText += fullText.charAt(charIndex);
    charIndex++;
    lastTime = millis();
  }

  textFont('pf-scandal'); 
  text(typedText, width / 3, height / 3, 500, 500); 
}


