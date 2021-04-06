
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3, ground;

var paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	box1 =  new Box(1200,560,200,20, "white");
	box2 = new Box(1100,510,20,100,"white");
	box3 = new Box(1300,510,20,100,"white");

    ground = new Box(700,580,1400,20, "yellow");

	paperObject = new Paper(50,200,30,"blue");
}


function draw() {
  rectMode(CENTER);
  background(0);
  
   box1.display();
   box2.display();
   box3.display();
   
   ground.display();

   paperObject.display();

  keyPressed();

  drawSprites();
 
}


function keyPressed(){
  if(keyCode=== UP_ARROW){

    Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:85,y:-85});

  }
}
