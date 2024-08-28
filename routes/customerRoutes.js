// // routes/customerRoutes.js
// const express = require('express');
// const router = express.Router();
// const Customer = require('../models/Customer');
// const authMiddleware = require('../middleware/authMiddleware'); // Middleware to check if the user is authenticated

// // Create a new customer
// router.post('/api/customers/create', authMiddleware, async (req, res) => {
//   const { name, date, amount, description } = req.body;
//   const userId = req.user.id; // Assuming req.user.id is set by authMiddleware
//   console.log("Received request to create customer:", req.body);
//   try {
//     const newCustomer = new Customer({ name, date, amount, description, userId });
//     await newCustomer.save();
//     res.status(201).json({ message: 'Customer created successfully', customer: newCustomer });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// module.exports = router;


// 


// // routes/customerRoutes.js
// const express = require('express');
// const router = express.Router();
// const Customer = require('../models/Customer');
// const authMiddleware = require('../middleware/authMiddleware');

// // Create a new customer
// router.post('/create', authMiddleware, async (req, res) => {
//   const { name, date, amount, description } = req.body;
//   const userId = req.user.id; // Ensure req.user.id is set

//   if (!userId) {
//     return res.status(400).json({ error: 'User ID is required' });
//   }

//   console.log("Received request to create customer:", req.body);

//   try {
//     const newCustomer = new Customer({ name, date, amount, description, userId });
//     await newCustomer.save();
//     res.status(201).json({ message: 'Customer created successfully', customer: newCustomer });
//   } catch (error) {
//     console.error("Error creating customer:", error);
//     res.status(400).json({ error: error.message });
//   }
// });

// module.exports = router;


// 


const express = require('express');
const { createCustomer } = require('../controllers/customerController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Create a new customer
router.post('/create', authMiddleware, createCustomer);

module.exports = router;
