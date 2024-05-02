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

  getAudios() {
    let result = [];
    this.enemies.forEach((enemy) => {
      if (enemy.audio) result.push(enemy.audio);
    });
    this.bubbles.forEach((bubble) => {
      if (bubble.audio) result.push(bubble.audio);
    });
    return result;
  }
}
