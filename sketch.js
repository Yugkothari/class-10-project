var seaImg;
var shipImg;
var sea
var ship

function preload(){

seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(1200,800);
  sea = createSprite(200,200);
  sea.addImage("ocean",seaImg);
  sea.velocityX = -4;

   ship = createSprite(350,350);
  ship.addAnimation("shipping",shipImg);
  //ship.x = ground.width/2;
  //ship.velocityX = -4; 
}

function draw() {
  background("blue");
 drawSprites();

 if (sea.x < 0) {
  sea.x = sea.width / 2;
  }
}