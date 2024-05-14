class Enemy extends MovableObject {
  lifeBar;

/**
 * Updates the enemy state after being hit by a slap attack.
 *
 * @return {void} This function does not return anything.
 */
  slapHit() {
    this.slapped = true;
    this.energy -= 20;
    if (this.otherDirection) this.x -= 100;
    else this.x += 100;
    this.otherDirection = !this.otherDirection;
    this.lifeBar.y = this.y + this.lifeBar.offsetY;
    this.lifeBar.x = this.x;
    this.hit();
  }

  /**
   * Sets the life bar for the enemy.
   *
   * @param {number} offsetY - The offset Y value for the life bar.
   * @return {void} This function does not return anything.
   */
  setLifeBar(offsetY) {
    this.lifeBar = new SmallLifeBar(this.x, this.y, offsetY);
    this.lifeBar.setPosition(this);
  }
}
