let zpos=350;

let termFinish=false;
let ypos=175;
let yposWater=0;//y- starting position of the water drop.
let xpos=0;                           // default position of xpos (not implementation not required)

function setup(){
  createCanvas(400,400);
  background("grey");
}


function draw(){
  //terometer
  if(!termFinish){
  fill("white");
  rect(180,100,50,250);
  
  fill("red");
  rect(180,zpos,50,20);
  
  line(180,120,230,120);
  line(180,150,230,150);
  line(180,180,230,180);
  line(180,210,230,210);
  line(180,240,230,240);
  line(180,270,230,270);
  line(180,300,230,300);
  line(180,330,230,330);
  
  
  if(zpos>120){
    zpos-=1;
  }else if(zpos<=120){
    zpos=120;
    termFinish=true;
  }
}
  if (termFinish){
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
  
    
            // water drops positions and fill up them blue funcion.
      fill("blue");
      circle(xpos+155,ypos+100,10);
      circle(xpos+100,ypos+175,10);
      circle(xpos+200,ypos+150);
      circle(xpos+150,ypos+150,10);
      circle(xpos+200,ypos-50,10);
      circle(xpos+215,ypos-25,10);
      circle(xpos+210,ypos,10);
      circle(xpos+220,ypos-25,10);
      circle(xpos+125,ypos+200,10);
      ypos-=-0.5;
      xpos=1;
      
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
}