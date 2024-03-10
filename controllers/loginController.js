const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const LoginUser = require('../models/loginUser');
const config = require('./config');
const secretKey = config.secretKey;
exports.loginUser = (req, res) => {
  const { email, password, userId } = req.body;
  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  // Find the user by email
  User.findOne({ email })
    .then(user => {
      // If no user is found, return a 404 status with an error message
      if (!user) {
        return res.status(404).json({ message: 'User not found. Please register first.' });
      }

      // Check if password is correct
      bcrypt.compare(password, user.password)
        .then(isPasswordValid => {
          if (!isPasswordValid) {
            // If the password is incorrect, return a 400 status with an error message
            return res.status(400).json({ message: 'Invalid credentials Password does not match' });
          }

          // Generate JWT token

          const token = jwt.sign({ userId: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
          console.log(secretKey, 'loginSecretKey',);
          // Create a new user instance
          // Create a new user instance
          userLogin = new LoginUser({ token, email, userId: user.id, password , username: user.username });

          // Save the user to the database
          userLogin.save();
          // Respond with token and user data
          res.json({ token, userId: user.id,   secretKey, username: user.username, message: 'User Login Successfully' });


        })
        .catch(err => {
          console.error(err);
          res.status(500).json({ message: 'Server Error' });
        });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    });

  // Matches Secret Key //

};