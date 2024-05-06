class JellyFish extends Enemy {
  width = 80;
  height = 80;
  offsetYTop = 13;
  offsetYBottom = 25;
  offsetXLeft = 20;
  offsetXRight = 20;
  speed = 0.35;
  distance;
  MAX_DISTANCE = 2200;
  upDirection = true;

  constructor() {
    super();
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
        if (this.isDead()) this.moveUp();
      }
    }, 1000 / 60);

    setInterval(() => {
      if (this.isDead()) {
        this.die();
        this.playAnimation(this.IMGS_DIE);
      }
      else this.playAnimation(this.IMGS_IDLE);
    }, 120);
  }

  hit() {
    this.energy -= 100;
  }

  die() {
    this.y -= 10;
  }
}
