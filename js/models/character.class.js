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
    "../../img/1.Sharkie/4.Attack/Fin slap/8.png"
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
    "../../img/1.Sharkie/6.dead/1.Poisoned/12.png"
  ];
  IMGS_HURT_POISONED = [
    "../../img/1.Sharkie/5.Hurt/1.Poisoned/1.png",
    "../../img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
    "../../img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
    "../../img/1.Sharkie/5.Hurt/1.Poisoned/4.png"
  ]
  SWIM_AUDIO = new Audio("../../audio/bubbles.mp3");
  SLAP_AUDIO = new Audio("../../audio/slap.mp3");
  HURT_AUDIO = new Audio("../../audio/groan.mp3");
  
  world;

  constructor() {
    super().loadImg("../../img/1.Sharkie/1.IDLE/1.png");
    this.loadImgs(this.IMGS_IDLE);
    this.loadImgs(this.IMGS_SWIM);
    this.loadImgs(this.IMGS_SLAP);
    this.loadImgs(this.IMGS_HURT_POISONED);
    this.loadImgs(this.IMGS_DIE_POISONED);
    this.applyGravity();
    this.HURT_AUDIO.volume = 0.03;
    this.SLAP_AUDIO.volume = 0.03;
    this.SWIM_AUDIO.volume = 0.06;
    this.animate();
  }

  animate() {
    setInterval(() => {
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
    setInterval(() => {
      if (this.world.keyboard.SPACE) {
        this.playAnimation(this.IMGS_SLAP);
      } if (this.isDead()) {
        this.playAnimation(this.IMGS_DIE_POISONED);
      }
      else if (this.isHurt()) {
        this.playAnimation(this.IMGS_HURT_POISONED);
        this.HURT_AUDIO.play();
      }
      else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        this.playAnimation(this.IMGS_SWIM);
        if (this.world.keyboard.SPACE) 
          this.playAnimation(this.IMGS_SLAP);
      }else {
        this.playAnimation(this.IMGS_IDLE);
      }
    }, 100);
  }
}
