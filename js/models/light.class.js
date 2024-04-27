class Light extends MovableObject {
    y = 0;
        width = 600;
        height = 200;

    constructor() {
        super().loadImg('img/3. Background/Layers/1. Light/1.png');
        this.x = Math.random() * 400;
        
    }
}