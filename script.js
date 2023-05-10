const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");

canvas.width = 640;
canvas.height = 640;

const cw = canvas.width;
const ch = canvas.height;

const size = 20;

const colls = cw / 20;
const rows = ch / 20;


function game () {

    gameBoard();
    drawSnake();
    drawFood();
}

function gameBoard () {
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,cw,ch);
}

function drawSnake () {
    ctx.fillStyle = 'lime';
    ctx.fillRect((cw/2) - size/2,(ch/2) - size/2, size ,size);
}

function drawFood () {
    ctx.fillStyle = 'red';
    ctx.fillRect(Math.round(Math.random() * colls) * 20, Math.round(Math.random() * rows) * 20, size, size);
}

game()