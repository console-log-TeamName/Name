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

let fishX = 0;

function setup() {
createCanvas(500, 400);
//setting the frame rate to 12 as discussed with the group
frameRate (12);
}

function draw() {
background(0,206,209);

//Creating the loops that will draw bubbles and animate them to move on screen
let bubbleXPos = -251;
for (let i=0; i < 10; i++) {
    drawHealthySmallBubble (bubbleXPos, bubbleYPos1);
    bubbleYPos1 --;
    bubbleXPos += 100;
}

bubbleXPos = -34;
for (let i=0; i <10; i++) {
    drawHealthySmallBubble (bubbleXPos, bubbleYPos2);
    bubbleYPos2 --;
    bubbleXPos += 117;
}

bubbleXPos = -182;
for (let i=0; i < 10; i++) {
    drawHealthySmallBubble (bubbleXPos, bubbleYPos3);
    bubbleYPos3 --;
    bubbleXPos += 89;
}

bubbleXPos = -28;
for (let i=0; i < 10; i++) {
    drawHealthySmallBubble (bubbleXPos, bubbleYPos4);
    bubbleYPos4 --;
    bubbleXPos += 60;
}

bubbleXPos = -221;
for (let i=0; i < 10; i++) {
    drawHealthySmallBubble (bubbleXPos, bubbleYPos5);
    bubbleYPos5 --;
    bubbleXPos += 124;
}

bubbleXPos = -200;
for (let i=0; i < 10; i++) {
    drawHealthySmallBubble (bubbleXPos, bubbleYPos6);
    bubbleYPos6 --;
    bubbleXPos += 140;
}

bubbleXPos = -180;
for (let i=0; i < 10; i++) {
    drawHealthySmallBubble (bubbleXPos, bubbleYPos7);
    bubbleYPos7 --;
    bubbleXPos += 180;
}

bubbleXPos = -120;
for (let i=0; i < 10; i++) {
    drawHealthySmallBubble (bubbleXPos, bubbleYPos8);
    bubbleYPos8 --;
    bubbleXPos += 188;
}

bubbleXPos = -80;
for (let i=0; i < 10; i++) {
    drawHealthySmallBubble (bubbleXPos, bubbleYPos9);
    bubbleYPos9 --;
    bubbleXPos += 210;
}

bubbleXPos = -210;
for (let i=0; i < 10; i++) {
    drawHealthySmallBubble (bubbleXPos, bubbleYPos10);
    bubbleYPos10 --;
    bubbleXPos += 240;
}

//Drawing the large bubbles using the same for loop method
bubbleXPos = -190;
for (let i = 0; i < 10; i++) {
    drawHealthyLargeBubble (bubbleXPos, bubbleYPos1);
    bubbleYPos1 --;
    bubbleXPos += 280;
}

bubbleXPos = -190;
for (let i = 0; i < 10; i++) {
    drawHealthyLargeBubble (bubbleXPos, bubbleYPos2);
    bubbleYPos2 --;
    bubbleXPos += 83;
}

bubbleXPos = -190;
for (let i = 0; i < 10; i++) {
    drawHealthyLargeBubble (bubbleXPos, bubbleYPos3);
    bubbleYPos3 --;
    bubbleXPos += 142;
}

bubbleXPos = -190;
for (let i = 0; i < 10; i++) {
    drawHealthyLargeBubble (bubbleXPos, bubbleYPos4);
    bubbleYPos4 --;
    bubbleXPos += 56;
}

bubbleXPos = -190;
for (let i = 0; i < 10; i++) {
    drawHealthyLargeBubble (bubbleXPos, bubbleYPos5);
    bubbleYPos5 --;
    bubbleXPos += 190;
}

bubbleXPos = -190;
for (let i = 0; i < 10; i++) {
    drawHealthyLargeBubble (bubbleXPos, bubbleYPos6);
    bubbleYPos6 --;
    bubbleXPos += 190;
}

bubbleXPos = -190;
for (let i = 0; i < 10; i++) {
    drawHealthyLargeBubble (bubbleXPos, bubbleYPos7);
    bubbleYPos7 --;
    bubbleXPos += 190;
}

bubbleXPos = -190;
for (let i = 0; i < 10; i++) {
    drawHealthyLargeBubble (bubbleXPos, bubbleYPos8);
    bubbleYPos8 --;
    bubbleXPos += 190;
}

bubbleXPos = -190;
for (let i = 0; i < 10; i++) {
    drawHealthyLargeBubble (bubbleXPos, bubbleYPos9);
    bubbleYPos9 --;
    bubbleXPos += 190;
}

bubbleXPos = -190;
for (let i = 0; i < 10; i++) {
    drawHealthyLargeBubble (bubbleXPos, bubbleYPos10);
    bubbleYPos10 --;
    bubbleXPos += 190;
}


drawFish (150, -100, 255,196,12);
drawFish (-100, 210, 147,112,219);
drawFish (200, 140, 250,128,114);

function drawFish (x, y, color) {
    fishX ++;
    translate (x, y);
    beginShape ();
    fill (color);
    vertex (150 + fishX, 150);
    vertex (125 + fishX, 125);
    vertex (120 + fishX, 170);
    bezierVertex (175 + fishX, 105, 200 + fishX, 120, 225 + fishX, 150);
    bezierVertex (225 + fishX, 150, 200 + fishX, 180, 162 + fishX, 160);
    endShape (CLOSE);
    translate (-x, -y);
}

// drawFish();
}