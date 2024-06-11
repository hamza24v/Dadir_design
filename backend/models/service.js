const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  serviceType: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  newPrice: {
    type: Number,
    required: true
  },
  oldPrice: {
    type: Number,
    required: true
  },
  include: {
    type: [String],
    required: false
  },
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Service', serviceSchema);