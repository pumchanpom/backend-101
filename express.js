const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.end("Busted! You're under arrest!");
});

app.listen(112, () => {
  console.log("Server listening on 112");
});
