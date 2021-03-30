const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var kid;

var ground;

var backgroundImage;

var snowImage1, snowImage2;

function preload() {
  backgroundImage = loadImage("snow2.jpg");
  snowImage1 = loadImage("snow4.webp");
  snowImage2 = loadImage("snow5.webp");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  kid = new kids(200,200,100,100);

  ground = new Ground(300,300);

  snow = new Snow(200,200,20,20);
  snow2 = new Snow(300,300,20,20);
  //snow = loadImage(snowImage1);
   
}

function draw() {
  background(backgroundImage);  
  Engine.update(engine);
  
  snow.display();
  snow2.display();
  
  kid.display();
  ground.display();

  drawSprites();
}