class PufferFish extends Enemy {
  width = 80;
  height = 80;
  offsetYTop = 18;
  offsetYBottom = 30;
  offsetXLeft = 15;
  offsetXRight = 15;
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
  MAX_DISTANCE = 2200;
  slapped = false;

  constructor() {
    super().loadImg("img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png");
    this.loadImgs(this.IMGS_IDLE);
    this.x = 400 + Math.random() * 1800;
    this.y = Math.random() * 400;
    this.speed = 0.15 + Math.random() * 2;
    this.MAX_DISTANCE = 200 + Math.random() * 500;
    this.otherDirection = Math.random() < 0.5;
    this.distance = this.MAX_DISTANCE;
    this.setLifeBar();
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.otherDirection) {
        this.moveRight();
        this.lifeBar.moveRight();
        if (this.x > 2200) this.otherDirection = false;
      } else {
        if (this.x > 200) {
          this.moveLeft();
          this.lifeBar.moveLeft();
        } else {
          this.otherDirection = true;
          this.lifeBar.otherDirection = true;}
      }
    }, 1000 / 60);

    setInterval(() => {
      if (this.isDead())
        if (this.slapped) this.slapDie();
        else this.die();
      else this.playAnimation(this.IMGS_IDLE);
    }, 80);
  }

  hit() {
    this.energy -= 20;
    this.lifeBar.setPercentage(this.energy);
  }

  die() {
    this.loadImg(this.IMGS_DIE);
    this.y -= 10;
    this.lifeBar.y -= 10;
  }

  slapHit() {
    this.energy -= 100;
    this.lifeBar.setPercentage(this.energy);
    this.slapped = true;
  }

  slapDie() {
    this.loadImg(this.IMGS_SLAP_DIE);
    this.y += 50;
    this.x += 20;
    this.lifeBar.y += 50;
    this.lifeBar.x += 20;
  }
}
