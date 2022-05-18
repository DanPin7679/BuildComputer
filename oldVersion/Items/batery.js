class Batery {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 300;
    this.y = ctx.canvas.height / 2;
    this.width = 40;
    this.height = 60;
    this.color = "gray";
    this.isDragging = false;
  }
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.fillRect(this.x + this.width / 3, this.y - 5, this.width / 3, 5);
  }
}

export { Batery };
