const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	var canvas = createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	hammer = new Hammer(200,30);
	iron = new Iron(600,200,100,100)
	stone = new Stone(400,200,100,100)
	Engine.run(engine);
  
}


function draw() {
    Engine.update(engine);	
  rectMode(CENTER);
  background("cyan");
  
  hammer.display();
  ground.display();
  iron.display();
  stone.display();
  drawSprites();
 
}



