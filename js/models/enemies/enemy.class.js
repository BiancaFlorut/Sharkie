class Enemy extends MovableObject {
  lifeBar;
  slapHit() {
    this.energy -= 20;
    if (this.otherDirection) {
      this.x -= 100;
      this.otherDirection = false;
    } else {
      this.x += 100;
      this.otherDirection = true;
    }
    this.lifeBar.setPercentage(this.energy);
    this.lifeBar.y = this.y - 10;
    this.lifeBar.x = this.x;
  }

  setLifeBar() {
    this.lifeBar = new SmallLifeBar(this.x, this.y - 10);
    this.setPosition();
  }

  setPosition() {
    this.lifeBar.speed = this.speed;
    this.lifeBar.width = this.width;
    this.lifeBar.otherDirection = this.otherDirection;
    this.lifeBar.y = this.y + this.lifeBar.offsetY;
    this.lifeBar.x = this.x;
  }
}
