// // models/Customer.js
// const mongoose = require('mongoose');

// const customerSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   date: { type: Date, required: true },
//   amount: { type: Number, required: true },
//   description: { type: String, required: false },
//   // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
// });

// const Customer = mongoose.model('Customer', customerSchema);

// module.exports = Customer;


// // module.exports = mongoose.model('Customer', customerSchema);


// 


const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  amount: { type: String, required: true },
  description: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Link customer to a user
});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
