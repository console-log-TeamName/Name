let ypos=175;
let yposWater=0;//y- starting position of the water drop.
let xpos=0;                           // default position of xpos (not implementation not required)

function setup(){
createCanvas (400,400);
  background("grey");
beginShape(); //mountain
  
fill(50,100,150);
vertex(200.125);
vertex(173,175);
vertex(150,300);
vertex(100,325);
  vertex(100,285); //side top
vertex(50,350);
vertex(45,400);
vertex(350,400);
vertex(325,350);
vertex(300,300);
vertex(250,250);
vertex(250,200);
vertex(250,150);
  //top oif the mountain
endShape();
  
  beginShape(); //top of the mountain - ice.
  fill("white");
  vertex(173,175);
  vertex(250,150);
  vertex(220,50); 
  endShape();

  vertex(100,285); //side top
  vertex(50,350);
  vertex(45,400);
}

function draw(){


  fill("blue");				// water drops positions and fill up them blue funcion.
  circle(175,ypos+100,10);
  circle(100,ypos+175,10);
  circle(150,ypos+150,10);
  circle(200,ypos-50,10);
  circle(225,ypos-25,10);
  circle(210,ypos,10);
  circle(240,ypos-25,10);
  ypos-=-1;
  
  fill("yellow");         // sun ? 
  circle(25,25,50);
  line(50,25,100,100);
  line(10,25,25,50);
  
  fill("blue");
   if(yposWater<200){
  yposWater+=0.5;
  }else if(yposWater>=200){
    yposWater=200;
  }
  square(0,400-yposWater,400);
  
  
  
}