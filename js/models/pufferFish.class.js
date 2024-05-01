class PufferFish extends Enemy {
  width = 80;
  height = 80;
  offsetYTop = 8;
  offsetYBottom = 25;
  offsetXLeft = 5;
  offsetXRight = 5;
  IMGS_IDLE = [
    "../../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
    "../../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
    "../../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
    "../../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
    "../../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png",
  ];
  IMGS_DIE = ["../../img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png"];
  IMGS_SLAP_DIE = ["../../img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png"];
  speed = 0.35;
  distance;
  MAX_DISTANCE = 700;
  slapped = false;

  constructor() {
    super().loadImg("img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png");
    this.loadImgs(this.IMGS_IDLE);
    this.x = 400 + Math.random() * 400;
    this.y = Math.random() * 400;
    this.speed = 0.15 + Math.random() / 0.4;
    this.MAX_DISTANCE = 200 + Math.random() * 500;
    this.distance = this.MAX_DISTANCE;
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.otherDirection) {
        this.moveRight();
        this.distance += this.speed;
      } else {
        if (this.x > 200) {
            this.moveLeft();
        this.distance -= this.speed;
        }
        else this.otherDirection = true;
      }
      if (this.distance < 0) {
        this.distance = this.x + Math.random() * 200;
        this.otherDirection = true;
      }
      if (this.distance > this.MAX_DISTANCE) {
        this.distance = this.MAX_DISTANCE;
        this.otherDirection = false;
      }
    }, 1000 / 60);

    setInterval(() => {
      if (this.isDead())
        if (this.slapped)
          this.slapDie();  
        else  this.die();
      else this.playAnimation(this.IMGS_IDLE);
    }, 80);
  }

  hit() {
    this.energy -= 100;
  }

  die() {
    this.loadImg(this.IMGS_DIE);
    this.y -= 10;
  }

  slapHit() {
    this.energy -= 100;
    this.slapped = true;
  }

  slapDie() {
    this.loadImg(this.IMGS_SLAP_DIE);
    this.y += 50;
    this.x += 20;
  }
}
