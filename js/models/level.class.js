class Level {
  enemies;
  backgrounds;
  bubbles;
  coins;
  bottles;
  hearts;
  level_end_x = 2220;
  points = 0;

  constructor(enemies, backgrounds, bubbles, coins, bottles, hearts) {
    this.enemies = enemies;
    this.backgrounds = backgrounds;
    this.bubbles = bubbles;
    this.coins = coins;
    this.bottles = bottles;
    this.hearts = hearts;
  }

  /**
   * Retrieves all audio elements from enemies, bubbles, coins, bottles, and hearts.
   *
   * @return {Array} An array containing all audio elements from the different game entities.
   */
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
    });
    this.hearts.forEach((heart) => {
      if (heart.audios) heart.audios.forEach((audio) => result.push(audio));
    });
    return result;
  }
}
