class Collectable extends Drawable {
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMGS);  
        }, 1000 / 4);
    }

    collect() {
        this.AUDIO.play();
    }
}