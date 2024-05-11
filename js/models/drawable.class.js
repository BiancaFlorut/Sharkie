class Drawable {
  x = 20;
  y = 40;
  offsetYTop = 0;
  offsetYBottom = 0;
  offsetXLeft = 0;
  offsetXRight = 0;
  height = 100;
  width = 150;
  img;
  imgCache = {};
  currentImg = 0;
  audios = [];
  isPlayed = false;
  onlyOncePlayingCounter = 0;

  loadImg(src) {
    this.img = new Image();
    this.img.src = src;
  }

  setVolume(volume) {
    this.audios.forEach((audio) => {
      audio.volume = volume;
    });
  }

  draw(ctx) {
    try {
      if (this.img)
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    else
      console.log('The image is not loaded');
    } catch(e) {
      console.log('The image is not loaded: ', e);
      console.log(typeof this, this.img);
    }
    
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

  playAnimationOnlyOnce(index, array) {
    if (!this.isPlayed && index < array.length - 1) {
      this.img = this.imgCache[array[index]];
    } else {
      this.img = this.imgCache[array[index]];
    }
  }

drawFrame(ctx) {
    if (this instanceof Character || this instanceof Enemy || this instanceof Collectable || this instanceof Throwable) {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "red";
      ctx.rect(this.x + this.offsetXLeft, this.y + this.offsetYTop, this.width - this.offsetXRight - this.offsetXLeft, this.height - this.offsetYTop - this.offsetYBottom);
      ctx.stroke();
    }
  }

}