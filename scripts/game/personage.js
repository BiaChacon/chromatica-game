class Personage extends Animation {
  constructor(matriz, image, x, largura, altura, larguraSprite, alturaSpirit){
    super(matriz, image, x, largura, altura, larguraSprite, alturaSpirit);
    
    this.yInitial = height - this.altura;
    this.y =  this.yInitial;
    this.velocityJump = 0;
    this.gravity = 3;
  }
  
  jump() {
    this.velocityJump = -30;
  }
  
  applyGravity() {
    this.y = this.y + this.velocityJump;
    this.velocityJump = this.velocityJump + this.gravity;
    
    if(this.y > this.yInitial){
        this.y =  this.yInitial;
    }
  }
  
  checkCollision(enemy) {
    
    const precision = .7
     const collision =  collideRectRect(
       this.x,
       this.y,
       this.largura * precision,
       this.altura * precision,
       enemy.x,
       enemy.y,
       enemy.largura * precision,
       enemy.altura * precision
     );
    return collision;
  }
}