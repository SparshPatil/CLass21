var fixedRect, movingRect,rect1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(200,400,40,80);
  rect1.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,rect1))
 {
  movingRect.shapeColor = "red";
  rect1.shapeColor = "red";
 }
 else if(isTouching(movingRect,fixedRect)){
 movingRect.shapeColor = "blue";
 fixedRect.shapeColor = "blue";
 
 }
 else
 {
  movingRect.shapeColor = "green";
  rect1.shapeColor = "green";
  fixedRect.shapeColor = "green";
 }

  
  drawSprites();
}

//true - yes , false - no, boolean values
//movingRect as obj1,fixedRect as obj2
