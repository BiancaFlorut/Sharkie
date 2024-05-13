class MovableObject extends Drawable {
  speed = 0.15;
  otherDirection = false;
  speedY = -1;
  energy = 100;
  lastHit = 0;

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveUp() {
    this.y -= this.speed;
  }

  moveDown() {
    this.y += this.speed;
  }

  /**
   * Executes the application of gravity to the object's vertical position based on the speedY property.
   *
   * @param {} - No parameters
   * @return {} - No return value
   */
  applyGravity() {
    setStoppableInterval(() => {
      if (this.isOverTheGround()) {
        this.y = this.y - this.speedY;
      }
    }, 1000 / 25);
  }

/**
 * Applies anti-gravity to the object by continuously decreasing its y position and randomly changing its x position.
 *
 * @return {undefined} This function does not return a value.
 */
  applyAntiGravity() {
    setStoppableInterval(() => {
        this.y -= this.speedY;
        if (this.otherDirection) {
            this.x -= Math.random() * 15;
        } else this.x += Math.random() * 15;
    }, 1000 / 25);
  }

  isOverTheGround() {
    return this.y < 300;
  }

  /**
   * Flips the object horizontally by mirroring it and updating its x position.
   *
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
   * @return {void} This function does not return a value.
   */
  flipObject(ctx) {
    ctx.save();
    ctx.translate(this.width, 0);
    ctx.scale(-1, 1);
    this.x = this.x * -1;
  }

  /**
   * Restores the canvas rendering context and updates the x position of the object by applying a horizontal flip.
   *
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
   * @return {void} This function does not return a value.
   */
  flipObjectBack(ctx) {
    ctx.restore();
    this.x = this.x * -1;
  }

  /**
   * Checks if this object is colliding with another object.
   *
   * @param {Object} otherObject - The other object to check collision with.
   * @return {boolean} True if colliding, false otherwise.
   */
  isColliding(otherObject) {
    return (
      this.x + this.width - this.offsetXRight >= otherObject.x + otherObject.offsetXLeft &&
      this.x <= otherObject.x + otherObject.width - otherObject.offsetXRight &&
      this.y + this.height - this.offsetYBottom >= otherObject.y + otherObject.offsetYTop &&
      this.y + this.offsetYTop <= otherObject.y + otherObject.height - otherObject.offsetYBottom
    );
  }

  /**
   * Decreases the energy of the object by 5 units, updates the lastHit timestamp,
   * and sets the visibility of the life bar to true for 1 second.
   *
   * @return {void} This function does not return anything.
   */
  hit() {
    this.energy -= 5;
    if (this.energy <= 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
    if (this.lifeBar) {
      this.lifeBar.setPercentage(this.energy);
      this.lifeBar.visibility = true;
      if (!(this instanceof EndBoss))
      setTimeout(() => {
        this.lifeBar.visibility = false;
      }, 1000);
    }
  }

  /**
   * Checks if the object is dead by checking if its energy is less than or equal to zero.
   *
   * @return {boolean} Returns true if the object is dead, false otherwise.
   */
  isDead() {
    return this.energy <= 0;
  }

/**
 * Checks if the object is currently hurt by comparing the time passed since the last hit with a threshold.
 *
 * @return {boolean} Returns true if the object is currently hurt, false otherwise.
 */
  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit;
    return timePassed < 1000;
  }
}


