// routes/computers.js
const express = require('express');
const router = express.Router();
const Computer = require('../models/computer');

router.post("/add", async (req, res) => {
  try {
    // Add computers
    await addComputer("MacBook Air", 999, "example.png");
    await addComputer("MacBook Pro 13\"", 1299, "example.png");
    await addComputer("MacBook Pro 16\"", 1999, "example.png");

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
