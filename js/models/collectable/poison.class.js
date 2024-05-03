class Poison extends Collectable {
    IMGS = [
        "../../img/4. Marcadores/Posión/Animada/1.png",
        "../../img/4. Marcadores/Posión/Animada/2.png",
        "../../img/4. Marcadores/Posión/Animada/3.png",
        "../../img/4. Marcadores/Posión/Animada/4.png",
        "../../img/4. Marcadores/Posión/Animada/5.png",
        "../../img/4. Marcadores/Posión/Animada/6.png",
        "../../img/4. Marcadores/Posión/Animada/7.png",
        "../../img/4. Marcadores/Posión/Animada/8.png"
    ];
    AUDIO = new Audio("../../audio/glass.mp3");
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