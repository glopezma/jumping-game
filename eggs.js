function Egg(){
  this.x = width/2;
  this.y = height-20;
  this.r = 10;
  this.taken = false;

  this.show = function(){
    fill(255);
    if(!this.taken){
      ellipse(this.x, this.y, this.r, this.r);
    }
  }
}
