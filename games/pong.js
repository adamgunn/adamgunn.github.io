const canvas = document.querySelector('.pong-game');
const width = canvas.width = 1120;
var css_width = width;
const height = canvas.height = width / 16 * 9;
var css_height = height;
const ctx = canvas.getContext('2d');
class Ball {
    ballWidth = 20;
    ballSpeed = 15;
    ballDelta = this.ballSpeed / css_height * height;
    speeds = [-1, 1];
    ballSpeedX = this.ballDelta * this.speeds[(Math.floor(Math.random() * 2))];
    ballSpeedY = this.ballDelta * this.speeds[(Math.floor(Math.random() * 2))];
    waiting = false;
    countdown = 3;
    ballCoords = {
        x: width / 2,
        y: height / 2
    };

    checkIfTouching() {
        if (this.ballCoords.x > width - ((this.ballWidth / 2) + paddleWidth + margin) &&
            this.ballCoords.y <= currentYR + (paddleHeight / 2) &&
            this.ballCoords.y >= currentYR - (paddleHeight / 2)) {
            console.log("right paddle");
            this.ballSpeedX *= -1;
            this.ballSpeedY = ((this.ballCoords.y - currentYR) / (paddleHeight / 2) * this.ballDelta);
        }
        else if (this.ballCoords.x < ((this.ballWidth / 2) + paddleWidth + margin) &&
                 this.ballCoords.y <= currentYL + (paddleHeight / 2) &&
                 this.ballCoords.y >= currentYL - (paddleHeight / 2)) {
            console.log("left paddle");
            this.ballSpeedX *= -1;
            this.ballSpeedY = ((this.ballCoords.y - currentYL) / (paddleHeight / 2) * this.ballDelta);
        }
    }

    countingDown() {
        this.waiting = true;
        this.countdown = 3;
        setTimeout(function() {
            pong_ball.countdown = 2;
        }, 1000);
        setTimeout(function() {
            pong_ball.countdown = 1;
        }, 2000);
        setTimeout(function() {
            pong_ball.countdown = "Go!";
        }, 3000);
        setTimeout(function() {
            pong_ball.waiting = false;
        }, 4000);
    }

    checkWall() {
        if (this.ballCoords.y < (this.ballWidth)) {
            console.log("top wall");
            this.ballSpeedY *= -1;  
        }
        else if (this.ballCoords.y > (height - this.ballWidth)) {
            console.log("bottom wall");
            this.ballSpeedY *= -1;  
        }
        else if (this.ballCoords.x < this.ballWidth) {
            console.log("passed the left");
            rscore++;
            currentYL = height/2;
            currentYR = height/2;
            this.ballSpeedX = this.ballDelta * this.speeds[(Math.floor(Math.random() * 2))];
            this.ballSpeedY = this.ballDelta * this.speeds[(Math.floor(Math.random() * 2))];
            this.ballCoords = {
                x: width / 2,
                y: height / 2
            };
            this.countingDown();
        }
        else if (this.ballCoords.x > (width - this.ballWidth)) {
            console.log("passed the right");
            lscore++;
            currentYL = height / 2;
            currentYR = height / 2;
            this.ballSpeedX = this.ballDelta * this.speeds[(Math.floor(Math.random() * 2))];
            this.ballSpeedY = this.ballDelta * this.speeds[(Math.floor(Math.random() * 2))];
            this.ballCoords = {
                x: width / 2,
                y: height / 2
            };
            this.countingDown();
        }
    }

    moveBall() {
        if (!this.waiting && !paused) {
            this.checkIfTouching();
            this.checkWall();
            this.ballCoords.x += this.ballSpeedX;
            this.ballCoords.y += this.ballSpeedY;
        }
    }

    get ballCoords() {
        return this.ballCoords;
    }

    get ballWidth() {
        return this.ballWidth;
    }

    get waiting() {
        return this.waiting;
    }
}
var pong_ball = new Ball();
const paddleWidth = 20;
const paddleHeight = 200;
const margin = paddleWidth;
var currentYL = height/2;
var currentYR = height/2;
const height_incr = 20;
const winning_pts = 5;
var game_started = false;
var lscore = 0;
var rscore = 0;
var paused = false;
var keysPressed = {
    'w': false,
    's': false,
    'up': false,
    'dn': false
};
drawStartScreen();

function getMouseY(e) {
    var rect = canvas.getBoundingClientRect();
    return (e.clientY - rect.top) / css_height * height;
}

function haveAWinner() {
    if (lscore >= winning_pts) {
        drawBlank();
        game_started = false;
        drawWinner("l");
        return true;
    }
    else if (rscore >= winning_pts) {
        drawBlank();
        game_started = false;
        drawWinner("r");
        return true;
    }
    return false;
}

