const Router = require('@koa/router');
const { configController } = require('../controllers');

function register(app) {
  const router = new Router({
    prefix: '/config',
  });
  
  router.post('/timerange', configController.setTimeRange.bind(configController));
  router.get('/timerange', configController.getTimeRange.bind(configController));
  

  app
    .use(router.routes())
    .use(router.allowedMethods());
}

module.exports = register;