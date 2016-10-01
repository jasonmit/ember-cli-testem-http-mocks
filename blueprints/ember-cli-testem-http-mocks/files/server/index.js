/*jshint node:true*/

var mocksAddon = require('ember-cli-testem-http-mocks');
var globSync = require('glob').sync;

// To use it create some files under `mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };
function setupMocks(app) {
  if (mocksAddon.isDisabled()) { return; }

  var mocks = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);

  mocks.forEach(function(route) { route(app); });
}

module.exports = function(app) {
  var proxies = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);

  // Log proxy requests
  var morgan = require('morgan');
  app.use(morgan('dev'));

  setupMocks(app);
  proxies.forEach(function(route) { route(app); });
};

module.exports.setupMocks = setupMocks;
