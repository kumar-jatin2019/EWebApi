// routes/productRoutes.js
const express = require('express');
// const router = express.Router();
const router = express();
const productController = require('../controllers/productController');
// Route to get all products
router.get('/products', productController.getAllProducts);

module.exports = router;


