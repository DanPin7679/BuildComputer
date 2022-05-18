import tokenizer from "./tokenizer.js";

export const compiler = (text2Compile) => {
  return tokenizer(text2Compile);
};
