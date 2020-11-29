
var fixedRect, movingRect;
var rect1, rect2, rect3

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "yellow";
  movingRect = createSprite(500, 200, 60, 50);
  movingRect.shapeColor = "blue";

  rect1 = createSprite(100, 100, 50, 50);
  rect1.shapeColor = "black";
  // rect1.velocityX = 3;
  
  rect2 = createSprite(400, 100, 60, 50);
  rect2.shapeColor = "green";
  rect2.velocityX = 6;

  rect3 = createSprite (500, 100, 60, 60);
  rect3.shapeColor = "purple";

}

function draw() {
  background(220,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log("Distance b/w rect " + (movingRect.x - fixedRect.x ));

  console.log("Half of Width " + (movingRect.width + fixedRect.width )/2);

 if(isTouching(movingRect,fixedRect))
 {
  fixedRect.shapeColor = "red"
 }
 else
 {
  fixedRect.shapeColor = "yellow";
 }
  
 if (isTouching(movingRect, rect1)) 
 {
   rect1.x=rect1.x+10;
 }


  addNumbers(100,200)
  drawSprites();
  bounceOff(rect2, rect3);
}

