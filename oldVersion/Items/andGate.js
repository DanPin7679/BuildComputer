class AndGate {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 300;
    this.y = 20;
    this.width = 100;
    this.height = 50;
    this.color = "#FF1010";
    this.isDragging = false;
    this.isAttaching = false;
    this.connectingPoint = [
      { x: this.x + this.width / 2, y: this.y },
      { x: this.x + this.width, y: this.y + this.height / 2 },
      { x: this.x + this.width / 2, y: this.y + this.height },
      { x: this.x, y: this.y + this.height / 2 },
    ];
  }
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height); // this.ctx.beginPath();

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
  update(dx, dy) {
    this.x = dx;
    this.y = dy;
    this.connectingPoint = [
      { x: this.x + this.width / 2, y: this.y },
      { x: this.x + this.width, y: this.y + this.height / 2 },
      { x: this.x + this.width / 2, y: this.y + this.height },
      { x: this.x, y: this.y + this.height / 2 },
    ];
  }
}

export { AndGate };
