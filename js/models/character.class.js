class Character extends MovableObject {
  width = 160;
  height = 160;
  speed = 4;
  offsetYTop = 80;
  offsetYBottom = 40;
  offsetXLeft = 30;
  offsetXRight = 30;
  IMGS_IDLE = [
    "../../img/1.Sharkie/1.IDLE/1.png",
    "../../img/1.Sharkie/1.IDLE/2.png",
    "../../img/1.Sharkie/1.IDLE/3.png",
    "../../img/1.Sharkie/1.IDLE/4.png",
    "../../img/1.Sharkie/1.IDLE/5.png",
    "../../img/1.Sharkie/1.IDLE/6.png",
    "../../img/1.Sharkie/1.IDLE/7.png",
    "../../img/1.Sharkie/1.IDLE/8.png",
    "../../img/1.Sharkie/1.IDLE/9.png",
    "../../img/1.Sharkie/1.IDLE/10.png",
    "../../img/1.Sharkie/1.IDLE/11.png",
    "../../img/1.Sharkie/1.IDLE/12.png",
    "../../img/1.Sharkie/1.IDLE/13.png",
    "../../img/1.Sharkie/1.IDLE/14.png",
    "../../img/1.Sharkie/1.IDLE/15.png",
    "../../img/1.Sharkie/1.IDLE/16.png",
    "../../img/1.Sharkie/1.IDLE/17.png",
    "../../img/1.Sharkie/1.IDLE/18.png",
  ];
  IMGS_SWIM = [
    "../../img/1.Sharkie/3.Swim/1.png",
    "../../img/1.Sharkie/3.Swim/2.png",
    "../../img/1.Sharkie/3.Swim/3.png",
    "../../img/1.Sharkie/3.Swim/4.png",
    "../../img/1.Sharkie/3.Swim/5.png",
    "../../img/1.Sharkie/3.Swim/6.png",
  ];
  IMGS_SLAP = [
    "../../img/1.Sharkie/4.Attack/Fin slap/1.png",
    // "../../img/1.Sharkie/4.Attack/Fin slap/2.png",
    // "../../img/1.Sharkie/4.Attack/Fin slap/3.png",
    "../../img/1.Sharkie/4.Attack/Fin slap/4.png",
    "../../img/1.Sharkie/4.Attack/Fin slap/5.png",
    "../../img/1.Sharkie/4.Attack/Fin slap/6.png",
    "../../img/1.Sharkie/4.Attack/Fin slap/7.png",
    "../../img/1.Sharkie/4.Attack/Fin slap/8.png",
  ];
  IMGS_DIE_POISONED = [
    "../../img/1.Sharkie/6.dead/1.Poisoned/1.png",
    "../../img/1.Sharkie/6.dead/1.Poisoned/2.png",
    "../../img/1.Sharkie/6.dead/1.Poisoned/3.png",
    "../../img/1.Sharkie/6.dead/1.Poisoned/4.png",
    "../../img/1.Sharkie/6.dead/1.Poisoned/5.png",
    "../../img/1.Sharkie/6.dead/1.Poisoned/6.png",
    "../../img/1.Sharkie/6.dead/1.Poisoned/7.png",
    "../../img/1.Sharkie/6.dead/1.Poisoned/8.png",
    "../../img/1.Sharkie/6.dead/1.Poisoned/9.png",
    "../../img/1.Sharkie/6.dead/1.Poisoned/10.png",
    "../../img/1.Sharkie/6.dead/1.Poisoned/11.png",
    "../../img/1.Sharkie/6.dead/1.Poisoned/12.png",
  ];
  IMGS_HURT_POISONED = [
    "../../img/1.Sharkie/5.Hurt/1.Poisoned/1.png",
    "../../img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
    "../../img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
    "../../img/1.Sharkie/5.Hurt/1.Poisoned/4.png",
  ];
  IMGS_BUBBLE_ATTACK = [
    "../../img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png",
    "../../img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png",
    "../../img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png",
    "../../img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png",
    "../../img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png",
    "../../img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png",
    "../../img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png",
  ];
  IMGS_SLEEP = [
    "../../img/1.Sharkie/2.Long_IDLE/i1.png",
    "../../img/1.Sharkie/2.Long_IDLE/I2.png",
    "../../img/1.Sharkie/2.Long_IDLE/I3.png",
    "../../img/1.Sharkie/2.Long_IDLE/I4.png",
    "../../img/1.Sharkie/2.Long_IDLE/I5.png",
    "../../img/1.Sharkie/2.Long_IDLE/I6.png",
    "../../img/1.Sharkie/2.Long_IDLE/I7.png",
    "../../img/1.Sharkie/2.Long_IDLE/I8.png",
    "../../img/1.Sharkie/2.Long_IDLE/I9.png",
    "../../img/1.Sharkie/2.Long_IDLE/I10.png",
    "../../img/1.Sharkie/2.Long_IDLE/I11.png",
    "../../img/1.Sharkie/2.Long_IDLE/I12.png",
    "../../img/1.Sharkie/2.Long_IDLE/I13.png",
    "../../img/1.Sharkie/2.Long_IDLE/I14.png",
  ];

  IMGS_ELECTRIC_SHOCK = ["../../img/1.Sharkie/5.Hurt/2.Electric shock/1.png", "../../img/1.Sharkie/5.Hurt/2.Electric shock/2.png", "../../img/1.Sharkie/5.Hurt/2.Electric shock/3.png"];

  SWIM_AUDIO = new Audio("../../audio/bubbles.mp3");
  SLAP_AUDIO = new Audio("../../audio/slap.mp3");
  HURT_AUDIO = new Audio("../../audio/groan.mp3");
  TASER_AUDIO = new Audio("../../audio/taser.mp3");
  SNORE_AUDIO = new Audio("../../audio/snore.mp3");
  audios = [this.SWIM_AUDIO, this.HURT_AUDIO, this.SLAP_AUDIO, this.TASER_AUDIO, this.HURT_AUDIO, this.SNORE_AUDIO];

  world;
  coins = 0;
  bubbles = 0;
  lastAction = new Date().getTime();
  isPlayed = false;
  indexImg = 0;
  lastElectricShock = 0;

  constructor() {
    super().loadImg("../../img/1.Sharkie/1.IDLE/1.png");
    this.loadAllImages();
    this.applyGravity();
    this.setAudioVolume(0.05);
    this.animate();
  }

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

  setAudioVolume(volume) {
    this.HURT_AUDIO.volume = volume;
    this.SLAP_AUDIO.volume = volume;
    this.SWIM_AUDIO.volume = volume;
    this.TASER_AUDIO.volume = volume + 0.2;
    this.SNORE_AUDIO.volume = volume + 0.1;
  }

  animate() {
    setStoppableInterval(() => {
      if (!this.world.isPaused) this.move();
    }, 1000 / 60);
    setStoppableInterval(() => {
      if (!this.world.isPaused) this.playAnimations();
    }, 100);
  }

  resetParameters() {
    this.lastAction = new Date().getTime();
    this.isPlayed = false;
    this.indexImg = 0;
  }

  move() {
    this.SWIM_AUDIO.pause();
    if (this.canMoveRight()) this.moveRight();
    if (this.canMoveLeft()) this.moveLeft();
    if (this.canMoveUp()) this.moveUp();
    if (this.canMoveDown()) this.moveDown();
    if (this.world.keyboard.X) {
      this.SLAP_AUDIO.play();
      this.offsetXRight = -15; 
      setTimeout(() => {
        this.resetOffsetXRight();
      }, 100);
    }
    this.world.camera_x = -this.x + 180;
  }

  canMoveRight() {
    return this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x;
  }

  resetOffsetXRight() {
    this.offsetXRight = 30;
  }

  moveRight() {
    super.moveRight();
    this.otherDirection = false;
    this.SWIM_AUDIO.play();
  }

  canMoveLeft() {
    return this.world.keyboard.LEFT && this.x > 0;
  }

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

  playAnimations() {
    if (this.isDead()) this.die();
    else if (this.isElectricShocked()) this.playElectricShock();
    else if (this.isHurt()) this.playHurt();
    else if (this.world.keyboard.X) this.playSlap();
    else if (this.world.keyboard.Y) this.playBubbleAttack();
    else if (this.isMoving()) this.playMove();
    else this.playIdle();
  }

  die() {
    this.playAnimation(this.IMGS_DIE_POISONED);
    setTimeout(() => {
      stopGame(false);
    }, 1500);
  }

  playElectricShock() {
    this.playAnimation(this.IMGS_ELECTRIC_SHOCK);
    this.TASER_AUDIO.play();
    this.resetParameters();
  }

  isElectricShocked() {
    let timePassed = new Date().getTime() - this.lastElectricShock;
    return timePassed < 1000;
  }

  electricShock() {
    this.energy -= 10;
    if (this.energy <= 0) {
      this.energy = 0;
    } else this.lastElectricShock = new Date().getTime();
  }

  playHurt() {
    this.playAnimation(this.IMGS_HURT_POISONED);
    this.HURT_AUDIO.play();
    this.resetParameters();
  }

  playSlap() {
    this.playAnimation(this.IMGS_SLAP);
    this.resetParameters();
  }

  playBubbleAttack() {
    this.playAnimation(this.IMGS_BUBBLE_ATTACK);
    this.resetParameters();
  }

  isMoving() {
    return this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN;
  }

  playMove() {
    this.playAnimation(this.IMGS_SWIM);
    if (this.world.keyboard.X) this.playAnimation(this.IMGS_BUBBLE_ATTACK);
    if (this.world.keyboard.Y) this.playBubbleAttack();
    this.resetParameters();
  }

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
