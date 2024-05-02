class PoisonBar  extends Bar {
    IMGS = [
        "../../img/4. Marcadores/orange/Poison Bubbles/0.png",
        "../../img/4. Marcadores/orange/Poison Bubbles/20.png",
        "../../img/4. Marcadores/orange/Poison Bubbles/40.png",
        "../../img/4. Marcadores/orange/Poison Bubbles/60.png",
        "../../img/4. Marcadores/orange/Poison Bubbles/80.png",
        "../../img/4. Marcadores/orange/Poison Bubbles/100.png"
    ];


    constructor() {
        super(280, 0);
        this.loadImg("img/4. Marcadores/orange/Poison Bubbles/0.png");
        this.loadImgs(this.IMGS);
        this.setPercentage(0);
    }

}