const express = require('express');
const router = express.Router();
const phonesRouter = require('./phones');
const computersRouter = require('./computers');
const accessoriesRouter = require('./accessories');
const ordersRouter = require('./orders'); // Add this line

router.use('/phones', phonesRouter);
router.use('/computers', computersRouter);
router.use('/accessories', accessoriesRouter);
router.use('/orders', ordersRouter); // Add this line

module.exports = router;
