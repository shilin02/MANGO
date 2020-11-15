class Launcher{
    constructor(body,point){
        var options = {
            'bodyA':body,
            'pointB':point,
            'stiffness':0.05,
            'length':1
        }

        this.bodyA = body
        this.pointB = point

        this.Launcher = Constraint.create(options)
        World.add(world,this.Launcher)
    }

    attach(body){
     this.Launcher.bodyA = body
    }
    fly(body){
        this.Launcher.bodyA = null
       }
    

    display(){
       if(this.Launcher.bodyA){
          var point1 = this.bodyA.position
          var point2 = this.pointB
          strokeWeight(3)
          line(point1.x,point1.y,point2.x,point2.y)
          
       }
    }
}