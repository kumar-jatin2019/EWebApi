// routes/cart.js
const express = require('express');
const router = express.Router();
const authenticateUser = require('../controllers/middlewareAuth/auth');
const deletecartController = require('../controllers/middlewareAuth/deleteController');
router.delete('/', authenticateUser, deletecartController.delete);
module.exports = router;