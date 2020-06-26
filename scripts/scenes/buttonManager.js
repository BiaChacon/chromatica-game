class ButtonManager {
  constructor(texto, x, y){
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.button = createButton(this.texto);
    this.button.mousePressed(() => this._changeScene());
    this.button.addClass('botton-home-screen');
  }
  
  draw(){
    this.button.position(this.x, this.y);
    this.button.center('horizontal');
  }
  
  _changeScene(){
    this.button.remove();
    soundGame.loop();
    sceneAtual = 'game';
  }
  
  up(){
    scenes[sceneAtual].draw();
  }
  
}