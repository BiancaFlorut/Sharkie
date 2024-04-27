class World {
    ctx;
    sharkie = new Character();
    enemies = [new PufferFish(), new PufferFish(), new PufferFish()];
    backgrounds = [new Water("../img/3. Background/Layers/5. Water/L1.png"), new Light()];

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.draw();
    }
    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.drawObjects(this.backgrounds);
        this.addToWorld(this.sharkie);
        this.drawObjects(this.enemies);
        
        let self = this;
        requestAnimationFrame(() => self.draw());
    }

    drawObjects(objects) {
        objects.forEach((object) => {
            this.addToWorld(object);
        })
    }

    addToWorld(movableObject) {
        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
    }
}