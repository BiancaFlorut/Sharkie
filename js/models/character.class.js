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
  audios = [this.SWIM_AUDIO, this.HURT_AUDIO, this.SLAP_AUDIO, this.TASER_AUDIO, this.HURT_AUDIO];

  world;
  coins = 0;
  bubbles = 0;
  lastAction = 0;
  isPlayed = false;
  indexImg = 0;

  constructor() {
    super().loadImg("../../img/1.Sharkie/1.IDLE/1.png");
    this.loadImgs(this.IMGS_IDLE);
    this.loadImgs(this.IMGS_SWIM);
    this.loadImgs(this.IMGS_SLAP);
    this.loadImgs(this.IMGS_HURT_POISONED);
    this.loadImgs(this.IMGS_DIE_POISONED);
    this.loadImgs(this.IMGS_BUBBLE_ATTACK);
    this.loadImgs(this.IMGS_SLEEP);
    this.loadImgs(this.IMGS_ELECTRIC_SHOCK);
    this.applyGravity();
    this.HURT_AUDIO.volume = 0.03;
    this.SLAP_AUDIO.volume = 0.03;
    this.SWIM_AUDIO.volume = 0.06;
    this.TASER_AUDIO.volume = 0.03;
    this.animate();
  }

  animate() {
    this.move();
    this.playAnimations();
  }

  playAnimationOnlyOnce(index, array) {
    if (!this.isPlayed && index < array.length - 1) {
      this.img = this.imgCache[this.IMGS_SLEEP[index]];
    } else {
      this.img = this.imgCache[this.IMGS_SLEEP[index]];
    }
  }

  resetParameters() {
    this.lastAction = new Date().getTime();
    this.isPlayed = false;
    this.indexImg = 0;
  }

  move() {
    setStoppableInterval(() => {
      this.SWIM_AUDIO.pause();
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.otherDirection = false;
        this.SWIM_AUDIO.play();
      }
      if (this.world.keyboard.LEFT && this.x > 0) {
        this.moveLeft();
        this.otherDirection = true;
        this.SWIM_AUDIO.play();
      }
      if (this.world.keyboard.UP && this.y > -75) {
        this.y -= this.speed + 1;
        this.SWIM_AUDIO.play();
      }
      if (this.world.keyboard.DOWN && this.y < 350) {
        this.y += this.speed;
        this.SWIM_AUDIO.play();
      }
      if (this.world.keyboard.SPACE) {
        this.SLAP_AUDIO.play();
      }
      this.world.camera_x = -this.x + 60;
    }, 1000 / 60);
  }

  playAnimations() {
    setStoppableInterval(() => {
      if (this.isDead()) {
        this.playAnimation(this.IMGS_DIE_POISONED);
        setTimeout(() => {
          stopGame(false);
        }, 1500);
      } else if (this.isElectricShocked()) {
        this.playAnimation(this.IMGS_ELECTRIC_SHOCK);
        this.TASER_AUDIO.play();
        this.resetParameters();
      } else if (this.isHurt()) {
        this.playAnimation(this.IMGS_HURT_POISONED);
        this.HURT_AUDIO.play();
        this.resetParameters();
      } else if (this.world.keyboard.SPACE) {
        this.playAnimation(this.IMGS_SLAP);
        this.resetParameters();
      } else if (this.world.keyboard.Y) {
        this.playAnimation(this.IMGS_BUBBLE_ATTACK);
        this.resetParameters();
      } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
        this.playAnimation(this.IMGS_SWIM);
        if (this.world.keyboard.SPACE) this.playAnimation(this.IMGS_SLAP);
        if (this.world.keyboard.Y) this.playAnimation(this.IMGS_BUBBLE_ATTACK);
        this.resetParameters();
      } else {
        this.playAnimation(this.IMGS_IDLE);
        const now = new Date().getTime();
        if (now - this.lastAction > 2000) {
          this.playAnimationOnlyOnce(this.indexImg, this.IMGS_SLEEP);
          this.indexImg++;
          if (this.indexImg == this.IMGS_SLEEP.length) {
            this.isPlayed = true;
            this.indexImg = 10;
          }
        }
      }
    }, 100);
  }
}
