var bob1, bob2, bob3, bob4, bob5;
var rope1,rope2,rope3,rope4,rope5
var roof;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,700,50);
	roof.shapeColor = color(234,250,241);

	bob1 = createSprite(400,500);
	bob2 = createSprite(506,500);
	bob3 = createSprite(606,500);
	bob4 = createSprite(206,500);
	bob5 = createSprite(306,500);

	rope1 = new Rope(bob1,roof,-bob1.width*2,0);
	rope2 = new Rope(bob2,roof,-bob2.width*2,50);
	rope3 = new Rope(bob3,roof,-bob3.width*2,100);
	rope4 = new Rope(bob4,roof,-bob4.width*2,150);
	rope5 = new Rope(bob5,roof,-bob5.width*2,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();

  drawSprites();
}