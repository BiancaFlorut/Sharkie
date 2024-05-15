class LifeBar  extends Bar {
    IMGS = [
        "./assets/img/4. Marcadores/orange/Life/0.png",
        "./assets/img/4. Marcadores/orange/Life/20.png",
        "./assets/img/4. Marcadores/orange/Life/40.png",
        "./assets/img/4. Marcadores/orange/Life/60.png",
        "./assets/img/4. Marcadores/orange/Life/80.png",
        "./assets/img/4. Marcadores/orange/Life/100.png"
    ];

    constructor() {
        super(15, 0);
        this.loadImg("./assets/img/4. Marcadores/orange/Life/100.png");
        this.loadImgs(this.IMGS);
        this.setPercentage(100);
    }
}