// Game constants
const COLUMNS = 20;
const SCALE = 20;
const FPS = 10;
const SNAKE_COLOR = 'green';
const FOOD_COLOR = 'red';
const START_DIR = { x: 0, y: -1 };

// Game state
let CONTEXT;
let food;
let snake;

// Initialize game
function init() {
  const canvas = document.createElement('canvas');
  canvas.width = COLUMNS * SCALE;
  canvas.height = COLUMNS * SCALE;
  CONTEXT = canvas.getContext('2d');
  document.body.appendChild(canvas);
  food = new Food();
  snake = new Snake();
  gameLoop();
}

// Game loop
function gameLoop() {
  if (!snake.gameOver) {
    update();
    draw();
    setTimeout(gameLoop, 1000 / FPS);
  }
}

// Update game state
function update() {
  if (snake.eat(food)) {
    food.place();
    updateScore();
  }
  snake.update();
  snake.checkGameOver();
}

// Draw game state
function draw() {
  CONTEXT.clearRect(0, 0, COLUMNS * SCALE, COLUMNS * SCALE);
  food.draw();
  snake.draw();
}

// Update score when snake eats food
function updateScore() {
  snake.total++;
  console.log(`Score: ${snake.total}`);
}

// Food class
function Food() {
  this.place = function() {
    [this.x, this.y] = randPos();
  }

  this.isAt = (xx, yy) => this.x === xx && this.y === yy;

  this.draw = function() {
    CONTEXT.fillStyle = FOOD_COLOR;
    CONTEXT.fillRect(this.x, this.y, SCALE, SCALE);
  }
}

// Snake class
function Snake(x, y) {
  this.x = x || randPos()[0];
  this.y = y || randPos()[1];
  this.direction = START_DIR;
  this.total = 0;
  this.tail = [];
  this.gameOver = false;

  this.get score() { return this.total; }

  this.draw = function() {
    CONTEXT.fillStyle = SNAKE_COLOR;
    this.tail.forEach(p => CONTEXT.fillRect(p.x, p.y, SCALE, SCALE));
    CONTEXT.fillRect(this.x, this.y, SCALE, SCALE);
  }

  this.update = function() {
    const head = { x: this.x, y: this.y };
    this.tail.unshift(head);
    this.x = (this.x + this.direction.y * SCALE + COLUMNS * SCALE) % (COLUMNS * SCALE);
    this.y = (this.y + this.direction.x * SCALE + COLUMNS * SCALE) % (COLUMNS * SCALE);
  }

  this.eat = function(food) {
    return food.isAt(this.x, this.y);
  }

  this.collision = function() {
    // Check for collision with walls
    if (this.x < 0 || this.x >= COLUMNS * SCALE || this.y < 0 || this.y >= COLUMNS * SCALE) {
      return true;
    }

    // Check for collision with tail
    for (let i = 1; i < this.tail.length; i++) {
      if (this.tail[i].x === this.x && this.tail[i].y === this.y) {
        return true;
      }
    }

    return false;
  }

  this.checkGameOver = function() {
    if (this.collision()) {
      this.gameOver = true;
      console.log('Game over!');
      reset();
    }
  }

  this.reset = function() {
    this.x = randPos()[0];
    this.y = randPos()[1];
    this.direction = START_DIR;
    this.total = 0;
    this.tail = [];
    this.gameOver = false;
  }
}

// Helper function to generate random position
function randPos() {
  return [Math.floor(Math.random() * COLUMNS) * SCALE, Math.floor(Math.random() * COLUMNS) * SCALE];
}

// Initialize game
init();