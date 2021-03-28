class Box{
    constructor(x,y,width,height){
        var options={
            'ristitution':0.4,
            'friction':0.2,
            'density':1.2
        }
        


        this.body=Bodies.rectangle(x,ywidth,height,options)
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        rectMode(CENTER)
        ellipse(0,0,this.radius,this.radius)
        pop();
    }

}