const passport = require('passport');
const facebook = require('./facebook');

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

module.exports = function () {
  passport.use(facebook);
};
