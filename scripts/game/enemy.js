class Enemy extends Animation {
  constructor(matriz, image, x, variationY, largura, altura, larguraSprite, alturaSpirit, velocity){
    super(matriz, image, x, variationY, largura, altura, larguraSprite, alturaSpirit);
    
    this.velocity = velocity;
    this.x = width;
  }
  
  move(){
    this.x = this.x - this.velocity;
  }
  
  popsUp(){
    this.x = width;
  }
}