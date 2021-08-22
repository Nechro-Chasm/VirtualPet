var dog,sadDog,happyDog;
var foodObj, feed, addFood;
var database;
var currentFoodS, FS;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,800);
  database = firebase.database()
 
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  foodObj = new Food()
  currentFoodS = database.ref("food");
  currentFoodS.on("value", readStock)

  feed = createButton("Feed The Dog");
  feed.position(700, 100);
  feed.mousePressed(feedTheDog);

  addFood = createButton("Add Food");
  addFood.position(800, 100);
  addFood.mousePressed(increaseFoodStock);

}
function draw() {
  background("yellow");
  foodObj.display();
  drawSprites();

}

function feedTheDog(){
  dog.addImage(happyDog)
  foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  database.ref("/").update({
    food:foodObj.getFoodStock()
  })
}
function increaseFoodStock(){
 FS = FS + 1;
 database.ref("/").update({
   food:FS
 })

}

function readStock(data){
  FS = data.val()
  foodObj.updateFoodStock(FS)

}


//function to update food stock and last fed time


//function to add food in stock
