const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");

canvas.width = 640;
canvas.height = 640;

const cw = canvas.width;
const ch = canvas.height;

const size = 20;

const columns = cw / 20;
const rows = ch / 20;

let positionX = 0;
let positionY = 0;

function game () {

    gameBoard();
    drawSnake();
    drawFood();
    setInterval(move(), 100);
}

function gameBoard () {
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,cw,ch);
}

function drawSnake () {
    ctx.fillStyle = 'green';
    positionX = size * 16;
    positionY = size * 16;
    ctx.fillRect(positionX, positionY, size, size);

    ctx.strokeStyle = 'black'
    ctx.strokeRect(positionX, positionY, size, size);

    ctx.fillStyle = 'lime';
    positionX = size * 16;
    positionY = size * 17;
    ctx.fillRect(positionX, positionY, size, size);

    ctx.strokeStyle = 'black';
    ctx.strokeRect(positionX, positionY, size, size);

    ctx.fillStyle = 'lime';
    positionX = size * 16;
    positionY = size * 18;
    ctx.fillRect(positionX, positionY, size, size);

    ctx.strokeStyle = 'black';
    ctx.strokeRect(positionX, positionY, size, size);
    
}

function drawFood () {
    ctx.fillStyle = 'red';
    let x =  Math.round(Math.random() * columns) * 20
    let y =  Math.round(Math.random() * rows) * 20
    ctx.fillRect(x, y, size, size);
}

function move() {
    ctx.fillStyle = 'lime';
    ctx.fillRect(positionX, positionY , size, size);
    positionY += -1;
}

game()

