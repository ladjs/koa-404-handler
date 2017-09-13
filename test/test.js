const test = require('ava');

const koa404Handler = require('../');

test('returns a function', t => {
  t.true(typeof koa404Handler === 'function');
});
