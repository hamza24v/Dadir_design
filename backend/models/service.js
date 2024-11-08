const mongoose = require('mongoose');

const variationSchema = new mongoose.Schema({
  oldPrice: { type: Number, required: true },
  newPrice: { type: Number, required: true },
  priceId: { type: String, required: false}
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
  services: {
    type: [String],
    required: true
  },
  newPrice: {
    type: Number,
    required: false
  },
  oldPrice: {
    type: Number,
    required: false
  },
  priceId: {
    type: String,
    required: false
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