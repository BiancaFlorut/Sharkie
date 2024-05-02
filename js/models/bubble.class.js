class Bubble extends Throwable {
    AUDIO = new Audio("../../audio/bubble_attack.mp3");
    audios = [this.AUDIO];
    isMuted;

    constructor(x, y, isMuted) {
        super().loadImg("../../img/1.Sharkie/4.Attack/Bubble trap/Bubble.png");
        this.x = x;
        this.y = y;
        this.isMuted = isMuted;
        this.AUDIO.volume = 0.05;
        this.throw();
    }

    throw() {
        this.speedY = 5;
        this.applyAntiGravity();
        if (!this.isMuted.valueOf())
            this.AUDIO.play();
        else
            this.AUDIO.pause()
    }

    hit() {
        this.energy = 0;
        this.height = 0;
        this.width = 0;
        this.AUDIO.pause();
    }

    die() {
        this.AUDIO.pause();
    }
}