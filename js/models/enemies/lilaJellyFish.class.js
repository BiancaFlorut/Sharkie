class LilaJellyFish extends JellyFish {
    IMGS_IDLE = [
        "../../img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png",
        "../../img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png",
        "../../img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png",
        "../../img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png"
    ];
    IMGS_DIE = [
        "../../img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png",
        "../../img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png",
        "../../img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png",
        "../../img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png"
    ];

    constructor() {
        super();
        this.loadImg(this.IMGS_IDLE[0]);
        this.loadImgs(this.IMGS_IDLE);
        this.loadImgs(this.IMGS_DIE);
        this.playAnimation(this.IMGS_IDLE);
    }
}