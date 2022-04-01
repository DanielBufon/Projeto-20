
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var quadrado,circulo,retangulo,chao
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	var options = {isStatic : true}
	//Crie os Corpos Aqui.
    chao = Bodies.rectangle (400,680,800,20,options)
    World.add(world,chao)
	Engine.run(engine);
    quadrado = Bodies.rectangle (400,50,60,60)
    World.add(world,quadrado)
    retangulo = Bodies.rectangle (300,50,60,40)
    World.add(world,retangulo)
    circulo = Bodies.circle (500,50,50)
	World.add (world,circulo)
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(chao.position.x,chao.position.y,800,20)
  rect (quadrado.position.x,quadrado.position.y,60,60)
  rect (retangulo.position.x, retangulo.position.y,60,40)
  ellipse (circulo.position.x,circulo.position.y,50)
  drawSprites();
 
}



