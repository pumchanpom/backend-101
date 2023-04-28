// const express = require("express");
import express from "express";
const app = express();

// app.get("/", (req, res) => {
//   res.end("Hello, World!");
// });

// wild card >> /:menu
app.get("/:menu", (req, res) => {
  console.log("Request Parameter");
  console.log(req.params);
  const { menu } = req.params;
  const chickenRice = {
    rice: "greasy rice",
  };
  if (menu === "chicken-rice") {
    chickenRice.meat = "Hainanese chicken";
    chickenRice.sauce = ["brown", "red"];
  } else if (menu === "fried-chicken-rice") {
    chickenRice.meat = "fried chicken";
    chickenRice.sauce = ["black", "white"];
  } else {
    res
      .status(404)
      .send(`Please accept our apology. We are no longer serving ${menu}`);
  }
  res.send(chickenRice);
});

// app.get("/chicken-rice", (req, res) => {
//   const chickenRice = {
//     rice: "greasy rice",
//     meat: "Hainanese chicken",
//     sauce: ["red", "white", "black"],
//   };
//   res.send(chickenRice); // status 200
//   // res.status(404).end(); // status 400: Not Found
// });

// app.get("/fried-chicken-rice", (req, res) => {
//   const friedChickenRice = {
//     rice: "greasy rice",
//     meat: "fried chicken",
//     sauce: ["red", "black", "brown"],
//   };
//   res.send(friedChickenRice); // status 200
//   // res.status(404).end(); // status 400: Not Found
// });

app.listen(8080, () => {
  console.log("Server listening on 8080");
});
