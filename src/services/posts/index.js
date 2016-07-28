const Service = require('../base-service');
const Model = require('./model');

module.exports = function () {
  const app = this;

  app.service('/posts', new Service({ Model }));
};
