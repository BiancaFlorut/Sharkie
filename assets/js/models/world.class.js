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
  bubbleNumber = new Number(285, 40, 0);
  coinBar = new CoinBar();
  totalNumberOfCoins = this.level.coins.length;
  totalNumberOfPoisonBubbles = this.level.bottles.length * 4;
  isPaused = false;
  BUBBLE_AUDIO = new Audio("./../../assets/audio/bubble_attack.mp3");

  constructor(canvas, keyboard, isMuted) {
    this.keyboard = keyboard;
    this.isMuted = isMuted;
    this.setWorld();
    this.ctx = canvas.getContext("2d");
    this.draw();
    this.run();
  }

  /**
   * Sets the world reference for the sharkie and assigns the sharkie as the last enemy's sharkie if enemies exist.
   */
  setWorld() {
    this.sharkie.world = this;
    if (this.level.enemies.length > 0) this.level.enemies[this.level.enemies.length - 1].sharkie = this.sharkie;
  }

  /**
   * Draws the game world elements if the game is not paused.
   *
   * @return {void} Does not return anything.
   */
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

  /**
   * Sets the first contact between the sharkie and the last enemy in the level.
   * If the sharkie's x position is greater than or equal to 1855, the last enemy's
   * `isSharkieComing` property is set to true. If the sharkie's x position is less
   * than 1855, the last enemy's `isSharkieComing` property is set to false.
   *
   * @return {void} This function does not return anything.
   */
  setFirstContact() {
    if (this.level.enemies.length > 0) {
      if (this.sharkie.x >= 1855) this.level.enemies[this.level.enemies.length - 1].isSharkieComing = true;
      if (this.sharkie.x < 1855) this.level.enemies[this.level.enemies.length - 1].isSharkieComing = false;
    }
  }

  /**
   * Adds the level objects to the world.
   *
   * This function adds the coins, bottles, hearts, enemies, and bubbles from the level to the world.
   * It iterates over each object and calls the `addObjectsToWorld` function to add them to the world.
   *
   * @return {void} This function does not return anything.
   */
  addLevelObjects() {
    this.addObjectsToWorld(this.level.coins);
    this.addObjectsToWorld(this.level.bottles);
    this.addObjectsToWorld(this.level.hearts);
    this.addObjectsToWorld(this.level.enemies);
    this.addObjectsToWorld(this.level.bubbles);
  }

  /**
   * Adds the given objects to the world.
   *
   * @param {Array} objects - The objects to be added to the world.
   * @return {void} This function does not return anything.
   */
  addObjectsToWorld(objects) {
    objects.forEach((object) => {
      this.addToWorld(object);
    });
  }

  /**
   * Adds the given movable object to the world.
   *
   * @param {Object} movableObject - The movable object to be added to the world.
   */
  addToWorld(movableObject) {
    if (movableObject.otherDirection) {
      movableObject.flipObject(this.ctx);
    }
    movableObject.draw(this.ctx);
    if (movableObject.otherDirection) {
      movableObject.flipObjectBack(this.ctx);
    }
    if (movableObject.lifeBar && movableObject.lifeBar.visibility) movableObject.lifeBar.draw(this.ctx);
  }

  /**
   * Runs the game loop, checking for collisions, creating throwable objects,
   * checking throwable object collisions, collecting coins, collecting bottles,
   * and collecting hearts.
   *
   * @return {void} This function does not return anything.
   */
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
    }, 200);
  }

  /**
   * Iterates through each enemy in the level, checks for collisions with the sharkie,
   * handles different types of hits, and updates points accordingly.
   */
  checkCollisions() {
    for (let enemy of this.level.enemies) {
      if (this.sharkie.isColliding(enemy)) {
        if (this.keyboard.X) {
          enemy.slapHit();
          this.level.points += 15;
        } else {
          if (enemy instanceof JellyFish) this.sharkie.electricShock();
          if (!this.sharkie.isHurt()) {
            this.sharkie.hit();
            this.lifeBar.setPercentage(this.sharkie.energy);
          }
        }
      }
    }
  }

  /**
   * Creates throwable objects based on the current state of the keyboard and bubble number.
   *
   * This function checks if the 'Y' key is pressed and if the bubble number is greater than 0.
   * If both conditions are met, it creates a new Bubble object at a specific position relative
   * to the sharkie's position, and sets its 'otherDirection' property based on the sharkie's
   * 'otherDirection' property. It then decrements the bubble number, adds the new bubble to the
   * level's bubbles array, and updates the bubble bar percentage based on the new bubble number.
   *
   * @return {void} This function does not return anything.
   */
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

  /**
   * Iterates through each bubble and enemy, checks for collisions, handles hits, and updates points.
   *
   * @param {Object} bubble - The bubble object to check collisions with enemies.
   * @param {number} index - The index of the current bubble in the array.
   * @return {void} This function does not return anything.
   */
  checkThrowableObjectsCollisions() {
    this.level.bubbles.forEach((bubble, index) => {
      this.level.enemies.forEach((enemy) => {
        if (enemy.isColliding(bubble)) {
          if (enemy instanceof JellyFish) {
            enemy.bubbleHit();
            this.level.points += 10;
          } else this.normalHit(enemy, bubble);
          this.level.bubbles.splice(index, 1);
        }
      });
    });
  }

  /**
   * Handles the normal hit event between an enemy and a bubble.
   *
   * @param {Object} enemy - The enemy object that was hit.
   * @param {Object} bubble - The bubble object that was hit.
   * @return {void} This function does not return anything.
   */
  normalHit(enemy, bubble) {
    enemy.hit();
    this.level.points += 5;
    bubble.hit();
    this.BUBBLE_AUDIO.play();
  }

  /**
   * Retrieves all audios from the world.
   *
   * @return {Array} An array containing all audios from the world.
   */
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

  /**
   * Collects coins when the sharkie collides with them, updates the sharkie's coin count, and adjusts the coin bar percentage accordingly.
   *
   * @return {void} This function does not return anything.
   */
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

  /**
   * Collects bottles that collide with the sharkie character.
   *
   * This function iterates over each bottle in the level and checks if it collides with the sharkie character.
   * If a collision is detected, the bottle is collected, removed from the level, and the bubble number is increased by 4.
   * The bubble bar percentage is then updated accordingly.
   *
   * @return {void} This function does not return anything.
   */
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

  /**
   * Loops through the hearts in the level, collects them if the shark collides,
   * updates energy, and sets the life bar percentage accordingly.
   */
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

  /**
   * Retrieves the number of coins collected by the sharkie.
   *
   * @return {number} The number of coins collected by the sharkie.
   */
  getCollectedCoins() {
    return this.sharkie.coins;
  }
}
