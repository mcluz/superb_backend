const Router = require('@koa/router');
const { healthController } = require('../controllers');

function register(app) {
  const router = new Router({
    prefix: '/health',
  });

  router.get('/', healthController.index.bind(healthController));

  app
    .use(router.routes())
    .use(router.allowedMethods());
}

module.exports = register;
