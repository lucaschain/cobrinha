let lastKeyPressed;
document.addEventListener('keydown', (event) => {
  lastKeyPressed = event.key;
});

function processInput() {
  return lastKeyPressed;
}
