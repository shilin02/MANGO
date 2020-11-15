class Mango{
    constructor(x,y,r){
        var options = {
            'isStatic' : true,
            'restitution' : 0,
            'friction' : 1
        }

        this.x = x
        this.y = y
        this.r = r
        this.image = loadImage("mango.png")
        this.body = Bodies.circle(x,y,r,options)
        World.add(world,this.body)
    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        fill(128,128,128)
        image(this.image,0,0,this.r,this.r)
        pop();
    }
}