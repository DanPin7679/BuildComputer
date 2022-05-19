import express, { request } from "express";
import getLogicGateOutput from "../controllers/logicGates.js";

const logicGates_router = express.Router();

logicGates_router.route("/").post((req, res) => {
  // let answer = getCalculationResult(
  //   req.body.arg1,
  //   req.body.arg2,
  //   req.body.arg3
  // );
  res.send({ body: getLogicGateOutput(req.body) });
});

export default logicGates_router;
