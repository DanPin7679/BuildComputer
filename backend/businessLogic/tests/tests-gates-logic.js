import {
  andGate,
  orGate,
  XorGate,
  notGate,
  NandGate,
  MuxGate,
  DMuxGate,
} from "../gates-logic/gates-logic.js";

export const testsGatesLogics = () => {
  let tests = [];
  tests.push({ name: "Nand => 0-0", result: nandGate(0, 0) == 1 });
  tests.push({ name: "Nand => 1-0", result: nandGate(1, 0) == 1 });
  tests.push({ name: "Nand => 0-1", result: nandGate(0, 1) == 1 });
  tests.push({ name: "Nand => 1-0", result: nandGate(1, 1) == 0 });

  tests.push({ name: "Not => 0", result: notGate(0) == 1 });
  tests.push({ name: "Not => 1", result: notGate(1) == 0 });

  tests.push({ name: "0 and 0", result: andGate(0, 0) == 0 });
  tests.push({ name: "1 and 0", result: andGate(1, 0) == 0 });
  tests.push({ name: "0 and 1", result: andGate(0, 1) == 0 });
  tests.push({ name: "1 and 1", result: andGate(1, 1) == 1 });

  tests.push({ name: "0 or 0", result: orGate(0, 0) == 0 });
  tests.push({ name: "1 or 0", result: orGate(1, 0) == 1 });
  tests.push({ name: "0 or 1", result: orGate(0, 1) == 1 });
  tests.push({ name: "1 or 0", result: orGate(1, 1) == 1 });

  tests.push({ name: "Xor => 0-0", result: XorGate(0, 0) == 0 });
  tests.push({ name: "Xor => 1-0", result: XorGate(1, 0) == 1 });
  tests.push({ name: "Xor => 0-1", result: XorGate(0, 1) == 1 });
  tests.push({ name: "Xor => 1-0", result: XorGate(1, 1) == 0 });

  tests.push({
    name: "Multiplexor => 0-0-0",
    result: MuxGate(0, 0, 0) == 0,
  });
  tests.push({
    name: "Multiplexor => 0-1-0",
    result: MuxGate(0, 1, 0) == 0,
  });
  tests.push({
    name: "Multiplexor => 1-0-0",
    result: MuxGate(1, 0, 0) == 1,
  });
  tests.push({
    name: "Multiplexor => 1-1-0",
    result: MuxGate(1, 1, 0) == 1,
  });
  tests.push({
    name: "Multiplexor => 0-0-1",
    result: MuxGate(0, 0, 1) == 0,
  });
  tests.push({
    name: "Multiplexor => 0-1-1",
    result: MuxGate(0, 1, 1) == 1,
  });
  tests.push({
    name: "Multiplexor => 1-0-1",
    result: MuxGate(1, 0, 1) == 0,
  });
  tests.push({
    name: "Multiplexor => 1-1-1",
    result: MuxGate(1, 1, 1) == 1,
  });
  tests.push({
    name: "Demultiplexor1 => 0-0",
    result: DMuxGate(0, 0) == 0,
  });
  tests.push({
    name: "Demultiplexor1 => 1-0",
    result: DMuxGate(1, 0) == 1,
  });
  tests.push({
    name: "Demultiplexor1 => 0-1",
    result: DMuxGate(0, 1) == 0,
  });
  tests.push({
    name: "Demultiplexor1 => 1-1",
    result: DMuxGate(1, 1) == 0,
  });

  const initialValue = 1;
  const isAllPassed = tests.reduce((previousValue, currentValue) => {
    if (currentValue.result == false) {
      console.log("Test " + currentValue.name + " failed");
      if (previousValue == 1) {
        return 0;
      }
    }
    return previousValue;
  }, initialValue);

  if (isAllPassed) {
    console.log("ALL PASSED");
  } else {
    console.log("SOME FAILED");
  }
};

testsGatesLogics();
