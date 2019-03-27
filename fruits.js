function createFruit() {
  return {
    x: parseInt(Math.random() * MAP_WIDTH),
    y: parseInt(Math.random() * MAP_HEIGHT)
  };
}

function checkFruit({ snake, fruit }) {
  if (checkCollision(snake.head, fruit)) {
    snake.grow();
    fruit = createFruit();
  }

  return fruit;
}
