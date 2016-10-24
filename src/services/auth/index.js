const passport = require('passport');

module.exports = function () {
  const app = this;

  app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['manage_pages'] }));
  app.get('/auth/facebook/callback', passport.authenticate('facebook'), (req, res) => res.redirect('/'));
};
