class Breadboard {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.x = 100;
    this.y = 100;
    this.w = width;
    this.h = height;
    this.color = "white";
    this.colW = this.w / 65;
    this.lineW = this.h / 22;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);

    const courantLines = [
      { type: "neg", lineNb: 1, colNbs: [1, 63] },
      { type: "pos", lineNb: 4, colNbs: [1, 63] },
      { type: "neg", lineNb: 18, colNbs: [1, 63] },
      { type: "pos", lineNb: 21, colNbs: [1, 63] },
    ];

    const courantHoles = [
      { type: "neg", lineNb: 2, colNbs: [1, 63] },
      { type: "pos", lineNb: 3, colNbs: [1, 63] },
      { type: "neg", lineNb: 19, colNbs: [1, 63] },
      { type: "pos", lineNb: 20, colNbs: [1, 63] },
    ];
    const pieceHoles = [5, 6, 7, 8, 9, 13, 14, 15, 16, 17];

    courantLines.map((line) => {
      this.ctx.beginPath();
      this.ctx.moveTo(
        this.x + this.colW * line.colNbs[0],
        this.y + line.lineNb * this.lineW
      );
      this.ctx.lineTo(
        this.x + this.colW * line.colNbs[1],
        this.y + line.lineNb * this.lineW
      );
      this.ctx.strokeStyle = line.type == "pos" ? "red" : "blue";
      this.ctx.lineWidth = 1;
      this.ctx.stroke();
    });

    courantHoles.map((line) => {
      for (let i = line.colNbs[0]; i < line.colNbs[1]; i++) {
        this.ctx.fillStyle = "gray";
        this.ctx.fillRect(
          this.x + this.colW * i,
          this.y + line.lineNb * this.lineW,
          5,
          5
        );
      }
    });
    pieceHoles.map((line) => {
      for (let i = 1; i < 63; i++) {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(
          this.x + this.colW * i,
          this.y + line * this.lineW,
          5,
          5
        );
      }
    });

    this.ctx.beginPath();
    this.ctx.moveTo(this.x + 1 * this.colW, this.y + 11 * this.lineW);
    this.ctx.lineTo(this.x + 63 * this.colW, this.y + 11 * this.lineW);
    this.ctx.strokeStyle = "gray";
    this.ctx.lineWidth = 10;
    this.ctx.stroke();
  }

  //   update() {
  //     ctx.beginPath();
  //     ctx.moveTo(this.x, this.y);
  //     ctx.lineTo(this.x + this.w / 2, this.y + this.h);
  //     ctx.lineTo(this.x - this.w / 2, this.y + this.h);
  //     ctx.fillStyle = this.color;
  //     ctx.fill();
  //   }
}

export { Breadboard };
