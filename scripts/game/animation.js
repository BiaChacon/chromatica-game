class Animation {
   constructor(matriz, image, x, largura, altura, larguraSprite, alturaSpirit){
    this.matriz = matriz;
    this.image = image;
    this.largura = largura;
    this.altura = altura;
    this.x = x;
    this.y = height - this.altura;
    this.larguraSprite = larguraSprite;
    this.alturaSpirit = alturaSpirit; 
     
     this.frameCurrent = 0;
  }
  
  show(){
    image(this.image, this.x,this.y,  this.largura, this.altura, this.matriz[this.frameCurrent][0], this.matriz[this.frameCurrent][1], this.larguraSprite, this.alturaSpirit);
    
    this.anima();
  }
  
  anima(){
    this.frameCurrent++;
    
    if(this.frameCurrent >= this.matriz.length - 1){
       this.frameCurrent = 0;
    }
  }
}