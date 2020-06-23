class Enemy extends Animation {
  constructor(matriz, image, x, largura, altura, larguraSprite, alturaSpirit){
    super(matriz, image, x, largura, altura, larguraSprite, alturaSpirit);
    
    this.velocity = 10;
  }
  
  move(){
    this.x = this.x - this.velocity;
    
    if(this.x < -this.largura){
      this.x = width;
    }
  }
}