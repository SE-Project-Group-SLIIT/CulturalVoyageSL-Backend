const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  MobileNumber: {
    type: String,
    maxlength: 10,
    required: true,
  },
  Location: {
    type: String,
  },
  Bio: {
    type: String,
  },
});

module.exports = mongoose.model('User', userSchema);
