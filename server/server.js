const express = require("express");
const path = require("path");

const app = express();

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "app.html"));
});

app.use(express.static(path.join(__dirname, "static")));

app.listen(3000, () => {
  console.log("Listening on port 3000.");
});
