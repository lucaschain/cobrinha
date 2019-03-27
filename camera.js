function draw(context, game) {
  context.clearRect(
    0,
    0,
    MAP_SIZE.width,
    MAP_SIZE.height
  );

  const { snake } = game;
  context.fillStyle = 'yellow';
  snake.body.forEach((snakePart) => {
    context.fillRect(
      snakePart.x * TILE_SIZE,
      snakePart.y * TILE_SIZE,
      TILE_SIZE,
      TILE_SIZE
    );
  });

  const { fruit } = game;
  context.fillStyle = 'blue'
  context.fillRect(
    fruit.x * TILE_SIZE,
    fruit.y * TILE_SIZE,
    TILE_SIZE,
    TILE_SIZE
  );
}
