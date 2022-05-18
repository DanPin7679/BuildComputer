class Batery {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 300;
    this.y = ctx.canvas.height / 2;
    this.width = 40;
    this.height = 60;
    this.color = "gray";
    this.isDragging = false;
    this.isAttaching = false;
    this.connectingPoint = [
      { x: this.x + this.width / 2, y: this.y },
      { x: this.x + this.width / 2, y: this.y + this.height },
    ];
    this.isConnectedPoint = {};
  }
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.fillRect(this.x + this.width / 3, this.y - 5, this.width / 3, 5);

    if (this.isAttaching == true) {
      this.connectingPoint.map((point) => {
        this.ctx.fillStyle = "#606090";
        this.ctx.beginPath();
        this.ctx.arc(point.x, point.y, 5, 0, Math.PI * 2, true);
        this.ctx.fill();
        this.ctx.closePath();
      });
    }
  }
}

export { Batery };
