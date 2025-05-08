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
  textSize(28); // Slightly larger text
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

  // Scale image down to 90% size
  image(bgImage, width / 2, height / 2, drawWidth * 0.9, drawHeight * 0.9);

  // Typewriter effect
  if (millis() - lastTime > typingSpeed && charIndex < fullText.length) {
    typedText += fullText.charAt(charIndex);
    charIndex++;
    lastTime = millis();
  }

  // Get the dimensions of the text
  textX = width / 2;
  textY = height - 50;
  textWidthVal = textWidth(typedText);

  // Check if the mouse is hovering over the text
  if (isMouseOverText(textX - textWidthVal / 2, textY - 12, textWidthVal, 24)) {
    fill(34, 139, 34); // Forest green text color on hover
  } else {
    fill(255); // White text color when not hovered
  }

  text(typedText, textX, textY); // Draw the text
}

function isMouseOverText(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y - h && mouseY < y + h;
}

function mousePressed() {
  let boxWidth = textWidth(typedText);
  let boxHeight = 40;
  let x = width / 2 - boxWidth / 2;
  let y = height - 50 - boxHeight / 2;

  if (isMouseOverText(x, y, boxWidth, boxHeight)) {
    console.log("✅ Clicked on text — navigating to page3.html");
    window.location.href = "page3.html";
  } else {
    console.log("❌ Clicked outside text area");
  }
}





