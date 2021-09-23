const mongoose = require('mongoose');

const Config = mongoose.model('config', {
  name: String,
  open: Number,
  close: Number
});

module.exports = Config;
