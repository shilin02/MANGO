
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boy = loadImage("boy.png")
	tree = loadImage("tree.png")

}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	stone = new Stone(235,420,40)

	mango1 = new Mango(1050,100,40)
	mango2 = new Mango(1150,120,30)
	mango3 = new Mango(1200,220,26)
	mango4 = new Mango(1250,180,34)
	mango5 = new Mango(970,110,28)
	mango6 = new Mango(1230,240,30)
	mango7 = new Mango(1210,210,42)
	mango8 = new Mango(930,150,40)
	mango9 = new Mango(1160,230,36)
	mango10 = new Mango(1000,200,32)

	groundObject=new Ground(width/2,590,width,20); 
	
	launcherObject=new Launcher(stone.body,{x:235,y:420})


    

	Engine.run(engine);
  
}


function draw() {
  background(220);

	Engine.update(engine)  
	imageMode(CENTER)
	image(tree,1050,300,500,600)
	image(boy,300,500,200,300)


	groundObject.display();
	launcherObject.display();
	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango9.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango10.display();

detectollision(stone,mango1);
detectollision(stone,mango2);
detectollision(stone,mango3);
detectollision(stone,mango4);
detectollision(stone,mango5);
detectollision(stone,mango6);
detectollision(stone,mango7);
detectollision(stone,mango8);
detectollision(stone,mango9);
detectollision(stone,mango10);


  drawSprites();
 
}

function detectollision(lstone,lmango){
	 mangoBodyPosition=lmango.body.position
	  stoneBodyPosition=lstone.body.position
	   var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	    if(distance<=lmango.r+lstone.r){
			 Matter.Body.setStatic(lmango.body,false);
			 }
			 }

	function mouseDragged(){
		Matter.Body.setPosition (stone.body,{x:mouseX,y:mouseY})

	}

	function mouseReleased(){
		launcherObject.fly();

	}

	function keyPressed(){
		if (keyCode === 32){
			Matter.Body.setPosition(stone.body,{x:235,y:420})
			launcherObject.attach(stone.body)
		}
	}