class constraint 
{
    constructor(bodyA,pointB)
    {

    var options={

        bodyA:bodyA,
        pointB:pointB,
        length:5,
        stiffness:0.01

    }
    
    this.chain=Constraint.create(options);
    World.add(world,this.chain);
    }
   

    fly(){
        this.chain.bodyA=null;
    }

    attacher(bodyA){
        this.chain.bodyA=bodyA;
    }

    display(){
        if(this.chain.bodyA){
            strokeWeight(4);
            line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y);
        }
    }
}
