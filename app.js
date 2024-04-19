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
if(req.body){
    seriolNo++;
}
const message = "message recived";
const {name, guest, assistance, payment} = req.body;

const newGuest = `${seriolNo} ${name} ${guest} ${assistance} ${payment}`;
console.log(newGuest);
 fs.writeFile("./test.txt", `\n${newGuest}`, {flag: 'a+'}, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 
  console.log("body\n", req.body);
  console.log(message);
  res.json({ message: message });
});

app.get("/abc", (req, res) => {
  const message = "new route yay!";
  console.log(message);
  res.send(message);
});
app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
