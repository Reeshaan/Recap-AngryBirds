const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;


var engine,world;
var ground;
var box01,box02,box03,box04,box05,box06,box07,box08
var box09,box10,box11,box12,box13,box14,box15,box16
var box17,box18,box19,box20,box21,box22,box23,box24
var wreckingBall;
var rope

function setup() {
  createCanvas(3000,800);
  

  engine=Engine.create();
  world=engine.world;

  ground=new Ground(750,600,1500,20);
  box01=new Box(900,100,70,70);
  box02=new Box(900,100,70,70);
  box04=new Box(900,100,70,70);
  box05=new Box(900,100,70,70);
  box03=new Box(900,100,70,70);
  box06=new Box(900,100,70,70);
  box07=new Box(900,100,70,70);
  box08=new Box(900,100,70,70);

  box09=new Box(800,100,70,70);
  box10=new Box(800,100,70,70);
  box11=new Box(800,100,70,70);
  box12=new Box(800,100,70,70);
  box13=new Box(800,100,70,70);
  box14=new Box(800,100,70,70);
  box15=new Box(800,100,70,70);
  box16=new Box(800,100,70,70);

  
  box17=new Box(700,100,70,70);
  box18=new Box(700,100,70,70);
  box19=new Box(700,100,70,70);
  box20=new Box(700,100,70,70);
  box21=new Box(700,100,70,70);
  box22=new Box(700,100,70,70);
  box23=new Box(700,100,70,70);
  box24=new Box(700,100,70,70);

  wreckingBall=new WreckingBall(400,200,50);

  rope=new SlingShot(wreckingBall.body,{x:375,y:200})

}

function draw() {
  background("orange"); 
  Engine.update(engine)
  ground.display();
  box01.display();
  box02.display();
  box03.display();
  box04.display();
  box05.display();
  box06.display();
  box07.display();
  box08.display();
  box09.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();

  wreckingBall.display();

 // rope.display();
  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(wreckingBall.body,{x:mouseX,y:mouseY})
}