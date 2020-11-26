var angrybird,woodblock;
function setup() {
  createCanvas(800,400);
  angrybird=createSprite(100, 300, 50, 50);
  angrybird.shapeColor=rgb(212,0,0);
  angrybird.setVelocity(3,0);
  woodblock=createSprite(400, 300, 50, 100);
  woodblock.shapeColor=rgb(186,130,0);
}

function draw() {
  background("lightblue");
 
  if(woodblock.x - angrybird.x<=(woodblock.width/2+angrybird.width/2))
  {
    angrybird.velocityX = angrybird.velocityX*(-1);

    
  }
  drawSprites();
}