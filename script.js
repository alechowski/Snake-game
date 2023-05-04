const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");

const canvasWidth = 800;
const canvasHeight = 800;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

const square = 20;

ctx.fillStyle = 'lime';
ctx.fillRect((canvasHeight/2) - square/2,(canvasWidth/2) - square/2, square ,square);

