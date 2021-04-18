    class Paper{
    constructor(x,y,radius){
    var options = {
        restitution:0.8,
        friction:0.1,
        density:0.001,
        
        
    }
    this.body = Bodies.circle(300,300,10,options);
this.radius = 10;
    World.add(world,this.body);
    
    }


display(){
var pos = this.body.position;
push();
ellipseMode(RADIUS);
fill("green");
strokeWeight(4);
stroke("orange");
ellipse(pos.x,pos.y,this.radius,this.radius);


pop();
}
 
}
