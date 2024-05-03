class SuperJellyFish extends JellyFish {
    IMGS_IDLE = [
        "../../img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png",
        "../../img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png",
        "../../img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png",
        "../../img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png",
        "../../img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png",
        "../../img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png",
        "../../img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png",
        "../../img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png"
    ];
    IMGS_DIE = [
        "../../img/2.Enemy/2 Jelly fish/Dead/green/g1.png",
        "../../img/2.Enemy/2 Jelly fish/Dead/green/g2.png",
        "../../img/2.Enemy/2 Jelly fish/Dead/green/g3.png",
        "../../img/2.Enemy/2 Jelly fish/Dead/green/g4.png",
        "../../img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png",
        "../../img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png",
        "../../img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png",
        "../../img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png"
    ]

    constructor() {
        super();
        this.loadImg(this.IMGS_IDLE[0]);
        this.loadImgs(this.IMGS_IDLE);
        this.loadImgs(this.IMGS_DIE);
        this.playAnimation(this.IMGS_IDLE);
    }
}