
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var fishColor = 0;
var timeCountDownGlobal = 0;
function preload()
{
	
}

function setup() {
	dayTime();
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	fish1 = new fish(300,400,75,75);
	fish2 = new fish(300,400,75,75);
	fish3 = new fish(300,400,75,75);
	ground = new Ground(400,700,800,25);
	ground2 = new Ground(0,350,25,800);
	ground3 = new Ground(800,350,25,800);
	ground4 = new Ground(400,0,800,25);
	hammer = new Hammer(0,0)

	Engine.run(engine);
  
}


function draw() {
	background(rgb(0,fishColor,fishColor));

  rectMode(CENTER);
  textSize(50)
  text (timeCountDownGlobal,700,100);
   fill (rgb(0,0,fishColor));
  fish1.display();
  fish2.display();
  fish3.display();
  ground .display();
  drawSprites();
  	dayTime();
 Matter.Body.setPosition(hammer.body,{x:mouseX,y:mouseY});
}
   
async function dayTime(){
    var dataContainer = await fetch("http://worldtimeapi.org/api/timezone/America/Los_Angeles");
    var dataStorages = await dataContainer.json();

 	var time = dataStorages.datetime
	var timeMin = time.slice(14,16);
	var timeCountDown = time.slice(17,19);
	fishColor = timeMin*4.25;
	timeCountDownGlobal = timeCountDown;
	console.log(fishColor);
	
	

}    



