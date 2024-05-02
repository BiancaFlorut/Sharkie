class Coin extends Drawable {
    IMGS = [
        "../../img/4. Marcadores/1. Coins/1.png",
        "../../img/4. Marcadores/1. Coins/2.png",
        "../../img/4. Marcadores/1. Coins/3.png",
        "../../img/4. Marcadores/1. Coins/4.png"
    ];
    AUDIO = new Audio("../../audio/coin.mp3");
    height = 40;	
    width = 40;
    audios = [this.AUDIO];

    constructor(x, y) {
        super().loadImg("img/4. Marcadores/1. Coins/1.png");
        this.loadImgs(this.IMGS);
        this.AUDIO.volume = 0.05;
        this.x = x;
        this.y = y;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMGS);  
        }, 1000 / 4);
    }

    collect() {
        this.AUDIO.play();
        this.height = 0;
        this.width = 0;
    }

}