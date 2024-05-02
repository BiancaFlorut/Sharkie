class Level {
    enemies;
    backgrounds;
    bubbles;
    coins;
    level_end_x = 2220;

    constructor(enemies, backgrounds, bubbles, coins) {
        this.enemies = enemies;
        this.backgrounds = backgrounds;
        this.bubbles = bubbles;
        this.coins = coins;
    }
}