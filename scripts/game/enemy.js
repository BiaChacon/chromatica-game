class Enemy extends Animation {
  constructor(matriz, image, x, variationY, largura, altura, larguraSprite, alturaSpirit, delay){
    super(matriz, image, x, variationY, largura, altura, larguraSprite, alturaSpirit);
    
    this.velocity = 10;
    this.delay = delay;
    this.x = width + this.delay;
  }
  
  move(){
    this.x = this.x - this.velocity;
    
    if(this.x < -this.largura - this.delay){
      this.x = width;
    }
  }
}