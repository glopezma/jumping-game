function Platform(x, y, w) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.left = this.x;
  this.right = this.x + this.w;
}

Platform.prototype.show = function() {
  stroke(255);
  strokeWeight(10);
  line(this.x, this.y, this.w + this.x, this.y);
}
