class Character extends MovableObject {
  width = 160;
  height = 160;
  speed = 4;
  IMGS_IDLE = [
    "../../img/1.Sharkie/1.IDLE/1.png",
    "../../img/1.Sharkie/1.IDLE/2.png",
    "../../img/1.Sharkie/1.IDLE/3.png",
    "../../img/1.Sharkie/1.IDLE/4.png",
    "../../img/1.Sharkie/1.IDLE/5.png",
    "../../img/1.Sharkie/1.IDLE/6.png",
    "../../img/1.Sharkie/1.IDLE/7.png",
    "../../img/1.Sharkie/1.IDLE/8.png",
    "../../img/1.Sharkie/1.IDLE/9.png",
    "../../img/1.Sharkie/1.IDLE/10.png",
    "../../img/1.Sharkie/1.IDLE/11.png",
    "../../img/1.Sharkie/1.IDLE/12.png",
    "../../img/1.Sharkie/1.IDLE/13.png",
    "../../img/1.Sharkie/1.IDLE/14.png",
    "../../img/1.Sharkie/1.IDLE/15.png",
    "../../img/1.Sharkie/1.IDLE/16.png",
    "../../img/1.Sharkie/1.IDLE/17.png",
    "../../img/1.Sharkie/1.IDLE/18.png",
  ];
  IMGS_SWIM = [
    "../../img/1.Sharkie/3.Swim/1.png",
    "../../img/1.Sharkie/3.Swim/2.png",
    "../../img/1.Sharkie/3.Swim/3.png",
    "../../img/1.Sharkie/3.Swim/4.png",
    "../../img/1.Sharkie/3.Swim/5.png",
    "../../img/1.Sharkie/3.Swim/6.png",
  ];
  SWIM_AUDIO = new Audio("../../audio/bubbles.mp3");
  world;

  constructor() {
    super().loadImg("../../img/1.Sharkie/1.IDLE/1.png");
    this.loadImgs(this.IMGS_IDLE);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.SWIM_AUDIO.pause();
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.x += this.speed;
        this.otherDirection = false;
        this.SWIM_AUDIO.play();
      }
      if (this.world.keyboard.LEFT && this.x > 0) {
        this.x -= this.speed;
        this.otherDirection = true;
        this.SWIM_AUDIO.play();
      }
      if (this.world.keyboard.UP && this.y > 0) {
        this.y -= this.speed;
        this.SWIM_AUDIO.play();
      }
      if (this.world.keyboard.DOWN && this.y < this.world.height - this.height) {
        this.y += this.speed;
        this.SWIM_AUDIO.play();
      }
      this.world.camera_x = -this.x + 60;
    }, 1000 / 60);
    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        this.swim();
      } else {
        this.img = this.imgCache[this.IMGS_IDLE[this.currentImg]];
        this.currentImg = ++this.currentImg % this.IMGS_IDLE.length;
      }
    }, 100);
  }

  swim() {
    this.loadImgs(this.IMGS_SWIM);
    this.currentImg = ++this.currentImg % this.IMGS_SWIM.length;
    this.img = this.imgCache[this.IMGS_SWIM[this.currentImg]];
  }
}
