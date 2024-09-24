let y=150;
let radius=20;
let move = true;
function setup() {
  createCanvas(400, 400);
  
}
function steam(){
  y--;
  ellipse(37, y, radius, radius);
  if(y+radius<0){
    move = false;
  }
  if(move==false){
    y = 150;
    move=true;
  }
}
function draw() {
  background(225);
  steam();
  stroke("black");
  line(0, 300, 400, 300);
  rect(25, 100, 25, 200);
  beginShape();
  vertex(145, 150);
  vertex(175, 150);
  vertex(190, 300);
  vertex(135, 300);
  endShape(CLOSE);
  beginShape();
  vertex(155, 150);
  vertex(165, 150);
  vertex(180, 300);
  vertex(145, 300);
  endShape(CLOSE);
  beginShape();
  vertex(75, 125);
  vertex(125, 125);
  vertex(150, 300);
  vertex(50, 300);
  endShape(CLOSE);
  beginShape();
  vertex(90, 125);
  vertex(110, 125);
  vertex(135, 300);
  vertex(65, 300);
  endShape(CLOSE);
  rect(200, 250, 200, 50);
  beginShape();
  vertex(225, 200);
  vertex(375, 200);
  vertex(400, 250);
  vertex(200, 250);
  endShape(CLOSE);
  line(213, 225, 388, 225);
  rect(283, 50, 25, 150);
  rect(240, 50, 25, 150);
  rect(326, 50, 25, 150);
  
}

