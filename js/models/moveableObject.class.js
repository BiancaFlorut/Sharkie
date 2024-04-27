class MovableObject {
    x = 20;
    y = 40;
    height = 100;
    width = 150;
    img;

    loadImg(src) {
        this.img = new Image();
        this.img.src = src;
    }

    moveRight() {
        x = x + 10;
    }
}