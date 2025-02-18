var obsGroup;
var cloudGroup;
var trexcollided;
var gameOver;
var o1,o2,o3,o4,o5,o6;
var cloud;
var over;
function preload(){
  trex_running =   loadAnimation("trex1.png","trex3.png","trex4.png");
trexcollided=loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  o1=loadImage("obstacle1.png");
  o2=loadImage("obstacle2.png");
  o3=loadImage("obstacle3.png");
  o4=loadImage("obstacle4.png");
  o5=loadImage("obstacle5.png");
  o6=loadImage("obstacle6.png");
  cloud=loadImage("cloud.png");
  gameOver=loadImage("gameOver.png");
}




function setup() {
  createCanvas(1000, 200);
  
  trex = createSprite(50,140,20,50);
  
  trex.addAnimation("running", trex_running);
  trex.scale=0.5;
  ground = createSprite(200,180,800,20);
  ground.addImage("ground",groundImage);
  ground.velocityX=-7;
   over=createSprite(300,300);
//over.addImage(gameOver);
  obsGroup=new Group();
  cloudGroup=new Group();
}

function draw() {
background("#D2F7FF");
if(ground.x<0)
  ground.x=500;
if(keyDown("space") && trex.y<=190)
  trex.velocityY=-10;
trex.velocityY=trex.velocityY+0.8
trex.collide(ground)
drawObstacles()
drawclouds();
if(obsGroup.isTouching(trex))
{ obsGroup.setVelocityXEach(0);
  obsGroup.setLifetimeEach(-1);
  ground.velocityX=0;
  cloudGroup.setVelocityXEach(0);
  cloudGroup.setLifetimeEach(-1);
  trex.addAnimation("collided",trexcollided);

}
drawSprites();
}

;function drawObstacles(){
  if(frameCount%100==0){
    
  
  var  obs=createSprite(980,150,10,40);
  var r=Math.round(random(1,6))
  obs.velocityX=-3;
  obs.scale=0.7
  if (r==1)
  obs.addImage(o1);
  if (r==2)
    obs.addImage(o2);
  if (r==3)
    obs.addImage(o3);
  if (r==4)
    obs.addImage(o4);
  if (r==5)
    obs.addImage(o5);
  if (r==6)
    obs.addImage(o6);
obs.lifetime=1500;
obsGroup.add(obs);
}

}
function drawclouds(){
  if(frameCount%60==0){
    
  
  var  obs=createSprite(980,50,10,40);
  var r=Math.round(random(1,6))
  obs.velocityX=-3;
  obs.scale=0.7
  obs.addImage(cloud);
  cloudGroup.add(obs);
  }
}