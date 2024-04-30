class Throwable extends MovableObject {
    width = 50;
    height = 50;
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
    constructor() {
        super().loadImg("../../img/4. Marcadores/Posión/Animada/1.png");
        this.loadImgs(this.IMGS);
    }
}