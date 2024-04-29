class MovableObject {
    x = 20;
    y = 40;
    height = 100;
    width = 150;
    img;
    imgCache = {};
    currentImg = 0;
    speed = 0.15;

    loadImg(src) {
        this.img = new Image();
        this.img.src = src;
    }

    loadImgs(array) {
        array.forEach((src) => {
            this.imgCache[src] = new Image();
            this.imgCache[src].src = src;
        })
    }

    moveRight() {
        x = x + 4;
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
          },  1000 / 60);
    }
}