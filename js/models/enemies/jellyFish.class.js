class JellyFish extends Enemy {
  width = 80;
  height = 80;
  offsetYTop = 13;
  offsetYBottom = 25;
  offsetXLeft = 20;
  offsetXRight = 20;
  offsetY = 10;	
  speed = 0.35;
  distance;
  MAX_DISTANCE = 2200;
  upDirection = true;
  lifeBar;
  slapped = false;

  constructor() {
    super();
    this.x = 400 + Math.random() * 1800;
    this.y = Math.random() * 400;
    this.speed = 0.15 + Math.random() * 2;
    this.MAX_DISTANCE = 200 + Math.random() * 500;
    this.otherDirection = Math.random() < 0.5;
    this.distance = this.MAX_DISTANCE;
    this.setLifeBar(-6);
    this.animate();
  }

  animate() {
    this.move();
    setStoppableInterval(() => {
      if (this.isDead()) {
        this.die();
        this.playAnimation(this.IMGS_DIE);
      } else this.playAnimation(this.IMGS_IDLE);
    }, 120);
  }

  bubbleHit() {
    this.energy -= 100;
    this.lifeBar.setPercentage(this.energy);
  }

  die() {
    this.y -= 10;
    this.lifeBar.y -= 10;
  }

  moveRight() {
    super.moveRight();
    this.lifeBar.moveRight();
  }

  changeDirection(direction) {
    this.otherDirection = direction;
    this.lifeBar.otherDirection = direction;
  }

  moveLeft() {
    super.moveLeft();
    this.lifeBar.moveLeft();
  }

  moveUp() {
    super.moveUp();
    this.lifeBar.moveUp();
  }

  moveDown() {
    super.moveDown();
    this.lifeBar.moveDown();
  }

  move() {
    setStoppableInterval(() => {
      if (this.otherDirection) {
        this.moveRight();
        if (this.x > 2200) this.changeDirection(false);
      } else {
        if (this.x > 200) this.moveLeft();
        else this.changeDirection(true);
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
  }
}
