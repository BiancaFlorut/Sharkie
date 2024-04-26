class MovableObject {
    x = 120;
    y = 400;
    img;

    loadImg(src) {
        this.img = new Image();
        this.img.src = src;
    }

    moveRight() {
        x = x + 10;
    }
}