var dog,dogImage,dogImg1;
var database;
var foodS,foodStock;



//Create variables here

function preload()
{
  dogImg=loadImage("Images/Dog.png");
  dogImg1=loadImage("Images/happy dog.png");
  
}

function setup() {
  database=fireBase.database();
  createCanvas(800, 700);
  

  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

  foodStock=database.ref("Food");
  foodStock.on("value",readStock);
  textSize(20);
  
}


function draw() {
  backGround(46,139,87);
  
  if(keyWentDown(UP_ARROW)){
    writeStock(data);
    dog.addImage(dogImg1);
    }
  }

  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining :"+foodS,170,200);
  textSize(13);
  text("Note:Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
  //add styles here
  

  function readStock() {
foodS=data.val();
  }

  function writeStock(){
    if(x<=0){
      x=0;
    }else{
      x=x-1;
    }
    database.ref('/').update({
      Food:x
    })
  }




