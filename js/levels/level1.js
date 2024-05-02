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
  [new Coin(360, 400), new Coin(410, 380), new Coin(460, 360)]
);
