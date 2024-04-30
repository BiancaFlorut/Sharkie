class Level {
    enemies;
    backgrounds;
    bubbles;
    level_end_x = 2220;

    constructor(enemies, backgrounds, bubbles) {
        this.enemies = enemies;
        this.backgrounds = backgrounds;
        this.bubbles = bubbles;
    }
}