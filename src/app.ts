const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const port = 3000;
import { Response, Request } from "express";
import homeRouter from "./modules/home/home.route";

app.use(cors());
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("server is one");
});

app.use('/api/sayhi', homeRouter)

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
