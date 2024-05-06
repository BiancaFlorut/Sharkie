class Enemy extends MovableObject {
    slapHit() {
        this.energy -= 20;
        if (this.otherDirection) {
            this.x -= 100;
            this.otherDirection = false;
        } else {
            this.x += 100;
            this.otherDirection = true;
        }
    }
}