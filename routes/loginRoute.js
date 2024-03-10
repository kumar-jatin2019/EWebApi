
const express = require('express');
const router = express();
const loginController = require('../controllers/loginController');

router.post('/login', loginController.loginUser);


module.exports = router;