
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var hammer;
var plane;
var rubber;
var iron;
var stone;
var edges;


function setup(){
    var canvas = createCanvas(1200,600);



    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(900,450,70);
    iron = new Iron(300,350);
    stone = new Stone(700,320,10,10);
 
    


}

function draw(){




    //drawSprites();
    background("lightBlue");
    //edges = createEdgeSprites();
    Engine.update(engine);



    plane.display();
   // rubber.bounceOff(edges);
    hammer.display();
    rubber.display();
    iron.display();
    stone.display();
   
}

