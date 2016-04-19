/*jshint node:true*/

// To use it create some files under `server/mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };

var isDisabled = require('ember-cli-testem-http-mocks/lib/is-disabled');

module.exports = function(app) {
  if (isDisabled()) { return; }

  var globSync = require('glob').sync;
  var mocks = globSync('./server/mocks/**/*.js', { cwd: __dirname }).map(require);

  mocks.forEach(function(route) { route(app); });
};
