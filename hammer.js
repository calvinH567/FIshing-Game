class Hammer {
    constructor(x,y){
        this.x = x,this.y = y;
        this.body = Bodies.rectangle(this.x,this.y,50,50);
        World.add(world,this.body);
    }
}