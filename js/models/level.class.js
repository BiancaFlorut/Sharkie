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
      if (enemy.audios) enemy.audios.forEach((audio) => result.push(audio));
    });
    this.bubbles.forEach((bubble) => {
      if (bubble.audios) bubble.audios.forEach((audio) => result.push(audio));
    });
    this.coins.forEach((coin) => {
      if (coin.audios) coin.audios.forEach((audio) => result.push(audio));
    })
    return result;
  }
}
