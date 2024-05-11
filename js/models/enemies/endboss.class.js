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

  animate() {
    this.move();
    this.playAudios();
  }

  move() {
    setInterval(() => {
      if (this.canDie()) this.playDieAnimation();
      else if (!this.isDead()) {
        if (this.canEntry()) this.playEntryAnimation();
        else if (this.canAttack()) this.attack();
        else if (this.isHurt()) this.playAnimation(this.IMGS_HURT);
        else this.makeAMove();
      } else this.float();
    }, 120);
  }

  playAudios() {
    setInterval(() => {
      if (this.canDie()) {
        this.OW_AUDIO.play();
        this.WON_AUDIO.play();
        setTimeout(() => {
          stopGame(true);
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

  canEntry() {
    return this.i < this.IMGS_ENTRY.length;
  }

  playEntryAnimation() {
    this.playAnimation(this.IMGS_ENTRY);
    this.i++;
  }

  resetAttack() {
    this.isAttackAnimationPlayed = true;
    this.indexAttack = 0;
    this.lastAttack = new Date().getTime();
  }

  makeAMove() {
    if (this.sharkie.x < this.x) this.makeALeftMove();
    if (this.sharkie.x > this.x) this.makeARightMove();
    if (this.isSharkieAbove()) this.makeAUpMove();
    if (this.isSharkieUnderneath()) this.makeADownMove();
    this.lifeBar.otherDirection = this.otherDirection;
    this.playAnimation(this.IMGS_IDLE);
    this.isAttackAnimationPlayed = false;
  }

  isSharkieAbove() {
    return this.sharkie.y + this.sharkie.offsetYTop < this.y + this.offsetYTop + 50;
  }

  isSharkieUnderneath() {
    return this.sharkie.y - this.sharkie.offsetYBottom - this.sharkie.offsetYTop + this.sharkie.height > this.y - this.offsetYTop - this.offsetYBottom + this.height;
  }

  makeALeftMove() {
    this.otherDirection = false;
    this.moveLeft();
    this.lifeBar.moveLeft();
  }

  makeARightMove() {
    this.otherDirection = true;
    this.moveRight();
    this.lifeBar.moveRight();
  }

  makeAUpMove() {
    this.moveUp();
    this.lifeBar.moveUp();
  }

  makeADownMove() {
    this.moveDown();
    this.lifeBar.moveDown();
  }

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

  float() {
    this.moveUp();
    this.x += Math.random() * 10;
    this.lifeBar.moveUp();
    this.lifeBar.x += this.x;
  }
}
