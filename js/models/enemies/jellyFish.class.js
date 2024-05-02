class JellyFish extends Enemy {
    width = 80;
  height = 80;
  offsetYTop = 8;
  offsetYBottom = 25;
  offsetXLeft = 5;
  offsetXRight = 5;
  IMGS_IDLE = [  ];
  IMGS_DIE = ["../../img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png"];
  IMGS_SLAP_DIE = ["../../img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png"];
  speed = 0.35;
  distance;
  MAX_DISTANCE = 2200;
  slapped = false;
  upDirection = true;

  constructor() {
    super().loadImg("../../img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png");
    this.loadImgs(this.IMGS_IDLE);
    this.x = 400 + Math.random() * 1800;
    this.y = Math.random() * 400;
    this.speed = 0.15 + Math.random() * 2;
    this.MAX_DISTANCE = 200 + Math.random() * 500;
    this.otherDirection = Math.random() < 0.5;
    this.distance = this.MAX_DISTANCE;
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.otherDirection) {
        this.moveRight();
        if (this.x > 2200) this.otherDirection = false;
      } else {
        if (this.x > 200) {
          this.moveLeft();
        } else this.otherDirection = true;
      }
      if (this.upDirection) {
        this.moveUp();
        if (this.y < 0) this.upDirection = false;
      } else {
        this.moveDown();
        if (this.y > 400) this.upDirection = true;
      }
    }, 1000 / 60);

    setInterval(() => {
      if (this.isDead())
        if (this.slapped) this.slapDie();
        else this.die();
      else this.playAnimation(this.IMGS_IDLE);
    }, 80);
  }

  hit() {
    this.energy -= 20;
  }

  die() {
    this.loadImg(this.IMGS_DIE);
    this.y -= 10;
  }

  slapHit() {
    this.energy -= 100;
    this.slapped = true;
  }

  slapDie() {
    this.loadImg(this.IMGS_SLAP_DIE);
    this.y += 50;
    this.x += 20;
  }
}