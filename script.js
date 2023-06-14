const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");
const displayScore = document.querySelector('.lenght')

canvas.width = 640;
canvas.height = 640;

const cw = canvas.width;
const ch = canvas.height;

let playGame;

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
];

let changeDirection = '';
let started = false;

let food;

let foodPositionX;
let foodPositionY;

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

function createFood () {
   
    let x =  Math.floor(Math.random() * columns) * size;
    let y =  Math.floor(Math.random() * rows) * size;


    food = {
          x: x,
          y: y,
      }
    
      
    foodPositionX = food.x / 20;
    foodPositionY = food.y / 20;
      
    if (snake.some(body => body.positionX === foodPositionX && body.positionY === foodPositionY)) {

        x =  Math.floor(Math.random() * columns) * size;
        y =  Math.floor(Math.random() * rows) * size;


        food = {
            x: x,
            y: y,
        }

        foodPositionX = food.x / 20;
        foodPositionY = food.y / 20;
    }
}

function drawFood () {

        ctx.fillStyle = foodColor;
        ctx.fillRect(food.x, food.y, size, size);

}


function checkDirection (e) {
    if (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40) {
        const newDirection = e.keyCode;
        const previousDirection = changeDirection;
        

        if ((newDirection === 37 && previousDirection !== 39) 
            || (newDirection === 39 && previousDirection !== 37)
            || (newDirection === 38 && previousDirection !== 40)
            || (newDirection === 40 && previousDirection !== 38)){
                if (!started) {
                    started = true;
                    playGame = setInterval(game, 1000/10);;
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



    snake.unshift(firstBlock);


}

function colideBorder () {
    const head = snake[0];
     if ((head.positionX === -1 || head.positionX === columns) || (head.positionY === -1 || head.positionY === rows)){
        alert('game over');
        clearInterval(playGame);
    } else {
        return
    }

}

function colideBody () {
    const snakeBody = [...snake];
    const snakeHead = snakeBody.shift();

    if (snakeBody.some(tail => tail.positionX === snakeHead.positionX && tail.positionY === snakeHead.positionY)){
        alert('game over');
        clearInterval(playGame);
    } else {
        return
    }

}

function collisionEvent () {
    colideBorder()
    colideBody()
}

function eatFood () {
    const head = snake[0];
    if (head.positionX == foodPositionX && head.positionY == foodPositionY) {
        createFood();
    }else {
        snake.pop();
    }
}

function snakeLength () {
    const score = snake.length - 3;
    displayScore.textContent = score;

}

function startingView () {
    
    gameBoard();
    createFood();
    drawFood(); 
    drawSnake();
}

function game () {

    gameBoard();
    drawFood(); 
    eatFood();
    move();
    drawSnake();
    collisionEvent();
    snakeLength();
}




startingView()
document.addEventListener('keydown', checkDirection);