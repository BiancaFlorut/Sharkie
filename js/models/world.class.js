class World {
  ctx;
  sharkie = new Character();
  level = LEVEL1;
  keyboard;
  camera_x = 0;
  height = 480;
  lifeBar = new StatusBar();

  constructor(canvas, keyboard) {
    this.keyboard = keyboard;
    this.ctx = canvas.getContext("2d");
    this.draw();
    this.setWorld();
    this.run();
  }

  setWorld() {
    this.sharkie.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToWorld(this.level.backgrounds);
    this.ctx.translate(-this.camera_x, 0);
    this.addToWorld(this.lifeBar);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToWorld(this.level.enemies);
    this.addToWorld(this.sharkie);
    this.addObjectsToWorld(this.level.bubbles);
    this.ctx.translate(-this.camera_x, 0);
    let self = this;
    requestAnimationFrame(() => self.draw());
  }

  addObjectsToWorld(objects) {
    objects.forEach((object) => {
      this.addToWorld(object);
    });
  }

  addToWorld(movableObject) {
    if (movableObject.otherDirection) {
      movableObject.flipObject(this.ctx);
    }
    movableObject.draw(this.ctx);
    movableObject.drawFrame(this.ctx);
    if (movableObject.otherDirection) {
      movableObject.flipObjectBack(this.ctx);
    }
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowableObjects();
    }, 200);
  }

  checkCollisions() {
    for (let enemy of this.level.enemies) {
      if (this.sharkie.isColliding(enemy)) {
        this.sharkie.hit();
        this.lifeBar.setPercentage(this.sharkie.energy);
      }
    }
  }
  checkThrowableObjects() {
    if (this.keyboard.Y) {
        let bubble = new Bubble(this.sharkie.x + 100, this.sharkie.y + 80);
        bubble.otherDirection = false;
        if (this.sharkie.otherDirection) {
            bubble = new Bubble(this.sharkie.x, this.sharkie.y + 80);
            bubble.otherDirection = true;
        }
        this.level.bubbles.push(bubble);
    }
  }
}