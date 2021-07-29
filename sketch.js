const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var starImg,bgImg;
var star, starBody;
var fairy, fairyImg, fairyBody;
var sound;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
}

function setup() {
	createCanvas(800, 750);

	// load sound here //   

	fairy = createSprite(150,150,30,30);
	fairy.addAnimation(fairyImg);
	fairy.scale = 7.0;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	fairyBody = Bodies.circle(650 ,30 , 5 , {isStatic:true});
	World.add(world, fairyBody);

	starBody = Bodies.circle(650 , 30 , 5 , {isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
}
