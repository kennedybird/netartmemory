let appleImages = [];
let currentImageIndex = 0;
let fullText = "I wish that we were 17 and on the next train home";
let typedText = "";
let charIndex = 0;
let typingSpeed = 110;
let lastTime = 0;

function preload() {
  // Load apple images
  for (let i = 0; i < 9; i++) {
    appleImages[i] = loadImage(`apple_${i}.png`);
  }

  // Optional: log to make sure all images loaded
  console.log("✅ Apple images loaded:", appleImages.length);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(24);
  textFont('pf-scandal'); // Ensure font is correctly linked in HTML or CSS
}

function draw() {
  background('white');

  // Draw current apple image
  image(appleImages[currentImageIndex], width / 2, height / 2);

  // Typewriter effect
  if (millis() - lastTime > typingSpeed && charIndex < fullText.length) {
    typedText += fullText.charAt(charIndex);
    charIndex++;
    lastTime = millis();
  }

  fill(0); // Black text
  text(typedText, width / 2, height - 50); // Draw text near bottom
}

function mousePressed() {
  if (currentImageIndex < appleImages.length - 1) {
    currentImageIndex++;
  } else {
    // When last image is shown and clicked, go to Page 4
    window.location.href = "https://kennedybird.github.io/netartmemory/page4.html";
  }
}



