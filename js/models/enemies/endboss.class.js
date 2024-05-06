class EndBoss extends Enemy {
  width = 280;
  height = 280;
  speed = 4;
  IMGS_ENTRY = [
    "../../img/2.Enemy/3 Final Enemy/1.Introduce/1.png",
    "../../img/2.Enemy/3 Final Enemy/1.Introduce/2.png",
    "../../img/2.Enemy/3 Final Enemy/1.Introduce/3.png",
    "../../img/2.Enemy/3 Final Enemy/1.Introduce/4.png",
    "../../img/2.Enemy/3 Final Enemy/1.Introduce/5.png",
    "../../img/2.Enemy/3 Final Enemy/1.Introduce/6.png",
    "../../img/2.Enemy/3 Final Enemy/1.Introduce/7.png",
    "../../img/2.Enemy/3 Final Enemy/1.Introduce/8.png",
    "../../img/2.Enemy/3 Final Enemy/1.Introduce/9.png",
    "../../img/2.Enemy/3 Final Enemy/1.Introduce/10.png",
  ];
  IMGS_IDLE = [
    "../../img/2.Enemy/3 Final Enemy/2.floating/1.png",
    "../../img/2.Enemy/3 Final Enemy/2.floating/2.png",
    "../../img/2.Enemy/3 Final Enemy/2.floating/3.png",
    "../../img/2.Enemy/3 Final Enemy/2.floating/4.png",
    "../../img/2.Enemy/3 Final Enemy/2.floating/5.png",
    "../../img/2.Enemy/3 Final Enemy/2.floating/6.png",
    "../../img/2.Enemy/3 Final Enemy/2.floating/7.png",
    "../../img/2.Enemy/3 Final Enemy/2.floating/8.png",
    "../../img/2.Enemy/3 Final Enemy/2.floating/9.png",
    "../../img/2.Enemy/3 Final Enemy/2.floating/10.png",
    "../../img/2.Enemy/3 Final Enemy/2.floating/11.png",
    "../../img/2.Enemy/3 Final Enemy/2.floating/12.png",
    "../../img/2.Enemy/3 Final Enemy/2.floating/13.png",
  ];
  isSharkieComing = false;
  hadFirstContact = false;
  SPLASH_AUDIO = new Audio("../../audio/splash.mp3");
  audios = [this.SPLASH_AUDIO];
  i = 100;

  constructor() {
    super();
    this.loadImgs(this.IMGS_ENTRY);
    this.loadImgs(this.IMGS_IDLE);
    this.x = 2000;
    this.y = 0;
    this.speed = 0.15 + Math.random() / 0.4;
    this.applyGravity();
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.i < this.IMGS_ENTRY.length) {
        this.playAnimation(this.IMGS_ENTRY);
        this.i++;
      } else {
        if (this.hadFirstContact)
        this.playAnimation(this.IMGS_IDLE);
      }
      if (this.isSharkieComing && !this.hadFirstContact) {
        this.i = 0;
        this.x = 2200;
        this.y = 0;
        this.hadFirstContact = true;
      }
    }, 140);

    setInterval(() => {
        if (this.i < this.IMGS_ENTRY.length) 
            this.SPLASH_AUDIO.play();
    });
  }
}
