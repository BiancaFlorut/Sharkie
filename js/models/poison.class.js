class Poison extends Drawable {
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