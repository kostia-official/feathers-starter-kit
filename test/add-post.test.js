const { app, request } = require('./test-env.js');
const test = require('ava');
const Post = require('../src/services/posts/model');

const message = 'Hello';

test('db', async t => {
  const post = await Post.create({ message });
  t.truthy(post.id);
  t.is(post.message, message);
});

test('feathers service', async t => {
  const post = await app.service('posts').create({ message });
  t.truthy(post.id);
  t.is(post.message, message);
});

test('supertest', t => {
  return request
    .post('/posts')
    .send({ message })
    .expect(201)
    .expect(({ body }) => {
      t.is(body.message, message);
    });
});
