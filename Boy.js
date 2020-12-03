class Boy {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage('boy.png')
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("grey");
      image(this.image,200,570,-300,-300);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };