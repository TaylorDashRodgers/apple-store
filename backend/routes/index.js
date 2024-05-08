// // routes/index.js
// const express = require('express');
// const router = express.Router();
// const ProductModel = require('../models/product');
// const Phone = require('../models/phone');
// const Computer = require('../models/computer');

// router.post("/add", async (req, res) => {
//   try {
//     // Add phones
//     await addPhone("iPhone 15", 799, "example.png");
//     await addPhone("iPhone 15 Pro", 999, "example.png");
//     await addPhone("iPhone 15 Pro Max", 1299, "example.png");

//     res.status(200).send({"msg": "All phones inserted to DB"});
//   } catch (err) {
//     console.error(err);
//     res.status(500).send({"msg": "Failed to insert phones to DB"});
//   }
// });

// async function addPhone(name, price, image) {
//   const phone = new Phone({ name, price, image });
//   await phone.save();
// }

// router.post("/add", async (req, res) => {
//   try {
//     // Add computers
//     await addComputer("MacBook Air", 999, "example.png");
//     await addComputer("MacBook Pro 13\"", 1299, "example.png");
//     await addComputer("MacBook Pro 16\"", 1999, "example.png");

//     res.status(200).send({"msg": "All computers inserted to DB"});
//   } catch (err) {
//     console.error(err);
//     res.status(500).send({"msg": "Failed to insert computers to DB"});
//   }
// });

// async function addComputer(name, price, image) {
//   const computer = new Computer({ name, price, image });
//   await computer.save();
// }

// // router.post("/phones/add", async (req, res) => {
// //   try {
// //     // Add phones
// //     await addProduct("iPhone 15", 799, "example.png");
// //     await addProduct("iPhone 15 Pro", 999, "example.png");
// //     await addProduct("iPhone 15 Pro Max", 1299, "example.png");

// //     res.status(200).send({"msg": "All phones inserted to DB"});
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).send({"msg": "Failed to insert phones to DB"});
// //   }
// // });

// // router.post("/computers/add", async (req, res) => {
// //   try {
// //     // Add computers
// //     await addProduct("MacBook Air", 999, "example.png");
// //     await addProduct("MacBook Pro 13\"", 1299, "example.png");
// //     await addProduct("MacBook Pro 16\"", 1999, "example.png");

// //     res.status(200).send({"msg": "All computers inserted to DB"});
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).send({"msg": "Failed to insert computers to DB"});
// //   }
// // });

// // router.post("/accessories/add", async (req, res) => {
// //   try {
// //     // Add accessories
// //     await addProduct("AirPods Pro", 249, "example.png");
// //     await addProduct("Magic Keyboard", 299, "example.png");
// //     await addProduct("Apple Watch Series 9", 399, "example.png");

// //     res.status(200).send({"msg": "All accessories inserted to DB"});
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).send({"msg": "Failed to insert accessories to DB"});
// //   }
// // });

// router.get("/phones", async (req, res) => {
//   try {
//     const phones = await ProductModel.find({ category: "phones" });
//     res.status(200).json(phones);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send({"msg": "Failed to fetch phones from DB"});
//   }
// });

// router.get("/computers", async (req, res) => {
//   try {
//     const computers = await ProductModel.find({ category: "computers" });
//     res.status(200).json(computers);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send({"msg": "Failed to fetch computers from DB"});
//   }
// });

// router.get("/accessories", async (req, res) => {
//   try {
//     const accessories = await ProductModel.find({ category: "accessories" });
//     res.status(200).json(accessories);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send({"msg": "Failed to fetch accessories from DB"});
//   }
// });

// async function addProduct(name, price, image) {
//   // Check if the product already exists
//   const existingProduct = await ProductModel.findOne({ name: name });
//   if (existingProduct) {
//     console.log(`Product ${name} already exists`);
//     return; // Exit the function if the product already exists
//   }

//   // Product doesn't exist, so create and save it
//   const productModel = new ProductModel({
//     name: name,
//     price: price,
//     image: image
//   });

//   await productModel.save();
// }

// module.exports = router;

// routes/index.js
const express = require('express');
const router = express.Router();
const phonesRouter = require('./phones');
const computersRouter = require('./computers');
const accessoriesRouter = require('./accessories');

router.use('/phones', phonesRouter);
router.use('/computers', computersRouter);
router.use('/accessories', accessoriesRouter);

module.exports = router;
