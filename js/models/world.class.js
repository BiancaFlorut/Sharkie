class World {
    ctx;
    sharkie = new Character();
    enemies = LEVEL1.enemies;
    backgrounds = LEVEL1.backgrounds;
    keyboard;
    camera_x = 0;

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
        this.drawObjects(this.backgrounds);
        this.addToWorld(this.sharkie);
        this.drawObjects(this.enemies);
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
            this.flipObject(movableObject);
        }
        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
        if (movableObject.otherDirection) {
            this.flipObjectBack(movableObject);
        }
    }

    flipObject(movableObject){
        this.ctx.save();
            this.ctx.translate(movableObject.width, 0);
            this.ctx.scale(-1, 1); 
            movableObject.x = movableObject.x * -1;
    }
    flipObjectBack(movableObject){
        this.ctx.restore();
        movableObject.x = movableObject.x * -1;
    }
}