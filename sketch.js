
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	

}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	

	Engine.run(engine);
	
	roof = new Ground(700,200,280,10);
	bob1 = new Bob(580,400,40);
	rope1 = new rope(bob1.body,roof.body,-120,0)

	bob2 = new Bob(610,400,40);
	rope2 = new rope(bob2.body,roof.body,-90,0)

	bob3 = new Bob(640,400,40);
	rope3 = new rope(bob3.body,roof.body,-60,0)

	bob4 = new Bob(670,400,40);
	rope4 = new rope(bob4.body,roof.body,-30,0)

	bob5 = new Bob(700,400,40);
	rope5 = new rope(bob5.body,roof.body,0,0)
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  roof.display();
 bob1.display();
 rope1.display(); 
 
 bob2.display();
 rope2.display(); 

 bob3.display();
 rope3.display(); 
 
 bob4.display();
 rope4.display(); 
 
 bob5.display();
 rope5.display(); 

drawSprites();
}

function KeyPressed(){

if(keyCode===SPACE){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x : -50,y : -50})


}

}


