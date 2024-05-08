// routes/phones.js
const express = require('express');
const router = express.Router();
const Phone = require('../models/phone');

router.post("/add", async (req, res) => {
  try {
    // Add phones
    await addPhone("iPhone 15", 799, "example.png");
    await addPhone("iPhone 15 Pro", 999, "example.png");
    await addPhone("iPhone 15 Pro Max", 1299, "example.png");

    res.status(200).send({"msg": "All phones inserted to DB"});
  } catch (err) {
    console.error(err);
    res.status(500).send({"msg": "Failed to insert phones to DB"});
  }
});

router.get('/', async (req, res) => {
  try {
    const phones = await Phone.find();
    res.json(phones);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

async function addPhone(name, price, image) {
  const phone = new Phone({ name, price, image });
  await phone.save();
}

module.exports = router;
