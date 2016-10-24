const mongoose = require('mongoose');
const config = require('../helpers/config');

const users = require('./users');
const posts = require('./posts');
const auth = require('./auth');

module.exports = function () {
  const app = this;

  mongoose.connect(config.db.url);
  mongoose.Promise = global.Promise;

  app.configure(users);
  app.configure(posts);
  app.configure(auth);

  app.get('/', (req, res) => {
    res.render('index', { user: req.user });
  });
};
