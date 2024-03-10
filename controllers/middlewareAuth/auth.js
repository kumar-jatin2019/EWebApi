const jwt = require('jsonwebtoken');
const config = require('../config');
const secretKey = config.secretKey;
const authenticateUser = (req, res, next) => {
   const token = req.headers['authorization'];
   if (!token) {
       return res.status(403).json({ message: 'Token is required' });
   }
   jwt.verify(token.split(' ')[1], secretKey, (err, decoded) => {
       if (err) {
           return res.status(401).json({ message: 'Failed to authenticate token' });
       }
       req.userId = decoded.userId;
       next();
   });
};

module.exports = authenticateUser;