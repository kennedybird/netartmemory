let appleImages = [];
let currentImageIndex = 0;
let fullText = "I wish that we were 17 and on the next train home";
let typedText = "";
let charIndex = 0;
let typingSpeed = 110;
let lastTime = 0;
let textX, textY, textWidthVal;

function preload() {
  // Load apple images one by one
  appleImages[0] = loadImage("apple.png");
  appleImages[1] = loadImage("apple_1.png");
  appleImages[2] = loadImage("apple_2.png");
  appleImages[3] = loadImage("apple_3.png");
  appleImages[4] = loadImage("apple_4.png");
  appleImages[5] = loadImage("apple_5.png");
  appleImages[6] = loadImage("apple_6.png");
  appleImages[7] = loadImage("apple_7.png");
  appleImages[8] = loadImage("apple_8.png");

  // Load font if available
  // myFont = loadFont("assets/pf-scandal.ttf"); // Ensure the font file exists and the path is correct
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(24);
  textFont('pf-scandal');
}

function draw() {
  background('#FCFBF4');

  // Draw current apple image
  image(appleImages[currentImageIndex], width / 2, height / 2);

  // Typewriter effect
  if (millis() - lastTime > typingSpeed && charIndex < fullText.length) {
    typedText += fullText.charAt(charIndex);
    charIndex++;
    lastTime = millis();
  }

  // Get the text dimensions and position
  textX = width / 2;
  textY = height - 50;
  textWidthVal = textWidth(typedText); // Get the width of the typed text

  // Check if the mouse is hovering over the text
  if (isMouseOverText(textX - textWidthVal / 2, textY - 12, textWidthVal, 24)) {
    fill(34, 139, 34); // Change text color to forest green on hover
  } else {
    fill(0); // Normal black text color
  }

  text(typedText, textX, textY); // Draw text near bottom
}

function isMouseOverText(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y - h && mouseY < y + h;
}

function mousePressed() {
  currentImageIndex = (currentImageIndex + 1) % appleImages.length;
}

