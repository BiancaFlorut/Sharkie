class EndBoss extends Enemy {
  width = 280;
  height = 280;
  offsetYTop = 150;
  offsetYBottom = 65;
  offsetXLeft = 30;
  offsetXRight = 30;
  speed = 4;
  energy = 50;
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
  audios = [this.SPLASH_AUDIO, this.PUNCH_AUDIO, this.UMPH_AUDIO, this.OW_AUDIO, this.WON_AUDIO];
  i = 100;
  indexImgAnimationOnlyOnce = 0;
  lastAttack = new Date().getTime();
  isAttackAnimationPlayed = false;
  indexAttack = 0;
  sharkie;

  constructor() {
    super().loadImg("../../img/2.Enemy/3 Final Enemy/1.Introduce/1.png");
    this.loadImgs(this.IMGS_ENTRY);
    this.loadImgs(this.IMGS_IDLE);
    this.loadImgs(this.IMGS_HURT);
    this.loadImgs(this.IMGS_DIE);
    this.loadImgs(this.IMGS_ATTACK);
    this.x = 3000;
    this.y = 0;
    this.speed = 0.15 + Math.random() * 10;
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.i < this.IMGS_ENTRY.length) {
        this.playAnimation(this.IMGS_ENTRY);
        this.i++;
      } else {
        if (this.hadFirstContact && !this.isDead()) {
          let now = new Date().getTime();
          if (now - this.lastAttack > 3000) {
            if (!this.isAttackAnimationPlayed) {
              this.playAnimationOnlyOnce(this.indexAttack, this.IMGS_ATTACK);
              this.moveLeft();
              this.indexAttack++;
              if (this.indexAttack == this.IMGS_ATTACK.length) {
                this.isAttackAnimationPlayed = true;
                this.indexAttack = 0;
                this.lastAttack = new Date().getTime();
              }
            }
          } else {
            this.playAnimation(this.IMGS_IDLE);
            this.makeAMove();
            this.isAttackAnimationPlayed = false;
          }
        }
      }
      if (this.isSharkieComing && !this.hadFirstContact) {
        this.i = 0;
        this.x = 2200;
        this.y = 0;
        this.hadFirstContact = true;
      }
    }, 180);

    setInterval(() => {
      if (this.isDead())
        if (!this.isPlayed) {
          this.playAnimationOnlyOnce(this.indexImgAnimationOnlyOnce, this.IMGS_DIE);
          this.indexImgAnimationOnlyOnce++;
          if (this.indexImgAnimationOnlyOnce == this.IMGS_DIE.length) {
            this.isPlayed = true;
          }
          this.OW_AUDIO.play();
          this.WON_AUDIO.play();
          setTimeout(() => {
            stopGame(true);
          }, 2500);
        } else {
          this.x += Math.random() * 5;
          this.y -= 2;
        }

      if (this.i < this.IMGS_ENTRY.length) this.SPLASH_AUDIO.play();
      if (this.isHurt()) {
        this.playAnimation(this.IMGS_HURT);
        this.PUNCH_AUDIO.play();
        this.UMPH_AUDIO.play();
      }
    }, 100);
  }

  makeAMove() {
    let i = 0;
    if (this.sharkie.x < this.x) i = 0;
    if (this.sharkie.x > this.x) i = 1;
    if (this.sharkie.y < this.y) i = 2;
    if (this.sharkie.y > this.y) i = 3;
    console.log(i);
    switch (i) {
      case 0:
        this.moveLeft();
        break;
      case 1:
        this.moveRight();
        break;
      case 2:
        this.moveUp();
        break;
      case 3:
        this.moveDown();
        break;
    }
  }
}
