
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,tree;

var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;

var boy;

var stone;

var rope;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);

	engine = Engine.create();
	world = engine.world;

  ground = new Ground(750,650,1500,50);
  
  tree = new Tree();

  mango1 = new Mango(1000,300,5);
  mango2 = new Mango(900,250,5);
  mango3 = new Mango(1200,300,5);
  mango4 = new Mango(1100,200,5);
  mango5 = new Mango(800,300,5);
  mango6 = new Mango(1000,150,5);
  mango7 = new Mango(900,150,5);
  mango8 = new Mango(1120,300,5);

  boy = new Boy();

  stone = new Stone(100,500,5);
  
  rope = new constraint(stone.body,{x:110,y:510});
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('lightblue');

  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  boy.display();
  stone.display();
  rope.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);

  fill("black")
  textSize(15);
  text("Press Space to get a second chance to play",40,40);

  drawSprites();
 
}

function mouseDragged()
{
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  rope.fly();
}

function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(stone.body,{x:140,y:315});
    rope.attacher(stone.body);
  }
}

function detectCollision(body1,body2)
{
  body1pos=body1.body.position;
  body2pos=body2.body.position;

  var distance=dist(body1pos.x,body1pos.y,body2pos.x,body2pos.y)
  if(distance<=body2.r+body1.r)
  {
    Matter.Body.setStatic(body2.body,false);
  }
}