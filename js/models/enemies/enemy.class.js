class Enemy extends MovableObject {
  lifeBar;
  slapHit() {
    this.energy -= 20;
    if (this.otherDirection) {
      this.x -= 100;
    } else {
      this.x += 100;
    }
    this.lifeBar.setPercentage(this.energy);
    this.lifeBar.y = this.y +this.lifeBar.offsetY;
    this.lifeBar.x = this.x;
    this.lifeBar.visibility = true;
    this.lifeBar.otherDirection = this.otherDirection;
    if (!(this instanceof EndBoss))
    setTimeout(() => {
      this.lifeBar.visibility = false;
    }, 1000);
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
