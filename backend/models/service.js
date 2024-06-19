const mongoose = require('mongoose');

const variationSchema = new mongoose.Schema({
  oldPrice: { type: Number, required: true },
  newPrice: { type: Number, required: true }
}, { _id: false });

const serviceSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  serviceType: {
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
  variations: {
    type: Map,
    of: variationSchema,
    required: false
  },
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Service', serviceSchema);