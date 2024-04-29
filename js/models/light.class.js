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

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
  }
}
