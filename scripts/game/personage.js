class Personage extends Animation {
  constructor(matriz, image, x, variationY, largura, altura, larguraSprite, alturaSpirit){
    super(matriz, image, x,  variationY, largura, altura, larguraSprite, alturaSpirit);
    
    this.yInitial = height - this.altura - this.variationY;
    this.y =  this.yInitial;
    this.velocityJump = 0;
    this.gravity = 3;
    this.alturaJump =  -30;
    this.jumps = 0;
    this.invincible = false;
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
  
  makeInvincible(){
    this.invincible = true;
    setTimeout(()=>{
      this.invincible = false;
    }, 1000);
  
  }
  
  checkCollision(enemy) {
    if(this.invincible){
      return false;
    }
    
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