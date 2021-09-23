const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const registerRoutes = require('./routes');

function createHttpServer(port) {  
  const app = new Koa();
  app.use(cors());
  app.use(bodyParser());
  registerRoutes(app);
  return app.listen(port);
}

module.exports = createHttpServer;
