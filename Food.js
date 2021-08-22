class Food{
    constructor(){
    this.image = loadImage("Images/Milk.png")
    this.foodStock = 0
    }

    updateFoodStock(FS){
        this.foodStock = FS;

    }
    getFoodStock(){
        return this.foodStock;
    }
    deductFood(){
        this.foodStock = this.foodStock - 1;        

    }
    display(){
        imageMode(CENTER);
        var x = 50;
        var y = 200; 
        for(var i = 0; i<this.foodStock; i = i+1){
          if(i%10 === 0){
              
              y = y + 100;
              x = 50;
          }
            image(this.image, x, y, 50, 50);
            x = x + 70
        }
    }
 }
 