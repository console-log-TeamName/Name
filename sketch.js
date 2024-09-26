let sizeT=[1,1,1,1,1,1];
let yT=[155, 180, 210, 100, 100, 100];
let xT=[38, 100, 160, 246, 296, 339];
let sizeB=[100,100,100, 100, 100, 100];
let moveX=0;
let visible = false;
let scaleFactor = 1.0;
let posX=400;
let posX2=400;
let angle =0;
let left = false;
function setup() {
  createCanvas(400, 400);
  frameRate(12);

}
function drawCloud(x, y, size) {
  noStroke();
  fill("grey");
  ellipse(x, y, size, size *2);
  ellipse(x - size/4, y, size,);
  ellipse(x + size/4, y, size, size);
  ellipse(x - size/2, y - size/2, size, size);
  ellipse(x + size/2, y - size/2, size, size);
  ellipse(x, y-size, size, size);
}
function drawCloudBig(x, y, size){
  noStroke();
  fill("grey");
  ellipse(x, y, size*2, size/2);
  ellipse(x + size/2, y+size/4, size, size/2);
  ellipse(x - size/2, y+size/4, size, size/2);
  ellipse(x+size, y, size, size/2); 
  ellipse(x-size, y, size, size/2);
  ellipse(x, y-size/4,size*1.5,size/2);
}
function drawCarbon(x,y){
  push()
  stroke("black");
  fill("black");
  translate(x,y);
  beginShape();
  vertex(30, 60);
  vertex(60, 10);
  vertex(80, 0);
  vertex(130, 80);
  vertex(170, 100);
  vertex(180, 130);
  vertex(150, 150);
  vertex(130, 140)
  vertex(100, 150);
  vertex(40, 160);
  vertex(0, 100);
  endShape(CLOSE);
  pop()
}
function drawSun(x,y,size){
  stroke("yellow");
  fill("yellow");
  line(x, y, x-size, y);
  line(x, y, x+size, y);
  line(x, y, x, y-size);
  line(x, y, x, y+size);
  line(x, y, x-size/2, y-size/2);
  line(x, y, x-size/2, y+size/2);
  line(x, y, x+size/2, y+size/2);
  line(x, y, x+size/2, y-size/2);
  ellipse(x, y, size, size);
}
function spinWindmillBlades(x,y) {
  push();
  translate(x, y);
  rotate(angle);
  fill("white");
  triangle(-10, -50, 10, -50, 0, 0);
  triangle(0, 0, 50, 10, 40, 30);
  triangle(-50, 10, 0, 0, -40, 30);
  fill("silver");
  ellipse(0, 0, 15,  15);
  pop();
}
function drawWater(x,y){
  push()
  fill("blue")
  noStroke();
  translate(x,y);
  beginShape();
  vertex(0,0);
  vertex(0, -20);
  vertex(10, -40);
  vertex(30, -60);
  vertex(40, -60);
  vertex(60, -50);
  vertex(60,-40);
  vertex(50, -30);
  vertex(60,-20);
  vertex(100, 0);
  endShape(CLOSE);
  beginShape();
  vertex(55,-25);
  vertex(70,-40);
  vertex(80,-40);
  vertex(100,-30);
  vertex(100,-20);
  vertex(90,-10);
  vertex(100,0);
  vertex(55, 0);
  endShape();
  pop()
}
function draw() {
  if(!left){
  if(moveX<=0&&moveX>-500){
  background(225);
  
  drawCloudBig(200+moveX,50,100)
  for(let i = 0; i<xT.length; i++){
    if(sizeT[i]<50){
      yT[i]-=4;
      sizeT[i]+=3;
      drawCloud(xT[i]+moveX,yT[i],sizeT[i]);
    }else{
      yT[i]-=4;
      drawCloud(xT[i]+moveX,yT[i],50);
      if(sizeB[i]<175){
        sizeB[i]+=2;
        drawCloudBig(200+moveX,50,sizeB[i])
      }else{
        drawCloudBig(200+moveX,50,sizeB[i])
        moveX-=2
      }
    }
  }
  
  
  stroke("black");
  fill("black")
  rect(0+moveX,350,400,50);
  fill("brown");
  rect(25+moveX, 150, 25, 200);
  fill("grey");
  beginShape();
  vertex(145+moveX, 200);
  vertex(175+moveX, 200);
  vertex(190+moveX, 350);
  vertex(135+moveX, 350);
  endShape(CLOSE);
  fill("silver");
  beginShape();
  vertex(155+moveX, 200);
  vertex(165+moveX, 200);
  vertex(180+moveX, 350);
  vertex(145+moveX, 350);
  endShape(CLOSE);
  fill("grey");
  beginShape();
  vertex(75+moveX, 175);
  vertex(125+moveX, 175);
  vertex(150+moveX, 350);
  vertex(50+moveX, 350);
  endShape(CLOSE);
  fill("silver");
  beginShape();
  vertex(90+moveX, 175);
  vertex(110+moveX, 175);
  vertex(135+moveX, 350);
  vertex(65+moveX, 350);
  endShape(CLOSE);
  fill("gold");
  rect(200+moveX, 300, 200, 50);
  fill("red");
  beginShape();
  vertex(225+moveX, 250);
  vertex(375+moveX, 250);
  vertex(400+moveX, 300);
  vertex(200+moveX, 300);
  endShape(CLOSE);
  line(213+moveX, 275, 388+moveX, 275);
  fill("brown")
  rect(283+moveX, 100, 25, 150);
  rect(240+moveX, 100, 25, 150);
  rect(326+moveX, 100, 25, 150);
  if(moveX<=-500){
    left=true;
    console.log(left);
    moveX=-500; 
  }
}
}
if(left){
  background(220);
    stroke("black");
    if (posX > 20) {
      posX -= 10;  
    } else if (posX <= 20 && posX > 0) {
      posX = 0;
    }

    if (posX == 0 && scaleFactor > 0.7) {
      scaleFactor -= 0.03;
    }

    if (posX == 0 && scaleFactor <= 0.7) {
      visible=true;
    } 

    if(visible){
      if (posX2 > 20) {
        posX2 -= 10;  
      } else if (posX2 <= 20 && posX2 > 0) {
        posX2 = 0;
      }
    
    }
    if(visible){
      line(400+posX2,0,0+posX2,400);
      fill("silver");
      triangle(250+posX2, 270, 260+posX2, 370, 240+posX2, 370);
      spinWindmillBlades(250+posX2,270);
      angle+=0.1;
      drawSun(340+posX2,140,70);   
      drawWater(100+posX2,380); 
    }
    push();
    scale(scaleFactor);
    drawCarbon(90+posX,90);
    pop();
    if(visible){
      push();
      stroke("red");
      strokeWeight(10);
      line(50, 50-posX2, 180, 180-posX2);
      line(180, 50-posX2, 50, 180-posX2);
      pop();
    }
}
}