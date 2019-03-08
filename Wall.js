class Wall {
  Wall(){
  this.len=2000;
  this.thick=50;
  this.hole = 150 ;
  this.x=canvasWidth;
  this.range = 30;
    ///fix the hole being mal oben mal ganz unten
  this.y=random(this.hole-this.range,canvasHeight-this.range);
  this.xspeed = -3;//-2
  this.xacceleration =-0.001;
  this.isOut = false ;
  this.isInMiddle = false ;
  this.colorarr =[random(150),random(150),random(150)]
  }
 turnRed(){
  
     this.colorarr =[255,0,0]
  }
  resetPosition(x){
  this.x=canvasWidth*x;
    this.colorarr =[random(150),random(150),random(150)]
  }
  

  show() {
    this.xspeed += this.xacceleration;
    fill(this.colorarr[0],this.colorarr[1],this.colorarr[2]);
    rect(this.x,this.y,this.thick,this.len);
    rect(this.x,-this.hole,this.thick,this.y);    
  }
  
  pause() {
     this.xspeed = 0;
    
  }
    
  
  move() {
    this.x += this.xspeed;
    this.isOut = (this.x<(0-this.thick));
    this.isInMiddle = (this.x==canvasWidth/2);
    
  }
  
}
