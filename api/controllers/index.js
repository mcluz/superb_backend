const HealthController = require('./HealthController');
const TableController = require('./TableController');
const ConfigController = require('./ConfigController');
const BookingController = require('./BookingController');

const healthController = new HealthController();
const tableController = new TableController();
const configController = new ConfigController();
const bookingController = new BookingController();

module.exports = { healthController, tableController, configController, bookingController};
