class Game {
  constructor() {
    this.enemyAtual = 0;
  }

  setup() {
    scenario = new Scenario(imageScenario, 3);
    punctuation = new Punctuation();

    personage = new Personage(matrizPersonage, imagePersonage, 0, 30, 110, 135, 220, 270);
    const enemy = new Enemy(matrizEnemy, imageEnemy, width - 52, 30, 52, 52, 104, 104, 10, 100);
    const enemyFlying = new Enemy(matrizEnemyFlying, imageEnemyFlying, width - 52, 200, 100, 75, 200, 150, 10, 100);
    const enemyBig = new Enemy(matrizEnemyBig, imageEnemyBig, width, 0, 200, 200, 400, 400, 10, 100);

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

    punctuation.show();
    punctuation.addPoint();

    personage.show();
    personage.applyGravity();

    const enemy = enemies[this.enemyAtual];
    const enemyVisivel = enemy.x < -enemy.largura;

    enemy.show();
    enemy.move();

    if (enemyVisivel) {
      this.enemyAtual++;
      if (this.enemyAtual > 2) {
        this.enemyAtual = 0;
      }
      enemy.velocity = parseInt(random(10, 30));
    }

    if (personage.checkCollision(enemy)) {
      noLoop();
      image(imageGameOver, width / 2 - 200, height / 3);
    }
  }
  
}