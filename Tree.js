class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage('tree.png');
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      World.add(world, this.body);
    }
    display(){

        imageMode(CENTER);
        image(this.image,1000,350,-600,-600);
     
    }
  };