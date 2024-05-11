class SmallLifeBar extends MovableObject {
    width = 100;
    height = 5;
    percentage = 100;
    moWidth = 0;
    speed = 0.15;
    offsetY = 0;
    visibility = false;

    constructor(x, y, offsetY) {
        super();
        this.offsetY = offsetY;
        this.x = x;
        this.y = y - this.offsetY;
    }

    setPercentage(percentage) {
        this.width = percentage * this.moWidth / 100;
    }

    setPosition(mo) {
        this.speed = mo.speed;
        this.width = mo.width;
        this.moWidth = mo.width;
        this.otherDirection = mo.otherDirection;
        this.y = mo.y + this.offsetY;
        this.x = mo.x;
      }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "red";
        ctx.fill();
    }
}