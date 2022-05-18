import { Batery, AndGate } from "./Items/itemsModule.js";

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

export const dragableObject = [];
export const attachableObject = [];
let batery = new Batery(ctx);
let andGate = new AndGate(ctx);
dragableObject.push(batery);
dragableObject.push(andGate);
attachableObject.push(andGate);
// dragableObject.push({
//   x: 75 - 15,
//   y: 50 - 15,
//   width: 100,
//   height: 100,
//   fill: "white",
//   isDragging: false,
// });
// dragableObject.push({
//   x: 75 - 25,
//   y: 50 - 25,
//   width: 100,
//   height: 100,
//   fill: "#ff550d",
//   isDragging: false,
// });
// dragableObject.push({
//   x: 75 - 35,
//   y: 50 - 35,
//   width: 100,
//   height: 100,
//   fill: "#800080",
//   isDragging: false,
// });
// dragableObject.push({
//   x: 75 - 45,
//   y: 50 - 45,
//   width: 100,
//   height: 100,
//   fill: "#0c64e8",
//   isDragging: false,
// });

canvas.onmousedown = myDown;
canvas.onmouseup = myUp;
canvas.onmousemove = myMove;
// canvas.onmousemove = myOver;

console.log(dragableObject);
const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  dragableObject.map((object) => {
    object.draw();
  });
  window.requestAnimationFrame(animate);
};

animate();

function myDown(e) {
  e.preventDefault();
  e.stopPropagation();
  var mx = parseInt(e.clientX);
  var my = parseInt(e.clientY);
  dragok = false;
  for (var i = 0; i < dragableObject.length; i++) {
    var r = dragableObject[i];
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
  for (var i = 0; i < dragableObject.length; i++) {
    dragableObject[i].isDragging = false;
  }
}

function myMove(e) {
  if (dragok) {
    e.preventDefault();
    e.stopPropagation();
    var mx = parseInt(e.clientX);
    var my = parseInt(e.clientY);
    var dx = mx - startX;
    var dy = my - startY;
    for (var i = 0; i < dragableObject.length; i++) {
      var r = dragableObject[i];
      if (r.isDragging) {
        r.update(mx, my);
      }
    }

    animate();
    startX = mx;
    startY = my;
  } else {
    myOver(e);
  }
}

function myOver(e) {
  e.preventDefault();
  e.stopPropagation();
  var mx = parseInt(e.clientX);
  var my = parseInt(e.clientY);
  const delta = 5;

  for (var i = 0; i < attachableObject.length; i++) {
    var object = attachableObject[i];

    for (var j = 0; j < attachableObject[i].connectingPoint.length; j++) {
      const point = attachableObject[i].connectingPoint[j];

      if (
        mx > point.x - delta &&
        mx < point.x + delta &&
        my > point.y - delta &&
        my < point.y + delta
      ) {
        object.isAttaching = true;
      } else {
        object.isAttaching = false;
      }
      animate();
      if (object.isAttaching == true) break;
    }
  }
}
