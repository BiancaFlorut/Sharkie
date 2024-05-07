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
  bubbleNumber = new Number(350, 40, 0);
  coinBar = new CoinBar();
  totalNumberOfCoins = this.level.coins.length;
  totalNumberOfPoisonBubbles = this.level.bottles.length * 4;
  isPaused = false;

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
    this.level.enemies[this.level.enemies.length - 1].sharkie = this.sharkie;
  }

  draw() {
    if (!this.isPaused) {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      this.ctx.translate(this.camera_x, 0);
      this.addObjectsToWorld(this.level.backgrounds);
      this.ctx.translate(-this.camera_x, 0);
      this.ctx.translate(this.camera_x, 0);
      this.addLevelObjects();
      this.addToWorld(this.sharkie);
      this.setFirstContact();
      this.ctx.translate(-this.camera_x, 0);
      this.addToWorld(this.lifeBar);
      this.addToWorld(this.bubbleBar);
      this.bubbleNumber.drawNumber(this.ctx);
      this.addToWorld(this.coinBar);
    }
    let self = this;
    requestAnimationFrame(() => self.draw());
  }

  setFirstContact() {
    if (this.sharkie.x >= 1855) this.level.enemies[this.level.enemies.length - 1].isSharkieComing = true;
    if (this.sharkie.x < 1855) this.level.enemies[this.level.enemies.length - 1].isSharkieComing = false;
  }

  addLevelObjects() {
    this.addObjectsToWorld(this.level.coins);
    this.addObjectsToWorld(this.level.bottles);
    this.addObjectsToWorld(this.level.hearts);
    this.addObjectsToWorld(this.level.enemies);
    this.addObjectsToWorld(this.level.bubbles);
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

    if (movableObject.lifeBar) {
      if (movableObject.lifeBar.otherDirection)
        movableObject.lifeBar.flipObject(this.ctx);
      movableObject.lifeBar.draw(this.ctx);
      if (movableObject.lifeBar.otherDirection)
        movableObject.lifeBar.flipObjectBack(this.ctx);
    }
  }

  run() {
    setStoppableInterval(() => {
      if (!this.isPaused) {
        this.checkCollisions();
        this.createThrowableObjects();
        this.checkThrowableObjectsCollisions();
        this.collectCoins();
        this.collectBottles();
        this.collectHearts();
      }
    }, 300);
  }

  checkCollisions() {
    for (let enemy of this.level.enemies) {
      if (this.sharkie.isColliding(enemy)) {
        if (this.keyboard.SPACE) {
          enemy.slapHit();
        } else {
          if (enemy instanceof JellyFish) {
            this.sharkie.electricShock();
          }
          this.sharkie.hit();
          this.lifeBar.setPercentage(this.sharkie.energy);
        }
      }
    }
  }

  createThrowableObjects() {
    if (this.keyboard.Y && this.bubbleNumber.number > 0) {
      let bubble = new Bubble(this.sharkie.x + 100, this.sharkie.y + 80, this.isMuted);
      bubble.otherDirection = false;
      if (this.sharkie.otherDirection) {
        bubble = new Bubble(this.sharkie.x, this.sharkie.y + 80, this.isMuted);
        bubble.otherDirection = true;
      }
      this.bubbleNumber.number--;
      this.level.bubbles.push(bubble);
      this.bubbleBar.setPercentage((this.bubbleNumber.number * 100) / 4);
    }
  }

  checkThrowableObjectsCollisions() {
    this.level.bubbles.forEach((bubble, index) => {
      this.level.enemies.forEach((enemy) => {
        if (enemy.isColliding(bubble)) {
          enemy.hit();
          bubble.hit();
          this.level.bubbles.splice(index, 1);
        }
      });
    });
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

  collectCoins() {
    this.level.coins.forEach((coin, index) => {
      if (this.sharkie.isColliding(coin)) {
        coin.collect();
        this.level.coins.splice(index, 1);
        this.sharkie.coins += 1;
        this.coinBar.setPercentage((this.sharkie.coins * 100) / this.totalNumberOfCoins);
      }
    });
  }

  collectBottles() {
    this.level.bottles.forEach((bottle, index) => {
      if (this.sharkie.isColliding(bottle)) {
        bottle.collect();
        this.level.bottles.splice(index, 1);
        this.bubbleNumber.number += 4;
        this.bubbleBar.setPercentage((this.bubbleNumber.number * 100) / 4);
      }
    });
  }

  collectHearts() {
    this.level.hearts.forEach((heart, index) => {
      if (this.sharkie.isColliding(heart)) {
        heart.collect();
        this.level.hearts.splice(index, 1);
        this.sharkie.energy += 25;
        this.lifeBar.setPercentage(this.sharkie.energy);
      }
    });
  }
}
