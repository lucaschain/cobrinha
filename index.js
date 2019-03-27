function gameOver(game) {
  alert(`se fodeu: ${game.snake.body.length}`);
  window.location.reload();
}

function checkGameOver(game) {
  const { snake } = game;
  const snakeHead = snake.body[0];

  if (snakeHead.x < 0) {
    gameOver(game);
  }
  if (snakeHead.x > MAP_WIDTH) {
    gameOver(game);
  }
  if (snakeHead.y < 0) {
    gameOver(game);
  }
  if (snakeHead.y > MAP_HEIGHT) {
    gameOver(game);
  }


  snake.body.forEach((bodyPart, index) => {
    if (index === 0) return;

    if (checkCollision(snakeHead, bodyPart)) {
      gameOver(game);
    }
  });
}

function setup() {
  const canvas = document.getElementById('canvas');
  canvas.width = MAP_SIZE.width;
  canvas.height = MAP_SIZE.height;
  const context = canvas.getContext('2d');

  return {
    context,
    canvas,
    game: {
      snake: new Snake(MAP_WIDTH / 2, MAP_HEIGHT / 2),
      fruit: createFruit()
    }
  };
}

function tick({canvas, context, game }) {
  const input = processInput();

  game.snake = game.snake.update(input);

  game.fruit = checkFruit(game);

  checkGameOver(game);

  draw(context, game);

  return {
    canvas,
    context,
    game
  };
}

let gameState = setup();
setInterval(() => {
  gameState = tick(gameState);
}, 100);
