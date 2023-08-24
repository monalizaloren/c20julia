
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ball2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    /*restitution: Isso controla a elasticidade de um objeto, ou seja, o quão bem ele irá quicar quando colidir com outras superfícies. */
    restitution: 0.95,
    /*Isso simula a resistência do ar ao movimento do objeto. Quanto maior o valor, mais resistência do ar o objeto terá. */
    frictionAir:0.01
  }

  var rock_options = {
    restitution: 0.85,

  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  wall = Bodies.rectangle(300,200,200,20,ground_options);
  World.add(world,wall);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  ball2 = Bodies.circle(250,10,20,rock_options);
  World.add(world,ball2);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  /*Esta linha desenha uma elipse (círculo) na posição atual da bola (ball.position.x e ball.position.y). A última entrada 20 define o raio da elipse, */
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);

  ellipse(ball2.position.x,ball2.position.y,20);
  rect(wall.position.x,wall.position.y,200,20);
 
}

