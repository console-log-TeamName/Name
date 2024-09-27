//Creating different starting positions for the bubbles
let bubbleYPos1 = 200;
let bubbleYPos2 = 400;
let bubbleYPos3 = 600;
let bubbleYPos4 = 800;
let bubbleYPos5 = 1000;
let bubbleYPos6 = 1200;
let bubbleYPos7 = 1400;
let bubbleYPos8 = 1600;
let bubbleYPos9 = 1800;
let bubbleYPos10 = 2000;

function setup() {
createCanvas(500, 400);

//setting the frame rate to 12 as discussed with the group
frameRate (12);
}

function draw() {
  background(128, 128, 0);

//Creating the loops that will draw bubbles and animate them to move on screen
  let bubbleXPos = -251;
  for (let i=0; i < 10; i++) {
    drawSmallBubble (bubbleXPos, bubbleYPos1);
    bubbleYPos1 --;
    bubbleXPos += 100;
  }

  bubbleXPos = -34;
  for (let i=0; i <10; i++) {
    drawSmallBubble (bubbleXPos, bubbleYPos2);
    bubbleYPos2 --;
    bubbleXPos += 117;
}

  bubbleXPos = -182;
  for (let i=0; i < 10; i++) {
    drawSmallBubble (bubbleXPos, bubbleYPos3);
    bubbleYPos3 --;
    bubbleXPos += 89;
}

  bubbleXPos = -28;
  for (let i=0; i < 10; i++) {
    drawSmallBubble (bubbleXPos, bubbleYPos4);
    bubbleYPos4 --;
    bubbleXPos += 60;
}

  bubbleXPos = -221;
  for (let i=0; i < 10; i++) {
    drawSmallBubble (bubbleXPos, bubbleYPos5);
    bubbleYPos5 --;
    bubbleXPos += 124;
}

  bubbleXPos = -200;
  for (let i=0; i < 10; i++) {
    drawSmallBubble (bubbleXPos, bubbleYPos6);
    bubbleYPos6 --;
    bubbleXPos += 140;
}

  bubbleXPos = -180;
  for (let i=0; i < 10; i++) {
    drawSmallBubble (bubbleXPos, bubbleYPos7);
    bubbleYPos7 --;
    bubbleXPos += 180;
}

  bubbleXPos = -120;
  for (let i=0; i < 10; i++) {
    drawSmallBubble (bubbleXPos, bubbleYPos8);
    bubbleYPos8 --;
    bubbleXPos += 188;
}

  bubbleXPos = -80;
  for (let i=0; i < 10; i++) {
    drawSmallBubble (bubbleXPos, bubbleYPos9);
    bubbleYPos9 --;
    bubbleXPos += 210;
}

  bubbleXPos = -210;
  for (let i=0; i < 10; i++) {
    drawSmallBubble (bubbleXPos, bubbleYPos10);
    bubbleYPos10 --;
    bubbleXPos += 240;
}

//Drawing the large bubbles using the same for loop method
bubbleXPos = -190;
for (let i = 0; i < 10; i++) {
  drawLargeBubble (bubbleXPos, bubbleYPos1);
  bubbleYPos1 --;
  bubbleXPos += 280;
}

bubbleXPos = -190;
for (let i = 0; i < 10; i++) {
  drawLargeBubble (bubbleXPos, bubbleYPos2);
  bubbleYPos2 --;
  bubbleXPos += 83;
}

bubbleXPos = -190;
for (let i = 0; i < 10; i++) {
  drawLargeBubble (bubbleXPos, bubbleYPos3);
  bubbleYPos3 --;
  bubbleXPos += 142;
}

bubbleXPos = -190;
for (let i = 0; i < 10; i++) {
  drawLargeBubble (bubbleXPos, bubbleYPos4);
  bubbleYPos4 --;
  bubbleXPos += 56;
}

bubbleXPos = -190;
for (let i = 0; i < 10; i++) {
  drawLargeBubble (bubbleXPos, bubbleYPos5);
  bubbleYPos5 --;
  bubbleXPos += 190;
}

bubbleXPos = -190;
for (let i = 0; i < 10; i++) {
  drawLargeBubble (bubbleXPos, bubbleYPos6);
  bubbleYPos6 --;
  bubbleXPos += 190;
}

bubbleXPos = -190;
for (let i = 0; i < 10; i++) {
  drawLargeBubble (bubbleXPos, bubbleYPos7);
  bubbleYPos7 --;
  bubbleXPos += 190;
}

bubbleXPos = -190;
for (let i = 0; i < 10; i++) {
  drawLargeBubble (bubbleXPos, bubbleYPos8);
  bubbleYPos8 --;
  bubbleXPos += 190;
}

bubbleXPos = -190;
for (let i = 0; i < 10; i++) {
  drawLargeBubble (bubbleXPos, bubbleYPos9);
  bubbleYPos9 --;
  bubbleXPos += 190;
}

bubbleXPos = -190;
for (let i = 0; i < 10; i++) {
  drawLargeBubble (bubbleXPos, bubbleYPos10);
  bubbleYPos10 --;
  bubbleXPos += 190;
}

//Drawing sick fish on screen
drawFish (150, -100, 73,121,107);
drawFish (-100, 210, 73,121,107);
drawFish (200, 140, 73,121,107);

//Creating and drawing trash on screen
let trash1PosX = -200;
let trash1PosY = -140;

trash1PosX = -120;
trash1PosY = -140;
drawTrash (trash1PosX, trash1PosY)

let trash2PosX = -230;
let trash2PosY = -100;
drawTrash (130, -111);


let trash3PosX = 40;
let trash3PosY = 80;
drawTrash (trash3PosX, trash3PosY);

}
