class Number extends Drawable {

    constructor(x, y, number) {
        super();
        this.x = x;
        this.y = y;
        this.number = number;
    }

    drawNumber(ctx) {
        ctx.fillStyle = "#2237ac";
        ctx.font = "19px Luckiest Guy";
        ctx.fillText(this.number, this.x, this.y);
    }

    setNumber(number) {
        this.number = number
    }
}