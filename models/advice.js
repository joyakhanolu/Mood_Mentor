const mongoose = require('mongoose');

const adviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
});

const Advice = mongoose.model('Advice', adviceSchema);

module.exports = Advice;