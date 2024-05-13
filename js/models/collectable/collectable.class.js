class Collectable extends Drawable {
    /**
     * Animates the object by playing an animation using the images provided.
     *
     * @return {void} This function does not return anything.
     */
    animate() {
        setStoppableInterval(() => {
            this.playAnimation(this.IMGS);  
        }, 1000 / 4);
    }

    /**
     * Plays the audio associated with the collectable object.
     *
     * @return {void} This function does not return anything.
     */
    collect() {
        this.AUDIO.play();
    }
}