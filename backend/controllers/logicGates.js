import {
  andGate,
  orGate,
  XorGate,
  notGate,
  NandGate,
  MuxGate,
  DMuxGate,
} from "../businessLogic/gates-logic/gates-logic.js";

const getLogicGateOutput = (reqBody) => {
  console.log(reqBody.gateType);
  switch (reqBody.gateType) {
    case "and" || "And":
      return { gateOutput: andGate(reqBody.a, reqBody.b) };
      break;

    case "or" || "Or":
      return { gateOutput: orGate(reqBody.a, reqBody.b) };
      break;

    case "xor" || "Xor":
      return { gateOutput: XorGate(reqBody.a, reqBody.b) };
      break;

    case "not" || "Not":
      return { gateOutput: notGate(reqBody.a, reqBody.b) };
      break;

    case "nand" || "Nand":
      return { gateOutput: nandGate(reqBody.a, reqBody.b) };
      break;

    case "mux" || "Mux":
      return { gateOutput: MuxGate(reqBody.a, reqBody.b, reqBody.c) };
      break;

    case "dmux" || "DMux" || "Dmux":
      return { gateOutput: DMuxGate(reqBody.a, reqBody.b) };
      break;

    default:
      return { gateOutput: "Gate type does not exist" };
      break;
  }
};

export default getLogicGateOutput;
