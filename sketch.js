let sizeT=[1,1,1,1,1,1];
let yT=[155, 180, 210, 100, 100, 100];
let xT=[38, 100, 160, 246, 296, 339];
let sizeB=[100,100,100, 100, 100, 100];
let moveX=0;
let visible = false;
let scaleFactor = 1.0;
let posX=400;
let posX2=400;
let posX5=400;
let posX6=0;
let angle =0;
let left = false;
let left2=false;
let posX3 = 400;
let posX4=0;
let posY3 = [150, 150, 150];
let posY2 = [150, 150, 150];
let cloudActive = [true, false, false]; 
let cloudActive1 = [true, false, false];
let stopped=false;
let stopped2=false;
let stopped3=false;
let visible1=true;
let visible2=true;
let left3=false;
let left4=false;
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
function timer(x, y, size) {
  push();
  noStroke();
  fill(225);
  ellipse(x, y, size, size *2);
  push();
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
function drawRoad(i){
  push();
  stroke("black");
  strokeWeight(5)
  for (i; i>-600; i-=150){
    line(i, 300, i-100, 300); 
  }
  pop();
}

function drawCar(x, y) {
  push();
  stroke("black");
  fill("blue");
  translate(x, y);
  rect(70, 0, 60, 60);
  rect(0, 60, 200, 40);
  line(70, 0, 0, 60);
  line(130, 0, 200, 60);
  circle(50, 100, 40);
  circle(150, 100, 40);
  pop();
}
function drawBlock(x,y){
  push();
  fill("black");
  rect(x,y,100,50);
  fill("yellow");
  rect(x, y+10, 100, 20);
  pop();
}
function draw() {
  if(!left){
  if(moveX<=0&&moveX>-500){
  background(225);
  drawCloudBig(200+moveX,50,100);
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
        drawCloudBig(200+moveX,50,sizeB[i]);
      }else{
        drawCloudBig(200+moveX,50,sizeB[i]);
        moveX-=2;
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
  background(225);
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
      }else if (posX2<1) {
       stopped2=true;
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
    if(posX2<=0){
      left2=true;
    
    }
    if(stopped2){
      posX-=15;
      posX2-=15;
    }
}
if(left2){
  stroke("black")
  if (posX3 > 20) {
    posX3-=10;
  } else if (posX3 <= 20 && posX3 > 0) {
    posX3 = 0;
    visible1=false;
    
  }

  for (let j = 0; j < 4; j++) {
    if (cloudActive[j]) {
      if (posY3[j] > -30) {
        posY3[j] -=5;
      } else {
        posY3[j] = -30;
        if (j < 3) {
          cloudActive[j + 1] = true; 
        }
        else if(j>=3){
          stopped=true;
          
        }
      }
      drawCloud(320 + posX3, 0 + posY3[j], 25);
    }
  }
  posX4+=10;
  if (!visible1){
    drawRoad(0+posX4);
  }
  if (stopped){
    posX3-=10;
    visible1=true;
  }
  

  if(stopped||visible1){
    push()
    stroke("black");
    strokeWeight(5);
    line(0+posX3,300,100+posX3,300);
    line(150+posX3,300,250+posX3,300);
    line(300+posX3,300, 400+posX3, 300);
    pop();
  }
  stroke("black");
  line(0+posX3,200,400+posX3,200);
  drawCar(100 + posX3, 90);
  if (posX3<=-400){
    left3=true;
    
  }
}
if(left3){
  stroke("black")
  if (posX5 > 20) {
    posX5-=10;
  } else if (posX5 <= 20 && posX5 > 0) {
    posX5 = 0;
    visible2=false;
    
  }

  for (let j = 0; j < 4; j++) {
    if (cloudActive1[j]) {
      if (posY2[j] > -30) {
        posY2[j] -=5;
      } else {
        posY2[j] = -30;
        if (j < 3) {
          cloudActive1[j + 1] = true; 
        }
        else if(j>=3){
          stopped3=true;
          
        }
      }
      timer(320 + posX5, 0 + posY2[j], 25);
    }
  }
  posX6+=10;
  if (!visible2){
    drawRoad(0+posX6);
  }
  if (stopped3){
    posX5-=10;
    visible2=true;
  }
  

  if(stopped3||visible2){
    push()
    stroke("black");
    strokeWeight(5);
    line(0+posX5,300,100+posX5,300);
    line(150+posX5,300,250+posX5,300);
    line(300+posX5,300, 400+posX5, 300);
    pop();
  }
  stroke("black");
  line(0+posX5,200,400+posX5,200);
  noFill();
  beginShape();
  curveVertex(300+posX5, 170); 
  curveVertex(300+posX5, 170);
  curveVertex(350+posX5, 200);
  curveVertex(150+posX5, 300);
  curveVertex(300+posX5, 350);
  curveVertex(300+posX5, 350);
  endShape();
  drawCar(100 + posX5, 90);
  drawBlock(250+posX5,320);
  if (posX5<=-400){
    left3=true;
    
  }
}
}