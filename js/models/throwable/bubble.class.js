class Bubble extends Throwable {
  AUDIO = new Audio("../../audio/bubble_attack.mp3");
  audios = [this.AUDIO];
  isMuted;
  width = 50;
  height = 50;

  constructor(x, y, isMuted) {
    super().loadImg("../../img/1.Sharkie/4.Attack/Bubble trap/Bubble.png");
    this.x = x;
    this.y = y;
    this.AUDIO.muted = isMuted;
    this.AUDIO.volume = 0.05;
    this.throw();
  }

  throw() {
    this.speedY = 5;
    this.applyAntiGravity();
    this.AUDIO.play();
  }

  hit() {
    this.AUDIO.pause();
  }

  die() {
    this.AUDIO.pause();
  }
}
