class MovableObject {
  x = 20;
  y = 40;
  height = 100;
  width = 150;
  img;
  imgCache = {};
  currentImg = 0;
  speed = 0.15;
  otherDirection = false;
  speedY = -1;

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
    ctx.beginPath();
    ctx.lineWidth = '5';
    ctx.strokeStyle = 'blue';
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
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

  flipObject(ctx){
    ctx.save();
        ctx.translate(this.width, 0);
        ctx.scale(-1, 1); 
        this.x = this.x * -1;
}
flipObjectBack(ctx){
    ctx.restore();
    this.x = this.x * -1;
}
}
