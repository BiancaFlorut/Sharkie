class Heart extends Collectable {
  IMGS = ["./assets/img/4. Marcadores/green/100_  copia 3.png", "./assets/img/4. Marcadores/green/100_  copia 3_2.png", "./assets/img/4. Marcadores/green/100_  copia 3_3.png"];
  AUDIO = new Audio("./assets/audio/energy.mp3");
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
