class Clock {
  constructor(ctx, counter) {
    this.ctx = ctx;
    this.counter = counter;
    this.x = 100;
    this.y = 10;
    this.w = 75;
    this.h = 75;
    this.color = "#707090";
  }
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);

    this.ctx.beginPath();
    this.ctx.arc(
      this.x + this.w / 2,
      this.y + this.h / 2,
      15,
      0,
      Math.PI * 2,
      true
    );

    if (this.counter.state == 1) {
      this.ctx.fillStyle = "red";
      this.ctx.fill();
    } else {
      this.ctx.fillStyle = "white";
      this.ctx.fill();
    }
  }
}

export { Clock };
