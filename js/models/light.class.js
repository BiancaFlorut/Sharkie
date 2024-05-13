class Light extends MovableObject {
  y = 0;
  width = 720;
  height = 400;
  speed = 1;
  

  constructor(src, x, y, width, height) {
    super().loadImg(src);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.animate();
  }

  /**
   * Animates the object by changing its direction based on the x-coordinate.
   *
   * @param {} - No parameters
   * @return {} - No return value
   */
  animate() {
    setInterval(() => {
      if (this.x < 0) this.otherDirection = true;
      if (this.x > 2200) this.otherDirection = false;
      if (this.otherDirection) this.moveRight();
      else
      this.moveLeft();
    }, 1000 / 60);
  }
}
