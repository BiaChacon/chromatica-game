class Life {
  constructor(total, initial) {
    this.total = total;
    this.initial = initial;
    this.lives = this.initial;
    
    this.largura = 40;
    this.altura = 40;
    this.xInitial = 20;
    this.y = 20;
  }
  
  draw(){
    for(let i=0; i<this.lives;i++){
      const margin = i * 23;
      const position = this.xInitial * (i+1);
      image(imageLife, position + margin, this.y, this.largura, this.altura); 
    }
  }
  
  ganhaLife(){
    if(this.lives <= this.total){
      this.lives++;   
    }
  }
  
  perdeLife(){
    this.lives--;
  }
}