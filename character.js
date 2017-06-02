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

  this.show = function() {
    fill(173, 66, 244);
    rect(this.x, this.y, this.width, this.height);
    rectMode(CENTER);
  }

  this.move = function() {
    //move up and down
    this.yvel += this.gravity;
    this.yvel *= 0.9;
    this.y += this.yvel;

    //move left and right
    this.x += this.xdir * this.xvel;

    if (this.y + this.height / 2 > height) {
      this.y = height - this.height / 2;
      this.yvel = 0;
    }
  }

  this.jump = function() {
    if (this.yvel === 0) {
      this.yvel += this.lift;
    }
  }

  this.setDir = function(dir) {
    this.xdir = dir;
  }


  this.grab = function(egg) {
    if (dist(this.x, this.y, eggs.x, egg.y) < 25) {
      egg.taken = true;
      egg.x = -100;
      egg.y = -100;
      return true;
    }
    return false;
  }

}
