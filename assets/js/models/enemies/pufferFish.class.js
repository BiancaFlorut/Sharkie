class PufferFish extends Enemy {
  width = 80;
  height = 80;
  offsetYTop = 18;
  offsetYBottom = 30;
  offsetXLeft = 15;
  offsetXRight = 15;
  IMGS_IDLE = [
    "./assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
    "./assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
    "./assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
    "./assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
    "./assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png",
  ];
  IMGS_DIE = ["./assets/img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png"];
  IMGS_SLAP_DIE = ["./assets/img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png"];
  speed = 0.35;
  distance;
  MAX_DISTANCE = 2200;
  slapped = false;

  constructor() {
    super().loadImg("./assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png");
    this.loadImgs(this.IMGS_IDLE);
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
   * Animates the object by moving and playing animations.
   *
   * @param {} - No parameters
   * @return {} - No return value
   */
  animate() {
    this.move();
    this.playAnimations();
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
        this.lifeBar.moveRight();
        if (this.x > 2200) this.otherDirection = false;
      } else if (this.x > 200) {
        this.moveLeft();
        this.lifeBar.moveLeft();
      } else {
        this.otherDirection = true;
        this.lifeBar.otherDirection = true;
      }
    }, 1000 / 60);
  }

/**
 * This function plays animations for the PufferFish object. It uses the setStoppableInterval function to repeatedly execute the provided callback function at an interval of 80 milliseconds.
 *
 * The callback function checks if the PufferFish object is dead. If it is, it checks if the PufferFish object has been slapped. If it has, it calls the slapDie function. Otherwise, it calls the die function.
 *
 * If the PufferFish object is not dead, it calls the playAnimation function with the IMGS_IDLE array as the argument.
 *
 * @return {void} This function does not return anything.
 */
  playAnimations() {
    setStoppableInterval(() => {
      if (this.isDead())
        if (this.slapped) this.slapDie();
        else this.die();
      else this.playAnimation(this.IMGS_IDLE);
    }, 80);
  }

  /**
   * Decreases the energy of the object by 20 units, updates the life bar percentage,
   * and sets the visibility of the life bar to true for 1 second.
   *
   * @return {void} This function does not return anything.
   */
  hit() {
    this.energy -= 20;
    this.lifeBar.setPercentage(this.energy);
    this.lifeBar.visibility = true;
    setTimeout(() => {
      this.lifeBar.visibility = false;
    }, 1000);
  }

  /**
   * Updates the object to a die state by loading the death image, decreasing the y position by 10 units, and updating the associated life bar's y position accordingly.
   *
   * @return {void} This function does not return anything.
   */
  die() {
    this.loadImg(this.IMGS_DIE);
    this.y -= 10;
    this.lifeBar.y -= 10;
  }

  /**
   * Decreases the energy of the object by 100 units and updates the life bar accordingly.
   *
   * @param {} - No parameters
   * @return {} - No return value
   */
  slapHit() {
    this.energy -= 100;
    this.lifeBar.setPercentage(this.energy);
    this.slapped = true;
  }

/**
 * Updates the object to a die state after being slapped.
 *
 * @return {void} This function does not return anything.
 */
  slapDie() {
    this.loadImg(this.IMGS_SLAP_DIE);
    this.y += 50;
    this.x += 20;
    this.lifeBar.y += 50;
    this.lifeBar.x += 20;
  }
}
