let canvas;
let world;
let keyboard = new Keyboard();
const AUDIO = new Audio("./audio/game-music-loop.mp3");
intervalIds = [];
isMute = new Boolean(false);

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard, isMute);
  AUDIO.loop = true;
  AUDIO.volume = 0.4;
  AUDIO.play();
}

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
  intervalIds.forEach(clearInterval);
}

function toggleMute() {
    console.log(world.getAllAudios());
  if (isMute.valueOf()) {
    AUDIO.muted = false;
    world.getAllAudios().forEach((audio) => (audio.muted = false));
    document.getElementById("speakerIcon").src = "./img/Icons/mute.png";
    isMute = new Boolean(false);
    world.unmute();
  } else {
    AUDIO.muted = true;
    world.getAllAudios().forEach((audio) => (audio.muted = true));
    document.getElementById("speakerIcon").src = "./img/Icons/speaker.png";
    isMute = new Boolean(true);
    world.mute();
  }
}
