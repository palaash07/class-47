class Bullet {
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    display(){
        fill(200);
        rect(this.x,this.y,this.width,this.height);
    }
}