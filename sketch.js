var paper;
var bin,bottom,side1,side2;
var world;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
	paper = new Paper(250,400);
	bin = new Bin(1200,650);
	ground = Bodies.rectangle(width/2, 670, width, 20 , {isStatic:true} );
	ground.shapeColor = color("yellow");
	World.add(world, ground);

	

	Engine.run(engine);

}


function draw() {
  background(0);

  paper.display();
  bin.display();
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,width,20);

}

function keyPressed(){
	if(keyCode === UP_ARROW){
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:22,y:-84});
	}
}



