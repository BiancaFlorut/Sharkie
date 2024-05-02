class PoisonBar  extends Drawable {
    IMGS = [
        "../../img/4. Marcadores/orange/Poison Bubbles/0.png",
        "../../img/4. Marcadores/orange/Poison Bubbles/20.png",
        "../../img/4. Marcadores/orange/Poison Bubbles/40.png",
        "../../img/4. Marcadores/orange/Poison Bubbles/60.png",
        "../../img/4. Marcadores/orange/Poison Bubbles/80.png",
        "../../img/4. Marcadores/orange/Poison Bubbles/100.png"
    ];
    percentage = 100;
    x = 180;
    y = 0;
    width = 150;
    height = 50;

    constructor() {
        super().loadImg("img/4. Marcadores/orange/Poison Bubbles/0.png");
        this.loadImgs(this.IMGS);
        this.setPercentage(0);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMGS[this.getImageIndex()];
        this.img = this.imgCache[path];
    }

    getImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}