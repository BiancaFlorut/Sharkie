class World {
    ctx;
    sharkie = new Character();
    level = LEVEL1;
    keyboard;
    camera_x = 0;
    height = 480;

    constructor(canvas, keyboard) {
        this.keyboard = keyboard;
        this.ctx = canvas.getContext('2d');
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.sharkie.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.drawObjects(this.level.backgrounds);
        this.addToWorld(this.sharkie);
        this.drawObjects(this.level.enemies);
        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(() => self.draw());
    }

    drawObjects(objects) {
        objects.forEach((object) => {
            this.addToWorld(object);
        })
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
}