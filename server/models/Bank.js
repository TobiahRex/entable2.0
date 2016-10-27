const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  country: { type: String, required: true },
  currency: { type: String, default: 'NGN' },
  chair: {
    name: { type: String },
  },
  members: [{
    name: { type: String },
  }],
  transactions: [
    {
      txids: {
        coinbase: { type: String },
        bitpesa: { type: String },
      },
      date: { type: Date, default: Date.now },
      ammount: { type: Number },
      verified: { type: Boolean, default: false },
    },
  ],
});

const Bank = mongoose.model('Bank', bankSchema);

module.exports = Bank;
