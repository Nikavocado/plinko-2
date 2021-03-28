var Engine=Matter.Engine
World=Matter.World
Events==Matter.Events
Bodies=Matter.Bodies
var particles=[]
var plinkos=[]
var divisions=[]
var divisionHeight=300;
var score=0;


function setup() {  
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world();
  ground=new Ground(width/2,height,width,20)
  for(var k=0; k<=width; k=k+80){
    divisions.push(new Divisions(k, height-divisionsHeight/2,10,divisionsHeight))
  }
  for(var j=40; j<=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75))
  }
  for (var j=15; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175));

  }
  createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  
  textSize(20)
  Engine.update(engine);
  ground.display();

  for(var j=0; j< particles.length; j++){
    particles[j].display();

  }
  for(var k=0; k< divisions.length; k++){
    divisions[k].display();

  }

  if(frameCount%60===0){
    particles.push(new Particle(random(100,700),10,10))
    score++
  }
  for(var j=0; j<particles.length; j++){
    particles[j].display();

  }
  for(var k=0;k<divisions.length; k++){
    divisions[k].display();
  }
  function mousePressed()
  {
    if(gameState!=="end")

    {
      particle=new Particle(mouseX,10,10,10);
    }
  }
  if(particle!=null)
{
  particle.display();
  if(particle.body.position.y>760)
  {
    score=score+500;
    particle=null;
  }
}

  drawSprites();
}