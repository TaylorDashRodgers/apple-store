// routes/computers.js
const express = require('express');
const router = express.Router();
const Computer = require('../models/computer');

router.post("/add", async (req, res) => {
  try {
    // Add computers
    await addComputer("MacBook Air", 999, "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034");
    await addComputer("MacBook Pro 13\"", 1299, "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-mbp16-m2-spacegray-202303?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1680103637521");
    await addComputer("MacBook Pro 16\"", 1999, "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-mbp16-m2-spacegray-202303?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1680103637521");

    res.status(200).send({"msg": "All computers inserted to DB"});
  } catch (err) {
    console.error(err);
    res.status(500).send({"msg": "Failed to insert computers to DB"});
  }
});

router.get('/', async (req, res) => {
    try {
      const computers = await Computer.find();
      res.json(computers);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });

async function addComputer(name, price, image) {
  const computer = new Computer({ name, price, image });
  await computer.save();
}

module.exports = router;
