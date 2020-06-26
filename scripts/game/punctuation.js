class Punctuation {
  constructor() {
    this.points = 0;
  }
  
  show() {
    textAlign(RIGHT);
    fill('#FF1493');
    textSize(50);
    text(parseInt(this.points), width-30, 50);
  }
  
  addPoint() {
    this.points = this.points + 0.2;
  }
  
}