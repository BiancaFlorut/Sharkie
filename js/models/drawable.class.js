class Drawable {
  x = 20;
  y = 40;
  height = 100;
  width = 150;
  img;
  imgCache = {};
  currentImg = 0;

  loadImg(src) {
    this.img = new Image();
    this.img.src = src;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  loadImgs(array) {
    array.forEach((src) => {
      this.imgCache[src] = new Image();
      this.imgCache[src].src = src;
    });
  }

  playAnimation(imgs) {
    this.currentImg = ++this.currentImg % imgs.length;
    this.img = this.imgCache[imgs[this.currentImg]];
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

}