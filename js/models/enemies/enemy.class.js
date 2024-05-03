class Enemy extends MovableObject {
    slapHit() {
        this.otherDirection = true;
        this.energy -= 20;
        this.x += 100;
    }
}