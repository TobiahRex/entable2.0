const mongoose = require('mongoose');

const BankSchema = new mongoose.Schema({
  name: { type: String },
  chair: { type: String },
  members: { type: Array },
  transactions: { type: Array },
  //received: { type: Date, default: Date.now },
});

const Bank = mongoose.model('banks', BankSchema);

module.exports = Bank;
