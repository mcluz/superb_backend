const mongoose = require('mongoose');

const Booking = mongoose.model('booking', {
  name: String,
  mail: String,
  guests: Number,
  date: String,
  time: Number
});

module.exports = Booking;
