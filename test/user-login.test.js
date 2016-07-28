const { app, request } = require('./test-env.js');
const test = require('ava');

const email = 'jt@gamil.com';
const password = '111111';

test('login user', async t => {
  const user = await app.service('users').create({ email, password });
  t.truthy(user.id);

  const res = (await request.post('/auth/local').send({ email, password }));
  t.truthy(res.body.token);
});
