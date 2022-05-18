// import { writeFileSync } from "fs";
import {
  isLetter,
  isWhitespace,
  isNumber,
  isParenthesis,
  isQuote,
  isOperator,
} from "./identify.js";

const tokenizer = (input) => {
  const tokens = [];
  let cursor = 0;

  while (cursor < input.length) {
    const character = input[cursor];

    if (isParenthesis(character)) {
      tokens.push({
        type: "Parenthesis",
        value: character,
      });
      cursor++;
      continue;
    }

    if (isOperator(character)) {
      tokens.push({
        type: "Operator",
        value: character,
      });
      cursor++;
      continue;
    }

    if (isWhitespace(character)) {
      cursor++;
      continue;
    }

    if (isNumber(character)) {
      let number = character;

      while (isNumber(input[++cursor])) {
        number += input[cursor];
      }

      tokens.push({
        type: "Number",
        value: parseInt(number, 10),
      });

      continue;
    }

    if (isLetter(character)) {
      let symbol = character;

      while (isLetter(input[++cursor])) {
        symbol += input[cursor];
      }

      tokens.push({
        type: "Name",
        value: symbol,
      });

      continue;
    }

    if (isQuote(character)) {
      let string = "";

      while (!isQuote(input[++cursor])) {
        string += input[cursor];
      }

      tokens.push({
        type: "String",
        value: string,
      });

      cursor++;
      continue;
    }
    console.log(character);
    throw new Error(`${character} is not valid`);
  }

  //   writeFileSync(
  //     "src/compile-files/tokens.json",
  //     JSON.stringify(tokens),
  //     function (err) {
  //       if (err) throw err;
  //       console.log("Tokens compile!!");
  //     }
  //   );
  console.log(tokens);
  return "tokens";
};

export default tokenizer;
