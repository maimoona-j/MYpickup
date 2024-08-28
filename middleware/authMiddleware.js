// // middleware/authMiddleware.js
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');  

// const authMiddleware = async (req, res, next) => {
//   const token = req.header('Authorization')?.replace('Bearer ', '');

// console.log(token,"token");

//   if (!token) {
//     return res.status(401).json({ error: 'No token provided' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);  
//     const user = await User.findById(decoded.id);

//     if (!user) {
//       throw new Error('User not found');
//     }

//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(401).json({ error: 'Invalid token' });
//   }
// };

// module.exports = authMiddleware;


//
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Invalid token' });
  }
};

module.exports = authMiddleware;
