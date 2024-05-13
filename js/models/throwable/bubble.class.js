class Bubble extends Throwable {
  AUDIO = new Audio("../../audio/bubble_attack.mp3");
  NEW_BUBBLE_AUDIO = new Audio("../../audio/bubble.mp3");
  audios = [this.AUDIO, this.NEW_BUBBLE_AUDIO];
  isMuted;
  width = 50;
  height = 50;
  resp;

  constructor(x, y, isMuted) {
    super().loadImg("../../img/1.Sharkie/4.Attack/Bubble trap/Bubble.png");
    this.x = x;
    this.y = y;
    this.AUDIO.muted = isMuted;
    this.NEW_BUBBLE_AUDIO.muted = isMuted;
    this.setVolume(0.3);	
    this.throw();
  }

  /**
   * Sets the speedY property to 5, applies anti-gravity, and plays the NEW_BUBBLE_AUDIO.
   *
   * @return {void} This function does not return anything.
   */
  throw() {
    this.speedY = 5;
    this.applyAntiGravity();
    this.NEW_BUBBLE_AUDIO.play();
  }

/**
 * Plays the audio associated with the object.
 *
 * @return {void} This function does not return anything.
 */
  hit() {
    this.AUDIO.play();

  }

  /**
   * Plays the audio associated with the object when it dies.
   *
   * @return {void} This function does not return anything.
   */
  die() {
    this.AUDIO.play();
  }
}
