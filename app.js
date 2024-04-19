const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

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

app.get(/\/pqr|\/def/, (req, res) => {
  console.log(req.path)
  const apiPath = req.path;
  const apiEndPoint = apiPath.replace('/','');
  console.log('endpoint - ', apiEndPoint)
  const message = "new route yay!";
  console.log(message);
  res.send({status: 'success', message: 'you\'ve reached your destination'});
});
app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
