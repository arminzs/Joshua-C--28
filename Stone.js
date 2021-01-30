class Stone{
    constructor(x,y,width,height){
        //declaring options for the body in JSON format
        var groundOptions={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2      
        }
        
        //adding ground to the Physics Engine
        this.body = Bodies.rectangle(x,y,width,height,groundOptions);
        this.width=width
        this.height=height
        this.image=loadImage("stone.png")
        World.add(world, this.body);  
    }
    display(){
        push ()
        translate (this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image,0,0,this.width*2,this.height*2)
        pop ()
    }
}



