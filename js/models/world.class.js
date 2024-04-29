class World {
    ctx;
    sharkie = new Character();
    enemies = [new PufferFish(), new PufferFish(), new PufferFish()];
    backgrounds = [
        new Background("../img/3. Background/Layers/5. Water/L1.png", 0, 0 , 720, 480), 
        new Background("img/3. Background/Layers/4.Fondo 2/L1.png", 0, 0, 720, 480), 
        new Background("img/3. Background/Layers/3.Fondo 1/L1.png", 0, 0, 720, 480) ,
        new Background("img/3. Background/Layers/2. Floor/L1.png    ", 0, 0, 720, 480) ,
        new Light()
    ];
    keyboard;

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
        if (movableObject.otherDirection) {
            this.ctx.save();
            this.ctx.translate(movableObject.width, 0);
            this.ctx.scale(-1, 1); 
            movableObject.x = movableObject.x * -1;
        }
        
        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
        if (movableObject.otherDirection) {
            this.ctx.restore();
            movableObject.x = movableObject.x * -1;
        }
    }
}