class Personage extends Animation {
  constructor(matriz, image, x, variationY, largura, altura, larguraSprite, alturaSpirit){
    super(matriz, image, x,  variationY, largura, altura, larguraSprite, alturaSpirit);
    
    this.yInitial = height - this.altura - this.variationY;
    this.y =  this.yInitial;
    this.velocityJump = 0;
    this.gravity = 3;
    this.alturaJump =  -30;
    this.jumps = 0;
  }
  
  jump() {
    if(this.jumps < 3){
      this.velocityJump = this.alturaJump; 
      this.jumps++;
    }
  }
  
  applyGravity() {
    this.y = this.y + this.velocityJump;
    this.velocityJump = this.velocityJump + this.gravity;
    
    if(this.y > this.yInitial){
        this.y =  this.yInitial;
      this.jumps = 0;
    }
  }
  
  checkCollision(enemy) {
    const precision = .7;

    // noFill();
    // rect(this.x,
    //   this.y,
    //   this.largura,
    //   this.altura);
    // rect(enemy.x,
    //   enemy.y,
    //   enemy.largura,
    //   enemy.altura);
    
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