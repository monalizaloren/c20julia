
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
    //????
    /*Isso simula a resistência do ar ao movimento do objeto. Quanto maior o valor, mais resistência do ar o objeto terá. */
    //????
  }

  var rock_options = {
    //????

  }
   
   var ground_options ={
     //????
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  //criar wall(chão)

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  //criar ball2(bola2)
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  /*Esta linha desenha uma elipse (círculo) na posição atual da bola (ball.position.x e ball.position.y).
  A última entrada 20 define o raio da elipse, */
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);

  //crie a bola 2 e wall (parede)
  //???
 
}

