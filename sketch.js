var jumpMan;

function preload(){

}

function setup(){
  createCanvas(600,600);
  jumpMan = new Character();
}

function draw(){
  background(51);

  move();
  jumpMan.move();
  jumpMan.show();

}

function move(){
  if(!keyIsDown(LEFT_ARROW) && !keyIsDown(RIGHT_ARROW) || keyIsDown(LEFT_ARROW) && keyIsDown(RIGHT_ARROW)){
    jumpMan.setDir(0);
  }
  else if(keyIsDown(LEFT_ARROW)){
    jumpMan.setDir(-1);
  }
  else if(keyIsDown(RIGHT_ARROW)){
    jumpMan.setDir(1);
  }
}

function keyPressed(){
  if(key === ' '){
    jumpMan.jump();
  }
}
