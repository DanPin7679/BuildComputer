class HtmlState {
  constructor(offset, counter, resistor) {
    this.offset = offset;
    this.counter = counter;
    this.resistor = resistor;
    this.speed = document.getElementById("speed");
    this.on = document.getElementById("on");
    this.mouse = {
      x: 0,
      y: 0,
    };

    on.innerHTML = this.counter.mode == 0 ? "Off" : "On";
    speed.innerHTML = this.counter.speed;
    this.listenControlBtns();
  }

  listenControlBtns() {
    const controlBtns = document.querySelectorAll("button.control-btn");
    controlBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        console.log("in BTNS");
        switch (e.target.id) {
          case "on":
            this.counter.onOffSwitch();
            on.innerHTML = this.counter.mode == 0 ? "Off" : "On";
            break;
          case "manual":
            this.counter.manualState = 1;
            break;
          case "incr":
            this.counter.increaseSpeed();
            speed.innerHTML = this.counter.speed;
            break;
          case "decr":
            this.counter.decreaseSpeed();
            speed.innerHTML = this.counter.speed;
            break;
          default:
            break;
        }
      });
    });
  }
  listenMousemove() {
    window.addEventListener("mousemove", ({ x, y }) => {
      this.mouse.x = x - this.offset.x;
      this.mouse.y = y - this.offset.y;
    });
  }
  dragElement(clientX, clientY) {
    console.log("drag resistor");
    if (
      clientX >= this.resistor.x &&
      clientX < this.resistor.x + this.resistor.w &&
      clientY <= this.resistor.y &&
      clientY > this.resistor.y + this.resistor.h
    ) {
    }
  }
}

// const listItemLED = document.getElementById("LED");
// listItemLED.addEventListener("click", () => {
//   let newWire = new Wire();
//   wires.push(newWire);
// });

export { HtmlState };
