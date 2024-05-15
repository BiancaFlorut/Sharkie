class YellowJellyFish extends JellyFish {
    IMGS_IDLE = [
        "./assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png",
        "./assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png",
        "./assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png",
        "./assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png"
    ];
    IMGS_DIE = [
        "./assets/img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png",
        "./assets/img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png",
        "./assets/img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png",
        "./assets/img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png"
    ]

    constructor() {
        super();
        this.loadImg(this.IMGS_IDLE[0]);
        this.loadImgs(this.IMGS_IDLE);
        this.loadImgs(this.IMGS_DIE);
        this.playAnimation(this.IMGS_IDLE);
    }
}