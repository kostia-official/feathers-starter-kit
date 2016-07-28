const mongoose = require('mongoose');
const config = require('getconfig');
const serverStatus = require('../helpers/server-status');

const users = require('./users');
const posts = require('./posts');

module.exports = function () {
  const app = this;

  mongoose.connect(config.db.url);
  mongoose.Promise = global.Promise;

  app.configure(users);
  app.configure(posts);

  app.service('/', { find: serverStatus });
};
