class Poison extends Collectable {
    IMGS = [
        "./assets/img/4. Marcadores/Posión/Animada/1.png",
        "./assets/img/4. Marcadores/Posión/Animada/2.png",
        "./assets/img/4. Marcadores/Posión/Animada/3.png",
        "./assets/img/4. Marcadores/Posión/Animada/4.png",
        "./assets/img/4. Marcadores/Posión/Animada/5.png",
        "./assets/img/4. Marcadores/Posión/Animada/6.png",
        "./assets/img/4. Marcadores/Posión/Animada/7.png",
        "./assets/img/4. Marcadores/Posión/Animada/8.png"
    ];
    AUDIO = new Audio("./assets/audio/glass.mp3");
    height = 40;	
    width = 40;
    audios = [this.AUDIO];

    constructor(x, y) {
        super().loadImg(this.IMGS[0]);
        this.loadImgs(this.IMGS);
        this.AUDIO.volume = 0.05;
        this.x = x;
        this.y = y;
        this.animate();
    }
}