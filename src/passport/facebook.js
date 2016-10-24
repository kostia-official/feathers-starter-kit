const FacebookStrategy = require('passport-facebook').Strategy;
const { facebook } = require('../helpers/config');
const { id, secret } = facebook;
const User = require('../services/users/model');

module.exports = new FacebookStrategy(
  {
    clientID: id,
    clientSecret: secret,
    callbackURL: '/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'email']
  }, async(accessToken, refreshToken, profile, done) => {
    const facebookUser = profile._json;

    const user = await User.findOne({ 'facebook.id': facebookUser.id });
    if (user) return done(null, user);

    const newUser = await User.create({
      email: facebookUser.email,
      name: facebookUser.name,
      facebook: { id: facebookUser.id, token: accessToken }
    });

    return done(null, newUser);
  }
);