function updateCanvasWidth() {
    var new_width = Math.min((window.innerWidth - 60), 1120);
    canvas.style.width = new_width + 'px';
    css_width = new_width;
    css_height = canvas.style.height = ((new_width / 16 * 9) + 'px')
    css_height = (new_width / 16 * 9);
}

function drawBlank() {
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
    ctx.fillRect(0, 0, width, height);
}

function drawWinner(winner) {
    switch (winner) {
        case "l":
            console.log("p1 won");
            ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--button-text-color');
            ctx.font = "90px monospace";
            ctx.textAlign = "center";
            ctx.fillText("PLAYER 1 WINS", width / 2, (height / 2) - 50);
            ctx.fillText("CLICK TO PLAY AGAIN", width / 2, (height / 2) + 50);
            game_started = false;
            break;
        case "r":
            console.log("p2 won");
            ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--button-text-color');
            ctx.font = "90px monospace";
            ctx.textAlign = "center";
            ctx.fillText("PLAYER 2 WINS", width / 2, (height / 2) - 50);
            ctx.fillText("CLICK TO PLAY AGAIN", width / 2, (height / 2) + 50);
            game_started = false;
            break;
        default:
            break;
    }
}

function drawPaddles(yL, yR) {
    drawBlank();
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--button-text-color');
    ctx.fillRect(margin, (yL) - (paddleHeight / 2), paddleWidth, paddleHeight);
    ctx.fillRect(width - (margin + paddleWidth), (yR) - (paddleHeight / 2), paddleWidth, paddleHeight);
}

function drawBall(x, y, ballWidth) {
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--button-text-color');
    ctx.textAlign = "center";
    var canvas_x = (x - (ballWidth / 2)); 
    var canvas_y = (y - (ballWidth / 2));
    if (!pong_ball.waiting) {
        ctx.fillRect(canvas_x, canvas_y, ballWidth, ballWidth);
    }
    else {
        ctx.font = '70px monospace';
        ctx.fillText(pong_ball.countdown, (width / 2), height / 2);
    }
    if (paused) {
        ctx.textAlign = "start";
        ctx.font = '30px monospace';
        ctx.fillText("Paused", 15, 40);
    }
}

function drawScores() {
    ctx.font = '30px monospace';
    ctx.textAlign = "center";
    ctx.fillText(lscore + " - " + rscore, (width / 2), 40); 
}

function drawStartScreen() {
    drawBlank();
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--button-text-color');
    ctx.font = "90px monospace";
    ctx.textAlign = "center";
    console.log("printing");
    ctx.fillText("CLICK TO PLAY", width / 2, height / 2);
}

function drawPong(yL, yR) {  
    // console.log('did the window change');
    updateCanvasWidth();

    if (game_started) {
        if (!paused) {
            canvas.style.cursor = "none";
        }
        else {
            canvas.style.cursor = "default";
        }
        if (!haveAWinner()) {
            drawPaddles(yL, yR);
            var coords = pong_ball.ballCoords;
            var x = coords.x;
            var y = coords.y;
            // printKeysDown();
            var width = pong_ball.ballWidth;
            drawBall(x, y, width);
            drawScores();
        }
    } else {
        canvas.style.cursor = "default";
    }
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
    if (!pong_ball.waiting && !paused) {
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
        case ' ':
        case 'Enter':
            if (!pong_ball.waiting) {
                paused = !paused;
            }
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


canvas.addEventListener("click", function(e) {
    e.preventDefault();
    if (!game_started) {
        keysPressed = {
            'w': false,
            's': false,
            'up': false,
            'dn': false
        };
        pong_ball.ballCoords = {
            x: width / 2,
            y: height / 2
        };
        pong_ball.ballSpeedX = pong_ball.ballDelta * pong_ball.speeds[(Math.floor(Math.random() * 2))];
        pong_ball.ballSpeedY = pong_ball.ballDelta * pong_ball.speeds[(Math.floor(Math.random() * 2))];
        paused = false;
        lscore = rscore = 0;
        currentYL = currentYR = height / 2;
        game_started = true;
        pong_ball.countingDown();
    }
}, false);

var updatingPaddles = setInterval(function() {
    if (game_started) {
        updatePaddlePos();
        pong_ball.moveBall();
    }
}, 20);

var drawingPong = setInterval(function() {
    drawPong(currentYL, currentYR);
}, 1000/144);

window.addEventListener('DOMContentLoaded', function() {
    drawPong(currentYL, currentYR);
}, false);
window.addEventListener('resize', function() {
    drawPong(currentYL, currentYR);
}, false);