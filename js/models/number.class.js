class Number extends Drawable {

    constructor(x, y, number) {
        super();
        this.x = x;
        this.y = y;
        this.number = number;
    }

    /**
     * Draws a number on the canvas at the specified position.
     *
     * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas.
     * @return {void} This function does not return anything.
     */
    drawNumber(ctx) {
        ctx.fillStyle = "#2237ac";
        ctx.font = "19px Luckiest Guy";
        ctx.fillText(this.number, this.x, this.y);
    }

    /**
     * Sets the number value of the object.
     *
     * @param {type} number - The new number value to be set.
     * @return {type} This function does not return anything.
     */
    setNumber(number) {
        this.number = number
    }
}