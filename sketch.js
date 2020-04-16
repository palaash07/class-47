var player;
var virus;
var bullet;

function setup() {
  createCanvas(800,400);
  player = new Player(200,200);
  virus = new Virus(300,250,10);
  bullet = new Bullet(200,300,15);
}

function draw() {
  background(255,255,255);  
  player.display();
  virus.display();
  bullet.display();
  }