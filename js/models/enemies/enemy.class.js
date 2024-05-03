class Enemy extends MovableObject {
    slapHit() {
        this.otherDirection = true;
        this.x += 50;
    }
}