class Counter {
  constructor() {
    this.mode = 0;
    this.state = 0;
    this.count = 0;
    this.speed = 100;
    this.elapseTime = 10;
    this.manualState = 0;
  }

  increment() {
    this.state = 0;
    // console.log(this.manualState);
    if (this.mode == 1) {
      this.count++;
      if (
        this.count % this.speed >= 0 &&
        this.count % this.speed < this.elapseTime
      ) {
        this.state = 1;
      }
    } else if (this.manualState > 0) {
      this.state = 1;
      this.manualState++;
      if (this.manualState > this.elapseTime) this.manualState = 0;
    }
  }

  increaseSpeed() {
    this.speed -= 10;
  }

  decreaseSpeed() {
    this.speed += 10;
  }

  onOffSwitch() {
    if (this.mode == 0) {
      this.mode = 1;
    } else {
      this.mode = 0;
      this.state = 0;
    }
  }
}

export { Counter };
