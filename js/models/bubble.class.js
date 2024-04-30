class Bubble extends Throwable {
    AUDIO = new Audio("../../audio/bubble_attack.mp3");
    constructor(x, y) {
        super().loadImg("../../img/1.Sharkie/4.Attack/Bubble trap/Bubble.png");
        this.x = x;
        this.y = y;
        this.throw();
    }

    throw() {
        this.speedY = 5;
        this.applyAntiGravity();
        this.AUDIO.play();
    }
}