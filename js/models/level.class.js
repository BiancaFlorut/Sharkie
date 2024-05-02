class Level {
  enemies;
  backgrounds;
  bubbles;
  coins;
  bottles;
  level_end_x = 2220;

  constructor(enemies, backgrounds, bubbles, coins, bottles) {
    this.enemies = enemies;
    this.backgrounds = backgrounds;
    this.bubbles = bubbles;
    this.coins = coins;
    this.bottles = bottles;
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
    });
    this.bottles.forEach((bottle) => {
      if (bottle.audios) bottle.audios.forEach((audio) => result.push(audio));
    })
    return result;
  }
}
