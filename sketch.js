var loading = true;
var jumpMan;
var song;
var eggs; // = [];
var score;

// function preload(){
//
// }

function load() {
  //song.loop();
  loading = false;
}

function loadingScreen() {
  textAlign(CENTER);
  textSize(24);
  text("LOADING", width / 2, height / 2);
}

function setup() {
  var canvas = createCanvas(600, 600);
  song = loadSound('Music/RunningMusic.ogg', load);
  jumpMan = new Character();
  eggs = new Egg();
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
    if (jumpMan.grab(eggs)) {
      score.increase();
    }
    eggs.show();
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
