const canvas = /** @type {HTMLCanvasElement} */ (
  document.querySelector("#canvas1")
);
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var BB = canvas.getBoundingClientRect();
var offsetX = BB.left;
var offsetY = BB.top;

var dragok = false;
var startX;
var startY;

var rects = [];
rects.push({
  x: 75 - 15,
  y: 50 - 15,
  width: 100,
  height: 100,
  fill: "white",
  isDragging: false,
});
rects.push({
  x: 75 - 25,
  y: 50 - 25,
  width: 100,
  height: 100,
  fill: "#ff550d",
  isDragging: false,
});
rects.push({
  x: 75 - 35,
  y: 50 - 35,
  width: 100,
  height: 100,
  fill: "#800080",
  isDragging: false,
});
rects.push({
  x: 75 - 45,
  y: 50 - 45,
  width: 100,
  height: 100,
  fill: "#0c64e8",
  isDragging: false,
});

canvas.onmousedown = myDown;
canvas.onmouseup = myUp;
canvas.onmousemove = myMove;

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < rects.length; i++) {
    var r = rects[i];
    ctx.fillStyle = r.fill;
    ctx.fillRect(r.x, r.y, r.width, r.height);
  }
  window.requestAnimationFrame(animate);
};

animate();

function myDown(e) {
  e.preventDefault();
  e.stopPropagation();
  var mx = parseInt(e.clientX - offsetX);
  var my = parseInt(e.clientY - offsetY);
  dragok = false;
  for (var i = 0; i < rects.length; i++) {
    var r = rects[i];
    if (mx > r.x && mx < r.x + r.width && my > r.y && my < r.y + r.height) {
      dragok = true;
      r.isDragging = true;
    }
  }
  startX = mx;
  startY = my;
}

function myUp(e) {
  e.preventDefault();
  e.stopPropagation();
  dragok = false;
  for (var i = 0; i < rects.length; i++) {
    rects[i].isDragging = false;
  }
}

function myMove(e) {
  if (dragok) {
    e.preventDefault();
    e.stopPropagation();
    var mx = parseInt(e.clientX - offsetX);
    var my = parseInt(e.clientY - offsetY);
    var dx = mx - startX;
    var dy = my - startY;
    for (var i = 0; i < rects.length; i++) {
      var r = rects[i];
      if (r.isDragging) {
        r.x += dx;
        r.y += dy;
      }
    }

    animate();
    startX = mx;
    startY = my;
  }
}
