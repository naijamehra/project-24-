class Paper {
    constructor(x, y) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x, y, 50, 70, options);
      this.width = 70;
      this.height = 70;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      circleMode(CENTER);
      strokeWeight(3);
      stroke("red");
      fill(255);
      circle(0, 0, this.radius);
      pop();
    }
  };