var walkingmanImg,walkingman
var backgroundImg

function preload(){
     walkingmanImg = loadImage("walking_1.png");
     backgroundImg = loadImage("1.png")
}

function setup(){
   walkingman = createSprite(100,100,10,10);
   walkingman = addImage(walkingmanImg);
   background = addImage(backgroundImg);
    
}

function draw(){
    walkingman.display();
    background.display();
}   


