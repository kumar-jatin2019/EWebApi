// routes/cart.js
const express = require('express');
const router = express.Router();
const authenticateUser = require('../controllers/middlewareAuth/auth');
const cartController = require('../controllers/middlewareAuth/cartController');
router.post('/addToCart', authenticateUser, cartController.addToCart);
module.exports = router;