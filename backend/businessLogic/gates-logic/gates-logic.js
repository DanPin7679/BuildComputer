import { map2Arrays } from "./utilitiesFunctions.js";

export const andGate = (a, b) => a == 1 && b == 1;
export const orGate = (a, b) => a == 1 || b == 1;
export const notGate = (a) => (a == 1 ? false : true);
export const XorGate = (a, b) => (a == 0 && b == 1) || (a == 1 && b == 0);
export const NandGate = (a, b) => (a == 1 && b == 1 ? false : true);
export const MuxGate = (a, b, sel) => (sel == 0 ? a : b);
export const DMuxGate = (input, sel) =>
  sel == 0 ? { a: input, b: 0 } : { a: 0, b: input };

export const nBitsAndGate = (as, bs) => map2Arrays(as, bs, andGate);
export const nBitsOrGate = (as, bs) => map2Arrays(as, bs, orGate);
export const nBitsXorGate = (as, bs) => map2Arrays(as, bs, XorGate);
export const nBitsNandGate = (as, bs) => map2Arrays(as, bs, NandGate);

export const nBitsNotGate = (as) => as.map((a) => notGate(a));
export const nBitsMuxGate = (sel) => (as, bs) =>
  map2Arrays(as, bs, MuxGate(sel));
