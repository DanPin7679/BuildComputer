import { compiler } from "./compiler/compiler.js";

let codeText = document.getElementById("code-text");
let webAssText = document.getElementById("webAssText");

document.getElementById("code-submit").addEventListener("click", (e) => {
  e.preventDefault();
  webAssText.innerHTML = compiler(codeText.value);
});
