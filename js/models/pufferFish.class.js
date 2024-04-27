class PufferFish extends Enemy {
    width = 100;
    height = 100;
    constructor() {
        super().loadImg('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.x = 200 + Math.random() * 400;
        this.y = Math.random() * 400;
    }
}