// import express from "express";
const express = require("express");

const app = express();

// GET -- "Hello, World!" in ExpressJS
// app.get("/", (req, res) => {
//   res.end("Hello, World!");
// });

// GET
// wild card >> /:menu
app.get("/:menu", (req, res) => {
  console.log("Request Parameters");
  console.log(req.params);
  const { menu } = req.params; // destructuring assignment
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

// POST

const preOrders = [];

app.post("/pre-orders", (req, res) => {
  // const { menu } = req.params;
  const { menu, size } = req.query;
  console.log("Request Query: ");
  console.log(req.query);
  const preOrder = {
    id: preOrders.length,
    menu: menu,
    size: size,
  };
  preOrders.push(preOrder);
  res
    .status(200)
    .send(
      `Your order id is ${preOrder.id}: ${preOrder.menu} in ${preOrder.size}`
    );
});

// DELETE

app.delete("/pre-orders/:orderId", (req, res) => {
  const { orderId } = req.params;

  const indexOrder = preOrders.findIndex((order) => order.id == orderId);
  if (indexOrder === -1) {
    res.status(404).send(`Order ID ${orderId} is not found.`);
  }
  preOrders[indexOrder] = null;
  res.status(200).send(`Order ID ${orderId} has been cancelled.`);
});

// GET -- Samples

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
