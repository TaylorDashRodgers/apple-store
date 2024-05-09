const express = require('express');
const router = express.Router();
const phonesRouter = require('./phones');
const computersRouter = require('./computers');
const accessoriesRouter = require('./accessories');
const ordersRouter = require('./orders');

router.use('/phones', phonesRouter);
router.use('/computers', computersRouter);
router.use('/accessories', accessoriesRouter);
router.use('/orders', ordersRouter); 

module.exports = router;
