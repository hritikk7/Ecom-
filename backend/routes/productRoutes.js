const express = require('express');
const router = express.Router();
const {getAllProduct, getProductById} = require('../controller/productControllers')
//@desc GET all products from db
//@route GET/api/products
//@access  Public

router.get('/', getAllProduct);

//@desc GET a products by id db
//@route GET/api/products/:id
//@access  Public

router.get('/:id', getProductById);

module.exports = router;
