const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");

let lastX = 0;
let lastY = 0;
let drawing = false;

strokeWidth = 1;
direction = true;
let hue = 0;

function sizeCanvas() {
  // canvas.width is differnet to canvas.style.width --   https://stackoverflow.com/questions/4938346/canvas-width-and-height-in-html5/43364730
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
}

endDraw = () => (drawing = false);

function draw(e) {
  if (drawing) {
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.lineWidth = strokeWidth;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    strokeWidth = direction ? strokeWidth + 1 : strokeWidth - 1;
    if (strokeWidth === 100 || strokeWidth === 1) direction = !direction;
    hue++;
  }
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseout", endDraw);
canvas.addEventListener("mousedown", e => {
  drawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});
canvas.addEventListener("mouseup", endDraw);
window.addEventListener("resize", sizeCanvas);

sizeCanvas();
