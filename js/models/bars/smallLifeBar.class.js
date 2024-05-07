class SmallLifeBar extends MovableObject {
    width = 100;
    height = 5;
    percentage = 100;
    speed = 0.15;
    offsetY = 0;

    constructor(x, y) {
        super();
        this.x = x;
        this.y = y + this.offsetY;
    }

    setPercentage(percentage) {
        this.width = percentage / 100 * this.width;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "red";
        ctx.fill();
    }
}