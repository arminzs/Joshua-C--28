
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
const Render=Matter.Render;


var ground;
var tree;
var boyImage;
var mango1, mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
var stone;
var string1;

function preload()
{
	boyImage=loadImage("boy.png")
}

function setup() {
	createCanvas(800,600);

	engine = Engine.create();
	world = engine.world;

/*
  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes:true
	  }
	});
  Render.run(render);   */
  
  //Create the Bodies Here.
  
  stone=new Stone(135,420,30,30); 

	
  ground=new Ground(width/2,600,width,20);	
	tree=new Tree(550,380,10,500);
 
  mango1=new Mango(550,200,30,30);
  mango2=new Mango(620,230,30,30);
	mango3=new Mango(510,240,30,30);
	mango4=new Mango(500,170,30,30);
	mango5=new Mango(500,170,30,30);
	mango6=new Mango(500,330,30,30);
	mango7=new Mango(400,330,40,40);
	mango8=new Mango(540,250,40,40);
	mango9=new Mango(500,330,40,40);
  string1=new Rubber(stone.body,{x:135,y:420})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
   
  ground.display()
  tree.display()
  image(boyImage,100,340,200,300)
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  stone.display()
  string1.display()
  
  hitMango(stone,mango1)
  hitMango(stone,mango2)
  hitMango(stone,mango3)
  hitMango(stone,mango4)
  hitMango(stone,mango5)
  hitMango(stone,mango6)
  hitMango(stone,mango7)
  hitMango(stone,mango8)
  hitMango(stone,mango9)
}

function mouseDragged(){
  
      Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
 
}



function mouseReleased(){
  string1.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  string1.attach(stone.body);
	}
  }



  function hitMango(lstone,lmango){
    

    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position
    
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
     
      if(distance<=(lmango.width+lstone.width))
      {
         console.log("hit")
        Matter.Body.setStatic(lmango.body,false);
      }
  
    }