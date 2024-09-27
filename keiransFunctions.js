// Creating the function that will draw a fish, the user inputs the x and y coordinates to translate the position so multiple fish can be drawn, the also choose the color the fish will be filled to add some differentiation.
function drawFish (x, y, color) {
    translate (x, y);
    beginShape ();
    fill (color);
    vertex (150, 150);
    vertex (125, 125);
    vertex (125, 170);
    bezierVertex (175, 105, 200, 120, 225, 150);
    bezierVertex (225, 150, 200, 180, 162, 160);
    endShape (CLOSE);
    translate (-x, -y);
}

// Creating the functions to draw trash in the animation, and fills it brown
function drawTrash (x, y) {
    translate (x, y);
    beginShape ();
    fill (128, 128, 128);
    vertex (200, 200);
    vertex (225, 225);
    vertex (215, 230);
    vertex (230, 250);
    vertex (220, 270);
    vertex (200, 270);
    vertex (175, 285);
    vertex (170, 270);
    vertex (140, 250);
    vertex (160, 230);
    vertex (160, 200);
    endShape (CLOSE);
    translate (-x, -y);
}

// Creating functions to draw small and large bubbles 
function drawSmallBubble (x, y) {
    translate (x, y);
    fill (85, 107, 47);
    circle (200, 200, 10);
    fill ("white");
    circle (201, 199, 3);
    translate (-x, -y);
}

function drawHealthySmallBubble (x, y) {
    translate (x, y);
    fill (231,254,255);
    circle (200, 200, 10);
    fill ("white");
    circle (201, 199, 3);
    translate (-x, -y);
}

function drawLargeBubble (x, y) {
    translate (x, y);
    fill (85, 107, 47);
    circle (200, 200, 15);
    fill ("white");
    circle (203, 197, 3)
    translate (-x, -y);
}

function drawHealthyLargeBubble (x, y) {
    translate (x, y);
    fill (231,254,255);
    circle (200, 200, 15);
    fill ("white");
    circle (203, 197, 3)
    translate (-x, -y);
}