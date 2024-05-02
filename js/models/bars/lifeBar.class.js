class LifeBar  extends Bar {
    IMGS = [
        "../../img/4. Marcadores/orange/Life/0.png",
        "../../img/4. Marcadores/orange/Life/20.png",
        "../../img/4. Marcadores/orange/Life/40.png",
        "../../img/4. Marcadores/orange/Life/60.png",
        "../../img/4. Marcadores/orange/Life/80.png",
        "../../img/4. Marcadores/orange/Life/100.png"
    ];

    constructor() {
        super(15, 0);
        this.loadImg("img/4. Marcadores/orange/Life/100.png");
        this.loadImgs(this.IMGS);
        this.setPercentage(100);
    }
}