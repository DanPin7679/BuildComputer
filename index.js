import { compiler } from "./compiler/compiler.js";
import { canvas } from "./hardware-canvas/index.js";

let codeText = document.getElementById("code-text");
let webAssText = document.getElementById("webAssText");

document.getElementById("code-submit").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");
  webAssText.innerHTML = compiler(codeText);
});

canvas();
