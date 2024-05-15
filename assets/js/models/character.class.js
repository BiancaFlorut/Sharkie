class Character extends MovableObject {
  width = 160;
  height = 160;
  speed = 4;
  offsetYTop = 80;
  offsetYBottom = 40;
  offsetXLeft = 30;
  offsetXRight = 30;
  IMGS_IDLE = [
    "./assets/img/1.Sharkie/1.IDLE/1.png",
    "./assets/img/1.Sharkie/1.IDLE/2.png",
    "./assets/img/1.Sharkie/1.IDLE/3.png",
    "./assets/img/1.Sharkie/1.IDLE/4.png",
    "./assets/img/1.Sharkie/1.IDLE/5.png",
    "./assets/img/1.Sharkie/1.IDLE/6.png",
    "./assets/img/1.Sharkie/1.IDLE/7.png",
    "./assets/img/1.Sharkie/1.IDLE/8.png",
    "./assets/img/1.Sharkie/1.IDLE/9.png",
    "./assets/img/1.Sharkie/1.IDLE/10.png",
    "./assets/img/1.Sharkie/1.IDLE/11.png",
    "./assets/img/1.Sharkie/1.IDLE/12.png",
    "./assets/img/1.Sharkie/1.IDLE/13.png",
    "./assets/img/1.Sharkie/1.IDLE/14.png",
    "./assets/img/1.Sharkie/1.IDLE/15.png",
    "./assets/img/1.Sharkie/1.IDLE/16.png",
    "./assets/img/1.Sharkie/1.IDLE/17.png",
    "./assets/img/1.Sharkie/1.IDLE/18.png",
  ];
  IMGS_SWIM = [
    "./assets/img/1.Sharkie/3.Swim/1.png",
    "./assets/img/1.Sharkie/3.Swim/2.png",
    "./assets/img/1.Sharkie/3.Swim/3.png",
    "./assets/img/1.Sharkie/3.Swim/4.png",
    "./assets/img/1.Sharkie/3.Swim/5.png",
    "./assets/img/1.Sharkie/3.Swim/6.png",
  ];
  IMGS_SLAP = [
    "./assets/img/1.Sharkie/4.Attack/Fin slap/1.png",
    // "./assets/img/1.Sharkie/4.Attack/Fin slap/2.png",
    // "./assets/img/1.Sharkie/4.Attack/Fin slap/3.png",
    "./assets/img/1.Sharkie/4.Attack/Fin slap/4.png",
    "./assets/img/1.Sharkie/4.Attack/Fin slap/5.png",
    "./assets/img/1.Sharkie/4.Attack/Fin slap/6.png",
    "./assets/img/1.Sharkie/4.Attack/Fin slap/7.png",
    "./assets/img/1.Sharkie/4.Attack/Fin slap/8.png",
  ];
  IMGS_DIE_POISONED = [
    "./assets/img/1.Sharkie/6.dead/1.Poisoned/1.png",
    "./assets/img/1.Sharkie/6.dead/1.Poisoned/2.png",
    "./assets/img/1.Sharkie/6.dead/1.Poisoned/3.png",
    "./assets/img/1.Sharkie/6.dead/1.Poisoned/4.png",
    "./assets/img/1.Sharkie/6.dead/1.Poisoned/5.png",
    "./assets/img/1.Sharkie/6.dead/1.Poisoned/6.png",
    "./assets/img/1.Sharkie/6.dead/1.Poisoned/7.png",
    "./assets/img/1.Sharkie/6.dead/1.Poisoned/8.png",
    "./assets/img/1.Sharkie/6.dead/1.Poisoned/9.png",
    "./assets/img/1.Sharkie/6.dead/1.Poisoned/10.png",
    "./assets/img/1.Sharkie/6.dead/1.Poisoned/11.png",
    "./assets/img/1.Sharkie/6.dead/1.Poisoned/12.png",
  ];
  IMGS_HURT_POISONED = [
    "./assets/img/1.Sharkie/5.Hurt/1.Poisoned/1.png",
    "./assets/img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
    "./assets/img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
    "./assets/img/1.Sharkie/5.Hurt/1.Poisoned/4.png",
  ];
  IMGS_BUBBLE_ATTACK = [
    "./assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png",
    "./assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png",
    "./assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png",
    "./assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png",
    "./assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png",
    "./assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png",
    "./assets/img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png",
  ];
  IMGS_SLEEP = [
    "./assets/img/1.Sharkie/2.Long_IDLE/i1.png",
    "./assets/img/1.Sharkie/2.Long_IDLE/I2.png",
    "./assets/img/1.Sharkie/2.Long_IDLE/I3.png",
    "./assets/img/1.Sharkie/2.Long_IDLE/I4.png",
    "./assets/img/1.Sharkie/2.Long_IDLE/I5.png",
    "./assets/img/1.Sharkie/2.Long_IDLE/I6.png",
    "./assets/img/1.Sharkie/2.Long_IDLE/I7.png",
    "./assets/img/1.Sharkie/2.Long_IDLE/I8.png",
    "./assets/img/1.Sharkie/2.Long_IDLE/I9.png",
    "./assets/img/1.Sharkie/2.Long_IDLE/I10.png",
    "./assets/img/1.Sharkie/2.Long_IDLE/I11.png",
    "./assets/img/1.Sharkie/2.Long_IDLE/I12.png",
    "./assets/img/1.Sharkie/2.Long_IDLE/I13.png",
    "./assets/img/1.Sharkie/2.Long_IDLE/I14.png",
  ];

  IMGS_ELECTRIC_SHOCK = [
    "./assets/img/1.Sharkie/5.Hurt/2.Electric shock/1.png", 
    "./assets/img/1.Sharkie/5.Hurt/2.Electric shock/2.png", 
    "./assets/img/1.Sharkie/5.Hurt/2.Electric shock/3.png"
  ];

  SWIM_AUDIO = new Audio("./assets/audio/bubbles.mp3");
  SLAP_AUDIO = new Audio("./assets/audio/slap.mp3");
  HURT_AUDIO = new Audio("./assets/audio/groan.mp3");
  TASER_AUDIO = new Audio("./assets/audio/taser.mp3");
  SNORE_AUDIO = new Audio("./assets/audio/snore.mp3");
  audios = [this.SWIM_AUDIO, this.HURT_AUDIO, this.SLAP_AUDIO, this.TASER_AUDIO, this.SNORE_AUDIO];

  world;
  coins = 0;
  bubbles = 0;
  lastAction = new Date().getTime();
  isPlayed = false;
  indexImg = 0;
  lastElectricShock = 0;

  constructor() {
    super().loadImg("./assets/img/1.Sharkie/1.IDLE/1.png");
    this.loadAllImages();
    this.applyGravity();
    this.setAudioVolume(0.05);
    this.animate();
  }

/**
 * Loads all the images required for the character's animations.
 *
 * @return {void} This function does not return anything.
 */
  loadAllImages() {
    this.loadImgs(this.IMGS_IDLE);
    this.loadImgs(this.IMGS_SWIM);
    this.loadImgs(this.IMGS_SLAP);
    this.loadImgs(this.IMGS_HURT_POISONED);
    this.loadImgs(this.IMGS_DIE_POISONED);
    this.loadImgs(this.IMGS_BUBBLE_ATTACK);
    this.loadImgs(this.IMGS_SLEEP);
    this.loadImgs(this.IMGS_ELECTRIC_SHOCK);
  }

/**
 * Sets the volume of all audio elements associated with the character.
 *
 * @param {number} volume - The volume level to set for the audio elements.
 * @return {void} This function does not return anything.
 */
  setAudioVolume(volume) {
    this.audios.forEach((audio) => (audio.volume = volume));
  }

  /**
   * Animates the character by moving it and playing animations.
   *
   * This function uses setStoppableInterval to repeatedly execute the provided callbacks at a rate of 60 times per second and 10 times per second respectively.
   * The callbacks move the character and play its animations, but only if the world is not paused.
   *
   * @return {void} This function does not return anything.
   */
  animate() {
    setStoppableInterval(() => {
      if (!this.world.isPaused) this.move();
    }, 1000 / 60);
    setStoppableInterval(() => {
      if (!this.world.isPaused) this.playAnimations();
    }, 100);
  }

  /**
   * Resets the parameters of the character.
   *
   * @param {} - No parameters
   * @return {} - No return value
   */
  resetParameters() {
    this.lastAction = new Date().getTime();
    this.isPlayed = false;
    this.indexImg = 0;
  }

  /**
   * Moves the character based on keyboard input and triggers specific actions.
   *
   * @return {void} This function does not return anything.
   */
  move() {
    this.SWIM_AUDIO.pause();
    if (this.canMoveRight()) this.moveRight();
    if (this.canMoveLeft()) this.moveLeft();
    if (this.canMoveUp()) this.moveUp();
    if (this.canMoveDown()) this.moveDown();
    if (this.world.keyboard.X) this.makeSlapAttack();
    if (this.isHurt()) this.HURT_AUDIO.play();
    this.world.camera_x = -this.x + 180;
  }

  /**
   * Checks if the character can move to the right.
   *
   * @return {boolean} Returns true if the character can move to the right, false otherwise.
   */
  canMoveRight() {
    return this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x;
  }

/**
 * Resets the value of the offsetXRight property to 30.
 *
 * @return {void} This function does not return anything.
 */
  resetOffsetXRight() {
    this.offsetXRight = 30;
  }

  /**
   * Executes a slap attack, playing the slap audio and updating the offsetXRight property.
   *
   * @return {void} This function does not return anything.
   */
  makeSlapAttack() {
    this.SLAP_AUDIO.play();
      this.offsetXRight = -15; 
      setStoppableInterval(() => {
        this.resetOffsetXRight();
      }, 100);
  }

  /**
   * Moves the object to the right and sets the direction as false before playing the swim audio.
   *
   * @param {void} This function does not have any parameters.
   * @return {void} This function does not return anything.
   */
  moveRight() {
    super.moveRight();
    this.otherDirection = false;
    this.SWIM_AUDIO.play();
  }

  canMoveLeft() {
    return this.world.keyboard.LEFT && this.x > 0;
  }

  /**
   * Moves the object to the left and sets the direction as true before playing the swim audio.
   *
   * @param {void} This function does not have any parameters.
   * @return {void} This function does not return anything.
   */
  moveLeft() {
    super.moveLeft();
    this.otherDirection = true;
    this.SWIM_AUDIO.play();
  }

  canMoveUp() {
    return this.world.keyboard.UP && this.y > -75;
  }

  moveUp() {
    this.y -= this.speed + 1;
    this.SWIM_AUDIO.play();
  }

  canMoveDown() {
    return this.world.keyboard.DOWN && this.y < 350;
  }

  moveDown() {
    this.y += this.speed;
    this.SWIM_AUDIO.play();
  }

  /**
   * Plays different animations based on the character's state and user input.
   *
   * @param {} - No parameters
   * @return {} - No return value
   */
  playAnimations() {
    if (this.isDead()) this.die();
    else if (this.isElectricShocked()) this.playElectricShock();
    else if (this.isHurt()) this.playHurt();
    else if (this.world.keyboard.X) this.playSlap();
    else if (this.world.keyboard.Y) this.playBubbleAttack();
    else if (this.isMoving()) this.playMove();
    else this.playIdle();
  }

  /**
   * Plays the die animation for the character and stops the game after a delay.
   *
   * @param {} - No parameters
   * @return {} - No return value
   */
  die() {
    this.playAnimation(this.IMGS_DIE_POISONED);
    setTimeout(() => {
      stopGame(false);
    }, 1500);
  }

/**
 * Plays the electric shock animation for the character.
 *
 * @return {void} This function does not return anything.
 */
  playElectricShock() {
    this.playAnimation(this.IMGS_ELECTRIC_SHOCK);
    this.TASER_AUDIO.play();
    this.resetParameters();
  }

/**
 * Checks if the character is currently electric shocked.
 *
 * @return {boolean} Returns true if the character is electric shocked, false otherwise.
 */
  isElectricShocked() {
    let timePassed = new Date().getTime() - this.lastElectricShock;
    return timePassed < 1000;
  }

  /**
   * Decreases the energy of the character by 10 units and updates the lastElectricShock timestamp.
   *
   * @return {void} This function does not return anything.
   */
  electricShock() {
    this.energy -= 10;
    if (this.energy <= 0) {
      this.energy = 0;
    } else this.lastElectricShock = new Date().getTime();
  }

/**
 * Plays the hurt animation for the character and resets the parameters.
 *
 * @param {type} this.IMGS_HURT_POISONED - the hurt animation images
 * @return {type} no return value
 */
  playHurt() {
    this.playAnimation(this.IMGS_HURT_POISONED);
    this.resetParameters();
  }

/**
 * Plays the slap animation for the character and resets its parameters.
 *
 * @return {void} This function does not return anything.
 */
  playSlap() {
    this.playAnimation(this.IMGS_SLAP);
    this.resetParameters();
  }

  /**
   * Plays the bubble attack animation for the character and resets its parameters.
   *
   * @param {type} - No parameters needed
   * @return {type} - No return value
   */
  playBubbleAttack() {
    this.playAnimation(this.IMGS_BUBBLE_ATTACK);
    this.resetParameters();
  }

  /**
   * Checks if the character is currently moving in any direction.
   *
   * @return {boolean} Returns true if the character is moving, false otherwise.
   */
  isMoving() {
    return this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN;
  }

/**
 * Plays the move animation for the character.
 *
 * @return {void} This function does not return anything.
 */
  playMove() {
    this.playAnimation(this.IMGS_SWIM);
    if (this.world.keyboard.X) this.playAnimation(this.IMGS_BUBBLE_ATTACK);
    if (this.world.keyboard.Y) this.playBubbleAttack();
    this.resetParameters();
  }

  /**
   * Plays the idle animation for the character and handles sleeping behavior.
   *
   * @param {type} No parameters needed
   * @return {type} No return value
   */
  playIdle() {
    this.playAnimation(this.IMGS_IDLE);
    const now = new Date().getTime();
    if (now - this.lastAction > 5000) {
      this.playAnimationOnlyOnce(this.indexImg, this.IMGS_SLEEP);
      this.indexImg++;
      if (this.indexImg == this.IMGS_SLEEP.length) {
        this.isPlayed = true;
        this.indexImg = 10;
      }
      this.SNORE_AUDIO.play();
    }
  }
}
