class Coin extends Collectable {
    IMGS = [
        "./assets/img/4. Marcadores/1. Coins/1.png",
        "./assets/img/4. Marcadores/1. Coins/2.png",
        "./assets/img/4. Marcadores/1. Coins/3.png",
        "./assets/img/4. Marcadores/1. Coins/4.png"
    ];
    AUDIO = new Audio("./assets/audio/coin.mp3");
    height = 40;	
    width = 40;
    audios = [this.AUDIO];

    constructor(x, y) {
        super().loadImg("./assets/img/4. Marcadores/1. Coins/1.png");
        this.loadImgs(this.IMGS);
        this.AUDIO.volume = 0.05;
        this.x = x;
        this.y = y;
        this.animate();
    }
}