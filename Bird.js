
class Bird {

  Bird() {
    this.x = 100;
    this.y = 200;
    this.d= 30;
    this.gravity = 8;//5
    this.jumpforce = 0;
    this.touchesWall = false;
    this.touchesSide = false;
    this.isPaused = false;
  }
  show() {
    fill(185, 20, 0);
    ellipse(this.x, this.y, this.d, this.d);
  }
  fall() {
    this.y += this.gravity + this.jumpforce;
    if (this.jumpforce != 0) {
      this.jumpforce = this.jumpforce + 2;
    }
  }
  jump() {
    bird.jumpforce -= 24;
  }
  pause() {
     this.gravity = 0;
    this.jumpforce = 0;
    this.isPaused = true ;
    
  }


  checkifdead(wall) {
    
    if (wall.x  - this.d/2< this.x  && this.x < wall.x + wall.thick + this.d/2) {
      if ( this.y + this.d/2 > wall.y ||wall.y - wall.hole + this.d/2 >this.y ) {
        this.touchesWall = true;
     }
    }
    if(canvasHeight < this.y+this.d/2  || this.y < this.d/2 ) {
      this.touchesSide = true;
       }
  }
}