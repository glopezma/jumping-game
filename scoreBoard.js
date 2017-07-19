function ScoreBoard() {
  this.x = width / 2;
  this.y = 50;
  this.value = 0;
}

ScoreBoard.prototype.show = function() {
  textAlign(CENTER);
  text(this.value, this.x, this.y);
}

ScoreBoard.prototype.increase = function() {
  this.value += 100;
}
