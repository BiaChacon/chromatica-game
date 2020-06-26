function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  
  game = new Game();
  homeScreen = new HomeScreen();
  
  game.setup();
  
  scenes = {
    game,
    homeScreen
  };
  
  buttonManager =  new ButtonManager('Start');
}

function keyPressed() {
  game.keyPressed(key);
}

function draw() {
  scenes[sceneAtual].draw();
}