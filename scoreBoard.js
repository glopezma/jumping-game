function ScoreBoard() {
  this.x = width / 2;
  this.y = 50;
  this.value = 0;
}

ScoreBoard.prototype.show = function() {
  textAlign(CENTER);
  strokeWeight(1);
  if (this.value === eggs.length*100) {
    text('Congradulations!', width/2, height/2);
  } else {
    text(this.value, this.x, this.y);
  }
}

ScoreBoard.prototype.increase = function() {
  this.value += 100;
}
