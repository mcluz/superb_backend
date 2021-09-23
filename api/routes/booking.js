const Router = require('@koa/router');
const { bookingController } = require('../controllers');

function register(app) {
  const router = new Router({
    prefix: '/booking',
  });

  router.get('/', bookingController.list.bind(bookingController));
  router.post('/', bookingController.create.bind(bookingController));  
  router.delete('/:id', bookingController.remove.bind(bookingController));  

  app
    .use(router.routes())
    .use(router.allowedMethods());
}

module.exports = register;