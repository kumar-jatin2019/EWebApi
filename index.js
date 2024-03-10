
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/User-system");
const express = require("express");
const app = express();
const routesRegister = require('./routes/usersRoute');
const routesLogin = require('./routes/loginRoute');
const cartAdd = require('./routes/cartRoutes');
const getCart = require('./routes/getcartRoutes');
const getProducts = require('./routes/productRoutes');
const deleteCart = require('./routes/deleteRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');



// Routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', cors(), routesRegister); // Enable CORS for all routes
app.use('/', cors(), routesLogin); // Enable CORS for all routes
app.use('/', cors(), cartAdd);
app.use('/api/delete', cors(), deleteCart);
app.use('/api/cart', cors(), getCart);
app.use('/api', cors(), getProducts);
// app.get('/products', cors(), (req, res) => {
//   return res.json(products);
// })


app.listen(3000, function () {
  console.log("SERVER IS RUNNING");
})
