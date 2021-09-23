const mongoose = require('mongoose');

function connect() {
  //mongoose.connect('mongodb://admin:admin@localhost:27017/superb?authSource=admin&readPreference=primary&ssl=false');
  mongoose.connect(process.env.MONGO_DATABASE);
}

module.exports = connect;
