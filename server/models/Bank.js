const mongoose = require('mongoose');

const BankSchema = new mongoose.Schema({
  name: { type: String },
  chair: { type: String },
  members: { type: Array },
  transactions: { type: Array },
});

const Bank = mongoose.model('Banks', BankSchema);

module.exports = Bank;
