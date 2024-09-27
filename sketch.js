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
let scaleCounter1=0;
let scaleCounter2=0;
let posX0=0;
let posX7=450;
let posB0=0;
let sizeChange=0;
let mouthx1=10;
let mouthx2=10;
let tearYpos=0;
let mouthMove=false;
let visibleTear=false;
let earthGreyLeft=false;
let earthGreenLeft=false;
let startShine=false;
let cloudMove=0;
let cloudMove2=0;
let finish2=false;
let finish1=false;
let y = 0;
let cloudMove3=0;
let cloudMove4=0;
let finish3=false;
let finish4=false;
let x = 30;
let leftHit = true;
let rightHit = false;
let width = 50;
let y1 = 50;
let seedY = 30;
let seedOnScreen = false;

let tX1=460;
let tX2=488;
let tY1=94;
let tY2=122;
function setup() {
  createCanvas(500, 400);
  frameRate(12);

}
function earthGrey(x,y,size,scaleP,mouth){
  push();
  translate(x,y);
  scale(scaleP);
  fill("grey");
  ellipse(0,0,size,size);
  fill("silver");
  //first contenent
  
  beginShape();
  vertex(-30,-40);
  vertex(-20,-30);
  vertex(-20,-40);
  vertex(-10,-45);
  vertex(0,-30);
  vertex(10,-30);
  vertex(20,-40);
  vertex(30,-30);
  vertex(40,-30);
  vertex(30,-40);
  vertex(20,-45);
  vertex(10,-49);
  vertex(0,-50);
  vertex(-10,-49);
  vertex(-20, -46);
  endShape(CLOSE);
  //second contenent
  beginShape();
  vertex(-40,-10);
  vertex(-30,-20);
  vertex(-10,-20);
  vertex(10,10);
  vertex(10,20);
  vertex(0,30);
  vertex(0,40);
  vertex(-10,45);
  vertex(-30,30);
  vertex(-40,20);
  vertex(-30,10);
  vertex(-30,0);
  endShape(CLOSE);
  //third contenent
  beginShape();
  vertex(20,0);
  vertex(30,-10);
  vertex(40,-10);
  vertex(45,0);
  vertex(45,10);
  vertex(40,20);
  vertex(40,25);
  vertex(30,20);
  vertex(30,10);
  endShape(CLOSE);
  //eyes
  push()
  noFill();
  strokeWeight(5);
  beginShape();
  vertex(-35,-10);
  vertex(-25,0);
  vertex(-15,0);
  vertex(-5,-10);
  endShape();
  beginShape();
  vertex(35,-10);
  vertex(25,0);
  vertex(15,0);
  vertex(5,-10);
  endShape();
  //mouth
  beginShape();
  vertex(-25,mouth);
  vertex(-15,10);
  vertex(15,10);
  vertex(25,mouth);
  endShape();
  pop();
  pop();
}
function earthGreen(x,y,size,scaleP,mouth){
  push();
  translate(x,y);
  scale(scaleP);
  fill("blue");
  ellipse(0,0,size,size);
  fill("green");
  //first contenent
  
  beginShape();
  vertex(-30,-40);
  vertex(-20,-30);
  vertex(-20,-40);
  vertex(-10,-45);
  vertex(0,-30);
  vertex(10,-30);
  vertex(20,-40);
  vertex(30,-30);
  vertex(40,-30);
  vertex(30,-40);
  vertex(20,-45);
  vertex(10,-49);
  vertex(0,-50);
  vertex(-10,-49);
  vertex(-20, -46);
  endShape(CLOSE);
  //second contenent
  beginShape();
  vertex(-40,-10);
  vertex(-30,-20);
  vertex(-10,-20);
  vertex(10,10);
  vertex(10,20);
  vertex(0,30);
  vertex(0,40);
  vertex(-10,45);
  vertex(-30,30);
  vertex(-40,20);
  vertex(-30,10);
  vertex(-30,0);
  endShape(CLOSE);
  //third contenent
  beginShape();
  vertex(20,0);
  vertex(30,-10);
  vertex(40,-10);
  vertex(45,0);
  vertex(45,10);
  vertex(40,20);
  vertex(40,25);
  vertex(30,20);
  vertex(30,10);
  endShape(CLOSE);
  //eyes
  push()
  noFill();
  strokeWeight(5);
  beginShape();
  vertex(-35,-10);
  vertex(-25,-20);
  vertex(-15,-20);
  vertex(-5,-10);
  endShape();
  beginShape();
  vertex(35,-10);
  vertex(25,-20);
  vertex(15,-20);
  vertex(5,-10);
  endShape();
  //mouth
  beginShape();
  vertex(-25,mouth);
  vertex(-15,10);
  vertex(15,10);
  vertex(25,mouth);
  endShape();
  pop();
  pop();
}
function tear(x,y){
  push();
  stroke("blue");
  fill("blue");
  triangle(x,y,x+10,y+30, x-10,y+30);
  ellipse(x,y+30,20,20);
  pop();
}
function drawShine(x,y,width,height){
  push();
  stroke("yellow");
  fill("yellow");
  ellipse(x,y,width,height);
  pop();
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
function backGround(){
  fill(11,66,5);
  rect(0,250,500,150);
}

function treePlacement (){
translate(200,-120);
  tree2();
  translate(-200,120);
  translate(100,-120);
  tree2();
  translate(-100,120);
  translate(0,-120);
  tree2();
  translate(0,120);
  translate(-100,-120);
  tree2();
  translate(100,120);
  translate(-200,-120);
  tree2();
  translate(200,120);
  translate(250,-100);
  tree1();
  translate(-250,100);
  translate(150,-100);
  tree1();
  translate(-150,100);
  translate(50,-100);
  tree1();
  translate(-50,100);
  translate(-50,-100);
  tree1();
  translate(50,100);
  translate(-150,-100);
  tree1();
  translate(150,100);
  translate(-250,-100);
  tree1();
  translate(250,100);
}

function cloud1(move){
 stroke(255,255,255)
 fill(255,255,255)
 circle(80+move,10,20);
 circle(80+move,30,20);
 circle(95+move,10,20);
 circle(95+move,30,20);
 circle(106+move,20,20);
 circle(90+move,25,20);
 circle(70+move,20,20);
}

function cloud2(move){
 stroke(255,255,255);
 fill(255,255,255);
 circle(-95+move,40,20);
 circle(-95+move,60,20);
 circle(-80+move,40,20);
 circle(-80+move,60,20);
 circle(-70+move,50,20);
 circle(-85+move,55,20);
 circle(-105+move,50,20);
}

function sun2(){
 stroke(230,200,30);
 fill(230,200,30);
 circle(445,40,60);
 stroke(0,0,0);
 fill(0,0,0);
 circle(430,30,10);
 circle(460,30,10);
 ellipse(445,50,30,20);
 rect(429,40,31,10)
}
function sun1(){
 
stroke(230,200,30);
fill(230,200,30);
circle(445,40,60);

}
function tree1(){
 stroke(0,0,0);
 fill(43,21,11);
 rect(235,320,30,50);
 fill(5,41,3);
 triangle(200,345,300,345,250,270);
 triangle(200,295,300,295,250,220);
 triangle(200,245,300,245,250,170);
}

function tree2(){
 stroke(0,0,0);
 fill(43,21,11);
 rect(235,320,30,50);
 fill(4,26,1);
 triangle(200,345,300,345,250,270);
 triangle(200,295,300,295,250,220);
 triangle(200,245,300,245,250,170);
}

function babyJaguar(){
// back leg left //
fill(99,76,49);
beginShape();
vertex(12,25);
vertex(12,35);
vertex(17,35);
endShape();
// back leg right //
fill(99,76,49);
beginShape();
vertex(25,30);
vertex(25,35);
vertex(30,35);
vertex(30,30);
endShape();
// tail //
fill(166,125,78)
beginShape();
vertex(38,20);
vertex(43,25);
vertex(45,30);
vertex(46,33);
vertex(43,34);
vertex(40,27);
endShape();
// body //
fill(166,125,78)
beginShape();
vertex(10,17);
vertex(10,28);
vertex(15,30);
vertex(30,30);
vertex(40,30);
vertex(40,20);
vertex(35,17);
vertex(20,15);
vertex(10,17);
endShape();
// front left leg //
fill(166,125,78)
beginShape();
vertex(15,25);
vertex(15,37);
vertex(23,37)
vertex(23,25)
endShape();
// front right leg //
fill(166,125,78)
beginShape();
vertex(30,25);
vertex(30,37);
vertex(38,37);
vertex(38,25);
endShape();
// snout //
fill(166,125,78)
beginShape();
vertex(10,15)
vertex(10,18)
vertex(20,18)
vertex(20,15)
endShape();
// head //
fill(166,125,78)
beginShape();
vertex(0,5);
vertex(5,0);
vertex(10,5);
vertex(20,5);
vertex(25,0);
vertex(30,5);
vertex(25,10);
vertex(25,15);
vertex(20,17);
vertex(20,13);
vertex(20,17);
vertex(15,15);
vertex(10,17);
vertex(10,13);
vertex(10,17);
vertex(5,15);
vertex(5,10);
vertex(0,5);
endShape();
line(15,15,15,13);
fill(0,0,0);
ellipse(15,12,3,2);
fill(255,255,255);
circle(10,10,4);
circle(20,10,4);
fill(0,0,0);
circle(11,10,2);
circle(19,10,2);

}

function babyMacaw(){
fill(130,86,59);
ellipse(40,40,45,20);
fill(209,170,146)
ellipse(40,30,10,15);
ellipse(30,35,10,15);
ellipse(50,35,10,15);
}
function macawOne(){
 
// backfoot //
beginShape();

fill(61,62,66);
vertex(25,45);
vertex(25,53);
vertex(20,53);
vertex(15,57);
vertex(25,56);
vertex(30,55);
vertex(28,53);
vertex(28,45);
vertex(25,45);

endShape();

// backfoot //
beginShape();

fill(61,62,66);
vertex(35,45);
vertex(35,55);
vertex(30,55);
vertex(25,58);
vertex(40,58);
vertex(38,55);
vertex(38,45);
vertex(35,45);

endShape();

// backleg //
beginShape()

fill(15,27,61);
vertex(17,38);
vertex(25,50);
vertex(40,45)

endShape();

// body //
beginShape();

fill(25,45,99)
vertex(10,5);
vertex(10,30);
vertex(12,35);
vertex(15,37);
vertex(20,40);
vertex(25,45);
vertex(30,50);
vertex(35,50);
vertex(40,47);
vertex(45,45);
vertex(70,45);
vertex(65,40);
vertex(30,20);
vertex(25,5);
vertex(20,0);
vertex(15,0);
vertex(10,5);

endShape()

// wing //
beginShape()

vertex(25,17);
vertex(35,17);
vertex(55,35);
vertex(40,35);
vertex(23,25);
vertex(23,25);
vertex(25,17);

endShape();

// face //
beginShape();

fill(148,142,24)
vertex(10,7);
vertex(10,5);
vertex(15,4);
vertex(20,5);
vertex(22,10);
vertex(20,15);
vertex(15,18);
vertex(10,20);
vertex(10,7);

endShape();

// topbeak //
beginShape();

fill(61,62,66)
vertex(10,6);
vertex(5,8);
vertex(0,10);
vertex(0,19);
vertex(5,15);
vertex(10,15);
vertex(12,10);
vertex(10,6);

endShape();

// bottombeak //
beginShape();

fill(61,62,66)
vertex(5,15);
vertex(7,20);
vertex(10,20);
vertex(12,15);
vertex(10,12);
vertex(5,15);

endShape();

fill(255,255,255);
circle(15,10,5);
fill(0,0,0);
circle(14,10,2);

} 

function jaguarOne(){
 // tail //
 beginShape();
 
 fill(166,125,78)
 vertex(85,35);
 vertex(90,33);
 vertex(95,33);
 vertex(100,40);
 vertex(100,60);
 vertex(105,65);
 vertex(110,68);
 vertex(110,72);
 vertex(100,70);
 vertex(95,65);
 vertex(90,55);
 vertex(90,45);
 
 endShape();
 
 //back leg right //
 beginShape();
 
 fill(99, 76, 49);
 vertex(61,55);
 vertex(58,75);
 vertex(75,75);
 vertex(75,50);
 
 endShape();
 
 // back leg left //
 beginShape();
 
 fill(99, 76, 49);
 vertex(10,50);
 vertex(9,80);
 vertex(20,83);
 vertex(25,60);
 
 endShape();
 
 // body //
 beginShape();
 
 fill(166,125,78)
 vertex(10,30);
 vertex(9,45);
 vertex(9,50);
 vertex(10,55);
 vertex(20,60);
 vertex(40,60);
 vertex(55,60);
 vertex(70,55);
 vertex(68,65);
 vertex(67,80);
 vertex(83,80);
 vertex(90,50);
 vertex(90,40);
 vertex(80,30);
 vertex(65,27);
 vertex(45,30);
 vertex(10,30);
 
 endShape();
 
 fill(0,0,0);
 circle(45,35,3);
 circle(50,31,3);
 circle(58,35,3);
 circle(65,31,3);
 circle(70,35,3);
 circle(75,31,3);
 circle(110,70,3);
 
 // front leg //
 beginShape();
 
 fill(166,125,78)
 vertex(25,52);
 vertex(17,85);
 vertex(20,89);
 vertex(35,85);
 vertex(40,60);
 vertex(40,55);
 
 endShape();
 
 // head //
 beginShape();
 
 fill(166,125,78)
 vertex(5,0);
 vertex(15,5);
 vertex(30,4);
 vertex(43,5);
 vertex(50,0);
 vertex(55,5);
 vertex(47,17);
 vertex(48,20);
 vertex(45,30);
 vertex(35,35);
 vertex(37,30);
 vertex(36,26);
 vertex(37,30);
 vertex(35,35);
 vertex(32,40);
 vertex(20,40);
 vertex(20,35);
 vertex(26,31);
 vertex(26,28);
 vertex(26,31);
 vertex(35,35);
 vertex(26,31);
 vertex(20,35);
 vertex(15,30);
 vertex(17,26);
 vertex(15,30);
 vertex(20,35);
 vertex(15,35);
 vertex(5,25);
 vertex(5,15);
 vertex(2,10);
 vertex(0,5);
 vertex(5,0);
 
 endShape();
 
 // head details //
 fill(255,255,255);
 circle(18,19,5);
 circle(34,19,5);
 fill(0,0,0);
 ellipse(26,25,7,5);
 circle(19,19,3);
 circle(33,19,3);
 circle(15,10,3);
 circle(20,7,3);
 circle(35,10,3);
 circle(29,7,3);
 circle(24,9,3);
 circle(25,14,3);
 

}
function logPlacement (){
translate(200,-120);
    log2();
    translate(-200,120);
    translate(100,-120);
    log2();
    translate(-100,120);
    translate(0,-120);
    log2();
    translate(0,120);
    translate(-100,-120);
    log2();
    translate(100,120);
    translate(-200,-120);
    log2();
    translate(200,120);
    translate(250,-100);
    log1();
    translate(-250,100);
    translate(150,-100);
    log1();
    translate(-150,100);
    translate(50,-100);
    log1();
    translate(-50,100);
    translate(-50,-100);
    log1();
    translate(50,100);
    translate(-150,-100);
    log1();
    translate(150,100);
    translate(-250,-100);
    log1();
    translate(250,100);
}
function sun3(){
stroke(230,200,30);
fill(230,200,30);
circle(445,40,60);
fill(0,0,0);
stroke(0,0,0);
ellipse(445,50,30,14);
rect(430,50,30,7)
circle(430,30,10);
circle(460,30,10);
}
function sun4(){
stroke(230,200,30);
fill(230,200,30);
circle(445,40,60);
fill(0,0,0);
stroke(0,0,0);
rect(430,50,30,5)
circle(430,40,10);
circle(460,40,10);
}
function log1(){
stroke(0,0,0);
fill(43,21,11);
rect(235,320,30,50);
}

function log2(){
stroke(0,0,0);
fill(43,21,11);
rect(235,320,30,50);
}

function ghostJaguar(){
fill(255,255,255,200);
stroke(0,0,0,200);
strokeWeight(2);
// body //
beginShape();
vertex(20,60+y);
vertex(10,35+y);
vertex(5,25+y);
vertex(7,15+y);
vertex(10,10+y);
vertex(15,5+y);
vertex(20,4+y);
vertex(25,5+y);
vertex(30,10+y);
vertex(33,15+y);
vertex(35,25+y);
vertex(30,35+y);
vertex(20,60+y);
endShape();
// face //
beginShape();
vertex(14,27+y);
vertex(14,30+y);
vertex(17,32+y);
vertex(20,27+y);
vertex(20,30+y);
vertex(20,27+y);
vertex(24,32+y);
vertex(26,30+y);
vertex(26,27+y);
vertex(26,30+y);
vertex(24,32+y);
vertex(24,34+y);
vertex(21,34+y);
vertex(17,34+y);
vertex(17,32+y);
// nose //
ellipse(20,25+y,4,2)
endShape();
// eye left //
beginShape();
vertex(14,17+y);
vertex(17,19+y);
vertex(21,17+y);
endShape();
// eye right //
beginShape();
vertex(24,17+y);
vertex(27,19+y);
vertex(31,17+y);
endShape();
// halo //
strokeWeight(4);
stroke(176,129,53,200);
fill(0,0,0,0);
ellipse(20,0+y,25,10);
// ghost float //
y--
}

function ghostMacaw(){
strokeWeight(2);
// body //
fill(255,255,255,200);
stroke(0,0,0,200);
beginShape();
vertex(20,60+y);
vertex(10,35+y);
vertex(5,25+y);
vertex(7,15+y);
vertex(10,10+y);
vertex(15,5+y);
vertex(20,4+y);
vertex(25,5+y);
vertex(30,10+y);
vertex(33,15+y);
vertex(35,25+y);
vertex(30,35+y);
vertex(20,60+y);
endShape();
// eye left //
beginShape();
vertex(14,15+y);
vertex(17,17+y);
vertex(21,15+y);
endShape();
// eye right //
beginShape();
vertex(24,15+y);
vertex(27,17+y);
vertex(31,15+y);
endShape();
// face //
beginShape();
vertex(20,26+y);
vertex(20,20+y);
vertex(14,21+y);
vertex(13,25+y);
vertex(13,30+y);
vertex(17,26+y);
vertex(20,26+y);
vertex(20,31+y);
vertex(18,31+y);
vertex(16,27+y);
endShape();
// halo //
strokeWeight(4);
stroke(176,129,53,200);
fill(0,0,0,0);
ellipse(20,0+y,25,10);
y--
}
function seedPacket(){

if (x <= 30){
     leftHit = true;
     rightHit = false;
} 
if(x >= (90 - width)){
     leftHit = false;
     rightHit = true;
}

if (leftHit){
 x+=3;
}else if(rightHit){
 x-=3;
}
fill(43,21,11);
stroke(0,0,0);
rect(x,0,width,70);
fill(29, 66, 15);
rect(x,15,width,40)

}

function seedSpawner(){

stroke(0,0,0)
fill(110,76,50)
 circle(65,0+y1,15);
 circle(55,-60+y1,15);
 circle(65,-120+y1,15);
 circle(55,-180+y1,15);
 y1+=5;

}

function survailance(){
fill(100,100,100);
circle(490,100,50);
fill(50,50,50);
circle(474,108,10);
rect(490,70,20,60);
}

function light(){
fill(250,13,5,100)
stroke(250,13,5,50)
triangle (tX1,tY1,474,108,tX2,tY2)
tX1-=7;
tX2-=7;
tY1+=7;
tY2+=7;
}
function draw() {
  background(225);
  if (!earthGreyLeft){
    
  if(sizeChange<400&&scaleCounter1<2.5){
    sizeChange+=10;
    scaleCounter1+=0.1;
  }
  if(scaleCounter1>=2.5&&mouthx1<20){
    mouthx1++;
  }
  if (mouthx1>=20){
    visibleTear=true;
  }
  earthGrey(250+posX0,200,100,scaleCounter1,mouthx1);
  if(visibleTear&&tearYpos<70){
    tearYpos+=5;
    tear(325,200+tearYpos);
  }else if(visibleTear&&tearYpos>=70){
    posX0-=10;
  }
  if (posX0<=-450){
    earthGreyLeft=true;
  } 
  }
  if(earthGreyLeft){
    if(posX7>0){
      posX7-=10;
    }
    
  if(posX7<=0&&mouthx2>0){
    mouthx2--;
    posX7=0;
    startShine=true;
    
  }
  if(startShine&&scaleCounter2<250){
    scaleCounter2+=10;
  }
  if(scaleCounter2==250){
    posX7-=10;
  }
  if(posX7<=-450){
    earthGreenLeft=true;
    
  }
  drawShine(250+posX7, 200,100+scaleCounter2,100+scaleCounter2);
  earthGreen(250+posX7,200,100,2.5,mouthx2);

}
if(earthGreenLeft){
  if(!left){
    translate(+50,0);
    if(moveX<=0&&moveX>-500){
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
}
  
if(left){
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
  line(0+posX3,200,500+posX3,200);
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
  line(0+posX5,200,500+posX5,200);
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
    left4=true;
    
  }
}
if(left4){
  background(105, 168, 245);
  if(!finish1){
  backGround();
  sun1();
  if(cloudMove2<650){
    cloudMove2+=7;
  }else if (cloudMove2>=650){
    cloudMove2=650;
    finish1=true;
  }
  cloud1(cloudMove2);
  cloud2(cloudMove2);
 
  treePlacement();
  
  fill(43,21,11)
  rect(350,300,60,70)  
  ellipse(380,300,60,20)
    
  translate(0,0);
  translate(100,250);
  jaguarOne();
  translate(-100,-250);
  translate(350,250);
  macawOne();
  translate(-350,-250);
  }
}
if(finish1){
  backGround();
  sun2();
  if(cloudMove<650){
    cloudMove+=7;
  }else if (cloudMove>=650){
    cloudMove=650;
    finish2=true;
  }
  cloud1(cloudMove);
  cloud2(cloudMove);
  treePlacement();
  fill(43,21,11)
  rect(350,300,60,70)  
  ellipse(380,300,60,20)
  translate(0,0);
  translate(100,250);
  jaguarOne();
  translate(-100,-250);
  translate(350,250);
  macawOne();
  translate(-350,-250);
  translate(50,300);
  babyJaguar();
  translate(-50,-300);
  translate(285,325)
  babyMacaw();
}
if(finish2){
  translate(-287,-325);
  strokeWeight(2);
  background(105, 168, 245);
  backGround();
  sun3();
  if(cloudMove3<650){
    cloudMove3+=7;
  }else if (cloudMove3>=650){
    cloudMove3=650;
    finish3=true;
  }
  cloud1(cloudMove3);
  cloud2(cloudMove3);
  logPlacement();
  fill(43,21,11);
  stroke(0,0,0)
  rect(350,300,60,70);  
  ellipse(380,300,60,20);
  translate(0,0);
  translate(70,300);
  ghostJaguar();
  translate(-70,-300);
  translate(357,225);
  ghostMacaw();
  translate(-357,-225);
}
if(finish3){
  if(cloudMove4<650){
    cloudMove4+=7;
  }else if (cloudMove4=650){
    cloudMove4=650;
    finish4=true;
  }
  strokeWeight(2);
  background(105, 168, 245);
  backGround();
  sun4();
  cloud1(cloudMove4);
  cloud2(cloudMove4);
  seedSpawner();
  seedPacket();
  survailance();
  light();
}
}
