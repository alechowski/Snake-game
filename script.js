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

let boardColor = '#000000';
let snakeColor = '#35de00';
let snakeStrokeColor = '#008000';
let foodColor = 'ff0000';


function gameBoard () {
    ctx.fillStyle = boardColor;
    ctx.fillRect(0,0,cw,ch);
}

function square (x, y, color) {

    ctx.fillStyle = color;
    positionX = x * size;
    positionY = y * size;
    ctx.fillRect(positionX, positionY, size, size);

}

function drawSnake () {
    ctx.fillStyle = snakeColor;
    positionX = size * 16;
    positionY = size * 16;
    ctx.fillRect(positionX, positionY, size, size);

    ctx.strokeStyle = snakeStrokeColor;
    ctx.strokeRect(positionX, positionY, size, size);

    ctx.fillStyle = snakeColor;
    positionX = size * 16;
    positionY = size * 17;
    ctx.fillRect(positionX, positionY, size, size);

    ctx.strokeStyle = snakeStrokeColor;
    ctx.strokeRect(positionX, positionY, size, size);

    ctx.fillStyle = snakeColor;
    positionX = size * 16;
    positionY = size * 18;
    ctx.fillRect(positionX, positionY, size, size);

    ctx.strokeStyle = snakeStrokeColor;
    ctx.strokeRect(positionX, positionY, size, size);
    
}

function drawFood () {
    ctx.fillStyle = foodColor;
    let x =  Math.round(Math.random() * columns) * 20
    let y =  Math.round(Math.random() * rows) * 20
    ctx.fillRect(x, y, size, size);
}

function move() {

}

function game () {

    gameBoard();
    drawFood();
    // move();
    drawSnake();
}


game()

