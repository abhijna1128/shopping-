const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  rating: Number,
  image: String,
});

module.exports = mongoose.model('Product', productSchema);