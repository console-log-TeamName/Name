let sizeT=[1,1,1,1,1,1];
let yT=[155, 180, 210, 100, 100, 100];
let xT=[38, 100, 160, 246, 296, 339];
let sizeB=[100,100,100, 100, 100, 100];
let moveX=0;
function setup() {
  createCanvas(400, 400);
  frameRate(5);

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

function draw() {
  
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
  
}