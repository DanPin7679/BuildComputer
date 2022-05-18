import { Batery, AndGate, Wire } from "./Items/itemsModule.js";

export const canvas = () => {
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
  var connectok = false;
  var startX;
  var startY;

  const dragableObject = [];
  const wires = [];
  let batery = new Batery(ctx);
  let andGate = new AndGate(ctx);
  dragableObject.push(batery);
  dragableObject.push(andGate);

  canvas.onmousedown = myDown;
  canvas.onmouseup = myUp;
  canvas.onmousemove = myMove;

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    dragableObject.map((object) => {
      object.draw();
    });
    wires.map((wire) => {
      wire.draw();
    });
    window.requestAnimationFrame(animate);
  };

  animate();

  function myDown(e) {
    e.preventDefault();
    e.stopPropagation();
    var mx = parseInt(e.clientX - offsetX);
    var my = parseInt(e.clientY - offsetY);
    dragok = false;
    connectok == false;
    for (var i = 0; i < dragableObject.length; i++) {
      var r = dragableObject[i];
      if (
        mx > r.x &&
        mx < r.x + r.width &&
        my > r.y &&
        my < r.y + r.height &&
        r.isAttaching == false
      ) {
        dragok = true;
        r.isDragging = true;
      } else if (r.isAttaching == true) {
        connectok = true;
        const aCoord = { x: r.isConnectedPoint.x, y: r.isConnectedPoint.y };
        let newWire = new Wire(ctx, aCoord, aCoord);
        newWire.isConnecting = true;
        wires.push(newWire);
      }
    }
    startX = mx;
    startY = my;
  }

  function myUp(e) {
    e.preventDefault();
    e.stopPropagation();
    dragok = false;
    connectok = false;
    for (var i = 0; i < dragableObject.length; i++) {
      dragableObject[i].isDragging = false;
    }
    wires.map((wire) => (wire.isConnecting = false));
  }

  function myMove(e) {
    e.preventDefault();
    e.stopPropagation();
    var mx = parseInt(e.clientX - offsetX);
    var my = parseInt(e.clientY - offsetY);
    var dx = mx - startX;
    var dy = my - startY;
    if (dragok) {
      for (var i = 0; i < dragableObject.length; i++) {
        var r = dragableObject[i];
        if (r.isDragging) {
          r.update(mx, my);
        }
      }

      animate();
      startX = mx;
      startY = my;
    } else if (connectok) {
      // console.log(connectok);
      wires.map((wire) => {
        if (wire.isConnecting == true) {
          wire.update({ x: mx, y: my });
        }
      });
    } else {
      myOver(e);
    }
  }

  function myOver(e) {
    e.preventDefault();
    e.stopPropagation();
    var mx = parseInt(e.clientX - offsetX);
    var my = parseInt(e.clientY - offsetY);
    const delta = 10;

    for (var i = 0; i < dragableObject.length; i++) {
      var object = dragableObject[i];

      if (dragableObject[i].connectingPoint) {
        for (var j = 0; j < dragableObject[i].connectingPoint.length; j++) {
          const point = dragableObject[i].connectingPoint[j];

          if (
            mx > point.x - delta &&
            mx < point.x + delta &&
            my > point.y - delta &&
            my < point.y + delta
          ) {
            object.isAttaching = true;
            dragableObject[i].isConnectedPoint = point;
          } else {
            object.isAttaching = false;
          }
          animate();
          if (object.isAttaching == true) break;
        }
      }
    }
  }
};
