const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

const cw = canvas.width;
const ch = canvas.height;

const size = 20;

ctx.fillStyle = 'lime';
ctx.fillRect((cw/2) - size/2,(ch/2) - size/2, size ,size);

