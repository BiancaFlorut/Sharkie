class MovableObject extends Drawable {
  speed = 0.15;
  otherDirection = false;
  speedY = -1;
  energy = 100;
  lastHit = 0;

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveUp() {
    this.y -= this.speed;
  }

  moveDown() {
    this.y += this.speed;
  }

  applyGravity() {
    setInterval(() => {
      if (this.isOverTheGround()) {
        this.y = this.y - this.speedY;
      }
    }, 1000 / 25);
  }

  applyAntiGravity() {
    setInterval(() => {
        this.y -= this.speedY;
        if (this.otherDirection) {
            this.x -= Math.random() * 15;
        } else this.x += Math.random() * 15;
    }, 1000 / 25);
  }

  isOverTheGround() {
    return this.y < 300;
  }

  flipObject(ctx) {
    ctx.save();
    ctx.translate(this.width, 0);
    ctx.scale(-1, 1);
    this.x = this.x * -1;
  }

  flipObjectBack(ctx) {
    ctx.restore();
    this.x = this.x * -1;
  }

  isColliding(otherObject) {
    return (
      this.x + this.width - this.offsetXRight >= otherObject.x + otherObject.offsetXLeft &&
      this.x <= otherObject.x + otherObject.width - otherObject.offsetXRight &&
      this.y + this.height - this.offsetYBottom >= otherObject.y + otherObject.offsetYTop &&
      this.y + this.offsetYTop <= otherObject.y + otherObject.height - otherObject.offsetYBottom
    );
  }

  hit() {
    this.energy -= 5;
    if (this.energy <= 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
    if (this.lifeBar) {
      this.lifeBar.setPercentage(this.energy);
      if (!(this instanceof EndBoss))
      setInterval(() => {
        this.lifeBar.visibility = false;
      }, 1000);
    }
  }

  isDead() {
    return this.energy <= 0;
  }

  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit;
    return timePassed < 1000;
  }
}


