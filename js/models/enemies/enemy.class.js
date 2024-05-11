class Enemy extends MovableObject {
  lifeBar;
  slapHit() {
    this.slapped = true;
    this.energy -= 20;
    if (this.otherDirection) this.x -= 100;
    else this.x += 100;
    this.lifeBar.y = this.y + this.lifeBar.offsetY;
    this.lifeBar.x = this.x;
    this.lifeBar.otherDirection = this.otherDirection;
    this.hit();
  }

  setLifeBar(offsetY) {
    this.lifeBar = new SmallLifeBar(this.x, this.y, offsetY);
    this.lifeBar.setPosition(this);
  }
}
