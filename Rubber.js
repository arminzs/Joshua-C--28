class Rubber{
	constructor(body,point2)
	{
		
		var options={ bodyA:body,			 
			pointB:point2, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=point2
		this.rubber=Constraint.create(options)
		World.add(world,this.rubber)
	}

	attach(body){
		this.rubber.bodyA=body;
	}

	fly()
	{
		this.rubber.bodyA=null;
	}

	display()
	{
		if(this.rubber.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}