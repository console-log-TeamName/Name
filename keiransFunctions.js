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
function drawTrashOne (x, y) {
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

function drawTrashTwo (x, y) {
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
}

function drawTurtle (x, y) {
    translate (x, y);
    fill (139, 69, 19);
    stroke ("black");
    // drawing the turtle shell
    ellipse (200, 200, 55, 35);
    stroke (253, 253, 150);
    // center yellow lines
    line (173, 200, 227, 200);
    line (200, 183, 200, 217);
    // Left yellow lines
    line (190, 185, 190, 215);
    line (180, 189, 180, 211);
    // Right yellow lines
    line (210, 185, 210, 215);
    line (220, 189, 220, 211);
    // turtle head
    fill ("green");
    stroke ("black");
    ellipse (238, 200, 20, 15);
    // turtle tail
    ellipse (168, 200, 10, 7);
    // turtle flippers
    // bottom back flipper
    ellipse (185, 225, 7, 20);
    //bottom front flipper
    ellipse (215, 225, 7, 20); 
    //top right flipper
    ellipse (185, 175, 7, 20);
    //top left flipper
    ellipse (215, 175, 7, 20);
    translate (-x, -y);
}

function drawSmallBubble (x, y) {
    translate (x, y);
    fill (173, 216, 230);
    circle (200, 200, 10);
    fill ("white");
    circle (201, 199, 3);
    translate (-x, -y);
}

function drawLargeBubble (x, y) {
    translate (x, y);
    fill (173, 216, 230);
    circle (200, 200, 15);
    fill ("white");
    circle (203, 197, 3)
    translate (-x, -y);
}