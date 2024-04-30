class World {
  ctx;
  sharkie = new Character();
  level = LEVEL1;
  keyboard;
  camera_x = 0;
  height = 480;
  lifeBar = new StatusBar();

  constructor(canvas, keyboard) {
    this.keyboard = keyboard;
    this.ctx = canvas.getContext("2d");
    this.draw();
    this.setWorld();
    this.checkCollisions();
  }

  setWorld() {
    this.sharkie.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.drawObjects(this.level.backgrounds);

    this.ctx.translate(-this.camera_x, 0);
    this.addToWorld(this.lifeBar);
    this.ctx.translate(this.camera_x, 0);
    this.drawObjects(this.level.enemies);
    this.addToWorld(this.sharkie);
    this.drawObjects(this.level.bubbles);
    this.ctx.translate(-this.camera_x, 0);
    let self = this;
    requestAnimationFrame(() => self.draw());
  }

  drawObjects(objects) {
    objects.forEach((object) => {
      this.addToWorld(object);
    });
  }

  addToWorld(movableObject) {
    if (movableObject.otherDirection) {
      movableObject.flipObject(this.ctx);
    }
    movableObject.draw(this.ctx);
    movableObject.drawFrame(this.ctx);
    if (movableObject.otherDirection) {
      movableObject.flipObjectBack(this.ctx);
    }
  }

  checkCollisions() {
    setInterval(() => {
        for (let enemy of this.level.enemies){
            if (this.sharkie.isColliding(enemy)) {
                this.sharkie.hit();
                this.lifeBar.setPercentage(this.sharkie.energy);
            }
        }
    }, 200);
      
  }
}
