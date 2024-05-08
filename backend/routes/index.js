// routes/index.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Order = require('../models/Order');

// Get all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new product
router.post('/products', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Other CRUD routes for products and orders can be added here

module.exports = router;