function preload() {
  imageScenario = loadImage('images/scenario/scenario1.png');
  
  imageGameOver = loadImage('images/assets/over.png');
  imagePersonage = loadImage('images/personage/correndo.png');
  imageEnemy = loadImage('images/enemies/gotinha.png');
  imageEnemyBig = loadImage('images/enemies/troll.png');
  imageEnemyFlying = loadImage('images/enemies/gotinha-voadora.png');
  
  imageHomeScreen = loadImage('images/assets/homeScreen.jpg');
  fontHomeScreen = loadFont('images/assets/fonteTelaInicial.otf');
  
  soundGame = loadSound('sounds/trilha_jogo.mp3');
  soundJump = loadSound('sounds/somPulo.mp3');
}