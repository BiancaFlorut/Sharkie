let canvas;
let world;
let keyboard = new Keyboard();
const AUDIO = new Audio("./assets/audio/game-music-loop.mp3");
const COIN_AUDIO = new Audio("./assets/audio/coin.mp3");
const LOST_AUDIO = new Audio("./assets/audio/lost.mp3");
let intervalIds = [];
let isMute = new Boolean(false);

document.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "ArrowLeft":
      keyboard.LEFT = true;
      break;
    case "ArrowRight":
      keyboard.RIGHT = true;
      break;
    case "ArrowUp":
      keyboard.UP = true;
      break;
    case "ArrowDown":
      keyboard.DOWN = true;
      break;
    case "KeyX":
      keyboard.X = true;
      break;
    case "KeyZ":
      keyboard.Y = true;
      break;
  }
});

document.addEventListener("keyup", (event) => {
  switch (event.code) {
    case "ArrowLeft":
      keyboard.LEFT = false;
      break;
    case "ArrowRight":
      keyboard.RIGHT = false;
      break;
    case "ArrowUp":
      keyboard.UP = false;
      break;
    case "ArrowDown":
      keyboard.DOWN = false;
      break;
    case "KeyX":
      keyboard.X = false;
      break;
    case "KeyZ":
      keyboard.Y = false;
      break;
  }
});

/**
 * Initializes the game by binding touch events, setting up fullscreen change listener,
 * and handling orientation change based on device portrait mode.
 *
 * @return {void} No return value
 */
function init() {
  AUDIO.volume = 0.4;
  LOST_AUDIO.volume = 0.2;
  COIN_AUDIO.volume = 0.2;
  bindeTouchEvents();
  onfullscreenchange = () => {
    toggleFullScreen();
  };
  changeToLandscape();
}

/**
 * Changes the layout to landscape orientation based on device conditions.
 *
 * @return {void} No return value
 */
function changeToLandscape() {
  window.addEventListener("orientationchange", checkRightOrientation);
  if (window.matchMedia("(orientation: portrait)").matches && window.matchMedia("(max-width: 720px)").matches) {
    if (document.getElementById("changeOrientation").classList.contains("d_none")) {
      document.getElementById("changeOrientation").classList.remove("d_none");
    }
  }
}

/**
 * Binds touch events to the swimLeftIcon, swimRightIcon, swimUpIcon, swimDownIcon,
 * bubbleAttack, and slapAttack elements. When the corresponding element is touched,
 * the corresponding key on the keyboard object is set to true. When the touch ends,
 * the corresponding key is set to false.
 *
 * @return {void} This function does not return anything.
 */
function bindeTouchEvents() {
  document.getElementById("swimLeftIcon").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.LEFT = true;
  });
  document.getElementById("swimLeftIcon").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
  });
  document.getElementById("swimRightIcon").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.RIGHT = true;
  });
  document.getElementById("swimRightIcon").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.RIGHT = false;
  });

  document.getElementById("swimUpIcon").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.UP = true;
  });
  document.getElementById("swimUpIcon").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.UP = false;
  });
  document.getElementById("swimDownIcon").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.DOWN = true;
  });
  document.getElementById("swimDownIcon").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.DOWN = false;
  });
  document.getElementById("bubbleAttack").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.Y = true;
  });
  document.getElementById("bubbleAttack").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.Y = false;
  });
  document.getElementById("slapAttack").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.X = true;
  });
  document.getElementById("slapAttack").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.X = false;
  });
}

/**
 * Checks the right orientation of the device and performs certain actions based on the orientation.
 *
 * @return {void} This function does not return anything.
 */
function checkRightOrientation() {
  window.matchMedia("(orientation: portrait)").addEventListener("change", (e) => {
    const portrait = e.matches;
    const mql = window.matchMedia("(max-width: 720px)");
    if (portrait && mql.matches) {
      if (document.getElementById("changeOrientation").classList.contains("d_none")) {
        document.getElementById("changeOrientation").classList.remove("d_none");
      }
      pauseGame();
    } else {
      if (!document.getElementById("changeOrientation").classList.contains("d_none")) {
        document.getElementById("changeOrientation").classList.add("d_none");
      }
      resumeGame();
    }
  });
}

