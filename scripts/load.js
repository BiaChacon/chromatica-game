function preload() {
  imageScenario1 = loadImage('images/scenario/scenario1.png');
  imageScenario2 = loadImage('images/scenario/scenario2.png');
  imageScenario3 = loadImage('images/scenario/scenario3.png');
  
  imageGameOver = loadImage('images/assets/over.png');
  imagePersonage = loadImage('images/personage/correndo.png');
  imageEnemy = loadImage('images/enemies/gotinha.png');
  imageEnemyBig = loadImage('images/enemies/troll.png');
  imageEnemyFlying = loadImage('images/enemies/gotinha-voadora.png');
  
  imageHomeScreen = loadImage('images/assets/homeScreen.jpg');
  fontHomeScreen = loadFont('images/assets/fonteTelaInicial.otf');
  
  imageLife = loadImage('images/assets/heart2.png');
  
  fita = loadJSON('fita/fita.json');
  
  soundGame = loadSound('sounds/trilha_jogo.mp3');
  soundJump = loadSound('sounds/somPulo.mp3');
  soundOver = loadSound('sounds/over.mp3');
}