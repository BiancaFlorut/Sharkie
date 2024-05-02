class Coin extends Drawable {
    IMGS = [
        "../../img/4. Marcadores/1. Coins/1.png",
        "../../img/4. Marcadores/1. Coins/2.png",
        "../../img/4. Marcadores/1. Coins/3.png",
        "../../img/4. Marcadores/1. Coins/4.png"
    ];
    height = 40;	
    width = 40;

    constructor(x, y) {
        super().loadImg("img/4. Marcadores/1. Coins/1.png");
        this.loadImgs(this.IMGS);
        this.x = x;
        this.y = y;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMGS);  
        }, 1000 / 4);
    }

}