class Hero {
   constructor(x, y, width, height, angle) {
     var options = { 
       density: 1, 
       frictionAir: 0.005};
 
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = width;
     this.height = height;
     this.image = loadImage("superhero-01.png")
     World.add(world, this.body);
   }
 
   display() {
     var angle = this.body.angle;
     var pos = this.body.position;
     push();
     fill(0);
     translate(this.body.position.x, this.body.position.y);
     rotate(angle);
     image(this.image, pos.x, pos.y, this.width, this.height);
     pop();
   }
 }