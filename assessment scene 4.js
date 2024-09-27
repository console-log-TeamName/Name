let cloudX1 = 80;
let cloudX2 = 95;
let cloudX3 = 105;
let cloudX4 = 90;
let cloudX5 = 70;

let cloudX1a = -95;
let cloudX2a = -80;
let cloudX3a = -70;
let cloudX4a = -85;
let cloudX5a = -105;

let x = 30;
let leftHit = true;
let rightHit = false;
let width = 50;
let y = 50;
let seedY = 30;
let seedOnScreen = false;

let tX1=460;
let tX2=488;
let tY1=94;
let tY2=122;

function setup(){
  createCanvas(500,400);
}
  
  function draw(){   
  strokeWeight(2);
  background(105, 168, 245);
  backGround();
  sun();
  cloud1();
  cloud2();
  seedSpawner();
  seedPacket();
  survailance();
  light();

  }

function backGround(){
    stroke(11,66,5);
    fill(11,66,5);
    rect(0,250,500,150);
  }

function cloud1(){
  stroke(200,200,200);
  fill(200,200,200);
  cloudX1 = cloudX1 + 1;
  circle(cloudX1,10,20);
  circle(cloudX1,30,20);
  cloudX2 = cloudX2 + 1;
  circle(cloudX2,10,20);
  circle(cloudX2,30,20);
  cloudX3 = cloudX3 + 1;
  circle(cloudX3,20,20);
  cloudX4 = cloudX4 + 1;
  circle(cloudX4,25,20);
  cloudX5 = cloudX5 + 1;
  circle(cloudX5,20,20);
}

function cloud2(){
  stroke(200,200,200);
  fill(200,200,200);
  cloudX1a = cloudX1a +1;
  circle(cloudX1a,40,20);
  circle(cloudX1a,60,20);
  cloudX2a = cloudX2a +1;
  circle(cloudX2a,40,20);
  circle(cloudX2a,60,20);
  cloudX3a = cloudX3a +1;
  circle(cloudX3a,50,20);
  cloudX4a = cloudX4a +1;
  circle(cloudX4a,55,20);
  cloudX5a = cloudX5a +1;
  circle(cloudX5a,50,20);
}

function sun(){
  stroke(230,200,30);
  fill(230,200,30);
  circle(445,40,60);
  fill(0,0,0);
  stroke(0,0,0);
  rect(430,50,30,5)
  circle(430,40,10);
  circle(460,40,10);
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
    x++;
  }else if(rightHit){
    x--;
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
    circle(65,0+y,15);
    circle(55,-60+y,15);
    circle(65,-120+y,15);
    circle(55,-180+y,15);
    y++ 
  
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
tX1--
tX2--
tY1++
tY2++
}

