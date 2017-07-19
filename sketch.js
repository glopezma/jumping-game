var loading = true;
var jumpMan;
var platform = [];
var song;
var eggs = [];
var score;



function load() {
  song.loop();
  loading = false;
}

function loadingScreen() {
  textAlign(CENTER);
  textSize(24);
  text("LOADING", width / 2, height / 2);
}

function setup() {
  var canvas = createCanvas(1200, 900);
  song = loadSound('Music/RunningMusic.ogg', load);
  jumpMan = new Character();
  // platform = new Platform(width / 2 - 50, height - 50, 100);
  for(var i = 0; i<20; i++){
    eggs.push(new Egg(random(5, width-5), random(5, height-5)));
  }
  score = new ScoreBoard();

  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;

  canvas.position(x, y);
}

function draw() {
  background(51);

  if (loading) {
    loadingScreen();
  } else {
    move();
    jumpMan.move();
    jumpMan.show();
    for(var i=0; i<eggs.length; i++){
      if (jumpMan.grab(eggs[i])) {
        score.increase();
      }
      eggs[i].show();
    }
    for (var i = 0; i < platform.length; i++) {
      platform[i].show();
    }
    score.show();
  }
}

function move() {
  if (!keyIsDown(LEFT_ARROW) && !keyIsDown(RIGHT_ARROW) || keyIsDown(LEFT_ARROW) && keyIsDown(RIGHT_ARROW)) {
    jumpMan.setDir(0);
  } else if (keyIsDown(LEFT_ARROW)) {
    jumpMan.setDir(-1);
  } else if (keyIsDown(RIGHT_ARROW)) {
    jumpMan.setDir(1);
  }
}

function keyPressed() {
  if (key === ' ') {
    jumpMan.jump();
  }
}

function mouseClicked() {
  platform.push(new Platform(mouseX - 50, mouseY, 100))
}
