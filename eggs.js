function Egg(x, y) {
  this.x = x;
  this.y = y;
  this.r = 10;
  this.taken = false;
}

Egg.prototype.show = function() {
  fill(255);
  if (!this.taken) {
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.r, this.r);
  }
}
