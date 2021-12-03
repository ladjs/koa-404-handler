// eslint-disable-next-line node/no-unsupported-features/es-syntax
const koa404Handler = async (ctx, next) => {
  try {
    await next();
    if (ctx.status === 404) ctx.throw(404);
  } catch (error) {
    ctx.throw(error);
  }
};

module.exports = koa404Handler;