/**
 * Executes a callback function repeatedly at a specified time interval and stores the interval ID.
 *
 * @param {Function} callback - The function to be executed.
 * @param {number} time - The time interval in milliseconds.
 * @return {void} This function does not return anything.
 */
function setStoppableInterval(callback, time) {
  intervalIds.push(setInterval(callback, time));
}

/**
 * Pauses the game by setting the `isPaused` property of the `world` object to `true`.
 * If the game is not muted, the `mute` function is called.
 *
 * @return {void} This function does not return anything.
 */
function pauseGame() {
  if (world) {
    world.isPaused = true;
    if (!isMute.valueOf()) mute();
  }
}

/**
 * Resumes the game if it is currently paused.
 *
 * @return {void} This function does not return anything.
 */
function resumeGame() {
  if (world) {
    world.isPaused = false;
    if (!isMute.valueOf()) unmute();
  }
}

/**
 * Stops the game based on the outcome, updating various elements on the page accordingly.
 *
 * @param {boolean} isWon - Indicates whether the game was won or lost.
 * @return {void} This function does not return anything.
 */
function stopGame(isWon) {
  world.isOver = true;
  mute();
  intervalIds.forEach(clearInterval);
  document.getElementById("game").classList.add("d_none");
  if (isWon) {
    document.getElementById("start_game").classList.remove("d_none");
    document.getElementById("won_overlay").classList.remove("d_none");
    playCoinsAnimation();
  } else {
    document.getElementById("start_game").classList.remove("d_none");
    document.getElementById("lost_overlay").classList.remove("d_none");
    document.getElementById("won_overlay").classList.add("d_none");
    LOST_AUDIO.play();
  }
}

/**
 * Plays an animation that updates the number of coins and their points on the page.
 *
 * @return {void} This function does not return anything.
 */
function playCoinsAnimation() {
  document.getElementById("points").innerHTML = world.level.points;
  document.getElementById("totalPoints").innerHTML = world.level.points;
  showFirstScores();
  const coins = world.getCollectedCoins();
  for (let i = 1; i <= coins; i++) {
    fadeInCoins(i, coins);
    fadeOutCoins(i);
  }
  setTimeout(() => {
    document.getElementById("totalPoints").innerHTML = coins * 5 + world.level.points;
    document.getElementById("totalPoints").classList.add("fadeIn");
    COIN_AUDIO.play();
  }, 1000 * (coins + 1) + 500);
}

/**
 * Fades in the coins on the page by gradually increasing their opacity.
 *
 * @param {number} i - The index of the coin to fade in.
 * @return {void} This function does not return anything.
 */
function fadeInCoins(i, coins) {
  setTimeout(() => {
    document.getElementById("coins").classList.remove("fadeOut");
    document.getElementById("coinPoints").classList.remove("fadeOut");
    document.getElementById("coins").innerHTML = coins - i;
    document.getElementById("coins").classList.add("fadeIn");
    document.getElementById("coinPoints").innerHTML = i * 5;
    document.getElementById("coinPoints").classList.add("fadeIn");
    COIN_AUDIO.play();
  }, 1000 * i);
}

/**
 * Fades out the coins on the page by gradually decreasing their opacity after a delay.
 *
 * @param {number} i - The index of the coin to fade out.
 * @return {void} This function does not return anything.
 */
function fadeOutCoins(i) {
  setTimeout(() => {
    document.getElementById("coins").classList.remove("fadeIn");
    document.getElementById("coinPoints").classList.remove("fadeIn");
    document.getElementById("coins").classList.add("fadeOut");
    document.getElementById("coinPoints").classList.add("fadeOut");
  }, 1000 * i + 500);
}

/**
 * Toggles the mute state of the audio.
 *
 * @return {void} This function does not return anything.
 */
function toggleMute() {
  if (isMute.valueOf()) {
    unmute();
    isMute = new Boolean(false);
  } else {
    isMute = new Boolean(true);
    mute();
  }
}

