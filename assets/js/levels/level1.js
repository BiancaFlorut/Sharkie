let LEVEL1;

/**
 * Initializes the Level 1 with enemies, backgrounds, bubbles, coins, bottles, and hearts.
 *
 * @return {void} 
 */
function initLevel1() {
  LEVEL1 = new Level(
    [
      new PufferFish(), new PufferFish(), new PufferFish(),
      new PufferFish(), new PufferFish(), new PufferFish(),
      new LilaJellyFish(), new YellowJellyFish(), new LilaJellyFish() , 
      new YellowJellyFish(), new LilaJellyFish(), new YellowJellyFish(),
      new SuperJellyFish(), new SuperJellyFish(), new SuperJellyFish(),
      new EndBoss()
    ],
    [
      new Background("./assets/img/3. Background/Layers/5. Water/L2.png", -720, 0, 720, 480),
      new Background("./assets/img/3. Background/Layers/4.Fondo 2/L2.png", -720, 0, 720, 480),
      new Background("./assets/img/3. Background/Layers/3.Fondo 1/L2.png", -720, 0, 720, 480),
      new Background("./assets/img/3. Background/Layers/2. Floor/L2.png", -720, 0, 720, 480),
      new Light("./assets/img/3. Background/Layers/1. Light/2.png", -720, 0, 720, 480),
  
      new Background("./assets/img/3. Background/Layers/5. Water/L1.png", 0, 0, 720, 480),
      new Background("./assets/img/3. Background/Layers/4.Fondo 2/L1.png", 0, 0, 720, 480),
      new Background("./assets/img/3. Background/Layers/3.Fondo 1/L1.png", 0, 0, 720, 480),
      new Background("./assets/img/3. Background/Layers/2. Floor/L1.png", 0, 0, 720, 480),
      new Light("./assets/img/3. Background/Layers/1. Light/1.png", 0, 0, 720, 480),
  
      new Background("./assets/img/3. Background/Layers/5. Water/L2.png", 720, 0, 720, 480),
      new Background("./assets/img/3. Background/Layers/4.Fondo 2/L2.png", 720, 0, 720, 480),
      new Background("./assets/img/3. Background/Layers/3.Fondo 1/L2.png", 720, 0, 720, 480),
      new Background("./assets/img/3. Background/Layers/2. Floor/L2.png", 720, 0, 720, 480),
      new Light("./assets/img/3. Background/Layers/1. Light/2.png", 720, 0, 720, 480),
  
      new Background("./assets/img/3. Background/Layers/5. Water/L1.png", 2 * 720, 0, 720, 480),
      new Background("./assets/img/3. Background/Layers/4.Fondo 2/L1.png", 2 * 720, 0, 720, 480),
      new Background("./assets/img/3. Background/Layers/3.Fondo 1/L1.png", 2 * 720, 0, 720, 480),
      new Background("./assets/img/3. Background/Layers/2. Floor/L1.png", 2 * 720, 0, 720, 480),
      new Light("./assets/img/3. Background/Layers/1. Light/1.png", 2 * 720, 0, 720, 480),
  
      new Background("./assets/img/3. Background/Layers/5. Water/L2.png", 3 * 720, 0, 720, 480),
      new Background("./assets/img/3. Background/Layers/4.Fondo 2/L2.png", 3 * 720, 0, 720, 480),
      new Background("./assets/img/3. Background/Layers/3.Fondo 1/L2.png", 3 * 720, 0, 720, 480),
      new Background("./assets/img/3. Background/Layers/2. Floor/L2.png", 3 * 720, 0, 720, 480),
      new Light("./assets/img/3. Background/Layers/1. Light/2.png", 3 * 720, 0, 720, 480),
    ],
    [],
    [ new Coin(470, 230), new Coin(760, 80),
      new Coin(1060, 200), new Coin(1110, 180), new Coin(1160, 160),  new Coin(1210, 160), new Coin(1260, 180), new Coin(1310, 200),
     new Coin(2210, 260), new Coin(2160, 40)],
     [new Poison(105, 250), new Poison(527, 337), new Poison(560, 323), new Poison(1010, 360), new Poison(1323, 310), new Poison(1290, 290)],
     [new Heart(890, 420), new Heart(1560, 420), new Heart(1940, 300), new Heart(2040, 130)]
  );
}