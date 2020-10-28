class Polygon  {
    constructor(x,y,width,height)  {
        var options={
            isStatic:true
        }
        this.width = width
        this.height = height
        this.polygon = Bodies.rectangle(x,y,width,height,options)
        this.image = loadImage("polygon.png")

        World.add(world,this.polygon)

    }
    display()  {
        imageMode(CENTER)
        image(this.image,this.polygon.position.x,this.polygon.position.y,this.width,this.height)

    }
}