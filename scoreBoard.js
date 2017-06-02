function ScoreBoard(){
  this.x = width/2;
  this.y = 50;
  this.value = 0;

  this.show = function(){
    textAlign(CENTER);
    text(this.value, this.x, this.y);
  }

  this.increase = function(){
    this.value += 100;
  }
}
