class Rope {
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.r = bodyA.r;

        var options = {
        bodyA:bodyA,
        bodyB:bodyB,
        pointA:{x:0,y:-10},
        pointB:{x:this.offsetX, y:this.offsetY},
        stiffness:1
            }
        
       this.pointA  = bodyA.position;
       //this.pointA  = {x:bodyA.position.x, y:bodyA.position.y -10};
       this.pointB  = {x:bodyB.position.x+offsetX, y:bodyB.position.y};
       this.rope = Constraint.create(options);
       World.add(world, this.rope);

    }

    display(){
        
       var pointA = this.rope.bodyA.position;    
      // var pointA= this.pointA
       var pointB = this.pointB;
        push();
        strokeWeight(2);
        stroke(255);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
   
}