const express = require('express');
const router = express.Router();
const OrderModel = require('../models/order');

router.post('/', async (req, res) => {
    try {
        const { products } = req.body; // Expect 'products' in req.body

        // Verify that 'products' exists and is an array
        if (!Array.isArray(products)) {
            return res.status(400).json({ message: 'Invalid order data' });
        }

        // Create an array of order items from the products data
        const orderItems = products.map(item => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity || 1, // Default quantity to 1 if not specified
        }));

        // Calculate the total cost of the order
        const total = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        // Create a new order document
        const order = new OrderModel({
            products: orderItems,
            total
        });

        // Save the order to the database
        await order.save();

        res.status(201).json({ message: 'Order placed successfully', order });
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).json({ message: 'Failed to place order' });
    }
});

module.exports = router;
