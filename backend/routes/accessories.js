// routes/accessories.js
const express = require('express');
const router = express.Router();
const Accessory = require('../models/accessory');

router.post("/add", async (req, res) => {
  try {
    // Add accessories
    await addAccessory("AirPods Pro", 249, "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MUYG3_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1701189162296");
    await addAccessory("Magic Keyboard", 299, "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK2A3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1628010471000");
    await addAccessory("Apple Watch Series 9", 399, "https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/article/Apple-Watch-S9-midnight-aluminum-Sport-Loop-midnight-230912_inline.jpg.large.jpg");

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
