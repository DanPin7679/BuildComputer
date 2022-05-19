import express from "express";
import bodyParser from "body-parser";

import logicGates_router from "./routes/logicGates.js";
import findAllPath from "./routes/findAllPaths.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello from Build my computer Backend");
});

app.use("/api/logicGates", logicGates_router);
app.use("/api/findAllPaths", findAllPath);

app.listen(PORT, () => console.log("Server listening on Port 3000"));
