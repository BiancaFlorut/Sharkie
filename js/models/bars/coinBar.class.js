class CoinBar extends Bar {
    IMGS = [
        "../../img/4. Marcadores/orange/Coins/0.png",
        "../../img/4. Marcadores/orange/Coins/20.png",
        "../../img/4. Marcadores/orange/Coins/40.png",
        "../../img/4. Marcadores/orange/Coins/60.png",
        "../../img/4. Marcadores/orange/Coins/80.png",
        "../../img/4. Marcadores/orange/Coins/100.png"
    ]
    constructor() {
        super(410, 0);
        this.loadImg("../../../../img/4. Marcadores/orange/Coins/0.png");
        this.loadImgs(this.IMGS);
        this.setPercentage(0);
    }
}