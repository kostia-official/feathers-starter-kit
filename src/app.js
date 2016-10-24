const feathers = require('feathers');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const socketio = require('feathers-socketio');
const bodyParser = require('body-parser');
const middleware = require('./middleware');
const services = require('./services');
const authStrategies = require('./passport');
const passport = require('passport');
const session = require('express-session');
const authentication = require('feathers-authentication');

const app = feathers();

app
  .configure(rest())
  .configure(hooks())
  .configure(socketio())
  .set('views', __dirname + '/views')
  .set('view engine', 'ejs')
  .use(session({ secret: 'banana', key: 'sid' }))
  .use(passport.initialize())
  .use(passport.session())
  .use(feathers.static(__dirname + '/public'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .configure(authentication())
  .configure(authStrategies)
  .configure(services)
  .configure(middleware);

module.exports = app;
