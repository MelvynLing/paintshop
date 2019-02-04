
    
let inputColor = document.getElementById("base")
let inputSize = document.getElementById("sizing")

console.log(inputColor.value)
console.log(inputSize.value)

const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
 
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  // console.log(e);
  ctx.strokeStyle = inputColor.value;
  ctx.lineWidth = inputSize.value;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);