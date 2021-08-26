const canvas = document.querySelector('.pong-game');
const width = canvas.width = 1120;
var css_width = width;
const height = canvas.height = width / 16 * 9;
var css_height = height;
const ctx = canvas.getContext('2d');
class Ball {
    ballWidth = 10;
    ballSpeed = 10;
    ballDelta = this.ballSpeed / css_height * height;

    // 1: up-right
    // 2: down-right
    // 3: down-left
    // 4: up-left
    ballDir = Math.ceil(Math.random() * 4);

    ballCoords = {
        x: height / 2,
        y: width / 2
    }

    bounce() {
        switch (this.ballDir) {
            case 1:
                this.ballDir = 2;
                break;
            case 2:
                this.ballDir = 3;
                break;
            case 3:
                this.ballDir = 4;
                break;
            case 4:
                this.ballDir = 1;
                break;
            default:
                break;
        }
    }

    atWall() {
        console.log(this.ballDir);
        return (this.ballCoords.y < (this.ballWidth)) ||
               (this.ballCoords.y > (width - this.ballWidth)) || 
               (this.ballCoords.x < this.ballWidth) || 
               (this.ballCoords.x > (height - this.ballWidth));
    }

    moveBall() {
        if (this.atWall()) {
            this.bounce();
        }
        switch (this.ballDir) {
            case 1:
                this.ballCoords.x += this.ballDelta;
                this.ballCoords.y -= this.ballDelta;
                break;
            case 2:
                this.ballCoords.x += this.ballDelta;
                this.ballCoords.y += this.ballDelta;
                break;
            case 3:
                this.ballCoords.x -= this.ballDelta;
                this.ballCoords.y += this.ballDelta;
                break;
            case 4:
                this.ballCoords.x += this.ballDelta;
                this.ballCoords.y -= this.ballDelta;
                break;
            default:
                break;
        }
    }

    get ballCoords() {
        return this.ballCoords;
    }

    get ballWidth() {
        return this.ballWidth;
    }
}
var pong_ball = new Ball();
const paddleWidth = 10;
const paddleHeight = 100;
const margin = 10;
var currentYL = height/2;
var currentYR = height/2;
const height_incr = 10;
var keysPressed = {
    'w': false,
    's': false,
    'up': false,
    'dn': false
};

function getMouseY(e) {
    var rect = canvas.getBoundingClientRect();
    return (e.clientY - rect.top) / css_height * height;
}

function updateCanvasWidth() {
    var new_width = Math.min((window.innerWidth - 60), 1120);
    canvas.style.width = new_width + 'px';
    css_width = new_width;
    css_height = canvas.style.height = ((new_width / 16 * 9) + 'px')
    css_height = (new_width / 16 * 9);
}

function drawPaddles(yL, yR) {
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillRect(margin, (yL) - (paddleHeight / 2), paddleWidth, paddleHeight);
    ctx.fillRect(width - (2 * margin), (yR) - (paddleHeight / 2), paddleWidth, paddleHeight);
}

function drawBall(x, y, ballWidth) {
    ctx.fillStyle = 'rgb(255, 255, 255)';
    var canvas_y = (x - (ballWidth / 2));
    var canvas_x = (y - (ballWidth / 2));
    
    ctx.fillRect(canvas_x, canvas_y, ballWidth, ballWidth);
}

function drawPong(yL, yR) {
    // console.log('did the window change');
    updateCanvasWidth();
    drawPaddles(yL, yR);
    var coords = pong_ball.ballCoords;
    var x = coords.x;
    var y = coords.y;
    console.log(x + ', ' + y);
    var width = pong_ball.ballWidth;
    drawBall(x, y, width);
}

// canvas.addEventListener('mousemove', function(e) {
//     y = getMouseY(e);
//     if (y > (paddleHeight / 2) && y < (height - (paddleHeight / 2))) { 
//         drawPong(y);
//         currentY = y;
//     }
// }, false);

function updatePaddlePos() {
    var dY = height_incr / css_height * height;
    if (keysPressed['w'] && !keysPressed['s'] && currentYL > (paddleHeight / 2)) {
        currentYL -= dY;
    }
    else if (keysPressed['s'] && !keysPressed['w'] && currentYL < (height - (paddleHeight / 2))) {
        currentYL += dY;
    }

    if (keysPressed['up'] && !keysPressed['dn'] && currentYR > (paddleHeight / 2)) {
        currentYR -= dY;
    }
    else if (keysPressed['dn'] && !keysPressed['up'] && currentYR < (height - (paddleHeight / 2))) {
        currentYR += dY;
    }
}

function printKeysDown() {
    console.log('w:    ' + keysPressed['w'] +
              '\ns:    ' + keysPressed['s'] +
              '\nup:   ' + keysPressed['up'] +
              '\ndown: ' + keysPressed['dn']);
}

window.addEventListener('keydown', function(e) {
    e.preventDefault();
    switch (e.key) {
        case 'w':
            keysPressed['w'] = true;
            break;
        case 's':
            keysPressed['s'] = true;
            break;
        case 'ArrowUp':
            keysPressed['up'] = true;
            break;
        case 'ArrowDown':
            keysPressed['dn'] = true;
            break;
        default:
            break;
    }
}, false);

window.addEventListener('keyup', function(e) {
    e.preventDefault();
    switch (e.key) {
        case 'w':
            keysPressed['w'] = false;
            break;
        case 's':
            keysPressed['s'] = false;
            break;
        case 'ArrowUp':
            keysPressed['up'] = false;
            break;
        case 'ArrowDown':
            keysPressed['dn'] = false;
            break;
        default:
            break;
    }
}, false);

setInterval(function() {
    updatePaddlePos();
    pong_ball.moveBall();
}, 20);

setInterval(function() {
    drawPong(currentYL, currentYR);
}, 1000/144);

window.addEventListener('DOMContentLoaded', function() {
    drawPong(currentYL, currentYR);
}, false);
window.addEventListener('resize', function() {
    drawPong(currentYL, currentYR);
}, false);