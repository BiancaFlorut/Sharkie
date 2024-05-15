class JellyFish extends Enemy {
  width = 80;
  height = 80;
  offsetYTop = 13;
  offsetYBottom = 25;
  offsetXLeft = 20;
  offsetXRight = 20;
  offsetY = 10;
  speed = 0.35;
  distance;
  MAX_DISTANCE = 2200;
  upDirection = true;
  lifeBar;
  slapped = false;

  constructor() {
    super();
    this.x = 400 + Math.random() * 1800;
    this.y = Math.random() * 400;
    this.speed = 0.15 + Math.random() * 2;
    this.MAX_DISTANCE = 200 + Math.random() * 500;
    this.otherDirection = Math.random() < 0.5;
    this.distance = this.MAX_DISTANCE;
    this.setLifeBar(-6);
    this.animate();
  }

/**
 * Animates the JellyFish object by moving it and playing animations.
 *
 * @return {void} This function does not return anything.
 */
  animate() {
    this.move();
    setStoppableInterval(() => {
      if (this.isDead()) {
        this.die();
        this.playAnimation(this.IMGS_DIE);
      } else this.playAnimation(this.IMGS_IDLE);
    }, 120);
  }

/**
 * Decreases the energy of the JellyFish object by 100 units and updates the life bar accordingly.
 *
 * @return {void} This function does not return anything.
 */
  bubbleHit() {
    this.energy -= 100;
    this.lifeBar.setPercentage(this.energy);
  }

  /**
   * Decreases the y position of the object and the life bar by 10 units.
   *
   * @return {void} This function does not return anything.
   */
  die() {
    this.y -= 10;
    this.lifeBar.y -= 10;
  }

  /**
   * Moves the object to the right and updates the associated life bar accordingly.
   *
   * @param {void} This function does not have any parameters.
   * @return {void} This function does not return anything.
   */
  moveRight() {
    super.moveRight();
    this.lifeBar.moveRight();
  }

/**
 * Changes the direction of the object and updates the direction of the life bar.
 *
 * @param {boolean} direction - The new direction of the object.
 * @return {void} This function does not return anything.
 */
  changeDirection(direction) {
    this.otherDirection = direction;
    this.lifeBar.otherDirection = direction;
  }

  /**
   * Moves the object to the left and updates the associated life bar accordingly.
   *
   * @param {void} This function does not have any parameters.
   * @return {void} This function does not return anything.
   */
  moveLeft() {
    super.moveLeft();
    this.lifeBar.moveLeft();
  }

  /**
   * Moves the object up and updates the associated life bar accordingly.
   *
   * @return {void} This function does not return anything.
   */
  moveUp() {
    super.moveUp();
    this.lifeBar.moveUp();
  }

  /**
   * Moves the object down and updates the associated life bar accordingly.
   *
   * @return {void} This function does not return anything.
   */
  moveDown() {
    super.moveDown();
    this.lifeBar.moveDown();
  }

  /**
   * Moves the object in a specific direction and updates the associated life bar accordingly.
   * The object moves in a loop until the game is stopped.
   *
   * @return {void} This function does not return anything.
   */
  move() {
    setStoppableInterval(() => {
      if (this.otherDirection) {
        this.moveRight();
        if (this.x > 2200) this.changeDirection(false);
      } else if (this.x > 200) this.moveLeft();
      else this.changeDirection(true);
      if (this.upDirection) {
        this.moveUp();
        if (this.y < 0) this.upDirection = false;
      } else {
        this.moveDown();
        if (this.y > 400) this.upDirection = true;
        if (this.isDead()) this.moveUp();
      }
    }, 1000 / 60);
  }
}
