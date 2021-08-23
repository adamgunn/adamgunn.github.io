const canvas = document.querySelector('.pong-game');
const width = canvas.width = (window.innerWidth - 60);
const height = canvas.height = (width / 16 * 9);
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0, 0, width, height);