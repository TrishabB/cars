var car,wall
var speed,weight
function setup() {
  createCanvas(1600,400);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2)
  speed=random(55,90)
 weight=random(400,1500)
 car.velocityX=speed;
}

function draw() {
  console.log(car);
  background(260,200,300);
 if(wall.x-car.x<(car.width+wall.width)/2){
car.velocityX=0;
var deformation=0.5*weight*0*0/22500;
if(deformation>180){
  car.shapeColor=color(225,0,0);
}
if(deformation<180 && deformation>100){
car.shapeColor=color(230,230,0);
}
if(deformation<100){
car.shapeColor=color(0,255,0)
}
 }
 car.collide(wall)
 




  drawSprites();
  }
