class MovableObject {
  x = 20;
  y = 40;
  height = 100;
  width = 150;
  offsetYTop = 0;
  offsetYBottom = 0;
  offsetXLeft = 0;
  offsetXRight = 0;
  off
  img;
  imgCache = {};
  currentImg = 0;
  speed = 0.15;
  otherDirection = false;
  speedY = -1;
  energy = 100;

  loadImg(src) {
    this.img = new Image();
    this.img.src = src;
  }

  loadImgs(array) {
    array.forEach((src) => {
      this.imgCache[src] = new Image();
      this.imgCache[src].src = src;
    });
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawFrame(ctx) {
    if (this instanceof Character || this instanceof Enemy) {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "green";
      ctx.rect(this.x + this.offsetXLeft, this.y + this.offsetYTop, this.width - this.offsetXRight - this.offsetXLeft, this.height - this.offsetYTop - this.offsetYBottom);
      ctx.stroke();
    }
  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  playAnimation(imgs) {
    this.currentImg = ++this.currentImg % imgs.length;
    this.img = this.imgCache[imgs[this.currentImg]];
  }

  applyGravity() {
    setInterval(() => {
      if (this.isOverTheGround()) {
        this.y = this.y - this.speedY;
      }
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
    return  (this.x + this.width - this.offsetXRight) >= (otherObject.x + otherObject.offsetXLeft) && 
            this.x <= (otherObject.x + otherObject.width - otherObject.offsetXRight) && 
            (this.y + this.height - this.offsetYBottom) >= (otherObject.y + otherObject.offsetYTop) &&
            (this.y + this.offsetYTop) <= (otherObject.y + otherObject.height - otherObject.offsetYBottom);
  }

  hit() {
    this.energy -= 5;
    if (this.energy <= 0) {
      this.energy = 0;
    }
  }

  isDead() {
      return this.energy <= 0;
  }
}
