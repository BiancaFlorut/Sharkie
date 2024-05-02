class LilaJellyFish extends JellyFish {
    IMGS_IDLE = [
        "../../img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png",
        "../../img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png",
        "../../img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png",
        "../../img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png"
    ];

    constructor() {
        super();
        this.loadImgs(this.IMGS_IDLE);
        this.playAnimation(this.IMGS_IDLE);
    }
}