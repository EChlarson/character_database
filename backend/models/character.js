// backend/models/Character.js
const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 0 },
  occupation: { type: String, required: true },
  personality: { type: [String], required: true },
  source: { type: String, required: true },
});

module.exports = mongoose.model('Character', characterSchema);