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
    case "Space":
      keyboard.SPACE = true;
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
    case "Space":
      keyboard.SPACE = false;
      break;
    case "KeyZ":
      keyboard.Y = false;
      break;
  }
});

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
  let canvas = document.getElementById("canvas");
  if (!document.fullscreenElement) canvas.requestFullscreen();
  else document.exitFullscreen();
}
