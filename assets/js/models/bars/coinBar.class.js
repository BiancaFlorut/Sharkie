class CoinBar extends Bar {
    IMGS = [
        "./assets/img/4. Marcadores/orange/Coins/0.png",
        "./assets/img/4. Marcadores/orange/Coins/20.png",
        "./assets/img/4. Marcadores/orange/Coins/40.png",
        "./assets/img/4. Marcadores/orange/Coins/60.png",
        "./assets/img/4. Marcadores/orange/Coins/80.png",
        "./assets/img/4. Marcadores/orange/Coins/100.png"
    ]
    constructor() {
        super(410, 0);
        this.loadImg("./assets/img/4. Marcadores/orange/Coins/0.png");
        this.loadImgs(this.IMGS);
        this.setPercentage(0);
    }
}