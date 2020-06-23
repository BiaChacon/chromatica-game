let imageScenario;
let imagePersonage;
let imageEnemy;
let soundGame;
let soundJump;
let scenario;
let personage
let enemy;

const matrizEnemy = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
]
const matrizPersonage = [
      [0,0],
      [220,0],
      [440,0],
      [660,0],
      [0,270],
      [220,270],
      [440,270],
      [660,270],
      [0,540],
      [220,540],
      [440,540],
      [660,540],
      [0,810],
      [220,810],
      [440,810],
      [660,810]
];

function preload() {
  imageScenario = loadImage('images/scenario/floresta.png');
  imagePersonage = loadImage('images/personage/correndo.png');
  imageEnemy = loadImage('images/enemies/gotinha.png');
  soundGame = loadSound('sounds/trilha_jogo.mp3');
  soundJump = loadSound('sounds/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(imageScenario, 3);
  personage = new Personage(matrizPersonage, imagePersonage, 0, 110, 135, 220, 270);
  enemy = new Enemy(matrizEnemy, imageEnemy, width - 52, 52, 52, 104, 104);
  frameRate(40);
  soundGame.loop();
}

function keyPressed(){
  if(key === 'ArrowUp'){
    personage.jump();
    soundJump.play();
  }
}

function draw() {
  scenario.show();
  scenario.move();
  
  personage.show();
  personage.applyGravity();
  
  enemy.show();
  enemy.move();
  
  if(personage.checkCollision(enemy)){
    console.log('colidiuuuuu');
    noLoop();
  }
   
}