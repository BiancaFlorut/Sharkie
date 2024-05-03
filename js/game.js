let canvas;
let world;
let keyboard = new Keyboard();
const AUDIO = new Audio("./audio/game-music-loop.mp3");
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

function stopGame() {
  mute();
  intervalIds.forEach(clearInterval);
  document.getElementById("game").classList.add("d_none");
}

function toggleMute() {
  if (isMute.valueOf()) {
    AUDIO.muted = false;
    world.getAllAudios().forEach((audio) => (audio.muted = false));
    document.getElementById("speakerIcon").src = "./img/Icons/mute.png";
    isMute = new Boolean(false);
    world.unmute();
  } else {
    mute();
  }
}

function mute() {
  AUDIO.muted = true;
    world.getAllAudios().forEach((audio) => (audio.muted = true));
    document.getElementById("speakerIcon").src = "./img/Icons/speaker.png";
    isMute = new Boolean(true);
    world.mute();
}

function startGame() {
  document.getElementById("start_game").classList.add("d_none");
  document.getElementById("game").classList.remove("d_none");
  canvas = document.getElementById("canvas");

  world = new World(canvas, keyboard, isMute);
  AUDIO.loop = true;
  AUDIO.volume = 0.4;
  AUDIO.play();
}

function toggleMenu() {
    const instructions = document.getElementById("menu_overlay");
    if (instructions.classList.contains("d_none")) {
        document.getElementById("menu_overlay").classList.remove("d_none");
    } else {
        document.getElementById("menu_overlay").classList.add("d_none");
    }
}