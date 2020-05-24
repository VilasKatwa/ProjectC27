
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1;
var r = 20;

/*
function preload()
{
	
}
*/

function setup() {
	engine = Engine.create();
	world = engine.world;

	createCanvas(800, 700);
	

	bob1 = new Bob(260,350,r);
	bob2 = new Bob(300,350,r);
	bob3 = new Bob(340,350,r);
	bob4 = new Bob(380,350,r);
	bob5 = new Bob(420,350,r);
	bob6 = new Bob(460,350,r);
	bob7 = new Bob(500,350,r);
	roof = new Roof(390,100,350,20);
	rope1 = new Rope(bob1.body,roof.body, -r*6, 0);
	rope2 = new Rope(bob2.body,roof.body, -r*4, 0);
	rope3 = new Rope(bob3.body,roof.body, -r*2, 0);
	rope4 = new Rope(bob4.body,roof.body, 0, 0);
	rope5 = new Rope(bob5.body,roof.body, r*2, 0);
	rope6 = new Rope(bob6.body,roof.body, r*4, 0);
	rope7 = new Rope(bob7.body,roof.body, r*6, 0);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  bob7.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  rope7.display();


  drawSprites();
 
}


function mouseDragged() {
    Matter.Body.setPosition(bob1.body, {x: mouseX, y: mouseY});
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.setPosition(bob1.body, {x: 10, y: 100});;
	}
 }
  