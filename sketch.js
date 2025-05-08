let bgImage;
let fullText = "I want to tell you how I feel but I don't really know";
let typedText = "";
let charIndex = 0;
let lastTime = 0;
let typingSpeed = 105;
let offset = 0;
let easing = 0.05;

function preload() {
  bgImage = loadImage("first.jpg"); // Load the background image (first.jpg)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(LEFT, BOTTOM); // Align text to the left-bottom corner
  textFont("pf-scandal"); // Ensure this matches your Typekit font name
}

function draw() {
  // Apply transparency effect to the background image
  let dx = mouseX - bgImage.width / 2 - offset;
  offset += dx * easing;

  // Scale the background image to make it less zoomed in
  let bgWidth = bgImage.width * 0.7;  // Scale down the width of the background image
  let bgHeight = bgImage.height * 0.7;  // Scale down the height of the background image

  // Draw the background image with transparency
  tint(255, 127); // Half opacity for the moving background
  image(bgImage, offset, 0, bgWidth, bgHeight);  // Adjusted scaling

  // Draw the typed text on top of the background image
  let maxFontSize = min(width, height) / 20;  // Reduced font size
  let x = 20;
  let y = height - 20;  // Position the text at the bottom-left corner

  // Hover effect for the text area
  if (isMouseOverText(x, y, 500, 500)) {
    textSize(maxFontSize * 1.05);
    cursor(HAND);
    fill(34, 139, 34); // Forest green color on hover
  } else {
    textSize(maxFontSize);
    cursor(ARROW);
    fill(255); // Default white color when not hovered
  }

  // Handle text typing effect
  if (millis() - lastTime > typingSpeed && charIndex < fullText.length) {
    typedText += fullText.charAt(charIndex);
    charIndex++;
    lastTime = millis();
  }

  // Draw the text
  text(typedText, x, y, width * 0.9);
}

function isMouseOverText(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function mousePressed() {
  let x = 20;
  let y = height - 20;
  let boxWidth = width * 0.9;
  let boxHeight = min(width, height) / 15;

  if (isMouseOverText(x, y - boxHeight, boxWidth, boxHeight)) {
    console.log("✅ Clicked on text — navigating to page2.html");
    window.location.href = "page2.html";
  } else {
    console.log("❌ Clicked outside text area");
  }
}










