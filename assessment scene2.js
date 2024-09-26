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

function setup(){
  createCanvas(500,400)
}

  function draw(){   
  background(105, 168, 245);
  backGround();
  sun();
  cloud1();
  cloud2();
  treePlacement();
  fill(43,21,11)
  rect(350,300,60,70)  
  ellipse(380,300,60,20)
  translate(0,0);
  translate(100,250);
  jaguarTwo();
  translate(-100,-250);
  translate(350,250);
  macawTwo();
  translate(-350,-250);
  translate(50,300);
  babyJaguar();
  translate(-50,-300);
  translate(285,325)
  babyMacaw();
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

 function macawTwo(){
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

 function jaguarTwo(){
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
   fill(99,76,49);
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
   fill(166,125,78);
   vertex(25,52);
   vertex(17,85);
   vertex(20,89);
   vertex(35,85);
   vertex(40,60);
   vertex(40,55);
   endShape();
   // head //
   beginShape();
   fill(166,125,78);
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

 function cloud1(){
   stroke(255,255,255)
   fill(255,255,255)
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
   stroke(255,255,255);
   fill(255,255,255);
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
   stroke(0,0,0);
   fill(0,0,0);
   circle(430,30,10);
   circle(460,30,10);
   ellipse(445,50,30,20);
   rect(429,40,31,10)
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


