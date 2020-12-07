var score;
var canvasWidth = 400;
var canvasHeight = 600;
var score = 0 ;
var bird;
var wall,wall2,wall3;
var walls = {wall,wall2}
var thewall;
var gameOver=false;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(40);
  score =0 ;
  bird = new Bird();
  bird.Bird();

  wall = new Wall();
  wall2 = new Wall();
  wall3 = new Wall();

  wall.Wall();
  wall2.Wall();
  wall3.Wall();

  wall2.resetPosition(1.5);
  wall3.resetPosition(2);
}

function draw() {
  background(0);
  fill(99,29,88);
  bird.show();
  bird.fall();

  wall.show();
  wall.move();

  wall2.show();
  wall2.move();

  wall3.show();
  wall3.move();

  updateScore();
  if (wall.isOut){
    wall.resetPosition(1.5);
    score += 1 ;
  }

  if (wall2.isOut){
    wall2.resetPosition(1.5);
    score += 1 ;
  }

  if (wall3.isOut){
    wall3.resetPosition(1.5);
    score += 1 ;
  }
  bird.checkifdead(wall);
  bird.checkifdead(wall2);
  bird.checkifdead(wall3);

  if (bird.touchesWall || bird.touchesSide){
    gameOver = true
  }
  if (gameOver ){
    bird.pause();
    wall.pause();
    wall2.pause();
    wall3.pause();
    background(255,255,255,127)
    textSize(32);
    fill(50,0,0,127);
    text('  Game over \n \n Your Score : '+
      score +"\n Tap To replay!",
      canvasWidth/2-100, canvasHeight/2);
  }
}

function keyPressed() {
  if(keyCode ===UP_ARROW){
    if (!bird.isPaused) {
      bird.jump();
    }
    else {}
  }
  mouseClicked();
}

function mouseClicked(){
  if(gameOver ){
    setup();gameOver = false;
  }
}

function updateScore(){
  textSize(20);
  fill(255,255,255);
  text(score,canvasWidth-50, 50);
}


