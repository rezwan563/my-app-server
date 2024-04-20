const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const upload = require('./upload');
const port = 3000;

app.use(cors());
app.use(upload.any());

let seriolNo = 0;
app.post("/", (req, res) => {
  if (req.body) {
    seriolNo++;
  }
  const message = "message recived";
  const { name, guest, assistance, payment } = req.body;

  const newGuest = `${seriolNo} ${name} ${guest} ${assistance} ${payment}`;
  console.log(newGuest);
  res.json({ message: message });
});

app.post("/url", (req, res) => {
  const message = "new route yay!";
  try {
    
    
    console.log("req.body\n", req.body);
    console.log("req.file\n", req.files);
  } catch (error) {
    console.log(error);
  }

  res.send({ status: "success", message: "you've reached your destination" });
});
app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
