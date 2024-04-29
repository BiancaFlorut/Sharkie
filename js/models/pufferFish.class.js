class PufferFish extends Enemy {
    width = 80;
    height = 80;
    IMGS_IDLE = [
        '../../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        '../../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        '../../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        '../../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        '../../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];
    speed = 0.35;

    constructor() {
        super().loadImg('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImgs(this.IMGS_IDLE);
        this.x = 200 + Math.random() * 400;
        this.y = Math.random() * 400;
        this.speed = 0.15 + Math.random() / 0.4;
        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            this.img = this.imgCache[this.IMGS_IDLE[this.currentImg]];
            this.currentImg = ++this.currentImg % this.IMGS_IDLE.length;
        }, 100);

    }
}