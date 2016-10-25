const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
  name: { type: String },
  chair: { type: String },
  members: { type: Array },
  transactions: { type: Array },
});

const Bank = mongoose.model('Bank', bankSchema);

module.exports = Bank;
