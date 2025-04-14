const mongoose = require('mongoose');

const designSchema = new mongoose.Schema({
  shape: String,
  color: String,
  length: String,
  user: String, 
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Design', designSchema);
