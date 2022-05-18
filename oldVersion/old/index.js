import {
  Breadboard,
  Clock,
  Wires,
  Batery,
  Resistor,
} from "../Items/itemsModule.js";
import { Counter } from "../FlowLogic/counter.js";
import { HtmlState } from "../HtmlRendering/htmlRendering.js";

const canvas = /** @type {HTMLCanvasElement} */ (
  document.querySelector("#canvas1")
);
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let rect = canvas.getBoundingClientRect();
const offset = { x: rect.left, y: rect.top };
console.log(offset);

let counter = new Counter();
// let breadBoard = new Breadboard(ctx, canvas.width * 0.9, canvas.height * 0.45);
let clock = new Clock(ctx, counter);
let batery = new Batery(ctx);
let wires = new Wires(ctx);
let resistor = new Resistor(ctx);
let htmlState = new HtmlState(offset, counter, resistor);
wires.addWireWithDraging(htmlState, offset);

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  clock.draw();
  resistor.draw();
  batery.draw();
  // leds.map((led) => {
  //   led.draw();
  // });
  // wires.wires.map((wire) => {
  //   wire.draw();
  // });
  counter.increment();
  window.requestAnimationFrame(animate);
};
animate();

const triggerMouseDown = () => {
  document.addEventListener("mousedown", ({ clientX, clientY }) => {
    htmlState.dragElement(clientX, clientY);
  });
};
triggerMouseDown();
