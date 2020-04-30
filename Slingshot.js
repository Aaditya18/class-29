class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.s1image=loadImage("./sprites/sling1.png")
        this.s2image=loadImage("./sprites/sling2.png")
        this.rimage=loadImage("./sprites/sling3.png")
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.s1image,200,20)
        image(this.s2image,170,20)
    
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(7);
            stroke(84,39,15)
            line(pointA.x, pointA.y, pointB.x-10, pointB.y-30);
            line(pointA.x,pointA.y,pointB.x+30,pointB.y-50);
            image(this.rimage,pointA.x-20,pointA.y,15,30)

        }
    }
    
}