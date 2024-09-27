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

let y = 0;

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

  function backGround(){
    stroke(11,66,5);
    fill(11,66,5);
    rect(0,250,500,150);
  }

function logPlacement (){5
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

function cloud1(){
  stroke(200,200,200)
  fill(200,200,200)
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
  ellipse(445,50,30,14);
  rect(430,50,30,7)
  circle(430,30,10);
  circle(460,30,10);
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

