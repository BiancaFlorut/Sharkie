class Character extends MovableObject {
    width = 160;
    height = 160;
    IMGS_IDLE = [
        '../../img/1.Sharkie/1.IDLE/1.png',
        '../../img/1.Sharkie/1.IDLE/2.png',
        '../../img/1.Sharkie/1.IDLE/3.png',
        '../../img/1.Sharkie/1.IDLE/4.png',
        '../../img/1.Sharkie/1.IDLE/5.png',
        '../../img/1.Sharkie/1.IDLE/6.png',
        '../../img/1.Sharkie/1.IDLE/7.png',
        '../../img/1.Sharkie/1.IDLE/8.png',
        '../../img/1.Sharkie/1.IDLE/9.png',
        '../../img/1.Sharkie/1.IDLE/10.png',
        '../../img/1.Sharkie/1.IDLE/11.png',
        '../../img/1.Sharkie/1.IDLE/12.png',
        '../../img/1.Sharkie/1.IDLE/13.png',
        '../../img/1.Sharkie/1.IDLE/14.png',
        '../../img/1.Sharkie/1.IDLE/15.png',
        '../../img/1.Sharkie/1.IDLE/16.png',
        '../../img/1.Sharkie/1.IDLE/17.png',
        '../../img/1.Sharkie/1.IDLE/18.png'
    ];


    constructor() {
        super().loadImg('../../img/1.Sharkie/1.IDLE/1.png');
        this.loadImgs(this.IMGS_IDLE);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.img = this.imgCache[this.IMGS_IDLE[this.currentImg]];
            this.currentImg = ++this.currentImg % this.IMGS_IDLE.length;
        }, 100);
    }
}