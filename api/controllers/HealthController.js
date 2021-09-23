class HealthController {
  // eslint-disable-next-line class-methods-use-this
  index(ctx) {
    ctx.body = {
      ok: true,
    };
  }
}

module.exports = HealthController;
