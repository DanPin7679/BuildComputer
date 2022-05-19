export const andGate = (a, b) => a == 1 && b == 1;
export const orGate = (a, b) => a == 1 || b == 1;
export const notGate = (a) => (a == 1 ? false : true);
export const XorGate = (a, b) => (a == 0 && b == 1) || (a == 1 && b == 0);
export const NandGate = (a, b) => (a == 1 && b == 1 ? false : true);
export const MuxGate = (a, b, sel) => (sel == 0 ? a : b);
export const DMuxGate = (input, sel) =>
  sel == 0 ? { a: input, b: 0 } : { a: 0, b: input };
