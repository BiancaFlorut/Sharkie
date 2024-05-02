class World {
  ctx;
  level = LEVEL1;
  sharkie = new Character();
  keyboard;
  camera_x = 0;
  height = 480;
  isMuted;
  lifeBar = new LifeBar();
  bubbleBar = new PoisonBar();
  coinBar = new CoinBar();

  constructor(canvas, keyboard, isMuted) {
    this.keyboard = keyboard;
    this.isMuted = isMuted;
    this.setWorld();
    this.ctx = canvas.getContext("2d");
    this.draw();
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
    this.addToWorld(this.bubbleBar);
    this.addToWorld(this.coinBar);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToWorld(this.level.enemies);
    this.addToWorld(this.sharkie);
    this.addObjectsToWorld(this.level.bubbles);
    this.addObjectsToWorld(this.level.coins);
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
    if (movableObject.otherDirection) {
      movableObject.flipObjectBack(this.ctx);
    }
  }

  run() {
    setStoppableInterval(() => {
      this.checkCollisions();
      this.createThrowableObjects();
      this.checkThrowableObjectsCollisions();
    }, 300);
  }

  checkCollisions() {
    for (let enemy of this.level.enemies) {
      if (this.sharkie.isColliding(enemy)) {
        if (this.keyboard.SPACE) {
          enemy.slapHit();
        } else {
          this.sharkie.hit();
          this.lifeBar.setPercentage(this.sharkie.energy);
        }
      }
    }
  }

  createThrowableObjects() {
    if (this.keyboard.Y) {
      let bubble = new Bubble(this.sharkie.x + 100, this.sharkie.y + 80, this.isMuted);
      bubble.otherDirection = false;
      if (this.sharkie.otherDirection) {
        bubble = new Bubble(this.sharkie.x, this.sharkie.y + 80, this.isMuted);
        bubble.otherDirection = true;
      }
      this.level.bubbles.push(bubble);
    }
  }

  checkThrowableObjectsCollisions() {
    for (let bubble of this.level.bubbles) {
      this.level.enemies.forEach((enemy) => {
        if (enemy.isColliding(bubble)) {
          enemy.hit();
          bubble.hit();
        }
      });
    }
  }

  getAllAudios() {
    let result = this.sharkie.audios;
    this.level.getAudios().forEach((audio) => {
      result.push(audio);
    });
    return result;
  }

  mute() {
    this.isMuted = true;
  }

  unmute() {
    this.isMuted = false;
  }
}
