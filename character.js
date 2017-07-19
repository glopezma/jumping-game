function Character() {
  this.x = width / 2;
  this.y = height / 2;
  this.lift = -15;
  this.gravity = 0.6;
  this.yvel = 0;
  this.xvel = 4;
  this.xdir = 0;
  this.height = 60;
  this.width = 40;
}

Character.prototype.show = function() {
  fill(173, 66, 244);
  rect(this.x, this.y, this.width, this.height);
  rectMode(CENTER);
}

Character.prototype.move = function() {
  //move up and down
  this.yvel += this.gravity;
  this.yvel *= 0.9;
  this.y += this.yvel;

  //move left and right
  this.x += this.xdir * this.xvel;

  if (height - this.height / 2 > height) {
    this.y = height - this.height / 2;
    this.yvel = 0;
  } else if (this.touching(platfrom)) {
    this.y = platform.y - this.height / 2;
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
  return (this.y / 2 === platform.y &&
    !(this.x + this.width / 2 > platform.x + platform.width / 2 ||
      this.x - this.width / 2 < platform.x - platform.width / 2));
}

Character.prototype.grab = function(egg) {
  if (dist(this.x, this.y, eggs.x, egg.y) < 25) {
    egg.taken = true;
    egg.x = -100;
    egg.y = -100;
    return true;
  }
  return false;
}
