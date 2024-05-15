class PoisonBar  extends Bar {
    IMGS = [
        "./assets/img/4. Marcadores/orange/Poison Bubbles/0.png",
        "./assets/img/4. Marcadores/orange/Poison Bubbles/20.png",
        "./assets/img/4. Marcadores/orange/Poison Bubbles/40.png",
        "./assets/img/4. Marcadores/orange/Poison Bubbles/60.png",
        "./assets/img/4. Marcadores/orange/Poison Bubbles/80.png",
        "./assets/img/4. Marcadores/orange/Poison Bubbles/100.png"
    ];


    constructor() {
        super(210, 0);
        this.loadImg("./assets/img/4. Marcadores/orange/Poison Bubbles/0.png");
        this.loadImgs(this.IMGS);
        this.setPercentage(0);
    }

}