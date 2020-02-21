var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(100, 100,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 // bounceOff(fixedRect, movingRect);
  if (isTouching(fixedRect, movingRect)) {
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  else  {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  drawSprites();
}

