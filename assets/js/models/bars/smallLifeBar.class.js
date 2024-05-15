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

    /**
     * Sets the width of the object based on a percentage value.
     *
     * @param {number} percentage - The percentage value to calculate the width.
     * @return {void} This function does not return anything.
     */
    setPercentage(percentage) {
        this.width = percentage * this.moWidth / 100;
    }

    /**
     * Sets the position of the object based on the properties of mo.
     *
     * @param {Object} mo - The object containing position-related properties.
     * @return {void} This function does not return anything.
     */
    setPosition(mo) {
        this.speed = mo.speed;
        this.width = mo.width;
        this.moWidth = mo.width;
        this.otherDirection = mo.otherDirection;
        this.y = mo.y + this.offsetY;
        this.x = mo.x;
      }

    /**
     * Draws a rectangle on the canvas using the provided context.
     *
     * @param {CanvasRenderingContext2D} ctx - The context used to draw on the canvas.
     * @return {void} This function does not return anything.
     */
    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.moWidth, this.height);
        ctx.fillStyle = "gray";
        ctx.fill();
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "red";
        ctx.fill();
    }
}