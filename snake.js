class Snake {
  constructor(x, y) {
    const head = {
      x,
      y
    };

    const tail = {
      x: x - 1,
      y
    };

    this.body = [head, tail];
  }

  get head() {
    return this.body[0];
  }

  get tailTip() {
    return this.body[this.body.length - 1];
  }

  moveUp() {
    const newHead = {
      ...this.head,
      y: this.head.y - 1
    };

    this.move(newHead);
  }

  moveDown() {
    const newHead = {
      ...this.head,
      y: this.head.y + 1
    };

    this.move(newHead);
  }

  moveLeft() {
    const newHead = {
      ...this.head,
      x: this.head.x - 1
    };

    this.move(newHead);
  }

  moveRight() {
    const newHead = {
      ...this.head,
      x: this.head.x + 1
    };

    this.move(newHead);
  }

  move(newHead) {
    const bodyWithoutTip = this.body.slice(0, -1)

    this.body = [newHead, ...bodyWithoutTip];
  }

  grow() {
    this.body = this.body.concat({
      ...this.tailTip
    });
  }

  update(key) {
    switch(key) {
      case 'ArrowUp':
        this.moveUp();
        break;
      case 'ArrowDown':
        this.moveDown();
        break;
      case 'ArrowLeft':
        this.moveLeft();
        break;
      case 'ArrowRight':
        this.moveRight();
        break;
    }

    return this;
  }
}
