class fish{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height);
        this.emptyArray = []
        World.add(world,this.body)
    }
    display(){
        
        var pos = [this.body.position.x,this.body.position.y];
        this.emptyArray.push(pos);
        
        rect(this.body.position.x,this.body.position.y,this.width,this.heigh);
        this.emptyArray.pop();        
        //pop ()
    }
  
    
}