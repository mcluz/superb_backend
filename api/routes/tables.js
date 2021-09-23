const Router = require('@koa/router');
const { tableController } = require('../controllers');

function register(app) {
  const router = new Router({
    prefix: '/tables',
  });

  router.get('/list', tableController.list.bind(tableController));
  router.post('/add', tableController.create.bind(tableController));
  router.post('/remove/:id', tableController.remove.bind(tableController));

  app
    .use(router.routes())
    .use(router.allowedMethods());
}

module.exports = register;
