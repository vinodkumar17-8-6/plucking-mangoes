class Mango
{
    constructor(x,y,r)
    {
        var options=
        {
            'restitution':0.3,
            'isStatic':true,
            'friction':0.5,
            'density':1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
        this.image = loadImage('mango.png');
        
    }

    display()
    {
        var mangopos=this.body.position;
        push();
        translate(mangopos.x,mangopos.y);
        imageMode(RADIUS);
        image(this.image,0,-40,85,85);
        pop();
    }
}