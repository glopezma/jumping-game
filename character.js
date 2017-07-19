function Character() {
  //location
  this.x = width / 2;
  this.y = height / 2;

  //dimension
  this.height = 60;
  this.width = 40;

  this.left = this.x - this.width / 2;
  this.right = this.x + this.width / 2;
  this.top = this.y - this.height / 2;
  this.bottom = this.y + this.height / 2;

  //movement
  this.lift = -9;
  this.gravity = 0.4;
  this.yvel = 0;
  this.xvel = 4;
  this.xdir = 0;
}

Character.prototype.show = function() {
  fill(173, 66, 244);
  noStroke();
  rectMode(CENTER);
  rect(this.x, this.y, this.width, this.height);
  // image(img, this.x, this.y, this.r*2, this.r*2)
}

Character.prototype.move = function() {
  //move up and down
  this.yvel += this.gravity;
  this.y += this.yvel;

  //move left and right
  this.x += this.xdir * this.xvel;

  this.left = this.x - this.width / 2;
  this.right = this.x + this.width / 2;
  this.top = this.y - this.height / 2;
  this.bottom = this.y + this.height / 2;

  if (this.bottom > height) {
    this.y = height - this.height / 2;
    this.yvel = 0;
  }
  var platformTemp;
  for (var i = 0; i < platform.length; i++) {
    platformTemp = platform[i];
    if (this.touching(platformTemp)) {
      this.y = platformTemp.y - this.height / 2;
      this.yvel = 0;
    }
  }
}

Character.prototype.jump = function() {
  if (this.yvel === 0) { //to make sure they are not already jumping
    this.yvel += this.lift;
  }
}

Character.prototype.setDir = function(dir) {
  this.xdir = dir;
}

Character.prototype.touching = function(platform) {
  return (this.bottom > platform.y &&
    !(this.bottom - 10 > platform.y) &&
    this.yvel > 0 &&
    !(this.right < platform.left ||
      this.left > platform.right));
}

Character.prototype.grab = function(egg) {
  if (!(this.left > egg.x + egg.r || this.right < egg.x - egg.r || this.bottom < egg.y - egg.r || this.top > egg.y + egg.r)) {
    egg.taken = true;
    egg.x = -100;
    egg.y = -100;
    return true;
  }
  return false;
}
