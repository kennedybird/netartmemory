let bgImage;
let fullText = "I do not want to hurt you but I'm scared it's in my bones";
let typedText = "";
let charIndex = 0;
let lastTime = 0;
let typingSpeed = 110;
let imgAspect;

function preload() {
  bgImage = loadImage("fourth.jpg", img => {
    imgAspect = img.width / img.height;
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textFont('pf-scandal');
  textSize(50); // Larger text
  imageMode(CENTER);
}

function draw() {
  background('white');

  // Resize background image proportionally
  let drawWidth = width;
  let drawHeight = width / imgAspect;

  image(bgImage, width / 2, height / 2, drawWidth, drawHeight);

  // Typewriter effect
  if (millis() - lastTime > typingSpeed && charIndex < fullText.length) {
    typedText += fullText.charAt(charIndex);
    charIndex++;
    lastTime = millis();
  }

  fill(0);
  text(typedText, width / 2, height - 40); // Positioned near bottom
}


