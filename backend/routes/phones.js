// routes/phones.js
const express = require('express');
const router = express.Router();
const Phone = require('../models/phone');

router.post("/add", async (req, res) => {
  try {
    // Add phones
    await addPhone("iPhone 15", 799, "https://i5.walmartimages.com/seo/Verizon-Apple-iPhone-15-128GB-Yellow_21a6c465-ac48-49c9-8680-34dc85f059eb.439dc8ada37dd1c352c71f2ca2c7d93b.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF");
    await addPhone("iPhone 15 Pro", 999, "https://media.wired.com/photos/6508e654501236bad4a1bd84/1:1/w_1800,h_1800,c_limit/iPhone-15-Pro-Review-Featured-Gear.jpg");
    await addPhone("iPhone 15 Pro Max", 1299, "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/tile/Apple-iPhone-15-Pro-lineup-hero-230912.jpg.news_app_ed.jpg");

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
