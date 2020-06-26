class HomeScreen {
  constructor() {

  }

  draw() {
    this._imageBackground();
    this._text();
    this._button();
  }

  _imageBackground(){
    image(imageHomeScreen, 0, 0, width, height);
  }
  
  _text() {
    textFont(fontHomeScreen);
    textAlign(CENTER);
    textSize(50);
    text('Adventures of', width/2, height/2.5);
    textSize(150);
    text('Chromatica',  width/2, height/5*3);
    fill('#FF1493');
  }

  _button(){
    buttonManager.y = height/7*5
    buttonManager.draw();
  }

}