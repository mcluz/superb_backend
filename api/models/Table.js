const mongoose = require('mongoose');

const Table = mongoose.model('tables', {
  label: String
});

module.exports = Table;
