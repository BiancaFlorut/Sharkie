class Background extends MovableObject {
    constructor(src, x, y, width, height) {
        super().loadImg(src);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}