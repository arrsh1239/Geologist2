class Hammer {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y,50,50, options);
    this.width = 200;
    this.height = 30;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    pos.x = mouseX
    pos.y = mouseY
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    stroke ("yellow")
    strokeWeight(3)
    fill("yellow");
    rect(0, 0, this.width, this.height);
    pop();
  }
};