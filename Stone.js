class Stone
{
    constructor(x,y,r)
    {
        var options=
        {
            'restitution':0.3,
            'isStatic':false,
            'friction':0.5,
            'density':1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.image = loadImage('stone.png');
        
    }

    display()
    {
        var stonepos=this.body.position;
        push()
        translate(stonepos.x,stonepos.y);
        imageMode(CENTER);
        image(this.image,100,100,50,50);
        pop()
    }
}