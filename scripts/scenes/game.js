class Game {
  constructor() {
    this.indice = 0;

    this.mapa = fita.mapa1;
  }

  setup() {
    level1 = new Scenario(imageScenario1, 5);
    level2 = new Scenario(imageScenario2, 10);
    level3 = new Scenario(imageScenario3, 15);
    
    scenario=level1;
    
    punctuation = new Punctuation();
    life = new Life(fita.settings.lifeMax,fita.settings.lifeInitial);
    
    personage = new Personage(matrizPersonage, imagePersonage, 50, 70, 110, 135, 220, 270);
    const enemy = new Enemy(matrizEnemy, imageEnemy, width - 52, 70, 52, 52, 104, 104, 10);
    const enemyFlying = new Enemy(matrizEnemyFlying, imageEnemyFlying, width - 52, 240, 100, 75, 200, 150, 10);
    const enemyBig = new Enemy(matrizEnemyBig, imageEnemyBig, width, 30, 200, 200, 400, 400, 10);

    enemies.push(enemy);
    enemies.push(enemyFlying);
    enemies.push(enemyBig);
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personage.jump();
      soundJump.play();
    }
  }

  draw() {
    
    scenario.show();
    scenario.move();
    
    life.draw();
    punctuation.show();
    punctuation.addPoint();

    personage.show();
    personage.applyGravity();

    const lineAtual = this.mapa[this.indice];
    const enemy = enemies[lineAtual.enemy];
    const enemyVisivel = enemy.x < -enemy.largura;
    
    enemy.velocity = lineAtual.velocity;

    enemy.show();
    enemy.move();

    if (enemyVisivel) {
      this.indice++;
      enemy.popsUp();
      if (this.indice > this.mapa.length-1) {
        this.indice = 0;
      }
    }

    if (personage.checkCollision(enemy)) {
      life.perdeLife();
      personage.makeInvincible();
      if(life.lives === 0){
        image(imageGameOver, width / 2 - 200, height / 3);
        soundGame.stop();
        soundOver.play();
        noLoop();
      }
    }
   
    if(punctuation.points > 500){
      scenario = level2;
      this.mapa = fita.mapa2;
    }
    
    if(punctuation.points > 1000){
      scenario = level3;
      this.mapa = fita.mapa3;
    }
 
  }
  
}