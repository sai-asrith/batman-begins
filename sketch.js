const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var maxDrops;
var engine;
var world;
var maxDrops = 100;

var rainDrops = []
function setup(){
   engine = Engine.create();
   world = engine.world
   createCanvas(400,800);
   if(frameCount % 200 == 0){
    for(var i = 0 ; i < maxDrops;i++){
        rainDrops.push(new Drops(random(0,400), random(0,400)));
    }
   
}
  
}

function draw(){
    background(0)
    Engine.update(engine)
    for(var i = 0 ; i < maxDrops ; i++){
        rainDrops[i].display()
        rainDrops[i].update();
    }
    drawSprites();

}   

