class Virus {
    constructor(x,y,radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    display(){
        fill(230);
        ellipseMode(RADIUS);
        ellipse(this.x,this.y,this.radius);
    }
}