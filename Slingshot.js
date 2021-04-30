class  Slingshot{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:20,
            stiffness:0.05
        }
        this.slingshot=Constraint.create(options);
        World.add(world,this.slingshot)
    }
    display(){
        var pointA=this.slingshot.bodyA.position;
        var pointB=this.slingshot.bodyB.position
        push();
        stroke("brown")
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}