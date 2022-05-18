class Wire {
  constructor(ctx, aCoord, bCoord) {
    this.ctx = ctx;
    this.aCoord = aCoord;
    this.bCoord = bCoord;
    this.aWireState = "created";
    this.bWireState = "created";
    this.isConnecting = false;
    // this.htmlState = htmlState;
    // this.offset = offset;
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.aCoord.x, this.aCoord.y);
    this.ctx.lineTo(this.bCoord.x, this.bCoord.y);
    this.ctx.strokeStyle = "red";
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
  }
  update(newBCoord) {
    this.bCoord = newBCoord;
  }
}

export { Wire };
