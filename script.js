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
let foodColor = '#ff0000';

let snake = [
    {positionX: 16, positionY:16},
    {positionX: 16, positionY:17},
    {positionX: 16, positionY:18},
    {positionX: 16, positionY:19},
];

let changeDirection = '';
let started = false;

let food = false;

function gameBoard () {
    ctx.fillStyle = boardColor;
    ctx.fillRect(0,0,cw,ch);
}

function square (x, y, color) {

    ctx.fillStyle = color;
    positionX = x * size;
    positionY = y * size;
    ctx.fillRect(positionX, positionY, size, size);

    ctx.strokeStyle = snakeStrokeColor;
    ctx.strokeRect(positionX, positionY, size, size);
}

function drawSnake () {  

   snake.forEach(block => {
    square(block.positionX, block.positionY, snakeColor);
   })

}

function drawFood () {
    if (food === false){
        ctx.fillStyle = foodColor;
        let x =  Math.round(Math.random() * columns) * 20
        let y =  Math.round(Math.random() * rows) * 20
        ctx.fillRect(x, y, size, size);
        food = true
    } else {
        return
    }
}


function checkDriection (e) {
    if (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40) {
        const newDirection = e.keyCode;
        const previousDirection = changeDirection;
        

        if ((newDirection === 37 && previousDirection !== 39) 
            || (newDirection === 39 && previousDirection !== 37)
            || (newDirection === 38 && previousDirection !== 40)
            || (newDirection === 40 && previousDirection !== 38)){
                if (!started) {
                    started = true;
                    setInterval(game, 1000/30);
                }
                changeDirection = newDirection;
            }
    } else {
        return
    }

}

function move() {
    if(!started) return;

    const  firstBlock = {...snake[0]};
    

    if (changeDirection === 37) {
        firstBlock.positionX -= 1;
    } else if (changeDirection === 38) {
        firstBlock.positionY -= 1;
    } else if (changeDirection === 39) {
        firstBlock.positionX += 1;
    } else if (changeDirection === 40) {
        firstBlock.positionY += 1;
    } else {
        return
    }

    snake.pop();

    snake.unshift(firstBlock);

}

function game () {

    gameBoard();
    drawFood(); 
    move();
    drawSnake();
}

document.addEventListener('keydown', checkDriection);

game();

