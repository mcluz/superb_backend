const health = require('./health');
const tables = require('./tables');
const config = require('./config');
const booking = require('./booking');

function registerRoutes(app) {
    health(app);
    tables(app);
    config(app);
    booking(app);
}

module.exports = registerRoutes;