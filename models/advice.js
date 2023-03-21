const mongoose = require('mongoose');

const adviceSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['health', 'relationship', 'career', 'lifestyle', 'religion'],
    required: true
  },
});

const Advice = mongoose.model('Advice', adviceSchema);

module.exports = Advice;