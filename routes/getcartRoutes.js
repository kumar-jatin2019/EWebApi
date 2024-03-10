const express = require('express');
const router = express.Router();
const authenticateUser = require('../controllers/middlewareAuth/auth');
const cartController = require('../controllers/middlewareAuth/getcartController');
router.get('/', authenticateUser, cartController.getCart);
module.exports = router;