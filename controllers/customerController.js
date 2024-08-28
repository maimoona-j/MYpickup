const Customer = require('../models/Customer');

// Create a new customer
const createCustomer = async (req, res) => {
  const { name, date, amount, description } = req.body;
  const userId = req.user.id;

  try {
    const newCustomer = new Customer({ name, date, amount, description, userId });
    await newCustomer.save();
    res.status(201).json({ message: 'Customer created successfully', customer: newCustomer });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createCustomer,
};
