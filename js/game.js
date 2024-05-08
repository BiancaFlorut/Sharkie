let canvas;
let world;
let keyboard = new Keyboard();
const AUDIO = new Audio("./audio/game-music-loop.mp3");
const LOST_AUDIO = new Audio("./audio/lost.mp3");
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

function bindeTouchEvents() {
  document.getElementById("swimLeftIcon").addEventListener("touchstart",  (e) => {
    e.preventDefault();
    keyboard.LEFT = true;
  });
  document.getElementById("swimLeftIcon").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
  });
  document.getElementById('swimRightIcon').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.RIGHT = true;
  });
  document.getElementById('swimRightIcon').addEventListener('touchend', (e) => {
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
  document.getElementById('swimDownIcon').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.DOWN = true;
  });
  document.getElementById('swimDownIcon').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.DOWN = false;
  });
  document.getElementById('bubbleAttack').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.Y = true;
  });
  document.getElementById('bubbleAttack').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.Y = false;
  });
  document.getElementById('slapAttack').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.X = true;
  });
  document.getElementById('slapAttack').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.X = false;
  });
  window.addEventListener("orientationchange", checkRightOrientation);
}

function checkRightOrientation() {
  switch (screen.orientation.type) {
    case "landscape-primary":
      console.log("That looks good.");
      break;
    case "landscape-secondary":
      console.log("Mmmh… the screen is upside down!");
      break;
    case "portrait-secondary":
    case "portrait-primary":
      console.log("Mmmh… you should rotate your device to landscape");
      break;
    default:
      console.log("The orientation API isn't supported in this browser :(");
}
}

function setStoppableInterval(callback, time) {
  intervalIds.push(setInterval(callback, time));
}

function pauseGame() {
  world.isPaused = true;
  if (!isMute.valueOf()) mute();
}

function resumeGame() {
  world.isPaused = false;
  if (!isMute.valueOf()) unmute();
}

function stopGame(isWon) {
  world.isOver = true;
  mute();
  intervalIds.forEach(clearInterval);
  document.getElementById("game").classList.add("d_none");
  if (isWon) {
    document.getElementById("start_game").classList.remove("d_none");
    document.getElementById("won_overlay").classList.remove("d_none");
  } else {
    document.getElementById("start_game").classList.remove("d_none");
    document.getElementById("lost_overlay").classList.remove("d_none");
    document.getElementById("won_overlay").classList.add("d_none");
    LOST_AUDIO.play();
  }
}

function toggleMute() {
  if (isMute.valueOf()) {
    unmute();
    isMute = new Boolean(false);
  } else {
    isMute = new Boolean(true);
    mute();
  }
}

function mute() {
  AUDIO.muted = true;
  LOST_AUDIO.muted = true;
  world.getAllAudios().forEach((audio) => (audio.muted = true));
  document.getElementById("speakerIcon").src = "./img/Icons/speaker.png";
  world.mute();
}

function unmute() {
  AUDIO.muted = false;
  LOST_AUDIO.muted = false;
  world.getAllAudios().forEach((audio) => (audio.muted = false));
  document.getElementById("speakerIcon").src = "./img/Icons/mute.png";
  world.unmute();
}

function startGame() {
  if (!isMute.valueOf()) {
    AUDIO.loop = true;
    AUDIO.volume = 0.4;
    LOST_AUDIO.volume = 0.2;
    AUDIO.play();
  } else mute();
  AUDIO.muted = isMute.valueOf();
  document.getElementById("start_game").classList.add("d_none");
  document.getElementById("game").classList.remove("d_none");
  document.getElementById("menu_overlay").classList.add("d_none");
  document.getElementById("lost_overlay").classList.add("d_none");
  document.getElementById("won_overlay").classList.add("d_none");
  canvas = document.getElementById("canvas");
  initLevel1();
  world = new World(canvas, keyboard, isMute);
}

function toggleMenu() {
  const instructions = document.getElementById("menu_overlay");
  const game = document.getElementById("game");
  if (instructions.classList.contains("d_none")) {
    document.getElementById("menu_overlay").classList.remove("d_none");

    if (world && !world.isOver) {
      document.getElementById("start_game").classList.remove("d_none");
      document.getElementById("restart").classList.remove("d_none");
      game.classList.add("d_none");
      pauseGame();
    }
  } else {
    document.getElementById("menu_overlay").classList.add("d_none");
    if (world && !world.isOver) {
      game.classList.remove("d_none");
      document.getElementById("restart").classList.add("d_none");
      document.getElementById("start_game").classList.add("d_none");
      resumeGame();
    }
  }
}

function backToStart() {
  document.getElementById("start_game").classList.remove("d_none");
  document.getElementById("won_overlay").classList.add("d_none");
  document.getElementById("lost_overlay").classList.add("d_none");
  document.getElementById("menu_overlay").classList.add("d_none");
  document.getElementById("game").classList.add("d_none");
}

function toggleFullScreen() {
  let game = document.getElementById("game");
  if (!window.fullscreenElement) {
    game.requestFullscreen();
    document.getElementById("canvas").style.width = "100%";
  }
  else {
    document.getElementById("canvas").style.width = "auto";
    game.exitFullscreen();
  }

}
