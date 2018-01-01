const Koa = require('koa');
const Router = require('koa-router');
const Boom = require('boom');
const test = require('ava');
const request = require('supertest');
const koa404Handler = require('../lib');

const ok = ctx => {
  ctx.status = 200;
  ctx.body = { ok: 'ok' };
};

const error = () => {
  throw new Error('Big Bad Error!');
};

test('returns a function', t => {
  t.true(typeof koa404Handler === 'function');
});

test.failing('middleware can be added to the app at any stage', async t => {
  const app = new Koa();
  const router = new Router();

  router.get('/', ok);

  // Mount the app's defined and nested routes
  app.use(router.routes());

  // Options method
  app.use(
    router.allowedMethods({
      throw: true,
      notImplemented: () => new Boom.notImplemented(), // eslint-disable-line new-cap,max-len
      methodNotAllowed: () => new Boom.methodNotAllowed() // eslint-disable-line new-cap,max-len
    })
  );

  // 404 handler
  app.use(koa404Handler);

  const res = await request(app.listen()).options('/');

  t.is(200, res.status);
  t.is(res.body.ok, 'ok');
});

test('emits error on app instance', async t => {
  const app = new Koa();
  const router = new Router();

  router.get('/', error);

  // Mount the app's defined and nested routes
  app.use(router.routes());

  // 404 handler
  app.use(koa404Handler);

  app.on('error', error => {
    t.truthy(error);
    t.is(error.message, 'Big Bad Error!');
  });

  await request(app.listen()).get('/');
});
