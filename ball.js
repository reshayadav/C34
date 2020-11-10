class Ball{
    constructor(x,y,r){
        var options={
            density :1,
            frictionAir :0.005
        }

        this.body = Bodies.circle(x,y,r,options);
        World .add(world,this.body);
        this.radius = r;
    }

    display(){
        var pos = this.body.position;
        push ();
        fill ("red");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius);
        pop ();
    }
}