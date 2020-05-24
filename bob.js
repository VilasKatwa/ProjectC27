class Bob {
  constructor(x, y, r) {
    var options = {
        'restitution':1.2,
        'friction':0.3,
        'density':5.0
    }
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    this.dia = r*2
    World.add(world, this.body);


  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    //strokeWeight(1);
    fill(255);
    circle(0, 0, this.dia);
    line(0,0,this.body.r,0);
    pop();
  }
};
