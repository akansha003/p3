class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball

       var options ={
		  'restitution':1.0,
		   'density':0.5,
		   'friction':4
		
		  
	   }

		this.x=x;
		this.y=y;
		this.r=r;
		
		this.body=Bodies.circle(this.x, this.y,(this.r-20)/2, options)
		
		World.add(world, this.body);

	}
	display()
	{		
			var rubberpos=this.body.position;	
			

		
			
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
            
			ellipse(0,0,this.r,this.r);
			
			if(rubberpos.x>canvas.width && rubberpos.y>canvas.height )
			{
				rubberpos.x= rubberpos.x-4;
				rubberpos.y= rubberpos.y-4;
			}
			
			
			pop()
	}

}