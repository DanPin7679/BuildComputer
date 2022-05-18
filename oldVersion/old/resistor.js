class Resistor {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 200;
    this.y = 50;
    this.w = 50;
    this.h = 15;
    this.color = "white";
  }
  draw() {
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 5;
    this.ctx.beginPath();
    let single = this.w / 5;
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x + single, this.y - 2 * this.h);
    this.ctx.lineTo(this.x + 2 * single, this.y);
    this.ctx.lineTo(this.x + 3 * single, this.y - 2 * this.h);
    this.ctx.lineTo(this.x + 4 * single, this.y);
    this.ctx.lineTo(this.x + 5 * single, this.y - 2 * this.h);
    this.ctx.stroke();
  }
}

export { Resistor };
