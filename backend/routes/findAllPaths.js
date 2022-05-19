import express, { request } from "express";
// import findAllPath from "../controllers/findAllPath.js";

const findAllPaths_router = express.Router();

findAllPaths_router.route("/").post((req, res) => {
  // let answer = getCalculationResult(
  //   req.body.arg1,
  //   req.body.arg2,
  //   req.body.arg3
  // );
  res.send({ body: "findAllPath test2" });
});

export default findAllPaths_router;
