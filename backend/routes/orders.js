const express = require('express');
const router = express.Router();
const OrderModel = require('../models/order');

router.post('/', async (req, res) => {
  try {
    const { items } = req.body;

    const orderItems = items.map(item => ({
      name: item.name,
      price: item.price
    }));

    const order = new OrderModel({
      items: orderItems
    });

    await order.save();

    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ message: 'Failed to place order' });
  }
});

module.exports = router;
