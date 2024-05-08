const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  products: [{
    name: String,
    price: Number,
    quantity: Number
  }],
  total: Number
});

module.exports = mongoose.model('Order', orderSchema);
