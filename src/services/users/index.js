const Service = require('../base-service');
const auth = require('feathers-authentication').hooks;
const usersModel = require('./model');
const postsModel = require('../posts/model');
const nestedService = require('../../hooks/nested-service');

module.exports = function () {
  const app = this;

  app
    .service('/users', new Service({ Model: usersModel }))
    .before({
      create: auth.hashPassword({ passwordField: 'password' })
    });

  app.service('/users/:userId/posts', new Service({ Model: postsModel }))
    .before({
      all: nestedService({ fk: 'recipientId' })
    });

};
