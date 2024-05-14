class EndBoss extends Enemy {
  width = 280;
  height = 280;
  offsetYTop = 150;
  offsetYBottom = 65;
  offsetXLeft = 30;
  offsetXRight = 30;
  speed = 4;
  energy = 100;
  IMGS_ENTRY = [
    "../../img/2.Enemy/3 Final Enemy/1.Introduce/1.png",
    "../../img/2.Enemy/3 Final Enemy/1.Introduce/2.png",
    "../../img/2.Enemy/3 Final Enemy/1.Introduce/3.png",
    "../../img/2.Enemy/3 Final Enemy/1.Introduce/4.png",
    "../../img/2.Enemy/3 Final Enemy/1.Introduce/5.png",
    "../../img/2.Enemy/3 Final Enemy/1.Introduce/6.png",
    "../../img/2.Enemy/3 Final Enemy/1.Introduce/7.png",
    "../../img/2.Enemy/3 Final Enemy/1.Introduce/8.png",
    "../../img/2.Enemy/3 Final Enemy/1.Introduce/9.png",
    "../../img/2.Enemy/3 Final Enemy/1.Introduce/10.png",
  ];
  IMGS_IDLE = [
    "../../img/2.Enemy/3 Final Enemy/2.floating/1.png",
    "../../img/2.Enemy/3 Final Enemy/2.floating/2.png",
    "../../img/2.Enemy/3 Final Enemy/2.floating/3.png",
    "../../img/2.Enemy/3 Final Enemy/2.floating/4.png",
    "../../img/2.Enemy/3 Final Enemy/2.floating/5.png",
    "../../img/2.Enemy/3 Final Enemy/2.floating/6.png",
    "../../img/2.Enemy/3 Final Enemy/2.floating/7.png",
    "../../img/2.Enemy/3 Final Enemy/2.floating/8.png",
    "../../img/2.Enemy/3 Final Enemy/2.floating/9.png",
    "../../img/2.Enemy/3 Final Enemy/2.floating/10.png",
    "../../img/2.Enemy/3 Final Enemy/2.floating/11.png",
    "../../img/2.Enemy/3 Final Enemy/2.floating/12.png",
    "../../img/2.Enemy/3 Final Enemy/2.floating/13.png",
  ];
  IMGS_HURT = ["../../img/2.Enemy/3 Final Enemy/Hurt/1.png", "../../img/2.Enemy/3 Final Enemy/Hurt/2.png", "../../img/2.Enemy/3 Final Enemy/Hurt/3.png", "../../img/2.Enemy/3 Final Enemy/Hurt/4.png"];
  IMGS_DIE = [
    "../../img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png",
    "../../img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png",
    "../../img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png",
    "../../img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png",
    "../../img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png",
  ];
  IMGS_ATTACK = [
    "../../img/2.Enemy/3 Final Enemy/Attack/1.png",
    "../../img/2.Enemy/3 Final Enemy/Attack/2.png",
    "../../img/2.Enemy/3 Final Enemy/Attack/3.png",
    "../../img/2.Enemy/3 Final Enemy/Attack/4.png",
    "../../img/2.Enemy/3 Final Enemy/Attack/5.png",
    "../../img/2.Enemy/3 Final Enemy/Attack/6.png",
  ];
  isSharkieComing = false;
  hadFirstContact = false;
  SPLASH_AUDIO = new Audio("../../audio/splash.mp3");
  PUNCH_AUDIO = new Audio("../../audio/punch.mp3");
  UMPH_AUDIO = new Audio("../../audio/umph.mp3");
  OW_AUDIO = new Audio("../../audio/ow.mp3");
  WON_AUDIO = new Audio("../../audio/level-completed.mp3");
  BITE_AUDIO = new Audio("../../audio/bite.mp3");
  audios = [this.SPLASH_AUDIO, this.PUNCH_AUDIO, this.UMPH_AUDIO, this.OW_AUDIO, this.WON_AUDIO, this.BITE_AUDIO];
  i = 100;
  indexImgAnimationOnlyOnce = 0;
  lastAttack = new Date().getTime();
  isAttackAnimationPlayed = false;
  indexAttack = 0;
  sharkie;
  lifeBar;
  gameOverCalled = true;

  constructor() {
    super().loadImg("../../img/2.Enemy/3 Final Enemy/1.Introduce/1.png");
    this.loadImgs(this.IMGS_ENTRY);
    this.loadImgs(this.IMGS_IDLE);
    this.loadImgs(this.IMGS_HURT);
    this.loadImgs(this.IMGS_DIE);
    this.loadImgs(this.IMGS_ATTACK);
    this.setVolume(0.1);
    this.x = 3000;
    this.y = 0;
    this.speed = 8;
    this.setLifeBar();
    this.lifeBar.visibility = true;
    this.lifeBar.offsetY = 100;
    this.checkIfSharkieIsComing();
  }

  /**
   * Animates the enemy by moving it and playing audios.
   *
   */
  animate() {
    this.move();
    this.playAudios();
  }


/**
 * Moves the enemy in a set interval. If the enemy can die, it plays the die animation.
 * If the enemy is not dead, it checks if the enemy can enter, attack, or is hurt.
 * If none of these conditions are met, it makes a move. If the enemy is dead, it floats.
 *
 * @return {void} This function does not return anything.
 */
  move() {
    setStoppableInterval(() => {
      if (this.canDie()) this.playDieAnimation();
      else if (!this.isDead()) {
        if (this.canEntry()) this.playEntryAnimation();
        else if (this.canAttack()) this.attack();
        else if (this.isHurt()) this.playAnimation(this.IMGS_HURT);
        else this.makeAMove();
      } else this.float();
    }, 120);
  }

  /**
   * Plays various audio based on enemy actions.
   *
   * @return {void} This function does not return anything.
   */
  playAudios() {
    setStoppableInterval(() => {
      if (this.canDie()) {
        this.gameOverCalled = false;
        this.OW_AUDIO.play();
        this.WON_AUDIO.play();
        setTimeout(() => {
          if (!this.gameOverCalled) {
            stopGame(true);
            this.gameOverCalled = true;
          }

        }, 2500);
      }
      if (this.canEntry()) this.SPLASH_AUDIO.play();
      if (this.canAttack()) this.BITE_AUDIO.play();
      if (this.isHurt()) {
        this.PUNCH_AUDIO.play();
        this.UMPH_AUDIO.play();
      }
    }, 100);
  }

  /**
   * Checks if the sharkie is coming and had no first contact.
   *
   */
  checkIfSharkieIsComing() {
    setStoppableInterval(() => {
      if (this.isSharkieComing && !this.hadFirstContact) {
        this.i = 0;
        this.x = 2200;
        this.y = 0;
        this.hadFirstContact = true;
        this.lifeBar.setPosition(this);
        this.animate();
      }
    }, 100);
  }

  /**
   * Checks if the enemy can attack.
   *
   * @return {boolean} Returns true if the enemy can attack, false otherwise.
   */
  canAttack() {
    if (this.hadFirstContact && !this.isDead() && !this.isHurt()) {
      let now = new Date().getTime();
      if (now - this.lastAttack > 3000) if (!this.isAttackAnimationPlayed) return true;
    }
    return false;
  }

  /**
   * Checks if the enemy can die.
   *
   * @return {boolean} Returns true if the enemy is dead and has not played the die animation, false otherwise.
   */
  canDie() {
    return this.isDead() && !this.isPlayed;
  }

  /**
   * Plays the die animation for the enemy.
   *
   * This function plays the die animation for the enemy by calling the `playAnimationOnlyOnce` method with the current index of the animation and the `IMGS_DIE` array. It then increments the `indexImgAnimationOnlyOnce` property and checks if it has reached the length of the `IMGS_DIE` array. If it has, it sets the `isPlayed` property to `true`.
   *
   * @return {void} This function does not return anything.
   */
  playDieAnimation() {
    this.playAnimationOnlyOnce(this.indexImgAnimationOnlyOnce, this.IMGS_DIE);
    this.indexImgAnimationOnlyOnce++;
    if (this.indexImgAnimationOnlyOnce == this.IMGS_DIE.length) {
      this.isPlayed = true;
    }
  }

  /**
   * Checks if the current index is less than the length of the IMGS_ENTRY array.
   *
   * @return {boolean} Returns true if the index is less than the length of IMGS_ENTRY array, otherwise false.
   */
  canEntry() {
    return this.i < this.IMGS_ENTRY.length;
  }

  /**
   * Plays the entry animation for the enemy.
   *
   * @param {void} No parameters needed.
   * @return {void} This function does not return anything.
   */
  playEntryAnimation() {
    this.playAnimation(this.IMGS_ENTRY);
    this.i++;
  }

  /**
   * Resets the attack state of the enemy.
   *
   * This function sets the `isAttackAnimationPlayed` flag to `true`, resets the `indexAttack` to `0`, and updates the `lastAttack` timestamp to the current time.
   *
   * @return {void} This function does not return anything.
   */
  resetAttack() {
    this.isAttackAnimationPlayed = true;
    this.indexAttack = 0;
    this.lastAttack = new Date().getTime();
  }

/**
 * Moves the enemy based on the position of the sharkie and the enemy's current direction.
 * If the sharkie is to the left of the enemy, the enemy moves left.
 * If the sharkie is to the right of the enemy, the enemy moves right.
 * If the sharkie is above the enemy, the enemy moves up.
 * If the sharkie is underneath the enemy, the enemy moves down.
 * The enemy's life bar moves in the same direction as the enemy.
 * The enemy plays the idle animation.
 * The attack animation is reset.
 *
 * @return {void} This function does not return anything.
 */
  makeAMove() {
    if (this.sharkie.x < this.x) this.makeALeftMove();
    if (this.sharkie.x > this.x) this.makeARightMove();
    if (this.isSharkieAbove()) this.makeAUpMove();
    if (this.isSharkieUnderneath()) this.makeADownMove();
    this.lifeBar.otherDirection = this.otherDirection;
    this.playAnimation(this.IMGS_IDLE);
    this.isAttackAnimationPlayed = false;
  }

  /**
   * Checks if the sharkie is above the enemy.
   *
   * @return {boolean} Returns true if the sharkie is above the enemy, false otherwise.
   */
  isSharkieAbove() {
    return this.sharkie.y + this.sharkie.offsetYTop < this.y + this.offsetYTop + 50;
  }

/**
 * Checks if the sharkie is underneath the enemy.
 *
 * @return {boolean} Returns true if the sharkie is underneath the enemy, false otherwise.
 */
  isSharkieUnderneath() {
    return this.sharkie.y - this.sharkie.offsetYBottom - this.sharkie.offsetYTop + this.sharkie.height > this.y - this.offsetYTop - this.offsetYBottom + this.height;
  }

  /**
   * Moves the enemy to the left and updates the life bar accordingly.
   *
   * @return {void} This function does not return anything.
   */
  makeALeftMove() {
    this.otherDirection = false;
    this.moveLeft();
    this.lifeBar.moveLeft();
  }

  /**
   * Moves the enemy to the right and updates the life bar accordingly.
   *
   * @param {void} This function does not have any parameters.
   * @return {void} This function does not return anything.
   */
  makeARightMove() {
    this.otherDirection = true;
    this.moveRight();
    this.lifeBar.moveRight();
  }

  /**
   * Moves the enemy up and updates the life bar accordingly.
   *
   * @return {void} This function does not return anything.
   */
  makeAUpMove() {
    this.moveUp();
    this.lifeBar.moveUp();
  }

  /**
   * Moves the enemy down and updates the life bar accordingly.
   *
   * @param {void} This function does not have any parameters.
   * @return {void} This function does not return anything.
   */
  makeADownMove() {
    this.moveDown();
    this.lifeBar.moveDown();
  }

  /**
   * Executes an attack animation and moves the enemy in the opposite direction of the last attack.
   * Updates the life bar accordingly.
   *
   * @return {void} This function does not return anything.
   */
  attack() {
    this.playAnimationOnlyOnce(this.indexAttack, this.IMGS_ATTACK);
    if (this.otherDirection) {
      this.moveRight();
      this.lifeBar.moveRight();
    } else {
      this.moveLeft();
      this.lifeBar.moveLeft();
    }
    this.indexAttack++;
    if (this.indexAttack == this.IMGS_ATTACK.length) this.resetAttack();
  }

/**
 * Moves the object up and randomly changes its x position.
 * Updates the position of the associated life bar.
 *
 * @return {void} This function does not return anything.
 */
  float() {
    this.moveUp();
    this.x += Math.random() * 10;
    this.lifeBar.moveUp();
    this.lifeBar.x += this.x;
  }
}
