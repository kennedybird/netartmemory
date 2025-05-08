let bgImage;
let fullText = "I want to eat my dinner without feeling like I'd grow";
let typedText = "";
let charIndex = 0;
let lastTime = 0;
let typingSpeed = 110;
let imgAspect;
let textX, textY, textWidthVal;

function preload() {
  bgImage = loadImage("second.jpg", img => {
    imgAspect = img.width / img.height;
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textFont('pf-scandal');
  textSize(28);
  imageMode(CENTER);
}

function draw() {
  background('#FCFBF4'); // Cream background

  // Calculate proportional image size
  let canvasAspect = width / height;
  let drawWidth, drawHeight;

  if (canvasAspect > imgAspect) {
    drawWidth = width;
    drawHeight = width / imgAspect;
  } else {
    drawHeight = height;
    drawWidth = height * imgAspect;
  }

  // Draw background image at 60% scale
  let scaleFactor = 0.6;
  image(bgImage, width / 2, height / 2, drawWidth * scaleFactor, drawHeight * scaleFactor);

  // Typewriter effect
  if (millis() - lastTime > typingSpeed && charIndex < fullText.length) {
    typedText += fullText.charAt(charIndex);
    charIndex++;
    lastTime = millis();
  }

  // Get the dimensions of the text
  textX = width / 2;
  textY = height - 30;
  textWidthVal = textWidth(typedText);

  // Hover effect
  if (isMouseOverText(textX - textWidthVal / 2, textY - 12, textWidthVal, 24)) {
    fill(34, 139, 34); // Forest green
    cursor(HAND);
  } else {
    fill(0); // Black text
    cursor(ARROW);
  }

  text(typedText, textX, textY);
}

function isMouseOverText(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y - h && mouseY < y + h;
}

function mousePressed() {
  let boxWidth = textWidth(typedText);
  let boxHeight = 40;
  let x = width / 2 - boxWidth / 2;
  let y = height - 50 - boxHeight / 2;

  // Check if the click was inside the bounds of the text box
  if (isMouseOverText(x, y, boxWidth, boxHeight)) {
    console.log("✅ Clicked on text — navigating to page3.html");

    // Use the correct file path to your next page
    window.location.href = "page3.html"; // Ensure page3.html exists in the same folder
  } else {
    console.log("❌ Clicked outside text area");
  }
}





