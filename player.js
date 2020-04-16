class Player {
    constructor(x,y){
       this.x = x;
       this.y = y;
       this.xdir = 0;
       this.image = loadImage("")
    }
   
   display(){
       fill(255);
       imageMode(CENTER);
       image(this.image,this.x,height-50,50,50);
   } 
   setDir(dir){
       this.xdir = dir;
   }
   move(dir){
   this.x = this.x+dir*4;
   }
}