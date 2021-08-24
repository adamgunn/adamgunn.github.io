const canvas = document.querySelector('.pong-game');
const width = canvas.width = 1120;
const height = canvas.height = width / 16 * 9;
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0, 0, width, height);

function updateCanvasWidth() {
    canvas.style.width = Math.min((window.innerWidth - 60), 1120);
    canvas.style.height = (canvas.style.width / 16 * 9);
    console.log(window.innerWidth);
}

window.onload = updateCanvasWidth();
window.onresize = updateCanvasWidth();