/**
 * Mutes the audio by setting properties and updating elements.
 */
function mute() {
  AUDIO.muted = true;
  LOST_AUDIO.muted = true;
  world.getAllAudios().forEach((audio) => (audio.muted = true));
  document.getElementById("speakerIcon").src = "./assets/img/Icons/speaker.png";
  world.mute();
}

/**
 * Unmutes the audio by setting the `muted` property of the `AUDIO` and `LOST_AUDIO` variables to `false`.
 * It also unmutes all audios in the `world` by iterating over them and setting their `muted` property to `false`.
 * Finally, it updates the `src` attribute of the `speakerIcon` element to "./img/Icons/mute.png" and calls the `unmute()` method of the `world` object.
 *
 * @return {void} This function does not return a value.
 */
function unmute() {
  AUDIO.muted = false;
  LOST_AUDIO.muted = false;
  world.getAllAudios().forEach((audio) => (audio.muted = false));
  document.getElementById("speakerIcon").src = "./assets/img/Icons/mute.png";
  world.unmute();
}

/**
 * Starts the game by initializing various elements on the page and creating a new instance of the World class.
 *
 * @return {void} This function does not return a value.
 */
function startGame() {
  canvas = document.getElementById("canvas");
  initLevel1();
  world = new World(canvas, keyboard, isMute.valueOf());
  if (!isMute.valueOf()) {
    AUDIO.loop = true;
    AUDIO.play();
  } else mute();
  AUDIO.muted = isMute.valueOf();
  document.getElementById("start_game").classList.add("d_none");
  document.getElementById("game").classList.remove("d_none");
  document.getElementById("menu_overlay").classList.add("d_none");
  document.getElementById("lost_overlay").classList.add("d_none");
  document.getElementById("won_overlay").classList.add("d_none");
}

/**
 * Toggles the visibility of the menu based on current state, showing or hiding elements accordingly.
 *
 * @return {void} This function does not return a value.
 */
function toggleMenu() {
  const instructions = document.getElementById("menu_overlay");
  if (instructions.classList.contains("d_none")) {
    document.getElementById("menu_overlay").classList.remove("d_none");
    if (world && !world.isOver) toggleMenuAndPause();
  } else {
    document.getElementById("menu_overlay").classList.add("d_none");
    if (world && !world.isOver) toggleMenuAndResume();
  }
}

/**
 * Toggles the menu and pauses the game by hiding and showing specific elements.
 *
 * @return {void} This function does not return anything.
 */
function toggleMenuAndPause() {
  document.getElementById("start_game").classList.remove("d_none");
  document.getElementById("restart").classList.remove("d_none");
  document.getElementById("game").classList.add("d_none");
  pauseGame();
}

/**
 * Resumes the game by displaying game elements and hiding menu elements.
 *
 * @return {void} This function does not return anything.
 */
function toggleMenuAndResume() {
  document.getElementById("game").classList.remove("d_none");
  document.getElementById("restart").classList.add("d_none");
  document.getElementById("start_game").classList.add("d_none");
  resumeGame();
}

/**
 * Hides the game and menu overlays, and shows the start game button.
 *
 * @return {void} This function does not return anything.
 */
function backToStart() {
  document.getElementById("start_game").classList.remove("d_none");
  document.getElementById("won_overlay").classList.add("d_none");
  document.getElementById("lost_overlay").classList.add("d_none");
  document.getElementById("menu_overlay").classList.add("d_none");
  document.getElementById("game").classList.add("d_none");
}

/**
 * Toggles the full screen mode of the game.
 *
 * @return {void} This function does not return anything.
 */
function toggleFullScreen() {
  let game = document.getElementById("game");
  if (!document.fullscreenElement) {
    
    document.getElementById("canvas").style.width = "100%";
    document.getElementById("canvas").style.height = "100%";
    document.getElementById("fullScreen").src = "./assets/img/Icons/minimize.png";
    game.requestFullscreen();
  } else {
    document.getElementById("canvas").style.width = "auto";
    document.getElementById("fullScreen").src = "./assets/img/Icons/maximize.png";
    document.exitFullscreen();
  }
}
