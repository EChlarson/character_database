// backend/models/Character.js
const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: String,
  age: Number,
  occupation: String,
  personality: [String],
  source: String,
});

module.exports = mongoose.model('Character', characterSchema);