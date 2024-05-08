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
  BITE_AUDIO = new Audio("../../audio/bite.mp3");
  audios = [this.SPLASH_AUDIO, this.PUNCH_AUDIO, this.UMPH_AUDIO, this.OW_AUDIO, this.WON_AUDIO, this.BITE_AUDIO];
  i = 100;
  indexImgAnimationOnlyOnce = 0;
  lastAttack = new Date().getTime();
  isAttackAnimationPlayed = false;
  indexAttack = 0;
  sharkie;
  lifeBar;

  constructor() {
    super().loadImg("../../img/2.Enemy/3 Final Enemy/1.Introduce/1.png");
    this.loadImgs(this.IMGS_ENTRY);
    this.loadImgs(this.IMGS_IDLE);
    this.loadImgs(this.IMGS_HURT);
    this.loadImgs(this.IMGS_DIE);
    this.loadImgs(this.IMGS_ATTACK);
    this.x = 3000;
    this.y = 0;
    this.speed = 8;
    this.setLifeBar();
    this.lifeBar.visibility = true;
    this.lifeBar.offsetY = 100;
    this.checkIfSharkieIsComing();
  }



  animate() {
    setInterval(() => {
      if (this.canDie()) {
        this.playDieAnimation();
      } else
      if (!this.isDead()) {
      if (this.i < this.IMGS_ENTRY.length) {
        this.playAnimation(this.IMGS_ENTRY);
        this.i++;
      } else
      
        if (this.canAttack()) {
          this.playAnimationOnlyOnce(this.indexAttack, this.IMGS_ATTACK);
          if (this.otherDirection) {
            this.moveRight();
            this.lifeBar.moveRight();
          }
          else {
            this.moveLeft();
            this.lifeBar.moveLeft();
          }
          this.indexAttack++;
          if (this.indexAttack == this.IMGS_ATTACK.length) {
            this.isAttackAnimationPlayed = true;
            this.indexAttack = 0;
            this.lastAttack = new Date().getTime();
          }
        } else {
          this.playAnimation(this.IMGS_IDLE);
          this.makeAMove();
          this.isAttackAnimationPlayed = false;
        }
      } else {
        this.moveUp();
        this.x += Math.random() * 10;
        this.lifeBar.moveUp();
        this.lifeBar.x += this.x;
      }
    }, 120);

    setInterval(() => {
      if (this.canDie()) {
          this.OW_AUDIO.play();
          this.WON_AUDIO.play();
          setTimeout(() => {
            stopGame(true);
          }, 2500);
        } 

      if (this.i < this.IMGS_ENTRY.length) this.SPLASH_AUDIO.play();
      if (this.canAttack()) this.BITE_AUDIO.play();
      if (this.isHurt()) {
        this.playAnimation(this.IMGS_HURT);
        this.PUNCH_AUDIO.play();
        this.UMPH_AUDIO.play();
      }
    }, 100);
  }

  checkIfSharkieIsComing() {
    setStoppableInterval(() => {
      if (this.isSharkieComing && !this.hadFirstContact) {
        this.i = 0;
        this.x = 2200;
        this.y = 0;
        this.hadFirstContact = true;
        this.setPosition();
        this.animate();
      }
    }, 100);
  }

  canAttack() {
    if (this.hadFirstContact && !this.isDead()) {
      let now = new Date().getTime();
      if (now - this.lastAttack > 3000) if (!this.isAttackAnimationPlayed) return true;
    }
    return false;
  }

  canDie() {
    return this.isDead() && !this.isPlayed;
  }

  playDieAnimation() {
    this.playAnimationOnlyOnce(this.indexImgAnimationOnlyOnce, this.IMGS_DIE);
          this.indexImgAnimationOnlyOnce++;
          if (this.indexImgAnimationOnlyOnce == this.IMGS_DIE.length) {
            this.isPlayed = true;
          }
  }

  makeAMove() {
    if (this.sharkie.x < this.x) {
      this.otherDirection = false;
      this.moveLeft();
      this.lifeBar.moveLeft();
    }
    if (this.sharkie.x > this.x) {
      this.otherDirection = true;
      this.moveRight();
      this.lifeBar.moveRight();
    }
    if (this.sharkie.y < this.y + this.offsetYTop + 50) {
      this.moveUp();
      this.lifeBar.moveUp();
    }
    if (this.sharkie.y > this.y && this.y < 250) {
      this.moveDown();
      this.lifeBar.moveDown();
    }
    this.lifeBar.otherDirection = this.otherDirection;
  }
}
