const passport = require('passport');
const _ = require('lodash');
const fb = require('fb');
const User = require('../../services/users/model');

module.exports = function () {
  const app = this;

  app.get('/auth/facebook', passport.authenticate('facebook', {
    scope: ['email', 'user_location', 'user_likes', 'manage_pages']
  }));
  app.get('/auth/facebook/callback', passport.authenticate('facebook'), (req, res) => res.redirect('/'));

  app.get('/', (req, res) => {
    let facebookUser = _.get(req, 'user.facebook');
    if (!facebookUser) return res.render('index', { user: null });

    fb.setAccessToken(facebookUser.token);
    facebookUser = _.omit(facebookUser, ['token']);

    fb.api('me/likes/230408830453098', (a) => {
      return res.render('index', { liked: !_.isEmpty(a.data), user: facebookUser });
    });
  });
};
