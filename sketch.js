const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var monster;
function preload() {
//preload the images here

ground = loadImage("GamingBackground.png");
monster = loadImage("Monster-01.png");

}

function setup() {
  createCanvas(1500, 400);
  // create sprites here

  engine = Engine.create();
  world = engine.world;

  gr = new Ground(600, 300, 1000, 10);

  box1 = new Box(570, 280, 50, 50);
  box2 = new Box(570, 180, 50, 50);
  box3 = new Box(570, 140, 50, 50);
  box4 = new Box(570, 100, 50, 50);

  box5 = new Box(680, 280, 50, 50);
  box6 = new Box(680, 180, 50, 50);
  box7 = new Box(680, 140, 50, 50);
  box8 = new Box(680, 100, 50, 50);

  box9 = new Box(750, 280, 50, 50);
  box10 = new Box(750, 180, 50, 50);
  box11 = new Box(750, 140, 50, 50);
  box12 = new Box(750, 100, 50, 50);

  box13 = new Box(820, 280, 50, 50);
  box14 = new Box(820, 180, 50, 50);
  box15 = new Box(820, 140, 50, 50);
  box16 = new Box(820, 100, 50, 50);

  hero = new Hero(100, 100, 140, 50);

  rope = new Fly(hero.body, {x: 100, y: 0});

}

function draw() {
  background(ground);
  Engine.update(engine);

  image(monster, 1300, 100, 100, 100);

  gr.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();

  box5.display();
  box6.display();
  box7.display();
  box8.display();

  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();
  box16.display();

  hero.display();

 rope.display();

}


function mouseDragged(){

Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY})

}