const FacebookStrategy = require('passport-facebook').Strategy;
const { facebook } = require('../helpers/config');
const { id, secret } = facebook;
const User = require('../services/users/model');
const _ = require('lodash');

module.exports = new FacebookStrategy(
  {
    clientID: id,
    clientSecret: secret,
    callbackURL: '/auth/facebook/callback',
    profileFields: [
      'id', 'first_name', 'displayName', 'last_name', 'email',
      'gender', 'birthday', 'location{location}', 'link'
    ]
  }, async(accessToken, refreshToken, profile, done) => {
    try {
      const facebookUser = profile._json;

      const userData = {
        first_name: facebookUser.first_name,
        last_name: facebookUser.last_name,
        email: facebookUser.email,
        gender: facebookUser.gender,
        birthday: facebookUser.birthday,
        city: _.get(facebookUser, 'location.location.city'),
        country: _.get(facebookUser, 'location.location.country'),
        profile_url: facebookUser.link
      };

      return done(null, {
        email: facebookUser.email,
        name: facebookUser.name,
        facebook: { id: facebookUser.id, ...userData, token: accessToken }
      });
    } catch (err) {
      return done(err);
    }
  }
);
