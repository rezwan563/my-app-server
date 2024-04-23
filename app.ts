const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const upload = require("./upload");
const port = 3000;
import { Response, Request } from "express";

app.use(cors());
app.use(upload.any());

let seriolNo = 0;
app.get("/", (req: Request, res: Response) => {
  res.send("server on");
});

app.post("/url", express.json(), (req: Request, res: Response) => {
  const message = "new route yay!";
  try {
    console.log("req.body\n", req.body);
    // console.log("req.file\n", req.files);
  } catch (error) {
    console.log(error);
  }

  res.send({ status: "success", message: "you've reached your destination" });
});

const cat = [{ name: "walter", age: 8 }];

const people = [
  { name: "John", gender: "Male", age: 30, location: "New York" },
  { name: "Alice", gender: "Female", age: 25, location: "London" },
  { name: "Michael", gender: "Male", age: 35, location: "Los Angeles" },
  { name: "Emily", gender: "Female", age: 28, location: "Paris" },
  { name: "David", gender: "Male", age: 40, location: "Sydney" },
];

app.get("/page-one", (req: Request, res: Response) => {
  const query = req.query;
  console.log(query)
  console.log("query\n", query);
  if (query.data === 'cat') {
    res.send(cat);
  } else {
    res.send(people);
  }
});
app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
