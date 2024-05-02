const LEVEL1 = new Level(
  [new PufferFish(), new PufferFish(), new PufferFish(),
    new PufferFish(), new PufferFish(), new PufferFish(),
    new LilaJellyFish(), new YellowJellyFish(), new LilaJellyFish() , 
    new YellowJellyFish(), new LilaJellyFish(), new YellowJellyFish(),
    new EndBoss()],
  [
    new Background("../img/3. Background/Layers/5. Water/L2.png", -720, 0, 720, 480),
    new Background("../img/3. Background/Layers/4.Fondo 2/L2.png", -720, 0, 720, 480),
    new Background("../img/3. Background/Layers/3.Fondo 1/L2.png", -720, 0, 720, 480),
    new Background("../img/3. Background/Layers/2. Floor/L2.png", -720, 0, 720, 480),
    new Light("img/3. Background/Layers/1. Light/2.png", -720, 0, 720, 480),

    new Background("../img/3. Background/Layers/5. Water/L1.png", 0, 0, 720, 480),
    new Background("../img/3. Background/Layers/4.Fondo 2/L1.png", 0, 0, 720, 480),
    new Background("../img/3. Background/Layers/3.Fondo 1/L1.png", 0, 0, 720, 480),
    new Background("../img/3. Background/Layers/2. Floor/L1.png", 0, 0, 720, 480),
    new Light("img/3. Background/Layers/1. Light/1.png", 0, 0, 720, 480),

    new Background("../img/3. Background/Layers/5. Water/L2.png", 720, 0, 720, 480),
    new Background("../img/3. Background/Layers/4.Fondo 2/L2.png", 720, 0, 720, 480),
    new Background("../img/3. Background/Layers/3.Fondo 1/L2.png", 720, 0, 720, 480),
    new Background("../img/3. Background/Layers/2. Floor/L2.png", 720, 0, 720, 480),
    new Light("img/3. Background/Layers/1. Light/2.png", 720, 0, 720, 480),

    new Background("../img/3. Background/Layers/5. Water/L1.png", 2 * 720, 0, 720, 480),
    new Background("../img/3. Background/Layers/4.Fondo 2/L1.png", 2 * 720, 0, 720, 480),
    new Background("../img/3. Background/Layers/3.Fondo 1/L1.png", 2 * 720, 0, 720, 480),
    new Background("../img/3. Background/Layers/2. Floor/L1.png", 2 * 720, 0, 720, 480),
    new Light("img/3. Background/Layers/1. Light/1.png", 2 * 720, 0, 720, 480),

    new Background("../img/3. Background/Layers/5. Water/L2.png", 3 * 720, 0, 720, 480),
    new Background("../img/3. Background/Layers/4.Fondo 2/L2.png", 3 * 720, 0, 720, 480),
    new Background("../img/3. Background/Layers/3.Fondo 1/L2.png", 3 * 720, 0, 720, 480),
    new Background("../img/3. Background/Layers/2. Floor/L2.png", 3 * 720, 0, 720, 480),
    new Light("img/3. Background/Layers/1. Light/2.png", 3 * 720, 0, 720, 480),
  ],
  [],
  [ new Coin(460, 360), new Coin(760, 80),
    new Coin(1060, 400), new Coin(1110, 380), new Coin(1160, 360),  new Coin(1210, 360), new Coin(1260, 380), new Coin(1310, 400),
   new Coin(2210, 260), new Coin(2160, 40)]
);
