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

  /**
   * Loads an image from the given source URL and assigns it to the `img` property of the current object.
   *
   * @param {string} src - The URL of the image to load.
   * @return {void} This function does not return anything.
   */
  loadImg(src) {
    this.img = new Image();
    this.img.src = src;
  }

/**
 * Sets the volume of all audio elements associated with the drawable.
 *
 * @param {number} volume - The volume level to set for the audio elements.
 * @return {void} This function does not return anything.
 */
  setVolume(volume) {
    this.audios.forEach((audio) => {
      audio.volume = volume;
    });
  }

/**
 * Draws an image on the canvas using the provided context.
 *
 * @param {CanvasRenderingContext2D} ctx - The context used to draw on the canvas.
 * @return {void} This function does not return anything.
 */
  draw(ctx) {
    try {
      if (this.img)
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    else
      console.log('The image is not existing?');
    } catch(e) {
      console.log('The image is not loaded: ', e);
      console.log(typeof this, this.img);
    }
    
  }

  /**
   * Loads multiple images from the given array of source URLs and stores them in the imgCache object.
   *
   * @param {Array} array - An array of source URLs of the images to load.
   * @return {void} This function does not return anything.
   */
  loadImgs(array) {
    array.forEach((src) => {
      this.imgCache[src] = new Image();
      this.imgCache[src].src = src;
    });
  }

  /**
   * Updates the current image to be displayed and sets it to the next image in the array of images.
   *
   * @param {Array} imgs - The array of images to animate through.
   * @return {void} This function does not return anything.
   */
  playAnimation(imgs) {
    this.currentImg = ++this.currentImg % imgs.length;
    this.img = this.imgCache[imgs[this.currentImg]];
  }

  /**
   * Sets the image to be displayed based on the provided index and array of images if the animation has not been played yet.
   *
   * @param {number} index - The index of the image to display.
   * @param {Array} array - An array of image URLs.
   * @return {void} This function does not return anything.
   */
  playAnimationOnlyOnce(index, array) {
    if (!this.isPlayed && index < array.length - 1) {
      this.img = this.imgCache[array[index]];
    } else {
      this.img = this.imgCache[array[index]];
    }
  }

/**
 * Draws the frame on the canvas if the object is of type Character, Enemy, Collectable, or Throwable.
 *
 * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas.
 * @return {void} This function does not return anything.
 */
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