// routes/index.js
const express = require('express');
const router = express.Router();
const ProductModel = require('../models/product');

router.post("/phones/add", async (req, res) => {
  try {
    // Add phones
    await addProduct("iPhone 15", 799, "example.png");
    await addProduct("iPhone 15 Pro", 999, "example.png");
    await addProduct("iPhone 15 Pro Max", 1299, "example.png");

    res.status(200).send({"msg": "All phones inserted to DB"});
  } catch (err) {
    console.error(err);
    res.status(500).send({"msg": "Failed to insert phones to DB"});
  }
});

router.post("/computers/add", async (req, res) => {
  try {
    // Add computers
    await addProduct("MacBook Air", 999, "example.png");
    await addProduct("MacBook Pro 13\"", 1299, "example.png");
    await addProduct("MacBook Pro 16\"", 1999, "example.png");

    res.status(200).send({"msg": "All computers inserted to DB"});
  } catch (err) {
    console.error(err);
    res.status(500).send({"msg": "Failed to insert computers to DB"});
  }
});

router.post("/accessories/add", async (req, res) => {
  try {
    // Add accessories
    await addProduct("AirPods Pro", 249, "example.png");
    await addProduct("Magic Keyboard", 299, "example.png");
    await addProduct("Apple Watch Series 9", 399, "example.png");

    res.status(200).send({"msg": "All accessories inserted to DB"});
  } catch (err) {
    console.error(err);
    res.status(500).send({"msg": "Failed to insert accessories to DB"});
  }
});

async function addProduct(name, price, image) {
  // Check if the product already exists
  const existingProduct = await ProductModel.findOne({ name: name });
  if (existingProduct) {
    console.log(`Product ${name} already exists`);
    return; // Exit the function if the product already exists
  }

  // Product doesn't exist, so create and save it
  const productModel = new ProductModel({
    name: name,
    price: price,
    image: image
  });

  await productModel.save();
}

module.exports = router;
