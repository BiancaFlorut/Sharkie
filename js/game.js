let canvas;
let world;
let keyboard = new Keyboard();

function init () {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    console.log(world.sharkie);
    
}

document.addEventListener('keydown', (event) => {
    console.log(event);
    switch(event.code){
        case 'ArrowLeft': keyboard.LEFT = true; break;
        case 'ArrowRight': keyboard.RIGHT = true; break;
        case 'ArrowUp': keyboard.UP = true; break;
        case 'ArrowDown': keyboard.DOWN = true; break;
        case 'Space': keyboard.SPACE = true; break;
    }
});

document.addEventListener('keyup', (event) => {
    switch(event.code){
        case 'ArrowLeft': keyboard.LEFT = false; break;
        case 'ArrowRight': keyboard.RIGHT = false; break;
        case 'ArrowUp': keyboard.UP = false; break;
        case 'ArrowDown': keyboard.DOWN = false; break;
        case 'Space': keyboard.SPACE = false; break;
    }
})