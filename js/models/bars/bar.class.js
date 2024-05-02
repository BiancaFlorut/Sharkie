class Bar extends Drawable {

    percentage = 100;
    width = 150;
    height = 50;

    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
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