// const wireStates = () => {
//   beingCreatedWithDrag = () => {
//     "beingCreatedWithDrag";
//   };
// };

class Wire {
  constructor(ctx, aCoord, bCoord, htmlState, offset) {
    this.ctx = ctx;
    this.aCoord = aCoord;
    this.bCoord = bCoord;
    this.aWireState = "created";
    this.bWireState = "created";
    this.htmlState = htmlState;
    this.offset = offset;

    console.log(aCoord, bCoord);
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.aCoord.x, this.aCoord.y);
    this.ctx.lineTo(this.bCoord.x, this.bCoord.y);
    this.ctx.strokeStyle = "red";
    this.ctx.lineWidth = 5;
    this.ctx.stroke();

    this.ctx.fillStyle = "#707090";
    this.ctx.beginPath();
    if (this.aWireState != "created") {
      this.ctx.arc(this.aCoord.x, this.aCoord.y, 7, 0, Math.PI * 2, true);
      this.ctx.fill();
      if (this.aWireState == "beingCreatedWithDrag") this.drag("A");
    }
    if (this.bWireState != "created") {
      this.ctx.arc(this.bCoord.x, this.bCoord.y, 7, 0, Math.PI * 2, true);
      this.ctx.fill();
      if (this.bWireState == "beingCreatedWithDrag") this.drag("B");
    }
  }
  drag(coordName) {
    this.htmlState.listenMousemove();
    const coord = {
      x: this.htmlState.mouse.x,
      y: this.htmlState.mouse.y,
    };
    if (coordName == "A") {
      this.aCoord = coord;
    } else {
      this.bCoord = coord;
    }
  }
}

class Wires {
  constructor(ctx) {
    this.ctx = ctx;
    this.wires = [];
  }

  addWire(aX, aY, bX, bY) {
    let newWire = new Wire(this.ctx, { x: aX, y: aY }, { x: bX, y: bY });
    this.wires.push(newWire);
  }

  addWireWithDraging(htmlState, offset) {
    let newWire = new Wire(
      this.ctx,
      { x: 10, y: 10 },
      { x: 50, y: 50 },
      htmlState,
      offset
    );
    this.wires.push(newWire);
    newWire.aWireState = "beingCreatedWithDrag";
    newWire.bWireState = "waitingCreatedWithDrag";
  }
}

export { Wires };
