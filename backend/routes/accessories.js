// routes/accessories.js
const express = require('express');
const router = express.Router();
const Accessory = require('../models/accessory');

router.post("/add", async (req, res) => {
  try {
    // Add accessories
    await addAccessory("AirPods Pro", 249, "example.png");
    await addAccessory("Magic Keyboard", 299, "example.png");
    await addAccessory("Apple Watch Series 9", 399, "example.png");

    res.status(200).send({"msg": "All accessories inserted to DB"});
  } catch (err) {
    console.error(err);
    res.status(500).send({"msg": "Failed to insert accessories to DB"});
  }
});

router.get('/', async (req, res) => {
    try {
      const accessories = await Accessory.find();
      res.json(accessories);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });

async function addAccessory(name, price, image) {
  const accessory = new Accessory({ name, price, image });
  await accessory.save();
}

module.exports = router;
